'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(grl: string[], bys: string[]) {
    let matches: string[] = [];
    let lonely: string[] = [];
    for (let i: number = 0; (i < bys.length || i < grl.length); i++) {
        if (bys[i] == undefined || grl[i] == undefined) {
            lonely.push(bys[i]);
            lonely.push(grl[i]);
        } else {
            matches.push(bys[i] + ' & ' + grl[i]);
        }
    }
    return matches;
    
}
function loosers (grl: string[], bys: string[]) {
    let matches: string[] = [];
    let lonely: string[] = [];
    for (let i: number = 0; (i < bys.length || i < grl.length); i++) {
        if (bys[i] == undefined || grl[i] == undefined) {
            lonely.push(bys[i]);
            lonely.push(grl[i]);
        } else {
            matches.push(bys[i] + ' & ' + grl[i]);
        }
    }
    lonely = lonely.filter(function(e) {
        return e != undefined;
    })
    return lonely;
    
}
console.log('The matches')
console.log(makingMatches(girls, boys));
console.log('The loosers')
console.log(loosers(girls, boys));

export = makingMatches;