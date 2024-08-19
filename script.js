const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
let word = document.getElementById("word");
let meaning = document.getElementById("meaning")
let btn = document.getElementById("submit");
let input = document.getElementById("input");
let Result = document.querySelector(".result");
let partOfSpeech = document.getElementById('PartOfSpeech');


const fetchData = async () => {
    const response = await fetch(`${url}/${input.value}`);   

    let result = await response.json();
    // speechSynthesis.speak(uttrence);

    if (response.status == 404) { 
        alert("Word not found");
        input.value = 'word not found';
        input.focus();
        return;
    }
    console.log(result);
    word.innerHTML = result[0].word;
    meaning.innerHTML = result[0].meanings[0].definitions[0].definition;
    partOfSpeech.innerHTML = result[0].meanings[0].partOfSpeech + " / " + result[0].phonetics[1].text; + "/"
}
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        fetchData();
    }
});

let uttrence = new SpeechSynthesisUtterance();
function wordSpeech(){
    let words = word.innerHTML;
    let speak =  words;
    uttrence.text = speak;
    speechSynthesis.speak(uttrence);
}
word.addEventListener("click", wordSpeech);
meaning.addEventListener("click", ()=>{
    let words = meaning.textContent;
    let speak =  words;
    uttrence.text = speak;
    speechSynthesis.speak(uttrence);
});