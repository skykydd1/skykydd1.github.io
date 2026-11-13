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

const webcomicGallery = document.getElementById('webcomic-gallery');

if (webcomicGallery) {
    const pageBase = window.location.pathname.includes('/DnT-Pages.html/') ? '../' : '';
    const webcomicPages = [
        {
            src: `${pageBase}images/D&T Images/dnt page 1.jpeg`,
            title: 'D&T Page 1',
            description: '-'
        },
        {
            src: `${pageBase}images/D&T Images/DnT P1.jpeg`,
            title: 'D&T Panel 2',
            description: '-'
        },
        {
            src: `${pageBase}images/D&T Images/DnT 3.jpeg`,
            title: 'D&T Page 3',
            description: '-'
        },
        {
            src: `${pageBase}images/D&T Images/DnT 4.jpeg`,
            title: 'D&T Page 4',
            description: '-'
        },
        {
            src: `${pageBase}images/D&T Images/DnT 5.jpeg`,
            title: 'D&T Page 5',
            description: '-'
        },
        {
            src: `${pageBase}images/D&T Images/Page 6.jpeg`,
            title: 'D&T Page 6',
            description: '-'
        },
    ];

    let currentIndex = 0;

    const renderWebcomic = () => {
        const page = webcomicPages[currentIndex];

        webcomicGallery.innerHTML = `
            <div class="comic-toolbar">
                <button type="button" class="comic-nav comic-nav-prev" data-direction="-1" aria-label="View previous page">
                    <img src="${pageBase}images/D&T Images/<.png" alt="Previous page" />
                </button>
                <button type="button" class="comic-nav comic-nav-next" data-direction="1" aria-label="View next page">
                    <img src="${pageBase}images/D&T Images/>.png" alt="Next page" />
                </button>
            </div>
            <figure class="comic-page">
                <img src="${page.src}" alt="${page.title}" />
            </figure>
        `;

        webcomicGallery.querySelectorAll('.comic-nav').forEach((button) => {
            button.addEventListener('click', () => {
                const direction = Number(button.dataset.direction || 0);
                currentIndex = (currentIndex + direction + webcomicPages.length) % webcomicPages.length;
                renderWebcomic();
            });
        });
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + webcomicPages.length) % webcomicPages.length;
            renderWebcomic();
        }

        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % webcomicPages.length;
            renderWebcomic();
        }
    });

    renderWebcomic();
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
