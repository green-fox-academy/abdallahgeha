import {Sharpie} from "./Sharpie";


function initializeSharpieSet(){
    let sharpies = [];
    sharpies.push(new Sharpie('red',50));
    sharpies.push(new Sharpie('blue',20));
    sharpies.push(new Sharpie('purple',210));
    sharpies.push(new Sharpie('black',220));
    return sharpies;
}
let sharpieSet = initializeSharpieSet();

class SharpieSet {
    
    public countUsable(sharpie : SharpieSet) : boolean{
        for (let i = 0 ; i < this.sharpie.length ; i++){
            return (sharpie[i].inkLeft() != 0);
        }
    }
    
    public removeTrash(sharpie: Sharpie){
        return
    }
}

