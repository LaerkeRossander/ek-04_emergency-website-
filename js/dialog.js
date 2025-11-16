const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn1");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  document.querySelector("#dialog1").showModal();
  document.querySelector("#dialog1").classList.add("fadeIn_kf");
}

function closeModal() {
  const dialog = document.querySelector("#dialog1");

  const btn_open2 = document.querySelector("#cta_open2");
  const btn_close2 = document.querySelector("#close_btn2");

  btn_open2.addEventListener("click", openModal2);
  btn_close2.addEventListener("click", closeModal2);
}

function openModal2() {
  document.querySelector("#dialog2").showModal();
}

function closeModal2() {
  document.querySelector("#dialog2").close();
}
const btn_open3 = document.querySelector("#cta_open3");
const btn_close3 = document.querySelector("#close_btn3");

btn_open3.addEventListener("click", openModal3);
btn_close3.addEventListener("click", closeModal3);

function openModal3() {
  document.querySelector("#dialog3").showModal();
}

function closeModal3() {
  document.querySelector("#dialog3").close();
}
