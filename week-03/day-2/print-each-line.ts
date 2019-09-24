'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

try{
    let readMe = fs.readFileSync('my-file.txt', 'utf8');
    let lines = readMe.split('\r\n');
    console.log(lines);
} catch(err) {
    console.log("Unable to read file: my-file.txt");
}