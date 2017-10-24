export class Player {
    
    node: HTMLElement;
    width: number;
    private speed: number = 10;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('player');
        this.width = this.node.offsetWidth;
        this.node.style.left = ((600 / 2) - (this.width / 2)) + 'px';
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
            // left
            if (event.which === 37) {
                this.moveLeft();
            }
            // right 
            if (event.which === 39) {
                this.moveRight();
            }
        });
    }

    move(left: number) {
        this.node.style.left = (this.width / 2 + left) + 'px';
    }

    moveLeft() {
        this.node.style.left = (parseInt(this.node.style.left, 10) - this.speed) + 'px';
    }

    moveRight() {
        this.node.style.left = (parseInt(this.node.style.left, 10) + this.speed) + 'px';
    }

}
