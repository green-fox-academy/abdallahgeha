// const request = new XMLHttpRequest();

// request.open('GET','http://localhost:3000/posts',true);

// request.onload = function() {

//       let data = JSON.parse(request.responseText);
//       for (let i = 0 ; i < data.posts.length ; i++ ){
//         console.log(data)
//         createPost(data.posts[i]);
//       }
//     };
// request.send();

fetch('http://localhost:3000/posts', { method: 'GET' })
  .then((response) => response.json())
  .then((data) => data.posts.forEach(post => createPost(post)))
  .catch((error) => console.log(error))

let submit = document.querySelector('#submit')
submit.addEventListener('click', () => {
  fetch('http://localhost:3000/posts', { method: 'POST' })
    .then((response) => response.json())
    .then((data) => createPost(data.posts))
    .catch((error) => console.log(error))
}); 

function createPost(object) {
  let cardBox = document.createElement("div");
  cardBox.setAttribute('class', 'card-box')
  let scoring = document.createElement("div");
  scoring.setAttribute('class', 'scoring')
  let upArrow = document.createElement("div");
  upArrow.setAttribute('class', 'up-Arrow');
  upArrow.innerHTML = '<a><button></button></a>';
  let score = document.createElement("div");
  score.setAttribute('class', 'score')
  score.innerHTML = `<h3>${object.score}</h3>`
  let downArrow = document.createElement("div");
  downArrow.setAttribute('class', 'down-Arrow');
  downArrow.innerHTML = '<a><button></button></a>';

  let post = document.createElement("div");
  post.setAttribute('class', 'post');
  let title = document.createElement("div");
  title.setAttribute('class', 'title');
  title.innerHTML = `<h2>${object.title}</h2>`;
  let text = document.createElement("div");
  text.setAttribute('class', 'text');
  text.innerHTML = `<h3>${object.url}</h3>`;

  document.querySelector('main').appendChild(cardBox);
  cardBox.appendChild(scoring);
  scoring.appendChild(upArrow);
  scoring.appendChild(score);
  scoring.appendChild(downArrow);
  cardBox.appendChild(post);
  post.appendChild(title);
  post.appendChild(text);

}