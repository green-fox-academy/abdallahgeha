'use strict';

let map = {};

console.log('number of elements: ' + (Object.keys(map).length));

map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";

console.log('list of keys: ' + (Object.keys(map)));

let sepvalues = Object.keys(map).map(e => map[e]);
let values = sepvalues.join(',');
console.log(sepvalues);

map[68] = "D";

console.log('Number of pairs: ' + (Object.keys(map).length));

console.log("value associated with key 99: " + map[99]);

delete map[97];
console.log("value associated with key 97: " + map[97]);
let stat: boolean = true;
if (map[100] == undefined) {
    stat = false;
} else {
    stat = true;
}
console.log("1- associated value with key 100? " + stat);
console.log("2- associated value with key 100? " + map.hasOwnProperty(100));

Object.keys(map).forEach(function (e) {
    delete map[e];
})
console.log('Number of pairs: ' + (Object.keys(map).length));
