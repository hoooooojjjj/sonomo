const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input"); // 부모 요소 안에 있는 자식 요소는 부모요소.querySelector("자식요소") 로 가져온다.
// const toDoInput = document.querySelector("#todo-form input");



function deleteToDo(event){ // X 클릭시 투두 삭제
    console.log("클릭");
    const li = event.target.parentNode; // 이벤트가 일어난 대상의 부모
    li.remove(); // remove() 함수 -> 요소를 지울 수 있음.

}

function paintToDo(todo){ // 사용자가 입력한 todo를 화면에 표시
    // 입력한 toDo를 li로 표시
    const li = document.createElement("li"); // 새로운 li 생성
    const span = document.createElement("span"); // 새로운 span 생성
    span.innerText = todo; // span에 toDo 입력값 할당
    const toDoButton = document.createElement("button"); // 새로운 button 생성
    toDoButton.innerText = "❌"; 
    toDoButton.addEventListener("click", deleteToDo); // 클릭 시 삭제

    // form 안에 input을 넣어서 sumit으로 이벤트를 발생시켜야 한다.
    // 그러나 그 안에 또 button이 있으면! 엔터가 중복으로 먹히는 오류가 발생한다..
    // 그러니, 버튼을 넣을 땐 꼭! form 밖으로 뺴서 넣자!!!!!

    li.appendChild(span); // span을 li의 자식요소로 추가s
    li.appendChild(toDoButton); // button을 li의 자식요소로 추가
    toDoList.appendChild(li); // li을 ul의 자식요소로 추가
}

function handletoDoSubmit(event){ // 사용자가 엔터를 누르면 실행
    event.preventDefault(); // 자동 submit 제어
    const toDo = toDoInput.value; // 사용자의 입력 값을 toDo에 복사
    toDoInput.value = ""; // toDo는 사용자가 직접 입력한 값을 복사한 것! 값에 의한 전달을 한 것 
    // toDo = "";  그렇기 때문에 이렇게 한다고 입력창에 입력값이 사라지지 않는다. toDo와 toDoInput.value는
    // 서로 별개이다. 영향을 주고 받지 않는다. 
    // 그렇기 때문에 toDoInput.value = "";를 해도 toDo에 복사한 toDoInput.value은 사라지지 않는다.
    paintToDo(toDo);
}

toDoForm.addEventListener("submit", handletoDoSubmit);


