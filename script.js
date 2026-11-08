// script.js
const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('dontpushme');

if (playButton && myAudio) {
    playButton.type = 'button';
    myAudio.preload = 'auto';

    const toggleAudio = async () => {
        try {
            if (myAudio.paused) {
                await myAudio.play();
            } else {
                myAudio.pause();
                myAudio.currentTime = 0;
            }
        } catch (error) {
            console.error('Audio playback failed:', error);
            myAudio.currentTime = 0;
        }
    };

    playButton.addEventListener('click', toggleAudio);
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
