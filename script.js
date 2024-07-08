document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.title');
    const descriptions = document.querySelectorAll('.description');
    const photos = document.querySelectorAll('.image-item');
    let currentIndex = 0;
    let interval;

    function showContent(index) {
        descriptions.forEach((description, i) => {
            if (i === index) {
                description.classList.add('open');
            } else {
                description.classList.remove('open');
            }
        });

        photos.forEach((photo, i) => {
            if (i === index) {
                photo.classList.add('show');
            } else {
                photo.classList.remove('show');
            }
        });
    }

    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            showContent(currentIndex);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    titles.forEach((title, index) => {
        title.addEventListener('click', function() {
            stopAutoSlide();
            currentIndex = index;
            showContent(index);
            startAutoSlide();
        });
    });

    showContent(0);
    startAutoSlide();
});