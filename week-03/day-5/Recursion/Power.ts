'use strict';

function powerN(base: number, power: number){
    
    if(power < 1){
        return 1
    }else{
        
        return (base*powerN(base,(power-1)));
    }
}
console.log(powerN(5,3))