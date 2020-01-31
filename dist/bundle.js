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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Board = /** @class */ (function (_super) {\n    __extends(Board, _super);\n    function Board() {\n        var _this = _super.call(this, 'div', 'board') || this;\n        _this.bootstrap();\n        return _this;\n    }\n    Board.prototype.bootstrap = function () {\n        this.node.style.width = Board.WIDTH + 'px';\n        this.node.style.height = Board.HEIGHT + 'px';\n    };\n    Board.WIDTH = 800;\n    Board.HEIGHT = 440;\n    return Board;\n}(_node__WEBPACK_IMPORTED_MODULE_0__[\"Node\"]));\n\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/bullet.ts":
/*!***********************!*\
  !*** ./src/bullet.ts ***!
  \***********************/
/*! exports provided: Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bullet\", function() { return Bullet; });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Bullet = /** @class */ (function (_super) {\n    __extends(Bullet, _super);\n    function Bullet(position) {\n        var _this = _super.call(this, 'div', 'bullet') || this;\n        _this.dead = false;\n        _this.speed = 5;\n        _this.position = position;\n        _this.bootstrap();\n        return _this;\n    }\n    Bullet.prototype.bootstrap = function () {\n        this.node.style.width = Bullet.WIDTH + 'px';\n        this.node.style.height = Bullet.HEIGHT + 'px';\n        this.node.classList.add('bullet');\n        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';\n    };\n    Bullet.prototype.move = function () {\n        if (this.dead) {\n            return;\n        }\n        this.position.top = this.position.top - this.speed;\n        this.node.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)';\n    };\n    Bullet.prototype.getPosition = function () {\n        return this.position;\n    };\n    Bullet.prototype.destroy = function () {\n        this.dead = true;\n        _super.prototype.destroy.call(this);\n    };\n    Bullet.WIDTH = 2;\n    Bullet.HEIGHT = 2;\n    return Bullet;\n}(_node__WEBPACK_IMPORTED_MODULE_0__[\"Node\"]));\n\n\n\n//# sourceURL=webpack:///./src/bullet.ts?");

/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\n/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explosion */ \"./src/explosion.ts\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Enemy = /** @class */ (function (_super) {\n    __extends(Enemy, _super);\n    function Enemy(left, speed) {\n        if (speed === void 0) { speed = 1; }\n        var _this = _super.call(this, 'div', 'enemy') || this;\n        _this.dead = false;\n        _this.speed = 1;\n        _this.top = Enemy.HEIGHT * -1;\n        _this.speed = speed;\n        _this.left = left;\n        _this.bootstrap();\n        return _this;\n    }\n    Enemy.prototype.bootstrap = function () {\n        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';\n        this.node.style.width = Enemy.WIDTH + 'px';\n        this.node.style.height = Enemy.HEIGHT + 'px';\n    };\n    Enemy.prototype.move = function () {\n        if (this.dead) {\n            return;\n        }\n        this.top = this.top + this.speed;\n        this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';\n    };\n    Enemy.prototype.getPosition = function () {\n        return {\n            left: this.left,\n            top: this.top\n        };\n    };\n    Enemy.prototype.destroy = function (board) {\n        this.dead = true;\n        if (board) {\n            var ex = new _explosion__WEBPACK_IMPORTED_MODULE_0__[\"Explosion\"](this.getPosition());\n            board.addItem(ex.getNode());\n        }\n        _super.prototype.destroy.call(this);\n    };\n    Enemy.WIDTH = 54;\n    Enemy.HEIGHT = 55;\n    return Enemy;\n}(_node__WEBPACK_IMPORTED_MODULE_1__[\"Node\"]));\n\n\n\n//# sourceURL=webpack:///./src/enemy.ts?");

/***/ }),

/***/ "./src/explosion.ts":
/*!**************************!*\
  !*** ./src/explosion.ts ***!
  \**************************/
/*! exports provided: Explosion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Explosion\", function() { return Explosion; });\nvar Explosion = /** @class */ (function () {\n    function Explosion(position) {\n        var _this = this;\n        this.imagePath = './img/explosion.gif';\n        this.node = document.createElement('img');\n        this.bootstrap(position);\n        setTimeout(function () {\n            _this.destroy();\n        }, 1000);\n    }\n    Explosion.prototype.bootstrap = function (position) {\n        this.node.classList.add('explosion');\n        this.node.src = [this.imagePath, Date.now()].join('?');\n        this.node.style.transform = 'translate(' + position.left + 'px, ' + position.top + 'px)';\n    };\n    Explosion.prototype.getNode = function () {\n        return this.node;\n    };\n    Explosion.prototype.destroy = function () {\n        this.node.remove();\n    };\n    return Explosion;\n}());\n\n\n\n//# sourceURL=webpack:///./src/explosion.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.ts\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.ts\");\n/* harmony import */ var _infos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infos */ \"./src/infos.ts\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.ts\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keys */ \"./src/keys.ts\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\n\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game() {\n        var _this = _super.call(this, 'div', 'game') || this;\n        _this.enemys = [];\n        _this.bullets = [];\n        _this.spawnRate = 400;\n        _this.level = 1;\n        _this.destroyedCount = 0;\n        _this.levelDurationInSec = 10;\n        _this.gameOver = false;\n        _this.pause = false;\n        _this.bootstrap();\n        _this.start();\n        return _this;\n    }\n    Game.prototype.start = function () {\n        this.run();\n        this.spawnEnemy();\n    };\n    Game.prototype.bootstrap = function () {\n        document.body.appendChild(this.node);\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"]();\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"]();\n        this.infos = new _infos__WEBPACK_IMPORTED_MODULE_3__[\"Infos\"](this.level);\n        this.board.addItem(this.player.getNode());\n        this.addItem(this.infos.getNode());\n        this.addItem(this.board.getNode());\n        this.startTime = new Date();\n        this.initKeyboardListener();\n    };\n    Game.prototype.initKeyboardListener = function () {\n        var _this = this;\n        document.addEventListener('keydown', function (event) {\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_5__[\"Keys\"].SPACE) {\n                var bullet = _this.player.fire();\n                _this.board.addItem(bullet.getNode());\n                _this.bullets.push(bullet);\n            }\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_5__[\"Keys\"].P) {\n                _this.pause = !_this.pause;\n                if (_this.pause) {\n                    _this.board.addItem(new _node__WEBPACK_IMPORTED_MODULE_6__[\"Node\"]('div', 'pauseText', 'PAUSE').getNode());\n                }\n                else {\n                    _this.board.removeItem(document.querySelector('.pauseText'));\n                }\n            }\n        });\n    };\n    Game.prototype.spawnEnemy = function () {\n        var left = Math.random() * (_board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].WIDTH - _enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"].WIDTH);\n        var enemy = new _enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"](left);\n        this.enemys.push(enemy);\n        this.board.addItem(enemy.getNode());\n    };\n    Game.prototype.setGameOver = function () {\n        if (!this.gameOver) {\n            this.gameOver = true;\n            this.board.addCls('gameOver');\n            this.board.addItem(new _node__WEBPACK_IMPORTED_MODULE_6__[\"Node\"]('div', 'gameOverText', 'GAME OVER!').getNode());\n        }\n    };\n    Game.prototype.run = function () {\n        var _this = this;\n        if (!this.gameOver && !this.pause) {\n            // todo: remove pause time\n            if ((Date.now() - this.startTime.getTime()) / 1000 > this.level * this.levelDurationInSec) {\n                this.level++;\n                this.infos.setLevel(this.level);\n            }\n            if (Math.round(Math.random() * this.spawnRate) <= this.level) {\n                this.spawnEnemy();\n            }\n            // collision\n            for (var _i = 0, _a = this.enemys; _i < _a.length; _i++) {\n                var enemy = _a[_i];\n                for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {\n                    var bullet = _c[_b];\n                    var rect1 = { x: enemy.getPosition().left, y: enemy.getPosition().top, width: _enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"].WIDTH, height: _enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"].HEIGHT };\n                    var rect2 = { x: bullet.getPosition().left, y: bullet.getPosition().top, width: _bullet__WEBPACK_IMPORTED_MODULE_4__[\"Bullet\"].WIDTH, height: _bullet__WEBPACK_IMPORTED_MODULE_4__[\"Bullet\"].HEIGHT };\n                    if (rect1.x < rect2.x + rect2.width &&\n                        rect1.x + rect1.width > rect2.x &&\n                        rect1.y < rect2.y + rect2.height &&\n                        rect1.height + rect1.y > rect2.y) {\n                        this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                        this.enemys.splice(this.enemys.indexOf(enemy), 1);\n                        bullet.destroy();\n                        enemy.destroy(this.board);\n                        this.destroyedCount++;\n                        this.infos.setKillCount(this.destroyedCount);\n                    }\n                }\n                // move the enemys\n                if (enemy.getPosition().top + _enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"].HEIGHT > _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].HEIGHT) {\n                    enemy.destroy();\n                    this.enemys.splice(this.enemys.indexOf(enemy), 1);\n                    this.setGameOver();\n                }\n                else {\n                    enemy.move();\n                }\n            }\n            // move the bullets \n            for (var _d = 0, _e = this.bullets; _d < _e.length; _d++) {\n                var bullet = _e[_d];\n                if (bullet.getPosition().top <= 0) {\n                    bullet.destroy();\n                    this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                }\n                else {\n                    bullet.move();\n                }\n            }\n            this.player.move();\n        }\n        window.requestAnimationFrame(function () {\n            _this.run();\n        });\n    };\n    return Game;\n}(_node__WEBPACK_IMPORTED_MODULE_6__[\"Node\"]));\nnew Game();\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/infos.ts":
/*!**********************!*\
  !*** ./src/infos.ts ***!
  \**********************/
/*! exports provided: Infos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Infos\", function() { return Infos; });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Infos = /** @class */ (function (_super) {\n    __extends(Infos, _super);\n    function Infos(level) {\n        var _this = _super.call(this, 'div', Infos.CLS) || this;\n        _this.level = 0;\n        _this.levelNode = document.createElement('span');\n        _this.killNode = document.createElement('span');\n        _this.killCount = 0;\n        _this.level = level;\n        _this.addItem(_this.levelNode);\n        _this.addItem(_this.killNode);\n        _this.setLevel(_this.level);\n        _this.setKillCount(_this.killCount);\n        return _this;\n    }\n    Infos.prototype.setLevel = function (level) {\n        this.level = level;\n        this.levelNode.innerHTML = 'Level: ' + level.toString();\n    };\n    Infos.prototype.setKillCount = function (killCount) {\n        this.killCount = killCount;\n        this.killNode.innerHTML = 'Killed: ' + killCount.toString();\n    };\n    Infos.CLS = 'infos';\n    return Infos;\n}(_node__WEBPACK_IMPORTED_MODULE_0__[\"Node\"]));\n\n\n\n//# sourceURL=webpack:///./src/infos.ts?");

/***/ }),

/***/ "./src/keys.ts":
/*!*********************!*\
  !*** ./src/keys.ts ***!
  \*********************/
/*! exports provided: Keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Keys\", function() { return Keys; });\nvar Keys;\n(function (Keys) {\n    Keys[Keys[\"TAB\"] = 9] = \"TAB\";\n    Keys[Keys[\"ENTER\"] = 13] = \"ENTER\";\n    Keys[Keys[\"SHIFT\"] = 16] = \"SHIFT\";\n    Keys[Keys[\"CTRL\"] = 17] = \"CTRL\";\n    Keys[Keys[\"ALT\"] = 18] = \"ALT\";\n    Keys[Keys[\"ESC\"] = 27] = \"ESC\";\n    Keys[Keys[\"POS1\"] = 36] = \"POS1\";\n    Keys[Keys[\"LEFT\"] = 37] = \"LEFT\";\n    Keys[Keys[\"UP\"] = 38] = \"UP\";\n    Keys[Keys[\"RIGHT\"] = 39] = \"RIGHT\";\n    Keys[Keys[\"DOWN\"] = 40] = \"DOWN\";\n    Keys[Keys[\"SPACE\"] = 32] = \"SPACE\";\n    Keys[Keys[\"PAGE_UP\"] = 33] = \"PAGE_UP\";\n    Keys[Keys[\"PAGE_DOWN\"] = 34] = \"PAGE_DOWN\";\n    Keys[Keys[\"P\"] = 80] = \"P\";\n})(Keys || (Keys = {}));\n\n\n//# sourceURL=webpack:///./src/keys.ts?");

/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\nvar Node = /** @class */ (function () {\n    function Node(type, cls, content) {\n        this.node = document.createElement(type);\n        this.node.classList.add(cls);\n        if (content) {\n            this.node.innerHTML = content;\n        }\n    }\n    Node.prototype.getNode = function () {\n        return this.node;\n    };\n    Node.prototype.addItem = function (item) {\n        this.node.appendChild(item);\n    };\n    Node.prototype.removeItem = function (item) {\n        this.node.removeChild(item);\n    };\n    Node.prototype.addCls = function (cls) {\n        this.node.classList.add(cls);\n    };\n    Node.prototype.destroy = function () {\n        this.node.remove();\n    };\n    return Node;\n}());\n\n\n\n//# sourceURL=webpack:///./src/node.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.ts\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ \"./src/keys.ts\");\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node */ \"./src/node.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        var _this = _super.call(this, 'div', 'player') || this;\n        _this.speed = 5;\n        _this.keyLeftArrowDown = false;\n        _this.keyRightArrowDown = false;\n        _this.bootstrap();\n        _this.initKeyboardListener();\n        return _this;\n    }\n    Player.prototype.bootstrap = function () {\n        this.node.style.transform = 'translateX(' + ((_board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].WIDTH / 2) - (this.node.offsetWidth / 2)) + 'px)';\n    };\n    Player.prototype.initKeyboardListener = function () {\n        var _this = this;\n        document.addEventListener('keydown', function (event) {\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_2__[\"Keys\"].LEFT) {\n                _this.keyLeftArrowDown = true;\n            }\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_2__[\"Keys\"].RIGHT) {\n                _this.keyRightArrowDown = true;\n            }\n        });\n        document.addEventListener('keyup', function (event) {\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_2__[\"Keys\"].LEFT) {\n                _this.keyLeftArrowDown = false;\n            }\n            if (event.which === _keys__WEBPACK_IMPORTED_MODULE_2__[\"Keys\"].RIGHT) {\n                _this.keyRightArrowDown = false;\n            }\n        });\n    };\n    Player.prototype.getLeft = function () {\n        var leftMatch = this.node.style.transform.match(/-?\\d+/);\n        if (leftMatch.length) {\n            return parseInt(leftMatch[0], 10);\n        }\n    };\n    Player.prototype.moveLeft = function () {\n        var left = this.getLeft();\n        if (left - this.speed <= (this.node.offsetWidth / 2) * -1) {\n            left = (this.node.offsetWidth / 2) * -1;\n        }\n        this.node.style.transform = 'translateX(' + (left - this.speed) + 'px)';\n    };\n    Player.prototype.moveRight = function () {\n        var left = this.getLeft();\n        if (left + this.speed >= _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].WIDTH - this.node.offsetWidth / 2) {\n            left = _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].WIDTH - this.node.offsetWidth / 2;\n        }\n        this.node.style.transform = 'translateX(' + (left + this.speed) + 'px)';\n    };\n    Player.prototype.fire = function () {\n        var pos = {\n            left: this.getLeft() + (this.node.offsetWidth / 2),\n            top: _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].HEIGHT - this.node.offsetHeight\n        };\n        return new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"Bullet\"](pos);\n    };\n    Player.prototype.move = function () {\n        if (this.keyLeftArrowDown) {\n            this.moveLeft();\n        }\n        if (this.keyRightArrowDown) {\n            this.moveRight();\n        }\n    };\n    return Player;\n}(_node__WEBPACK_IMPORTED_MODULE_3__[\"Node\"]));\n\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ })

/******/ });