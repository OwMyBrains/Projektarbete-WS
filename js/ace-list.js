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
