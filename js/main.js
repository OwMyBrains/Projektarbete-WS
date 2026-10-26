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

("use strict");
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Pether Sand
 */

// Hämta element från DOM
const form = document.querySelector("#contact");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const textArea = document.querySelector("#text");
const errorList = document.querySelector("#errorlist");
//Submit för informationen
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    clearForm();
  } else {
    displayErrors();
  }
  console.log();
}

// Array som används för felmeddelanden
let errors = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */

//Validering av formuläret
function validateForm() {
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let subject = subjectInput.value.trim();
  let text = textArea.value.trim();

  //Rensar eventuella felmeddelanden sedan tidigare
  errors = [];
  errorList.innerHTML = "";
  //Vilkor för valideringen, om alla stämmer går det vidare
  if (name.length === 0) {
    return false;
  } else if (email.length === 0) {
    return false;
  } else if (subject.length === 0) {
    return false;
  } else if (text.length === 0) {
    return false;
  } else {
    return true;
  }

  // Kontrollera formulärets obligatoriska fält
  // Visa eventuella felmeddelanden
  // Returnera resultatet (true eller false) av valideringen
}

//Felmeddelanden vid ej korrekt i fylld input
function displayErrors() {
  //Rensar felmeddelanden

  //Vilkor för input samt trimma bort onödiga " "
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let subject = subjectInput.value.trim();
  let text = textArea.value.trim();

  //Felmeddelanden
  if (name.length === 0) {
    errors.push("Du måste ange ditt namn");
  }
  if (email.length === 0) {
    errors.push("Du måste ange din E-postadress");
  }
  if (subject.length === 0) {
    errors.push("Du måste ange ett ämne");
  }
  if (text.length === 0) {
    errors.push("Du måste fylla i en fråga.");
  }
  //Lägg till felmeddelanden i listan som skrivs ut
  errors.forEach((error) => {
    const liEl = document.createElement("li");
    const textNode = document.createTextNode(error);
    liEl.appendChild(textNode);
    errorList.appendChild(liEl);
  });
}

//Rensar formuläret
function clearForm() {
  errorList.innerHTML =
    "Har en en fråga eller fundering? Kontakta oss via formuläret.";
  errors = [];
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  textArea.value = "";
}
