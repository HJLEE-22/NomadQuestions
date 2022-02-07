

const loginInput = document.querySelector("#login-form input"); //아까 여기 . 오타
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("Hello", loginInput.value);
}

loginBtn.addEventListener("click", onLoginBtnClick);

// 왜 console에 Hello - "LEE" 이렇게 뜨지? 