'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
import { newGrid } from "./functions";
import { Terrain, Floor, Wall, KeyFloor } from "./map"

let grid = newGrid();
let floor = new Floor(0, 0)


export class Monster {

    protected _position: number[] = [0, 0]
    protected _shape: HTMLImageElement = document.getElementById('skeleton') as HTMLImageElement;
    protected _level: number
    protected _levelChance: number
    protected _gridWidth: number = grid.width;
    protected _gridHeight: number = grid.height;
    protected _squaresize: number = grid.size;
    protected _floor: HTMLImageElement = floor.getShape
    protected _isAlive = true

    constructor(initialX: number, initialY: number) {
        this._position[0] = initialX
        this._position[1] = initialY
        this.draw();
        return this;
    }

    public draw() {
        ctx.drawImage(this._shape, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)

    }

    public randomMove() {

    }

    public setLevel() {

        this._levelChance = Math.random()
        if (this._levelChance <= 0.5) {
            this._level = 1
        } else if (this._levelChance <= 0.9) {
            this._level = 2
        } else {
            this._level = 3
        }

    }


}

export class Skeleton extends Monster {
    _shape = document.getElementById('skeleton') as HTMLImageElement
}

export class Boss extends Monster {
    _shape = document.getElementById('boss') as HTMLImageElement

    constructor(initialX: number, initialY: number) {
        super(initialX, initialY)
        this._shape = document.getElementById('boss') as HTMLImageElement
        this._levelChance = Math.random()
        if (this._levelChance <= 0.5) {
            this._level = 1
        } else if (this._levelChance <= 0.9) {
            this._level = 2
        } else {
            this._level = 3
        }

    }
    public draw() {
        ctx.drawImage(this._shape, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
    }

}