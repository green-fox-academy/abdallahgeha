'use strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let summed: number = 3
function sum(sumN: number): number {
    let i: number;
    let Sum: number = 0;
    for (i = 0; i <= sumN; i++){
        Sum = Sum + sumN - i ;
    }
    return Sum;
}
console.log(sum(summed));
