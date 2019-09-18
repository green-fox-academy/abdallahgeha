'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function toTheCenter(x: number, y: number) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();

}

let contour: number = 2 * (canvas.width + canvas.height);
//let count: number = contour / 20;
// Randomise starting point
for (let i: number = 0; i < contour; i+=20) {
    if (i <= canvas.width){
        toTheCenter(i,0);
    }else if (i <= canvas.width+canvas.height){
        toTheCenter(canvas.width,i - canvas.width);
    }else if (i <= (2*canvas.width + canvas.height)){
        toTheCenter(i-20-(canvas.width+canvas.height),canvas.height);
    }else {
        toTheCenter(0,i-(2*canvas.width + canvas.height));
    }
    
}