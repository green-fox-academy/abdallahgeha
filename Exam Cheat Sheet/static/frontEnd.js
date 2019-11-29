// Creating an elemenet and appending to parent 
let text = document.createElement('p');
document.querySelector('body').appendChild(text);

// setting attribute 
text.setAttribute('class', 'textmessage');
text.setAttribute('id', 'TT');

// adding event listeners 
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  // what will happen
})

// fetching data from backend through endpoint GET request
fetch('http://localhost:3000/api/links', { method: 'GET' })
  .then(response => response.json())
  .then((row) => {
    let text = document.createElement('p');
    text.innerHTML = `Your URL is aliased to ${row[0].alias} and your secret Code is ${row[0].secretCode}`;
    document.querySelector('body').appendChild(text);
  })

// Getting data from forums 
let url = document.querySelector('#url');
let alias = document.querySelector('#alias');
sendBody = JSON.stringify({
  "url": url.value,
  "alias": alias.value
})

// fetching data from backend through endpoint POST request
fetch('http://localhost:3000/api/links', { method: 'POST', body: JSON.stringify(sendBody), headers: { 'Content-Type': 'application/json' } })
  .then(response => response.json())
  .then((row) => {
    let text = document.createElement('p');
    text.innerHTML = `Your URL is aliased to ${row[0].alias} and your secret Code is ${row[0].secretCode}`;
    document.querySelector('body').appendChild(text);
  })


