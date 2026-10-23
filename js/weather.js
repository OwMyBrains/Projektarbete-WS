"use strict";

const weatherEl = document.querySelector("#weather");
const weatherEl2 = document.querySelector("#weather2");

async function weather() {
  try {
    const response = await fetch(
      "https://vadret.today/api/public/v1/vader?ort=ostersund",
    );
    const data = await response.json();

    weatherEl.innerHTML = `<p>Vädret i ${data.ort} just nu.
    <br>
    Temperatur(°C): ${data.timvis[0].temperature}°, känns som ${data.timvis[0].feels}° |
    Nederbörd(mm): ${data.timvis[0].precipProbability}% -> ${data.timvis[0].precipitation}mm |
    Vind(m/s): ${data.timvis[0].wind}(${data.timvis[0].gust})
    <br>
    Uppdaterad ${data.timvis[0].time} -  <a href="https://vadret.today" class="weather-api">Vädret hämtas från vadret.today</a>`;
  } catch (error) {
    console.error("Fel, kunde inte hämta vädret", error);
  }
}
weather();
