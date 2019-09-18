'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
/*
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(600, 200);
ctx.lineTo(600, 600);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(600, 600);
ctx.lineTo(200, 600);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(200, 600);
ctx.lineTo(200, 200);
ctx.stroke();
*/

let colors : string[] = ['red' , 'blue', 'green', 'black'];
let xCo : number[] = [600,600,200,200];
let yCo : number[] = [200,600,600,200];

for (let i : number = 0; i < colors.length ; i++) {
    ctx.beginPath();
    if (i == 0) {
        ctx.moveTo(200, 200);
    }else {
        ctx.moveTo(xCo[i-1], yCo[i-1]);        
    }
 
    ctx.strokeStyle = colors[i];
    ctx.lineTo(xCo[i], yCo[i]);
    ctx.stroke();
}
