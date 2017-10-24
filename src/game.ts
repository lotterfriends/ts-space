import { Board } from './board';
import { Player } from './player';
import { Enemy } from './enemy';

class Game {
    speed: number;
    player: Player;
    board: Board;
    enemys: Array<Enemy>;

    constructor() {
        this.speed = 40;
        this.board = new Board;
        this.player = new Player();
        this.board.addItem(this.player.node);
        this.enemys = [];
    }

    start() {
        document.body.appendChild(this.board.node);
        this.run();
    }

    spawnEnemy() {
        let left = Math.random() * this.board.getWidth();
        let enemy = new Enemy(left);
        this.enemys.push(enemy);
        this.board.addItem(enemy.node);
    }

    run() {

        // console.log(Math.round(Math.random()*10000) <= 50)
        // if (Math.round(Math.random()*50) <= 50) {
        //     this.spawnEnemy();
        // }

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
