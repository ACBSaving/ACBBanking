var btn_signin = document.querySelector('.btn-sign-in');
var wrap_content = document.querySelector('.wrap-content');

const dataAccount = {
    username : 'huynhdang29',
    password : 'huynhdang2994'
}

function checkLogin(dataInput){
    
}

btn_signin.addEventListener('click', function() {
    
    var user_name = document.querySelector('.username');
    var password = document.querySelector('.password');
    if(user_name) {
        var dataInput = [];
        var user_nameValue = user_name.value;
        var passwordValue = password.value;
        if(user_nameValue === dataAccount.username && passwordValue === dataAccount.password){
            window.location.assign('info.html');
        }else {
            alert('Sai tên đăng nhập hoặc mật khẩu. Vui lòng kiểm tra lại !');
        }
    }else {
        let markup = `
        <div class="sign-in-content">
            <p>bạn chưa có sổ tiết kiệm online tại scb ?</p>
            <p>Vui lòng để lại thông tin để được hỗ trợ</p>
            <div class="image-sign-in-content">
                <img src="./images/image2.jpg">
            </div>
            <div class="input-group">
                <input class="username" type="text" placeholder="Tên đăng nhập">
            </div>
            <div class="input-group">
                <input class="password" type="password" placeholder="Mật khẩu">
            </div>
        </div>
        `;
    
        wrap_content.innerHTML = markup;
    }
});