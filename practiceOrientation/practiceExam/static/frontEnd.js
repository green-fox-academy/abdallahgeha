let xhr = new XMLHttpRequest();

let button = document.querySelector('#myBtn');
let url = document.querySelector('#url');
let alias = document.querySelector('#alias');
button.addEventListener('click', () => {
  let text = document.createElement('p')
  text.innerHTML = 'i am being appended lol '
  button.setAttribute('style', 'color : red')
  button.setAttribute('disabled', '')
  document.querySelector('body').appendChild(text);
})
let form = document.querySelector('form');
form.addEventListener('submit', () => {
  event.preventDefault();
  
  sendBody = JSON.stringify({
    "url": url.value,
    "alias": alias.value
  })

  fetch('http://localhost:3000/api/links',{ method : 'POST' , body : sendBody , headers : {'Content-Type':'application/json'}})
  .then(response => response.json())
  .then( (row) => {
    let text = document.createElement('p');
    text.innerHTML = `Your URL is aliased to ${row[0].alias} and your secret Code is ${row[0].secretCode}`;
    document.querySelector('body').appendChild(text);
  })
})
