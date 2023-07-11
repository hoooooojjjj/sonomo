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
const title = document.getElementById("title"); // => HTML요소를 가져올 때도 "객체" 형태로 가져온다는 것을 꼭 기억해야함!!
                                                // => title이란 변수에 h1 태크의 정보가 "객체 형태"로 저장된 것!
                                                // => title은 객체임
console.dir(title);