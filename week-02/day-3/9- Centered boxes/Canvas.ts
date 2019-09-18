'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

//let aSquare = 50;
let maxCount = 3

function drawSquare(a: number) {

    ctx.fillStyle = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx.fillRect((canvas.width -a)/ 2, (canvas.height-a) / 2, a, a);

}

let R: number  = Math.floor(Math.random() * canvas.height / 2);
for (let i: number = 0; i < maxCount; i++) {


    drawSquare(R);
    R -= 100;
}