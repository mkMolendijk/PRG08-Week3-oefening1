///<reference path="gameobject.ts"/>
/// <reference path="wheel.ts"/>

class Car extends GameObject{

    public speed: number;

    public wheel1: Wheel;
    public wheel2: Wheel;

    public behavior: Behavior;
    public jumpDirection: number;

    constructor(parent: HTMLElement) {
        super("car", parent, 0, 220, 150, 45);

        this.behavior = new Driving(this);
        this.behavior.update();

        this.speed = 2;
        this.jumpDirection = -3;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
    }

    public draw(): void {
        this.behavior.update();

        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    }


}