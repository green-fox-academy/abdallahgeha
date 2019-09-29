'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let thisSquareSide = canvas.width / 3
ctx.fillStyle = 'yellow'
ctx.fillRect(0, 0, canvas.width, canvas.height);



function squares(x, y, sqaureSide) {
    if (sqaureSide < 5) {

        return

    } else {

        ctx.save()
        ctx.translate(x, y)
        ctx.strokeStyle = 'black'
        ctx.beginPath
        ctx.moveTo(sqaureSide, 0)
        ctx.lineTo(sqaureSide, 3 * sqaureSide)
        ctx.moveTo(2 * sqaureSide, 0)
        ctx.lineTo(2 * sqaureSide, 3 * sqaureSide)
        ctx.moveTo(0, sqaureSide)
        ctx.lineTo(3 * sqaureSide, sqaureSide)
        ctx.moveTo(0, 2 * sqaureSide)
        ctx.lineTo(3 * sqaureSide, 2 * sqaureSide)
        ctx.stroke()
        squares(sqaureSide, 0, sqaureSide / 3);
        squares(sqaureSide, 2 * sqaureSide, sqaureSide / 3);
        squares(0, sqaureSide, sqaureSide / 3);
        squares(2 * sqaureSide, sqaureSide, sqaureSide / 3);
        ctx.restore()
    }
}
squares(0, 0, thisSquareSide)
