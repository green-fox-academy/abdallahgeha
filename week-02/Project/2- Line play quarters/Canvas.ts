'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let aSquare = 15 * 20 ;
let color = 'black';
for ( let i : number = 0 ; i< 4*aSquare ; i += 20){
    if (i < aSquare){
        connect(i,0,'purple');
    }else if (i >= 2*aSquare && i< 3*aSquare){
        connect(i-2*aSquare ,aSquare,'green');

    }
    
}

function connect(point1x: number , point1y : number ,col: string) {
    ctx.strokeStyle = col;
    ctx.beginPath();
    ctx.moveTo(point1x, point1y);
    ctx.lineTo(aSquare - point1y, point1x);
    ctx.stroke();
}
