'use strict';
import { d6, arraysEqual, refresh, gameStart } from "./functions";
import { Level, Map } from "./level";
import { newGrid } from "./functions";
import { Monster } from "./monsters"
import { Floor } from "./map"
import { Hero } from "./hero";



const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
window.onload = function () {
    let Enter: number = 0
    //let map = new Map
    
    let level = new Level
    let hero = new Hero
    document.body.addEventListener('keydown', onKeyPress);
    
    
     ctx.font = '100px Press Start 2P';
     ctx.fillText('Hello world', 10, 50);

    console.log("helloooooo")


    function onKeyPress(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 37:
                hero.moveLeft();
                refresh(hero)
                break;
            case 65:
                hero.moveLeft();
                refresh(hero)
                break;
            case 38:
                hero.moveUp();
                refresh(hero)
                break;
            case 87:
                hero.moveUp();
                refresh(hero)
                break;
            case 39:
                hero.moveRight();
                refresh(hero)
                break;
            case 68:
                hero.moveRight();
                refresh(hero)
                break;
            case 40:
                hero.moveDown();
                refresh(hero)
                break;
            case 83:
                hero.moveDown();
                refresh(hero)
                break;
            case 13:
                Enter++
                break;
        }
    }

    // Listen on pressing the keys
    document.body.addEventListener('keydown', onKeyPress);

}
