class Braking implements Behavior {
    public car: Car;

    constructor(c: Car) {
        this.car = c;
    }

    public update() {
        console.log("Braking!");
        this.car.speed -= 0.1;
        this.car.x += this.car.speed;
    }
}