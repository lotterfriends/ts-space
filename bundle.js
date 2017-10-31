/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board() {
        this.node = document.createElement('div');
        this.bootstrap();
    }
    Board.prototype.bootstrap = function () {
        this.node.classList.add('board');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    };
    Board.prototype.getNode = function () {
        return this.node;
    };
    Board.prototype.addItem = function (item) {
        this.node.appendChild(item);
    };
    Board.prototype.removeItem = function (item) {
        this.node.removeChild(item);
    };
    Board.prototype.addCls = function (cls) {
        this.node.classList.add(cls);
    };
    Board.WIDTH = 800;
    Board.HEIGHT = 440;
    return Board;
}());
exports.Board = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bullet = /** @class */ (function () {
    function Bullet(position) {
        this.dead = false;
        this.speed = 5;
        this.node = document.createElement('div');
        this.position = position;
        this.bootstrap();
    }
    Bullet.prototype.bootstrap = function () {
        this.node.style.width = Bullet.WIDTH + 'px';
        this.node.style.height = Bullet.HEIGHT + 'px';
        this.node.classList.add('bullet');
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    };
    Bullet.prototype.getNode = function () {
        return this.node;
    };
    Bullet.prototype.move = function () {
        if (this.dead) {
            return;
        }
        this.position.top = this.position.top - this.speed;
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
    };
    Bullet.prototype.getPosition = function () {
        return this.position;
    };
    Bullet.prototype.destroy = function () {
        this.dead = true;
        this.node.remove();
    };
    Bullet.WIDTH = 2;
    Bullet.HEIGHT = 2;
    return Bullet;
}());
exports.Bullet = Bullet;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys[Keys["TAB"] = 9] = "TAB";
    Keys[Keys["ENTER"] = 13] = "ENTER";
    Keys[Keys["SHIFT"] = 16] = "SHIFT";
    Keys[Keys["CTRL"] = 17] = "CTRL";
    Keys[Keys["ALT"] = 18] = "ALT";
    Keys[Keys["ESC"] = 27] = "ESC";
    Keys[Keys["POS1"] = 36] = "POS1";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["UP"] = 38] = "UP";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["DOWN"] = 40] = "DOWN";
    Keys[Keys["SPACE"] = 32] = "SPACE";
    Keys[Keys["PAGE_UP"] = 33] = "PAGE_UP";
    Keys[Keys["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Keys[Keys["P"] = 80] = "P";
})(Keys = exports.Keys || (exports.Keys = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = __webpack_require__(0);
var player_1 = __webpack_require__(4);
var enemy_1 = __webpack_require__(5);
var infos_1 = __webpack_require__(7);
var bullet_1 = __webpack_require__(1);
var keys_1 = __webpack_require__(2);
var Game = /** @class */ (function () {
    function Game() {
        this.enemys = [];
        this.bullets = [];
        this.node = document.createElement('div');
        this.speed = 40;
        this.level = 1;
        this.destroyedCount = 0;
        this.levelDurationInSec = 10;
        this.gameOver = false;
        this.pause = false;
        this.bootstrap();
        this.start();
    }
    Game.prototype.start = function () {
        this.run();
        this.spawnEnemy();
    };
    Game.prototype.bootstrap = function () {
        document.body.appendChild(this.node);
        this.node.classList.add('game');
        this.board = new board_1.Board();
        this.player = new player_1.Player();
        this.infos = new infos_1.Infos(this.level);
        this.board.addItem(this.player.getNode());
        this.node.appendChild(this.infos.getNode());
        this.node.appendChild(this.board.getNode());
        this.startTime = new Date();
        this.initKeyboardListener();
    };
    Game.prototype.initKeyboardListener = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            if (event.which === keys_1.Keys.SPACE) {
                var bullet = _this.player.fire();
                _this.board.addItem(bullet.getNode());
                _this.bullets.push(bullet);
            }
            if (event.which === keys_1.Keys.P) {
                _this.pause = !_this.pause;
            }
        });
    };
    Game.prototype.spawnEnemy = function () {
        var left = Math.random() * (board_1.Board.WIDTH - enemy_1.Enemy.WIDTH);
        var enemy = new enemy_1.Enemy(left);
        this.enemys.push(enemy);
        this.board.addItem(enemy.getNode());
    };
    Game.prototype.setGameOver = function () {
        if (!this.gameOver) {
            this.gameOver = true;
            this.board.addCls('gameOver');
            var goNode = document.createElement('div');
            goNode.classList.add('gameOverText');
            goNode.innerHTML = 'GAME OVER!';
            this.board.addItem(goNode);
        }
    };
    Game.prototype.run = function () {
        var _this = this;
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
            for (var _i = 0, _a = this.enemys; _i < _a.length; _i++) {
                var enemy = _a[_i];
                for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
                    var bullet = _c[_b];
                    var rect1 = { x: enemy.getPosition().left, y: enemy.getPosition().top, width: enemy_1.Enemy.WIDTH, height: enemy_1.Enemy.HEIGHT };
                    var rect2 = { x: bullet.getPosition().left, y: bullet.getPosition().top, width: bullet_1.Bullet.WIDTH, height: bullet_1.Bullet.HEIGHT };
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
            for (var _d = 0, _e = this.enemys; _d < _e.length; _d++) {
                var enemy = _e[_d];
                if (enemy.getPosition().top + enemy_1.Enemy.HEIGHT > board_1.Board.HEIGHT) {
                    enemy.destroy();
                    this.enemys.splice(this.enemys.indexOf(enemy), 1);
                    this.setGameOver();
                }
                else {
                    enemy.move();
                }
            }
            for (var _f = 0, _g = this.bullets; _f < _g.length; _f++) {
                var bullet = _g[_f];
                if (bullet.getPosition().top <= 0) {
                    bullet.destroy();
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                }
                else {
                    bullet.move();
                }
            }
            this.player.move();
        }
        window.requestAnimationFrame(function () {
            _this.run();
        });
    };
    return Game;
}());
new Game();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = __webpack_require__(0);
var bullet_1 = __webpack_require__(1);
var keys_1 = __webpack_require__(2);
var Player = /** @class */ (function () {
    function Player() {
        this.node = document.createElement('div');
        this.speed = 5;
        this.keyLeftArrowDown = false;
        this.keyRightArrowDown = false;
        this.bootstrap();
        this.initKeyboardListener();
    }
    Player.prototype.bootstrap = function () {
        this.node.classList.add('player');
        this.node.style.transform = 'translateX(' + ((board_1.Board.WIDTH / 2) - (this.node.offsetWidth / 2)) + 'px)';
    };
    Player.prototype.initKeyboardListener = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            if (event.which === keys_1.Keys.LEFT) {
                _this.keyLeftArrowDown = true;
            }
            if (event.which === keys_1.Keys.RIGHT) {
                _this.keyRightArrowDown = true;
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.which === keys_1.Keys.LEFT) {
                _this.keyLeftArrowDown = false;
            }
            if (event.which === keys_1.Keys.RIGHT) {
                _this.keyRightArrowDown = false;
            }
        });
    };
    Player.prototype.getLeft = function () {
        var leftMatch = this.node.style.transform.match(/-?\d+/);
        if (leftMatch.length) {
            return parseInt(leftMatch[0], 10);
        }
    };
    Player.prototype.moveLeft = function () {
        var left = this.getLeft();
        if (left - this.speed <= (this.node.offsetWidth / 2) * -1) {
            left = (this.node.offsetWidth / 2) * -1;
        }
        this.node.style.transform = 'translateX(' + (left - this.speed) + 'px)';
    };
    Player.prototype.moveRight = function () {
        var left = this.getLeft();
        if (left + this.speed >= board_1.Board.WIDTH - this.node.offsetWidth / 2) {
            left = board_1.Board.WIDTH - this.node.offsetWidth / 2;
        }
        this.node.style.transform = 'translateX(' + (left + this.speed) + 'px)';
    };
    Player.prototype.fire = function () {
        var pos = {
            left: this.getLeft() + (this.node.offsetWidth / 2),
            top: board_1.Board.HEIGHT - this.node.offsetHeight
        };
        return new bullet_1.Bullet(pos);
    };
    Player.prototype.getNode = function () {
        return this.node;
    };
    Player.prototype.move = function () {
        if (this.keyLeftArrowDown) {
            this.moveLeft();
        }
        if (this.keyRightArrowDown) {
            this.moveRight();
        }
    };
    return Player;
}());
exports.Player = Player;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var explosion_1 = __webpack_require__(6);
var Enemy = /** @class */ (function () {
    function Enemy(left, speed) {
        if (speed === void 0) { speed = 1; }
        this.node = document.createElement('div');
        this.dead = false;
        this.speed = 1;
        this.top = Enemy.HEIGHT * -1;
        this.speed = speed;
        this.left = left;
        this.bootstrap();
    }
    Enemy.prototype.bootstrap = function () {
        this.node.classList.add('enemy');
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
        this.node.style.width = Enemy.WIDTH + 'px';
        this.node.style.height = Enemy.HEIGHT + 'px';
    };
    Enemy.prototype.getNode = function () {
        return this.node;
    };
    Enemy.prototype.move = function () {
        if (this.dead) {
            return;
        }
        this.top = this.top + this.speed;
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
    };
    Enemy.prototype.getPosition = function () {
        return {
            left: this.left,
            top: this.top
        };
    };
    Enemy.prototype.destroy = function (board) {
        this.dead = true;
        if (board) {
            var ex = new explosion_1.Explosion(this.getPosition());
            board.addItem(ex.getNode());
        }
        this.node.remove();
    };
    Enemy.WIDTH = 54;
    Enemy.HEIGHT = 55;
    return Enemy;
}());
exports.Enemy = Enemy;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Explosion = /** @class */ (function () {
    function Explosion(position) {
        var _this = this;
        this.imagePath = './img/explosion.gif';
        this.node = document.createElement('img');
        this.bootstrap(position);
        setTimeout(function () {
            _this.destroy();
        }, 1000);
    }
    Explosion.prototype.bootstrap = function (position) {
        this.node.classList.add('explosion');
        this.node.src = [this.imagePath, Date.now()].join('?');
        this.node.style.transform = 'translate(' + position.left + 'px, ' + position.top + 'px)';
    };
    Explosion.prototype.getNode = function () {
        return this.node;
    };
    Explosion.prototype.destroy = function () {
        this.node.remove();
    };
    return Explosion;
}());
exports.Explosion = Explosion;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Infos = /** @class */ (function () {
    function Infos(level) {
        this.level = 0;
        this.node = document.createElement('div');
        this.levelNode = document.createElement('span');
        this.killNode = document.createElement('span');
        this.killCount = 0;
        this.level = level;
        this.node.classList.add(Infos.CLS);
        this.levelNode.classList.add(Infos.LEVEL_CLS);
        this.node.appendChild(this.levelNode);
        this.node.appendChild(this.killNode);
        this.setLevel(this.level);
    }
    Infos.prototype.getNode = function () {
        return this.node;
    };
    Infos.prototype.setLevel = function (level) {
        this.level = level;
        this.levelNode.innerHTML = 'Level: ' + level.toString();
    };
    Infos.prototype.setKillCount = function (killCount) {
        this.killCount = killCount;
        this.killNode.innerHTML = 'Killed: ' + killCount.toString();
    };
    Infos.CLS = 'infos';
    Infos.LEVEL_CLS = 'level';
    return Infos;
}());
exports.Infos = Infos;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODRmYTZjZGRhODJmZDUzYTU2YTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBTUk7UUFGUSxTQUFJLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx5QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJ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QUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQTlCYSxTQUFHLEdBQVcsT0FBTyxDQUFDO0lBQ3RCLGVBQVMsR0FBVyxPQUFPLENBQUM7SUFnQzlDLFlBQUM7Q0FBQTtBQWxDWSxzQkFBSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NGZhNmNkZGE4MmZkNTNhNTZhNiIsImV4cG9ydCBjbGFzcyBCb2FyZCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA4MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDQ0MDtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJvYXJkLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEJvYXJkLkhFSUdIVCArICdweCc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyhjbHM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCdWxsZXQge1xuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDI7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDI7XG5cbiAgICBwcml2YXRlIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgbm9kZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJ1bGxldC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCdWxsZXQuSEVJR0hUICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2J1bGxldCcpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgJ3B4LCAnICsgdGhpcy5wb3NpdGlvbi50b3AgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wIC0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMucG9zaXRpb24ubGVmdCArICdweCwgJyArIHRoaXMucG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1bGxldC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICBUQUIgPSA5LFxuICBFTlRFUiA9IDEzLFxuICBTSElGVCA9IDE2LFxuICBDVFJMID0gMTcsXG4gIEFMVCA9IDE4LFxuICBFU0MgPSAyNyxcbiAgUE9TMSA9IDM2LFxuICBMRUZUID0gMzcsXG4gIFVQID0gMzgsXG4gIFJJR0hUID0gMzksXG4gIERPV04gPSA0MCxcbiAgU1BBQ0UgPSAzMixcbiAgUEFHRV9VUCA9IDMzLFxuICBQQUdFX0RPV04gPSAzNCxcbiAgUCA9IDgwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15JztcbmltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi9pbmZvcyc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcblxuY2xhc3MgR2FtZSB7XG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcbiAgICBwcml2YXRlIGJvYXJkOiBCb2FyZDtcbiAgICBwcml2YXRlIGluZm9zOiBJbmZvcztcbiAgICBwcml2YXRlIGVuZW15czogQXJyYXk8RW5lbXk+ID0gW107XG4gICAgcHJpdmF0ZSBidWxsZXRzOiBBcnJheTxCdWxsZXQ+ID0gW107XG5cbiAgICBwcml2YXRlIG5vZGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gNDA7XG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRlc3Ryb3llZENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBEYXRlO1xuICAgIHByaXZhdGUgbGV2ZWxEdXJhdGlvbkluU2VjOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIGxpdmV0aW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgdGhpcy5zcGF3bkVuZW15KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2dhbWUnKTtcblxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLmluZm9zID0gbmV3IEluZm9zKHRoaXMubGV2ZWwpO1xuXG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbSh0aGlzLnBsYXllci5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5pbmZvcy5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZC5nZXROb2RlKCkpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgdGhpcy5pbml0S2V5Ym9hcmRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5TUEFDRSkge1xuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSB0aGlzLnBsYXllci5maXJlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGJ1bGxldC5nZXROb2RlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UgPSAhdGhpcy5wYXVzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bkVuZW15KCk6IHZvaWQge1xuICAgICAgICBsZXQgbGVmdCA9IE1hdGgucmFuZG9tKCkgKiAoQm9hcmQuV0lEVEggLSBFbmVteS5XSURUSCk7XG4gICAgICAgIGxldCBlbmVteSA9IG5ldyBFbmVteShsZWZ0KTtcbiAgICAgICAgdGhpcy5lbmVteXMucHVzaChlbmVteSk7XG4gICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShlbmVteS5nZXROb2RlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0R2FtZU92ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZENscygnZ2FtZU92ZXInKTtcbiAgICAgICAgICAgIHZhciBnb05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGdvTm9kZS5jbGFzc0xpc3QuYWRkKCdnYW1lT3ZlclRleHQnKTtcbiAgICAgICAgICAgIGdvTm9kZS5pbm5lckhUTUwgPSAnR0FNRSBPVkVSISc7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oZ29Ob2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5nYW1lT3ZlciAmJiAhdGhpcy5wYXVzZSkge1xuXG4gICAgICAgICAgICAvLyB0b2RvOiByZW1vdmUgcGF1c2UgdGltZVxuICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDAgPiB0aGlzLmxldmVsICogdGhpcy5sZXZlbER1cmF0aW9uSW5TZWMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsKys7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvcy5zZXRMZXZlbCh0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDQwMCkgPD0gdGhpcy5sZXZlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbXlzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVsbGV0IG9mIHRoaXMuYnVsbGV0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDEgPSB7IHg6IGVuZW15LmdldFBvc2l0aW9uKCkubGVmdCwgeTogZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AsIHdpZHRoOiBFbmVteS5XSURUSCwgaGVpZ2h0OiBFbmVteS5IRUlHSFQgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDIgPSB7IHg6IGJ1bGxldC5nZXRQb3NpdGlvbigpLmxlZnQsIHk6IGJ1bGxldC5nZXRQb3NpdGlvbigpLnRvcCwgd2lkdGg6IEJ1bGxldC5XSURUSCwgaGVpZ2h0OiBCdWxsZXQuSEVJR0hUIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKHRoaXMuYnVsbGV0cy5pbmRleE9mKGJ1bGxldCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteXMuc3BsaWNlKHRoaXMuZW5lbXlzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5kZXN0cm95KHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvcy5zZXRLaWxsQ291bnQodGhpcy5kZXN0cm95ZWRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgdGhpcy5lbmVteXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AgKyBFbmVteS5IRUlHSFQgPiBCb2FyZC5IRUlHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15cy5zcGxpY2UodGhpcy5lbmVteXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgYnVsbGV0IG9mIHRoaXMuYnVsbGV0cykge1xuICAgICAgICAgICAgICAgIGlmIChidWxsZXQuZ2V0UG9zaXRpb24oKS50b3AgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKHRoaXMuYnVsbGV0cy5pbmRleE9mKGJ1bGxldCksIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5tb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IEdhbWUoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lLnRzIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gJy4vYnVsbGV0JztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IEtleXMgfSBmcm9tICcuL2tleXMnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuICAgIHByaXZhdGUgbm9kZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUga2V5TGVmdEFycm93RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5UmlnaHRBcnJvd0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoKEJvYXJkLldJRFRIIC8gMikgLSAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikpICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLkxFRlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUxlZnRBcnJvd0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlSaWdodEFycm93RG93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLkxFRlQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleUxlZnRBcnJvd0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5SSUdIVCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5UmlnaHRBcnJvd0Rvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMZWZ0KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBsZWZ0TWF0Y2ggPSB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtLm1hdGNoKC8tP1xcZCsvKTtcbiAgICAgICAgaWYgKGxlZnRNYXRjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChsZWZ0TWF0Y2hbMF0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZUxlZnQoKTogdm9pZCB7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5nZXRMZWZ0KCk7XG4gICAgICAgIGlmIChsZWZ0IC0gdGhpcy5zcGVlZCA8PSAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikgKiAtMSkge1xuICAgICAgICAgICAgbGVmdCA9ICh0aGlzLm5vZGUub2Zmc2V0V2lkdGggLyAyKSAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKGxlZnQgLSB0aGlzLnNwZWVkKSArICdweCknO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuICAgICAgICBpZiAobGVmdCArIHRoaXMuc3BlZWQgPj0gQm9hcmQuV0lEVEggLSB0aGlzLm5vZGUub2Zmc2V0V2lkdGggLyAyKSB7XG4gICAgICAgICAgICBsZWZ0ID0gQm9hcmQuV0lEVEggLSB0aGlzLm5vZGUub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKGxlZnQgKyB0aGlzLnNwZWVkKSArICdweCknO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaXJlKCk6IEJ1bGxldCB7XG4gICAgICAgIGxldCBwb3M6IFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5nZXRMZWZ0KCkgKyAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMiksXG4gICAgICAgICAgICB0b3A6IEJvYXJkLkhFSUdIVCAtIHRoaXMubm9kZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBCdWxsZXQocG9zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmtleUxlZnRBcnJvd0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlSaWdodEFycm93RG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXllci50cyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEV4cGxvc2lvbiB9IGZyb20gXCIuL2V4cGxvc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXkge1xuXG4gICAgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1NDtcbiAgICBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA1NTtcblxuICAgIHByaXZhdGUgbm9kZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3BlZWQ6IG51bWJlciA9IDE7XG4gICAgdG9wOiBudW1iZXIgPSBFbmVteS5IRUlHSFQgKiAtMTtcbiAgICBsZWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIsIHNwZWVkOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2VuZW15Jyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBFbmVteS5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBFbmVteS5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy50b3AgKyB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5sZWZ0ICsgJ3B4LCAnICsgdGhpcy50b3AgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koYm9hcmQ/OiBCb2FyZCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICBpZiAoYm9hcmQpIHtcbiAgICAgICAgICAgIGxldCBleCA9IG5ldyBFeHBsb3Npb24odGhpcy5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGJvYXJkLmFkZEl0ZW0oZXguZ2V0Tm9kZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZW15LnRzIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9wb3NpdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgRXhwbG9zaW9uIHtcbiAgICBwcml2YXRlIGltYWdlUGF0aDogU3RyaW5nID0gJy4vaW1nL2V4cGxvc2lvbi5naWYnO1xuICAgIHByaXZhdGUgbm9kZTogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKHBvc2l0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAocG9zaXRpb246IFBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdleHBsb3Npb24nKTtcbiAgICAgICAgdGhpcy5ub2RlLnNyYyA9IFt0aGlzLmltYWdlUGF0aCwgRGF0ZS5ub3coKV0uam9pbignPycpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgcG9zaXRpb24ubGVmdCArICdweCwgJyArIHBvc2l0aW9uLnRvcCArICdweCknO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhwbG9zaW9uLnRzIiwiZXhwb3J0IGNsYXNzIEluZm9zIHtcbiAgICBwdWJsaWMgc3RhdGljIENMUzogc3RyaW5nID0gJ2luZm9zJztcbiAgICBwdWJsaWMgc3RhdGljIExFVkVMX0NMUzogc3RyaW5nID0gJ2xldmVsJztcblxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBub2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaXZhdGUgbGV2ZWxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChJbmZvcy5DTFMpO1xuICAgICAgICB0aGlzLmxldmVsTm9kZS5jbGFzc0xpc3QuYWRkKEluZm9zLkxFVkVMX0NMUyk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmxldmVsTm9kZSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmtpbGxOb2RlKTtcbiAgICAgICAgdGhpcy5zZXRMZXZlbCh0aGlzLmxldmVsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExldmVsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmxldmVsTm9kZS5pbm5lckhUTUwgPSAnTGV2ZWw6ICcgKyBsZXZlbC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRLaWxsQ291bnQoa2lsbENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5raWxsQ291bnQgPSBraWxsQ291bnQ7XG4gICAgICAgIHRoaXMua2lsbE5vZGUuaW5uZXJIVE1MID0gJ0tpbGxlZDogJyArIGtpbGxDb3VudC50b1N0cmluZygpO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZm9zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==