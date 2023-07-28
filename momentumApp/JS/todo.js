const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input"); // 부모 요소 안에 있는 자식 요소는 부모요소.querySelector("자식요소") 로 가져온다.
// const toDoInput = document.querySelector("#todo-form input");

const modal1 = document.querySelector(".modal-content");
const calender = document.querySelector("#calender");

const TODOS_KEY = "todos";
const CHECKBOX = "checkbox";
const HIDDEN_CLASSNAME1 = "hidden";


let toDos = [];

function toggleTodoByCalender(li){
    if(!li.className.includes(calender.value)){ // 만약 선택한 날짜가 li의 class로 존재하지 않으면 (선택한 날짜가 li을 추가한 날짜가 아니면)
        li.classList.add(HIDDEN_CLASSNAME1); // li을 지움
    }else{ // 선택한 날짜가 li을 추가한 날짜면 
        li.classList.remove(HIDDEN_CLASSNAME1); // li을 그림
    }
}

function paintCheckbox(todo,li,span){ // 체크박스 만들기
    const checkBox = document.createElement("input");
    checkBox.type = CHECKBOX;
    checkBox.classList.add(CHECKBOX);
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            span.style.textDecoration = "line-through";
            todo.check = true; // 체크 저장기능을 위해 체크표시 유무를 객체(배열)에 저장
            savedToDos(); // 체크 유무를 넣은 배열을 로컬 스토리지에 저장
        } else {
            span.style.textDecoration = "none";
            todo.check = false;
            savedToDos();
        }
      });
    li.appendChild(checkBox);

    if(todo.check === true){ // 새로고침했을 때 로컬에 체크가 true로 되어있으면 체크 표시 뜨게 하기
        checkBox.checked = true;
        span.style.textDecoration = "line-through";
        
    }else{
        checkBox.checked = false;
        span.style.textDecoration = "none";
    }
}

function savedToDos(){ // todo를 localstorage에 배열로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // localstorage에 배열을 저장할 수 있다. 배열에 요소가 추가되면 그대로 
    // localstorage에 추가된다. 배열에 요소가 추가되면 새로고침된다. 계속해서
    // 새로운 아이템을 key ="todos"에 추가하는 것이다.

    // JSON.stringify() -> 어떤 코드든 string 으로 바꿔줌.
    // 1. 이걸로 배열을 그대로 문자열로 바꿔서 local에 저장.
}

function deleteToDo(event){ // X 클릭시 투두 삭제
    const li = event.target.parentNode; // 이벤트가 일어난 대상의 부모
    li.remove(); // remove() 함수 -> 요소를 지울 수 있음.
    toDos = toDos.filter(function(todo){return todo.id !== parseInt(li.id) }); // 클릭한 버튼의 li의 id를 가진 배열의 요소를 지움.
    savedToDos(); // 바뀐 배열을 다시 로컬에 저장
}

function paintToDo(todo){ // 사용자가 입력한 todo를 화면에 표시
    // 입력한 toDo를 li로 표시
    const li = document.createElement("li"); // 새로운 li 생성
    const span = document.createElement("span"); // 새로운 span 생성
    span.innerText = todo.text; // span에 toDo 입력값 할당
    li.id = todo.id; // 각 입력값이 들어있는 li마다 id를 가지게 됨.
    li.classList.add(todo.date); // 각 입력값이 들어있는 li마다 class에 추가한 당시 날짜를 가지게 됨.
    const toDoButton = document.createElement("button"); // 새로운 button 생성
    toDoButton.innerText = "X"; 
    toDoButton.addEventListener("click", deleteToDo); // 클릭 시 삭제

    paintCheckbox(todo,li,span); // 체크 박스 그리는 함수

    // form 안에 input을 넣어서 sumit으로 이벤트를 발생시켜야 한다.
    // 그러나 그 안에 또 button이 있으면! 엔터가 중복으로 먹히는 오류가 발생한다..
    // 그러니, 버튼을 넣을 땐 꼭! form 밖으로 뺴서 넣자!!!!!
    li.appendChild(span); // span을 li의 자식요소로 추가
    li.appendChild(toDoButton); // button을 li의 자식요소로 추가
    toDoList.appendChild(li); // li을 ul의 자식요소로 추가

    span.classList.add("span");
    li.classList.add("li");
    toDoButton.classList.add("todoDeletebtn");

    // 캘린더 기능 만들기

    toggleTodoByCalender(li); // 처음엔 오늘 날짜가 자동으로 선택되어 오늘 날짜에 추가한 li만 그림
    // 날짜를 선택할 때마다 toggleTodoByCalender 함수 실행
    calender.addEventListener("change",()=>toggleTodoByCalender(li)); 
    
     
}

function handletoDoSubmit(event){ // 사용자가 엔터를 누르면 실행
    event.preventDefault(); // 자동 submit 제어
    const toDo = toDoInput.value; // 사용자의 입력 값을 toDo에 복사
    toDoInput.value = ""; // toDo는 사용자가 직접 입력한 값을 복사한 것! 값에 의한 전달을 한 것 
    // toDo = "";  그렇기 때문에 이렇게 한다고 입력창에 입력값이 사라지지 않는다. toDo와 toDoInput.value는
    // 서로 별개이다. 영향을 주고 받지 않는다. 
    // 그렇기 때문에 toDoInput.value = "";를 해도 toDo에 복사한 toDoInput.value은 사라지지 않는다.

    const toDoObj = { // 사용자의 입력값을 id와 함께 전달하기 위해 객체를 만듬 -> 각 입력값이 어떤 건지 알기 위해
        text : toDo,
        id : Date.now(), // 랜덤한 수를 반환함.
        check : false, // 체크 저장을 위해 체크 표시 유무를 객체에 넣기
        date : calender.value // 추가한 날짜를 추가
    }
    console.log(toDoObj.date);
    toDos.push(toDoObj); // toDoOdj를 배열에 저장
    paintToDo(toDoObj);
    savedToDos();

}
const nowDate = new Date();

toDoForm.addEventListener("submit", handletoDoSubmit);

// 새로고침했을 때 오늘 날짜를 자동으로 세팅
calender.value = `${String(nowDate.getFullYear())}-${String((nowDate.getMonth()+1)).padStart(2,"0")}-${String(nowDate.getDate())}`;

const savedToDo = localStorage.getItem(TODOS_KEY); 

if(savedToDo !== null){
    const parsedToDo = JSON.parse(savedToDo); // 2. 다시 그 문자열을 배열로 전환
    parsedToDo.forEach(paintToDo); 
    toDos = parsedToDo;  // 기존 로컬에 있는 요소들을 현재 toDos 배열에 계속해서 추가하기
    // => 이러면 새로고침할 때마다 toDos 배열은 리셋되지만 로컬에는 남아있기 때문에 그걸 다시 toDos 배열에 넣어서
    // 가져올 수 있다.
}

