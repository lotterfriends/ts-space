export class Enemy {

    position: number;
    node: HTMLElement;
    dead: boolean;

    constructor(position: number) {
        this.node = document.createElement('div');
        this.node.classList.add('enemy');
        this.node.style.left = position + 'px';
        this.dead = false;
    }
 
    move() {
        if (this.dead) {
            return;
        }
        let currentTop = parseInt(this.node.style.top) || 0;
        this.node.style.top = (currentTop + 1) + 'px';
    }

    getOffsetTop() {
        return parseInt(this.node.style.top) || 0;
    }

    destroy() {
        this.dead = true;
        this.node.remove();
    }
}