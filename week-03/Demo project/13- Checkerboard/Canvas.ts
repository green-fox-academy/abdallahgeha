'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let squareSide = canvas.width / 8;
ctx.lineWidth = 2;

for (let i: number = 0; i < 8; i++) {
    for (let j: number = 0; j < 8; j++) {
        if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
        } else {
            ctx.fillRect(i * squareSide, j * squareSide, squareSide, squareSide);
        }
    }
}
function setPieceColor(factionColor:string){
    if (factionColor == 'white') {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
    } else {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
    }
    
}

function drawKing (xPosition: number, yPosition: number, factionColor: string){
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.beginPath();
    ctx.arc(squareSide*4/5,squareSide/2,squareSide/6,0,2*Math.PI);
    ctx.arc(squareSide*1/5,squareSide/2,squareSide/6,0,2*Math.PI);
    ctx.arc(squareSide/2,squareSide*2/5,squareSide/4,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);

    if(factionColor == 'black'){
        ctx.fillStyle = 'white';
    }else{
        ctx.fillStyle = 'black';
    }
    ctx.fillRect((squareSide/2)-(squareSide/10), (squareSide/2)-(squareSide/20),squareSide*2/10, squareSide*1.5/20 );
    ctx.fillRect((squareSide/2)-(squareSide/30),(squareSide/2)-(squareSide/10),squareSide*1.5/20, squareSide*2/10 );

    ctx.restore();


}

function drawQueen(xPosition: number, yPosition: number, factionColor: string){
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.beginPath();
    ctx.moveTo(squareSide/4,squareSide*3/5);
    ctx.lineTo(squareSide/5,squareSide*2/5);
    ctx.lineTo(squareSide*1.3/4,squareSide*2.6/5);
    ctx.lineTo(squareSide*1.3/4,squareSide*1/5);
    ctx.lineTo(squareSide*2/4,squareSide*2.6/5);
    ctx.lineTo(squareSide*2.7/4,squareSide*1/5);
    ctx.lineTo(squareSide*2.7/4,squareSide*2.6/5);
    ctx.lineTo(squareSide*4/5,squareSide*2/5);
    ctx.lineTo(squareSide*3/4,squareSide*3/5);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.restore();
}

function drawBishop(xPosition: number, yPosition: number, factionColor: string){
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.beginPath();
    ctx.moveTo(squareSide*3/8,squareSide*3/5);
    ctx.lineTo(squareSide*5/8,squareSide*3/5);
    ctx.lineTo(squareSide*4/8,squareSide/4);
    ctx.lineTo(squareSide*3/8,squareSide*3/5);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(squareSide/2,squareSide/2);
    ctx.arc(squareSide/3,squareSide*1.5/5,squareSide/3,-Math.PI/3,Math.PI/4);
    ctx.arc(squareSide*2/3,squareSide*1.5/5,squareSide/3,Math.PI*2/3,Math.PI*4/3);
    ctx.lineTo(squareSide/2,squareSide/2);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.restore();
}

function drawRook(xPosition: number, yPosition: number, factionColor: string){
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.fillRect(squareSide*3/8,squareSide*2/8,squareSide*2/8,squareSide*2/5);
    ctx.strokeRect(squareSide*3/8,squareSide*2/8,squareSide*2/8,squareSide*2/5);

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*1/5,squareSide/2,squareSide*1.5/5);
    ctx.strokeRect(squareSide/4,squareSide*1/5,squareSide/2,squareSide*1.5/5);

    if (factionColor == 'black'){
        ctx.fillStyle = 'white'
    }else{
        ctx.fillStyle = 'black'
    }
    ctx.fillRect(squareSide*5/16,squareSide*1/5,squareSide*2/16,squareSide/16);
    ctx.fillRect(squareSide*9/16,squareSide*1/5,squareSide*2/16,squareSide/16);

    ctx.restore();
}

function drawKnight(xPosition: number, yPosition: number, factionColor: string){
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.beginPath();
    ctx.moveTo(squareSide*3/8,squareSide*3/5);
    ctx.lineTo(squareSide*5/8,squareSide*3/5);
    ctx.lineTo(squareSide*4/8,squareSide/4);
    ctx.lineTo(squareSide*3/8,squareSide*3/5);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(squareSide*5/8,squareSide*4/8);
    ctx.lineTo(squareSide*(5/8+(1/10)),squareSide*3/8);
    ctx.lineTo(squareSide*(5/8),squareSide*1/8);
    ctx.lineTo(squareSide*(3/8),squareSide*1/8);
    ctx.lineTo(squareSide*(2/8),squareSide*3/8);
    ctx.lineTo(squareSide*(4/8),squareSide*2/8);
    ctx.lineTo(squareSide*(3/8),squareSide*4/8);
    ctx.lineTo(squareSide*5/8,squareSide*4/8);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.restore();
}

