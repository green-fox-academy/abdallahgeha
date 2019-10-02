export function Fibonacci(n : number){

    if( n <= 3){
        return 1
    }else{
        return   Fibonacci(n-1) + Fibonacci(n-2)
    }
}

console.log(Fibonacci(9))