import * as test from 'tape';
import { anagram } from './Anagram';


let word1: string = 'ababa'
let word2: string = 'baaab'
test('returnApple', t => {
    const actual = anagram(word1, word2);
    const expected = true;

    t.equal(actual, expected);
    t.end();
});