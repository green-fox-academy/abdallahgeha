'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let number: number = 5;
let average: number=0, sum:number =0;

for (let i: number = 1; i<=5; i++){
    sum = sum + i;
}
average = sum/number;
console.log('Sum: '+sum);
console.log('Average '+average);
