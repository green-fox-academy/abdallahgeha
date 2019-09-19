'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let aSquare: number = canvas.width/2;
//document.write(`${aSquare}`);
let lineCount: number = 15;
let dis = aSquare / lineCount;
let color = 'black';


ctx.save();
ctx.translate(0,canvas.height/2);


for ( let j : number = 0 ; j< 4 ; j++){
    ctx.translate(canvas.width/2,-canvas.height/2);
    ctx.rotate((Math.PI / 180) * 90);
    for (let i: number = 0; i < 4 * aSquare; i += dis) {
    if (i < (aSquare)) {
        connect(i,0,'green');
    }    
} 
}



function connect(point1x: number , point1y : number ,col: string) {
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.moveTo(point1x, point1y);
    ctx.lineTo(aSquare - point1y, point1x);
    ctx.stroke();
}




/*
let required: number = 16;
let totalPart: number  = Math.sqrt(required) ;
let aSquare: number = canvas.width/totalPart;
let lineCount: number = 15;
let dis = aSquare / lineCount;
let color = 'black';
*/

/*    for (let i: number = 0; i < 4 * aSquare; i += dis) {
        if (i <= (aSquare)) {
            connect(i,0,'purple');
        }*/