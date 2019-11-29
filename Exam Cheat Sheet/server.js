//------------------------------------------------------
// Setting up the requirements and dependencies --------
//------------------------------------------------------
const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = 3000;                                      // setting up the port and the listening PORT
//------------------------------------------------------
// The express setup --------------------------------------------
//------------------------------------------------------
const app = express();                                  // setting up the express app 
app.use('/static', express.static('static'));           // setting up the static folder 
app.use(express.json());                                // setting the body parser
app.use(bodyParser.urlencoded({ extended: false }));    // setting the body parser
//------------------------------------------------------
// connecting to the database --------------------------
//------------------------------------------------------
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'examDatabase',
});
//------------------------------------------------------
// Checking connection ---------------------------------
//------------------------------------------------------
conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
//------------------------------------------------------
// LISTEN to PORT --------------------------------------
//------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//------------------------------------------------------
// GET Request ----------------------------------------- 
//------------------------------------------------------
app.get('/', function (req, res) {
    //connect database and SELECT all rows
    res.send();
    res.sendFile();
    res.redirect();
});
//------------------------------------------------------
// POST Request ---------------------------------------- 
//------------------------------------------------------
app.post('/post/:id', function (req, res) {
    let body = req.body
    let query = req.query.queryname
    let params = req.params.id
    // handle invalid ID
    // Connect database and INSERT new row
    // send back Inserted row
    res.send(jsonObject);
});
//------------------------------------------------------
// DELETE Request --------------------------------------
//------------------------------------------------------
app.delete('/delete/:id', function (req, res) {
    // handle invalid ID 
    // connect to database and DELETE row
    // send back deleted row
    res.send(playlists);
});
//------------------------------------------------------
// PUT Request -----------------------------------------  
//------------------------------------------------------
app.put('/delete/:id', function (req, res) {
    // handle invalid ID 
    // connect to database and UPDATE row
    // send back deleted row
    res.send(playlists);
});
//------------------------------------------------------
// Recommendations -------------------------------------
//------------------------------------------------------
/*

    o       Don't forget the  [    ;    ]
    o       Remove unused Variables
    o       Clean up your Code
    o       Creat functions to reduce duplications
    o       Handle task errors
    o       Handle mysql errors
    o       Handle most of the expected errors

*/
//------------------------------------------------------
//------------------------------------------------------

//------------------------------------------------------
// mysql -----------------------------------------------
//------------------------------------------------------

//------------------------------------------------------
// Selecting all rows from table------------------------
//------------------------------------------------------
conn.query('SELECT * FROM playlists;', function (err, row) {
    res.setHeader('Content-Type', 'application/json');
    res.send(row);
});
//------------------------------------------------------
// Selecting specific columns from all rows from table--
//------------------------------------------------------
conn.query('SELECT FIRST_NAME, Last_name FROM playlists;', function (err, row) {
    res.setHeader('Content-Type', 'application/json');
    res.send(row);
});
//------------------------------------------------------
// Selecting row specific to an ID ---------------------
//------------------------------------------------------
conn.query('SELECT * playlists WHERE id = ?;', [specificID], function (err, row) {
    res.setHeader('Content-Type', 'application/json');
    res.send(row);
});
//------------------------------------------------------
// INSERTING a new Row ---------------------------------
//------------------------------------------------------
conn.query('INSERT INTO table VALUES (?, ?, ?);', [column1 , column2 , column3], function (err, row) {
});
//------------------------------------------------------
// Deleting a row --------------------------------------
//------------------------------------------------------
conn.query(' DELETE FROM absences WHERE student_id = ?;', [specificID], function (err, row) {
});
//------------------------------------------------------
// Updating  a row -------------------------------------
//------------------------------------------------------
conn.query('UPDATE scores SET score=? WHERE student_id=?;', [newScore,specificID], function (err, row) {
});
//------------------------------------------------------
// Other usefull queries in seperate file --------------
//------------------------------------------------------