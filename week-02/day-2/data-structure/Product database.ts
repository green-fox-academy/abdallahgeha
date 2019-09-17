'use strict';

let map = {
    "Eggs" : 200 ,
    "Milk" : 200 ,
    "Fish" : 400 ,
    "Apples" : 150 ,
    "Bread" : 50 ,
    "Chicken" : 550,
};

console.log('How much is the fish? '+ map["fish"]);

let values = Object.keys(map).map(e => map[e]);
//let sepvalues = values.join(',');
//console.log(values);
let mostExpPrice  = Math.max(...values);
let mostExpensive: string = '';
Object.keys(map).forEach(function(e) {
    if (map[e] === mostExpPrice){
        mostExpensive = e;
    }
})
console.log('What is the most expensive product? '+ mostExpensive);


let averagePrice = values.reduce((a,b) => (a+b),0) / values.length;
console.log('What is the average price? '+averagePrice);

let below300 : number = 0;
Object.keys(map).forEach(function(e) {
    if (map[e] < 300){
        below300++;
    }
})
console.log("How many products' price is below 300? "+ below300);

console.log('Is there anything we can buy for exactly 125? '+ values.some(function(e) { return e == 125}));

let cheapestPrice  = Math.min(...values);
let cheapest: string = '';
Object.keys(map).forEach(function(e) {
    if (map[e] === cheapestPrice){
        cheapest = e;
    }
})
console.log('What is the cheapest product? '+cheapest);