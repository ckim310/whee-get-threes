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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n\n\nclass Board {\n  constructor(ctx) {\n    this.grid = [\n      [0,0,0,0],\n      [0,0,0,0],\n      [0,0,0,0],\n      [0,0,0,0]\n    ];\n    this.ctx = ctx;\n    this.draw = this.draw.bind(this);\n  }\n\n\n  addNumber() {\n    const empty = [];\n    for (let i = 0; i < this.grid.length; i++) {\n      const row = this.grid[i];\n      for (let j = 0; j < row.length; j++) {\n        const tile = row[j];\n        if (tile === 0 || tile.value === 0) {\n          this.grid[i][j] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, i, j);\n          empty.push({\n            x: i,\n            y: j\n          });\n        }\n      }\n    }\n    \n    if (empty.length > 0) {\n      let emptyIdx = Math.floor(Math.random() * empty.length);\n      let tileIdx = empty[emptyIdx];\n      empty.splice(emptyIdx, 1);\n      let r = Math.random();\n      let val;\n      if ( r > 0.5 ) {\n        val = 1;\n      } else {\n        val = 3;\n      }\n      this.grid[tileIdx.x][tileIdx.y] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val, tileIdx.x, tileIdx.y);\n    }\n  }\n\n  move(row, rowIdx) {\n    const arr = row.map(el => {\n      return el;\n    });\n    let newArr = [];\n    if (arr[0].value === 0) {\n      newArr = newArr.concat(arr.slice(1));\n      newArr.push(arr[0]);\n    } else if (arr[1].value === 0) {\n      newArr = newArr.concat(arr[0]).concat(arr.slice(2));\n      newArr.push(arr[1]);\n    } else if (arr[2].value === 0) {\n      newArr = newArr.concat(arr[0]).concat(arr[1]).concat(arr.slice(3));\n      newArr.push(arr[2]);\n    } else {\n      newArr = arr;\n    }\n    \n    this.slideTile(newArr, rowIdx);\n    // this.grid[rowIdx] = newArr;\n    // for (let i = this.grid.length - 1; i > 0; i--) {\n\n    //   // window.setTimeout(() => this.slideTile({x: rowIdx, y: i}, {x: rowIdx, y: i - 1}), 1000);\n    //   this.grid[rowIdx][i].x = rowIdx;\n    //   this.grid[rowIdx][i].y = i;\n    //   this.grid[rowIdx][i - 1].x = rowIdx;\n    //   this.grid[rowIdx][i - 1].y = i - 1;\n    // }\n\n  }\n\n  slideTile(newArr, rowIdx) {\n    this.grid[rowIdx] = newArr;\n\n    for (let i = 0; i < newArr.length; i++) {\n      const element = newArr[i];\n      this.grid[rowIdx][i].y = element.y;\n      this.grid[rowIdx][i].x = element.x;\n    }\n\n    // this.grid[toLoc.x][toLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;\n    // this.grid[toLoc.x][toLoc.y].y = toLoc.y;\n    // this.grid[fromLoc.x][fromLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;\n    // this.grid[toLoc.x][toLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;\n  }\n\n  merge(row, rowIdx) {\n    for (let i = 0; i < 3; i++) {\n      if (row[i].value === row[i+1].value && (row[i].value !== 2) && (row[i].value !== 0)) {\n        row[i] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](row[i].value * 2, rowIdx, i, false, true);\n        row[i + 1] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, rowIdx, i + 1);\n        break;\n      } else if ((row[i].value + row[i + 1].value) === 3) {\n        row[i] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, rowIdx, i, false, true);\n        row[i + 1] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, rowIdx, i + 1);\n        break;\n      } else {\n        continue;\n      }\n    }\n    this.grid[rowIdx] = row;\n  }\n\n  rotate() {\n    let newGrid = [\n      [0, 0, 0, 0],\n      [0, 0, 0, 0],\n      [0, 0, 0, 0],\n      [0, 0, 0, 0]\n    ];\n\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n        newGrid[i][j] = this.grid[j][i];\n      }\n    }\n\n    return newGrid;\n  }\n\n  reverse() {\n    for (let i = 0; i < this.grid.length; i++) {\n      this.grid[i].reverse();\n    }\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, 400, 430);\n\n    this.scoreBoard();\n    let w = 100;\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n\n        this.ctx.rect(i * w, j * w, w, w);\n\n        if (this.grid[i][j].value === 0) {\n          this.ctx.fillStyle = \"#E8EAEE\";\n          this.ctx.fillRect(i * w, j * w + 30, w, w);\n        } else if (this.grid[i][j].value === 1) {\n          this.ctx.fillStyle = \"#59D2FE\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 2) {\n          this.ctx.fillStyle = \"#44E5E7\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 3) {\n          this.ctx.fillStyle = \"#2191FB\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 6) {\n          this.ctx.fillStyle = \"#6D72C3\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 12) {\n          this.ctx.fillStyle = \"#C2AFF0\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 24) {\n          this.ctx.fillStyle = \"#AB81CD\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 48) {\n          this.ctx.fillStyle = \"#59C3C3\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 96) {\n          this.ctx.fillStyle = \"#87BFFF\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else if (this.grid[i][j].value === 192) {\n          this.ctx.fillStyle = \"#99E1D9\";\n          this.ctx.fillRect(i * w, j * w +30, w, w);\n        } else {\n          this.ctx.fillStyle = \"#4056F4\";\n          this.ctx.fillRect(i * w, j * w +30, w, w); \n        }\n\n        let tileVal = this.grid[i][j].value || 0;\n        if (this.grid[i][j].value !== 0) {\n          this.ctx.font = \"bold 50px Courier New\";\n          this.ctx.textAlign = \"center\";\n          this.ctx.fillStyle= \"white\";\n          this.ctx.fillText(tileVal, i * w + w/2, j * w + w/2 + 45);\n        }\n      }\n    }\n  }\n\n  scoreBoard() {\n    let score = 0;\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n        if (this.grid[i][j] !== 0) {\n          if (this.grid[i][j].value % 3 === 0) {\n            score += this.grid[i][j].value;\n          }\n        }\n      }\n    }\n    this.ctx.font = \"bold 16px Courier New\";\n    this.ctx.textAlign = \"center\";\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillText(\"Score:\" + score, 55, 20);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Game {\n  constructor(ctx){\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.ctx = ctx;\n\n    this.down = false;\n    this.playing = true;\n\n    this.keyPressed = this.keyPressed.bind(this);\n    this.addKey = this.addKey.bind(this);\n    this.removeKey = this.removeKey.bind(this);\n    this.handleGame = this.handleGame.bind(this);\n    this.setup = this.setup.bind(this);\n    this.restart = this.restart.bind(this);\n  }\n\n  setup(){\n    for (let i = 0; i < this.board.grid.length; i++) {\n      this.board.addNumber();\n    }\n    this.board.draw();\n  }\n\n  keyPressed(e) {\n\n    let direction;\n    switch (e.key) {\n      case \"ArrowUp\":\n        direction = \"up\";\n        break;\n    \n      case \"ArrowDown\":\n        this.board.reverse();\n        direction = \"down\";\n        break;\n    \n      case \"ArrowLeft\":\n        this.board.grid = this.board.rotate();\n        direction = \"left\";\n\n        break;\n    \n      case \"ArrowRight\":\n        this.board.grid = this.board.rotate();\n        this.board.reverse();\n        direction = \"right\";\n        break;\n\n      case \" \":\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n        this.setup();\n        break;\n    }\n    \n    if (direction) {\n      for (let i = 0; i < this.board.grid.length; i++) {\n        if (this.board.grid[i][0].value !== 0) {\n          this.board.merge(this.board.grid[i], i);\n        }\n      }\n    }\n    \n    if (direction) {\n      for (let i = 0; i < this.board.grid.length; i++) {\n        this.board.move(this.board.grid[i], i);\n      }\n      if (direction === \"down\" || direction === \"right\") {\n        this.board.reverse();\n      }\n    }\n\n    if (direction === \"right\" || direction === \"left\") {\n      this.board.grid = this.board.rotate();\n    }\n\n\n    if (direction) {\n      this.board.addNumber();\n    }\n  }\n\n  handleGame(e) {\n    if (this.down) return;\n\n    if(this.playing) {\n      this.board.draw();\n    }\n\n    this.down = true;\n    if (this.gameOver()) {\n      this.playing = false;\n      const finalScore = this.countScore();\n\n      this.ctx.fillStyle = \"rgba(255, 255, 255, 0.5)\";\n      this.ctx.fillRect(0, 30, 400, 430);\n\n      this.ctx.font = \"bold 60px Courier New\";\n      this.ctx.textAlign = \"center\";\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillText(\"Game Over\", 200, 150);\n      this.ctx.fillText(\"Score:\" + finalScore, 200, 250);\n      this.ctx.font = \"bold 20px Courier New\";\n      this.ctx.fillStyle = \"black\";\n      this.ctx.fillText(\"Press spacebar to restart\", 200, 330);\n      \n      this.removeKey();\n      \n      window.addEventListener(\"keydown\", this.restart);\n      return;\n    } else {\n      this.keyPressed(e);\n    }\n\n    this.down = false;\n    \n    window.requestAnimationFrame(this.handleGame);\n  }\n\n  addKey() {\n    window.addEventListener(\"keydown\", this.handleGame);\n  }\n\n  removeKey() {\n    window.removeEventListener(\"keydown\", this.handleGame);\n  }\n\n  play() {\n    this.addKey();\n    window.removeEventListener(\"keydown\", this.restart);\n  }\n\n  restart(e) {\n    let restart;\n    switch (e.key) {\n      case \" \":\n        restart = true;\n        this.playing = true;\n        this.down = false;\n        break;\n      default:\n        restart = false;\n        break;\n    }\n\n    if (restart) {\n      this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n      this.setup();\n      this.play();\n    }\n  }\n\n  countScore() {\n    let score = 0;\n    for (let i = 0; i < this.board.grid.length; i++) {\n      for (let j = 0; j < this.board.grid.length; j++) {\n        if (this.board.grid[i][j].value % 3 === 0) {\n          score += this.board.grid[i][j].value;\n        }\n      }\n    }\n    return score;\n\n  }\n\n  gameOver() {\n    for (let i = 0; i < this.board.grid.length; i++) {\n      for (let j = 0; j < this.board.grid.length; j++) {\n        if (this.board.grid[i][j].value === 0) {\n          return false;\n        } else if (j < 3 &&\n          (((this.board.grid[i][j].value !== 2) && this.board.grid[i][j].value === this.board.grid[i][j + 1].value) || ((this.board.rotate()[i][j].value !== 2) && this.board.rotate()[i][j].value === this.board.rotate()[i][j+1].value))) {\n          return false;\n        } else if (j < 3 &&\n          ((this.board.grid[i][j].value + this.board.grid[i][j+1].value) === 3 || (this.board.rotate()[i][j].value + this.board.rotate()[i][j+1].value) === 3)) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = 400;\n  canvasEl.height = 430;\n\n  const ctx = canvasEl.getContext(\"2d\");\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.setup();\n  game.play();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\nclass Tile {\n  constructor(value, x, y, isNew = true, isMerged = false){\n    this.value = value;\n    this.x = x;\n    this.y = y;\n    this.isNew = isNew;\n    this.isMerged = isMerged;\n  }\n}\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });