'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// Example
//console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

let a: number[] = [1, 11, 34, 52, 61];
let b: number = 1;
let indices: number[] = [];

function subint(arr1, arr2) {
    let j: number = 0;
    for (let i = 0; i < arr2.length; i++) {
        let temp: number = 0;
        if (arr2[i] <= 9) {

            temp = arr2[i];
        } else {
            temp = Math.floor(arr2[i] / 10)
        }
        if ((temp - arr1) == 0 || (arr2[i]%10) == arr1) {             // fix the condition

            indices[j] = arr2.indexOf(arr2[i]);
            j++;
        }
    }

return indices
}
console.log(subint(b, a));