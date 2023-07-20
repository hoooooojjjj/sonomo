const hello = document.querySelector("#hello");
const clock1 = document.querySelector("#clock");
const quote1 = document.querySelector("#quote div:first-child");
const author1 = document.querySelector("#quote div:last-child");
const toDoForm1 = document.querySelector("#todo-form");
const toDoList1 = document.querySelector("#todo-list");
const toDoInput1 = toDoForm1.querySelector("input");

// *** form 태그에 관하여 feat-preventDefault()***

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); // JS에 가져온 HTML 요소에서 또 한번 그 안에 있는 요소를 가져올 수 있다.(더 정밀하게)
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// HTML에서 form 태그를 활용할 때 주의할 점!
// form 태그를 활용하면 input 태그 등에서 사용할 수 있는 기능들이 많아서 유용하다.
// 그러나 우리가 고려해야 할 점은 form 태그 안에 있는 button이나 input(type="submit")을 클릭(엔터)하면 
// 페이지가 새로고침되고 자동으로 form이 submit된다! 
// 이를 고치기 위해 우리는 "submit" 이벤트를 활용할 수 있다!
function onLoginSubmit(event){
    
    event.preventDefault(); // -> 이벤트의 기본(디폴트)동작을 실행하지 않도록 하는 메서드!! ->첫번째 인자.preventDefault()<-
    // 사용자의 이름을 받기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 사용자의 이름 저장하기 (데이터 베이스에) -> localstorage
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    // 로그인 후 다 보여주기
    greeting.classList.remove("hidden");
        greeting.innerText = `Hello, ${username}.`;
    clock1.classList.remove(HIDDEN_CLASSNAME);
    quote1.classList.remove(HIDDEN_CLASSNAME);
    author1.classList.remove(HIDDEN_CLASSNAME);

    // hello 숨기기
    hello.classList.add(HIDDEN_CLASSNAME);

    // window.open("/index.html");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

    // 로그인 전 다 숨기기
    clock1.classList.add(HIDDEN_CLASSNAME);
    quote1.classList.add(HIDDEN_CLASSNAME);
    author1.classList.add(HIDDEN_CLASSNAME);
    toDoForm1.classList.add(HIDDEN_CLASSNAME);


}
else { 
    paintGreeting(savedUsername);
}

// 우리가 addEventListener() 메서드를 활용할 때 ()를 안 넣는 이유는 브라우저가 이벤트가 발생했을 때 알아서 실행해주기 때문이다.
// 즉 JS가 이벤트가 발생했을 때 ()를 붙여준다고 보면 된다.
// 그러나 사실 onLoginSubmit() 이렇게 붙여주는 것이 아니라 "첫번째 매개변수"로 이벤트에 관한 정보를 "객체"로 넣어서 실행한다.
// -> onLoginSubmit({이벤트에 대한 정보(객체)}); 이런 식으로 매개변수를 전달한다.
// 그래서 함수를 정의할 때 인자를 만들어 그 매개변수를 받고 인자를 콘솔창에 띄우면 이벤트에 관한 정보가 나오는 것을 확인할 수 있다.
// *> addEventListener()에서 실행할 함수의 첫번째 인자는 항상 이벤트에 대한 정보(객체)이다. <*

// 정리 : 
// 1. addEventListener() 안의 함수를 실행할 때 브라우저는 항상 첫번째 매개변수로 이벤트의 관한 정보를 "객체"로 전달한다.
// 2. 그 매개변수(객체)를 우리가 인자로 받으면 이벤트에 관한 정보 안에 있는 속성 및 메서드를 사용할 수 있다.
// 3. 그 중 하나가 preventDefault() -> 이벤트의 기본 동작을 막는 메서드
// 4. form에서 자동으로 submit되는 이벤트의 기본 동작을 막으면 새로고침 문제를 해결할 수 있다.

	