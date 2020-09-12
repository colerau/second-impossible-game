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
        // * fillRect(x, y, width, height)
        console.log(context);
        // return context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillRect(20, 20, 20, 20);
        return context;

    }
}