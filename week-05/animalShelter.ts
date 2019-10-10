'use strict';

export class Animal {
  protected _ownerName: string;
  protected _isHealthy: boolean;
  protected _healCost: number;
  protected _name: string;

  constructor(name: string = 'Animal') {
    this._name = name;
  }

  public get healingCost(): number {
    return this._healCost
  }

  // public set healPay(price : number){
  //   this._healCost = price 
  // }

  public heal(): void {
    this._isHealthy = true;
  }

  public isAdoptable(): boolean {
    if (this._isHealthy === true) {
      return true;
    } else {
      return false;
    }
  }

  public toString() {
    if (this.isAdoptable() === true) {
      console.log(this._name + ' is healthy, and adoptable')
    } else {
      console.log(this._name + ' is not healthy (' + this._healCost + '€), and not adoptable')
    }
  }
}


export class Cat extends Animal {

  constructor(name: string = 'Cat') {
    super(name)
    this._healCost = Math.floor(Math.random() * 7) // *(6 - 0 + 1) + 0

  }
}

export class Dog extends Animal {

  constructor(name: string = 'Dog') {
    super(name)
    this._healCost = Math.ceil(Math.random() * 8)

  }
}
export class Parrot extends Animal {

  constructor(name: string = 'Parrot') {
    super(name)
    this._healCost = Math.floor(Math.random() * (10 - 4 + 1) + 4) //(large - small + 1) + small 
  }
}