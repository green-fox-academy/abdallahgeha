'use strict';

class Pirate {

    private _drinkCount: number = 0;
    private _alive: boolean = true;
    
    public get stats(){
        return {
            "Consumed Rum" : this._drinkCount,
            "State"        : `Is alive (${this._alive})`
        }
    }

    public drinkSomeRun() {
        if (this._alive) {
            this._drinkCount++
        } else {
            console.log("he's dead");
        }
    }

    public howsItGoingMate() {
        if (this._alive) {
            if (this._drinkCount <= 4) {
                let reply: string = 'Pour me anudder!'
                console.log(reply);
                this.parrot(reply);
            } else {
                let reply: string = "Arghh, I'ma Pirate. How d'ya d'ink its goin?"
                console.log(reply);
                this.parrot(reply);
                this.passOut();
            }

        } else {
            console.log("he's dead");
        }
    }

    public passOut() {
        console.log('ZzZzZZ');
    }
    public isAlive(){
        return this._alive
    }

    public die() {
        this._alive = false;
    }

    public brawl(pirate: Pirate) {
        let outcomeOfFight = Math.floor(Math.random() * 3 + 1)
        if (outcomeOfFight == 1) {
            this.die();
        } else if (outcomeOfFight == 2) {
            pirate.die()
        } else {
            this.passOut()
            pirate.passOut()
        }
    }

    public parrot(reply: string) {
        console.log('krr ' + reply + ' krr');
    }
}

class Ship {
    private _crew = [];

    public fillShip(){
        let numberOfPirates = Math.floor(Math.random()*10 + 1)
        this._crew.push(new Pirate);        //this will be the captain
        for (let i : number = 0 ; i < numberOfPirates ; i++){
            this._crew.push(new Pirate);
        }
    }

    public aliveCrew(){
        let aliveCount = 0;
        for (let i : number = 1; i < this._crew.length ; i++){
            if (this._crew[i].isAlive){
                aliveCount++
            }
        }
        return aliveCount;
    }

    public shipStats() {
        console.log(this._crew[0].stats)
        console.log("Alive crew: " + this.aliveCrew)
    }

    public battle(ship : Ship){
        
    }
}