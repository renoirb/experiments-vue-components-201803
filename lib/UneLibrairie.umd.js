(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UneLibrairie"] = factory();
	else
		root["UneLibrairie"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+9ps":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VToolbarItems = exports.VToolbarTitle = exports.VToolbarSideIcon = exports.VToolbar = undefined;

var _helpers = __webpack_require__("VzT6");

var _VToolbar = __webpack_require__("9lnO");

var _VToolbar2 = _interopRequireDefault(_VToolbar);

var _VToolbarSideIcon = __webpack_require__("2jrt");

var _VToolbarSideIcon2 = _interopRequireDefault(_VToolbarSideIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VToolbarTitle = (0, _helpers.createSimpleFunctional)('toolbar__title');
var VToolbarItems = (0, _helpers.createSimpleFunctional)('toolbar__items');

exports.VToolbar = _VToolbar2.default;
exports.VToolbarSideIcon = _VToolbarSideIcon2.default;
exports.VToolbarTitle = VToolbarTitle;
exports.VToolbarItems = VToolbarItems;

/* istanbul ignore next */

_VToolbar2.default.install = function install(Vue) {
  Vue.component(_VToolbar2.default.name, _VToolbar2.default);
  Vue.component(VToolbarItems.name, VToolbarItems);
  Vue.component(VToolbarTitle.name, VToolbarTitle);
  Vue.component(_VToolbarSideIcon2.default.name, _VToolbarSideIcon2.default);
};

exports.default = _VToolbar2.default;

/***/ }),

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "/3df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("kVeV");

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _registrable = __webpack_require__("Zk4d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins
exports.default = {
  name: 'v-list',

  mixins: [(0, _registrable.provide)('list'), _themeable2.default],

  provide: function provide() {
    return {
      'listClick': this.listClick
    };
  },


  data: function data() {
    return {
      groups: []
    };
  },

  props: {
    dense: Boolean,
    expand: Boolean,
    subheader: Boolean,
    threeLine: Boolean,
    twoLine: Boolean
  },

  computed: {
    classes: function classes() {
      return {
        'list--dense': this.dense,
        'list--subheader': this.subheader,
        'list--two-line': this.twoLine,
        'list--three-line': this.threeLine,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    }
  },

  methods: {
    register: function register(uid, cb) {
      this.groups.push({ uid: uid, cb: cb });
    },
    unregister: function unregister(uid) {
      var index = this.groups.findIndex(function (g) {
        return g.uid === uid;
      });

      if (index > -1) {
        this.groups.splice(index, 1);
      }
    },
    listClick: function listClick(uid, isBooted) {
      if (this.expand) return;

      for (var i = this.groups.length; i--;) {
        this.groups[i].cb(uid);
      }
    }
  },

  render: function render(h) {
    var data = {
      staticClass: 'list',
      'class': this.classes
    };

    return h('div', data, [this.$slots.default]);
  }
}; // Styles

/***/ }),

/***/ "/626":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/whu":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Bau1");


/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "09zI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */
exports.default = {
  name: 'ssr-bootable',

  data: function data() {
    return {
      isBooted: false
    };
  },

  mounted: function mounted() {
    var _this = this;

    // Use setAttribute instead of dataset
    // because dataset does not work well
    // with unit tests
    window.requestAnimationFrame(function () {
      _this.$el.setAttribute('data-booted', true);
      _this.isBooted = true;
    });
  }
};

/***/ }),

/***/ "0fP+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorToInt = colorToInt;
exports.intToHex = intToHex;

var _console = __webpack_require__("1Nba");

/**
 * @param {string|number} color
 * @returns {number}
 */
function colorToInt(color) {
  var rgb = void 0;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    var c = color[0] === '#' ? color.substring(1) : color;
    if (c.length === 3) {
      c = c.split('').map(function (char) {
        return char + char;
      }).join('');
    }
    if (c.length !== 6) {
      (0, _console.consoleWarn)('\'' + color + '\' is not a valid rgb color');
    }
    rgb = parseInt(c, 16);
  } else {
    throw new TypeError('Colors can only be numbers or strings, recieved ' + color.constructor.name + ' instead');
  }

  if (rgb < 0) {
    (0, _console.consoleWarn)('Colors cannot be negative: \'' + color + '\'');
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    (0, _console.consoleWarn)('\'' + color + '\' is not a valid rgb color');
    rgb = 0xffffff;
  }

  return rgb;
}

/**
 * @param {number} color
 * @returns {string}
 */
function intToHex(color) {
  color = color.toString(16);

  if (color.length < 6) color = '0'.repeat(6 - color.length) + color;

  return '#' + color;
}

/***/ }),

/***/ "1Nba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleWarn = consoleWarn;
exports.consoleError = consoleError;
function createMessage(message, componentInstance) {
  var componentInfo = componentInstance ? ' in "' + componentInstance.$options.name + '"' : '';
  return '[Vuetify] ' + message + componentInfo;
}

function consoleWarn(message) {
  var componentInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  console.warn(createMessage(message, componentInstance));
}

function consoleError(message) {
  var componentInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  console.error(createMessage(message, componentInstance));
}

/***/ }),

/***/ "1kS7":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2jrt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VBtn = __webpack_require__("7Q1V");

var _VBtn2 = _interopRequireDefault(_VBtn);

var _VIcon = __webpack_require__("7M7f");

var _VIcon2 = _interopRequireDefault(_VIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-toolbar-side-icon',

  functional: true,

  render: function render(h, _ref) {
    var slots = _ref.slots,
        listeners = _ref.listeners,
        props = _ref.props,
        data = _ref.data;

    var classes = data.staticClass ? data.staticClass + ' toolbar__side-icon' : 'toolbar__side-icon';

    var d = Object.assign(data, {
      staticClass: classes,
      props: Object.assign(props, {
        icon: true
      }),
      on: listeners
    });

    var defaultSlot = slots().default;

    return h(_VBtn2.default, d, defaultSlot || [h(_VIcon2.default, 'menu')]);
  }
};

/***/ }),

/***/ "2p1q":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");
module.exports = __webpack_require__("bUqO") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "3TcT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5a0n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = factory;

var _helpers = __webpack_require__("VzT6");

function factory() {
  var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var props = {
    absolute: Boolean,
    bottom: Boolean,
    fixed: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean
  };

  return {
    name: 'positionable',
    props: selected.length ? (0, _helpers.filterObjectOnKeys)(props, selected) : props
  };
}

exports.default = factory();

/***/ }),

/***/ "6VHA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VRowExpandTransition = exports.VExpandTransition = exports.VSlideYReverseTransition = exports.VSlideYTransition = exports.VSlideXReverseTransition = exports.VSlideXTransition = exports.VScaleTransition = exports.VFadeTransition = exports.VDialogBottomTransition = exports.VDialogTransition = exports.VFabTransition = exports.VMenuTransition = exports.VTabReverseTransition = exports.VTabTransition = exports.VCarouselReverseTransition = exports.VCarouselTransition = exports.VBottomSheetTranstion = undefined;

var _helpers = __webpack_require__("VzT6");

var _expandTransition = __webpack_require__("w7yq");

var _expandTransition2 = _interopRequireDefault(_expandTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component specific transitions
var VBottomSheetTranstion = exports.VBottomSheetTranstion = (0, _helpers.createSimpleTransition)('bottom-sheet-transition');
var VCarouselTransition = exports.VCarouselTransition = (0, _helpers.createSimpleTransition)('carousel-transition');
var VCarouselReverseTransition = exports.VCarouselReverseTransition = (0, _helpers.createSimpleTransition)('carousel-reverse-transition');
var VTabTransition = exports.VTabTransition = (0, _helpers.createSimpleTransition)('tab-transition');
var VTabReverseTransition = exports.VTabReverseTransition = (0, _helpers.createSimpleTransition)('tab-reverse-transition');
var VMenuTransition = exports.VMenuTransition = (0, _helpers.createSimpleTransition)('menu-transition');
var VFabTransition = exports.VFabTransition = (0, _helpers.createSimpleTransition)('fab-transition', 'center center', 'out-in');

// Generic transitions
var VDialogTransition = exports.VDialogTransition = (0, _helpers.createSimpleTransition)('dialog-transition');
var VDialogBottomTransition = exports.VDialogBottomTransition = (0, _helpers.createSimpleTransition)('dialog-bottom-transition');
var VFadeTransition = exports.VFadeTransition = (0, _helpers.createSimpleTransition)('fade-transition');
var VScaleTransition = exports.VScaleTransition = (0, _helpers.createSimpleTransition)('scale-transition');
var VSlideXTransition = exports.VSlideXTransition = (0, _helpers.createSimpleTransition)('slide-x-transition');
var VSlideXReverseTransition = exports.VSlideXReverseTransition = (0, _helpers.createSimpleTransition)('slide-x-reverse-transition');
var VSlideYTransition = exports.VSlideYTransition = (0, _helpers.createSimpleTransition)('slide-y-transition');
var VSlideYReverseTransition = exports.VSlideYReverseTransition = (0, _helpers.createSimpleTransition)('slide-y-reverse-transition');

// JavaScript transitions
var VExpandTransition = exports.VExpandTransition = (0, _helpers.createJavaScriptTransition)('expand-transition', (0, _expandTransition2.default)());
var VRowExpandTransition = exports.VRowExpandTransition = (0, _helpers.createJavaScriptTransition)('row-expand-transition', (0, _expandTransition2.default)('datatable__expand-col--expanded'));

exports.default = install;
/* istanbul ignore next */

function install(Vue) {
  Vue.component('v-bottom-sheet-transition', VBottomSheetTranstion);
  Vue.component('v-carousel-transition', VCarouselTransition);
  Vue.component('v-carousel-reverse-transition', VCarouselReverseTransition);
  Vue.component('v-dialog-transition', VDialogTransition);
  Vue.component('v-dialog-bottom-transition', VDialogBottomTransition);
  Vue.component('v-fab-transition', VFabTransition);
  Vue.component('v-fade-transition', VFadeTransition);
  Vue.component('v-menu-transition', VMenuTransition);
  Vue.component('v-scale-transition', VScaleTransition);
  Vue.component('v-slide-x-transition', VSlideXTransition);
  Vue.component('v-slide-x-reverse-transition', VSlideXReverseTransition);
  Vue.component('v-slide-y-transition', VSlideYTransition);
  Vue.component('v-slide-y-reverse-transition', VSlideYReverseTransition);
  Vue.component('v-tab-reverse-transition', VTabReverseTransition);
  Vue.component('v-tab-transition', VTabTransition);
  Vue.component('v-expand-transition', VExpandTransition);
  Vue.component('v-row-expand-transition', VRowExpandTransition);
}

/***/ }),

/***/ "6myg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("HNa/");

var _appTheme = __webpack_require__("NqJv");

var _appTheme2 = _interopRequireDefault(_appTheme);

var _appBreakpoint = __webpack_require__("ogfJ");

var _appBreakpoint2 = _interopRequireDefault(_appBreakpoint);

var _resize = __webpack_require__("A+uu");

var _resize2 = _interopRequireDefault(_resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component level mixins


// Directives


exports.default = {
  name: 'v-app',

  mixins: [_appBreakpoint2.default, _appTheme2.default],

  directives: {
    Resize: _resize2.default
  },

  props: {
    id: {
      type: String,
      default: 'app'
    },
    dark: Boolean
  },

  computed: {
    classes: function classes() {
      return _defineProperty({}, 'theme--' + (this.dark ? 'dark' : 'light'), true);
    }
  },

  mounted: function mounted() {
    this.$vuetify.dark = this.dark;
  },


  watch: {
    dark: function dark() {
      this.$vuetify.dark = this.dark;
    }
  },

  render: function render(h) {
    var data = {
      staticClass: 'application',
      'class': this.classes,
      attrs: { 'data-app': true },
      domProps: { id: this.id },
      directives: [{
        name: 'resize',
        value: this.onResize
      }]
    };

    var wrapper = h('div', { staticClass: 'application--wrap' }, this.$slots.default);

    return h('div', data, [wrapper]);
  }
};

/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7M7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VIcon = __webpack_require__("Fa9n");

var _VIcon2 = _interopRequireDefault(_VIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VIcon2.default.install = function install(Vue) {
  Vue.component(_VIcon2.default.name, _VIcon2.default);
};

exports.default = _VIcon2.default;

/***/ }),

/***/ "7Q1V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VBtn = __webpack_require__("farU");

var _VBtn2 = _interopRequireDefault(_VBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VBtn2.default.install = function install(Vue) {
  Vue.component(_VBtn2.default.name, _VBtn2.default);
};

exports.default = _VBtn2.default;

/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "7gX0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "8ChU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = goTo;

var _console = __webpack_require__("1Nba");

var _easingPatterns = __webpack_require__("yobx");

var easingPatterns = _interopRequireWildcard(_easingPatterns);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaults = {
  duration: 500,
  offset: 0,
  easing: 'easeInOutCubic'
};

function getDocumentHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
}

function getWindowHeight() {
  return window.innerHeight || (document.documentElement || document.body).clientHeight;
}

function isVueComponent(obj) {
  return obj && obj.constructor && obj.constructor.name === 'VueComponent';
}

function getTargetLocation(target, settings) {
  var location = void 0;

  if (target instanceof Element) {
    location = target.offsetTop;
  } else if (isVueComponent(target)) {
    location = target.$el.offsetTop;
  } else if (typeof target === 'string') {
    location = document.querySelector(target).offsetTop;
  } else if (typeof target === 'number') {
    location = target;
  } else {
    return undefined;
  }

  return Math.round(Math.min(Math.max(location + settings.offset, 0), getDocumentHeight() - getWindowHeight()));
}

function goTo(target, options) {
  if (typeof window === 'undefined') return;

  var settings = Object.assign({}, defaults, options);

  var startTime = performance.now();
  var startLocation = window.pageYOffset;
  var targetLocation = getTargetLocation(target, settings);
  var distanceToScroll = targetLocation - startLocation;
  var easingFunction = typeof settings.easing === 'function' ? settings.easing : easingPatterns[settings.easing];

  if (isNaN(targetLocation)) {
    var type = target && target.constructor ? target.constructor.name : target;
    return (0, _console.consoleError)('Target must be a Selector/Number/DOMElement/VueComponent, received ' + type + ' instead.');
  }
  if (!easingFunction) return (0, _console.consoleError)('Easing function \'' + settings.easing + '\' not found.');

  function step(currentTime) {
    var progressPercentage = Math.min(1, (currentTime - startTime) / settings.duration);
    var targetPosition = Math.floor(startLocation + distanceToScroll * easingFunction(progressPercentage));

    window.scrollTo(0, targetPosition);
    if (Math.round(window.pageYOffset) === targetLocation) return;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

/***/ }),

/***/ "8tN+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'v-card-title',

  functional: true,

  props: {
    primaryTitle: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('card__title ' + (data.staticClass || '')).trim();

    if (props.primaryTitle) data.staticClass += ' card__title--primary';

    return h('div', data, children);
  }
};

/***/ }),

