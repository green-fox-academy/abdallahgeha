'use strict';
/*declare function require(path: string): any;
export{};*/
const fs = require('fs');

function reversed(fileName: string) {
    try {
        let text = fs.readFileSync(fileName, 'utf8');
        let textLines = text.split('\r\n');
        let textLetters = [];
        console.log(textLines.length);
        for (let i = 0; i < textLines.length ; i++){
            
            textLines[i].split('');
           
           //console.log(textLines[i]);
            textLetters.push(textLines[i].split(''));
        }
            
        //let finalText = textLetters.forEach(element => {
        //   element.reverse();
        //});

        console.log(textLetters);
    } catch (err) {
        console.log('something wrong');

    }
}

reversed('reversed-lines.txt');