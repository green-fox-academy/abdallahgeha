'use strict';

let priceList = {
    "Milk": 1.07,
    "Rice": 1.59,
    "Eggs": 3.14,
    "Cheese": 12.60,
    "Chicken Breasts": 9.40,
    "Apples": 2.31,
    "Tomato": 2.58,
    "Potato": 1.75,
    "Onion": 1.10,
};

let bobList = {
    "Milk": 3,
    "Rice": 2,
    "Eggs": 2,
    "Cheese": 1,
    "Chicken Breasts": 4,
    "Apples": 1,
    "Tomato": 2,
    "Potato": 1,

};

let aliceList = {
    "Rice": 1,
    "Eggs": 5,
    "Chicken Breasts": 2,
    "Apples": 1,
    "Tomato": 10,

};

let bobPay: number = 0;
for (let i: number = 0; i < Object.keys(bobList).length; i++){
    bobPay = bobPay + (bobList[Object.keys(bobList)[i]] * priceList[Object.keys(bobList)[i]] );
}
console.log("Bob pays : " + bobPay);

let alicePay: number = 0;
for (let i: number = 0; i < Object.keys(aliceList).length; i++){
    alicePay = alicePay + (aliceList[Object.keys(aliceList)[i]] * priceList[Object.keys(aliceList)[i]] );
}
console.log("Alice pays : " + alicePay);

console.log("Does Bob buy more rice than Alice? " + (bobList["Rice"] > aliceList["Rice"]));

console.log("Does Bob buy more Potato than Alice? " + (bobList["Potato"] > aliceList["Potato"]));

console.log("Does Bob buy more different products than Alice? " + (Object.keys(bobList).length > Object.keys(aliceList).length));


let totalBobItems : number = 0;
let totalAliceItems : number = 0;

let bobValues = Object.keys(bobList).map(e => bobList[e]);
let aliceValues = Object.keys(aliceList).map(e => aliceList[e]);
totalBobItems =  bobValues.reduce((a,b) => a + b, 0 );
totalAliceItems =  aliceValues.reduce((a,b) => a + b, 0 );
console.log("Did Bob buys more products than Alice ? " + (totalBobItems > totalAliceItems));