'use strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export class Grid {
     private gridWidth : number = 10
     private gridHeight : number = 10
     private squaresize : number = canvas.width / this.gridWidth

     public get width(){
         return this.gridWidth
     }
     public get height(){
        return this.gridHeight
    }
    public get size(){
        return this.squaresize
    }
}

