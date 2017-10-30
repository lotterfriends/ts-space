import { Board } from './board';
import { Player } from './player';
import { Enemy } from './enemy';
import { Infos } from './infos';
import { Bullet } from './bullet';

class Game {
    speed: number;
    player: Player;
    board: Board;
    infos: Infos;
    enemys: Array<Enemy> = [];
    bullets: Array<Bullet> = [];
    level: number = 1;
    destroyedCount: number = 0;
    startTime: Date;
    levelDurationInSec: number;
    livetime: number;
    gameOver: boolean = false;
    pause: boolean = false;

    constructor() {
        this.speed = 40;
        this.board = new Board();
        this.player = new Player();
        this.infos = new Infos(this.level);
        this.board.addItem(this.player.node);
        this.levelDurationInSec = 10;
    }

    start() {
        document.body.appendChild(this.infos.getNode());
        document.body.appendChild(this.board.node);
        this.startTime = new Date();
        this.initKeyboardListener();
        this.run();
    }

    initKeyboardListener():void {
        document.addEventListener('keydown', (event) => {
            if (event.which === 32) { // space
                let bullet = this.player.fire();
                this.board.addItem(bullet.getNode());
                this.bullets.push(bullet);
            }
            if (event.which === 80) { // p
                this.pause = !this.pause;
            }
        });
    }

    spawnEnemy() {
        let left = Math.random() * (this.board.getWidth() - Enemy.WIDTH);
        let enemy = new Enemy(left);
        this.enemys.push(enemy);
        this.board.addItem(enemy.node);
    }

    setGameOver() {
        if (!this.gameOver) {
            this.gameOver = true;
            this.board.node.classList.add('gameOver');
            var goNode = document.createElement('div');
            goNode.classList.add('gameOverText');
            goNode.innerHTML = 'GAME OVER!';
            this.board.addItem(goNode);
        }
    }

    run() {

        if (!this.gameOver && !this.pause) {

            // todo: remove pause time
            if ((Date.now() - this.startTime.getTime()) / 1000 > this.level * this.levelDurationInSec) {
                this.level++;
                this.infos.setLevel(this.level);
            }
        
            if (Math.round(Math.random() * 400) <= this.level) {
                this.spawnEnemy();
            }

            // collision
            for (let enemy of this.enemys) {
                for (let bullet of this.bullets) {
                    var rect1 = {x: enemy.getPosition().left, y: enemy.getPosition().top, width: Enemy.WIDTH, height: Enemy.HEIGHT}
                    var rect2 = {x: bullet.getPosition().left, y: bullet.getPosition().top, width: Bullet.WIDTH, height: Bullet.HEIGHT}
                    
                    if (rect1.x < rect2.x + rect2.width &&
                    rect1.x + rect1.width > rect2.x &&
                    rect1.y < rect2.y + rect2.height &&
                    rect1.height + rect1.y > rect2.y) {
                        this.bullets.splice(this.bullets.indexOf(bullet), 1);
                        this.enemys.splice(this.enemys.indexOf(enemy), 1);
                        bullet.destroy();
                        enemy.destroy(this.board);
                        this.destroyedCount++;
                        this.infos.setKillCount(this.destroyedCount); 
                    }

                }
            }

            for (let enemy of this.enemys) {
                if (enemy.getTop() + Enemy.HEIGHT > this.board.getHeight()) {
                    enemy.destroy();
                    this.enemys.splice(this.enemys.indexOf(enemy), 1);
                    this.setGameOver();
                } else {
                    enemy.move();
                }
            }

            for (let bullet of this.bullets) {
                if (bullet.getPosition().top <= 0) {
                    bullet.destroy();
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                } else {
                    bullet.move();
                }
            }

            this.player.move();
        }

        window.requestAnimationFrame(() => {
            this.run();
        });
    }
}

let game = new Game();
game.start();
game.spawnEnemy();
