'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = ' black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let aSquare = 20;
let maxCount = 100

function drawSquare(x: number, y: number) {
    let gray: number = Math.floor(Math.random() * (255-120))+120 ;
    ctx.fillStyle = `rgb(${gray},${gray},${gray})`;
    ctx.fillRect(x, y, aSquare, aSquare);

}

for (let i: number = 0; i < maxCount; i++) {
    drawSquare(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
}
