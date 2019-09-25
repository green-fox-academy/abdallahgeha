class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    public get getA(){
       return this.values[0]
    }
    public get getB(){
        return this.values[1]
    }
}

export {Domino};