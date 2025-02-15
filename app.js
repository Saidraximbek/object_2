const fathDiv = document.createElement("div");
const heroImg = document.createElement("img");
const sourse = document.createElement("span");
const date = document.createElement("p");
const cardInfoCont = document.createElement("div");
const title = document.createElement("h2");
const cardInfo = document.createElement("p");
const avaDiv = document.createElement("div");
const avImg = document.createElement("img");
const avaName = document.createElement("p");
cardInfoCont.append(sourse, date, title, cardInfo, avaDiv);
avaDiv.append(avImg, avaName);
fathDiv.append(heroImg, cardInfoCont);
document.body.append(fathDiv);
heroImg.src = "./images/blogimage.svg";
sourse.textContent = "Learning";
date.textContent = "Published 21 Dec 2023";
title.textContent = "HTML & CSS foundations";
cardInfo.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
avImg.src = "./images/userpic.png";
avaName.textContent = "Greg Hooper";
fathDiv.setAttribute("class", "container");
heroImg.setAttribute("class", "hero__img");
cardInfoCont.setAttribute("class", "info__cont");
sourse.setAttribute("class", "sourse");
date.setAttribute("class", "date");
cardInfo.setAttribute("class", "card__info");
avaDiv.setAttribute("class", "ava__div");
