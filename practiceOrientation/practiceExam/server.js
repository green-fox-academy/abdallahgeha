const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use('/static', express.static('static'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json()

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'aliaser',
  multipleStatements: true
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


//HOME PAGE
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

let output = {};

app.post('/api/links', function (req, res) {
  let newUrl = req.body.url;
  let newAlias = req.body.alias;
  let secretCode = Math.floor(Math.random() * 10000);

  conn.query("INSERT INTO urlAliaser (url , alias , secretCode) VALUES(?,?,?);", [newUrl, newAlias, secretCode], function (err, rows) {
    if (err) { checkError(err); return; };
    conn.query('SELECT * FROM urlAliaser WHERE id = ?;', [rows.insertId], function (err, newRow) {
      if (err) { checkError(err); return; }
      res.send(newRow);
    });
  });
});

app.get('/a/:alias', function (req, res) {
  let alias = req.params.alias;
  conn.query(' UPDATE urlAliaser SET hitCount = hitCount + 1 WHERE alias = ?;', [alias], function (err, newRow) {
    conn.query('SELECT * FROM urlAliaser WHERE alias = ?; ', [alias], function (err, newRow) {
      if (err) { checkError(err); return; }
      console.log(newRow)
      res.redirect(newRow[0].url);
    });

  });
});

app.get('/api/links', function (req, res) {
  conn.query('SELECT id , url , alias , hitCount FROM urlAliaser', function (err, row) {
    if (err) { checkError(err); return; }
    res.send(row);
  });
});

app.delete('/api/links/:id', function (req, res) {
  let id = req.params.id;
  let sentSecretCode = req.body.secretCode;
  conn.query('SELECT * FROM urlAliaser WHERE id = ?' , [req.params.id] , function (err, row) {
    if (err) { checkError(err); return; }
    console.log(req.params.id)
    if(sentSecretCode == row[0].secretCode){
      conn.query('DELETE FROM urlAliaser WHERE id = ? ;',[req.params.id], function (err, row) {
      }); 
      res.send('deleted post with id :' + req.params.id)
    }else{
      res.send('incorrect code for ' + req.params.id)
    }
  });
});

//LISTEN to PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
}); 

