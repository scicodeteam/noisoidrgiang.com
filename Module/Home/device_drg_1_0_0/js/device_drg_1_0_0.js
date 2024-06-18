const renderDevice = (list) => {
    const defaultItem = list[0]; // Lấy item đầu tiên từ danh sách
    const defaultHtml = `
        <div class="device_drg_1_0_0__item active-slide">
            <div class="device_drg_1_0_0__textSlide">
                <div class="device_drg_1_0_0__titleSlide">
                    ${defaultItem.title}
                </div>
                <div class="device_drg_1_0_0__descSlide">
                    ${defaultItem.desc}
                </div>
                <a href="${defaultItem.link}" class="device_drg_1_0_0__btn">
                    Xem thêm
                </a>
            </div>
            <div class="device_drg_1_0_0__pic">
                <img width="766" height="510" src="${defaultItem.imgSlide}" alt="">
            </div>
        </div>
    `;
    document.getElementById('device_drg_1_0_0__slide').innerHTML = defaultHtml;
    slideDevice(list);
};

// Tao phân trang slide
function slideDevice(list) {
    document.getElementById('device_drg_1_0_0__slide').insertAdjacentHTML('beforeend', `<div class="device_drg_1_0_0__dots"></div>`)
    const dotsContainer = document.querySelector(".device_drg_1_0_0__dots");
    const dotItems = [];
    list.forEach((item, index) => {
        const dot = document.createElement("span");
        
        if (index == 0) {
            dot.classList.add("device_drg_1_0_0__dot");
            dot.classList.add("active");
        }
        else {
            dot.classList.add("device_drg_1_0_0__dot");
        }

        dot.addEventListener("click", () => {
            showSlide(index, list);

            // Xử lý active
            dotItems.forEach((dot) => {
                dot.classList.remove("active");
            });
            dot.classList.add("active");
        });
        dotsContainer.appendChild(dot);
        dotItems.push(dot);
    });

    // Chạy tự động
    let count = 0;
    setInterval(() => {
        showSlide(count, list);      
        // Xử lý active dot
        let dots = document.querySelectorAll('.device_drg_1_0_0__dot');
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
        dots[count].classList.add("active");

        // Tăng index cho slide
        count += 1;
        if(count > list.length - 1){
            count = 0;
        }
    }, 5000) 
}

function showSlide(index, list) {
    const items = document.querySelector(".device_drg_1_0_0__item");
    items.innerHTML = `
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

const queryDevice = async () => {
    const data = await queryHome();
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "device_drg_1_0_0";
    });
    const dataDevice = dataAfcLayoutFilter[0].list.map((item) => {
        const splitData = item.slide.split('\r\n');
        return {
            title: splitData[0],
            desc: splitData[1],
            imgSlide: splitData[2],
            link: splitData[3],
        };
    });
    renderDevice(dataDevice);
};

queryDevice();