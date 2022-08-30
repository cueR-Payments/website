"use strict";
console.log("Running");
const signUp = document.getElementById("signUp");
const loadWallet = document.getElementById("loadWallet");
const makeNreceive = document.getElementById("makeNreceive");
const image = document.getElementById("image");
const blueLine = document.getElementById("blueLine");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

image2.classList.add("hiding");
image3.classList.add("hiding");
image1.classList.add("entering");
image1.classList.remove("hiding");

signUp.addEventListener("click", function () {
  signUp.style.opacity = "1";
  loadWallet.style.opacity = "0.3";
  makeNreceive.style.opacity = "0.3";
  // image.src = "../assets/X 1.svg";
  blueLine.style.top = "0px";
  blueLine.style.transition = "1s";
  image2.classList.remove("entering");
  image3.classList.remove("entering");
  image2.classList.add("hiding");
  image3.classList.add("hiding");
  image1.classList.remove("hiding");
  image1.classList.add("entering");
});
loadWallet.addEventListener("click", function () {
  signUp.style.opacity = "0.3";
  loadWallet.style.opacity = "1";
  makeNreceive.style.opacity = "0.3";
  // image.src = "../assets/X 2.svg";
  blueLine.style.top = "120px";
  blueLine.style.transition = "1s";
  image1.classList.remove("entering");
  image3.classList.remove("entering");
  image1.classList.add("hiding");
  image3.classList.add("hiding");
  image2.classList.remove("hiding");
  image2.classList.add("entering");

  // test.toggleClass = "hidden";
});
makeNreceive.addEventListener("click", function () {
  signUp.style.opacity = "0.3";
  loadWallet.style.opacity = "0.3";
  makeNreceive.style.opacity = "1";
  // image.src = "../assets/X 3.svg";
  blueLine.style.top = "279px";
  blueLine.style.transition = "1s";
  image2.classList.add("hiding");
  image1.classList.add("hiding");
  image2.classList.remove("entering");
  image1.classList.remove("entering");
  image3.classList.remove("hiding");
  image3.classList.add("entering");
});

