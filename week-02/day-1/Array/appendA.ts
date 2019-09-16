'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

function appendAFunc(st: string): string {
    let newSt: string = `${st}a`;
    return newSt;
}

let animals: string[] = ["koal", "pand", "zebr"];
animals = animals.map(function (e) { return `${e}a` }); // sorry ".map"

console.log(animals);
