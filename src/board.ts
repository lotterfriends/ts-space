export class Board {

    node: HTMLElement;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('board');
    }

    addItem(item: HTMLElement) {
        this.node.appendChild(item);
    }

    removeItem(item: HTMLElement) {
        this.node.removeChild(item);
    }

    getWidth() {
        return this.node.offsetWidth;
    }

    getHeight() {
        return this.node.offsetHeight;
    }
}