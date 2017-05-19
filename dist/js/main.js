var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Block = (function () {
    function Block(parent) {
        this.div = document.createElement("block");
        parent.appendChild(this.div);
        this.speed = -4;
        this.x = 800;
        this.y = 240;
    }
    Block.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Block;
}());
var GameObject = (function () {
    function GameObject(str, parent, x, y, width, height) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return GameObject;
}());
var Wheel = (function () {
    function Wheel(parent, offset) {
        this.div = document.createElement("wheel");
        parent.appendChild(this.div);
        this.x = offset;
        this.y = 30;
        this.speed = 0;
    }
    Wheel.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(parent) {
        var _this = _super.call(this, "car", parent, 0, 220, 150, 45) || this;
        _this.behavior = new Driving(_this);
        _this.behavior.update();
        _this.speed = 2;
        _this.jumpDirection = -3;
        _this.wheel1 = new Wheel(_this.div, 20);
        _this.wheel2 = new Wheel(_this.div, 100);
        return _this;
    }
    Car.prototype.draw = function () {
        this.behavior.update();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    return Car;
}(GameObject));
var CarSwitch = (function () {
    function CarSwitch(parent) {
        var _this = this;
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.state = 1;
        this.speed = 2;
        this.jumpDirection = -3;
        this.x = 0;
        this.y = 220;
        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    CarSwitch.prototype.onKeyDown = function (e) {
        if (this.state == 1) {
            this.state = 2;
        }
    };
    CarSwitch.prototype.draw = function () {
        switch (this.state) {
            case 1:
                this.driving();
                break;
            case 2:
                this.jumping();
                break;
            case 3:
                this.crashing();
                break;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    CarSwitch.prototype.driving = function () {
        this.x += this.speed;
    };
    CarSwitch.prototype.jumping = function () {
        this.x += this.speed;
        this.y += this.jumpDirection;
        if (this.y < 140)
            this.jumpDirection = 3;
        if (this.y > 217)
            this.state = 3;
    };
    CarSwitch.prototype.crashing = function () {
        this.wheel1.speed = -2;
        this.wheel2.speed = 2;
        this.div.classList.add("crashed");
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    return CarSwitch;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        this.block = new Block(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.draw();
        this.block.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Driving = (function () {
    function Driving(c) {
        var _this = this;
        this.car = c;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Driving.prototype.onKeyDown = function (e) {
        console.log(e.key);
        console.log(this.car.behavior);
        if (e.key == ' ' && this.car.behavior instanceof Driving) {
            this.car.behavior = new Jumping(this.car);
        }
        else if (e.key == 'Control' && this.car.behavior instanceof Driving) {
            this.car.behavior = new Braking(this.car);
        }
    };
    Driving.prototype.update = function () {
        console.log("Meep meep!");
    };
    return Driving;
}());
var Jumping = (function () {
    function Jumping(c) {
        this.car = c;
    }
    Jumping.prototype.update = function () {
        console.log("Boing!");
        this.car.x += this.car.speed;
        this.car.y += this.car.jumpDirection;
        if (this.car.y < 140)
            this.car.jumpDirection = 3;
        if (this.car.y > 217) {
            this.car.behavior = new Crash(this.car);
        }
    };
    return Jumping;
}());
var Braking = (function () {
    function Braking(c) {
        this.car = c;
    }
    Braking.prototype.update = function () {
        console.log("Braking!");
        this.car.speed -= 0.1;
        this.car.x += this.car.speed;
    };
    return Braking;
}());
var Crash = (function () {
    function Crash(c) {
        this.car = c;
    }
    Crash.prototype.update = function () {
        console.log("Crash!");
        this.car.wheel1.speed = -2;
        this.car.wheel2.speed = 2;
        this.car.div.classList.add("crashed");
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    return Crash;
}());
//# sourceMappingURL=main.js.map