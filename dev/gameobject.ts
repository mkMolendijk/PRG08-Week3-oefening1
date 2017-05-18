class GameObject {

    public div: HTMLElement;
    protected x: number;
    protected y: number;

    protected width: number;
    protected height: number;

    constructor(str: string, parent: HTMLElement, x: number, y: number, width: number, height: number) {

        this.div = document.createElement(str);
        parent.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        // this.draw();

    }

    public draw():void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}