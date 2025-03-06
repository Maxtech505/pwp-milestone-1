// import './styles.css'
// import 'flow bite'

const letters = document.querySelectorAll('.letter');
const smokeEffect = document.getElementById('smoke-effect');

function animateText() {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
        }, index * 200); // Delay each letter's appearance
    });
}

function animateSmoke() {
    smokeEffect.style.opacity = 0.5; // Initial smoke visibility
    setTimeout(() => {
        smokeEffect.style.opacity = 0; // Fade out smoke
    }, letters.length * 200 + 3000); // Time to fade out after text appears. Adjust the 3000 to change how long the smoke is visible.
}

window.onload = function() {
    animateText();
    animateSmoke();
};


document.addEventListener("DOMContentLoaded", function () {
    function create3DCarousel(carouselId) {
        let carousel = document.getElementById(carouselId);
        let angle = 0;
        let items = carousel.children;
        let numItems = items.length;
        let radius = 250;

        for (let i = 0; i < numItems; i++) {
            let theta = (2 * Math.PI * i) / numItems;
            items[i].style.transform = `rotateY(${theta}rad) translateZ(${radius}px)`;
        }

        setInterval(() => {
            angle += Math.PI / numItems;
            carousel.style.transform = `rotateY(${angle}rad)`;
        }, 4000);
    }

    create3DCarousel("carousel1");
    create3DCarousel("carousel2");
});