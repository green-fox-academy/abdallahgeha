let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true); // Also try http://444.hu/feed
httpRequest.send(null);

getJoke();
// setTimeout(getJoke, 4000);

let baseUrl = 'http://localhost:3000'
let id = 4
function init() {
    // Apply event listeners
    $('.up-Arrow').on('click', this.onUpVote.bind(this));
    $('.down-Arrow').on('click', this.onDownVote.bind(this));
}
async function  onUpVote() {
    await this.request('put', ('/posts/'+id+'/upvote'));
}
async function  onDownVote() {
    await this.request('put', ('/posts/'+id+'/upvote'));
}

function getJoke() {
    let request = new XMLHttpRequest();
    request.open('GET','http://api.icndb.com/jokes/random',true);

    let loadingElement = document.querySelector('.loader');
    let isLoading = false;

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let jokeElement = document.getElementById('joke');
        let response = JSON.parse(this.response);
        let joke = response.value.joke;
        jokeElement.innerText = joke;
        setTimeout(function () {
            loadingElement.classList.add('hide');
        }, 100);

    };

    request.onreadystatechange = function(){
        if (!isLoading) {
            // remove the hide class so the loader will be enabled
            loadingElement.classList.remove('hide');
            isLoading = true;
        }
        console.log(this.readyState);
    };

    request.send();


}