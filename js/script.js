

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicators = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalItems = carousel.children.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 785}px)`;
        indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    updateCarousel();
});
