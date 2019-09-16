'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (factored:number) : number {
    let i: number;
    let fact: number = 1;
    for (i = 0; i < factored; i++){
        fact = fact * (factored - i) ;
    }
    return fact;
}

console.log(factorio(4));