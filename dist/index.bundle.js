(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tabbed-window"] = factory();
	else
		root["tabbed-window"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/tabbed_window_body/tabbed_window_body.js":
/*!*****************************************************************!*\
  !*** ./src/components/tabbed_window_body/tabbed_window_body.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindowBody": () => (/* binding */ TabbedWindowBody)
/* harmony export */ });
/* harmony import */ var _tabbed_window_body_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window_body.html */ "./src/components/tabbed_window_body/tabbed_window_body.html");
/* harmony import */ var _tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed_window_body.less */ "./src/components/tabbed_window_body/tabbed_window_body.less");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




function parseHtml(htmlString) {
  var container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

var template = parseHtml(_tabbed_window_body_html__WEBPACK_IMPORTED_MODULE_0__["default"])[0];

var _contents = /*#__PURE__*/new WeakMap();

var TabbedWindowBody = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindowBody, _HTMLElement);

  var _super = _createSuper(TabbedWindowBody);

  function TabbedWindowBody() {
    var _this;

    _classCallCheck(this, TabbedWindowBody);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _contents, {
      writable: true,
      value: void 0
    });

    _this.innerHTML = template.innerHTML;

    _classPrivateFieldSet(_assertThisInitialized(_this), _contents, _this.querySelector(".contents"));

    return _this;
  }

  _createClass(TabbedWindowBody, [{
    key: "contents",
    get: function get() {
      return _classPrivateFieldGet(this, _contents);
    }
  }, {
    key: "headerLocation",
    get: function get() {
      return this.getAttribute("header-location");
    },
    set: function set(value) {
      this.setAttribute("header-location", value);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.hasAttribute("reverse");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("reverse", "");
      } else {
        this.removeAttribute("reverse");
      }
    }
  }, {
    key: "changeOrientation",
    get: function get() {
      return this.hasAttribute("change-orientation");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("changeOrientation", "");
      } else {
        this.removeAttribute("changeOrientation");
      }
    }
  }]);

  return TabbedWindowBody;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("tabbed-window-body", TabbedWindowBody);

/***/ }),

/***/ "./src/components/tabbed_window_content/tabbed_window_content.js":
/*!***********************************************************************!*\
  !*** ./src/components/tabbed_window_content/tabbed_window_content.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindowContent": () => (/* binding */ TabbedWindowContent)
/* harmony export */ });
/* harmony import */ var _tabbed_window_content_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window_content.html */ "./src/components/tabbed_window_content/tabbed_window_content.html");
/* harmony import */ var _tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed_window_content.less */ "./src/components/tabbed_window_content/tabbed_window_content.less");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




function parseHtml(htmlString) {
  var container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

var template = parseHtml(_tabbed_window_content_html__WEBPACK_IMPORTED_MODULE_0__["default"])[0];
var TabbedWindowContent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindowContent, _HTMLElement);

  var _super = _createSuper(TabbedWindowContent);

  function TabbedWindowContent() {
    var _this;

    _classCallCheck(this, TabbedWindowContent);

    _this = _super.call(this);
    _this.innerHTML = template.innerHTML;
    return _this;
  }

  _createClass(TabbedWindowContent, [{
    key: "headerLocation",
    get: function get() {
      return this.getAttribute("header-location");
    },
    set: function set(value) {
      this.setAttribute("header-location", value);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.hasAttribute("reverse");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("reverse", "");
      } else {
        this.removeAttribute("reverse");
      }
    }
  }, {
    key: "changeOrientation",
    get: function get() {
      return this.hasAttribute("change-orientation");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("changeOrientation", "");
      } else {
        this.removeAttribute("changeOrientation");
      }
    }
  }]);

  return TabbedWindowContent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("tabbed-window-content", TabbedWindowContent);

/***/ }),

/***/ "./src/components/tabbed_window_header/tabbed_window_header.js":
/*!*********************************************************************!*\
  !*** ./src/components/tabbed_window_header/tabbed_window_header.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindowHeader": () => (/* binding */ TabbedWindowHeader)
/* harmony export */ });
/* harmony import */ var _tabbed_window_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window_header.html */ "./src/components/tabbed_window_header/tabbed_window_header.html");
/* harmony import */ var _tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed_window_header.less */ "./src/components/tabbed_window_header/tabbed_window_header.less");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




function parseHtml(htmlString) {
  var container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

var template = parseHtml(_tabbed_window_header_html__WEBPACK_IMPORTED_MODULE_0__["default"])[0];

var _links = /*#__PURE__*/new WeakMap();

var _newTabButton = /*#__PURE__*/new WeakMap();

var TabbedWindowHeader = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindowHeader, _HTMLElement);

  var _super = _createSuper(TabbedWindowHeader);

  function TabbedWindowHeader() {
    var _this;

    _classCallCheck(this, TabbedWindowHeader);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _links, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _newTabButton, {
      writable: true,
      value: void 0
    });

    _this.innerHTML = template.innerHTML;

    _classPrivateFieldSet(_assertThisInitialized(_this), _links, _this.querySelector(".links"));

    _classPrivateFieldSet(_assertThisInitialized(_this), _newTabButton, _this.querySelector(".new-tab-button"));

    return _this;
  }

  _createClass(TabbedWindowHeader, [{
    key: "links",
    get: function get() {
      return _classPrivateFieldGet(this, _links);
    }
  }, {
    key: "newTabButton",
    get: function get() {
      return _classPrivateFieldGet(this, _newTabButton);
    }
  }, {
    key: "headerLocation",
    get: function get() {
      return this.getAttribute("header-location");
    },
    set: function set(value) {
      this.setAttribute("header-location", value);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.hasAttribute("reverse");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("reverse", "");
      } else {
        this.removeAttribute("reverse");
      }
    }
  }, {
    key: "changeOrientation",
    get: function get() {
      return this.hasAttribute("change-orientation");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("changeOrientation", "");
      } else {
        this.removeAttribute("changeOrientation");
      }
    }
  }]);

  return TabbedWindowHeader;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("tabbed-window-header", TabbedWindowHeader);

/***/ }),

/***/ "./src/components/tabbed_window_link/tabbed_window_link.js":
/*!*****************************************************************!*\
  !*** ./src/components/tabbed_window_link/tabbed_window_link.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindowLink": () => (/* binding */ TabbedWindowLink)
/* harmony export */ });
/* harmony import */ var _tabbed_window_link_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window_link.html */ "./src/components/tabbed_window_link/tabbed_window_link.html");
/* harmony import */ var _tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed_window_link.less */ "./src/components/tabbed_window_link/tabbed_window_link.less");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




function parseHtml(htmlString) {
  var container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

var template = parseHtml(_tabbed_window_link_html__WEBPACK_IMPORTED_MODULE_0__["default"])[0];

var _content = /*#__PURE__*/new WeakMap();

var _closeButton = /*#__PURE__*/new WeakMap();

var TabbedWindowLink = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindowLink, _HTMLElement);

  var _super = _createSuper(TabbedWindowLink);

  function TabbedWindowLink() {
    var _this;

    _classCallCheck(this, TabbedWindowLink);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _content, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _closeButton, {
      writable: true,
      value: void 0
    });

    _this.innerHTML = template.innerHTML;

    _classPrivateFieldSet(_assertThisInitialized(_this), _content, _this.querySelector(".content"));

    _classPrivateFieldSet(_assertThisInitialized(_this), _closeButton, _this.querySelector(".close-tab-button"));

    return _this;
  }

  _createClass(TabbedWindowLink, [{
    key: "closeButton",
    get: function get() {
      return _classPrivateFieldGet(this, _closeButton);
    }
  }, {
    key: "content",
    get: function get() {
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "headerLocation",
    get: function get() {
      return this.getAttribute("header-location");
    },
    set: function set(value) {
      this.setAttribute("header-location", value);
    }
  }, {
    key: "reverse",
    get: function get() {
      return this.hasAttribute("reverse");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("reverse", "");
      } else {
        this.removeAttribute("reverse");
      }
    }
  }, {
    key: "changeOrientation",
    get: function get() {
      return this.hasAttribute("change-orientation");
    },
    set: function set(flag) {
      if (flag) {
        this.setAttribute("changeOrientation", "");
      } else {
        this.removeAttribute("changeOrientation");
      }
    }
  }]);

  return TabbedWindowLink;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("tabbed-window-link", TabbedWindowLink);

/***/ }),

