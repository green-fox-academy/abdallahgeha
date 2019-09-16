'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (name,...params){
    console.log(name);
    console.log(params);
}

printParams('aboud',2,2,6);