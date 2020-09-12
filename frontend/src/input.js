class InputHandler {
    constructor() {
        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "a": 
                    alert("move left");
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