'use strict';

let list = [];

console.log('number of elements: ' +(list.length));

list[0] = 'William';

console.log('number of elements: ' +(list.length));
console.log("is list empty: " + (((list).length) == 0));

list[1] = 'John' ;
list[2] = 'Amanda';

console.log('number of elements: ' +(list.length));

console.log(list[2]);

list.forEach(function (e){
    console.log(e);
});

list.forEach(function (e,i){
    console.log(`${i+1}. ${e}`);
});

list = list.filter(function(e){
    return e != list[1];
})

list.reverse().forEach(function (e){
    console.log(e);
});

list = list.filter(function(e){
})

console.log('number of elements: ' +(list.length));