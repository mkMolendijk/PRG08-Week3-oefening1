class GameObject {

    public div: HTMLElement;
    public x: number;
    public y: number;

    protected width: number;
    protected height: number;

    constructor(str: string, parent: HTMLElement, x: number, y: number, width: number, height: number) {

        this.div = document.createElement(str);
        parent.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

    }
}