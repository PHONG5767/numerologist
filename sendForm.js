let stringDate = JSON.parse(localStorage.getItem("listbirthday")) || [];
let date, year, month, day, stringName, numMonth, numDay, numYear, numMain;
date = new Date(stringDate);
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
stringName = JSON.parse(localStorage.getItem("listName")) || "";
numMonth = JSON.parse(localStorage.getItem("numMonth")) || [];
numDay = JSON.parse(localStorage.getItem("numDay")) || [];
numYear = JSON.parse(localStorage.getItem("numYear")) || [];
numMain = JSON.parse(localStorage.getItem("numMain")) || [];

document.getElementById("nummain__bg").innerHTML = `<p>${numMain}</p>`;

function splitInfo() {
  let strday = String(day);
  let strmonth = String(month);
  let stryear = String(year);
  let numString = strday + strmonth + stryear + stringName;
  let splitString = numString.split("");
  randomInfo(splitString);
}
splitInfo();

function randomInfo(splitString) {
  for (let i = 0; i <= splitString.length - 1; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [splitString[i], splitString[j]] = [splitString[j], splitString[i]];
  }

  let ranLeft = splitString.slice(0, splitString.length / 2);
  let ranRight = splitString.slice(
    splitString.length / 2,
    splitString.length - 1
  );
  // console.log("ranLeft", ranLeft, "ranRight", ranRight);
  appendRanLeft(ranLeft);
  appendRanRight(ranRight);
}

function appendRanLeft(ranLeft) {
  let containerLeft = document.getElementById("random__text--left");
  for (let i = 0; i <= ranLeft.length - 1; i++) {
    let containerLeftChild = document.createElement("div");
    let randomsizeLeft = Math.floor(Math.random() * 60) + 20;
    containerLeftChild.style.fontSize = `${randomsizeLeft}px`
    containerLeftChild.classList.add("containerLeftChild");
    containerLeftChild.innerHTML = ranLeft[i];
    containerLeft.appendChild(containerLeftChild);
  }
}

function appendRanRight(ranRight) {
  let containerRight = document.getElementById("random__text--right");
  for (let i = 0; i <= ranRight.length - 1; i++) {
    let containerRightChild = document.createElement("div");
    let randomsizeRight = Math.floor(Math.random() * 60) + 20;
    containerRightChild.style.fontSize = `${randomsizeRight}px`
    containerRightChild.classList.add("containerRightChild");
    containerRightChild.innerHTML = ranRight[i];
    containerRight.appendChild(containerRightChild);
  }
}

function randomLeftDivChild() {
  document.querySelectorAll(".containerLeftChild").forEach((element) => {
    let leftX = Math.floor(Math.random() * 600);
    let leftY = Math.floor(Math.random() * 250);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = '#' + randomColor

    element.style.transform = `translate3d(${leftX}px,${leftY}px, 0.01px)`;
  });

  setTimeout(randomLeftDivChild, 10000);
}

document.querySelectorAll(".containerLeftChild").forEach((element) => {
  let leftX = Math.floor(Math.random() * 600);
  let leftY = Math.floor(Math.random() * 250);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = '#' + randomColor

  element.style.transform = `translate3d(${leftX}px,${leftY}px, 0.01px)`;
});

setTimeout(() => {
  randomLeftDivChild();
}, 25);

//////////////////////////////

function randomRightDivChild() {
  document.querySelectorAll(".containerRightChild").forEach((element) => {
    let rightX = Math.floor(Math.random() * 600);
    let rightY = Math.floor(Math.random() * 250);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = '#' + randomColor
    element.style.transform = `translate3d(${rightX}px,${rightY}px, 0.01px)`;
    
  });

  setTimeout(randomRightDivChild, 10000);
}

document.querySelectorAll(".containerRightChild").forEach((element) => {
  let rightX = Math.floor(Math.random() * 600);
  let rightY = Math.floor(Math.random() * 250);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.color = '#' + randomColor

  element.style.transform = `translate3d(${rightX}px,${rightY}px, 0.01px)`;
});

