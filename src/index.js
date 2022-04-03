import "./style.css";

(() => {
  const imagesElementList = document.querySelectorAll(".slider-images > img");
  let imageIndex = 0;
 
  const makeImageActive = () => {
    imagesElementList[imageIndex].classList.add("active");
  }
 
  const cleanSlider = () => {
    const currentImage = document.querySelector(".slider-images > img.active");
    currentImage.classList.remove("active");
  }

  const advanceSlider = () => {
    cleanSlider();
    if (imageIndex + 1 < imagesElementList.length) {
      imageIndex += 1;
    } else {
      imageIndex = 0;
    }
    makeImageActive();
  }

  makeImageActive();
  advanceSlider();

})();