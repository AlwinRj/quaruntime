let currentIndex = 0;

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        currentIndex = 0;
    } else if (n < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = n;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

function nextSlide(sliderId) {
    var slider = document.getElementById(sliderId);
    const firstSlide = slider.firstElementChild;
    slider.appendChild(firstSlide.cloneNode(true));
    slider.scrollLeft += slider.offsetWidth + 10; /* Adjust based on the gap */
    currentIndex = (currentIndex + 1) % slides.length;
}

function prevSlide(sliderId) {
    var slider = document.getElementById(sliderId);
    const lastSlide = slider.lastElementChild;
    slider.insertBefore(lastSlide.cloneNode(true), slider.firstElementChild);
    slider.scrollLeft -= slider.offsetWidth + 10; /* Adjust based on the gap */
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}