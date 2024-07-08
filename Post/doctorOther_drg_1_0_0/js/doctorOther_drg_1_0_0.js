document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".doctorOther_drg_1_0_0__item");
    const totalSlides = slides.length;
    let autoSlideInterval;
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots-container");

    // Tạo dots và thêm vào container
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-index", i);
        dotsContainer.appendChild(dot);
    }

    // Hiển thị dots container
    document.querySelector(".doctorOther_drg_1_0_0__box").appendChild(dotsContainer);

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slides[index].style.display = "block";
        dots[index].classList.add("active");
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function handleResize() {
        if (window.innerWidth < 600) {
            showSlide(slideIndex);
            startAutoSlide();
        } else {
            stopAutoSlide();
        }
    }

    // Xử lý khi click vào dot
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            slideIndex = parseInt(dot.getAttribute("data-index"));
            showSlide(slideIndex);
        });
    });

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);
});