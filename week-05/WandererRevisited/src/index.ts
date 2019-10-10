'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
window.onload = function () {
    
    
    
    
     ctx.font = '100px PressStart';
     ctx.fillText('Hello world', 10, 50);

    console.log("helloooooo")


    function onKeyPress(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 37:
                // hero.moveLeft();
                // refresh(hero)
                break;
            case 65:
                // hero.moveLeft();
                // refresh(hero)
                break;
            case 38:
                // hero.moveUp();
                // refresh(hero)
                break;
            case 87:
                // hero.moveUp();
                // refresh(hero)
                break;
            case 39:
                // hero.moveRight();
                // refresh(hero)
                break;
            case 68:
                // hero.moveRight();
                // refresh(hero)
                break;
            case 40:
                // hero.moveDown();
                // refresh(hero)
                break;
            case 83:
                // hero.moveDown();
                // refresh(hero)
                break;
            case 13:
                // Enter++
                break;
        }
    }

    // Listen on pressing the keys
    document.body.addEventListener('keydown', onKeyPress);

}
