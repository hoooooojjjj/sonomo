const clock = document.querySelector("#clock");
function getClock(){
    const date = new Date();

    // tring.padStart(문자열 길이, 채워넣을 문자) -> 문자열의 길이를 일정하게 유지하고 앞 빈칸에 원하는 문자를 채워넣을 수 있음.
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');


    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(실행할 함수, 몇 ms마다 일어날지) -> 일정시간 "이후"부터 일정시간 "마다" 함수를 실행
// setTimeout(실행할 함수, 몇 이후 뒤에 일어날진) -> 일정시간 "이후" 함수를 실행
//-> 시계를 만들 수 있다. 텍스트를 현재시간으로 설정하고 이를 1초마다 실행하면 1초마다 시간이 바뀌면서 시계처럼 보이게 됨.
getClock(); // getclock()를 한번 바로 실행 -> 바로 setInterval()을 실행하면 1초 뒤부터 시계가 나옴
setInterval(getClock,1000); // 그 다음 1초마다 실행

