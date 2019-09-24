'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

function copyFile ( fileName : string ){
    try {
        let text = fs.readFileSync(fileName,'utf8');
        let newFileName : string = fileName.substring(0,fileName.indexOf('.txt'));
        newFileName = newFileName + ' (Copy).txt';
        fs.writeFileSync(newFileName,text,'utf8')
    } catch (err) {
        console.log('something wrong');
    }
}
copyFile('my-File.txt');