let pageTitle = document.title;
let pageContent = document;
let thirdTrailerLink = document.getElementsByTagName("a")[2].href;
let gnomeGirlType = document.getElementsByTagName("h2")[0];
let pNumber = document.getElementsByTagName("p").length;
let iNumber = document.getElementsByTagName("img").length;
let synNumber = (document.getElementsByTagName("h2").length)/2 - 1;
let firstSectionDate = document.getElementsByTagName("h1")[0].textContent;
let nodesUnderSection2016 = new Array(document.querySelectorAll("h1+h2"));
let nodesUnderSection2016Number = nodesUnderSection2016.length + 1;
let imitationGameSyn = document.querySelectorAll("img+p")[1].textContent;
console.log(`======================================================
Titre de la page : ${pageTitle}
Type du contenu de la page : ${pageContent}
La troisième bande d'annonce est : ${thirdTrailerLink}
======================================================
Le titre GNOME GIRL est de type : ${gnomeGirlType}
======================================================
Notre page contient ${pNumber} paragraphes et ${iNumber} images
======================================================
Notre page contient ${synNumber} synopsis de films
======================================================
La première rubrique des films date de l'année ${firstSectionDate}
Il existe ${nodesUnderSection2016Number} films sous la rubrique 2016
======================================================
Synopsis du film :IMITATION GAME:
${imitationGameSyn}
======================================================
`);
