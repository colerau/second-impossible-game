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
        context.fillStyle = "#00f"
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

    moveTopRight() {
        this.speed = this.maxSpeed;
        this.axis = "xy1";
    }

    moveTopLeft() {
        this.speed = this.maxSpeed;
        this.axis = "xy2";
    }

    moveDownLeft() {
        this.speed = this.maxSpeed;
        this.axis = "xy3";
    }

    moveDownRight() {
        this.speed = this.maxSpeed;
        this.axis = "xy4";
    }

    stop() {
        this.speed = 0;
    }

    update(deltaTime) {
        if (!deltaTime) return;


        if (this.axis === "y") {
            this.position.y += this.speed;
        } else if (this.axis === "x") {
            this.position.x += this.speed;
        } else if (this.axis === "xy1") {
            this.position.x += this.speed;
            this.position.y += -this.speed;
        } else if (this.axis === "xy2") {
            this.position.x += -this.speed;
            this.position.y += -this.speed;
        } else if (this.axis === "xy3") {
            this.position.x += -this.speed;
            this.position.y += this.speed;
        } else if (this.axis === "xy4") {
            this.position.x += this.speed;
            this.position.y += this.speed;
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

class Enemy {
    constructor(xPosition) {
        this.width = 60;
        this.height = 60;

        this.speed = 18;
        this.axis; 

        this.position = {
            x: xPosition,
            y: 0
        }
    }

    draw(context) {
        context.fillStyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;

        this.position.y += this.speed;

        // if (this.position.y + this.height > 600) {
        //     this.position.y = 600 - this.height;
        //     this.position.y = -this.speed;
        // }
        // if (this.position.y < 0) {
        //     this.position.y = this.speed;
        // }

        if (this.position.y + this.height > 600) {
            this.speed = -this.speed;
        }
        if (this.position.y < 0) {
            this.speed = 20;
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
                case "p":
                    player.moveTopRight();
                    break;
                case "o":
                    player.moveTopLeft();
                    break;
                case "l":
                    player.moveDownLeft();
                    break;
                case ";":
                    player.moveDownRight();

            }
        })

        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "a":
                    player.stop();
                    break;
                case "w":
                    player.stop();
                    break;
                case "d":
                    player.stop();
                    break;
                case "s":
                    player.stop();
                    break;
                case "p":
                    player.stop();
                    break;
                case "o":
                    player.stop();
                    break;
                case "l":
                    player.stop();
                    break;
                case ";":
                    player.stop();
                    break;
            }
        })
    }
}


// ! Global Scope

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
const enemyWidth = 60;
const enemyHeight = 60;
let enemyXPosition = 400 - enemyWidth / 2;
let enemy1 = new Enemy(enemyXPosition);
let enemy2 = new Enemy(200 - enemyWidth / 2);
let enemy3 = new Enemy(600 - enemyWidth / 2);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;



    // (x, y, width, height)
    context.clearRect(0, 0, 800, 600);
    player.update(deltaTime);
    player.draw(context);

    enemy1.update(deltaTime);
    enemy1.draw(context);

    enemy2.update(deltaTime);
    enemy2.draw(context);

    enemy3.update(deltaTime);
    enemy3.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();














// ! end game code


const BACKEND_URL = "http://localhost:3000";

// ! End Global Scope

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
