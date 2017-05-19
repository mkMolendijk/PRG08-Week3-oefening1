class Crash implements Behavior {
    public car: Car;

    constructor(c: Car) {
        this.car = c;
    }

    public update() {
        console.log("Crash!");

        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;
        this.car.div.classList.add("crashed");

        // gameOver functie van game aanroepen via singleton
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    }
}