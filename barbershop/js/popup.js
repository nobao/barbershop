let link = document.querySelector(".login-link");

let popup = document.querySelector(".modal-login");
let close = popup.querySelector(".modal-close");

let login = popup.querySelector("#user-login");
let form = popup.querySelector("form");
let password = popup.querySelector("#user-password");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if ( !login.value || !password.value ) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown",function (evt) {
  if ( (evt.keyCode === 27) && (popup.classList.contains("modal-show")) ) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
});