/***/ "./src/components/tabbed_window_tab/tabbed_window_tab.js":
/*!***************************************************************!*\
  !*** ./src/components/tabbed_window_tab/tabbed_window_tab.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindowTab": () => (/* binding */ TabbedWindowTab)
/* harmony export */ });
/* harmony import */ var _tabbed_window_link_tabbed_window_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabbed_window_link/tabbed_window_link.js */ "./src/components/tabbed_window_link/tabbed_window_link.js");
/* harmony import */ var _tabbed_window_content_tabbed_window_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabbed_window_content/tabbed_window_content.js */ "./src/components/tabbed_window_content/tabbed_window_content.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _link = /*#__PURE__*/new WeakMap();

var _content = /*#__PURE__*/new WeakMap();

var TabbedWindowTab = /*#__PURE__*/function () {
  function TabbedWindowTab() {
    var headerLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TOP";
    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var changeLinksOrientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, TabbedWindowTab);

    _classPrivateFieldInitSpec(this, _link, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _content, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _link, new _tabbed_window_link_tabbed_window_link_js__WEBPACK_IMPORTED_MODULE_0__.TabbedWindowLink());

    _classPrivateFieldGet(this, _link).headerLocation = headerLocation;
    _classPrivateFieldGet(this, _link).reverse = reverse;
    _classPrivateFieldGet(this, _link).changeOrientation = changeLinksOrientation;

    _classPrivateFieldSet(this, _content, new _tabbed_window_content_tabbed_window_content_js__WEBPACK_IMPORTED_MODULE_1__.TabbedWindowContent());

    _classPrivateFieldGet(this, _content).headerLocation = headerLocation;
    _classPrivateFieldGet(this, _content).reverse = reverse;
    _classPrivateFieldGet(this, _content).changeOrientation = changeLinksOrientation;
  }

  _createClass(TabbedWindowTab, [{
    key: "link",
    get: function get() {
      return _classPrivateFieldGet(this, _link);
    }
  }, {
    key: "content",
    get: function get() {
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "closeButton",
    get: function get() {
      return _classPrivateFieldGet(this, _link).closeButton;
    }
  }, {
    key: "name",
    get: function get() {
      var linkContent = this.link.content;
      return linkContent ? linkContent.textContent : "";
    },
    set: function set(nameString) {
      var linkContent = this.link.content;

      if (linkContent) {
        linkContent.textContent = nameString;
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.link.classList.add("active");
      this.content.classList.add("active");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.link.classList.remove("active");
      this.content.classList.remove("active");
    }
  }]);

  return TabbedWindowTab;
}();

/***/ }),

/***/ "./src/tabbed_window.js":
/*!******************************!*\
  !*** ./src/tabbed_window.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbedWindow": () => (/* binding */ TabbedWindow)
/* harmony export */ });
/* harmony import */ var _tabbed_window_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window.html */ "./src/tabbed_window.html");
/* harmony import */ var _tabbed_window_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbed_window.less */ "./src/tabbed_window.less");
/* harmony import */ var _components_tabbed_window_tab_tabbed_window_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabbed_window_tab/tabbed_window_tab.js */ "./src/components/tabbed_window_tab/tabbed_window_tab.js");
/* harmony import */ var _components_tabbed_window_header_tabbed_window_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabbed_window_header/tabbed_window_header.js */ "./src/components/tabbed_window_header/tabbed_window_header.js");
/* harmony import */ var _components_tabbed_window_body_tabbed_window_body_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabbed_window_body/tabbed_window_body.js */ "./src/components/tabbed_window_body/tabbed_window_body.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







