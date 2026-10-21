"use strict";

//HAMBURGER MENU

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
//HAMBURGER MENU END

//ACE-lista START
aceList();
aceCount();

function aceList() {
  fetch("json/aces.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((ace) => {
        document.getElementById("ace-data").innerHTML +=
          "<tbody> <td>" +
          ace.name +
          "</td> <td>" +
          ace.hole +
          "</td> <td>" +
          ace.date +
          "</td></tbody>";
      });
    });
}

function aceCount() {
  fetch("json/ace-count.json")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);

      data.forEach((ace) => {
        document.getElementById("ace-count").innerHTML +=
          "<tbody> <td>" +
          ace.name +
          "</td> <td>" +
          ace.count +
          "</td></tbody>";
      });
    });
}
//ACE-lista SLUT
