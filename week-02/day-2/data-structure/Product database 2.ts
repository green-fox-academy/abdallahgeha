'use strict';

let map = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550,
};

let below201: string[] = [];
Object.keys(map).forEach(function (e) {
    if (map[e] < 201) {
        below201.push(e);
    }
})
console.log("How many products' price is below 201? " + below201);

let more150: string[] = [];
let priceMore150: number[] = [];
Object.keys(map).forEach(function (e) {
    if (map[e] > 150) {
        more150.push(e);
        priceMore150.push(map[e]);
    }
})
console.log("Which products cost more than 150? ")
for (let i: number = 0; i < more150.length; i++) {
    console.log(more150[i] + " : "+ priceMore150[i])
}