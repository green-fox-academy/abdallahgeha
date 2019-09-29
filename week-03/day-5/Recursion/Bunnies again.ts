'use strict';

function bunnyEarsAgain(number: number) {
    if (number == 1) {
        return 2
    } else {
        if (number % 2 == 0) {
            return 3 + bunnyEarsAgain(number - 1)
        } else {
            return 2 + bunnyEarsAgain(number - 1)
        }
    }
}

console.log(bunnyEarsAgain(6))