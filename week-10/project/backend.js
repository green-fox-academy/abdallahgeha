const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//LISTEN to PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
}); 

let playlists = [
  { "id": 1, "title": "Favorites", "system": 1 },
  { "id": 2, "title": "Music for programming", "system": 0 },
  { "id": 3, "title": "Driving", "system": 0 },
  { "id": 5, "title": "Fox house", "system": 0 },
]

app.get('/playlists', function (req, res) {
  res.send(playlists);
});