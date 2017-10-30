export class Infos {
    public static CLS: string = 'infos';
    public static LEVEL_CLS: string = 'level';
    private level: number = 0;
    private node: HTMLElement = document.createElement('div');
    private levelNode: HTMLElement = document.createElement('span');
    private killNode: HTMLElement = document.createElement('span');
    private killCount: number = 0;

    constructor(level: number) {
        this.level = level;
        this.node.classList.add(Infos.CLS);
        this.levelNode.classList.add(Infos.LEVEL_CLS);
        this.node.appendChild(this.levelNode);
        this.node.appendChild(this.killNode);
        this.setLevel(this.level);
    }

    getNode():HTMLElement {
        return this.node;
    }

    setLevel(level: number):void {
        this.level = level;
        this.levelNode.innerHTML = 'Level: ' + level.toString();
    }

    setKillCount(killCount: number) {
        this.killCount = killCount;
        this.killNode.innerHTML = 'Killed: ' + killCount.toString();
    }


}