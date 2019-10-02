import { Animal  } from "../../week-03/day-3/Animal"

import * as test from 'tape';


let animal1 = new Animal(50,50)
animal1.eat()
animal1.drink()

test('returnApple', t => {
    const actual = animal1.howHungry
    const expected = 49
    t.equal(actual, expected);
    t.end();
});

test('returnApple', t => {
    const actual = animal1.howThirsty
    const expected = 49
    t.equal(actual, expected);
    t.end();
});
