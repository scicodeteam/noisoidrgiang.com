const queryTech_drg_1_0_0 = async() => {
    const response = await fetch('https://noisoidrgiang.com/wp-json/wp/v2/pages/124');
    const data =  await response.json();
    const dataAcfLayout = data.acf.group_page_field.body_custom;
    const dataAfcLayoutFilter = dataAcfLayout.filter(item => {
        return item.acf_fc_layout === "tech_drg_1_0_0";
    });
    const dataTech_drg_1_0_0 = [];
    dataAfcLayoutFilter[0].list.forEach(item => {
        const splitData = item.tab.split('\r\n');
        const itemTech_drg_1_0_0 = {
            content: item.content,
            sub: splitData[0],
            info: splitData[1],
            title: splitData[2],
            imagePC: splitData[3],
            imageMB: splitData[4]
        };
        dataTech_drg_1_0_0.push(itemTech_drg_1_0_0);
    });
    return dataTech_drg_1_0_0;
};

let i = 1;
const renderTech_drg_1_0_0 = async() => {
    const dataTech_drg_1_0_0 = await queryTech_drg_1_0_0();

    const mainDiv = document.querySelector('.tech_drg_1_0_0__main');
    mainDiv.style.minHeight = `${mainDiv.offsetHeight}px`;
    const elmsTabTech_drg_1_0_0 = document.querySelectorAll('.tech_drg_1_0_0__item');
    elmsTabTech_drg_1_0_0.forEach((item, index) => {
        item.addEventListener('click', () => {
            i = index + 1;
            const id = item.getAttribute('data-tab');
            const data = dataTech_drg_1_0_0.filter(item => item.sub === id);
            renderMainTech_drg_1_0_0(data[0]);
        })
    });
    
    setInterval(() => {
        if(i > 2) i = 0;
        renderMainTech_drg_1_0_0(dataTech_drg_1_0_0[i]);
        i++;
    }, 6000)
};

const renderMainTech_drg_1_0_0 = data => {
    const elmsTabTech_drg_1_0_0 = document.querySelectorAll('.tech_drg_1_0_0__item');
    elmsTabTech_drg_1_0_0.forEach(item => {
        item.classList.remove('active');
        const id = item.getAttribute('data-tab');
        if(id === data.sub){
            item.classList.add('active');
        }
    })
    document.querySelector('.tech_drg_1_0_0__main').innerHTML = `
    <div class="tech_drg_1_0_0__content">
        <div class="tech_drg_1_0_0__title">${data.title}</div>
        <div class="tech_drg_1_0_0__text">
            ${data.content}
        </div>
    </div>
    <div class="tech_drg_1_0_0__image">
        <picture>
            <source media="(max-width: 768px)" srcset="${data.imageMB}">
            <img width="463" height="588" src="${data.imagePC}" alt="">
        </picture>
    </div>
    `;
}

renderTech_drg_1_0_0();
