// // Khi người dùng click vào button
// document.getElementById('btnReadText').addEventListener('click', function() {
//     // Lấy nội dung văn bản từ một phần tử HTML (ví dụ: textarea)
//     var text = document.getElementById('myText').value;

//     // Gọi API Text-to-Speech
//     var client = new GoogleCloudTextToSpeechClient();
//     client.synthesizeSpeech({
//       input: { text: text },
//       voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//       audioConfig: { audioEncoding: 'MP3' }
//     }, function(err, response) {
//       if (err) {
//         console.error('Lỗi:', err);
//         return;
//       }

//       // Phát âm thanh
//       var audio = new Audio('data:audio/mp3;base64,' + response.audioContent);
//       audio.play();
//     });
//   });

let stringDate = JSON.parse(localStorage.getItem("listbirthday")) || [];
let date, year, month, day, stringName, numMonth, numDay, numYear,numMain;
date = new Date(stringDate);
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
stringName = JSON.parse(localStorage.getItem("listName")) || "";
numMonth = JSON.parse(localStorage.getItem("numMonth")) || [];
numDay = JSON.parse(localStorage.getItem("numDay")) || [];
numYear = JSON.parse(localStorage.getItem("numYear")) || [];
numMain = JSON.parse(localStorage.getItem("numMain")) || [];

console.log(year, month, day, stringName, numDay, numMonth, numYear);

function getName() {
  document.getElementById("name").innerHTML = stringName;
}

function getMonth() {
  let $month = (document.getElementById("calculate__row1--1").innerHTML =
    month);
  showSumMonth($month);
}

function getDay() {
  let $day = (document.getElementById("calculate__row2--1").innerHTML = day);
  showSumDay($day);
}

function getYear() {
  let $year = (document.getElementById("calculate__row3--1").innerHTML = year);
  showSumYear($year);
}

function showSumMonth($month) {
  var $showMonth = Array.from(String($month), Number).join("+");
  document.getElementById("calculate__row1--2").innerHTML = $showMonth;
}

function showSumDay($day) {
  var $showSumDay = Array.from(String($day), Number).join("+");
  document.getElementById("calculate__row2--2").innerHTML = $showSumDay;
}

function showSumYear($year) {
  var $showSumYear = Array.from(String($year), Number).join("+");
  document.getElementById("calculate__row3--2").innerHTML = $showSumYear;
}

function getnumMonth() {
  document.getElementById("calculate__row1--3").innerHTML = numMonth;
}

function getnumDay() {
  document.getElementById("calculate__row2--3").innerHTML = numDay;
}

function getnumYear() {
  document.getElementById("calculate__row3--3").innerHTML = numYear;
}

function getnumMain() {
    document.getElementById('calculate__result').innerHTML = numMain;
}


function bootstrap() {
    getName();
    getMonth();
    getDay();
    getYear();
    getnumMonth();
    getnumDay();
    getnumYear();
    getnumMain();
  }
  bootstrap();
  
// var number = 1999;
// var digits = Array.from(String(number), Number);
// var expression = digits.join('+');
