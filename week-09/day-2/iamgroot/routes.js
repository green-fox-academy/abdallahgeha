const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let message = req.query.message
  let output = {}
  if (message) {
    output = {
      "received": message,
      "translated": "I am Groot!"
    }
  } else {
    output = {
      "error": "I am Groot!"
    }
  }
  res.send(output);
});

module.exports = app;