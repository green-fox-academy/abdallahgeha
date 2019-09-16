'use strict'

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 5;       // square matrix dimention not changable still
let diagMatrix = [];
for (let i = 0; i < size; i++) { 
    diagMatrix[i] = [];
}   
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i == (size - j - 1)) {
            diagMatrix[i][j] = 1;
        }else{
            diagMatrix[i][j] = 0;
        }
    }
    console.log(diagMatrix[i]);
}


