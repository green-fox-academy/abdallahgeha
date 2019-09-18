'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let maxCount : number = 4  
for ( let i : number=0 ; i < maxCount ; i++ ){
//    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    ctx.fillRect(Math.floor(Math.random() * canvas.width/2),Math.floor(Math.random() * canvas.height/2),Math.floor(Math.random() * canvas.width/2),Math.floor(Math.random() * canvas.height/2));
}

//document.write(((Math.random())*0xffffff).toString(16).substr(1,6));