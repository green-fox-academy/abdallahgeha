const test = require('tape');
const indexOf = require('./dojo');


test('add 2 numbers', (t) => {
  const actual = indexOf([1, 2, 3, 4], 2);
  const expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('add 2 numbers', (t) => {
  const actual = indexOf([1, 2, 3, 4], 3);
  const expected = 2;

  t.equal(actual, expected);
  t.end();
});

test('add 2 numbers', (t) => {
  const actual = indexOf([1, 2, 3, 4], 5);
  const expected = -1;

  t.equal(actual, expected);
  t.end();
});
