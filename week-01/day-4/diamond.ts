'use strict';

let lineCount: number = 8;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


if( lineCount%2 == 0){
    for ( let i : number = 0 ; i < lineCount ; i++) {
        let a: string = '' ;

        if ( i <= (lineCount/2)) {
            for ( let j: number = 1 ; j <= lineCount ; j++){
                if (j < (((lineCount)/2)-i) || j > ((((lineCount)/2)+i))){
                    a = a + ' ' ;
                } else {
                    a = a + '*' ;
                }
            }
        } else {
            for ( let j: number = 1 ; j <= lineCount ; j++){
                if ((j < (((lineCount)/2))-((lineCount-i-1))) || (j > ((lineCount)/2) + ((lineCount-i-1)))  ){
                    a = a + ' ' ;
                } else {
                    a = a + '*' ;
                }
            }
        }

        console.log(a);
    }
} else {
    for ( let i : number = 0 ; i < lineCount ; i++) {
        let a: string = '' ;

        if ( i <= (lineCount/2)) {
            for ( let j: number = 1 ; j <= lineCount ; j++){
                if (j < (((lineCount+1)/2)-i) || j > ((((lineCount+1)/2)+i))){
                    a = a + ' ' ;
                } else {
                    a = a + '*' ;
                }
            }
        } else {
            for ( let j: number = 1 ; j <= lineCount ; j++){
                if ((j < (((lineCount+1)/2))-((lineCount-i-1))) || (j > ((lineCount+1)/2) + ((lineCount-i-1)))  ){
                    a = a + ' ' ;
                } else {
                    a = a + '*' ;
                }
            }
        }



        console.log(a);
    }

}


