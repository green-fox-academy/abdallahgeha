'use strict';
import * as test from 'tape';
import { sum, Car } from "./Sum"

test('sum of numbers', t => {
  const actual = sum([1,2,3]);  // the function on the values tested
  const expected = 6;           // The expected value 

  t.equal(actual, expected);
  t.end();
});


let car = new Car('bobo')

test('carName', t => {
  const actual = car.carname
  const expected = 'bobo';           // The expected value 

  t.equal(actual, expected);
  t.end();
});