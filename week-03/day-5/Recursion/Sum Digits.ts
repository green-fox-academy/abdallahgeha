'use strict';

function sumDigits(num : number){
    let i = 0
    if (num < 1){
        return 0
    }else{
        i++
        return ( (num % 10) + sumDigits(Math.floor(num/10)) )
    }
}
console.log(sumDigits(1511))
