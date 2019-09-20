'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let maxx: number = 50;
let aTri: number = 300;
ctx.translate(50, aTri);
let point = invert(0, 0, aTri);
let t: number = 0
let m: number = 0

for (let i: number = 0; i < 5; i++) {

    let newIn: number[][] = invert(point[i][0], point[i][1], aTri / 2);


}
//invert(point[0][0],point[0][1],aTri);


function invert(x: number, y: number, newT: number, m=0,h : number = 0) {

    if (m < 5) {

    } else if (m < 10) {
        h = 1
    }else if(m < 15) {
        h = 2
    }
   //     ctx.translate(tx, ty)
        ctx.fillStyle = 'black';
        ctx.save();
        ctx.translate(x, y)
        ctx.moveTo(newT / 4, -newT * Math.sin(Math.PI / 3) / 2);
        ctx.lineTo(newT / 4 + newT / 2, -newT * Math.sin(Math.PI / 3) / 2);
        ctx.lineTo(newT / 2, 0);
        //ctx.lineTo( newT/4 , -newT * Math.sin(Math.PI/3)/2);
        ctx.fill()

        // ctx.restore();

        // ctx.translate(x,y)
        ctx.fillStyle = 'black';
        ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 4, 0);
        //ctx.lineTo( newT/8 , -newT * Math.sin(Math.PI/3)/4);
        ctx.fill()

        //ctx.restore();

        ctx.translate(newT / 4, -newT * Math.sin(Math.PI / 3) / 2)
        ctx.fillStyle = 'black';
        ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 4, 0);
        ctx.lineTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.fill()

        //  ctx.restore();

        ctx.translate(newT / 4, +newT * Math.sin(Math.PI / 3) / 2)
        ctx.fillStyle = 'black';
        ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
        ctx.lineTo(newT / 4, 0);
        // ctx.lineTo( newT/8 , -newT * Math.sin(Math.PI/3)/4);
        ctx.fill()
        ctx.translate(-newT / 2, 0);
        //ctx.fillRect(0,0,200,200);

        //ctx.restore();
        m++



      //  let d : number = 0


    

    let newPoint: number[][] = [[0, 0, newT / 2], [newT / 4, -2 * Math.sin(Math.PI / 3) * newT / 4, newT / 2], [newT / 2, 0, newT / 2]];

    return invert(newPoint[h][0], newPoint[h][1], newPoint[h][2],m++,h);
    /*else

        m = 0;
        t++;*/
        
}
   


    


}