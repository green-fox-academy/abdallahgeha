const test = require('tape');
const basket = require('./potter');

const shopList = [
  { name: 'The Philosopher\'s Stone', amount: 2 },
  { name: 'The Chamber of Secrets', amount: 2 },
  { name: 'The Prisoner of Azkaban', amount: 2 },
  { name: 'The Goblet of Fire', amount: 0 },
  { name: 'The Order of the Phoenix', amount: 1 },
];

test('test 1', (t) => {
  const actual = basket(shopList);
  const expected = 47.2;

  t.equal(actual, expected);
  t.end();
});
