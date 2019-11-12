const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
let deleted = [];
let mixList = [
  { "id": 1, 'author': "Blue Swede", 'title': "Hooked On a Feeling", 'genre': "Pop", 'year': 1968, 'rating': 4.1 },
  { "id": 2, 'author': "Jackson 5", 'title': "I Want You Back", 'genre': "Pop", 'year': 1969, 'rating': 5.0 },
  { "id": 3, 'author': "The Runaways", 'title': "Cherry Bomb", 'genre': "Rock", 'year': 1976, 'rating': 4.6 },
  { "id": 4, 'author': "Electric Light Orchestra", 'title': "Mr. Blue Sky", 'genre': "Rock", 'year': 1977, 'rating': 4.9 },
  { "id": 5, 'author': "Fleetwood Mac", 'title': "The Chain", 'genre': "Rock", 'year': 1977, 'rating': 3.9 },
  { "id": 6, 'author': "Alla Pugacheva", 'title': "Million Roses", 'genre': "Pop", 'year': 1983, 'rating': 2.0 },
];

app.get('/awesome', (req, res) => {
  //Send all the Songs in the mixList
  let output = mixList;
  res.send(output);
});
app.post('/add', (req, res) => {
  //Add Song
  let newSong = req.body;
  let maxID = Math.max.apply(Math, mixList.map(function (o) { return o.id; }));
  newSong.id = maxID + 1;
  mixList.push(newSong);
  let output = newSong;
  res.send(output);
});

app.delete('/delete/:id', (req, res) => {
  //Delete Song
  let id = req.params.id;
  let index = mixList.map((x) => x.id).indexOf(parseInt(id))
  let output = mixList.splice(index, 1)
  deleted.push(output);
  res.send(output);
});

app.put('/rating/:id', (req, res) => {
  //change Rating
  let id = req.params.id;
  let index = mixList.map((x) => x.id).indexOf(parseInt(id))
  mixList[index].rating = req.query.rating
  output = mixList[index]
  res.send(output);
});

module.exports = app;