/***/ "9Jb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("/626");

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-progress-circular',

  mixins: [_colorable2.default],

  props: {
    button: Boolean,

    indeterminate: Boolean,

    rotate: {
      type: Number,
      default: 0
    },

    size: {
      type: [Number, String],
      default: 32
    },

    width: {
      type: Number,
      default: 4
    },

    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    calculatedSize: function calculatedSize() {
      var size = Number(this.size);

      if (this.button) {
        size += 8;
      }

      return size;
    },
    circumference: function circumference() {
      return 2 * Math.PI * this.radius;
    },
    classes: function classes() {
      return this.addTextColorClassChecks({
        'progress-circular': true,
        'progress-circular--indeterminate': this.indeterminate,
        'progress-circular--button': this.button
      });
    },
    cxy: function cxy() {
      return this.indeterminate && !this.button ? 50 : this.calculatedSize / 2;
    },
    normalizedValue: function normalizedValue() {
      if (this.value < 0) {
        return 0;
      }

      if (this.value > 100) {
        return 100;
      }

      return this.value;
    },
    radius: function radius() {
      return this.indeterminate && !this.button ? 20 : (this.calculatedSize - this.width) / 2;
    },
    strokeDashArray: function strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000;
    },
    strokeDashOffset: function strokeDashOffset() {
      return (100 - this.normalizedValue) / 100 * this.circumference + 'px';
    },
    styles: function styles() {
      return {
        height: this.calculatedSize + 'px',
        width: this.calculatedSize + 'px'
      };
    },
    svgSize: function svgSize() {
      return this.indeterminate ? false : this.calculatedSize;
    },
    svgStyles: function svgStyles() {
      return {
        transform: 'rotate(' + this.rotate + 'deg)'
      };
    },
    viewBox: function viewBox() {
      return this.indeterminate ? '25 25 50 50' : false;
    }
  },

  methods: {
    genCircle: function genCircle(h, name, offset) {
      return h('circle', {
        class: 'progress-circular__' + name,
        attrs: {
          fill: 'transparent',
          cx: this.cxy,
          cy: this.cxy,
          r: this.radius,
          'stroke-width': this.width,
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset
        }
      });
    },
    genSvg: function genSvg(h) {
      var children = [!this.indeterminate && this.genCircle(h, 'underlay', 0), this.genCircle(h, 'overlay', this.strokeDashOffset)];

      return h('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          height: this.svgSize,
          width: this.svgSize,
          viewBox: this.viewBox
        }
      }, children);
    }
  },

  render: function render(h) {
    var info = h('div', { class: 'progress-circular__info' }, [this.$slots.default]);
    var svg = this.genSvg(h);

    return h('div', {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    }, [svg, info]);
  }
};

/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "9lnO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("X05+");

var _applicationable = __webpack_require__("gzFi");

var _applicationable2 = _interopRequireDefault(_applicationable);

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _ssrBootable = __webpack_require__("09zI");

var _ssrBootable2 = _interopRequireDefault(_ssrBootable);

var _scroll = __webpack_require__("Ijby");

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
exports.default = {
  name: 'v-toolbar',

  mixins: [(0, _applicationable2.default)('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'manualScroll']), _colorable2.default, _ssrBootable2.default, _themeable2.default],

  directives: { Scroll: _scroll2.default },

  data: function data() {
    return {
      activeTimeout: null,
      currentScroll: 0,
      heights: {
        mobileLandscape: 48,
        mobile: 56,
        desktop: 64,
        dense: 48
      },
      isActive: true,
      isExtended: false,
      isScrollingUp: false,
      previousScroll: null,
      previousScrollDirection: null,
      savedScroll: 0,
      target: null
    };
  },

  props: {
    card: Boolean,
    clippedLeft: Boolean,
    clippedRight: Boolean,
    dense: Boolean,
    extended: Boolean,
    extensionHeight: {
      type: [Number, String],
      validator: function validator(v) {
        return !isNaN(parseInt(v));
      }
    },
    flat: Boolean,
    floating: Boolean,
    height: {
      type: [Number, String],
      validator: function validator(v) {
        return !isNaN(parseInt(v));
      }
    },
    invertedScroll: Boolean,
    manualScroll: Boolean,
    prominent: Boolean,
    scrollOffScreen: Boolean,
    scrollTarget: String,
    scrollThreshold: {
      type: Number,
      default: 300
    },
    tabs: Boolean
  },

  computed: {
    computedContentHeight: function computedContentHeight() {
      if (this.height) return parseInt(this.height);
      if (this.dense) return this.heights.dense;

      if (this.prominent || this.$vuetify.breakpoint.mdAndUp) return this.heights.desktop;

      if (this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height) return this.heights.mobileLandscape;

      return this.heights.mobile;
    },
    computedExtensionHeight: function computedExtensionHeight() {
      if (this.tabs) return 48;
      if (this.extensionHeight) return parseInt(this.extensionHeight);

      return this.computedContentHeight;
    },
    computedHeight: function computedHeight() {
      if (!this.isExtended) return this.computedContentHeight;

      return this.computedContentHeight + this.computedExtensionHeight;
    },
    computedMarginTop: function computedMarginTop() {
      if (!this.app) return 0;

      return this.$vuetify.application.bar;
    },
    classes: function classes() {
      return this.addBackgroundColorClassChecks({
        'toolbar': true,
        'elevation-0': this.flat || !this.isActive && !this.tabs,
        'toolbar--absolute': this.absolute,
        'toolbar--card': this.card,
        'toolbar--clipped': this.clippedLeft || this.clippedRight,
        'toolbar--dense': this.dense,
        'toolbar--extended': this.isExtended,
        'toolbar--fixed': !this.absolute && (this.app || this.fixed),
        'toolbar--floating': this.floating,
        'toolbar--prominent': this.prominent,
        'theme--dark': this.dark,
        'theme--light': this.light
      });
    },
    computedPaddingLeft: function computedPaddingLeft() {
      if (!this.app || this.clippedLeft) return 0;

      return this.$vuetify.application.left;
    },
    computedPaddingRight: function computedPaddingRight() {
      if (!this.app || this.clippedRight) return 0;

      return this.$vuetify.application.right;
    },
    computedTransform: function computedTransform() {
      return !this.isActive ? -this.computedHeight : 0;
    },
    currentThreshold: function currentThreshold() {
      return Math.abs(this.currentScroll - this.savedScroll);
    },
    styles: function styles() {
      return {
        marginTop: this.computedMarginTop + 'px',
        paddingRight: this.computedPaddingRight + 'px',
        paddingLeft: this.computedPaddingLeft + 'px',
        transform: 'translateY(' + this.computedTransform + 'px)'
      };
    }
  },

  watch: {
    currentThreshold: function currentThreshold(val) {
      if (this.invertedScroll) {
        return this.isActive = this.currentScroll > this.scrollThreshold;
      }

      if (val < this.scrollThreshold || !this.isBooted) return;

      this.isActive = this.isScrollingUp;
      this.savedScroll = this.currentScroll;
    },
    isActive: function isActive() {
      this.savedScroll = 0;
    },
    invertedScroll: function invertedScroll(val) {
      this.isActive = !val;
    },
    manualScroll: function manualScroll(val) {
      this.isActive = !val;
    },
    isScrollingUp: function isScrollingUp(val) {
      this.savedScroll = this.savedScroll || this.currentScroll;
    }
  },

  created: function created() {
    if (this.invertedScroll || this.manualScroll) this.isActive = false;
  },
  mounted: function mounted() {
    if (this.scrollTarget) {
      this.target = document.querySelector(this.scrollTarget);
    }
  },


  methods: {
    onScroll: function onScroll() {
      if (!this.scrollOffScreen || this.manualScroll || typeof window === 'undefined') return;

      var target = this.target || window;

      this.currentScroll = this.scrollTarget ? target.scrollTop : target.pageYOffset || document.documentElement.scrollTop;

      this.isScrollingUp = this.currentScroll < this.previousScroll;

      this.previousScroll = this.currentScroll;
    },

    /**
     * Update the application layout
     *
     * @return {number}
     */
    updateApplication: function updateApplication() {
      return this.invertedScroll || this.manualScroll ? 0 : this.computedHeight;
    }
  },

  render: function render(h) {
    this.isExtended = this.extended || !!this.$slots.extension;

    var children = [];
    var data = {
      'class': this.classes,
      style: this.styles,
      on: this.$listeners
    };

    data.directives = [{
      arg: this.scrollTarget,
      name: 'scroll',
      value: this.onScroll
    }];

    children.push(h('div', {
      staticClass: 'toolbar__content',
      style: { height: this.computedContentHeight + 'px' },
      ref: 'content'
    }, this.$slots.default));

    if (this.isExtended) {
      children.push(h('div', {
        staticClass: 'toolbar__extension',
        style: { height: this.computedExtensionHeight + 'px' }
      }, this.$slots.extension));
    }

    return h('nav', data, children);
  }
};

// Directives


// Mixins

/***/ }),

/***/ "A+uu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function inserted(el, binding) {
  var callback = binding.value;
  var options = binding.options || { passive: true };

  window.addEventListener('resize', callback, options);
  el._onResize = {
    callback: callback,
    options: options
  };

  if (!binding.modifiers || !binding.modifiers.quiet) {
    callback();
  }
}

function unbind(el, binding) {
  var _el$_onResize = el._onResize,
      callback = _el$_onResize.callback,
      options = _el$_onResize.options;


  window.removeEventListener('resize', callback, options);
  delete el._onResize;
}

exports.default = {
  name: 'resize',
  inserted: inserted,
  unbind: unbind
};

/***/ }),

/***/ "A9FO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  functional: true,

  name: 'v-list-tile-action',

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = data.staticClass ? 'list__tile__action ' + data.staticClass : 'list__tile__action';
    if ((children || []).length > 1) data.staticClass += ' list__tile__action--stack';

    return h('div', data, children);
  }
};

/***/ }),

/***/ "AESk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = factory;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function factory() {
  var _watch;

  var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';

  return {
    name: 'toggleable',

    model: { prop: prop, event: event },

    props: _defineProperty({}, prop, { required: false }),

    data: function data() {
      return {
        isActive: !!this[prop]
      };
    },


    watch: (_watch = {}, _defineProperty(_watch, prop, function (val) {
      this.isActive = !!val;
    }), _defineProperty(_watch, 'isActive', function isActive(val) {
      !!val !== this[prop] && this.$emit(event, val);
    }), _watch)
  };
}

var Toggleable = factory();

exports.default = Toggleable;

/***/ }),

/***/ "AyHn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__("IcKj");

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _registrable = __webpack_require__("Zk4d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-expansion-panel',

  mixins: [_themeable2.default, (0, _registrable.provide)('expansionPanel')],

  provide: function provide() {
    return {
      panelClick: this.panelClick,
      focusable: this.focusable
    };
  },
  data: function data() {
    return {
      items: []
    };
  },


  props: {
    expand: Boolean,
    focusable: Boolean,
    inset: Boolean,
    popout: Boolean
  },

  methods: {
    panelClick: function panelClick(uid) {
      if (!this.expand) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].toggle(uid);
        }
        return;
      }

      for (var _i = 0; _i < this.items.length; _i++) {
        if (this.items[_i].uid === uid) {
          this.items[_i].toggle(uid);
          return;
        }
      }
    },
    register: function register(uid, toggle) {
      this.items.push({ uid: uid, toggle: toggle });
    },
    unregister: function unregister(uid) {
      this.items = this.items.filter(function (i) {
        return i.uid !== uid;
      });
    }
  },

  render: function render(h) {
    return h('ul', {
      staticClass: 'expansion-panel',
      'class': _extends({
        'expansion-panel--focusable': this.focusable,
        'expansion-panel--popout': this.popout,
        'expansion-panel--inset': this.inset
      }, this.themeClasses)
    }, this.$slots.default);
  }
};

/***/ }),

/***/ "B0bq":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fWfb");
module.exports = __webpack_require__("FeBl").Object.getOwnPropertySymbols;


/***/ }),

