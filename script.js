// Auto Slider
const slides = document.querySelectorAll('input[name="slider"]');
let index = 0;

// Update index saat user klik dots
slides.forEach((slide, i) => {
    slide.addEventListener('change', () => index = i);
});

// Auto slide setiap 4 detik
setInterval(() => {
    index = (index + 1) % slides.length;
    slides[index].checked = true;
}, 4000);