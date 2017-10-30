import { Position } from "./position";

export class Bullet {
    public static WIDTH: number = 2;
    public static HEIGHT: number = 2;

    private dead: boolean = false;
    private speed: number = 5;
    private node: HTMLElement = document.createElement('div');
    private position: Position;

    constructor(position: Position) {
        this.position = position;
        this.node.classList.add('bullet');
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    }

    public getNode():HTMLElement {
        return this.node;
    }

    public move():void {
        if (this.dead) {
            return;
        }
        this.position.top = this.position.top - this.speed;
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    }

    public getPosition():Position {
        return this.position;
    }

    public destroy():void {
        this.dead = true;
        this.node.remove();
    }
}