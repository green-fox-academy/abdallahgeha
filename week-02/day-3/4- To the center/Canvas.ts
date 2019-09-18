'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.




function toTheCenter (x : number , y: number ){
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2 , canvas.height/2);
    ctx.stroke();

}

// Randomise starting point
for (let i:number  = 0 ; i<3 ; i++){
    toTheCenter(Math.floor(Math.random() * canvas.width),Math.floor(Math.random() * canvas.height));
}
//toTheCenter(100,100);