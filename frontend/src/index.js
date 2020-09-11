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

    let userInputForUsername = document.querySelector("#username");
    let userInputForPassword = document.querySelector("#password");
    let userInputForPasswordConfirmation = document.querySelector("#password_confirmation");

    let formData = {
        username: userInputForUsername,
        password: userInputForPassword,
        password_confirmation: userInputForPasswordConfirmation
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
}
