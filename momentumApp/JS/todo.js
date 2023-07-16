const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input"); // 부모 요소 안에 있는 자식 요소는 부모요소.querySelector("자식요소") 로 가져온다.
// const toDoInput = document.querySelector("#todo-form input");


function paintToDo(todo){ // 사용자가 입력한 todo를 화면에 표시

    // 입력한 toDo를 li로 표시
    const li = document.createElement("li"); // 새로운 li 생성
    const span = document.createElement("span"); // 새로운 span 생성
    span.innerText = todo; // span에 toDo 입력값 할당
    li.appendChild(span); // span을 li의 자식요소로 추가
    toDoList.appendChild(li); // li을 ul의 자식요소로 추가
    // DeleteButton(li);
    
}

// function DeleteButton(li){
//     const toDoButton = document.createElement("button");
//     toDoButton.innerText = "삭제";
//     li.appendChild(toDoButton);

//     toDoButton.addEventListener("click", function(event){
//         event.preventDefault(); // 자동 submit 제어
//         console.log("클릭");
//         li.parentNode.removeChild(li);
//     });
   
// }

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


