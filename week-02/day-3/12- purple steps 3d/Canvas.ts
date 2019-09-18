'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


let a : number = 30;
let q : number = 0;
for (let i : number = 0 ; i < 6 ; i++){
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'black';
    q = i*a + q;
    ctx.fillRect((q), (q),a+i*a,a+i*a);
   ctx.strokeRect(q,q,a+i*a,a+i*a);
}
