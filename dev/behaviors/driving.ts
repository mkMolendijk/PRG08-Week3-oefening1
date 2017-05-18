class Driving implements Behavior {
    public car: Car;

    constructor(c:Car) {
        this.car = c;
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));

    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        console.log(this.car.behavior);

        if(e.key == ' ' && this.car.behavior instanceof Driving) {
            this.car.behavior = new Jumping(this.car);
        }
        // else if(e.key == 'Control' && this.state == 1) {
        //     this.state = 4;
        // }
    }

    public update(){
        console.log("Meep meep!");
    }
}