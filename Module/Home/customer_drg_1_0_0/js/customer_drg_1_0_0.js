const renderDataCustomer = (data, tabName) => {
    const mainCustomer = data.filter((item, index) => {
        return index === Number(tabName);
    })

    let html = `
        <a href="${mainCustomer[0].link}" class="customer_drg_1_0_0__video">
            <img width="657" height="356" src="${mainCustomer[0].thumb}" alt="${mainCustomer[0].title}">
            <div class="customer_drg_1_0_0__play">
                <img width="21" height="29" src="images/icon-play.png" alt="icon play">
            </div>
        </a>
        <div class="customer_drg_1_0_0__content">
            <div class="customer_drg_1_0_0__titleVideo">
                ${mainCustomer[0].title}
            </div>
            <div class="customer_drg_1_0_0__desc">
                ${mainCustomer[0].desc}
            </div>
            <a href="${mainCustomer[0].link}" class="customer_drg_1_0_0__btn">
                Chi tiết
            </a>
        </div>
    `;
    document.getElementById('customer_drg_1_0_0__box').innerHTML = html;
}

const queryCustomer = async() => {
    const data = await queryHome();
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "customer_drg_1_0_0";
    });

    const dataCustomer = [];
    dataAfcLayoutFilter[0].list.map((item) => {
        const splitData = item.tab.split('\r\n');
        dataCustomer.push({
            tabName: splitData[0],
            title: splitData[1],
            desc: splitData[2],
            thumb: splitData[3],
            link: splitData[4],
        });
    });

    renderDataCustomer(dataCustomer, 0);

    var tabLinks = document.querySelectorAll(".customer_drg_1_0_0__itemTab");
    tabLinks.forEach(function (el) {
        el.addEventListener("click", function () {
            const element = el.getAttribute('data-id');
            tabLinks.forEach(function (el) {
                el.classList.remove('active');
            })
            el.classList.add('active');
            renderDataCustomer(dataCustomer, element);
        });
    });
};

queryCustomer();