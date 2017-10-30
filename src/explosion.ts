import { Position } from "./position";

export class Explosion {
    private imagePath: String = './img/explosion.gif';
    private node: HTMLImageElement = document.createElement('img');

    constructor(position: Position) {
        this.bootstrap(position);
        setTimeout(() => {
            this.destroy();
        }, 1000);
    }

    private bootstrap(position: Position): void {
        this.node.classList.add('explosion');
        this.node.src = [this.imagePath, Date.now()].join('?');
        this.node.style.transform = 'translate(' + position.left + 'px, ' + position.top + 'px)';
    }

    public getNode(): HTMLElement {
        return this.node;
    }

    private destroy(): void {
        this.node.remove();
    }

}