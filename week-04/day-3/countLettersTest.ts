import * as test from 'tape';
import { countLetters } from './Count Letters';


let word: string = 'abbba'
test('returnApple', t => {
    const actual = JSON.stringify(countLetters(word));      // turning the object into a string to check it using JSON.stringify
    const expected = JSON.stringify({a: 2 , b: 3});
   // console.log(JSON.stringify({a: 2 , b: 3}))
    t.equal(actual, expected);
    t.end();
});

