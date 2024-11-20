/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TodoController.ts":
/*!*******************************!*\
  !*** ./src/TodoController.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TodoController = /** @class */ (function () {\n    function TodoController(model, view) {\n        this.model = model;\n        this.view = view;\n    }\n    TodoController.prototype.init = function () {\n        var _this = this;\n        var _a;\n        var todoListElement = document.getElementById('todo-list');\n        if (!todoListElement) {\n            throw new Error('Todo list element not found');\n        }\n        this.view.render(this.model.getTodos());\n        (_a = document.getElementById('add-todo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\n            var text = document.getElementById('todo-text').value;\n            _this.model.addTodo(text);\n            _this.view.render(_this.model.getTodos());\n            document.getElementById('todo-text').value = '';\n        });\n        // Add event listeners for remove buttons\n        var removeButtons = todoListElement.querySelectorAll('.remove');\n        removeButtons.forEach(function (button) {\n            button.addEventListener('click', function () {\n                var _a, _b;\n                var id = parseInt((_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-id')) !== null && _b !== void 0 ? _b : '', 10);\n                _this.model.removeTodo(id);\n                _this.view.render(_this.model.getTodos());\n            });\n        });\n        // Add event listeners for checkboxes\n        var checkboxes = todoListElement.querySelectorAll('input[type=\"checkbox\"]');\n        checkboxes.forEach(function (checkbox) {\n            checkbox.addEventListener('change', function () {\n                var _a, _b;\n                var id = parseInt((_b = (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-id')) !== null && _b !== void 0 ? _b : '', 10);\n                _this.model.toggleCompleted(id);\n                _this.view.render(_this.model.getTodos());\n            });\n        });\n    };\n    return TodoController;\n}());\nexports[\"default\"] = TodoController;\n\n\n//# sourceURL=webpack://mvc-typescript/./src/TodoController.ts?");

/***/ }),

/***/ "./src/TodoModel.ts":
/*!**************************!*\
  !*** ./src/TodoModel.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TodoModel = /** @class */ (function () {\n    function TodoModel() {\n        this.todos = [];\n        this.idCounter = 1;\n    }\n    TodoModel.prototype.addTodo = function (text) {\n        var todo = {\n            id: this.idCounter,\n            text: text,\n            completed: false,\n        };\n        this.todos.push(todo);\n        this.idCounter++;\n    };\n    TodoModel.prototype.removeTodo = function (id) {\n        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });\n    };\n    TodoModel.prototype.toggleCompleted = function (id) {\n        this.todos = this.todos.map(function (todo) {\n            return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;\n        });\n    };\n    TodoModel.prototype.getTodos = function () {\n        return this.todos;\n    };\n    return TodoModel;\n}());\nexports[\"default\"] = TodoModel;\n\n\n//# sourceURL=webpack://mvc-typescript/./src/TodoModel.ts?");

/***/ }),

/***/ "./src/TodoView.ts":
/*!*************************!*\
  !*** ./src/TodoView.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TodoViewImpl = /** @class */ (function () {\n    function TodoViewImpl(todoListElement) {\n        this.todoListElement = todoListElement;\n    }\n    TodoViewImpl.prototype.render = function (todos) {\n        var _this = this;\n        var todoListHtml = todos.map(function (todo) { return _this.renderTodo(todo); }).join('');\n        this.todoListElement.innerHTML = todoListHtml;\n    };\n    TodoViewImpl.prototype.renderTodo = function (todo) {\n        return \"\\n        <li data-id=\\\"\".concat(todo.id, \"\\\">\\n          <input type=\\\"checkbox\\\" \").concat(todo.completed ? 'checked' : '', \">\\n          <span>\").concat(todo.text, \"</span>\\n          <button class=\\\"remove\\\">Remove</button>\\n        </li>\\n      \");\n    };\n    return TodoViewImpl;\n}());\nexports[\"default\"] = TodoViewImpl;\n\n\n//# sourceURL=webpack://mvc-typescript/./src/TodoView.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TodoModel_1 = __importDefault(__webpack_require__(/*! ./TodoModel */ \"./src/TodoModel.ts\"));\nvar TodoView_1 = __importDefault(__webpack_require__(/*! ./TodoView */ \"./src/TodoView.ts\"));\nvar TodoController_1 = __importDefault(__webpack_require__(/*! ./TodoController */ \"./src/TodoController.ts\"));\nvar model = new TodoModel_1.default();\nvar view = new TodoView_1.default(document.getElementById('todo-list'));\nvar controller = new TodoController_1.default(model, view);\ncontroller.init();\n\n\n//# sourceURL=webpack://mvc-typescript/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;