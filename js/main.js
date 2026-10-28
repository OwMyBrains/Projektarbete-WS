"use strict";

//HAMBURGER MENU

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
//HAMBURGER MENU END

//HOLE LAYOUT GALLERY

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

//HOLE LAYOUT GALLERY END

//© + Date
const copywriteEl = document.querySelector("#copywrite");
let dateToday = new Date();

copywriteEl.innerHTML = `<p>© ${dateToday.getFullYear()} Woodensala Frisbeesällskap</p>`;
