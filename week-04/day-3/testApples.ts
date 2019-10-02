import * as test from 'tape';
import { Apple  } from './Apples';

let redApple = new Apple ;

test('returnApple', t => {
    const actual = redApple.getApple();
    const expected = 'apple';

    t.equal(actual , expected);
    t.end();
});


