'use strict';

export class Human {

    public _name: string;
    protected _HP: number;
    protected _MP: number;
    protected _isAlive: boolean;
    protected _level: number;
    protected _gender: string

    constructor(name?: string) {
        if (name != undefined) {
            this._name = name
        } else {
            this.die()
        }
        this._HP = 100;
        this._MP = 50;
        this._isAlive = true;
        this._level = 1;
    }

    public die() {
        this._isAlive = false
        this._HP = 0
        console.log('dead LOL')
        return [this._HP, this._MP]
    }

    public eat(ammount: number = 5) {
        this._HP += ammount
    }

    public castFireBall() {
        console.log('burn bitch')
        this._MP -= 10
    }
}

class Man extends Human {

}

let human = new Human
human.eat(10)
human.castFireBall()
console.log(human.die())
