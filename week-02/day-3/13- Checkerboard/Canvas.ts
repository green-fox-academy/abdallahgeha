'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


for (let i : number = 0 ; i< 8 ; i++){
    for ( let j : number = 0 ; j< 8 ; j++){
        if ((i%2 == 0 && j%2 == 0) || (i%2 != 0 && j%2 != 0) ){
        }else {
            ctx.fillRect(i*canvas.width/8, j*canvas.height/8,canvas.width/8,canvas.height/8);

        }
    }
    

}
//ctx.fillRect(0, 0,canvas.width/8,canvas.height/8);