function parseHtml(htmlString) {
  var container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

var template = parseHtml(_tabbed_window_html__WEBPACK_IMPORTED_MODULE_0__["default"])[0];

var _html = /*#__PURE__*/new WeakMap();

var _header = /*#__PURE__*/new WeakMap();

var _body = /*#__PURE__*/new WeakMap();

var _tabs = /*#__PURE__*/new WeakMap();

var _headerLocation = /*#__PURE__*/new WeakMap();

var _reverse = /*#__PURE__*/new WeakMap();

var _changeLinksOrientation = /*#__PURE__*/new WeakMap();

var TabbedWindow = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindow, _HTMLElement);

  var _super = _createSuper(TabbedWindow);

  function TabbedWindow() {
    var _this;

    var headerLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TOP";
    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var changeLinksOrientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, TabbedWindow);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _html, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _header, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _body, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _tabs, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _headerLocation, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _reverse, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _changeLinksOrientation, {
      writable: true,
      value: void 0
    });

    _this.innerHTML = template.innerHTML;

    _classPrivateFieldSet(_assertThisInitialized(_this), _header, new _components_tabbed_window_header_tabbed_window_header_js__WEBPACK_IMPORTED_MODULE_3__.TabbedWindowHeader());

    _classPrivateFieldSet(_assertThisInitialized(_this), _body, new _components_tabbed_window_body_tabbed_window_body_js__WEBPACK_IMPORTED_MODULE_4__.TabbedWindowBody());

    _classPrivateFieldSet(_assertThisInitialized(_this), _tabs, []);

    _classPrivateFieldSet(_assertThisInitialized(_this), _html, _tabbed_window_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _classPrivateFieldSet(_assertThisInitialized(_this), _headerLocation, headerLocation);

    _classPrivateFieldSet(_assertThisInitialized(_this), _reverse, reverse);

    _classPrivateFieldSet(_assertThisInitialized(_this), _changeLinksOrientation, changeLinksOrientation);

    _this.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this), _header));

    _this.appendChild(_classPrivateFieldGet(_assertThisInitialized(_this), _body));

    if (_classPrivateFieldGet(_assertThisInitialized(_this), _header).newTabButton) {
      _classPrivateFieldGet(_assertThisInitialized(_this), _header).newTabButton.addEventListener("click", function () {
        return _this.addNewTab();
      });
    }

    return _this;
  }

  _createClass(TabbedWindow, [{
    key: "html",
    get: function get() {
      return _classPrivateFieldGet(this, _html);
    }
  }, {
    key: "header",
    get: function get() {
      return _classPrivateFieldGet(this, _header);
    }
  }, {
    key: "body",
    get: function get() {
      return _classPrivateFieldGet(this, _body);
    }
  }, {
    key: "links",
    get: function get() {
      return _classPrivateFieldGet(this, _header).links;
    }
  }, {
    key: "contents",
    get: function get() {
      return _classPrivateFieldGet(this, _body).contents;
    }
  }, {
    key: "tabs",
    get: function get() {
      return _classPrivateFieldGet(this, _tabs);
    }
  }, {
    key: "newTabButton",
    get: function get() {
      return _classPrivateFieldGet(this, _header).newTabButton;
    } // set newTabButton(btn) {
    //   if (btn) {
    //     if (this.newTabButton) {
    //       this.header.replaceChild(btn, this.newTabButton);
    //     } else {
    //       this.classList.add("new-tab-button");
    //       this.header.appendChild(btn);
    //       btn.addEventListener("click", () => this.addNewTab());
    //     }
    //     this.#newTabButton = btn;
    //   }
    // }

  }, {
    key: "showTabByIndex",
    value: function showTabByIndex(index) {
      var tab = this.tabs[index];
      this.showTab(tab);
    }
  }, {
    key: "showTab",
    value: function showTab(tab) {
      if (this.currentTab === tab) return;
      if (this.currentTab != null) this.currentTab.hide();
      if (tab != null) tab.show();
      this.currentTab = tab;
    }
  }, {
    key: "removeTabByIndex",
    value: function removeTabByIndex(index) {
      if (index < this.tabs.length) {
        var currentIndex = this.tabs.indexOf(this.currentTab);
        var tab = this.tabs[index];
        this.tabs.splice(index, 1);
        this.links.removeChild(tab.link);
        this.contents.removeChild(tab.content);

        if (tab === this.currentTab) {
          this.currentTab = null;
          var i = Math.min(Math.max(currentIndex, 0), this.tabs.length - 1);
          this.showTabByIndex(i);
        }
      }
    }
  }, {
    key: "removeTab",
    value: function removeTab(tab) {
      var index = this.tabs.indexOf(tab);
      this.removeTabByIndex(index);
    }
  }, {
    key: "addNewTabAtIndex",
    value: function addNewTabAtIndex(index, name) {
      var _index,
          _this2 = this;

      index = (_index = index) !== null && _index !== void 0 ? _index : this.tabs.length;

      if (index > this.tabs.length) {
        throw new Error("Index out of bounds!");
      }

      if (index < 0) {
        index = this.tabs.length + index;
      }

      var tab = new _components_tabbed_window_tab_tabbed_window_tab_js__WEBPACK_IMPORTED_MODULE_2__.TabbedWindowTab(_classPrivateFieldGet(this, _headerLocation), _classPrivateFieldGet(this, _reverse), _classPrivateFieldGet(this, _changeLinksOrientation));
      tab.name = name;
      tab.link.addEventListener("click", function (e) {
        _this2.showTabByIndex(_this2.tabs.indexOf(tab));
      });

      if (tab.closeButton) {
        tab.closeButton.addEventListener("click", function (e) {
          _this2.removeTabByIndex(_this2.tabs.indexOf(tab));

          e.stopPropagation();
        });
      }

      if (index === this.tabs.length) {
        this.tabs.push(tab);
        this.links.appendChild(tab.link);
        this.contents.appendChild(tab.content);
      } else {
        this.tabs.splice(tab, 0);
        var nextTab = this.tabs[index + 1];
        this.links.insertBefore(tab.link, nextTab.link);
        this.contents.insertBefore(tab.content, nextTab.content);
      }

      this.showTabByIndex(index);
      return tab;
    }
  }, {
    key: "addNewTab",
    value: function addNewTab(name) {
      return this.addNewTabAtIndex(null, name);
    }
  }, {
    key: "clearTabs",
    value: function clearTabs() {
      var _this3 = this;

      this.tabs.forEach(function (tab, index) {
        return _this3.removeTabByIndex(index);
      });
    }
  }]);

  return TabbedWindow;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("tabbed-window", TabbedWindow);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_body/tabbed_window_body.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_body/tabbed_window_body.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-body {\n  background-color: #808080;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  justify-content: start;\n  align-items: stretch;\n  /* TO-DO: adjust according to orientation via javascript */\n}\ntabbed-window-body[header-location=\"top\"] {\n  border: 1px solid black;\n  border-top: 0;\n  border-radius: 0 0 12px 12px;\n  padding: 0 8px 8px 8px;\n}\ntabbed-window-body[header-location=\"bottom\"] {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-radius: 12px 12px 0 0;\n  padding: 8px 8px 0 8px;\n}\ntabbed-window-body[header-location=\"left\"] {\n  border: 1px solid black;\n  border-left: 0;\n  border-radius: 0 12px 12px 0;\n  padding: 8px 8px 8px 0;\n}\ntabbed-window-body[header-location=\"right\"] {\n  border: 1px solid black;\n  border-right: 0;\n  border-radius: 12px 0 0 12px;\n  padding: 8px 0 8px 8px;\n}\ntabbed-window-body > .contents {\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_body/tabbed_window_body.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,sBAAA;EACA,oBAAA;EACA,0DAA0D;AAC5D;AAAE;EACE,uBAAA;EACA,aAAA;EACA,4BAAA;EACA,sBAAA;AAEJ;AACE;EACE,uBAAA;EACA,gBAAA;EACA,4BAAA;EACA,sBAAA;AACJ;AAEE;EACE,uBAAA;EACA,cAAA;EACA,4BAAA;EACA,sBAAA;AAAJ;AAGE;EACE,uBAAA;EACA,eAAA;EACA,4BAAA;EACA,sBAAA;AADJ;AAKE;EACE,6BAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;AAHJ","sourcesContent":["tabbed-window-body {\n  background-color: #808080;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  justify-content: start;\n  align-items: stretch;\n\n  &[header-location=\"top\"] {\n    border: 1px solid black;\n    border-top: 0;\n    border-radius: 0 0 12px 12px;\n    padding: 0 8px 8px 8px;\n  }\n\n  &[header-location=\"bottom\"] {\n    border: 1px solid black;\n    border-bottom: 0;\n    border-radius: 12px 12px 0 0;\n    padding: 8px 8px 0 8px;\n  }\n\n  &[header-location=\"left\"] {\n    border: 1px solid black;\n    border-left: 0;\n    border-radius: 0 12px 12px 0;\n    padding: 8px 8px 8px 0;\n  }\n\n  &[header-location=\"right\"] {\n    border: 1px solid black;\n    border-right: 0;\n    border-radius: 12px 0 0 12px;\n    padding: 8px 0 8px 8px;\n  }\n\n  /* TO-DO: adjust according to orientation via javascript */\n  & > .contents {\n    background-color: transparent;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_content/tabbed_window_content.less":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_content/tabbed_window_content.less ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-content {\n  background-color: #a0a0a0;\n  display: none;\n  flex: 1 1 auto;\n}\ntabbed-window-content[header-location=\"top\"] {\n  border-radius: 0 0 12px 12px;\n  padding: 8px 12px 8px 12px;\n}\ntabbed-window-content[header-location=\"bottom\"] {\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px 8px 12px;\n}\ntabbed-window-content[header-location=\"left\"] {\n  border-radius: 0 12px 12px 0;\n  padding: 12px 8px 12px 8px;\n}\ntabbed-window-content[header-location=\"right\"] {\n  border-radius: 12px 0 0 12px;\n  padding: 12px 8px 12px 8px;\n}\ntabbed-window-content.active {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_content/tabbed_window_content.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,cAAA;AACF;AACE;EACE,4BAAA;EACA,0BAAA;AACJ;AAEE;EACE,4BAAA;EACA,0BAAA;AAAJ;AAGE;EACE,4BAAA;EACA,0BAAA;AADJ;AAIE;EACE,4BAAA;EACA,0BAAA;AAFJ;AAKE;EACE,cAAA;AAHJ","sourcesContent":["tabbed-window-content {\n  background-color: #a0a0a0;\n  display: none;\n  flex: 1 1 auto;\n\n  &[header-location=\"top\"] {\n    border-radius: 0 0 12px 12px;\n    padding: 8px 12px 8px 12px;\n  }\n\n  &[header-location=\"bottom\"] {\n    border-radius: 12px 12px 0 0;\n    padding: 8px 12px 8px 12px;\n  }\n\n  &[header-location=\"left\"] {\n    border-radius: 0 12px 12px 0;\n    padding: 12px 8px 12px 8px;\n  }\n\n  &[header-location=\"right\"] {\n    border-radius: 12px 0 0 12px;\n    padding: 12px 8px 12px 8px;\n  }\n\n  &.active {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_header/tabbed_window_header.less":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_header/tabbed_window_header.less ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-header {\n  background-color: #808080;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\ntabbed-window-header[header-location=\"top\"] {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-radius: 12px 12px 0 0;\n  padding: 4px 8px 0 8px;\n}\ntabbed-window-header[header-location=\"bottom\"] {\n  border: 1px solid black;\n  border-top: 0;\n  border-radius: 0 0 12px 12px;\n  padding: 0 8px 4px 8px;\n}\ntabbed-window-header[header-location=\"left\"] {\n  border: 1px solid black;\n  border-right: 0;\n  border-radius: 12px 0 0 12px;\n  padding: 8px 0 8px 4px;\n}\ntabbed-window-header[header-location=\"left\"][reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window-header[header-location=\"right\"] {\n  border: 1px solid black;\n  border-left: 0;\n  border-radius: 0 12px 12px 0;\n  padding: 8px 4px 8px 0;\n}\ntabbed-window-header[header-location=\"right\"][reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window-header > .links {\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  flex: 1 1 auto;\n  overflow-x: auto;\n  overflow-y: auto;\n}\ntabbed-window-header > .links[header-location=\"top\"] {\n  padding: 4px 4px 0 4px;\n}\ntabbed-window-header > .links[header-location=\"top\"][reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window-header > .links[header-location=\"bottom\"] {\n  padding: 0 4px 4px 4px;\n}\ntabbed-window-header > .links[header-location=\"bottom\"][reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window-header > .links[header-location=\"left\"] {\n  padding: 4px 0 4px 4px;\n}\ntabbed-window-header > .links[header-location=\"left\"][reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window-header > .links[header-location=\"left\"][change-orientation] {\n  justify-content: flex-start;\n}\ntabbed-window-header > .links[header-location=\"right\"] {\n  padding: 4px 4px 4px 0;\n}\ntabbed-window-header > .links[header-location=\"right\"][reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window-header > .links[header-location=\"right\"][change-orientation] {\n  justify-content: flex-start;\n}\ntabbed-window-header > .spacer {\n  width: 24px;\n  min-width: 24px;\n  max-width: 48px;\n  height: 0;\n  min-height: 0;\n  max-height: 0;\n  flex: 1 1 auto;\n}\ntabbed-window-header > .new-tab-button {\n  text-align: center;\n  font-family: Consolas;\n  cursor: pointer;\n  border-radius: 25%;\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n}\ntabbed-window-header > .new-tab-button:hover {\n  background-color: #404040;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_header/tabbed_window_header.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;AACF;AACE;EACE,uBAAA;EACA,gBAAA;EACA,4BAAA;EACA,sBAAA;AACJ;AAEE;EACE,uBAAA;EACA,aAAA;EACA,4BAAA;EACA,sBAAA;AAAJ;AAGE;EACE,uBAAA;EACA,eAAA;EACA,4BAAA;EACA,sBAAA;AADJ;AAGI;EACE,8BAAA;AADN;AAKE;EACE,uBAAA;EACA,cAAA;EACA,4BAAA;EACA,sBAAA;AAHJ;AAKI;EACE,8BAAA;AAHN;AAOE;EACE,aAAA;EACA,6BAAA;EACA,oBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;AALJ;AAOI;EACE,sBAAA;AALN;AAOM;EACE,2BAAA;AALR;AASI;EACE,sBAAA;AAPN;AASM;EACE,2BAAA;AAPR;AAWI;EACE,sBAAA;AATN;AAWM;EACE,8BAAA;AATR;AAYM;EACE,2BAAA;AAVR;AAcI;EACE,sBAAA;AAZN;AAcM;EACE,8BAAA;AAZR;AAeM;EACE,2BAAA;AAbR;AAkBE;EACE,WAAA;EACA,eAAA;EACA,eAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;AAhBJ;AAmBE;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;AAjBJ;AAmBI;EACE,yBAAA;AAjBN","sourcesContent":["tabbed-window-header {\n  background-color: #808080;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  &[header-location=\"top\"] {\n    border: 1px solid black;\n    border-bottom: 0;\n    border-radius: 12px 12px 0 0;\n    padding: 4px 8px 0 8px;\n  }\n\n  &[header-location=\"bottom\"] {\n    border: 1px solid black;\n    border-top: 0;\n    border-radius: 0 0 12px 12px;\n    padding: 0 8px 4px 8px;\n  }\n\n  &[header-location=\"left\"] {\n    border: 1px solid black;\n    border-right: 0;\n    border-radius: 12px 0 0 12px;\n    padding: 8px 0 8px 4px;\n\n    &[reverse] {\n      flex-direction: column-reverse;\n    }\n  }\n\n  &[header-location=\"right\"] {\n    border: 1px solid black;\n    border-left: 0;\n    border-radius: 0 12px 12px 0;\n    padding: 8px 4px 8px 0;\n\n    &[reverse] {\n      flex-direction: column-reverse;\n    }\n  }\n\n  & > .links {\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    flex: 1 1 auto;\n    overflow-x: auto;\n    overflow-y: auto;\n\n    &[header-location=\"top\"] {\n      padding: 4px 4px 0 4px;\n\n      &[reverse] {\n        flex-direction: row-reverse;\n      }\n    }\n\n    &[header-location=\"bottom\"] {\n      padding: 0 4px 4px 4px;\n\n      &[reverse] {\n        flex-direction: row-reverse;\n      }\n    }\n\n    &[header-location=\"left\"] {\n      padding: 4px 0 4px 4px;\n\n      &[reverse] {\n        flex-direction: column-reverse;\n      }\n\n      &[change-orientation] {\n        justify-content: flex-start;\n      }\n    }\n\n    &[header-location=\"right\"] {\n      padding: 4px 4px 4px 0;\n\n      &[reverse] {\n        flex-direction: column-reverse;\n      }\n\n      &[change-orientation] {\n        justify-content: flex-start;\n      }\n    }\n  }\n\n  & > .spacer {\n    width: 24px;\n    min-width: 24px;\n    max-width: 48px;\n    height: 0;\n    min-height: 0;\n    max-height: 0;\n    flex: 1 1 auto;\n  }\n\n  & > .new-tab-button {\n    text-align: center;\n    font-family: Consolas;\n    cursor: pointer;\n    border-radius: 25%;\n    padding: 4px;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n\n    &:hover {\n      background-color: #404040;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_link/tabbed_window_link.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_link/tabbed_window_link.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-link {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  background-color: transparent;\n  display: flex;\n  flex: 1 1 auto;\n}\ntabbed-window-link[header-location=\"top\"] {\n  border-radius: 12px 12px 0 0;\n  padding: 8px;\n}\ntabbed-window-link[header-location=\"bottom\"] {\n  border-radius: 0 0 12px 12px;\n  padding: 8px;\n}\ntabbed-window-link[header-location=\"left\"] {\n  border-radius: 12px 0 0 12px;\n  padding: 8px;\n}\ntabbed-window-link[header-location=\"left\"][change-orientation] {\n  flex-direction: column;\n}\ntabbed-window-link[header-location=\"left\"]:not([change-orientation]) {\n  flex-direction: row-reverse;\n  flex: 0 0 auto;\n}\ntabbed-window-link[header-location=\"right\"] {\n  border-radius: 0 12px 12px 0;\n  padding: 8px;\n}\ntabbed-window-link[header-location=\"right\"][change-orientation] {\n  flex-direction: column;\n}\ntabbed-window-link[header-location=\"right\"]:not([change-orientation]) {\n  flex: 0 0 auto;\n}\ntabbed-window-link.active {\n  color: #000000;\n  background-color: #a0a0a0c0;\n  box-shadow: #404040 0px 0px 3px 0px;\n}\ntabbed-window-link > .content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n}\ntabbed-window-link > .content[header-location=\"top\"] {\n  padding: 0px;\n}\ntabbed-window-link > .content[header-location=\"bottom\"] {\n  padding: 0px;\n}\ntabbed-window-link > .content[header-location=\"left\"] {\n  padding: 0px;\n}\ntabbed-window-link > .content[header-location=\"right\"] {\n  padding: 0px;\n}\ntabbed-window-link > .close-tab-button {\n  text-align: center;\n  font-family: Consolas;\n  cursor: pointer;\n  border-radius: 50%;\n}\ntabbed-window-link > .close-tab-button[header-location=\"top\"] {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window-link > .close-tab-button[header-location=\"bottom\"] {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window-link > .close-tab-button[header-location=\"left\"] {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window-link > .close-tab-button[header-location=\"right\"] {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window-link > .close-tab-button:hover {\n  background-color: #404040;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_link/tabbed_window_link.less"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,aAAA;EACA,cAAA;AACF;AACE;EACE,4BAAA;EACA,YAAA;AACJ;AAEE;EACE,4BAAA;EACA,YAAA;AAAJ;AAGE;EACE,4BAAA;EACA,YAAA;AADJ;AAGI;EACE,sBAAA;AADN;AAII;EACE,2BAAA;EACA,cAAA;AAFN;AAME;EACE,4BAAA;EACA,YAAA;AAJJ;AAMI;EACE,sBAAA;AAJN;AAOI;EACE,cAAA;AALN;AASE;EACE,cAAA;EACA,2BAAA;EACA,mCAAA;AAPJ;AAUE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AARJ;AAUI;EACE,YAAA;AARN;AAWI;EACE,YAAA;AATN;AAYI;EACE,YAAA;AAVN;AAaI;EACE,YAAA;AAXN;AAeE;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;AAbJ;AAeI;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAbN;AAgBI;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAdN;AAiBI;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAfN;AAkBI;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAhBN;AAmBI;EACE,yBAAA;AAjBN","sourcesContent":["tabbed-window-link {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  background-color: transparent;\n  display: flex;\n  flex: 1 1 auto;\n\n  &[header-location=\"top\"] {\n    border-radius: 12px 12px 0 0;\n    padding: 8px;\n  }\n\n  &[header-location=\"bottom\"] {\n    border-radius: 0 0 12px 12px;\n    padding: 8px;\n  }\n\n  &[header-location=\"left\"] {\n    border-radius: 12px 0 0 12px;\n    padding: 8px;\n\n    &[change-orientation] {\n      flex-direction: column;\n    }\n\n    &:not([change-orientation]) {\n      flex-direction: row-reverse;\n      flex: 0 0 auto;\n    }\n  }\n\n  &[header-location=\"right\"] {\n    border-radius: 0 12px 12px 0;\n    padding: 8px;\n\n    &[change-orientation] {\n      flex-direction: column;\n    }\n\n    &:not([change-orientation]) {\n      flex: 0 0 auto;\n    }\n  }\n\n  &.active {\n    color: rgba(0, 0, 0, 1);\n    background-color: #a0a0a0c0;\n    box-shadow: #404040 0px 0px 3px 0px;\n  }\n\n  & > .content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1 1 auto;\n\n    &[header-location=\"top\"] {\n      padding: 0px;\n    }\n\n    &[header-location=\"bottom\"] {\n      padding: 0px;\n    }\n\n    &[header-location=\"left\"] {\n      padding: 0px;\n    }\n\n    &[header-location=\"right\"] {\n      padding: 0px;\n    }\n  }\n\n  & > .close-tab-button {\n    text-align: center;\n    font-family: Consolas;\n    cursor: pointer;\n    border-radius: 50%;\n\n    &[header-location=\"top\"] {\n      padding: 4px;\n      width: 16px;\n      height: 16px;\n    }\n\n    &[header-location=\"bottom\"] {\n      padding: 4px;\n      width: 16px;\n      height: 16px;\n    }\n\n    &[header-location=\"left\"] {\n      padding: 4px;\n      width: 16px;\n      height: 16px;\n    }\n\n    &[header-location=\"right\"] {\n      padding: 4px;\n      width: 16px;\n      height: 16px;\n    }\n\n    &:hover {\n      background-color: #404040;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window.less":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window.less ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  height: 480px;\n  width: 75%;\n  flex: 1 1 auto;\n  resize: both;\n  overflow: auto;\n}\ntabbed-window[header-location=\"top\"] {\n  flex-direction: column;\n}\ntabbed-window[header-location=\"bottom\"] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"left\"] {\n  flex-direction: row;\n}\ntabbed-window[header-location=\"right\"] {\n  flex-direction: row-reverse;\n}\n", "",{"version":3,"sources":["webpack://./src/tabbed_window.less"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,oBAAA;EACA,aAAA;EACA,UAAA;EACA,cAAA;EACA,YAAA;EACA,cAAA;AACF;AACE;EACE,sBAAA;AACJ;AAEE;EACE,8BAAA;AAAJ;AAGE;EACE,mBAAA;AADJ;AAIE;EACE,2BAAA;AAFJ","sourcesContent":["tabbed-window {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  height: 480px;\n  width: 75%;\n  flex: 1 1 auto;\n  resize: both;\n  overflow: auto;\n\n  &[header-location=\"top\"] {\n    flex-direction: column;\n  }\n\n  &[header-location=\"bottom\"] {\n    flex-direction: column-reverse;\n  }\n\n  &[header-location=\"left\"] {\n    flex-direction: row;\n  }\n\n  &[header-location=\"right\"] {\n    flex-direction: row-reverse;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/tabbed_window_body/tabbed_window_body.html":
/*!*******************************************************************!*\
  !*** ./src/components/tabbed_window_body/tabbed_window_body.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"tabbed-window-body\">\n  <div class=\"contents\"></div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/tabbed_window_content/tabbed_window_content.html":
/*!*************************************************************************!*\
  !*** ./src/components/tabbed_window_content/tabbed_window_content.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"tabbed-window-content\"></div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/tabbed_window_header/tabbed_window_header.html":
/*!***********************************************************************!*\
  !*** ./src/components/tabbed_window_header/tabbed_window_header.html ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"tabbed-window-header\">\n  <div class=\"links\"></div>\n  <div class=\"spacer\"></div>\n  <div class=\"new-tab-button\">+</div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/tabbed_window_link/tabbed_window_link.html":
/*!*******************************************************************!*\
  !*** ./src/components/tabbed_window_link/tabbed_window_link.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"tabbed-window-link\">\n  <div class=\"content\"></div>\n  <div class=\"close-tab-button\">x</div>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/tabbed_window.html":
/*!********************************!*\
  !*** ./src/tabbed_window.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"tabbed-window\">\n  <!-- <tab-header></tab-header> -->\n  <!-- <tab-body></tab-body> -->\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/tabbed_window_body/tabbed_window_body.less":
/*!*******************************************************************!*\
  !*** ./src/components/tabbed_window_body/tabbed_window_body.less ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./tabbed_window_body.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_body/tabbed_window_body.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_body_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/tabbed_window_content/tabbed_window_content.less":
/*!*************************************************************************!*\
  !*** ./src/components/tabbed_window_content/tabbed_window_content.less ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./tabbed_window_content.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_content/tabbed_window_content.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_content_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/tabbed_window_header/tabbed_window_header.less":
/*!***********************************************************************!*\
  !*** ./src/components/tabbed_window_header/tabbed_window_header.less ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./tabbed_window_header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_header/tabbed_window_header.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_header_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/tabbed_window_link/tabbed_window_link.less":
/*!*******************************************************************!*\
  !*** ./src/components/tabbed_window_link/tabbed_window_link.less ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./tabbed_window_link.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/tabbed_window_link/tabbed_window_link.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_link_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tabbed_window.less":
/*!********************************!*\
  !*** ./src/tabbed_window.less ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./tabbed_window.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabbed_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbed_window.js */ "./src/tabbed_window.js");

