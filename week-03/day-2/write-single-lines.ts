'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

try{
    let myName : string = 'Aboud geha';
    fs.writeFileSync('my-file.txt',myName,'utf8');
} catch (err) {
    console.log("Unable to write file: my-file.txt");
}
