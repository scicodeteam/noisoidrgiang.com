const renderDevice = (list) => {
    let html = '';
    html += `
        <div class="device_drg_1_0_0__item active-slide">
            <div class="device_drg_1_0_0__textSlide">
                <div class="device_drg_1_0_0__titleSlide">
                    ${list[0].title}
                </div>
                <div class="device_drg_1_0_0__descSlide">
                    ${list[0].desc}
                </div>
                <a href="${list[0].link}" class="device_drg_1_0_0__btn">
                    Xem thêm
                </a>
            </div>
            <div class="device_drg_1_0_0__pic">
                <img width="766" height="510" src="${list[0].imgSlide}" alt="">
            </div>
        </div>
    `;
    document.getElementById('device_drg_1_0_0__slide').innerHTML = html;
    slideDevice(list);
};

function slideDevice(list) {
    const items = document.querySelectorAll(".device_drg_1_0_0__item");
    const dots = document.createElement("div");
    dots.classList.add("device_drg_1_0_0__dots");
    items.forEach((item, index) => {
        const dot = document.createElement("span");
        dot.classList.add("device_drg_1_0_0__dot");
        dot.addEventListener("click", () => {
            showSlide(index);
        });
        dots.appendChild(dot);
    });
    document.querySelector(".device_drg_1_0_0__slide").appendChild(dots);
    let currentSlide = 0;
    function showSlide(index) {
        items.forEach((item) => {
            item.classList.remove("active-slide");
        });
        items[index].classList.add("active-slide");
        const dotItems = document.querySelectorAll(".device_drg_1_0_0__dot");
        dotItems.forEach((dot) => {
            dot.classList.remove("active");
        });
        dotItems[index].classList.add("active");
        currentSlide = index;
        if (!items[index].querySelector('.device_drg_1_0_0__textSlide')) {
            items[index].innerHTML = `
                <div class="device_drg_1_0_0__textSlide">
                    <div class="device_drg_1_0_0__titleSlide">
                        ${list[index].title}
                    </div>
                    <div class="device_drg_1_0_0__descSlide">
                        ${list[index].desc}
                    </div>
                    <a href="${list[index].link}" class="device_drg_1_0_0__btn">
                        Xem thêm
                    </a>
                </div>
                <div class="device_drg_1_0_0__pic">
                    <img width="766" height="510" src="${list[index].imgSlide}" alt="">
                </div>
            `;
        }
    }
}

const queryDevice = async () => {
    const data = await queryHome();
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "device_drg_1_0_0";
    });
    const dataDevice = [];
    dataAfcLayoutFilter[0].list.map((item) => {
        const splitData = item.slide.split('\r\n');
        dataDevice.push({
            title: splitData[0],
            desc: splitData[1],
            imgSlide: splitData[2],
            link: splitData[3],
        });
    });
    renderDevice(dataDevice);

    // Add dots based on the number of items
    const dotsContainer = document.querySelector(".device_drg_1_0_0__dots");
    for (let i = 0; i < dataDevice.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("device_drg_1_0_0__dot");
        dot.addEventListener("click", () => {
            showSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
};

queryDevice();