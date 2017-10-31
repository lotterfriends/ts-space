import { Node } from './node';

export class Infos extends Node {
    public static CLS: string = 'infos';

    private level: number = 0;
    private levelNode: HTMLElement = document.createElement('span');
    private killNode: HTMLElement = document.createElement('span');
    private killCount: number = 0;

    constructor(level: number) {
        super('div', Infos.CLS);
        this.level = level;
        this.addItem(this.levelNode);
        this.addItem(this.killNode);
        this.setLevel(this.level);
        this.setKillCount(this.killCount);
    }

    public setLevel(level: number): void {
        this.level = level;
        this.levelNode.innerHTML = 'Level: ' + level.toString();
    }

    public setKillCount(killCount: number) {
        this.killCount = killCount;
        this.killNode.innerHTML = 'Killed: ' + killCount.toString();
    }


}