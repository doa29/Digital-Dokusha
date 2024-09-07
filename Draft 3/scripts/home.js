const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide li');

// Counter
let counter = 1;
const size = images[0].clientWidth;

// Move slide
function moveSlide() {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Transition end
carouselSlide.addEventListener('transitionend', () => {
    if (counter >= images.length - 1) {
        carouselSlide.style.transition = 'none';
        counter = images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (counter <= 0) {
        carouselSlide.style.transition = 'none';
        counter = images.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Button listeners
// Next button
function nextSlide() {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    moveSlide();
}

// Previous button
function prevSlide() {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    moveSlide();
}


const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 9) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const cardWidth = 215 + 40; // card width + margin
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
