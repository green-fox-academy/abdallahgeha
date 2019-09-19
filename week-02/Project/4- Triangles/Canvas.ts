'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let trianlgeMaxA : number = 600 ;
let triangleCount : number = 15;
let aTriangle : number = trianlgeMaxA/triangleCount;


function tri (x:number , y: number , a: number ) {
    
    ctx.beginPath();
  //  ctx.strokeStyle = 'black';
    ctx.moveTo(x,y);
    ctx.lineTo(x+a,y);
    ctx.lineTo(x+a/2,y-(Math.sin(Math.PI/3))*a);
    ctx.lineTo(x,y);
    ctx.stroke();
    
}

let y : number = 650;
for (let i : number = 0 ; i < triangleCount ; i++){
    let x : number = 200;
    x =  x + i*aTriangle/2;
    
   // ctx.translate(aTriangle/2,-(Math.sin(Math.PI/3))*a);
    for ( let j :number = 0 ; j < triangleCount-i ; j++){

        tri(x,y,aTriangle)
        x =x+ aTriangle
    }

//  ctx.strokeStyle = 'red';

    y = y - (Math.sin(Math.PI/3))*aTriangle ; 
}



//tri(200,500,50);