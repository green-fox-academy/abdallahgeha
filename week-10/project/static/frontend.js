let player = document.getElementById('player');
function initProgressBar() {

  let length = player.duration
  let current_time = player.currentTime;

  let totalLength = calculateTotalValue(length)
  document.getElementById("end-time").innerHTML = totalLength;

  let currentTime = calculateCurrentValue(current_time);
  document.getElementById("start-time").innerHTML = currentTime;

  let progressbar = document.getElementById('seek');
  progressbar.value = (player.currentTime / player.duration);
  progressbar.addEventListener("click", seek);
  if (player.currentTime == player.duration) {
    document.getElementById('play-btn').setAttribute("class", "fa fa-play");
  }

  function seek(event) {
    let percent = event.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    progressbar.value = percent / 100;
  }
};

function initPlayers() {

  (function () {
    let player = document.getElementById('player'),
      isPlaying = false,
      playBtn = document.getElementById('play-btn');

    if (playBtn != null) {
      playBtn.addEventListener('click', function () {
        togglePlay()
      });
    }

    function togglePlay() {
      if (player.paused === false) {
        player.pause();
        isPlaying = false;
        playBtn.className = "fa fa-play";
        player.load(); //call this to just preload the audio without playing
      } else {
        player.play();
        playBtn.className = "fa fa-pause";
        isPlaying = true;
      }
    }
  }());

  let volumeslider = document.querySelector('.volume');
  volumeslider.addEventListener('input', function () {
    volume(volumeslider.value);
  }, false);

  function volume(value) {
    volumeslider.value = value;
    player.volume = value / 100;
  }
}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - (minutes * 60),
    seconds_str = (seconds_int < 10 ? ('0' + seconds_int.toString()) : seconds_int.toString()),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time;
}

function calculateCurrentValue(currentTime) {
  let current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = (currentTime % 60),
    current_seconds = current_seconds_long.toFixed(),
    current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

  return current_time;
}

function initPlaylist() {

  function createplaylistElement(playlistTitle) {
    let playlist = document.createElement('tr');
    let playlistName = document.createElement('td');
    playlistName.innerHTML = playlistTitle;
    playlist.appendChild(playlistName);
    document.querySelector(".playlist > table").appendChild(playlist);
  }

  function createPlaylist() {
    fetch('http://localhost:3000/playlists', { method: 'GET' }) // GET here is not really needed
      .then(response => response.json())
      .then(playlists => playlists.forEach(e => createplaylistElement(e.title)))
      .catch(error => console.log(error))
  }

  createPlaylist();
}

function initSongs() {

  function createSonglist() {
    fetch('http://localhost:3000/playlist-tracks/', { method: 'GET' }) // GET here is not really needed
      .then(response => response.json())
      .then(tracks => {
        document.querySelector('.songList > table ').innerHTML = ''
        tracks.forEach(e => createTrackElement(e))
      })
      .catch(error => console.log(error))
  }


  function createTrackElement(track) {
    let song = document.createElement('tr');
    let songId = document.createElement('td');
    songId.innerHTML = track.id;
    let songName = document.createElement('td');
    songName.innerHTML = track.title;
    let songDuration = document.createElement('td');
    songDuration.innerHTML = calculateTotalValue(track.duration);
    song.appendChild(songId);
    song.appendChild(songName);
    song.appendChild(songDuration);
    song.addEventListener('click', function () {
      document.querySelector('.song > h2').innerHTML = track.title;
      document.querySelector('.song > h3').innerHTML = track.artist;
      player.setAttribute('src', track.path);
      player.pause()
      
      player.play();
      initProgressBar();
      initPlayers();
    })
    document.querySelector(".songList > table").appendChild(song);
  }

  let allSongs = document.querySelector(".left > h1");
  allSongs.addEventListener('click', function () {
    createSonglist();

  });
  createSonglist();
}

class WebPage {

  run = () => {
    initSongs();
    initPlayers();
    initPlaylist();
  }
}
let webPage = new WebPage
webPage.run();