const images = [
    { id: 'p1', url: 'images/people_p1.jpg', category: 'people', caption: 'Portrait of a woman' },
    { id: 'p2', url: 'images/people_p2.jpg', category: 'people', caption: 'Man in Blue Light' },
    { id: 'p3', url: 'images/people_p3.jpg', category: 'people', caption: 'Moody Portrait' },
    { id: 'p4', url: 'images/people_p4.jpg', category: 'people', caption: 'Smiling Woman' },
    { id: 'p5', url: 'images/people_p5.jpg', category: 'people', caption: 'Business Man' },
    { id: 'p6', url: 'images/people_p6.jpg', category: 'people', caption: 'Urban Style' },
    { id: 'p7', url: 'images/people_p7.jpg', category: 'people', caption: 'Studio Shot' },
    { id: 'p8', url: 'images/people_p8.jpg', category: 'people', caption: 'Outdoor Vibez' },
    { id: 'p9', url: 'images/people_p9.jpg', category: 'people', caption: 'Fashion Shoot' },
    { id: 'p10', url: 'images/people_p10.jpg', category: 'people', caption: 'Close up' },
    { id: 'f1', url: 'images/food_f1.jpg', category: 'food', caption: 'Fresh Salad' },
    { id: 'f2', url: 'images/food_f2.jpg', category: 'food', caption: 'Pepperoni Pizza' },
    { id: 'f3', url: 'images/food_f3.jpg', category: 'food', caption: 'Avocado Toast' },
    { id: 'f4', url: 'images/food_f4.jpg', category: 'food', caption: 'Pancakes' },
    { id: 'f5', url: 'images/food_f5.jpg', category: 'food', caption: 'Sweet Dessert' },
    { id: 'f6', url: 'images/food_f6.jpg', category: 'food', caption: 'Birthday Cake' },
    { id: 'f7', url: 'images/food_f7.jpg', category: 'food', caption: 'BBQ Grill' },
    { id: 'f8', url: 'images/food_f8.jpg', category: 'food', caption: 'Healthy Bowl' },
    { id: 'f9', url: 'images/food_f9.jpg', category: 'food', caption: 'Gourmet Dish' },
    { id: 'f10', url: 'images/food_f10.jpg', category: 'food', caption: 'Breakfast Spread' },
    { id: 'n1', url: 'images/nature_n1.jpg', category: 'nature', caption: 'Misty Mountains' },
    { id: 'n2', url: 'images/nature_n2.jpg', category: 'nature', caption: 'Forest Path' },
    { id: 'n3', url: 'images/nature_n3.jpg', category: 'nature', caption: 'Green Hills' },
    { id: 'n4', url: 'images/nature_n4.jpg', category: 'nature', caption: 'Deep Forest' },
    { id: 'n5', url: 'images/nature_n5.jpg', category: 'nature', caption: 'Lake View' },
    { id: 'n6', url: 'images/nature_n6.jpg', category: 'nature', caption: 'Winter Snow' },
    { id: 'n7', url: 'images/nature_n7.jpg', category: 'nature', caption: 'Waterfall' },
    { id: 'n8', url: 'images/nature_n8.jpg', category: 'nature', caption: 'Autumn Leaves' },
    { id: 'n9', url: 'images/nature_n9.jpg', category: 'nature', caption: 'Sunset' },
    { id: 'n10', url: 'images/nature_n10.jpg', category: 'nature', caption: 'Canyon' },
    { id: 'a1', url: 'images/architecture_a1.jpg', category: 'architecture', caption: 'Modern Building' },
    { id: 'a2', url: 'images/architecture_a2.jpg', category: 'architecture', caption: 'Glass Facade' },
    { id: 'a3', url: 'images/architecture_a3.jpg', category: 'architecture', caption: 'City Bridge' },
    { id: 'a4', url: 'images/architecture_a4.jpg', category: 'architecture', caption: 'Skyscraper' },
    { id: 'a5', url: 'images/architecture_a5.jpg', category: 'architecture', caption: 'Abstract Lines' },
    { id: 'a6', url: 'images/architecture_a6.jpg', category: 'architecture', caption: 'Historic Hall' },
    { id: 'a7', url: 'images/architecture_a7.jpg', category: 'architecture', caption: 'Minimalist Wall' },
    { id: 'a8', url: 'images/architecture_a8.jpg', category: 'architecture', caption: 'Urban Complex' },
    { id: 'a9', url: 'images/architecture_a9.jpg', category: 'architecture', caption: 'White Structure' },
    { id: 'a10', url: 'images/architecture_a10.jpg', category: 'architecture', caption: 'Interior Design' },
    { id: 't1', url: 'images/travel_t1.jpg', category: 'travel', caption: 'Mountain Road' },
    { id: 't2', url: 'images/travel_t2.jpg', category: 'travel', caption: 'City Life' },
    { id: 't3', url: 'images/travel_t3.jpg', category: 'travel', caption: 'Paris Street' },
    { id: 't4', url: 'images/travel_t4.jpg', category: 'travel', caption: 'Island Beach' },
    { id: 't5', url: 'images/travel_t5.jpg', category: 'travel', caption: 'Snowy Peak' },
    { id: 't6', url: 'images/travel_t6.jpg', category: 'travel', caption: 'Desert Highway' },
    { id: 't7', url: 'images/travel_t7.jpg', category: 'travel', caption: 'Adventure Time' },
    { id: 't8', url: 'images/travel_t8.jpg', category: 'travel', caption: 'Sunset Coast' },
    { id: 't9', url: 'images/travel_t9.jpg', category: 'travel', caption: 'Tropical Palms' },
    { id: 't10', url: 'images/travel_t10.jpg', category: 'travel', caption: 'Urban Night' },
    { id: 'an1', url: 'images/animals_an1.jpg', category: 'animals', caption: 'Cute Puppy' },
    { id: 'an2', url: 'images/animals_an2.jpg', category: 'animals', caption: 'Tabby Cat' },
    { id: 'an3', url: 'images/animals_an3.jpg', category: 'animals', caption: 'Little Hamster' },
    { id: 'an4', url: 'images/animals_an4.jpg', category: 'animals', caption: 'Kitty Eyes' },
    { id: 'an5', url: 'images/animals_an5.jpg', category: 'animals', caption: 'Dog Portrait' },
    { id: 'an6', url: 'images/animals_an6.jpg', category: 'animals', caption: 'Wild Fox' },
    { id: 'an7', url: 'images/animals_an7.jpg', category: 'animals', caption: 'Happy Dog' },
    { id: 'an8', url: 'images/animals_an8.jpg', category: 'animals', caption: 'Curious Cat' },
    { id: 'an9', url: 'images/animals_an9.jpg', category: 'animals', caption: 'Lion' },
    { id: 'an10', url: 'images/animals_an10.jpg', category: 'animals', caption: 'Polar Bear' },
];

