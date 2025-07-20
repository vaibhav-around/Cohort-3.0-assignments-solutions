window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);


function handleResize(){
   if(window.innerWidth <= 1024){
    document.getElementById("main-nav").style.height = '50px';
    document.getElementById("notification-bar").style.top = "50px";
   }else if(window.innerWidth < 1024){
    document.getElementById("main-nav").style.height = '75px'
    document.getElementById("notification-bar").style.top = "75px";

   }
}

document.getElementById('nav-icon').addEventListener('click', () => {
    let currentHeight = document.getElementById("main-nav").style.height;
    if(currentHeight == '491px'){
        document.getElementById("main-nav").style.height = '50px';
    }else{
        document.getElementById("main-nav").style.height = '491px'
    }
    
})

document.getElementById('NBclose-btn').addEventListener('click', () => {
    document.getElementById('notification-bar').style.display = "none";
})




const video = document.getElementById('demo-video');
const screenshot = document.getElementById('video-screenshot');
const replayBtn = document.getElementById('replay-btn');


// when page loads, show video and hide image
window.addEventListener('DOMContentLoaded', () => {
    video.style.display = 'block';
    screenshot.style.display  = 'none';
    replayBtn.textContent = 'Pause'
})

// When video ends, hide video and show screenshot
video.addEventListener('ended', () => {
    replayBtn.textContent = 'Replay';
    video.style.display = 'none';
    screenshot.style.display = 'block';
})

// when button in clicked, show video and hide image, and play it again.
replayBtn.addEventListener('click', () => {
    if(replayBtn.textContent == 'Pause'){
            video.pause();
            replayBtn.textContent = 'Play';
        
    }else if(replayBtn.textContent == 'Play'){
        video.play();
        replayBtn.textContent = 'Pause'
    }else if(replayBtn.textContent == 'Replay'){
    video.style.display = 'block';
    screenshot.style.display = 'none';
    video.currentTime = 0;
    video.play();
    replayBtn.textContent = 'Pause';
    }
})