/***/ "Bau1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("EuXz");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("Biqn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("VjuZ");
var es6_regexp_replace_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_replace);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/Vuetify/index.js
var Vuetify = __webpack_require__("M+UZ");
var Vuetify_default = /*#__PURE__*/__webpack_require__.n(Vuetify);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VApp/index.js
var VApp = __webpack_require__("IcMm");
var VApp_default = /*#__PURE__*/__webpack_require__.n(VApp);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VNavigationDrawer/index.js
var VNavigationDrawer = __webpack_require__("rPQa");
var VNavigationDrawer_default = /*#__PURE__*/__webpack_require__.n(VNavigationDrawer);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VFooter/index.js
var VFooter = __webpack_require__("TWha");
var VFooter_default = /*#__PURE__*/__webpack_require__.n(VFooter);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VList/index.js
var VList = __webpack_require__("fYhH");
var VList_default = /*#__PURE__*/__webpack_require__.n(VList);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VBtn/index.js
var VBtn = __webpack_require__("7Q1V");
var VBtn_default = /*#__PURE__*/__webpack_require__.n(VBtn);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VCard/index.js
var VCard = __webpack_require__("f/u0");
var VCard_default = /*#__PURE__*/__webpack_require__.n(VCard);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VIcon/index.js
var VIcon = __webpack_require__("7M7f");
var VIcon_default = /*#__PURE__*/__webpack_require__.n(VIcon);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VGrid/index.js
var VGrid = __webpack_require__("JUsQ");
var VGrid_default = /*#__PURE__*/__webpack_require__.n(VGrid);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VToolbar/index.js
var VToolbar = __webpack_require__("+9ps");
var VToolbar_default = /*#__PURE__*/__webpack_require__.n(VToolbar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/renoirb/workspaces/cgi/experiments/datatable-component/vue-cli/datatable-component/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UCopyrightLinks.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var classNames = ['hotpink--text', 'text-xs-center', 'pa-1']; // @vue/component

/* harmony default export */ var UCopyrightLinks = ({
  name: 'UCopyrightLinks',
  props: {
    productName: {
      type: String,
      default: 'CatFacts'
    },
    productUrl: {
      type: String,
      default: 'http://www.catfacts.co/'
    },
    publisherName: {
      type: String,
      default: 'PiedPiper'
    },
    publisherUrl: {
      type: String,
      default: 'http://www.piedpiper.com/'
    },
    firstYear: {
      type: Number,
      default: 1998
    }
  },
  data: function data() {
    return {
      classNames: classNames
    };
  },
  computed: {
    year: function year() {
      return new Date().getFullYear();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0618be05","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UCopyrightLinks.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.classNames]},[_c('a',{attrs:{"href":_vm.productUrl}},[_vm._v("\n    "+_vm._s(_vm.productName)+"\n  ")]),_vm._v("\n   \n  ©\n   \n  "+_vm._s(_vm.firstYear)+"-"+_vm._s(_vm.year)+"\n   \n  "),_c('a',{attrs:{"href":_vm.publisherUrl}},[_vm._v("\n    "+_vm._s(_vm.publisherName)+"\n  ")])])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/UCopyrightLinks.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  UCopyrightLinks,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_UCopyrightLinks = (Component.exports);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/renoirb/workspaces/cgi/experiments/datatable-component/vue-cli/datatable-component/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UToolbarCard.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // @vue/component

/* harmony default export */ var UToolbarCard = ({
  name: 'UToolbarCard',
  props: {
    icon: {
      type: String,
      default: 'menu'
    },
    title: {
      type: String,
      default: 'Card Title'
    }
  },
  components: {
    VToolbar: VToolbar_default.a,
    VCard: VCard_default.a
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66afc59c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UToolbarCard.vue
var UToolbarCard_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-toolbar-card--component"},[_c('v-toolbar',{attrs:{"color":"primary"}},[_c('v-toolbar-title',{staticClass:"white--text"},[_c('v-icon',{attrs:{"color":"white"},domProps:{"textContent":_vm._s(_vm.icon)}}),_c('span',[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])],1)],1),_c('v-card',[_c('v-card-text',[_vm._t("default",[_vm._v("\n        Card contents goes here\n      ")])],2),_c('v-card-actions',[_vm._t("actions")],2)],1)],1)}
var UToolbarCard_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/UToolbarCard.vue
/* script */


/* template */

/* template functional */
var UToolbarCard___vue_template_functional__ = false
/* styles */
var UToolbarCard___vue_styles__ = null
/* scopeId */
var UToolbarCard___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var UToolbarCard___vue_module_identifier__ = null

var UToolbarCard_Component = normalizeComponent(
  UToolbarCard,
  UToolbarCard_render,
  UToolbarCard_staticRenderFns,
  UToolbarCard___vue_template_functional__,
  UToolbarCard___vue_styles__,
  UToolbarCard___vue_scopeId__,
  UToolbarCard___vue_module_identifier__
)

/* harmony default export */ var components_UToolbarCard = (UToolbarCard_Component.exports);

// EXTERNAL MODULE: ./node_modules/vuetify/es5/components/VExpansionPanel/index.js
var VExpansionPanel = __webpack_require__("tCug");
var VExpansionPanel_default = /*#__PURE__*/__webpack_require__.n(VExpansionPanel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/renoirb/workspaces/cgi/experiments/datatable-component/vue-cli/datatable-component/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UExpansionPanelList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // @vue/component

/* harmony default export */ var UExpansionPanelList = ({
  name: 'UExpansionPanelList',
  props: {
    opened: {
      type: Number,
      default: 0
    },
    panels: {
      type: Array,
      default: function _default() {
        return [{
          label: 'Hello',
          key: 'hello',
          contents: '...'
        }];
      }
    }
  },
  components: {
    VExpansionPanel: VExpansionPanel["VExpansionPanel"],
    VExpansionPanelContent: VExpansionPanel["VExpansionPanelContent"]
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b40b1d6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UExpansionPanelList.vue
var UExpansionPanelList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-expansion-panel',{staticClass:"u-expansion-panel-list--component",model:{value:(_vm.opened),callback:function ($$v) {_vm.opened=$$v},expression:"opened"}},_vm._l((_vm.panels),function(item,i){return _c('v-expansion-panel-content',{key:i,attrs:{"value":i==_vm.opened}},[_c('h2',{attrs:{"slot":"header"},slot:"header"},[_vm._v("\n      "+_vm._s(item.label)+"\n    ")]),_c('v-card',[_c('v-card-text',{staticClass:"u-expansion-panel-list--children",domProps:{"innerHTML":_vm._s(item.contents)}})],1)],1)}))}
var UExpansionPanelList_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/UExpansionPanelList.vue
/* script */


/* template */

/* template functional */
var UExpansionPanelList___vue_template_functional__ = false
/* styles */
var UExpansionPanelList___vue_styles__ = null
/* scopeId */
var UExpansionPanelList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var UExpansionPanelList___vue_module_identifier__ = null

var UExpansionPanelList_Component = normalizeComponent(
  UExpansionPanelList,
  UExpansionPanelList_render,
  UExpansionPanelList_staticRenderFns,
  UExpansionPanelList___vue_template_functional__,
  UExpansionPanelList___vue_styles__,
  UExpansionPanelList___vue_scopeId__,
  UExpansionPanelList___vue_module_identifier__
)

/* harmony default export */ var components_UExpansionPanelList = (UExpansionPanelList_Component.exports);

// CONCATENATED MODULE: ./src/components/index.js




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/renoirb/workspaces/cgi/experiments/datatable-component/vue-cli/datatable-component/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _data = {
  panels: [{
    label: 'Hello world',
    key: 'hello-world',
    contents: '<p>Hello</p>'
  }, {
    label: 'Second panel',
    key: 'second-panel',
    contents: '<p>...</p>'
  }]
};
/* harmony default export */ var App = ({
  name: 'u-app',
  data: function data() {
    return objectSpread_default()({}, _data);
  },
  components: {
    UCopyrightLinks: components_UCopyrightLinks,
    UToolbarCard: components_UToolbarCard,
    UExpansionPanelList: components_UExpansionPanelList
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2378b3f2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('v-app',[_c('v-content',[_c('v-container',[_c('u-toolbar-card',{attrs:{"title":"UneLibrarie Demo"}},[_c('h3',[_vm._v("Ceci est une VCard")]),_c('img',{attrs:{"src":"https://lorempixel.com/420/320/abstract"}}),_c('u-expansion-panel-list',{attrs:{"opened":1,"panels":_vm.panels}}),_c('div',{attrs:{"slot":"actions"},slot:"actions"},[_c('v-btn',[_c('v-icon',[_vm._v("assignment_turned_in")]),_vm._v("\n              Soumettre\n            ")],1)],1)],1),_c('u-copyright-links',{attrs:{"firstYear":1978}})],1)],1)],1)],1)}
var App_staticRenderFns = []

// CONCATENATED MODULE: ./src/App.vue
function injectStyle (context) {
  __webpack_require__("lz7+")
}
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null

var App_Component = normalizeComponent(
  App,
  App_render,
  App_staticRenderFns,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vuetify/src/stylus/app.styl
var app = __webpack_require__("s6ZO");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./src/lib.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Vuetify", function() { return Vuetify_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VApp", function() { return VApp_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VNavigationDrawer", function() { return VNavigationDrawer_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VFooter", function() { return VFooter_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VList", function() { return VList_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VBtn", function() { return VBtn_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VCard", function() { return VCard_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VIcon", function() { return VIcon_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VGrid", function() { return VGrid_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VToolbar", function() { return VToolbar_default.a; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UCopyrightLinks", function() { return components_UCopyrightLinks; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UToolbarCard", function() { return components_UToolbarCard; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "UExpansionPanelList", function() { return components_UExpansionPanelList; });




/**
 * Attempting exporting subset of Vuetify.js
 *
 * https://github.com/vuetifyjs/vuetify/issues/3035
 * https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md
 */











 // import '@/stylus/theme.stylus'


var components = {
  App: src_App,
  UCopyrightLinks: components_UCopyrightLinks,
  UToolbarCard: components_UToolbarCard,
  UExpansionPanelList: components_UExpansionPanelList
};
var imported = {
  VApp: VApp_default.a,
  VNavigationDrawer: VNavigationDrawer_default.a,
  VFooter: VFooter_default.a,
  VList: VList_default.a,
  VBtn: VBtn_default.a,
  VCard: VCard_default.a,
  VIcon: VIcon_default.a,
  VGrid: VGrid_default.a,
  VToolbar: VToolbar_default.a
};
var theme = {
  'primary': '#2C3E50',
  'secondary': '#95a5a6',
  'accent': '#f2a200',
  'error': '#E74C3C',
  'warning': '#F39C12',
  'info': '#3498DB',
  'success': '#18BC9C',
  'hotpink': '#ff69b4'
};

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

var VuePlugin = {
  install: function install(Vue) {
    Vue.use(Vuetify_default.a, {
      components: objectSpread_default()({}, imported),
      theme: theme
    });

    for (var className in components) {
      var outcome = 'Could not register';

      try {
        console.log(className);
        var component = components[className];
        var name = camelCaseToDash(component.name || className);
        Vue.component(name, component);
        outcome = "Registered ".concat(name, " for");
      } catch (e) {
        /* Not failing */
      }

      console.log("".concat(outcome, " component ").concat(className));
    }
  }
};
/* harmony default export */ var lib = __webpack_exports__["default"] = (VuePlugin);


/***/ }),

/***/ "Biqn":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Ttsf");

var _Object$getOwnPropertySymbols = __webpack_require__("qp3O");

var _Object$keys = __webpack_require__("qO4g");

var defineProperty = __webpack_require__("fKPv");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "BzEx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'v-card-media',

  props: {
    contain: Boolean,
    height: {
      type: [Number, String],
      default: 'auto'
    },
    src: {
      type: String
    }
  },

  render: function render(h) {
    var data = {
      'class': 'card__media',
      style: {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      },
      on: this.$listeners
    };

    var children = [];

    if (this.src) {
      children.push(h('div', {
        'class': 'card__media__background',
        style: {
          background: 'url(' + this.src + ') center center / ' + (this.contain ? 'contain' : 'cover') + ' no-repeat'
        }
      }));
    }

    children.push(h('div', {
      'class': 'card__media__content'
    }, this.$slots.default));

    return h('div', data, children);
  }
};

/***/ }),

/***/ "Cdx3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("sB3e");
var $keys = __webpack_require__("lktj");

__webpack_require__("uqUo")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "DIVP":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "DVNm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

var _routable = __webpack_require__("X0zv");

var _routable2 = _interopRequireDefault(_routable);

var _toggleable = __webpack_require__("AESk");

var _toggleable2 = _interopRequireDefault(_toggleable);

var _ripple = __webpack_require__("ajdG");

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Mixins


// Directives


exports.default = {
  name: 'v-list-tile',

  mixins: [_colorable2.default, _routable2.default, _toggleable2.default],

  directives: {
    Ripple: _ripple2.default
  },

  inheritAttrs: false,

  data: function data() {
    return {
      proxyClass: 'list__tile--active'
    };
  },

  props: {
    activeClass: {
      type: String,
      default: 'primary--text'
    },
    avatar: Boolean,
    inactive: Boolean,
    tag: String
  },

  computed: {
    listClasses: function listClasses() {
      return this.disabled ? 'text--disabled' : this.color ? this.addTextColorClassChecks() : this.defaultColor;
    },
    classes: function classes() {
      return _defineProperty({
        'list__tile': true,
        'list__tile--link': this.isLink && !this.inactive,
        'list__tile--avatar': this.avatar,
        'list__tile--disabled': this.disabled,
        'list__tile--active': !this.to && this.isActive
      }, this.activeClass, this.isActive);
    },
    isLink: function isLink() {
      return this.href || this.to || this.$listeners && (this.$listeners.click || this.$listeners['!click']);
    }
  },

  render: function render(h) {
    var isRouteLink = !this.inactive && this.isLink;

    var _ref2 = isRouteLink ? this.generateRouteLink() : {
      tag: this.tag || 'div',
      data: {
        class: this.classes
      }
    },
        tag = _ref2.tag,
        data = _ref2.data;

    data.attrs = Object.assign({}, data.attrs, this.$attrs);

    return h('div', {
      'class': this.listClasses,
      attrs: {
        disabled: this.disabled
      },
      on: _extends({}, this.$listeners)
    }, [h(tag, data, this.$slots.default)]);
  }
};

/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "EuXz":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("bUqO") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "Ezqw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = theme;
/* eslint-disable no-multi-spaces */
var THEME_DEFAULTS = {
  primary: '#1976D2', // blue.darken2
  secondary: '#424242', // grey.darken3
  accent: '#82B1FF', // blue.accent1
  error: '#FF5252', // red.accent2
  info: '#2196F3', // blue.base
  success: '#4CAF50', // green.base
  warning: '#FFC107' // amber.base
};

function theme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.assign({}, THEME_DEFAULTS, theme);
}

/***/ }),

/***/ "Fa9n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__("P0ba");

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE_MAP = {
  small: '16px',
  default: '24px',
  medium: '28px',
  large: '36px',
  xLarge: '40px'
};

function isFontAwesome5(iconType) {
  return ['fas', 'far', 'fal', 'fab'].some(function (val) {
    return iconType.includes(val);
  });
}

exports.default = {
  name: 'v-icon',

  functional: true,

  mixins: [_colorable2.default, _themeable2.default],

  props: {
    disabled: Boolean,
    large: Boolean,
    left: Boolean,
    medium: Boolean,
    right: Boolean,
    size: {
      type: [Number, String]
    },
    small: Boolean,
    xLarge: Boolean
  },

  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        _ref$children = _ref.children,
        children = _ref$children === undefined ? [] : _ref$children;
    var small = props.small,
        medium = props.medium,
        large = props.large,
        xLarge = props.xLarge;

    var sizes = { small: small, medium: medium, large: large, xLarge: xLarge };
    var explicitSize = Object.keys(sizes).find(function (key) {
      return sizes[key] && key;
    });
    var fontSize = explicitSize && SIZE_MAP[explicitSize] || props.size;

    if (fontSize) data.style = _extends({ fontSize: fontSize }, data.style);

    var iconName = '';
    if (children.length) iconName = children.pop().text;
    // Support usage of v-text and v-html
    else if (data.domProps) {
        iconName = data.domProps.textContent || data.domProps.innerHTML || iconName;

        // Remove nodes so it doesn't
        // overwrite our changes
        delete data.domProps.textContent;
        delete data.domProps.innerHTML;
      }

    var iconType = 'material-icons';
    // Material Icon delimiter is _
    // https://material.io/icons/
    var delimiterIndex = iconName.indexOf('-');
    var isCustomIcon = delimiterIndex > -1;

    if (isCustomIcon) {
      iconType = iconName.slice(0, delimiterIndex);

      if (isFontAwesome5(iconType)) iconType = '';
      // Assume if not a custom icon
      // is Material Icon font
    } else children.push(iconName);

    data.attrs = data.attrs || {};
    if (!('aria-hidden' in data.attrs)) {
      data.attrs['aria-hidden'] = true;
    }

    var classes = Object.assign({
      'icon--disabled': props.disabled,
      'icon--left': props.left,
      'icon--right': props.right,
      'theme--dark': props.dark,
      'theme--light': props.light
    }, props.color ? _colorable2.default.methods.addTextColorClassChecks.call(props, {}, props.color) : {});

    // Order classes
    // * Component class
    // * Vuetify classes
    // * Icon Classes
    data.staticClass = ['icon', data.staticClass, Object.keys(classes).filter(function (k) {
      return classes[k];
    }).join(' '), iconType, isCustomIcon ? iconName : null].reduce(function (prev, curr) {
      return curr ? prev + ' ' + curr : prev;
    }).trim();

    return h('i', data, children);
  }
};

/***/ }),

/***/ "FbEL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "Gnu1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;
var OPTIONS_DEFAULTS = {
  themeVariations: ['primary', 'secondary', 'accent'],
  minifyTheme: null,
  themeCache: null
};

function options() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.assign({}, OPTIONS_DEFAULTS, options);
}

/***/ }),

/***/ "HNa/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "IcKj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IcMm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VApp = __webpack_require__("6myg");

var _VApp2 = _interopRequireDefault(_VApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VApp2.default.install = function install(Vue) {
  Vue.component(_VApp2.default.name, _VApp2.default);
};

exports.default = _VApp2.default;

/***/ }),

