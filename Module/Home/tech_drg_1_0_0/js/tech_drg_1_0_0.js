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
            image: splitData[3]
        };
        dataTech_drg_1_0_0.push(itemTech_drg_1_0_0);
    });
    return dataTech_drg_1_0_0;
};

const renderTech_drg_1_0_0 = async() => {
    const dataTech_drg_1_0_0 = await queryTech_drg_1_0_0();

    const elmsTabTech_drg_1_0_0 = document.querySelectorAll('.tech_drg_1_0_0__item');
    elmsTabTech_drg_1_0_0.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-tab');
            console.log("id: ", id);
            const data = dataTech_drg_1_0_0.filter(item => item.sub === id);
            console.log("data: ", data);
            document.querySelector('.tech_drg_1_0_0__main').innerHTML = `
            <div class="tech_drg_1_0_0__content">
                <div class="tech_drg_1_0_0__title">${data[0].title}</div>
                <div class="tech_drg_1_0_0__text">
                    ${data[0].content}
                </div>
            </div>
            <div class="tech_drg_1_0_0__image">
                <picture>
                    <source media="(max-width: 768px)" srcset="images/${data[0].image}">
                    <img width="463" height="588" src="${data[0].image}" alt="">
                </picture>
            </div>
            `;
        })
    })
};

renderTech_drg_1_0_0();
