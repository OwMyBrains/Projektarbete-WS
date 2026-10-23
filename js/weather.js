"use strict";

const weatherEl = document.querySelector("#weather");
const weatherEl2 = document.querySelector("#weather2");

async function weather() {
  try {
    const response = await fetch(
      "https://vadret.today/api/public/v1/vader?ort=ostersund",
    );
    const data = await response.json();

    weatherEl.innerHTML = `<p>Temperaturen i ${data.ort} är ${data.timvis[0].temperature}°C - uppdateras ${data.timvis[0].time} -  <a href="https://vadret.today" class="weather-api">Vädret hämtas från vadret.today</a>`;
    weatherEl2.innerHTML = `${data.dygnsvis[0].tMin} - ${data.dygnsvis[0].tMax} - ${data.dygnsvis[0].precip} - ${data.dygnsvis[0].weatherCode}`;

    console.log(data);
  } catch (error) {
    console.error("Fel, kunde inte hämta vädret", error);
  }
}
weather();

async function weather2() {
  const r = await fetch(
    "https://vadret.today/api/public/v1/vader?ort=ostersund",
  );
  const { timvis } = await r.json();
  console.log(timvis[0]);
}
weather2();
