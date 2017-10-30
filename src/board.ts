export class Board {

    static WIDTH: number = 800;
    static HEIGHT: number = 440;

    node: HTMLElement;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('board');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    }

    addItem(item: HTMLElement): void {
        this.node.appendChild(item);
    }

    removeItem(item: HTMLElement): void {
        this.node.removeChild(item);
    }
}