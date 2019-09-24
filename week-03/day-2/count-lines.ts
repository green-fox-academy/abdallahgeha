'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');



function readFile(fileName : string) {
    try{
        let readMe = fs.readFileSync('my-file.txt', 'utf8');
        let lines = readMe.split('\r\n');
        console.log(lines.length)
    }catch(error) {
        console.log('0');
    }
    
    
}
readFile('gggg');