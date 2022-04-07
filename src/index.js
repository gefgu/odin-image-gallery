import "./style.css";

(() => {
  const imageGallery = document.querySelector(".image-slider-container");
  const imageSlider = document.querySelector(".slider-images");
  const imageSize = 900;

  const advanceSlider = () => {
    imageSlider.scroll({ left: imageSlider.scrollLeft + imageSize, behavior: "smooth" });
  };

  const recedeSlider = () => {
    imageSlider.scroll({ left: imageSlider.scrollLeft - imageSize, behavior: "smooth" });
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
})();
