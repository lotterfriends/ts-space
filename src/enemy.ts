import { Position } from "./position";
import { Board } from "./board";
import { Explosion } from "./explosion";

export class Enemy {

    static WIDTH: number = 54;
    static HEIGHT: number = 55;

    private node: HTMLElement = document.createElement('div');
    dead: boolean = false;
    speed: number = 1;
    top: number = Enemy.HEIGHT * -1;
    left: number;

    constructor(left: number, speed: number = 1) {
        this.speed = speed;
        this.left = left;
        this.bootstrap();
    }

    private bootstrap(): void {
        this.node.classList.add('enemy');
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
        this.node.style.width = Enemy.WIDTH + 'px';
        this.node.style.height = Enemy.HEIGHT + 'px';
    }

    public getNode(): HTMLElement {
        return this.node;
    }

    public move(): void {
        if (this.dead) {
            return;
        }
        this.top = this.top + this.speed;
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
    }

    public getPosition(): Position {
        return {
            left: this.left,
            top: this.top
        }
    }

    public destroy(board?: Board): void {
        this.dead = true;
        if (board) {
            let ex = new Explosion(this.getPosition());
            board.addItem(ex.getNode());
        }
        this.node.remove();
    }
}
