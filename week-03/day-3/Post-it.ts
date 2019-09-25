'use strict';

class postIt {
    private _backgroungColor : string ;
    private _text            : string ;
    private _textColor       : string ;
    
    constructor ( backgroundColor : string , text : string , textColor : string){
        this._backgroungColor = backgroundColor ;
        this._text = text;
        this._textColor = textColor;
    }
}

let postIt1 = new postIt('orange','Idea 1','blue');
let postIt2 = new postIt('pink','Awsome','black');
let postIt3 = new postIt('yellow','Superb','green');

