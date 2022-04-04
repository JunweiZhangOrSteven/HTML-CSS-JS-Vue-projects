var eye = document.getElementById('eye');
var pwd = document.getElementById('password');
var account = document.getElementById('account');
var submit = document.getElementById('submit');
var tip = document.getElementById('tip');
var inputs = document.querySelectorAll("input");

console.log(account)
console.log(pwd)

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function() {
        tip.style.display = "none";
    })
}

var flag = 0;
eye.onclick = function() {

    if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/open.png';
        flag = 1;
    } else {
        pwd.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
    }

}

submit.onclick = function() {
    var userPwd = document.getElementById('password').value;
    var userName = document.getElementById('account').value;
    window.localStorage.setItem('userName', userName);
    window.localStorage.setItem('userPwd', userPwd);

    if (userName === "admin" && userPwd === "123456") {

        window.location.href = "show.html";
    } else {
        tip.style.display = "block";
    }



}