import { Board } from './board';
import { Player } from './player';
import { Enemy } from './enemy';

class Game {
    speed: number;
    player: Player;
    board: Board;
    enemys: Array<Enemy>;
    level: number;
    startTime: Date;
    levelDurationInSec: number;
    livetime: number;

    constructor() {
        this.level = 1;
        this.speed = 40;
        this.board = new Board;
        this.player = new Player();
        this.board.addItem(this.player.node);
        this.enemys = [];
        this.levelDurationInSec = 10;
    }

    start() {
        document.body.appendChild(this.board.node);
        this.startTime = new Date();
        this.run();
    }

    spawnEnemy() {
        let left = Math.random() * (this.board.getWidth() - Enemy.WIDTH);
        let enemy = new Enemy(left);
        this.enemys.push(enemy);
        this.board.addItem(enemy.node);
    }

    run() {

        if ((Date.now() - this.startTime.getTime()) / 1000 > this.level * this.levelDurationInSec) {
            this.level++;
            console.log('Reached Level %s', this.level);
        }
      
        if (Math.round(Math.random() * 400) <= this.level) {
            this.spawnEnemy();
        }

        for (let enemy of this.enemys) {
            if (enemy.getOffsetTop() > this.board.getHeight()) {
                enemy.destroy();
            } else {
                enemy.move();
            }
        }

        window.requestAnimationFrame(() => {
            this.run();
        });
    }
}

let game = new Game();
game.start();
game.spawnEnemy();
