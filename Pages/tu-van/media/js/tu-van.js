// Tạo slide QA
const slideContainer = document.getElementById('screen1__boxQA');
const totalSlides = Math.ceil(dataQuestion.length / 4);
let currentSlide = 1;
let autoSlideInterval;

function showSlide(slideIndex) {
    slideContainer.innerHTML = '';
    const startIndex = (slideIndex - 1) * 4;
    const endIndex = Math.min(startIndex + 4, dataQuestion.length);

    for (let i = startIndex; i < endIndex; i++) {
        const itemQA = dataQuestion[i];
        const itemHTML = `
            <div class="screen1__itemQA" id-question="${i}">
                <div class="screen1__boxQuestion">
                    <div class="screen1__question">
                        ${itemQA.question}
                        <br>
                        <span class="screen1__nameQA">${itemQA.name}</span>
                    </div>
                    <div class="screen1__answer">
                        <div class="screen1__picQA">
                            <img width="77" height="80" class="lazy" data-src="media/images/iconQA.jpg" alt="iconQA">
                        </div>
                        <div class="screen1__seeMore">
                            ➤ Xem trả lời
                        </div>
                    </div>
                </div>
                <div class="screen1__boxAnswer">
                    Chào bạn! <br> ------------------------
                    <p class="screen1__textAnswer">
                        ${itemQA.answer}
                    </p>
                    <span class="screen1__nameQA">TS.BS Đỗ Anh Giang</span>
                </div>
            </div>
        `;
        slideContainer.innerHTML += itemHTML;
    }
}

// Tạo dots slide
function showDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');

    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 1) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            highlightDot();
            seeMoreQA(); // Gọi hàm seeMoreQA() sau khi chuyển đổi slide
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    slideContainer.parentNode.appendChild(dotsContainer);
}

// Active dots
function highlightDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Setup slide chạy tự động
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = currentSlide % totalSlides + 1;
        showSlide(currentSlide);
        highlightDot();
        seeMoreQA();
    }, 6000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Click xem câu trả lời
function seeMoreQA() {
    const elmsQuestionBtn = document.querySelectorAll('.screen1__seeMore');
    elmsQuestionBtn.forEach(item => {
        item.addEventListener('click', () => {
            const itemAnswer = item.closest('.screen1__itemQA').querySelector('.screen1__boxAnswer');
            if (itemAnswer.style.display === 'block') {
                itemAnswer.style.display = 'none';
            } else {
                itemAnswer.style.display = 'block';
            }
        });
    });
}

showSlide(currentSlide);
showDots();
seeMoreQA();
autoSlide()