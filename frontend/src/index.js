// console.log("yeet");

// const BACKEND_URL = "http://localhost:3000";
// fetch(`${BACKEND_URL}/users`)
//     .then(resp => resp.json())
//     .then(parsedResp => console.log(parsedResp));

document.addEventListener("DOMContentLoaded", () => {
    start();
})

function start() {
    const signUpButton = document.getElementById("signUpButton");

    signUpButton.addEventListener("click", (e) => {
        signUp(e);
    })
    
}

function signUp(e) {
    e.preventDefault();
    console.log("user hit sign up button");
}
