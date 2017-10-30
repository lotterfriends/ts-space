export class Board {

    static WIDTH:number = 600;
    static HEIGHT:number = 440;

    node: HTMLElement;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('board');
    }

    addItem(item: HTMLElement):void {
        this.node.appendChild(item);
    }

    removeItem(item: HTMLElement):void {
        this.node.removeChild(item);
    }

    getWidth():number {
        return this.node.offsetWidth;
    }

    getHeight():number {
        return this.node.offsetHeight;
    }
}