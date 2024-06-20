const queryHeader_dhh_1_1_0 = async () => {
    const response = await fetch('https://noisoidrgiang.com/wp-json/api/v1/menu/');
    const data = await response.json();
    const dataResult = [];
    data.id_header_drg_1_0_0_sub1.forEach(item => {
        const dataTitle = item.title.split('\r\n');
        const title = {
            title: dataTitle[0],
            link: dataTitle[1] ? dataTitle[1] : '#',
        };
        const col = {
            submenu: item.col1 ? item.col1 : null,
        }
        const dataItem = { ...title, ...col };
        dataResult.push(dataItem);
    });
    return dataResult;
};

const elmsLv1 = document.querySelectorAll('.isToggleMenu');
elmsLv1.forEach(elmLv1 => {
    if (!elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu')) {
        elmLv1.parentNode.insertAdjacentHTML('beforeend', '<div class="header_drg_1_0_0__submenu"></div>');
    }
});
const hoverHeader_drg_1_0_0 = async () => {
    const data = await queryHeader_dhh_1_1_0();
    elmsLv1.forEach(elmLv1 => {
        elmLv1.addEventListener('mousemove', () => {
            const titleCurrent = elmLv1.getAttribute('data-title');
            const dataIndex = data.find(x => x.title === titleCurrent);
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu').innerHTML = dataIndex.submenu;
        });
        document.querySelector('.header_drg_1_0_0__bg').addEventListener('mousemove', () => {
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu').innerHTML = '';
        });
    });
};

const clickHeader_drg_1_0_0 = async () => {
    const data = await queryHeader_dhh_1_1_0();
    elmsLv1.forEach(elmLv1 => {
        elmLv1.addEventListener('click', () => {
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu').innerHTML = data[0].submenu;
            elmLv1.parentNode.classList.toggle('active');
        });
    });
}

const header_dhh_1_1_0 = () => {
    if (window.innerWidth > 1024) {
        hoverHeader_drg_1_0_0();
    } else {
        document.querySelector('.header_drg_1_0_0__toggle').addEventListener('click', () => {
            document.querySelector('.header_drg_1_0_0__nav').classList.add('show');
            document.querySelector('.header_drg_1_0_0__backdrop').style.display = 'block';
        });
        document.querySelector('.header_drg_1_0_0__backdrop').addEventListener('click', () => {
            document.querySelector('.header_drg_1_0_0__nav').classList.remove('show');
            document.querySelector('.header_drg_1_0_0__backdrop').style.display = 'none';
        });
        clickHeader_drg_1_0_0();
    }
};

header_dhh_1_1_0();
window.addEventListener('resize', () => header_dhh_1_1_0());


