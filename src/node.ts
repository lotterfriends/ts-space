export class Node {
    protected node: HTMLElement;

    constructor(type: string, cls: string) {
        this.node = document.createElement(type);
        this.node.classList.add(cls);
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

    public destroy(): void {
        this.node.remove();
    }
}