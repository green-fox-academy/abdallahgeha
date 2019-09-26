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
    
    public get howMuchRum(){
        return this._drinkCount;
    }
}

class Ship {
    public _crew = [];
    private _shipName = 'Unknow'
    constructor(shipName?: string){
        if (shipName){
            this._shipName = shipName

        }
    }

    public get shipName(){
        return this._shipName
    }

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
                aliveCount++;
            }
        }
        return aliveCount;
    }

    public shipStats() {
        let captainRum = this._crew[0].stats["Consumed Rum"];
        //console.log(captainRum)
        //console.log("Alive crew: " + this.aliveCrew)
        return captainRum;
    }


    public battle(ship : Ship){
        let scoreAttacker : number = (this.aliveCrew() - this.shipStats()) ;
        //console.log('this is it  ' + this.aliveCrew())
        let scoreDeffender : number = ship.aliveCrew() - ship.shipStats();
       // console.log(scoreAttacker +' ' + scoreDeffender)
       console.log(this.shipName+"'s score is "+scoreAttacker+'\r\n'+ship.shipName+"'s score is "+scoreDeffender)
        let win : boolean = true;
        if(scoreAttacker - scoreDeffender > 0){
            win = true;
            let killedPirates = Math.floor(Math.random()*ship.aliveCrew() + 1)
            for (let i : number = 0; i < killedPirates ; i++){
                ship._crew[i+1].die()
            }

            for (let i : number = 0 ; i < this.aliveCrew() ; i++){
                let rumNumber = Math.floor(Math.random()*4 + 1);
                for (let j : number = 0 ; j<rumNumber ; j++){
                    this._crew[i].drinkSomeRun
                }
            }

        }else{
            win = false;
            let killedPirates = Math.floor(Math.random()*this.aliveCrew() + 1)
            for (let i : number = 1; i < killedPirates ; i++){
                this._crew[i].die()
            }

            for (let i : number = 0 ; i < ship.aliveCrew() ; i++){
                let rumNumber = Math.floor(Math.random()*4 + 1);
                for (let j : number = 0 ; j<rumNumber ; j++){
                    ship._crew[i].drinkSomeRun
                }
            }
        }
        return win ;
    }
}

class BattleApp {
    constructor(ship1:Ship,ship2:Ship){
        ship1.fillShip();
        ship2.fillShip();
        
        if (ship1.battle(ship2)){
            console.log(ship1.shipName + " won")
        }else{
            console.log(ship2.shipName + " won")
        }
    }

    
}

let ship1 = new Ship('aboud')
let ship2 = new Ship('jani')
let battle = new BattleApp(ship1, ship2 );
console.log('----------------');



class Armada {
    public _ships  = [];
    private _armadaName : string = 'Unknown';

    constructor(armadaName? : string){
        if (armadaName){
            this._armadaName = armadaName;
        }else{
            this._armadaName = 'unknown';

        }
        
    }
    public get armadaName(){
        return this._armadaName;
    }
    public get shipList(){
        return this._ships;
    }
    public recruteArmada (){
        let numberOfships = Math.floor(Math.random()*5 + 1)
               
        for (let i : number = 0 ; i < numberOfships ; i++){
            this.shipList.push(new Ship);
            this.shipList[i].fillShip();
            console.log(this.shipList[i])
        }
    }

    public war(armada : Armada){
        let i : number = 0;
        let j : number = 0;
        let armadaWin : boolean = true
        while(this.shipList[i] && armada.shipList[j]){
            
            if (this.shipList[i].battle(armada.shipList[j])){
                j++
            }else{
                i++
            }
        }
        if ( i >= this.shipList.length){
            armadaWin  = true
        }else {
            armadaWin  = false

        }
        return armadaWin

    }
}

class WarApp {

    constructor(armada1:Armada,armada2:Armada){
        armada1.recruteArmada();
        armada2.recruteArmada();
        
        if (armada1.war(armada2)){
            console.log(armada1.armadaName + " won")
        }else{
            console.log(armada2.armadaName + " won")
        }
    }

}

let Armadio = new Armada('Armadio');
let Armadamn = new Armada('Armadamn');

let war1 = new WarApp(Armadio, Armadamn );