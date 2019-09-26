'use strict';

const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const boundings = canvas.getBoundingClientRect();


// DO NOT TOUCH THE CODE ABOVE THIS LINE

let mouseClickedCoordinate = {
    x: 0,
    y: 0
};
let isMouseDown : boolean = false;

document.addEventListener('click',function (event: MouseEvent) {
    
    mouseClickedCoordinate.x = event.clientX- boundings.left ;
    mouseClickedCoordinate.y = event.clientY - boundings.top;
    let tempIx = Math.floor( (mouseClickedCoordinate.x)/squareSide );
    let tempIy = Math.floor( (mouseClickedCoordinate.y)/squareSide );
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 10;
    ctx.strokeRect(tempIx*squareSide,tempIy*squareSide,squareSide,squareSide)
    console.log(tempIx)
    console.log(tempIy)


});

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

drawPawn(0,squareSide,'white');
drawKnight(squareSide,0,'black');
drawRook(0,0,'white');
drawBishop(2*squareSide,0,'white');
drawQueen(3*squareSide,0,'white');
drawNothing(0,0);
//drawKing(4*squareSide,0,'black');

class ChessPieces {

    private _startX;
    private _startY;
    private _currentX;
    private _currentY;
    private _type;
    private _color;
    private _index;
   // private _possibleMove = []

    constructor(startX , startY , type, color,index?){
        if(index){
            this._index = index
        }
        this._startX = startX;
        this._startY = startY;
        this._type = type;
        this._color = color;
        this._currentX = this._startX;
        this._currentY = this._startY;

        return this
    }

    public draw(x?,y?){
        let tempX;
        let tempY;
        if(x){
            tempX = x
        }else{
            tempX = this._currentX
        }
        if (y){
            tempY = y
        }else{
            tempY = this._currentY
        }

        if (this._type == 'king'){
            drawKing(tempX*squareSide,tempY*squareSide,this._color)
        }else if (this._type == 'queen'){
            drawQueen(tempX*squareSide,tempY*squareSide,this._color)
        }else if(this._type == 'knight'){
            drawKnight(tempX*squareSide,tempY*squareSide,this._color)
        }else if (this._type == 'pawn'){
            drawPawn(tempX*squareSide,tempY*squareSide,this._color)
        }else if(this._type == 'bishop'){
            drawBishop(tempX*squareSide,tempY*squareSide,this._color);
        }else if(this._type == 'rook'){
            drawRook(tempX*squareSide,tempY*squareSide,this._color);
        }
    }

    //public move()

    /*public movePossiblities(type,x,y,color){
        let possibleMove = []
        if (type == 'king'){
            possibleMove.push(1) //////
        }else if (type == 'queen'){
            
        }else if(type == 'knight'){
            
        }else if (type == 'pawn'){
            
        }else if(type == 'bishop'){
            
        }else if(type == 'rook'){
            
        }
    }*/

    public get getCoordinates(){
        return [this._currentX,this._currentY]
    }
}

/*class Square{
    private _squares = [][]
    constructor(){
        for (let i: number = 0; i < 8; i++) {
            for (let j: number = 0; j < 8; j++) {
                this._squares[i][j] =[1]
            }
        }
    }
}*/

let kingWhite = new ChessPieces(4,7,'king','white').draw();
let kingBlack = new ChessPieces(4,0,'king','black').draw();
let queenWhite = new ChessPieces(3,7,'queen','white').draw()
let queenBlack = new ChessPieces(3,0,'queen','black').draw()
let bishopWhite1 = new ChessPieces(2,7,'bishop','white').draw()
let bishopWhite2 = new ChessPieces(5,7,'bishop','white').draw()
let bishopBlack1 = new ChessPieces(5,0,'bishop','black').draw()
let bishopBlack2 = new ChessPieces(2,0,'bishop','black').draw()
let knightWhite1 = new ChessPieces(1,7,'knight','white').draw()
let knighWhite2 = new ChessPieces(6,7,'knight','white').draw()
let knighBlack1 = new ChessPieces(1,0,'knight','black').draw()
let knighBlack2 = new ChessPieces(6,0,'knight','black').draw()
let rookWhite1 = new ChessPieces(0,7,'rook','white').draw()
let rookWhite2 = new ChessPieces(7,7,'rook','white').draw()
let rookBlack1 = new ChessPieces(0,0,'rook','black').draw()
let rookBlack2 = new ChessPieces(7,0,'rook','black').draw()
let pawnwhite1= new ChessPieces(0,6,'pawn','white',1).draw()
let pawnwhite2= new ChessPieces(1,6,'pawn','white',2).draw()
let pawnwhite3= new ChessPieces(2,6,'pawn','white',3).draw()
let pawnwhite4= new ChessPieces(3,6,'pawn','white',4).draw()
let pawnwhite5= new ChessPieces(4,6,'pawn','white',5).draw()
let pawnwhite6= new ChessPieces(5,6,'pawn','white',6).draw()
let pawnwhite7= new ChessPieces(6,6,'pawn','white',7).draw()
let pawnwhite8= new ChessPieces(7,6,'pawn','white',8).draw()
let pawnBlack1= new ChessPieces(0,1,'pawn','black',1).draw()
let pawnBlack2= new ChessPieces(1,1,'pawn','black',2).draw()
let pawnBlack3= new ChessPieces(2,1,'pawn','black',3).draw()
let pawnBlack4= new ChessPieces(3,1,'pawn','black',4).draw()
let pawnBlack5= new ChessPieces(4,1,'pawn','black',5).draw()
let pawnBlack6= new ChessPieces(5,1,'pawn','black',6).draw()
let pawnBlack7= new ChessPieces(6,1,'pawn','black',7).draw()
let pawnBlack8= new ChessPieces(7,1,'pawn','black',8).draw()





function initialStat () {
    
}
initialStat();