/***/ "Ijby":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function inserted(el, binding) {
  var callback = binding.value;
  var options = binding.options || { passive: true };
  var target = binding.arg || window;
  if (target === 'undefined') return;

  if (target !== window) {
    target = document.querySelector(target);
  }

  target.addEventListener('scroll', callback, options);

  el._onScroll = {
    callback: callback,
    options: options,
    target: target
  };
}

function unbind(el, binding) {
  if (!el._onScroll) return;

  var _el$_onScroll = el._onScroll,
      callback = _el$_onScroll.callback,
      options = _el$_onScroll.options,
      target = _el$_onScroll.target;


  target.removeEventListener('scroll', callback, options);
  delete el._onScroll;
}

exports.default = {
  name: 'scroll',
  inserted: inserted,
  unbind: unbind
};

/***/ }),

/***/ "JUsQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VSpacer = exports.VLayout = exports.VFlex = exports.VContent = exports.VContainer = undefined;

var _helpers = __webpack_require__("VzT6");

var _VContent = __webpack_require__("R2PZ");

var _VContent2 = _interopRequireDefault(_VContent);

var _VContainer = __webpack_require__("NUs8");

var _VContainer2 = _interopRequireDefault(_VContainer);

var _VFlex = __webpack_require__("Mlxr");

var _VFlex2 = _interopRequireDefault(_VFlex);

var _VLayout = __webpack_require__("ydBJ");

var _VLayout2 = _interopRequireDefault(_VLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VSpacer = (0, _helpers.createSimpleFunctional)('spacer');

exports.VContainer = _VContainer2.default;
exports.VContent = _VContent2.default;
exports.VFlex = _VFlex2.default;
exports.VLayout = _VLayout2.default;
exports.VSpacer = VSpacer;


var VGrid = {};

/* istanbul ignore next */
VGrid.install = function install(Vue) {
  Vue.component(_VContent2.default.name, _VContent2.default);
  Vue.component(_VContainer2.default.name, _VContainer2.default);
  Vue.component(_VFlex2.default.name, _VFlex2.default);
  Vue.component(_VLayout2.default.name, _VLayout2.default);
  Vue.component(VSpacer.name, VSpacer);
};

exports.default = VGrid;

/***/ }),

/***/ "KAkE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transitions = __webpack_require__("6VHA");

var _bootable = __webpack_require__("tvJZ");

var _bootable2 = _interopRequireDefault(_bootable);

var _toggleable = __webpack_require__("AESk");

var _toggleable2 = _interopRequireDefault(_toggleable);

var _rippleable = __webpack_require__("hcbX");

var _rippleable2 = _interopRequireDefault(_rippleable);

var _registrable = __webpack_require__("Zk4d");

var _VIcon = __webpack_require__("7M7f");

var _VIcon2 = _interopRequireDefault(_VIcon);

var _clickOutside = __webpack_require__("uPRp");

var _clickOutside2 = _interopRequireDefault(_clickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-expansion-panel-content',

  mixins: [_bootable2.default, _toggleable2.default, _rippleable2.default, (0, _registrable.inject)('expansionPanel', 'v-expansion-panel', 'v-expansion-panel-content')],

  directives: {
    ClickOutside: _clickOutside2.default
  },

  inject: ['focusable', 'panelClick'],

  data: function data() {
    return {
      height: 'auto'
    };
  },


  props: {
    expandIcon: {
      type: String,
      default: 'keyboard_arrow_down'
    },
    hideActions: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },

  methods: {
    genBody: function genBody() {
      return this.$createElement('div', {
        ref: 'body',
        class: 'expansion-panel__body',
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      }, this.showLazyContent(this.$slots.default));
    },
    genHeader: function genHeader() {
      var _this = this;

      return this.$createElement('div', {
        staticClass: 'expansion-panel__header',
        directives: [{
          name: 'ripple',
          value: this.ripple
        }],
        on: {
          click: function click() {
            return _this.panelClick(_this._uid);
          }
        }
      }, [this.$slots.header, this.genIcon()]);
    },
    genIcon: function genIcon(h) {
      if (this.hideActions) return null;

      var icon = this.$slots.actions || this.$createElement(_VIcon2.default, this.expandIcon);

      return this.$createElement('div', {
        staticClass: 'header__icon'
      }, [icon]);
    },
    toggle: function toggle(uid) {
      var _this2 = this;

      var isActive = this._uid === uid && !this.isActive;

      if (isActive) this.isBooted = true;

      // We treat bootable differently
      // Needs time to calc height
      this.$nextTick(function () {
        return _this2.isActive = isActive;
      });
    }
  },

  mounted: function mounted() {
    this.expansionPanel.register(this._uid, this.toggle);
  },
  beforeDestroy: function beforeDestroy() {
    this.expansionPanel.unregister(this._uid);
  },
  render: function render(h) {
    var _this3 = this;

    var children = [];

    this.$slots.header && children.push(this.genHeader());
    children.push(h(_transitions.VExpandTransition, [this.genBody()]));

    return h('li', {
      staticClass: 'expansion-panel__container',
      'class': {
        'expansion-panel__container--active': this.isActive
      },
      attrs: {
        tabindex: 0
      },
      on: {
        keydown: function keydown(e) {
          // Ensure element is focusable and the activeElement
          if (_this3.focusable && _this3.$el === document.activeElement && e.keyCode === 13) _this3.panelClick(_this3._uid);
        }
      }
    }, children);
  }
};

/***/ }),

/***/ "Kh4W":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("dSzd");


/***/ }),

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NpIQ");
var createDesc = __webpack_require__("X8DO");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var has = __webpack_require__("D2L2");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "M+UZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _application = __webpack_require__("Wqj0");

var _application2 = _interopRequireDefault(_application);

var _theme = __webpack_require__("Ezqw");

var _theme2 = _interopRequireDefault(_theme);

var _options = __webpack_require__("Gnu1");

var _options2 = _interopRequireDefault(_options);

var _console = __webpack_require__("1Nba");

var _goTo = __webpack_require__("8ChU");

var _goTo2 = _interopRequireDefault(_goTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vuetify = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) return;

    this.installed = true;

    checkVueVersion(Vue);

    Vue.prototype.$vuetify = new Vue({
      data: {
        application: _application2.default,
        breakpoint: {},
        dark: false,
        options: (0, _options2.default)(opts.options),
        theme: (0, _theme2.default)(opts.theme)
      },
      methods: {
        goTo: _goTo2.default
      }
    });

    if (opts.transitions) {
      Object.values(opts.transitions).forEach(function (transition) {
        if (transition.name !== undefined && transition.name.startsWith('v-')) {
          Vue.component(transition.name, transition);
        }
      });
    }

    if (opts.directives) {
      Object.values(opts.directives).forEach(function (directive) {
        Vue.directive(directive.name, directive);
      });
    }

    if (opts.components) {
      Object.values(opts.components).forEach(function (component) {
        Vue.use(component);
      });
    }
  }
};

/* istanbul ignore next */
function checkVueVersion(Vue) {
  var vueDep = '^2.5.0';

  var required = vueDep.split('.').map(function (v) {
    return v.replace(/\D/g, '');
  });
  var actual = Vue.version.split('.');

  // Simple semver caret range comparison
  var passes = actual[0] === required[0] && ( // major matches
  actual[1] > required[1] || // minor is greater
  actual[1] === required[1] && actual[2] >= required[2] // or minor is eq and patch is >=
  );

  if (!passes) {
    (0, _console.consoleWarn)('Vuetify requires Vue version ' + vueDep);
  }
}

exports.default = Vuetify;

/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "Mlxr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("FbEL");

var _grid = __webpack_require__("ktYg");

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _grid2.default)('flex');

/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "N+IJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NOHZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NUs8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("FbEL");

var _grid = __webpack_require__("ktYg");

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _grid2.default)('container');

/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "NqJv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorUtils = __webpack_require__("0fP+");

var _theme = __webpack_require__("v6pC");

var Theme = _interopRequireWildcard(_theme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  data: function data() {
    return {
      style: null
    };
  },

  computed: {
    parsedTheme: function parsedTheme() {
      return Theme.parse(this.$vuetify.theme);
    },

    /** @return string */
    generatedStyles: function generatedStyles() {
      var theme = this.parsedTheme;
      var css = void 0;

      if (this.$vuetify.options.themeCache != null) {
        css = this.$vuetify.options.themeCache.get(theme);
        if (css != null) return css;
      }

      var colors = Object.keys(theme);
      css = 'a { color: ' + (0, _colorUtils.intToHex)(theme.primary) + '; }';

      for (var i = 0; i < colors.length; ++i) {
        var name = colors[i];
        var value = theme[name];
        if (this.$vuetify.options.themeVariations.includes(name)) {
          css += Theme.genVariations(name, value).join('');
        } else {
          css += Theme.genBaseColor(name, value);
        }
      }

      if (this.$vuetify.options.minifyTheme != null) {
        css = this.$vuetify.options.minifyTheme(css);
      }

      if (this.$vuetify.options.themeCache != null) {
        this.$vuetify.options.themeCache.set(theme, css);
      }

      return css;
    },
    vueMeta: function vueMeta() {
      return {
        style: [{
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet'
        }]
      };
    }
  },

  // Regular vue-meta
  metaInfo: function metaInfo() {
    return this.vueMeta;
  },


  // Nuxt
  head: function head() {
    return this.vueMeta;
  },


  watch: {
    generatedStyles: function generatedStyles() {
      !this.meta && this.applyTheme();
    }
  },

  created: function created() {
    if (this.$meta) {
      // Vue-meta
      // Handled by metaInfo()/nuxt()
    } else if (typeof document === 'undefined' && this.$ssrContext) {
      // SSR
      this.$ssrContext.head = this.$ssrContext.head || '';
      this.$ssrContext.head += '<style type="text/css" id="vuetify-theme-stylesheet">' + this.generatedStyles + '</style>';
    } else if (typeof document !== 'undefined') {
      // Client-side
      this.genStyle();
      this.applyTheme();
    }
  },


  methods: {
    applyTheme: function applyTheme() {
      if (this.style) this.style.innerHTML = this.generatedStyles;
    },
    genStyle: function genStyle() {
      var style = document.getElementById('vuetify-theme-stylesheet');

      if (!style) {
        style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'vuetify-theme-stylesheet';
        document.head.appendChild(style);
      }

      this.style = style;
    }
  }
};

/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OzIq":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "P0ba":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Q0Ak":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9bBU");

/***/ }),

/***/ "QLUw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VProgressCircular = __webpack_require__("9Jb0");

var _VProgressCircular2 = _interopRequireDefault(_VProgressCircular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VProgressCircular2.default.install = function install(Vue) {
  Vue.component(_VProgressCircular2.default.name, _VProgressCircular2.default);
};

exports.default = _VProgressCircular2.default;

/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "R2PZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("acBN");

var _ssrBootable = __webpack_require__("09zI");

var _ssrBootable2 = _interopRequireDefault(_ssrBootable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
exports.default = {
  name: 'v-content',

  mixins: [_ssrBootable2.default],

  props: {
    tag: {
      type: String,
      default: 'main'
    }
  },

  computed: {
    styles: function styles() {
      var _$vuetify$application = this.$vuetify.application,
          bar = _$vuetify$application.bar,
          top = _$vuetify$application.top,
          right = _$vuetify$application.right,
          footer = _$vuetify$application.footer,
          bottom = _$vuetify$application.bottom,
          left = _$vuetify$application.left;


      return {
        paddingTop: top + bar + 'px',
        paddingRight: right + 'px',
        paddingBottom: footer + bottom + 'px',
        paddingLeft: left + 'px'
      };
    }
  },

  render: function render(h) {
    var data = {
      staticClass: 'content',
      'class': this.classes,
      style: this.styles,
      ref: 'content'
    };

    return h(this.tag, data, [h('div', { staticClass: 'content--wrap' }, this.$slots.default)]);
  }
};

// Mixins

/***/ }),

/***/ "R3AP":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var hide = __webpack_require__("2p1q");
var has = __webpack_require__("WBcL");
var SRC = __webpack_require__("ulTY")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7gX0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RWpw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VAvatar = __webpack_require__("cwkd");

var _VAvatar2 = _interopRequireDefault(_VAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VAvatar2.default.install = function install(Vue) {
  Vue.component(_VAvatar2.default.name, _VAvatar2.default);
};

exports.default = _VAvatar2.default;

/***/ }),

/***/ "Rrel":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("TcQ7");
var gOPN = __webpack_require__("n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TWha":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VFooter = __webpack_require__("cx3q");

var _VFooter2 = _interopRequireDefault(_VFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VFooter2.default.install = function install(Vue) {
  Vue.component(_VFooter2.default.name, _VFooter2.default);
};

exports.default = _VFooter2.default;

/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "Ttsf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cnlX");

/***/ }),

/***/ "UEuP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _touchstart = function _touchstart(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;

  wrapper.start && wrapper.start(Object.assign(event, wrapper));
};

var _touchend = function _touchend(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;

  wrapper.end && wrapper.end(Object.assign(event, wrapper));

  handleGesture(wrapper);
};

var _touchmove = function _touchmove(event, wrapper) {
  var touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;

  wrapper.move && wrapper.move(Object.assign(event, wrapper));
};

var handleGesture = function handleGesture(wrapper) {
  var touchstartX = wrapper.touchstartX,
      touchendX = wrapper.touchendX,
      touchstartY = wrapper.touchstartY,
      touchendY = wrapper.touchendY;

  var dirRatio = 0.5;
  var minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;

  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }

  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};

function inserted(el, _ref, _ref2) {
  var value = _ref.value;
  var context = _ref2.context;

  var wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };

  var target = value.parent ? el.parentNode : el;
  var options = value.options || { passive: true

    // Needed to pass unit tests
  };if (!target) return;

  var handlers = {
    touchstart: function touchstart(e) {
      return _touchstart(e, wrapper);
    },
    touchend: function touchend(e) {
      return _touchend(e, wrapper);
    },
    touchmove: function touchmove(e) {
      return _touchmove(e, wrapper);
    }
  };
  target._touchHandlers = Object.assign(Object(target._touchHandlers), _defineProperty({}, context._uid, handlers));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(handlers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      target.addEventListener(eventName, handlers[eventName], options);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function unbind(el, _ref3, _ref4) {
  var value = _ref3.value;
  var context = _ref4.context;

  var target = value.parent ? el.parentNode : el;

  if (!target) return;

  var handlers = target._touchHandlers[context._uid];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.keys(handlers)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var eventName = _step2.value;

      target.removeEventListener(eventName, handlers[eventName]);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  delete target._touchHandlers[context._uid];
}

exports.default = {
  name: 'touch',
  inserted: inserted,
  unbind: unbind
};

/***/ }),

