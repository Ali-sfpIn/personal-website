"use strict";

import devImgUrl from "../images/dev-img.jpg";
import typing from "../images/typing.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.png";
import github from "../images/github.png";
import itsMe from "../images/itsMe.png";
import insider from "../images/insider.png";
import section from "../images/section.png"
// import img1 from "url:../images/dev-background";
// SELECTIONS...
const switchBtn = document.querySelector(".slider");
const seeWord = document.querySelector(".see");
const mainSection = document.querySelector(".main-section");
const imgContainer = document.querySelector(".img-col");
const body = document.querySelector("body");
// STATE VARIABLES..
const classNameContainer = [
  "typing",
  "itsMe",
  "insider",
  "telegram",
  "instagram",
  "github",
  'section'
];
const urlContainer = [typing, itsMe, insider, telegram, instagram, github ,section];
// FUNCTIONS...
/**
 * @param {Event} e this parameter is the event that is happening when we hover the different part of the page
 * @returns {undefined} doesn't return anything
 * @author alisfp
 * @todo just shows the img of the code and it will switch the text color
 */
function codeShower(e) {
  const className = e.target.className.split(" ")[0];
  console.log(className);
  if (!classNameContainer.includes(className)) return;
  const codImg = `<img src="${urlContainer.find((url) =>
    url.includes(className)
  )}" alt="" />`;
  imgContainer.innerHTML = "";
  imgContainer.insertAdjacentHTML("afterbegin", codImg);
  if (seeWord.classList.contains("text-white")) return;
  imgContainer.innerHTML = "";
  imgContainer.insertAdjacentHTML(
    "afterbegin",
    `<img class="dev-img" src="${devImgUrl}" alt="" />`
  );
}
// EVENT HANDLERS...
switchBtn.addEventListener("click", function () {
  seeWord.classList.toggle("text-white");
  mainSection.addEventListener("mouseover", codeShower);
});
console.log();
