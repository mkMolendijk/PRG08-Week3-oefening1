class Crash implements Behavior {
    public car: Car;

    constructor(c:Car) {
        this.car = c;
    }

    public update(){
        console.log("Crash!");
    }
}