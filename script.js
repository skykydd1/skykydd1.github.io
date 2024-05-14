// script.js
const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('dontpushme');

var timesPushed = 0;

playButton.addEventListener('click', () => {
    timesPushed = timesPushed+1

    if (timesPushed==10) {
        // TODO say "hey! stop that!"
    }

    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
        myAudio.currentTime = 0; // Rewind to the beginning
    }
});
