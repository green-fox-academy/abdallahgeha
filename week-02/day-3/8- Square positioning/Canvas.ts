'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.




let aSquare = 50;
let maxCount = 3

function drawSquare(x: number, y: number) {

    ctx.fillStyle = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    ctx.fillRect(x, y, aSquare, aSquare);

}

for (let i: number = 0; i < maxCount; i++) {
    drawSquare(Math.floor(Math.random() * canvas.width / 2), Math.floor(Math.random() * canvas.height / 2))
}