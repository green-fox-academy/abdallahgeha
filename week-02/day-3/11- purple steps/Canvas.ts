'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


let a : number = 30;
for (let i : number = 0 ; i < 20 ; i++){
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'black';
    ctx.fillRect(i*a, i*a,a,a);
    ctx.strokeRect(i*a,a*i,a,a);
}
