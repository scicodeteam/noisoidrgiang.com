const box = document.getElementById('screen1__box');

    dataService.forEach(service => {
        const title = service[0];
        const items = service.slice(1);

        const itemHTML = `
            <div class="screen1__titleChild">
                ${title}
            </div>
            <div class="screen1__boxItem">
                ${items.map(item => `
                    <a href="${item.link}" class="screen1__item">
                        <div class="screen1__pic">
                            <img src="${item.pic}" alt="">
                        </div>
                        <div class="screen1__nameService">
                            ${item.titleChild}
                        </div>
                    </a>
                `).join('')}
            </div>
        `;

        box.innerHTML += itemHTML;
    });