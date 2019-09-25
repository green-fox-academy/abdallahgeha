export class Sharpie {
    _color : string ;
    _width : number ;
    _inkAmount : number = 100;

    constructor (color : string , width : number) {
        this._color = color ;
        this._width = width;
    }

    public use (){
        this._inkAmount--;
    }

    public get inkLeft(){
        return this._inkAmount;
    }
}
let sharpie1 = new Sharpie('red',20)
sharpie1.use();
sharpie1.use();
console.log(sharpie1.inkLeft);