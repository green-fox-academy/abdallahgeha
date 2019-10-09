'use strict';

//practice for rotating
let matrixX: number [][] = [[1,2,3],[4,5,6],[7,8,9]];
function rotate(matrix: number [][]){
  let rotatedMatrix: number [][] = [];
    for (let i: number = 0; i < matrix.length; i++){
      let line: number [] = [];
        for (let j: number = 0; j < matrix[i].length; j++){ //matrix[i] because it is the first line what we created
          let temp: number = matrix[matrix.length-j][i];
          line.push(temp);
        }
      rotatedMatrix.push(line);
    }
    return rotatedMatrix;
} console.log(rotate(matrixX));