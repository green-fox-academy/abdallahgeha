let createCandies = document.querySelector('.create-candies');
let buyLollipop = document.querySelector('.buy-lollypops');
let candyMachine = document.querySelector('.candy-machine');
let candies = document.querySelector('.candies');
let lollipops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let candyNumber = 0;
let lollipopnumber = 0;
let multiplier = 1;
createCandies.addEventListener('click', (event) => {
  candyNumber += 1;
  candies.innerHTML = candyNumber + " Candies"
})
buyLollipop.addEventListener('click', (event) => {
  if (candyNumber >= 100) {
    candyNumber -= 100;
    lollipopnumber += 1;
    lollipops.innerHTML = lollipopnumber + "  🍭"
  }
})
candyMachine.addEventListener('click', (event) => {
  multiplier *= 10;
  speed.innerHTML = multiplier + "  X"
})
setInterval(() => {
  let addCandy = Math.floor(lollipopnumber / 10)*multiplier
  candyNumber += addCandy;
  candies.innerHTML = candyNumber + " Candies"
}, 1000);