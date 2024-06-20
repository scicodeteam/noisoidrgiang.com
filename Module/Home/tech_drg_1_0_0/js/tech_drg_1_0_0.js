const dataTech_drg_1_0_0 = [
    {
        id: '1',
        title: 'CAMERA CÓ ĐỘ PHÓNG ĐẠI 100 - 135 LẦN',
        content: 'Máy nội soi tiên tiến hiện nay với độ phóng đại 100 – 135 lần giúp Bác Sĩ đánh giá chính xác tổn thương.',
        imagePc: 'tech-image.jpg',
        imageMb: 'tech-image-mb.jpg'
    },
    {
        id: '2',
        title: 'KỸ THUẬT NỘI SOI HÌNH ẢNH TĂNG CƯỜNG NBI',
        content: 'Chế độ nhuộm ảo (NBI) giúp nổi bật cấu trúc mạch máu và bề mặt của niêm mạc, từ đó hỗ trợ Bác Sĩ dễ dàng nhận ra các dạng tổn thương',
        imagePc: 'tech-image.jpg',
        imageMb: 'tech-image-mb.jpg'
    },
    {
        id: '3',
        title: 'ỨNG DỤNG CÔNG NGHỆ TRÍ TUỆ NHÂN TẠO (AI)',
        content: 'Trí tuệ nhân tạo AI hỗ trợ bác sĩ chẩn đoán nhanh hơn, chính xác hơn, giảm tỷ lệ bỏ sót và đồng nhất về kết quả.',
        imagePc: 'tech-image.jpg',
        imageMb: 'tech-image-mb.jpg'
    },
]

const elmsTabTech_drg_1_0_0 = document.querySelectorAll('.tech_drg_1_0_0__item');
elmsTabTech_drg_1_0_0.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const data = dataTech_drg_1_0_0.filter(item => item.id === id);
        document.querySelector('.tech_drg_1_0_0__main').innerHTML = `
        <div class="tech_drg_1_0_0__content">
            <div class="tech_drg_1_0_0__title">${data[0].title}</div>
            <div class="tech_drg_1_0_0__text">
                ${data[0].content}
            </div>
        </div>
        <div class="tech_drg_1_0_0__image">
            <picture>
                <source media="(max-width: 768px)" srcset="images/${data[0].imageMb}">
                <img width="463" height="588" src="images/${data[0].imagePc}" alt="">
            </picture>
        </div>
        `;
    })
})