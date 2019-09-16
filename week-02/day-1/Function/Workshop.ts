'use strict';

function greetFoxAlert() {
    alert('Hello Green Fox!');
  }
  
 // greetFoxAlert(); alert doesn't work in terminal
  
  function greetFoxLog() {
    console.log('Hello Green Fox!');
  }
  
  greetFoxLog();

// 
function greetByName(name1: string) {
    console.log(arguments);
    console.log('Well hi there,', name1);
  }
  
  greetByName('Tojas');
  greetByName('Barbi, CEO');

// Default values for function arguments
  function greet(greet = 'Hi' , name2 = 'pal') {
      console.log(greet, name2) ;

  }

  greet('hey');
  greet('Hello', 'Tojas') ;

// Function return values

function makeGreen(name3: string) : string {
    let newName = `Green ${name3}` ;
    return newName ;
}

let name3 = makeGreen('Tojas');
console.log('Whazzup', name3);

