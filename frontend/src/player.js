class Player {
    constructor(gameWidth, gameHeight) {
        this.xPosition = 500;
        this.yPosition = 700;
        this.width = 50;
        this.height = 50;
        this.maxSpeed = 10;
        this.speed = 0;
    }

    draw(context) {
        // * fillRect(x, y, width, height)
        console.log(context);
        // return context.fillRect(this.position.x, this.position.y, this.width, this.height);
        
        let width = this.width;
        let height = this.height;
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        
      
        context.fillStyle = "#00f";
        context.fillRect(20, 20, 20, 20);
     
        return context;

    }

    // update(deltaTime) {
    //     this.xPosition += (5 / deltaTime);
    // }

    // moveLeft() {
    //     this.speed = -this.maxSpeed;
    //     return this.speed;
    // }

    // update(deltaTime) {
    //     if (!deltaTime) return;


    //     this.xPosition += 5 / deltaTime;
    //     // this.xPosition += this.speed;
    //     // return this.xPosition;
    // }

}