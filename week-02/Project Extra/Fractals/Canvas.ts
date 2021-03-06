'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let aTri: number = 700;
ctx.translate(50, aTri);
let point = invert(0, 0, aTri);

function invert(x: number, y: number, newT: number) {

 //   ctx.fillStyle = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
    ctx.save();
    ctx.translate(x, y)
    ctx.moveTo(newT / 4, -newT * Math.sin(Math.PI / 3) / 2);
    ctx.lineTo(newT / 4 + newT / 2, -newT * Math.sin(Math.PI / 3) / 2);
    ctx.lineTo(newT / 2, 0);
    ctx.fill()

    ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 4, 0);

    ctx.fill()

    ctx.translate(newT / 4, -newT * Math.sin(Math.PI / 3) / 2)

    ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 4, 0);
    ctx.lineTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.fill()


    ctx.translate(newT / 4, +newT * Math.sin(Math.PI / 3) / 2)

    ctx.moveTo(newT / 8, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 8 + newT / 4, -newT * Math.sin(Math.PI / 3) / 4);
    ctx.lineTo(newT / 4, 0);
    ctx.fill()

    ctx.translate(-newT / 2, 0);

    let newPoint: number[][] = [[0, 0, newT / 2], [newT / 4, -2 * Math.sin(Math.PI / 3) * newT / 4, newT / 2], [newT / 2, 0, newT / 2]];

    if (newT > 40) {

        invert(newPoint[0][0], newPoint[0][1], newPoint[0][2]);
        ctx.restore();
        invert(newPoint[1][0], newPoint[1][1], newPoint[1][2]);
        ctx.restore();
        invert(newPoint[2][0], newPoint[2][1], newPoint[2][2]);
        ctx.restore();

    } else {
        return;
    }
}

