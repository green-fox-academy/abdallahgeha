let paragraph = document.querySelectorAll("p");
console.log(paragraph);
for(let i = 1 ; i < paragraph.length ; i++){
  paragraph[i].innerText +=  ' ' + paragraph[i-1].innerText ;
}