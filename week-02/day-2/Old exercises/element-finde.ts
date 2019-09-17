'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers1: number[] = [1, 2, 3, 4, 5, 7, 8];
const numbers2: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven (list : number[]) {
    let find7 = list.some(function(e) {
    
       return e == 7;
        
    })

    if (find7 == true){
        return "Hoorray";
    }else{
        return "Noooooo";
    }
}

console.log(containsSeven(numbers1));
console.log(containsSeven(numbers2));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven(numbers1);