'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let required: number = 64;                   //   set number if divisions
let totalPart: number = Math.sqrt(required);
let aSquare: number = canvas.width / totalPart;
let lineCount: number = 15;
let dis = aSquare / lineCount;
let color = 'black';


for (let k: number = 0; k < (canvas.width ) / aSquare; k++) {
    ctx.save()
    ctx.translate(0,k*aSquare);
    for (let j : number = 0 ; j < canvas.height/aSquare ; j++ ){
        ctx.save()
        ctx.translate(j*aSquare,0);
        for(let i : number = 0 ; i< 4*aSquare ; i = i+dis){

            if (i <= (aSquare)) {
                connect(i,0,'purple');
            } else if (i >= 2 * aSquare && i <= 3 * aSquare) {
                connect((i - 2 * aSquare)-dis, aSquare, 'green');
    
            }

        }
        ctx.restore();
    }
    ctx.restore();
}


function connect(point1x: number, point1y: number, col: string) {
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.moveTo(point1x, point1y);
    ctx.lineTo(aSquare - point1y, point1x);
    ctx.stroke();
}