function drawPawn(xPosition: number, yPosition: number, factionColor: string) {
    setPieceColor(factionColor);
    ctx.save();
    ctx.translate(xPosition,yPosition);

    ctx.beginPath();
    ctx.moveTo(squareSide*3/8,squareSide*3/5);
    ctx.lineTo(squareSide*5/8,squareSide*3/5);
    ctx.lineTo(squareSide*4/8,squareSide/4);
    ctx.lineTo(squareSide*3/8,squareSide*3/5);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(squareSide*4/8,squareSide*2/8);
    ctx.arc(squareSide*4/8,squareSide*2/8,squareSide/7,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.fillRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.strokeRect(squareSide/4,squareSide*3/5,squareSide/2,squareSide/5);
    ctx.restore();

}
function drawNothing(xPosition: number, yPosition: number){
    return;
}

//drawPawn(0,squareSide,'black');
//drawKnight(squareSide,0,'black');
//drawRook(0,0,'white');
//drawBishop(2*squareSide,0,'white');
//drawQueen(3*squareSide,0,'white');
//drawNothing(0,0);
//drawKing(4*squareSide,0,'black');

let allThePieces = {
    kingWhite : {
        'xPosition' : 4,
        'yPosition' : 7,
        'color'     : 'white'
    },
    kingBlack : {
        'xPosition' : 4,
        'yPosition' : 0,
        'color'     : 'black'
    },
    queenWhite : {
        'xPosition' : 3,
        'yPosition' : 7,
        'color'     : 'white'
    },
    queenBlack : {
        'xPosition' : 3,
        'yPosition' : 7,
        'color'     : 'black'
    },
    bishopWhite1 : {
        'xPosition' : 2,
        'yPosition' : 7,
        'color'     : 'white'
    },
    bishopWhite2 :{
        'xPosition' : 5,
        'yPosition' : 7,
        'color'     : 'white'
    },
    bishopBlack1 : {
        'xPosition' : 2,
        'yPosition' : 0,
        'color'     : 'black'
    },
    bishopBlack2 : {
        'xPosition' : 5,
        'yPosition' : 0,
        'color'     : 'black'
    },
    knightWhite1 : {
        'xPosition' : 1,
        'yPosition' : 7,
        'color'     : 'white'
    },
    knighWhite2 : {
        'xPosition' : 6,
        'yPosition' : 7,
        'color'     : 'black'
    },
    knighBlack1 : {
        'xPosition' : 1,
        'yPosition' : 0,
        'color'     : 'black'
    },
    knighBlack2 : {
        'xPosition' : 6,
        'yPosition' : 7,
        'color'     : 'white'
    },
    rookWhite1 : {
        'xPosition' : 0,
        'yPosition' : 7,
        'color'     : 'white'
    },
    rookWhite2 : {
        'xPosition' : 7,
        'yPosition' : 7,
        'color'     : 'white'
    },
    rookBlack1 : {
        'xPosition' : 0,
        'yPosition' : 0,
        'color'     : 'black'
    },
    rookBlack2 : {
        'xPosition' : 7,
        'yPosition' : 0,
        'color'     : 'black'
    },
    pawnWhite1 : {
        'xPosition' : 0,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite2 : {
        'xPosition' : 1,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite3 : {
        'xPosition' : 2,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite4 : {
        'xPosition' : 3,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite5 : {
        'xPosition' : 4,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite6 : {
        'xPosition' : 5,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite7 : {
        'xPosition' : 6,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnWhite8 : {
        'xPosition' : 7,
        'yPosition' : 6,
        'color'     : 'white'
    },
     pawnblack1 : {
        'xPosition' : 0,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack2 : {
        'xPosition' : 1,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack3 : {
        'xPosition' : 2,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack4 : {
        'xPosition' : 3,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack5 : {
        'xPosition' : 4,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack6 : {
        'xPosition' : 5,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack7 : {
        'xPosition' : 6,
        'yPosition' : 1,
        'color'     : 'black'
    },
     pawnblack8 : {
        'xPosition' : 7,
        'yPosition' : 1,
        'color'     : 'black'
    },
};


drawKing(allThePieces.kingWhite.xPosition*squareSide,allThePieces.kingWhite.yPosition*squareSide,allThePieces.kingWhite.color);








