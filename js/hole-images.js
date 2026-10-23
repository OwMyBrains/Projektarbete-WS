"use strict";

function showImage(clickedImage) {
  let imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  let image = document.createElement("img");
  image.src = clickedImage.src;
  let closeButton = document.createElement("button");
  closeButton.textContent = "Stäng";
  closeButton.className = "close-btn";
  closeButton.onclick = function () {
    document.body.removeChild(imageContainer);
  };

  imageContainer.appendChild(closeButton);
  imageContainer.appendChild(image);

  document.body.appendChild(imageContainer);
}
