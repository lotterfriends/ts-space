import { Board } from './board';
import { Bullet } from './bullet';
import { Position } from "./position";

export class Player {
    
    node: HTMLElement;
    width: number;
    private speed: number = 5;
    private keyLeftArrowDown: boolean = false;
    private keyRightArrowDown: boolean = false;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('player');
        this.width = this.node.offsetWidth;
        this.node.style.transform = 'translateX(' + ((Board.WIDTH / 2) - (this.width / 2)) + 'px)';
        // this.initMouseListener();
        this.initKeyboardListener();
    }

    // private initMouseListener() {
    //     document.addEventListener('mousemove', (event) => {
    //         this.move(event.clientX);
    //     });
    // }

    private initKeyboardListener() {
        document.addEventListener('keydown', (event) => {
            if (event.which === 37) {
               this.keyLeftArrowDown = true; 
            }
            if (event.which === 39) {
                this.keyRightArrowDown = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.which === 37) {
                this.keyLeftArrowDown = false; 
            }
            if (event.which === 39) {
                this.keyRightArrowDown = false;
            }
        });
    }
    public fire():Bullet {
        let pos: Position = { 
            left: this.getLeft() + (this.node.offsetWidth / 2),
            top: Board.HEIGHT - this.node.offsetHeight
        };
        return new Bullet(pos);
    }

    public move():void {
        if (this.keyLeftArrowDown) {
            this.moveLeft();
        }
        if (this.keyRightArrowDown) {
            this.moveRight();
        }
    }

    private getLeft(): number {
        let leftMatch = this.node.style.transform.match(/\d+/);
        return leftMatch.length ?  parseInt(leftMatch[0], 10) : 0;
    }

    moveTo(left: number) {
        this.node.style.transform = 'translateX(' + (this.width / 2 + left) + 'px)';
    }

    moveLeft() {
        let left = this.getLeft();
        this.node.style.transform = 'translateX(' + (left - this.speed) + 'px)';
    }

    moveRight() {
        let left = this.getLeft();
        this.node.style.transform = 'translateX(' + (left + this.speed) + 'px)';
    }

}
