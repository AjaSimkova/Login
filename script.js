const firstName = document.querySelector(".first-name");
const password = document.querySelector(".password");
const secondName = document.querySelector(".second-name");
const send = document.querySelector(".send");
const form1 = document.querySelector(".form-login");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    firstName.value == "Andrea" &&
    secondName.value == "Šimková" &&
    password.value == 123456789
  ) {
    send.textContent = "yes";
  } else {
    console.log("false");
  }
  console.log(form1);
});
