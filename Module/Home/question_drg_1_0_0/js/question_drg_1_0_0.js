const queryQuestion_drg_1_0_0 = async () => {
    const response = await fetch('https://noisoidrgiang.com/wp-json/wp/v2/pages/124');
    const data = await response.json();
    const dataAcfLayout = data.acf.group_page_field.body_custom;
    const dataAfcLayoutFilter = dataAcfLayout.filter(item => {
        return item.acf_fc_layout === "question_drg_1_0_0";
    });
    const dataQuestion_drg_1_0_0 = [];
    dataAfcLayoutFilter[0].list.forEach(item => {
        const splitData = item.content.split('\r\n');
        const itemQuestion_drg_1_0_0 = {
            question: splitData[0],
            answer: splitData[1]
        };
        dataQuestion_drg_1_0_0.push(itemQuestion_drg_1_0_0);
    });
    return dataQuestion_drg_1_0_0;
};

const renderQuestion_drg_1_0_0 = async () => {
    const dataQuestion_drg_1_0_0 = await queryQuestion_drg_1_0_0();
    const elmsQuestionBtn = document.querySelectorAll('.question_drg_1_0_0__item');
    elmsQuestionBtn.forEach(item => {
        item.addEventListener('click', () => {
            const itemAnswer = item.querySelector('.question_drg_1_0_0__answer');
            const id = item.getAttribute('id-question');
            const data = dataQuestion_drg_1_0_0.filter((item, index) => index === Number(id));
            itemAnswer.innerHTML = data[0].answer;
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.querySelector('.question_drg_1_0_0__answer').setAttribute('style', 'display: block; height: 0px');
                setTimeout(() => {
                    item.querySelector('.question_drg_1_0_0__answer').setAttribute('style', 'display: none;');
                }, 200);
            } else {
                item.classList.add('active');
                itemAnswer.style.display = 'block';
                const heightAnswer = item.querySelector('.question_drg_1_0_0__answer').offsetHeight;
                item.querySelector('.question_drg_1_0_0__answer').setAttribute('style', 'display: block; height: 0px');
                setTimeout(() => {
                    item.querySelector('.question_drg_1_0_0__answer').setAttribute('style', `display: block; height: ${heightAnswer}px`);
                }, 100);
            }
        });
    });
};

renderQuestion_drg_1_0_0();

