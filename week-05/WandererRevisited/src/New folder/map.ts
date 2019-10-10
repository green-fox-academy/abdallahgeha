'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
import { newGrid } from "./functions";
import { Hero } from "./hero"

let grid = newGrid();

export abstract class Terrain {

    protected _hero: Hero;
    protected _positionX: number;
    protected _positionY: number;
    protected _shape: HTMLImageElement;
    protected _passable: boolean;
    protected _hasKey: boolean = false;
    protected _hasHero: boolean = false;
    protected _gridWidth: number = grid.width;
    protected _gridHeight: number = grid.height;
    protected _squaresize: number = grid.size;

    constructor(X:number,Y:number){
        this._positionX  = X 
        this._positionY  = Y

    }

    public draw() {
        ctx.drawImage(this._shape, this._positionX * this._squaresize, this._positionY * this._squaresize, this._squaresize, this._squaresize);
       
    }

    public getHero(hero: Hero) {
        this._hero = hero
    }

    public getKey() {
        this._hasKey = true;
    }

    public helloHero() {
        this._hasHero = true;
    }
    public byeHero() {
        this._hasHero = false;
    }

    public get getShape() {
        return this._shape
    }

}

export class Floor extends Terrain {

    _shape = document.getElementById('floor') as HTMLImageElement;
    _passable = true;

}

export class Wall extends Terrain {

    _shape = document.getElementById('wall') as HTMLImageElement;
    _passable = false;

}

export class KeyFloor extends Terrain {

    _shape = document.getElementById('key') as HTMLImageElement;
    _passable = true;

}