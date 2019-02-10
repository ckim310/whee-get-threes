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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n\n\nclass Board {\n  constructor(ctx) {\n    this.grid = [\n      [0,0,0,0],\n      [0,0,0,0],\n      [0,0,0,0],\n      [0,0,0,0]\n    ];\n    this.ctx = ctx;\n  }\n\n\n  addNumber() {\n    const empty = [];\n    for (let i = 0; i < this.grid.length; i++) {\n      const row = this.grid[i];\n      for (let j = 0; j < row.length; j++) {\n        const tile = row[j];\n        if (tile === 0) {\n          empty.push({\n            x: i,\n            y: j\n          });\n        }\n      }\n    }\n\n    if (empty.length > 0) {\n      let tileIdx = empty[Math.floor(Math.random() * empty.length)];\n      let r = Math.random();\n      let val;\n      if ( r > 0.5 ) {\n        val = 1;\n      } else {\n        val = 3;\n      }\n      this.grid[tileIdx.x][tileIdx.y] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](val, tileIdx.x, tileIdx.y);\n    }\n  }\n\n  move(row, rowIdx) {\n    const arr = row.map(el => {\n      return el;\n    });\n    \n    let newArr = [];\n    if (arr[0] === 0 || arr[0] === 0 && arr[1] === 0) {\n      newArr = newArr.concat(arr.slice(1));\n      newArr.push(0);\n    } else if (arr[1] === 0 || arr[1] === 0 && arr[2] === 0) {\n      newArr = newArr.concat(arr[0]).concat(arr.slice(2));\n      newArr.push(0);\n    } else if (arr[2] === 0) {\n      newArr = newArr.concat(arr[0]).concat(arr[1]).concat(arr.slice(3));\n      newArr.push(0);\n    } else {\n      newArr = arr;\n    }\n    this.grid[rowIdx] = newArr;\n  }\n\n  merge(row, rowIdx) {\n    for (let i = 3; i > 0; i--) {\n      if (row[i] !== 0 && row[i - 1] !== 0) {\n        if (row[i].value === row[i-1].value && (row[i].value !== 2)) {\n          row[i - 1] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](row[i].value * 2, rowIdx, i, false, true);\n          row[i] = 0;\n          break;\n        } else if ((row[i].value === 1 && row[i - 1].value === 2) || (row[i].value === 2 && row[i - 1].value === 1)) {\n          row[i - 1] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, rowIdx, i, false, true);\n          row[i] = 0;\n          break;\n        } else {\n          continue;\n        }\n      }\n    }\n    this.grid[rowIdx] = row;\n  }\n\n  rotate() {\n    let newGrid = [\n      [0, 0, 0, 0],\n      [0, 0, 0, 0],\n      [0, 0, 0, 0],\n      [0, 0, 0, 0]\n    ];\n\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n        newGrid[i][j] = this.grid[j][i];\n      }\n    }\n\n    return newGrid;\n  }\n\n  reverse() {\n    for (let i = 0; i < this.grid.length; i++) {\n      this.grid[i].reverse();\n    }\n  }\n\n  draw() {\n    let w = 100;\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n        this.ctx.rect(i * w, j * w, w, w);\n        this.ctx.stroke(); \n\n        let tileVal = this.grid[i][j].value || 0;\n        if (this.grid[i][j] !== 0) {\n          this.ctx.font = \"bold 50px Courier New\";\n          this.ctx.textAlign = \"center\";\n          this.ctx.fillStyle= \"black\";\n          this.ctx.fillText(tileVal, i * w + w/2, j * w + w/2 + 15);\n        }\n      }\n    }\n  }\n\n  redraw() {\n    let w = 100;\n    for (let i = 0; i < this.grid.length; i++) {\n      for (let j = 0; j < this.grid.length; j++) {\n        this.ctx.rect(i * w, j * w, w, w);\n        this.ctx.stroke();\n\n        this.ctx.clearRect(i * w, j * w, w, w);\n      }\n    }\n\n    this.draw();    \n  }\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Game {\n  constructor(ctx){\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    this.ctx = ctx;\n\n    this.down = false;\n\n    this.keyPressed = this.keyPressed.bind(this);\n    this.addKey = this.addKey.bind(this);\n    this.removeKey = this.removeKey.bind(this);\n    this.handleGame = this.handleGame.bind(this);\n  }\n\n  setup(){\n    for (let i = 0; i < this.board.grid.length; i++) {\n      this.board.addNumber();\n    }\n\n    this.board.draw();\n  }\n\n  keyPressed(e) {\n\n    let direction;\n    switch (e.key) {\n      case \"ArrowUp\":\n        direction = \"up\";\n        break;\n    \n      case \"ArrowDown\":\n        this.board.reverse();\n        direction = \"down\";\n        break;\n    \n      case \"ArrowLeft\":\n        this.board.grid = this.board.rotate();\n        direction = \"left\";\n\n        break;\n    \n      case \"ArrowRight\":\n        this.board.grid = this.board.rotate();\n        this.board.reverse();\n        direction = \"right\";\n        break;\n\n      default:\n        break;\n    }\n\n    if (direction) {\n      for (let i = 0; i < this.board.grid.length; i++) {\n        this.board.move(this.board.grid[i], i);  \n      }\n    }\n\n    if (direction === \"up\" || direction === \"left\") {\n      for (let i = 0; i < this.board.grid.length; i++) {\n        this.board.merge(this.board.grid[i], i);\n      }\n    }\n\n    if (direction === \"down\" || direction === \"right\") {\n      for (let i = 0; i < this.board.grid.length; i++) {\n        if (this.board.grid[i][0] !== 0) {\n          this.board.merge(this.board.grid[i], i);\n        }\n      }\n      this.board.reverse();\n    }\n\n    if (direction === \"right\" || direction === \"left\") {\n      this.board.grid = this.board.rotate();\n    }\n\n    if (direction) {\n      this.board.addNumber();\n      this.board.redraw();\n    }\n  }\n\n  handleGame(e) {\n    if (this.down) return;\n    e.preventDefault();\n\n    this.down = true;\n    if (this.gameOver()) {\n      this.ctx.stroke();\n      this.ctx.font = \"bold 50px Courier New\";\n      this.ctx.textAlign = \"center\";\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillText(\"Game Over\", 200, 200);\n      \n      this.removeKey();\n    } else {\n      this.keyPressed(e);\n    }\n\n    this.down = false;\n  }\n\n  addKey() {\n    window.addEventListener(\"keydown\", this.handleGame);\n  }\n\n  removeKey() {\n    window.removeEventListener(\"keydown\", this.handleGame);\n  }\n\n  play() {\n    this.addKey();\n  }\n\n  gameOver() {\n    for (let i = 0; i < this.board.grid.length; i++) {\n      for (let j = 0; j < this.board.grid.length; j++) {\n        if (this.board.grid[i][j] === 0) {\n          return false;\n        } else if (j < 3 && (this.board.grid[i][j].value === this.board.grid[i][j+1].value || this.board.rotate()[i][j].value === this.board.rotate()[i][j+1].value)) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = 400;\n  canvasEl.height = 400;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  \n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.setup();\n  // console.table(game.board.grid);\n  game.play();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\nclass Tile {\n  constructor(value, x, y, isNew = true, isMerged = false){\n    this.value = value;\n    this.x = x;\n    this.y = y;\n    this.isNew = isNew;\n    this.isMerged = isMerged;\n\n    this.previousPos = null;\n    this.mergedFrom = null;\n  }\n}\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });