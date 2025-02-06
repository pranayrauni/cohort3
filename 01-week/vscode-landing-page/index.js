const replayButton = document.getElementById("replay-btn");
const video = document.getElementById('background-video');

replayButton.addEventListener("click", () => {
  // console.log("hi");
  // video.pause();
  if(video.paused){
    video.play()
    replayButton.textContent = 'Pause';
  } else {
    video.pause()
    replayButton.textContent = 'Play';
  }
});

video.addEventListener('ended', () => {
  replayButton.textContent = 'Replay';
});
