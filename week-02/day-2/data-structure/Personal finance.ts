'use strict'

let list: number[] = [500, 1000, 1250, 175, 800, 120];

console.log("How much did we spend? \t\t\t\t"+ list.reduce((a,b) => a + b, 0 ))
console.log("Which was our greatest expense? \t\t"+Math.max(...list));
console.log("Which was our cheapest spending? \t\t"+Math.min(...list));
console.log("What was the average amount of our spendings? \t"+list.reduce((a,b) => (a+b),0) / list.length);

