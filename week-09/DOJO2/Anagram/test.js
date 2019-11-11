const test = require('tape');
const isAnagram = require('./anagram');


test('test 1', (t) => {
  const actual = isAnagram('silent', 'listen');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('test 2', (t) => {
  const actual = isAnagram('silent', 'door');
  const expected = false;

  t.equal(actual, expected);
  t.end();
});
