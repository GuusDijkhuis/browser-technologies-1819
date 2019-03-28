const submitbtn = document.querySelector('#submit-btn').style.display = "none";
const allInputs = document.querySelectorAll('input[type=number]')

const inputArr = Array.prototype.slice.call(allInputs)

const Http = new XMLHttpRequest()
const url = '/change-score-client'

function pushData() {
  const obj = {
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

inputArr.forEach(function(res) {
  res.addEventListener('change', pushData)
})
