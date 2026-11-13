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
                <button type="button" class="comic-nav comic-nav-start" data-target="0" aria-label="Go to first page">
                    <img src="${pageBase}images/D&T Images/<<.png" alt="First page" />
                </button>
                <button type="button" class="comic-nav comic-nav-prev" data-direction="-1" aria-label="View previous page">
                    <img src="${pageBase}images/D&T Images/<.png" alt="Previous page" />
                </button>
                <button type="button" class="comic-nav comic-nav-next" data-direction="1" aria-label="View next page">
                    <img src="${pageBase}images/D&T Images/>.png" alt="Next page" />
                </button>
                <button type="button" class="comic-nav comic-nav-end" data-target="${webcomicPages.length - 1}" aria-label="Go to last page">
                    <img src="${pageBase}images/D&T Images/>>.png" alt="Last page" />
                </button>
            </div>
            <figure class="comic-page">
                <img src="${page.src}" alt="${page.title}" />
            </figure>
        `;

        webcomicGallery.querySelectorAll('.comic-nav').forEach((button) => {
            button.addEventListener('click', () => {
                if (button.dataset.target !== undefined) {
                    currentIndex = Number(button.dataset.target);
                } else {
                    const direction = Number(button.dataset.direction || 0);
                    currentIndex = (currentIndex + direction + webcomicPages.length) % webcomicPages.length;
                }
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