/***/ "UKM+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "VWgF":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "Vg1y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var fails = __webpack_require__("zgIt");
var defined = __webpack_require__("/whu");
var wks = __webpack_require__("kkCw");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "VjuZ":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("Vg1y")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "VzT6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createSimpleFunctional = createSimpleFunctional;
exports.createSimpleTransition = createSimpleTransition;
exports.createJavaScriptTransition = createJavaScriptTransition;
exports.directiveConfig = directiveConfig;
exports.addOnceEventListener = addOnceEventListener;
exports.getObjectValueByPath = getObjectValueByPath;
exports.createRange = createRange;
exports.getZIndex = getZIndex;
exports.escapeHTML = escapeHTML;
exports.filterObjectOnKeys = filterObjectOnKeys;
exports.filterChildren = filterChildren;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  var name = arguments[2];

  name = name || c.replace(/__/g, '-');

  return {
    name: 'v-' + name,
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

function createSimpleTransition(name) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
  var mode = arguments[2];

  return {
    name: name,

    functional: true,

    props: {
      origin: {
        type: String,
        default: origin
      }
    },

    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = _extends({}, context.data.on);
      }

      if (mode) context.data.props.mode = mode;

      context.data.on.beforeEnter = function (el) {
        el.style.transformOrigin = context.props.origin;
        el.style.webkitTransformOrigin = context.props.origin;
      };

      return h('transition', context.data, context.children);
    }
  };
}

function createJavaScriptTransition(name, functions) {
  var css = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'in-out';

  return {
    name: name,

    functional: true,

    props: {
      css: {
        type: Boolean,
        default: css
      },
      mode: {
        type: String,
        default: mode
      }
    },

    render: function render(h, context) {
      var data = {
        props: _extends({}, context.props, {
          name: name
        }),
        on: functions
      };

      return h('transition', data, context.children);
    }
  };
}

function directiveConfig(binding) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.assign({}, defaults, binding.modifiers, { value: binding.arg }, binding.value || {});
}

function addOnceEventListener(el, event, cb) {
  var once = function once() {
    cb();
    el.removeEventListener(event, once, false);
  };

  el.addEventListener(event, once, false);
}

function getObjectValueByPath(obj, path) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  var a = path.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (obj instanceof Object && k in obj) {
      obj = obj[k];
    } else {
      return;
    }
  }
  return obj;
}

function createRange(length) {
  return [].concat(_toConsumableArray(Array.from({ length: length }, function (v, k) {
    return k;
  })));
}

function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  var zi = document.defaultView.getComputedStyle(el).getPropertyValue('z-index');
  if (isNaN(zi)) return getZIndex(el.parentNode);

  return zi;
}

var tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function escapeHTML(str) {
  return str.replace(/[&<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
}

function filterObjectOnKeys(obj, keys) {
  var filtered = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}

function filterChildren() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var tag = arguments[1];

  return array.filter(function (child) {
    return child.componentOptions && child.componentOptions.Ctor.options.name === tag;
  });
}

/***/ }),

/***/ "WBcL":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "Wqj0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  bar: 0,
  bottom: 0,
  footer: 0,
  left: 0,
  right: 0,
  top: 0,
  components: {
    bar: {},
    bottom: {},
    footer: {},
    left: {},
    right: {},
    top: {}
  },
  bind: function bind(uid, target, value) {
    if (!this.components[target]) return;

    this.components[target] = _defineProperty({}, uid, value);
    this.update(target);
  },
  unbind: function unbind(uid, target) {
    if (this.components[target][uid] == null) return;

    delete this.components[target][uid];
    this.update(target);
  },
  update: function update(target) {
    this[target] = Object.values(this.components[target]).reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
  }
};

/***/ }),

/***/ "X05+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X0zv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ripple = __webpack_require__("ajdG");

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'routable',

  directives: {
    Ripple: _ripple2.default
  },

  props: {
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    exact: {
      type: Boolean,
      default: undefined
    },
    exactActiveClass: String,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    ripple: [Boolean, Object],
    tag: String,
    target: String
  },

  methods: {
    click: function click() {},
    generateRouteLink: function generateRouteLink() {
      var exact = this.exact;
      var tag = void 0;

      var data = _defineProperty({
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.ripple && !this.disabled ? this.ripple : false
        }]
      }, this.to ? 'nativeOn' : 'on', _extends({}, this.$listeners, {
        click: this.click
      }));

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        // Add a special activeClass hook
        // for component level styles
        var activeClass = this.activeClass;
        var exactActiveClass = this.exactActiveClass || activeClass;

        if (this.proxyClass) {
          activeClass += ' ' + this.proxyClass;
          exactActiveClass += ' ' + this.proxyClass;
        }

        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        Object.assign(data.props, {
          to: this.to,
          exact: exact,
          activeClass: activeClass,
          exactActiveClass: exactActiveClass,
          append: this.append,
          replace: this.replace
        });
      } else {
        tag = this.href && 'a' || this.tag || 'a';

        if (tag === 'a') {
          if (this.href) data.attrs.href = this.href;
          if (this.target) data.attrs.target = this.target;
        }
      }

      return { tag: tag, data: data };
    }
  }
};

/***/ }),

/***/ "X8DO":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "XC5Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Xc4G":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "Zk4d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inject = inject;
exports.provide = provide;

var _console = __webpack_require__("1Nba");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generateWarning(child, parent) {
  return function () {
    return (0, _console.consoleWarn)('The ' + child + ' component must be used inside a ' + parent);
  };
}

function inject(namespace, child, parent) {
  var defaultImpl = child && parent ? {
    register: generateWarning(child, parent),
    unregister: generateWarning(child, parent)
  } : null;

  return {
    name: 'registrable-inject',

    inject: _defineProperty({}, namespace, {
      default: defaultImpl
    })
  };
}

function provide(namespace) {
  return {
    name: 'registrable-provide',

    methods: {
      register: null,
      unregister: null
    },
    provide: function provide() {
      return _defineProperty({}, namespace, {
        register: this.register,
        unregister: this.unregister
      });
    }
  };
}

/***/ }),

/***/ "Zl0W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VAvatar = __webpack_require__("RWpw");

var _VAvatar2 = _interopRequireDefault(_VAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  functional: true,

  name: 'v-list-tile-avatar',

  props: {
    color: String,
    size: {
      type: [Number, String],
      default: 40
    },
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children,
        props = _ref.props;

    data.staticClass = ('list__tile__avatar ' + (data.staticClass || '')).trim();

    var avatar = h(_VAvatar2.default, {
      props: {
        color: props.color,
        size: props.size,
        tile: props.tile
      }
    }, [children]);

    return h('div', data, [avatar]);
  }
}; // Components

/***/ }),

/***/ "acBN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ajdG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function style(el, value) {
  el.style['transform'] = value;
  el.style['webkitTransform'] = value;
}

var ripple = {
  /**
   * @param {Event} e
   * @param {Element} el
   * @param {{ class?: string, center?: boolean }} [value={}]
   */
  show: function show(e, el) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!el._ripple || !el._ripple.enabled) {
      return;
    }

    var container = document.createElement('span');
    var animation = document.createElement('span');

    container.appendChild(animation);
    container.className = 'ripple__container';

    if (value.class) {
      container.className += ' ' + value.class;
    }

    var size = el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight;
    animation.className = 'ripple__animation';
    animation.style.width = size * (value.center ? 1 : 2) + 'px';
    animation.style.height = animation.style.width;

    el.appendChild(container);
    var computed = window.getComputedStyle(el);
    if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

    var offset = el.getBoundingClientRect();
    var x = value.center ? '50%' : e.clientX - offset.left + 'px';
    var y = value.center ? '50%' : e.clientY - offset.top + 'px';

    animation.classList.add('ripple__animation--enter');
    animation.classList.add('ripple__animation--visible');
    style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ') scale3d(0.01,0.01,0.01)');
    animation.dataset.activated = Date.now();

    setTimeout(function () {
      animation.classList.remove('ripple__animation--enter');
      style(animation, 'translate(-50%, -50%) translate(' + x + ', ' + y + ')  scale3d(0.99,0.99,0.99)');
    }, 0);
  },

  hide: function hide(el) {
    if (!el._ripple || !el._ripple.enabled) return;

    var ripples = el.getElementsByClassName('ripple__animation');

    if (ripples.length === 0) return;
    var animation = ripples[ripples.length - 1];
    var diff = Date.now() - Number(animation.dataset.activated);
    var delay = 400 - diff;

    delay = delay < 0 ? 0 : delay;

    setTimeout(function () {
      animation.classList.remove('ripple__animation--visible');

      setTimeout(function () {
        // Need to figure out a new way to do this
        try {
          if (ripples.length < 1) el.style.position = null;
          animation.parentNode && el.removeChild(animation.parentNode);
        } catch (e) {}
      }, 300);
    }, delay);
  }
};

function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}

function rippleShow(e) {
  var value = {};
  var element = e.currentTarget;
  value.center = element._ripple.centered;
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  ripple.show(e, element, value);
}

function rippleHide(e) {
  ripple.hide(e.currentTarget);
}

function updateRipple(el, binding, wasEnabled) {
  var enabled = isRippleEnabled(binding.value);
  if (!enabled) {
    ripple.hide(el);
  }
  el._ripple = el._ripple || {};
  el._ripple.enabled = enabled;
  var value = binding.value || {};
  if (value.center) {
    el._ripple.centered = true;
  }
  if (value.class) {
    el._ripple.class = binding.value.class;
  }
  if (enabled && !wasEnabled) {
    if ('ontouchstart' in window) {
      el.addEventListener('touchend', rippleHide, false);
      el.addEventListener('touchcancel', rippleHide, false);
    }

    el.addEventListener('mousedown', rippleShow, false);
    el.addEventListener('mouseup', rippleHide, false);
    el.addEventListener('mouseleave', rippleHide, false);
    // Anchor tags can be dragged, causes other hides to fail - #1537
    el.addEventListener('dragstart', rippleHide, false);
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}

function removeListeners(el) {
  el.removeEventListener('touchstart', rippleShow, false);
  el.removeEventListener('mousedown', rippleShow, false);
  el.removeEventListener('touchend', rippleHide, false);
  el.removeEventListener('touchcancel', rippleHide, false);
  el.removeEventListener('mouseup', rippleHide, false);
  el.removeEventListener('mouseleave', rippleHide, false);
  el.removeEventListener('dragstart', rippleHide, false);
}

function directive(el, binding) {
  updateRipple(el, binding, false);
}

function unbind(el, binding) {
  delete el._ripple;
  removeListeners(el);
}

function update(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }

  var wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}

exports.default = {
  name: 'ripple',
  bind: directive,
  unbind: unbind,
  update: update
};

/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bUqO":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zgIt")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cnlX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iInB");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "crlp":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var LIBRARY = __webpack_require__("O4g8");
var wksExt = __webpack_require__("Kh4W");
var defineProperty = __webpack_require__("evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "cwkd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("kP4z");

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-avatar',

  functional: true,

  mixins: [_colorable2.default],

  props: {
    size: {
      type: [Number, String],
      default: 48
    },
    tile: Boolean
  },

  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = ('avatar ' + (data.staticClass || '')).trim();
    data.style = data.style || {};

    if (props.tile) data.staticClass += ' avatar--tile';

    var size = parseInt(props.size) + 'px';
    data.style.height = size;
    data.style.width = size;
    data.class = [data.class, _colorable2.default.methods.addBackgroundColorClassChecks.call(props, {}, props.color)];

    return h('div', data, children);
  }
};

// Mixins

/***/ }),

/***/ "cx3q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("N+IJ");

var _applicationable = __webpack_require__("gzFi");

var _applicationable2 = _interopRequireDefault(_applicationable);

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
exports.default = {
  name: 'v-footer',

  mixins: [(0, _applicationable2.default)('footer', ['height']), _colorable2.default, _themeable2.default],

  props: {
    height: {
      default: 32,
      type: [Number, String]
    },
    inset: Boolean
  },

  computed: {
    computedMarginBottom: function computedMarginBottom() {
      if (!this.app) return;

      return this.$vuetify.application.bottom;
    },
    computedPaddingLeft: function computedPaddingLeft() {
      return !this.app || !this.inset ? 0 : this.$vuetify.application.left;
    },
    computedPaddingRight: function computedPaddingRight() {
      return !this.app ? 0 : this.$vuetify.application.right;
    },
    styles: function styles() {
      var styles = {
        height: isNaN(this.height) ? this.height : this.height + 'px'
      };

      if (this.computedPaddingLeft) {
        styles.paddingLeft = this.computedPaddingLeft + 'px';
      }

      if (this.computedPaddingRight) {
        styles.paddingRight = this.computedPaddingRight + 'px';
      }

      if (this.computedMarginBottom) {
        styles.marginBottom = this.computedMarginBottom + 'px';
      }

      return styles;
    }
  },

  methods: {
    /**
     * Update the application layout
     *
     * @return {number}
     */
    updateApplication: function updateApplication() {
      return isNaN(this.height) ? this.$el ? this.$el.clientHeight : 0 : this.height;
    }
  },

  render: function render(h) {
    var data = {
      staticClass: 'footer',
      'class': this.addBackgroundColorClassChecks({
        'footer--absolute': this.absolute,
        'footer--fixed': !this.absolute && (this.app || this.fixed),
        'footer--inset': this.inset,
        'theme--dark': this.dark,
        'theme--light': this.light
      }),
      style: this.styles,
      ref: 'content'
    };

    return h('footer', data, this.$slots.default);
  }
};

// Mixins

/***/ }),

/***/ "d/YG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromXYZ = fromXYZ;
exports.toXYZ = toXYZ;
var delta = 0.20689655172413793; // 6÷29

var cielabForwardTransform = function cielabForwardTransform(t) {
  return t > Math.pow(delta, 3) ? Math.cbrt(t) : t / (3 * Math.pow(delta, 2)) + 4 / 29;
};

var cielabReverseTransform = function cielabReverseTransform(t) {
  return t > delta ? Math.pow(t, 3) : 3 * Math.pow(delta, 2) * (t - 4 / 29);
};

function fromXYZ(xyz) {
  var transform = cielabForwardTransform;
  var transformedY = transform(xyz[1]);

  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}

function toXYZ(lab) {
  var transform = cielabReverseTransform;
  var Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}

/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "f/u0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VCardText = exports.VCardActions = exports.VCardTitle = exports.VCardMedia = exports.VCard = undefined;

var _helpers = __webpack_require__("VzT6");

var _VCard = __webpack_require__("pGab");

var _VCard2 = _interopRequireDefault(_VCard);

var _VCardMedia = __webpack_require__("BzEx");

var _VCardMedia2 = _interopRequireDefault(_VCardMedia);

var _VCardTitle = __webpack_require__("8tN+");

var _VCardTitle2 = _interopRequireDefault(_VCardTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VCardActions = (0, _helpers.createSimpleFunctional)('card__actions');
var VCardText = (0, _helpers.createSimpleFunctional)('card__text');

exports.VCard = _VCard2.default;
exports.VCardMedia = _VCardMedia2.default;
exports.VCardTitle = _VCardTitle2.default;
exports.VCardActions = VCardActions;
exports.VCardText = VCardText;

/* istanbul ignore next */

_VCard2.default.install = function install(Vue) {
  Vue.component(_VCard2.default.name, _VCard2.default);
  Vue.component(_VCardMedia2.default.name, _VCardMedia2.default);
  Vue.component(_VCardTitle2.default.name, _VCardTitle2.default);
  Vue.component(VCardActions.name, VCardActions);
  Vue.component(VCardText.name, VCardText);
};

exports.default = _VCard2.default;

/***/ }),

