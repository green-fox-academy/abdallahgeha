'use strict';

let map = {
    "978-1-60309-452-8" : "A Letter to Jo",
    "978-1-60309-459-7" : "Lupus",
    "978-1-60309-444-3" : "Red Panda and Moon Bear",
    "978-1-60309-461-0" : "The Lab"
};

Object.keys(map).forEach(function(e) {
    console.log(map[e] + "(ISBN: " + e)
})

delete map[978-1-60309-444-3];

map[978-1-60309-450-4] = "They Called Us Enemy";
map[978-1-60309-453-5] = "Why Did We Trust Him?";

Object.keys(map).forEach(function(e) {
    if (map[e] === "The Lab"){
        delete map[e];
    }
})
console.log("(test for previous) associated value with key 978-1-60309-461-0 ? " + map.hasOwnProperty(978-1-60309-461-0));

console.log("associated value with key 478-0-61159-424-8 ? " + map.hasOwnProperty(478-0-61159-424-8));

console.log(" value associated with key 978-1-60309-453-5 "+ map[978-1-60309-453-5]);

Object.keys(map).forEach(function(e) {
    console.log(map[e] + "(ISBN: " + e)
})