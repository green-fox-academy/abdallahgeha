const request = new XMLHttpRequest();

request.open('GET','http://localhost:3000/posts',true);

request.onload = function() {
    
      let posts = JSON.parse(this.responseText);
      for (let i = 0 ; i < posts.posts.length ; i++ ){
        alert(posts.posts[i])
        createPost(posts.posts[i]);
      }
    };
request.send();



function createPost(object){
    let cardBox = document.createElement("div");
    cardBox.setAttribute('class','card-box')
    let scoring = document.createElement("div");
    scoring.setAttribute('class','scoring')
    let upArrow = document.createElement("div");
    upArrow.setAttribute('class','up-Arrow');
    upArrow.innerHTML = '<a><img></a>';
    let score = document.createElement("div");
    score.innerHTML = `<h3>${object[score]}</h3>`
    let downArrow = document.createElement("div");
    downArrow.setAttribute('class','down-Arrow');
    downArrow.innerHTML = '<a><img></a>';
  
    let post = document.createElement("div");
    post.setAttribute('class','post');
    let title = document.createElement("div");
    title.setAttribute('class','title');
    title.innerHTML = `<h2>${object[title]}</h2>`;
    let text = document.createElement("div");
    text.setAttribute('class','text');
    text.innerHTML = `<h3>${object[url]}</h3>`;
  
    document.getElementById('cards').appendChild(cardBox);
    cardBox.appendChild(scoring);
    scoring.appendChild(upArrow);
    scoring.appendChild(score);
    scoring.appendChild(downArrow);
    cardBox.appendChild(post);
    post.appendChild(title);
    post.appendChild(text);
  
  }