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
        _this.spawnRate = 400;
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
        this.addItem(this.infos.getNode());
        this.addItem(this.board.getNode());
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
                if (_this.pause) {
                    _this.board.addItem(new node_1.Node('div', 'pauseText', 'PAUSE').getNode());
                }
                else {
                    _this.board.removeItem(document.querySelector('.pauseText'));
                }
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
            this.board.addItem(new node_1.Node('div', 'gameOverText', 'GAME OVER!').getNode());
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
            if (Math.round(Math.random() * this.spawnRate) <= this.level) {
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
                // move the enemys
                if (enemy.getPosition().top + enemy_1.Enemy.HEIGHT > board_1.Board.HEIGHT) {
                    enemy.destroy();
                    this.enemys.splice(this.enemys.indexOf(enemy), 1);
                    this.setGameOver();
                }
                else {
                    enemy.move();
                }
            }
            // move the bullets 
            for (var _d = 0, _e = this.bullets; _d < _e.length; _d++) {
                var bullet = _e[_d];
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
    function Node(type, cls, content) {
        this.node = document.createElement(type);
        this.node.classList.add(cls);
        if (content) {
            this.node.innerHTML = content;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDc2YWRhMzY1OTkyOWQ2MWY0NTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxvQ0FBOEI7QUFFOUI7SUFBMkIseUJBQUk7SUFLM0I7UUFBQSxZQUNJLGtCQUFNLEtBQUssRUFBRSxPQUFPLENBQUMsU0FFeEI7UUFERyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O0lBQ3JCLENBQUM7SUFFTyx5QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztR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LENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDdEMsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTSw0QkFBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUF4QmEsU0FBRyxHQUFXLE9BQU8sQ0FBQztJQTJCeEMsWUFBQztDQUFBLENBNUIwQixXQUFJLEdBNEI5QjtBQTVCWSxzQkFBSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NzZhZGEzNjU5OTI5ZDYxZjQ1MSIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gODAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA0NDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZCcpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCb2FyZC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCb2FyZC5IRUlHSFQgKyAncHgnO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMjtcblxuICAgIHByaXZhdGUgZGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogUG9zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdidWxsZXQnKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCdWxsZXQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQnVsbGV0LkhFSUdIVCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdidWxsZXQnKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMucG9zaXRpb24ubGVmdCArICdweCwgJyArIHRoaXMucG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wIC0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMucG9zaXRpb24ubGVmdCArICdweCwgJyArIHRoaXMucG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1bGxldC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICBUQUIgPSA5LFxuICBFTlRFUiA9IDEzLFxuICBTSElGVCA9IDE2LFxuICBDVFJMID0gMTcsXG4gIEFMVCA9IDE4LFxuICBFU0MgPSAyNyxcbiAgUE9TMSA9IDM2LFxuICBMRUZUID0gMzcsXG4gIFVQID0gMzgsXG4gIFJJR0hUID0gMzksXG4gIERPV04gPSA0MCxcbiAgU1BBQ0UgPSAzMixcbiAgUEFHRV9VUCA9IDMzLFxuICBQQUdFX0RPV04gPSAzNCxcbiAgUCA9IDgwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15JztcbmltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi9pbmZvcyc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBOb2RlIHtcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xuICAgIHByaXZhdGUgaW5mb3M6IEluZm9zO1xuICAgIHByaXZhdGUgZW5lbXlzOiBBcnJheTxFbmVteT4gPSBbXTtcbiAgICBwcml2YXRlIGJ1bGxldHM6IEFycmF5PEJ1bGxldD4gPSBbXTtcblxuICAgIHByaXZhdGUgc3Bhd25SYXRlOiBudW1iZXIgPSA0MDA7XG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRlc3Ryb3llZENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBEYXRlO1xuICAgIHByaXZhdGUgbGV2ZWxEdXJhdGlvbkluU2VjOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIGxpdmV0aW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5pbmZvcyA9IG5ldyBJbmZvcyh0aGlzLmxldmVsKTtcblxuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5wbGF5ZXIuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuaW5mb3MuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdEtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRLZXlib2FyZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5wbGF5ZXIuZmlyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShidWxsZXQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMucHVzaChidWxsZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBOb2RlKCdkaXYnLCAncGF1c2VUZXh0JywgJ1BBVVNFJykuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnJlbW92ZUl0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlVGV4dCcpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSBNYXRoLnJhbmRvbSgpICogKEJvYXJkLldJRFRIIC0gRW5lbXkuV0lEVEgpO1xuICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkobGVmdCk7XG4gICAgICAgIHRoaXMuZW5lbXlzLnB1c2goZW5lbXkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oZW5lbXkuZ2V0Tm9kZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdhbWVPdmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRDbHMoJ2dhbWVPdmVyJyk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0obmV3IE5vZGUoJ2RpdicsICdnYW1lT3ZlclRleHQnLCAnR0FNRSBPVkVSIScpLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1bigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcblxuICAgICAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHBhdXNlIHRpbWVcbiAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwID4gdGhpcy5sZXZlbCAqIHRoaXMubGV2ZWxEdXJhdGlvbkluU2VjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3Muc2V0TGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwYXduUmF0ZSkgPD0gdGhpcy5sZXZlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbXlzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVsbGV0IG9mIHRoaXMuYnVsbGV0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDEgPSB7IHg6IGVuZW15LmdldFBvc2l0aW9uKCkubGVmdCwgeTogZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AsIHdpZHRoOiBFbmVteS5XSURUSCwgaGVpZ2h0OiBFbmVteS5IRUlHSFQgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDIgPSB7IHg6IGJ1bGxldC5nZXRQb3NpdGlvbigpLmxlZnQsIHk6IGJ1bGxldC5nZXRQb3NpdGlvbigpLnRvcCwgd2lkdGg6IEJ1bGxldC5XSURUSCwgaGVpZ2h0OiBCdWxsZXQuSEVJR0hUIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKHRoaXMuYnVsbGV0cy5pbmRleE9mKGJ1bGxldCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteXMuc3BsaWNlKHRoaXMuZW5lbXlzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5kZXN0cm95KHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvcy5zZXRLaWxsQ291bnQodGhpcy5kZXN0cm95ZWRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRoZSBlbmVteXNcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AgKyBFbmVteS5IRUlHSFQgPiBCb2FyZC5IRUlHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15cy5zcGxpY2UodGhpcy5lbmVteXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgYnVsbGV0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGJ1bGxldCBvZiB0aGlzLmJ1bGxldHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0LmdldFBvc2l0aW9uKCkudG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZSh0aGlzLmJ1bGxldHMuaW5kZXhPZihidWxsZXQpLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUga2V5TGVmdEFycm93RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5UmlnaHRBcnJvd0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ3BsYXllcicpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKChCb2FyZC5XSURUSCAvIDIpIC0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpKSArICdweCknO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5SSUdIVCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5UmlnaHRBcnJvd0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUklHSFQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVJpZ2h0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TGVmdCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVmdE1hdGNoID0gdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybS5tYXRjaCgvLT9cXGQrLyk7XG4gICAgICAgIGlmIChsZWZ0TWF0Y2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobGVmdE1hdGNoWzBdLCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuICAgICAgICBpZiAobGVmdCAtIHRoaXMuc3BlZWQgPD0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpICogLTEpIHtcbiAgICAgICAgICAgIGxlZnQgPSAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0IC0gdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmdldExlZnQoKTtcbiAgICAgICAgaWYgKGxlZnQgKyB0aGlzLnNwZWVkID49IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikge1xuICAgICAgICAgICAgbGVmdCA9IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0ICsgdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyZSgpOiBCdWxsZXQge1xuICAgICAgICBsZXQgcG9zOiBQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuZ2V0TGVmdCgpICsgKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpLFxuICAgICAgICAgICAgdG9wOiBCb2FyZC5IRUlHSFQgLSB0aGlzLm5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQnVsbGV0KHBvcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmtleUxlZnRBcnJvd0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlSaWdodEFycm93RG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXllci50cyIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbHMoY2xzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS50cyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEV4cGxvc2lvbiB9IGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1NDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gNTU7XG5cbiAgICBwcml2YXRlIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgdG9wOiBudW1iZXIgPSBFbmVteS5IRUlHSFQgKiAtMTtcbiAgICBwcml2YXRlIGxlZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgc3BlZWQ6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdlbmVteScpO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBFbmVteS5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBFbmVteS5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZWFkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCArIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShib2FyZD86IEJvYXJkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIGlmIChib2FyZCkge1xuICAgICAgICAgICAgbGV0IGV4ID0gbmV3IEV4cGxvc2lvbih0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgYm9hcmQuYWRkSXRlbShleC5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5lbXkudHMiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24ge1xuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBTdHJpbmcgPSAnLi9pbWcvZXhwbG9zaW9uLmdpZic7XG4gICAgcHJpdmF0ZSBub2RlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5ib290c3RyYXAocG9zaXRpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcChwb3NpdGlvbjogUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2V4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLm5vZGUuc3JjID0gW3RoaXMuaW1hZ2VQYXRoLCBEYXRlLm5vdygpXS5qb2luKCc/Jyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBwb3NpdGlvbi5sZWZ0ICsgJ3B4LCAnICsgcG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leHBsb3Npb24udHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcblxuZXhwb3J0IGNsYXNzIEluZm9zIGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBDTFM6IHN0cmluZyA9ICdpbmZvcyc7XG5cbiAgICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsIEluZm9zLkNMUyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMubGV2ZWxOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMua2lsbE5vZGUpO1xuICAgICAgICB0aGlzLnNldExldmVsKHRoaXMubGV2ZWwpO1xuICAgICAgICB0aGlzLnNldEtpbGxDb3VudCh0aGlzLmtpbGxDb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExldmVsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmxldmVsTm9kZS5pbm5lckhUTUwgPSAnTGV2ZWw6ICcgKyBsZXZlbC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRLaWxsQ291bnQoa2lsbENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5raWxsQ291bnQgPSBraWxsQ291bnQ7XG4gICAgICAgIHRoaXMua2lsbE5vZGUuaW5uZXJIVE1MID0gJ0tpbGxlZDogJyArIGtpbGxDb3VudC50b1N0cmluZygpO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZm9zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==