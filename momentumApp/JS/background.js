const images = [
    "img/0.jpeg", "img/1.jpeg","img/2.jpeg","img/3.jpeg",
    "img/4.jpeg","img/5.jpeg","img/6.jpeg","img/7.jpeg",
    "img/8.jpeg",
        ];

const randomIndexToImg = Math.floor(Math.random() * images.length);
const todaysimg = images[randomIndexToImg];

document.body.style.backgroundImage = `url(${todaysimg})`; // 난 body를 통해서 배경을 채웠다.



// 새로운 요소를 추가하기
// 1. 요소를 생성한다. 2. 요소의 속성 및 텍스트에 값을 할당한다 3. 부모요소에 append한다.

// const imgNode = document.createElement("img"); // 1. 새로운 요소 생성

// imgNode.src = todaysimg; // 2. 요소의 속성에 속성값 할당 - >이게 더 효율적이고 직관적인 방식

// // 요소.속성 = "속성값"으로 요소의 속성을 제어할 수 있다.

// document.body.appendChild(imgNode); // 3. body에 자식 요소로 추가하기 (append하기)

// imgNode.classList.add("bg"); // css 추가

// 이게 더 비효율적인 방식이라고 챗qpt가 말했다.
// const imgNode = document.createElement("img");

// const imgNodeAttribute = document.createAttribute("src");
// imgNodeAttribute.value = todaysimg;
// imgNode.setAttributeNode(imgNodeAttribute);

// document.body.appendChild(imgNode); 

