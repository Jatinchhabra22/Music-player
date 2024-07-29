let songIndex = 0;

let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');



let songs  = [
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
    {songName : "salam-e-ishq", filePath:"song/1.mp3", coverPath : "covers/1.jpg"},
]

 
// audioElement.play()

// handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('bx-play') // changing from play to pause 
        masterPlay.classList.add('bx-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('bx-pause')
        masterPlay.classList.add('bx-play')
        gif.style.opacity = 0;
    }
})

// listen to events 
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
