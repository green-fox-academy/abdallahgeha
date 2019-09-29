'use strict';

function bunnyEars(number : number){
    if ( number == 1){
        return 2
    }else{
        return 2 + bunnyEars(number - 1)
    }
}

console.log(bunnyEars(10))