
const API_KEY = "3e786ee8ec01b2f857a6def6969c3576";

function onGeoOk(position){ // 매개변수로 위치 정보를 넘겨준다
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&lang={kr}`;;
    fetch(url).then(response => response.json().then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;
    }));
}



function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);