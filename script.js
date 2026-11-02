// script.js
const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('dontpushme');

if (playButton && myAudio) {
    let timesPushed = 0;

    playButton.addEventListener('click', () => {
        timesPushed = timesPushed + 1;

        if (timesPushed == 10) {
            // TODO say "hey! stop that!"
        }

        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
            myAudio.currentTime = 0;
        }
    });
}

const gallery = document.getElementById('ink-gallery');

if (gallery) {
    const inktoberImages = [
        { src: 'images/Apple.jpeg', title: 'Inktober 2026, Apple' },
        { src: 'images/Relic.jpeg', title: 'Relic' },
        { src: 'images/Mini.jpeg', title: 'Mini' }
    ];

    gallery.innerHTML = inktoberImages.map((image, index) => {
        const filenameTitle = image.title || image.src.split('/').pop().replace(/\.[^/.]+$/, '');

        return `
            <div class="image-item">
                <a href="${image.src}">
                    <img src="${image.src}" alt="${index + 1} ${filenameTitle}" />
                </a>
                <div class="image-title">${filenameTitle}</div>
            </div>
        `;
    }).join('');
}
