import "./style.css";

(() => {
  const imageInDisplayContainer = document.querySelector(
    ".slider-current-image"
  );
  const imagesElementList = document.querySelectorAll(".slider-images > img");

  imageInDisplayContainer.appendChild(imagesElementList[0]);
})();
