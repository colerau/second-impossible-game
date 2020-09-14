class Player {
    constructor() {
        this.width = 30;
        this.height = 30;

        this.maxSpeed = 5;
        this.speed = 0;
        this.axis; 


        this.position = {
            x: 20,
            y: 20
        }
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
        this.axis = "x";
    }

    moveRight() {
        this.speed = this.maxSpeed;
        this.axis = "x";
    }

    moveDown() {
        this.speed = this.maxSpeed;
        this.axis = "y";
    }

    moveUp() {
        this.speed = -this.maxSpeed;
        this.axis = "y";
    }

    // if flag is 1, y coordinates are to be used
    update(deltaTime) {
        if (!deltaTime) return;


        if (this.axis === "y") {
            this.position.y += this.speed;
        } else if (this.axis === "x") {
            this.position.x += this.speed;
        }

        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x + this.width > 800) {
            this.position.x = 800 - this.width;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        if (this.position.y + this.height > 600) {
            this.position.y = 600 - this.height;
        }
    }

}

class InputHandler {
    constructor(player) {
        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "a":
                    player.moveLeft();
                    break;
                case "w":
                    player.moveUp();
                    break;
                case "d":
                    player.moveRight();
                    break;
                case "s":
                    player.moveDown();
                    break;
            }
        })
    }
}


const signUpButton = document.getElementById("signUpButton");

const logInButton = document.querySelector("#logInButton");

signUpButton.addEventListener("click", (e) => {
    signUp(e);
})

logInButton.addEventListener("click", (e) => {
    logIn(e);
})


// ! start game code 

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext('2d');

let player = new Player();
new InputHandler(player);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;



    // (x, y, width, height)
    context.clearRect(0, 0, 800, 600);
    player.update(deltaTime);
    player.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();














// ! end game code


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
