const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')

const app = express();
const PORT = 8080

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }))

var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let inputNum = req.query.input
  let output = {}
  if (inputNum) {
    let outputNum = inputNum * 2
    output["received"] = inputNum
    output["result"] = outputNum
  } else {
    output["error"] = "Please provide an input!"
  }
  res.send(output);
});

app.get('/greeter', (req, res) => {
  let greetedName = req.query.name;
  let greetedTitle = req.query.title;
  let output = {};
  if (greetedName && greetedTitle) {
    output["welcome_message"] = 'Oh, hi there ' + greetedName + ', my dear ' + greetedTitle + '!'
  } else if (greetedName) {
    output["error"] = "Please provide a title!"
  } else if (greetedTitle) {
    output["error"] = "Please provide a name!"
  } else {
    output["error"] = "Please provide a name and a title!"
  }
  res.send(output);
});

app.get('/appenda/:appendable', (req, res) => {
  let append = req.params.appendable + 'a'
  let output = { "appended": append }
  res.send(output);
});

app.post('/dountil/:action', jsonParser, (req, res) => {
  let response = req.body;
  let number = response.until
  let output = {};
  let result;

  if (req.params.action == 'sum') {
    result = 0;
    for (let i = 0; i <= number; i++) {
      result += i
    }
    output["result"] = result
  } else if (req.params.action == 'factor') {
    result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i
    }
    output["result"] = result
  } else {
    output["error"] = "Please provide a number!"
  }
  res.send(output);
})

app.post('/arrays', jsonParser, (req, res) => {
  let response = req.body;
  let numbers = response.numbers
  let what = response.what
  let output = {};
  let result;
  if (numbers != undefined) {
    if (what == 'sum') {
      result = 0
      for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      output["result"] = result;
    } else if (what == 'multiply') {
      result = 1
      for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
      }
      output["result"] = result;
    } else if (what == 'double') {
      result = []
      for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
      }
      output["result"] = result;
    } else {
      output["error"] = "Please provide what to do with the numbers!"
    }
  } else {
    output["error"] = "Please provide what to do with the numbers!"
  }
  res.send(output);
})

app.post('/sith', jsonParser, (req, res) => {
  let response = req.body;
  let text = response.text
  let output = {};
  let result;

  if (req.body.text == undefined) {
    output["error"] = "Feed me some text you have to, padawan young you are. Hmmm."
  } else {
    let lines = text.split('.');
    let words = lines.map(e => e.split(' '));
    let wordsswapped = [];
    for (let i = 0; i < words.length; i++) {
      wordsswapped.push([]);
      for (let j = 0; j < words[i].length; j++) {
        if (j % 2 == 0) {
          if (words[i][j + 1] != undefined) {

            if (j == 0) {
              wordsswapped[i].push( words[i][j + 1].charAt(0).toUpperCase() + words[i][j + 1].slice(1).trim());
            } else {
              wordsswapped[i].push(words[i][j + 1].trim().toLowerCase());
            }

          }
        } else if (j % 2 != 0) {
          if (words[i][j - 1] != undefined) {
              wordsswapped[i].push(words[i][j - 1].trim().toLowerCase());
          }
        } else {

        }
      }
    }
    let ffff = wordsswapped.map(e => e.join(' '));
    let swappedText = ffff.join('. ');
    output["sith_text"] = swappedText;
    console.log(swappedText)
  }
  res.send(output);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

