// Hämta element från DOM
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#fi-sender-fullName");
const emailInput = document.querySelector("#fi-sender-email");
const textArea = document.querySelector("#fi-text-message");
const errorList = document.querySelector("#errorlist");
const statusList = document.querySelector("#form-status");
//Submit för informationen

// Array som används för felmeddelanden
let errors = [];

/**
Validerar formulärets inmatning.
@returns {boolean}
*/

//Validering av formuläret
function validateForm() {
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let text = textArea.value.trim();

  //Rensar eventuella felmeddelanden sedan tidigare
  errors = [];
  errorList.innerHTML = "";
  //Vilkor för valideringen, om alla stämmer går det vidare
  if (name.length === 0) {
    return false;
  } else if (email.length === 0) {
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
  let text = textArea.value.trim();

  //Felmeddelanden
  if (name.length === 0) {
    errors.push("Du måste ange ditt namn");
  }
  if (email.length === 0) {
    errors.push("Du måste ange din E-postadress");
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

//API för att skicka email från formuläret

const forminit = new Forminit();
const FORM_ID = "0g9dozsmpdd";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (validateForm()) {
    statusList.textContent = "Skickar meddelandet";
    const formData = new FormData(e.target);
    const { data, error } = await forminit.submit(FORM_ID, formData);

    const status = document.getElementById("form-status");

    if (error) {
      return;
    }
    status.textContent = "Meddelandet skickat!";
    errorList.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    textArea.value = "";
    e.target.reset();
    console.log();
  } else {
    displayErrors();
  }
});
