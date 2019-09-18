'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let list1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let list2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function fn(list: number[][]) {
    for (let i: number = 0; i < list.length; i++) {

        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(list[i][0], list[i][1]);
        if (i > (list.length - 2)) {
            ctx.lineTo(list[0][0], list[0][1]);
        } else {
            ctx.lineTo(list[i + 1][0], list[i + 1][1]);
        }
        ctx.stroke();

    }
}
fn(list1);
fn(list2);

