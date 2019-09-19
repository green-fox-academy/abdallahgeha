'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let hexMaxA : number = 600 ;
let hexCount : number = 15;
let aHex : number = 20;


function hex (x:number , y: number , a: number ) {
    
    ctx.beginPath();
  //  ctx.strokeStyle = 'black';
    ctx.moveTo(x,y);
    ctx.lineTo(x+a,y);
    ctx.lineTo(x+a*Math.cos(a),y-(Math.sin(Math.PI/3))*a);




    ctx.lineTo(x,y);
    ctx.stroke();
    
}

hex ( 150,500,20;)