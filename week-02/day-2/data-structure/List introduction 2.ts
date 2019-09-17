'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = [...listA];  // attention
console.log(listA);
console.log("List A constains 'Durian':" + listA.some(function(e) {return e == 'Durian'}));


console.log(listB);


listB.splice(listB.indexOf('Durian'),1);
console.log(listB);

listA.splice(4,0,'Kiwifruit');
console.log(listA);

console.log("Is list A bigger than list B : " + (listA.length > listB.length));

console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));

listB.splice(listB.length,0,'Passion Fruit','Pomelo');
console.log(listB);

console.log(listA[2]);

