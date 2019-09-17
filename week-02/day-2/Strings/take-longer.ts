'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let fix: string = "always takes longer than";


let peice1: string = quote.slice(0, quote.indexOf('you expect'));
let peice2: string = quote.slice(quote.indexOf('you expect'));
let newquote: string = peice1 + fix +' '+ peice2;
//let newquote: string[] = quote.split(" ");


console.log(newquote);