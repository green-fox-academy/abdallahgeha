'use strict'
import {Animal} from "./Animals";


let animalList = [
    new Animal(),
    new Animal(),
    new Animal(),
    new Animal(),
    new Animal(),
    new Animal(),
    new Animal(),

]

class Farm {

    private _Slot : number = 5;
    public breed(animalList) {
        if (this._Slot > 0){
            animalList.push(new Animal());
        }
    } 

    public slaughter(){
        
    }
}
