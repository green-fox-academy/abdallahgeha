'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets( list : any[]){
    list = list.map(function (e){
        if (e == 2){
            e = "Croissant";
        }else if(e == false){
            e = "Ice cream";
        }
    return e
    })
    return list
}   
console.log(sweets(shopItems));
export = sweets;