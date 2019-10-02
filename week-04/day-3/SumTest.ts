import * as test from 'tape';
import { Summation } from './Sum';

let sumThis = new Summation;
//let a : number[] = [1,2,4,5,2,2,1,3]      // case 1
//let b : number[] = []                     // case 2
let c: number[] = [20]                     //case 3

console.log(sumThis.sum(c))
test('returnApple', t => {
    const actual = sumThis.sum(c);
    const expected = 20;

    t.equal(actual, expected);
    t.end();
});
