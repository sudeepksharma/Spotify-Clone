console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("assets/song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Fear Song - Devara (Part 1)",
    filePath: "assets/song1.mp3",
    coverPath: "assets/covers1.jpg",
  },
  {
    songName: "Jawan - Title Track",
    filePath: "assets/song2.mp3",
    coverPath: "assets/covers2.jpg",
  },
  {
    songName: "Millionare - Glory - Yo Yo Honey Singh",
    filePath: "assets/song3.mp3",
    coverPath: "assets/covers3.jpg",
  },
  {
    songName: "Brown Rang - Yo Yo Honey Singh",
    filePath: "assets/song4.mp3",
    coverPath: "assets/covers4.jpg",
  },
  {
    songName: "A Flying Jatt - Title Track",
    filePath: "assets/song5.mp3",
    coverPath: "assets/covers5.jpg",
  },
  {
    songName: "Bhool Bhulaiya - Title Track",
    filePath: "assets/song6.mp3",
    coverPath: "assets/covers6.jpg",
  },
  {
    songName: "Desi Boyz",
    filePath: "assets/song7.mp3",
    coverPath: "assets/covers7.jpg",
  },
  {
    songName: "Rom Rom- Crakk",
    filePath: "assets/song8.mp3",
    coverPath: "assets/covers8.jpg",
  },
  {
    songName: "Pyaar bhi jhutha",
    filePath: "assets/song9.mp3",
    coverPath: "assets/covers9.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");  
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex= parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play")
      e.target.classList.add("fa-circle-pause")
      audioElement.src=`assets/song${songIndex+1}.mp3`;
      masterSongName.innerText= songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause"); 
    });
  });

  document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=8){
      songIndex = 0
    }else{
      songIndex += 1;
    }
    audioElement.src=`assets/song${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  })

  document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
      songIndex = 8
    }else{
      songIndex -= 1;
    }
    audioElement.src=`assets/song${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  })