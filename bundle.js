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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(5);
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super.call(this, 'div', 'board') || this;
        _this.bootstrap();
        return _this;
    }
    Board.prototype.bootstrap = function () {
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    };
    Board.WIDTH = 800;
    Board.HEIGHT = 440;
    return Board;
}(node_1.Node));
exports.Board = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(5);
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(position) {
        var _this = _super.call(this, 'div', 'bullet') || this;
        _this.dead = false;
        _this.speed = 5;
        _this.position = position;
        _this.bootstrap();
        return _this;
    }
    Bullet.prototype.bootstrap = function () {
        this.node.style.width = Bullet.WIDTH + 'px';
        this.node.style.height = Bullet.HEIGHT + 'px';
        this.node.classList.add('bullet');
        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';
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
        _super.prototype.destroy.call(this);
    };
    Bullet.WIDTH = 2;
    Bullet.HEIGHT = 2;
    return Bullet;
}(node_1.Node));
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = __webpack_require__(0);
var player_1 = __webpack_require__(4);
var enemy_1 = __webpack_require__(6);
var infos_1 = __webpack_require__(8);
var bullet_1 = __webpack_require__(1);
var keys_1 = __webpack_require__(2);
var node_1 = __webpack_require__(5);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 'div', 'game') || this;
        _this.enemys = [];
        _this.bullets = [];
        _this.speed = 40;
        _this.level = 1;
        _this.destroyedCount = 0;
        _this.levelDurationInSec = 10;
        _this.gameOver = false;
        _this.pause = false;
        _this.bootstrap();
        _this.start();
        return _this;
    }
    Game.prototype.start = function () {
        this.run();
        this.spawnEnemy();
    };
    Game.prototype.bootstrap = function () {
        document.body.appendChild(this.node);
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
}(node_1.Node));
new Game();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = __webpack_require__(0);
var bullet_1 = __webpack_require__(1);
var keys_1 = __webpack_require__(2);
var node_1 = __webpack_require__(5);
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this, 'div', 'player') || this;
        _this.speed = 5;
        _this.keyLeftArrowDown = false;
        _this.keyRightArrowDown = false;
        _this.bootstrap();
        _this.initKeyboardListener();
        return _this;
    }
    Player.prototype.bootstrap = function () {
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
    Player.prototype.move = function () {
        if (this.keyLeftArrowDown) {
            this.moveLeft();
        }
        if (this.keyRightArrowDown) {
            this.moveRight();
        }
    };
    return Player;
}(node_1.Node));
exports.Player = Player;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(type, cls) {
        this.node = document.createElement(type);
        this.node.classList.add(cls);
    }
    Node.prototype.getNode = function () {
        return this.node;
    };
    Node.prototype.addItem = function (item) {
        this.node.appendChild(item);
    };
    Node.prototype.removeItem = function (item) {
        this.node.removeChild(item);
    };
    Node.prototype.addCls = function (cls) {
        this.node.classList.add(cls);
    };
    Node.prototype.destroy = function () {
        this.node.remove();
    };
    return Node;
}());
exports.Node = Node;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var explosion_1 = __webpack_require__(7);
var node_1 = __webpack_require__(5);
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(left, speed) {
        if (speed === void 0) { speed = 1; }
        var _this = _super.call(this, 'div', 'enemy') || this;
        _this.dead = false;
        _this.speed = 1;
        _this.top = Enemy.HEIGHT * -1;
        _this.speed = speed;
        _this.left = left;
        _this.bootstrap();
        return _this;
    }
    Enemy.prototype.bootstrap = function () {
        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
        this.node.style.width = Enemy.WIDTH + 'px';
        this.node.style.height = Enemy.HEIGHT + 'px';
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
        _super.prototype.destroy.call(this);
    };
    Enemy.WIDTH = 54;
    Enemy.HEIGHT = 55;
    return Enemy;
}(node_1.Node));
exports.Enemy = Enemy;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(5);
var Infos = /** @class */ (function (_super) {
    __extends(Infos, _super);
    function Infos(level) {
        var _this = _super.call(this, 'div', Infos.CLS) || this;
        _this.level = 0;
        _this.levelNode = document.createElement('span');
        _this.killNode = document.createElement('span');
        _this.killCount = 0;
        _this.level = level;
        _this.addItem(_this.levelNode);
        _this.addItem(_this.killNode);
        _this.setLevel(_this.level);
        _this.setKillCount(_this.killCount);
        return _this;
    }
    Infos.prototype.setLevel = function (level) {
        this.level = level;
        this.levelNode.innerHTML = 'Level: ' + level.toString();
    };
    Infos.prototype.setKillCount = function (killCount) {
        this.killCount = killCount;
        this.killNode.innerHTML = 'Killed: ' + killCount.toString();
    };
    Infos.CLS = 'infos';
    return Infos;
}(node_1.Node));
exports.Infos = Infos;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmU2M2E4ZWUzYjAzOGMxMGQxN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxvQ0FBOEI7QUFFOUI7SUFBMkIseUJBQUk7SUFLM0I7UUFBQSxZQUNJLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FFeEI7UUFERyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O0lBQ3JCLENBQUM7SUFFTyx5QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztR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OztJQUN0QyxDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQXhCYSxTQUFHLEdBQVcsT0FBTyxDQUFDO0lBMkJ4QyxZQUFDO0NBQUEsQ0E1QjBCLFdBQUksR0E0QjlCO0FBNUJZLHNCQUFLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJlNjNhOGVlM2IwMzhjMTBkMTdjIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA4MDA7XG4gICAgcHVibGljIHN0YXRpYyBIRUlHSFQ6IG51bWJlciA9IDQ0MDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2JvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJvYXJkLldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEJvYXJkLkhFSUdIVCArICdweCc7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib2FyZC50cyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBOb2RlIHtcbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSAyO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSAyO1xuXG4gICAgcHJpdmF0ZSBkZWFkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBzdXBlcignZGl2JywgJ2J1bGxldCcpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEJ1bGxldC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCdWxsZXQuSEVJR0hUICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2J1bGxldCcpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgJ3B4LCAnICsgdGhpcy5wb3NpdGlvbi50b3AgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AgLSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5wb3NpdGlvbi5sZWZ0ICsgJ3B4LCAnICsgdGhpcy5wb3NpdGlvbi50b3AgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnVsbGV0LnRzIiwiZXhwb3J0IGVudW0gS2V5cyB7XG4gIFRBQiA9IDksXG4gIEVOVEVSID0gMTMsXG4gIFNISUZUID0gMTYsXG4gIENUUkwgPSAxNyxcbiAgQUxUID0gMTgsXG4gIEVTQyA9IDI3LFxuICBQT1MxID0gMzYsXG4gIExFRlQgPSAzNyxcbiAgVVAgPSAzOCxcbiAgUklHSFQgPSAzOSxcbiAgRE9XTiA9IDQwLFxuICBTUEFDRSA9IDMyLFxuICBQQUdFX1VQID0gMzMsXG4gIFBBR0VfRE9XTiA9IDM0LFxuICBQID0gODBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMva2V5cy50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknO1xuaW1wb3J0IHsgSW5mb3MgfSBmcm9tICcuL2luZm9zJztcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gJy4vYnVsbGV0JztcbmltcG9ydCB7IEtleXMgfSBmcm9tICcuL2tleXMnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIE5vZGUge1xuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQ7XG4gICAgcHJpdmF0ZSBpbmZvczogSW5mb3M7XG4gICAgcHJpdmF0ZSBlbmVteXM6IEFycmF5PEVuZW15PiA9IFtdO1xuICAgIHByaXZhdGUgYnVsbGV0czogQXJyYXk8QnVsbGV0PiA9IFtdO1xuXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gNDA7XG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRlc3Ryb3llZENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBEYXRlO1xuICAgIHByaXZhdGUgbGV2ZWxEdXJhdGlvbkluU2VjOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIGxpdmV0aW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5pbmZvcyA9IG5ldyBJbmZvcyh0aGlzLmxldmVsKTtcblxuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5wbGF5ZXIuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuaW5mb3MuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdEtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRLZXlib2FyZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5wbGF5ZXIuZmlyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShidWxsZXQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMucHVzaChidWxsZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSBNYXRoLnJhbmRvbSgpICogKEJvYXJkLldJRFRIIC0gRW5lbXkuV0lEVEgpO1xuICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkobGVmdCk7XG4gICAgICAgIHRoaXMuZW5lbXlzLnB1c2goZW5lbXkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oZW5lbXkuZ2V0Tm9kZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdhbWVPdmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRDbHMoJ2dhbWVPdmVyJyk7XG4gICAgICAgICAgICB2YXIgZ29Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBnb05vZGUuY2xhc3NMaXN0LmFkZCgnZ2FtZU92ZXJUZXh0Jyk7XG4gICAgICAgICAgICBnb05vZGUuaW5uZXJIVE1MID0gJ0dBTUUgT1ZFUiEnO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKGdvTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1bigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcblxuICAgICAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHBhdXNlIHRpbWVcbiAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwID4gdGhpcy5sZXZlbCAqIHRoaXMubGV2ZWxEdXJhdGlvbkluU2VjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3Muc2V0TGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA0MDApIDw9IHRoaXMubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRW5lbXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29sbGlzaW9uXG4gICAgICAgICAgICBmb3IgKGxldCBlbmVteSBvZiB0aGlzLmVuZW15cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGJ1bGxldCBvZiB0aGlzLmJ1bGxldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QxID0geyB4OiBlbmVteS5nZXRQb3NpdGlvbigpLmxlZnQsIHk6IGVuZW15LmdldFBvc2l0aW9uKCkudG9wLCB3aWR0aDogRW5lbXkuV0lEVEgsIGhlaWdodDogRW5lbXkuSEVJR0hUIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QyID0geyB4OiBidWxsZXQuZ2V0UG9zaXRpb24oKS5sZWZ0LCB5OiBidWxsZXQuZ2V0UG9zaXRpb24oKS50b3AsIHdpZHRoOiBCdWxsZXQuV0lEVEgsIGhlaWdodDogQnVsbGV0LkhFSUdIVCB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3QxLnggPCByZWN0Mi54ICsgcmVjdDIud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QxLnggKyByZWN0MS53aWR0aCA+IHJlY3QyLnggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QxLnkgPCByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0MS5oZWlnaHQgKyByZWN0MS55ID4gcmVjdDIueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZSh0aGlzLmJ1bGxldHMuaW5kZXhPZihidWxsZXQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlzLnNwbGljZSh0aGlzLmVuZW15cy5pbmRleE9mKGVuZW15KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSh0aGlzLmJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mb3Muc2V0S2lsbENvdW50KHRoaXMuZGVzdHJveWVkQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbXlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LmdldFBvc2l0aW9uKCkudG9wICsgRW5lbXkuSEVJR0hUID4gQm9hcmQuSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteXMuc3BsaWNlKHRoaXMuZW5lbXlzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15Lm1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGJ1bGxldCBvZiB0aGlzLmJ1bGxldHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0LmdldFBvc2l0aW9uKCkudG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZSh0aGlzLmJ1bGxldHMuaW5kZXhPZihidWxsZXQpLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUga2V5TGVmdEFycm93RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5UmlnaHRBcnJvd0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ3BsYXllcicpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKChCb2FyZC5XSURUSCAvIDIpIC0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpKSArICdweCknO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5SSUdIVCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5UmlnaHRBcnJvd0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUklHSFQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVJpZ2h0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TGVmdCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVmdE1hdGNoID0gdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybS5tYXRjaCgvLT9cXGQrLyk7XG4gICAgICAgIGlmIChsZWZ0TWF0Y2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobGVmdE1hdGNoWzBdLCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuICAgICAgICBpZiAobGVmdCAtIHRoaXMuc3BlZWQgPD0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpICogLTEpIHtcbiAgICAgICAgICAgIGxlZnQgPSAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0IC0gdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmdldExlZnQoKTtcbiAgICAgICAgaWYgKGxlZnQgKyB0aGlzLnNwZWVkID49IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikge1xuICAgICAgICAgICAgbGVmdCA9IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0ICsgdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyZSgpOiBCdWxsZXQge1xuICAgICAgICBsZXQgcG9zOiBQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuZ2V0TGVmdCgpICsgKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpLFxuICAgICAgICAgICAgdG9wOiBCb2FyZC5IRUlHSFQgLSB0aGlzLm5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQnVsbGV0KHBvcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmtleUxlZnRBcnJvd0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlSaWdodEFycm93RG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXllci50cyIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENscyhjbHM6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlLnRzIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9wb3NpdGlvblwiO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgRXhwbG9zaW9uIH0gZnJvbSBcIi4vZXhwbG9zaW9uXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBOb2RlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgV0lEVEg6IG51bWJlciA9IDU0O1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA1NTtcblxuICAgIHByaXZhdGUgZGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSB0b3A6IG51bWJlciA9IEVuZW15LkhFSUdIVCAqIC0xO1xuICAgIHByaXZhdGUgbGVmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyLCBzcGVlZDogbnVtYmVyID0gMSkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2VuZW15Jyk7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMubGVmdCArICdweCwgJyArIHRoaXMudG9wICsgJ3B4KSc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS53aWR0aCA9IEVuZW15LldJRFRIICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmhlaWdodCA9IEVuZW15LkhFSUdIVCArICdweCc7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvcCA9IHRoaXMudG9wICsgdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMubGVmdCArICdweCwgJyArIHRoaXMudG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGJvYXJkPzogQm9hcmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGJvYXJkKSB7XG4gICAgICAgICAgICBsZXQgZXggPSBuZXcgRXhwbG9zaW9uKHRoaXMuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICBib2FyZC5hZGRJdGVtKGV4LmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmVteS50cyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEV4cGxvc2lvbiB7XG4gICAgcHJpdmF0ZSBpbWFnZVBhdGg6IFN0cmluZyA9ICcuL2ltZy9leHBsb3Npb24uZ2lmJztcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmJvb3RzdHJhcChwb3NpdGlvbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKHBvc2l0aW9uOiBQb3NpdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnZXhwbG9zaW9uJyk7XG4gICAgICAgIHRoaXMubm9kZS5zcmMgPSBbdGhpcy5pbWFnZVBhdGgsIERhdGUubm93KCldLmpvaW4oJz8nKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHBvc2l0aW9uLmxlZnQgKyAncHgsICcgKyBwb3NpdGlvbi50b3AgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4cGxvc2lvbi50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgY2xhc3MgSW5mb3MgZXh0ZW5kcyBOb2RlIHtcbiAgICBwdWJsaWMgc3RhdGljIENMUzogc3RyaW5nID0gJ2luZm9zJztcblxuICAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBsZXZlbE5vZGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaXZhdGUga2lsbE5vZGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByaXZhdGUga2lsbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBzdXBlcignZGl2JywgSW5mb3MuQ0xTKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5sZXZlbE5vZGUpO1xuICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5raWxsTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0TGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgIHRoaXMuc2V0S2lsbENvdW50KHRoaXMua2lsbENvdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TGV2ZWwobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMubGV2ZWxOb2RlLmlubmVySFRNTCA9ICdMZXZlbDogJyArIGxldmVsLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEtpbGxDb3VudChraWxsQ291bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmtpbGxDb3VudCA9IGtpbGxDb3VudDtcbiAgICAgICAgdGhpcy5raWxsTm9kZS5pbm5lckhUTUwgPSAnS2lsbGVkOiAnICsga2lsbENvdW50LnRvU3RyaW5nKCk7XG4gICAgfVxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5mb3MudHMiXSwic291cmNlUm9vdCI6IiJ9