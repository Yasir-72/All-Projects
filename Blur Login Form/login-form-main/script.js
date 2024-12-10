const loginbox = document.querySelector(".loginbox");
const register = document.querySelector(".Registerlink");
const login = document.querySelector(".loginlink");

register.addEventListener('click', () => {
    loginbox.classList.add("active");
  });
login.addEventListener('click', () => {
    loginbox.classList.remove("active");
  });
