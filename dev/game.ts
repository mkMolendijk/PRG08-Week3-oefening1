/// <reference path="utils.ts"/>

class Game {
    private static GameInstance: Game;

    private car : Car;
    private block : Block;

    constructor() {
        let container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance() {
        if (! Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    }
}

// load
window.addEventListener("load", function() {
    Game.getInstance();
});