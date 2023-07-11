let clock = document.getElementById("clock--circle");
let numHour;
let rotate = 37;
function createNumHour() {
  for (let i = 1; i <= 10; i++) {
    numHour = document.createElement("div");
    creatNumber(i);
    numHour.classList.add("numHour");
    clock.appendChild(numHour);
    rotate += 36;
    numHour.style.transform = `rotate(${rotate}deg) skewX(56deg)`;
  }
}

createNumHour();
function creatNumber(i) {
  if (i === 10) {
    numHour.innerHTML = `<p class="textNum">11</p>`;
  } else {
    numHour.innerHTML = `<p class="textNum">${i}</p>`;
  }
}

document.querySelectorAll(".textNum")[0].style.backgroundImage =
  "url('https://numerologist.com/wp-content/uploads/2020/11/002.png')";


document.getElementById("section2__circle--decription").innerHTML = circleContent.decription1;

document.querySelectorAll(".textNum").forEach((element, index) => {
  element.addEventListener("click", (event) => {
    document.getElementById("centerCicle--circle").style.background = "#081f35";
    resetBackgrounds();
    event.target.style.backgroundImage =
      "url('https://numerologist.com/wp-content/uploads/2020/11/002.png')";
    event.target.style.color = "white";
    innerTextSection_Circle(index);
  });
});

function resetBackgrounds() {
  document.querySelectorAll(".textNum").forEach((element) => {
    element.style.color = "#507ca5";
    element.style.backgroundImage =
      "url('https://numerologist.com/wp-content/uploads/2020/11/001.png')";
  });
}

document.getElementById("centerCicle--circle").addEventListener("click", () => {
  document.getElementById(
    "centerCicle--circle"
  ).style.backgroundImage = `url('https://numerologist.com/wp-content/uploads/2020/11/reading-img-22.jpg')`;
  document.getElementById(
    "section2__circle--decription"
  ).innerHTML = circleContent.decription22;

  resetBackgrounds();
});

function innerTextSection_Circle(index) {
  var content;
  switch (index) {
    case 0:
      content = circleContent.decription1;
      break;
    case 1:
      content =circleContent.decription2 ;
      break;
    case 2:
      content =circleContent.decription3;
      break;
    case 3:
      content =circleContent.decription4 ;
      break;
    case 4:
      content =circleContent.decription5 ;
      break;
    case 5:
      content =circleContent.decription6;
      break;
    case 6:
      content =circleContent.decription7 ;
      break;
    case 7:
      content =circleContent.decription8 ;
      break;
    case 8:
      content =circleContent.decription9 ;
      break;
    case 9:
      content =circleContent.decription11 ;
      break;
    default:
      "";
  }
  document.getElementById("section2__circle--decription").innerHTML = content;
}
