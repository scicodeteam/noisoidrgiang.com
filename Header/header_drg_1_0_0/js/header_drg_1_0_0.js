const elmsLv1 = document.querySelectorAll('.isToggleMenu');
elmsLv1.forEach(elmLv1 => {
    if(!elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu--1')){
        elmLv1.parentNode.insertAdjacentHTML('beforeend', '<div class="header_drg_1_0_0__submenu header_drg_1_0_0__submenu--1"></div>');
    }
});
const hoverHeader_drg_1_0_0 = () => {
    elmsLv1.forEach(elmLv1 => {
        elmLv1.addEventListener('mousemove', () => {
            const html = `
            <div class="header_drg_1_0_0__subitem">
                <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--2">NỘI SOI TIÊU HÓA trên</a>
                <div class="header_drg_1_0_0__submenu header_drg_1_0_0__submenu--2">
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                </div>
            </div>
            <div class="header_drg_1_0_0__subitem">
                <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--2">NỘI SOI TIÊU HÓA trên</a>
                <div class="header_drg_1_0_0__submenu header_drg_1_0_0__submenu--2">
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                </div>
            </div>
            `;
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu--1').innerHTML = html;
        });
        document.querySelector('.header_drg_1_0_0__bg').addEventListener('mousemove', () => {
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu--1').innerHTML = '';
        });
    });
};

const clickHeader_drg_1_0_0 = () => {
    elmsLv1.forEach(elmLv1 => {
        elmLv1.addEventListener('click', () => {
            const html = `
            <div class="header_drg_1_0_0__subitem">
                <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--2">NỘI SOI TIÊU HÓA trên</a>
                <div class="header_drg_1_0_0__submenu header_drg_1_0_0__submenu--2">
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                </div>
            </div>
            <div class="header_drg_1_0_0__subitem">
                <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--2">NỘI SOI TIÊU HÓA trên</a>
                <div class="header_drg_1_0_0__submenu header_drg_1_0_0__submenu--2">
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                    <a href="#" class="header_drg_1_0_0__link header_drg_1_0_0__link--3">NỘI SOI TIÊU HÓA trên</a>
                </div>
            </div>
            `;
            elmLv1.parentNode.querySelector('.header_drg_1_0_0__submenu--1').innerHTML = html;
        });
    });
}

const header_dhh_1_1_0 = () => {
    if(window.innerWidth > 1024){
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



