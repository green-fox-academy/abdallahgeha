'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


let a: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
console.log(a);
let b: number[] = []

function unique(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[i] == arr[j]) {

                arr.splice((i), 1);
                i--
            }
        }
    }

    return arr;
}

console.log(unique(a));