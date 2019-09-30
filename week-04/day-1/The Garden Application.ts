'use strict';

class Garden {
    private _plants = []
    public addFlower(flower: Flower) {
        this._plants.push(flower)
    }

    public get allPlants() {
        return this._plants
    }

    public addTree(tree: Tree) {
        this._plants.push(tree)
    }

    public waterAll(amount: number) {
        let thirstyPlants = 0
        this._plants.forEach(function (e) {
            if (e.needWater) {
                thirstyPlants++
            }
        })
        let watering = amount / thirstyPlants
        this._plants.forEach(function (e) {
           // console.log(e.amountOfWater)
            e.water(watering)
           // console.log(e.amountOfWater)
        })

        this._plants.forEach(function (e) {
            e.status
            
        })
    }

}

class Plant {

    protected _color: string;
    protected _waterAmount: number;

    constructor(color, waterAmount) {
        this._color = color;
        this._waterAmount = waterAmount
    }

}

class Flower extends Plant {

    constructor(color, waterAmount) {
        super(color, waterAmount)
    }

    public needWater(): boolean {
        if (this._waterAmount > 5) {
            return false
        } else {
            return true
        }
    }

    public status() {
        if (this.needWater) {
            console.log(`The ${this._color} flower needs water`)
        } else {
            console.log(`The ${this._color} flower does not need water`)
        }
    }

    public water(amountOfWater: number) {
        this._waterAmount += (amountOfWater * 0.75)
    }

}

class Tree extends Plant {

    constructor(color, waterAmount) {
        super(color, waterAmount)
    }

    public needWater(): boolean {
        if (this._waterAmount > 10) {
            return false
        } else {
            return true
        }
    }
    public status() {
        if (this.needWater) {
            console.log(`The ${this._color} tree needs water`)
        } else {
            console.log(`The ${this._color} tree does not need water`)
        }
    }

    public water(amountOfWater: number) {
        this._waterAmount += (amountOfWater * 0.4)
    }
}


let myGarden = new Garden()
myGarden.addFlower(new Flower('yellow', 5))
myGarden.addFlower(new Flower('blue', 5))
myGarden.addTree(new Tree('purple', 5))
myGarden.addTree(new Tree('orange', 5))

myGarden.waterAll(30);



