const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use('/static', express.static('static'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'foxPlayer',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', function (req, res) {
  conn.query('SELECT * FROM playlists;', function (err, row) {
    res.setHeader('Content-Type', 'application/json');
    res.send(row);
  });
});

app.post('/playlists', function (req, res) {
  let newPlaylist = req.body.title
  conn.query("CREATE TABLE ? (`id` INT unsigned NOT NULL AUTO_INCREMENT,`title` VARCHAR(255) NOT NULL,`artist` VARCHAR(255) NOT NULL,`duration` FLOAT unsigned NOT NULL,`path` VARCHAR(255) NOT NULL,PRIMARY KEY (`id`));", [newPlaylist], function (err, rows) {
    conn.query('INSERT INTO playlists VALUES(null , ? , default)  ', [newPlaylist], function (err, newRow) {
      conn.query('SELECT * FROM playlists;', function (err, playlists) {
        res.send(playlists);
      });
    });
  });
  // push the new plalist into the database
  /*
  
  */
  // should create new table for the playlist
  res.send(playlists);
});


app.delete('playlists/:id', function (req, res) {
  let playlistId = req.params.id;
  conn.query('DELETE FROM playlists WHERE id = ?;', [playlistId], function (err, playlists) {
    res.send(playlists);
  });
  // delete playlist from database
  // if (system == 1){
  //   cannot delete
  // }
  // delete table for this playlist
  res.send(playlists);
});



app.get('/playlist-tracks/', function (req, res) {
    // return all the tracks
    conn.query('SELECT * FROM tracks;', function (err, songs) {
      res.send(songs);
    });
});


app.post('/playlist-tracks/:playlist_id', function (req, res) {
  let playlistId = req.params.playlist_id;
  let addedSong = req.body;
  res.send(tracks);
});

app.delete('/playlist-tracks/:playlist_id/:track_id', function (req, res) {
  let playlistId = req.params.playlist_id;
  let songId = req.params.track_id
  let addedSong = req.body;
  res.send(tracks);
});

//LISTEN to PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
}); 
