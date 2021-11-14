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

    _classPrivateFieldSet(_assertThisInitialized(_this), _contents, _this.querySelector(".contents")); // default attributes


    _this.headerLocation = "top";
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
    _this.innerHTML = template.innerHTML; // default attributes

    _this.headerLocation = "top";
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

    _classPrivateFieldSet(_assertThisInitialized(_this), _newTabButton, _this.querySelector(".new-tab-button")); // default attributes


    _this.headerLocation = "top";
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

    _classPrivateFieldSet(_assertThisInitialized(_this), _closeButton, _this.querySelector(".close-tab-button")); // default attributes


    _this.headerLocation = "top";
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

    _classPrivateFieldSet(this, _content, new _tabbed_window_content_tabbed_window_content_js__WEBPACK_IMPORTED_MODULE_1__.TabbedWindowContent());
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
/* harmony import */ var _tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabbed_window_orientation.less */ "./src/tabbed_window_orientation.less");
/* harmony import */ var _components_tabbed_window_tab_tabbed_window_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabbed_window_tab/tabbed_window_tab.js */ "./src/components/tabbed_window_tab/tabbed_window_tab.js");
/* harmony import */ var _components_tabbed_window_header_tabbed_window_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabbed_window_header/tabbed_window_header.js */ "./src/components/tabbed_window_header/tabbed_window_header.js");
/* harmony import */ var _components_tabbed_window_body_tabbed_window_body_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabbed_window_body/tabbed_window_body.js */ "./src/components/tabbed_window_body/tabbed_window_body.js");
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

var TabbedWindow = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabbedWindow, _HTMLElement);

  var _super = _createSuper(TabbedWindow);

  function TabbedWindow() {
    var _this;

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

    _this.innerHTML = template.innerHTML;

    _classPrivateFieldSet(_assertThisInitialized(_this), _header, _this.querySelector("tabbed-window-header"));

    _classPrivateFieldSet(_assertThisInitialized(_this), _body, _this.querySelector("tabbed-window-body"));

    _classPrivateFieldSet(_assertThisInitialized(_this), _tabs, []);

    _classPrivateFieldSet(_assertThisInitialized(_this), _html, _tabbed_window_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

      var tab = new _components_tabbed_window_tab_tabbed_window_tab_js__WEBPACK_IMPORTED_MODULE_3__.TabbedWindowTab();
      tab.headerLocation = this.headerLocation;
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-body {\n  background-color: #808080;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  justify-content: start;\n  align-items: stretch;\n  /* TO-DO: adjust according to orientation via javascript */\n}\ntabbed-window-body > .contents {\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_body/tabbed_window_body.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,sBAAA;EACA,oBAAA;EACA,0DAA0D;AAC5D;AACE;EACE,6BAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;AACJ","sourcesContent":["tabbed-window-body {\n  background-color: #808080;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  justify-content: start;\n  align-items: stretch;\n\n  /* TO-DO: adjust according to orientation via javascript */\n  & > .contents {\n    background-color: transparent;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-content {\n  background-color: #a0a0a0;\n  display: none;\n  flex: 1 1 auto;\n}\ntabbed-window-content.active {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_content/tabbed_window_content.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,cAAA;AACF;AACE;EACE,cAAA;AACJ","sourcesContent":["tabbed-window-content {\n  background-color: #a0a0a0;\n  display: none;\n  flex: 1 1 auto;\n\n  &.active {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-header {\n  background-color: #808080;\n  border: 1px solid black;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 16px;\n}\ntabbed-window-header > .links {\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  flex: 1 1 auto;\n  overflow-x: auto;\n  overflow-y: auto;\n}\ntabbed-window-header > .new-tab-button {\n  text-align: center;\n  font-family: Consolas;\n  cursor: pointer;\n  border-radius: 25%;\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n}\ntabbed-window-header > .new-tab-button:hover {\n  background-color: #404040;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_header/tabbed_window_header.less"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,uBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EACE,aAAA;EACA,6BAAA;EACA,oBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;AACJ;AAEE;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;AAAJ;AAEI;EACE,yBAAA;AAAN","sourcesContent":["tabbed-window-header {\n  background-color: #808080;\n  border: 1px solid black;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 16px;\n\n  & > .links {\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    flex: 1 1 auto;\n    overflow-x: auto;\n    overflow-y: auto;\n  }\n\n  & > .new-tab-button {\n    text-align: center;\n    font-family: Consolas;\n    cursor: pointer;\n    border-radius: 25%;\n    padding: 4px;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n\n    &:hover {\n      background-color: #404040;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window-link {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  background-color: transparent;\n  display: flex;\n  flex: 1 1 auto;\n}\ntabbed-window-link.active {\n  color: #000000;\n  background-color: #a0a0a0c0;\n  box-shadow: #404040 0px 0px 3px 0px;\n}\ntabbed-window-link > .content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1 1 auto;\n}\ntabbed-window-link > .close-tab-button {\n  text-align: center;\n  font-family: Consolas;\n  cursor: pointer;\n  border-radius: 50%;\n}\ntabbed-window-link > .close-tab-button:hover {\n  background-color: #404040;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tabbed_window_link/tabbed_window_link.less"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,aAAA;EACA,cAAA;AACF;AACE;EACE,cAAA;EACA,2BAAA;EACA,mCAAA;AACJ;AAEE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AAAJ;AAGE;EACE,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,kBAAA;AADJ;AAGI;EACE,yBAAA;AADN","sourcesContent":["tabbed-window-link {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  background-color: transparent;\n  display: flex;\n  flex: 1 1 auto;\n\n  &.active {\n    color: rgba(0, 0, 0, 1);\n    background-color: #a0a0a0c0;\n    box-shadow: #404040 0px 0px 3px 0px;\n  }\n\n  & > .content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1 1 auto;\n  }\n\n  & > .close-tab-button {\n    text-align: center;\n    font-family: Consolas;\n    cursor: pointer;\n    border-radius: 50%;\n\n    &:hover {\n      background-color: #404040;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  height: 480px;\n  width: 75%;\n  flex: 1 1 auto;\n  resize: both;\n  overflow: auto;\n}\ntabbed-window[header-location=\"top\"] {\n  flex-direction: column;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header {\n  border-bottom: 0;\n  border-radius: 12px 12px 0 0;\n  padding: 4px 8px 0 8px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links {\n  padding: 4px 4px 0 4px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links tabbed-window-link {\n  border-radius: 12px 12px 0 0;\n  padding: 8px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links tabbed-window-link[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links tabbed-window-link > .content {\n  padding: 0px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-header > .links tabbed-window-link > .close-tab-button {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-body {\n  border-top: 0;\n  border-radius: 0 0 12px 12px;\n  padding: 0 8px 8px 8px;\n}\ntabbed-window[header-location=\"top\"] > tabbed-window-body > .contents > tabbed-window-content {\n  border-radius: 0 0 12px 12px;\n  padding: 8px 12px 8px 12px;\n}\ntabbed-window[header-location=\"bottom\"] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header {\n  border-top: 0;\n  border-radius: 0 0 12px 12px;\n  padding: 0 8px 8px 8px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links {\n  padding: 0 4px 4px 4px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links tabbed-window-link {\n  border-radius: 0 0 12px 12px;\n  padding: 8px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links tabbed-window-link[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links tabbed-window-link > .content {\n  padding: 0px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-header > .links tabbed-window-link > .close-tab-button {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-body {\n  border-bottom: 0;\n  border-radius: 12px 12px 0 0;\n  padding: 8px 8px 0 8px;\n}\ntabbed-window[header-location=\"bottom\"] > tabbed-window-body > .contents > tabbed-window-content {\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px 8px 12px;\n}\ntabbed-window[header-location=\"left\"] {\n  flex-direction: row;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header {\n  border-right: 0;\n  border-radius: 12px 0 0 12px;\n  padding: 8px 0 8px 8px;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header[reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header:not([reverse]) {\n  flex-direction: column;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links {\n  padding: 4px 0 4px 4px;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links[reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links:not([reverse]) {\n  flex-direction: column;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links[change-orientation] {\n  justify-content: flex-start;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links tabbed-window-link {\n  border-radius: 12px 0 0 12px;\n  padding: 8px;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links tabbed-window-link[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links tabbed-window-link > .content {\n  padding: 0px;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-header > .links tabbed-window-link > .close-tab-button {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-body {\n  border-left: 0;\n  border-radius: 0 12px 12px 0;\n  padding: 8px 8px 8px 0;\n}\ntabbed-window[header-location=\"left\"] > tabbed-window-body > .contents > tabbed-window-content {\n  border-radius: 0 12px 12px 0;\n  padding: 12px 8px 12px 8px;\n}\ntabbed-window[header-location=\"right\"] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header {\n  border-left: 0;\n  border-radius: 0 12px 12px 0;\n  padding: 8px 4px 8px 0;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header[reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links {\n  padding: 4px 4px 4px 0;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links[reverse] {\n  flex-direction: column-reverse;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links[change-orientation] {\n  justify-content: flex-start;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links > tabbed-window-link {\n  border-radius: 0 12px 12px 0;\n  padding: 8px;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links > tabbed-window-link[reverse] {\n  flex-direction: row-reverse;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links > tabbed-window-link > .content {\n  padding: 0px;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-header > .links > tabbed-window-link > .close-tab-button {\n  padding: 4px;\n  width: 16px;\n  height: 16px;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-body {\n  border-right: 0;\n  border-radius: 12px 0 0 12px;\n  padding: 8px 0 8px 8px;\n}\ntabbed-window[header-location=\"right\"] > tabbed-window-body > .contents > tabbed-window-content {\n  border-radius: 12px 0 0 12px;\n  padding: 12px 8px 12px 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/tabbed_window.less"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;EACA,oBAAA;EACA,aAAA;EACA,UAAA;EACA,cAAA;EACA,YAAA;EACA,cAAA;AADF;AAGE;EACE,sBAAA;AADJ;AAGI;EACE,gBAAA;EACA,4BAAA;EACA,sBAAA;AADN;AAGM;EACE,2BAAA;AADR;AAIM;EACE,sBAAA;AAFR;AAIQ;EACE,2BAAA;AAFV;AAFM;EAQI,4BAAA;EACA,YAAA;AAHV;AAKU;EACE,2BAAA;AAHZ;AAMU;EACE,YAAA;AAJZ;AAOU;EACE,YAAA;EACA,WAAA;EACA,YAAA;AALZ;AAWI;EACE,aAAA;EACA,4BAAA;EACA,sBAAA;AATN;AAeQ;EACE,4BAAA;EACA,0BAAA;AAbV;AAmBE;EACE,8BAAA;AAjBJ;AAmBI;EACE,aAAA;EACA,4BAAA;EACA,sBAAA;AAjBN;AAmBM;EACE,2BAAA;AAjBR;AAoBM;EACE,sBAAA;AAlBR;AAoBQ;EACE,2BAAA;AAlBV;AAcM;EAQI,4BAAA;EACA,YAAA;AAnBV;AAqBU;EACE,2BAAA;AAnBZ;AAsBU;EACE,YAAA;AApBZ;AAuBU;EACE,YAAA;EACA,WAAA;EACA,YAAA;AArBZ;AA2BI;EACE,gBAAA;EACA,4BAAA;EACA,sBAAA;AAzBN;AA+BQ;EACE,4BAAA;EACA,0BAAA;AA7BV;AAmCE;EACE,mBAAA;AAjCJ;AAmCI;EACE,eAAA;EACA,4BAAA;EACA,sBAAA;AAjCN;AAmCM;EACE,8BAAA;AAjCR;AAoCM;EACE,sBAAA;AAlCR;AAqCM;EACE,sBAAA;AAnCR;AAqCQ;EACE,8BAAA;AAnCV;AAsCQ;EACE,sBAAA;AApCV;AAuCQ;EACE,2BAAA;AArCV;AAyBM;EAgBI,4BAAA;EACA,YAAA;AAtCV;AAwCU;EACE,2BAAA;AAtCZ;AAyCU;EACE,YAAA;AAvCZ;AA0CU;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAxCZ;AA8CI;EACE,cAAA;EACA,4BAAA;EACA,sBAAA;AA5CN;AAkDQ;EACE,4BAAA;EACA,0BAAA;AAhDV;AAsDE;EACE,2BAAA;AApDJ;AAsDI;EACE,cAAA;EACA,4BAAA;EACA,sBAAA;AApDN;AAsDM;EACE,8BAAA;AApDR;AAuDM;EACE,sBAAA;AArDR;AAuDQ;EACE,8BAAA;AArDV;AAwDQ;EACE,2BAAA;AAtDV;AAyDQ;EACE,4BAAA;EACA,YAAA;AAvDV;AAyDU;EACE,2BAAA;AAvDZ;AA0DU;EACE,YAAA;AAxDZ;AA2DU;EACE,YAAA;EACA,WAAA;EACA,YAAA;AAzDZ;AA+DI;EACE,eAAA;EACA,4BAAA;EACA,sBAAA;AA7DN;AAmEQ;EACE,4BAAA;EACA,0BAAA;AAjEV","sourcesContent":["@import \"./tabbed_window_config.less\";\n\ntabbed-window {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  height: @window-initial-height;\n  width: @window-initial-width;\n  flex: 1 1 auto;\n  resize: both;\n  overflow: auto;\n\n  &[header-location=\"top\"] {\n    flex-direction: column;\n\n    & > tabbed-window-header {\n      border-bottom: 0;\n      border-radius: 12px 12px 0 0;\n      padding: 4px 8px 0 8px;\n\n      &[reverse] {\n        flex-direction: row-reverse;\n      }\n\n      & > .links {\n        padding: 4px 4px 0 4px;\n\n        &[reverse] {\n          flex-direction: row-reverse;\n        }\n\n        tabbed-window-link {\n          border-radius: 12px 12px 0 0;\n          padding: 8px;\n\n          &[reverse] {\n            flex-direction: row-reverse;\n          }\n\n          & > .content {\n            padding: 0px;\n          }\n\n          & > .close-tab-button {\n            padding: 4px;\n            width: 16px;\n            height: 16px;\n          }\n        }\n      }\n    }\n\n    & > tabbed-window-body {\n      border-top: 0;\n      border-radius: 0 0 12px 12px;\n      padding: 0 8px 8px 8px;\n\n      & > .contents {\n        &[reverse] {\n        }\n\n        & > tabbed-window-content {\n          border-radius: 0 0 12px 12px;\n          padding: 8px 12px 8px 12px;\n        }\n      }\n    }\n  }\n\n  &[header-location=\"bottom\"] {\n    flex-direction: column-reverse;\n\n    & > tabbed-window-header {\n      border-top: 0;\n      border-radius: 0 0 12px 12px;\n      padding: 0 8px 8px 8px;\n\n      &[reverse] {\n        flex-direction: row-reverse;\n      }\n\n      & > .links {\n        padding: 0 4px 4px 4px;\n\n        &[reverse] {\n          flex-direction: row-reverse;\n        }\n\n        tabbed-window-link {\n          border-radius: 0 0 12px 12px;\n          padding: 8px;\n\n          &[reverse] {\n            flex-direction: row-reverse;\n          }\n\n          & > .content {\n            padding: 0px;\n          }\n\n          & > .close-tab-button {\n            padding: 4px;\n            width: 16px;\n            height: 16px;\n          }\n        }\n      }\n    }\n\n    & > tabbed-window-body {\n      border-bottom: 0;\n      border-radius: 12px 12px 0 0;\n      padding: 8px 8px 0 8px;\n\n      & > .contents {\n        &[reverse] {\n        }\n\n        & > tabbed-window-content {\n          border-radius: 12px 12px 0 0;\n          padding: 8px 12px 8px 12px;\n        }\n      }\n    }\n  }\n\n  &[header-location=\"left\"] {\n    flex-direction: row;\n\n    & > tabbed-window-header {\n      border-right: 0;\n      border-radius: 12px 0 0 12px;\n      padding: 8px 0 8px 8px;\n\n      &[reverse] {\n        flex-direction: column-reverse;\n      }\n\n      &:not([reverse]) {\n        flex-direction: column;\n      }\n\n      & > .links {\n        padding: 4px 0 4px 4px;\n\n        &[reverse] {\n          flex-direction: column-reverse;\n        }\n\n        &:not([reverse]) {\n          flex-direction: column;\n        }\n\n        &[change-orientation] {\n          justify-content: flex-start;\n        }\n\n        tabbed-window-link {\n          border-radius: 12px 0 0 12px;\n          padding: 8px;\n\n          &[reverse] {\n            flex-direction: row-reverse;\n          }\n\n          & > .content {\n            padding: 0px;\n          }\n\n          & > .close-tab-button {\n            padding: 4px;\n            width: 16px;\n            height: 16px;\n          }\n        }\n      }\n    }\n\n    & > tabbed-window-body {\n      border-left: 0;\n      border-radius: 0 12px 12px 0;\n      padding: 8px 8px 8px 0;\n\n      & > .contents {\n        &[reverse] {\n        }\n\n        & > tabbed-window-content {\n          border-radius: 0 12px 12px 0;\n          padding: 12px 8px 12px 8px;\n        }\n      }\n    }\n  }\n\n  &[header-location=\"right\"] {\n    flex-direction: row-reverse;\n\n    & > tabbed-window-header {\n      border-left: 0;\n      border-radius: 0 12px 12px 0;\n      padding: 8px 4px 8px 0;\n\n      &[reverse] {\n        flex-direction: column-reverse;\n      }\n\n      & > .links {\n        padding: 4px 4px 4px 0;\n\n        &[reverse] {\n          flex-direction: column-reverse;\n        }\n\n        &[change-orientation] {\n          justify-content: flex-start;\n        }\n\n        & > tabbed-window-link {\n          border-radius: 0 12px 12px 0;\n          padding: 8px;\n\n          &[reverse] {\n            flex-direction: row-reverse;\n          }\n\n          & > .content {\n            padding: 0px;\n          }\n\n          & > .close-tab-button {\n            padding: 4px;\n            width: 16px;\n            height: 16px;\n          }\n        }\n      }\n    }\n\n    & > tabbed-window-body {\n      border-right: 0;\n      border-radius: 12px 0 0 12px;\n      padding: 8px 0 8px 8px;\n\n      & > .contents {\n        &[reverse] {\n        }\n\n        & > tabbed-window-content {\n          border-radius: 12px 0 0 12px;\n          padding: 12px 8px 12px 8px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window_orientation.less":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window_orientation.less ***!
  \*************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "tabbed-window[header-location=\"left\"][adjust-links-orientation] > tabbed-window-link {\n  justify-content: flex-start;\n}\ntabbed-window[header-location=\"right\"][adjust-links-orientation] > tabbed-window-link {\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/tabbed_window_orientation.less"],"names":[],"mappings":"AAGM;EACE,2BAAA;AAFR;AAgBM;EACE,sBAAA;AAdR","sourcesContent":["tabbed-window {\n  &[header-location=\"left\"] {\n    &[adjust-links-orientation] {\n      & > tabbed-window-link {\n        justify-content: flex-start;\n      }\n    }\n\n    // &:not([adjust-links-orientation]) {\n    //   & > tabbed-window-link {\n    //     flex-direction: row-reverse;\n    //     flex: 0 0 auto;\n    //   }\n    // }\n  }\n\n  &[header-location=\"right\"] {\n    &[adjust-links-orientation] {\n      & > tabbed-window-link {\n        flex-direction: column;\n      }\n    }\n\n    // &:not([adjust-links-orientation]) {\n    //   & > tabbed-window-link {\n    //     flex: 0 0 auto;\n    //   }\n    // }\n  }\n}\n"],"sourceRoot":""}]);
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
var code = "<div class=\"tabbed-window-header\">\n  <div class=\"links\"></div>\n  <div class=\"new-tab-button\">+</div>\n</div>\n";
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>UI-Component/TabbedWindow</title>\n  </head>\n  <body>\n    <tabbed-window header-location=\"top\"> </tabbed-window>\n    <tabbed-window header-location=\"bottom\"> </tabbed-window>\n    <tabbed-window header-location=\"left\"> </tabbed-window>\n    <tabbed-window header-location=\"right\"> </tabbed-window>\n    <br />\n    <tabbed-window header-location=\"top\" adjust-links-orientation>\n    </tabbed-window>\n    <tabbed-window header-location=\"bottom\" adjust-links-orientation>\n    </tabbed-window>\n    <tabbed-window header-location=\"left\" adjust-links-orientation>\n    </tabbed-window>\n    <tabbed-window header-location=\"right\" adjust-links-orientation>\n    </tabbed-window>\n  </body>\n</html>\n";
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
var code = "<div class=\"tabbed-window\">\n  <tabbed-window-header></tabbed-window-header>\n  <tabbed-window-body></tabbed-window-body>\n</div>\n";
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

