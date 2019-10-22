let forthP = document.querySelectorAll("p:nth-child(4)")
console.log(forthP[0].getAttribute("class"));
if (forthP[0].getAttribute("class") == "dolphin"){
  let apple = document.getElementsByClassName("apple")
  apple[0].innerText = "pear";
}

let firstP = document.querySelectorAll("p:nth-child(1)")
console.log(firstP[0].getAttribute("class"));
if (firstP[0].getAttribute("class") == "apple"){
  let cat = document.getElementsByClassName("cat")
  cat[0].innerText = "dog";
}
console.log(apple[0])
apple[0].setAttribute("class", "red")
