'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

function writeIntoFile (path:string , word: string , num : number){
    
    try{
        let wordLines : string[]  = [];
        for (let i = 0 ; i < num ; i++){
            wordLines.push(word);
        }
        let finalFile : string = wordLines.join('\r\n');
        
        fs.writeFileSync(path,finalFile,'utf8');
    } catch(err){
        console.log('Unable to write file');
    }

}

writeIntoFile('my-file.txt','start',6);