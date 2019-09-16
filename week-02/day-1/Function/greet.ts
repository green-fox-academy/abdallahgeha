'use strict';

// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

let nameToGreet: string = 'Green fox';

function greet (greeted:string):string{
    let greeting: string = `greetings, dear ${greeted}`;
    return greeting;
}

console.log(greet(nameToGreet));