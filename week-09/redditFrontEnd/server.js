const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use('/static', express.static('static'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
var jsonParser = bodyParser.json()

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

let output = {};
let currentUser = 'KRISTOFOS';

//HOME PAGE
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//HELLO WORLD
app.get('/hello', function (req, res) {
  output = "Hello World!"
  res.send(output);
});

//SEE ALL POSTS
app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) { checkError(err); return; }
    setHeaders(res);
    output = { "posts": rows }
    
    res.send(output);
  });
});

//POST A POST
app.post('/posts', jsonParser, (req, res) => {
  conn.query("INSERT INTO posts VALUES(null,?,?,?,1,?,1);", [req.body.title, req.body.url, Date.now(), currentUser], function (err, rows) {
    if (err) { checkError(err); return; };
    conn.query('SELECT * FROM posts WHERE id = ?;', [rows.insertId], function (err, newRow) {
      if (err) { checkError(err); return; }
      setHeaders(res)
      output = { "posts": newRow };
      res.send(output);
    });
  });
})

//UPVOTE  DOWNVOTE
app.put('/posts/:id/:vote', (req, res) => {
  if (req.params.vote == 'upvote') {
    newQuery = "UPDATE posts SET score = score + 1 WHERE id = ?;"
  } else if (req.params.vote == 'downvote') {
    newQuery = "UPDATE posts SET score = score - 1 WHERE id = ?;"
  }
  conn.query(newQuery, [req.params.id], function (err, rows) {
    if (err) { checkError(err); return; }
    conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, newRow) {
      if (err) { checkError(err); return; }
      setHeaders(res);
      output = { "posts": newRow };
      res.send(output);
    });

  });
})

//DELETE
app.delete('/posts/:id', (req, res) => {
  conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, rows) {
    if (err) { checkError(err); return; };
    output = rows;
    setHeaders(res);
    res.send(output);
  });
  conn.query("DELETE FROM posts WHERE id = ? ;", [req.params.id], function (err, rows) {
    if (err) { checkError(err); return; };
  });
})



//LISTEN to PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function setHeaders(res) {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Accept", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*")
  // res.setHeader("Username", "username");        // should be changable username
  res.status(200);
}
function checkError(err) {
  console.log(err.toString());
  res.status(500).send('Database error');
  res.send();
}