/***/ "fKPv":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("Q0Ak");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "fU25":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "fWfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7KvD");
var has = __webpack_require__("D2L2");
var DESCRIPTORS = __webpack_require__("+E39");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var META = __webpack_require__("06OY").KEY;
var $fails = __webpack_require__("S82l");
var shared = __webpack_require__("e8AB");
var setToStringTag = __webpack_require__("e6n0");
var uid = __webpack_require__("3Eo+");
var wks = __webpack_require__("dSzd");
var wksExt = __webpack_require__("Kh4W");
var wksDefine = __webpack_require__("crlp");
var enumKeys = __webpack_require__("Xc4G");
var isArray = __webpack_require__("7UMu");
var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var createDesc = __webpack_require__("X8DO");
var _create = __webpack_require__("Yobk");
var gOPNExt = __webpack_require__("Rrel");
var $GOPD = __webpack_require__("LKZe");
var $DP = __webpack_require__("evD5");
var $keys = __webpack_require__("lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NpIQ").f = $propertyIsEnumerable;
  __webpack_require__("1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fYhH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VListTileSubTitle = exports.VListTileTitle = exports.VListTileContent = exports.VListTileActionText = exports.VListTileAvatar = exports.VListTileAction = exports.VListTile = exports.VListGroup = exports.VList = undefined;

var _helpers = __webpack_require__("VzT6");

var _VList = __webpack_require__("/3df");

var _VList2 = _interopRequireDefault(_VList);

var _VListGroup = __webpack_require__("gOKN");

var _VListGroup2 = _interopRequireDefault(_VListGroup);

var _VListTile = __webpack_require__("DVNm");

var _VListTile2 = _interopRequireDefault(_VListTile);

var _VListTileAction = __webpack_require__("A9FO");

var _VListTileAction2 = _interopRequireDefault(_VListTileAction);

var _VListTileAvatar = __webpack_require__("Zl0W");

var _VListTileAvatar2 = _interopRequireDefault(_VListTileAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VList = _VList2.default;
exports.VListGroup = _VListGroup2.default;
exports.VListTile = _VListTile2.default;
exports.VListTileAction = _VListTileAction2.default;
exports.VListTileAvatar = _VListTileAvatar2.default;
var VListTileActionText = exports.VListTileActionText = (0, _helpers.createSimpleFunctional)('list__tile__action-text', 'span');
var VListTileContent = exports.VListTileContent = (0, _helpers.createSimpleFunctional)('list__tile__content', 'div');
var VListTileTitle = exports.VListTileTitle = (0, _helpers.createSimpleFunctional)('list__tile__title', 'div');
var VListTileSubTitle = exports.VListTileSubTitle = (0, _helpers.createSimpleFunctional)('list__tile__sub-title', 'div');

/* istanbul ignore next */
_VList2.default.install = function install(Vue) {
  Vue.component(_VList2.default.name, _VList2.default);
  Vue.component(_VListGroup2.default.name, _VListGroup2.default);
  Vue.component(_VListTile2.default.name, _VListTile2.default);
  Vue.component(_VListTileAction2.default.name, _VListTileAction2.default);
  Vue.component(VListTileActionText.name, VListTileActionText);
  Vue.component(_VListTileAvatar2.default.name, _VListTileAvatar2.default);
  Vue.component(VListTileContent.name, VListTileContent);
  Vue.component(VListTileSubTitle.name, VListTileSubTitle);
  Vue.component(VListTileTitle.name, VListTileTitle);
};

exports.default = _VList2.default;

/***/ }),

/***/ "farU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Styles


// Components


// Mixins


__webpack_require__("XC5Q");

var _VProgressCircular = __webpack_require__("QLUw");

var _VProgressCircular2 = _interopRequireDefault(_VProgressCircular);

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

var _positionable = __webpack_require__("5a0n");

var _positionable2 = _interopRequireDefault(_positionable);

var _routable = __webpack_require__("X0zv");

var _routable2 = _interopRequireDefault(_routable);

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _toggleable = __webpack_require__("AESk");

var _registrable = __webpack_require__("Zk4d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'v-btn',

  mixins: [_colorable2.default, _routable2.default, _positionable2.default, _themeable2.default, (0, _toggleable.factory)('inputValue'), (0, _registrable.inject)('buttonGroup')],

  props: {
    activeClass: {
      type: String,
      default: 'btn--active'
    },
    block: Boolean,
    depressed: Boolean,
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    large: Boolean,
    loading: Boolean,
    outline: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    },
    round: Boolean,
    small: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    },
    value: null
  },

  computed: {
    classes: function classes() {
      var _extends2;

      var classes = _extends((_extends2 = {
        'btn': true
      }, _defineProperty(_extends2, this.activeClass, this.isActive), _defineProperty(_extends2, 'btn--absolute', this.absolute), _defineProperty(_extends2, 'btn--block', this.block), _defineProperty(_extends2, 'btn--bottom', this.bottom), _defineProperty(_extends2, 'btn--disabled', this.disabled), _defineProperty(_extends2, 'btn--flat', this.flat), _defineProperty(_extends2, 'btn--floating', this.fab), _defineProperty(_extends2, 'btn--fixed', this.fixed), _defineProperty(_extends2, 'btn--hover', this.hover), _defineProperty(_extends2, 'btn--icon', this.icon), _defineProperty(_extends2, 'btn--large', this.large), _defineProperty(_extends2, 'btn--left', this.left), _defineProperty(_extends2, 'btn--loader', this.loading), _defineProperty(_extends2, 'btn--outline', this.outline), _defineProperty(_extends2, 'btn--depressed', this.depressed && !this.flat || this.outline), _defineProperty(_extends2, 'btn--right', this.right), _defineProperty(_extends2, 'btn--round', this.round), _defineProperty(_extends2, 'btn--router', this.to), _defineProperty(_extends2, 'btn--small', this.small), _defineProperty(_extends2, 'btn--top', this.top), _extends2), this.themeClasses);

      return !this.outline && !this.flat ? this.addBackgroundColorClassChecks(classes) : this.addTextColorClassChecks(classes);
    }
  },

  methods: {
    // Prevent focus to match md spec
    click: function click(e) {
      !this.fab && e.detail && this.$el.blur();

      this.$emit('click', e);
    },
    genContent: function genContent() {
      return this.$createElement('div', { 'class': 'btn__content' }, [this.$slots.default]);
    },
    genLoader: function genLoader() {
      var children = [];

      if (!this.$slots.loader) {
        children.push(this.$createElement(_VProgressCircular2.default, {
          props: {
            indeterminate: true,
            size: 26
          }
        }));
      } else {
        children.push(this.$slots.loader);
      }

      return this.$createElement('span', { 'class': 'btn__loading' }, children);
    }
  },

  mounted: function mounted() {
    if (this.buttonGroup) {
      this.buttonGroup.register(this);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.buttonGroup) {
      this.buttonGroup.unregister(this);
    }
  },
  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    var children = [this.genContent()];

    tag === 'button' && (data.attrs.type = this.type);
    this.loading && children.push(this.genLoader());

    data.attrs.value = ['string', 'number'].includes(_typeof(this.value)) ? this.value : JSON.stringify(this.value);

    return h(tag, data, children);
  }
};

/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "gOKN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VIcon = __webpack_require__("7M7f");

var _VIcon2 = _interopRequireDefault(_VIcon);

var _bootable = __webpack_require__("tvJZ");

var _bootable2 = _interopRequireDefault(_bootable);

var _toggleable = __webpack_require__("AESk");

var _toggleable2 = _interopRequireDefault(_toggleable);

var _registrable = __webpack_require__("Zk4d");

var _transitions = __webpack_require__("6VHA");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Components


// Mixins


// Transitions


/**
 * List group
 *
 * @component
 */
exports.default = {
  name: 'v-list-group',

  mixins: [_bootable2.default, (0, _registrable.inject)('list', 'v-list-group', 'v-list'), _toggleable2.default],

  inject: ['listClick'],

  data: function data() {
    return {
      groups: []
    };
  },

  props: {
    activeClass: {
      type: String,
      default: 'primary--text'
    },
    appendIcon: {
      type: String,
      default: 'keyboard_arrow_down'
    },
    disabled: Boolean,
    group: String,
    noAction: Boolean,
    prependIcon: String,
    subGroup: Boolean
  },

  computed: {
    groupClasses: function groupClasses() {
      return {
        'list__group--active': this.isActive,
        'list__group--disabled': this.disabled
      };
    },
    headerClasses: function headerClasses() {
      return {
        'list__group__header--active': this.isActive,
        'list__group__header--sub-group': this.subGroup
      };
    },
    itemsClasses: function itemsClasses() {
      return {
        'list__group__items--no-action': this.noAction
      };
    }
  },

  watch: {
    isActive: function isActive(val) {
      if (!this.subGroup && val) {
        this.listClick(this._uid);
      }
    },
    $route: function $route(to) {
      var isActive = this.matchRoute(to.path);

      if (this.group) {
        if (isActive && this.isActive !== isActive) {
          this.listClick(this._uid);
        }

        this.isActive = isActive;
      }
    }
  },

  mounted: function mounted() {
    this.list.register(this._uid, this.toggle);

    if (this.group && this.$route && this.value == null) {
      this.isActive = this.matchRoute(this.$route.path);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.list.unregister(this._uid);
  },


  methods: {
    click: function click() {
      if (this.disabled) return;

      this.isActive = !this.isActive;
    },
    genIcon: function genIcon(icon) {
      return this.$createElement(_VIcon2.default, icon);
    },
    genAppendIcon: function genAppendIcon() {
      var icon = !this.subGroup ? this.appendIcon : false;

      if (!icon && !this.$slots.appendIcon) return null;

      return this.$createElement('div', {
        staticClass: 'list__group__header__append-icon'
      }, [this.$slots.appendIcon || this.genIcon(icon)]);
    },
    genGroup: function genGroup() {
      return this.$createElement('div', {
        staticClass: 'list__group__header',
        'class': this.headerClasses,
        on: Object.assign({}, {
          click: this.click
        }, this.$listeners),
        ref: 'item'
      }, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()]);
    },
    genItems: function genItems() {
      return this.$createElement('div', {
        staticClass: 'list__group__items',
        'class': this.itemsClasses,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        ref: 'group'
      }, this.showLazyContent(this.$slots.default));
    },
    genPrependIcon: function genPrependIcon() {
      var icon = this.prependIcon ? this.prependIcon : this.subGroup ? 'arrow_drop_down' : false;

      if (!icon && !this.$slots.prependIcon) return null;

      return this.$createElement('div', {
        staticClass: 'list__group__header__prepend-icon',
        'class': _defineProperty({}, this.activeClass, this.isActive)
      }, [this.$slots.prependIcon || this.genIcon(icon)]);
    },
    toggle: function toggle(uid) {
      this.isActive = this._uid === uid;
    },
    matchRoute: function matchRoute(to) {
      if (!this.group) return false;
      return to.match(this.group) !== null;
    }
  },

  render: function render(h) {
    return h('div', {
      staticClass: 'list__group',
      'class': this.groupClasses
    }, [this.genGroup(), h(_transitions.VExpandTransition, [this.genItems()])]);
  }
};

/***/ }),

/***/ "goXG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("NOHZ");

exports.default = {
  name: 'overlayable',

  data: function data() {
    return {
      overlay: null,
      overlayOffset: 0,
      overlayTimeout: null,
      overlayTransitionDuration: 500 + 150 // transition + delay
    };
  },


  props: {
    hideOverlay: Boolean
  },

  beforeDestroy: function beforeDestroy() {
    this.removeOverlay();
  },


  methods: {
    genOverlay: function genOverlay() {
      var _this = this;

      // If fn is called and timeout is active
      // or overlay already exists
      // cancel removal of overlay and re-add active
      if (!this.isActive || this.hideOverlay || this.isActive && this.overlayTimeout || this.overlay) {
        clearTimeout(this.overlayTimeout);

        return this.overlay && this.overlay.classList.add('overlay--active');
      }

      this.overlay = document.createElement('div');
      this.overlay.className = 'overlay';

      if (this.absolute) this.overlay.className += ' overlay--absolute';

      this.hideScroll();

      var parent = this.absolute ? this.$el.parentNode : document.querySelector('[data-app]');

      parent && parent.insertBefore(this.overlay, parent.firstChild);

      // eslint-disable-next-line no-unused-expressions
      this.overlay.clientHeight; // Force repaint
      requestAnimationFrame(function () {
        _this.overlay.className += ' overlay--active';

        if (_this.activeZIndex !== undefined) {
          _this.overlay.style.zIndex = _this.activeZIndex - 1;
        }
      });

      return true;
    },
    removeOverlay: function removeOverlay() {
      var _this2 = this;

      if (!this.overlay) {
        return this.showScroll();
      }

      this.overlay.classList.remove('overlay--active');

      this.overlayTimeout = setTimeout(function () {
        // IE11 Fix
        try {
          _this2.overlay.parentNode.removeChild(_this2.overlay);
          _this2.overlay = null;
          _this2.showScroll();
        } catch (e) {}

        clearTimeout(_this2.overlayTimeout);
        _this2.overlayTimeout = null;
      }, this.overlayTransitionDuration);
    },

    /**
     * @param {Event} e
     * @returns void
     */
    scrollListener: function scrollListener(e) {
      if (e.type === 'keydown') {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

        var up = [38, 33];
        var down = [40, 34];

        if (up.includes(e.keyCode)) {
          e.deltaY = -1;
        } else if (down.includes(e.keyCode)) {
          e.deltaY = 1;
        } else {
          return;
        }
      }

      if (e.target === this.overlay || e.type !== 'keydown' && e.target === document.body || this.checkPath(e)) e.preventDefault();
    },
    hasScrollbar: function hasScrollbar(el) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;

      var style = window.getComputedStyle(el);
      return ['auto', 'scroll'].includes(style['overflow-y']) && el.scrollHeight > el.clientHeight;
    },
    shouldScroll: function shouldScroll(el, delta) {
      if (el.scrollTop === 0 && delta < 0) return true;
      return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0;
    },
    isInside: function isInside(el, parent) {
      if (el === parent) {
        return true;
      } else if (el === null || el === document.body) {
        return false;
      } else {
        return this.isInside(el.parentNode, parent);
      }
    },

    /**
     * @param {Event} e
     * @returns boolean
     */
    checkPath: function checkPath(e) {
      var path = e.path || this.composedPath(e);
      var delta = e.deltaY || -e.wheelDelta;

      if (e.type === 'keydown' && path[0] === document.body) {
        var dialog = this.$refs.dialog;
        var selected = window.getSelection().anchorNode;
        if (this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
          return this.shouldScroll(dialog, delta);
        }
        return true;
      }

      for (var index = 0; index < path.length; index++) {
        var el = path[index];

        if (el === document) return true;
        if (el === document.documentElement) return true;
        if (el === this.$refs.content) return true;

        if (this.hasScrollbar(el)) return this.shouldScroll(el, delta);
      }

      return true;
    },

    /**
     * Polyfill for Event.prototype.composedPath
     * @param {Event} e
     * @returns Element[]
     */
    composedPath: function composedPath(e) {
      if (e.composedPath) return e.composedPath();

      var path = [];
      var el = e.target;

      while (el) {
        path.push(el);

        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);

          return path;
        }

        el = el.parentElement;
      }
    },
    hideScroll: function hideScroll() {
      if (this.$vuetify.breakpoint.smAndDown) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        window.addEventListener('wheel', this.scrollListener);
        window.addEventListener('keydown', this.scrollListener);
      }
    },
    showScroll: function showScroll() {
      document.documentElement.classList.remove('overflow-y-hidden');
      window.removeEventListener('wheel', this.scrollListener);
      window.removeEventListener('keydown', this.scrollListener);
    }
  }
};

