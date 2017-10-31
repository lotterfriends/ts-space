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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var node_1 = __webpack_require__(0);
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
/* 2 */
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
var node_1 = __webpack_require__(0);
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
/* 3 */
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
var board_1 = __webpack_require__(1);
var player_1 = __webpack_require__(5);
var enemy_1 = __webpack_require__(6);
var infos_1 = __webpack_require__(8);
var bullet_1 = __webpack_require__(2);
var keys_1 = __webpack_require__(3);
var node_1 = __webpack_require__(0);
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
/* 5 */
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
var board_1 = __webpack_require__(1);
var bullet_1 = __webpack_require__(2);
var keys_1 = __webpack_require__(3);
var node_1 = __webpack_require__(0);
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
var node_1 = __webpack_require__(0);
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
var node_1 = __webpack_require__(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg1MTc5N2FlZDFiZDAwZDU1NjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGxvc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBR0ksY0FBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJ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LENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDdEMsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTSw0QkFBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUF4QmEsU0FBRyxHQUFXLE9BQU8sQ0FBQztJQTJCeEMsWUFBQztDQUFBLENBNUIwQixXQUFJLEdBNEI5QjtBQTVCWSxzQkFBSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ODUxNzk3YWVkMWJkMDBkNTU2MiIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIGNsczogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb2RlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbHMoY2xzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZS50cyIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBleHRlbmRzIE5vZGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gODAwO1xuICAgIHB1YmxpYyBzdGF0aWMgSEVJR0hUOiBudW1iZXIgPSA0NDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdib2FyZCcpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCb2FyZC5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBCb2FyZC5IRUlHSFQgKyAncHgnO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9hcmQudHMiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBXSURUSDogbnVtYmVyID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gMjtcblxuICAgIHByaXZhdGUgZGVhZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogUG9zaXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdidWxsZXQnKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBCdWxsZXQuV0lEVEggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuaGVpZ2h0ID0gQnVsbGV0LkhFSUdIVCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdidWxsZXQnKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMucG9zaXRpb24ubGVmdCArICdweCwgJyArIHRoaXMucG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wIC0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIHRoaXMucG9zaXRpb24ubGVmdCArICdweCwgJyArIHRoaXMucG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1bGxldC50cyIsImV4cG9ydCBlbnVtIEtleXMge1xuICBUQUIgPSA5LFxuICBFTlRFUiA9IDEzLFxuICBTSElGVCA9IDE2LFxuICBDVFJMID0gMTcsXG4gIEFMVCA9IDE4LFxuICBFU0MgPSAyNyxcbiAgUE9TMSA9IDM2LFxuICBMRUZUID0gMzcsXG4gIFVQID0gMzgsXG4gIFJJR0hUID0gMzksXG4gIERPV04gPSA0MCxcbiAgU1BBQ0UgPSAzMixcbiAgUEFHRV9VUCA9IDMzLFxuICBQQUdFX0RPV04gPSAzNCxcbiAgUCA9IDgwXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2tleXMudHMiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15JztcbmltcG9ydCB7IEluZm9zIH0gZnJvbSAnLi9pbmZvcyc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBOb2RlIHtcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xuICAgIHByaXZhdGUgaW5mb3M6IEluZm9zO1xuICAgIHByaXZhdGUgZW5lbXlzOiBBcnJheTxFbmVteT4gPSBbXTtcbiAgICBwcml2YXRlIGJ1bGxldHM6IEFycmF5PEJ1bGxldD4gPSBbXTtcblxuICAgIHByaXZhdGUgc3Bhd25SYXRlOiBudW1iZXIgPSA0MDA7XG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRlc3Ryb3llZENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBEYXRlO1xuICAgIHByaXZhdGUgbGV2ZWxEdXJhdGlvbkluU2VjOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIGxpdmV0aW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ2dhbWUnKTtcbiAgICAgICAgdGhpcy5ib290c3RyYXAoKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm9vdHN0cmFwKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5pbmZvcyA9IG5ldyBJbmZvcyh0aGlzLmxldmVsKTtcblxuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0odGhpcy5wbGF5ZXIuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuaW5mb3MuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuYm9hcmQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdEtleWJvYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRLZXlib2FyZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5wbGF5ZXIuZmlyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuYWRkSXRlbShidWxsZXQuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMucHVzaChidWxsZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLZXlzLlApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRJdGVtKG5ldyBOb2RlKCdkaXYnLCAncGF1c2VUZXh0JywgJ1BBVVNFJykuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnJlbW92ZUl0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlVGV4dCcpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSBNYXRoLnJhbmRvbSgpICogKEJvYXJkLldJRFRIIC0gRW5lbXkuV0lEVEgpO1xuICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkobGVmdCk7XG4gICAgICAgIHRoaXMuZW5lbXlzLnB1c2goZW5lbXkpO1xuICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0oZW5lbXkuZ2V0Tm9kZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdhbWVPdmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hZGRDbHMoJ2dhbWVPdmVyJyk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFkZEl0ZW0obmV3IE5vZGUoJ2RpdicsICdnYW1lT3ZlclRleHQnLCAnR0FNRSBPVkVSIScpLmdldE5vZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJ1bigpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIgJiYgIXRoaXMucGF1c2UpIHtcblxuICAgICAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHBhdXNlIHRpbWVcbiAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwID4gdGhpcy5sZXZlbCAqIHRoaXMubGV2ZWxEdXJhdGlvbkluU2VjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3Muc2V0TGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwYXduUmF0ZSkgPD0gdGhpcy5sZXZlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb2xsaXNpb25cbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbXlzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVsbGV0IG9mIHRoaXMuYnVsbGV0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDEgPSB7IHg6IGVuZW15LmdldFBvc2l0aW9uKCkubGVmdCwgeTogZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AsIHdpZHRoOiBFbmVteS5XSURUSCwgaGVpZ2h0OiBFbmVteS5IRUlHSFQgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdDIgPSB7IHg6IGJ1bGxldC5nZXRQb3NpdGlvbigpLmxlZnQsIHk6IGJ1bGxldC5nZXRQb3NpdGlvbigpLnRvcCwgd2lkdGg6IEJ1bGxldC5XSURUSCwgaGVpZ2h0OiBCdWxsZXQuSEVJR0hUIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdDEueCA8IHJlY3QyLnggKyByZWN0Mi53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueCArIHJlY3QxLndpZHRoID4gcmVjdDIueCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdDEueSA8IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QxLmhlaWdodCArIHJlY3QxLnkgPiByZWN0Mi55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKHRoaXMuYnVsbGV0cy5pbmRleE9mKGJ1bGxldCksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteXMuc3BsaWNlKHRoaXMuZW5lbXlzLmluZGV4T2YoZW5lbXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5kZXN0cm95KHRoaXMuYm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvcy5zZXRLaWxsQ291bnQodGhpcy5kZXN0cm95ZWRDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRoZSBlbmVteXNcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuZ2V0UG9zaXRpb24oKS50b3AgKyBFbmVteS5IRUlHSFQgPiBCb2FyZC5IRUlHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15cy5zcGxpY2UodGhpcy5lbmVteXMuaW5kZXhPZihlbmVteSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgYnVsbGV0cyBcbiAgICAgICAgICAgIGZvciAobGV0IGJ1bGxldCBvZiB0aGlzLmJ1bGxldHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0LmdldFBvc2l0aW9uKCkudG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZSh0aGlzLmJ1bGxldHMuaW5kZXhPZihidWxsZXQpLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWxsZXQubW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBHYW1lKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS50cyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi9rZXlzJztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUga2V5TGVmdEFycm93RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5UmlnaHRBcnJvd0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGl2JywgJ3BsYXllcicpO1xuICAgICAgICB0aGlzLmJvb3RzdHJhcCgpO1xuICAgICAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKChCb2FyZC5XSURUSCAvIDIpIC0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpKSArICdweCknO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEtleWJvYXJkTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5SSUdIVCkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5UmlnaHRBcnJvd0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gS2V5cy5MRUZUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlMZWZ0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEtleXMuUklHSFQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVJpZ2h0QXJyb3dEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TGVmdCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbGVmdE1hdGNoID0gdGhpcy5ub2RlLnN0eWxlLnRyYW5zZm9ybS5tYXRjaCgvLT9cXGQrLyk7XG4gICAgICAgIGlmIChsZWZ0TWF0Y2gubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobGVmdE1hdGNoWzBdLCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuICAgICAgICBpZiAobGVmdCAtIHRoaXMuc3BlZWQgPD0gKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpICogLTEpIHtcbiAgICAgICAgICAgIGxlZnQgPSAodGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikgKiAtMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0IC0gdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLmdldExlZnQoKTtcbiAgICAgICAgaWYgKGxlZnQgKyB0aGlzLnNwZWVkID49IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMikge1xuICAgICAgICAgICAgbGVmdCA9IEJvYXJkLldJRFRIIC0gdGhpcy5ub2RlLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIChsZWZ0ICsgdGhpcy5zcGVlZCkgKyAncHgpJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlyZSgpOiBCdWxsZXQge1xuICAgICAgICBsZXQgcG9zOiBQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuZ2V0TGVmdCgpICsgKHRoaXMubm9kZS5vZmZzZXRXaWR0aCAvIDIpLFxuICAgICAgICAgICAgdG9wOiBCb2FyZC5IRUlHSFQgLSB0aGlzLm5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgQnVsbGV0KHBvcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmtleUxlZnRBcnJvd0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlSaWdodEFycm93RG93bikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXllci50cyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEV4cGxvc2lvbiB9IGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFdJRFRIOiBudW1iZXIgPSA1NDtcbiAgICBwdWJsaWMgc3RhdGljIEhFSUdIVDogbnVtYmVyID0gNTU7XG5cbiAgICBwcml2YXRlIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgdG9wOiBudW1iZXIgPSBFbmVteS5IRUlHSFQgKiAtMTtcbiAgICBwcml2YXRlIGxlZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgc3BlZWQ6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsICdlbmVteScpO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMuYm9vdHN0cmFwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBib290c3RyYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUud2lkdGggPSBFbmVteS5XSURUSCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5oZWlnaHQgPSBFbmVteS5IRUlHSFQgKyAncHgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZWFkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCArIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyB0aGlzLmxlZnQgKyAncHgsICcgKyB0aGlzLnRvcCArICdweCknO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShib2FyZD86IEJvYXJkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIGlmIChib2FyZCkge1xuICAgICAgICAgICAgbGV0IGV4ID0gbmV3IEV4cGxvc2lvbih0aGlzLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgYm9hcmQuYWRkSXRlbShleC5nZXROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5lbXkudHMiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBFeHBsb3Npb24ge1xuICAgIHByaXZhdGUgaW1hZ2VQYXRoOiBTdHJpbmcgPSAnLi9pbWcvZXhwbG9zaW9uLmdpZic7XG4gICAgcHJpdmF0ZSBub2RlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5ib290c3RyYXAocG9zaXRpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvb3RzdHJhcChwb3NpdGlvbjogUG9zaXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2V4cGxvc2lvbicpO1xuICAgICAgICB0aGlzLm5vZGUuc3JjID0gW3RoaXMuaW1hZ2VQYXRoLCBEYXRlLm5vdygpXS5qb2luKCc/Jyk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBwb3NpdGlvbi5sZWZ0ICsgJ3B4LCAnICsgcG9zaXRpb24udG9wICsgJ3B4KSc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leHBsb3Npb24udHMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9ub2RlJztcblxuZXhwb3J0IGNsYXNzIEluZm9zIGV4dGVuZHMgTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBDTFM6IHN0cmluZyA9ICdpbmZvcyc7XG5cbiAgICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxOb2RlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcml2YXRlIGtpbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoJ2RpdicsIEluZm9zLkNMUyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMubGV2ZWxOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMua2lsbE5vZGUpO1xuICAgICAgICB0aGlzLnNldExldmVsKHRoaXMubGV2ZWwpO1xuICAgICAgICB0aGlzLnNldEtpbGxDb3VudCh0aGlzLmtpbGxDb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExldmVsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmxldmVsTm9kZS5pbm5lckhUTUwgPSAnTGV2ZWw6ICcgKyBsZXZlbC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRLaWxsQ291bnQoa2lsbENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5raWxsQ291bnQgPSBraWxsQ291bnQ7XG4gICAgICAgIHRoaXMua2lsbE5vZGUuaW5uZXJIVE1MID0gJ0tpbGxlZDogJyArIGtpbGxDb3VudC50b1N0cmluZygpO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZm9zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==