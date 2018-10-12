/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Num = __webpack_require__(3);

	var _Add = __webpack_require__(4);

	var _Mul = __webpack_require__(5);

	var _Machine = __webpack_require__(6);

	// randomly using ES7 object rest spread because it currently raises
	// an error in all browsers, but can be transpiled by Babel
	var messageBuffer = '';

	var stepCallback = function stepCallback(message) {
	    messageBuffer += message + '<br/>';
	    document.querySelector('#output').innerHTML = messageBuffer;
	};

	var nn = new _Num.Num(50);
	var n1 = new _Mul.Mul(new _Add.Add(new _Num.Num(3), new _Num.Num(5)), new _Mul.Mul(new _Num.Num(12), new _Add.Add(new _Num.Num(33), new _Num.Num(67))));
	document.getElementById('editor').innerHTML = n1;
	var mm = new _Machine.Machine(n1);
	mm.run(stepCallback);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Num = exports.Num = function () {
	    function Num(num) {
	        _classCallCheck(this, Num);

	        this.num = num || 0;
	    }

	    _createClass(Num, [{
	        key: "toString",
	        value: function toString() {
	            return "" + this.num;
	        }
	    }, {
	        key: "val",
	        get: function get() {
	            return this.num;
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return false;
	        }
	    }]);

	    return Num;
	}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Add = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Num = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Add = exports.Add = function () {
	    function Add(left, right) {
	        _classCallCheck(this, Add);

	        this.left = left;
	        this.right = right;
	    }

	    _createClass(Add, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.left + ' + ' + this.right + ')';
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce() {
	            if (this.left.isReducible) {
	                return new Add(this.left.reduce(), this.right);
	            } else if (this.right.isReducible) {
	                return new Add(this.left, this.right.reduce());
	            } else {
	                return new _Num.Num(this.left.val + this.right.val);
	            }
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return Add;
	}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Mul = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Num = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Mul = exports.Mul = function () {
	    function Mul(left, right) {
	        _classCallCheck(this, Mul);

	        this.left = left;
	        this.right = right;
	    }

	    _createClass(Mul, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.left + ' * ' + this.right + ')';
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce() {
	            if (this.left.isReducible) {
	                return new Mul(this.left.reduce(), this.right);
	            } else if (this.right.isReducible) {
	                return new Mul(this.left, this.right.reduce());
	            } else {
	                return new _Num.Num(this.left.val * this.right.val);
	            }
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return Mul;
	}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Machine = exports.Machine = function () {
	    function Machine(expression) {
	        _classCallCheck(this, Machine);

	        this.expression = expression;
	    }

	    _createClass(Machine, [{
	        key: "step",
	        value: function step() {
	            // console.log(`Before Reducing: ${this.expression}`);
	            this.expression = this.expression.reduce();
	            // console.log(`After Reducing: ${this.expression}`);
	        }
	    }, {
	        key: "run",
	        value: function run(stepCallback) {
	            while (this.expression.isReducible) {
	                console.log(String(this.expression));
	                stepCallback(String(this.expression));
	                this.step();
	            }
	            console.log(String(this.expression));
	            stepCallback(String(this.expression));
	        }
	    }]);

	    return Machine;
	}();

/***/ })
/******/ ]);