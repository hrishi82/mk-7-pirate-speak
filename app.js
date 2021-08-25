var inputBox = document.querySelector("#input-Box");
var btnTranslate = document.querySelector(".btn-translate");
var outputBox = document.querySelector(".output-Box")

// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const url = "https://api.funtranslations.com/translate/pirate.json"


var urlConverter = (inputBox) => {
    return url + "?text=" + inputBox.value
}

function errorHandler(error){
    console.log(error);
}


function fetchcall(){
    fetch(urlConverter(inputBox))
    .then(response => response.json())
    .then(data => {
        var out = data.contents.translated;
        outputBox.innerText = out;
    }  )
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", fetchcall)