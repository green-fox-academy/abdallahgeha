'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

function duplicatRemover ( fileName : string ){
    try {
        let text = fs.readFileSync(fileName,'utf8');
        let textLines = text.split('\r\n');
        let textWords = textLines.map(e => e.split(''));
        textWords =  textWords.map(element => {
            unique(element);
        });
        let finalText = textWords.map(e => e.join(''));

      //  let superFinal = finalText.forEach(e => e.);

        console.log(textWords);


    } catch (err) {
        console.log('something wrong');
    }
}
duplicatRemover('duplicated-chars.txt');

//let a = [1,1,2,2,3,3,' ',3];
//let b = [];
/*for ( let i = 0 ; i < a.length ; i++){
    if (a[i] == a[i+1]){
        b.push(a[i]);
    }
}
console.log(b);*/
function unique(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0){
            arr2.push(arr[i]);
        }
    }

    return arr2;
}
// = unique(a) ;
//console.log(b)