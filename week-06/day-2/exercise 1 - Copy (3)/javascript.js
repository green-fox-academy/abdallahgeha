let king = document.getElementById("b325");
console.log(king);
let businessLamp = document.getElementsByClassName("big")
console.log(businessLamp[0]);
console.log(businessLamp[1]);
let conceitedKing = document.querySelectorAll(".container > .asteroid")
alert(conceitedKing[0]);
alert(conceitedKing[1]);
let tempNoBuisiness = document.querySelectorAll("body > p");
noBuisiness =[...conceitedKing,...tempNoBuisiness]
console.log(noBuisiness);