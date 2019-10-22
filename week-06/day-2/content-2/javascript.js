let list = ['apple', 'banana', 'cat', 'dog'];

let items = document.querySelectorAll("li");
for(let i = 0 ; i < items.length ; i++){
  items[i].innerText =  list[i] ;
  items[i].setAttribute("class","green")
}
