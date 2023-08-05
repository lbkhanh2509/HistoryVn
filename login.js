const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//SIGN UP
const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = signUpForm.querySelector("input[type='text']").value;
  const email = signUpForm.querySelector("input[type='email']").value;
  const password = signUpForm.querySelector("input[type='password']").value;

  const user = {
    username,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  signUpForm.reset();

  alert("Đăng ký thành công!");
  container.classList.remove("sign-up-mode");
});

//LOGIN
const loginForm = document.querySelector(".sign-in-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = loginForm.querySelector("input[type='text']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    alert("Chào mừng bạn đến với trang web của mình");
    window.location.href = "http://127.0.0.1:5500/mapvn.html";
  } else {
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu."
    );
  }

  loginForm.reset();
});
