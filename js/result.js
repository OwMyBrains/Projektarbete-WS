//Resultat-lista START
resultList();

function resultList() {
  fetch("json/resultat.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((result) => {
        document.getElementById("result-data").innerHTML +=
          "<tbody><tr><td>" +
          result.competition +
          "</td><td>" +
          result.year +
          "</td><td>" +
          result.class +
          "</td><td>" +
          result.place +
          "</td><td>" +
          result.name +
          "</td></tr></tbody>";
      });
    });
}
//Resultat-lista SLUT

//Klubbmästare

resultListKM();

function resultListKM() {
  fetch("json/km.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((result) => {
        document.getElementById("km-data").innerHTML +=
          "</td><td>" +
          result.year +
          "</td><td>" +
          result.class +
          "</td><td>" +
          result.place +
          "</td><td>" +
          result.name +
          "</td></tr></tbody>";
      });
    });
}

//Klubbmästare END
