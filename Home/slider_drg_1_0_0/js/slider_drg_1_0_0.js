function runSlide({ data = [], position = '', isPagination = false, isControl = false, time = 6000 }) {
    try {
        let index = 0;

        const innerSlide = document.createElement('div');
        innerSlide.classList.add('inner__slide');
        document.querySelector(`.${position}`).appendChild(innerSlide);

        const img = document.querySelector(`.${position} img`).clientHeight;
        document.querySelector(`.${position}`).setAttribute('style', 'min-height:' + img + 'px');

        const removeSlideIndex = () => {
            if (document.querySelector(`.${position} a`)) {
                document.querySelector(`.${position} a`).remove();
            }
        }
        const myTimer = () => {
            if (index >= data.length - 1) {
                renderCard(0);
                index = 0;
            } else {
                removeSlideIndex();
                renderCard(++index);
            }
        }
        let myInter = setInterval(myTimer, time)

        const activePagination = (index) => {
            const allPagination = document.querySelectorAll(`.${position} .pagination__item`);
            for (let i = 0; i < allPagination.length; i++) {
                allPagination[i].classList.remove('active');
            }
            document.getElementById(`pagination-${position}-${index}`).classList.add('active');
        }

        const renderCard = (index) => {
            document.querySelector(`.${position} .inner__slide`).innerHTML = `
            <a href="${data[index].link}">
                <picture>
                    <source media="(max-width: 767px)" width="430" height="386" srcset="${data[index].mb}" loading="lazy">
                    <img width="1920" height="771" class="lazy" data-src="${data[index].pc}" alt="${data[index].title}" loading="lazy">
                </picture>
            </a>
            `;
            setTimeout(() => {
                document.querySelector(`.${position} .inner__slide img`).classList.add('ani');
            }, 100)
            isPagination ? activePagination(index) : '';

            const lazy = document.querySelector(`.${position} .lazy`);
            if (checkVisible(lazy)) {
                const src = lazy.getAttribute('data-src');
                lazy.setAttribute('src', src);
            }
        }

        const changeSlide = (e) => {
            removeSlideIndex();
            const id = e.getAttribute('data-id');
            index = Number(id);
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const changeSlideControl = (id) => {
            if (id > data.length - 1) {
                id = 0;
                index = 0;
            } else if (id < 0) {
                id = 3;
                index = 3;
            }
            renderCard(id);
            clearInterval(myInter);
            myInter = setInterval(myTimer, time);
        }

        const pagination = () => {
            let html = '';
            for (let i = 0; i < data.length; i++) {
                html += `<span data-id='${i}' id="pagination-${position}-${i}" class="pagination__item">${i + 1}</span>`
            }
            document.querySelector(`.${position}`).insertAdjacentHTML("beforeend", `<div class="pagination">${html}</div>`);
            const paginationItem = document.querySelectorAll(`.${position} .pagination__item`);
            for (let i = 0; i < paginationItem.length; i++) {
                paginationItem[i].addEventListener('click', () => changeSlide(paginationItem[i]));
            }
            isPagination ? activePagination(0) : '';
        }
        isPagination ? pagination() : '';

        const nextSlide = () => {
            changeSlideControl(++index);
        }

        const prevSlide = () => {
            changeSlideControl(--index);
        }

        const nextPrevSlide = () => {
            document.querySelector(`.${position}`).insertAdjacentHTML("beforeend", `<div class="control"><button class="item__btn prev"></button><button class="item__btn next"></button></div>`);
            document.querySelector(`.${position} .next`).addEventListener('click', nextSlide);
            document.querySelector(`.${position} .prev`).addEventListener('click', prevSlide);
        }
        isControl ? nextPrevSlide() : '';

        function checkVisible(elm) {
            let rect = elm.getBoundingClientRect();
            let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    } catch (error) {
        console.log('error')
    }
}

const querySlide = async () => {
    const data = await queryHome();
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "slider_drg_1_0_0";
    });
    const dataSlide1 = [];
    dataAfcLayoutFilter[0].slide.map(item => {
        const splitData = item.img.split('\r\n');
        dataSlide1.push({
            title: splitData[0],
            pc: splitData[1],
            mb: splitData[2],
            link: splitData[3],
        });
    });

    runSlide({
        data: dataSlide1,
        position: 'slider_drg_1_0_0',
        isPagination: true,
    })
}

querySlide();
