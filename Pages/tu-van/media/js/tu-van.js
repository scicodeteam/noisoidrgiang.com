// Tạo slide QA
const slideContainer = document.getElementById('screen1__boxQA');
let currentSlide = 1;
let totalSlides;
let itemsWithAnser = [];

const showSlide = async (slideIndex) => {
    totalSlides = Math.ceil(itemsWithAnser.length / 5);
    slideContainer.innerHTML = '';
    const startIndex = (slideIndex - 1) * 5;
    const endIndex = Math.min(startIndex + 5, itemsWithAnser.length);
    let total = '';
    for (let i = startIndex; i < endIndex; i++) {
        const itemQA = itemsWithAnser[i];
        const itemHTML = `
            <div class="screen1__itemQA" id-question="${itemQA.ID}">
                <div class="screen1__boxQuestion">
                    <div class="screen1__question">
                        ${itemQA.Question}
                        <br>
                        <span class="screen1__nameQA">${itemQA.Name}, ${itemQA.Date} tuổi</span>
                    </div>
                    <div class="screen1__answer">
                        <div class="screen1__picQA">
                        </div>
                        <div class="screen1__seeMore">
                            ➤ Xem trả lời
                        </div>
                    </div>
                </div>
                <div class="screen1__boxAnswer" style="display: none;">
                    Chào bạn! <br> ------------------------
                    <p class="screen1__textAnswer">
                        ${itemQA.Anser}
                    </p>
                    <span class="screen1__nameQA">TS.BS Đỗ Anh Giang</span>
                </div>
            </div>
        `;
        total += itemHTML;
    }
    slideContainer.innerHTML = total;
    showDots();
    seeMoreQA();
};

// Tạo dots slide
function showDots() {
    let dotsContainer = document.querySelector('.dots-container');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
    } else {
        dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dots-container');
        slideContainer.parentNode.appendChild(dotsContainer);
    }
    const numDots = Math.ceil(itemsWithAnser.length / 5);
    for (let i = 1; i <= numDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            highlightDot();
        });
        dotsContainer.appendChild(dot);
    }
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
// Click xem câu trả lời
const seeMoreQA = () => {
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
};

const init = async () => {
    const data = await queryQuestion();
    itemsWithAnser = data.filter(item => item.Anser);
    itemsWithAnser.reverse();
    await showSlide(currentSlide);
};
init();