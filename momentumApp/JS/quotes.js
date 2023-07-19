// array 안에 객체를 넣는 것도 가능하다. 어떤 타입이든 array 안에 넣을 수 있다.
const quotes = [
    {
        quote : "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
        author : "Herodotus",
    },
    {
        quote : "열정없이 사느니 차라리 죽는게 낫다.",
        author : "Kurt Cobain",
    },
    {
        quote : "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
        author : "Julia Sorel",
    },
    {
        quote : "불가능해 보이는 것은 불확실한 가능성보다 항상 더 낫다",
        author : "Aristotle",
    },
    {
        quote : "다른 사람들이 할 수 있거나 할 일을 하지 말고, 다른 이들이 할 수 없고 하지 않을 일들을 하라.",
        author : "Amelia Earhart",
    },
    {
        quote : "난 위험에 대해 그리 많이 생각지 않는다. 난 그저 내가 하고 싶은 것을 할 뿐이다. 앞으로 나아가야한다면, 나아가면 된다.",
        author : "Lillian Carter",
    },
    {
        quote : "계산된 위험은 감수하라. 이는 단순히 무모한 것과는 완전히 다른 것이다.",
        author : "George S. Patton",
    },
    {
        quote : "인류는 세상을 다른 시각으로 보는 사람들에게 냉담할 수 있다.",
        author : "Eric A. Burns",
    },
    {
        quote : "성공하기까지는 항상 실패를 거친다.",
        author : "Mickey Rooney",
    },
    { 
        quote : "나에게 창의성은 안먹고는 살 수 없는 약과 같다.",
        author : "Cecil B. DeMille",
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

// Math.random() -> 0 ~ 1까지의 수를 랜덤하게 반환
// 1. 원하는 개수만큼 곱해주고 2. Math.floor()을 통해 내림해주면 
// 어떤 범위든 사용할 수 있음.
const randomIndexToQuote = Math.floor(Math.random() * quotes.length); 
const todaysQuote = quotes[randomIndexToQuote];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
