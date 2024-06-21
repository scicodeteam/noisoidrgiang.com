document.querySelector('.contact_drg_1_0_0 input[name="first_link"]').value = document.URL;
document.querySelector('.contact_drg_1_0_0 input[name="website"]').value = document.referrer;
// Validate Form
if (document.querySelector('.contact_drg_1_0_0')) {
    Validator({
        form: '#contact_drg_1_0_0',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('input[name="imob"]'),
            Validator.isMobile('input[name="imob"]'),
            Validator.addInput('textarea[name="itext"]', () => {
                return 'Triệu chứng, bệnh lý khách hàng đang gặp phải: '  + document.querySelector('#contact_drg_1_0_0 textarea[name="inote"]').value + '- Ngày khách hàng đặt lịch đến nội soi: '  + document.querySelector('#contact_drg_1_0_0 input[name="idate"]').value;
            }),
        ],
        onSubmit: function (data) {
            if (document.querySelector('#contact_drg_1_0_0 input[name="email"]').value === '') {
                document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                document.querySelector('input[type="submit"]').value = "Đang gửi thông tin...";
                document.querySelector('input[type="submit"]').classList.add('sending');
                // sendForm(data, '/dang-ky-thanh-cong');
                console.log(data);
            }
            else {
                console.log('NOT SPAM!!!', document.querySelector('#contact_drg_1_0_0 input[name="email"]').value)
            }
            document.querySelector('#contact_drg_1_0_0').reset();
        }
    });
}