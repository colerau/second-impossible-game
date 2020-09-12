// console.log("yeet");

const BACKEND_URL = "http://localhost:3000";
// fetch(`${BACKEND_URL}/users`)
//     .then(resp => resp.json())
//     .then(parsedResp => console.log(parsedResp));

document.addEventListener("DOMContentLoaded", () => {
    start();
})

function start() {
    const signUpButton = document.getElementById("signUpButton");

    const logInButton = document.querySelector("#logInButton");

    signUpButton.addEventListener("click", (e) => {
        signUp(e);
    })

    logInButton.addEventListener("click", (e) => {
        logIn(e);
    })


    
}

function signUp(e) {
    e.preventDefault();
    console.log("user hit sign up button");

    let userInputForUsername = document.querySelector("#usernameForSignUp").value;

    let formData = {
        username: userInputForUsername
    }

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(`${BACKEND_URL}/users`, configObj)
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp));
}

function logIn(e) {
    e.preventDefault();
    console.log("user hit log in button");

    let userInputForUsername = document.querySelector("#usernameForLogIn").value;

    let formData = {
        username: userInputForUsername
    }

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(`${BACKEND_URL}/login`, configObj)
    .then(resp => resp.json())
    .then(parsedResp => console.log(parsedResp));
}
