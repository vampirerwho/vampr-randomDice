const randomerD = document.querySelector(".img1");

let clickeR = document.querySelector(".me");

clickeR.addEventListener("click", function () {
  const randomer = Math.trunc(Math.random() * 6) + 1;
  const newD = (randomerD.src = `dice${randomer}.png`);
});
