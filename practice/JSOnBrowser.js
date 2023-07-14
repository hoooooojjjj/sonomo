// ** document 객체 **

// document도 결국 객체다! document는 웹문서(HTML)에 대한 정보를 가지고 있음. 
// 그래서 console.dir(document)를 하면 document 객체 내부를 볼 수 있다. 결국 객체인 것임.
// => "HTML(웹문서) 정보를 자바스크립트(의 객체) 형태로 가지고 있는 것이 document다!"
// 그렇기 때문에 document.title 처럼 HTML의 있는 요소들이 document의 속성으로 들어가있다. 
// => HTML에 있는 요소를 자바스크립트로 가져와서 읽거나 변경할 수 있다.

// console.dir(document)
// document.title = "Momentum app"; // => 이것이 결국 document 객체의 title이란 속성을 가져와 변경한 것
//                                  // title : "Momentum app" -> document 객체 안에서 이렇게 title이 정의되어있음.


// ** document 객체로 html에 접근하는 방법 **
// const title = document.getElementById("title"); // => HTML요소를 가져올 때도 "객체" 형태로 가져온다는 것을 꼭 기억해야함!!
//                                                 // => title이란 변수에 h1 태그의 정보가 "객체 형태"로 저장된 것!
//                                                 // => title은 객체임
// console.dir(title);
// title.innerText = "Got you!";

// HTMLcollection으로 저장되는 놈들 - 값이 여러 개일 수 있는 class와 tag 요소 가져오는 메서드
// 얘네는 하나의 요소만 가져온다고 해도 HTMLcollection 형태로 저장되기 때문에(like array)
// 바로 hellos.~~ span.~~ 가 안된다. hellos[1].~~ 같이 인덱싱을 해줘야 사용할 수 있다.
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// const span = document.getElementsByTagName("span");
// console.log(span);

// querySelector(), querySelectorAll()
// 얘네가 많이 쓰임 -> CSS 선택자처럼 사용될 수 있기 때문이다.
// const h1 = document.querySelector(".hello h1");
// console.log(h1);
// 즉 연결 선택자, 속성 선택자를 사용하듯이 사용할 수 있다!! 그래서 더 편리하다.

// // ** Event **

// // addEventListener("이벤트명", 실행할 함수);
// function TitleMouseOver(){
//     title.innerText = "mouse is here!";
// }

// title.addEventListener("click", function(){
//     if(title.style.color === "blue") title.style.color = "black";
//      else title.style.color = "blue"
    
// })

// title.addEventListener("mouseover", TitleMouseOver); // -> 정의된 함수를 쓸 때는 ()를 사용하지 않는다!! 실행은 JS가 해준다.
// // title.onclick = TitleMouseOver; -> 이벤트를 실행하는 두 가지 방법이 있음.

// title.addEventListener("mouseleave", function(){
//     title.innerText ="mouse is gone!";
// });

// // Window 객체 -> 화면 그 자체

// window.addEventListener("resize", function(){
//     document.body.style.backgroundColor = "red"; // 중요한 body, head, title은 그냥 document.body로 가져올 수 있다.
// });
// window.addEventListener("copy",function(){
//     document.body.style.backgroundColor = "green";
// });
// window.addEventListener("offline", function(){
//     alert("네트워크 오류");
// })
// window.addEventListener("online", function(){
//     alert("네트워크 연결!");
// })


// ** CSS와 JS의 상호작용 **
// 기존의 title.style.color = ~~ 와 같은 방법은 css와 JS가 직접 상호작용하는 것이라 그리 좋지 않은 방법일 수 있다.

// title.addEventListener("click", function(){
//     // CSS에 적용할 클래스를 만들고 그 클래스를 요소에 넣어주면 된다.
//     // title.className 이 방식은 객체에 새로운 속성과 속성값을 더해주는 방식 -> HTML 요소의 정보가 객체 형태로 저장되어 있으니 객체에 
//     // 새로운 속성과 속성값을 더해주면 HTML 요소로 추가가 된다!
//     const activeClass = "active"; // -> 이런 row value는 오타가 나도 콘솔에서 알려주지 않으니 여러번 사용할거면 변수에 저장해놓고 사용하는게 안전함.
//     if(title.className === activeClass) title.className = "";
//     else title.className = activeClass;
// });

// // 그러나 위 className을 사용하는 것은 className을 "교체"해버리는 것이라 이미 class가 있던 요소면 기존 class를 삭제해버린다. 
// // 그렇기 때문에 "classList"를 사용하는 것이 안전하다!
// title.addEventListener("click",function(){
//     const activeClass = "active";
//     if(title.classList.contains(activeClass)) title.classList.remove(activeClass);
//     else title.classList.add(activeClass);
// })

// 위와 같은 코드를 한 줄로 줄일 수 있는 코드가 있다.
// => * classList.toggle() *
// 이 함수는 만약 인자가 class에 존재하면 인자를 삭제하고 존재하지 않으면 인자를 추가한다.
// title.addEventListener("click", function(){
//     title.classList.toggle("active")
// });