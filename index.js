const title = document.querySelector("#title");

const BASE_COLOR =  "white";
const OTHER_COLOR = "green";

function handleClick(){
    const currenColor = title.style.color;
    console.log(currenColor);
    if (currenColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    window.addEventListener("click", handleClick);    
}

init();