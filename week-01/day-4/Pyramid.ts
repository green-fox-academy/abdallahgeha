'use strict';

let lineCount: number = 4;
let ast: string = '*';
let emp: any = "    ";
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
    console.log(emp+ast);
    ast = ast + '**';
    /*emp = emp - " ";*/
}
console.log(2*emp);