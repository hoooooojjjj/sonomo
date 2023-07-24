// array 안에 객체를 넣는 것도 가능하다. 어떤 타입이든 array 안에 넣을 수 있다.
let quotes = [];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const quoteModal = document.querySelector(".quoteModal");
const quoteModalOpen = document.querySelector("#quoteModalOpen");
const inputquote = document.querySelector("#quote-inputquote");
const inputAuther = document.querySelector("#quote-inputauther");
const quoteform = document.querySelector("#quote-form");

let chcek = false;

function Editing(event){
    event.preventDefault();
    chcek = true;
    console.log(inputquote.value);
    const newQuote = inputquote.value;
    const newAuther = inputAuther.value;
    inputquote.value = "";
    inputAuther.value = "";

    quotes.push({quote : newQuote, author : newAuther});
    console.log(quotes);
    localStorage.setItem("quotes",JSON.stringify(quotes));

    quote.innerHTML = newQuote;
    author.innerHTML = newAuther    ;

}
function quoteOpen(){
    if(quoteModal.style.display === "block"){
        quoteModal.style.display = "none";}
    else{
        quoteModal.style.display = "block";
    }
}

quoteModalOpen.addEventListener("click",quoteOpen);

quoteform.addEventListener("submit",Editing);

const savedQuotes = localStorage.getItem("quotes");


if(savedQuotes !== null){

const parsedsavedQuotes = JSON.parse(savedQuotes);

quotes = parsedsavedQuotes;

if(chcek === false){
// Math.random() -> 0 ~ 1까지의 수를 랜덤하게 반환
// 1. 원하는 개수만큼 곱해주고 2. Math.floor()을 통해 내림해주면 
// 어떤 범위든 사용할 수 있음.
const randomIndexToQuote = Math.floor(Math.random() * quotes.length); 
const todaysQuote = quotes[randomIndexToQuote];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
}
}
