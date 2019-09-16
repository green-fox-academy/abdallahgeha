'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string[] = ["Arthur", "Boe", "Chloe"];
let temp:string = abc[abc.length-1];
abc[abc.length-1] = abc[0] ;
abc[0] = temp;

console.log(abc);

