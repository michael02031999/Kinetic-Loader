root = document.documentElement;
let firstTriangle = document.getElementById("firstTriangle");
let secondTriangle = document.getElementById("secondTriangle");

//firstTriangle.style.animationPlayState = "paused";
//firstTriangle.style.transform = "rotate(180deg)";

//firstTriangle.addEventListener("animationend", animationEnd1);
//firstTriangle.addEventListener("animationstart", animationStart1);
//secondTriangle.addEventListener("animationstart", animationStart2);

let degreeValues = getComputedStyle(document.documentElement);

let firstStart = degreeValues.getPropertyValue("--firstStart");
let firstEnd = degreeValues.getPropertyValue("--firstEnd");
let secondStart = degreeValues.getPropertyValue("--secondStart");
let secondEnd = degreeValues.getPropertyValue("--secondEnd");

console.log(firstStart);
console.log(firstEnd);
console.log(secondStart);
console.log(secondEnd);

/*function animationStart2() {
  //
  console.log("animation started");
}*/

//firstTriangle.classList.add("firstHalfTriangle1Rotation");

/*function animationEnd1() {
  secondStart = parseInt(secondStart) + 180;
  secondEnd = parseInt(secondEnd) + 180;
  root.style.setProperty("--secondStart", secondStart + "deg");
  root.style.setProperty("--secondEnd", secondEnd + "deg");
  /*secondTriangle.style.animation = "rotating2 2s linear infinite";*/
//secondTriangle.style.animationPlayState = "paused";*/
/*secondTriangle.style.animation = "rotate2 2s linear";

  console.log(degreeValues.getPropertyValue("--secondStart"));
  console.log(degreeValues.getPropertyValue("--secondEnd"));*/

/*firstTriangle.classList.remove("firstHalfTriangle1Rotation");*/

/*function animationEnd2() {
  animationEnd1();
}*/
