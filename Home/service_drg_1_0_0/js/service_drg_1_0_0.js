const renderService = (list) => {
    let html = '';
    list.map((itemService) => {
        html += `
        <a href="${itemService.link}" class="service_drg_1_0_0__item">
            <div class="service_drg_1_0_0__pic">
                <img width="318" height="243" src="${itemService.img}" alt="">
            </div>
            <div class="service_drg_1_0_0__name">
                ${itemService.title}
            </div>
        </a>
        `;
    });
    document.getElementById('service_drg_1_0_0__boxRight').innerHTML = html;
};

const renderThumb = (title) => {
    console.log(title);
    let html = '';
    title.map((itemThumb) => {
        html += `
            <img width="463" height="522" src="${itemThumb.imgThumb}" alt=""> 
        `;
    });
    document.getElementById('service_drg_1_0_0__boxLeft').innerHTML = html;
};

const queryService = async () => {
    const data = await queryHome();
    const dataAfcLayoutFilter = data.filter(item => {
        return item.acf_fc_layout === "service_drg_1_0_0";
    });
    const dataService = [];
    const thumb = [];
    dataAfcLayoutFilter[0].list.map((item) => {
        const splitData = item.content.split('\r\n');
        dataService.push({
            title: splitData[0],
            img: splitData[1],
            link: splitData[2],
        });
    });

    const title = dataAfcLayoutFilter[0].title.split('\r\n');
    thumb.push({
        title: title[0],
        imgThumb: title[1],
    });

    renderService(dataService);
    
    function checkScreenWidth() {
        if (window.innerWidth > 600) {
            renderThumb(thumb);
        } 
    }
    checkScreenWidth();
};

queryService();

window.addEventListener('resize', checkScreenWidth);
