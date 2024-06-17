const renderDevice = (list) => {
    let html = '';
    list.forEach((itemDevice) => {
        html += `
        <div class="device_drg_1_0_0__item">
            <div class="device_drg_1_0_0__textSlide">
                <div class="device_drg_1_0_0__titleSlide">
                    ${itemDevice.title}
                </div>
                <div class="device_drg_1_0_0__descSlide">
                    ${itemDevice.desc}
                </div>
                <a href="${itemDevice.link}" class="device_drg_1_0_0__btn">
                    Xem thêm
                </a>
            </div>
            <div class="device_drg_1_0_0__pic">
                <img width="766" height="510" src="${itemDevice.imgSlide}" alt="">
            </div>
        </div>
        `;
    });
    document.getElementById('device_drg_1_0_0__slide').innerHTML = html;

    slideDevice(); // Gọi hàm slideDevice sau khi render dữ liệu
};

const queryDevice = async () => {
    const data = await queryHome();
    // console.log(data);
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "device_drg_1_0_0";
    });
    const dataDevice = [];
    dataAfcLayoutFilter[0].list.map((item) => {
        const splitData = item.slide.split('\r\n');
        // console.log(splitData);
        dataDevice.push({
            title: splitData[0],
            desc: splitData[1],
            imgSlide: splitData[2],
            link: splitData[3],
        });
    });

    renderDevice(dataDevice); // Gọi hàm renderDevice sau khi lấy dữ liệu
};

function slideDevice() {   
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
    showSlide(currentSlide);
    function showSlide(index) {
        items.forEach((item) => {
            item.style.display = "none";
        });
        items[index].style.display = "flex";
        const dotItems = document.querySelectorAll(".device_drg_1_0_0__dot");
        dotItems.forEach((dot) => {
            dot.classList.remove("active");
        });
        dotItems[index].classList.add("active");
        currentSlide = index;
    }   
}

queryDevice();