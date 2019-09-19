'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let hexMaxA: number = 600;
let hexCount: number = 15;
let aHex: number = 20;
let hexSide: number = 5;


function hex(x: number, y: number, a: number) {

    ctx.beginPath();
    //  ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(x + a, y);
    ctx.lineTo(x + a + a * Math.cos(Math.PI / 3), y - (Math.sin(Math.PI / 3)) * a);
    ctx.lineTo(x + a, y - 2 * (Math.sin(Math.PI / 3)) * a);
    ctx.lineTo(x, y - 2 * (Math.sin(Math.PI / 3)) * a);
    ctx.lineTo(x - a * Math.cos(Math.PI / 3), y - (Math.sin(Math.PI / 3)) * a);
    ctx.lineTo(x, y);
    ctx.stroke();

}

//hex(150, 500, aHex);
//hex(150 + aHex + aHex * Math.cos(Math.PI / 3), 500 - (Math.sin(Math.PI / 3)) * aHex, aHex);

let initX: number = 400;


for (let i: number = 0; i < (2 * hexSide - 1); i++) {
    let initY: number = 500;
    if (i >= hexSide) {
        initY = initY - (i - 2 * hexSide + 2) * aHex * Math.sin(Math.PI / 3);
    } else {
        initY = initY + i * aHex * Math.sin(Math.PI / 3);
    }

    for (let j: number = 0; j < (2 * hexSide - 1); j++) {

        if (j == (hexSide + i) || j == (2*hexSide - i+(hexSide-2)) ) {
            j = 2 * hexSide
            /* }else if (i >= hexSide){
                 initY = initY - 2*aHex*Math.sin(Math.PI/3)*(i-hexSide+j)
            //     initY = initY - 2*aHex*Math.sin(Math.PI/3)
     
                 hex(initX,initY,aHex);*/

        } else {

            hex(initX, initY, aHex);

            initY = initY - 2 * aHex * Math.sin(Math.PI / 3)
        }
    }
    initX = initX + aHex * (1 + Math.cos(Math.PI / 3));
}