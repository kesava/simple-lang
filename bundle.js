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

	var _LessThan = __webpack_require__(5);

	var _Mul = __webpack_require__(7);

	var _Machine = __webpack_require__(8);

	var _Variable = __webpack_require__(9);

	var _Assign = __webpack_require__(10);

	var _IfStatement = __webpack_require__(12);

	var _IfExpression = __webpack_require__(13);

	var _Sequence = __webpack_require__(14);

	var _WhileStatement = __webpack_require__(15);

	// randomly using ES7 object rest spread because it currently raises
	// an error in all browsers, but can be transpiled by Babel
	var messageBuffer = '';
	console.log('Find my Linkedin profile at https://linkedin.com/in/kesava');
	var stepCallback = function stepCallback(message) {
	    messageBuffer += message + '<br/>';
	    document.querySelector('#output').innerHTML = messageBuffer;
	};

	var n1 = new _Assign.Assign('x', new _Mul.Mul(new _Add.Add(new _Variable.Variable('x'), new _Variable.Variable('y')), new _Mul.Mul(new _Variable.Variable('z'), new _Add.Add(new _Variable.Variable('x'), new _Variable.Variable('y')))), new _Mul.Mul(new _Variable.Variable('x'), new _Mul.Mul(new _Variable.Variable('y'), new _Num.Num(10000))));

	var n2Cond = new _LessThan.LessThan(new _Add.Add(new _Variable.Variable('x'), new _Num.Num(5)), new _Num.Num(9));
	var n2 = new _IfStatement.IfStatement(n2Cond, new _Assign.Assign('r', new _Num.Num(42)), new _Assign.Assign('t', new _Num.Num(22)));

	var n3Cond = new _LessThan.LessThan(new _Num.Num(9), new _Num.Num(2));
	var n3 = new _Assign.Assign('z', new _IfExpression.IfExpression(n3Cond, new _Add.Add(new _Num.Num(1000), new _Num.Num(729)), new _Add.Add(new _Num.Num(99), new _Num.Num(22))));

	var n4Cond = new _LessThan.LessThan(new _Variable.Variable('y'), new _Num.Num(20));
	var n4 = new _WhileStatement.WhileStatement(n4Cond, new _Assign.Assign(new _Variable.Variable('y'), new _Add.Add(new _Variable.Variable('y'), new _Num.Num(4))));

	var env = { x: new _Num.Num(2234), y: new _Num.Num(9), z: new _Num.Num(30) };
	document.getElementById('editor').innerHTML = '------------<br>Initial values of variables: <br/>' + JSON.stringify(env) + '<br>------------<br><br>' + n1 + '<br><br>' + n2 + '<br><br>' + n3 + '<br><br>' + n4;

	var seq = new _Machine.Machine(new _Sequence.Sequence(n1, new _Sequence.Sequence(n2, new _Sequence.Sequence(n3, n4))), env);
	seq.run(stepCallback);

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
	        value: function reduce(env) {
	            if (this.left.isReducible) {
	                return new Add(this.left.reduce(env), this.right);
	            } else if (this.right.isReducible) {
	                return new Add(this.left, this.right.reduce(env));
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
	exports.LessThan = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Boolean = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LessThan = exports.LessThan = function () {
	    function LessThan(left, right) {
	        _classCallCheck(this, LessThan);

	        this.left = left;
	        this.right = right;
	    }

	    _createClass(LessThan, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.left + ' < ' + this.right + ')';
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce(env) {
	            if (this.left.isReducible) {
	                return new LessThan(this.left.reduce(env), this.right);
	            } else if (this.right.isReducible) {
	                return new LessThan(this.left, this.right.reduce(env));
	            } else {
	                return new _Boolean.Boolean(this.left.val < this.right.val);
	            }
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return LessThan;
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

	var Boolean = exports.Boolean = function () {
	    function Boolean(value) {
	        _classCallCheck(this, Boolean);

	        this.value = value;
	    }

	    _createClass(Boolean, [{
	        key: "toString",
	        value: function toString() {
	            return "(" + this.value + ")";
	        }
	    }, {
	        key: "val",
	        get: function get() {
	            return this.value;
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return false;
	        }
	    }]);

	    return Boolean;
	}();

/***/ }),
/* 7 */
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
	        value: function reduce(env) {
	            if (this.left.isReducible) {
	                return new Mul(this.left.reduce(env), this.right);
	            } else if (this.right.isReducible) {
	                return new Mul(this.left, this.right.reduce(env));
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
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Machine = exports.Machine = function () {
	    function Machine(expression, env) {
	        _classCallCheck(this, Machine);

	        this.expression = expression;
	        this.env = env;
	    }

	    _createClass(Machine, [{
	        key: "step",
	        value: function step() {
	            // console.log(`Before Reducing: ${this.expression}`);
	            var result = this.expression.reduce(this.env);
	            this.expression = result.expression;
	            this.env = result.env;
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
	            stepCallback("------------<br>Variable values after execution:<br/> " + JSON.stringify(this.env) + "<br>------------");
	        }
	    }]);

	    return Machine;
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Variable = exports.Variable = function () {
	    function Variable(name) {
	        _classCallCheck(this, Variable);

	        this.name = name;
	    }

	    _createClass(Variable, [{
	        key: "toString",
	        value: function toString() {
	            return "" + this.name;
	        }
	    }, {
	        key: "reduce",
	        value: function reduce(env) {
	            return env[this.name];
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return true;
	        }
	    }]);

	    return Variable;
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Assign = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DoNothing = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Assign = exports.Assign = function () {
	    function Assign(name, expression) {
	        _classCallCheck(this, Assign);

	        this.name = name;
	        this.expression = expression;
	    }

	    _createClass(Assign, [{
	        key: "toString",
	        value: function toString() {
	            return this.name + " = " + this.expression + ";";
	        }
	    }, {
	        key: "reduce",
	        value: function reduce(env) {
	            if (this.expression.isReducible) {
	                return { expression: new Assign(this.name, this.expression.reduce(env)), env: env };
	            } else {
	                var result = {};
	                result[this.name] = this.expression;
	                return { expression: new _DoNothing.DoNothing(), env: Object.assign(env, result) };
	            }
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return true;
	        }
	    }]);

	    return Assign;
	}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DoNothing = exports.DoNothing = function () {
	    function DoNothing() {
	        _classCallCheck(this, DoNothing);
	    }

	    _createClass(DoNothing, [{
	        key: "toString",
	        value: function toString() {
	            return "EndOfExecution";
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return false;
	        }
	    }]);

	    return DoNothing;
	}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IfStatement = exports.IfStatement = function () {
	    function IfStatement(condition, consequence, alternative) {
	        _classCallCheck(this, IfStatement);

	        this.condition = condition;
	        this.consequence = consequence;
	        this.alternative = alternative;
	    }

	    _createClass(IfStatement, [{
	        key: 'toString',
	        value: function toString() {
	            var alt = this.alternative.isReducible ? 'else { \n            ' + this.alternative + '\n        }' : '';
	            return 'if (' + this.condition + ') {\n            ' + this.consequence + '\n        } ' + alt;
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce(env) {
	            if (this.condition.isReducible) {
	                return { expression: new IfStatement(this.condition.reduce(env), this.consequence, this.alternative), env: env };
	            } else {
	                switch (this.condition.val) {
	                    case true:
	                        return { expression: this.consequence, env: env };
	                        break;
	                    case false:
	                        return { expression: this.alternative, env: env };
	                        break;
	                }
	            }
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return IfStatement;
	}();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IfExpression = exports.IfExpression = function () {
	    function IfExpression(condition, consequence, alternative) {
	        _classCallCheck(this, IfExpression);

	        this.condition = condition;
	        this.consequence = consequence;
	        this.alternative = alternative;
	    }

	    _createClass(IfExpression, [{
	        key: 'toString',
	        value: function toString() {
	            var alt = this.alternative.isReducible ? 'else { \n            ' + this.alternative + '\n        }' : '';
	            return 'ifExpr (' + this.condition + ') {\n            ' + this.consequence + '\n        } ' + alt;
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce(env) {
	            if (this.condition.isReducible) {
	                return new IfExpression(this.condition.reduce(env), this.consequence, this.alternative);
	            } else {
	                switch (this.condition.val) {
	                    case true:
	                        return this.consequence;
	                        break;
	                    case false:
	                        return this.alternative;
	                        break;
	                }
	            }
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return IfExpression;
	}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Sequence = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DoNothing = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Sequence = exports.Sequence = function () {
	    function Sequence(first, second) {
	        _classCallCheck(this, Sequence);

	        this.first = first;
	        this.second = second;
	    }

	    _createClass(Sequence, [{
	        key: "toString",
	        value: function toString() {
	            return "" + this.first;
	        }
	    }, {
	        key: "reduce",
	        value: function reduce(env) {
	            if (this.first && this.first.isReducible) {
	                var reducedEnv = this.first.reduce(env);
	                return { expression: new Sequence(reducedEnv.expression, this.second), env: reducedEnv.env };
	            } else if (this.second && this.second.isReducible) {
	                return { expression: new Sequence(this.second, new _DoNothing.DoNothing()), env: env };
	            } else {
	                return { expression: new _DoNothing.DoNothing(), env: env };
	            }
	        }
	    }, {
	        key: "isReducible",
	        get: function get() {
	            return true;
	        }
	    }]);

	    return Sequence;
	}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WhileStatement = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _IfStatement = __webpack_require__(12);

	var _DoNothing = __webpack_require__(11);

	var _Sequence = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WhileStatement = exports.WhileStatement = function () {
	    function WhileStatement(condition, sequence) {
	        _classCallCheck(this, WhileStatement);

	        this.condition = condition;
	        this.sequence = sequence;
	    }

	    _createClass(WhileStatement, [{
	        key: 'toString',
	        value: function toString() {
	            return 'while (' + this.condition + ') {\n            ' + this.sequence + '\n        }';
	        }
	    }, {
	        key: 'reduce',
	        value: function reduce(env) {
	            return { expression: new _IfStatement.IfStatement(this.condition, new _Sequence.Sequence(this.sequence, new WhileStatement(this.condition, this.sequence)), new _DoNothing.DoNothing()), env: env };
	        }
	    }, {
	        key: 'isReducible',
	        get: function get() {
	            return true;
	        }
	    }]);

	    return WhileStatement;
	}();

/***/ })
/******/ ]);