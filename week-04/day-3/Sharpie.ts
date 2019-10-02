import { Sharpie } from "../../week-03/day-3/Sharpie"

import * as test from 'tape';


let sharpie1 = new Sharpie('red',20)
sharpie1.use()

test('returnApple', t => {
    const actual = sharpie1.inkLeft
    const expected = 99
    t.equal(actual, expected);
    t.end();
});



