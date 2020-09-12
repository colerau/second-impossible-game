// console.log("yeet");

const BACKEND_URL = "http://localhost:3000";
// fetch(`${BACKEND_URL}/users`)
//     .then(resp => resp.json())
//     .then(parsedResp => console.log(parsedResp));

document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById("signUpButton");

    const logInButton = document.querySelector("#logInButton");

    signUpButton.addEventListener("click", (e) => {
        signUp(e);
    })

    logInButton.addEventListener("click", (e) => {
        logIn(e);
    })

    const canvas = document.getElementById("gameScreen");
    const context = canvas.getContext('2d');
    // context.clearRect(0, 0, 800, 600);
    // context.fillStyle = "#00f";
    // // fillRect(x coord, y coord, width, height)
    // context.fillRect(20, 20, 20, 20);
    const GAME_WIDTH = 800; 
    const GAME_HEIGHT = 600;

    const player = new Player(GAME_WIDTH, GAME_HEIGHT);
    const movement = new InputHandler(player);

    // player.draw(context);

    gameLoop(context, player);

});

function gameLoop(context, player) {
    context.clearRect(0, 0, 800, 600);
    player.draw(context);
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
