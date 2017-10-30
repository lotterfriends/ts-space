import { Board } from './board';
import { Bullet } from './bullet';
import { Position } from "./position";
import { Keys } from './keys';

export class Player {

    private node: HTMLElement = document.createElement('div');
    private speed: number = 5;
    private keyLeftArrowDown: boolean = false;
    private keyRightArrowDown: boolean = false;

    constructor() {
        this.bootstrap();
        this.initKeyboardListener();
    }

    private bootstrap() {
        this.node.classList.add('player');
        this.node.style.transform = 'translateX(' + ((Board.WIDTH / 2) - (this.node.offsetWidth / 2)) + 'px)';
    }

    private initKeyboardListener() {
        document.addEventListener('keydown', (event) => {
            if (event.which === Keys.LEFT) {
                this.keyLeftArrowDown = true;
            }
            if (event.which === Keys.RIGHT) {
                this.keyRightArrowDown = true;
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.which === Keys.LEFT) {
                this.keyLeftArrowDown = false;
            }
            if (event.which === Keys.RIGHT) {
                this.keyRightArrowDown = false;
            }
        });
    }

    private getLeft(): number {
        let leftMatch = this.node.style.transform.match(/-?\d+/);
        if (leftMatch.length) {
            return parseInt(leftMatch[0], 10);
        }
    }

    private moveLeft(): void {
        let left = this.getLeft();
        if (left - this.speed <= (this.node.offsetWidth / 2) * -1) {
            left = (this.node.offsetWidth / 2) * -1;
        }
        this.node.style.transform = 'translateX(' + (left - this.speed) + 'px)';
    }

    private moveRight(): void {
        let left = this.getLeft();
        if (left + this.speed >= Board.WIDTH - this.node.offsetWidth / 2) {
            left = Board.WIDTH - this.node.offsetWidth / 2;
        }
        this.node.style.transform = 'translateX(' + (left + this.speed) + 'px)';
    }

    public fire(): Bullet {
        let pos: Position = {
            left: this.getLeft() + (this.node.offsetWidth / 2),
            top: Board.HEIGHT - this.node.offsetHeight
        };
        return new Bullet(pos);
    }

    public getNode(): HTMLElement {
        return this.node;
    }

    public move(): void {
        if (this.keyLeftArrowDown) {
            this.moveLeft();
        }
        if (this.keyRightArrowDown) {
            this.moveRight();
        }
    }

}
