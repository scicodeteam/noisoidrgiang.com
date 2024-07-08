document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".doctorDegree_drg_1_0_0__pic");
    const totalSlides = slides.length;
    const itemsToShow = window.innerWidth >= 600 ? 3 : 1;
    const prevBtn = document.querySelector(".doctorDegree_drg_1_0_0__prev");
    const nextBtn = document.querySelector(".doctorDegree_drg_1_0_0__next");

    function showSlides() {
        for (let i = 0; i < totalSlides; i++) {
            if (i < slideIndex || i >= slideIndex + itemsToShow) {
                slides[i].style.display = "none";
            } else {
                slides[i].style.display = "block";
            }
        }
    }

    function nextSlide() {
        if (slideIndex < totalSlides - itemsToShow) {
            slideIndex++;
            showSlides();
        }
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlides();
        }
    }

    showSlides();

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    window.addEventListener("resize", function () {
        itemsToShow = window.innerWidth >= 600 ? 3 : 1;
        showSlides();
    });
});