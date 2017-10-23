export class Player {
    
    node: HTMLElement;
    width: number;

    constructor() {
        this.node = document.createElement('div');
        this.node.classList.add('player');
        this.width = this.node.offsetWidth;
        this.initMouseListener();
    }

    initMouseListener() {
        document.addEventListener('mousemove', (event) => {
            this.move(event.clientX);
        });
    }

    move(left: number) {
        this.node.style.left = (this.width / 2 + left) + 'px';
    }

}
