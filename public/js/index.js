var inputArr, labelArr

var Http = new XMLHttpRequest()
var url = '/change-score-client'


if (document) {
    
    var submitBtn = document.getElementById('submit-btn')
    var noJsNote = document.getElementById('no-js-support-notification')

    submitBtn.style.display = "none";
    noJsNote.style.display = "none";

    // Haal alle input fields op
    if (document.querySelectorAll) {
        // querySelectorAll partial supports IE8, no support IE6-7 and Firefox2-3
        var allInputs = document.querySelectorAll('input')
        if (Array.from) {
            // Array.from() supports all browsers except IE
            inputArr = Array.from(allInputs)
        } else {
            // IE
            inputArr = Array.prototype.slice.call(allInputs)
        }
    } else {
        // getElementsByClassName supports all browsers
        var allInputs = document.getElementsByClassName('inputField')
        if (Array.from) {
            // All browsers except IE at the moment
            inputArr = Array.from(allInputs)
        } else {
            // IE 
            inputArr = Array.prototype.slice.call(allInputs)
        }
    }


    function pushData() {
        var obj = {
            homeTeam: {
                name: "Ajax",
                logo: "/img/AFCA-logo.png",
                score: regExNumbers(inputArr[0].value) ? Number(inputArr[0].value) : 0,
                yellowCards: regExNumbers(inputArr[1].value) ? Number(inputArr[1].value) : 0,
                redCards: regExNumbers(inputArr[2].value) ? Number(inputArr[2].value) : 0,
                fouls: regExNumbers(inputArr[3].value) ? Number(inputArr[3].value) : 0
            },
            awayTeam: {
                name: "PSV",
                logo: "/img/PSV-logo.png",
                score: regExNumbers(inputArr[4].value) ? Number(inputArr[4].value) : 0,
                yellowCards: regExNumbers(inputArr[5].value) ? Number(inputArr[5].value) : 0,
                redCards: regExNumbers(inputArr[6].value) ? Number(inputArr[6].value) : 0,
                fouls: regExNumbers(inputArr[7].value) ? Number(inputArr[7].value) : 0
            }
        }
        Http.open("POST", url)
        Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        Http.send(JSON.stringify(obj))
    }
    
    for(var i = 0; i < inputArr.length; i++) {
            // All main browsers of 2019
        if (document.addEventListener){  
            inputArr[i].addEventListener('change', pushData)
        } else {
            // IE 6-8 
            inputArr[i].attachEvent('onchange', pushData)
        }
    }
}

// regEx for input type fallback, IE<10 doesn't have [input=number] so the fallback is a textboxwhere you can insert some random characters...
function regExNumbers(data) {
    var reg = new RegExp('^[0-9]+$');
    return reg.test(data)
}