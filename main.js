var numerologyModule = (function () {
  var sum = function (a, b) {
    return a + b;
  };

  var canSumNumerology = function (n) {
    return n > 9 && ![11, 22].includes(n);
  };

  var sumNumerology = function (n) {
    if (canSumNumerology(n)) {
      return `${n}`.split("").map(Number).reduce(sum, 0);
    }
    return n;
  };

  var calculateNumerology = function (list) {
    if (list.length === 1) {
      return sumNumerology(list[0]);
    }

    var canStillSumEach = list.some(canSumNumerology);

    if (canStillSumEach) {
      var newList = list.map(sumNumerology);
      return calculateNumerology(newList);
    }

    var numerology = list.reduce(sum, 0);

    return calculateNumerology([numerology]);
  };

  var calculateNumerologyOfBirthDay = function (date) {
    return calculateNumerology([
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ]);
  };

  // var number = 1999;
  // var digits = Array.from(String(number), Number);
  // var expression = digits.join('+');


  return function () {
    document
      .querySelector(".js-numerology-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = Object.fromEntries(new FormData(e.target));
        var birthday = new Date(formData["Birthday"]);
        var name = formData["Name"];
        calculateAndLogNumerology(birthday);
        saveLocal(birthday, name);
        initData()
        // console.log('Số chủ đạo là:',calculateNumerology([birthday.getDate()]),calculateNumerologyOfBirthDay(birthday));
        // var link;
        // var num123 = calculateNumerologyOfBirthDay(birthday);

        // switch (num123) {
        //   case 1:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-10-cung-chuyen-gia";
        //     break;
        //   case 2:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-2-cung-chuyen-gia";
        //     break;
        //   case 3:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-3-cung-chuyen-gia";
        //     break;
        //   case 4:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-4-cung-chuyen-gia";
        //     break;
        //   case 5:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-5-cung-chuyen-gia";
        //     break;
        //   case 6:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-6-cung-chuyen-gia";
        //     break;
        //   case 7:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-7-cung-chuyen-gia";
        //     break;
        //   case 8:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-8-cung-chuyen-gia";
        //     break;
        //   case 9:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-9-cung-chuyen-gia";
        //     break;
        //   case 10:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-10-cung-chuyen-gia";
        //     break;
        //   case 11:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-11-cung-chuyen-gia";
        //     break;
        //   case 22:
        //     link =
        //       "https://www.thansovietnam.online/luan-giai-so-22-cung-chuyen-gia";
        //     break;
        // }

        // window.location.href =
        //   link +
        //   "?Name=" +
        //   formData["Name"] +
        //   "&Sex=" +
        //   formData["Sex"] +
        //   "&Birthday=" +
        //   formData["Birthday"] +
        //   "&Num=" +
        //   calculateNumerologyOfBirthDay(birthday);
      });
  };
  function calculateAndLogNumerology(birthday) {
    var result = calculateNumerology([birthday.getDate()]);
    var resultOfBirthDay = calculateNumerologyOfBirthDay(birthday);
    console.log("Số chủ đạo là:", result, resultOfBirthDay);
  }

  function saveLocal(birthday, name) {
    localStorage.setItem("listbirthday", JSON.stringify(birthday));
    localStorage.setItem("listName", JSON.stringify(name));
  }
  function initData() {
    let stringDate = JSON.parse(localStorage.getItem("listbirthday")) || [];

    var date, year, month, day, stringName;
    
      date = new Date(stringDate);
      year = date.getFullYear(); 
      month = date.getMonth() + 1; 
      day = date.getDate(); 
      stringName = JSON.parse(localStorage.getItem("listName")) || "";
      console.log(year, month, day, stringName);
      innerMonth(month)
      // resetValues();
  }
  
  // function resetValues() {
  //   year = null;
  //   month = null;
  //   day = null;
  //   stringName = null;
  // }
  

  function innerMonth(month) {
    // document.getElementById('calculate__row1--1').innerText = month
    console.log('thang',month)
  }
  
})();
// console.log(numerologyModule([birthday]))

numerologyModule();
