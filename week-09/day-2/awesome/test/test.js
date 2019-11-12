'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it
  request(app)
    .get('/awesome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let output = [
        { 'author': "Blue Swede", 'title': "Hooked On a Feeling", 'genre': "Pop", 'year': 1968, 'rating': 4.1 },
        { 'author': "Jackson 5", 'title': "I Want You Back", 'genre': "Pop", 'year': 1969, 'rating': 5.0 },
        { 'author': "The Runaways", 'title': "Cherry Bomb", 'genre': "Rock", 'year': 1976, 'rating': 4.6 },
        { 'author': "Electric Light Orchestra", 'title': "Mr. Blue Sky", 'genre': "Rock", 'year': 1977, 'rating': 4.9 },
        { 'author': "Fleetwood Mac", 'title': "The Chain", 'genre': "Rock", 'year': 1977, 'rating': 3.9 },
        { 'author': "Alla Pugacheva", 'title': "Million Roses", 'genre': "Pop", 'year': 1983, 'rating': 2.0 },
      ]
      t.error(err, 'No error');
      t.deepEqual(res.body, output, 'correct output');
      t.end();
    })
})

