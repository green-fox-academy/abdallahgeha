'use strict'

class Station {
    private _gasAmount;
    public refill(car: Car) {
        this._gasAmount -= car.gasCapacity
        car.fullRefill();
    }
}

class Car {
    private _gasAmout;
    private _capacity;
    constructor (){
        this._gasAmout = 0;
        this._capacity = 100;
    }

    public fullRefill(){
        this._gasAmout = this._capacity
    }
    public get gasCapacity () {
        return this._capacity;
    }

}