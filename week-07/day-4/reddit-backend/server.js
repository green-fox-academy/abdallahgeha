const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
var bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
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

let output = {}
let currentUser = 'KRISTOFOS'

app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    output = { "posts": rows }
    res.send(output);
  });
});


app.post('/posts', jsonParser, (req, res) => {
  let response = req.body;
  let sqlQuery = ("INSERT INTO posts VALUES(null,'" + req.body.title + "','" + req.body.url + "','" + Date.now() + "',1,'" + currentUser + "',1);");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    conn.query('SELECT * FROM posts WHERE id = ?;', [rows.insertId], function (err, newRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });


})

app.put('/posts/:id/upvote', (req, res) => {
  let sqlQuery = ("UPDATE posts SET score = score + 1 WHERE id = "+ req.params.id+";");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, newRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });

})

app.put('/posts/:id/downvote', (req, res) => {
  let sqlQuery = ("UPDATE posts SET score = score - 1 WHERE id = "+ req.params.id+";");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    conn.query('SELECT * FROM posts WHERE id = ?;', [req.params.id], function (err, newRow) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        res.send();
        return;
      }
      res.setHeader("Content-type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Username", "username");        // should be changable username
      res.status(200);
      // output = { "posts": rows }
      output = { "posts": newRow }
      res.send(output);
    });

  });
})

app.delete('/posts/:id', (req, res) => {
  let sqlQuery = ("DELETE FROM posts WHERE id = "+ req.params.id+" ;");
  conn.query(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      res.send();
      return;
    }
    res.setHeader("Content-type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Username", "username");        // should be changable username
    res.status(200);
    res.send();
  });

})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

