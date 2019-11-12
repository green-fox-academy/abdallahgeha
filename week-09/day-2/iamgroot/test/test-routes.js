'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it
  request(app)
    .get('/groot?message=booo')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let output = {
        "received": 'booo',
        "translated": "I am Groot!"
      }
      t.error(err, 'No error');
      t.deepEqual(res.body, output, 'correct output');
      t.end();
    })
})

