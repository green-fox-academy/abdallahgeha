'use strict';

class Counter {
    private _integer: number;

    constructor(integer?:number){
        if(integer){
            this._integer = integer;
        }else{
            this._integer = 0;
        }
    }

    public add(number? : number){
        if (number){
            this._integer += number;
        } else {
            this._integer++
        }
    }
    public get getValue (){
        return this._integer;
    }

    public reset(){
        this._integer = 0;
    }
}

let count1 = new Counter;
count1.add(20)
console.log(count1.getValue)