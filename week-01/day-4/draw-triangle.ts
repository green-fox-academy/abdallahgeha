'use strict';

let lineCount: number = 4;
let ast: string = '*';
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i: number = 1; i<=lineCount ; i++){
    console.log(ast);
    ast = ast + '*';
}