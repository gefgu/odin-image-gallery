import "./style.css";

(() => {
  const imageGallery = document.querySelector(".image-slider-container");
  const imagesElementList = document.querySelectorAll(".slider-images > img");
  let imageIndex = 0;

  const makeImageActive = () => {
    imagesElementList[imageIndex].classList.add("active");
  };

  const cleanSlider = () => {
    const currentImage = document.querySelector(".slider-images > img.active");
    currentImage.classList.remove("active");
  };

  const advanceSlider = () => {
    cleanSlider();
    if (imageIndex + 1 < imagesElementList.length) {
      imageIndex += 1;
    } else {
      imageIndex = 0;
    }
    makeImageActive();
  };

  const recedeSlider = () => {
    cleanSlider();
    if (imageIndex - 1 < 0) {
      imageIndex = imagesElementList.length - 1;
    } else {
      imageIndex -= 1;
    }
    makeImageActive();
  };

  const createSliderArrows = () => {
    const backArrow = document.createElement("button");
    backArrow.textContent = "⬅️";
    backArrow.addEventListener("click", () => {
      recedeSlider();
    });
    backArrow.classList.add("slider-back-arrow");

    const forwardArrow = document.createElement("button");
    forwardArrow.textContent = "➡️";
    forwardArrow.addEventListener("click", () => {
      advanceSlider();
    });
    forwardArrow.classList.add("slider-forward-arrow");

    const container = document.createElement("div");
    container.classList.add("slider-arrows");
    container.append(backArrow, forwardArrow);

    imageGallery.appendChild(container);
  };

  createSliderArrows();

  makeImageActive();
})();