/***/ }),

/***/ "gzFi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applicationable;

var _positionable = __webpack_require__("5a0n");

function applicationable(value) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return {
    name: 'applicationable',

    mixins: [(0, _positionable.factory)(['absolute', 'fixed'])],

    props: {
      app: Boolean
    },

    computed: {
      applicationProperty: function applicationProperty() {
        return value;
      }
    },

    watch: {
      // If previous value was app
      // reset the provided prop
      app: function app(x, prev) {
        prev ? this.removeApplication(true) : this.callUpdate();
      }
    },

    activated: function activated() {
      this.callUpdate();
    },
    created: function created() {
      for (var i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate);
      }
      this.callUpdate();
    },
    mounted: function mounted() {
      this.callUpdate();
    },
    deactivated: function deactivated() {
      this.removeApplication();
    },
    destroyed: function destroyed() {
      this.removeApplication();
    },


    methods: {
      callUpdate: function callUpdate() {
        if (!this.app) return;

        this.$vuetify.application.bind(this._uid, this.applicationProperty, this.updateApplication());
      },
      removeApplication: function removeApplication(force) {
        if (!force && !this.app) return;

        this.$vuetify.application.unbind(this._uid, this.applicationProperty);
      },

      updateApplication: function updateApplication() {}
    }
  };
}

/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "hcbX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ripple = __webpack_require__("ajdG");

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @mixin */
exports.default = {
  name: 'rippleable',

  directives: { Ripple: _ripple2.default },

  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },

  methods: {
    genRipple: function genRipple() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { directives: [] };

      data.class = this.rippleClasses || 'input-group--selection-controls__ripple';
      data.directives.push({
        name: 'ripple',
        value: this.ripple && !this.disabled && { center: true }
      });
      data.on = Object.assign({
        click: this.toggle
      }, this.$listeners);

      return this.$createElement('div', data);
    }
  }
};

/***/ }),

/***/ "iInB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("TcQ7");
var $getOwnPropertyDescriptor = __webpack_require__("LKZe").f;

__webpack_require__("uqUo")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "ihLM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = {
  name: 'colorable',

  props: {
    color: String
  },

  data: function data() {
    return {
      defaultColor: null
    };
  },


  computed: {
    computedColor: function computedColor() {
      return this.color || this.defaultColor;
    }
  },

  methods: {
    addBackgroundColorClassChecks: function addBackgroundColorClassChecks() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.computedColor;

      var classes = Object.assign({}, obj);

      if (color) {
        classes[color] = true;
      }

      return classes;
    },
    addTextColorClassChecks: function addTextColorClassChecks() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.computedColor;

      var classes = Object.assign({}, obj);

      if (color) {
        var _color$trim$split = color.trim().split(' '),
            _color$trim$split2 = _slicedToArray(_color$trim$split, 2),
            colorName = _color$trim$split2[0],
            colorModifier = _color$trim$split2[1];

        classes[colorName + '--text'] = true;
        colorModifier && (classes['text--' + colorModifier] = true);
      }

      return classes;
    }
  }
};

/***/ }),

/***/ "jFbC":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Cdx3");
module.exports = __webpack_require__("FeBl").Object.keys;


/***/ }),

/***/ "jhxf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var document = __webpack_require__("OzIq").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "kP4z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kVeV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kkCw":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VWgF")('wks');
var uid = __webpack_require__("ulTY");
var Symbol = __webpack_require__("OzIq").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "ktYg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;
function Grid(name) {
  return {
    name: 'v-' + name,

    functional: true,

    props: {
      id: String,
      tag: {
        type: String,
        default: 'div'
      }
    },

    render: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;

      data.staticClass = (name + ' ' + (data.staticClass || '')).trim();

      if (data.attrs) {
        var classes = Object.keys(data.attrs).filter(function (key) {
          var value = data.attrs[key];
          return value || typeof value === 'string';
        });

        if (classes.length) data.staticClass += ' ' + classes.join(' ');
        delete data.attrs;
      }

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  };
}

/***/ }),

/***/ "lDLk":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var IE8_DOM_DEFINE = __webpack_require__("xZa+");
var toPrimitive = __webpack_require__("s4j0");
var dP = Object.defineProperty;

exports.f = __webpack_require__("bUqO") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "lz7+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });


/***/ }),

/***/ "n0T6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("Ibhu");
var hiddenKeys = __webpack_require__("xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "nqCt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("pu2v");

var _applicationable = __webpack_require__("gzFi");

var _applicationable2 = _interopRequireDefault(_applicationable);

var _overlayable = __webpack_require__("goXG");

var _overlayable2 = _interopRequireDefault(_overlayable);

var _ssrBootable = __webpack_require__("09zI");

var _ssrBootable2 = _interopRequireDefault(_ssrBootable);

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

var _clickOutside = __webpack_require__("uPRp");

var _clickOutside2 = _interopRequireDefault(_clickOutside);

var _resize = __webpack_require__("A+uu");

var _resize2 = _interopRequireDefault(_resize);

var _touch = __webpack_require__("UEuP");

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-navigation-drawer',

  mixins: [(0, _applicationable2.default)(null, ['miniVariant', 'right', 'width']), _overlayable2.default, _ssrBootable2.default, _themeable2.default],

  directives: {
    ClickOutside: _clickOutside2.default,
    Resize: _resize2.default,
    Touch: _touch2.default
  },

  data: function data() {
    return {
      isActive: false,
      touchArea: {
        left: 0,
        right: 0
      }
    };
  },

  props: {
    clipped: Boolean,
    disableRouteWatcher: Boolean,
    disableResizeWatcher: Boolean,
    height: {
      type: [Number, String],
      default: '100%'
    },
    floating: Boolean,
    miniVariant: Boolean,
    miniVariantWidth: {
      type: [Number, String],
      default: 80
    },
    mobileBreakPoint: {
      type: [Number, String],
      default: 1264
    },
    permanent: Boolean,
    right: Boolean,
    stateless: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 300
    },
    value: { required: false }
  },

  computed: {
    /**
     * Used for setting an app
     * value from a dynamic
     * property. Called from
     * applicationable.js
     *
     * @return {string}
     */
    applicationProperty: function applicationProperty() {
      return this.right ? 'right' : 'left';
    },
    calculatedHeight: function calculatedHeight() {
      return isNaN(this.height) ? this.height : this.height + 'px';
    },
    calculatedTransform: function calculatedTransform() {
      if (this.isActive) return 0;

      return this.right ? this.calculatedWidth : -this.calculatedWidth;
    },
    calculatedWidth: function calculatedWidth() {
      return this.miniVariant ? this.miniVariantWidth : this.width;
    },
    classes: function classes() {
      return {
        'navigation-drawer': true,
        'navigation-drawer--absolute': this.absolute,
        'navigation-drawer--clipped': this.clipped,
        'navigation-drawer--close': !this.isActive,
        'navigation-drawer--fixed': !this.absolute && (this.app || this.fixed),
        'navigation-drawer--floating': this.floating,
        'navigation-drawer--is-mobile': this.isMobile,
        'navigation-drawer--mini-variant': this.miniVariant,
        'navigation-drawer--open': this.isActive,
        'navigation-drawer--right': this.right,
        'navigation-drawer--temporary': this.temporary,
        'theme--dark': this.dark,
        'theme--light': this.light
      };
    },
    isMobile: function isMobile() {
      return !this.permanent && !this.temporary && this.$vuetify.breakpoint.width < parseInt(this.mobileBreakPoint, 10);
    },
    marginTop: function marginTop() {
      if (!this.app) return 0;
      var marginTop = this.$vuetify.application.bar;

      marginTop += this.clipped ? this.$vuetify.application.top : 0;

      return marginTop;
    },
    maxHeight: function maxHeight() {
      if (!this.app) return '100%';

      return this.clipped ? this.$vuetify.application.top + this.$vuetify.application.bottom : this.$vuetify.application.bottom;
    },
    reactsToClick: function reactsToClick() {
      return !this.stateless && !this.permanent && (this.isMobile || this.temporary);
    },
    reactsToMobile: function reactsToMobile() {
      return !this.disableResizeWatcher && !this.stateless && !this.permanent && !this.temporary;
    },
    reactsToRoute: function reactsToRoute() {
      return !this.disableRouteWatcher && !this.stateless && (this.temporary || this.isMobile);
    },
    resizeIsDisabled: function resizeIsDisabled() {
      return this.disableResizeWatcher || this.stateless;
    },
    showOverlay: function showOverlay() {
      return this.isActive && (this.isMobile || this.temporary);
    },
    styles: function styles() {
      var styles = {
        height: this.calculatedHeight,
        marginTop: this.marginTop + 'px',
        maxHeight: 'calc(100% - ' + this.maxHeight + 'px)',
        transform: 'translateX(' + this.calculatedTransform + 'px)',
        width: this.calculatedWidth + 'px'
      };

      return styles;
    }
  },

  watch: {
    $route: function $route() {
      if (this.reactsToRoute && this.closeConditional()) {
        this.isActive = false;
      }
    },
    isActive: function isActive(val) {
      this.$emit('input', val);
      this.callUpdate();
    },

    /**
     * When mobile changes, adjust
     * the active state only when
     * there has been a previous
     * value
     */
    isMobile: function isMobile(val, prev) {
      !val && this.isActive && !this.temporary && this.removeOverlay();

      if (prev == null || this.resizeIsDisabled || !this.reactsToMobile) return;

      this.isActive = !val;
      this.callUpdate();
    },
    permanent: function permanent(val) {
      // If enabling prop
      // enable the drawer
      if (val) {
        this.isActive = true;
      }
      this.callUpdate();
    },
    showOverlay: function showOverlay(val) {
      if (val) this.genOverlay();else this.removeOverlay();
    },
    temporary: function temporary() {
      this.callUpdate();
    },
    value: function value(val) {
      if (this.permanent) return;

      if (val == null) return this.init();

      if (val !== this.isActive) this.isActive = val;
    }
  },

  beforeMount: function beforeMount() {
    this.init();
  },


  methods: {
    calculateTouchArea: function calculateTouchArea() {
      if (!this.$el.parentNode) return;
      var parentRect = this.$el.parentNode.getBoundingClientRect();

      this.touchArea = {
        left: parentRect.left + 50,
        right: parentRect.right - 50
      };
    },
    closeConditional: function closeConditional() {
      return this.isActive && this.reactsToClick;
    },
    genDirectives: function genDirectives() {
      var _this = this;

      var directives = [{
        name: 'click-outside',
        value: function value() {
          return _this.isActive = false;
        },
        args: {
          closeConditional: this.closeConditional
        }
      }];

      !this.touchless && directives.push({
        name: 'touch',
        value: {
          parent: true,
          left: this.swipeLeft,
          right: this.swipeRight
        }
      });

      return directives;
    },

    /**
     * Sets state before mount to avoid
     * entry transitions in SSR
     *
     * @return {void}
     */
    init: function init() {
      if (this.permanent) {
        this.isActive = true;
      } else if (this.stateless || this.value != null) {
        this.isActive = this.value;
      } else if (!this.temporary) {
        this.isActive = !this.isMobile;
      }
    },
    swipeRight: function swipeRight(e) {
      if (this.isActive && !this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (!this.right && e.touchstartX <= this.touchArea.left) this.isActive = true;else if (this.right && this.isActive) this.isActive = false;
    },
    swipeLeft: function swipeLeft(e) {
      if (this.isActive && this.right) return;
      this.calculateTouchArea();

      if (Math.abs(e.touchendX - e.touchstartX) < 100) return;
      if (this.right && e.touchstartX >= this.touchArea.right) this.isActive = true;else if (!this.right && this.isActive) this.isActive = false;
    },

    /**
     * Update the application layout
     *
     * @return {number}
     */
    updateApplication: function updateApplication() {
      return !this.isActive || this.temporary || this.isMobile ? 0 : this.calculatedWidth;
    }
  },

  render: function render(h) {
    var _this2 = this;

    var data = {
      'class': this.classes,
      style: this.styles,
      directives: this.genDirectives(),
      on: {
        click: function click() {
          if (!_this2.miniVariant) return;

          _this2.$emit('update:miniVariant', false);
        }
      }
    };

    return h('aside', data, [this.$slots.default, h('div', { 'class': 'navigation-drawer__border' })]);
  }
};

// Directives


// Mixins

/***/ }),

/***/ "ogfJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A modified version of https://gist.github.com/cb109/b074a65f7595cffc21cea59ce8d15f9b
 */

/**
 * A Vue mixin to get the current width/height and the associated breakpoint.
 *
 * Useful to e.g. adapt the user interface from inside a Vue component
 * as opposed to using CSS classes. The breakpoint pixel values and
 * range names are taken from Vuetify (https://github.com/vuetifyjs).
 *
 * Use within a component:
 *
 *   import breakpoint from './breakpoint.js'
 *
 *   export default {
 *     name: 'my-component',
 *     mixins: [breakpoint],
 *     ...
 *
 * Then inside a template:
 *
 *   <div v-if="$breakpoint.smAndDown">...</div>
 */
