'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let maxCount = 7;
function drawSquare(a: number , c:string) {

    ctx.fillStyle = c;
    ctx.fillRect((canvas.width -a)/ 2, (canvas.height-a) / 2, a, a);

}

let R: number  = 650;
let col: string[] = ['red','orange','yellow','green','blue','indigo','violet'];

for (let i: number = 0; i < maxCount; i++) {


    drawSquare(R,col[i]);
    R -= 100;
}