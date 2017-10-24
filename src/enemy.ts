export class Enemy {

    position: number;
    node: HTMLElement;
    dead: boolean;
    speed: number = 1;
    constructor(position: number, speed: number = 1) {
        this.node = document.createElement('div');
        this.node.classList.add('enemy');
        this.node.style.left = position + 'px';
        this.dead = false;
        this.speed = speed;
    }

    move() {
        if (this.dead) {
            return;
        }
        let currentTop = parseInt(this.node.style.top) || 0;
        this.node.style.top = (currentTop + this.speed) + 'px';
    }

    getOffsetTop() {
        return parseInt(this.node.style.top) || 0;
    }

    destroy() {
        this.dead = true;
        this.node.remove();
    }
}
