'use strict'
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
import { Grid } from "./grid";
import { Hero } from "./hero";
import { Map } from "./level"

export function refresh(hero: Hero) {
    document.getElementById('stats').innerHTML = hero.getStats
}

export function arraysEqual(a1: number[], a2: number[]) {
    return JSON.stringify(a1) == JSON.stringify(a2);
}

export function newGrid() {
    let grid = new Grid
    return grid
}

export function d6() {
    return Math.floor(Math.random() * 6 + 1)
}

export function gameStart(){
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export function randPosition(map : Map):number[]{
    let random = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
    if (map.wallMatrix[random[1]][random[0]] == 1){
        return randPosition(map)
    }else {
        return random
    }
}