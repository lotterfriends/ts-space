export class Board {

    public static WIDTH: number = 800;
    public static HEIGHT: number = 440;
    private node: HTMLElement = document.createElement('div');

    constructor() {
        this.bootstrap();
    }

    private bootstrap(): void {
        this.node.classList.add('board');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    }

    public getNode(): HTMLElement {
        return this.node;
    }

    public addItem(item: HTMLElement): void {
        this.node.appendChild(item);
    }

    public removeItem(item: HTMLElement): void {
        this.node.removeChild(item);
    }

    public addCls(cls: string): void {
        this.node.classList.add(cls);
    }
}