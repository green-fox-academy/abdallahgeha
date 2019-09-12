'use strict'

let side1:number = 10 , side2:number = 10 , side3:number = 10;
let surfaceArea: number = (side1*side2 + side2*side3 + side3*side1)*2 ;
let volume: number = side1*side2*side3 ; 

console.log('Surface Area: ' + surfaceArea);
console.log('Volume: ' + volume);
