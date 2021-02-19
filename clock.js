const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours > 9 ? hours : `0${hours}`}:${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`;
}

function init(){
    setInterval(getTime,1000);
}

init();

