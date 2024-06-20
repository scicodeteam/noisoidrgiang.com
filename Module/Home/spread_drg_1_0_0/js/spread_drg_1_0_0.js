const dataSpread_drg_1_0_0 = [
    'partner1.png',
    'partner2.png',
    'partner3.png',
    'partner4.png',
    'partner5.png',
];
const doubledDataSpread_drg_1_0_0 = dataSpread_drg_1_0_0.concat(dataSpread_drg_1_0_0)
const html = doubledDataSpread_drg_1_0_0.map(item => `<div class="spread_drg_1_0_0__item"><img src="images/${item}" alt="Image 1"></div>`).join('')
document.querySelector('.spread_drg_1_0_0__track').innerHTML = html;
const slideTrack = document.querySelector('.spread_drg_1_0_0__track');
const slides = Array.from(document.querySelectorAll('.spread_drg_1_0_0__item'));
const slideWidth = slides[0].offsetWidth;
let currentPosition = 0;

function animateSlider() {
    currentPosition -= 2; // Speed of the slider

    // Reset position if it reaches the end of the first set of slides
    if (currentPosition <= -slideWidth * (slides.length / 2) + 250) {
        currentPosition = 0;
    }

    slideTrack.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(animateSlider);
}

// Start the animation
animateSlider();