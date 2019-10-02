class CAB {
    private _randomNumber: number = Math.floor(Math.random() * 10000)
    private _guessCounter: number
    public playing() {
        return this._randomNumber
    }

    public finished() {
        this._randomNumber = Math.floor(Math.random() * 10000)
        return this._randomNumber

    }

    guess(guess: number) {
        console.log(this._randomNumber)

        this._guessCounter++
        let temp1a = guess.toString()
        let temp1b = temp1a.split('')
        let temp2a = this._randomNumber.toString()
        let temp2b = temp2a.split('')
        let cows = 0
        let bulls = 0
       // console.log(temp1b)
        //console.log(temp2b)
        for (let i: number = 0; i < 4; i++) {
            if (temp1b[i] == temp2b[i]) {
                bulls++
            }
        }
        for (let i: number = 0; i < 4; i++) {
            for (let j: number = 0; j < 4; j++) {
                if ( temp2b[i] == temp1b[j]){
                    cows++
                }
            }
        }

        cows -= bulls 
        console.log('cows: ' + cows + ' bulls: '+bulls)
        // console.log(temp1b)
    }
}
let cow = new CAB
//console.log(cow.playing())
//console.log(cow.finished())
cow.guess(1234)