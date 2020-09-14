document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById("signUpButton");

    const logInButton = document.querySelector("#logInButton");
    
    signUpButton.addEventListener("click", (e) => {
        signUp(e);
    })
    
    logInButton.addEventListener("click", (e) => {
        logIn(e);
    })
});

class Player {
    constructor() {
        this.width = 150;
        this.height = 30;
        this.position = {
            x: 20,
            y: 20
        }
    }

    draw(context) {
        context.clearRect(0, 0, 800, 600);

        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext('2d');



// x: bigger values, more to right; y: bigger values, more down
console.log(context);




let player = new Player();

player.draw(context);






const BACKEND_URL = "http://localhost:3000";

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
    .then(parsedResp => {
        console.log(parsedResp);
        if (parsedResp.username) {
            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;
            
            const highScore = document.querySelector("#levels-completed");
            highScore.innerText = `${parsedResp.levels_completed} levels completed`;
        }
    });
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
    .then(parsedResp => {
        console.log(parsedResp);
        if (parsedResp.username) {
            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;
            
            const highScore = document.querySelector("#levels-completed");
            highScore.innerText = `${parsedResp.levels_completed} levels completed`;
        }
    });
}