var tabbedWindow = new _tabbed_window_js__WEBPACK_IMPORTED_MODULE_0__.TabbedWindow();
document.appendChild(tabbedWindow);
console.log("!!!");
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNa0MsWUFBWSxHQUFHLElBQUlsQywyREFBSixFQUFyQjtBQUNBbEMsUUFBUSxDQUFDbUMsV0FBVCxDQUFxQmlDLFlBQXJCO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYmJlZC13aW5kb3cvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5LmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2NvbnRlbnQvdGFiYmVkX3dpbmRvd19jb250ZW50LmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19saW5rL3RhYmJlZF93aW5kb3dfbGluay5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd190YWIvdGFiYmVkX3dpbmRvd190YWIuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy90YWJiZWRfd2luZG93LmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3MiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19oZWFkZXIvdGFiYmVkX3dpbmRvd19oZWFkZXIubGVzcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19saW5rL3RhYmJlZF93aW5kb3dfbGluay5sZXNzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvdGFiYmVkX3dpbmRvdy5sZXNzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19ib2R5L3RhYmJlZF93aW5kb3dfYm9keS5odG1sIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2NvbnRlbnQvdGFiYmVkX3dpbmRvd19jb250ZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfaGVhZGVyL3RhYmJlZF93aW5kb3dfaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfbGluay90YWJiZWRfd2luZG93X2xpbmsuaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL3RhYmJlZF93aW5kb3cuaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19ib2R5L3RhYmJlZF93aW5kb3dfYm9keS5sZXNzP2Q5OWYiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzcz85MmZiIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5sZXNzPzRmZjQiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfbGluay90YWJiZWRfd2luZG93X2xpbmsubGVzcz9iYTFlIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvdGFiYmVkX3dpbmRvdy5sZXNzPzUxYTUiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRhYmJlZC13aW5kb3dcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGFiYmVkLXdpbmRvd1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCBodG1sIGZyb20gXCIuL3RhYmJlZF93aW5kb3dfYm9keS5odG1sXCI7XG5pbXBvcnQgXCIuL3RhYmJlZF93aW5kb3dfYm9keS5sZXNzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sU3RyaW5nKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IHBhcnNlSHRtbChodG1sKVswXTtcblxuZXhwb3J0IGNsYXNzIFRhYmJlZFdpbmRvd0JvZHkgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICNjb250ZW50cztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG5cbiAgICB0aGlzLiNjb250ZW50cyA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5jb250ZW50c1wiKTtcbiAgfVxuXG4gIGdldCBjb250ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy4jY29udGVudHM7XG4gIH1cblxuICBnZXQgaGVhZGVyTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGhlYWRlckxvY2F0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgfVxuXG4gIHNldCByZXZlcnNlKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJyZXZlcnNlXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImNoYW5nZS1vcmllbnRhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBjaGFuZ2VPcmllbnRhdGlvbihmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIik7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0YWJiZWQtd2luZG93LWJvZHlcIiwgVGFiYmVkV2luZG93Qm9keSk7XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi90YWJiZWRfd2luZG93X2NvbnRlbnQuaHRtbFwiO1xuaW1wb3J0IFwiLi90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzc1wiO1xuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbFN0cmluZykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbn1cblxuY29uc3QgdGVtcGxhdGUgPSBwYXJzZUh0bWwoaHRtbClbMF07XG5cbmV4cG9ydCBjbGFzcyBUYWJiZWRXaW5kb3dDb250ZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG4gIH1cblxuICBnZXQgaGVhZGVyTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGhlYWRlckxvY2F0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgfVxuXG4gIHNldCByZXZlcnNlKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJyZXZlcnNlXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImNoYW5nZS1vcmllbnRhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBjaGFuZ2VPcmllbnRhdGlvbihmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIik7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0YWJiZWQtd2luZG93LWNvbnRlbnRcIiwgVGFiYmVkV2luZG93Q29udGVudCk7XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi90YWJiZWRfd2luZG93X2hlYWRlci5odG1sXCI7XG5pbXBvcnQgXCIuL3RhYmJlZF93aW5kb3dfaGVhZGVyLmxlc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gcGFyc2VIdG1sKGh0bWwpWzBdO1xuXG5leHBvcnQgY2xhc3MgVGFiYmVkV2luZG93SGVhZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAjbGlua3M7XG4gICNuZXdUYWJCdXR0b247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuXG4gICAgdGhpcy4jbGlua3MgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgdGhpcy4jbmV3VGFiQnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YWItYnV0dG9uXCIpO1xuICB9XG5cbiAgZ2V0IGxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLiNsaW5rcztcbiAgfVxuXG4gIGdldCBuZXdUYWJCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI25ld1RhYkJ1dHRvbjtcbiAgfVxuXG4gIGdldCBoZWFkZXJMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIik7XG4gIH1cblxuICBzZXQgaGVhZGVyTG9jYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlYWRlci1sb2NhdGlvblwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJyZXZlcnNlXCIpO1xuICB9XG5cbiAgc2V0IHJldmVyc2UoZmxhZykge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInJldmVyc2VcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiY2hhbmdlLW9yaWVudGF0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGNoYW5nZU9yaWVudGF0aW9uKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VPcmllbnRhdGlvblwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJjaGFuZ2VPcmllbnRhdGlvblwiKTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRhYmJlZC13aW5kb3ctaGVhZGVyXCIsIFRhYmJlZFdpbmRvd0hlYWRlcik7XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi90YWJiZWRfd2luZG93X2xpbmsuaHRtbFwiO1xuaW1wb3J0IFwiLi90YWJiZWRfd2luZG93X2xpbmsubGVzc1wiO1xuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbFN0cmluZykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbn1cblxuY29uc3QgdGVtcGxhdGUgPSBwYXJzZUh0bWwoaHRtbClbMF07XG5cbmV4cG9ydCBjbGFzcyBUYWJiZWRXaW5kb3dMaW5rIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAjY29udGVudDtcbiAgI2Nsb3NlQnV0dG9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcblxuICAgIHRoaXMuI2NvbnRlbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLiNjbG9zZUJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5jbG9zZS10YWItYnV0dG9uXCIpO1xuICB9XG5cbiAgZ2V0IGNsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLiNjbG9zZUJ1dHRvbjtcbiAgfVxuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjb250ZW50O1xuICB9XG5cbiAgZ2V0IGhlYWRlckxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhlYWRlci1sb2NhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBoZWFkZXJMb2NhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gIH1cblxuICBzZXQgcmV2ZXJzZShmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicmV2ZXJzZVwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJyZXZlcnNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJjaGFuZ2Utb3JpZW50YXRpb25cIik7XG4gIH1cblxuICBzZXQgY2hhbmdlT3JpZW50YXRpb24oZmxhZykge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIpO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidGFiYmVkLXdpbmRvdy1saW5rXCIsIFRhYmJlZFdpbmRvd0xpbmspO1xuIiwiaW1wb3J0IHsgVGFiYmVkV2luZG93TGluayB9IGZyb20gXCIuLi90YWJiZWRfd2luZG93X2xpbmsvdGFiYmVkX3dpbmRvd19saW5rLmpzXCI7XG5pbXBvcnQgeyBUYWJiZWRXaW5kb3dDb250ZW50IH0gZnJvbSBcIi4uL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmJlZFdpbmRvd1RhYiB7XG4gICNsaW5rO1xuICAjY29udGVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBoZWFkZXJMb2NhdGlvbiA9IFwiVE9QXCIsXG4gICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgIGNoYW5nZUxpbmtzT3JpZW50YXRpb24gPSBmYWxzZVxuICApIHtcbiAgICB0aGlzLiNsaW5rID0gbmV3IFRhYmJlZFdpbmRvd0xpbmsoKTtcbiAgICB0aGlzLiNsaW5rLmhlYWRlckxvY2F0aW9uID0gaGVhZGVyTG9jYXRpb247XG4gICAgdGhpcy4jbGluay5yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICB0aGlzLiNsaW5rLmNoYW5nZU9yaWVudGF0aW9uID0gY2hhbmdlTGlua3NPcmllbnRhdGlvbjtcbiAgICB0aGlzLiNjb250ZW50ID0gbmV3IFRhYmJlZFdpbmRvd0NvbnRlbnQoKTtcbiAgICB0aGlzLiNjb250ZW50LmhlYWRlckxvY2F0aW9uID0gaGVhZGVyTG9jYXRpb247XG4gICAgdGhpcy4jY29udGVudC5yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICB0aGlzLiNjb250ZW50LmNoYW5nZU9yaWVudGF0aW9uID0gY2hhbmdlTGlua3NPcmllbnRhdGlvbjtcbiAgfVxuXG4gIGdldCBsaW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNsaW5rO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG4gIH1cblxuICBnZXQgY2xvc2VCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xpbmsuY2xvc2VCdXR0b247XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICBjb25zdCBsaW5rQ29udGVudCA9IHRoaXMubGluay5jb250ZW50O1xuICAgIHJldHVybiBsaW5rQ29udGVudCA/IGxpbmtDb250ZW50LnRleHRDb250ZW50IDogXCJcIjtcbiAgfVxuXG4gIHNldCBuYW1lKG5hbWVTdHJpbmcpIHtcbiAgICBjb25zdCBsaW5rQ29udGVudCA9IHRoaXMubGluay5jb250ZW50O1xuICAgIGlmIChsaW5rQ29udGVudCkge1xuICAgICAgbGlua0NvbnRlbnQudGV4dENvbnRlbnQgPSBuYW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5saW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi90YWJiZWRfd2luZG93Lmh0bWxcIjtcbmltcG9ydCBcIi4vdGFiYmVkX3dpbmRvdy5sZXNzXCI7XG5pbXBvcnQgeyBUYWJiZWRXaW5kb3dUYWIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfdGFiL3RhYmJlZF93aW5kb3dfdGFiLmpzXCI7XG5pbXBvcnQgeyBUYWJiZWRXaW5kb3dIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfaGVhZGVyL3RhYmJlZF93aW5kb3dfaGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBUYWJiZWRXaW5kb3dCb2R5IH0gZnJvbSBcIi4vY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5LmpzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sU3RyaW5nKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IHBhcnNlSHRtbChodG1sKVswXTtcblxuZXhwb3J0IGNsYXNzIFRhYmJlZFdpbmRvdyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgI2h0bWw7XG4gICNoZWFkZXI7XG4gICNib2R5O1xuICAjdGFicztcblxuICAjaGVhZGVyTG9jYXRpb247XG4gICNyZXZlcnNlO1xuICAjY2hhbmdlTGlua3NPcmllbnRhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBoZWFkZXJMb2NhdGlvbiA9IFwiVE9QXCIsXG4gICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgIGNoYW5nZUxpbmtzT3JpZW50YXRpb24gPSBmYWxzZVxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG5cbiAgICB0aGlzLiNoZWFkZXIgPSBuZXcgVGFiYmVkV2luZG93SGVhZGVyKCk7XG4gICAgdGhpcy4jYm9keSA9IG5ldyBUYWJiZWRXaW5kb3dCb2R5KCk7XG4gICAgdGhpcy4jdGFicyA9IFtdO1xuICAgIHRoaXMuI2h0bWwgPSBodG1sO1xuXG4gICAgdGhpcy4jaGVhZGVyTG9jYXRpb24gPSBoZWFkZXJMb2NhdGlvbjtcbiAgICB0aGlzLiNyZXZlcnNlID0gcmV2ZXJzZTtcbiAgICB0aGlzLiNjaGFuZ2VMaW5rc09yaWVudGF0aW9uID0gY2hhbmdlTGlua3NPcmllbnRhdGlvbjtcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4jaGVhZGVyKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuI2JvZHkpO1xuXG4gICAgaWYgKHRoaXMuI2hlYWRlci5uZXdUYWJCdXR0b24pIHtcbiAgICAgIHRoaXMuI2hlYWRlci5uZXdUYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICAgIHRoaXMuYWRkTmV3VGFiKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGh0bWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2h0bWw7XG4gIH1cblxuICBnZXQgaGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLiNoZWFkZXI7XG4gIH1cblxuICBnZXQgYm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9keTtcbiAgfVxuXG4gIGdldCBsaW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy4jaGVhZGVyLmxpbmtzO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNib2R5LmNvbnRlbnRzO1xuICB9XG5cbiAgZ2V0IHRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RhYnM7XG4gIH1cblxuICBnZXQgbmV3VGFiQnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLiNoZWFkZXIubmV3VGFiQnV0dG9uO1xuICB9XG5cbiAgLy8gc2V0IG5ld1RhYkJ1dHRvbihidG4pIHtcbiAgLy8gICBpZiAoYnRuKSB7XG4gIC8vICAgICBpZiAodGhpcy5uZXdUYWJCdXR0b24pIHtcbiAgLy8gICAgICAgdGhpcy5oZWFkZXIucmVwbGFjZUNoaWxkKGJ0biwgdGhpcy5uZXdUYWJCdXR0b24pO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwibmV3LXRhYi1idXR0b25cIik7XG4gIC8vICAgICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIC8vICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hZGROZXdUYWIoKSk7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aGlzLiNuZXdUYWJCdXR0b24gPSBidG47XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgc2hvd1RhYkJ5SW5kZXgoaW5kZXgpIHtcbiAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnNbaW5kZXhdO1xuICAgIHRoaXMuc2hvd1RhYih0YWIpO1xuICB9XG5cbiAgc2hvd1RhYih0YWIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VGFiID09PSB0YWIpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50VGFiICE9IG51bGwpIHRoaXMuY3VycmVudFRhYi5oaWRlKCk7XG4gICAgaWYgKHRhYiAhPSBudWxsKSB0YWIuc2hvdygpO1xuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcbiAgfVxuXG4gIHJlbW92ZVRhYkJ5SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0aGlzLmN1cnJlbnRUYWIpO1xuICAgICAgY29uc3QgdGFiID0gdGhpcy50YWJzW2luZGV4XTtcbiAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5saW5rcy5yZW1vdmVDaGlsZCh0YWIubGluayk7XG4gICAgICB0aGlzLmNvbnRlbnRzLnJlbW92ZUNoaWxkKHRhYi5jb250ZW50KTtcblxuICAgICAgaWYgKHRhYiA9PT0gdGhpcy5jdXJyZW50VGFiKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLm1pbihNYXRoLm1heChjdXJyZW50SW5kZXgsIDApLCB0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2hvd1RhYkJ5SW5kZXgoaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKHRhYikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICB0aGlzLnJlbW92ZVRhYkJ5SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgYWRkTmV3VGFiQXRJbmRleChpbmRleCwgbmFtZSkge1xuICAgIGluZGV4ID0gaW5kZXggPz8gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPiB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzIVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IHRoaXMudGFicy5sZW5ndGggKyBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWIgPSBuZXcgVGFiYmVkV2luZG93VGFiKFxuICAgICAgdGhpcy4jaGVhZGVyTG9jYXRpb24sXG4gICAgICB0aGlzLiNyZXZlcnNlLFxuICAgICAgdGhpcy4jY2hhbmdlTGlua3NPcmllbnRhdGlvblxuICAgICk7XG4gICAgdGFiLm5hbWUgPSBuYW1lO1xuXG4gICAgdGFiLmxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnNob3dUYWJCeUluZGV4KHRoaXMudGFicy5pbmRleE9mKHRhYikpO1xuICAgIH0pO1xuICAgIGlmICh0YWIuY2xvc2VCdXR0b24pIHtcbiAgICAgIHRhYi5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVUYWJCeUluZGV4KHRoaXMudGFicy5pbmRleE9mKHRhYikpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgICAgdGhpcy5saW5rcy5hcHBlbmRDaGlsZCh0YWIubGluayk7XG4gICAgICB0aGlzLmNvbnRlbnRzLmFwcGVuZENoaWxkKHRhYi5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJzLnNwbGljZSh0YWIsIDApO1xuICAgICAgY29uc3QgbmV4dFRhYiA9IHRoaXMudGFic1tpbmRleCArIDFdO1xuICAgICAgdGhpcy5saW5rcy5pbnNlcnRCZWZvcmUodGFiLmxpbmssIG5leHRUYWIubGluayk7XG4gICAgICB0aGlzLmNvbnRlbnRzLmluc2VydEJlZm9yZSh0YWIuY29udGVudCwgbmV4dFRhYi5jb250ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dUYWJCeUluZGV4KGluZGV4KTtcblxuICAgIHJldHVybiB0YWI7XG4gIH1cblxuICBhZGROZXdUYWIobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFkZE5ld1RhYkF0SW5kZXgobnVsbCwgbmFtZSk7XG4gIH1cblxuICBjbGVhclRhYnMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHRoaXMucmVtb3ZlVGFiQnlJbmRleChpbmRleCkpO1xuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0YWJiZWQtd2luZG93XCIsIFRhYmJlZFdpbmRvdyk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInRhYmJlZC13aW5kb3ctYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIC8qIFRPLURPOiBhZGp1c3QgYWNjb3JkaW5nIHRvIG9yaWVudGF0aW9uIHZpYSBqYXZhc2NyaXB0ICovXFxufVxcbnRhYmJlZC13aW5kb3ctYm9keVtoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICBwYWRkaW5nOiAwIDhweCA4cHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWJvZHlbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgcGFkZGluZzogOHB4IDhweCAwIDhweDtcXG59XFxudGFiYmVkLXdpbmRvdy1ib2R5W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcXG59XFxudGFiYmVkLXdpbmRvdy1ib2R5W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICBwYWRkaW5nOiA4cHggMCA4cHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWJvZHkgPiAuY29udGVudHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMERBQTBEO0FBQzVEO0FBQUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURKO0FBS0U7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJiZWQtd2luZG93LWJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xcbiAgfVxcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDhweDtcXG4gIH1cXG5cXG4gIC8qIFRPLURPOiBhZGp1c3QgYWNjb3JkaW5nIHRvIG9yaWVudGF0aW9uIHZpYSBqYXZhc2NyaXB0ICovXFxuICAmID4gLmNvbnRlbnRzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJiZWQtd2luZG93LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxudGFiYmVkLXdpbmRvdy1jb250ZW50W2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xcbn1cXG50YWJiZWQtd2luZG93LWNvbnRlbnRbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XFxufVxcbnRhYmJlZC13aW5kb3ctY29udGVudFtoZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCA4cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctY29udGVudFtoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWNvbnRlbnQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2NvbnRlbnQvdGFiYmVkX3dpbmRvd19jb250ZW50Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUVFO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQUFKO0FBR0U7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FBREo7QUFJRTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDhweDtcXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gICAgcGFkZGluZzogMTJweCA4cHggMTJweCA4cHg7XFxuICB9XFxuXFxuICAmLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJiZWQtd2luZG93LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXJbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgcGFkZGluZzogNHB4IDhweCAwIDhweDtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXJbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xcbiAgcGFkZGluZzogMCA4cHggNHB4IDhweDtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXJbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xcbiAgcGFkZGluZzogOHB4IDAgOHB4IDRweDtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXJbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl1bcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlcltoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuICBwYWRkaW5nOiA4cHggNHB4IDhweCAwO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlcltoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl1bcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgcGFkZGluZzogNHB4IDRweCAwIDRweDtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXVtyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgcGFkZGluZzogMCA0cHggNHB4IDRweDtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXVtyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gIHBhZGRpbmc6IDRweCAwIDRweCA0cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdW3JldmVyc2VdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl1bY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSB7XFxuICBwYWRkaW5nOiA0cHggNHB4IDRweCAwO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rc1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl1bcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rc1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl1bY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLnNwYWNlciB7XFxuICB3aWR0aDogMjRweDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIG1heC13aWR0aDogNDhweDtcXG4gIGhlaWdodDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLm5ldy10YWItYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG50YWJiZWQtd2luZG93LWhlYWRlciA+IC5uZXctdGFiLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdJO0VBQ0UsOEJBQUE7QUFETjtBQUtFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhKO0FBS0k7RUFDRSw4QkFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNFLHNCQUFBO0FBTE47QUFPTTtFQUNFLDJCQUFBO0FBTFI7QUFTSTtFQUNFLHNCQUFBO0FBUE47QUFTTTtFQUNFLDJCQUFBO0FBUFI7QUFXSTtFQUNFLHNCQUFBO0FBVE47QUFXTTtFQUNFLDhCQUFBO0FBVFI7QUFZTTtFQUNFLDJCQUFBO0FBVlI7QUFjSTtFQUNFLHNCQUFBO0FBWk47QUFjTTtFQUNFLDhCQUFBO0FBWlI7QUFlTTtFQUNFLDJCQUFBO0FBYlI7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBaEJKO0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFqQko7QUFtQkk7RUFDRSx5QkFBQTtBQWpCTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJiZWQtd2luZG93LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDAgOHB4O1xcbiAgfVxcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci10b3A6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDRweCA4cHg7XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDRweDtcXG5cXG4gICAgJltyZXZlcnNlXSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gICAgcGFkZGluZzogOHB4IDRweCA4cHggMDtcXG5cXG4gICAgJltyZXZlcnNlXSB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuICB9XFxuXFxuICAmID4gLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gICAgJltoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiA0cHggNHB4IDAgNHB4O1xcblxcbiAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmW2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4IDRweCA0cHg7XFxuXFxuICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICAgIHBhZGRpbmc6IDRweCAwIDRweCA0cHg7XFxuXFxuICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgfVxcblxcbiAgICAgICZbY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAwO1xcblxcbiAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmW2NoYW5nZS1vcmllbnRhdGlvbl0ge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJiA+IC5zcGFjZXIge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbWluLXdpZHRoOiAyNHB4O1xcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICB9XFxuXFxuICAmID4gLm5ldy10YWItYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmtbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmtbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmtbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdW2NoYW5nZS1vcmllbnRhdGlvbl0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdOm5vdChbY2hhbmdlLW9yaWVudGF0aW9uXSkge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbnRhYmJlZC13aW5kb3ctbGlua1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rW2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXVtjaGFuZ2Utb3JpZW50YXRpb25dIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnRhYmJlZC13aW5kb3ctbGlua1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl06bm90KFtjaGFuZ2Utb3JpZW50YXRpb25dKSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rLmFjdGl2ZSB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTBjMDtcXG4gIGJveC1zaGFkb3c6ICM0MDQwNDAgMHB4IDBweCAzcHggMHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jb250ZW50W2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY29udGVudFtoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rID4gLmNvbnRlbnRbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY29udGVudFtoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQ29uc29sYXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jbG9zZS10YWItYnV0dG9uW2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jbG9zZS10YWItYnV0dG9uW2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jbG9zZS10YWItYnV0dG9uW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY2xvc2UtdGFiLWJ1dHRvbltoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jbG9zZS10YWItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfbGluay90YWJiZWRfd2luZG93X2xpbmsubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFBSjtBQUdFO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLHNCQUFBO0FBRE47QUFJSTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUZOO0FBTUU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBQ0Usc0JBQUE7QUFKTjtBQU9JO0VBQ0UsY0FBQTtBQUxOO0FBU0U7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSSjtBQVVJO0VBQ0UsWUFBQTtBQVJOO0FBV0k7RUFDRSxZQUFBO0FBVE47QUFZSTtFQUNFLFlBQUE7QUFWTjtBQWFJO0VBQ0UsWUFBQTtBQVhOO0FBZUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYko7QUFlSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWJOO0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZE47QUFpQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFmTjtBQWtCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCTjtBQW1CSTtFQUNFLHlCQUFBO0FBakJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmJlZC13aW5kb3ctbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbiAgICAmW2NoYW5nZS1vcmllbnRhdGlvbl0ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgJjpub3QoW2NoYW5nZS1vcmllbnRhdGlvbl0pIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbiAgICAmW2NoYW5nZS1vcmllbnRhdGlvbl0ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgJjpub3QoW2NoYW5nZS1vcmllbnRhdGlvbl0pIHtcXG4gICAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgfVxcbiAgfVxcblxcbiAgJi5hY3RpdmUge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMGMwO1xcbiAgICBib3gtc2hhZG93OiAjNDA0MDQwIDBweCAwcHggM3B4IDBweDtcXG4gIH1cXG5cXG4gICYgPiAuY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG5cXG4gICAgJltoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgJltoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgJltoZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSB7XFxuICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuXFxuICAgICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgJltoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB9XFxuXFxuICAgICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgIGhlaWdodDogMTZweDtcXG4gICAgfVxcblxcbiAgICAmW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB9XFxuXFxuICAgICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwidGFiYmVkLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogNDgwcHg7XFxuICB3aWR0aDogNzUlO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICByZXNpemU6IGJvdGg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGFiYmVkX3dpbmRvdy5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtBQUNKO0FBRUU7RUFDRSw4QkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSwyQkFBQTtBQUZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmJlZC13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcmVzaXplOiBib3RoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmJlZC13aW5kb3ctYm9keVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50c1xcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmJlZC13aW5kb3ctY29udGVudFxcXCI+PC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmJlZC13aW5kb3ctaGVhZGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImxpbmtzXFxcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInNwYWNlclxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJuZXctdGFiLWJ1dHRvblxcXCI+KzwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJiZWQtd2luZG93LWxpbmtcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS10YWItYnV0dG9uXFxcIj54PC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmJlZC13aW5kb3dcXFwiPlxcbiAgPCEtLSA8dGFiLWhlYWRlcj48L3RhYi1oZWFkZXI+IC0tPlxcbiAgPCEtLSA8dGFiLWJvZHk+PC90YWItYm9keT4gLS0+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJiZWRfd2luZG93X2JvZHkubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19jb250ZW50Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19oZWFkZXIubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3dfaGVhZGVyLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3dfbGluay5sZXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19saW5rLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3cubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3cubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGFiYmVkV2luZG93IH0gZnJvbSBcIi4vdGFiYmVkX3dpbmRvdy5qc1wiO1xuXG5jb25zdCB0YWJiZWRXaW5kb3cgPSBuZXcgVGFiYmVkV2luZG93KCk7XG5kb2N1bWVudC5hcHBlbmRDaGlsZCh0YWJiZWRXaW5kb3cpO1xuY29uc29sZS5sb2coXCIhISFcIik7XG4iXSwibmFtZXMiOlsiaHRtbCIsInBhcnNlSHRtbCIsImh0bWxTdHJpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsInRlbXBsYXRlIiwiVGFiYmVkV2luZG93Qm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsImZsYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJIVE1MRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiVGFiYmVkV2luZG93Q29udGVudCIsIlRhYmJlZFdpbmRvd0hlYWRlciIsIlRhYmJlZFdpbmRvd0xpbmsiLCJUYWJiZWRXaW5kb3dUYWIiLCJoZWFkZXJMb2NhdGlvbiIsInJldmVyc2UiLCJjaGFuZ2VMaW5rc09yaWVudGF0aW9uIiwiY2hhbmdlT3JpZW50YXRpb24iLCJjbG9zZUJ1dHRvbiIsImxpbmtDb250ZW50IiwibGluayIsImNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIm5hbWVTdHJpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJUYWJiZWRXaW5kb3ciLCJhcHBlbmRDaGlsZCIsIm5ld1RhYkJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGROZXdUYWIiLCJsaW5rcyIsImNvbnRlbnRzIiwiaW5kZXgiLCJ0YWIiLCJ0YWJzIiwic2hvd1RhYiIsImN1cnJlbnRUYWIiLCJoaWRlIiwic2hvdyIsImxlbmd0aCIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZCIsImkiLCJNYXRoIiwibWluIiwibWF4Iiwic2hvd1RhYkJ5SW5kZXgiLCJyZW1vdmVUYWJCeUluZGV4IiwibmFtZSIsIkVycm9yIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInB1c2giLCJuZXh0VGFiIiwiaW5zZXJ0QmVmb3JlIiwiYWRkTmV3VGFiQXRJbmRleCIsImZvckVhY2giLCJ0YWJiZWRXaW5kb3ciLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==