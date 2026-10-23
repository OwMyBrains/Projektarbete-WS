//Resultat-lista START
resultList();

function resultList() {
  fetch("json/resultat.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((result) => {
        document.getElementById("result-data").innerHTML +=
          "<tbody> <td>" +
          result.competition +
          "</td><td>" +
          result.class +
          "</td><td>" +
          result.place +
          "</td><td>" +
          result.name +
          "</td></tbody>";
      });
    });
}
//Resultat-lista SLUT
