class Jumping implements Behavior {
    public car: Car;

    constructor(c: Car) {
        this.car = c;
    }

    public update() {
        console.log("Boing!");

        this.car.x += this.car.speed;
        this.car.y += this.car.jumpDirection;

        if (this.car.y < 140) {
            this.car.jumpDirection = 3;
        }

        if (this.car.y > 217) {
            this.car.behavior = new Driving(this.car);
        }
    }
}