'use strict';

declare function require(path: string): any;
const fs = require('fs');
let file : string
let badWords = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
try{
   file = fs.readFileSync('swear.txt','utf8')
}catch (err){
  console.log("file not readable")
 // Process.exit()
}
let words = file.split(' ')
const numberOfwords = words.length
let cleanWords = words.filter(function(word){
  return (
    badWords.some(function(badword) {
    return word.toLowerCase() == badword
    })
   == false)
})
let numberOfBad = numberOfwords -  cleanWords.length 
let cleanFile = cleanWords.join(' ')
console.log(numberOfBad)

try {
  fs.writeFileSync('Clean File.txt',cleanFile,'utf8')
}catch (err){
  console.log('file can\'t be written')
}
