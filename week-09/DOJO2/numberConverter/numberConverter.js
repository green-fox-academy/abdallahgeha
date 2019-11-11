const numberToWords = require('number-to-words');
const { wordsToNumbers } = require('words-to-numbers');

const convertNumber = (number) => numberToWords.toWords(number);
const convertWords = (string) => wordsToNumbers(string);

module.exports = { convertNumber, convertWords };
