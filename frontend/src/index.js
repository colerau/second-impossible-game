class Player {
    constructor(game) {
        this.width = 30;
        this.height = 30;

        this.maxSpeed = 5;
        this.speed = 0;
        this.axis; 

        this.game = game;
    

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
    constructor(xPosition, game) {
        this.width = 60;
        this.height = 60;

        this.speed = 18;
        this.axis; 

        this.position = {
            x: xPosition,
            y: 0
        }


        this.game = game;
    }

    draw(context) {
        context.fillStyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

        // console.log(this.game.player.position);
        if (!deltaTime) return;

        this.position.y += this.speed;

        if (this.position.y + this.height > 600) {
            this.speed = -this.speed;
        }
        if (this.position.y < 0) {
            this.speed = 20;
        }

        // * check collision with player
        // let bottomOfEnemy = this.position.y

        // ! player
        let rect1 = {
            x: this.game.player.position.x,
            y: this.game.player.position.y, 
            width: this.game.player.width,
            height: this.game.player.height
        }

        // ! enemy1
        let rect2 = {
            x: this.game.enemy1.position.x,
            y: this.game.enemy1.position.y, 
            width: this.game.enemy1.width,
            height: this.game.enemy1.height
        }

        // ! enemy2
        let rect3 = {
            x: this.game.enemy2.position.x,
            y: this.game.enemy2.position.y, 
            width: this.game.enemy2.width,
            height: this.game.enemy2.height
        }

        // ! enemy3
        let rect4 = {
            x: this.game.enemy3.position.x,
            y: this.game.enemy3.position.y, 
            width: this.game.enemy3.width,
            height: this.game.enemy3.height
        }

        // ! goal 
        let rect5 = {
            x: this.game.goal.position.x,
            y: this.game.goal.position.y, 
            width: this.game.goal.width,
            height: this.game.goal.height
        }

        // collision between player and enemy1
        // enemy1 is the middle red square
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            // collision detected!
            this.game.player.position.x = 20;
            this.game.player.position.y = 20;
        }

        // collision between player and enemy2
        // enemy2 is the left red square
        if (rect1.x < rect3.x + rect3.width &&
            rect1.x + rect1.width > rect3.x &&
            rect1.y < rect3.y + rect3.height &&
            rect1.y + rect1.height > rect3.y) {
            // collision detected!
            this.game.player.position.x = 20;
            this.game.player.position.y = 20;
        }

        // collision between player and enemy3
        // enemy3 is the right red square
        if (rect1.x < rect4.x + rect4.width &&
            rect1.x + rect1.width > rect4.x &&
            rect1.y < rect4.y + rect4.height &&
            rect1.y + rect1.height > rect4.y) {
            // collision detected!
            this.game.player.position.x = 20;
            this.game.player.position.y = 20;
        }

        // collision between player and goal
        if (rect1.x < rect5.x + rect5.width &&
            rect1.x + rect1.width > rect5.x &&
            rect1.y < rect5.y + rect5.height &&
            rect1.y + rect1.height > rect5.y) {
            // collision detected!
            win();
            updateLevelsCompleted();
            this.game.player.stop();
            this.game.player.position.x = 20;
            this.game.player.position.y = 20;
        }
    }
}

class Goal {
    constructor(game) {
        this.width = 30;
        this.height = 30;

        this.position = {
            x: 780 - this.width,
            y: 580 - this.height
        }
    }

