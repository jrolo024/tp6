let title = document.title;
let lineNumber = document.querySelectorAll("tr").length - 1;
let rowNumber = document.querySelectorAll("td").length / lineNumber;
let semesterNumber = lineNumber / 2; //vu qu'il y a 2 étudiants
let s5e1 = document.querySelectorAll("td")[26].innerText; //9ème ligne * 3 col arondie à l'inferieur
let s5e2 = document.querySelectorAll("td")[29].innerText;//+1 ligne donc plus 3 td
document.querySelectorAll("td")[26].innerText = parseInt(s5e1) + 2;
document.querySelectorAll("td")[29].setAttribute("id", "bigandred");
document.body.appendChild(document.createElement("textarea"));
