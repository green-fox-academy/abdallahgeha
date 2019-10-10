'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export class Tiles {
  protected _numberOfHorizontalTiles : number = 10
  protected _numberOfVerticalTiles : number = 10
  protected _gridSize = canvas.width/this._numberOfHorizontalTiles

  
}