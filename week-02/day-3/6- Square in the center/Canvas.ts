'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

let aSquare = 10;
ctx.fillStyle = 'green';
ctx.fillRect((canvas.width-aSquare)/2, (canvas.height-aSquare)/2, aSquare, aSquare);