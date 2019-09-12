'use strict';

let lineCount: number = 4;
let ast: string = '*';
let emp: string = '';
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i<=lineCount ; i++){
    for (let j: number = lineCount;j>= i ; j--){
        emp = emp + ' '
    }
    console.log(emp+ast);
    emp = ''
    ast = ast + '**';
    
}
