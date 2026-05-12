function changeTitle() {
  let title = document.querySelector("h1");
  title.innerText = "Get The Glow✧";
}
changeTitle();

function changeBackgroundColor() {
  document.body.style.backgroundColor = "#fcf5ed";
}
changeBackgroundColor();

function changeFooterLink() {
  const footerLink = document.querySelector(".footer-link");
  footerLink.href = "https://www.google.com";
}
changeFooterLink();

function addAmazonClass() {
  const amazonLinks = document.querySelectorAll("td a");
  amazonLinks.forEach(function (link) {
    link.classList.add("amazon-link");
  });
}
addAmazonClass();

function toggleImage() {
  let images = document.querySelectorAll("table img");
  images.forEach(function (image) {
    image.classList.toggle("hide-image");
  });
}
toggleImage();

function changePricesColor() {
  const prices = document.querySelectorAll(".price");
  prices.forEach(function (price) {
    const randomColor = getRandomColor();
    price.style.color = randomColor;
  });
}
function getRandomColor() {
  const colors = ["#7b4b3a", "#a67b5b", "#e6ccb2", "#8b5e35"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
