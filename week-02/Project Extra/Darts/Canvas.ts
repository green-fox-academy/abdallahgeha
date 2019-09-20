'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let rMax : number = 320;
ctx.translate(canvas.width/2,canvas.height/2);
ctx.rotate(-Math.PI/20);
ctx.strokeStyle = 'rgb(192,192,192)'
ctx.lineWidth = 2;

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(0,0,rMax,0,2*Math.PI);
ctx.fill();

for( let k : number = 0 ; k < 20 ; k++){
    peice(k,0,rMax);
    ctx.rotate(-Math.PI/10);
}


//


ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(0,0,rMax/10,0,2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(0,0,rMax/20,0,2*Math.PI);
ctx.fill();
ctx.stroke();










function peice (peiceN : number ,w : number , r : number){
    let greenRed : string[][] = [['green','white'],['red','black']];
    let size : number[] = [70,20, 60,20]
    let instR : number = r;

    for (let i : number = 0 ; i < size.length ; i++){
        let pp = peiceN%2;
        instR = instR - size[i]
        ctx.beginPath();
        let j = i%2
        ctx.fillStyle = greenRed[pp][j];
        ctx.arc(0,0,(instR),0,Math.PI/10);
        ctx.lineTo(0,0);
        ctx.fill();
        ctx.stroke();

    }


}
