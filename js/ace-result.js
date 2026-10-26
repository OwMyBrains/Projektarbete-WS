//ACE-lista START
aceList();

function aceList() {
  fetch("json/aces.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((ace) => {
        document.getElementById("ace-data").innerHTML +=
          "<tbody> <td>" +
          ace.name +
          "</td><td>" +
          ace.hole +
          "</td><td>" +
          ace.date +
          "</td><td>" +
          ace.type +
          "</td></tbody>";
      });
    });
}
//ACE-lista SLUT
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
          result.year +
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