var breakpoint = {
  data: function data() {
    return {
      clientWidth: clientDimensions.getWidth(),
      clientHeight: clientDimensions.getHeight(),
      resizeTimeout: null
    };
  },


  computed: {
    breakpoint: function breakpoint() {
      var xs = this.clientWidth < 600;
      var sm = this.clientWidth < 960 && !xs;
      var md = this.clientWidth < 1280 - 16 && !(sm || xs);
      var lg = this.clientWidth < 1920 - 16 && !(md || sm || xs);
      var xl = this.clientWidth >= 1920 - 16 && !(lg || md || sm || xs);

      var xsOnly = xs;
      var smOnly = sm;
      var smAndDown = (xs || sm) && !(md || lg || xl);
      var smAndUp = !xs && (sm || md || lg || xl);
      var mdOnly = md;
      var mdAndDown = (xs || sm || md) && !(lg || xl);
      var mdAndUp = !(xs || sm) && (md || lg || xl);
      var lgOnly = lg;
      var lgAndDown = (xs || sm || md || lg) && !xl;
      var lgAndUp = !(xs || sm || md) && (lg || xl);
      var xlOnly = xl;

      var name = void 0;
      switch (true) {
        case xs:
          name = 'xs';
          break;
        case sm:
          name = 'sm';
          break;
        case md:
          name = 'md';
          break;
        case lg:
          name = 'lg';
          break;
        default:
          name = 'xl';
          break;
      }

      var result = {
        // Definite breakpoint.
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,

        // Useful e.g. to construct CSS class names dynamically.
        name: name,

        // Breakpoint ranges.
        xsOnly: xsOnly,
        smOnly: smOnly,
        smAndDown: smAndDown,
        smAndUp: smAndUp,
        mdOnly: mdOnly,
        mdAndDown: mdAndDown,
        mdAndUp: mdAndUp,
        lgOnly: lgOnly,
        lgAndDown: lgAndDown,
        lgAndUp: lgAndUp,
        xlOnly: xlOnly,

        // For custom breakpoint logic.
        width: this.clientWidth,
        height: this.clientHeight
      };

      return result;
    }
  },

  watch: {
    breakpoint: function breakpoint(val) {
      this.$vuetify.breakpoint = val;
    }
  },

  created: function created() {
    this.$vuetify.breakpoint = this.breakpoint;
  },


  methods: {
    onResize: function onResize() {
      var _this = this;

      clearTimeout(this.resizeTimeout);

      // Added debounce to match what
      // v-resize used to do but was
      // removed due to a memory leak
      // https://github.com/vuetifyjs/vuetify/pull/2997
      this.resizeTimeout = setTimeout(function () {
        _this.clientWidth = clientDimensions.getWidth();
        _this.clientHeight = clientDimensions.getHeight();
      }, 200);
    }
  }

  // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081
};var clientDimensions = {
  getWidth: function getWidth() {
    if (typeof document === 'undefined') return 0; // SSR
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  },
  getHeight: function getHeight() {
    if (typeof document === 'undefined') return 0; // SSR
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
};

exports.default = breakpoint;

/***/ }),

/***/ "pGab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("3TcT");

var _colorable = __webpack_require__("ihLM");

var _colorable2 = _interopRequireDefault(_colorable);

var _routable = __webpack_require__("X0zv");

var _routable2 = _interopRequireDefault(_routable);

var _themeable = __webpack_require__("yt+J");

var _themeable2 = _interopRequireDefault(_themeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'v-card',

  mixins: [_colorable2.default, _routable2.default, _themeable2.default],

  props: {
    flat: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    hover: Boolean,
    img: String,
    raised: Boolean,
    tag: {
      type: String,
      default: 'div'
    },
    tile: Boolean,
    width: [String, Number]
  },

  computed: {
    classes: function classes() {
      return this.addBackgroundColorClassChecks({
        'card': true,
        'card--flat': this.flat,
        'card--horizontal': this.horizontal,
        'card--hover': this.hover,
        'card--raised': this.raised,
        'card--tile': this.tile,
        'theme--light': this.light,
        'theme--dark': this.dark
      });
    },
    styles: function styles() {
      var style = {
        height: isNaN(this.height) ? this.height : this.height + 'px'
      };

      if (this.img) {
        style.background = 'url("' + this.img + '") center center / cover no-repeat';
      }

      if (this.width) {
        style.width = isNaN(this.width) ? this.width : this.width + 'px';
      }

      return style;
    }
  },

  render: function render(h) {
    var _generateRouteLink = this.generateRouteLink(),
        tag = _generateRouteLink.tag,
        data = _generateRouteLink.data;

    data.style = this.styles;

    return h(tag, data, this.$slots.default);
  }
};

/***/ }),

/***/ "ptzT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromXYZ = fromXYZ;
exports.toXYZ = toXYZ;
// For converting XYZ to sRGB
var srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]];

// Forward gamma adjust
var srgbForwardTransform = function srgbForwardTransform(C) {
  return C <= 0.0031308 ? C * 12.92 : 1.055 * Math.pow(C, 1 / 2.4) - 0.055;
};

// For converting sRGB to XYZ
var srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];

// Reverse gamma adjust
var srgbReverseTransform = function srgbReverseTransform(C) {
  return C <= 0.04045 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4);
};

function clamp(value) {
  return Math.max(0, Math.min(1, value));
}

function fromXYZ(xyz) {
  var rgb = Array(3);
  var transform = srgbForwardTransform;
  var matrix = srgbForwardMatrix;

  // Matrix transform, then gamma adjustment
  for (var i = 0; i < 3; ++i) {
    rgb[i] = Math.round(clamp(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  }

  // Rescale back to [0, 255]
  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}

function toXYZ(rgb) {
  var xyz = Array(3);
  var transform = srgbReverseTransform;
  var matrix = srgbReverseMatrix;

  // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB
  var r = transform((rgb >> 16 & 0xff) / 255);
  var g = transform((rgb >> 8 & 0xff) / 255);
  var b = transform((rgb >> 0 & 0xff) / 255);

  // Matrix color space transform
  for (var i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}

/***/ }),

/***/ "pu2v":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qO4g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jFbC");

/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "qp3O":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B0bq");

/***/ }),

/***/ "rPQa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VNavigationDrawer = __webpack_require__("nqCt");

var _VNavigationDrawer2 = _interopRequireDefault(_VNavigationDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_VNavigationDrawer2.default.install = function install(Vue) {
  Vue.component(_VNavigationDrawer2.default.name, _VNavigationDrawer2.default);
};

exports.default = _VNavigationDrawer2.default;

/***/ }),

/***/ "s4j0":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("UKM+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "s6ZO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "tCug":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VExpansionPanelContent = exports.VExpansionPanel = undefined;

var _VExpansionPanel = __webpack_require__("AyHn");

var _VExpansionPanel2 = _interopRequireDefault(_VExpansionPanel);

var _VExpansionPanelContent = __webpack_require__("KAkE");

var _VExpansionPanelContent2 = _interopRequireDefault(_VExpansionPanelContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VExpansionPanel = _VExpansionPanel2.default;
exports.VExpansionPanelContent = _VExpansionPanelContent2.default;

/* istanbul ignore next */

_VExpansionPanel2.default.install = function install(Vue) {
  Vue.component(_VExpansionPanel2.default.name, _VExpansionPanel2.default);
  Vue.component(_VExpansionPanelContent2.default.name, _VExpansionPanelContent2.default);
};

exports.default = _VExpansionPanel2.default;

/***/ }),

/***/ "tvJZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Bootable
 * @mixin
 *
 * Used to add lazy content functionality to components
 * Looks for change in "isActive" to automatically boot
 * Otherwise can be set manually
 */
exports.default = {
  name: 'bootable',

  data: function data() {
    return {
      isBooted: false
    };
  },

  props: {
    lazy: Boolean
  },

  watch: {
    isActive: function isActive() {
      this.isBooted = true;
    }
  },

  methods: {
    showLazyContent: function showLazyContent(content) {
      return this.isBooted || !this.lazy || this.isActive ? content : null;
    }
  }
};

/***/ }),

/***/ "uPRp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function closeConditional() {
  return false;
}

function directive(e, el, binding) {
  // Args may not always be supplied
  binding.args = binding.args || {};

  // If no closeConditional was supplied assign a default
  var isActive = binding.args.closeConditional || closeConditional;

  // The include element callbacks below can be expensive
  // so we should avoid calling them when we're not active.
  // Explicitly check for false to allow fallback compatibility
  // with non-toggleable components
  if (!e || isActive(e) === false) return;

  // If click was triggered programmaticaly (domEl.click()) then
  // it shouldn't be treated as click-outside
  // Chrome/Firefox support isTrusted property
  // IE/Edge support pointerType property (empty if not triggered
  // by pointing device)
  if ('isTrusted' in e && !e.isTrusted || 'pointerType' in e && !e.pointerType) return;

  // Check if additional elements were passed to be included in check
  // (click must be outside all included elements, if any)
  var elements = (binding.args.include || function () {
    return [];
  })();
  // Add the root element for the component this directive was defined on
  elements.push(el);

  // Check if it's a click outside our elements, and then if our callback returns true.
  // Non-toggleable components should take action in their callback and return falsy.
  // Toggleable can return true if it wants to deactivate.
  // Note that, because we're in the capture phase, this callback will occure before
  // the bubbling click event on any outside elements.
  !clickedInEls(e, elements) && setTimeout(function () {
    isActive(e) && binding.value();
  }, 0);
}

function clickedInEls(e, elements) {
  // Get position of click
  var x = e.clientX,
      y = e.clientY;
  // Loop over all included elements to see if click was in any of them

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      if (clickedInEl(el, x, y)) return true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

function clickedInEl(el, x, y) {
  // Get bounding rect for element
  // (we're in capturing event and we want to check for multiple elements,
  //  so can't use target.)
  var b = el.getBoundingClientRect();
  // Check if the click was in the element's bounding rect

  return x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
}

exports.default = {
  name: 'click-outside',

  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  inserted: function inserted(el, binding) {
    var onClick = function onClick(e) {
      return directive(e, el, binding);
    };
    // iOS does not recognize click events on document
    // or body, this is the entire purpose of the v-app
    // component and [data-app], stop removing this
    var app = document.querySelector('[data-app]') || document.body; // This is only for unit tests
    app.addEventListener('click', onClick, true);
    el._clickOutside = onClick;
  },
  unbind: function unbind(el) {
    var app = document.querySelector('[data-app]') || document.body; // This is only for unit tests
    app && app.removeEventListener('click', el._clickOutside, true);
    delete el._clickOutside;
  }
};

/***/ }),

/***/ "ulTY":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "v6pC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genVariantColor = exports.genBaseColor = undefined;
exports.parse = parse;
exports.genVariations = genVariations;

var _colorUtils = __webpack_require__("0fP+");

var _transformSRGB = __webpack_require__("ptzT");

var sRGB = _interopRequireWildcard(_transformSRGB);

var _transformCIELAB = __webpack_require__("d/YG");

var LAB = _interopRequireWildcard(_transformCIELAB);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param {object} theme
 * @returns {object}
 */
function parse(theme) {
  var colors = Object.keys(theme);
  var parsedTheme = {};

  for (var i = 0; i < colors.length; ++i) {
    var name = colors[i];
    var value = theme[name];

    parsedTheme[name] = (0, _colorUtils.colorToInt)(value);
  }

  return parsedTheme;
}

function genVariations(name, value) {
  var values = Array(10);
  values[0] = genBaseColor(name, value);

  for (var i = 1, n = 5; i <= 5; ++i, --n) {
    values[i] = genVariantColor(name, lighten(value, n), 'lighten', n);
  }

  for (var _i = 1; _i <= 4; ++_i) {
    values[_i + 5] = genVariantColor(name, darken(value, _i), 'darken', _i);
  }

  return values;
}

function lighten(value, amount) {
  var lab = LAB.fromXYZ(sRGB.toXYZ(value));
  lab[0] = lab[0] + amount * 10;
  return sRGB.fromXYZ(LAB.toXYZ(lab));
}

function darken(value, amount) {
  var lab = LAB.fromXYZ(sRGB.toXYZ(value));
  lab[0] = lab[0] - amount * 10;
  return sRGB.fromXYZ(LAB.toXYZ(lab));
}

/**
 * Generate the CSS for a base color (.primary)
 *
 * @param {string} name - The color name
 * @param {string|number} value - The color value
 * @returns {string}
 */
var genBaseColor = exports.genBaseColor = function genBaseColor(name, value) {
  value = (0, _colorUtils.intToHex)(value);
  return '\n.' + name + ' {\n  background-color: ' + value + ' !important;\n  border-color: ' + value + ' !important;\n}\n.' + name + '--text {\n  color: ' + value + ' !important;\n}\n.' + name + '--text input,\n.' + name + '--text textarea {\n  caret-color: ' + value + ' !important;\n}\n.' + name + '--after::after {\n  background: ' + value + ' !important;\n}';
};

/**
 * Generate the CSS for a variant color (.primary.darken-2)
 *
 * @param {string} name - The color name
 * @param {string|number} value - The color value
 * @param {string} type - The variant type (darken/lighten)
 * @param {number} n - The darken/lighten step number
 * @returns {string}
 */
var genVariantColor = exports.genVariantColor = function genVariantColor(name, value, type, n) {
  value = (0, _colorUtils.intToHex)(value);
  return '\n.' + name + '.' + type + '-' + n + ' {\n  background-color: ' + value + ' !important;\n  border-color: ' + value + ' !important;\n}\n.' + name + '--text.text--' + type + '-' + n + ' {\n  color: ' + value + ' !important;\n}\n.' + name + '--text.text--' + type + '-' + n + ' input,\n.' + name + '--text.text--' + type + '-' + n + ' textarea {\n  caret-color: ' + value + ' !important;\n}\n.' + name + '.' + type + '-' + n + '--after::after {\n  background: ' + value + ' !important;\n}';
};

/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "w7yq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var expandedParentClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return {
    enter: function enter(el, done) {
      el._parent = el.parentNode;

      (0, _helpers.addOnceEventListener)(el, 'transitionend', done);

      // Get height that is to be scrolled
      el.style.overflow = 'hidden';
      el.style.height = 0;
      el.style.display = 'block';
      expandedParentClass && el._parent.classList.add(expandedParentClass);

      setTimeout(function () {
        return el.style.height = el.scrollHeight + 'px';
      }, 100);
    },
    afterEnter: function afterEnter(el) {
      el.style.overflow = null;
      el.style.height = null;
    },
    leave: function leave(el, done) {
      // Remove initial transition
      (0, _helpers.addOnceEventListener)(el, 'transitionend', done);

      // Set height before we transition to 0
      el.style.overflow = 'hidden';
      el.style.height = el.offsetHeight + 'px';

      setTimeout(function () {
        return el.style.height = 0;
      }, 100);
    },
    afterLeave: function afterLeave(el) {
      expandedParentClass && el._parent.classList.remove(expandedParentClass);
    }
  };
};

var _helpers = __webpack_require__("VzT6");

/***/ }),

/***/ "xZa+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("bUqO") && !__webpack_require__("zgIt")(function () {
  return Object.defineProperty(__webpack_require__("jhxf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ydBJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("FbEL");

var _grid = __webpack_require__("ktYg");

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _grid2.default)('layout');

/***/ }),

/***/ "yobx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// linear
var linear = exports.linear = function linear(t) {
  return t;
};
// accelerating from zero velocity
var easeInQuad = exports.easeInQuad = function easeInQuad(t) {
  return t * t;
};
// decelerating to zero velocity
var easeOutQuad = exports.easeOutQuad = function easeOutQuad(t) {
  return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = exports.easeInOutQuad = function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = exports.easeInCubic = function easeInCubic(t) {
  return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = exports.easeOutCubic = function easeOutCubic(t) {
  return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = exports.easeInQuart = function easeInQuart(t) {
  return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = exports.easeOutQuart = function easeOutQuart(t) {
  return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = exports.easeInOutQuart = function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = exports.easeInQuint = function easeInQuint(t) {
  return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = exports.easeOutQuint = function easeOutQuint(t) {
  return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = exports.easeInOutQuint = function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};

/***/ }),

/***/ "yt+J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'themeable',

  props: {
    dark: Boolean,
    light: Boolean
  },

  computed: {
    themeClasses: function themeClasses() {
      return {
        'theme--light': this.light,
        'theme--dark': this.dark
      };
    }
  }
};

/***/ }),

/***/ "zgIt":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=UneLibrairie.umd.js.map