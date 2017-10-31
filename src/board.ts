import { Node } from "./node";

export class Board extends Node {

    public static WIDTH: number = 800;
    public static HEIGHT: number = 440;

    constructor() {
        super('div', 'board');
        this.bootstrap();
    }

    private bootstrap(): void {
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    }
}