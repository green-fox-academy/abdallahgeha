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

app.get('/posts', (req, res) => {

});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});