'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let required: number = 16;
let totalPart: number  = Math.sqrt(required) ;
let aSquare: number = canvas.width/totalPart;
let lineCount: number = 15;
let dis = aSquare / lineCount;
let color = 'black';


for (let k: number = 0; k < ((canvas.width*canvas.height) / (aSquare**2)); k++) {
 //   document.write(`${k}`);
    ctx.save();
    for (let j : number = k/totalPart; j < totalPart  ; j++){
        if (k*aSquare < canvas.width){
            ctx.translate(k*aSquare,0);
        }else{
            ctx.translate(k*aSquare - canvas.width,canvas.height/totalPart);
        }
    }


    
    for (let i: number = 0; i < 4 * aSquare; i += dis) {
        if (i <= (aSquare)) {
            connect(i,0,'purple');
        } else if (i >= 2 * aSquare && i <= 3 * aSquare) {
            connect((i - 2 * aSquare)-dis, aSquare, 'green');

        }

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

/*'use strict';

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
*/