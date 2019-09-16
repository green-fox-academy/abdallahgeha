const evens1 = [2, 4, 6, 8];
const numbers = [1, 3, 5, 7, ...evens1];
console.log(numbers);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];

console.log(arr1)

// Array methods

console.log(['apple', 'pear', 'melon'].indexOf('pear'));

['apple', 'pear', 'melon'].forEach(function (e, i) { console.log(e, i); });

let triples = [1, 2, 3, 4, 5].map(function (e) { return e * 3; });
console.log(triples);

let evens = [1, 2, 3, 4, 5].filter(function (e) { return e % 2 == 0; })
console.log(evens);

let isAllEven = [2,6,14,5,4].every(function(e) { return e%2 == 0;});
console.log(isAllEven);

let isAnyEven = [2,6,14,5,4].some(function(e) {return e%2==0;});
console.log(isAnyEven);

let letters = 'apple'.split('');

console.log(letters);
console.log(letters.join('@'));