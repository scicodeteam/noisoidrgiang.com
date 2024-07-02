const popupForms = [
    {
        title: "images/head-baogia.png",
        buttonText: "Nhận Báo Giá",
        triggerClass: ".knprice",
        formType: "Báo Giá"
    },
    {
        title: "images/head-tuvan.png",
        buttonText: "Đăng Kí Tư Vấn",
        triggerClass: ".knadvise",
        formType: "Tư Vấn"
    },
    {
        title: "images/head-khuyenmai.png",
        buttonText: "Nhận Khuyến Mãi",
        triggerClass: ".knpromotion",
        formType: "Khuyến Mãi"
    }
];

function openPopupForm(title, buttonText, formType) {
    const popupRegist_drg_1_0_0 = `
        <div class="popupRegist_drg_1_0_0__overlay" id="popupRegist_drg_1_0_0__overlay"></div>
        <form class="popupRegist_drg_1_0_0__boxTv popupRegist_drg_1_0_0" id="popupRegist_drg_1_0_0">
            <div class="popupRegist_drg_1_0_0__form" id="regist_ft_1_0_0__form">
                <div class="popupRegist_drg_1_0_0__title">
                    <img width="130" height="auto" src="${title}" alt="Logo Nội soi">
                </div>
                <b id="close-form">╳</b>
                <article>
                    <div style="display:none">
                        <input id="gclid_field" name="referred" value="">
                        <input id="code_campaign" name="code_campaign" value="">
                        <input id="name_campaign" name="name_campaign" value="">
                        <input id="first_link" name="first_link" value="">
                        <input id="website" name="website" value="">
                        <input id="location" name="location" value="">
                    </div>
                    <div class="popupRegist_drg_1_0_0__item form-group">
                        <input id="iname" name="iname" type="textbox" placeholder="Họ và tên:">
                        <div class="form-message"></div>
                    </div>
                    <div class="popupRegist_drg_1_0_0__item form-group">
                        <input id="imob" name="imob" type="textbox" placeholder="Số điện thoại:">
                        <div class="form-message"></div>
                    </div>
                    <div class="popupRegist_drg_1_0_0__item form-group" style="display:none">
                        <input id="itext" name="itext" type="textbox" placeholder="Ghi chú">
                        <div class="form-message"></div>
                    </div>
                    <div class="popupRegist_drg_1_0_0__item form-group">
                        <select name="iservice" id="iservice">
                            <option value="">--- Dịch vụ ---</option>
                            <option value="Cắt mí - Bấm mí">Cắt mí - Bấm mí</option>
                            <option value="Nâng mũi">Nâng mũi</option>
                            <option value="Nâng ngực">Nâng ngực</option>
                            <option value="Giảm mỡ">Giảm mỡ</option>
                            <option value="Hàm mặt">Hàm mặt</option>
                            <option value="Tạo hình môi">Tạo hình môi</option>
                            <option value="Phun xăm">Phun xăm</option>
                            <option value="Trị nám - Tàn nhang">Trị nám - Tàn nhang</option>
                            <option value="Trị mụn - Mụn thịt">Trị mụn - Mụn thịt</option>
                            <option value="Căng da - Cấy mỡ">Căng da - Cấy mỡ</option>
                            <option value="Thẩm mỹ khác">Thẩm mỹ khác</option>
                        </select>
                        <div class="form-message"></div>
                    </div>
                </article>
                <div class="popupRegist_drg_1_0_0__reg">
                    <input id="popupRegist_drg_1_0_0__clickSent" type="submit" value="${buttonText}">
                </div>
            </div>
        </form>
    `;
    
    // Insert popup form into the body
    document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popupRegist_drg_1_0_0);
    
    // Additional logic for the specific form type
    // For example: set values for hidden fields, validate form, etc.
    document.querySelector('.popupRegist_drg_1_0_0 input[name="first_link"]').value = document.URL;
        document.querySelector('.popupRegist_drg_1_0_0 input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('.popupRegist_drg_1_0_0 input[name="location"]').value = data.city;            
        });
        // Validate Form
        Validator({
            form: '#popupRegist_drg_1_0_0',
            errorSelector: '.form-message',
            formGroupSelector: '.form-group',
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isRequired('input[name="iname"]'),
                Validator.isMobile('input[name="imob"]'),
                Validator.isRequired('select[name="iservice"]'),
                Validator.addInput('#popupRegist_drg_1_0_0 #itext', () => {
                    return 'Quý khách đăng kí dịch vụ: ' + document.querySelector('#popupRegist_drg_1_0_0 #iservice').value;
                }),
            ],
            onSubmit: function (data) {
                console.log(data);
                popupRegist_drg_1_0_0__hideForm();
                // sendForm(data, '/dang-ky-thanh-cong');             
            }
        });

        document.getElementById('close-form').addEventListener('click', () => {
            popupRegist_drg_1_0_0__closeForm()
        })
        document.getElementById('popupRegist_drg_1_0_0__overlay').addEventListener('click', () => {
            popupRegist_drg_1_0_0__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.popupRegist_drg_1_0_0__boxTv')) {
                popupRegist_drg_1_0_0__closeForm()
            }
        }
        function popupRegist_drg_1_0_0__closeForm(){
            document.getElementById('popupRegist_drg_1_0_0').remove();
            document.getElementById('popupRegist_drg_1_0_0__overlay').remove();
        }
        function popupRegist_drg_1_0_0__hideForm(){
            document.getElementById('popupRegist_drg_1_0_0').style.display = 'none';
            document.getElementById('popupRegist_drg_1_0_0__overlay').style.display = 'none';
        }
    
    // Close form event listeners
    document.getElementById('close-form').addEventListener('click', () => {
        popupRegist_drg_1_0_0__closeForm()
    });
    document.getElementById('popupRegist_drg_1_0_0__overlay').addEventListener('click', () => {
        popupRegist_drg_1_0_0__closeForm()
    });
    window.onclick = function (e) {
        if (e.target == document.querySelector('.popupRegist_drg_1_0_0__boxTv')) {
            popupRegist_drg_1_0_0__closeForm()
        }
    };

    function popupRegist_drg_1_0_0__closeForm(){
        document.getElementById('popupRegist_drg_1_0_0').remove();
        document.getElementById('popupRegist_drg_1_0_0__overlay').remove();
    }
}

popupForms.forEach(form => {
    const { title, buttonText, triggerClass, formType } = form;
    const triggerElements = document.querySelectorAll(triggerClass);
    
    triggerElements.forEach(element => {
        element.addEventListener('click', () => {
            openPopupForm(title, buttonText, formType);
            // Additional logic specific to each form type can be added here
        });
    });
});