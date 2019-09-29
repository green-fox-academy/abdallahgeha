'use strict'

function maxArray(array : number[]){
    let max = 0
    let n = array.length
    
    if (array) {
        return maxArray(array.splice(1,array.length-1))
    }
}
console.log([1,5,8,9,6,4])