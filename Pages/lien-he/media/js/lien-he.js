document.querySelector('.screen2 input[name="first_link"]').value = document.URL;
document.querySelector('.screen2 input[name="website"]').value = document.referrer;
// Validate Form
if (document.querySelector('.screen2')) {
    Validator({
        form: '#screen2',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('input[name="imob"]'),
            Validator.isMobile('input[name="imob"]'),
            Validator.addInput('textarea[name="itext"]', () => {
                return 'Triệu chứng, bệnh lý khách hàng đang gặp phải: '  + document.querySelector('#screen2 textarea[name="inote"]').value + '- Ngày khách hàng đặt lịch đến nội soi: '  + document.querySelector('#screen2 input[name="idate"]').value;
            }),
        ],
        onSubmit: function (data) {
            if (document.querySelector('#screen2 input[name="email"]').value === '') {
                document.querySelector('input[type="submit"]').setAttribute("disabled", "");
                document.querySelector('input[type="submit"]').value = "Đang gửi thông tin...";
                document.querySelector('input[type="submit"]').classList.add('sending');
                // sendForm(data, '/dang-ky-thanh-cong');
                sendAPI(data, '/dang-ky-thanh-cong');
                // console.log(data);
            }
            else {
                console.log('NOT SPAM!!!', document.querySelector('#screen2 input[name="email"]').value)
            }
            document.querySelector('#screen2').reset();
        }
    });
}