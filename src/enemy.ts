import { Position } from "./position";
import { Board } from "./board";
import { Explosion } from "./explosion";
import { Node } from "./node";

export class Enemy extends Node {

    public static WIDTH: number = 54;
    public static HEIGHT: number = 55;

    private dead: boolean = false;
    private speed: number = 1;
    private top: number = Enemy.HEIGHT * -1;
    private left: number;

    constructor(left: number, speed: number = 1) {
        super('div', 'enemy');
        this.speed = speed;
        this.left = left;
        this.bootstrap();
    }

    private bootstrap(): void {
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
        this.node.style.width = Enemy.WIDTH + 'px';
        this.node.style.height = Enemy.HEIGHT + 'px';
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
        super.destroy();
    }
}
