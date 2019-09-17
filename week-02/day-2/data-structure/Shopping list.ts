'use strict'

let list: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

console.log("Do we have milk on the list? " + list.some(function(e) { return e == "milk"}));

console.log("Do we have bananas on the list? " + list.some(function(e) { return e == "bananas"}));