    draw(context) {
        context.fillStyle = "#FFFF00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;


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

class Game {
    constructor() {
        this.gameWidth = 800;
        this.gameHeight = 600;


    }

    start() {
        const enemyWidth = 60;
        const enemyHeight = 60;
        let enemyXPosition = 400 - enemyWidth / 2;






        // think of it like ... new Player(self);
        // this references the game object.


        // console.log(this) returns:

        // Game {gameWidth: 800, gameHeight: 600}
            // enemy1: Enemy {width: 60, height: 60, speed: 20, position: {…}}
            // enemy2: Enemy {width: 60, height: 60, speed: 20, position: {…}}
            // enemy3: Enemy {width: 60, height: 60, speed: 20, position: {…}}
            // gameHeight: 600
            // gameWidth: 800
            // goal: Goal {width: 30, height: 30, position: {…}}
            // player: Player {width: 30, height: 30, maxSpeed: 5, speed: 0, position: {…}}
            // __proto__: Object
        this.player = new Player(this);
        new InputHandler(this.player);
        this.enemy1 = new Enemy(enemyXPosition, this);
        this.enemy2 = new Enemy((200 - enemyWidth / 2), this);
        this.enemy3 = new Enemy((600 - enemyWidth / 2), this);
        this.goal = new Goal(this);
    }

    update(deltaTime) {
        this.player.update(deltaTime);
        this.enemy1.update(deltaTime);
        this.enemy2.update(deltaTime);
        this.enemy3.update(deltaTime);
        this.goal.update(deltaTime);
    }

    draw(context) {
        this.player.draw(context);
        this.enemy1.draw(context);
        this.enemy2.draw(context);
        this.enemy3.draw(context);
        this.goal.draw(context);
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

let game = new Game();
game.start();


let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;



    // (x, y, width, height)
    context.clearRect(0, 0, 800, 600);


    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();






// ! end game code


const BACKEND_URL = "http://localhost:3000";

getComments();

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
            if (parsedResp.levels_completed === 0) {
                highScore.innerText = `${parsedResp.levels_completed} levels completed`;
            } else if (parsedResp.levels_completed === 1) {
                highScore.innerText = `${parsedResp.levels_completed} level completed`;
            }
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
           
            newComment(parsedResp.id);

            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;
            
            const highScore = document.querySelector("#levels-completed");
            if (parsedResp.levels_completed === 0) {
                highScore.innerText = `${parsedResp.levels_completed} levels completed`;
            } else if (parsedResp.levels_completed === 1) {
                highScore.innerText = `${parsedResp.levels_completed} level completed`;
            }
        }
    });
}

function win() {
    alert("You Win!");
}

function updateLevelsCompleted() {
    let sentence = document.querySelector("#current-user");
    
    if (!(sentence.innerText === "You are not currently logged in")) {
        console.log("if logged in, this should appear")
        console.log(sentence.innerText);
        let username = sentence.innerText;
    
        let formData = {
            username: username
        }
        
        let configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        
        fetch(`${BACKEND_URL}/increase-levels-completed`, configObj)
        .then(resp => resp.json())
        .then(parsedResp => {
            console.log(parsedResp);            
            const highScore = document.querySelector("#levels-completed");
            if (parsedResp.levels_completed === 0) {
                highScore.innerText = `${parsedResp.levels_completed} levels completed`;
            } else if (parsedResp.levels_completed === 1) {
                highScore.innerText = `${parsedResp.levels_completed} level completed`;
            }
        });
    }
}

function newComment(user_id) {
    console.log("in newComment func")

    let shareButton = document.getElementById("newCommentButton");

   

    shareButton.addEventListener("click", (e) => {
        let user = document.querySelector("#current-user").innerText;

        e.preventDefault();
        let commentText = document.getElementById("newUserComment").value
        console.log(commentText);

        let formData = {
            comment: commentText
        }
        
        let configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(`${BACKEND_URL}/users/${user_id}/comments`, configObj)
        .then(resp => resp.json())
        .then(parsedResp => {
            console.log(parsedResp);
            let commentsSection = document.querySelector(".comment-list");
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("a-comment");
            let commentHeader = document.createElement("h4");
            let commentP = document.createElement("p");
            commentHeader.innerText = parsedResp.user.username;
            commentP.innerText = parsedResp.text;
            commentsSection.appendChild(commentDiv);
            commentDiv.appendChild(commentHeader);
            commentDiv.appendChild(commentP);
            let br = document.createElement("br");
            commentDiv.appendChild(br);        

        });

    })
}

function loggedIn() {
    let sentence = document.querySelector("#current-user");
    
    if (!(sentence.innerText === "You are not currently logged in")) {
        return true;
    } else {
        return false;
    }
}

function getComments() {
    fetch(`${BACKEND_URL}/comments`)
    .then(resp => resp.json())
    .then(parsedResp => {
        console.log(parsedResp);
      
     
        parsedResp.forEach( e => {
            let commentsSection = document.querySelector(".comment-list");
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("a-comment");
            let commentHeader = document.createElement("h4");
            let commentP = document.createElement("p");
            commentHeader.innerText = e.user.username;
            commentP.innerText = e.text;
            commentsSection.appendChild(commentDiv);
            commentDiv.appendChild(commentHeader);
            commentDiv.appendChild(commentP);
            let br = document.createElement("br");
            commentDiv.appendChild(br);
        });
    })
}