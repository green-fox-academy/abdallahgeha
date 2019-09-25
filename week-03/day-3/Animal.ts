'use strict';

export class Animal {
    _hunger : number ;
    _thirst : number ;

    constructor (hunger : number = 50 , thirst : number = 50 ){
        this._hunger = hunger ;
        this._thirst = thirst
    }
    public eat (){
        this._hunger-- ;
    }
    public drink (){
        this._thirst--;
    }
    public play (){
        this._hunger++;
        this._thirst++;
    }
    public get howHungry (){
        return this._hunger;
    }
    public get howThirsty (){
        return this._thirst;
    }
}

let animal1 = new Animal(40,30);
animal1.eat();
animal1.drink();

console.log(animal1.howHungry);
