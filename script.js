console.log("Welcome to Music player");

//Initialize the variables
let songindex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
console.log(audioElement);
let songNames=[
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
]
//.audioElement.play();

//Handle play/pause/click 
console.log(masterPlay);
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){   
        audioElement.play();
    masterPlay.classList.remove(console.log("Welcome to Music player");

//Initialize the variables
let songindex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
console.log(audioElement);
let songNames=[
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
    {songName:"love me like you do", filePath:"song.mp3",coverPath:"covers/coverimage.jpg"},
]
//.audioElement.play();

//Handle play/pause/click 
console.log(masterPlay);
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){   
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{ audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
 //update seekbar
})
)
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
 //update seekbar
})