/***/ "./src/tabbed_window_orientation.less":
/*!********************************************!*\
  !*** ./src/tabbed_window_orientation.less ***!
  \********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./tabbed_window_orientation.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/tabbed_window_orientation.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_tabbed_window_orientation_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");

 // const tabbedWindow = new TabbedWindow();
// tabbedWindow.headerLocation = "top";
// document.querySelector("body").appendChild(tabbedWindow);

console.log("!!!");
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxVQUFuQixFQUErQjtBQUM3QixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRixFQUFBQSxTQUFTLENBQUNHLFNBQVYsR0FBc0JKLFVBQXRCO0FBQ0EsU0FBT0MsU0FBUyxDQUFDSSxRQUFqQjtBQUNEOztBQUVELElBQU1DLFFBQVEsR0FBR1AsU0FBUyxDQUFDRCxnRUFBRCxDQUFULENBQWdCLENBQWhCLENBQWpCOzs7O0FBRU8sSUFBTVMsZ0JBQWI7QUFBQTs7QUFBQTs7QUFHRSw4QkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQTtBQUFBOztBQUdaLFVBQUtILFNBQUwsR0FBaUJFLFFBQVEsQ0FBQ0YsU0FBMUI7O0FBRUEsb0VBQWlCLE1BQUtJLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBakIsRUFMWSxDQU9aOzs7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLEtBQXRCO0FBUlk7QUFTYjs7QUFaSDtBQUFBO0FBQUEsU0FjRSxlQUFlO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBaEJIO0FBQUE7QUFBQSxTQWtCRSxlQUFxQjtBQUNuQixhQUFPLEtBQUtDLFlBQUwsQ0FBa0IsaUJBQWxCLENBQVA7QUFDRCxLQXBCSDtBQUFBLFNBc0JFLGFBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixXQUFLQyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQ0QsS0FBckM7QUFDRDtBQXhCSDtBQUFBO0FBQUEsU0EwQkUsZUFBYztBQUNaLGFBQU8sS0FBS0UsWUFBTCxDQUFrQixTQUFsQixDQUFQO0FBQ0QsS0E1Qkg7QUFBQSxTQThCRSxhQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUtGLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLFNBQXJCO0FBQ0Q7QUFDRjtBQXBDSDtBQUFBO0FBQUEsU0FzQ0UsZUFBd0I7QUFDdEIsYUFBTyxLQUFLRixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0QsS0F4Q0g7QUFBQSxTQTBDRSxhQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS0YsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUMsRUFBdkM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0Y7QUFoREg7O0FBQUE7QUFBQSxpQ0FBc0NDLFdBQXRDO0FBbURBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLG9CQUE3QixFQUFtRFosZ0JBQW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBOztBQUVBLFNBQVNSLFNBQVQsQ0FBbUJDLFVBQW5CLEVBQStCO0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csU0FBVixHQUFzQkosVUFBdEI7QUFDQSxTQUFPQyxTQUFTLENBQUNJLFFBQWpCO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHUCxTQUFTLENBQUNELG1FQUFELENBQVQsQ0FBZ0IsQ0FBaEIsQ0FBakI7QUFFTyxJQUFNc0IsbUJBQWI7QUFBQTs7QUFBQTs7QUFDRSxpQ0FBYztBQUFBOztBQUFBOztBQUNaO0FBRUEsVUFBS2hCLFNBQUwsR0FBaUJFLFFBQVEsQ0FBQ0YsU0FBMUIsQ0FIWSxDQUtaOztBQUNBLFVBQUtLLGNBQUwsR0FBc0IsS0FBdEI7QUFOWTtBQU9iOztBQVJIO0FBQUE7QUFBQSxTQVVFLGVBQXFCO0FBQ25CLGFBQU8sS0FBS0MsWUFBTCxDQUFrQixpQkFBbEIsQ0FBUDtBQUNELEtBWkg7QUFBQSxTQWNFLGFBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixXQUFLQyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQ0QsS0FBckM7QUFDRDtBQWhCSDtBQUFBO0FBQUEsU0FrQkUsZUFBYztBQUNaLGFBQU8sS0FBS0UsWUFBTCxDQUFrQixTQUFsQixDQUFQO0FBQ0QsS0FwQkg7QUFBQSxTQXNCRSxhQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUtGLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLFNBQXJCO0FBQ0Q7QUFDRjtBQTVCSDtBQUFBO0FBQUEsU0E4QkUsZUFBd0I7QUFDdEIsYUFBTyxLQUFLRixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0QsS0FoQ0g7QUFBQSxTQWtDRSxhQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS0YsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUMsRUFBdkM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0Y7QUF4Q0g7O0FBQUE7QUFBQSxpQ0FBeUNDLFdBQXpDO0FBMkNBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLHVCQUE3QixFQUFzREMsbUJBQXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUEsU0FBU3JCLFNBQVQsQ0FBbUJDLFVBQW5CLEVBQStCO0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csU0FBVixHQUFzQkosVUFBdEI7QUFDQSxTQUFPQyxTQUFTLENBQUNJLFFBQWpCO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHUCxTQUFTLENBQUNELGtFQUFELENBQVQsQ0FBZ0IsQ0FBaEIsQ0FBakI7Ozs7OztBQUVPLElBQU11QixrQkFBYjtBQUFBOztBQUFBOztBQUlFLGdDQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR1osVUFBS2pCLFNBQUwsR0FBaUJFLFFBQVEsQ0FBQ0YsU0FBMUI7O0FBRUEsaUVBQWMsTUFBS0ksYUFBTCxDQUFtQixRQUFuQixDQUFkOztBQUNBLHdFQUFxQixNQUFLQSxhQUFMLENBQW1CLGlCQUFuQixDQUFyQixFQU5ZLENBUVo7OztBQUNBLFVBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFUWTtBQVViOztBQWRIO0FBQUE7QUFBQSxTQWdCRSxlQUFZO0FBQ1YsbUNBQU8sSUFBUDtBQUNEO0FBbEJIO0FBQUE7QUFBQSxTQW9CRSxlQUFtQjtBQUNqQixtQ0FBTyxJQUFQO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBLFNBd0JFLGVBQXFCO0FBQ25CLGFBQU8sS0FBS0MsWUFBTCxDQUFrQixpQkFBbEIsQ0FBUDtBQUNELEtBMUJIO0FBQUEsU0E0QkUsYUFBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLFdBQUtDLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQXFDRCxLQUFyQztBQUNEO0FBOUJIO0FBQUE7QUFBQSxTQWdDRSxlQUFjO0FBQ1osYUFBTyxLQUFLRSxZQUFMLENBQWtCLFNBQWxCLENBQVA7QUFDRCxLQWxDSDtBQUFBLFNBb0NFLGFBQVlDLElBQVosRUFBa0I7QUFDaEIsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS0YsWUFBTCxDQUFrQixTQUFsQixFQUE2QixFQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtHLGVBQUwsQ0FBcUIsU0FBckI7QUFDRDtBQUNGO0FBMUNIO0FBQUE7QUFBQSxTQTRDRSxlQUF3QjtBQUN0QixhQUFPLEtBQUtGLFlBQUwsQ0FBa0Isb0JBQWxCLENBQVA7QUFDRCxLQTlDSDtBQUFBLFNBZ0RFLGFBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixVQUFJQSxJQUFKLEVBQVU7QUFDUixhQUFLRixZQUFMLENBQWtCLG1CQUFsQixFQUF1QyxFQUF2QztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtHLGVBQUwsQ0FBcUIsbUJBQXJCO0FBQ0Q7QUFDRjtBQXRESDs7QUFBQTtBQUFBLGlDQUF3Q0MsV0FBeEM7QUF5REFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsc0JBQTdCLEVBQXFERSxrQkFBckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTs7QUFFQSxTQUFTdEIsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUYsRUFBQUEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCSixVQUF0QjtBQUNBLFNBQU9DLFNBQVMsQ0FBQ0ksUUFBakI7QUFDRDs7QUFFRCxJQUFNQyxRQUFRLEdBQUdQLFNBQVMsQ0FBQ0QsZ0VBQUQsQ0FBVCxDQUFnQixDQUFoQixDQUFqQjs7Ozs7O0FBRU8sSUFBTXdCLGdCQUFiO0FBQUE7O0FBQUE7O0FBSUUsOEJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHWixVQUFLbEIsU0FBTCxHQUFpQkUsUUFBUSxDQUFDRixTQUExQjs7QUFFQSxtRUFBZ0IsTUFBS0ksYUFBTCxDQUFtQixVQUFuQixDQUFoQjs7QUFDQSx1RUFBb0IsTUFBS0EsYUFBTCxDQUFtQixtQkFBbkIsQ0FBcEIsRUFOWSxDQVFaOzs7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLEtBQXRCO0FBVFk7QUFVYjs7QUFkSDtBQUFBO0FBQUEsU0FnQkUsZUFBa0I7QUFDaEIsbUNBQU8sSUFBUDtBQUNEO0FBbEJIO0FBQUE7QUFBQSxTQW9CRSxlQUFjO0FBQ1osbUNBQU8sSUFBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQSxTQXdCRSxlQUFxQjtBQUNuQixhQUFPLEtBQUtDLFlBQUwsQ0FBa0IsaUJBQWxCLENBQVA7QUFDRCxLQTFCSDtBQUFBLFNBNEJFLGFBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixXQUFLQyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQ0QsS0FBckM7QUFDRDtBQTlCSDtBQUFBO0FBQUEsU0FnQ0UsZUFBYztBQUNaLGFBQU8sS0FBS0UsWUFBTCxDQUFrQixTQUFsQixDQUFQO0FBQ0QsS0FsQ0g7QUFBQSxTQW9DRSxhQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUtGLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLFNBQXJCO0FBQ0Q7QUFDRjtBQTFDSDtBQUFBO0FBQUEsU0E0Q0UsZUFBd0I7QUFDdEIsYUFBTyxLQUFLRixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0QsS0E5Q0g7QUFBQSxTQWdERSxhQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS0YsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUMsRUFBdkM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0Y7QUF0REg7O0FBQUE7QUFBQSxpQ0FBc0NDLFdBQXRDO0FBeURBQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLG9CQUE3QixFQUFtREcsZ0JBQW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTs7Ozs7O0FBRU8sSUFBTUMsZUFBYjtBQUlFLDZCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ1osdUNBQWEsSUFBSUQsdUZBQUosRUFBYjs7QUFDQSwwQ0FBZ0IsSUFBSUYsZ0dBQUosRUFBaEI7QUFDRDs7QUFQSDtBQUFBO0FBQUEsU0FTRSxlQUFXO0FBQ1QsbUNBQU8sSUFBUDtBQUNEO0FBWEg7QUFBQTtBQUFBLFNBYUUsZUFBYztBQUNaLG1DQUFPLElBQVA7QUFDRDtBQWZIO0FBQUE7QUFBQSxTQWlCRSxlQUFrQjtBQUNoQixhQUFPLG1DQUFXSSxXQUFsQjtBQUNEO0FBbkJIO0FBQUE7QUFBQSxTQXFCRSxlQUFXO0FBQ1QsVUFBTUMsV0FBVyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsT0FBOUI7QUFDQSxhQUFPRixXQUFXLEdBQUdBLFdBQVcsQ0FBQ0csV0FBZixHQUE2QixFQUEvQztBQUNELEtBeEJIO0FBQUEsU0EwQkUsYUFBU0MsVUFBVCxFQUFxQjtBQUNuQixVQUFNSixXQUFXLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxPQUE5Qjs7QUFDQSxVQUFJRixXQUFKLEVBQWlCO0FBQ2ZBLFFBQUFBLFdBQVcsQ0FBQ0csV0FBWixHQUEwQkMsVUFBMUI7QUFDRDtBQUNGO0FBL0JIO0FBQUE7QUFBQSxXQWlDRSxnQkFBTztBQUNMLFdBQUtILElBQUwsQ0FBVUksU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDQSxXQUFLSixPQUFMLENBQWFHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0Q7QUFwQ0g7QUFBQTtBQUFBLFdBc0NFLGdCQUFPO0FBQ0wsV0FBS0wsSUFBTCxDQUFVSSxTQUFWLENBQW9CRSxNQUFwQixDQUEyQixRQUEzQjtBQUNBLFdBQUtMLE9BQUwsQ0FBYUcsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsUUFBOUI7QUFDRDtBQXpDSDs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTakMsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUYsRUFBQUEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCSixVQUF0QjtBQUNBLFNBQU9DLFNBQVMsQ0FBQ0ksUUFBakI7QUFDRDs7QUFFRCxJQUFNQyxRQUFRLEdBQUdQLFNBQVMsQ0FBQ0QsMkRBQUQsQ0FBVCxDQUFnQixDQUFoQixDQUFqQjs7Ozs7Ozs7OztBQUVPLElBQU1tQyxZQUFiO0FBQUE7O0FBQUE7O0FBTUUsMEJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHWixVQUFLN0IsU0FBTCxHQUFpQkUsUUFBUSxDQUFDRixTQUExQjs7QUFFQSxrRUFBZSxNQUFLSSxhQUFMLENBQW1CLHNCQUFuQixDQUFmOztBQUNBLGdFQUFhLE1BQUtBLGFBQUwsQ0FBbUIsb0JBQW5CLENBQWI7O0FBQ0EsZ0VBQWEsRUFBYjs7QUFDQSxnRUFBYVYsMkRBQWI7O0FBRUEsVUFBS29DLFdBQUw7O0FBQ0EsVUFBS0EsV0FBTDs7QUFFQSxRQUFJLDhEQUFhQyxZQUFqQixFQUErQjtBQUM3QixvRUFBYUEsWUFBYixDQUEwQkMsZ0JBQTFCLENBQTJDLE9BQTNDLEVBQW9EO0FBQUEsZUFDbEQsTUFBS0MsU0FBTCxFQURrRDtBQUFBLE9BQXBEO0FBR0Q7O0FBakJXO0FBa0JiOztBQXhCSDtBQUFBO0FBQUEsU0EwQkUsZUFBVztBQUNULG1DQUFPLElBQVA7QUFDRDtBQTVCSDtBQUFBO0FBQUEsU0E4QkUsZUFBYTtBQUNYLG1DQUFPLElBQVA7QUFDRDtBQWhDSDtBQUFBO0FBQUEsU0FrQ0UsZUFBVztBQUNULG1DQUFPLElBQVA7QUFDRDtBQXBDSDtBQUFBO0FBQUEsU0FzQ0UsZUFBWTtBQUNWLGFBQU8scUNBQWFDLEtBQXBCO0FBQ0Q7QUF4Q0g7QUFBQTtBQUFBLFNBMENFLGVBQWU7QUFDYixhQUFPLG1DQUFXQyxRQUFsQjtBQUNEO0FBNUNIO0FBQUE7QUFBQSxTQThDRSxlQUFXO0FBQ1QsbUNBQU8sSUFBUDtBQUNEO0FBaERIO0FBQUE7QUFBQSxTQWtERSxlQUFtQjtBQUNqQixhQUFPLHFDQUFhSixZQUFwQjtBQUNELEtBcERILENBc0RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqRUY7QUFBQTtBQUFBLFNBbUVFLGVBQXFCO0FBQ25CLGFBQU8sS0FBS3pCLFlBQUwsQ0FBa0IsaUJBQWxCLENBQVA7QUFDRCxLQXJFSDtBQUFBLFNBdUVFLGFBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixXQUFLQyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQ0QsS0FBckM7QUFDRDtBQXpFSDtBQUFBO0FBQUEsU0EyRUUsZUFBYztBQUNaLGFBQU8sS0FBS0UsWUFBTCxDQUFrQixTQUFsQixDQUFQO0FBQ0QsS0E3RUg7QUFBQSxTQStFRSxhQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQUlBLElBQUosRUFBVTtBQUNSLGFBQUtGLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLFNBQXJCO0FBQ0Q7QUFDRjtBQXJGSDtBQUFBO0FBQUEsU0F1RkUsZUFBd0I7QUFDdEIsYUFBTyxLQUFLRixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0QsS0F6Rkg7QUFBQSxTQTJGRSxhQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSUEsSUFBSixFQUFVO0FBQ1IsYUFBS0YsWUFBTCxDQUFrQixtQkFBbEIsRUFBdUMsRUFBdkM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRyxlQUFMLENBQXFCLG1CQUFyQjtBQUNEO0FBQ0Y7QUFqR0g7QUFBQTtBQUFBLFdBbUdFLHdCQUFleUIsS0FBZixFQUFzQjtBQUNwQixVQUFNQyxHQUFHLEdBQUcsS0FBS0MsSUFBTCxDQUFVRixLQUFWLENBQVo7QUFDQSxXQUFLRyxPQUFMLENBQWFGLEdBQWI7QUFDRDtBQXRHSDtBQUFBO0FBQUEsV0F3R0UsaUJBQVFBLEdBQVIsRUFBYTtBQUNYLFVBQUksS0FBS0csVUFBTCxLQUFvQkgsR0FBeEIsRUFBNkI7QUFDN0IsVUFBSSxLQUFLRyxVQUFMLElBQW1CLElBQXZCLEVBQTZCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCO0FBQzdCLFVBQUlKLEdBQUcsSUFBSSxJQUFYLEVBQWlCQSxHQUFHLENBQUNLLElBQUo7QUFDakIsV0FBS0YsVUFBTCxHQUFrQkgsR0FBbEI7QUFDRDtBQTdHSDtBQUFBO0FBQUEsV0ErR0UsMEJBQWlCRCxLQUFqQixFQUF3QjtBQUN0QixVQUFJQSxLQUFLLEdBQUcsS0FBS0UsSUFBTCxDQUFVSyxNQUF0QixFQUE4QjtBQUM1QixZQUFNQyxZQUFZLEdBQUcsS0FBS04sSUFBTCxDQUFVTyxPQUFWLENBQWtCLEtBQUtMLFVBQXZCLENBQXJCO0FBQ0EsWUFBTUgsR0FBRyxHQUFHLEtBQUtDLElBQUwsQ0FBVUYsS0FBVixDQUFaO0FBQ0EsYUFBS0UsSUFBTCxDQUFVUSxNQUFWLENBQWlCVixLQUFqQixFQUF3QixDQUF4QjtBQUNBLGFBQUtGLEtBQUwsQ0FBV2EsV0FBWCxDQUF1QlYsR0FBRyxDQUFDZixJQUEzQjtBQUNBLGFBQUthLFFBQUwsQ0FBY1ksV0FBZCxDQUEwQlYsR0FBRyxDQUFDZCxPQUE5Qjs7QUFFQSxZQUFJYyxHQUFHLEtBQUssS0FBS0csVUFBakIsRUFBNkI7QUFDM0IsZUFBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGNBQU1RLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTUCxZQUFULEVBQXVCLENBQXZCLENBQVQsRUFBb0MsS0FBS04sSUFBTCxDQUFVSyxNQUFWLEdBQW1CLENBQXZELENBQVY7QUFDQSxlQUFLUyxjQUFMLENBQW9CSixDQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQTdISDtBQUFBO0FBQUEsV0ErSEUsbUJBQVVYLEdBQVYsRUFBZTtBQUNiLFVBQU1ELEtBQUssR0FBRyxLQUFLRSxJQUFMLENBQVVPLE9BQVYsQ0FBa0JSLEdBQWxCLENBQWQ7QUFDQSxXQUFLZ0IsZ0JBQUwsQ0FBc0JqQixLQUF0QjtBQUNEO0FBbElIO0FBQUE7QUFBQSxXQW9JRSwwQkFBaUJBLEtBQWpCLEVBQXdCa0IsSUFBeEIsRUFBOEI7QUFBQTtBQUFBOztBQUM1QmxCLE1BQUFBLEtBQUssYUFBR0EsS0FBSCwyQ0FBWSxLQUFLRSxJQUFMLENBQVVLLE1BQTNCOztBQUNBLFVBQUlQLEtBQUssR0FBRyxLQUFLRSxJQUFMLENBQVVLLE1BQXRCLEVBQThCO0FBQzVCLGNBQU0sSUFBSVksS0FBSixDQUFVLHNCQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJbkIsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiQSxRQUFBQSxLQUFLLEdBQUcsS0FBS0UsSUFBTCxDQUFVSyxNQUFWLEdBQW1CUCxLQUEzQjtBQUNEOztBQUVELFVBQU1DLEdBQUcsR0FBRyxJQUFJbEIsK0ZBQUosRUFBWjtBQUNBa0IsTUFBQUEsR0FBRyxDQUFDaEMsY0FBSixHQUFxQixLQUFLQSxjQUExQjtBQUNBZ0MsTUFBQUEsR0FBRyxDQUFDaUIsSUFBSixHQUFXQSxJQUFYO0FBRUFqQixNQUFBQSxHQUFHLENBQUNmLElBQUosQ0FBU1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ3dCLENBQUQsRUFBTztBQUN4QyxjQUFJLENBQUNKLGNBQUwsQ0FBb0IsTUFBSSxDQUFDZCxJQUFMLENBQVVPLE9BQVYsQ0FBa0JSLEdBQWxCLENBQXBCO0FBQ0QsT0FGRDs7QUFHQSxVQUFJQSxHQUFHLENBQUNqQixXQUFSLEVBQXFCO0FBQ25CaUIsUUFBQUEsR0FBRyxDQUFDakIsV0FBSixDQUFnQlksZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUN3QixDQUFELEVBQU87QUFDL0MsZ0JBQUksQ0FBQ0gsZ0JBQUwsQ0FBc0IsTUFBSSxDQUFDZixJQUFMLENBQVVPLE9BQVYsQ0FBa0JSLEdBQWxCLENBQXRCOztBQUNBbUIsVUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0QsU0FIRDtBQUlEOztBQUVELFVBQUlyQixLQUFLLEtBQUssS0FBS0UsSUFBTCxDQUFVSyxNQUF4QixFQUFnQztBQUM5QixhQUFLTCxJQUFMLENBQVVvQixJQUFWLENBQWVyQixHQUFmO0FBQ0EsYUFBS0gsS0FBTCxDQUFXSixXQUFYLENBQXVCTyxHQUFHLENBQUNmLElBQTNCO0FBQ0EsYUFBS2EsUUFBTCxDQUFjTCxXQUFkLENBQTBCTyxHQUFHLENBQUNkLE9BQTlCO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsYUFBS2UsSUFBTCxDQUFVUSxNQUFWLENBQWlCVCxHQUFqQixFQUFzQixDQUF0QjtBQUNBLFlBQU1zQixPQUFPLEdBQUcsS0FBS3JCLElBQUwsQ0FBVUYsS0FBSyxHQUFHLENBQWxCLENBQWhCO0FBQ0EsYUFBS0YsS0FBTCxDQUFXMEIsWUFBWCxDQUF3QnZCLEdBQUcsQ0FBQ2YsSUFBNUIsRUFBa0NxQyxPQUFPLENBQUNyQyxJQUExQztBQUNBLGFBQUthLFFBQUwsQ0FBY3lCLFlBQWQsQ0FBMkJ2QixHQUFHLENBQUNkLE9BQS9CLEVBQXdDb0MsT0FBTyxDQUFDcEMsT0FBaEQ7QUFDRDs7QUFFRCxXQUFLNkIsY0FBTCxDQUFvQmhCLEtBQXBCO0FBRUEsYUFBT0MsR0FBUDtBQUNEO0FBMUtIO0FBQUE7QUFBQSxXQTRLRSxtQkFBVWlCLElBQVYsRUFBZ0I7QUFDZCxhQUFPLEtBQUtPLGdCQUFMLENBQXNCLElBQXRCLEVBQTRCUCxJQUE1QixDQUFQO0FBQ0Q7QUE5S0g7QUFBQTtBQUFBLFdBZ0xFLHFCQUFZO0FBQUE7O0FBQ1YsV0FBS2hCLElBQUwsQ0FBVXdCLE9BQVYsQ0FBa0IsVUFBQ3pCLEdBQUQsRUFBTUQsS0FBTjtBQUFBLGVBQWdCLE1BQUksQ0FBQ2lCLGdCQUFMLENBQXNCakIsS0FBdEIsQ0FBaEI7QUFBQSxPQUFsQjtBQUNEO0FBbExIOztBQUFBO0FBQUEsaUNBQWtDeEIsV0FBbEM7QUFxTEFDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsZUFBN0IsRUFBOENjLFlBQTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDhEQUE4RCw4QkFBOEIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsbUJBQW1CLDJCQUEyQix5QkFBeUIsa0VBQWtFLGtDQUFrQyxrQ0FBa0Msa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRyxTQUFTLDRIQUE0SCxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsNkNBQTZDLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLDJCQUEyQixtQkFBbUIsMkJBQTJCLHlCQUF5QixvRkFBb0Ysb0NBQW9DLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssR0FBRyxxQkFBcUI7QUFDNW5DO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlFQUFpRSw4QkFBOEIsa0JBQWtCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxTQUFTLGtJQUFrSSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxnREFBZ0QsOEJBQThCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLHFCQUFxQixLQUFLLEdBQUcscUJBQXFCO0FBQ2hqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnRUFBZ0UsOEJBQThCLDRCQUE0QixrQkFBa0Isa0NBQWtDLHdCQUF3QixjQUFjLEdBQUcsaUNBQWlDLGtCQUFrQixrQ0FBa0MseUJBQXlCLG1CQUFtQixxQkFBcUIscUJBQXFCLEdBQUcsMENBQTBDLHVCQUF1QiwwQkFBMEIsb0JBQW9CLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGlCQUFpQixjQUFjLEdBQUcsZ0RBQWdELDhCQUE4QixHQUFHLFNBQVMsZ0lBQWdJLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLCtDQUErQyw4QkFBOEIsNEJBQTRCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLGNBQWMsa0JBQWtCLG9CQUFvQixvQ0FBb0MsMkJBQTJCLHFCQUFxQix1QkFBdUIsdUJBQXVCLEtBQUssMkJBQTJCLHlCQUF5Qiw0QkFBNEIsc0JBQXNCLHlCQUF5QixtQkFBbUIsa0JBQWtCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLGtDQUFrQyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDbHJEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDhEQUE4RCx1QkFBdUIsOEJBQThCLGtDQUFrQyxrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLG1CQUFtQixnQ0FBZ0Msd0NBQXdDLEdBQUcsaUNBQWlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG1CQUFtQixHQUFHLDBDQUEwQyx1QkFBdUIsMEJBQTBCLG9CQUFvQix1QkFBdUIsR0FBRyxnREFBZ0QsOEJBQThCLEdBQUcsU0FBUyw0SEFBNEgsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyw2Q0FBNkMsdUJBQXVCLDhCQUE4QixrQ0FBa0Msa0JBQWtCLG1CQUFtQixnQkFBZ0IsOEJBQThCLGtDQUFrQywwQ0FBMEMsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIscUJBQXFCLEtBQUssNkJBQTZCLHlCQUF5Qiw0QkFBNEIsc0JBQXNCLHlCQUF5QixpQkFBaUIsa0NBQWtDLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMzbUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EseURBQXlELGtCQUFrQiw0QkFBNEIseUJBQXlCLGtCQUFrQixlQUFlLG1CQUFtQixpQkFBaUIsbUJBQW1CLEdBQUcsMENBQTBDLDJCQUEyQixHQUFHLGlFQUFpRSxxQkFBcUIsaUNBQWlDLDJCQUEyQixHQUFHLDBFQUEwRSxnQ0FBZ0MsR0FBRywwRUFBMEUsMkJBQTJCLEdBQUcsbUZBQW1GLGdDQUFnQyxHQUFHLDZGQUE2RixpQ0FBaUMsaUJBQWlCLEdBQUcsc0dBQXNHLGdDQUFnQyxHQUFHLHdHQUF3RyxpQkFBaUIsR0FBRyxpSEFBaUgsaUJBQWlCLGdCQUFnQixpQkFBaUIsR0FBRywrREFBK0Qsa0JBQWtCLGlDQUFpQywyQkFBMkIsR0FBRyxtR0FBbUcsaUNBQWlDLCtCQUErQixHQUFHLDZDQUE2QyxtQ0FBbUMsR0FBRyxvRUFBb0Usa0JBQWtCLGlDQUFpQywyQkFBMkIsR0FBRyw2RUFBNkUsZ0NBQWdDLEdBQUcsNkVBQTZFLDJCQUEyQixHQUFHLHNGQUFzRixnQ0FBZ0MsR0FBRyxnR0FBZ0csaUNBQWlDLGlCQUFpQixHQUFHLHlHQUF5RyxnQ0FBZ0MsR0FBRywyR0FBMkcsaUJBQWlCLEdBQUcsb0hBQW9ILGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsa0VBQWtFLHFCQUFxQixpQ0FBaUMsMkJBQTJCLEdBQUcsc0dBQXNHLGlDQUFpQywrQkFBK0IsR0FBRywyQ0FBMkMsd0JBQXdCLEdBQUcsa0VBQWtFLG9CQUFvQixpQ0FBaUMsMkJBQTJCLEdBQUcsMkVBQTJFLG1DQUFtQyxHQUFHLGlGQUFpRiwyQkFBMkIsR0FBRywyRUFBMkUsMkJBQTJCLEdBQUcsb0ZBQW9GLG1DQUFtQyxHQUFHLDBGQUEwRiwyQkFBMkIsR0FBRywrRkFBK0YsZ0NBQWdDLEdBQUcsOEZBQThGLGlDQUFpQyxpQkFBaUIsR0FBRyx1R0FBdUcsZ0NBQWdDLEdBQUcseUdBQXlHLGlCQUFpQixHQUFHLGtIQUFrSCxpQkFBaUIsZ0JBQWdCLGlCQUFpQixHQUFHLGdFQUFnRSxtQkFBbUIsaUNBQWlDLDJCQUEyQixHQUFHLG9HQUFvRyxpQ0FBaUMsK0JBQStCLEdBQUcsNENBQTRDLGdDQUFnQyxHQUFHLG1FQUFtRSxtQkFBbUIsaUNBQWlDLDJCQUEyQixHQUFHLDRFQUE0RSxtQ0FBbUMsR0FBRyw0RUFBNEUsMkJBQTJCLEdBQUcscUZBQXFGLG1DQUFtQyxHQUFHLGdHQUFnRyxnQ0FBZ0MsR0FBRyxpR0FBaUcsaUNBQWlDLGlCQUFpQixHQUFHLDBHQUEwRyxnQ0FBZ0MsR0FBRyw0R0FBNEcsaUJBQWlCLEdBQUcscUhBQXFILGlCQUFpQixnQkFBZ0IsaUJBQWlCLEdBQUcsaUVBQWlFLG9CQUFvQixpQ0FBaUMsMkJBQTJCLEdBQUcscUdBQXFHLGlDQUFpQywrQkFBK0IsR0FBRyxTQUFTLHlGQUF5RixVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLGtFQUFrRSxtQkFBbUIsa0JBQWtCLDRCQUE0Qix5QkFBeUIsbUNBQW1DLGlDQUFpQyxtQkFBbUIsaUJBQWlCLG1CQUFtQixrQ0FBa0MsNkJBQTZCLGtDQUFrQyx5QkFBeUIscUNBQXFDLCtCQUErQixzQkFBc0Isc0NBQXNDLFNBQVMsc0JBQXNCLGlDQUFpQyx3QkFBd0Isd0NBQXdDLFdBQVcsZ0NBQWdDLHlDQUF5Qyx5QkFBeUIsMEJBQTBCLDBDQUEwQyxhQUFhLDRCQUE0QiwyQkFBMkIsYUFBYSxxQ0FBcUMsMkJBQTJCLDBCQUEwQiwyQkFBMkIsYUFBYSxXQUFXLFNBQVMsT0FBTyxnQ0FBZ0Msc0JBQXNCLHFDQUFxQywrQkFBK0IseUJBQXlCLHNCQUFzQixXQUFXLHVDQUF1Qyx5Q0FBeUMsdUNBQXVDLFdBQVcsU0FBUyxPQUFPLEtBQUsscUNBQXFDLHFDQUFxQyxrQ0FBa0Msc0JBQXNCLHFDQUFxQywrQkFBK0Isc0JBQXNCLHNDQUFzQyxTQUFTLHNCQUFzQixpQ0FBaUMsd0JBQXdCLHdDQUF3QyxXQUFXLGdDQUFnQyx5Q0FBeUMseUJBQXlCLDBCQUEwQiwwQ0FBMEMsYUFBYSw0QkFBNEIsMkJBQTJCLGFBQWEscUNBQXFDLDJCQUEyQiwwQkFBMEIsMkJBQTJCLGFBQWEsV0FBVyxTQUFTLE9BQU8sZ0NBQWdDLHlCQUF5QixxQ0FBcUMsK0JBQStCLHlCQUF5QixzQkFBc0IsV0FBVyx1Q0FBdUMseUNBQXlDLHVDQUF1QyxXQUFXLFNBQVMsT0FBTyxLQUFLLG1DQUFtQywwQkFBMEIsa0NBQWtDLHdCQUF3QixxQ0FBcUMsK0JBQStCLHNCQUFzQix5Q0FBeUMsU0FBUyw0QkFBNEIsaUNBQWlDLFNBQVMsc0JBQXNCLGlDQUFpQyx3QkFBd0IsMkNBQTJDLFdBQVcsOEJBQThCLG1DQUFtQyxXQUFXLG1DQUFtQyx3Q0FBd0MsV0FBVyxnQ0FBZ0MseUNBQXlDLHlCQUF5QiwwQkFBMEIsMENBQTBDLGFBQWEsNEJBQTRCLDJCQUEyQixhQUFhLHFDQUFxQywyQkFBMkIsMEJBQTBCLDJCQUEyQixhQUFhLFdBQVcsU0FBUyxPQUFPLGdDQUFnQyx1QkFBdUIscUNBQXFDLCtCQUErQix5QkFBeUIsc0JBQXNCLFdBQVcsdUNBQXVDLHlDQUF5Qyx1Q0FBdUMsV0FBVyxTQUFTLE9BQU8sS0FBSyxvQ0FBb0Msa0NBQWtDLGtDQUFrQyx1QkFBdUIscUNBQXFDLCtCQUErQixzQkFBc0IseUNBQXlDLFNBQVMsc0JBQXNCLGlDQUFpQyx3QkFBd0IsMkNBQTJDLFdBQVcsbUNBQW1DLHdDQUF3QyxXQUFXLG9DQUFvQyx5Q0FBeUMseUJBQXlCLDBCQUEwQiwwQ0FBMEMsYUFBYSw0QkFBNEIsMkJBQTJCLGFBQWEscUNBQXFDLDJCQUEyQiwwQkFBMEIsMkJBQTJCLGFBQWEsV0FBVyxTQUFTLE9BQU8sZ0NBQWdDLHdCQUF3QixxQ0FBcUMsK0JBQStCLHlCQUF5QixzQkFBc0IsV0FBVyx1Q0FBdUMseUNBQXlDLHVDQUF1QyxXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ24rWjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrSUFBa0ksZ0NBQWdDLEdBQUcsMkZBQTJGLDJCQUEyQixHQUFHLFNBQVMscUdBQXFHLFdBQVcsS0FBSyxNQUFNLFdBQVcsd0NBQXdDLGlDQUFpQyxtQ0FBbUMsZ0NBQWdDLHNDQUFzQyxTQUFTLE9BQU8sOENBQThDLG1DQUFtQyx5Q0FBeUMsNEJBQTRCLFlBQVksVUFBVSxLQUFLLG9DQUFvQyxtQ0FBbUMsZ0NBQWdDLGlDQUFpQyxTQUFTLE9BQU8sOENBQThDLG1DQUFtQyw0QkFBNEIsWUFBWSxVQUFVLEtBQUssR0FBRyxxQkFBcUI7QUFDeGxDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbkIsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBcUs7QUFDcks7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5SUFBTzs7OztBQUkrRztBQUN2SSxPQUFPLGlFQUFlLHlJQUFPLElBQUksZ0pBQWMsR0FBRyxnSkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3SztBQUN4SztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRJQUFPOzs7O0FBSWtIO0FBQzFJLE9BQU8saUVBQWUsNElBQU8sSUFBSSxtSkFBYyxHQUFHLG1KQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXVLO0FBQ3ZLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMklBQU87Ozs7QUFJaUg7QUFDekksT0FBTyxpRUFBZSwySUFBTyxJQUFJLGtKQUFjLEdBQUcsa0pBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBcUs7QUFDcks7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5SUFBTzs7OztBQUkrRztBQUN2SSxPQUFPLGlFQUFlLHlJQUFPLElBQUksZ0pBQWMsR0FBRyxnSkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvSjtBQUNwSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9JQUFPOzs7O0FBSThGO0FBQ3RILE9BQU8saUVBQWUsb0lBQU8sSUFBSSwySUFBYyxHQUFHLDJJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWdLO0FBQ2hLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0pBQU87Ozs7QUFJMEc7QUFDbEksT0FBTyxpRUFBZSxnSkFBTyxJQUFJLHVKQUFjLEdBQUcsdUpBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0NBR0E7QUFDQTtBQUNBOztBQUNBa0MsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfYm9keS90YWJiZWRfd2luZG93X2JvZHkuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfaGVhZGVyL3RhYmJlZF93aW5kb3dfaGVhZGVyLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2xpbmsvdGFiYmVkX3dpbmRvd19saW5rLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X3RhYi90YWJiZWRfd2luZG93X3RhYi5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL3RhYmJlZF93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfYm9keS90YWJiZWRfd2luZG93X2JvZHkubGVzcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19jb250ZW50L3RhYmJlZF93aW5kb3dfY29udGVudC5sZXNzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5sZXNzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2xpbmsvdGFiYmVkX3dpbmRvd19saW5rLmxlc3MiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy90YWJiZWRfd2luZG93Lmxlc3MiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy90YWJiZWRfd2luZG93X29yaWVudGF0aW9uLmxlc3MiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5Lmh0bWwiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQuaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19oZWFkZXIvdGFiYmVkX3dpbmRvd19oZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19saW5rL3RhYmJlZF93aW5kb3dfbGluay5odG1sIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL3RhYmJlZF93aW5kb3cuaHRtbCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vc3JjL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd19ib2R5L3RhYmJlZF93aW5kb3dfYm9keS5sZXNzP2Q5OWYiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfY29udGVudC90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzcz85MmZiIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5sZXNzPzRmZjQiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfbGluay90YWJiZWRfd2luZG93X2xpbmsubGVzcz9iYTFlIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvdGFiYmVkX3dpbmRvdy5sZXNzPzUxYTUiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL3NyYy90YWJiZWRfd2luZG93X29yaWVudGF0aW9uLmxlc3M/MGZmMyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YWJiZWQtd2luZG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFiYmVkLXdpbmRvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RhYmJlZC13aW5kb3cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGFiYmVkLXdpbmRvd1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0YWJiZWQtd2luZG93XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IGh0bWwgZnJvbSBcIi4vdGFiYmVkX3dpbmRvd19ib2R5Lmh0bWxcIjtcbmltcG9ydCBcIi4vdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gcGFyc2VIdG1sKGh0bWwpWzBdO1xuXG5leHBvcnQgY2xhc3MgVGFiYmVkV2luZG93Qm9keSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgI2NvbnRlbnRzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcblxuICAgIHRoaXMuI2NvbnRlbnRzID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRzXCIpO1xuXG4gICAgLy8gZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5oZWFkZXJMb2NhdGlvbiA9IFwidG9wXCI7XG4gIH1cblxuICBnZXQgY29udGVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnRlbnRzO1xuICB9XG5cbiAgZ2V0IGhlYWRlckxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhlYWRlci1sb2NhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBoZWFkZXJMb2NhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gIH1cblxuICBzZXQgcmV2ZXJzZShmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicmV2ZXJzZVwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJyZXZlcnNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJjaGFuZ2Utb3JpZW50YXRpb25cIik7XG4gIH1cblxuICBzZXQgY2hhbmdlT3JpZW50YXRpb24oZmxhZykge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIpO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidGFiYmVkLXdpbmRvdy1ib2R5XCIsIFRhYmJlZFdpbmRvd0JvZHkpO1xuIiwiaW1wb3J0IGh0bWwgZnJvbSBcIi4vdGFiYmVkX3dpbmRvd19jb250ZW50Lmh0bWxcIjtcbmltcG9ydCBcIi4vdGFiYmVkX3dpbmRvd19jb250ZW50Lmxlc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gcGFyc2VIdG1sKGh0bWwpWzBdO1xuXG5leHBvcnQgY2xhc3MgVGFiYmVkV2luZG93Q29udGVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuXG4gICAgLy8gZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5oZWFkZXJMb2NhdGlvbiA9IFwidG9wXCI7XG4gIH1cblxuICBnZXQgaGVhZGVyTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGhlYWRlckxvY2F0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgfVxuXG4gIHNldCByZXZlcnNlKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJyZXZlcnNlXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImNoYW5nZS1vcmllbnRhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBjaGFuZ2VPcmllbnRhdGlvbihmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIik7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0YWJiZWQtd2luZG93LWNvbnRlbnRcIiwgVGFiYmVkV2luZG93Q29udGVudCk7XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi90YWJiZWRfd2luZG93X2hlYWRlci5odG1sXCI7XG5pbXBvcnQgXCIuL3RhYmJlZF93aW5kb3dfaGVhZGVyLmxlc3NcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gcGFyc2VIdG1sKGh0bWwpWzBdO1xuXG5leHBvcnQgY2xhc3MgVGFiYmVkV2luZG93SGVhZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAjbGlua3M7XG4gICNuZXdUYWJCdXR0b247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuXG4gICAgdGhpcy4jbGlua3MgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gICAgdGhpcy4jbmV3VGFiQnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YWItYnV0dG9uXCIpO1xuXG4gICAgLy8gZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgdGhpcy5oZWFkZXJMb2NhdGlvbiA9IFwidG9wXCI7XG4gIH1cblxuICBnZXQgbGlua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xpbmtzO1xuICB9XG5cbiAgZ2V0IG5ld1RhYkJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jbmV3VGFiQnV0dG9uO1xuICB9XG5cbiAgZ2V0IGhlYWRlckxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhlYWRlci1sb2NhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBoZWFkZXJMb2NhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gIH1cblxuICBzZXQgcmV2ZXJzZShmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwicmV2ZXJzZVwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJyZXZlcnNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGFuZ2VPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJjaGFuZ2Utb3JpZW50YXRpb25cIik7XG4gIH1cblxuICBzZXQgY2hhbmdlT3JpZW50YXRpb24oZmxhZykge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcImNoYW5nZU9yaWVudGF0aW9uXCIpO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidGFiYmVkLXdpbmRvdy1oZWFkZXJcIiwgVGFiYmVkV2luZG93SGVhZGVyKTtcbiIsImltcG9ydCBodG1sIGZyb20gXCIuL3RhYmJlZF93aW5kb3dfbGluay5odG1sXCI7XG5pbXBvcnQgXCIuL3RhYmJlZF93aW5kb3dfbGluay5sZXNzXCI7XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sU3RyaW5nKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IHBhcnNlSHRtbChodG1sKVswXTtcblxuZXhwb3J0IGNsYXNzIFRhYmJlZFdpbmRvd0xpbmsgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICNjb250ZW50O1xuICAjY2xvc2VCdXR0b247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xuXG4gICAgdGhpcy4jY29udGVudCA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIHRoaXMuI2Nsb3NlQnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXRhYi1idXR0b25cIik7XG5cbiAgICAvLyBkZWZhdWx0IGF0dHJpYnV0ZXNcbiAgICB0aGlzLmhlYWRlckxvY2F0aW9uID0gXCJ0b3BcIjtcbiAgfVxuXG4gIGdldCBjbG9zZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jY2xvc2VCdXR0b247XG4gIH1cblxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29udGVudDtcbiAgfVxuXG4gIGdldCBoZWFkZXJMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIik7XG4gIH1cblxuICBzZXQgaGVhZGVyTG9jYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcImhlYWRlci1sb2NhdGlvblwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoXCJyZXZlcnNlXCIpO1xuICB9XG5cbiAgc2V0IHJldmVyc2UoZmxhZykge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInJldmVyc2VcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwiY2hhbmdlLW9yaWVudGF0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGNoYW5nZU9yaWVudGF0aW9uKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VPcmllbnRhdGlvblwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJjaGFuZ2VPcmllbnRhdGlvblwiKTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRhYmJlZC13aW5kb3ctbGlua1wiLCBUYWJiZWRXaW5kb3dMaW5rKTtcbiIsImltcG9ydCB7IFRhYmJlZFdpbmRvd0xpbmsgfSBmcm9tIFwiLi4vdGFiYmVkX3dpbmRvd19saW5rL3RhYmJlZF93aW5kb3dfbGluay5qc1wiO1xuaW1wb3J0IHsgVGFiYmVkV2luZG93Q29udGVudCB9IGZyb20gXCIuLi90YWJiZWRfd2luZG93X2NvbnRlbnQvdGFiYmVkX3dpbmRvd19jb250ZW50LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWJiZWRXaW5kb3dUYWIge1xuICAjbGluaztcbiAgI2NvbnRlbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jbGluayA9IG5ldyBUYWJiZWRXaW5kb3dMaW5rKCk7XG4gICAgdGhpcy4jY29udGVudCA9IG5ldyBUYWJiZWRXaW5kb3dDb250ZW50KCk7XG4gIH1cblxuICBnZXQgbGluaygpIHtcbiAgICByZXR1cm4gdGhpcy4jbGluaztcbiAgfVxuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjb250ZW50O1xuICB9XG5cbiAgZ2V0IGNsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLiNsaW5rLmNsb3NlQnV0dG9uO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgY29uc3QgbGlua0NvbnRlbnQgPSB0aGlzLmxpbmsuY29udGVudDtcbiAgICByZXR1cm4gbGlua0NvbnRlbnQgPyBsaW5rQ29udGVudC50ZXh0Q29udGVudCA6IFwiXCI7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lU3RyaW5nKSB7XG4gICAgY29uc3QgbGlua0NvbnRlbnQgPSB0aGlzLmxpbmsuY29udGVudDtcbiAgICBpZiAobGlua0NvbnRlbnQpIHtcbiAgICAgIGxpbmtDb250ZW50LnRleHRDb250ZW50ID0gbmFtZVN0cmluZztcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMubGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSBcIi4vdGFiYmVkX3dpbmRvdy5odG1sXCI7XG5pbXBvcnQgXCIuL3RhYmJlZF93aW5kb3cubGVzc1wiO1xuaW1wb3J0IFwiLi90YWJiZWRfd2luZG93X29yaWVudGF0aW9uLmxlc3NcIjtcbmltcG9ydCB7IFRhYmJlZFdpbmRvd1RhYiB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFiYmVkX3dpbmRvd190YWIvdGFiYmVkX3dpbmRvd190YWIuanNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy90YWJiZWRfd2luZG93X2hlYWRlci90YWJiZWRfd2luZG93X2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfYm9keS90YWJiZWRfd2luZG93X2JvZHkuanNcIjtcblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWxTdHJpbmcpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG59XG5cbmNvbnN0IHRlbXBsYXRlID0gcGFyc2VIdG1sKGh0bWwpWzBdO1xuXG5leHBvcnQgY2xhc3MgVGFiYmVkV2luZG93IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAjaHRtbDtcbiAgI2hlYWRlcjtcbiAgI2JvZHk7XG4gICN0YWJzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcblxuICAgIHRoaXMuI2hlYWRlciA9IHRoaXMucXVlcnlTZWxlY3RvcihcInRhYmJlZC13aW5kb3ctaGVhZGVyXCIpO1xuICAgIHRoaXMuI2JvZHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJ0YWJiZWQtd2luZG93LWJvZHlcIik7XG4gICAgdGhpcy4jdGFicyA9IFtdO1xuICAgIHRoaXMuI2h0bWwgPSBodG1sO1xuXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiNoZWFkZXIpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4jYm9keSk7XG5cbiAgICBpZiAodGhpcy4jaGVhZGVyLm5ld1RhYkJ1dHRvbikge1xuICAgICAgdGhpcy4jaGVhZGVyLm5ld1RhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5hZGROZXdUYWIoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaHRtbDtcbiAgfVxuXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hlYWRlcjtcbiAgfVxuXG4gIGdldCBib2R5KCkge1xuICAgIHJldHVybiB0aGlzLiNib2R5O1xuICB9XG5cbiAgZ2V0IGxpbmtzKCkge1xuICAgIHJldHVybiB0aGlzLiNoZWFkZXIubGlua3M7XG4gIH1cblxuICBnZXQgY29udGVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvZHkuY29udGVudHM7XG4gIH1cblxuICBnZXQgdGFicygpIHtcbiAgICByZXR1cm4gdGhpcy4jdGFicztcbiAgfVxuXG4gIGdldCBuZXdUYWJCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hlYWRlci5uZXdUYWJCdXR0b247XG4gIH1cblxuICAvLyBzZXQgbmV3VGFiQnV0dG9uKGJ0bikge1xuICAvLyAgIGlmIChidG4pIHtcbiAgLy8gICAgIGlmICh0aGlzLm5ld1RhYkJ1dHRvbikge1xuICAvLyAgICAgICB0aGlzLmhlYWRlci5yZXBsYWNlQ2hpbGQoYnRuLCB0aGlzLm5ld1RhYkJ1dHRvbik7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFiLWJ1dHRvblwiKTtcbiAgLy8gICAgICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgLy8gICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmFkZE5ld1RhYigpKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMuI25ld1RhYkJ1dHRvbiA9IGJ0bjtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBnZXQgaGVhZGVyTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaGVhZGVyLWxvY2F0aW9uXCIpO1xuICB9XG5cbiAgc2V0IGhlYWRlckxvY2F0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJoZWFkZXItbG9jYXRpb25cIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKFwicmV2ZXJzZVwiKTtcbiAgfVxuXG4gIHNldCByZXZlcnNlKGZsYWcpIHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJyZXZlcnNlXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInJldmVyc2VcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZShcImNoYW5nZS1vcmllbnRhdGlvblwiKTtcbiAgfVxuXG4gIHNldCBjaGFuZ2VPcmllbnRhdGlvbihmbGFnKSB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFwiY2hhbmdlT3JpZW50YXRpb25cIik7XG4gICAgfVxuICB9XG5cbiAgc2hvd1RhYkJ5SW5kZXgoaW5kZXgpIHtcbiAgICBjb25zdCB0YWIgPSB0aGlzLnRhYnNbaW5kZXhdO1xuICAgIHRoaXMuc2hvd1RhYih0YWIpO1xuICB9XG5cbiAgc2hvd1RhYih0YWIpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VGFiID09PSB0YWIpIHJldHVybjtcbiAgICBpZiAodGhpcy5jdXJyZW50VGFiICE9IG51bGwpIHRoaXMuY3VycmVudFRhYi5oaWRlKCk7XG4gICAgaWYgKHRhYiAhPSBudWxsKSB0YWIuc2hvdygpO1xuICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcbiAgfVxuXG4gIHJlbW92ZVRhYkJ5SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0aGlzLmN1cnJlbnRUYWIpO1xuICAgICAgY29uc3QgdGFiID0gdGhpcy50YWJzW2luZGV4XTtcbiAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5saW5rcy5yZW1vdmVDaGlsZCh0YWIubGluayk7XG4gICAgICB0aGlzLmNvbnRlbnRzLnJlbW92ZUNoaWxkKHRhYi5jb250ZW50KTtcblxuICAgICAgaWYgKHRhYiA9PT0gdGhpcy5jdXJyZW50VGFiKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLm1pbihNYXRoLm1heChjdXJyZW50SW5kZXgsIDApLCB0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2hvd1RhYkJ5SW5kZXgoaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFiKHRhYikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICB0aGlzLnJlbW92ZVRhYkJ5SW5kZXgoaW5kZXgpO1xuICB9XG5cbiAgYWRkTmV3VGFiQXRJbmRleChpbmRleCwgbmFtZSkge1xuICAgIGluZGV4ID0gaW5kZXggPz8gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPiB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzIVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IHRoaXMudGFicy5sZW5ndGggKyBpbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCB0YWIgPSBuZXcgVGFiYmVkV2luZG93VGFiKCk7XG4gICAgdGFiLmhlYWRlckxvY2F0aW9uID0gdGhpcy5oZWFkZXJMb2NhdGlvbjtcbiAgICB0YWIubmFtZSA9IG5hbWU7XG5cbiAgICB0YWIubGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuc2hvd1RhYkJ5SW5kZXgodGhpcy50YWJzLmluZGV4T2YodGFiKSk7XG4gICAgfSk7XG4gICAgaWYgKHRhYi5jbG9zZUJ1dHRvbikge1xuICAgICAgdGFiLmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZVRhYkJ5SW5kZXgodGhpcy50YWJzLmluZGV4T2YodGFiKSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgICB0aGlzLmxpbmtzLmFwcGVuZENoaWxkKHRhYi5saW5rKTtcbiAgICAgIHRoaXMuY29udGVudHMuYXBwZW5kQ2hpbGQodGFiLmNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnMuc3BsaWNlKHRhYiwgMCk7XG4gICAgICBjb25zdCBuZXh0VGFiID0gdGhpcy50YWJzW2luZGV4ICsgMV07XG4gICAgICB0aGlzLmxpbmtzLmluc2VydEJlZm9yZSh0YWIubGluaywgbmV4dFRhYi5saW5rKTtcbiAgICAgIHRoaXMuY29udGVudHMuaW5zZXJ0QmVmb3JlKHRhYi5jb250ZW50LCBuZXh0VGFiLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd1RhYkJ5SW5kZXgoaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRhYjtcbiAgfVxuXG4gIGFkZE5ld1RhYihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3VGFiQXRJbmRleChudWxsLCBuYW1lKTtcbiAgfVxuXG4gIGNsZWFyVGFicygpIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gdGhpcy5yZW1vdmVUYWJCeUluZGV4KGluZGV4KSk7XG4gIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRhYmJlZC13aW5kb3dcIiwgVGFiYmVkV2luZG93KTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwidGFiYmVkLXdpbmRvdy1ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAvKiBUTy1ETzogYWRqdXN0IGFjY29yZGluZyB0byBvcmllbnRhdGlvbiB2aWEgamF2YXNjcmlwdCAqL1xcbn1cXG50YWJiZWQtd2luZG93LWJvZHkgPiAuY29udGVudHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2JvZHkvdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwREFBMEQ7QUFDNUQ7QUFDRTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmJlZC13aW5kb3ctYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcbiAgLyogVE8tRE86IGFkanVzdCBhY2NvcmRpbmcgdG8gb3JpZW50YXRpb24gdmlhIGphdmFzY3JpcHQgKi9cXG4gICYgPiAuY29udGVudHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG50YWJiZWQtd2luZG93LWNvbnRlbnQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2NvbnRlbnQvdGFiYmVkX3dpbmRvd19jb250ZW50Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJiZWQtd2luZG93LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4OiAxIDEgYXV0bztcXG5cXG4gICYuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInRhYmJlZC13aW5kb3ctaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxudGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubmV3LXRhYi1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxufVxcbnRhYmJlZC13aW5kb3ctaGVhZGVyID4gLm5ldy10YWItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RhYmJlZF93aW5kb3dfaGVhZGVyL3RhYmJlZF93aW5kb3dfaGVhZGVyLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7QUFBTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJiZWQtd2luZG93LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcblxcbiAgJiA+IC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxuXFxuICAmID4gLm5ldy10YWItYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsuYWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMGMwO1xcbiAgYm94LXNoYWRvdzogIzQwNDA0MCAwcHggMHB4IDNweCAwcHg7XFxufVxcbnRhYmJlZC13aW5kb3ctbGluayA+IC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxudGFiYmVkLXdpbmRvdy1saW5rID4gLmNsb3NlLXRhYi1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG50YWJiZWQtd2luZG93LWxpbmsgPiAuY2xvc2UtdGFiLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YWJiZWRfd2luZG93X2xpbmsvdGFiYmVkX3dpbmRvd19saW5rLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSx5QkFBQTtBQUROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmJlZC13aW5kb3ctbGluayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuXFxuICAmLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMGEwYzA7XFxuICAgIGJveC1zaGFkb3c6ICM0MDQwNDAgMHB4IDBweCAzcHggMHB4O1xcbiAgfVxcblxcbiAgJiA+IC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgfVxcblxcbiAgJiA+IC5jbG9zZS10YWItYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInRhYmJlZC13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcmVzaXplOiBib3RoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gIHBhZGRpbmc6IDRweCA4cHggMCA4cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyW3JldmVyc2VdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3Mge1xcbiAgcGFkZGluZzogNHB4IDRweCAwIDRweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3MgdGFiYmVkLXdpbmRvdy1saW5rW3JldmVyc2VdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3MgdGFiYmVkLXdpbmRvdy1saW5rID4gLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB0YWJiZWQtd2luZG93LWxpbmsgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1ib2R5IHtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xcbiAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdID4gdGFiYmVkLXdpbmRvdy1ib2R5ID4gLmNvbnRlbnRzID4gdGFiYmVkLXdpbmRvdy1jb250ZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICBwYWRkaW5nOiA4cHggMTJweCA4cHggMTJweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIge1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICBwYWRkaW5nOiAwIDhweCA4cHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwiYm90dG9tXFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlcltyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHtcXG4gIHBhZGRpbmc6IDAgNHB4IDRweCA0cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW3JldmVyc2VdIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3MgdGFiYmVkLXdpbmRvdy1saW5rIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHRhYmJlZC13aW5kb3ctbGlua1tyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHRhYmJlZC13aW5kb3ctbGluayA+IC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3MgdGFiYmVkLXdpbmRvdy1saW5rID4gLmNsb3NlLXRhYi1idXR0b24ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctYm9keSB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gIHBhZGRpbmc6IDhweCA4cHggMCA4cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJib3R0b21cXFwiXSA+IHRhYmJlZC13aW5kb3ctYm9keSA+IC5jb250ZW50cyA+IHRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyIHtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICBwYWRkaW5nOiA4cHggMCA4cHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXJbcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXI6bm90KFtyZXZlcnNlXSkge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHtcXG4gIHBhZGRpbmc6IDRweCAwIDRweCA0cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rc1tyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rczpub3QoW3JldmVyc2VdKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHRhYmJlZC13aW5kb3ctbGlua1tyZXZlcnNlXSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB0YWJiZWQtd2luZG93LWxpbmsgPiAuY29udGVudCB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0gPiB0YWJiZWQtd2luZG93LWhlYWRlciA+IC5saW5rcyB0YWJiZWQtd2luZG93LWxpbmsgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcImxlZnRcXFwiXSA+IHRhYmJlZC13aW5kb3ctYm9keSB7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdID4gdGFiYmVkLXdpbmRvdy1ib2R5ID4gLmNvbnRlbnRzID4gdGFiYmVkLXdpbmRvdy1jb250ZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDhweDtcXG59XFxudGFiYmVkLXdpbmRvd1toZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIl0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gIHBhZGRpbmc6IDhweCA0cHggOHB4IDA7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXJbcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzIHtcXG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDA7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3NbcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzW2NoYW5nZS1vcmllbnRhdGlvbl0ge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzID4gdGFiYmVkLXdpbmRvdy1saW5rIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIgPiAubGlua3MgPiB0YWJiZWQtd2luZG93LWxpbmtbcmV2ZXJzZV0ge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzID4gdGFiYmVkLXdpbmRvdy1saW5rID4gLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctaGVhZGVyID4gLmxpbmtzID4gdGFiYmVkLXdpbmRvdy1saW5rID4gLmNsb3NlLXRhYi1idXR0b24ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcbnRhYmJlZC13aW5kb3dbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdID4gdGFiYmVkLXdpbmRvdy1ib2R5IHtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICBwYWRkaW5nOiA4cHggMCA4cHggOHB4O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSA+IHRhYmJlZC13aW5kb3ctYm9keSA+IC5jb250ZW50cyA+IHRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCA4cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90YWJiZWRfd2luZG93Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7QUFHRTtFQUNFLHNCQUFBO0FBREo7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUROO0FBR007RUFDRSwyQkFBQTtBQURSO0FBSU07RUFDRSxzQkFBQTtBQUZSO0FBSVE7RUFDRSwyQkFBQTtBQUZWO0FBRk07RUFRSSw0QkFBQTtFQUNBLFlBQUE7QUFIVjtBQUtVO0VBQ0UsMkJBQUE7QUFIWjtBQU1VO0VBQ0UsWUFBQTtBQUpaO0FBT1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMWjtBQVdJO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFUTjtBQWVRO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQWJWO0FBbUJFO0VBQ0UsOEJBQUE7QUFqQko7QUFtQkk7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQWpCTjtBQW1CTTtFQUNFLDJCQUFBO0FBakJSO0FBb0JNO0VBQ0Usc0JBQUE7QUFsQlI7QUFvQlE7RUFDRSwyQkFBQTtBQWxCVjtBQWNNO0VBUUksNEJBQUE7RUFDQSxZQUFBO0FBbkJWO0FBcUJVO0VBQ0UsMkJBQUE7QUFuQlo7QUFzQlU7RUFDRSxZQUFBO0FBcEJaO0FBdUJVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBckJaO0FBMkJJO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBekJOO0FBK0JRO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQTdCVjtBQW1DRTtFQUNFLG1CQUFBO0FBakNKO0FBbUNJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFqQ047QUFtQ007RUFDRSw4QkFBQTtBQWpDUjtBQW9DTTtFQUNFLHNCQUFBO0FBbENSO0FBcUNNO0VBQ0Usc0JBQUE7QUFuQ1I7QUFxQ1E7RUFDRSw4QkFBQTtBQW5DVjtBQXNDUTtFQUNFLHNCQUFBO0FBcENWO0FBdUNRO0VBQ0UsMkJBQUE7QUFyQ1Y7QUF5Qk07RUFnQkksNEJBQUE7RUFDQSxZQUFBO0FBdENWO0FBd0NVO0VBQ0UsMkJBQUE7QUF0Q1o7QUF5Q1U7RUFDRSxZQUFBO0FBdkNaO0FBMENVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBeENaO0FBOENJO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUE1Q047QUFrRFE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FBaERWO0FBc0RFO0VBQ0UsMkJBQUE7QUFwREo7QUFzREk7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXBETjtBQXNETTtFQUNFLDhCQUFBO0FBcERSO0FBdURNO0VBQ0Usc0JBQUE7QUFyRFI7QUF1RFE7RUFDRSw4QkFBQTtBQXJEVjtBQXdEUTtFQUNFLDJCQUFBO0FBdERWO0FBeURRO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBdkRWO0FBeURVO0VBQ0UsMkJBQUE7QUF2RFo7QUEwRFU7RUFDRSxZQUFBO0FBeERaO0FBMkRVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBekRaO0FBK0RJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUE3RE47QUFtRVE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0FBakVWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGFiYmVkX3dpbmRvd19jb25maWcubGVzc1xcXCI7XFxuXFxudGFiYmVkLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogQHdpbmRvdy1pbml0aWFsLWhlaWdodDtcXG4gIHdpZHRoOiBAd2luZG93LWluaXRpYWwtd2lkdGg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHJlc2l6ZTogYm90aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcInRvcFxcXCJdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgJiA+IHRhYmJlZC13aW5kb3ctaGVhZGVyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICAgICAgcGFkZGluZzogNHB4IDhweCAwIDhweDtcXG5cXG4gICAgICAmW3JldmVyc2VdIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IC5saW5rcyB7XFxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDAgNHB4O1xcblxcbiAgICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRhYmJlZC13aW5kb3ctbGluayB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYgPiAuY29udGVudCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gdGFiYmVkLXdpbmRvdy1ib2R5IHtcXG4gICAgICBib3JkZXItdG9wOiAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICAgICAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcXG5cXG4gICAgICAmID4gLmNvbnRlbnRzIHtcXG4gICAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiA+IHRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJltoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCJdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcbiAgICAmID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIge1xcbiAgICAgIGJvcmRlci10b3A6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgICBwYWRkaW5nOiAwIDhweCA4cHggOHB4O1xcblxcbiAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gLmxpbmtzIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgNHB4IDRweCA0cHg7XFxuXFxuICAgICAgICAmW3JldmVyc2VdIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGFiYmVkLXdpbmRvdy1saW5rIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xcblxcbiAgICAgICAgICAmW3JldmVyc2VdIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJiA+IC5jb250ZW50IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJiA+IC5jbG9zZS10YWItYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiB0YWJiZWQtd2luZG93LWJvZHkge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xcblxcbiAgICAgICYgPiAuY29udGVudHMge1xcbiAgICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmID4gdGFiYmVkLXdpbmRvdy1jb250ZW50IHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgJiA+IHRhYmJlZC13aW5kb3ctaGVhZGVyIHtcXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG4gICAgICBwYWRkaW5nOiA4cHggMCA4cHggOHB4O1xcblxcbiAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOm5vdChbcmV2ZXJzZV0pIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgfVxcblxcbiAgICAgICYgPiAubGlua3Mge1xcbiAgICAgICAgcGFkZGluZzogNHB4IDAgNHB4IDRweDtcXG5cXG4gICAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOm5vdChbcmV2ZXJzZV0pIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZbY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRhYmJlZC13aW5kb3ctbGluayB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG5cXG4gICAgICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYgPiAuY29udGVudCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYgPiAuY2xvc2UtdGFiLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gdGFiYmVkLXdpbmRvdy1ib2R5IHtcXG4gICAgICBib3JkZXItbGVmdDogMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XFxuXFxuICAgICAgJiA+IC5jb250ZW50cyB7XFxuICAgICAgICAmW3JldmVyc2VdIHtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgPiB0YWJiZWQtd2luZG93LWNvbnRlbnQge1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDhweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcbiAgICAmID4gdGFiYmVkLXdpbmRvdy1oZWFkZXIge1xcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuICAgICAgcGFkZGluZzogOHB4IDRweCA4cHggMDtcXG5cXG4gICAgICAmW3JldmVyc2VdIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IC5saW5rcyB7XFxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAwO1xcblxcbiAgICAgICAgJltyZXZlcnNlXSB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZbY2hhbmdlLW9yaWVudGF0aW9uXSB7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgPiB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuXFxuICAgICAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmID4gLmNvbnRlbnQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmID4gLmNsb3NlLXRhYi1idXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IHRhYmJlZC13aW5kb3ctYm9keSB7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDhweDtcXG5cXG4gICAgICAmID4gLmNvbnRlbnRzIHtcXG4gICAgICAgICZbcmV2ZXJzZV0ge1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiA+IHRhYmJlZC13aW5kb3ctY29udGVudCB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEycHggOHB4IDEycHggOHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCJdW2FkanVzdC1saW5rcy1vcmllbnRhdGlvbl0gPiB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG50YWJiZWQtd2luZG93W2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXVthZGp1c3QtbGlua3Mtb3JpZW50YXRpb25dID4gdGFiYmVkLXdpbmRvdy1saW5rIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90YWJiZWRfd2luZG93X29yaWVudGF0aW9uLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR007RUFDRSwyQkFBQTtBQUZSO0FBZ0JNO0VBQ0Usc0JBQUE7QUFkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0YWJiZWQtd2luZG93IHtcXG4gICZbaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICAmW2FkanVzdC1saW5rcy1vcmllbnRhdGlvbl0ge1xcbiAgICAgICYgPiB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAmOm5vdChbYWRqdXN0LWxpbmtzLW9yaWVudGF0aW9uXSkge1xcbiAgICAvLyAgICYgPiB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgICAvLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAvLyAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIC8vICAgfVxcbiAgICAvLyB9XFxuICB9XFxuXFxuICAmW2hlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiXSB7XFxuICAgICZbYWRqdXN0LWxpbmtzLW9yaWVudGF0aW9uXSB7XFxuICAgICAgJiA+IHRhYmJlZC13aW5kb3ctbGluayB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAmOm5vdChbYWRqdXN0LWxpbmtzLW9yaWVudGF0aW9uXSkge1xcbiAgICAvLyAgICYgPiB0YWJiZWQtd2luZG93LWxpbmsge1xcbiAgICAvLyAgICAgZmxleDogMCAwIGF1dG87XFxuICAgIC8vICAgfVxcbiAgICAvLyB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJiZWQtd2luZG93LWJvZHlcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudHNcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJiZWQtd2luZG93LWNvbnRlbnRcXFwiPjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJiZWQtd2luZG93LWhlYWRlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsaW5rc1xcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJuZXctdGFiLWJ1dHRvblxcXCI+KzwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJiZWQtd2luZG93LWxpbmtcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS10YWItYnV0dG9uXFxcIj54PC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlVJLUNvbXBvbmVudC9UYWJiZWRXaW5kb3c8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDx0YWJiZWQtd2luZG93IGhlYWRlci1sb2NhdGlvbj1cXFwidG9wXFxcIj4gPC90YWJiZWQtd2luZG93PlxcbiAgICA8dGFiYmVkLXdpbmRvdyBoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCI+IDwvdGFiYmVkLXdpbmRvdz5cXG4gICAgPHRhYmJlZC13aW5kb3cgaGVhZGVyLWxvY2F0aW9uPVxcXCJsZWZ0XFxcIj4gPC90YWJiZWQtd2luZG93PlxcbiAgICA8dGFiYmVkLXdpbmRvdyBoZWFkZXItbG9jYXRpb249XFxcInJpZ2h0XFxcIj4gPC90YWJiZWQtd2luZG93PlxcbiAgICA8YnIgLz5cXG4gICAgPHRhYmJlZC13aW5kb3cgaGVhZGVyLWxvY2F0aW9uPVxcXCJ0b3BcXFwiIGFkanVzdC1saW5rcy1vcmllbnRhdGlvbj5cXG4gICAgPC90YWJiZWQtd2luZG93PlxcbiAgICA8dGFiYmVkLXdpbmRvdyBoZWFkZXItbG9jYXRpb249XFxcImJvdHRvbVxcXCIgYWRqdXN0LWxpbmtzLW9yaWVudGF0aW9uPlxcbiAgICA8L3RhYmJlZC13aW5kb3c+XFxuICAgIDx0YWJiZWQtd2luZG93IGhlYWRlci1sb2NhdGlvbj1cXFwibGVmdFxcXCIgYWRqdXN0LWxpbmtzLW9yaWVudGF0aW9uPlxcbiAgICA8L3RhYmJlZC13aW5kb3c+XFxuICAgIDx0YWJiZWQtd2luZG93IGhlYWRlci1sb2NhdGlvbj1cXFwicmlnaHRcXFwiIGFkanVzdC1saW5rcy1vcmllbnRhdGlvbj5cXG4gICAgPC90YWJiZWQtd2luZG93PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwidGFiYmVkLXdpbmRvd1xcXCI+XFxuICA8dGFiYmVkLXdpbmRvdy1oZWFkZXI+PC90YWJiZWQtd2luZG93LWhlYWRlcj5cXG4gIDx0YWJiZWQtd2luZG93LWJvZHk+PC90YWJiZWQtd2luZG93LWJvZHk+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19ib2R5Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJiZWRfd2luZG93X2JvZHkubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19jb250ZW50Lmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJiZWRfd2luZG93X2NvbnRlbnQubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19oZWFkZXIubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3dfaGVhZGVyLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3dfbGluay5sZXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19saW5rLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3cubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhYmJlZF93aW5kb3cubGVzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19vcmllbnRhdGlvbi5sZXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFiYmVkX3dpbmRvd19vcmllbnRhdGlvbi5sZXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUYWJiZWRXaW5kb3cgfSBmcm9tIFwiLi90YWJiZWRfd2luZG93LmpzXCI7XG5pbXBvcnQgXCIuL2luZGV4Lmh0bWxcIjtcblxuLy8gY29uc3QgdGFiYmVkV2luZG93ID0gbmV3IFRhYmJlZFdpbmRvdygpO1xuLy8gdGFiYmVkV2luZG93LmhlYWRlckxvY2F0aW9uID0gXCJ0b3BcIjtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRhYmJlZFdpbmRvdyk7XG5jb25zb2xlLmxvZyhcIiEhIVwiKTtcbiJdLCJuYW1lcyI6WyJodG1sIiwicGFyc2VIdG1sIiwiaHRtbFN0cmluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoaWxkcmVuIiwidGVtcGxhdGUiLCJUYWJiZWRXaW5kb3dCb2R5IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckxvY2F0aW9uIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJmbGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiSFRNTEVsZW1lbnQiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIlRhYmJlZFdpbmRvd0NvbnRlbnQiLCJUYWJiZWRXaW5kb3dIZWFkZXIiLCJUYWJiZWRXaW5kb3dMaW5rIiwiVGFiYmVkV2luZG93VGFiIiwiY2xvc2VCdXR0b24iLCJsaW5rQ29udGVudCIsImxpbmsiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJuYW1lU3RyaW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiVGFiYmVkV2luZG93IiwiYXBwZW5kQ2hpbGQiLCJuZXdUYWJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkTmV3VGFiIiwibGlua3MiLCJjb250ZW50cyIsImluZGV4IiwidGFiIiwidGFicyIsInNob3dUYWIiLCJjdXJyZW50VGFiIiwiaGlkZSIsInNob3ciLCJsZW5ndGgiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVtb3ZlQ2hpbGQiLCJpIiwiTWF0aCIsIm1pbiIsIm1heCIsInNob3dUYWJCeUluZGV4IiwicmVtb3ZlVGFiQnlJbmRleCIsIm5hbWUiLCJFcnJvciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwdXNoIiwibmV4dFRhYiIsImluc2VydEJlZm9yZSIsImFkZE5ld1RhYkF0SW5kZXgiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=