import "./style.css";

(() => {
  const imageGallery = document.querySelector(".image-slider-container");
  const imageSlider = document.querySelector(".slider-images");
  const imageSize = 900;

  // Create Images
  (() => {
    const getImagesSources = () => {
      let listOfSources = [];
      for (let i = 0; i < 5; i++) {
        const randomID = Math.floor(Math.random() * 201);
        listOfSources.push(`https://picsum.photos/id/${randomID}/1600/900`);
      }
      return listOfSources;
    };

    getImagesSources().forEach((source) => {
      const container = document.createElement("div");
      container.style.backgroundImage = `url("${source}")`;
      imageSlider.appendChild(container);
    });
  })();

  const imagesElementList = imageSlider.querySelectorAll("div");
  let imageIndex = 0;

  const moveToImage = () => {
    imagesElementList[imageIndex].scrollIntoView({ behavior: "smooth" });
  };

  const advanceSlider = () => {
    if (imageIndex + 1 < imagesElementList.length) {
      imageIndex += 1;
    } else {
      imageIndex = 0;
    }
    moveToImage();
  };

  const recedeSlider = () => {
    if (imageIndex - 1 < 0) {
      imageIndex = imagesElementList.length - 1;
    } else {
      imageIndex -= 1;
    }
    moveToImage();
  };

  const createSliderArrows = () => {
    const backArrow = document.createElement("button");
    backArrow.textContent = "<";
    backArrow.addEventListener("click", () => {
      recedeSlider();
    });
    backArrow.classList.add("slider-back-arrow");

    const forwardArrow = document.createElement("button");
    forwardArrow.textContent = ">";
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

  // Create Navigation Dots
  (() => {
    const container = document.createElement("div");
    container.classList.add("navigation-container");
    imagesElementList.forEach((image) => {
      const dot = document.createElement("div");
      dot.classList.add("navigation-dot");
      dot.addEventListener("click", () => {
        const pastActive = container.querySelector(".navigation-dot.active");
        if (pastActive) {
          pastActive.classList.remove("active");
        }
        dot.classList.add("active");
        image.scrollIntoView({behavior: "smooth"})
      })
      container.appendChild(dot);
    });
    imageGallery.appendChild(container);
  })();
})();
