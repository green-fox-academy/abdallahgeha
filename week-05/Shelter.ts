'use strict';
import { Cat, Dog, Parrot, Animal } from "./animalShelter"

class Shelter {
  private _budget: number = 50;
  private _animals: Animal[] = [];
  private _adoptersList: string[] = [];

  public rescue(animal: Animal): number {
    this._animals.push(animal);
    return this._animals.length;
  }

  public heal(): number {

    for (let i: number = 0; i < this._animals.length; i++) {
      if (this._animals[i].isAdoptable() === false && this._budget >= this._animals[i].healingCost) {
        this._animals[i].heal();
        this._budget -= this._animals[i].healingCost;
        return 1;
      }
    }
    return 0;
  }

  public addAdopter(adopterName: string): void {
    this._adoptersList.push(adopterName)
  }

  public findNewOwner(): void {
    if (this._adoptersList.length > 0) {
      if (this._animals.some(function (e) {
        return e.isAdoptable() === true
      })) {
        this._adoptersList.splice(Math.floor(Math.random() * this._adoptersList.length), 1);
        for (let i: number = 0; i < this._animals.length; i++) {
          if (this._animals[i].isAdoptable() === true) {
            this._animals.splice(i, 1);
          }
        }
      }
    } else {
      console.log('No adopter')
    }
    console.log(this._animals);
    console.log(this._adoptersList);
  }

  public earnDonation(number: number): number {
    this._budget += number;
    return this._budget
  }


}

let cat1 = new Cat;
cat1.heal();
let cat2 = new Cat;
cat2.heal();
let cat3 = new Cat;
cat2.heal();
let paliShelter = new Shelter;
paliShelter.addAdopter('pali');
paliShelter.addAdopter('paaaliii')
paliShelter.rescue(cat1);
paliShelter.rescue(cat2);
paliShelter.rescue(cat3);

paliShelter.findNewOwner();
