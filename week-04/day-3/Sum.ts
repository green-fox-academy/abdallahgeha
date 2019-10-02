export class Summation {
    sum(list : number[]){
        return list.reduce((a, b) => a + b, 0)
    }
}
