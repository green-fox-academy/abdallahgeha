'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
import { d6, arraysEqual } from "./functions";
import { Level, Map } from "./level";
import { newGrid } from "./functions";
import { Monster } from "./monsters"
import { Floor } from "./map"


let grid = newGrid();
let floor = new Floor(0, 0)
//let map = new Map

export class Hero {

    private _position: number[] = [0, 0]
    private _heroDown = document.getElementById('hero-down') as HTMLImageElement;
    private _heroLeft = document.getElementById('hero-left') as HTMLImageElement;
    private _heroRight = document.getElementById('hero-right') as HTMLImageElement;
    private _heroUp = document.getElementById('hero-up') as HTMLImageElement;
    private _floor: HTMLImageElement = floor.getShape
    
    private _maxHP: number = 20 + 3 * d6()
    private _currentHP: number = this._maxHP
    private _DP: number = 2 * d6()
    private _SP: number = 5 + d6()
    protected _gridWidth: number = grid.width;
    protected _gridHeight: number = grid.height;
    protected _squaresize: number = grid.size;
    protected _orientationMatrix: string[] = ['up', 'down', 'left', 'right']
    public _orientation: string = this._orientationMatrix[2]
    private _isAlive: boolean = true


    public setWall(){
        
    }
    private _wallMatrix: number[][] = []

    public startingPosition(X: number, Y: number) {
        this._position[0] = X;
        this._position[1] = Y;
        ctx.drawImage(this._heroDown, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)

    }

    public get Position(): number[] {
        return this._position
    }


    public get getStats() {
        return `   \t   HP:   ${this._currentHP}/${this._maxHP}      \t|    DP: ${this._DP}    \t|    SP: ${this._SP}`
    }

    public moveUp() {

        ctx.drawImage(this._floor, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
        this._position[1]--
        this._orientation = 'up'
        console.log("going up")
        if (this._position[1] < 0 || this._wallMatrix[this._position[1]][this._position[0]] == 1) {
            this._position[1]++
        }
        this.draw()

    }

    public moveDown() {

        ctx.drawImage(this._floor, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
        this._position[1]++
        this._orientation = 'down'
        if (this._position[1] > (this._gridHeight - 1) || this._wallMatrix[this._position[1]][this._position[0]] == 1) {
            this._position[1]--
        }
        this.draw()

    }
    public moveLeft() {
        ctx.drawImage(this._floor, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
        this._position[0]--
        this._orientation = 'left'
        if (this._position[0] < 0 || this._wallMatrix[this._position[1]][this._position[0]] == 1) {
            this._position[0]++
        }
        this.draw()

    }
    public moveRight() {

        ctx.drawImage(this._floor, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
        this._position[0]++
        this._orientation = 'right'
        if (this._position[0] > (this._gridWidth - 1) || this._wallMatrix[this._position[1]][this._position[0]] == 1) {
            this._position[0]--
        }
        this.draw()

    }

    public draw() {

        if (this._orientation == 'down') {
            ctx.drawImage(this._heroDown, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
            console.log("Go Down")
        } else if (this._orientation == 'up') {
            ctx.drawImage(this._heroUp, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
            console.log("Go Uo")

        } else if (this._orientation == 'right') {
            ctx.drawImage(this._heroRight, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
            console.log("Go Right")

        } else if (this._orientation == 'left') {
            ctx.drawImage(this._heroLeft, this._position[0] * this._squaresize, this._position[1] * this._squaresize, this._squaresize, this._squaresize)
            console.log("Go Left")

        }
    }

    public dieAHero() {
        this._isAlive = false
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    public fight(monster: Monster) {

    }

}