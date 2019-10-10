'use strict';

export function sum(number : number[]): number{

  let sum = number.reduce((sum,a)=> a+sum , 0)

  return sum
}

// console.log(sum([1,2,3]))

export class Car {
  private _carName : string ; 

  constructor(name : string ){
    this._carName = name;
  }

  public get carname(){
    return this._carName
  }
}

