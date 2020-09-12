class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 50;
        this.height = 50;
        this.position = {
            x: 100,
            y: 700
        }
        
    }

    draw(context) {
        // fillRect(x, y, width, height)
        context.fillRect(this.position.x, this.position.x, this.position.y);
        context.fillStyle("#00f");
    }
}