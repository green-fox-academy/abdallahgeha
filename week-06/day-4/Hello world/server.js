const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
  res.send('This is me');
});



console.log(PORT);

app.listen(PORT);