let favorites = JSON.parse(localStorage.getItem('galleryFavorites')) || [];

const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryTitle = document.getElementById('gallery-title');
const totalCountElement = document.getElementById('total-count');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;
let filteredImages = [...images]; 
let currentFilter = 'all';

function toggleFavorite(id, event) {
    if (event) event.stopPropagation();
    
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('galleryFavorites', JSON.stringify(favorites));
    renderGallery(currentFilter); 
}

function renderGallery(filter = 'all') {
    currentFilter = filter;
    galleryGrid.innerHTML = '';
    
    if (filter === 'all') {
        filteredImages = images;
    } else if (filter === 'favorites') {
        filteredImages = images.filter(img => favorites.includes(img.id));
    } else {
        filteredImages = images.filter(img => img.category === filter);
    }
    
    updateCounts();

    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        
        const isLiked = favorites.includes(image.id);
        
        item.innerHTML = `
            <img src="${image.url}" alt="${image.caption}" loading="lazy">
            <div class="item-overlay ${isLiked ? 'liked' : ''}" onclick="toggleFavorite('${image.id}', event)">
                <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
            </div>
        `;
        
        const imgElement = item.querySelector('img');
        imgElement.onerror = function() {
            item.remove();
            
            const mainIndex = images.findIndex(img => img.id === image.id);
            if (mainIndex > -1) images.splice(mainIndex, 1);
            
            updateCounts();
        };

        item.addEventListener('click', (e) => {
            if (!e.target.closest('.item-overlay')) {
                const actualIndex = filteredImages.findIndex(img => img.id === image.id);
                if (actualIndex !== -1) {
                     openLightbox(actualIndex);
                }
            }
        });
        galleryGrid.appendChild(item);
    });
}

function updateCounts() {
    let validFilteredCount;
    if (currentFilter === 'all') {
        validFilteredCount = images.length;
    } else if (currentFilter === 'favorites') {
        validFilteredCount = images.filter(img => favorites.includes(img.id)).length;
    } else {
        validFilteredCount = images.filter(img => img.category === currentFilter).length;
    }
    
    galleryTitle.textContent = `${validFilteredCount} photos`;
    totalCountElement.textContent = `${images.length} items`;
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto'; 
}

function updateLightboxImage() {
    let validFilteredImages;
    if (currentFilter === 'all') {
        validFilteredImages = images;
    } else if (currentFilter === 'favorites') {
        validFilteredImages = images.filter(img => favorites.includes(img.id));
    } else {
        validFilteredImages = images.filter(img => img.category === currentFilter);
    }
    
    if (validFilteredImages.length === 0) return;
    
    if (currentImageIndex >= validFilteredImages.length) currentImageIndex = 0;
    
    const image = validFilteredImages[currentImageIndex];
    if (image) {
        lightboxImg.src = image.url;
        lightboxCaption.textContent = image.caption;
    }
}

function showNextImage() {
    let listLen = 0;
    if (currentFilter === 'all') listLen = images.length;
    else if (currentFilter === 'favorites') listLen = images.filter(img => favorites.includes(img.id)).length;
    else listLen = images.filter(img => img.category === currentFilter).length;

    if (listLen === 0) return;
    currentImageIndex = (currentImageIndex + 1) % listLen;
    updateLightboxImage();
}

function showPrevImage() {
    let listLen = 0;
    if (currentFilter === 'all') listLen = images.length;
    else if (currentFilter === 'favorites') listLen = images.filter(img => favorites.includes(img.id)).length;
    else listLen = images.filter(img => img.category === currentFilter).length;

    if (listLen === 0) return;
    currentImageIndex = (currentImageIndex - 1 + listLen) % listLen;
    updateLightboxImage();
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderGallery(filter);
    });
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(images);

renderGallery('all');
