'use strict';

function addnumber(n : number ){
    if (n <= 1){
        return 1
    }else{
        return (n + addnumber(n-1))
        
    }
}


console.log(addnumber(3))