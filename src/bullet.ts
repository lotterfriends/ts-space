import { Position } from "./position";
import { Node } from "./node";

export class Bullet extends Node {
    public static WIDTH: number = 2;
    public static HEIGHT: number = 2;

    private dead: boolean = false;
    private speed: number = 5;
    private position: Position;

    constructor(position: Position) {
        super('div', 'bullet');
        this.position = position;
        this.bootstrap();
    }

    private bootstrap(): void {
        this.node.style.width = Bullet.WIDTH + 'px';
        this.node.style.height = Bullet.HEIGHT + 'px';
        this.node.classList.add('bullet');
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    }

    public move(): void {
        if (this.dead) {
            return;
        }
        this.position.top = this.position.top - this.speed;
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    }

    public getPosition(): Position {
        return this.position;
    }

    public destroy(): void {
        this.dead = true;
        super.destroy();
    }
}