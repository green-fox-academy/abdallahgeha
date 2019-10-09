'use strict';

export abstract class Human {

  public _name: string;
  protected _HP: number;
  protected _MP: number;
  protected _isAlive: boolean;
  protected _level: number;
  protected _gender: string;
  protected _age : number;

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

  public get getHP(): number {
    return this._HP;
  }

  public set setMP(newMana: number) {
    this._MP = newMana
  }
  public set setAge(Age : number){
    this._age = Age
  }

  public die() {
    this._isAlive = false
    this._HP = 0
    console.log('dead LOL')
    return [this._HP, this._MP]
  }

  public eat(ammount: number = 5) {
    this._HP += ammount;
  }

  public castFireBall() {
    console.log('burn bitch')
    this._MP -= 10;
  }
}

class Man extends Human {
  _gender = 'male'
  private _money: number = 0;

  public work() {
    this._HP -= 10 * this._money;
    this._money += 20;

  }

  public castFireBall() {
    this._MP -= 15;
  }
}

class Woman extends Human {
  _gender = 'female'
}

class Kid extends Human {

  constructor(name : string){
    super(name)
    this._age = 0
  }

}

class Family {
  private _man : Man;
  private _woman : Woman;
  private _kids : Kid[] = [];

  public constructor(man : Man , woman : Woman){
    this._man = man;
    this._woman = woman;
  }

  public get getKids(){
    return this._kids
  }

  public procreat(name:string){
    
      this._kids.push(new Kid(name))
    
  }

  public familyGathering(){
    console.log(this._man._name , this._woman._name , this._kids.map(e=> e._name))
  }
}

let man = new Man('ABOUD')
man.setAge = 26
man.eat();
man.eat();
man.castFireBall();

let woman = new Woman('Franceska')
woman.setAge = 25
woman.setMP = 100
console.log(woman)

let family = new Family(man,woman)
family.procreat('boiiii')
family.procreat('lill dicky')
family.familyGathering()
family.getKids[1].die()
console.log(family.getKids[1].getHP)