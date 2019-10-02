import * as test from 'tape';
import { Fibonacci } from './Fibonacci';


let digit : number = 10
test('returnApple', t => {
    const actual = Fibonacci(digit)
    const expected = 34
    t.equal(actual, expected);
    t.end();
});
