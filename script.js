const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else {
            slide.classList.add('next');
        }
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);

// Automatically slide every 3 seconds (
setInterval(autoSlide, 3000);



//scroll to a spesific elment by clicking a button

const button1 = document.getElementById('button1');
const form1 = document.getElementById('form2');

button1.addEventListener('click', () => {
  form1.scrollIntoView({behavior: "smooth"});
});



const button2 = document.getElementById('button-3');
const focOn = document.getElementById('h1-r');

button2.addEventListener('click', () => {
  focOn.scrollIntoView({behavior: 'smooth'});
});