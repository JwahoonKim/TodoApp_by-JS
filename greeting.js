const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem("USER_LS");
    if(currentUser === null){

    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();