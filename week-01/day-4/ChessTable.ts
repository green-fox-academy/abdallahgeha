'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;
let i: number;
let j: number;

for ( i = 1 ; i <= lineCount ; i++){
    let a: string = '';
    for ( j = 1 ; j<= lineCount ; j++){
        if ( ((i%2 != 0) && (j%2 !=0)) || (((i%2 == 0 ) && ( j%2 == 0)))){
            a = a + '%' ;
        } else {
            a = a + ' ' ;
        }
    }
    console.log(a) ;
}