class InputHandler {
    constructor(player) {
        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "a": 
                    player.moveLeft();
                    break;
                case "d": 
                    alert("move right");
                    break;
                case "w": 
                    alert("move up");
                    break;
                case "s":
                    alert("move down");
                    break;
            }
        })
    }
}