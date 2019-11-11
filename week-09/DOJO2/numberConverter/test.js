const test = require('tape');
const { convertNumber, convertWords } = require('./numberConverter');


test('test 1', (t) => {
  const actual = convertNumber(40);
  const expected = 'forty';

  t.equal(actual, expected);
  t.end();
});

test('test 2', (t) => {
  const actual = convertNumber(3);
  const expected = 'three';

  t.equal(actual, expected);
  t.end();
});

test('test 3', (t) => {
  const actual = convertWords('one hundred twenty four');
  const expected = 124;

  t.equal(actual, expected);
  t.end();
});