setTimeout(() => {
  randomRightDivChild();
}, 25);


// function randomRightDivChild() {
//   let RightX = Math.floor(Math.random() * 500);
//   let RightY = Math.floor(Math.random() * 500);

//   document.getElementById("random__text--right").style.right = RightX + 'px';
//   document.getElementById("random__text--right").style.top = RightY + 'px';
// }
// setTimeout(randomRightDivChild, 3000);

function getName() {
  document.getElementById(
    "name"
  ).innerHTML = `<p class=contentNum>${stringName}</p>`;
}

function getMonth() {
  document.getElementById(
    "calculate__row1--1"
  ).innerHTML = `<p class=contentNum>${month}</p>`;
}

function getDay() {
  document.getElementById(
    "calculate__row2--1"
  ).innerHTML = `<p class=contentNum>${day}</p>`;
}

function getYear() {
  document.getElementById(
    "calculate__row3--1"
  ).innerHTML = `<p class=contentNum>${year}</p>`;
}

function showSumMonth() {
  var $showMonth = Array.from(String(month), Number).join("+");
  document.getElementById(
    "calculate__row1--2"
  ).innerHTML = `<p class=contentNum>${$showMonth}</p>`;
}

function showSumDay() {
  var $showSumDay = Array.from(String(day), Number).join("+");
  document.getElementById(
    "calculate__row2--2"
  ).innerHTML = `<p class=contentNum>${$showSumDay}</p>`;
}

function showSumYear() {
  var $showSumYear = Array.from(String(year), Number).join("+");
  document.getElementById(
    "calculate__row3--2"
  ).innerHTML = `<p class=contentNum>${$showSumYear}</p>`;
}

function getnumMonth() {
  document.getElementById(
    "calculate__row1--3"
  ).innerHTML = `<p class=contentNum>${numMonth}</p>`;
}

function getnumDay() {
  document.getElementById(
    "calculate__row2--3"
  ).innerHTML = `<p class=contentNum>${numDay}</p>`;
}

function getnumYear() {
  document.getElementById(
    "calculate__row3--3"
  ).innerHTML = `<p class=contentNum>${numYear}</p>`;
}

function getnumMain() {
  document.getElementById(
    "calculate__result"
  ).innerHTML = `<p class=contentNum>${numMain}</p>`;
}

function animationNum() {
  const $contentNum = document.getElementsByClassName("contentNum");
  const $arr = document.getElementsByClassName(" bg__arrow");

  if (!$contentNum.length) {
    return setTimeout(animationNum, 100);
  }

  for (let i = 0; i < $contentNum.length; i++) {
    setTimeout(() => {
      $contentNum[i].style.display = "block";
      $contentNum[i].style.transition = `all .3s ease-in`;
    }, 250 * (i + 1));
  }

  for (let n = 0; n < $arr.length; n++) {
    setTimeout(() => {
      $arr[n].style.backgroundImage = `url('./img/lifepath-arrow-black.webp')`;
      $arr[n].style.transition = `all .3s ease-out`;
    }, 400 * (n + 1));
  }
}

function displayNuCircle() {
  setTimeout(() => {
    document.getElementById("containerSubmit").style.display = "none";
    document.getElementById("containerSubmit__circle").style.display = "block";
    document.getElementById("bodySubmit").style.minHeight = "900px";
    document.getElementById("bodySubmit").style.justifyContent =
      "space-between";
    document.querySelectorAll(".bodySubmit__content").forEach((element) => {
      element.style.display = "none";
    });
  }, 4000);
}

setTimeout(() => {
  document.getElementById("calculate__iconjs").style.display = "block";
}, 2700);

function bootstrap() {
  getName();
  getMonth();
  getDay();
  getYear();
  getnumMonth();
  getnumDay();
  getnumYear();
  getnumMain();
  showSumMonth();
  showSumDay();
  showSumYear();
  animationNum();
  displayNuCircle();
}
bootstrap();
