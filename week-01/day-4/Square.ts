'use strict';

let lineCount: number = 6;
let i: number;
let j: number;
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
for ( i = 1; i <= lineCount ; i++){
    if(i == 1 || i == lineCount){
        let a: string = '';
        for(j = 1; j<= lineCount; j++){
            a = a +'*';
        }
        console.log(a);

    } else {
        let a: string = ''
        for(j = 1; j<= lineCount; j++){
           if(j==1 || j == lineCount) {
               a = a +'*';
           } else {
               a = a+ ' ';
           }
        }
        console.log(a);       
    }
}   

for ( i = 1; i <= lineCount ; i++){
    let v: string = ''
    for ( j = 1 ; j <= lineCount ; j++){
        if (i == 1 || j == 1 || i == lineCount || j == lineCount){
           v = v + '%';
        } else {
            v = v + ' '
        }
    }
    console.log(v) ;
}