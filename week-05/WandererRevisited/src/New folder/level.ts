'use trict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
import { Terrain, Floor, Wall, KeyFloor } from "./map"
import { newGrid, randPosition } from "./functions";
import { Hero } from "./hero"
import { Monster, Boss, Skeleton } from "./monsters"

let grid = newGrid();


export class Level {

    private _level: number = 1
    private _heroStartXY: number[] = [0, 0]
    private _levelMap: Map
    private _hero: Hero
    private _key: KeyFloor

    constructor() {

    }

    

    public get heroStart() {
        return this._heroStartXY
    }

}

export class Map {
    private _floor = document.getElementById('floor') as HTMLImageElement;
    private _wall = document.getElementById('wall') as HTMLImageElement;
    private _monsters: Monster[] = []
    private _hero : Hero = new Hero
    private _wallMatrix: number[][] = [
        [2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
    ]
    private _tileMatrix: Terrain[][] = []

    constructor() {
        this.flooring();
        this.heroing()
        this.monstering();
        this._monsters.forEach(e => e.draw())
        // this.stats();
    }

    // public randomWall(){

    //     this._wallMatrix

    //     this.flooring();
    //     this.walling();

    // }

    public flooring() {
        for (let i: number = 0; i < grid.width; i++) {
            this._tileMatrix.push([])
            for (let j: number = 0; j < grid.height; j++) {
                if (this._wallMatrix[i][j] == 1) {
                    let wall = new Wall(j, i)
                    this._tileMatrix[i].push(wall)
                } else if (this._wallMatrix[i][j] == 0) {
                    let floor = new Floor(j, i)
                    this._tileMatrix[i].push(floor)
                }
            }
        }
        for (let i: number = 0; i < grid.width; i++) {
            for (let j: number = 0; j < grid.height; j++) {
                this._tileMatrix[j][i].draw()
            }
        }
    }

    public monstering() {

        let monsterCount = Math.floor(Math.random() * 4 + 3)
        let startPosition: number[][] = []
        for (let i: number = 0; i < monsterCount; i++) {
            let tempPosition = randPosition(this)
            let tempPosition2 = [tempPosition[1], tempPosition[0]]
            startPosition.push(tempPosition2)


        }
        console.log(startPosition)
        this._monsters.push(new Boss(startPosition[0][1], startPosition[0][0]))
        for (let i: number = 1; i < monsterCount; i++) {

            this._monsters.push(new Skeleton(startPosition[i][1], startPosition[i][0]))
        }

    }

    public heroing() {
        
        this._hero.startingPosition(0,0)
    }



    public get floor() {
        return this._floor
    }
    public get wallMatrix() {
        return this._wallMatrix
    }

    // public stats() {
    //     ctx.fillRect(0, gridHeight * squaresize, canvas.width, (canvas.height - gridHeight * squaresize))
    // }


}