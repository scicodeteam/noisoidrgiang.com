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
            document.querySelector('.header_drg_1_0_0__bg').style.display = 'block';
            const titleCurrent = elmLv1.getAttribute('data-title');
            const dataIndex = data.find(x => x.title === titleCurrent);
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu').innerHTML = dataIndex.submenu;
        });
        document.querySelector('.header_drg_1_0_0__bg').addEventListener('mousemove', () => {
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu').innerHTML = '';
            document.querySelector('.header_drg_1_0_0__bg').style.display = 'none';
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

const renderSearchHeader_drg_1_0_0 = () => {
    document.body.insertAdjacentHTML("beforeend", `
        <div class="header_drg_1_0_0__modalSearch modal" id="search-header" style="display: flex;">
            <div class="modal-bg" onclick="closeSearchHeader_drg_1_0_0()"></div>
            <div class="modal-box animate-zoom">
                <div class="modal-header">
                    <div class="modal-close" onclick="closeSearchHeader_drg_1_0_0()">×</div>
                    <div class="header_drg_1_0_0__modalTitle">Tìm Kiếm Nhanh</div>
                </div>
                <div class="modal-body">	
                    <div class="header_drg_1_0_0__modalGroup">
                        <input type="text" placeholder="Nhập từ khóa tìm kiếm">
                        <button type="submit">	
                            <img width="48" height="48" src="images/icon-search-light.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>    
    `);
};

const closeSearchHeader_drg_1_0_0 = () => {
    document.querySelector('#search-header').remove();
}

const header_dhh_1_1_0 = () => {
    if (window.innerWidth > 1024) {
        document.querySelector('.header_drg_1_0_0__input').addEventListener('focusin', () => {
            document.querySelector('.header_drg_1_0_0__placeholder').style.visibility = 'hidden';
        });
        document.querySelector('.header_drg_1_0_0__input').addEventListener('focusout', () => {
            document.querySelector('.header_drg_1_0_0__input').value = '';
            document.querySelector('.header_drg_1_0_0__placeholder').style.visibility = 'visible';
        });

        hoverHeader_drg_1_0_0();
    } else {
        document.querySelector('.header_drg_1_0_0__toggle').addEventListener('click', () => {
            document.querySelector('.header_drg_1_0_0__nav').classList.add('show');
            document.querySelector('.header_drg_1_0_0__backdrop').style.display = 'block';
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        });
        document.querySelector('.header_drg_1_0_0__backdrop').addEventListener('click', () => {
            document.querySelector('.header_drg_1_0_0__nav').classList.remove('show');
            document.querySelector('.header_drg_1_0_0__backdrop').style.display = 'none';
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
        });

        clickHeader_drg_1_0_0();
    }
};

function debounce(func) {
    var timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}

document.querySelector('.header_drg_1_0_0__searchBtn').addEventListener('click', () => renderSearchHeader_drg_1_0_0());

header_dhh_1_1_0();

window.addEventListener("resize", debounce(function (e) {
    header_dhh_1_1_0();
}));

let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.header_drg_1_0_0').classList.add('show');
    } else {
        document.querySelector('.header_drg_1_0_0').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
})


