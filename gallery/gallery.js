

// Initialize Gallery
function initializeGallery() {
    setupFilterButtons();
    setupGalleryItems();
}

// Setup Filter Buttons
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Filter gallery items
            filterGallery(filter);
        });
    });
}

// Filter Gallery Items
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Setup Gallery Items Click
function setupGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img').src;
            const title = item.querySelector('h3').innerText;
            const category = item.querySelector('.gallery-category').innerText;

            openLightbox(img, title, category);
        });
    });
}

// Open Lightbox
function openLightbox(imgSrc, title, category) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');

    lightboxImg.src = imgSrc;
    lightboxTitle.innerText = title;
    lightboxCategory.innerText = category;

    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Close lightbox when clicking outside the image
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}