var submitBtn, inputArr

if (document.querySelector) {
    submitBtn = document.querySelector('#submit-btn')
  if (submitBtn.style) {
    submitBtn.style.display = "none";
  }
} else {
  document.getElementById('submit-btn')
}

if (document.querySelectorAll) {
  var allInputs = document.querySelectorAll('input[type=number]')
  if (Array.from) {
    inputArr = Array.from(allInputs)
  } else {
    inputArr = Array.prototype.slice.call(allInputs)
  }
} else {
  var allInputs = document.getElementsByClassName('inputField')
  if (Array.from) {
    inputArr = Array.from(allInputs)
  } else {
    inputArr = Array.prototype.slice.call(allInputs)
  }
}

var Http = new XMLHttpRequest()
var url = '/change-score-client'

function pushData() {
  console.log('s');
  var obj = {
    homeTeam: {
      name: "Ajax",
      logo: "/img/AFCA-logo.png",
      score: Number(inputArr[0].value),
      yellowCards: Number(inputArr[1].value),
      redCards: Number(inputArr[2].value),
      fouls: Number(inputArr[3].value),
    },
    awayTeam: {
      name: "PSV",
      logo: "/img/PSV-logo.png",
      score: Number(inputArr[4].value),
      yellowCards: Number(inputArr[5].value),
      redCards: Number(inputArr[6].value),
      fouls: Number(inputArr[7].value),
    }
  }
  Http.open("POST", url)
  Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  Http.send(JSON.stringify(obj))
}

for(var i = 0; i < inputArr.length; i++) {
  inputArr[i].addEventListener('change', pushData)
}
