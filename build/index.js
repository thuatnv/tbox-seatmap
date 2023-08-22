import * as ft from "react";
import $e, { useState as $t, createElement as pf, useContext as vf, useRef as $a, useCallback as $n, useEffect as qn } from "react";
var bc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D0(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var G0 = { exports: {} }, _s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf = $e, yf = Symbol.for("react.element"), _f = Symbol.for("react.fragment"), Sf = Object.prototype.hasOwnProperty, Cf = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function U0(a, e, n) {
  var i, o = {}, u = null, h = null;
  n !== void 0 && (u = "" + n), e.key !== void 0 && (u = "" + e.key), e.ref !== void 0 && (h = e.ref);
  for (i in e)
    Sf.call(e, i) && !wf.hasOwnProperty(i) && (o[i] = e[i]);
  if (a && a.defaultProps)
    for (i in e = a.defaultProps, e)
      o[i] === void 0 && (o[i] = e[i]);
  return { $$typeof: yf, type: a, key: u, ref: h, props: o, _owner: Cf.current };
}
_s.Fragment = _f;
_s.jsx = U0;
_s.jsxs = U0;
G0.exports = _s;
var Ve = G0.exports, z0 = { exports: {} }, Ss = {}, cs = {}, ye = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a._registerNode = a.Konva = a.glob = void 0;
  var e = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  a.glob = typeof bc < "u" ? bc : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, a.Konva = {
    _global: a.glob,
    version: "9.2.0",
    isBrowser: n(),
    isUnminified: /param/.test((function(o) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(o) {
      return a.Konva.angleDeg ? o * e : o;
    },
    enableTrace: !1,
    pointerEventsEnabled: !0,
    autoDrawEnabled: !0,
    hitOnDragEnabled: !1,
    capturePointerEventsEnabled: !1,
    _mouseListenClick: !1,
    _touchListenClick: !1,
    _pointerListenClick: !1,
    _mouseInDblClickWindow: !1,
    _touchInDblClickWindow: !1,
    _pointerInDblClickWindow: !1,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: !0,
    showWarnings: !0,
    dragButtons: [0, 1],
    isDragging() {
      return a.Konva.DD.isDragging;
    },
    isDragReady() {
      return !!a.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: a.glob.document,
    _injectGlobal(o) {
      a.glob.Konva = o;
    }
  };
  const i = (o) => {
    a.Konva[o.prototype.getClassName()] = o;
  };
  a._registerNode = i, a.Konva._injectGlobal(a.Konva);
})(ye);
var Xe = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Util = a.Transform = void 0;
  const e = ye;
  class n {
    constructor(w = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = w && w.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new n(this.m);
    }
    copyInto(w) {
      w.m[0] = this.m[0], w.m[1] = this.m[1], w.m[2] = this.m[2], w.m[3] = this.m[3], w.m[4] = this.m[4], w.m[5] = this.m[5];
    }
    point(w) {
      var k = this.m;
      return {
        x: k[0] * w.x + k[2] * w.y + k[4],
        y: k[1] * w.x + k[3] * w.y + k[5]
      };
    }
    translate(w, k) {
      return this.m[4] += this.m[0] * w + this.m[2] * k, this.m[5] += this.m[1] * w + this.m[3] * k, this;
    }
    scale(w, k) {
      return this.m[0] *= w, this.m[1] *= w, this.m[2] *= k, this.m[3] *= k, this;
    }
    rotate(w) {
      var k = Math.cos(w), b = Math.sin(w), I = this.m[0] * k + this.m[2] * b, T = this.m[1] * k + this.m[3] * b, z = this.m[0] * -b + this.m[2] * k, O = this.m[1] * -b + this.m[3] * k;
      return this.m[0] = I, this.m[1] = T, this.m[2] = z, this.m[3] = O, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(w, k) {
      var b = this.m[0] + this.m[2] * k, I = this.m[1] + this.m[3] * k, T = this.m[2] + this.m[0] * w, z = this.m[3] + this.m[1] * w;
      return this.m[0] = b, this.m[1] = I, this.m[2] = T, this.m[3] = z, this;
    }
    multiply(w) {
      var k = this.m[0] * w.m[0] + this.m[2] * w.m[1], b = this.m[1] * w.m[0] + this.m[3] * w.m[1], I = this.m[0] * w.m[2] + this.m[2] * w.m[3], T = this.m[1] * w.m[2] + this.m[3] * w.m[3], z = this.m[0] * w.m[4] + this.m[2] * w.m[5] + this.m[4], O = this.m[1] * w.m[4] + this.m[3] * w.m[5] + this.m[5];
      return this.m[0] = k, this.m[1] = b, this.m[2] = I, this.m[3] = T, this.m[4] = z, this.m[5] = O, this;
    }
    invert() {
      var w = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), k = this.m[3] * w, b = -this.m[1] * w, I = -this.m[2] * w, T = this.m[0] * w, z = w * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), O = w * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = k, this.m[1] = b, this.m[2] = I, this.m[3] = T, this.m[4] = z, this.m[5] = O, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var w = this.m[0], k = this.m[1], b = this.m[2], I = this.m[3], T = this.m[4], z = this.m[5], O = w * I - k * b;
      let G = {
        x: T,
        y: z,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (w != 0 || k != 0) {
        var Y = Math.sqrt(w * w + k * k);
        G.rotation = k > 0 ? Math.acos(w / Y) : -Math.acos(w / Y), G.scaleX = Y, G.scaleY = O / Y, G.skewX = (w * b + k * I) / O, G.skewY = 0;
      } else if (b != 0 || I != 0) {
        var H = Math.sqrt(b * b + I * I);
        G.rotation = Math.PI / 2 - (I > 0 ? Math.acos(-b / H) : -Math.acos(b / H)), G.scaleX = O / H, G.scaleY = H, G.skewX = 0, G.skewY = (w * b + k * I) / O;
      }
      return G.rotation = a.Util._getRotation(G.rotation), G;
    }
  }
  a.Transform = n;
  var i = "[object Array]", o = "[object Number]", u = "[object String]", h = "[object Boolean]", d = Math.PI / 180, f = 180 / Math.PI, p = "#", y = "", C = "0", x = "Konva warning: ", _ = "Konva error: ", m = "rgb(", P = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, E = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, R = [];
  const N = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(v) {
    setTimeout(v, 60);
  };
  a.Util = {
    _isElement(v) {
      return !!(v && v.nodeType == 1);
    },
    _isFunction(v) {
      return !!(v && v.constructor && v.call && v.apply);
    },
    _isPlainObject(v) {
      return !!v && v.constructor === Object;
    },
    _isArray(v) {
      return Object.prototype.toString.call(v) === i;
    },
    _isNumber(v) {
      return Object.prototype.toString.call(v) === o && !isNaN(v) && isFinite(v);
    },
    _isString(v) {
      return Object.prototype.toString.call(v) === u;
    },
    _isBoolean(v) {
      return Object.prototype.toString.call(v) === h;
    },
    isObject(v) {
      return v instanceof Object;
    },
    isValidSelector(v) {
      if (typeof v != "string")
        return !1;
      var w = v[0];
      return w === "#" || w === "." || w === w.toUpperCase();
    },
    _sign(v) {
      return v === 0 || v > 0 ? 1 : -1;
    },
    requestAnimFrame(v) {
      R.push(v), R.length === 1 && N(function() {
        const w = R;
        R = [], w.forEach(function(k) {
          k();
        });
      });
    },
    createCanvasElement() {
      var v = document.createElement("canvas");
      try {
        v.style = v.style || {};
      } catch {
      }
      return v;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(v) {
      for (; v = v.parentNode; )
        if (v == document)
          return !0;
      return !1;
    },
    _urlToImage(v, w) {
      var k = a.Util.createImageElement();
      k.onload = function() {
        w(k);
      }, k.src = v;
    },
    _rgbToHex(v, w, k) {
      return ((1 << 24) + (v << 16) + (w << 8) + k).toString(16).slice(1);
    },
    _hexToRgb(v) {
      v = v.replace(p, y);
      var w = parseInt(v, 16);
      return {
        r: w >> 16 & 255,
        g: w >> 8 & 255,
        b: w & 255
      };
    },
    getRandomColor() {
      for (var v = (Math.random() * 16777215 << 0).toString(16); v.length < 6; )
        v = C + v;
      return p + v;
    },
    getRGB(v) {
      var w;
      return v in P ? (w = P[v], {
        r: w[0],
        g: w[1],
        b: w[2]
      }) : v[0] === p ? this._hexToRgb(v.substring(1)) : v.substr(0, 4) === m ? (w = E.exec(v.replace(/ /g, "")), {
        r: parseInt(w[1], 10),
        g: parseInt(w[2], 10),
        b: parseInt(w[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(v) {
      return v = v || "black", a.Util._namedColorToRBA(v) || a.Util._hex3ColorToRGBA(v) || a.Util._hex4ColorToRGBA(v) || a.Util._hex6ColorToRGBA(v) || a.Util._hex8ColorToRGBA(v) || a.Util._rgbColorToRGBA(v) || a.Util._rgbaColorToRGBA(v) || a.Util._hslColorToRGBA(v);
    },
    _namedColorToRBA(v) {
      var w = P[v.toLowerCase()];
      return w ? {
        r: w[0],
        g: w[1],
        b: w[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(v) {
      if (v.indexOf("rgb(") === 0) {
        v = v.match(/rgb\(([^)]+)\)/)[1];
        var w = v.split(/ *, */).map(Number);
        return {
          r: w[0],
          g: w[1],
          b: w[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(v) {
      if (v.indexOf("rgba(") === 0) {
        v = v.match(/rgba\(([^)]+)\)/)[1];
        var w = v.split(/ *, */).map((k, b) => k.slice(-1) === "%" ? b === 3 ? parseInt(k) / 100 : parseInt(k) / 100 * 255 : Number(k));
        return {
          r: w[0],
          g: w[1],
          b: w[2],
          a: w[3]
        };
      }
    },
    _hex8ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 9)
        return {
          r: parseInt(v.slice(1, 3), 16),
          g: parseInt(v.slice(3, 5), 16),
          b: parseInt(v.slice(5, 7), 16),
          a: parseInt(v.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 7)
        return {
          r: parseInt(v.slice(1, 3), 16),
          g: parseInt(v.slice(3, 5), 16),
          b: parseInt(v.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 5)
        return {
          r: parseInt(v[1] + v[1], 16),
          g: parseInt(v[2] + v[2], 16),
          b: parseInt(v[3] + v[3], 16),
          a: parseInt(v[4] + v[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 4)
        return {
          r: parseInt(v[1] + v[1], 16),
          g: parseInt(v[2] + v[2], 16),
          b: parseInt(v[3] + v[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(v) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(v)) {
        const [w, ...k] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(v), b = Number(k[0]) / 360, I = Number(k[1]) / 100, T = Number(k[2]) / 100;
        let z, O, G;
        if (I === 0)
          return G = T * 255, {
            r: Math.round(G),
            g: Math.round(G),
            b: Math.round(G),
            a: 1
          };
        T < 0.5 ? z = T * (1 + I) : z = T + I - T * I;
        const Y = 2 * T - z, H = [0, 0, 0];
        for (let q = 0; q < 3; q++)
          O = b + 1 / 3 * -(q - 1), O < 0 && O++, O > 1 && O--, 6 * O < 1 ? G = Y + (z - Y) * 6 * O : 2 * O < 1 ? G = z : 3 * O < 2 ? G = Y + (z - Y) * (2 / 3 - O) * 6 : G = Y, H[q] = G * 255;
        return {
          r: Math.round(H[0]),
          g: Math.round(H[1]),
          b: Math.round(H[2]),
          a: 1
        };
      }
    },
    haveIntersection(v, w) {
      return !(w.x > v.x + v.width || w.x + w.width < v.x || w.y > v.y + v.height || w.y + w.height < v.y);
    },
    cloneObject(v) {
      var w = {};
      for (var k in v)
        this._isPlainObject(v[k]) ? w[k] = this.cloneObject(v[k]) : this._isArray(v[k]) ? w[k] = this.cloneArray(v[k]) : w[k] = v[k];
      return w;
    },
    cloneArray(v) {
      return v.slice(0);
    },
    degToRad(v) {
      return v * d;
    },
    radToDeg(v) {
      return v * f;
    },
    _degToRad(v) {
      return a.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), a.Util.degToRad(v);
    },
    _radToDeg(v) {
      return a.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), a.Util.radToDeg(v);
    },
    _getRotation(v) {
      return e.Konva.angleDeg ? a.Util.radToDeg(v) : v;
    },
    _capitalize(v) {
      return v.charAt(0).toUpperCase() + v.slice(1);
    },
    throw(v) {
      throw new Error(_ + v);
    },
    error(v) {
      console.error(_ + v);
    },
    warn(v) {
      e.Konva.showWarnings && console.warn(x + v);
    },
    each(v, w) {
      for (var k in v)
        w(k, v[k]);
    },
    _inRange(v, w, k) {
      return w <= v && v < k;
    },
    _getProjectionToSegment(v, w, k, b, I, T) {
      var z, O, G, Y = (v - k) * (v - k) + (w - b) * (w - b);
      if (Y == 0)
        z = v, O = w, G = (I - k) * (I - k) + (T - b) * (T - b);
      else {
        var H = ((I - v) * (k - v) + (T - w) * (b - w)) / Y;
        H < 0 ? (z = v, O = w, G = (v - I) * (v - I) + (w - T) * (w - T)) : H > 1 ? (z = k, O = b, G = (k - I) * (k - I) + (b - T) * (b - T)) : (z = v + H * (k - v), O = w + H * (b - w), G = (z - I) * (z - I) + (O - T) * (O - T));
      }
      return [z, O, G];
    },
    _getProjectionToLine(v, w, k) {
      var b = a.Util.cloneObject(v), I = Number.MAX_VALUE;
      return w.forEach(function(T, z) {
        if (!(!k && z === w.length - 1)) {
          var O = w[(z + 1) % w.length], G = a.Util._getProjectionToSegment(T.x, T.y, O.x, O.y, v.x, v.y), Y = G[0], H = G[1], q = G[2];
          q < I && (b.x = Y, b.y = H, I = q);
        }
      }), b;
    },
    _prepareArrayForTween(v, w, k) {
      var b, I = [], T = [];
      if (v.length > w.length) {
        var z = w;
        w = v, v = z;
      }
      for (b = 0; b < v.length; b += 2)
        I.push({
          x: v[b],
          y: v[b + 1]
        });
      for (b = 0; b < w.length; b += 2)
        T.push({
          x: w[b],
          y: w[b + 1]
        });
      var O = [];
      return T.forEach(function(G) {
        var Y = a.Util._getProjectionToLine(G, I, k);
        O.push(Y.x), O.push(Y.y);
      }), O;
    },
    _prepareToStringify(v) {
      var w;
      v.visitedByCircularReferenceRemoval = !0;
      for (var k in v)
        if (v.hasOwnProperty(k) && v[k] && typeof v[k] == "object") {
          if (w = Object.getOwnPropertyDescriptor(v, k), v[k].visitedByCircularReferenceRemoval || a.Util._isElement(v[k]))
            if (w.configurable)
              delete v[k];
            else
              return null;
          else if (a.Util._prepareToStringify(v[k]) === null)
            if (w.configurable)
              delete v[k];
            else
              return null;
        }
      return delete v.visitedByCircularReferenceRemoval, v;
    },
    _assign(v, w) {
      for (var k in w)
        v[k] = w[k];
      return v;
    },
    _getFirstPointerId(v) {
      return v.touches ? v.changedTouches[0].identifier : v.pointerId || 999;
    },
    releaseCanvas(...v) {
      e.Konva.releaseCanvasOnDestroy && v.forEach((w) => {
        w.width = 0, w.height = 0;
      });
    },
    drawRoundedRectPath(v, w, k, b) {
      let I = 0, T = 0, z = 0, O = 0;
      typeof b == "number" ? I = T = z = O = Math.min(b, w / 2, k / 2) : (I = Math.min(b[0] || 0, w / 2, k / 2), T = Math.min(b[1] || 0, w / 2, k / 2), O = Math.min(b[2] || 0, w / 2, k / 2), z = Math.min(b[3] || 0, w / 2, k / 2)), v.moveTo(I, 0), v.lineTo(w - T, 0), v.arc(w - T, T, T, Math.PI * 3 / 2, 0, !1), v.lineTo(w, k - O), v.arc(w - O, k - O, O, 0, Math.PI / 2, !1), v.lineTo(z, k), v.arc(z, k - z, z, Math.PI / 2, Math.PI, !1), v.lineTo(0, I), v.arc(I, I, I, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(Xe);
var We = {}, _e = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.getComponentValidator = ne.getBooleanValidator = ne.getNumberArrayValidator = ne.getFunctionValidator = ne.getStringOrGradientValidator = ne.getStringValidator = ne.getNumberOrAutoValidator = ne.getNumberOrArrayOfNumbersValidator = ne.getNumberValidator = ne.alphaComponent = ne.RGBComponent = void 0;
const Or = ye, qe = Xe;
function Ir(a) {
  return qe.Util._isString(a) ? '"' + a + '"' : Object.prototype.toString.call(a) === "[object Number]" || qe.Util._isBoolean(a) ? a : Object.prototype.toString.call(a);
}
function xf(a) {
  return a > 255 ? 255 : a < 0 ? 0 : Math.round(a);
}
ne.RGBComponent = xf;
function Pf(a) {
  return a > 1 ? 1 : a < 1e-4 ? 1e-4 : a;
}
ne.alphaComponent = Pf;
function kf() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      return qe.Util._isNumber(a) || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), a;
    };
}
ne.getNumberValidator = kf;
function Ef(a) {
  if (Or.Konva.isUnminified)
    return function(e, n) {
      let i = qe.Util._isNumber(e), o = qe.Util._isArray(e) && e.length == a;
      return !i && !o && qe.Util.warn(Ir(e) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + a + ")"), e;
    };
}
ne.getNumberOrArrayOfNumbersValidator = Ef;
function Tf() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      var n = qe.Util._isNumber(a), i = a === "auto";
      return n || i || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), a;
    };
}
ne.getNumberOrAutoValidator = Tf;
function Rf() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      return qe.Util._isString(a) || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), a;
    };
}
ne.getStringValidator = Rf;
function bf() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      const n = qe.Util._isString(a), i = Object.prototype.toString.call(a) === "[object CanvasGradient]" || a && a.addColorStop;
      return n || i || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), a;
    };
}
ne.getStringOrGradientValidator = bf;
function Nf() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      return qe.Util._isFunction(a) || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), a;
    };
}
ne.getFunctionValidator = Nf;
function Af() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && a instanceof n || (qe.Util._isArray(a) ? a.forEach(function(i) {
        qe.Util._isNumber(i) || qe.Util.warn('"' + e + '" attribute has non numeric element ' + i + ". Make sure that all elements are numbers.");
      }) : qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), a;
    };
}
ne.getNumberArrayValidator = Af;
function Ff() {
  if (Or.Konva.isUnminified)
    return function(a, e) {
      var n = a === !0 || a === !1;
      return n || qe.Util.warn(Ir(a) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), a;
    };
}
ne.getBooleanValidator = Ff;
function Mf(a) {
  if (Or.Konva.isUnminified)
    return function(e, n) {
      return e == null || qe.Util.isObject(e) || qe.Util.warn(Ir(e) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + a), e;
    };
}
ne.getComponentValidator = Mf;
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Factory = void 0;
  const e = Xe, n = ne;
  var i = "get", o = "set";
  a.Factory = {
    addGetterSetter(u, h, d, f, p) {
      a.Factory.addGetter(u, h, d), a.Factory.addSetter(u, h, f, p), a.Factory.addOverloadedGetterSetter(u, h);
    },
    addGetter(u, h, d) {
      var f = i + e.Util._capitalize(h);
      u.prototype[f] = u.prototype[f] || function() {
        var p = this.attrs[h];
        return p === void 0 ? d : p;
      };
    },
    addSetter(u, h, d, f) {
      var p = o + e.Util._capitalize(h);
      u.prototype[p] || a.Factory.overWriteSetter(u, h, d, f);
    },
    overWriteSetter(u, h, d, f) {
      var p = o + e.Util._capitalize(h);
      u.prototype[p] = function(y) {
        return d && y !== void 0 && y !== null && (y = d.call(this, y, h)), this._setAttr(h, y), f && f.call(this), this;
      };
    },
    addComponentsGetterSetter(u, h, d, f, p) {
      var y = d.length, C = e.Util._capitalize, x = i + C(h), _ = o + C(h), m, P;
      u.prototype[x] = function() {
        var R = {};
        for (m = 0; m < y; m++)
          P = d[m], R[P] = this.getAttr(h + C(P));
        return R;
      };
      var E = (0, n.getComponentValidator)(d);
      u.prototype[_] = function(R) {
        var N = this.attrs[h], v;
        f && (R = f.call(this, R)), E && E.call(this, R, h);
        for (v in R)
          R.hasOwnProperty(v) && this._setAttr(h + C(v), R[v]);
        return R || d.forEach((w) => {
          this._setAttr(h + C(w), void 0);
        }), this._fireChangeEvent(h, N, R), p && p.call(this), this;
      }, a.Factory.addOverloadedGetterSetter(u, h);
    },
    addOverloadedGetterSetter(u, h) {
      var d = e.Util._capitalize(h), f = o + d, p = i + d;
      u.prototype[h] = function() {
        return arguments.length ? (this[f](arguments[0]), this) : this[p]();
      };
    },
    addDeprecatedGetterSetter(u, h, d, f) {
      e.Util.error("Adding deprecated " + h);
      var p = i + e.Util._capitalize(h), y = h + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      u.prototype[p] = function() {
        e.Util.error(y);
        var C = this.attrs[h];
        return C === void 0 ? d : C;
      }, a.Factory.addSetter(u, h, f, function() {
        e.Util.error(y);
      }), a.Factory.addOverloadedGetterSetter(u, h);
    },
    backCompat(u, h) {
      e.Util.each(h, function(d, f) {
        var p = u.prototype[f], y = i + e.Util._capitalize(d), C = o + e.Util._capitalize(d);
        function x() {
          p.apply(this, arguments), e.Util.error('"' + d + '" method is deprecated and will be removed soon. Use ""' + f + '" instead.');
        }
        u.prototype[d] = x, u.prototype[y] = x, u.prototype[C] = x;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(_e);
var or = {}, Mr = {};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.HitContext = Mr.SceneContext = Mr.Context = void 0;
const B0 = Xe, Of = ye;
function If(a) {
  var e = [], n = a.length, i = B0.Util, o, u;
  for (o = 0; o < n; o++)
    u = a[o], i._isNumber(u) ? u = Math.round(u * 1e3) / 1e3 : i._isString(u) || (u = u + ""), e.push(u);
  return e;
}
var Nc = ",", Lf = "(", Df = ")", Gf = "([", Uf = "])", zf = ";", Bf = "()", Vf = "=", Ac = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], Hf = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const jf = 100;
class Cs {
  constructor(e) {
    this.canvas = e, Of.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(e) {
    e.fillEnabled() && this._fill(e);
  }
  _fill(e) {
  }
  strokeShape(e) {
    e.hasStroke() && this._stroke(e);
  }
  _stroke(e) {
  }
  fillStrokeShape(e) {
    e.attrs.fillAfterStrokeEnabled ? (this.strokeShape(e), this.fillShape(e)) : (this.fillShape(e), this.strokeShape(e));
  }
  getTrace(e, n) {
    var i = this.traceArr, o = i.length, u = "", h, d, f, p;
    for (h = 0; h < o; h++)
      d = i[h], f = d.method, f ? (p = d.args, u += f, e ? u += Bf : B0.Util._isArray(p[0]) ? u += Gf + p.join(Nc) + Uf : (n && (p = p.map((y) => typeof y == "number" ? Math.floor(y) : y)), u += Lf + p.join(Nc) + Df)) : (u += d.property, e || (u += Vf + d.val)), u += zf;
    return u;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    var n = this.traceArr, i;
    n.push(e), i = n.length, i >= jf && n.shift();
  }
  reset() {
    var e = this.getCanvas().getPixelRatio();
    this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(e) {
    var n = this.getCanvas();
    e ? this.clearRect(e.x || 0, e.y || 0, e.width || 0, e.height || 0) : this.clearRect(0, 0, n.getWidth() / n.pixelRatio, n.getHeight() / n.pixelRatio);
  }
  _applyLineCap(e) {
    const n = e.attrs.lineCap;
    n && this.setAttr("lineCap", n);
  }
  _applyOpacity(e) {
    var n = e.getAbsoluteOpacity();
    n !== 1 && this.setAttr("globalAlpha", n);
  }
  _applyLineJoin(e) {
    const n = e.attrs.lineJoin;
    n && this.setAttr("lineJoin", n);
  }
  setAttr(e, n) {
    this._context[e] = n;
  }
  arc(e, n, i, o, u, h) {
    this._context.arc(e, n, i, o, u, h);
  }
  arcTo(e, n, i, o, u) {
    this._context.arcTo(e, n, i, o, u);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(e, n, i, o, u, h) {
    this._context.bezierCurveTo(e, n, i, o, u, h);
  }
  clearRect(e, n, i, o) {
    this._context.clearRect(e, n, i, o);
  }
  clip(...e) {
    this._context.clip.apply(this._context, e);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(e, n) {
    var i = arguments;
    if (i.length === 2)
      return this._context.createImageData(e, n);
    if (i.length === 1)
      return this._context.createImageData(e);
  }
  createLinearGradient(e, n, i, o) {
    return this._context.createLinearGradient(e, n, i, o);
  }
  createPattern(e, n) {
    return this._context.createPattern(e, n);
  }
  createRadialGradient(e, n, i, o, u, h) {
    return this._context.createRadialGradient(e, n, i, o, u, h);
  }
  drawImage(e, n, i, o, u, h, d, f, p) {
    var y = arguments, C = this._context;
    y.length === 3 ? C.drawImage(e, n, i) : y.length === 5 ? C.drawImage(e, n, i, o, u) : y.length === 9 && C.drawImage(e, n, i, o, u, h, d, f, p);
  }
  ellipse(e, n, i, o, u, h, d, f) {
    this._context.ellipse(e, n, i, o, u, h, d, f);
  }
  isPointInPath(e, n, i, o) {
    return i ? this._context.isPointInPath(i, e, n, o) : this._context.isPointInPath(e, n, o);
  }
  fill(...e) {
    this._context.fill.apply(this._context, e);
  }
  fillRect(e, n, i, o) {
    this._context.fillRect(e, n, i, o);
  }
  strokeRect(e, n, i, o) {
    this._context.strokeRect(e, n, i, o);
  }
  fillText(e, n, i, o) {
    o ? this._context.fillText(e, n, i, o) : this._context.fillText(e, n, i);
  }
  measureText(e) {
    return this._context.measureText(e);
  }
  getImageData(e, n, i, o) {
    return this._context.getImageData(e, n, i, o);
  }
  lineTo(e, n) {
    this._context.lineTo(e, n);
  }
  moveTo(e, n) {
    this._context.moveTo(e, n);
  }
  rect(e, n, i, o) {
    this._context.rect(e, n, i, o);
  }
  putImageData(e, n, i) {
    this._context.putImageData(e, n, i);
  }
  quadraticCurveTo(e, n, i, o) {
    this._context.quadraticCurveTo(e, n, i, o);
  }
  restore() {
    this._context.restore();
  }
  rotate(e) {
    this._context.rotate(e);
  }
  save() {
    this._context.save();
  }
  scale(e, n) {
    this._context.scale(e, n);
  }
  setLineDash(e) {
    this._context.setLineDash ? this._context.setLineDash(e) : "mozDash" in this._context ? this._context.mozDash = e : "webkitLineDash" in this._context && (this._context.webkitLineDash = e);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(e, n, i, o, u, h) {
    this._context.setTransform(e, n, i, o, u, h);
  }
  stroke(e) {
    e ? this._context.stroke(e) : this._context.stroke();
  }
  strokeText(e, n, i, o) {
    this._context.strokeText(e, n, i, o);
  }
  transform(e, n, i, o, u, h) {
    this._context.transform(e, n, i, o, u, h);
  }
  translate(e, n) {
    this._context.translate(e, n);
  }
  _enableTrace() {
    var e = this, n = Ac.length, i = this.setAttr, o, u, h = function(d) {
      var f = e[d], p;
      e[d] = function() {
        return u = If(Array.prototype.slice.call(arguments, 0)), p = f.apply(e, arguments), e._trace({
          method: d,
          args: u
        }), p;
      };
    };
    for (o = 0; o < n; o++)
      h(Ac[o]);
    e.setAttr = function() {
      i.apply(e, arguments);
      var d = arguments[0], f = arguments[1];
      (d === "shadowOffsetX" || d === "shadowOffsetY" || d === "shadowBlur") && (f = f / this.canvas.getPixelRatio()), e._trace({
        property: d,
        val: f
      });
    };
  }
  _applyGlobalCompositeOperation(e) {
    const n = e.attrs.globalCompositeOperation;
    var i = !n || n === "source-over";
    i || this.setAttr("globalCompositeOperation", n);
  }
}
Mr.Context = Cs;
Hf.forEach(function(a) {
  Object.defineProperty(Cs.prototype, a, {
    get() {
      return this._context[a];
    },
    set(e) {
      this._context[a] = e;
    }
  });
});
class Wf extends Cs {
  constructor(e, { willReadFrequently: n = !1 } = {}) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: n
    });
  }
  _fillColor(e) {
    var n = e.fill();
    this.setAttr("fillStyle", n), e._fillFunc(this);
  }
  _fillPattern(e) {
    this.setAttr("fillStyle", e._getFillPattern()), e._fillFunc(this);
  }
  _fillLinearGradient(e) {
    var n = e._getLinearGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fillRadialGradient(e) {
    const n = e._getRadialGradient();
    n && (this.setAttr("fillStyle", n), e._fillFunc(this));
  }
  _fill(e) {
    const n = e.fill(), i = e.getFillPriority();
    if (n && i === "color") {
      this._fillColor(e);
      return;
    }
    const o = e.getFillPatternImage();
    if (o && i === "pattern") {
      this._fillPattern(e);
      return;
    }
    const u = e.getFillLinearGradientColorStops();
    if (u && i === "linear-gradient") {
      this._fillLinearGradient(e);
      return;
    }
    const h = e.getFillRadialGradientColorStops();
    if (h && i === "radial-gradient") {
      this._fillRadialGradient(e);
      return;
    }
    n ? this._fillColor(e) : o ? this._fillPattern(e) : u ? this._fillLinearGradient(e) : h && this._fillRadialGradient(e);
  }
  _strokeLinearGradient(e) {
    const n = e.getStrokeLinearGradientStartPoint(), i = e.getStrokeLinearGradientEndPoint(), o = e.getStrokeLinearGradientColorStops(), u = this.createLinearGradient(n.x, n.y, i.x, i.y);
    if (o) {
      for (var h = 0; h < o.length; h += 2)
        u.addColorStop(o[h], o[h + 1]);
      this.setAttr("strokeStyle", u);
    }
  }
  _stroke(e) {
    var n = e.dash(), i = e.getStrokeScaleEnabled();
    if (e.hasStroke()) {
      if (!i) {
        this.save();
        var o = this.getCanvas().getPixelRatio();
        this.setTransform(o, 0, 0, o, 0, 0);
      }
      this._applyLineCap(e), n && e.dashEnabled() && (this.setLineDash(n), this.setAttr("lineDashOffset", e.dashOffset())), this.setAttr("lineWidth", e.strokeWidth()), e.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var u = e.getStrokeLinearGradientColorStops();
      u ? this._strokeLinearGradient(e) : this.setAttr("strokeStyle", e.stroke()), e._strokeFunc(this), i || this.restore();
    }
  }
  _applyShadow(e) {
    var n, i, o, u = (n = e.getShadowRGBA()) !== null && n !== void 0 ? n : "black", h = (i = e.getShadowBlur()) !== null && i !== void 0 ? i : 5, d = (o = e.getShadowOffset()) !== null && o !== void 0 ? o : {
      x: 0,
      y: 0
    }, f = e.getAbsoluteScale(), p = this.canvas.getPixelRatio(), y = f.x * p, C = f.y * p;
    this.setAttr("shadowColor", u), this.setAttr("shadowBlur", h * Math.min(Math.abs(y), Math.abs(C))), this.setAttr("shadowOffsetX", d.x * y), this.setAttr("shadowOffsetY", d.y * C);
  }
}
Mr.SceneContext = Wf;
class Yf extends Cs {
  constructor(e) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(e) {
    this.save(), this.setAttr("fillStyle", e.colorKey), e._fillFuncHit(this), this.restore();
  }
  strokeShape(e) {
    e.hasHitStroke() && this._stroke(e);
  }
  _stroke(e) {
    if (e.hasHitStroke()) {
      const u = e.getStrokeScaleEnabled();
      if (!u) {
        this.save();
        var n = this.getCanvas().getPixelRatio();
        this.setTransform(n, 0, 0, n, 0, 0);
      }
      this._applyLineCap(e);
      var i = e.hitStrokeWidth(), o = i === "auto" ? e.strokeWidth() : i;
      this.setAttr("lineWidth", o), this.setAttr("strokeStyle", e.colorKey), e._strokeFuncHit(this), u || this.restore();
    }
  }
}
Mr.HitContext = Yf;
Object.defineProperty(or, "__esModule", { value: !0 });
or.HitCanvas = or.SceneCanvas = or.Canvas = void 0;
const ds = Xe, V0 = Mr, H0 = ye, Kf = _e, Xf = ne;
var qa;
function $f() {
  if (qa)
    return qa;
  var a = ds.Util.createCanvasElement(), e = a.getContext("2d");
  return qa = function() {
    var n = H0.Konva._global.devicePixelRatio || 1, i = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return n / i;
  }(), ds.Util.releaseCanvas(a), qa;
}
class ws {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var n = e || {}, i = n.pixelRatio || H0.Konva.pixelRatio || $f();
    this.pixelRatio = i, this._canvas = ds.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(e) {
    var n = this.pixelRatio;
    this.pixelRatio = e, this.setSize(this.getWidth() / n, this.getHeight() / n);
  }
  setWidth(e) {
    this.width = this._canvas.width = e * this.pixelRatio, this._canvas.style.width = e + "px";
    var n = this.pixelRatio, i = this.getContext()._context;
    i.scale(n, n);
  }
  setHeight(e) {
    this.height = this._canvas.height = e * this.pixelRatio, this._canvas.style.height = e + "px";
    var n = this.pixelRatio, i = this.getContext()._context;
    i.scale(n, n);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(e, n) {
    this.setWidth(e || 0), this.setHeight(n || 0);
  }
  toDataURL(e, n) {
    try {
      return this._canvas.toDataURL(e, n);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (o) {
        return ds.Util.error("Unable to get data URL. " + o.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
or.Canvas = ws;
Kf.Factory.addGetterSetter(ws, "pixelRatio", void 0, (0, Xf.getNumberValidator)());
class qf extends ws {
  constructor(e = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(e), this.context = new V0.SceneContext(this, {
      willReadFrequently: e.willReadFrequently
    }), this.setSize(e.width, e.height);
  }
}
or.SceneCanvas = qf;
class Qf extends ws {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new V0.HitContext(this), this.setSize(e.width, e.height);
  }
}
or.HitCanvas = Qf;
var xs = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.DD = void 0;
  const e = ye, n = Xe;
  a.DD = {
    get isDragging() {
      var i = !1;
      return a.DD._dragElements.forEach((o) => {
        o.dragStatus === "dragging" && (i = !0);
      }), i;
    },
    justDragged: !1,
    get node() {
      var i;
      return a.DD._dragElements.forEach((o) => {
        i = o.node;
      }), i;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(i) {
      const o = [];
      a.DD._dragElements.forEach((u, h) => {
        const { node: d } = u, f = d.getStage();
        f.setPointersPositions(i), u.pointerId === void 0 && (u.pointerId = n.Util._getFirstPointerId(i));
        const p = f._changedPointerPositions.find((x) => x.id === u.pointerId);
        if (p) {
          if (u.dragStatus !== "dragging") {
            var y = d.dragDistance(), C = Math.max(Math.abs(p.x - u.startPointerPos.x), Math.abs(p.y - u.startPointerPos.y));
            if (C < y || (d.startDrag({ evt: i }), !d.isDragging()))
              return;
          }
          d._setDragPosition(i, u), o.push(d);
        }
      }), o.forEach((u) => {
        u.fire("dragmove", {
          type: "dragmove",
          target: u,
          evt: i
        }, !0);
      });
    },
    _endDragBefore(i) {
      const o = [];
      a.DD._dragElements.forEach((u) => {
        const { node: h } = u, d = h.getStage();
        if (i && d.setPointersPositions(i), !d._changedPointerPositions.find((y) => y.id === u.pointerId))
          return;
        (u.dragStatus === "dragging" || u.dragStatus === "stopped") && (a.DD.justDragged = !0, e.Konva._mouseListenClick = !1, e.Konva._touchListenClick = !1, e.Konva._pointerListenClick = !1, u.dragStatus = "stopped");
        const p = u.node.getLayer() || u.node instanceof e.Konva.Stage && u.node;
        p && o.indexOf(p) === -1 && o.push(p);
      }), o.forEach((u) => {
        u.draw();
      });
    },
    _endDragAfter(i) {
      a.DD._dragElements.forEach((o, u) => {
        o.dragStatus === "stopped" && o.node.fire("dragend", {
          type: "dragend",
          target: o.node,
          evt: i
        }, !0), o.dragStatus !== "dragging" && a.DD._dragElements.delete(u);
      });
    }
  }, e.Konva.isBrowser && (window.addEventListener("mouseup", a.DD._endDragBefore, !0), window.addEventListener("touchend", a.DD._endDragBefore, !0), window.addEventListener("mousemove", a.DD._drag), window.addEventListener("touchmove", a.DD._drag), window.addEventListener("mouseup", a.DD._endDragAfter, !1), window.addEventListener("touchend", a.DD._endDragAfter, !1));
})(xs);
Object.defineProperty(We, "__esModule", { value: !0 });
We.Node = void 0;
const Ce = Xe, $i = _e, Qa = or, pn = ye, Xt = xs, Je = ne;
var as = "absoluteOpacity", Ja = "allEventListeners", Ar = "absoluteTransform", Fc = "absoluteScale", vn = "canvas", Jf = "Change", Zf = "children", e2 = "konva", iu = "listening", Mc = "mouseenter", Oc = "mouseleave", Ic = "set", Lc = "Shape", ss = " ", Dc = "stage", Xr = "transform", t2 = "Stage", au = "visible", r2 = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(ss);
let n2 = 1;
class ce {
  constructor(e) {
    this._id = n2++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Xr || e === Ar) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, n) {
    var i = this._cache.get(e), o = e === Xr || e === Ar, u = i === void 0 || o && i.dirty === !0;
    return u && (i = n.call(this), this._cache.set(e, i)), i;
  }
  _calculate(e, n, i) {
    if (!this._attachedDepsListeners.get(e)) {
      const o = n.map((u) => u + "Change.konva").join(ss);
      this.on(o, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, i);
  }
  _getCanvasCache() {
    return this._cache.get(vn);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === Ar && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(vn)) {
      const { scene: e, filter: n, hit: i } = this._cache.get(vn);
      Ce.Util.releaseCanvas(e, n, i), this._cache.delete(vn);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(e) {
    var n = e || {}, i = {};
    (n.x === void 0 || n.y === void 0 || n.width === void 0 || n.height === void 0) && (i = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent()
    }));
    var o = Math.ceil(n.width || i.width), u = Math.ceil(n.height || i.height), h = n.pixelRatio, d = n.x === void 0 ? Math.floor(i.x) : n.x, f = n.y === void 0 ? Math.floor(i.y) : n.y, p = n.offset || 0, y = n.drawBorder || !1, C = n.hitCanvasPixelRatio || 1;
    if (!o || !u) {
      Ce.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    o += p * 2 + 1, u += p * 2 + 1, d -= p, f -= p;
    var x = new Qa.SceneCanvas({
      pixelRatio: h,
      width: o,
      height: u
    }), _ = new Qa.SceneCanvas({
      pixelRatio: h,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), m = new Qa.HitCanvas({
      pixelRatio: C,
      width: o,
      height: u
    }), P = x.getContext(), E = m.getContext();
    return m.isCache = !0, x.isCache = !0, this._cache.delete(vn), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (x.getContext()._context.imageSmoothingEnabled = !1, _.getContext()._context.imageSmoothingEnabled = !1), P.save(), E.save(), P.translate(-d, -f), E.translate(-d, -f), this._isUnderCache = !0, this._clearSelfAndDescendantCache(as), this._clearSelfAndDescendantCache(Fc), this.drawScene(x, this), this.drawHit(m, this), this._isUnderCache = !1, P.restore(), E.restore(), y && (P.save(), P.beginPath(), P.rect(0, 0, o, u), P.closePath(), P.setAttr("strokeStyle", "red"), P.setAttr("lineWidth", 5), P.stroke(), P.restore()), this._cache.set(vn, {
      scene: x,
      filter: _,
      hit: m,
      x: d,
      y: f
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(vn);
  }
  getClientRect(e) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(e, n) {
    var i = [
      { x: e.x, y: e.y },
      { x: e.x + e.width, y: e.y },
      { x: e.x + e.width, y: e.y + e.height },
      { x: e.x, y: e.y + e.height }
    ], o, u, h, d, f = this.getAbsoluteTransform(n);
    return i.forEach(function(p) {
      var y = f.point(p);
      o === void 0 && (o = h = y.x, u = d = y.y), o = Math.min(o, y.x), u = Math.min(u, y.y), h = Math.max(h, y.x), d = Math.max(d, y.y);
    }), {
      x: o,
      y: u,
      width: h - o,
      height: d - u
    };
  }
  _drawCachedSceneCanvas(e) {
    e.save(), e._applyOpacity(this), e._applyGlobalCompositeOperation(this);
    const n = this._getCanvasCache();
    e.translate(n.x, n.y);
    var i = this._getCachedSceneCanvas(), o = i.pixelRatio;
    e.drawImage(i._canvas, 0, 0, i.width / o, i.height / o), e.restore();
  }
  _drawCachedHitCanvas(e) {
    var n = this._getCanvasCache(), i = n.hit;
    e.save(), e.translate(n.x, n.y), e.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), e.restore();
  }
  _getCachedSceneCanvas() {
    var e = this.filters(), n = this._getCanvasCache(), i = n.scene, o = n.filter, u = o.getContext(), h, d, f, p;
    if (e) {
      if (!this._filterUpToDate) {
        var y = i.pixelRatio;
        o.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
        try {
          for (h = e.length, u.clear(), u.drawImage(i._canvas, 0, 0, i.getWidth() / y, i.getHeight() / y), d = u.getImageData(0, 0, o.getWidth(), o.getHeight()), f = 0; f < h; f++) {
            if (p = e[f], typeof p != "function") {
              Ce.Util.error("Filter should be type of function, but got " + typeof p + " instead. Please check correct filters");
              continue;
            }
            p.call(this, d), u.putImageData(d, 0, 0);
          }
        } catch (C) {
          Ce.Util.error("Unable to apply filter. " + C.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return o;
    }
    return i;
  }
  on(e, n) {
    if (this._cache && this._cache.delete(Ja), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var i = e.split(ss), o = i.length, u, h, d, f, p;
    for (u = 0; u < o; u++)
      h = i[u], d = h.split("."), f = d[0], p = d[1] || "", this.eventListeners[f] || (this.eventListeners[f] = []), this.eventListeners[f].push({
        name: p,
        handler: n
      });
    return this;
  }
  off(e, n) {
    var i = (e || "").split(ss), o = i.length, u, h, d, f, p, y;
    if (this._cache && this._cache.delete(Ja), !e)
      for (h in this.eventListeners)
        this._off(h);
    for (u = 0; u < o; u++)
      if (d = i[u], f = d.split("."), p = f[0], y = f[1], p)
        this.eventListeners[p] && this._off(p, y, n);
      else
        for (h in this.eventListeners)
          this._off(h, y, n);
    return this;
  }
  dispatchEvent(e) {
    var n = {
      target: this,
      type: e.type,
      evt: e
    };
    return this.fire(e.type, n), this;
  }
  addEventListener(e, n) {
    return this.on(e, function(i) {
      n.call(this, i.evt);
    }), this;
  }
  removeEventListener(e) {
    return this.off(e), this;
  }
  _delegate(e, n, i) {
    var o = this;
    this.on(e, function(u) {
      for (var h = u.target.findAncestors(n, !0, o), d = 0; d < h.length; d++)
        u = Ce.Util.cloneObject(u), u.currentTarget = h[d], i.call(h[d], u);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Xt.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Ar), this._clearSelfAndDescendantCache(as), this._clearSelfAndDescendantCache(Fc), this._clearSelfAndDescendantCache(Dc), this._clearSelfAndDescendantCache(au), this._clearSelfAndDescendantCache(iu);
  }
  _remove() {
    this._clearCaches();
    var e = this.getParent();
    e && e.children && (e.children.splice(this.index, 1), e._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(e) {
    var n = "get" + Ce.Util._capitalize(e);
    return Ce.Util._isFunction(this[n]) ? this[n]() : this.attrs[e];
  }
  getAncestors() {
    for (var e = this.getParent(), n = []; e; )
      n.push(e), e = e.getParent();
    return n;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(e) {
    return this._batchTransformChanges(() => {
      var n, i;
      if (!e)
        return this;
      for (n in e)
        n !== Zf && (i = Ic + Ce.Util._capitalize(n), Ce.Util._isFunction(this[i]) ? this[i](e[n]) : this._setAttr(n, e[n]));
    }), this;
  }
  isListening() {
    return this._getCache(iu, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const i = this.getParent();
    return i && i !== e && this !== e ? i._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(au, this._isVisible);
  }
  _isVisible(e) {
    if (!this.visible())
      return !1;
    const i = this.getParent();
    return i && i !== e && this !== e ? i._isVisible(e) : !0;
  }
  shouldDrawHit(e, n = !1) {
    if (e)
      return this._isVisible(e) && this._isListening(e);
    var i = this.getLayer(), o = !1;
    Xt.DD._dragElements.forEach((h) => {
      h.dragStatus === "dragging" && (h.node.nodeType === "Stage" || h.node.getLayer() === i) && (o = !0);
    });
    var u = !n && !pn.Konva.hitOnDragEnabled && o;
    return this.isListening() && this.isVisible() && !u;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var e = this.getDepth(), n = this, i = 0, o, u, h, d;
    function f(p) {
      for (o = [], u = p.length, h = 0; h < u; h++)
        d = p[h], i++, d.nodeType !== Lc && (o = o.concat(d.getChildren().slice())), d._id === n._id && (h = u);
      o.length > 0 && o[0].getDepth() <= e && f(o);
    }
    return n.nodeType !== t2 && f(n.getStage().getChildren()), i;
  }
  getDepth() {
    for (var e = 0, n = this.parent; n; )
      e++, n = n.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Xr), this._clearSelfAndDescendantCache(Ar)), this._needClearTransformCache = !1;
  }
  setPosition(e) {
    return this._batchTransformChanges(() => {
      this.x(e.x), this.y(e.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage())
      return null;
    var e = this.getStage().getPointerPosition();
    if (!e)
      return null;
    var n = this.getAbsoluteTransform().copy();
    return n.invert(), n.point(e);
  }
  getAbsolutePosition(e) {
    let n = !1, i = this.parent;
    for (; i; ) {
      if (i.isCached()) {
        n = !0;
        break;
      }
      i = i.parent;
    }
    n && !e && (e = !0);
    var o = this.getAbsoluteTransform(e).getMatrix(), u = new Ce.Transform(), h = this.offset();
    return u.m = o.slice(), u.translate(h.x, h.y), u.getTranslation();
  }
  setAbsolutePosition(e) {
    var n = this._clearTransform();
    this.attrs.x = n.x, this.attrs.y = n.y, delete n.x, delete n.y, this._clearCache(Xr);
    var i = this._getAbsoluteTransform().copy();
    return i.invert(), i.translate(e.x, e.y), e = {
      x: this.attrs.x + i.getTranslation().x,
      y: this.attrs.y + i.getTranslation().y
    }, this._setTransform(n), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Xr), this._clearSelfAndDescendantCache(Ar), this;
  }
  _setTransform(e) {
    var n;
    for (n in e)
      this.attrs[n] = e[n];
  }
  _clearTransform() {
    var e = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, e;
  }
  move(e) {
    var n = e.x, i = e.y, o = this.x(), u = this.y();
    return n !== void 0 && (o += n), i !== void 0 && (u += i), this.setPosition({ x: o, y: u }), this;
  }
  _eachAncestorReverse(e, n) {
    var i = [], o = this.getParent(), u, h;
    if (!(n && n._id === this._id)) {
      for (i.unshift(this); o && (!n || o._id !== n._id); )
        i.unshift(o), o = o.parent;
      for (u = i.length, h = 0; h < u; h++)
        e(i[h]);
    }
  }
  rotate(e) {
    return this.rotation(this.rotation() + e), this;
  }
  moveToTop() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    var e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    var e = this.index, n = this.parent.getChildren().length;
    return e < n - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    var e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return Ce.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && Ce.Util.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(as, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var e = this.opacity(), n = this.getParent();
    return n && !n._isUnderCache && (e *= n.getAbsoluteOpacity()), e;
  }
  moveTo(e) {
    return this.getParent() !== e && (this._remove(), e.add(this)), this;
  }
  toObject() {
    var e = {}, n = this.getAttrs(), i, o, u, h, d;
    e.attrs = {};
    for (i in n)
      o = n[i], d = Ce.Util.isObject(o) && !Ce.Util._isPlainObject(o) && !Ce.Util._isArray(o), !d && (u = typeof this[i] == "function" && this[i], delete n[i], h = u ? u.call(this) : null, n[i] = o, h !== o && (e.attrs[i] = o));
    return e.className = this.getClassName(), Ce.Util._prepareToStringify(e);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(e, n, i) {
    var o = [];
    n && this._isMatch(e) && o.push(this);
    for (var u = this.parent; u; ) {
      if (u === i)
        return o;
      u._isMatch(e) && o.push(u), u = u.parent;
    }
    return o;
  }
  isAncestorOf(e) {
    return !1;
  }
  findAncestor(e, n, i) {
    return this.findAncestors(e, n, i)[0];
  }
  _isMatch(e) {
    if (!e)
      return !1;
    if (typeof e == "function")
      return e(this);
    var n = e.replace(/ /g, "").split(","), i = n.length, o, u;
    for (o = 0; o < i; o++)
      if (u = n[o], Ce.Util.isValidSelector(u) || (Ce.Util.warn('Selector "' + u + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), Ce.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), Ce.Util.warn("Konva is awesome, right?")), u.charAt(0) === "#") {
        if (this.id() === u.slice(1))
          return !0;
      } else if (u.charAt(0) === ".") {
        if (this.hasName(u.slice(1)))
          return !0;
      } else if (this.className === u || this.nodeType === u)
        return !0;
    return !1;
  }
  getLayer() {
    var e = this.getParent();
    return e ? e.getLayer() : null;
  }
  getStage() {
    return this._getCache(Dc, this._getStage);
  }
  _getStage() {
    var e = this.getParent();
    if (e)
      return e.getStage();
  }
  fire(e, n = {}, i) {
    return n.target = n.target || this, i ? this._fireAndBubble(e, n) : this._fire(e, n), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(Ar, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    var n;
    if (e)
      return n = new Ce.Transform(), this._eachAncestorReverse(function(o) {
        var u = o.transformsEnabled();
        u === "all" ? n.multiply(o.getTransform()) : u === "position" && n.translate(o.x() - o.offsetX(), o.y() - o.offsetY());
      }, e), n;
    n = this._cache.get(Ar) || new Ce.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
    var i = this.transformsEnabled();
    if (i === "all")
      n.multiply(this.getTransform());
    else if (i === "position") {
      const o = this.attrs.x || 0, u = this.attrs.y || 0, h = this.attrs.offsetX || 0, d = this.attrs.offsetY || 0;
      n.translate(o - h, u - d);
    }
    return n.dirty = !1, n;
  }
  getAbsoluteScale(e) {
    for (var n = this; n; )
      n._isUnderCache && (e = n), n = n.getParent();
    const o = this.getAbsoluteTransform(e).decompose();
    return {
      x: o.scaleX,
      y: o.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Xr, this._getTransform);
  }
  _getTransform() {
    var e, n, i = this._cache.get(Xr) || new Ce.Transform();
    i.reset();
    var o = this.x(), u = this.y(), h = pn.Konva.getAngle(this.rotation()), d = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, f = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, p = this.attrs.skewX || 0, y = this.attrs.skewY || 0, C = this.attrs.offsetX || 0, x = this.attrs.offsetY || 0;
    return (o !== 0 || u !== 0) && i.translate(o, u), h !== 0 && i.rotate(h), (p !== 0 || y !== 0) && i.skew(p, y), (d !== 1 || f !== 1) && i.scale(d, f), (C !== 0 || x !== 0) && i.translate(-1 * C, -1 * x), i.dirty = !1, i;
  }
  clone(e) {
    var n = Ce.Util.cloneObject(this.attrs), i, o, u, h, d;
    for (i in e)
      n[i] = e[i];
    var f = new this.constructor(n);
    for (i in this.eventListeners)
      for (o = this.eventListeners[i], u = o.length, h = 0; h < u; h++)
        d = o[h], d.name.indexOf(e2) < 0 && (f.eventListeners[i] || (f.eventListeners[i] = []), f.eventListeners[i].push(d));
    return f;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    var n = this.getClientRect(), i = this.getStage(), o = e.x !== void 0 ? e.x : Math.floor(n.x), u = e.y !== void 0 ? e.y : Math.floor(n.y), h = e.pixelRatio || 1, d = new Qa.SceneCanvas({
      width: e.width || Math.ceil(n.width) || (i ? i.width() : 0),
      height: e.height || Math.ceil(n.height) || (i ? i.height() : 0),
      pixelRatio: h
    }), f = d.getContext();
    return e.imageSmoothingEnabled === !1 && (f._context.imageSmoothingEnabled = !1), f.save(), (o || u) && f.translate(-1 * o, -1 * u), this.drawScene(d), f.restore(), d;
  }
  toCanvas(e) {
    return this._toKonvaCanvas(e)._canvas;
  }
  toDataURL(e) {
    e = e || {};
    var n = e.mimeType || null, i = e.quality || null, o = this._toKonvaCanvas(e).toDataURL(n, i);
    return e.callback && e.callback(o), o;
  }
  toImage(e) {
    return new Promise((n, i) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, Ce.Util._urlToImage(this.toDataURL(e), function(u) {
          n(u), o == null || o(u);
        });
      } catch (o) {
        i(o);
      }
    });
  }
  toBlob(e) {
    return new Promise((n, i) => {
      try {
        const o = e == null ? void 0 : e.callback;
        o && delete e.callback, this.toCanvas(e).toBlob((u) => {
          n(u), o == null || o(u);
        });
      } catch (o) {
        i(o);
      }
    });
  }
  setSize(e) {
    return this.width(e.width), this.height(e.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : pn.Konva.dragDistance;
  }
  _off(e, n, i) {
    var o = this.eventListeners[e], u, h, d;
    for (u = 0; u < o.length; u++)
      if (h = o[u].name, d = o[u].handler, (h !== "konva" || n === "konva") && (!n || h === n) && (!i || i === d)) {
        if (o.splice(u, 1), o.length === 0) {
          delete this.eventListeners[e];
          break;
        }
        u--;
      }
  }
  _fireChangeEvent(e, n, i) {
    this._fire(e + Jf, {
      oldVal: n,
      newVal: i
    });
  }
  addName(e) {
    if (!this.hasName(e)) {
      var n = this.name(), i = n ? n + " " + e : e;
      this.name(i);
    }
    return this;
  }
  hasName(e) {
    if (!e)
      return !1;
    const n = this.name();
    if (!n)
      return !1;
    var i = (n || "").split(/\s/g);
    return i.indexOf(e) !== -1;
  }
  removeName(e) {
    var n = (this.name() || "").split(/\s/g), i = n.indexOf(e);
    return i !== -1 && (n.splice(i, 1), this.name(n.join(" "))), this;
  }
  setAttr(e, n) {
    var i = this[Ic + Ce.Util._capitalize(e)];
    return Ce.Util._isFunction(i) ? i.call(this, n) : this._setAttr(e, n), this;
  }
  _requestDraw() {
    if (pn.Konva.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, n) {
    var i = this.attrs[e];
    i === n && !Ce.Util.isObject(n) || (n == null ? delete this.attrs[e] : this.attrs[e] = n, this._shouldFireChangeEvents && this._fireChangeEvent(e, i, n), this._requestDraw());
  }
  _setComponentAttr(e, n, i) {
    var o;
    i !== void 0 && (o = this.attrs[e], o || (this.attrs[e] = this.getAttr(e)), this.attrs[e][n] = i, this._fireChangeEvent(e, o, i));
  }
  _fireAndBubble(e, n, i) {
    n && this.nodeType === Lc && (n.target = this);
    var o = (e === Mc || e === Oc) && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i);
    if (!o) {
      this._fire(e, n);
      var u = (e === Mc || e === Oc) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !u && (i && i.parent ? this._fireAndBubble.call(this.parent, e, n, i) : this._fireAndBubble.call(this.parent, e, n));
    }
  }
  _getProtoListeners(e) {
    var n, i, o;
    const u = (n = this._cache.get(Ja)) !== null && n !== void 0 ? n : {};
    let h = u == null ? void 0 : u[e];
    if (h === void 0) {
      h = [];
      let d = Object.getPrototypeOf(this);
      for (; d; ) {
        const f = (o = (i = d.eventListeners) === null || i === void 0 ? void 0 : i[e]) !== null && o !== void 0 ? o : [];
        h.push(...f), d = Object.getPrototypeOf(d);
      }
      u[e] = h, this._cache.set(Ja, u);
    }
    return h;
  }
  _fire(e, n) {
    n = n || {}, n.currentTarget = this, n.type = e;
    const i = this._getProtoListeners(e);
    if (i)
      for (var o = 0; o < i.length; o++)
        i[o].handler.call(this, n);
    const u = this.eventListeners[e];
    if (u)
      for (var o = 0; o < u.length; o++)
        u[o].handler.call(this, n);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(e) {
    var n = e ? e.pointerId : void 0, i = this.getStage(), o = this.getAbsolutePosition(), u = i._getPointerById(n) || i._changedPointerPositions[0] || o;
    Xt.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: u,
      offset: {
        x: u.x - o.x,
        y: u.y - o.y
      },
      dragStatus: "ready",
      pointerId: n
    });
  }
  startDrag(e, n = !0) {
    Xt.DD._dragElements.has(this._id) || this._createDragElement(e);
    const i = Xt.DD._dragElements.get(this._id);
    i.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: e && e.evt
    }, n);
  }
  _setDragPosition(e, n) {
    const i = this.getStage()._getPointerById(n.pointerId);
    if (i) {
      var o = {
        x: i.x - n.offset.x,
        y: i.y - n.offset.y
      }, u = this.dragBoundFunc();
      if (u !== void 0) {
        const h = u.call(this, o, e);
        h ? o = h : Ce.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== o.x || this._lastPos.y !== o.y) && (this.setAbsolutePosition(o), this._requestDraw()), this._lastPos = o;
    }
  }
  stopDrag(e) {
    const n = Xt.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), Xt.DD._endDragBefore(e), Xt.DD._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = Xt.DD._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      var n = e.evt.button !== void 0, i = !n || pn.Konva.dragButtons.indexOf(e.evt.button) >= 0;
      if (i && !this.isDragging()) {
        var o = !1;
        Xt.DD._dragElements.forEach((u) => {
          this.isAncestorOf(u.node) && (o = !0);
        }), o || this._createDragElement(e);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var e = this.getStage();
      if (!e)
        return;
      const n = Xt.DD._dragElements.get(this._id), i = n && n.dragStatus === "dragging", o = n && n.dragStatus === "ready";
      i ? this.stopDrag() : o && Xt.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(e = { x: 0, y: 0 }) {
    const n = this.getStage();
    if (!n)
      return !1;
    const i = {
      x: -e.x,
      y: -e.y,
      width: n.width() + 2 * e.x,
      height: n.height() + 2 * e.y
    };
    return Ce.Util.haveIntersection(i, this.getClientRect());
  }
  static create(e, n) {
    return Ce.Util._isString(e) && (e = JSON.parse(e)), this._createNode(e, n);
  }
  static _createNode(e, n) {
    var i = ce.prototype.getClassName.call(e), o = e.children, u, h, d;
    n && (e.attrs.container = n), pn.Konva[i] || (Ce.Util.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
    const f = pn.Konva[i];
    if (u = new f(e.attrs), o)
      for (h = o.length, d = 0; d < h; d++)
        u.add(ce._createNode(o[d]));
    return u;
  }
}
We.Node = ce;
ce.prototype.nodeType = "Node";
ce.prototype._attrsAffectingSize = [];
ce.prototype.eventListeners = {};
ce.prototype.on.call(ce.prototype, r2, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Xr), this._clearSelfAndDescendantCache(Ar);
});
ce.prototype.on.call(ce.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(au);
});
ce.prototype.on.call(ce.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(iu);
});
ce.prototype.on.call(ce.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(as);
});
const Ie = $i.Factory.addGetterSetter;
Ie(ce, "zIndex");
Ie(ce, "absolutePosition");
Ie(ce, "position");
Ie(ce, "x", 0, (0, Je.getNumberValidator)());
Ie(ce, "y", 0, (0, Je.getNumberValidator)());
Ie(ce, "globalCompositeOperation", "source-over", (0, Je.getStringValidator)());
Ie(ce, "opacity", 1, (0, Je.getNumberValidator)());
Ie(ce, "name", "", (0, Je.getStringValidator)());
Ie(ce, "id", "", (0, Je.getStringValidator)());
Ie(ce, "rotation", 0, (0, Je.getNumberValidator)());
$i.Factory.addComponentsGetterSetter(ce, "scale", ["x", "y"]);
Ie(ce, "scaleX", 1, (0, Je.getNumberValidator)());
Ie(ce, "scaleY", 1, (0, Je.getNumberValidator)());
$i.Factory.addComponentsGetterSetter(ce, "skew", ["x", "y"]);
Ie(ce, "skewX", 0, (0, Je.getNumberValidator)());
Ie(ce, "skewY", 0, (0, Je.getNumberValidator)());
$i.Factory.addComponentsGetterSetter(ce, "offset", ["x", "y"]);
Ie(ce, "offsetX", 0, (0, Je.getNumberValidator)());
Ie(ce, "offsetY", 0, (0, Je.getNumberValidator)());
Ie(ce, "dragDistance", null, (0, Je.getNumberValidator)());
Ie(ce, "width", 0, (0, Je.getNumberValidator)());
Ie(ce, "height", 0, (0, Je.getNumberValidator)());
Ie(ce, "listening", !0, (0, Je.getBooleanValidator)());
Ie(ce, "preventDefault", !0, (0, Je.getBooleanValidator)());
Ie(ce, "filters", null, function(a) {
  return this._filterUpToDate = !1, a;
});
Ie(ce, "visible", !0, (0, Je.getBooleanValidator)());
Ie(ce, "transformsEnabled", "all", (0, Je.getStringValidator)());
Ie(ce, "size");
Ie(ce, "dragBoundFunc");
Ie(ce, "draggable", !1, (0, Je.getBooleanValidator)());
$i.Factory.backCompat(ce, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.Container = void 0;
const ci = _e, Ll = We, Ps = ne;
class xn extends Ll.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(e) {
    if (!e)
      return this.children || [];
    const n = this.children || [];
    var i = [];
    return n.forEach(function(o) {
      e(o) && i.push(o);
    }), i;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...e) {
    if (e.length === 0)
      return this;
    if (e.length > 1) {
      for (var n = 0; n < e.length; n++)
        this.add(e[n]);
      return this;
    }
    const i = e[0];
    return i.getParent() ? (i.moveTo(this), this) : (this._validateAdd(i), i.index = this.getChildren().length, i.parent = this, i._clearCaches(), this.getChildren().push(i), this._fire("add", {
      child: i
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(e) {
    return this._generalFind(e, !1);
  }
  findOne(e) {
    var n = this._generalFind(e, !0);
    return n.length > 0 ? n[0] : void 0;
  }
  _generalFind(e, n) {
    var i = [];
    return this._descendants((o) => {
      const u = o._isMatch(e);
      return u && i.push(o), !!(u && n);
    }), i;
  }
  _descendants(e) {
    let n = !1;
    const i = this.getChildren();
    for (const o of i) {
      if (n = e(o), n)
        return !0;
      if (o.hasChildren() && (n = o._descendants(e), n))
        return !0;
    }
    return !1;
  }
  toObject() {
    var e = Ll.Node.prototype.toObject.call(this);
    return e.children = [], this.getChildren().forEach((n) => {
      e.children.push(n.toObject());
    }), e;
  }
  isAncestorOf(e) {
    for (var n = e.getParent(); n; ) {
      if (n._id === this._id)
        return !0;
      n = n.getParent();
    }
    return !1;
  }
  clone(e) {
    var n = Ll.Node.prototype.clone.call(this, e);
    return this.getChildren().forEach(function(i) {
      n.add(i.clone());
    }), n;
  }
  getAllIntersections(e) {
    var n = [];
    return this.find("Shape").forEach(function(i) {
      i.isVisible() && i.intersects(e) && n.push(i);
    }), n;
  }
  _clearSelfAndDescendantCache(e) {
    var n;
    super._clearSelfAndDescendantCache(e), !this.isCached() && ((n = this.children) === null || n === void 0 || n.forEach(function(i) {
      i._clearSelfAndDescendantCache(e);
    }));
  }
  _setChildrenIndices() {
    var e;
    (e = this.children) === null || e === void 0 || e.forEach(function(n, i) {
      n.index = i;
    }), this._requestDraw();
  }
  drawScene(e, n) {
    var i = this.getLayer(), o = e || i && i.getCanvas(), u = o && o.getContext(), h = this._getCanvasCache(), d = h && h.scene, f = o && o.isCache;
    if (!this.isVisible() && !f)
      return this;
    if (d) {
      u.save();
      var p = this.getAbsoluteTransform(n).getMatrix();
      u.transform(p[0], p[1], p[2], p[3], p[4], p[5]), this._drawCachedSceneCanvas(u), u.restore();
    } else
      this._drawChildren("drawScene", o, n);
    return this;
  }
  drawHit(e, n) {
    if (!this.shouldDrawHit(n))
      return this;
    var i = this.getLayer(), o = e || i && i.hitCanvas, u = o && o.getContext(), h = this._getCanvasCache(), d = h && h.hit;
    if (d) {
      u.save();
      var f = this.getAbsoluteTransform(n).getMatrix();
      u.transform(f[0], f[1], f[2], f[3], f[4], f[5]), this._drawCachedHitCanvas(u), u.restore();
    } else
      this._drawChildren("drawHit", o, n);
    return this;
  }
  _drawChildren(e, n, i) {
    var o, u = n && n.getContext(), h = this.clipWidth(), d = this.clipHeight(), f = this.clipFunc(), p = h && d || f;
    const y = i === this;
    if (p) {
      u.save();
      var C = this.getAbsoluteTransform(i), x = C.getMatrix();
      u.transform(x[0], x[1], x[2], x[3], x[4], x[5]), u.beginPath();
      let E;
      if (f)
        E = f.call(this, u, this);
      else {
        var _ = this.clipX(), m = this.clipY();
        u.rect(_, m, h, d);
      }
      u.clip.apply(u, E), x = C.copy().invert().getMatrix(), u.transform(x[0], x[1], x[2], x[3], x[4], x[5]);
    }
    var P = !y && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    P && (u.save(), u._applyGlobalCompositeOperation(this)), (o = this.children) === null || o === void 0 || o.forEach(function(E) {
      E[e](n, i);
    }), P && u.restore(), p && u.restore();
  }
  getClientRect(e) {
    var n;
    e = e || {};
    var i = e.skipTransform, o = e.relativeTo, u, h, d, f, p = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, y = this;
    (n = this.children) === null || n === void 0 || n.forEach(function(P) {
      if (P.visible()) {
        var E = P.getClientRect({
          relativeTo: y,
          skipShadow: e.skipShadow,
          skipStroke: e.skipStroke
        });
        E.width === 0 && E.height === 0 || (u === void 0 ? (u = E.x, h = E.y, d = E.x + E.width, f = E.y + E.height) : (u = Math.min(u, E.x), h = Math.min(h, E.y), d = Math.max(d, E.x + E.width), f = Math.max(f, E.y + E.height)));
      }
    });
    for (var C = this.find("Shape"), x = !1, _ = 0; _ < C.length; _++) {
      var m = C[_];
      if (m._isVisible(this)) {
        x = !0;
        break;
      }
    }
    return x && u !== void 0 ? p = {
      x: u,
      y: h,
      width: d - u,
      height: f - h
    } : p = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, i ? p : this._transformedRect(p, o);
  }
}
wn.Container = xn;
ci.Factory.addComponentsGetterSetter(xn, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
ci.Factory.addGetterSetter(xn, "clipX", void 0, (0, Ps.getNumberValidator)());
ci.Factory.addGetterSetter(xn, "clipY", void 0, (0, Ps.getNumberValidator)());
ci.Factory.addGetterSetter(xn, "clipWidth", void 0, (0, Ps.getNumberValidator)());
ci.Factory.addGetterSetter(xn, "clipHeight", void 0, (0, Ps.getNumberValidator)());
ci.Factory.addGetterSetter(xn, "clipFunc");
var j0 = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.releaseCapture = Dt.setPointerCapture = Dt.hasPointerCapture = Dt.createEvent = Dt.getCapturedShape = void 0;
const i2 = ye, Wi = /* @__PURE__ */ new Map(), W0 = i2.Konva._global.PointerEvent !== void 0;
function a2(a) {
  return Wi.get(a);
}
Dt.getCapturedShape = a2;
function Cu(a) {
  return {
    evt: a,
    pointerId: a.pointerId
  };
}
Dt.createEvent = Cu;
function s2(a, e) {
  return Wi.get(a) === e;
}
Dt.hasPointerCapture = s2;
function o2(a, e) {
  Y0(a), e.getStage() && (Wi.set(a, e), W0 && e._fire("gotpointercapture", Cu(new PointerEvent("gotpointercapture"))));
}
Dt.setPointerCapture = o2;
function Y0(a, e) {
  const n = Wi.get(a);
  if (!n)
    return;
  const i = n.getStage();
  i && i.content, Wi.delete(a), W0 && n._fire("lostpointercapture", Cu(new PointerEvent("lostpointercapture")));
}
Dt.releaseCapture = Y0;
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Stage = a.stages = void 0;
  const e = Xe, n = _e, i = wn, o = ye, u = or, h = xs, d = ye, f = Dt;
  var p = "Stage", y = "string", C = "px", x = "mouseout", _ = "mouseleave", m = "mouseover", P = "mouseenter", E = "mousemove", R = "mousedown", N = "mouseup", v = "pointermove", w = "pointerdown", k = "pointerup", b = "pointercancel", I = "lostpointercapture", T = "pointerout", z = "pointerleave", O = "pointerover", G = "pointerenter", Y = "contextmenu", H = "touchstart", q = "touchend", ae = "touchmove", ie = "touchcancel", oe = "wheel", B = 5, X = [
    [P, "_pointerenter"],
    [R, "_pointerdown"],
    [E, "_pointermove"],
    [N, "_pointerup"],
    [_, "_pointerleave"],
    [H, "_pointerdown"],
    [ae, "_pointermove"],
    [q, "_pointerup"],
    [ie, "_pointercancel"],
    [m, "_pointerover"],
    [oe, "_wheel"],
    [Y, "_contextmenu"],
    [w, "_pointerdown"],
    [v, "_pointermove"],
    [k, "_pointerup"],
    [b, "_pointercancel"],
    [I, "_lostpointercapture"]
  ];
  const V = {
    mouse: {
      [T]: x,
      [z]: _,
      [O]: m,
      [G]: P,
      [v]: E,
      [w]: R,
      [k]: N,
      [b]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [T]: "touchout",
      [z]: "touchleave",
      [O]: "touchover",
      [G]: "touchenter",
      [v]: ae,
      [w]: H,
      [k]: q,
      [b]: ie,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [T]: T,
      [z]: z,
      [O]: O,
      [G]: G,
      [v]: v,
      [w]: w,
      [k]: k,
      [b]: b,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, K = (xe) => xe.indexOf("pointer") >= 0 ? "pointer" : xe.indexOf("touch") >= 0 ? "touch" : "mouse", $ = (xe) => {
    const A = K(xe);
    if (A === "pointer")
      return o.Konva.pointerEventsEnabled && V.pointer;
    if (A === "touch")
      return V.touch;
    if (A === "mouse")
      return V.mouse;
  };
  function he(xe = {}) {
    return (xe.clipFunc || xe.clipWidth || xe.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), xe;
  }
  const le = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  a.stages = [];
  class Le extends i.Container {
    constructor(A) {
      super(he(A)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), a.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        he(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(A) {
      const j = A.getType() === "Layer", ee = A.getType() === "FastLayer";
      j || ee || e.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const A = this.visible() ? "" : "none";
      this.content.style.display = A;
    }
    setContainer(A) {
      if (typeof A === y) {
        if (A.charAt(0) === ".") {
          var j = A.slice(1);
          A = document.getElementsByClassName(j)[0];
        } else {
          var ee;
          A.charAt(0) !== "#" ? ee = A : ee = A.slice(1), A = document.getElementById(ee);
        }
        if (!A)
          throw "Can not find container in document with id " + ee;
      }
      return this._setAttr("container", A), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), A.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      var A = this.children, j = A.length, ee;
      for (ee = 0; ee < j; ee++)
        A[ee].clear();
      return this;
    }
    clone(A) {
      return A || (A = {}), A.container = typeof document < "u" && document.createElement("div"), i.Container.prototype.clone.call(this, A);
    }
    destroy() {
      super.destroy();
      var A = this.content;
      A && e.Util._isInDocument(A) && this.container().removeChild(A);
      var j = a.stages.indexOf(this);
      return j > -1 && a.stages.splice(j, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const A = this._pointerPositions[0] || this._changedPointerPositions[0];
      return A ? {
        x: A.x,
        y: A.y
      } : (e.Util.warn(le), null);
    }
    _getPointerById(A) {
      return this._pointerPositions.find((j) => j.id === A);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(A) {
      A = A || {}, A.x = A.x || 0, A.y = A.y || 0, A.width = A.width || this.width(), A.height = A.height || this.height();
      var j = new u.SceneCanvas({
        width: A.width,
        height: A.height,
        pixelRatio: A.pixelRatio || 1
      }), ee = j.getContext()._context, fe = this.children;
      return (A.x || A.y) && ee.translate(-1 * A.x, -1 * A.y), fe.forEach(function(de) {
        if (de.isVisible()) {
          var Re = de._toKonvaCanvas(A);
          ee.drawImage(Re._canvas, A.x, A.y, Re.getWidth() / Re.getPixelRatio(), Re.getHeight() / Re.getPixelRatio());
        }
      }), j;
    }
    getIntersection(A) {
      if (!A)
        return null;
      var j = this.children, ee = j.length, fe = ee - 1, de;
      for (de = fe; de >= 0; de--) {
        const Re = j[de].getIntersection(A);
        if (Re)
          return Re;
      }
      return null;
    }
    _resizeDOM() {
      var A = this.width(), j = this.height();
      this.content && (this.content.style.width = A + C, this.content.style.height = j + C), this.bufferCanvas.setSize(A, j), this.bufferHitCanvas.setSize(A, j), this.children.forEach((ee) => {
        ee.setSize({ width: A, height: j }), ee.draw();
      });
    }
    add(A, ...j) {
      if (arguments.length > 1) {
        for (var ee = 0; ee < arguments.length; ee++)
          this.add(arguments[ee]);
        return this;
      }
      super.add(A);
      var fe = this.children.length;
      return fe > B && e.Util.warn("The stage has " + fe + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), A.setSize({ width: this.width(), height: this.height() }), A.draw(), o.Konva.isBrowser && this.content.appendChild(A.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(A) {
      return f.hasPointerCapture(A, this);
    }
    setPointerCapture(A) {
      f.setPointerCapture(A, this);
    }
    releaseCapture(A) {
      f.releaseCapture(A, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      o.Konva.isBrowser && X.forEach(([A, j]) => {
        this.content.addEventListener(A, (ee) => {
          this[j](ee);
        }, { passive: !1 });
      });
    }
    _pointerenter(A) {
      this.setPointersPositions(A);
      const j = $(A.type);
      this._fire(j.pointerenter, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(A) {
      this.setPointersPositions(A);
      const j = $(A.type);
      this._fire(j.pointerover, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(A) {
      let j = this[A + "targetShape"];
      return j && !j.getStage() && (j = null), j;
    }
    _pointerleave(A) {
      const j = $(A.type), ee = K(A.type);
      if (j) {
        this.setPointersPositions(A);
        var fe = this._getTargetShape(ee), de = !h.DD.isDragging || o.Konva.hitOnDragEnabled;
        fe && de ? (fe._fireAndBubble(j.pointerout, { evt: A }), fe._fireAndBubble(j.pointerleave, { evt: A }), this._fire(j.pointerleave, {
          evt: A,
          target: this,
          currentTarget: this
        }), this[ee + "targetShape"] = null) : de && (this._fire(j.pointerleave, {
          evt: A,
          target: this,
          currentTarget: this
        }), this._fire(j.pointerout, {
          evt: A,
          target: this,
          currentTarget: this
        })), this.pointerPos = void 0, this._pointerPositions = [];
      }
    }
    _pointerdown(A) {
      const j = $(A.type), ee = K(A.type);
      if (j) {
        this.setPointersPositions(A);
        var fe = !1;
        this._changedPointerPositions.forEach((de) => {
          var Re = this.getIntersection(de);
          if (h.DD.justDragged = !1, o.Konva["_" + ee + "ListenClick"] = !0, !(Re && Re.isListening()))
            return;
          o.Konva.capturePointerEventsEnabled && Re.setPointerCapture(de.id), this[ee + "ClickStartShape"] = Re, Re._fireAndBubble(j.pointerdown, {
            evt: A,
            pointerId: de.id
          }), fe = !0;
          const Et = A.type.indexOf("touch") >= 0;
          Re.preventDefault() && A.cancelable && Et && A.preventDefault();
        }), fe || this._fire(j.pointerdown, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
    }
    _pointermove(A) {
      const j = $(A.type), ee = K(A.type);
      if (!j)
        return;
      h.DD.isDragging && h.DD.node.preventDefault() && A.cancelable && A.preventDefault(), this.setPointersPositions(A);
      var fe = !h.DD.isDragging || o.Konva.hitOnDragEnabled;
      if (!fe)
        return;
      var de = {};
      let Re = !1;
      var De = this._getTargetShape(ee);
      this._changedPointerPositions.forEach((Et) => {
        const Ae = f.getCapturedShape(Et.id) || this.getIntersection(Et), Jt = Et.id, Q = { evt: A, pointerId: Jt };
        var ue = De !== Ae;
        if (ue && De && (De._fireAndBubble(j.pointerout, Object.assign({}, Q), Ae), De._fireAndBubble(j.pointerleave, Object.assign({}, Q), Ae)), Ae) {
          if (de[Ae._id])
            return;
          de[Ae._id] = !0;
        }
        Ae && Ae.isListening() ? (Re = !0, ue && (Ae._fireAndBubble(j.pointerover, Object.assign({}, Q), De), Ae._fireAndBubble(j.pointerenter, Object.assign({}, Q), De), this[ee + "targetShape"] = Ae), Ae._fireAndBubble(j.pointermove, Object.assign({}, Q))) : De && (this._fire(j.pointerover, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Jt
        }), this[ee + "targetShape"] = null);
      }), Re || this._fire(j.pointermove, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(A) {
      const j = $(A.type), ee = K(A.type);
      if (!j)
        return;
      this.setPointersPositions(A);
      const fe = this[ee + "ClickStartShape"], de = this[ee + "ClickEndShape"];
      var Re = {};
      let De = !1;
      this._changedPointerPositions.forEach((Et) => {
        const Ae = f.getCapturedShape(Et.id) || this.getIntersection(Et);
        if (Ae) {
          if (Ae.releaseCapture(Et.id), Re[Ae._id])
            return;
          Re[Ae._id] = !0;
        }
        const Jt = Et.id, Q = { evt: A, pointerId: Jt };
        let ue = !1;
        o.Konva["_" + ee + "InDblClickWindow"] ? (ue = !0, clearTimeout(this[ee + "DblTimeout"])) : h.DD.justDragged || (o.Konva["_" + ee + "InDblClickWindow"] = !0, clearTimeout(this[ee + "DblTimeout"])), this[ee + "DblTimeout"] = setTimeout(function() {
          o.Konva["_" + ee + "InDblClickWindow"] = !1;
        }, o.Konva.dblClickWindow), Ae && Ae.isListening() ? (De = !0, this[ee + "ClickEndShape"] = Ae, Ae._fireAndBubble(j.pointerup, Object.assign({}, Q)), o.Konva["_" + ee + "ListenClick"] && fe && fe === Ae && (Ae._fireAndBubble(j.pointerclick, Object.assign({}, Q)), ue && de && de === Ae && Ae._fireAndBubble(j.pointerdblclick, Object.assign({}, Q)))) : (this[ee + "ClickEndShape"] = null, o.Konva["_" + ee + "ListenClick"] && this._fire(j.pointerclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Jt
        }), ue && this._fire(j.pointerdblclick, {
          evt: A,
          target: this,
          currentTarget: this,
          pointerId: Jt
        }));
      }), De || this._fire(j.pointerup, {
        evt: A,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), o.Konva["_" + ee + "ListenClick"] = !1, A.cancelable && ee !== "touch" && A.preventDefault();
    }
    _contextmenu(A) {
      this.setPointersPositions(A);
      var j = this.getIntersection(this.getPointerPosition());
      j && j.isListening() ? j._fireAndBubble(Y, { evt: A }) : this._fire(Y, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _wheel(A) {
      this.setPointersPositions(A);
      var j = this.getIntersection(this.getPointerPosition());
      j && j.isListening() ? j._fireAndBubble(oe, { evt: A }) : this._fire(oe, {
        evt: A,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(A) {
      this.setPointersPositions(A);
      const j = f.getCapturedShape(A.pointerId) || this.getIntersection(this.getPointerPosition());
      j && j._fireAndBubble(k, f.createEvent(A)), f.releaseCapture(A.pointerId);
    }
    _lostpointercapture(A) {
      f.releaseCapture(A.pointerId);
    }
    setPointersPositions(A) {
      var j = this._getContentPosition(), ee = null, fe = null;
      A = A || window.event, A.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(A.touches, (de) => {
        this._pointerPositions.push({
          id: de.identifier,
          x: (de.clientX - j.left) / j.scaleX,
          y: (de.clientY - j.top) / j.scaleY
        });
      }), Array.prototype.forEach.call(A.changedTouches || A.touches, (de) => {
        this._changedPointerPositions.push({
          id: de.identifier,
          x: (de.clientX - j.left) / j.scaleX,
          y: (de.clientY - j.top) / j.scaleY
        });
      })) : (ee = (A.clientX - j.left) / j.scaleX, fe = (A.clientY - j.top) / j.scaleY, this.pointerPos = {
        x: ee,
        y: fe
      }, this._pointerPositions = [{ x: ee, y: fe, id: e.Util._getFirstPointerId(A) }], this._changedPointerPositions = [
        { x: ee, y: fe, id: e.Util._getFirstPointerId(A) }
      ]);
    }
    _setPointerPosition(A) {
      e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(A);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      var A = this.content.getBoundingClientRect();
      return {
        top: A.top,
        left: A.left,
        scaleX: A.width / this.content.clientWidth || 1,
        scaleY: A.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new u.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new u.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !!o.Konva.isBrowser) {
        var A = this.container();
        if (!A)
          throw "Stage has no container. A container is required.";
        A.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), A.appendChild(this.content), this._resizeDOM();
      }
    }
    cache() {
      return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(A) {
        A.batchDraw();
      }), this;
    }
  }
  a.Stage = Le, Le.prototype.nodeType = p, (0, d._registerNode)(Le), n.Factory.addGetterSetter(Le, "container");
})(j0);
var qi = {}, at = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Shape = a.shapes = void 0;
  const e = ye, n = Xe, i = _e, o = We, u = ne, h = ye, d = Dt;
  var f = "hasShadow", p = "shadowRGBA", y = "patternImage", C = "linearGradient", x = "radialGradient";
  let _;
  function m() {
    return _ || (_ = n.Util.createCanvasElement().getContext("2d"), _);
  }
  a.shapes = {};
  function P(z) {
    const O = this.attrs.fillRule;
    O ? z.fill(O) : z.fill();
  }
  function E(z) {
    z.stroke();
  }
  function R(z) {
    z.fill();
  }
  function N(z) {
    z.stroke();
  }
  function v() {
    this._clearCache(f);
  }
  function w() {
    this._clearCache(p);
  }
  function k() {
    this._clearCache(y);
  }
  function b() {
    this._clearCache(C);
  }
  function I() {
    this._clearCache(x);
  }
  class T extends o.Node {
    constructor(O) {
      super(O);
      let G;
      for (; G = n.Util.getRandomColor(), !(G && !(G in a.shapes)); )
        ;
      this.colorKey = G, a.shapes[G] = this;
    }
    getContext() {
      return n.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return n.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(f, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(y, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        var O = m();
        const G = O.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (G && G.setTransform) {
          const Y = new n.Transform();
          Y.translate(this.fillPatternX(), this.fillPatternY()), Y.rotate(e.Konva.getAngle(this.fillPatternRotation())), Y.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), Y.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const H = Y.getMatrix(), q = typeof DOMMatrix > "u" ? {
            a: H[0],
            b: H[1],
            c: H[2],
            d: H[3],
            e: H[4],
            f: H[5]
          } : new DOMMatrix(H);
          G.setTransform(q);
        }
        return G;
      }
    }
    _getLinearGradient() {
      return this._getCache(C, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var O = this.fillLinearGradientColorStops();
      if (O) {
        for (var G = m(), Y = this.fillLinearGradientStartPoint(), H = this.fillLinearGradientEndPoint(), q = G.createLinearGradient(Y.x, Y.y, H.x, H.y), ae = 0; ae < O.length; ae += 2)
          q.addColorStop(O[ae], O[ae + 1]);
        return q;
      }
    }
    _getRadialGradient() {
      return this._getCache(x, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var O = this.fillRadialGradientColorStops();
      if (O) {
        for (var G = m(), Y = this.fillRadialGradientStartPoint(), H = this.fillRadialGradientEndPoint(), q = G.createRadialGradient(Y.x, Y.y, this.fillRadialGradientStartRadius(), H.x, H.y, this.fillRadialGradientEndRadius()), ae = 0; ae < O.length; ae += 2)
          q.addColorStop(O[ae], O[ae + 1]);
        return q;
      }
    }
    getShadowRGBA() {
      return this._getCache(p, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var O = n.Util.colorToRGBA(this.shadowColor());
        if (O)
          return "rgba(" + O.r + "," + O.g + "," + O.b + "," + O.a * (this.shadowOpacity() || 1) + ")";
      }
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      const O = this.hitStrokeWidth();
      return O === "auto" ? this.hasStroke() : this.strokeEnabled() && !!O;
    }
    intersects(O) {
      var G = this.getStage(), Y = G.bufferHitCanvas, H;
      return Y.getContext().clear(), this.drawHit(Y, null, !0), H = Y.context.getImageData(Math.round(O.x), Math.round(O.y), 1, 1).data, H[3] > 0;
    }
    destroy() {
      return o.Node.prototype.destroy.call(this), delete a.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(O) {
      var G;
      if (!this.getStage() || !((G = this.attrs.perfectDrawEnabled) !== null && G !== void 0 ? G : !0))
        return !1;
      const H = O || this.hasFill(), q = this.hasStroke(), ae = this.getAbsoluteOpacity() !== 1;
      if (H && q && ae)
        return !0;
      const ie = this.hasShadow(), oe = this.shadowForStrokeEnabled();
      return !!(H && q && ie && oe);
    }
    setStrokeHitEnabled(O) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), O ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var O = this.size();
      return {
        x: this._centroid ? -O.width / 2 : 0,
        y: this._centroid ? -O.height / 2 : 0,
        width: O.width,
        height: O.height
      };
    }
    getClientRect(O = {}) {
      const G = O.skipTransform, Y = O.relativeTo, H = this.getSelfRect(), ae = !O.skipStroke && this.hasStroke() && this.strokeWidth() || 0, ie = H.width + ae, oe = H.height + ae, B = !O.skipShadow && this.hasShadow(), X = B ? this.shadowOffsetX() : 0, V = B ? this.shadowOffsetY() : 0, K = ie + Math.abs(X), $ = oe + Math.abs(V), he = B && this.shadowBlur() || 0, le = K + he * 2, Le = $ + he * 2, xe = {
        width: le,
        height: Le,
        x: -(ae / 2 + he) + Math.min(X, 0) + H.x,
        y: -(ae / 2 + he) + Math.min(V, 0) + H.y
      };
      return G ? xe : this._transformedRect(xe, Y);
    }
    drawScene(O, G) {
      var Y = this.getLayer(), H = O || Y.getCanvas(), q = H.getContext(), ae = this._getCanvasCache(), ie = this.getSceneFunc(), oe = this.hasShadow(), B, X, V, K = H.isCache, $ = G === this;
      if (!this.isVisible() && !$)
        return this;
      if (ae) {
        q.save();
        var he = this.getAbsoluteTransform(G).getMatrix();
        return q.transform(he[0], he[1], he[2], he[3], he[4], he[5]), this._drawCachedSceneCanvas(q), q.restore(), this;
      }
      if (!ie)
        return this;
      if (q.save(), this._useBufferCanvas() && !K) {
        B = this.getStage(), X = B.bufferCanvas, V = X.getContext(), V.clear(), V.save(), V._applyLineJoin(this);
        var le = this.getAbsoluteTransform(G).getMatrix();
        V.transform(le[0], le[1], le[2], le[3], le[4], le[5]), ie.call(this, V, this), V.restore();
        var Le = X.pixelRatio;
        oe && q._applyShadow(this), q._applyOpacity(this), q._applyGlobalCompositeOperation(this), q.drawImage(X._canvas, 0, 0, X.width / Le, X.height / Le);
      } else {
        if (q._applyLineJoin(this), !$) {
          var le = this.getAbsoluteTransform(G).getMatrix();
          q.transform(le[0], le[1], le[2], le[3], le[4], le[5]), q._applyOpacity(this), q._applyGlobalCompositeOperation(this);
        }
        oe && q._applyShadow(this), ie.call(this, q, this);
      }
      return q.restore(), this;
    }
    drawHit(O, G, Y = !1) {
      if (!this.shouldDrawHit(G, Y))
        return this;
      var H = this.getLayer(), q = O || H.hitCanvas, ae = q && q.getContext(), ie = this.hitFunc() || this.sceneFunc(), oe = this._getCanvasCache(), B = oe && oe.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), B) {
        ae.save();
        var X = this.getAbsoluteTransform(G).getMatrix();
        return ae.transform(X[0], X[1], X[2], X[3], X[4], X[5]), this._drawCachedHitCanvas(ae), ae.restore(), this;
      }
      if (!ie)
        return this;
      if (ae.save(), ae._applyLineJoin(this), !(this === G)) {
        var K = this.getAbsoluteTransform(G).getMatrix();
        ae.transform(K[0], K[1], K[2], K[3], K[4], K[5]);
      }
      return ie.call(this, ae, this), ae.restore(), this;
    }
    drawHitFromCache(O = 0) {
      var G = this._getCanvasCache(), Y = this._getCachedSceneCanvas(), H = G.hit, q = H.getContext(), ae = H.getWidth(), ie = H.getHeight(), oe, B, X, V, K, $;
      q.clear(), q.drawImage(Y._canvas, 0, 0, ae, ie);
      try {
        for (oe = q.getImageData(0, 0, ae, ie), B = oe.data, X = B.length, V = n.Util._hexToRgb(this.colorKey), K = 0; K < X; K += 4)
          $ = B[K + 3], $ > O ? (B[K] = V.r, B[K + 1] = V.g, B[K + 2] = V.b, B[K + 3] = 255) : B[K + 3] = 0;
        q.putImageData(oe, 0, 0);
      } catch (he) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + he.message);
      }
      return this;
    }
    hasPointerCapture(O) {
      return d.hasPointerCapture(O, this);
    }
    setPointerCapture(O) {
      d.setPointerCapture(O, this);
    }
    releaseCapture(O) {
      d.releaseCapture(O, this);
    }
  }
  a.Shape = T, T.prototype._fillFunc = P, T.prototype._strokeFunc = E, T.prototype._fillFuncHit = R, T.prototype._strokeFuncHit = N, T.prototype._centroid = !1, T.prototype.nodeType = "Shape", (0, h._registerNode)(T), T.prototype.eventListeners = {}, T.prototype.on.call(T.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", v), T.prototype.on.call(T.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", w), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", k), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", b), T.prototype.on.call(T.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", I), i.Factory.addGetterSetter(T, "stroke", void 0, (0, u.getStringOrGradientValidator)()), i.Factory.addGetterSetter(T, "strokeWidth", 2, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillAfterStrokeEnabled", !1), i.Factory.addGetterSetter(T, "hitStrokeWidth", "auto", (0, u.getNumberOrAutoValidator)()), i.Factory.addGetterSetter(T, "strokeHitEnabled", !0, (0, u.getBooleanValidator)()), i.Factory.addGetterSetter(T, "perfectDrawEnabled", !0, (0, u.getBooleanValidator)()), i.Factory.addGetterSetter(T, "shadowForStrokeEnabled", !0, (0, u.getBooleanValidator)()), i.Factory.addGetterSetter(T, "lineJoin"), i.Factory.addGetterSetter(T, "lineCap"), i.Factory.addGetterSetter(T, "sceneFunc"), i.Factory.addGetterSetter(T, "hitFunc"), i.Factory.addGetterSetter(T, "dash"), i.Factory.addGetterSetter(T, "dashOffset", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "shadowColor", void 0, (0, u.getStringValidator)()), i.Factory.addGetterSetter(T, "shadowBlur", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "shadowOpacity", 1, (0, u.getNumberValidator)()), i.Factory.addComponentsGetterSetter(T, "shadowOffset", ["x", "y"]), i.Factory.addGetterSetter(T, "shadowOffsetX", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "shadowOffsetY", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillPatternImage"), i.Factory.addGetterSetter(T, "fill", void 0, (0, u.getStringOrGradientValidator)()), i.Factory.addGetterSetter(T, "fillPatternX", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillPatternY", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillLinearGradientColorStops"), i.Factory.addGetterSetter(T, "strokeLinearGradientColorStops"), i.Factory.addGetterSetter(T, "fillRadialGradientStartRadius", 0), i.Factory.addGetterSetter(T, "fillRadialGradientEndRadius", 0), i.Factory.addGetterSetter(T, "fillRadialGradientColorStops"), i.Factory.addGetterSetter(T, "fillPatternRepeat", "repeat"), i.Factory.addGetterSetter(T, "fillEnabled", !0), i.Factory.addGetterSetter(T, "strokeEnabled", !0), i.Factory.addGetterSetter(T, "shadowEnabled", !0), i.Factory.addGetterSetter(T, "dashEnabled", !0), i.Factory.addGetterSetter(T, "strokeScaleEnabled", !0), i.Factory.addGetterSetter(T, "fillPriority", "color"), i.Factory.addComponentsGetterSetter(T, "fillPatternOffset", ["x", "y"]), i.Factory.addGetterSetter(T, "fillPatternOffsetX", 0, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillPatternOffsetY", 0, (0, u.getNumberValidator)()), i.Factory.addComponentsGetterSetter(T, "fillPatternScale", ["x", "y"]), i.Factory.addGetterSetter(T, "fillPatternScaleX", 1, (0, u.getNumberValidator)()), i.Factory.addGetterSetter(T, "fillPatternScaleY", 1, (0, u.getNumberValidator)()), i.Factory.addComponentsGetterSetter(T, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(T, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(T, "fillLinearGradientStartPointX", 0), i.Factory.addGetterSetter(T, "strokeLinearGradientStartPointX", 0), i.Factory.addGetterSetter(T, "fillLinearGradientStartPointY", 0), i.Factory.addGetterSetter(T, "strokeLinearGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(T, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(T, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(T, "fillLinearGradientEndPointX", 0), i.Factory.addGetterSetter(T, "strokeLinearGradientEndPointX", 0), i.Factory.addGetterSetter(T, "fillLinearGradientEndPointY", 0), i.Factory.addGetterSetter(T, "strokeLinearGradientEndPointY", 0), i.Factory.addComponentsGetterSetter(T, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(T, "fillRadialGradientStartPointX", 0), i.Factory.addGetterSetter(T, "fillRadialGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(T, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(T, "fillRadialGradientEndPointX", 0), i.Factory.addGetterSetter(T, "fillRadialGradientEndPointY", 0), i.Factory.addGetterSetter(T, "fillPatternRotation", 0), i.Factory.addGetterSetter(T, "fillRule", void 0, (0, u.getStringValidator)()), i.Factory.backCompat(T, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(at);
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.Layer = void 0;
const Nr = Xe, Dl = wn, Qn = We, wu = _e, Gc = or, l2 = ne, u2 = at, h2 = ye;
var c2 = "#", d2 = "beforeDraw", f2 = "draw", K0 = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], g2 = K0.length;
let di = class extends Dl.Container {
  constructor(e) {
    super(e), this.canvas = new Gc.SceneCanvas(), this.hitCanvas = new Gc.HitCanvas({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(e) {
    return this.getContext().clear(e), this.getHitCanvas().getContext().clear(e), this;
  }
  setZIndex(e) {
    super.setZIndex(e);
    var n = this.getStage();
    return n && n.content && (n.content.removeChild(this.getNativeCanvasElement()), e < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[e + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    Qn.Node.prototype.moveToTop.call(this);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var e = Qn.Node.prototype.moveUp.call(this);
    if (!e)
      return !1;
    var n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Qn.Node.prototype.moveDown.call(this)) {
      var e = this.getStage();
      if (e) {
        var n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (Qn.Node.prototype.moveToBottom.call(this)) {
      var e = this.getStage();
      if (e) {
        var n = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), n[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var e = this.getNativeCanvasElement();
    return Qn.Node.prototype.remove.call(this), e && e.parentNode && Nr.Util._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: n }) {
    return this.canvas.setSize(e, n), this.hitCanvas.setSize(e, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    var n = e.getType();
    n !== "Group" && n !== "Shape" && Nr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), Qn.Node.prototype._toKonvaCanvas.call(this, e);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    Nr.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Nr.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Nr.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var n = 1, i = !1; ; ) {
      for (let o = 0; o < g2; o++) {
        const u = K0[o], h = this._getIntersection({
          x: e.x + u.x * n,
          y: e.y + u.y * n
        }), d = h.shape;
        if (d)
          return d;
        if (i = !!h.antialiased, !h.antialiased)
          break;
      }
      if (i)
        n += 1;
      else
        return null;
    }
  }
  _getIntersection(e) {
    const n = this.hitCanvas.pixelRatio, i = this.hitCanvas.context.getImageData(Math.round(e.x * n), Math.round(e.y * n), 1, 1).data, o = i[3];
    if (o === 255) {
      const u = Nr.Util._rgbToHex(i[0], i[1], i[2]), h = u2.shapes[c2 + u];
      return h ? {
        shape: h
      } : {
        antialiased: !0
      };
    } else if (o > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(e, n) {
    var i = this.getLayer(), o = e || i && i.getCanvas();
    return this._fire(d2, {
      node: this
    }), this.clearBeforeDraw() && o.getContext().clear(), Dl.Container.prototype.drawScene.call(this, o, n), this._fire(f2, {
      node: this
    }), this;
  }
  drawHit(e, n) {
    var i = this.getLayer(), o = e || i && i.hitCanvas;
    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), Dl.Container.prototype.drawHit.call(this, o, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    Nr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return Nr.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var e = this.parent, n = !!this.hitCanvas._canvas.parentNode;
      n ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return Nr.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
qi.Layer = di;
di.prototype.nodeType = "Layer";
(0, h2._registerNode)(di);
wu.Factory.addGetterSetter(di, "imageSmoothingEnabled", !0);
wu.Factory.addGetterSetter(di, "clearBeforeDraw", !0);
wu.Factory.addGetterSetter(di, "hitGraphEnabled", !0, (0, l2.getBooleanValidator)());
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.FastLayer = void 0;
const p2 = Xe, v2 = qi, m2 = ye;
class xu extends v2.Layer {
  constructor(e) {
    super(e), this.listening(!1), p2.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
ks.FastLayer = xu;
xu.prototype.nodeType = "FastLayer";
(0, m2._registerNode)(xu);
var fi = {};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.Group = void 0;
const y2 = Xe, _2 = wn, S2 = ye;
let Pu = class extends _2.Container {
  _validateAdd(e) {
    var n = e.getType();
    n !== "Group" && n !== "Shape" && y2.Util.throw("You may only add groups and shapes to groups.");
  }
};
fi.Group = Pu;
Pu.prototype.nodeType = "Group";
(0, S2._registerNode)(Pu);
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.Animation = void 0;
const Gl = ye, Uc = Xe;
var Ul = function() {
  return Gl.glob.performance && Gl.glob.performance.now ? function() {
    return Gl.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Sr {
  constructor(e, n) {
    this.id = Sr.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Ul(),
      frameRate: 0
    }, this.func = e, this.setLayers(n);
  }
  setLayers(e) {
    var n = [];
    return e ? e.length > 0 ? n = e : n = [e] : n = [], this.layers = n, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(e) {
    var n = this.layers, i = n.length, o;
    for (o = 0; o < i; o++)
      if (n[o]._id === e._id)
        return !1;
    return this.layers.push(e), !0;
  }
  isRunning() {
    var e = Sr, n = e.animations, i = n.length, o;
    for (o = 0; o < i; o++)
      if (n[o].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Ul(), Sr._addAnimation(this), this;
  }
  stop() {
    return Sr._removeAnimation(this), this;
  }
  _updateFrameObject(e) {
    this.frame.timeDiff = e - this.frame.lastTime, this.frame.lastTime = e, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(e) {
    this.animations.push(e), this._handleAnimation();
  }
  static _removeAnimation(e) {
    var n = e.id, i = this.animations, o = i.length, u;
    for (u = 0; u < o; u++)
      if (i[u].id === n) {
        this.animations.splice(u, 1);
        break;
      }
  }
  static _runFrames() {
    var e = {}, n = this.animations, i, o, u, h, d, f, p, y, C;
    for (h = 0; h < n.length; h++)
      if (i = n[h], o = i.layers, u = i.func, i._updateFrameObject(Ul()), f = o.length, u ? C = u.call(i, i.frame) !== !1 : C = !0, !!C)
        for (d = 0; d < f; d++)
          p = o[d], p._id !== void 0 && (e[p._id] = p);
    for (y in e)
      e.hasOwnProperty(y) && e[y].batchDraw();
  }
  static _animationLoop() {
    var e = Sr;
    e.animations.length ? (e._runFrames(), Uc.Util.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, Uc.Util.requestAnimFrame(this._animationLoop));
  }
}
gi.Animation = Sr;
Sr.animations = [];
Sr.animIdCounter = 0;
Sr.animRunning = !1;
var X0 = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Easings = a.Tween = void 0;
  const e = Xe, n = gi, i = We, o = ye;
  var u = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, h = 1, d = 2, f = 3, p = 0, y = ["fill", "stroke", "shadowColor"];
  class C {
    constructor(m, P, E, R, N, v, w) {
      this.prop = m, this.propFunc = P, this.begin = R, this._pos = R, this.duration = v, this._change = 0, this.prevPos = 0, this.yoyo = w, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = E, this._change = N - this.begin, this.pause();
    }
    fire(m) {
      var P = this[m];
      P && P();
    }
    setTime(m) {
      m > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : m < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = m, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(m) {
      this.prevPos = this._pos, this.propFunc(m), this._pos = m;
    }
    getPosition(m) {
      return m === void 0 && (m = this._time), this.func(m, this.begin, this._change, this.duration);
    }
    play() {
      this.state = d, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = f, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(m) {
      this.pause(), this._time = m, this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), this._time = 0, this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      var m = this.getTimer() - this._startTime;
      this.state === d ? this.setTime(m) : this.state === f && this.setTime(this.duration - m);
    }
    pause() {
      this.state = h, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class x {
    constructor(m) {
      var P = this, E = m.node, R = E._id, N, v = m.easing || a.Easings.Linear, w = !!m.yoyo, k;
      typeof m.duration > "u" ? N = 0.3 : m.duration === 0 ? N = 1e-3 : N = m.duration, this.node = E, this._id = p++;
      var b = E.getLayer() || (E instanceof o.Konva.Stage ? E.getLayers() : null);
      b || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        P.tween.onEnterFrame();
      }, b), this.tween = new C(k, function(I) {
        P._tweenFunc(I);
      }, v, 0, 1, N * 1e3, w), this._addListeners(), x.attrs[R] || (x.attrs[R] = {}), x.attrs[R][this._id] || (x.attrs[R][this._id] = {}), x.tweens[R] || (x.tweens[R] = {});
      for (k in m)
        u[k] === void 0 && this._addAttr(k, m[k]);
      this.reset(), this.onFinish = m.onFinish, this.onReset = m.onReset, this.onUpdate = m.onUpdate;
    }
    _addAttr(m, P) {
      var E = this.node, R = E._id, N, v, w, k, b, I, T, z;
      if (w = x.tweens[R][m], w && delete x.attrs[R][w][m], N = E.getAttr(m), e.Util._isArray(P))
        if (v = [], b = Math.max(P.length, N.length), m === "points" && P.length !== N.length && (P.length > N.length ? (T = N, N = e.Util._prepareArrayForTween(N, P, E.closed())) : (I = P, P = e.Util._prepareArrayForTween(P, N, E.closed()))), m.indexOf("fill") === 0)
          for (k = 0; k < b; k++)
            if (k % 2 === 0)
              v.push(P[k] - N[k]);
            else {
              var O = e.Util.colorToRGBA(N[k]);
              z = e.Util.colorToRGBA(P[k]), N[k] = O, v.push({
                r: z.r - O.r,
                g: z.g - O.g,
                b: z.b - O.b,
                a: z.a - O.a
              });
            }
        else
          for (k = 0; k < b; k++)
            v.push(P[k] - N[k]);
      else
        y.indexOf(m) !== -1 ? (N = e.Util.colorToRGBA(N), z = e.Util.colorToRGBA(P), v = {
          r: z.r - N.r,
          g: z.g - N.g,
          b: z.b - N.b,
          a: z.a - N.a
        }) : v = P - N;
      x.attrs[R][this._id][m] = {
        start: N,
        diff: v,
        end: P,
        trueEnd: I,
        trueStart: T
      }, x.tweens[R][m] = this._id;
    }
    _tweenFunc(m) {
      var P = this.node, E = x.attrs[P._id][this._id], R, N, v, w, k, b, I, T;
      for (R in E) {
        if (N = E[R], v = N.start, w = N.diff, T = N.end, e.Util._isArray(v))
          if (k = [], I = Math.max(v.length, T.length), R.indexOf("fill") === 0)
            for (b = 0; b < I; b++)
              b % 2 === 0 ? k.push((v[b] || 0) + w[b] * m) : k.push("rgba(" + Math.round(v[b].r + w[b].r * m) + "," + Math.round(v[b].g + w[b].g * m) + "," + Math.round(v[b].b + w[b].b * m) + "," + (v[b].a + w[b].a * m) + ")");
          else
            for (b = 0; b < I; b++)
              k.push((v[b] || 0) + w[b] * m);
        else
          y.indexOf(R) !== -1 ? k = "rgba(" + Math.round(v.r + w.r * m) + "," + Math.round(v.g + w.g * m) + "," + Math.round(v.b + w.b * m) + "," + (v.a + w.a * m) + ")" : k = v + w * m;
        P.setAttr(R, k);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      }, this.tween.onReverse = () => {
        this.anim.start();
      }, this.tween.onPause = () => {
        this.anim.stop();
      }, this.tween.onFinish = () => {
        var m = this.node, P = x.attrs[m._id][this._id];
        P.points && P.points.trueEnd && m.setAttr("points", P.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        var m = this.node, P = x.attrs[m._id][this._id];
        P.points && P.points.trueStart && m.points(P.points.trueStart), this.onReset && this.onReset();
      }, this.tween.onUpdate = () => {
        this.onUpdate && this.onUpdate.call(this);
      };
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(m) {
      return this.tween.seek(m * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      var m = this.node._id, P = this._id, E = x.tweens[m], R;
      this.pause();
      for (R in E)
        delete x.tweens[m][R];
      delete x.attrs[m][P];
    }
  }
  a.Tween = x, x.attrs = {}, x.tweens = {}, i.Node.prototype.to = function(_) {
    var m = _.onFinish;
    _.node = this, _.onFinish = function() {
      this.destroy(), m && m();
    };
    var P = new x(_);
    P.play();
  }, a.Easings = {
    BackEaseIn(_, m, P, E) {
      var R = 1.70158;
      return P * (_ /= E) * _ * ((R + 1) * _ - R) + m;
    },
    BackEaseOut(_, m, P, E) {
      var R = 1.70158;
      return P * ((_ = _ / E - 1) * _ * ((R + 1) * _ + R) + 1) + m;
    },
    BackEaseInOut(_, m, P, E) {
      var R = 1.70158;
      return (_ /= E / 2) < 1 ? P / 2 * (_ * _ * (((R *= 1.525) + 1) * _ - R)) + m : P / 2 * ((_ -= 2) * _ * (((R *= 1.525) + 1) * _ + R) + 2) + m;
    },
    ElasticEaseIn(_, m, P, E, R, N) {
      var v = 0;
      return _ === 0 ? m : (_ /= E) === 1 ? m + P : (N || (N = E * 0.3), !R || R < Math.abs(P) ? (R = P, v = N / 4) : v = N / (2 * Math.PI) * Math.asin(P / R), -(R * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * E - v) * (2 * Math.PI) / N)) + m);
    },
    ElasticEaseOut(_, m, P, E, R, N) {
      var v = 0;
      return _ === 0 ? m : (_ /= E) === 1 ? m + P : (N || (N = E * 0.3), !R || R < Math.abs(P) ? (R = P, v = N / 4) : v = N / (2 * Math.PI) * Math.asin(P / R), R * Math.pow(2, -10 * _) * Math.sin((_ * E - v) * (2 * Math.PI) / N) + P + m);
    },
    ElasticEaseInOut(_, m, P, E, R, N) {
      var v = 0;
      return _ === 0 ? m : (_ /= E / 2) === 2 ? m + P : (N || (N = E * (0.3 * 1.5)), !R || R < Math.abs(P) ? (R = P, v = N / 4) : v = N / (2 * Math.PI) * Math.asin(P / R), _ < 1 ? -0.5 * (R * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * E - v) * (2 * Math.PI) / N)) + m : R * Math.pow(2, -10 * (_ -= 1)) * Math.sin((_ * E - v) * (2 * Math.PI) / N) * 0.5 + P + m);
    },
    BounceEaseOut(_, m, P, E) {
      return (_ /= E) < 1 / 2.75 ? P * (7.5625 * _ * _) + m : _ < 2 / 2.75 ? P * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + m : _ < 2.5 / 2.75 ? P * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + m : P * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + m;
    },
    BounceEaseIn(_, m, P, E) {
      return P - a.Easings.BounceEaseOut(E - _, 0, P, E) + m;
    },
    BounceEaseInOut(_, m, P, E) {
      return _ < E / 2 ? a.Easings.BounceEaseIn(_ * 2, 0, P, E) * 0.5 + m : a.Easings.BounceEaseOut(_ * 2 - E, 0, P, E) * 0.5 + P * 0.5 + m;
    },
    EaseIn(_, m, P, E) {
      return P * (_ /= E) * _ + m;
    },
    EaseOut(_, m, P, E) {
      return -P * (_ /= E) * (_ - 2) + m;
    },
    EaseInOut(_, m, P, E) {
      return (_ /= E / 2) < 1 ? P / 2 * _ * _ + m : -P / 2 * (--_ * (_ - 2) - 1) + m;
    },
    StrongEaseIn(_, m, P, E) {
      return P * (_ /= E) * _ * _ * _ * _ + m;
    },
    StrongEaseOut(_, m, P, E) {
      return P * ((_ = _ / E - 1) * _ * _ * _ * _ + 1) + m;
    },
    StrongEaseInOut(_, m, P, E) {
      return (_ /= E / 2) < 1 ? P / 2 * _ * _ * _ * _ * _ + m : P / 2 * ((_ -= 2) * _ * _ * _ * _ + 2) + m;
    },
    Linear(_, m, P, E) {
      return P * _ / E + m;
    }
  };
})(X0);
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.Konva = void 0;
  const e = ye, n = Xe, i = We, o = wn, u = j0, h = qi, d = ks, f = fi, p = xs, y = at, C = gi, x = X0, _ = Mr, m = or;
  a.Konva = n.Util._assign(e.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: i.Node,
    Container: o.Container,
    Stage: u.Stage,
    stages: u.stages,
    Layer: h.Layer,
    FastLayer: d.FastLayer,
    Group: f.Group,
    DD: p.DD,
    Shape: y.Shape,
    shapes: y.shapes,
    Animation: C.Animation,
    Tween: x.Tween,
    Easings: x.Easings,
    Context: _.Context,
    Canvas: m.Canvas
  }), a.default = a.Konva;
})(cs);
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.Arc = void 0;
const Ts = _e, C2 = at, zc = ye, Rs = ne, w2 = ye;
class Lr extends C2.Shape {
  _sceneFunc(e) {
    var n = zc.Konva.getAngle(this.angle()), i = this.clockwise();
    e.beginPath(), e.arc(0, 0, this.outerRadius(), 0, n, i), e.arc(0, 0, this.innerRadius(), n, 0, !i), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
  getSelfRect() {
    const e = this.innerRadius(), n = this.outerRadius(), i = this.clockwise(), o = zc.Konva.getAngle(i ? 360 - this.angle() : this.angle()), u = Math.cos(Math.min(o, Math.PI)), h = 1, d = Math.sin(Math.min(Math.max(Math.PI, o), 3 * Math.PI / 2)), f = Math.sin(Math.min(o, Math.PI / 2)), p = u * (u > 0 ? e : n), y = h * n, C = d * (d > 0 ? e : n), x = f * (f > 0 ? n : e);
    return {
      x: p,
      y: i ? -1 * x : C,
      width: y - p,
      height: x - C
    };
  }
}
Es.Arc = Lr;
Lr.prototype._centroid = !0;
Lr.prototype.className = "Arc";
Lr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, w2._registerNode)(Lr);
Ts.Factory.addGetterSetter(Lr, "innerRadius", 0, (0, Rs.getNumberValidator)());
Ts.Factory.addGetterSetter(Lr, "outerRadius", 0, (0, Rs.getNumberValidator)());
Ts.Factory.addGetterSetter(Lr, "angle", 0, (0, Rs.getNumberValidator)());
Ts.Factory.addGetterSetter(Lr, "clockwise", !1, (0, Rs.getBooleanValidator)());
var bs = {}, Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.Line = void 0;
const Ns = _e, x2 = at, $0 = ne, P2 = ye;
function su(a, e, n, i, o, u, h) {
  var d = Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - e, 2)), f = Math.sqrt(Math.pow(o - n, 2) + Math.pow(u - i, 2)), p = h * d / (d + f), y = h * f / (d + f), C = n - p * (o - a), x = i - p * (u - e), _ = n + y * (o - a), m = i + y * (u - e);
  return [C, x, _, m];
}
function Bc(a, e) {
  var n = a.length, i = [], o, u;
  for (o = 2; o < n - 2; o += 2)
    u = su(a[o - 2], a[o - 1], a[o], a[o + 1], a[o + 2], a[o + 3], e), !isNaN(u[0]) && (i.push(u[0]), i.push(u[1]), i.push(a[o]), i.push(a[o + 1]), i.push(u[2]), i.push(u[3]));
  return i;
}
class Qr extends x2.Shape {
  constructor(e) {
    super(e), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(e) {
    var n = this.points(), i = n.length, o = this.tension(), u = this.closed(), h = this.bezier(), d, f, p;
    if (i) {
      if (e.beginPath(), e.moveTo(n[0], n[1]), o !== 0 && i > 4) {
        for (d = this.getTensionPoints(), f = d.length, p = u ? 0 : 4, u || e.quadraticCurveTo(d[0], d[1], d[2], d[3]); p < f - 2; )
          e.bezierCurveTo(d[p++], d[p++], d[p++], d[p++], d[p++], d[p++]);
        u || e.quadraticCurveTo(d[f - 2], d[f - 1], n[i - 2], n[i - 1]);
      } else if (h)
        for (p = 2; p < i; )
          e.bezierCurveTo(n[p++], n[p++], n[p++], n[p++], n[p++], n[p++]);
      else
        for (p = 2; p < i; p += 2)
          e.lineTo(n[p], n[p + 1]);
      u ? (e.closePath(), e.fillStrokeShape(this)) : e.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : Bc(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var e = this.points(), n = e.length, i = this.tension(), o = su(e[n - 2], e[n - 1], e[0], e[1], e[2], e[3], i), u = su(e[n - 4], e[n - 3], e[n - 2], e[n - 1], e[0], e[1], i), h = Bc(e, i), d = [o[2], o[3]].concat(h).concat([
      u[0],
      u[1],
      e[n - 2],
      e[n - 1],
      u[2],
      u[3],
      o[0],
      o[1],
      e[0],
      e[1]
    ]);
    return d;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var e = this.points();
    if (e.length < 4)
      return {
        x: e[0] || 0,
        y: e[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? e = [
      e[0],
      e[1],
      ...this._getTensionPoints(),
      e[e.length - 2],
      e[e.length - 1]
    ] : e = this.points();
    for (var n = e[0], i = e[0], o = e[1], u = e[1], h, d, f = 0; f < e.length / 2; f++)
      h = e[f * 2], d = e[f * 2 + 1], n = Math.min(n, h), i = Math.max(i, h), o = Math.min(o, d), u = Math.max(u, d);
    return {
      x: n,
      y: o,
      width: i - n,
      height: u - o
    };
  }
}
Qi.Line = Qr;
Qr.prototype.className = "Line";
Qr.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, P2._registerNode)(Qr);
Ns.Factory.addGetterSetter(Qr, "closed", !1);
Ns.Factory.addGetterSetter(Qr, "bezier", !1);
Ns.Factory.addGetterSetter(Qr, "tension", 0, (0, $0.getNumberValidator)());
Ns.Factory.addGetterSetter(Qr, "points", [], (0, $0.getNumberArrayValidator)());
var pi = {}, q0 = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), a.t2length = a.getQuadraticArcLength = a.getCubicArcLength = a.binomialCoefficients = a.cValues = a.tValues = void 0, a.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ], a.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ], a.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const e = (h, d, f) => {
    let p, y, C;
    p = f / 2, y = 0;
    for (let _ = 0; _ < 20; _++)
      C = p * a.tValues[20][_] + p, y += a.cValues[20][_] * i(h, d, C);
    return p * y;
  };
  a.getCubicArcLength = e;
  const n = (h, d, f) => {
    f === void 0 && (f = 1);
    const p = h[0] - 2 * h[1] + h[2], y = d[0] - 2 * d[1] + d[2], C = 2 * h[1] - 2 * h[0], x = 2 * d[1] - 2 * d[0], _ = 4 * (p * p + y * y), m = 4 * (p * C + y * x), P = C * C + x * x;
    if (_ === 0)
      return f * Math.sqrt(Math.pow(h[2] - h[0], 2) + Math.pow(d[2] - d[0], 2));
    const E = m / (2 * _), R = P / _, N = f + E, v = R - E * E, w = N * N + v > 0 ? Math.sqrt(N * N + v) : 0, k = E * E + v > 0 ? Math.sqrt(E * E + v) : 0, b = E + Math.sqrt(E * E + v) !== 0 ? v * Math.log(Math.abs((N + w) / (E + k))) : 0;
    return Math.sqrt(_) / 2 * (N * w - E * k + b);
  };
  a.getQuadraticArcLength = n;
  function i(h, d, f) {
    const p = o(1, f, h), y = o(1, f, d), C = p * p + y * y;
    return Math.sqrt(C);
  }
  const o = (h, d, f) => {
    const p = f.length - 1;
    let y, C;
    if (p === 0)
      return 0;
    if (h === 0) {
      C = 0;
      for (let x = 0; x <= p; x++)
        C += a.binomialCoefficients[p][x] * Math.pow(1 - d, p - x) * Math.pow(d, x) * f[x];
      return C;
    } else {
      y = new Array(p);
      for (let x = 0; x < p; x++)
        y[x] = p * (f[x + 1] - f[x]);
      return o(h - 1, d, y);
    }
  }, u = (h, d, f) => {
    let p = 1, y = h / d, C = (h - f(y)) / d, x = 0;
    for (; p > 1e-3; ) {
      const _ = f(y + C), m = Math.abs(h - _) / d;
      if (m < p)
        p = m, y += C;
      else {
        const P = f(y - C), E = Math.abs(h - P) / d;
        E < p ? (p = E, y -= C) : C /= 2;
      }
      if (x++, x > 500)
        break;
    }
    return y;
  };
  a.t2length = u;
})(q0);
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.Path = void 0;
const k2 = _e, E2 = at, T2 = ye, Jn = q0;
let Ji = class Mt extends E2.Shape {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = Mt.parsePathData(this.data()), this.pathLength = Mt.getPathLength(this.dataArray);
  }
  _sceneFunc(e) {
    var n = this.dataArray;
    e.beginPath();
    for (var i = !1, o = 0; o < n.length; o++) {
      var u = n[o].command, h = n[o].points;
      switch (u) {
        case "L":
          e.lineTo(h[0], h[1]);
          break;
        case "M":
          e.moveTo(h[0], h[1]);
          break;
        case "C":
          e.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
          break;
        case "Q":
          e.quadraticCurveTo(h[0], h[1], h[2], h[3]);
          break;
        case "A":
          var d = h[0], f = h[1], p = h[2], y = h[3], C = h[4], x = h[5], _ = h[6], m = h[7], P = p > y ? p : y, E = p > y ? 1 : p / y, R = p > y ? y / p : 1;
          e.translate(d, f), e.rotate(_), e.scale(E, R), e.arc(0, 0, P, C, C + x, 1 - m), e.scale(1 / E, 1 / R), e.rotate(-_), e.translate(-d, -f);
          break;
        case "z":
          i = !0, e.closePath();
          break;
      }
    }
    !i && !this.hasFill() ? e.strokeShape(this) : e.fillStrokeShape(this);
  }
  getSelfRect() {
    var e = [];
    this.dataArray.forEach(function(p) {
      if (p.command === "A") {
        var y = p.points[4], C = p.points[5], x = p.points[4] + C, _ = Math.PI / 180;
        if (Math.abs(y - x) < _ && (_ = Math.abs(y - x)), C < 0)
          for (let m = y - _; m > x; m -= _) {
            const P = Mt.getPointOnEllipticalArc(p.points[0], p.points[1], p.points[2], p.points[3], m, 0);
            e.push(P.x, P.y);
          }
        else
          for (let m = y + _; m < x; m += _) {
            const P = Mt.getPointOnEllipticalArc(p.points[0], p.points[1], p.points[2], p.points[3], m, 0);
            e.push(P.x, P.y);
          }
      } else if (p.command === "C")
        for (let m = 0; m <= 1; m += 0.01) {
          const P = Mt.getPointOnCubicBezier(m, p.start.x, p.start.y, p.points[0], p.points[1], p.points[2], p.points[3], p.points[4], p.points[5]);
          e.push(P.x, P.y);
        }
      else
        e = e.concat(p.points);
    });
    for (var n = e[0], i = e[0], o = e[1], u = e[1], h, d, f = 0; f < e.length / 2; f++)
      h = e[f * 2], d = e[f * 2 + 1], isNaN(h) || (n = Math.min(n, h), i = Math.max(i, h)), isNaN(d) || (o = Math.min(o, d), u = Math.max(u, d));
    return {
      x: n,
      y: o,
      width: i - n,
      height: u - o
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(e) {
    return Mt.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  static getLineLength(e, n, i, o) {
    return Math.sqrt((i - e) * (i - e) + (o - n) * (o - n));
  }
  static getPathLength(e) {
    let n = 0;
    for (var i = 0; i < e.length; ++i)
      n += e[i].pathLength;
    return n;
  }
  static getPointAtLengthOfDataArray(e, n) {
    var i, o = 0, u = n.length;
    if (!u)
      return null;
    for (; o < u && e > n[o].pathLength; )
      e -= n[o].pathLength, ++o;
    if (o === u)
      return i = n[o - 1].points.slice(-2), {
        x: i[0],
        y: i[1]
      };
    if (e < 0.01)
      return i = n[o].points.slice(0, 2), {
        x: i[0],
        y: i[1]
      };
    var h = n[o], d = h.points;
    switch (h.command) {
      case "L":
        return Mt.getPointOnLine(e, h.start.x, h.start.y, d[0], d[1]);
      case "C":
        return Mt.getPointOnCubicBezier((0, Jn.t2length)(e, Mt.getPathLength(n), (P) => (0, Jn.getCubicArcLength)([h.start.x, d[0], d[2], d[4]], [h.start.y, d[1], d[3], d[5]], P)), h.start.x, h.start.y, d[0], d[1], d[2], d[3], d[4], d[5]);
      case "Q":
        return Mt.getPointOnQuadraticBezier((0, Jn.t2length)(e, Mt.getPathLength(n), (P) => (0, Jn.getQuadraticArcLength)([h.start.x, d[0], d[2]], [h.start.y, d[1], d[3]], P)), h.start.x, h.start.y, d[0], d[1], d[2], d[3]);
      case "A":
        var f = d[0], p = d[1], y = d[2], C = d[3], x = d[4], _ = d[5], m = d[6];
        return x += _ * e / h.pathLength, Mt.getPointOnEllipticalArc(f, p, y, C, x, m);
    }
    return null;
  }
  static getPointOnLine(e, n, i, o, u, h, d) {
    h === void 0 && (h = n), d === void 0 && (d = i);
    var f = (u - i) / (o - n + 1e-8), p = Math.sqrt(e * e / (1 + f * f));
    o < n && (p *= -1);
    var y = f * p, C;
    if (o === n)
      C = {
        x: h,
        y: d + y
      };
    else if ((d - i) / (h - n + 1e-8) === f)
      C = {
        x: h + p,
        y: d + y
      };
    else {
      var x, _, m = this.getLineLength(n, i, o, u), P = (h - n) * (o - n) + (d - i) * (u - i);
      P = P / (m * m), x = n + P * (o - n), _ = i + P * (u - i);
      var E = this.getLineLength(h, d, x, _), R = Math.sqrt(e * e - E * E);
      p = Math.sqrt(R * R / (1 + f * f)), o < n && (p *= -1), y = f * p, C = {
        x: x + p,
        y: _ + y
      };
    }
    return C;
  }
  static getPointOnCubicBezier(e, n, i, o, u, h, d, f, p) {
    function y(E) {
      return E * E * E;
    }
    function C(E) {
      return 3 * E * E * (1 - E);
    }
    function x(E) {
      return 3 * E * (1 - E) * (1 - E);
    }
    function _(E) {
      return (1 - E) * (1 - E) * (1 - E);
    }
    var m = f * y(e) + h * C(e) + o * x(e) + n * _(e), P = p * y(e) + d * C(e) + u * x(e) + i * _(e);
    return {
      x: m,
      y: P
    };
  }
  static getPointOnQuadraticBezier(e, n, i, o, u, h, d) {
    function f(_) {
      return _ * _;
    }
    function p(_) {
      return 2 * _ * (1 - _);
    }
    function y(_) {
      return (1 - _) * (1 - _);
    }
    var C = h * f(e) + o * p(e) + n * y(e), x = d * f(e) + u * p(e) + i * y(e);
    return {
      x: C,
      y: x
    };
  }
  static getPointOnEllipticalArc(e, n, i, o, u, h) {
    var d = Math.cos(h), f = Math.sin(h), p = {
      x: i * Math.cos(u),
      y: o * Math.sin(u)
    };
    return {
      x: e + (p.x * d - p.y * f),
      y: n + (p.x * f + p.y * d)
    };
  }
  static parsePathData(e) {
    if (!e)
      return [];
    var n = e, i = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    n = n.replace(new RegExp(" ", "g"), ",");
    for (var o = 0; o < i.length; o++)
      n = n.replace(new RegExp(i[o], "g"), "|" + i[o]);
    var u = n.split("|"), h = [], d = [], f = 0, p = 0, y = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, C;
    for (o = 1; o < u.length; o++) {
      var x = u[o], _ = x.charAt(0);
      for (x = x.slice(1), d.length = 0; C = y.exec(x); )
        d.push(C[0]);
      for (var m = [], P = 0, E = d.length; P < E; P++) {
        if (d[P] === "00") {
          m.push(0, 0);
          continue;
        }
        var R = parseFloat(d[P]);
        isNaN(R) ? m.push(0) : m.push(R);
      }
      for (; m.length > 0 && !isNaN(m[0]); ) {
        var N = null, v = [], w = f, k = p, b, I, T, z, O, G, Y, H, q, ae;
        switch (_) {
          case "l":
            f += m.shift(), p += m.shift(), N = "L", v.push(f, p);
            break;
          case "L":
            f = m.shift(), p = m.shift(), v.push(f, p);
            break;
          case "m":
            var ie = m.shift(), oe = m.shift();
            if (f += ie, p += oe, N = "M", h.length > 2 && h[h.length - 1].command === "z") {
              for (var B = h.length - 2; B >= 0; B--)
                if (h[B].command === "M") {
                  f = h[B].points[0] + ie, p = h[B].points[1] + oe;
                  break;
                }
            }
            v.push(f, p), _ = "l";
            break;
          case "M":
            f = m.shift(), p = m.shift(), N = "M", v.push(f, p), _ = "L";
            break;
          case "h":
            f += m.shift(), N = "L", v.push(f, p);
            break;
          case "H":
            f = m.shift(), N = "L", v.push(f, p);
            break;
          case "v":
            p += m.shift(), N = "L", v.push(f, p);
            break;
          case "V":
            p = m.shift(), N = "L", v.push(f, p);
            break;
          case "C":
            v.push(m.shift(), m.shift(), m.shift(), m.shift()), f = m.shift(), p = m.shift(), v.push(f, p);
            break;
          case "c":
            v.push(f + m.shift(), p + m.shift(), f + m.shift(), p + m.shift()), f += m.shift(), p += m.shift(), N = "C", v.push(f, p);
            break;
          case "S":
            I = f, T = p, b = h[h.length - 1], b.command === "C" && (I = f + (f - b.points[2]), T = p + (p - b.points[3])), v.push(I, T, m.shift(), m.shift()), f = m.shift(), p = m.shift(), N = "C", v.push(f, p);
            break;
          case "s":
            I = f, T = p, b = h[h.length - 1], b.command === "C" && (I = f + (f - b.points[2]), T = p + (p - b.points[3])), v.push(I, T, f + m.shift(), p + m.shift()), f += m.shift(), p += m.shift(), N = "C", v.push(f, p);
            break;
          case "Q":
            v.push(m.shift(), m.shift()), f = m.shift(), p = m.shift(), v.push(f, p);
            break;
          case "q":
            v.push(f + m.shift(), p + m.shift()), f += m.shift(), p += m.shift(), N = "Q", v.push(f, p);
            break;
          case "T":
            I = f, T = p, b = h[h.length - 1], b.command === "Q" && (I = f + (f - b.points[0]), T = p + (p - b.points[1])), f = m.shift(), p = m.shift(), N = "Q", v.push(I, T, f, p);
            break;
          case "t":
            I = f, T = p, b = h[h.length - 1], b.command === "Q" && (I = f + (f - b.points[0]), T = p + (p - b.points[1])), f += m.shift(), p += m.shift(), N = "Q", v.push(I, T, f, p);
            break;
          case "A":
            z = m.shift(), O = m.shift(), G = m.shift(), Y = m.shift(), H = m.shift(), q = f, ae = p, f = m.shift(), p = m.shift(), N = "A", v = this.convertEndpointToCenterParameterization(q, ae, f, p, Y, H, z, O, G);
            break;
          case "a":
            z = m.shift(), O = m.shift(), G = m.shift(), Y = m.shift(), H = m.shift(), q = f, ae = p, f += m.shift(), p += m.shift(), N = "A", v = this.convertEndpointToCenterParameterization(q, ae, f, p, Y, H, z, O, G);
            break;
        }
        h.push({
          command: N || _,
          points: v,
          start: {
            x: w,
            y: k
          },
          pathLength: this.calcLength(w, k, N || _, v)
        });
      }
      (_ === "z" || _ === "Z") && h.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return h;
  }
  static calcLength(e, n, i, o) {
    var u, h, d, f, p = Mt;
    switch (i) {
      case "L":
        return p.getLineLength(e, n, o[0], o[1]);
      case "C":
        return (0, Jn.getCubicArcLength)([e, o[0], o[2], o[4]], [n, o[1], o[3], o[5]], 1);
      case "Q":
        return (0, Jn.getQuadraticArcLength)([e, o[0], o[2]], [n, o[1], o[3]], 1);
      case "A":
        u = 0;
        var y = o[4], C = o[5], x = o[4] + C, _ = Math.PI / 180;
        if (Math.abs(y - x) < _ && (_ = Math.abs(y - x)), h = p.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], y, 0), C < 0)
          for (f = y - _; f > x; f -= _)
            d = p.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), u += p.getLineLength(h.x, h.y, d.x, d.y), h = d;
        else
          for (f = y + _; f < x; f += _)
            d = p.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], f, 0), u += p.getLineLength(h.x, h.y, d.x, d.y), h = d;
        return d = p.getPointOnEllipticalArc(o[0], o[1], o[2], o[3], x, 0), u += p.getLineLength(h.x, h.y, d.x, d.y), u;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, n, i, o, u, h, d, f, p) {
    var y = p * (Math.PI / 180), C = Math.cos(y) * (e - i) / 2 + Math.sin(y) * (n - o) / 2, x = -1 * Math.sin(y) * (e - i) / 2 + Math.cos(y) * (n - o) / 2, _ = C * C / (d * d) + x * x / (f * f);
    _ > 1 && (d *= Math.sqrt(_), f *= Math.sqrt(_));
    var m = Math.sqrt((d * d * (f * f) - d * d * (x * x) - f * f * (C * C)) / (d * d * (x * x) + f * f * (C * C)));
    u === h && (m *= -1), isNaN(m) && (m = 0);
    var P = m * d * x / f, E = m * -f * C / d, R = (e + i) / 2 + Math.cos(y) * P - Math.sin(y) * E, N = (n + o) / 2 + Math.sin(y) * P + Math.cos(y) * E, v = function(O) {
      return Math.sqrt(O[0] * O[0] + O[1] * O[1]);
    }, w = function(O, G) {
      return (O[0] * G[0] + O[1] * G[1]) / (v(O) * v(G));
    }, k = function(O, G) {
      return (O[0] * G[1] < O[1] * G[0] ? -1 : 1) * Math.acos(w(O, G));
    }, b = k([1, 0], [(C - P) / d, (x - E) / f]), I = [(C - P) / d, (x - E) / f], T = [(-1 * C - P) / d, (-1 * x - E) / f], z = k(I, T);
    return w(I, T) <= -1 && (z = Math.PI), w(I, T) >= 1 && (z = 0), h === 0 && z > 0 && (z = z - 2 * Math.PI), h === 1 && z < 0 && (z = z + 2 * Math.PI), [R, N, d, f, b, z, y, h];
  }
};
pi.Path = Ji;
Ji.prototype.className = "Path";
Ji.prototype._attrsAffectingSize = ["data"];
(0, T2._registerNode)(Ji);
k2.Factory.addGetterSetter(Ji, "data");
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.Arrow = void 0;
const As = _e, R2 = Qi, Q0 = ne, b2 = ye, Vc = pi;
class Pn extends R2.Line {
  _sceneFunc(e) {
    super._sceneFunc(e);
    var n = Math.PI * 2, i = this.points(), o = i, u = this.tension() !== 0 && i.length > 4;
    u && (o = this.getTensionPoints());
    var h = this.pointerLength(), d = i.length, f, p;
    if (u) {
      const x = [
        o[o.length - 4],
        o[o.length - 3],
        o[o.length - 2],
        o[o.length - 1],
        i[d - 2],
        i[d - 1]
      ], _ = Vc.Path.calcLength(o[o.length - 4], o[o.length - 3], "C", x), m = Vc.Path.getPointOnQuadraticBezier(Math.min(1, 1 - h / _), x[0], x[1], x[2], x[3], x[4], x[5]);
      f = i[d - 2] - m.x, p = i[d - 1] - m.y;
    } else
      f = i[d - 2] - i[d - 4], p = i[d - 1] - i[d - 3];
    var y = (Math.atan2(p, f) + n) % n, C = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(i[d - 2], i[d - 1]), e.rotate(y), e.moveTo(0, 0), e.lineTo(-h, C / 2), e.lineTo(-h, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(i[0], i[1]), u ? (f = (o[0] + o[2]) / 2 - i[0], p = (o[1] + o[3]) / 2 - i[1]) : (f = i[2] - i[0], p = i[3] - i[1]), e.rotate((Math.atan2(-p, -f) + n) % n), e.moveTo(0, 0), e.lineTo(-h, C / 2), e.lineTo(-h, -C / 2), e.closePath(), e.restore(), this.__fillStroke(e));
  }
  __fillStroke(e) {
    var n = this.dashEnabled();
    n && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), n && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const e = super.getSelfRect(), n = this.pointerWidth() / 2;
    return {
      x: e.x - n,
      y: e.y - n,
      width: e.width + n * 2,
      height: e.height + n * 2
    };
  }
}
bs.Arrow = Pn;
Pn.prototype.className = "Arrow";
(0, b2._registerNode)(Pn);
As.Factory.addGetterSetter(Pn, "pointerLength", 10, (0, Q0.getNumberValidator)());
As.Factory.addGetterSetter(Pn, "pointerWidth", 10, (0, Q0.getNumberValidator)());
As.Factory.addGetterSetter(Pn, "pointerAtBeginning", !1);
As.Factory.addGetterSetter(Pn, "pointerAtEnding", !0);
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Fs.Circle = void 0;
const N2 = _e, A2 = at, F2 = ne, M2 = ye;
let vi = class extends A2.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
  setHeight(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
};
Fs.Circle = vi;
vi.prototype._centroid = !0;
vi.prototype.className = "Circle";
vi.prototype._attrsAffectingSize = ["radius"];
(0, M2._registerNode)(vi);
N2.Factory.addGetterSetter(vi, "radius", 0, (0, F2.getNumberValidator)());
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.Ellipse = void 0;
const ku = _e, O2 = at, J0 = ne, I2 = ye;
class Jr extends O2.Shape {
  _sceneFunc(e) {
    var n = this.radiusX(), i = this.radiusY();
    e.beginPath(), e.save(), n !== i && e.scale(1, i / n), e.arc(0, 0, n, 0, Math.PI * 2, !1), e.restore(), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(e) {
    this.radiusX(e / 2);
  }
  setHeight(e) {
    this.radiusY(e / 2);
  }
}
Ms.Ellipse = Jr;
Jr.prototype.className = "Ellipse";
Jr.prototype._centroid = !0;
Jr.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, I2._registerNode)(Jr);
ku.Factory.addComponentsGetterSetter(Jr, "radius", ["x", "y"]);
ku.Factory.addGetterSetter(Jr, "radiusX", 0, (0, J0.getNumberValidator)());
ku.Factory.addGetterSetter(Jr, "radiusY", 0, (0, J0.getNumberValidator)());
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.Image = void 0;
const zl = Xe, kn = _e, L2 = at, D2 = ye, Zi = ne;
class Qt extends L2.Shape {
  constructor(e) {
    super(e), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const e = this.image();
    e && e.complete || e && e.readyState === 4 || e && e.addEventListener && e.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(e) {
    const n = this.getWidth(), i = this.getHeight(), o = this.cornerRadius(), u = this.attrs.image;
    let h;
    if (u) {
      const d = this.attrs.cropWidth, f = this.attrs.cropHeight;
      d && f ? h = [
        u,
        this.cropX(),
        this.cropY(),
        d,
        f,
        0,
        0,
        n,
        i
      ] : h = [u, 0, 0, n, i];
    }
    (this.hasFill() || this.hasStroke() || o) && (e.beginPath(), o ? zl.Util.drawRoundedRectPath(e, n, i, o) : e.rect(0, 0, n, i), e.closePath(), e.fillStrokeShape(this)), u && (o && e.clip(), e.drawImage.apply(e, h));
  }
  _hitFunc(e) {
    var n = this.width(), i = this.height(), o = this.cornerRadius();
    e.beginPath(), o ? zl.Util.drawRoundedRectPath(e, n, i, o) : e.rect(0, 0, n, i), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    var e, n;
    return (e = this.attrs.width) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.width;
  }
  getHeight() {
    var e, n;
    return (e = this.attrs.height) !== null && e !== void 0 ? e : (n = this.image()) === null || n === void 0 ? void 0 : n.height;
  }
  static fromURL(e, n, i = null) {
    var o = zl.Util.createImageElement();
    o.onload = function() {
      var u = new Qt({
        image: o
      });
      n(u);
    }, o.onerror = i, o.crossOrigin = "Anonymous", o.src = e;
  }
}
Os.Image = Qt;
Qt.prototype.className = "Image";
(0, D2._registerNode)(Qt);
kn.Factory.addGetterSetter(Qt, "cornerRadius", 0, (0, Zi.getNumberOrArrayOfNumbersValidator)(4));
kn.Factory.addGetterSetter(Qt, "image");
kn.Factory.addComponentsGetterSetter(Qt, "crop", ["x", "y", "width", "height"]);
kn.Factory.addGetterSetter(Qt, "cropX", 0, (0, Zi.getNumberValidator)());
kn.Factory.addGetterSetter(Qt, "cropY", 0, (0, Zi.getNumberValidator)());
kn.Factory.addGetterSetter(Qt, "cropWidth", 0, (0, Zi.getNumberValidator)());
kn.Factory.addGetterSetter(Qt, "cropHeight", 0, (0, Zi.getNumberValidator)());
var ni = {};
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.Tag = ni.Label = void 0;
const Is = _e, G2 = at, U2 = fi, Eu = ne, Z0 = ye;
var ed = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], z2 = "Change.konva", B2 = "none", ou = "up", lu = "right", uu = "down", hu = "left", V2 = ed.length;
class Tu extends U2.Group {
  constructor(e) {
    super(e), this.on("add.konva", function(n) {
      this._addListeners(n.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(e) {
    var n = this, i, o = function() {
      n._sync();
    };
    for (i = 0; i < V2; i++)
      e.on(ed[i] + z2, o);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var e = this.getText(), n = this.getTag(), i, o, u, h, d, f, p;
    if (e && n) {
      switch (i = e.width(), o = e.height(), u = n.pointerDirection(), h = n.pointerWidth(), p = n.pointerHeight(), d = 0, f = 0, u) {
        case ou:
          d = i / 2, f = -1 * p;
          break;
        case lu:
          d = i + h, f = o / 2;
          break;
        case uu:
          d = i / 2, f = o + p;
          break;
        case hu:
          d = -1 * h, f = o / 2;
          break;
      }
      n.setAttrs({
        x: -1 * d,
        y: -1 * f,
        width: i,
        height: o
      }), e.setAttrs({
        x: -1 * d,
        y: -1 * f
      });
    }
  }
}
ni.Label = Tu;
Tu.prototype.className = "Label";
(0, Z0._registerNode)(Tu);
class En extends G2.Shape {
  _sceneFunc(e) {
    var n = this.width(), i = this.height(), o = this.pointerDirection(), u = this.pointerWidth(), h = this.pointerHeight(), d = this.cornerRadius();
    let f = 0, p = 0, y = 0, C = 0;
    typeof d == "number" ? f = p = y = C = Math.min(d, n / 2, i / 2) : (f = Math.min(d[0] || 0, n / 2, i / 2), p = Math.min(d[1] || 0, n / 2, i / 2), C = Math.min(d[2] || 0, n / 2, i / 2), y = Math.min(d[3] || 0, n / 2, i / 2)), e.beginPath(), e.moveTo(f, 0), o === ou && (e.lineTo((n - u) / 2, 0), e.lineTo(n / 2, -1 * h), e.lineTo((n + u) / 2, 0)), e.lineTo(n - p, 0), e.arc(n - p, p, p, Math.PI * 3 / 2, 0, !1), o === lu && (e.lineTo(n, (i - h) / 2), e.lineTo(n + u, i / 2), e.lineTo(n, (i + h) / 2)), e.lineTo(n, i - C), e.arc(n - C, i - C, C, 0, Math.PI / 2, !1), o === uu && (e.lineTo((n + u) / 2, i), e.lineTo(n / 2, i + h), e.lineTo((n - u) / 2, i)), e.lineTo(y, i), e.arc(y, i - y, y, Math.PI / 2, Math.PI, !1), o === hu && (e.lineTo(0, (i + h) / 2), e.lineTo(-1 * u, i / 2), e.lineTo(0, (i - h) / 2)), e.lineTo(0, f), e.arc(f, f, f, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    var e = 0, n = 0, i = this.pointerWidth(), o = this.pointerHeight(), u = this.pointerDirection(), h = this.width(), d = this.height();
    return u === ou ? (n -= o, d += o) : u === uu ? d += o : u === hu ? (e -= i * 1.5, h += i) : u === lu && (h += i * 1.5), {
      x: e,
      y: n,
      width: h,
      height: d
    };
  }
}
ni.Tag = En;
En.prototype.className = "Tag";
(0, Z0._registerNode)(En);
Is.Factory.addGetterSetter(En, "pointerDirection", B2);
Is.Factory.addGetterSetter(En, "pointerWidth", 0, (0, Eu.getNumberValidator)());
Is.Factory.addGetterSetter(En, "pointerHeight", 0, (0, Eu.getNumberValidator)());
Is.Factory.addGetterSetter(En, "cornerRadius", 0, (0, Eu.getNumberOrArrayOfNumbersValidator)(4));
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.Rect = void 0;
const H2 = _e, j2 = at, W2 = ye, Y2 = Xe, K2 = ne;
class Ls extends j2.Shape {
  _sceneFunc(e) {
    var n = this.cornerRadius(), i = this.width(), o = this.height();
    e.beginPath(), n ? Y2.Util.drawRoundedRectPath(e, i, o, n) : e.rect(0, 0, i, o), e.closePath(), e.fillStrokeShape(this);
  }
}
ea.Rect = Ls;
Ls.prototype.className = "Rect";
(0, W2._registerNode)(Ls);
H2.Factory.addGetterSetter(Ls, "cornerRadius", 0, (0, K2.getNumberOrArrayOfNumbersValidator)(4));
var Ds = {};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.RegularPolygon = void 0;
const td = _e, X2 = at, rd = ne, $2 = ye;
class Tn extends X2.Shape {
  _sceneFunc(e) {
    const n = this._getPoints();
    e.beginPath(), e.moveTo(n[0].x, n[0].y);
    for (var i = 1; i < n.length; i++)
      e.lineTo(n[i].x, n[i].y);
    e.closePath(), e.fillStrokeShape(this);
  }
  _getPoints() {
    const e = this.attrs.sides, n = this.attrs.radius || 0, i = [];
    for (var o = 0; o < e; o++)
      i.push({
        x: n * Math.sin(o * 2 * Math.PI / e),
        y: -1 * n * Math.cos(o * 2 * Math.PI / e)
      });
    return i;
  }
  getSelfRect() {
    const e = this._getPoints();
    var n = e[0].x, i = e[0].y, o = e[0].x, u = e[0].y;
    return e.forEach((h) => {
      n = Math.min(n, h.x), i = Math.max(i, h.x), o = Math.min(o, h.y), u = Math.max(u, h.y);
    }), {
      x: n,
      y: o,
      width: i - n,
      height: u - o
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Ds.RegularPolygon = Tn;
Tn.prototype.className = "RegularPolygon";
Tn.prototype._centroid = !0;
Tn.prototype._attrsAffectingSize = ["radius"];
(0, $2._registerNode)(Tn);
td.Factory.addGetterSetter(Tn, "radius", 0, (0, rd.getNumberValidator)());
td.Factory.addGetterSetter(Tn, "sides", 0, (0, rd.getNumberValidator)());
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.Ring = void 0;
const nd = _e, q2 = at, id = ne, Q2 = ye;
var Hc = Math.PI * 2;
class Rn extends q2.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, Hc, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), Hc, 0, !0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Gs.Ring = Rn;
Rn.prototype.className = "Ring";
Rn.prototype._centroid = !0;
Rn.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Q2._registerNode)(Rn);
nd.Factory.addGetterSetter(Rn, "innerRadius", 0, (0, id.getNumberValidator)());
nd.Factory.addGetterSetter(Rn, "outerRadius", 0, (0, id.getNumberValidator)());
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.Sprite = void 0;
const bn = _e, J2 = at, Z2 = gi, ad = ne, eg = ye;
class Cr extends J2.Shape {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new Z2.Animation(() => {
      var n = this._updated;
      return this._updated = !1, n;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(e) {
    var n = this.animation(), i = this.frameIndex(), o = i * 4, u = this.animations()[n], h = this.frameOffsets(), d = u[o + 0], f = u[o + 1], p = u[o + 2], y = u[o + 3], C = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, p, y), e.closePath(), e.fillStrokeShape(this)), C)
      if (h) {
        var x = h[n], _ = i * 2;
        e.drawImage(C, d, f, p, y, x[_ + 0], x[_ + 1], p, y);
      } else
        e.drawImage(C, d, f, p, y, 0, 0, p, y);
  }
  _hitFunc(e) {
    var n = this.animation(), i = this.frameIndex(), o = i * 4, u = this.animations()[n], h = this.frameOffsets(), d = u[o + 2], f = u[o + 3];
    if (e.beginPath(), h) {
      var p = h[n], y = i * 2;
      e.rect(p[y + 0], p[y + 1], d, f);
    } else
      e.rect(0, 0, d, f);
    e.closePath(), e.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var e = this;
    this.interval = setInterval(function() {
      e._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var e = this.getLayer();
      this.anim.setLayers(e), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var e = this.frameIndex(), n = this.animation(), i = this.animations(), o = i[n], u = o.length / 4;
    e < u - 1 ? this.frameIndex(e + 1) : this.frameIndex(0);
  }
}
Us.Sprite = Cr;
Cr.prototype.className = "Sprite";
(0, eg._registerNode)(Cr);
bn.Factory.addGetterSetter(Cr, "animation");
bn.Factory.addGetterSetter(Cr, "animations");
bn.Factory.addGetterSetter(Cr, "frameOffsets");
bn.Factory.addGetterSetter(Cr, "image");
bn.Factory.addGetterSetter(Cr, "frameIndex", 0, (0, ad.getNumberValidator)());
bn.Factory.addGetterSetter(Cr, "frameRate", 17, (0, ad.getNumberValidator)());
bn.Factory.backCompat(Cr, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.Star = void 0;
const Ru = _e, tg = at, bu = ne, rg = ye;
class Zr extends tg.Shape {
  _sceneFunc(e) {
    var n = this.innerRadius(), i = this.outerRadius(), o = this.numPoints();
    e.beginPath(), e.moveTo(0, 0 - i);
    for (var u = 1; u < o * 2; u++) {
      var h = u % 2 === 0 ? i : n, d = h * Math.sin(u * Math.PI / o), f = -1 * h * Math.cos(u * Math.PI / o);
      e.lineTo(d, f);
    }
    e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
zs.Star = Zr;
Zr.prototype.className = "Star";
Zr.prototype._centroid = !0;
Zr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, rg._registerNode)(Zr);
Ru.Factory.addGetterSetter(Zr, "numPoints", 5, (0, bu.getNumberValidator)());
Ru.Factory.addGetterSetter(Zr, "innerRadius", 0, (0, bu.getNumberValidator)());
Ru.Factory.addGetterSetter(Zr, "outerRadius", 0, (0, bu.getNumberValidator)());
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.Text = Cn.stringToArray = void 0;
const cu = Xe, kt = _e, ng = at, en = ne, ig = ye;
function sd(a) {
  return Array.from(a);
}
Cn.stringToArray = sd;
var Zn = "auto", ag = "center", Ui = "justify", sg = "Change.konva", og = "2d", jc = "-", od = "left", lg = "text", ug = "Text", hg = "top", cg = "bottom", Wc = "middle", ld = "normal", dg = "px ", Za = " ", fg = "right", gg = "word", pg = "char", Yc = "none", Bl = "…", ud = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], vg = ud.length;
function mg(a) {
  return a.split(",").map((e) => {
    e = e.trim();
    const n = e.indexOf(" ") >= 0, i = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return n && !i && (e = `"${e}"`), e;
  }).join(", ");
}
var es;
function Vl() {
  return es || (es = cu.Util.createCanvasElement().getContext(og), es);
}
function yg(a) {
  a.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _g(a) {
  a.setAttr("miterLimit", 2), a.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function Sg(a) {
  return a = a || {}, !a.fillLinearGradientColorStops && !a.fillRadialGradientColorStops && !a.fillPatternImage && (a.fill = a.fill || "black"), a;
}
let Ze = class extends ng.Shape {
  constructor(e) {
    super(Sg(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (var n = 0; n < vg; n++)
      this.on(ud[n] + sg, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    var n = this.textArr, i = n.length;
    if (this.text()) {
      var o = this.padding(), u = this.fontSize(), h = this.lineHeight() * u, d = this.verticalAlign(), f = 0, p = this.align(), y = this.getWidth(), C = this.letterSpacing(), x = this.fill(), _ = this.textDecoration(), m = _.indexOf("underline") !== -1, P = _.indexOf("line-through") !== -1, E, R = 0, R = h / 2, N = 0, v = 0;
      for (e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", Wc), e.setAttr("textAlign", od), d === Wc ? f = (this.getHeight() - i * h - o * 2) / 2 : d === cg && (f = this.getHeight() - i * h - o * 2), e.translate(o, f + o), E = 0; E < i; E++) {
        var N = 0, v = 0, w = n[E], k = w.text, b = w.width, I = w.lastInParagraph, T, z, O;
        if (e.save(), p === fg ? N += y - b - o * 2 : p === ag && (N += (y - b - o * 2) / 2), m) {
          e.save(), e.beginPath(), e.moveTo(N, R + v + Math.round(u / 2)), T = k.split(" ").length - 1, z = T === 0, O = p === Ui && !I ? y - o * 2 : b, e.lineTo(N + Math.round(O), R + v + Math.round(u / 2)), e.lineWidth = u / 15;
          const ie = this._getLinearGradient();
          e.strokeStyle = ie || x, e.stroke(), e.restore();
        }
        if (P) {
          e.save(), e.beginPath(), e.moveTo(N, R + v), T = k.split(" ").length - 1, z = T === 0, O = p === Ui && I && !z ? y - o * 2 : b, e.lineTo(N + Math.round(O), R + v), e.lineWidth = u / 15;
          const ie = this._getLinearGradient();
          e.strokeStyle = ie || x, e.stroke(), e.restore();
        }
        if (C !== 0 || p === Ui) {
          T = k.split(" ").length - 1;
          for (var G = sd(k), Y = 0; Y < G.length; Y++) {
            var H = G[Y];
            H === " " && !I && p === Ui && (N += (y - o * 2 - b) / T), this._partialTextX = N, this._partialTextY = R + v, this._partialText = H, e.fillStrokeShape(this), N += this.measureSize(H).width + C;
          }
        } else
          this._partialTextX = N, this._partialTextY = R + v, this._partialText = k, e.fillStrokeShape(this);
        e.restore(), i > 1 && (R += h);
      }
    }
  }
  _hitFunc(e) {
    var n = this.getWidth(), i = this.getHeight();
    e.beginPath(), e.rect(0, 0, n, i), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    var n = cu.Util._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(lg, n), this;
  }
  getWidth() {
    var e = this.attrs.width === Zn || this.attrs.width === void 0;
    return e ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var e = this.attrs.height === Zn || this.attrs.height === void 0;
    return e ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return cu.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var n = Vl(), i = this.fontSize(), o;
    return n.save(), n.font = this._getContextFont(), o = n.measureText(e), n.restore(), {
      width: o.width,
      height: i
    };
  }
  _getContextFont() {
    return this.fontStyle() + Za + this.fontVariant() + Za + (this.fontSize() + dg) + mg(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Ui && (e = e.trim());
    var i = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: i,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    var n = this.letterSpacing(), i = e.length;
    return Vl().measureText(e).width + (i ? n * (i - 1) : 0);
  }
  _setTextData() {
    var e = this.text().split(`
`), n = +this.fontSize(), i = 0, o = this.lineHeight() * n, u = this.attrs.width, h = this.attrs.height, d = u !== Zn && u !== void 0, f = h !== Zn && h !== void 0, p = this.padding(), y = u - p * 2, C = h - p * 2, x = 0, _ = this.wrap(), m = _ !== Yc, P = _ !== pg && m, E = this.ellipsis();
    this.textArr = [], Vl().font = this._getContextFont();
    for (var R = E ? this._getTextWidth(Bl) : 0, N = 0, v = e.length; N < v; ++N) {
      var w = e[N], k = this._getTextWidth(w);
      if (d && k > y)
        for (; w.length > 0; ) {
          for (var b = 0, I = w.length, T = "", z = 0; b < I; ) {
            var O = b + I >>> 1, G = w.slice(0, O + 1), Y = this._getTextWidth(G) + R;
            Y <= y ? (b = O + 1, T = G, z = Y) : I = O;
          }
          if (T) {
            if (P) {
              var H, q = w[T.length], ae = q === Za || q === jc;
              ae && z <= y ? H = T.length : H = Math.max(T.lastIndexOf(Za), T.lastIndexOf(jc)) + 1, H > 0 && (b = H, T = T.slice(0, b), z = this._getTextWidth(T));
            }
            T = T.trimRight(), this._addTextLine(T), i = Math.max(i, z), x += o;
            var ie = this._shouldHandleEllipsis(x);
            if (ie) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (w = w.slice(b), w = w.trimLeft(), w.length > 0 && (k = this._getTextWidth(w), k <= y)) {
              this._addTextLine(w), x += o, i = Math.max(i, k);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(w), x += o, i = Math.max(i, k), this._shouldHandleEllipsis(x) && N < v - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), f && x + o > C)
        break;
    }
    this.textHeight = n, this.textWidth = i;
  }
  _shouldHandleEllipsis(e) {
    var n = +this.fontSize(), i = this.lineHeight() * n, o = this.attrs.height, u = o !== Zn && o !== void 0, h = this.padding(), d = o - h * 2, f = this.wrap(), p = f !== Yc;
    return !p || u && e + i > d;
  }
  _tryToAddEllipsisToLastLine() {
    var e = this.attrs.width, n = e !== Zn && e !== void 0, i = this.padding(), o = e - i * 2, u = this.ellipsis(), h = this.textArr[this.textArr.length - 1];
    if (!(!h || !u)) {
      if (n) {
        var d = this._getTextWidth(h.text + Bl) < o;
        d || (h.text = h.text.slice(0, h.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(h.text + Bl);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
};
Cn.Text = Ze;
Ze.prototype._fillFunc = yg;
Ze.prototype._strokeFunc = _g;
Ze.prototype.className = ug;
Ze.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, ig._registerNode)(Ze);
kt.Factory.overWriteSetter(Ze, "width", (0, en.getNumberOrAutoValidator)());
kt.Factory.overWriteSetter(Ze, "height", (0, en.getNumberOrAutoValidator)());
kt.Factory.addGetterSetter(Ze, "fontFamily", "Arial");
kt.Factory.addGetterSetter(Ze, "fontSize", 12, (0, en.getNumberValidator)());
kt.Factory.addGetterSetter(Ze, "fontStyle", ld);
kt.Factory.addGetterSetter(Ze, "fontVariant", ld);
kt.Factory.addGetterSetter(Ze, "padding", 0, (0, en.getNumberValidator)());
kt.Factory.addGetterSetter(Ze, "align", od);
kt.Factory.addGetterSetter(Ze, "verticalAlign", hg);
kt.Factory.addGetterSetter(Ze, "lineHeight", 1, (0, en.getNumberValidator)());
kt.Factory.addGetterSetter(Ze, "wrap", gg);
kt.Factory.addGetterSetter(Ze, "ellipsis", !1, (0, en.getBooleanValidator)());
kt.Factory.addGetterSetter(Ze, "letterSpacing", 0, (0, en.getNumberValidator)());
kt.Factory.addGetterSetter(Ze, "text", "", (0, en.getStringValidator)());
kt.Factory.addGetterSetter(Ze, "textDecoration", "");
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.TextPath = void 0;
const Hl = Xe, ur = _e, Cg = at, zi = pi, jl = Cn, hd = ne, wg = ye;
var xg = "", cd = "normal";
function dd(a) {
  a.fillText(this.partialText, 0, 0);
}
function fd(a) {
  a.strokeText(this.partialText, 0, 0);
}
class st extends Cg.Shape {
  constructor(e) {
    super(e), this.dummyCanvas = Hl.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return zi.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(e) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return e - 1 > n ? null : zi.Path.getPointAtLengthOfDataArray(e, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = zi.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(e) {
    e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", this.textBaseline()), e.setAttr("textAlign", "left"), e.save();
    var n = this.textDecoration(), i = this.fill(), o = this.fontSize(), u = this.glyphInfo;
    n === "underline" && e.beginPath();
    for (var h = 0; h < u.length; h++) {
      e.save();
      var d = u[h].p0;
      e.translate(d.x, d.y), e.rotate(u[h].rotation), this.partialText = u[h].text, e.fillStrokeShape(this), n === "underline" && (h === 0 && e.moveTo(0, o / 2 + 1), e.lineTo(o, o / 2 + 1)), e.restore();
    }
    n === "underline" && (e.strokeStyle = i, e.lineWidth = o / 20, e.stroke()), e.restore();
  }
  _hitFunc(e) {
    e.beginPath();
    var n = this.glyphInfo;
    if (n.length >= 1) {
      var i = n[0].p0;
      e.moveTo(i.x, i.y);
    }
    for (var o = 0; o < n.length; o++) {
      var u = n[o].p1;
      e.lineTo(u.x, u.y);
    }
    e.setAttr("lineWidth", this.fontSize()), e.setAttr("strokeStyle", this.colorKey), e.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Hl.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return jl.Text.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return jl.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(e) {
    var n = this.dummyCanvas, i = n.getContext("2d");
    i.save(), i.font = this._getContextFont();
    var o = i.measureText(e);
    return i.restore(), {
      width: o.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: e, height: n } = this._getTextSize(this.attrs.text);
    if (this.textWidth = e, this.textHeight = n, this.glyphInfo = [], !this.attrs.data)
      return null;
    const i = this.letterSpacing(), o = this.align(), u = this.kerningFunc(), h = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
    let d = 0;
    o === "center" && (d = Math.max(0, this.pathLength / 2 - h / 2)), o === "right" && (d = Math.max(0, this.pathLength - h));
    const f = (0, jl.stringToArray)(this.text());
    let p = d;
    for (var y = 0; y < f.length; y++) {
      const C = this._getPointAtLength(p);
      if (!C)
        return;
      let x = this._getTextSize(f[y]).width + i;
      if (f[y] === " " && o === "justify") {
        const N = this.text().split(" ").length - 1;
        x += (this.pathLength - h) / N;
      }
      const _ = this._getPointAtLength(p + x);
      if (!_)
        return;
      const m = zi.Path.getLineLength(C.x, C.y, _.x, _.y);
      let P = 0;
      if (u)
        try {
          P = u(f[y - 1], f[y]) * this.fontSize();
        } catch {
          P = 0;
        }
      C.x += P, _.x += P, this.textWidth += P;
      const E = zi.Path.getPointOnLine(P + m / 2, C.x, C.y, _.x, _.y), R = Math.atan2(_.y - C.y, _.x - C.x);
      this.glyphInfo.push({
        transposeX: E.x,
        transposeY: E.y,
        text: f[y],
        rotation: R,
        p0: C,
        p1: _
      }), p += x;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var e = [];
    this.glyphInfo.forEach(function(y) {
      e.push(y.p0.x), e.push(y.p0.y), e.push(y.p1.x), e.push(y.p1.y);
    });
    for (var n = e[0] || 0, i = e[0] || 0, o = e[1] || 0, u = e[1] || 0, h, d, f = 0; f < e.length / 2; f++)
      h = e[f * 2], d = e[f * 2 + 1], n = Math.min(n, h), i = Math.max(i, h), o = Math.min(o, d), u = Math.max(u, d);
    var p = this.fontSize();
    return {
      x: n - p / 2,
      y: o - p / 2,
      width: i - n + p,
      height: u - o + p
    };
  }
  destroy() {
    return Hl.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Bs.TextPath = st;
st.prototype._fillFunc = dd;
st.prototype._strokeFunc = fd;
st.prototype._fillFuncHit = dd;
st.prototype._strokeFuncHit = fd;
st.prototype.className = "TextPath";
st.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, wg._registerNode)(st);
ur.Factory.addGetterSetter(st, "data");
ur.Factory.addGetterSetter(st, "fontFamily", "Arial");
ur.Factory.addGetterSetter(st, "fontSize", 12, (0, hd.getNumberValidator)());
ur.Factory.addGetterSetter(st, "fontStyle", cd);
ur.Factory.addGetterSetter(st, "align", "left");
ur.Factory.addGetterSetter(st, "letterSpacing", 0, (0, hd.getNumberValidator)());
ur.Factory.addGetterSetter(st, "textBaseline", "middle");
ur.Factory.addGetterSetter(st, "fontVariant", cd);
ur.Factory.addGetterSetter(st, "text", xg);
ur.Factory.addGetterSetter(st, "textDecoration", null);
ur.Factory.addGetterSetter(st, "kerningFunc", null);
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.Transformer = void 0;
const Me = Xe, Fe = _e, Kc = We, Pg = at, kg = ea, Xc = fi, sr = ye, tn = ne, Eg = ye;
var gd = "tr-konva", Tg = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((a) => a + `.${gd}`).join(" "), $c = "nodesRect", Rg = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], bg = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const Ng = "ontouchstart" in sr.Konva._global;
function Ag(a, e) {
  if (a === "rotater")
    return "crosshair";
  e += Me.Util.degToRad(bg[a] || 0);
  var n = (Me.Util.radToDeg(e) % 360 + 360) % 360;
  return Me.Util._inRange(n, 315 + 22.5, 360) || Me.Util._inRange(n, 0, 22.5) ? "ns-resize" : Me.Util._inRange(n, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Me.Util._inRange(n, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Me.Util._inRange(n, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Me.Util._inRange(n, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Me.Util._inRange(n, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Me.Util._inRange(n, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Me.Util._inRange(n, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Me.Util.error("Transformer has unknown angle for cursor detection: " + n), "pointer");
}
var fs = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], qc = 1e8;
function Fg(a) {
  return {
    x: a.x + a.width / 2 * Math.cos(a.rotation) + a.height / 2 * Math.sin(-a.rotation),
    y: a.y + a.height / 2 * Math.cos(a.rotation) + a.width / 2 * Math.sin(a.rotation)
  };
}
function pd(a, e, n) {
  const i = n.x + (a.x - n.x) * Math.cos(e) - (a.y - n.y) * Math.sin(e), o = n.y + (a.x - n.x) * Math.sin(e) + (a.y - n.y) * Math.cos(e);
  return Object.assign(Object.assign({}, a), {
    rotation: a.rotation + e,
    x: i,
    y: o
  });
}
function Mg(a, e) {
  const n = Fg(a);
  return pd(a, e, n);
}
function Og(a, e, n) {
  let i = e;
  for (let o = 0; o < a.length; o++) {
    const u = sr.Konva.getAngle(a[o]), h = Math.abs(u - e) % (Math.PI * 2);
    Math.min(h, Math.PI * 2 - h) < n && (i = u);
  }
  return i;
}
class Te extends Xc.Group {
  constructor(e) {
    super(e), this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(Tg, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return Me.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return gd + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = e.filter((o) => o.isAncestorOf(this) ? (Me.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    this._nodes = e = n, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((o) => {
      const u = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, h = o._attrsAffectingSize.map((d) => d + "Change." + this._getEventNamespace()).join(" ");
      o.on(h, u), o.on(Rg.map((d) => d + `.${this._getEventNamespace()}`).join(" "), u), o.on(`absoluteTransformChange.${this._getEventNamespace()}`, u), this._proxyDrag(o);
    }), this._resetTransformCache();
    var i = !!this.findOne(".top-left");
    return i && this.update(), this;
  }
  _proxyDrag(e) {
    let n;
    e.on(`dragstart.${this._getEventNamespace()}`, (i) => {
      n = e.getAbsolutePosition(), !this.isDragging() && e !== this.findOne(".back") && this.startDrag(i, !1);
    }), e.on(`dragmove.${this._getEventNamespace()}`, (i) => {
      if (!n)
        return;
      const o = e.getAbsolutePosition(), u = o.x - n.x, h = o.y - n.y;
      this.nodes().forEach((d) => {
        if (d === e || d.isDragging())
          return;
        const f = d.getAbsolutePosition();
        d.setAbsolutePosition({
          x: f.x + u,
          y: f.y + h
        }), d.startDrag(i);
      }), n = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((e) => {
      e.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache($c), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache($c, this.__getNodeRect);
  }
  __getNodeShape(e, n = this.rotation(), i) {
    var o = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), u = e.getAbsoluteScale(i), h = e.getAbsolutePosition(i), d = o.x * u.x - e.offsetX() * u.x, f = o.y * u.y - e.offsetY() * u.y;
    const p = (sr.Konva.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), y = {
      x: h.x + d * Math.cos(p) + f * Math.sin(-p),
      y: h.y + f * Math.cos(p) + d * Math.sin(p),
      width: o.width * u.x,
      height: o.height * u.y,
      rotation: p
    };
    return pd(y, -sr.Konva.getAngle(n), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var e = this.getNode();
    if (!e)
      return {
        x: -qc,
        y: -qc,
        width: 0,
        height: 0,
        rotation: 0
      };
    const n = [];
    this.nodes().map((p) => {
      const y = p.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var C = [
        { x: y.x, y: y.y },
        { x: y.x + y.width, y: y.y },
        { x: y.x + y.width, y: y.y + y.height },
        { x: y.x, y: y.y + y.height }
      ], x = p.getAbsoluteTransform();
      C.forEach(function(_) {
        var m = x.point(_);
        n.push(m);
      });
    });
    const i = new Me.Transform();
    i.rotate(-sr.Konva.getAngle(this.rotation()));
    var o, u, h, d;
    n.forEach(function(p) {
      var y = i.point(p);
      o === void 0 && (o = h = y.x, u = d = y.y), o = Math.min(o, y.x), u = Math.min(u, y.y), h = Math.max(h, y.x), d = Math.max(d, y.y);
    }), i.invert();
    const f = i.point({ x: o, y: u });
    return {
      x: f.x,
      y: f.y,
      width: h - o,
      height: d - u,
      rotation: sr.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), fs.forEach((function(e) {
      this._createAnchor(e);
    }).bind(this)), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    var n = new kg.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: Ng ? 10 : "auto"
    }), i = this;
    n.on("mousedown touchstart", function(o) {
      i._handleMouseDown(o);
    }), n.on("dragstart", (o) => {
      n.stopDrag(), o.cancelBubble = !0;
    }), n.on("dragend", (o) => {
      o.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      var o = sr.Konva.getAngle(this.rotation()), u = Ag(e, o);
      n.getStage().content && (n.getStage().content.style.cursor = u), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    var e = new Pg.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n) {
        var i = this.getParent(), o = i.padding();
        n.beginPath(), n.rect(-o, -o, this.width() + o * 2, this.height() + o * 2), n.moveTo(this.width() / 2, -o), i.rotateEnabled() && n.lineTo(this.width() / 2, -i.rotateAnchorOffset() * Me.Util._sign(this.height()) - o), n.fillStrokeShape(this);
      },
      hitFunc: (n, i) => {
        if (this.shouldOverdrawWholeArea()) {
          var o = this.padding();
          n.beginPath(), n.rect(-o, -o, i.width() + o * 2, i.height() + o * 2), n.fillStrokeShape(i);
        }
      }
    });
    this.add(e), this._proxyDrag(e), e.on("dragstart", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragmove", (n) => {
      n.cancelBubble = !0;
    }), e.on("dragend", (n) => {
      n.cancelBubble = !0;
    }), this.on("dragmove", (n) => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    this._movingAnchorName = e.target.name().split(" ")[0];
    var n = this._getNodeRect(), i = n.width, o = n.height, u = Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2));
    this.sin = Math.abs(o / u), this.cos = Math.abs(i / u), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var h = e.target.getAbsolutePosition(), d = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: d.x - h.x,
      y: d.y - h.y
    }, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((f) => {
      f._fire("transformstart", { evt: e.evt, target: f });
    });
  }
  _handleMouseMove(e) {
    var n, i, o, u = this.findOne("." + this._movingAnchorName), h = u.getStage();
    h.setPointersPositions(e);
    const d = h.getPointerPosition();
    let f = {
      x: d.x - this._anchorDragOffset.x,
      y: d.y - this._anchorDragOffset.y
    };
    const p = u.getAbsolutePosition();
    this.anchorDragBoundFunc() && (f = this.anchorDragBoundFunc()(p, f, e)), u.setAbsolutePosition(f);
    const y = u.getAbsolutePosition();
    if (!(p.x === y.x && p.y === y.y)) {
      if (this._movingAnchorName === "rotater") {
        var C = this._getNodeRect();
        n = u.x() - C.width / 2, i = -u.y() + C.height / 2;
        let H = Math.atan2(-i, n) + Math.PI / 2;
        C.height < 0 && (H -= Math.PI);
        var x = sr.Konva.getAngle(this.rotation());
        const q = x + H, ae = sr.Konva.getAngle(this.rotationSnapTolerance()), oe = Og(this.rotationSnaps(), q, ae) - C.rotation, B = Mg(C, oe);
        this._fitNodesInto(B, e);
        return;
      }
      var _ = this.shiftBehavior(), m;
      _ === "inverted" ? m = this.keepRatio() && !e.shiftKey : _ === "none" ? m = this.keepRatio() : m = this.keepRatio() || e.shiftKey;
      var v = this.centeredScaling() || e.altKey;
      if (this._movingAnchorName === "top-left") {
        if (m) {
          var P = v ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          o = Math.sqrt(Math.pow(P.x - u.x(), 2) + Math.pow(P.y - u.y(), 2));
          var E = this.findOne(".top-left").x() > P.x ? -1 : 1, R = this.findOne(".top-left").y() > P.y ? -1 : 1;
          n = o * this.cos * E, i = o * this.sin * R, this.findOne(".top-left").x(P.x - n), this.findOne(".top-left").y(P.y - i);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(u.y());
      else if (this._movingAnchorName === "top-right") {
        if (m) {
          var P = v ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          o = Math.sqrt(Math.pow(u.x() - P.x, 2) + Math.pow(P.y - u.y(), 2));
          var E = this.findOne(".top-right").x() < P.x ? -1 : 1, R = this.findOne(".top-right").y() > P.y ? -1 : 1;
          n = o * this.cos * E, i = o * this.sin * R, this.findOne(".top-right").x(P.x + n), this.findOne(".top-right").y(P.y - i);
        }
        var N = u.position();
        this.findOne(".top-left").y(N.y), this.findOne(".bottom-right").x(N.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(u.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(u.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (m) {
          var P = v ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          o = Math.sqrt(Math.pow(P.x - u.x(), 2) + Math.pow(u.y() - P.y, 2));
          var E = P.x < u.x() ? -1 : 1, R = u.y() < P.y ? -1 : 1;
          n = o * this.cos * E, i = o * this.sin * R, u.x(P.x - n), u.y(P.y + i);
        }
        N = u.position(), this.findOne(".top-left").x(N.x), this.findOne(".bottom-right").y(N.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(u.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (m) {
          var P = v ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          o = Math.sqrt(Math.pow(u.x() - P.x, 2) + Math.pow(u.y() - P.y, 2));
          var E = this.findOne(".bottom-right").x() < P.x ? -1 : 1, R = this.findOne(".bottom-right").y() < P.y ? -1 : 1;
          n = o * this.cos * E, i = o * this.sin * R, this.findOne(".bottom-right").x(P.x + n), this.findOne(".bottom-right").y(P.y + i);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var v = this.centeredScaling() || e.altKey;
      if (v) {
        var w = this.findOne(".top-left"), k = this.findOne(".bottom-right"), b = w.x(), I = w.y(), T = this.getWidth() - k.x(), z = this.getHeight() - k.y();
        k.move({
          x: -b,
          y: -I
        }), w.move({
          x: T,
          y: z
        });
      }
      var O = this.findOne(".top-left").getAbsolutePosition();
      n = O.x, i = O.y;
      var G = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), Y = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: n,
        y: i,
        width: G,
        height: Y,
        rotation: sr.Konva.getAngle(this.rotation())
      }, e);
    }
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var n = this.getNode();
      this._fire("transformend", { evt: e, target: n }), n && this._nodes.forEach((i) => {
        i._fire("transformend", { evt: e, target: i });
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, n) {
    var i = this._getNodeRect();
    const o = 1;
    if (Me.Util._inRange(e.width, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    if (Me.Util._inRange(e.height, -this.padding() * 2 - o, o)) {
      this.update();
      return;
    }
    const u = this.flipEnabled();
    var h = new Me.Transform();
    if (h.rotate(sr.Konva.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const C = h.point({
        x: -this.padding() * 2,
        y: 0
      });
      if (e.x += C.x, e.y += C.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= C.x, this._anchorDragOffset.y -= C.y, !u) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const C = h.point({
        x: this.padding() * 2,
        y: 0
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= C.x, this._anchorDragOffset.y -= C.y, e.width += this.padding() * 2, !u) {
        this.update();
        return;
      }
    }
    if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const C = h.point({
        x: 0,
        y: -this.padding() * 2
      });
      if (e.x += C.x, e.y += C.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= C.x, this._anchorDragOffset.y -= C.y, e.height += this.padding() * 2, !u) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const C = h.point({
        x: 0,
        y: this.padding() * 2
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= C.x, this._anchorDragOffset.y -= C.y, e.height += this.padding() * 2, !u) {
        this.update();
        return;
      }
    }
    if (this.boundBoxFunc()) {
      const C = this.boundBoxFunc()(i, e);
      C ? e = C : Me.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const d = 1e7, f = new Me.Transform();
    f.translate(i.x, i.y), f.rotate(i.rotation), f.scale(i.width / d, i.height / d);
    const p = new Me.Transform();
    p.translate(e.x, e.y), p.rotate(e.rotation), p.scale(e.width / d, e.height / d);
    const y = p.multiply(f.invert());
    this._nodes.forEach((C) => {
      var x;
      const _ = C.getParent().getAbsoluteTransform(), m = C.getTransform().copy();
      m.translate(C.offsetX(), C.offsetY());
      const P = new Me.Transform();
      P.multiply(_.copy().invert()).multiply(y).multiply(_).multiply(m);
      const E = P.decompose();
      C.setAttrs(E), this._fire("transform", { evt: n, target: C }), C._fire("transform", { evt: n, target: C }), (x = C.getLayer()) === null || x === void 0 || x.batchDraw();
    }), this.rotation(Me.Util._getRotation(e.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(e, n) {
    this.findOne(e).setAttrs(n);
  }
  update() {
    var e, n = this._getNodeRect();
    this.rotation(Me.Util._getRotation(n.rotation));
    var i = n.width, o = n.height, u = this.enabledAnchors(), h = this.resizeEnabled(), d = this.padding(), f = this.anchorSize();
    const p = this.find("._anchor");
    p.forEach((C) => {
      C.setAttrs({
        width: f,
        height: f,
        offsetX: f / 2,
        offsetY: f / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: f / 2 + d,
      offsetY: f / 2 + d,
      visible: h && u.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: i / 2,
      y: 0,
      offsetY: f / 2 + d,
      visible: h && u.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: i,
      y: 0,
      offsetX: f / 2 - d,
      offsetY: f / 2 + d,
      visible: h && u.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: o / 2,
      offsetX: f / 2 + d,
      visible: h && u.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: i,
      y: o / 2,
      offsetX: f / 2 - d,
      visible: h && u.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: o,
      offsetX: f / 2 + d,
      offsetY: f / 2 - d,
      visible: h && u.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: i / 2,
      y: o,
      offsetY: f / 2 - d,
      visible: h && u.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: i,
      y: o,
      offsetX: f / 2 - d,
      offsetY: f / 2 - d,
      visible: h && u.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: i / 2,
      y: -this.rotateAnchorOffset() * Me.Util._sign(o) - d,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: i,
      height: o,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const y = this.anchorStyleFunc();
    y && p.forEach((C) => {
      y(C);
    }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var e = this.findOne("." + this._movingAnchorName);
      e && e.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), Xc.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return Kc.Node.prototype.toObject.call(this);
  }
  clone(e) {
    var n = Kc.Node.prototype.clone.call(this, e);
    return n;
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
Vs.Transformer = Te;
function Ig(a) {
  return a instanceof Array || Me.Util.warn("enabledAnchors value should be an array"), a instanceof Array && a.forEach(function(e) {
    fs.indexOf(e) === -1 && Me.Util.warn("Unknown anchor name: " + e + ". Available names are: " + fs.join(", "));
  }), a || [];
}
Te.prototype.className = "Transformer";
(0, Eg._registerNode)(Te);
Fe.Factory.addGetterSetter(Te, "enabledAnchors", fs, Ig);
Fe.Factory.addGetterSetter(Te, "flipEnabled", !0, (0, tn.getBooleanValidator)());
Fe.Factory.addGetterSetter(Te, "resizeEnabled", !0);
Fe.Factory.addGetterSetter(Te, "anchorSize", 10, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "rotateEnabled", !0);
Fe.Factory.addGetterSetter(Te, "rotationSnaps", []);
Fe.Factory.addGetterSetter(Te, "rotateAnchorOffset", 50, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "rotationSnapTolerance", 5, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "borderEnabled", !0);
Fe.Factory.addGetterSetter(Te, "anchorStroke", "rgb(0, 161, 255)");
Fe.Factory.addGetterSetter(Te, "anchorStrokeWidth", 1, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "anchorFill", "white");
Fe.Factory.addGetterSetter(Te, "anchorCornerRadius", 0, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "borderStroke", "rgb(0, 161, 255)");
Fe.Factory.addGetterSetter(Te, "borderStrokeWidth", 1, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "borderDash");
Fe.Factory.addGetterSetter(Te, "keepRatio", !0);
Fe.Factory.addGetterSetter(Te, "shiftBehavior", "default");
Fe.Factory.addGetterSetter(Te, "centeredScaling", !1);
Fe.Factory.addGetterSetter(Te, "ignoreStroke", !1);
Fe.Factory.addGetterSetter(Te, "padding", 0, (0, tn.getNumberValidator)());
Fe.Factory.addGetterSetter(Te, "node");
Fe.Factory.addGetterSetter(Te, "nodes");
Fe.Factory.addGetterSetter(Te, "boundBoxFunc");
Fe.Factory.addGetterSetter(Te, "anchorDragBoundFunc");
Fe.Factory.addGetterSetter(Te, "anchorStyleFunc");
Fe.Factory.addGetterSetter(Te, "shouldOverdrawWholeArea", !1);
Fe.Factory.addGetterSetter(Te, "useSingleNodeRotation", !0);
Fe.Factory.backCompat(Te, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.Wedge = void 0;
const js = _e, Lg = at, Dg = ye, vd = ne, Gg = ye;
class Dr extends Lg.Shape {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, Dg.Konva.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Hs.Wedge = Dr;
Dr.prototype.className = "Wedge";
Dr.prototype._centroid = !0;
Dr.prototype._attrsAffectingSize = ["radius"];
(0, Gg._registerNode)(Dr);
js.Factory.addGetterSetter(Dr, "radius", 0, (0, vd.getNumberValidator)());
js.Factory.addGetterSetter(Dr, "angle", 0, (0, vd.getNumberValidator)());
js.Factory.addGetterSetter(Dr, "clockwise", !1);
js.Factory.backCompat(Dr, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.Blur = void 0;
const Qc = _e, Ug = We, zg = ne;
function Jc() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var Bg = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], Vg = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function Hg(a, e) {
  var n = a.data, i = a.width, o = a.height, u, h, d, f, p, y, C, x, _, m, P, E, R, N, v, w, k, b, I, T, z, O, G, Y, H = e + e + 1, q = i - 1, ae = o - 1, ie = e + 1, oe = ie * (ie + 1) / 2, B = new Jc(), X = null, V = B, K = null, $ = null, he = Bg[e], le = Vg[e];
  for (d = 1; d < H; d++)
    V = V.next = new Jc(), d === ie && (X = V);
  for (V.next = B, C = y = 0, h = 0; h < o; h++) {
    for (w = k = b = I = x = _ = m = P = 0, E = ie * (T = n[y]), R = ie * (z = n[y + 1]), N = ie * (O = n[y + 2]), v = ie * (G = n[y + 3]), x += oe * T, _ += oe * z, m += oe * O, P += oe * G, V = B, d = 0; d < ie; d++)
      V.r = T, V.g = z, V.b = O, V.a = G, V = V.next;
    for (d = 1; d < ie; d++)
      f = y + ((q < d ? q : d) << 2), x += (V.r = T = n[f]) * (Y = ie - d), _ += (V.g = z = n[f + 1]) * Y, m += (V.b = O = n[f + 2]) * Y, P += (V.a = G = n[f + 3]) * Y, w += T, k += z, b += O, I += G, V = V.next;
    for (K = B, $ = X, u = 0; u < i; u++)
      n[y + 3] = G = P * he >> le, G !== 0 ? (G = 255 / G, n[y] = (x * he >> le) * G, n[y + 1] = (_ * he >> le) * G, n[y + 2] = (m * he >> le) * G) : n[y] = n[y + 1] = n[y + 2] = 0, x -= E, _ -= R, m -= N, P -= v, E -= K.r, R -= K.g, N -= K.b, v -= K.a, f = C + ((f = u + e + 1) < q ? f : q) << 2, w += K.r = n[f], k += K.g = n[f + 1], b += K.b = n[f + 2], I += K.a = n[f + 3], x += w, _ += k, m += b, P += I, K = K.next, E += T = $.r, R += z = $.g, N += O = $.b, v += G = $.a, w -= T, k -= z, b -= O, I -= G, $ = $.next, y += 4;
    C += i;
  }
  for (u = 0; u < i; u++) {
    for (k = b = I = w = _ = m = P = x = 0, y = u << 2, E = ie * (T = n[y]), R = ie * (z = n[y + 1]), N = ie * (O = n[y + 2]), v = ie * (G = n[y + 3]), x += oe * T, _ += oe * z, m += oe * O, P += oe * G, V = B, d = 0; d < ie; d++)
      V.r = T, V.g = z, V.b = O, V.a = G, V = V.next;
    for (p = i, d = 1; d <= e; d++)
      y = p + u << 2, x += (V.r = T = n[y]) * (Y = ie - d), _ += (V.g = z = n[y + 1]) * Y, m += (V.b = O = n[y + 2]) * Y, P += (V.a = G = n[y + 3]) * Y, w += T, k += z, b += O, I += G, V = V.next, d < ae && (p += i);
    for (y = u, K = B, $ = X, h = 0; h < o; h++)
      f = y << 2, n[f + 3] = G = P * he >> le, G > 0 ? (G = 255 / G, n[f] = (x * he >> le) * G, n[f + 1] = (_ * he >> le) * G, n[f + 2] = (m * he >> le) * G) : n[f] = n[f + 1] = n[f + 2] = 0, x -= E, _ -= R, m -= N, P -= v, E -= K.r, R -= K.g, N -= K.b, v -= K.a, f = u + ((f = h + ie) < ae ? f : ae) * i << 2, x += w += K.r = n[f], _ += k += K.g = n[f + 1], m += b += K.b = n[f + 2], P += I += K.a = n[f + 3], K = K.next, E += T = $.r, R += z = $.g, N += O = $.b, v += G = $.a, w -= T, k -= z, b -= O, I -= G, $ = $.next, y += i;
  }
}
const jg = function(e) {
  var n = Math.round(this.blurRadius());
  n > 0 && Hg(e, n);
};
Ws.Blur = jg;
Qc.Factory.addGetterSetter(Ug.Node, "blurRadius", 0, (0, zg.getNumberValidator)(), Qc.Factory.afterSetFilter);
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.Brighten = void 0;
const Zc = _e, Wg = We, Yg = ne, Kg = function(a) {
  var e = this.brightness() * 255, n = a.data, i = n.length, o;
  for (o = 0; o < i; o += 4)
    n[o] += e, n[o + 1] += e, n[o + 2] += e;
};
Ys.Brighten = Kg;
Zc.Factory.addGetterSetter(Wg.Node, "brightness", 0, (0, Yg.getNumberValidator)(), Zc.Factory.afterSetFilter);
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.Contrast = void 0;
const e0 = _e, Xg = We, $g = ne, qg = function(a) {
  var e = Math.pow((this.contrast() + 100) / 100, 2), n = a.data, i = n.length, o = 150, u = 150, h = 150, d;
  for (d = 0; d < i; d += 4)
    o = n[d], u = n[d + 1], h = n[d + 2], o /= 255, o -= 0.5, o *= e, o += 0.5, o *= 255, u /= 255, u -= 0.5, u *= e, u += 0.5, u *= 255, h /= 255, h -= 0.5, h *= e, h += 0.5, h *= 255, o = o < 0 ? 0 : o > 255 ? 255 : o, u = u < 0 ? 0 : u > 255 ? 255 : u, h = h < 0 ? 0 : h > 255 ? 255 : h, n[d] = o, n[d + 1] = u, n[d + 2] = h;
};
Ks.Contrast = qg;
e0.Factory.addGetterSetter(Xg.Node, "contrast", 0, (0, $g.getNumberValidator)(), e0.Factory.afterSetFilter);
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.Emboss = void 0;
const qr = _e, $s = We, Qg = Xe, md = ne, Jg = function(a) {
  var e = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, i = this.embossDirection(), o = this.embossBlend(), u = 0, h = 0, d = a.data, f = a.width, p = a.height, y = f * 4, C = p;
  switch (i) {
    case "top-left":
      u = -1, h = -1;
      break;
    case "top":
      u = -1, h = 0;
      break;
    case "top-right":
      u = -1, h = 1;
      break;
    case "right":
      u = 0, h = 1;
      break;
    case "bottom-right":
      u = 1, h = 1;
      break;
    case "bottom":
      u = 1, h = 0;
      break;
    case "bottom-left":
      u = 1, h = -1;
      break;
    case "left":
      u = 0, h = -1;
      break;
    default:
      Qg.Util.error("Unknown emboss direction: " + i);
  }
  do {
    var x = (C - 1) * y, _ = u;
    C + _ < 1 && (_ = 0), C + _ > p && (_ = 0);
    var m = (C - 1 + _) * f * 4, P = f;
    do {
      var E = x + (P - 1) * 4, R = h;
      P + R < 1 && (R = 0), P + R > f && (R = 0);
      var N = m + (P - 1 + R) * 4, v = d[E] - d[N], w = d[E + 1] - d[N + 1], k = d[E + 2] - d[N + 2], b = v, I = b > 0 ? b : -b, T = w > 0 ? w : -w, z = k > 0 ? k : -k;
      if (T > I && (b = w), z > I && (b = k), b *= e, o) {
        var O = d[E] + b, G = d[E + 1] + b, Y = d[E + 2] + b;
        d[E] = O > 255 ? 255 : O < 0 ? 0 : O, d[E + 1] = G > 255 ? 255 : G < 0 ? 0 : G, d[E + 2] = Y > 255 ? 255 : Y < 0 ? 0 : Y;
      } else {
        var H = n - b;
        H < 0 ? H = 0 : H > 255 && (H = 255), d[E] = d[E + 1] = d[E + 2] = H;
      }
    } while (--P);
  } while (--C);
};
Xs.Emboss = Jg;
qr.Factory.addGetterSetter($s.Node, "embossStrength", 0.5, (0, md.getNumberValidator)(), qr.Factory.afterSetFilter);
qr.Factory.addGetterSetter($s.Node, "embossWhiteLevel", 0.5, (0, md.getNumberValidator)(), qr.Factory.afterSetFilter);
qr.Factory.addGetterSetter($s.Node, "embossDirection", "top-left", null, qr.Factory.afterSetFilter);
qr.Factory.addGetterSetter($s.Node, "embossBlend", !1, null, qr.Factory.afterSetFilter);
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.Enhance = void 0;
const t0 = _e, Zg = We, e5 = ne;
function Wl(a, e, n, i, o) {
  var u = n - e, h = o - i, d;
  return u === 0 ? i + h / 2 : h === 0 ? i : (d = (a - e) / u, d = h * d + i, d);
}
const t5 = function(a) {
  var e = a.data, n = e.length, i = e[0], o = i, u, h = e[1], d = h, f, p = e[2], y = p, C, x, _ = this.enhance();
  if (_ !== 0) {
    for (x = 0; x < n; x += 4)
      u = e[x + 0], u < i ? i = u : u > o && (o = u), f = e[x + 1], f < h ? h = f : f > d && (d = f), C = e[x + 2], C < p ? p = C : C > y && (y = C);
    o === i && (o = 255, i = 0), d === h && (d = 255, h = 0), y === p && (y = 255, p = 0);
    var m, P, E, R, N, v, w, k, b;
    for (_ > 0 ? (P = o + _ * (255 - o), E = i - _ * (i - 0), N = d + _ * (255 - d), v = h - _ * (h - 0), k = y + _ * (255 - y), b = p - _ * (p - 0)) : (m = (o + i) * 0.5, P = o + _ * (o - m), E = i + _ * (i - m), R = (d + h) * 0.5, N = d + _ * (d - R), v = h + _ * (h - R), w = (y + p) * 0.5, k = y + _ * (y - w), b = p + _ * (p - w)), x = 0; x < n; x += 4)
      e[x + 0] = Wl(e[x + 0], i, o, E, P), e[x + 1] = Wl(e[x + 1], h, d, v, N), e[x + 2] = Wl(e[x + 2], p, y, b, k);
  }
};
qs.Enhance = t5;
t0.Factory.addGetterSetter(Zg.Node, "enhance", 0, (0, e5.getNumberValidator)(), t0.Factory.afterSetFilter);
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.Grayscale = void 0;
const r5 = function(a) {
  var e = a.data, n = e.length, i, o;
  for (i = 0; i < n; i += 4)
    o = 0.34 * e[i] + 0.5 * e[i + 1] + 0.16 * e[i + 2], e[i] = o, e[i + 1] = o, e[i + 2] = o;
};
Qs.Grayscale = r5;
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.HSL = void 0;
const ii = _e, Nu = We, Au = ne;
ii.Factory.addGetterSetter(Nu.Node, "hue", 0, (0, Au.getNumberValidator)(), ii.Factory.afterSetFilter);
ii.Factory.addGetterSetter(Nu.Node, "saturation", 0, (0, Au.getNumberValidator)(), ii.Factory.afterSetFilter);
ii.Factory.addGetterSetter(Nu.Node, "luminance", 0, (0, Au.getNumberValidator)(), ii.Factory.afterSetFilter);
const n5 = function(a) {
  var e = a.data, n = e.length, i = 1, o = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h = this.luminance() * 127, d, f = i * o * Math.cos(u * Math.PI / 180), p = i * o * Math.sin(u * Math.PI / 180), y = 0.299 * i + 0.701 * f + 0.167 * p, C = 0.587 * i - 0.587 * f + 0.33 * p, x = 0.114 * i - 0.114 * f - 0.497 * p, _ = 0.299 * i - 0.299 * f - 0.328 * p, m = 0.587 * i + 0.413 * f + 0.035 * p, P = 0.114 * i - 0.114 * f + 0.293 * p, E = 0.299 * i - 0.3 * f + 1.25 * p, R = 0.587 * i - 0.586 * f - 1.05 * p, N = 0.114 * i + 0.886 * f - 0.2 * p, v, w, k, b;
  for (d = 0; d < n; d += 4)
    v = e[d + 0], w = e[d + 1], k = e[d + 2], b = e[d + 3], e[d + 0] = y * v + C * w + x * k + h, e[d + 1] = _ * v + m * w + P * k + h, e[d + 2] = E * v + R * w + N * k + h, e[d + 3] = b;
};
Js.HSL = n5;
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.HSV = void 0;
const ai = _e, Fu = We, Mu = ne, i5 = function(a) {
  var e = a.data, n = e.length, i = Math.pow(2, this.value()), o = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h, d = i * o * Math.cos(u * Math.PI / 180), f = i * o * Math.sin(u * Math.PI / 180), p = 0.299 * i + 0.701 * d + 0.167 * f, y = 0.587 * i - 0.587 * d + 0.33 * f, C = 0.114 * i - 0.114 * d - 0.497 * f, x = 0.299 * i - 0.299 * d - 0.328 * f, _ = 0.587 * i + 0.413 * d + 0.035 * f, m = 0.114 * i - 0.114 * d + 0.293 * f, P = 0.299 * i - 0.3 * d + 1.25 * f, E = 0.587 * i - 0.586 * d - 1.05 * f, R = 0.114 * i + 0.886 * d - 0.2 * f, N, v, w, k;
  for (h = 0; h < n; h += 4)
    N = e[h + 0], v = e[h + 1], w = e[h + 2], k = e[h + 3], e[h + 0] = p * N + y * v + C * w, e[h + 1] = x * N + _ * v + m * w, e[h + 2] = P * N + E * v + R * w, e[h + 3] = k;
};
Zs.HSV = i5;
ai.Factory.addGetterSetter(Fu.Node, "hue", 0, (0, Mu.getNumberValidator)(), ai.Factory.afterSetFilter);
ai.Factory.addGetterSetter(Fu.Node, "saturation", 0, (0, Mu.getNumberValidator)(), ai.Factory.afterSetFilter);
ai.Factory.addGetterSetter(Fu.Node, "value", 0, (0, Mu.getNumberValidator)(), ai.Factory.afterSetFilter);
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.Invert = void 0;
const a5 = function(a) {
  var e = a.data, n = e.length, i;
  for (i = 0; i < n; i += 4)
    e[i] = 255 - e[i], e[i + 1] = 255 - e[i + 1], e[i + 2] = 255 - e[i + 2];
};
eo.Invert = a5;
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.Kaleidoscope = void 0;
const gs = _e, yd = We, r0 = Xe, _d = ne;
var s5 = function(a, e, n) {
  var i = a.data, o = e.data, u = a.width, h = a.height, d = n.polarCenterX || u / 2, f = n.polarCenterY || h / 2, p, y, C, x = 0, _ = 0, m = 0, P = 0, E, R = Math.sqrt(d * d + f * f);
  y = u - d, C = h - f, E = Math.sqrt(y * y + C * C), R = E > R ? E : R;
  var N = h, v = u, w, k, b = 360 / v * Math.PI / 180, I, T;
  for (k = 0; k < v; k += 1)
    for (I = Math.sin(k * b), T = Math.cos(k * b), w = 0; w < N; w += 1)
      y = Math.floor(d + R * w / N * T), C = Math.floor(f + R * w / N * I), p = (C * u + y) * 4, x = i[p + 0], _ = i[p + 1], m = i[p + 2], P = i[p + 3], p = (k + w * u) * 4, o[p + 0] = x, o[p + 1] = _, o[p + 2] = m, o[p + 3] = P;
}, o5 = function(a, e, n) {
  var i = a.data, o = e.data, u = a.width, h = a.height, d = n.polarCenterX || u / 2, f = n.polarCenterY || h / 2, p, y, C, x, _, m = 0, P = 0, E = 0, R = 0, N, v = Math.sqrt(d * d + f * f);
  y = u - d, C = h - f, N = Math.sqrt(y * y + C * C), v = N > v ? N : v;
  var w = h, k = u, b, I, T = n.polarRotation || 0, z, O;
  for (y = 0; y < u; y += 1)
    for (C = 0; C < h; C += 1)
      x = y - d, _ = C - f, b = Math.sqrt(x * x + _ * _) * w / v, I = (Math.atan2(_, x) * 180 / Math.PI + 360 + T) % 360, I = I * k / 360, z = Math.floor(I), O = Math.floor(b), p = (O * u + z) * 4, m = i[p + 0], P = i[p + 1], E = i[p + 2], R = i[p + 3], p = (C * u + y) * 4, o[p + 0] = m, o[p + 1] = P, o[p + 2] = E, o[p + 3] = R;
};
const l5 = function(a) {
  var e = a.width, n = a.height, i, o, u, h, d, f, p, y, C, x, _ = Math.round(this.kaleidoscopePower()), m = Math.round(this.kaleidoscopeAngle()), P = Math.floor(e * (m % 360) / 360);
  if (!(_ < 1)) {
    var E = r0.Util.createCanvasElement();
    E.width = e, E.height = n;
    var R = E.getContext("2d").getImageData(0, 0, e, n);
    r0.Util.releaseCanvas(E), s5(a, R, {
      polarCenterX: e / 2,
      polarCenterY: n / 2
    });
    for (var N = e / Math.pow(2, _); N <= 8; )
      N = N * 2, _ -= 1;
    N = Math.ceil(N);
    var v = N, w = 0, k = v, b = 1;
    for (P + N > e && (w = v, k = 0, b = -1), o = 0; o < n; o += 1)
      for (i = w; i !== k; i += b)
        u = Math.round(i + P) % e, C = (e * o + u) * 4, d = R.data[C + 0], f = R.data[C + 1], p = R.data[C + 2], y = R.data[C + 3], x = (e * o + i) * 4, R.data[x + 0] = d, R.data[x + 1] = f, R.data[x + 2] = p, R.data[x + 3] = y;
    for (o = 0; o < n; o += 1)
      for (v = Math.floor(N), h = 0; h < _; h += 1) {
        for (i = 0; i < v + 1; i += 1)
          C = (e * o + i) * 4, d = R.data[C + 0], f = R.data[C + 1], p = R.data[C + 2], y = R.data[C + 3], x = (e * o + v * 2 - i - 1) * 4, R.data[x + 0] = d, R.data[x + 1] = f, R.data[x + 2] = p, R.data[x + 3] = y;
        v *= 2;
      }
    o5(R, a, { polarRotation: 0 });
  }
};
to.Kaleidoscope = l5;
gs.Factory.addGetterSetter(yd.Node, "kaleidoscopePower", 2, (0, _d.getNumberValidator)(), gs.Factory.afterSetFilter);
gs.Factory.addGetterSetter(yd.Node, "kaleidoscopeAngle", 0, (0, _d.getNumberValidator)(), gs.Factory.afterSetFilter);
var ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.Mask = void 0;
const n0 = _e, u5 = We, h5 = ne;
function ts(a, e, n) {
  var i = (n * a.width + e) * 4, o = [];
  return o.push(a.data[i++], a.data[i++], a.data[i++], a.data[i++]), o;
}
function Bi(a, e) {
  return Math.sqrt(Math.pow(a[0] - e[0], 2) + Math.pow(a[1] - e[1], 2) + Math.pow(a[2] - e[2], 2));
}
function c5(a) {
  for (var e = [0, 0, 0], n = 0; n < a.length; n++)
    e[0] += a[n][0], e[1] += a[n][1], e[2] += a[n][2];
  return e[0] /= a.length, e[1] /= a.length, e[2] /= a.length, e;
}
function d5(a, e) {
  var n = ts(a, 0, 0), i = ts(a, a.width - 1, 0), o = ts(a, 0, a.height - 1), u = ts(a, a.width - 1, a.height - 1), h = e || 10;
  if (Bi(n, i) < h && Bi(i, u) < h && Bi(u, o) < h && Bi(o, n) < h) {
    for (var d = c5([i, n, u, o]), f = [], p = 0; p < a.width * a.height; p++) {
      var y = Bi(d, [
        a.data[p * 4],
        a.data[p * 4 + 1],
        a.data[p * 4 + 2]
      ]);
      f[p] = y < h ? 0 : 255;
    }
    return f;
  }
}
function f5(a, e) {
  for (var n = 0; n < a.width * a.height; n++)
    a.data[4 * n + 3] = e[n];
}
function g5(a, e, n) {
  for (var i = [1, 1, 1, 1, 0, 1, 1, 1, 1], o = Math.round(Math.sqrt(i.length)), u = Math.floor(o / 2), h = [], d = 0; d < n; d++)
    for (var f = 0; f < e; f++) {
      for (var p = d * e + f, y = 0, C = 0; C < o; C++)
        for (var x = 0; x < o; x++) {
          var _ = d + C - u, m = f + x - u;
          if (_ >= 0 && _ < n && m >= 0 && m < e) {
            var P = _ * e + m, E = i[C * o + x];
            y += a[P] * E;
          }
        }
      h[p] = y === 255 * 8 ? 255 : 0;
    }
  return h;
}
function p5(a, e, n) {
  for (var i = [1, 1, 1, 1, 1, 1, 1, 1, 1], o = Math.round(Math.sqrt(i.length)), u = Math.floor(o / 2), h = [], d = 0; d < n; d++)
    for (var f = 0; f < e; f++) {
      for (var p = d * e + f, y = 0, C = 0; C < o; C++)
        for (var x = 0; x < o; x++) {
          var _ = d + C - u, m = f + x - u;
          if (_ >= 0 && _ < n && m >= 0 && m < e) {
            var P = _ * e + m, E = i[C * o + x];
            y += a[P] * E;
          }
        }
      h[p] = y >= 255 * 4 ? 255 : 0;
    }
  return h;
}
function v5(a, e, n) {
  for (var i = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], o = Math.round(Math.sqrt(i.length)), u = Math.floor(o / 2), h = [], d = 0; d < n; d++)
    for (var f = 0; f < e; f++) {
      for (var p = d * e + f, y = 0, C = 0; C < o; C++)
        for (var x = 0; x < o; x++) {
          var _ = d + C - u, m = f + x - u;
          if (_ >= 0 && _ < n && m >= 0 && m < e) {
            var P = _ * e + m, E = i[C * o + x];
            y += a[P] * E;
          }
        }
      h[p] = y;
    }
  return h;
}
const m5 = function(a) {
  var e = this.threshold(), n = d5(a, e);
  return n && (n = g5(n, a.width, a.height), n = p5(n, a.width, a.height), n = v5(n, a.width, a.height), f5(a, n)), a;
};
ro.Mask = m5;
n0.Factory.addGetterSetter(u5.Node, "threshold", 0, (0, h5.getNumberValidator)(), n0.Factory.afterSetFilter);
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.Noise = void 0;
const i0 = _e, y5 = We, _5 = ne, S5 = function(a) {
  var e = this.noise() * 255, n = a.data, i = n.length, o = e / 2, u;
  for (u = 0; u < i; u += 4)
    n[u + 0] += o - 2 * o * Math.random(), n[u + 1] += o - 2 * o * Math.random(), n[u + 2] += o - 2 * o * Math.random();
};
no.Noise = S5;
i0.Factory.addGetterSetter(y5.Node, "noise", 0.2, (0, _5.getNumberValidator)(), i0.Factory.afterSetFilter);
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.Pixelate = void 0;
const a0 = _e, C5 = Xe, w5 = We, x5 = ne, P5 = function(a) {
  var e = Math.ceil(this.pixelSize()), n = a.width, i = a.height, o, u, h, d, f, p, y, C = Math.ceil(n / e), x = Math.ceil(i / e), _, m, P, E, R, N, v, w = a.data;
  if (e <= 0) {
    C5.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (R = 0; R < C; R += 1)
    for (N = 0; N < x; N += 1) {
      for (d = 0, f = 0, p = 0, y = 0, _ = R * e, m = _ + e, P = N * e, E = P + e, v = 0, o = _; o < m; o += 1)
        if (!(o >= n))
          for (u = P; u < E; u += 1)
            u >= i || (h = (n * u + o) * 4, d += w[h + 0], f += w[h + 1], p += w[h + 2], y += w[h + 3], v += 1);
      for (d = d / v, f = f / v, p = p / v, y = y / v, o = _; o < m; o += 1)
        if (!(o >= n))
          for (u = P; u < E; u += 1)
            u >= i || (h = (n * u + o) * 4, w[h + 0] = d, w[h + 1] = f, w[h + 2] = p, w[h + 3] = y);
    }
};
io.Pixelate = P5;
a0.Factory.addGetterSetter(w5.Node, "pixelSize", 8, (0, x5.getNumberValidator)(), a0.Factory.afterSetFilter);
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.Posterize = void 0;
const s0 = _e, k5 = We, E5 = ne, T5 = function(a) {
  var e = Math.round(this.levels() * 254) + 1, n = a.data, i = n.length, o = 255 / e, u;
  for (u = 0; u < i; u += 1)
    n[u] = Math.floor(n[u] / o) * o;
};
ao.Posterize = T5;
s0.Factory.addGetterSetter(k5.Node, "levels", 0.5, (0, E5.getNumberValidator)(), s0.Factory.afterSetFilter);
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.RGB = void 0;
const ps = _e, Ou = We, R5 = ne, b5 = function(a) {
  var e = a.data, n = e.length, i = this.red(), o = this.green(), u = this.blue(), h, d;
  for (h = 0; h < n; h += 4)
    d = (0.34 * e[h] + 0.5 * e[h + 1] + 0.16 * e[h + 2]) / 255, e[h] = d * i, e[h + 1] = d * o, e[h + 2] = d * u, e[h + 3] = e[h + 3];
};
so.RGB = b5;
ps.Factory.addGetterSetter(Ou.Node, "red", 0, function(a) {
  return this._filterUpToDate = !1, a > 255 ? 255 : a < 0 ? 0 : Math.round(a);
});
ps.Factory.addGetterSetter(Ou.Node, "green", 0, function(a) {
  return this._filterUpToDate = !1, a > 255 ? 255 : a < 0 ? 0 : Math.round(a);
});
ps.Factory.addGetterSetter(Ou.Node, "blue", 0, R5.RGBComponent, ps.Factory.afterSetFilter);
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.RGBA = void 0;
const Yi = _e, lo = We, N5 = ne, A5 = function(a) {
  var e = a.data, n = e.length, i = this.red(), o = this.green(), u = this.blue(), h = this.alpha(), d, f;
  for (d = 0; d < n; d += 4)
    f = 1 - h, e[d] = i * h + e[d] * f, e[d + 1] = o * h + e[d + 1] * f, e[d + 2] = u * h + e[d + 2] * f;
};
oo.RGBA = A5;
Yi.Factory.addGetterSetter(lo.Node, "red", 0, function(a) {
  return this._filterUpToDate = !1, a > 255 ? 255 : a < 0 ? 0 : Math.round(a);
});
Yi.Factory.addGetterSetter(lo.Node, "green", 0, function(a) {
  return this._filterUpToDate = !1, a > 255 ? 255 : a < 0 ? 0 : Math.round(a);
});
Yi.Factory.addGetterSetter(lo.Node, "blue", 0, N5.RGBComponent, Yi.Factory.afterSetFilter);
Yi.Factory.addGetterSetter(lo.Node, "alpha", 1, function(a) {
  return this._filterUpToDate = !1, a > 1 ? 1 : a < 0 ? 0 : a;
});
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.Sepia = void 0;
const F5 = function(a) {
  var e = a.data, n = e.length, i, o, u, h;
  for (i = 0; i < n; i += 4)
    o = e[i + 0], u = e[i + 1], h = e[i + 2], e[i + 0] = Math.min(255, o * 0.393 + u * 0.769 + h * 0.189), e[i + 1] = Math.min(255, o * 0.349 + u * 0.686 + h * 0.168), e[i + 2] = Math.min(255, o * 0.272 + u * 0.534 + h * 0.131);
};
uo.Sepia = F5;
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.Solarize = void 0;
const M5 = function(a) {
  var e = a.data, n = a.width, i = a.height, o = n * 4, u = i;
  do {
    var h = (u - 1) * o, d = n;
    do {
      var f = h + (d - 1) * 4, p = e[f], y = e[f + 1], C = e[f + 2];
      p > 127 && (p = 255 - p), y > 127 && (y = 255 - y), C > 127 && (C = 255 - C), e[f] = p, e[f + 1] = y, e[f + 2] = C;
    } while (--d);
  } while (--u);
};
ho.Solarize = M5;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.Threshold = void 0;
const o0 = _e, O5 = We, I5 = ne, L5 = function(a) {
  var e = this.threshold() * 255, n = a.data, i = n.length, o;
  for (o = 0; o < i; o += 1)
    n[o] = n[o] < e ? 0 : 255;
};
co.Threshold = L5;
o0.Factory.addGetterSetter(O5.Node, "threshold", 0.5, (0, I5.getNumberValidator)(), o0.Factory.afterSetFilter);
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.Konva = void 0;
const l0 = cs, D5 = Es, G5 = bs, U5 = Fs, z5 = Ms, B5 = Os, u0 = ni, V5 = Qi, H5 = pi, j5 = ea, W5 = Ds, Y5 = Gs, K5 = Us, X5 = zs, $5 = Cn, q5 = Bs, Q5 = Vs, J5 = Hs, Z5 = Ws, e3 = Ys, t3 = Ks, r3 = Xs, n3 = qs, i3 = Qs, a3 = Js, s3 = Zs, o3 = eo, l3 = to, u3 = ro, h3 = no, c3 = io, d3 = ao, f3 = so, g3 = oo, p3 = uo, v3 = ho, m3 = co;
Ss.Konva = l0.Konva.Util._assign(l0.Konva, {
  Arc: D5.Arc,
  Arrow: G5.Arrow,
  Circle: U5.Circle,
  Ellipse: z5.Ellipse,
  Image: B5.Image,
  Label: u0.Label,
  Tag: u0.Tag,
  Line: V5.Line,
  Path: H5.Path,
  Rect: j5.Rect,
  RegularPolygon: W5.RegularPolygon,
  Ring: Y5.Ring,
  Sprite: K5.Sprite,
  Star: X5.Star,
  Text: $5.Text,
  TextPath: q5.TextPath,
  Transformer: Q5.Transformer,
  Wedge: J5.Wedge,
  Filters: {
    Blur: Z5.Blur,
    Brighten: e3.Brighten,
    Contrast: t3.Contrast,
    Emboss: r3.Emboss,
    Enhance: n3.Enhance,
    Grayscale: i3.Grayscale,
    HSL: a3.HSL,
    HSV: s3.HSV,
    Invert: o3.Invert,
    Kaleidoscope: l3.Kaleidoscope,
    Mask: u3.Mask,
    Noise: h3.Noise,
    Pixelate: c3.Pixelate,
    Posterize: d3.Posterize,
    RGB: f3.RGB,
    RGBA: g3.RGBA,
    Sepia: p3.Sepia,
    Solarize: v3.Solarize,
    Threshold: m3.Threshold
  }
});
var y3 = z0.exports;
Object.defineProperty(y3, "__esModule", { value: !0 });
const _3 = Ss;
z0.exports = _3.Konva;
var du = { exports: {} };
(function(a, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  var n = cs;
  Object.defineProperty(e, "Konva", { enumerable: !0, get: function() {
    return n.Konva;
  } });
  const i = cs;
  a.exports = i.Konva;
})(du, du.exports);
var S3 = du.exports;
const Ki = /* @__PURE__ */ D0(S3);
var Sd = { exports: {} }, Yl = { exports: {} }, Kl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function C3() {
  return h0 || (h0 = 1, function(a) {
    function e(B, X) {
      var V = B.length;
      B.push(X);
      e:
        for (; 0 < V; ) {
          var K = V - 1 >>> 1, $ = B[K];
          if (0 < o($, X))
            B[K] = X, B[V] = $, V = K;
          else
            break e;
        }
    }
    function n(B) {
      return B.length === 0 ? null : B[0];
    }
    function i(B) {
      if (B.length === 0)
        return null;
      var X = B[0], V = B.pop();
      if (V !== X) {
        B[0] = V;
        e:
          for (var K = 0, $ = B.length, he = $ >>> 1; K < he; ) {
            var le = 2 * (K + 1) - 1, Le = B[le], xe = le + 1, A = B[xe];
            if (0 > o(Le, V))
              xe < $ && 0 > o(A, Le) ? (B[K] = A, B[xe] = V, K = xe) : (B[K] = Le, B[le] = V, K = le);
            else if (xe < $ && 0 > o(A, V))
              B[K] = A, B[xe] = V, K = xe;
            else
              break e;
          }
      }
      return X;
    }
    function o(B, X) {
      var V = B.sortIndex - X.sortIndex;
      return V !== 0 ? V : B.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      a.unstable_now = function() {
        return u.now();
      };
    } else {
      var h = Date, d = h.now();
      a.unstable_now = function() {
        return h.now() - d;
      };
    }
    var f = [], p = [], y = 1, C = null, x = 3, _ = !1, m = !1, P = !1, E = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(B) {
      for (var X = n(p); X !== null; ) {
        if (X.callback === null)
          i(p);
        else if (X.startTime <= B)
          i(p), X.sortIndex = X.expirationTime, e(f, X);
        else
          break;
        X = n(p);
      }
    }
    function w(B) {
      if (P = !1, v(B), !m)
        if (n(f) !== null)
          m = !0, ie(k);
        else {
          var X = n(p);
          X !== null && oe(w, X.startTime - B);
        }
    }
    function k(B, X) {
      m = !1, P && (P = !1, R(T), T = -1), _ = !0;
      var V = x;
      try {
        for (v(X), C = n(f); C !== null && (!(C.expirationTime > X) || B && !G()); ) {
          var K = C.callback;
          if (typeof K == "function") {
            C.callback = null, x = C.priorityLevel;
            var $ = K(C.expirationTime <= X);
            X = a.unstable_now(), typeof $ == "function" ? C.callback = $ : C === n(f) && i(f), v(X);
          } else
            i(f);
          C = n(f);
        }
        if (C !== null)
          var he = !0;
        else {
          var le = n(p);
          le !== null && oe(w, le.startTime - X), he = !1;
        }
        return he;
      } finally {
        C = null, x = V, _ = !1;
      }
    }
    var b = !1, I = null, T = -1, z = 5, O = -1;
    function G() {
      return !(a.unstable_now() - O < z);
    }
    function Y() {
      if (I !== null) {
        var B = a.unstable_now();
        O = B;
        var X = !0;
        try {
          X = I(!0, B);
        } finally {
          X ? H() : (b = !1, I = null);
        }
      } else
        b = !1;
    }
    var H;
    if (typeof N == "function")
      H = function() {
        N(Y);
      };
    else if (typeof MessageChannel < "u") {
      var q = new MessageChannel(), ae = q.port2;
      q.port1.onmessage = Y, H = function() {
        ae.postMessage(null);
      };
    } else
      H = function() {
        E(Y, 0);
      };
    function ie(B) {
      I = B, b || (b = !0, H());
    }
    function oe(B, X) {
      T = E(function() {
        B(a.unstable_now());
      }, X);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, a.unstable_continueExecution = function() {
      m || _ || (m = !0, ie(k));
    }, a.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < B ? Math.floor(1e3 / B) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, a.unstable_getFirstCallbackNode = function() {
      return n(f);
    }, a.unstable_next = function(B) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = x;
      }
      var V = x;
      x = X;
      try {
        return B();
      } finally {
        x = V;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(B, X) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var V = x;
      x = B;
      try {
        return X();
      } finally {
        x = V;
      }
    }, a.unstable_scheduleCallback = function(B, X, V) {
      var K = a.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? K + V : K) : V = K, B) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = V + $, B = { id: y++, callback: X, priorityLevel: B, startTime: V, expirationTime: $, sortIndex: -1 }, V > K ? (B.sortIndex = V, e(p, B), n(f) === null && B === n(p) && (P ? (R(T), T = -1) : P = !0, oe(w, V - K))) : (B.sortIndex = $, e(f, B), m || _ || (m = !0, ie(k))), B;
    }, a.unstable_shouldYield = G, a.unstable_wrapCallback = function(B) {
      var X = x;
      return function() {
        var V = x;
        x = X;
        try {
          return B.apply(this, arguments);
        } finally {
          x = V;
        }
      };
    };
  }(Kl)), Kl;
}
var c0;
function Cd() {
  return c0 || (c0 = 1, Yl.exports = C3()), Yl.exports;
}
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w3 = function(e) {
  var n = {}, i = $e, o = Cd(), u = Object.assign;
  function h(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++)
      r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), m = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function b(t) {
    return t === null || typeof t != "object" ? null : (t = k && t[k] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  function I(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case y:
        return "Fragment";
      case p:
        return "Portal";
      case x:
        return "Profiler";
      case C:
        return "StrictMode";
      case E:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case m:
          return (t.displayName || "Context") + ".Consumer";
        case _:
          return (t._context.displayName || "Context") + ".Provider";
        case P:
          var r = t.render;
          return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case N:
          return r = t.displayName || null, r !== null ? r : I(t.type) || "Memo";
        case v:
          r = t._payload, t = t._init;
          try {
            return I(t(r));
          } catch {
          }
      }
    return null;
  }
  function T(t) {
    var r = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return I(r);
      case 8:
        return r === C ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function z(t) {
    var r = t, s = t;
    if (t.alternate)
      for (; r.return; )
        r = r.return;
    else {
      t = r;
      do
        r = t, r.flags & 4098 && (s = r.return), t = r.return;
      while (t);
    }
    return r.tag === 3 ? s : null;
  }
  function O(t) {
    if (z(t) !== t)
      throw Error(h(188));
  }
  function G(t) {
    var r = t.alternate;
    if (!r) {
      if (r = z(t), r === null)
        throw Error(h(188));
      return r !== t ? null : t;
    }
    for (var s = t, l = r; ; ) {
      var c = s.return;
      if (c === null)
        break;
      var g = c.alternate;
      if (g === null) {
        if (l = c.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (c.child === g.child) {
        for (g = c.child; g; ) {
          if (g === s)
            return O(c), t;
          if (g === l)
            return O(c), r;
          g = g.sibling;
        }
        throw Error(h(188));
      }
      if (s.return !== l.return)
        s = c, l = g;
      else {
        for (var S = !1, F = c.child; F; ) {
          if (F === s) {
            S = !0, s = c, l = g;
            break;
          }
          if (F === l) {
            S = !0, l = c, s = g;
            break;
          }
          F = F.sibling;
        }
        if (!S) {
          for (F = g.child; F; ) {
            if (F === s) {
              S = !0, s = g, l = c;
              break;
            }
            if (F === l) {
              S = !0, l = g, s = c;
              break;
            }
            F = F.sibling;
          }
          if (!S)
            throw Error(h(189));
        }
      }
      if (s.alternate !== l)
        throw Error(h(190));
    }
    if (s.tag !== 3)
      throw Error(h(188));
    return s.stateNode.current === s ? t : r;
  }
  function Y(t) {
    return t = G(t), t !== null ? H(t) : null;
  }
  function H(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var r = H(t);
      if (r !== null)
        return r;
      t = t.sibling;
    }
    return null;
  }
  function q(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      if (t.tag !== 4) {
        var r = q(t);
        if (r !== null)
          return r;
      }
      t = t.sibling;
    }
    return null;
  }
  var ae = Array.isArray, ie = e.getPublicInstance, oe = e.getRootHostContext, B = e.getChildHostContext, X = e.prepareForCommit, V = e.resetAfterCommit, K = e.createInstance, $ = e.appendInitialChild, he = e.finalizeInitialChildren, le = e.prepareUpdate, Le = e.shouldSetTextContent, xe = e.createTextInstance, A = e.scheduleTimeout, j = e.cancelTimeout, ee = e.noTimeout, fe = e.isPrimaryRenderer, de = e.supportsMutation, Re = e.supportsPersistence, De = e.supportsHydration, Et = e.getInstanceFromNode, Ae = e.preparePortalMount, Jt = e.getCurrentEventPriority, Q = e.detachDeletedInstance, ue = e.supportsMicrotasks, be = e.scheduleMicrotask, we = e.supportsTestSelectors, xt = e.findFiberRoot, ot = e.getBoundingRect, Gt = e.getTextContent, Ut = e.isHiddenSubtree, hr = e.matchAccessibilityRole, wr = e.setFocusIfFocusable, gt = e.setupIntersectionObserver, Zt = e.appendChild, An = e.appendChildToContainer, nn = e.commitTextUpdate, Fn = e.commitMount, Mn = e.commitUpdate, yi = e.insertBefore, _o = e.insertInContainerBefore, So = e.removeChild, On = e.removeChildFromContainer, _i = e.resetTextContent, Co = e.hideInstance, ra = e.hideTextInstance, Jd = e.unhideInstance, Zd = e.unhideTextInstance, e1 = e.clearContainer, t1 = e.cloneInstance, Vu = e.createContainerChildSet, Hu = e.appendChildToContainerChildSet, r1 = e.finalizeContainerChildren, wo = e.replaceContainerChildren, ju = e.cloneHiddenInstance, Wu = e.cloneHiddenTextInstance, n1 = e.canHydrateInstance, i1 = e.canHydrateTextInstance, a1 = e.canHydrateSuspenseInstance, Yu = e.isSuspenseInstancePending, xo = e.isSuspenseInstanceFallback, s1 = e.getSuspenseInstanceFallbackErrorDetails, o1 = e.registerSuspenseInstanceRetry, na = e.getNextHydratableSibling, l1 = e.getFirstHydratableChild, u1 = e.getFirstHydratableChildWithinContainer, h1 = e.getFirstHydratableChildWithinSuspenseInstance, c1 = e.hydrateInstance, d1 = e.hydrateTextInstance, f1 = e.hydrateSuspenseInstance, g1 = e.getNextHydratableInstanceAfterSuspenseInstance, p1 = e.commitHydratedContainer, v1 = e.commitHydratedSuspenseInstance, m1 = e.clearSuspenseBoundary, y1 = e.clearSuspenseBoundaryFromContainer, _1 = e.shouldDeleteUnhydratedTailInstances, S1 = e.didNotMatchHydratedContainerTextInstance, C1 = e.didNotMatchHydratedTextInstance, Po;
  function Si(t) {
    if (Po === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        Po = r && r[1] || "";
      }
    return `
` + Po + t;
  }
  var ko = !1;
  function Eo(t, r) {
    if (!t || ko)
      return "";
    ko = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (W) {
            var l = W;
          }
          Reflect.construct(t, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            l = W;
          }
          t.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          l = W;
        }
        t();
      }
    } catch (W) {
      if (W && l && typeof W.stack == "string") {
        for (var c = W.stack.split(`
`), g = l.stack.split(`
`), S = c.length - 1, F = g.length - 1; 1 <= S && 0 <= F && c[S] !== g[F]; )
          F--;
        for (; 1 <= S && 0 <= F; S--, F--)
          if (c[S] !== g[F]) {
            if (S !== 1 || F !== 1)
              do
                if (S--, F--, 0 > F || c[S] !== g[F]) {
                  var D = `
` + c[S].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= S && 0 <= F);
            break;
          }
      }
    } finally {
      ko = !1, Error.prepareStackTrace = s;
    }
    return (t = t ? t.displayName || t.name : "") ? Si(t) : "";
  }
  var w1 = Object.prototype.hasOwnProperty, To = [], In = -1;
  function Gr(t) {
    return { current: t };
  }
  function Ue(t) {
    0 > In || (t.current = To[In], To[In] = null, In--);
  }
  function Ge(t, r) {
    In++, To[In] = t.current, t.current = r;
  }
  var Ur = {}, yt = Gr(Ur), Tt = Gr(!1), an = Ur;
  function Ln(t, r) {
    var s = t.type.contextTypes;
    if (!s)
      return Ur;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, g;
    for (g in s)
      c[g] = r[g];
    return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rt(t) {
    return t = t.childContextTypes, t != null;
  }
  function ia() {
    Ue(Tt), Ue(yt);
  }
  function Ku(t, r, s) {
    if (yt.current !== Ur)
      throw Error(h(168));
    Ge(yt, r), Ge(Tt, s);
  }
  function Xu(t, r, s) {
    var l = t.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function")
      return s;
    l = l.getChildContext();
    for (var c in l)
      if (!(c in r))
        throw Error(h(108, T(t) || "Unknown", c));
    return u({}, s, l);
  }
  function aa(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ur, an = yt.current, Ge(yt, t), Ge(Tt, Tt.current), !0;
  }
  function $u(t, r, s) {
    var l = t.stateNode;
    if (!l)
      throw Error(h(169));
    s ? (t = Xu(t, r, an), l.__reactInternalMemoizedMergedChildContext = t, Ue(Tt), Ue(yt), Ge(yt, t)) : Ue(Tt), Ge(Tt, s);
  }
  var er = Math.clz32 ? Math.clz32 : k1, x1 = Math.log, P1 = Math.LN2;
  function k1(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (x1(t) / P1 | 0) | 0;
  }
  var sa = 64, oa = 4194304;
  function Ci(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function la(t, r) {
    var s = t.pendingLanes;
    if (s === 0)
      return 0;
    var l = 0, c = t.suspendedLanes, g = t.pingedLanes, S = s & 268435455;
    if (S !== 0) {
      var F = S & ~c;
      F !== 0 ? l = Ci(F) : (g &= S, g !== 0 && (l = Ci(g)));
    } else
      S = s & ~c, S !== 0 ? l = Ci(S) : g !== 0 && (l = Ci(g));
    if (l === 0)
      return 0;
    if (r !== 0 && r !== l && !(r & c) && (c = l & -l, g = r & -r, c >= g || c === 16 && (g & 4194240) !== 0))
      return r;
    if (l & 4 && (l |= s & 16), r = t.entangledLanes, r !== 0)
      for (t = t.entanglements, r &= l; 0 < r; )
        s = 31 - er(r), c = 1 << s, l |= t[s], r &= ~c;
    return l;
  }
  function E1(t, r) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function T1(t, r) {
    for (var s = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
      var S = 31 - er(g), F = 1 << S, D = c[S];
      D === -1 ? (!(F & s) || F & l) && (c[S] = E1(F, r)) : D <= r && (t.expiredLanes |= F), g &= ~F;
    }
  }
  function Ro(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function qu() {
    var t = sa;
    return sa <<= 1, !(sa & 4194240) && (sa = 64), t;
  }
  function bo(t) {
    for (var r = [], s = 0; 31 > s; s++)
      r.push(t);
    return r;
  }
  function wi(t, r, s) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - er(r), t[r] = s;
  }
  function R1(t, r) {
    var s = t.pendingLanes & ~r;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var c = 31 - er(s), g = 1 << c;
      r[c] = 0, l[c] = -1, t[c] = -1, s &= ~g;
    }
  }
  function No(t, r) {
    var s = t.entangledLanes |= r;
    for (t = t.entanglements; s; ) {
      var l = 31 - er(s), c = 1 << l;
      c & r | t[l] & r && (t[l] |= r), s &= ~c;
    }
  }
  var Pe = 0;
  function Qu(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ao = o.unstable_scheduleCallback, Ju = o.unstable_cancelCallback, b1 = o.unstable_shouldYield, N1 = o.unstable_requestPaint, lt = o.unstable_now, Fo = o.unstable_ImmediatePriority, A1 = o.unstable_UserBlockingPriority, Mo = o.unstable_NormalPriority, F1 = o.unstable_IdlePriority, ua = null, cr = null;
  function M1(t) {
    if (cr && typeof cr.onCommitFiberRoot == "function")
      try {
        cr.onCommitFiberRoot(ua, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  function O1(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var tr = typeof Object.is == "function" ? Object.is : O1, xr = null, ha = !1, Oo = !1;
  function Zu(t) {
    xr === null ? xr = [t] : xr.push(t);
  }
  function I1(t) {
    ha = !0, Zu(t);
  }
  function dr() {
    if (!Oo && xr !== null) {
      Oo = !0;
      var t = 0, r = Pe;
      try {
        var s = xr;
        for (Pe = 1; t < s.length; t++) {
          var l = s[t];
          do
            l = l(!0);
          while (l !== null);
        }
        xr = null, ha = !1;
      } catch (c) {
        throw xr !== null && (xr = xr.slice(t + 1)), Ao(Fo, dr), c;
      } finally {
        Pe = r, Oo = !1;
      }
    }
    return null;
  }
  var Dn = [], Gn = 0, ca = null, da = 0, zt = [], Bt = 0, sn = null, Pr = 1, kr = "";
  function on(t, r) {
    Dn[Gn++] = da, Dn[Gn++] = ca, ca = t, da = r;
  }
  function eh(t, r, s) {
    zt[Bt++] = Pr, zt[Bt++] = kr, zt[Bt++] = sn, sn = t;
    var l = Pr;
    t = kr;
    var c = 32 - er(l) - 1;
    l &= ~(1 << c), s += 1;
    var g = 32 - er(r) + c;
    if (30 < g) {
      var S = c - c % 5;
      g = (l & (1 << S) - 1).toString(32), l >>= S, c -= S, Pr = 1 << 32 - er(r) + c | s << c | l, kr = g + t;
    } else
      Pr = 1 << g | s << c | l, kr = t;
  }
  function Io(t) {
    t.return !== null && (on(t, 1), eh(t, 1, 0));
  }
  function Lo(t) {
    for (; t === ca; )
      ca = Dn[--Gn], Dn[Gn] = null, da = Dn[--Gn], Dn[Gn] = null;
    for (; t === sn; )
      sn = zt[--Bt], zt[Bt] = null, kr = zt[--Bt], zt[Bt] = null, Pr = zt[--Bt], zt[Bt] = null;
  }
  var It = null, Vt = null, He = !1, xi = !1, rr = null;
  function th(t, r) {
    var s = Kt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s);
  }
  function rh(t, r) {
    switch (t.tag) {
      case 5:
        return r = n1(r, t.type, t.pendingProps), r !== null ? (t.stateNode = r, It = t, Vt = l1(r), !0) : !1;
      case 6:
        return r = i1(r, t.pendingProps), r !== null ? (t.stateNode = r, It = t, Vt = null, !0) : !1;
      case 13:
        if (r = a1(r), r !== null) {
          var s = sn !== null ? { id: Pr, overflow: kr } : null;
          return t.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Kt(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, It = t, Vt = null, !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function Do(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Go(t) {
    if (He) {
      var r = Vt;
      if (r) {
        var s = r;
        if (!rh(t, r)) {
          if (Do(t))
            throw Error(h(418));
          r = na(s);
          var l = It;
          r && rh(t, r) ? th(l, s) : (t.flags = t.flags & -4097 | 2, He = !1, It = t);
        }
      } else {
        if (Do(t))
          throw Error(h(418));
        t.flags = t.flags & -4097 | 2, He = !1, It = t;
      }
    }
  }
  function nh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    It = t;
  }
  function fa(t) {
    if (!De || t !== It)
      return !1;
    if (!He)
      return nh(t), He = !0, !1;
    if (t.tag !== 3 && (t.tag !== 5 || _1(t.type) && !Le(t.type, t.memoizedProps))) {
      var r = Vt;
      if (r) {
        if (Do(t))
          throw ih(), Error(h(418));
        for (; r; )
          th(t, r), r = na(r);
      }
    }
    if (nh(t), t.tag === 13) {
      if (!De)
        throw Error(h(316));
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
        throw Error(h(317));
      Vt = g1(t);
    } else
      Vt = It ? na(t.stateNode) : null;
    return !0;
  }
  function ih() {
    for (var t = Vt; t; )
      t = na(t);
  }
  function Un() {
    De && (Vt = It = null, xi = He = !1);
  }
  function Uo(t) {
    rr === null ? rr = [t] : rr.push(t);
  }
  var L1 = d.ReactCurrentBatchConfig;
  function ga(t, r) {
    if (tr(t, r))
      return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null)
      return !1;
    var s = Object.keys(t), l = Object.keys(r);
    if (s.length !== l.length)
      return !1;
    for (l = 0; l < s.length; l++) {
      var c = s[l];
      if (!w1.call(r, c) || !tr(t[c], r[c]))
        return !1;
    }
    return !0;
  }
  function D1(t) {
    switch (t.tag) {
      case 5:
        return Si(t.type);
      case 16:
        return Si("Lazy");
      case 13:
        return Si("Suspense");
      case 19:
        return Si("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = Eo(t.type, !1), t;
      case 11:
        return t = Eo(t.type.render, !1), t;
      case 1:
        return t = Eo(t.type, !0), t;
      default:
        return "";
    }
  }
  function nr(t, r) {
    if (t && t.defaultProps) {
      r = u({}, r), t = t.defaultProps;
      for (var s in t)
        r[s] === void 0 && (r[s] = t[s]);
      return r;
    }
    return r;
  }
  var pa = Gr(null), va = null, zn = null, zo = null;
  function Bo() {
    zo = zn = va = null;
  }
  function ah(t, r, s) {
    fe ? (Ge(pa, r._currentValue), r._currentValue = s) : (Ge(pa, r._currentValue2), r._currentValue2 = s);
  }
  function Vo(t) {
    var r = pa.current;
    Ue(pa), fe ? t._currentValue = r : t._currentValue2 = r;
  }
  function Ho(t, r, s) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === s)
        break;
      t = t.return;
    }
  }
  function Bn(t, r) {
    va = t, zo = zn = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & r && (bt = !0), t.firstContext = null);
  }
  function Ht(t) {
    var r = fe ? t._currentValue : t._currentValue2;
    if (zo !== t)
      if (t = { context: t, memoizedValue: r, next: null }, zn === null) {
        if (va === null)
          throw Error(h(308));
        zn = t, va.dependencies = { lanes: 0, firstContext: t };
      } else
        zn = zn.next = t;
    return r;
  }
  var ln = null;
  function jo(t) {
    ln === null ? ln = [t] : ln.push(t);
  }
  function sh(t, r, s, l) {
    var c = r.interleaved;
    return c === null ? (s.next = s, jo(r)) : (s.next = c.next, c.next = s), r.interleaved = s, fr(t, l);
  }
  function fr(t, r) {
    t.lanes |= r;
    var s = t.alternate;
    for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null; )
      t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var zr = !1;
  function Wo(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function oh(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Er(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Br(t, r, s) {
    var l = t.updateQueue;
    if (l === null)
      return null;
    if (l = l.shared, Se & 2) {
      var c = l.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, fr(t, s);
    }
    return c = l.interleaved, c === null ? (r.next = r, jo(l)) : (r.next = c.next, c.next = r), l.interleaved = r, fr(t, s);
  }
  function ma(t, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var l = r.lanes;
      l &= t.pendingLanes, s |= l, r.lanes = s, No(t, s);
    }
  }
  function lh(t, r) {
    var s = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var c = null, g = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var S = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          g === null ? c = g = S : g = g.next = S, s = s.next;
        } while (s !== null);
        g === null ? c = g = r : g = g.next = r;
      } else
        c = g = r;
      s = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: g, shared: l.shared, effects: l.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r;
  }
  function ya(t, r, s, l) {
    var c = t.updateQueue;
    zr = !1;
    var g = c.firstBaseUpdate, S = c.lastBaseUpdate, F = c.shared.pending;
    if (F !== null) {
      c.shared.pending = null;
      var D = F, W = D.next;
      D.next = null, S === null ? g = W : S.next = W, S = D;
      var re = t.alternate;
      re !== null && (re = re.updateQueue, F = re.lastBaseUpdate, F !== S && (F === null ? re.firstBaseUpdate = W : F.next = W, re.lastBaseUpdate = D));
    }
    if (g !== null) {
      var ge = c.baseState;
      S = 0, re = W = D = null, F = g;
      do {
        var J = F.lane, ze = F.eventTime;
        if ((l & J) === J) {
          re !== null && (re = re.next = {
            eventTime: ze,
            lane: 0,
            tag: F.tag,
            payload: F.payload,
            callback: F.callback,
            next: null
          });
          e: {
            var Oe = t, Ft = F;
            switch (J = r, ze = s, Ft.tag) {
              case 1:
                if (Oe = Ft.payload, typeof Oe == "function") {
                  ge = Oe.call(ze, ge, J);
                  break e;
                }
                ge = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Ft.payload, J = typeof Oe == "function" ? Oe.call(ze, ge, J) : Oe, J == null)
                  break e;
                ge = u({}, ge, J);
                break e;
              case 2:
                zr = !0;
            }
          }
          F.callback !== null && F.lane !== 0 && (t.flags |= 64, J = c.effects, J === null ? c.effects = [F] : J.push(F));
        } else
          ze = { eventTime: ze, lane: J, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, re === null ? (W = re = ze, D = ge) : re = re.next = ze, S |= J;
        if (F = F.next, F === null) {
          if (F = c.shared.pending, F === null)
            break;
          J = F, F = J.next, J.next = null, c.lastBaseUpdate = J, c.shared.pending = null;
        }
      } while (1);
      if (re === null && (D = ge), c.baseState = D, c.firstBaseUpdate = W, c.lastBaseUpdate = re, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        g === null && (c.shared.lanes = 0);
      hn |= S, t.lanes = S, t.memoizedState = ge;
    }
  }
  function uh(t, r, s) {
    if (t = r.effects, r.effects = null, t !== null)
      for (r = 0; r < t.length; r++) {
        var l = t[r], c = l.callback;
        if (c !== null) {
          if (l.callback = null, l = s, typeof c != "function")
            throw Error(h(191, c));
          c.call(l);
        }
      }
  }
  var hh = new i.Component().refs;
  function Yo(t, r, s, l) {
    r = t.memoizedState, s = s(l, r), s = s == null ? r : u({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var _a = { isMounted: function(t) {
    return (t = t._reactInternals) ? z(t) === t : !1;
  }, enqueueSetState: function(t, r, s) {
    t = t._reactInternals;
    var l = wt(), c = jr(t), g = Er(l, c);
    g.payload = r, s != null && (g.callback = s), r = Br(t, g, c), r !== null && (Yt(r, t, c, l), ma(r, t, c));
  }, enqueueReplaceState: function(t, r, s) {
    t = t._reactInternals;
    var l = wt(), c = jr(t), g = Er(l, c);
    g.tag = 1, g.payload = r, s != null && (g.callback = s), r = Br(t, g, c), r !== null && (Yt(r, t, c, l), ma(r, t, c));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var s = wt(), l = jr(t), c = Er(s, l);
    c.tag = 2, r != null && (c.callback = r), r = Br(t, c, l), r !== null && (Yt(r, t, l, s), ma(r, t, l));
  } };
  function ch(t, r, s, l, c, g, S) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, g, S) : r.prototype && r.prototype.isPureReactComponent ? !ga(s, l) || !ga(c, g) : !0;
  }
  function dh(t, r, s) {
    var l = !1, c = Ur, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Ht(g) : (c = Rt(r) ? an : yt.current, l = r.contextTypes, g = (l = l != null) ? Ln(t, c) : Ur), r = new r(s, g), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _a, t.stateNode = r, r._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = c, t.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function fh(t, r, s, l) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, l), r.state !== t && _a.enqueueReplaceState(r, r.state, null);
  }
  function Ko(t, r, s, l) {
    var c = t.stateNode;
    c.props = s, c.state = t.memoizedState, c.refs = hh, Wo(t);
    var g = r.contextType;
    typeof g == "object" && g !== null ? c.context = Ht(g) : (g = Rt(r) ? an : yt.current, c.context = Ln(t, g)), c.state = t.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (Yo(t, r, g, s), c.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && _a.enqueueReplaceState(c, c.state, null), ya(t, s, c, l), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Pi(t, r, s) {
    if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(h(309));
          var l = s.stateNode;
        }
        if (!l)
          throw Error(h(147, t));
        var c = l, g = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(S) {
          var F = c.refs;
          F === hh && (F = c.refs = {}), S === null ? delete F[g] : F[g] = S;
        }, r._stringRef = g, r);
      }
      if (typeof t != "string")
        throw Error(h(284));
      if (!s._owner)
        throw Error(h(290, t));
    }
    return t;
  }
  function Sa(t, r) {
    throw t = Object.prototype.toString.call(r), Error(h(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function gh(t) {
    var r = t._init;
    return r(t._payload);
  }
  function ph(t) {
    function r(L, M) {
      if (t) {
        var U = L.deletions;
        U === null ? (L.deletions = [M], L.flags |= 16) : U.push(M);
      }
    }
    function s(L, M) {
      if (!t)
        return null;
      for (; M !== null; )
        r(L, M), M = M.sibling;
      return null;
    }
    function l(L, M) {
      for (L = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? L.set(M.key, M) : L.set(M.index, M), M = M.sibling;
      return L;
    }
    function c(L, M) {
      return L = Yr(L, M), L.index = 0, L.sibling = null, L;
    }
    function g(L, M, U) {
      return L.index = U, t ? (U = L.alternate, U !== null ? (U = U.index, U < M ? (L.flags |= 2, M) : U) : (L.flags |= 2, M)) : (L.flags |= 1048576, M);
    }
    function S(L) {
      return t && L.alternate === null && (L.flags |= 2), L;
    }
    function F(L, M, U, Z) {
      return M === null || M.tag !== 6 ? (M = Ol(U, L.mode, Z), M.return = L, M) : (M = c(M, U), M.return = L, M);
    }
    function D(L, M, U, Z) {
      var se = U.type;
      return se === y ? re(L, M, U.props.children, Z, U.key) : M !== null && (M.elementType === se || typeof se == "object" && se !== null && se.$$typeof === v && gh(se) === M.type) ? (Z = c(M, U.props), Z.ref = Pi(L, M, U), Z.return = L, Z) : (Z = Ya(U.type, U.key, U.props, null, L.mode, Z), Z.ref = Pi(L, M, U), Z.return = L, Z);
    }
    function W(L, M, U, Z) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== U.containerInfo || M.stateNode.implementation !== U.implementation ? (M = Il(U, L.mode, Z), M.return = L, M) : (M = c(M, U.children || []), M.return = L, M);
    }
    function re(L, M, U, Z, se) {
      return M === null || M.tag !== 7 ? (M = gn(U, L.mode, Z, se), M.return = L, M) : (M = c(M, U), M.return = L, M);
    }
    function ge(L, M, U) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = Ol("" + M, L.mode, U), M.return = L, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case f:
            return U = Ya(M.type, M.key, M.props, null, L.mode, U), U.ref = Pi(L, null, M), U.return = L, U;
          case p:
            return M = Il(M, L.mode, U), M.return = L, M;
          case v:
            var Z = M._init;
            return ge(L, Z(M._payload), U);
        }
        if (ae(M) || b(M))
          return M = gn(M, L.mode, U, null), M.return = L, M;
        Sa(L, M);
      }
      return null;
    }
    function J(L, M, U, Z) {
      var se = M !== null ? M.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return se !== null ? null : F(L, M, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case f:
            return U.key === se ? D(L, M, U, Z) : null;
          case p:
            return U.key === se ? W(L, M, U, Z) : null;
          case v:
            return se = U._init, J(
              L,
              M,
              se(U._payload),
              Z
            );
        }
        if (ae(U) || b(U))
          return se !== null ? null : re(L, M, U, Z, null);
        Sa(L, U);
      }
      return null;
    }
    function ze(L, M, U, Z, se) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number")
        return L = L.get(U) || null, F(M, L, "" + Z, se);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case f:
            return L = L.get(Z.key === null ? U : Z.key) || null, D(M, L, Z, se);
          case p:
            return L = L.get(Z.key === null ? U : Z.key) || null, W(M, L, Z, se);
          case v:
            var ve = Z._init;
            return ze(L, M, U, ve(Z._payload), se);
        }
        if (ae(Z) || b(Z))
          return L = L.get(U) || null, re(M, L, Z, se, null);
        Sa(M, Z);
      }
      return null;
    }
    function Oe(L, M, U, Z) {
      for (var se = null, ve = null, pe = M, ke = M = 0, ct = null; pe !== null && ke < U.length; ke++) {
        pe.index > ke ? (ct = pe, pe = null) : ct = pe.sibling;
        var Ee = J(L, pe, U[ke], Z);
        if (Ee === null) {
          pe === null && (pe = ct);
          break;
        }
        t && pe && Ee.alternate === null && r(L, pe), M = g(Ee, M, ke), ve === null ? se = Ee : ve.sibling = Ee, ve = Ee, pe = ct;
      }
      if (ke === U.length)
        return s(L, pe), He && on(L, ke), se;
      if (pe === null) {
        for (; ke < U.length; ke++)
          pe = ge(L, U[ke], Z), pe !== null && (M = g(pe, M, ke), ve === null ? se = pe : ve.sibling = pe, ve = pe);
        return He && on(L, ke), se;
      }
      for (pe = l(L, pe); ke < U.length; ke++)
        ct = ze(pe, L, ke, U[ke], Z), ct !== null && (t && ct.alternate !== null && pe.delete(ct.key === null ? ke : ct.key), M = g(ct, M, ke), ve === null ? se = ct : ve.sibling = ct, ve = ct);
      return t && pe.forEach(function(Kr) {
        return r(L, Kr);
      }), He && on(L, ke), se;
    }
    function Ft(L, M, U, Z) {
      var se = b(U);
      if (typeof se != "function")
        throw Error(h(150));
      if (U = se.call(U), U == null)
        throw Error(h(151));
      for (var ve = se = null, pe = M, ke = M = 0, ct = null, Ee = U.next(); pe !== null && !Ee.done; ke++, Ee = U.next()) {
        pe.index > ke ? (ct = pe, pe = null) : ct = pe.sibling;
        var Kr = J(L, pe, Ee.value, Z);
        if (Kr === null) {
          pe === null && (pe = ct);
          break;
        }
        t && pe && Kr.alternate === null && r(L, pe), M = g(Kr, M, ke), ve === null ? se = Kr : ve.sibling = Kr, ve = Kr, pe = ct;
      }
      if (Ee.done)
        return s(
          L,
          pe
        ), He && on(L, ke), se;
      if (pe === null) {
        for (; !Ee.done; ke++, Ee = U.next())
          Ee = ge(L, Ee.value, Z), Ee !== null && (M = g(Ee, M, ke), ve === null ? se = Ee : ve.sibling = Ee, ve = Ee);
        return He && on(L, ke), se;
      }
      for (pe = l(L, pe); !Ee.done; ke++, Ee = U.next())
        Ee = ze(pe, L, ke, Ee.value, Z), Ee !== null && (t && Ee.alternate !== null && pe.delete(Ee.key === null ? ke : Ee.key), M = g(Ee, M, ke), ve === null ? se = Ee : ve.sibling = Ee, ve = Ee);
      return t && pe.forEach(function(gf) {
        return r(L, gf);
      }), He && on(L, ke), se;
    }
    function br(L, M, U, Z) {
      if (typeof U == "object" && U !== null && U.type === y && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case f:
            e: {
              for (var se = U.key, ve = M; ve !== null; ) {
                if (ve.key === se) {
                  if (se = U.type, se === y) {
                    if (ve.tag === 7) {
                      s(L, ve.sibling), M = c(ve, U.props.children), M.return = L, L = M;
                      break e;
                    }
                  } else if (ve.elementType === se || typeof se == "object" && se !== null && se.$$typeof === v && gh(se) === ve.type) {
                    s(L, ve.sibling), M = c(ve, U.props), M.ref = Pi(L, ve, U), M.return = L, L = M;
                    break e;
                  }
                  s(L, ve);
                  break;
                } else
                  r(L, ve);
                ve = ve.sibling;
              }
              U.type === y ? (M = gn(U.props.children, L.mode, Z, U.key), M.return = L, L = M) : (Z = Ya(U.type, U.key, U.props, null, L.mode, Z), Z.ref = Pi(L, M, U), Z.return = L, L = Z);
            }
            return S(L);
          case p:
            e: {
              for (ve = U.key; M !== null; ) {
                if (M.key === ve)
                  if (M.tag === 4 && M.stateNode.containerInfo === U.containerInfo && M.stateNode.implementation === U.implementation) {
                    s(L, M.sibling), M = c(M, U.children || []), M.return = L, L = M;
                    break e;
                  } else {
                    s(L, M);
                    break;
                  }
                else
                  r(L, M);
                M = M.sibling;
              }
              M = Il(U, L.mode, Z), M.return = L, L = M;
            }
            return S(L);
          case v:
            return ve = U._init, br(L, M, ve(U._payload), Z);
        }
        if (ae(U))
          return Oe(L, M, U, Z);
        if (b(U))
          return Ft(L, M, U, Z);
        Sa(L, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, M !== null && M.tag === 6 ? (s(L, M.sibling), M = c(M, U), M.return = L, L = M) : (s(L, M), M = Ol(U, L.mode, Z), M.return = L, L = M), S(L)) : s(L, M);
    }
    return br;
  }
  var Vn = ph(!0), vh = ph(!1), ki = {}, jt = Gr(ki), Ei = Gr(ki), Hn = Gr(ki);
  function gr(t) {
    if (t === ki)
      throw Error(h(174));
    return t;
  }
  function Xo(t, r) {
    Ge(Hn, r), Ge(Ei, t), Ge(jt, ki), t = oe(r), Ue(jt), Ge(jt, t);
  }
  function jn() {
    Ue(jt), Ue(Ei), Ue(Hn);
  }
  function mh(t) {
    var r = gr(Hn.current), s = gr(jt.current);
    r = B(s, t.type, r), s !== r && (Ge(Ei, t), Ge(jt, r));
  }
  function $o(t) {
    Ei.current === t && (Ue(jt), Ue(Ei));
  }
  var Ye = Gr(0);
  function Ca(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || Yu(s) || xo(s)))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var qo = [];
  function Qo() {
    for (var t = 0; t < qo.length; t++) {
      var r = qo[t];
      fe ? r._workInProgressVersionPrimary = null : r._workInProgressVersionSecondary = null;
    }
    qo.length = 0;
  }
  var wa = d.ReactCurrentDispatcher, Jo = d.ReactCurrentBatchConfig, un = 0, Ke = null, nt = null, ut = null, xa = !1, Ti = !1, Ri = 0, G1 = 0;
  function _t() {
    throw Error(h(321));
  }
  function Zo(t, r) {
    if (r === null)
      return !1;
    for (var s = 0; s < r.length && s < t.length; s++)
      if (!tr(t[s], r[s]))
        return !1;
    return !0;
  }
  function el(t, r, s, l, c, g) {
    if (un = g, Ke = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wa.current = t === null || t.memoizedState === null ? V1 : H1, t = s(l, c), Ti) {
      g = 0;
      do {
        if (Ti = !1, Ri = 0, 25 <= g)
          throw Error(h(301));
        g += 1, ut = nt = null, r.updateQueue = null, wa.current = j1, t = s(l, c);
      } while (Ti);
    }
    if (wa.current = Ea, r = nt !== null && nt.next !== null, un = 0, ut = nt = Ke = null, xa = !1, r)
      throw Error(h(300));
    return t;
  }
  function tl() {
    var t = Ri !== 0;
    return Ri = 0, t;
  }
  function pr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ut === null ? Ke.memoizedState = ut = t : ut = ut.next = t, ut;
  }
  function Wt() {
    if (nt === null) {
      var t = Ke.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = nt.next;
    var r = ut === null ? Ke.memoizedState : ut.next;
    if (r !== null)
      ut = r, nt = t;
    else {
      if (t === null)
        throw Error(h(310));
      nt = t, t = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, ut === null ? Ke.memoizedState = ut = t : ut = ut.next = t;
    }
    return ut;
  }
  function bi(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function rl(t) {
    var r = Wt(), s = r.queue;
    if (s === null)
      throw Error(h(311));
    s.lastRenderedReducer = t;
    var l = nt, c = l.baseQueue, g = s.pending;
    if (g !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = g.next, g.next = S;
      }
      l.baseQueue = c = g, s.pending = null;
    }
    if (c !== null) {
      g = c.next, l = l.baseState;
      var F = S = null, D = null, W = g;
      do {
        var re = W.lane;
        if ((un & re) === re)
          D !== null && (D = D.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), l = W.hasEagerState ? W.eagerState : t(l, W.action);
        else {
          var ge = {
            lane: re,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          D === null ? (F = D = ge, S = l) : D = D.next = ge, Ke.lanes |= re, hn |= re;
        }
        W = W.next;
      } while (W !== null && W !== g);
      D === null ? S = l : D.next = F, tr(l, r.memoizedState) || (bt = !0), r.memoizedState = l, r.baseState = S, r.baseQueue = D, s.lastRenderedState = l;
    }
    if (t = s.interleaved, t !== null) {
      c = t;
      do
        g = c.lane, Ke.lanes |= g, hn |= g, c = c.next;
      while (c !== t);
    } else
      c === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function nl(t) {
    var r = Wt(), s = r.queue;
    if (s === null)
      throw Error(h(311));
    s.lastRenderedReducer = t;
    var l = s.dispatch, c = s.pending, g = r.memoizedState;
    if (c !== null) {
      s.pending = null;
      var S = c = c.next;
      do
        g = t(g, S.action), S = S.next;
      while (S !== c);
      tr(g, r.memoizedState) || (bt = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), s.lastRenderedState = g;
    }
    return [g, l];
  }
  function yh() {
  }
  function _h(t, r) {
    var s = Ke, l = Wt(), c = r(), g = !tr(l.memoizedState, c);
    if (g && (l.memoizedState = c, bt = !0), l = l.queue, il(wh.bind(null, s, l, t), [t]), l.getSnapshot !== r || g || ut !== null && ut.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ni(9, Ch.bind(null, s, l, c, r), void 0, null), ht === null)
        throw Error(h(349));
      un & 30 || Sh(s, r, c);
    }
    return c;
  }
  function Sh(t, r, s) {
    t.flags |= 16384, t = { getSnapshot: r, value: s }, r = Ke.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ke.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t));
  }
  function Ch(t, r, s, l) {
    r.value = s, r.getSnapshot = l, xh(r) && Ph(t);
  }
  function wh(t, r, s) {
    return s(function() {
      xh(r) && Ph(t);
    });
  }
  function xh(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !tr(t, s);
    } catch {
      return !0;
    }
  }
  function Ph(t) {
    var r = fr(t, 1);
    r !== null && Yt(r, t, 1, -1);
  }
  function kh(t) {
    var r = pr();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: t }, r.queue = t, t = t.dispatch = B1.bind(null, Ke, t), [r.memoizedState, t];
  }
  function Ni(t, r, s, l) {
    return t = { tag: t, create: r, destroy: s, deps: l, next: null }, r = Ke.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ke.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (l = s.next, s.next = t, t.next = l, r.lastEffect = t)), t;
  }
  function Eh() {
    return Wt().memoizedState;
  }
  function Pa(t, r, s, l) {
    var c = pr();
    Ke.flags |= t, c.memoizedState = Ni(1 | r, s, void 0, l === void 0 ? null : l);
  }
  function ka(t, r, s, l) {
    var c = Wt();
    l = l === void 0 ? null : l;
    var g = void 0;
    if (nt !== null) {
      var S = nt.memoizedState;
      if (g = S.destroy, l !== null && Zo(l, S.deps)) {
        c.memoizedState = Ni(r, s, g, l);
        return;
      }
    }
    Ke.flags |= t, c.memoizedState = Ni(1 | r, s, g, l);
  }
  function Th(t, r) {
    return Pa(8390656, 8, t, r);
  }
  function il(t, r) {
    return ka(2048, 8, t, r);
  }
  function Rh(t, r) {
    return ka(4, 2, t, r);
  }
  function bh(t, r) {
    return ka(4, 4, t, r);
  }
  function Nh(t, r) {
    if (typeof r == "function")
      return t = t(), r(t), function() {
        r(null);
      };
    if (r != null)
      return t = t(), r.current = t, function() {
        r.current = null;
      };
  }
  function Ah(t, r, s) {
    return s = s != null ? s.concat([t]) : null, ka(4, 4, Nh.bind(null, r, t), s);
  }
  function al() {
  }
  function Fh(t, r) {
    var s = Wt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Zo(r, l[1]) ? l[0] : (s.memoizedState = [t, r], t);
  }
  function Mh(t, r) {
    var s = Wt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Zo(r, l[1]) ? l[0] : (t = t(), s.memoizedState = [t, r], t);
  }
  function Oh(t, r, s) {
    return un & 21 ? (tr(s, r) || (s = qu(), Ke.lanes |= s, hn |= s, t.baseState = !0), r) : (t.baseState && (t.baseState = !1, bt = !0), t.memoizedState = s);
  }
  function U1(t, r) {
    var s = Pe;
    Pe = s !== 0 && 4 > s ? s : 4, t(!0);
    var l = Jo.transition;
    Jo.transition = {};
    try {
      t(!1), r();
    } finally {
      Pe = s, Jo.transition = l;
    }
  }
  function Ih() {
    return Wt().memoizedState;
  }
  function z1(t, r, s) {
    var l = jr(t);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, Lh(t))
      Dh(r, s);
    else if (s = sh(t, r, s, l), s !== null) {
      var c = wt();
      Yt(s, t, l, c), Gh(s, r, l);
    }
  }
  function B1(t, r, s) {
    var l = jr(t), c = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Lh(t))
      Dh(r, c);
    else {
      var g = t.alternate;
      if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null))
        try {
          var S = r.lastRenderedState, F = g(S, s);
          if (c.hasEagerState = !0, c.eagerState = F, tr(F, S)) {
            var D = r.interleaved;
            D === null ? (c.next = c, jo(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      s = sh(t, r, c, l), s !== null && (c = wt(), Yt(s, t, l, c), Gh(s, r, l));
    }
  }
  function Lh(t) {
    var r = t.alternate;
    return t === Ke || r !== null && r === Ke;
  }
  function Dh(t, r) {
    Ti = xa = !0;
    var s = t.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r;
  }
  function Gh(t, r, s) {
    if (s & 4194240) {
      var l = r.lanes;
      l &= t.pendingLanes, s |= l, r.lanes = s, No(t, s);
    }
  }
  var Ea = { readContext: Ht, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, V1 = { readContext: Ht, useCallback: function(t, r) {
    return pr().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Ht, useEffect: Th, useImperativeHandle: function(t, r, s) {
    return s = s != null ? s.concat([t]) : null, Pa(
      4194308,
      4,
      Nh.bind(null, r, t),
      s
    );
  }, useLayoutEffect: function(t, r) {
    return Pa(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return Pa(4, 2, t, r);
  }, useMemo: function(t, r) {
    var s = pr();
    return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t;
  }, useReducer: function(t, r, s) {
    var l = pr();
    return r = s !== void 0 ? s(r) : r, l.memoizedState = l.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, l.queue = t, t = t.dispatch = z1.bind(null, Ke, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var r = pr();
    return t = { current: t }, r.memoizedState = t;
  }, useState: kh, useDebugValue: al, useDeferredValue: function(t) {
    return pr().memoizedState = t;
  }, useTransition: function() {
    var t = kh(!1), r = t[0];
    return t = U1.bind(null, t[1]), pr().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, s) {
    var l = Ke, c = pr();
    if (He) {
      if (s === void 0)
        throw Error(h(407));
      s = s();
    } else {
      if (s = r(), ht === null)
        throw Error(h(349));
      un & 30 || Sh(l, r, s);
    }
    c.memoizedState = s;
    var g = { value: s, getSnapshot: r };
    return c.queue = g, Th(wh.bind(
      null,
      l,
      g,
      t
    ), [t]), l.flags |= 2048, Ni(9, Ch.bind(null, l, g, s, r), void 0, null), s;
  }, useId: function() {
    var t = pr(), r = ht.identifierPrefix;
    if (He) {
      var s = kr, l = Pr;
      s = (l & ~(1 << 32 - er(l) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Ri++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else
      s = G1++, r = ":" + r + "r" + s.toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, H1 = {
    readContext: Ht,
    useCallback: Fh,
    useContext: Ht,
    useEffect: il,
    useImperativeHandle: Ah,
    useInsertionEffect: Rh,
    useLayoutEffect: bh,
    useMemo: Mh,
    useReducer: rl,
    useRef: Eh,
    useState: function() {
      return rl(bi);
    },
    useDebugValue: al,
    useDeferredValue: function(t) {
      var r = Wt();
      return Oh(r, nt.memoizedState, t);
    },
    useTransition: function() {
      var t = rl(bi)[0], r = Wt().memoizedState;
      return [t, r];
    },
    useMutableSource: yh,
    useSyncExternalStore: _h,
    useId: Ih,
    unstable_isNewReconciler: !1
  }, j1 = { readContext: Ht, useCallback: Fh, useContext: Ht, useEffect: il, useImperativeHandle: Ah, useInsertionEffect: Rh, useLayoutEffect: bh, useMemo: Mh, useReducer: nl, useRef: Eh, useState: function() {
    return nl(bi);
  }, useDebugValue: al, useDeferredValue: function(t) {
    var r = Wt();
    return nt === null ? r.memoizedState = t : Oh(r, nt.memoizedState, t);
  }, useTransition: function() {
    var t = nl(bi)[0], r = Wt().memoizedState;
    return [t, r];
  }, useMutableSource: yh, useSyncExternalStore: _h, useId: Ih, unstable_isNewReconciler: !1 };
  function Wn(t, r) {
    try {
      var s = "", l = r;
      do
        s += D1(l), l = l.return;
      while (l);
      var c = s;
    } catch (g) {
      c = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: t, source: r, stack: c, digest: null };
  }
  function sl(t, r, s) {
    return { value: t, source: null, stack: s ?? null, digest: r ?? null };
  }
  function ol(t, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var W1 = typeof WeakMap == "function" ? WeakMap : Map;
  function Uh(t, r, s) {
    s = Er(-1, s), s.tag = 3, s.payload = { element: null };
    var l = r.value;
    return s.callback = function() {
      za || (za = !0, Tl = l), ol(t, r);
    }, s;
  }
  function zh(t, r, s) {
    s = Er(-1, s), s.tag = 3;
    var l = t.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = r.value;
      s.payload = function() {
        return l(c);
      }, s.callback = function() {
        ol(t, r);
      };
    }
    var g = t.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (s.callback = function() {
      ol(t, r), typeof l != "function" && (Vr === null ? Vr = /* @__PURE__ */ new Set([this]) : Vr.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), s;
  }
  function Bh(t, r, s) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new W1();
      var c = /* @__PURE__ */ new Set();
      l.set(r, c);
    } else
      c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
    c.has(s) || (c.add(s), t = sf.bind(null, t, r, s), r.then(t, t));
  }
  function Vh(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Hh(t, r, s, l, c) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = c, t) : (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Er(-1, 1), r.tag = 2, Br(s, r, 1))), s.lanes |= 1), t);
  }
  var Y1 = d.ReactCurrentOwner, bt = !1;
  function Pt(t, r, s, l) {
    r.child = t === null ? vh(r, null, s, l) : Vn(r, t.child, s, l);
  }
  function jh(t, r, s, l, c) {
    s = s.render;
    var g = r.ref;
    return Bn(r, c), l = el(t, r, s, l, g, c), s = tl(), t !== null && !bt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~c, Tr(t, r, c)) : (He && s && Io(r), r.flags |= 1, Pt(t, r, l, c), r.child);
  }
  function Wh(t, r, s, l, c) {
    if (t === null) {
      var g = s.type;
      return typeof g == "function" && !Ml(g) && g.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = g, Yh(t, r, g, l, c)) : (t = Ya(s.type, null, l, r, r.mode, c), t.ref = r.ref, t.return = r, r.child = t);
    }
    if (g = t.child, !(t.lanes & c)) {
      var S = g.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ga, s(S, l) && t.ref === r.ref)
        return Tr(t, r, c);
    }
    return r.flags |= 1, t = Yr(g, l), t.ref = r.ref, t.return = r, r.child = t;
  }
  function Yh(t, r, s, l, c) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (ga(g, l) && t.ref === r.ref)
        if (bt = !1, r.pendingProps = l = g, (t.lanes & c) !== 0)
          t.flags & 131072 && (bt = !0);
        else
          return r.lanes = t.lanes, Tr(t, r, c);
    }
    return ll(t, r, s, l, c);
  }
  function Kh(t, r, s) {
    var l = r.pendingProps, c = l.children, g = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(Kn, Lt), Lt |= s;
      else {
        if (!(s & 1073741824))
          return t = g !== null ? g.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, Ge(Kn, Lt), Lt |= t, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = g !== null ? g.baseLanes : s, Ge(Kn, Lt), Lt |= l;
      }
    else
      g !== null ? (l = g.baseLanes | s, r.memoizedState = null) : l = s, Ge(Kn, Lt), Lt |= l;
    return Pt(t, r, c, s), r.child;
  }
  function Xh(t, r) {
    var s = r.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ll(t, r, s, l, c) {
    var g = Rt(s) ? an : yt.current;
    return g = Ln(r, g), Bn(r, c), s = el(t, r, s, l, g, c), l = tl(), t !== null && !bt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~c, Tr(t, r, c)) : (He && l && Io(r), r.flags |= 1, Pt(t, r, s, c), r.child);
  }
  function $h(t, r, s, l, c) {
    if (Rt(s)) {
      var g = !0;
      aa(r);
    } else
      g = !1;
    if (Bn(r, c), r.stateNode === null)
      Ra(t, r), dh(r, s, l), Ko(r, s, l, c), l = !0;
    else if (t === null) {
      var S = r.stateNode, F = r.memoizedProps;
      S.props = F;
      var D = S.context, W = s.contextType;
      typeof W == "object" && W !== null ? W = Ht(W) : (W = Rt(s) ? an : yt.current, W = Ln(r, W));
      var re = s.getDerivedStateFromProps, ge = typeof re == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      ge || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (F !== l || D !== W) && fh(r, S, l, W), zr = !1;
      var J = r.memoizedState;
      S.state = J, ya(r, l, S, c), D = r.memoizedState, F !== l || J !== D || Tt.current || zr ? (typeof re == "function" && (Yo(r, s, re, l), D = r.memoizedState), (F = zr || ch(r, s, F, l, J, D, W)) ? (ge || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = D), S.props = l, S.state = D, S.context = W, l = F) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      S = r.stateNode, oh(t, r), F = r.memoizedProps, W = r.type === r.elementType ? F : nr(r.type, F), S.props = W, ge = r.pendingProps, J = S.context, D = s.contextType, typeof D == "object" && D !== null ? D = Ht(D) : (D = Rt(s) ? an : yt.current, D = Ln(r, D));
      var ze = s.getDerivedStateFromProps;
      (re = typeof ze == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (F !== ge || J !== D) && fh(r, S, l, D), zr = !1, J = r.memoizedState, S.state = J, ya(r, l, S, c);
      var Oe = r.memoizedState;
      F !== ge || J !== Oe || Tt.current || zr ? (typeof ze == "function" && (Yo(r, s, ze, l), Oe = r.memoizedState), (W = zr || ch(r, s, W, l, J, Oe, D) || !1) ? (re || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(l, Oe, D), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(l, Oe, D)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || F === t.memoizedProps && J === t.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || F === t.memoizedProps && J === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = Oe), S.props = l, S.state = Oe, S.context = D, l = W) : (typeof S.componentDidUpdate != "function" || F === t.memoizedProps && J === t.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || F === t.memoizedProps && J === t.memoizedState || (r.flags |= 1024), l = !1);
    }
    return ul(t, r, s, l, g, c);
  }
  function ul(t, r, s, l, c, g) {
    Xh(t, r);
    var S = (r.flags & 128) !== 0;
    if (!l && !S)
      return c && $u(r, s, !1), Tr(t, r, g);
    l = r.stateNode, Y1.current = r;
    var F = S && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, t !== null && S ? (r.child = Vn(r, t.child, null, g), r.child = Vn(r, null, F, g)) : Pt(t, r, F, g), r.memoizedState = l.state, c && $u(r, s, !0), r.child;
  }
  function qh(t) {
    var r = t.stateNode;
    r.pendingContext ? Ku(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Ku(t, r.context, !1), Xo(t, r.containerInfo);
  }
  function Qh(t, r, s, l, c) {
    return Un(), Uo(c), r.flags |= 256, Pt(t, r, s, l), r.child;
  }
  var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cl(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Jh(t, r, s) {
    var l = r.pendingProps, c = Ye.current, g = !1, S = (r.flags & 128) !== 0, F;
    if ((F = S) || (F = t !== null && t.memoizedState === null ? !1 : (c & 2) !== 0), F ? (g = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (c |= 1), Ge(Ye, c & 1), t === null)
      return Go(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (r.mode & 1 ? xo(t) ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = l.children, t = l.fallback, g ? (l = r.mode, g = r.child, S = { mode: "hidden", children: S }, !(l & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = S) : g = Ka(S, l, 0, null), t = gn(t, l, s, null), g.return = r, t.return = r, g.sibling = t, r.child = g, r.child.memoizedState = cl(s), r.memoizedState = hl, t) : dl(r, S));
    if (c = t.memoizedState, c !== null && (F = c.dehydrated, F !== null))
      return K1(t, r, S, l, F, c, s);
    if (g) {
      g = l.fallback, S = r.mode, c = t.child, F = c.sibling;
      var D = { mode: "hidden", children: l.children };
      return !(S & 1) && r.child !== c ? (l = r.child, l.childLanes = 0, l.pendingProps = D, r.deletions = null) : (l = Yr(c, D), l.subtreeFlags = c.subtreeFlags & 14680064), F !== null ? g = Yr(F, g) : (g = gn(g, S, s, null), g.flags |= 2), g.return = r, l.return = r, l.sibling = g, r.child = l, l = g, g = r.child, S = t.child.memoizedState, S = S === null ? cl(s) : { baseLanes: S.baseLanes | s, cachePool: null, transitions: S.transitions }, g.memoizedState = S, g.childLanes = t.childLanes & ~s, r.memoizedState = hl, l;
    }
    return g = t.child, t = g.sibling, l = Yr(g, { mode: "visible", children: l.children }), !(r.mode & 1) && (l.lanes = s), l.return = r, l.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = l, r.memoizedState = null, l;
  }
  function dl(t, r) {
    return r = Ka({ mode: "visible", children: r }, t.mode, 0, null), r.return = t, t.child = r;
  }
  function Ta(t, r, s, l) {
    return l !== null && Uo(l), Vn(r, t.child, null, s), t = dl(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
  }
  function K1(t, r, s, l, c, g, S) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, l = sl(Error(h(422))), Ta(t, r, S, l)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (g = l.fallback, c = r.mode, l = Ka({ mode: "visible", children: l.children }, c, 0, null), g = gn(g, c, S, null), g.flags |= 2, l.return = r, g.return = r, l.sibling = g, r.child = l, r.mode & 1 && Vn(r, t.child, null, S), r.child.memoizedState = cl(S), r.memoizedState = hl, g);
    if (!(r.mode & 1))
      return Ta(t, r, S, null);
    if (xo(c))
      return l = s1(c).digest, g = Error(h(419)), l = sl(
        g,
        l,
        void 0
      ), Ta(t, r, S, l);
    if (s = (S & t.childLanes) !== 0, bt || s) {
      if (l = ht, l !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (l.suspendedLanes | S) ? 0 : c, c !== 0 && c !== g.retryLane && (g.retryLane = c, fr(t, c), Yt(
          l,
          t,
          c,
          -1
        ));
      }
      return Fl(), l = sl(Error(h(421))), Ta(t, r, S, l);
    }
    return Yu(c) ? (r.flags |= 128, r.child = t.child, r = of.bind(null, t), o1(c, r), null) : (t = g.treeContext, De && (Vt = h1(c), It = r, He = !0, rr = null, xi = !1, t !== null && (zt[Bt++] = Pr, zt[Bt++] = kr, zt[Bt++] = sn, Pr = t.id, kr = t.overflow, sn = r)), r = dl(r, l.children), r.flags |= 4096, r);
  }
  function Zh(t, r, s) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r), Ho(t.return, r, s);
  }
  function fl(t, r, s, l, c) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: c } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = l, g.tail = s, g.tailMode = c);
  }
  function ec(t, r, s) {
    var l = r.pendingProps, c = l.revealOrder, g = l.tail;
    if (Pt(t, r, l.children, s), l = Ye.current, l & 2)
      l = l & 1 | 2, r.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        e:
          for (t = r.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && Zh(t, s, r);
            else if (t.tag === 19)
              Zh(t, s, r);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === r)
              break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === r)
                break e;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      l &= 1;
    }
    if (Ge(Ye, l), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (s = r.child, c = null; s !== null; )
            t = s.alternate, t !== null && Ca(t) === null && (c = s), s = s.sibling;
          s = c, s === null ? (c = r.child, r.child = null) : (c = s.sibling, s.sibling = null), fl(r, !1, c, s, g);
          break;
        case "backwards":
          for (s = null, c = r.child, r.child = null; c !== null; ) {
            if (t = c.alternate, t !== null && Ca(t) === null) {
              r.child = c;
              break;
            }
            t = c.sibling, c.sibling = s, s = c, c = t;
          }
          fl(r, !0, s, null, g);
          break;
        case "together":
          fl(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ra(t, r) {
    !(r.mode & 1) && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Tr(t, r, s) {
    if (t !== null && (r.dependencies = t.dependencies), hn |= r.lanes, !(s & r.childLanes))
      return null;
    if (t !== null && r.child !== t.child)
      throw Error(h(153));
    if (r.child !== null) {
      for (t = r.child, s = Yr(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null; )
        t = t.sibling, s = s.sibling = Yr(t, t.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function X1(t, r, s) {
    switch (r.tag) {
      case 3:
        qh(r), Un();
        break;
      case 5:
        mh(r);
        break;
      case 1:
        Rt(r.type) && aa(r);
        break;
      case 4:
        Xo(r, r.stateNode.containerInfo);
        break;
      case 10:
        ah(r, r.type._context, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Ge(Ye, Ye.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Jh(t, r, s) : (Ge(Ye, Ye.current & 1), t = Tr(t, r, s), t !== null ? t.sibling : null);
        Ge(Ye, Ye.current & 1);
        break;
      case 19:
        if (l = (s & r.childLanes) !== 0, t.flags & 128) {
          if (l)
            return ec(
              t,
              r,
              s
            );
          r.flags |= 128;
        }
        var c = r.memoizedState;
        if (c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ge(Ye, Ye.current), l)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Kh(t, r, s);
    }
    return Tr(t, r, s);
  }
  function vr(t) {
    t.flags |= 4;
  }
  function tc(t, r) {
    if (t !== null && t.child === r.child)
      return !0;
    if (r.flags & 16)
      return !1;
    for (t = r.child; t !== null; ) {
      if (t.flags & 12854 || t.subtreeFlags & 12854)
        return !1;
      t = t.sibling;
    }
    return !0;
  }
  var Ai, Fi, ba, Na;
  if (de)
    Ai = function(t, r) {
      for (var s = r.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6)
          $(t, s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === r)
          break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === r)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, Fi = function() {
    }, ba = function(t, r, s, l, c) {
      if (t = t.memoizedProps, t !== l) {
        var g = r.stateNode, S = gr(jt.current);
        s = le(g, s, t, l, c, S), (r.updateQueue = s) && vr(r);
      }
    }, Na = function(t, r, s, l) {
      s !== l && vr(r);
    };
  else if (Re) {
    Ai = function(t, r, s, l) {
      for (var c = r.child; c !== null; ) {
        if (c.tag === 5) {
          var g = c.stateNode;
          s && l && (g = ju(g, c.type, c.memoizedProps, c)), $(t, g);
        } else if (c.tag === 6)
          g = c.stateNode, s && l && (g = Wu(g, c.memoizedProps, c)), $(t, g);
        else if (c.tag !== 4) {
          if (c.tag === 22 && c.memoizedState !== null)
            g = c.child, g !== null && (g.return = c), Ai(t, c, !0, !0);
          else if (c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
        }
        if (c === r)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === r)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    };
    var rc = function(t, r, s, l) {
      for (var c = r.child; c !== null; ) {
        if (c.tag === 5) {
          var g = c.stateNode;
          s && l && (g = ju(g, c.type, c.memoizedProps, c)), Hu(t, g);
        } else if (c.tag === 6)
          g = c.stateNode, s && l && (g = Wu(g, c.memoizedProps, c)), Hu(t, g);
        else if (c.tag !== 4) {
          if (c.tag === 22 && c.memoizedState !== null)
            g = c.child, g !== null && (g.return = c), rc(t, c, !0, !0);
          else if (c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
        }
        if (c === r)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === r)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    };
    Fi = function(t, r) {
      var s = r.stateNode;
      if (!tc(t, r)) {
        t = s.containerInfo;
        var l = Vu(t);
        rc(l, r, !1, !1), s.pendingChildren = l, vr(r), r1(t, l);
      }
    }, ba = function(t, r, s, l, c) {
      var g = t.stateNode, S = t.memoizedProps;
      if ((t = tc(t, r)) && S === l)
        r.stateNode = g;
      else {
        var F = r.stateNode, D = gr(jt.current), W = null;
        S !== l && (W = le(F, s, S, l, c, D)), t && W === null ? r.stateNode = g : (g = t1(g, W, s, S, l, r, t, F), he(g, s, l, c, D) && vr(r), r.stateNode = g, t ? vr(r) : Ai(g, r, !1, !1));
      }
    }, Na = function(t, r, s, l) {
      s !== l ? (t = gr(Hn.current), s = gr(jt.current), r.stateNode = xe(l, t, s, r), vr(r)) : r.stateNode = t.stateNode;
    };
  } else
    Fi = function() {
    }, ba = function() {
    }, Na = function() {
    };
  function Mi(t, r) {
    if (!He)
      switch (t.tailMode) {
        case "hidden":
          r = t.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), r = r.sibling;
          s === null ? t.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = t.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), s = s.sibling;
          l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function St(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, s = 0, l = 0;
    if (r)
      for (var c = t.child; c !== null; )
        s |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = t, c = c.sibling;
    else
      for (c = t.child; c !== null; )
        s |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = t, c = c.sibling;
    return t.subtreeFlags |= l, t.childLanes = s, r;
  }
  function $1(t, r, s) {
    var l = r.pendingProps;
    switch (Lo(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return St(r), null;
      case 1:
        return Rt(r.type) && ia(), St(r), null;
      case 3:
        return s = r.stateNode, jn(), Ue(Tt), Ue(yt), Qo(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && (fa(r) ? vr(r) : t === null || t.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, rr !== null && (Nl(rr), rr = null))), Fi(t, r), St(r), null;
      case 5:
        $o(r), s = gr(Hn.current);
        var c = r.type;
        if (t !== null && r.stateNode != null)
          ba(t, r, c, l, s), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null)
              throw Error(h(166));
            return St(r), null;
          }
          if (t = gr(jt.current), fa(r)) {
            if (!De)
              throw Error(h(175));
            t = c1(r.stateNode, r.type, r.memoizedProps, s, t, r, !xi), r.updateQueue = t, t !== null && vr(r);
          } else {
            var g = K(c, l, s, t, r);
            Ai(g, r, !1, !1), r.stateNode = g, he(g, c, l, s, t) && vr(r);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return St(r), null;
      case 6:
        if (t && r.stateNode != null)
          Na(t, r, t.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null)
            throw Error(h(166));
          if (t = gr(Hn.current), s = gr(jt.current), fa(r)) {
            if (!De)
              throw Error(h(176));
            if (t = r.stateNode, s = r.memoizedProps, (l = d1(t, s, r, !xi)) && (c = It, c !== null))
              switch (c.tag) {
                case 3:
                  S1(c.stateNode.containerInfo, t, s, (c.mode & 1) !== 0);
                  break;
                case 5:
                  C1(c.type, c.memoizedProps, c.stateNode, t, s, (c.mode & 1) !== 0);
              }
            l && vr(r);
          } else
            r.stateNode = xe(l, t, s, r);
        }
        return St(r), null;
      case 13:
        if (Ue(Ye), l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (He && Vt !== null && r.mode & 1 && !(r.flags & 128))
            ih(), Un(), r.flags |= 98560, c = !1;
          else if (c = fa(r), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!c)
                throw Error(h(318));
              if (!De)
                throw Error(h(344));
              if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c)
                throw Error(h(317));
              f1(c, r);
            } else
              Un(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            St(r), c = !1;
          } else
            rr !== null && (Nl(rr), rr = null), c = !0;
          if (!c)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (s = l !== null, s !== (t !== null && t.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (t === null || Ye.current & 1 ? it === 0 && (it = 3) : Fl())), r.updateQueue !== null && (r.flags |= 4), St(r), null);
      case 4:
        return jn(), Fi(t, r), t === null && Ae(r.stateNode.containerInfo), St(r), null;
      case 10:
        return Vo(r.type._context), St(r), null;
      case 17:
        return Rt(r.type) && ia(), St(r), null;
      case 19:
        if (Ue(Ye), c = r.memoizedState, c === null)
          return St(r), null;
        if (l = (r.flags & 128) !== 0, g = c.rendering, g === null)
          if (l)
            Mi(c, !1);
          else {
            if (it !== 0 || t !== null && t.flags & 128)
              for (t = r.child; t !== null; ) {
                if (g = Ca(t), g !== null) {
                  for (r.flags |= 128, Mi(c, !1), t = g.updateQueue, t !== null && (r.updateQueue = t, r.flags |= 4), r.subtreeFlags = 0, t = s, s = r.child; s !== null; )
                    l = s, c = t, l.flags &= 14680066, g = l.alternate, g === null ? (l.childLanes = 0, l.lanes = c, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = g.childLanes, l.lanes = g.lanes, l.child = g.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = g.memoizedProps, l.memoizedState = g.memoizedState, l.updateQueue = g.updateQueue, l.type = g.type, c = g.dependencies, l.dependencies = c === null ? null : { lanes: c.lanes, firstContext: c.firstContext }), s = s.sibling;
                  return Ge(Ye, Ye.current & 1 | 2), r.child;
                }
                t = t.sibling;
              }
            c.tail !== null && lt() > El && (r.flags |= 128, l = !0, Mi(c, !1), r.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = Ca(g), t !== null) {
              if (r.flags |= 128, l = !0, t = t.updateQueue, t !== null && (r.updateQueue = t, r.flags |= 4), Mi(c, !0), c.tail === null && c.tailMode === "hidden" && !g.alternate && !He)
                return St(r), null;
            } else
              2 * lt() - c.renderingStartTime > El && s !== 1073741824 && (r.flags |= 128, l = !0, Mi(c, !1), r.lanes = 4194304);
          c.isBackwards ? (g.sibling = r.child, r.child = g) : (t = c.last, t !== null ? t.sibling = g : r.child = g, c.last = g);
        }
        return c.tail !== null ? (r = c.tail, c.rendering = r, c.tail = r.sibling, c.renderingStartTime = lt(), r.sibling = null, t = Ye.current, Ge(Ye, l ? t & 1 | 2 : t & 1), r) : (St(r), null);
      case 22:
      case 23:
        return Al(), s = r.memoizedState !== null, t !== null && t.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? Lt & 1073741824 && (St(r), de && r.subtreeFlags & 6 && (r.flags |= 8192)) : St(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(
      156,
      r.tag
    ));
  }
  function q1(t, r) {
    switch (Lo(r), r.tag) {
      case 1:
        return Rt(r.type) && ia(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 3:
        return jn(), Ue(Tt), Ue(yt), Qo(), t = r.flags, t & 65536 && !(t & 128) ? (r.flags = t & -65537 | 128, r) : null;
      case 5:
        return $o(r), null;
      case 13:
        if (Ue(Ye), t = r.memoizedState, t !== null && t.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(h(340));
          Un();
        }
        return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 19:
        return Ue(Ye), null;
      case 4:
        return jn(), null;
      case 10:
        return Vo(r.type._context), null;
      case 22:
      case 23:
        return Al(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Aa = !1, Ct = !1, Q1 = typeof WeakSet == "function" ? WeakSet : Set, te = null;
  function Yn(t, r) {
    var s = t.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          je(t, r, l);
        }
      else
        s.current = null;
  }
  function gl(t, r, s) {
    try {
      s();
    } catch (l) {
      je(t, r, l);
    }
  }
  var nc = !1;
  function J1(t, r) {
    for (X(t.containerInfo), te = r; te !== null; )
      if (t = te, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null)
        r.return = t, te = r;
      else
        for (; te !== null; ) {
          t = te;
          try {
            var s = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (s !== null) {
                    var l = s.memoizedProps, c = s.memoizedState, g = t.stateNode, S = g.getSnapshotBeforeUpdate(t.elementType === t.type ? l : nr(t.type, l), c);
                    g.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  de && e1(t.stateNode.containerInfo);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (F) {
            je(t, t.return, F);
          }
          if (r = t.sibling, r !== null) {
            r.return = t.return, te = r;
            break;
          }
          te = t.return;
        }
    return s = nc, nc = !1, s;
  }
  function Oi(t, r, s) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var c = l = l.next;
      do {
        if ((c.tag & t) === t) {
          var g = c.destroy;
          c.destroy = void 0, g !== void 0 && gl(r, s, g);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Fa(t, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & t) === t) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function pl(t) {
    var r = t.ref;
    if (r !== null) {
      var s = t.stateNode;
      switch (t.tag) {
        case 5:
          t = ie(s);
          break;
        default:
          t = s;
      }
      typeof r == "function" ? r(t) : r.current = t;
    }
  }
  function ic(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, ic(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && Q(r)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function ac(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function sc(t) {
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ac(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2))
          return t.stateNode;
      }
  }
  function vl(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, r ? _o(s, t, r) : An(s, t);
    else if (l !== 4 && (t = t.child, t !== null))
      for (vl(t, r, s), t = t.sibling; t !== null; )
        vl(t, r, s), t = t.sibling;
  }
  function ml(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, r ? yi(s, t, r) : Zt(s, t);
    else if (l !== 4 && (t = t.child, t !== null))
      for (ml(t, r, s), t = t.sibling; t !== null; )
        ml(t, r, s), t = t.sibling;
  }
  var pt = null, ir = !1;
  function mr(t, r, s) {
    for (s = s.child; s !== null; )
      yl(t, r, s), s = s.sibling;
  }
  function yl(t, r, s) {
    if (cr && typeof cr.onCommitFiberUnmount == "function")
      try {
        cr.onCommitFiberUnmount(ua, s);
      } catch {
      }
    switch (s.tag) {
      case 5:
        Ct || Yn(s, r);
      case 6:
        if (de) {
          var l = pt, c = ir;
          pt = null, mr(t, r, s), pt = l, ir = c, pt !== null && (ir ? On(pt, s.stateNode) : So(pt, s.stateNode));
        } else
          mr(t, r, s);
        break;
      case 18:
        de && pt !== null && (ir ? y1(pt, s.stateNode) : m1(pt, s.stateNode));
        break;
      case 4:
        de ? (l = pt, c = ir, pt = s.stateNode.containerInfo, ir = !0, mr(t, r, s), pt = l, ir = c) : (Re && (l = s.stateNode.containerInfo, c = Vu(l), wo(l, c)), mr(t, r, s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ct && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          c = l = l.next;
          do {
            var g = c, S = g.destroy;
            g = g.tag, S !== void 0 && (g & 2 || g & 4) && gl(s, r, S), c = c.next;
          } while (c !== l);
        }
        mr(t, r, s);
        break;
      case 1:
        if (!Ct && (Yn(s, r), l = s.stateNode, typeof l.componentWillUnmount == "function"))
          try {
            l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
          } catch (F) {
            je(s, r, F);
          }
        mr(t, r, s);
        break;
      case 21:
        mr(t, r, s);
        break;
      case 22:
        s.mode & 1 ? (Ct = (l = Ct) || s.memoizedState !== null, mr(t, r, s), Ct = l) : mr(t, r, s);
        break;
      default:
        mr(
          t,
          r,
          s
        );
    }
  }
  function oc(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var s = t.stateNode;
      s === null && (s = t.stateNode = new Q1()), r.forEach(function(l) {
        var c = lf.bind(null, t, l);
        s.has(l) || (s.add(l), l.then(c, c));
      });
    }
  }
  function ar(t, r) {
    var s = r.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var c = s[l];
        try {
          var g = t, S = r;
          if (de) {
            var F = S;
            e:
              for (; F !== null; ) {
                switch (F.tag) {
                  case 5:
                    pt = F.stateNode, ir = !1;
                    break e;
                  case 3:
                    pt = F.stateNode.containerInfo, ir = !0;
                    break e;
                  case 4:
                    pt = F.stateNode.containerInfo, ir = !0;
                    break e;
                }
                F = F.return;
              }
            if (pt === null)
              throw Error(h(160));
            yl(g, S, c), pt = null, ir = !1;
          } else
            yl(g, S, c);
          var D = c.alternate;
          D !== null && (D.return = null), c.return = null;
        } catch (W) {
          je(c, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        lc(r, t), r = r.sibling;
  }
  function lc(t, r) {
    var s = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ar(r, t), yr(t), l & 4) {
          try {
            Oi(3, t, t.return), Fa(3, t);
          } catch (J) {
            je(t, t.return, J);
          }
          try {
            Oi(5, t, t.return);
          } catch (J) {
            je(t, t.return, J);
          }
        }
        break;
      case 1:
        ar(r, t), yr(t), l & 512 && s !== null && Yn(s, s.return);
        break;
      case 5:
        if (ar(r, t), yr(t), l & 512 && s !== null && Yn(s, s.return), de) {
          if (t.flags & 32) {
            var c = t.stateNode;
            try {
              _i(c);
            } catch (J) {
              je(t, t.return, J);
            }
          }
          if (l & 4 && (c = t.stateNode, c != null)) {
            var g = t.memoizedProps;
            if (s = s !== null ? s.memoizedProps : g, l = t.type, r = t.updateQueue, t.updateQueue = null, r !== null)
              try {
                Mn(c, r, l, s, g, t);
              } catch (J) {
                je(t, t.return, J);
              }
          }
        }
        break;
      case 6:
        if (ar(r, t), yr(t), l & 4 && de) {
          if (t.stateNode === null)
            throw Error(h(162));
          c = t.stateNode, g = t.memoizedProps, s = s !== null ? s.memoizedProps : g;
          try {
            nn(c, s, g);
          } catch (J) {
            je(t, t.return, J);
          }
        }
        break;
      case 3:
        if (ar(r, t), yr(t), l & 4) {
          if (de && De && s !== null && s.memoizedState.isDehydrated)
            try {
              p1(r.containerInfo);
            } catch (J) {
              je(t, t.return, J);
            }
          if (Re) {
            c = r.containerInfo, g = r.pendingChildren;
            try {
              wo(c, g);
            } catch (J) {
              je(t, t.return, J);
            }
          }
        }
        break;
      case 4:
        if (ar(
          r,
          t
        ), yr(t), l & 4 && Re) {
          g = t.stateNode, c = g.containerInfo, g = g.pendingChildren;
          try {
            wo(c, g);
          } catch (J) {
            je(t, t.return, J);
          }
        }
        break;
      case 13:
        ar(r, t), yr(t), c = t.child, c.flags & 8192 && (g = c.memoizedState !== null, c.stateNode.isHidden = g, !g || c.alternate !== null && c.alternate.memoizedState !== null || (kl = lt())), l & 4 && oc(t);
        break;
      case 22:
        var S = s !== null && s.memoizedState !== null;
        if (t.mode & 1 ? (Ct = (s = Ct) || S, ar(r, t), Ct = s) : ar(r, t), yr(t), l & 8192) {
          if (s = t.memoizedState !== null, (t.stateNode.isHidden = s) && !S && t.mode & 1)
            for (te = t, l = t.child; l !== null; ) {
              for (r = te = l; te !== null; ) {
                S = te;
                var F = S.child;
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Oi(4, S, S.return);
                    break;
                  case 1:
                    Yn(S, S.return);
                    var D = S.stateNode;
                    if (typeof D.componentWillUnmount == "function") {
                      var W = S, re = S.return;
                      try {
                        var ge = W;
                        D.props = ge.memoizedProps, D.state = ge.memoizedState, D.componentWillUnmount();
                      } catch (J) {
                        je(W, re, J);
                      }
                    }
                    break;
                  case 5:
                    Yn(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      cc(r);
                      continue;
                    }
                }
                F !== null ? (F.return = S, te = F) : cc(r);
              }
              l = l.sibling;
            }
          if (de) {
            e:
              if (l = null, de)
                for (r = t; ; ) {
                  if (r.tag === 5) {
                    if (l === null) {
                      l = r;
                      try {
                        c = r.stateNode, s ? Co(c) : Jd(r.stateNode, r.memoizedProps);
                      } catch (J) {
                        je(t, t.return, J);
                      }
                    }
                  } else if (r.tag === 6) {
                    if (l === null)
                      try {
                        g = r.stateNode, s ? ra(g) : Zd(g, r.memoizedProps);
                      } catch (J) {
                        je(t, t.return, J);
                      }
                  } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === t) && r.child !== null) {
                    r.child.return = r, r = r.child;
                    continue;
                  }
                  if (r === t)
                    break e;
                  for (; r.sibling === null; ) {
                    if (r.return === null || r.return === t)
                      break e;
                    l === r && (l = null), r = r.return;
                  }
                  l === r && (l = null), r.sibling.return = r.return, r = r.sibling;
                }
          }
        }
        break;
      case 19:
        ar(r, t), yr(t), l & 4 && oc(t);
        break;
      case 21:
        break;
      default:
        ar(r, t), yr(t);
    }
  }
  function yr(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        if (de) {
          e: {
            for (var s = t.return; s !== null; ) {
              if (ac(s)) {
                var l = s;
                break e;
              }
              s = s.return;
            }
            throw Error(h(160));
          }
          switch (l.tag) {
            case 5:
              var c = l.stateNode;
              l.flags & 32 && (_i(c), l.flags &= -33);
              var g = sc(t);
              ml(t, g, c);
              break;
            case 3:
            case 4:
              var S = l.stateNode.containerInfo, F = sc(t);
              vl(t, F, S);
              break;
            default:
              throw Error(h(161));
          }
        }
      } catch (D) {
        je(t, t.return, D);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function Z1(t, r, s) {
    te = t, uc(t);
  }
  function uc(t, r, s) {
    for (var l = (t.mode & 1) !== 0; te !== null; ) {
      var c = te, g = c.child;
      if (c.tag === 22 && l) {
        var S = c.memoizedState !== null || Aa;
        if (!S) {
          var F = c.alternate, D = F !== null && F.memoizedState !== null || Ct;
          F = Aa;
          var W = Ct;
          if (Aa = S, (Ct = D) && !W)
            for (te = c; te !== null; )
              S = te, D = S.child, S.tag === 22 && S.memoizedState !== null ? dc(c) : D !== null ? (D.return = S, te = D) : dc(c);
          for (; g !== null; )
            te = g, uc(g), g = g.sibling;
          te = c, Aa = F, Ct = W;
        }
        hc(t);
      } else
        c.subtreeFlags & 8772 && g !== null ? (g.return = c, te = g) : hc(t);
    }
  }
  function hc(t) {
    for (; te !== null; ) {
      var r = te;
      if (r.flags & 8772) {
        var s = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Ct || Fa(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !Ct)
                  if (s === null)
                    l.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? s.memoizedProps : nr(r.type, s.memoizedProps);
                    l.componentDidUpdate(c, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
                  }
                var g = r.updateQueue;
                g !== null && uh(r, g, l);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (s = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        s = ie(r.child.stateNode);
                        break;
                      case 1:
                        s = r.child.stateNode;
                    }
                  uh(r, S, s);
                }
                break;
              case 5:
                var F = r.stateNode;
                s === null && r.flags & 4 && Fn(F, r.type, r.memoizedProps, r);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (De && r.memoizedState === null) {
                  var D = r.alternate;
                  if (D !== null) {
                    var W = D.memoizedState;
                    if (W !== null) {
                      var re = W.dehydrated;
                      re !== null && v1(re);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(h(163));
            }
          Ct || r.flags & 512 && pl(r);
        } catch (ge) {
          je(r, r.return, ge);
        }
      }
      if (r === t) {
        te = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, te = s;
        break;
      }
      te = r.return;
    }
  }
  function cc(t) {
    for (; te !== null; ) {
      var r = te;
      if (r === t) {
        te = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, te = s;
        break;
      }
      te = r.return;
    }
  }
  function dc(t) {
    for (; te !== null; ) {
      var r = te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              Fa(4, r);
            } catch (D) {
              je(r, s, D);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = r.return;
              try {
                l.componentDidMount();
              } catch (D) {
                je(r, c, D);
              }
            }
            var g = r.return;
            try {
              pl(r);
            } catch (D) {
              je(r, g, D);
            }
            break;
          case 5:
            var S = r.return;
            try {
              pl(r);
            } catch (D) {
              je(r, S, D);
            }
        }
      } catch (D) {
        je(r, r.return, D);
      }
      if (r === t) {
        te = null;
        break;
      }
      var F = r.sibling;
      if (F !== null) {
        F.return = r.return, te = F;
        break;
      }
      te = r.return;
    }
  }
  var Ma = 0, Oa = 1, Ia = 2, La = 3, Da = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Ii = Symbol.for;
    Ma = Ii("selector.component"), Oa = Ii("selector.has_pseudo_class"), Ia = Ii("selector.role"), La = Ii("selector.test_id"), Da = Ii("selector.text");
  }
  function _l(t) {
    var r = Et(t);
    if (r != null) {
      if (typeof r.memoizedProps["data-testname"] != "string")
        throw Error(h(364));
      return r;
    }
    if (t = xt(t), t === null)
      throw Error(h(362));
    return t.stateNode.current;
  }
  function Sl(t, r) {
    switch (r.$$typeof) {
      case Ma:
        if (t.type === r.value)
          return !0;
        break;
      case Oa:
        e: {
          r = r.value, t = [t, 0];
          for (var s = 0; s < t.length; ) {
            var l = t[s++], c = t[s++], g = r[c];
            if (l.tag !== 5 || !Ut(l)) {
              for (; g != null && Sl(l, g); )
                c++, g = r[c];
              if (c === r.length) {
                r = !0;
                break e;
              } else
                for (l = l.child; l !== null; )
                  t.push(l, c), l = l.sibling;
            }
          }
          r = !1;
        }
        return r;
      case Ia:
        if (t.tag === 5 && hr(t.stateNode, r.value))
          return !0;
        break;
      case Da:
        if ((t.tag === 5 || t.tag === 6) && (t = Gt(t), t !== null && 0 <= t.indexOf(r.value)))
          return !0;
        break;
      case La:
        if (t.tag === 5 && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === r.value.toLowerCase()))
          return !0;
        break;
      default:
        throw Error(h(365));
    }
    return !1;
  }
  function Cl(t) {
    switch (t.$$typeof) {
      case Ma:
        return "<" + (I(t.value) || "Unknown") + ">";
      case Oa:
        return ":has(" + (Cl(t) || "") + ")";
      case Ia:
        return '[role="' + t.value + '"]';
      case Da:
        return '"' + t.value + '"';
      case La:
        return '[data-testname="' + t.value + '"]';
      default:
        throw Error(h(365));
    }
  }
  function fc(t, r) {
    var s = [];
    t = [t, 0];
    for (var l = 0; l < t.length; ) {
      var c = t[l++], g = t[l++], S = r[g];
      if (c.tag !== 5 || !Ut(c)) {
        for (; S != null && Sl(c, S); )
          g++, S = r[g];
        if (g === r.length)
          s.push(c);
        else
          for (c = c.child; c !== null; )
            t.push(c, g), c = c.sibling;
      }
    }
    return s;
  }
  function wl(t, r) {
    if (!we)
      throw Error(h(363));
    t = _l(t), t = fc(t, r), r = [], t = Array.from(t);
    for (var s = 0; s < t.length; ) {
      var l = t[s++];
      if (l.tag === 5)
        Ut(l) || r.push(l.stateNode);
      else
        for (l = l.child; l !== null; )
          t.push(l), l = l.sibling;
    }
    return r;
  }
  var ef = Math.ceil, Ga = d.ReactCurrentDispatcher, xl = d.ReactCurrentOwner, Qe = d.ReactCurrentBatchConfig, Se = 0, ht = null, et = null, vt = 0, Lt = 0, Kn = Gr(0), it = 0, Li = null, hn = 0, Ua = 0, Pl = 0, Di = null, Nt = null, kl = 0, El = 1 / 0, Rr = null;
  function Xn() {
    El = lt() + 500;
  }
  var za = !1, Tl = null, Vr = null, Ba = !1, Hr = null, Va = 0, Gi = 0, Rl = null, Ha = -1, ja = 0;
  function wt() {
    return Se & 6 ? lt() : Ha !== -1 ? Ha : Ha = lt();
  }
  function jr(t) {
    return t.mode & 1 ? Se & 2 && vt !== 0 ? vt & -vt : L1.transition !== null ? (ja === 0 && (ja = qu()), ja) : (t = Pe, t !== 0 ? t : Jt()) : 1;
  }
  function Yt(t, r, s, l) {
    if (50 < Gi)
      throw Gi = 0, Rl = null, Error(h(185));
    wi(t, s, l), (!(Se & 2) || t !== ht) && (t === ht && (!(Se & 2) && (Ua |= s), it === 4 && Wr(t, vt)), At(t, l), s === 1 && Se === 0 && !(r.mode & 1) && (Xn(), ha && dr()));
  }
  function At(t, r) {
    var s = t.callbackNode;
    T1(t, r);
    var l = la(t, t === ht ? vt : 0);
    if (l === 0)
      s !== null && Ju(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = l & -l, t.callbackPriority !== r) {
      if (s != null && Ju(s), r === 1)
        t.tag === 0 ? I1(pc.bind(null, t)) : Zu(pc.bind(null, t)), ue ? be(function() {
          !(Se & 6) && dr();
        }) : Ao(Fo, dr), s = null;
      else {
        switch (Qu(l)) {
          case 1:
            s = Fo;
            break;
          case 4:
            s = A1;
            break;
          case 16:
            s = Mo;
            break;
          case 536870912:
            s = F1;
            break;
          default:
            s = Mo;
        }
        s = Pc(s, gc.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = s;
    }
  }
  function gc(t, r) {
    if (Ha = -1, ja = 0, Se & 6)
      throw Error(h(327));
    var s = t.callbackNode;
    if (fn() && t.callbackNode !== s)
      return null;
    var l = la(t, t === ht ? vt : 0);
    if (l === 0)
      return null;
    if (l & 30 || l & t.expiredLanes || r)
      r = Wa(t, l);
    else {
      r = l;
      var c = Se;
      Se |= 2;
      var g = yc();
      (ht !== t || vt !== r) && (Rr = null, Xn(), cn(t, r));
      do
        try {
          nf();
          break;
        } catch (F) {
          mc(t, F);
        }
      while (1);
      Bo(), Ga.current = g, Se = c, et !== null ? r = 0 : (ht = null, vt = 0, r = it);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ro(t), c !== 0 && (l = c, r = bl(t, c))), r === 1)
        throw s = Li, cn(t, 0), Wr(t, l), At(t, lt()), s;
      if (r === 6)
        Wr(t, l);
      else {
        if (c = t.current.alternate, !(l & 30) && !tf(c) && (r = Wa(t, l), r === 2 && (g = Ro(t), g !== 0 && (l = g, r = bl(t, g))), r === 1))
          throw s = Li, cn(t, 0), Wr(t, l), At(t, lt()), s;
        switch (t.finishedWork = c, t.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            dn(t, Nt, Rr);
            break;
          case 3:
            if (Wr(t, l), (l & 130023424) === l && (r = kl + 500 - lt(), 10 < r)) {
              if (la(t, 0) !== 0)
                break;
              if (c = t.suspendedLanes, (c & l) !== l) {
                wt(), t.pingedLanes |= t.suspendedLanes & c;
                break;
              }
              t.timeoutHandle = A(dn.bind(null, t, Nt, Rr), r);
              break;
            }
            dn(t, Nt, Rr);
            break;
          case 4:
            if (Wr(t, l), (l & 4194240) === l)
              break;
            for (r = t.eventTimes, c = -1; 0 < l; ) {
              var S = 31 - er(l);
              g = 1 << S, S = r[S], S > c && (c = S), l &= ~g;
            }
            if (l = c, l = lt() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * ef(l / 1960)) - l, 10 < l) {
              t.timeoutHandle = A(dn.bind(null, t, Nt, Rr), l);
              break;
            }
            dn(t, Nt, Rr);
            break;
          case 5:
            dn(t, Nt, Rr);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return At(t, lt()), t.callbackNode === s ? gc.bind(null, t) : null;
  }
  function bl(t, r) {
    var s = Di;
    return t.current.memoizedState.isDehydrated && (cn(t, r).flags |= 256), t = Wa(t, r), t !== 2 && (r = Nt, Nt = s, r !== null && Nl(r)), t;
  }
  function Nl(t) {
    Nt === null ? Nt = t : Nt.push.apply(Nt, t);
  }
  function tf(t) {
    for (var r = t; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var l = 0; l < s.length; l++) {
            var c = s[l], g = c.getSnapshot;
            c = c.value;
            try {
              if (!tr(g(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null)
        s.return = r, r = s;
      else {
        if (r === t)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Wr(t, r) {
    for (r &= ~Pl, r &= ~Ua, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var s = 31 - er(r), l = 1 << s;
      t[s] = -1, r &= ~l;
    }
  }
  function pc(t) {
    if (Se & 6)
      throw Error(h(327));
    fn();
    var r = la(t, 0);
    if (!(r & 1))
      return At(t, lt()), null;
    var s = Wa(t, r);
    if (t.tag !== 0 && s === 2) {
      var l = Ro(t);
      l !== 0 && (r = l, s = bl(t, l));
    }
    if (s === 1)
      throw s = Li, cn(t, 0), Wr(t, r), At(t, lt()), s;
    if (s === 6)
      throw Error(h(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, dn(t, Nt, Rr), At(t, lt()), null;
  }
  function vc(t) {
    Hr !== null && Hr.tag === 0 && !(Se & 6) && fn();
    var r = Se;
    Se |= 1;
    var s = Qe.transition, l = Pe;
    try {
      if (Qe.transition = null, Pe = 1, t)
        return t();
    } finally {
      Pe = l, Qe.transition = s, Se = r, !(Se & 6) && dr();
    }
  }
  function Al() {
    Lt = Kn.current, Ue(Kn);
  }
  function cn(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== ee && (t.timeoutHandle = ee, j(s)), et !== null)
      for (s = et.return; s !== null; ) {
        var l = s;
        switch (Lo(l), l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && ia();
            break;
          case 3:
            jn(), Ue(Tt), Ue(yt), Qo();
            break;
          case 5:
            $o(l);
            break;
          case 4:
            jn();
            break;
          case 13:
            Ue(Ye);
            break;
          case 19:
            Ue(Ye);
            break;
          case 10:
            Vo(l.type._context);
            break;
          case 22:
          case 23:
            Al();
        }
        s = s.return;
      }
    if (ht = t, et = t = Yr(t.current, null), vt = Lt = r, it = 0, Li = null, Pl = Ua = hn = 0, Nt = Di = null, ln !== null) {
      for (r = 0; r < ln.length; r++)
        if (s = ln[r], l = s.interleaved, l !== null) {
          s.interleaved = null;
          var c = l.next, g = s.pending;
          if (g !== null) {
            var S = g.next;
            g.next = c, l.next = S;
          }
          s.pending = l;
        }
      ln = null;
    }
    return t;
  }
  function mc(t, r) {
    do {
      var s = et;
      try {
        if (Bo(), wa.current = Ea, xa) {
          for (var l = Ke.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), l = l.next;
          }
          xa = !1;
        }
        if (un = 0, ut = nt = Ke = null, Ti = !1, Ri = 0, xl.current = null, s === null || s.return === null) {
          it = 1, Li = r, et = null;
          break;
        }
        e: {
          var g = t, S = s.return, F = s, D = r;
          if (r = vt, F.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var W = D, re = F, ge = re.tag;
            if (!(re.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var J = re.alternate;
              J ? (re.updateQueue = J.updateQueue, re.memoizedState = J.memoizedState, re.lanes = J.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var ze = Vh(S);
            if (ze !== null) {
              ze.flags &= -257, Hh(ze, S, F, g, r), ze.mode & 1 && Bh(g, W, r), r = ze, D = W;
              var Oe = r.updateQueue;
              if (Oe === null) {
                var Ft = /* @__PURE__ */ new Set();
                Ft.add(D), r.updateQueue = Ft;
              } else
                Oe.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                Bh(g, W, r), Fl();
                break e;
              }
              D = Error(h(426));
            }
          } else if (He && F.mode & 1) {
            var br = Vh(S);
            if (br !== null) {
              !(br.flags & 65536) && (br.flags |= 256), Hh(br, S, F, g, r), Uo(Wn(D, F));
              break e;
            }
          }
          g = D = Wn(D, F), it !== 4 && (it = 2), Di === null ? Di = [g] : Di.push(g), g = S;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var L = Uh(g, D, r);
                lh(g, L);
                break e;
              case 1:
                F = D;
                var M = g.type, U = g.stateNode;
                if (!(g.flags & 128) && (typeof M.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Vr === null || !Vr.has(U)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var Z = zh(g, F, r);
                  lh(g, Z);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Sc(s);
      } catch (se) {
        r = se, et === s && s !== null && (et = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function yc() {
    var t = Ga.current;
    return Ga.current = Ea, t === null ? Ea : t;
  }
  function Fl() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ht === null || !(hn & 268435455) && !(Ua & 268435455) || Wr(ht, vt);
  }
  function Wa(t, r) {
    var s = Se;
    Se |= 2;
    var l = yc();
    (ht !== t || vt !== r) && (Rr = null, cn(t, r));
    do
      try {
        rf();
        break;
      } catch (c) {
        mc(t, c);
      }
    while (1);
    if (Bo(), Se = s, Ga.current = l, et !== null)
      throw Error(h(261));
    return ht = null, vt = 0, it;
  }
  function rf() {
    for (; et !== null; )
      _c(et);
  }
  function nf() {
    for (; et !== null && !b1(); )
      _c(et);
  }
  function _c(t) {
    var r = xc(t.alternate, t, Lt);
    t.memoizedProps = t.pendingProps, r === null ? Sc(t) : et = r, xl.current = null;
  }
  function Sc(t) {
    var r = t;
    do {
      var s = r.alternate;
      if (t = r.return, r.flags & 32768) {
        if (s = q1(s, r), s !== null) {
          s.flags &= 32767, et = s;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          it = 6, et = null;
          return;
        }
      } else if (s = $1(s, r, Lt), s !== null) {
        et = s;
        return;
      }
      if (r = r.sibling, r !== null) {
        et = r;
        return;
      }
      et = r = t;
    } while (r !== null);
    it === 0 && (it = 5);
  }
  function dn(t, r, s) {
    var l = Pe, c = Qe.transition;
    try {
      Qe.transition = null, Pe = 1, af(t, r, s, l);
    } finally {
      Qe.transition = c, Pe = l;
    }
    return null;
  }
  function af(t, r, s, l) {
    do
      fn();
    while (Hr !== null);
    if (Se & 6)
      throw Error(h(327));
    s = t.finishedWork;
    var c = t.finishedLanes;
    if (s === null)
      return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current)
      throw Error(h(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var g = s.lanes | s.childLanes;
    if (R1(t, g), t === ht && (et = ht = null, vt = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || Ba || (Ba = !0, Pc(Mo, function() {
      return fn(), null;
    })), g = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || g) {
      g = Qe.transition, Qe.transition = null;
      var S = Pe;
      Pe = 1;
      var F = Se;
      Se |= 4, xl.current = null, J1(t, s), lc(s, t), V(t.containerInfo), t.current = s, Z1(s), N1(), Se = F, Pe = S, Qe.transition = g;
    } else
      t.current = s;
    if (Ba && (Ba = !1, Hr = t, Va = c), g = t.pendingLanes, g === 0 && (Vr = null), M1(s.stateNode), At(t, lt()), r !== null)
      for (l = t.onRecoverableError, s = 0; s < r.length; s++)
        c = r[s], l(c.value, { componentStack: c.stack, digest: c.digest });
    if (za)
      throw za = !1, t = Tl, Tl = null, t;
    return Va & 1 && t.tag !== 0 && fn(), g = t.pendingLanes, g & 1 ? t === Rl ? Gi++ : (Gi = 0, Rl = t) : Gi = 0, dr(), null;
  }
  function fn() {
    if (Hr !== null) {
      var t = Qu(Va), r = Qe.transition, s = Pe;
      try {
        if (Qe.transition = null, Pe = 16 > t ? 16 : t, Hr === null)
          var l = !1;
        else {
          if (t = Hr, Hr = null, Va = 0, Se & 6)
            throw Error(h(331));
          var c = Se;
          for (Se |= 4, te = t.current; te !== null; ) {
            var g = te, S = g.child;
            if (te.flags & 16) {
              var F = g.deletions;
              if (F !== null) {
                for (var D = 0; D < F.length; D++) {
                  var W = F[D];
                  for (te = W; te !== null; ) {
                    var re = te;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oi(8, re, g);
                    }
                    var ge = re.child;
                    if (ge !== null)
                      ge.return = re, te = ge;
                    else
                      for (; te !== null; ) {
                        re = te;
                        var J = re.sibling, ze = re.return;
                        if (ic(re), re === W) {
                          te = null;
                          break;
                        }
                        if (J !== null) {
                          J.return = ze, te = J;
                          break;
                        }
                        te = ze;
                      }
                  }
                }
                var Oe = g.alternate;
                if (Oe !== null) {
                  var Ft = Oe.child;
                  if (Ft !== null) {
                    Oe.child = null;
                    do {
                      var br = Ft.sibling;
                      Ft.sibling = null, Ft = br;
                    } while (Ft !== null);
                  }
                }
                te = g;
              }
            }
            if (g.subtreeFlags & 2064 && S !== null)
              S.return = g, te = S;
            else
              e:
                for (; te !== null; ) {
                  if (g = te, g.flags & 2048)
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oi(9, g, g.return);
                    }
                  var L = g.sibling;
                  if (L !== null) {
                    L.return = g.return, te = L;
                    break e;
                  }
                  te = g.return;
                }
          }
          var M = t.current;
          for (te = M; te !== null; ) {
            S = te;
            var U = S.child;
            if (S.subtreeFlags & 2064 && U !== null)
              U.return = S, te = U;
            else
              e:
                for (S = M; te !== null; ) {
                  if (F = te, F.flags & 2048)
                    try {
                      switch (F.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fa(9, F);
                      }
                    } catch (se) {
                      je(F, F.return, se);
                    }
                  if (F === S) {
                    te = null;
                    break e;
                  }
                  var Z = F.sibling;
                  if (Z !== null) {
                    Z.return = F.return, te = Z;
                    break e;
                  }
                  te = F.return;
                }
          }
          if (Se = c, dr(), cr && typeof cr.onPostCommitFiberRoot == "function")
            try {
              cr.onPostCommitFiberRoot(ua, t);
            } catch {
            }
          l = !0;
        }
        return l;
      } finally {
        Pe = s, Qe.transition = r;
      }
    }
    return !1;
  }
  function Cc(t, r, s) {
    r = Wn(s, r), r = Uh(t, r, 1), t = Br(t, r, 1), r = wt(), t !== null && (wi(t, 1, r), At(t, r));
  }
  function je(t, r, s) {
    if (t.tag === 3)
      Cc(t, t, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Cc(r, t, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Vr === null || !Vr.has(l))) {
            t = Wn(s, t), t = zh(r, t, 1), r = Br(r, t, 1), t = wt(), r !== null && (wi(r, 1, t), At(r, t));
            break;
          }
        }
        r = r.return;
      }
  }
  function sf(t, r, s) {
    var l = t.pingCache;
    l !== null && l.delete(r), r = wt(), t.pingedLanes |= t.suspendedLanes & s, ht === t && (vt & s) === s && (it === 4 || it === 3 && (vt & 130023424) === vt && 500 > lt() - kl ? cn(t, 0) : Pl |= s), At(t, r);
  }
  function wc(t, r) {
    r === 0 && (t.mode & 1 ? (r = oa, oa <<= 1, !(oa & 130023424) && (oa = 4194304)) : r = 1);
    var s = wt();
    t = fr(t, r), t !== null && (wi(t, r, s), At(t, s));
  }
  function of(t) {
    var r = t.memoizedState, s = 0;
    r !== null && (s = r.retryLane), wc(t, s);
  }
  function lf(t, r) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, c = t.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    l !== null && l.delete(r), wc(t, s);
  }
  var xc;
  xc = function(t, r, s) {
    if (t !== null)
      if (t.memoizedProps !== r.pendingProps || Tt.current)
        bt = !0;
      else {
        if (!(t.lanes & s) && !(r.flags & 128))
          return bt = !1, X1(t, r, s);
        bt = !!(t.flags & 131072);
      }
    else
      bt = !1, He && r.flags & 1048576 && eh(r, da, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Ra(t, r), t = r.pendingProps;
        var c = Ln(r, yt.current);
        Bn(r, s), c = el(null, r, l, t, c, s);
        var g = tl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rt(l) ? (g = !0, aa(r)) : g = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Wo(r), c.updater = _a, r.stateNode = c, c._reactInternals = r, Ko(r, l, t, s), r = ul(null, r, l, !0, g, s)) : (r.tag = 0, He && g && Io(r), Pt(null, r, c, s), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (Ra(t, r), t = r.pendingProps, c = l._init, l = c(l._payload), r.type = l, c = r.tag = hf(l), t = nr(l, t), c) {
            case 0:
              r = ll(null, r, l, t, s);
              break e;
            case 1:
              r = $h(null, r, l, t, s);
              break e;
            case 11:
              r = jh(null, r, l, t, s);
              break e;
            case 14:
              r = Wh(null, r, l, nr(l.type, t), s);
              break e;
          }
          throw Error(h(
            306,
            l,
            ""
          ));
        }
        return r;
      case 0:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : nr(l, c), ll(t, r, l, c, s);
      case 1:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : nr(l, c), $h(t, r, l, c, s);
      case 3:
        e: {
          if (qh(r), t === null)
            throw Error(h(387));
          l = r.pendingProps, g = r.memoizedState, c = g.element, oh(t, r), ya(r, l, null, s);
          var S = r.memoizedState;
          if (l = S.element, De && g.isDehydrated)
            if (g = { element: l, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
              c = Wn(Error(h(423)), r), r = Qh(t, r, l, s, c);
              break e;
            } else if (l !== c) {
              c = Wn(Error(h(424)), r), r = Qh(t, r, l, s, c);
              break e;
            } else
              for (De && (Vt = u1(r.stateNode.containerInfo), It = r, He = !0, rr = null, xi = !1), s = vh(r, null, l, s), r.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Un(), l === c) {
              r = Tr(t, r, s);
              break e;
            }
            Pt(t, r, l, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return mh(r), t === null && Go(r), l = r.type, c = r.pendingProps, g = t !== null ? t.memoizedProps : null, S = c.children, Le(l, c) ? S = null : g !== null && Le(l, g) && (r.flags |= 32), Xh(t, r), Pt(t, r, S, s), r.child;
      case 6:
        return t === null && Go(r), null;
      case 13:
        return Jh(t, r, s);
      case 4:
        return Xo(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = Vn(r, null, l, s) : Pt(t, r, l, s), r.child;
      case 11:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : nr(l, c), jh(t, r, l, c, s);
      case 7:
        return Pt(t, r, r.pendingProps, s), r.child;
      case 8:
        return Pt(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return Pt(t, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (l = r.type._context, c = r.pendingProps, g = r.memoizedProps, S = c.value, ah(r, l, S), g !== null)
            if (tr(g.value, S)) {
              if (g.children === c.children && !Tt.current) {
                r = Tr(t, r, s);
                break e;
              }
            } else
              for (g = r.child, g !== null && (g.return = r); g !== null; ) {
                var F = g.dependencies;
                if (F !== null) {
                  S = g.child;
                  for (var D = F.firstContext; D !== null; ) {
                    if (D.context === l) {
                      if (g.tag === 1) {
                        D = Er(-1, s & -s), D.tag = 2;
                        var W = g.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var re = W.pending;
                          re === null ? D.next = D : (D.next = re.next, re.next = D), W.pending = D;
                        }
                      }
                      g.lanes |= s, D = g.alternate, D !== null && (D.lanes |= s), Ho(g.return, s, r), F.lanes |= s;
                      break;
                    }
                    D = D.next;
                  }
                } else if (g.tag === 10)
                  S = g.type === r.type ? null : g.child;
                else if (g.tag === 18) {
                  if (S = g.return, S === null)
                    throw Error(h(341));
                  S.lanes |= s, F = S.alternate, F !== null && (F.lanes |= s), Ho(S, s, r), S = g.sibling;
                } else
                  S = g.child;
                if (S !== null)
                  S.return = g;
                else
                  for (S = g; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (g = S.sibling, g !== null) {
                      g.return = S.return, S = g;
                      break;
                    }
                    S = S.return;
                  }
                g = S;
              }
          Pt(t, r, c.children, s), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, l = r.pendingProps.children, Bn(r, s), c = Ht(c), l = l(c), r.flags |= 1, Pt(t, r, l, s), r.child;
      case 14:
        return l = r.type, c = nr(l, r.pendingProps), c = nr(l.type, c), Wh(t, r, l, c, s);
      case 15:
        return Yh(t, r, r.type, r.pendingProps, s);
      case 17:
        return l = r.type, c = r.pendingProps, c = r.elementType === l ? c : nr(l, c), Ra(t, r), r.tag = 1, Rt(l) ? (t = !0, aa(r)) : t = !1, Bn(r, s), dh(r, l, c), Ko(r, l, c, s), ul(null, r, l, !0, t, s);
      case 19:
        return ec(t, r, s);
      case 22:
        return Kh(t, r, s);
    }
    throw Error(h(156, r.tag));
  };
  function Pc(t, r) {
    return Ao(t, r);
  }
  function uf(t, r, s, l) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(t, r, s, l) {
    return new uf(t, r, s, l);
  }
  function Ml(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function hf(t) {
    if (typeof t == "function")
      return Ml(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === P)
        return 11;
      if (t === N)
        return 14;
    }
    return 2;
  }
  function Yr(t, r) {
    var s = t.alternate;
    return s === null ? (s = Kt(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
  }
  function Ya(t, r, s, l, c, g) {
    var S = 2;
    if (l = t, typeof t == "function")
      Ml(t) && (S = 1);
    else if (typeof t == "string")
      S = 5;
    else
      e:
        switch (t) {
          case y:
            return gn(s.children, c, g, r);
          case C:
            S = 8, c |= 8;
            break;
          case x:
            return t = Kt(12, s, r, c | 2), t.elementType = x, t.lanes = g, t;
          case E:
            return t = Kt(13, s, r, c), t.elementType = E, t.lanes = g, t;
          case R:
            return t = Kt(19, s, r, c), t.elementType = R, t.lanes = g, t;
          case w:
            return Ka(s, c, g, r);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case _:
                  S = 10;
                  break e;
                case m:
                  S = 9;
                  break e;
                case P:
                  S = 11;
                  break e;
                case N:
                  S = 14;
                  break e;
                case v:
                  S = 16, l = null;
                  break e;
              }
            throw Error(h(130, t == null ? t : typeof t, ""));
        }
    return r = Kt(S, s, r, c), r.elementType = t, r.type = l, r.lanes = g, r;
  }
  function gn(t, r, s, l) {
    return t = Kt(7, t, l, r), t.lanes = s, t;
  }
  function Ka(t, r, s, l) {
    return t = Kt(22, t, l, r), t.elementType = w, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function Ol(t, r, s) {
    return t = Kt(6, t, null, r), t.lanes = s, t;
  }
  function Il(t, r, s) {
    return r = Kt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function cf(t, r, s, l, c) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ee, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bo(0), this.expirationTimes = bo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bo(0), this.identifierPrefix = l, this.onRecoverableError = c, De && (this.mutableSourceEagerHydrationData = null);
  }
  function kc(t, r, s, l, c, g, S, F, D) {
    return t = new cf(t, r, s, F, D), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Kt(3, null, null, r), t.current = g, g.stateNode = t, g.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wo(g), t;
  }
  function Ec(t) {
    if (!t)
      return Ur;
    t = t._reactInternals;
    e: {
      if (z(t) !== t || t.tag !== 1)
        throw Error(h(170));
      var r = t;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (t.tag === 1) {
      var s = t.type;
      if (Rt(s))
        return Xu(t, s, r);
    }
    return r;
  }
  function Tc(t) {
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(h(188)) : (t = Object.keys(t).join(","), Error(h(268, t)));
    return t = Y(r), t === null ? null : t.stateNode;
  }
  function Rc(t, r) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Xa(t, r) {
    Rc(t, r), (t = t.alternate) && Rc(t, r);
  }
  function df(t) {
    return t = Y(t), t === null ? null : t.stateNode;
  }
  function ff() {
    return null;
  }
  return n.attemptContinuousHydration = function(t) {
    if (t.tag === 13) {
      var r = fr(t, 134217728);
      if (r !== null) {
        var s = wt();
        Yt(r, t, 134217728, s);
      }
      Xa(t, 134217728);
    }
  }, n.attemptDiscreteHydration = function(t) {
    if (t.tag === 13) {
      var r = fr(t, 1);
      if (r !== null) {
        var s = wt();
        Yt(r, t, 1, s);
      }
      Xa(t, 1);
    }
  }, n.attemptHydrationAtCurrentPriority = function(t) {
    if (t.tag === 13) {
      var r = jr(t), s = fr(t, r);
      if (s !== null) {
        var l = wt();
        Yt(s, t, r, l);
      }
      Xa(t, r);
    }
  }, n.attemptSynchronousHydration = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = Ci(r.pendingLanes);
          s !== 0 && (No(r, s | 1), At(r, lt()), !(Se & 6) && (Xn(), dr()));
        }
        break;
      case 13:
        vc(function() {
          var l = fr(t, 1);
          if (l !== null) {
            var c = wt();
            Yt(l, t, 1, c);
          }
        }), Xa(t, 1);
    }
  }, n.batchedUpdates = function(t, r) {
    var s = Se;
    Se |= 1;
    try {
      return t(r);
    } finally {
      Se = s, Se === 0 && (Xn(), ha && dr());
    }
  }, n.createComponentSelector = function(t) {
    return { $$typeof: Ma, value: t };
  }, n.createContainer = function(t, r, s, l, c, g, S) {
    return kc(t, r, !1, null, s, l, c, g, S);
  }, n.createHasPseudoClassSelector = function(t) {
    return { $$typeof: Oa, value: t };
  }, n.createHydrationContainer = function(t, r, s, l, c, g, S, F, D) {
    return t = kc(s, l, !0, t, c, g, S, F, D), t.context = Ec(null), s = t.current, l = wt(), c = jr(s), g = Er(l, c), g.callback = r ?? null, Br(s, g, c), t.current.lanes = c, wi(t, c, l), At(t, l), t;
  }, n.createPortal = function(t, r, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: p, key: l == null ? null : "" + l, children: t, containerInfo: r, implementation: s };
  }, n.createRoleSelector = function(t) {
    return { $$typeof: Ia, value: t };
  }, n.createTestNameSelector = function(t) {
    return { $$typeof: La, value: t };
  }, n.createTextSelector = function(t) {
    return { $$typeof: Da, value: t };
  }, n.deferredUpdates = function(t) {
    var r = Pe, s = Qe.transition;
    try {
      return Qe.transition = null, Pe = 16, t();
    } finally {
      Pe = r, Qe.transition = s;
    }
  }, n.discreteUpdates = function(t, r, s, l, c) {
    var g = Pe, S = Qe.transition;
    try {
      return Qe.transition = null, Pe = 1, t(r, s, l, c);
    } finally {
      Pe = g, Qe.transition = S, Se === 0 && Xn();
    }
  }, n.findAllNodes = wl, n.findBoundingRects = function(t, r) {
    if (!we)
      throw Error(h(363));
    r = wl(t, r), t = [];
    for (var s = 0; s < r.length; s++)
      t.push(ot(r[s]));
    for (r = t.length - 1; 0 < r; r--) {
      s = t[r];
      for (var l = s.x, c = l + s.width, g = s.y, S = g + s.height, F = r - 1; 0 <= F; F--)
        if (r !== F) {
          var D = t[F], W = D.x, re = W + D.width, ge = D.y, J = ge + D.height;
          if (l >= W && g >= ge && c <= re && S <= J) {
            t.splice(r, 1);
            break;
          } else if (l !== W || s.width !== D.width || J < g || ge > S) {
            if (!(g !== ge || s.height !== D.height || re < l || W > c)) {
              W > l && (D.width += W - l, D.x = l), re < c && (D.width = c - W), t.splice(r, 1);
              break;
            }
          } else {
            ge > g && (D.height += ge - g, D.y = g), J < S && (D.height = S - ge), t.splice(r, 1);
            break;
          }
        }
    }
    return t;
  }, n.findHostInstance = Tc, n.findHostInstanceWithNoPortals = function(t) {
    return t = G(t), t = t !== null ? q(t) : null, t === null ? null : t.stateNode;
  }, n.findHostInstanceWithWarning = function(t) {
    return Tc(t);
  }, n.flushControlled = function(t) {
    var r = Se;
    Se |= 1;
    var s = Qe.transition, l = Pe;
    try {
      Qe.transition = null, Pe = 1, t();
    } finally {
      Pe = l, Qe.transition = s, Se = r, Se === 0 && (Xn(), dr());
    }
  }, n.flushPassiveEffects = fn, n.flushSync = vc, n.focusWithin = function(t, r) {
    if (!we)
      throw Error(h(363));
    for (t = _l(t), r = fc(t, r), r = Array.from(r), t = 0; t < r.length; ) {
      var s = r[t++];
      if (!Ut(s)) {
        if (s.tag === 5 && wr(s.stateNode))
          return !0;
        for (s = s.child; s !== null; )
          r.push(s), s = s.sibling;
      }
    }
    return !1;
  }, n.getCurrentUpdatePriority = function() {
    return Pe;
  }, n.getFindAllNodesFailureDescription = function(t, r) {
    if (!we)
      throw Error(h(363));
    var s = 0, l = [];
    t = [_l(t), 0];
    for (var c = 0; c < t.length; ) {
      var g = t[c++], S = t[c++], F = r[S];
      if ((g.tag !== 5 || !Ut(g)) && (Sl(g, F) && (l.push(Cl(F)), S++, S > s && (s = S)), S < r.length))
        for (g = g.child; g !== null; )
          t.push(g, S), g = g.sibling;
    }
    if (s < r.length) {
      for (t = []; s < r.length; s++)
        t.push(Cl(r[s]));
      return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
    }
    return null;
  }, n.getPublicRootInstance = function(t) {
    if (t = t.current, !t.child)
      return null;
    switch (t.child.tag) {
      case 5:
        return ie(t.child.stateNode);
      default:
        return t.child.stateNode;
    }
  }, n.injectIntoDevTools = function(t) {
    if (t = { bundleType: t.bundleType, version: t.version, rendererPackageName: t.rendererPackageName, rendererConfig: t.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: d.ReactCurrentDispatcher, findHostInstanceByFiber: df, findFiberByHostInstance: t.findFiberByHostInstance || ff, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      t = !1;
    else {
      var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (r.isDisabled || !r.supportsFiber)
        t = !0;
      else {
        try {
          ua = r.inject(t), cr = r;
        } catch {
        }
        t = !!r.checkDCE;
      }
    }
    return t;
  }, n.isAlreadyRendering = function() {
    return !1;
  }, n.observeVisibleRects = function(t, r, s, l) {
    if (!we)
      throw Error(h(363));
    t = wl(t, r);
    var c = gt(t, s, l).disconnect;
    return { disconnect: function() {
      c();
    } };
  }, n.registerMutableSourceForHydration = function(t, r) {
    var s = r._getVersion;
    s = s(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, s] : t.mutableSourceEagerHydrationData.push(r, s);
  }, n.runWithPriority = function(t, r) {
    var s = Pe;
    try {
      return Pe = t, r();
    } finally {
      Pe = s;
    }
  }, n.shouldError = function() {
    return null;
  }, n.shouldSuspend = function() {
    return !1;
  }, n.updateContainer = function(t, r, s, l) {
    var c = r.current, g = wt(), S = jr(c);
    return s = Ec(s), r.context === null ? r.context = s : r.pendingContext = s, r = Er(g, S), r.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = Br(c, r, S), t !== null && (Yt(t, c, S, g), ma(t, c, S)), S;
  }, n;
};
Sd.exports = w3;
var x3 = Sd.exports;
const P3 = /* @__PURE__ */ D0(x3);
var wd = { exports: {} }, Nn = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Nn.ConcurrentRoot = 1;
Nn.ContinuousEventPriority = 4;
Nn.DefaultEventPriority = 16;
Nn.DiscreteEventPriority = 1;
Nn.IdleEventPriority = 536870912;
Nn.LegacyRoot = 0;
wd.exports = Nn;
var xd = wd.exports;
const d0 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let f0 = !1, g0 = !1;
const Iu = ".react-konva-event", k3 = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, E3 = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, T3 = {};
function fo(a, e, n = T3) {
  if (!f0 && "zIndex" in e && (console.warn(E3), f0 = !0), !g0 && e.draggable) {
    var i = e.x !== void 0 || e.y !== void 0, o = e.onDragEnd || e.onDragMove;
    i && !o && (console.warn(k3), g0 = !0);
  }
  for (var u in n)
    if (!d0[u]) {
      var h = u.slice(0, 2) === "on", d = n[u] !== e[u];
      if (h && d) {
        var f = u.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), a.off(f, n[u]);
      }
      var p = !e.hasOwnProperty(u);
      p && a.setAttr(u, void 0);
    }
  var y = e._useStrictMode, C = {}, x = !1;
  const _ = {};
  for (var u in e)
    if (!d0[u]) {
      var h = u.slice(0, 2) === "on", m = n[u] !== e[u];
      if (h && m) {
        var f = u.substr(2).toLowerCase();
        f.substr(0, 7) === "content" && (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)), e[u] && (_[f] = e[u]);
      }
      !h && (e[u] !== n[u] || y && e[u] !== a.getAttr(u)) && (x = !0, C[u] = e[u]);
    }
  x && (a.setAttrs(C), rn(a));
  for (var f in _)
    a.on(f + Iu, _[f]);
}
function rn(a) {
  if (!ye.Konva.autoDrawEnabled) {
    var e = a.getLayer() || a.getStage();
    e && e.batchDraw();
  }
}
var Xl = Cd();
const Pd = {}, R3 = {};
Ki.Node.prototype._applyProps = fo;
function b3(a, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  a.add(e), rn(a);
}
function N3(a, e, n) {
  let i = Ki[a];
  i || (console.error(`Konva has no node with the type ${a}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${a}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), i = Ki.Group);
  const o = {}, u = {};
  for (var h in e) {
    var d = h.slice(0, 2) === "on";
    d ? u[h] = e[h] : o[h] = e[h];
  }
  const f = new i(o);
  return fo(f, u), f;
}
function A3(a, e, n) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${a}"`);
}
function F3(a, e, n) {
  return !1;
}
function M3(a) {
  return a;
}
function O3() {
  return null;
}
function I3() {
  return null;
}
function L3(a, e, n, i) {
  return R3;
}
function D3() {
}
function G3(a) {
}
function U3(a, e) {
  return !1;
}
function z3() {
  return Pd;
}
function B3() {
  return Pd;
}
const V3 = setTimeout, H3 = clearTimeout, j3 = -1;
function W3(a, e) {
  return !1;
}
const Y3 = !1, K3 = !0, X3 = !0;
function $3(a, e) {
  e.parent === a ? e.moveToTop() : a.add(e), rn(a);
}
function q3(a, e) {
  e.parent === a ? e.moveToTop() : a.add(e), rn(a);
}
function kd(a, e, n) {
  e._remove(), a.add(e), e.setZIndex(n.getZIndex()), rn(a);
}
function Q3(a, e, n) {
  kd(a, e, n);
}
function J3(a, e) {
  e.destroy(), e.off(Iu), rn(a);
}
function Z3(a, e) {
  e.destroy(), e.off(Iu), rn(a);
}
function e4(a, e, n) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${n}"`);
}
function t4(a, e, n) {
}
function r4(a, e, n, i, o) {
  fo(a, o, i);
}
function n4(a) {
  a.hide(), rn(a);
}
function i4(a) {
}
function a4(a, e) {
  (e.visible == null || e.visible) && a.show();
}
function s4(a, e) {
}
function o4(a) {
}
function l4() {
}
const u4 = () => xd.DefaultEventPriority, h4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: $3,
  appendChildToContainer: q3,
  appendInitialChild: b3,
  cancelTimeout: H3,
  clearContainer: o4,
  commitMount: t4,
  commitTextUpdate: e4,
  commitUpdate: r4,
  createInstance: N3,
  createTextInstance: A3,
  detachDeletedInstance: l4,
  finalizeInitialChildren: F3,
  getChildHostContext: B3,
  getCurrentEventPriority: u4,
  getPublicInstance: M3,
  getRootHostContext: z3,
  hideInstance: n4,
  hideTextInstance: i4,
  idlePriority: Xl.unstable_IdlePriority,
  insertBefore: kd,
  insertInContainerBefore: Q3,
  isPrimaryRenderer: Y3,
  noTimeout: j3,
  now: Xl.unstable_now,
  prepareForCommit: O3,
  preparePortalMount: I3,
  prepareUpdate: L3,
  removeChild: J3,
  removeChildFromContainer: Z3,
  resetAfterCommit: D3,
  resetTextContent: G3,
  run: Xl.unstable_runWithPriority,
  scheduleTimeout: V3,
  shouldDeprioritizeSubtree: U3,
  shouldSetTextContent: W3,
  supportsMutation: X3,
  unhideInstance: a4,
  unhideTextInstance: s4,
  warnsIfNotActing: K3
}, Symbol.toStringTag, { value: "Module" }));
var c4 = Object.defineProperty, d4 = Object.defineProperties, f4 = Object.getOwnPropertyDescriptors, p0 = Object.getOwnPropertySymbols, g4 = Object.prototype.hasOwnProperty, p4 = Object.prototype.propertyIsEnumerable, v0 = (a, e, n) => e in a ? c4(a, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[e] = n, m0 = (a, e) => {
  for (var n in e || (e = {}))
    g4.call(e, n) && v0(a, n, e[n]);
  if (p0)
    for (var n of p0(e))
      p4.call(e, n) && v0(a, n, e[n]);
  return a;
}, v4 = (a, e) => d4(a, f4(e));
function Ed(a, e, n) {
  if (!a)
    return;
  if (n(a) === !0)
    return a;
  let i = e ? a.return : a.child;
  for (; i; ) {
    const o = Ed(i, e, n);
    if (o)
      return o;
    i = e ? null : i.sibling;
  }
}
function Td(a) {
  try {
    return Object.defineProperties(a, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return a;
  }
}
const Lu = Td(ft.createContext(null));
class Rd extends ft.Component {
  render() {
    return /* @__PURE__ */ ft.createElement(Lu.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
const { ReactCurrentOwner: y0, ReactCurrentDispatcher: _0 } = ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function m4() {
  const a = ft.useContext(Lu);
  if (a === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = ft.useId();
  return ft.useMemo(() => {
    for (const i of [y0 == null ? void 0 : y0.current, a, a == null ? void 0 : a.alternate]) {
      if (!i)
        continue;
      const o = Ed(i, !1, (u) => {
        let h = u.memoizedState;
        for (; h; ) {
          if (h.memoizedState === e)
            return !0;
          h = h.next;
        }
      });
      if (o)
        return o;
    }
  }, [a, e]);
}
function y4() {
  var a, e;
  const n = m4(), [i] = ft.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let o = n;
  for (; o; ) {
    const u = (a = o.type) == null ? void 0 : a._context;
    u && u !== Lu && !i.has(u) && i.set(u, (e = _0 == null ? void 0 : _0.current) == null ? void 0 : e.readContext(Td(u))), o = o.return;
  }
  return i;
}
function _4() {
  const a = y4();
  return ft.useMemo(
    () => Array.from(a.keys()).reduce(
      (e, n) => (i) => /* @__PURE__ */ ft.createElement(e, null, /* @__PURE__ */ ft.createElement(n.Provider, v4(m0({}, i), {
        value: a.get(n)
      }))),
      (e) => /* @__PURE__ */ ft.createElement(Rd, m0({}, e))
    ),
    [a]
  );
}
function S4(a) {
  const e = $e.useRef({});
  return $e.useLayoutEffect(() => {
    e.current = a;
  }), $e.useLayoutEffect(() => () => {
    e.current = {};
  }, []), e.current;
}
const C4 = (a) => {
  const e = $e.useRef(), n = $e.useRef(), i = $e.useRef(), o = S4(a), u = _4(), h = (d) => {
    const { forwardedRef: f } = a;
    f && (typeof f == "function" ? f(d) : f.current = d);
  };
  return $e.useLayoutEffect(() => (n.current = new Ki.Stage({
    width: a.width,
    height: a.height,
    container: e.current
  }), h(n.current), i.current = Vi.createContainer(n.current, xd.LegacyRoot, !1, null), Vi.updateContainer($e.createElement(u, {}, a.children), i.current), () => {
    Ki.isBrowser && (h(null), Vi.updateContainer(null, i.current, null), n.current.destroy());
  }), []), $e.useLayoutEffect(() => {
    h(n.current), fo(n.current, a, o), Vi.updateContainer($e.createElement(u, {}, a.children), i.current, null);
  }), $e.createElement("div", {
    ref: e,
    id: a.id,
    accessKey: a.accessKey,
    className: a.className,
    role: a.role,
    style: a.style,
    tabIndex: a.tabIndex,
    title: a.title
  });
}, w4 = "Layer", fu = "Group", x4 = "Circle", P4 = "Text", S0 = "Path", Vi = P3(h4);
Vi.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: $e.version,
  rendererPackageName: "react-konva"
});
const k4 = $e.forwardRef((a, e) => $e.createElement(Rd, {}, $e.createElement(C4, { ...a, forwardedRef: e })));
let rs;
const E4 = new Uint8Array(16);
function T4() {
  if (!rs && (rs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rs))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rs(E4);
}
const mt = [];
for (let a = 0; a < 256; ++a)
  mt.push((a + 256).toString(16).slice(1));
function R4(a, e = 0) {
  return (mt[a[e + 0]] + mt[a[e + 1]] + mt[a[e + 2]] + mt[a[e + 3]] + "-" + mt[a[e + 4]] + mt[a[e + 5]] + "-" + mt[a[e + 6]] + mt[a[e + 7]] + "-" + mt[a[e + 8]] + mt[a[e + 9]] + "-" + mt[a[e + 10]] + mt[a[e + 11]] + mt[a[e + 12]] + mt[a[e + 13]] + mt[a[e + 14]] + mt[a[e + 15]]).toLowerCase();
}
const b4 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), C0 = {
  randomUUID: b4
};
function $l(a, e, n) {
  if (C0.randomUUID && !e && !a)
    return C0.randomUUID();
  a = a || {};
  const i = a.random || (a.rng || T4)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, e) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      e[n + o] = i[o];
    return e;
  }
  return R4(i);
}
const N4 = (a) => /* @__PURE__ */ ft.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ ft.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 12C19 12.5523 18.5523 13 18 13L6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L18 11C18.5523 11 19 11.4477 19 12Z", fill: "#2DC275" })), A4 = (a) => /* @__PURE__ */ ft.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ ft.createElement("path", { d: "M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z", fill: "#2DC275" })), F4 = (a) => /* @__PURE__ */ ft.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ ft.createElement("path", { d: "M2 10C2 5.58172 5.58172 2 10 2C12.2045 2 14.2014 2.89135 15.6493 4.33538L14.2125 4.02286C13.6728 3.90547 13.1402 4.2478 13.0228 4.78747C12.9054 5.32713 13.2478 5.85978 13.7874 5.97716L17.7875 6.84725C18.0831 6.91155 18.3919 6.83856 18.6275 6.64873C18.8631 6.45889 19 6.17262 19 5.87009L19 1.99999C19 1.44771 18.5523 0.999996 18 1C17.4477 1 17 1.44772 17 2.00001L17 2.85875C15.1969 1.09124 12.7262 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C13.8713 20 17.2271 17.7999 18.8883 14.5864C19.1419 14.0958 18.9498 13.4925 18.4592 13.2389C17.9686 12.9853 17.3653 13.1774 17.1117 13.668C15.7804 16.2432 13.0945 18 10 18C5.58172 18 2 14.4183 2 10Z", fill: "#2DC275" })), ql = ({
  onClick: a,
  variant: e = "primary",
  disabled: n = !1,
  iconImg: i,
  children: o,
  ...u
}) => {
  const h = (d) => {
    d.preventDefault(), d.stopPropagation(), a && !n && a(d);
  };
  return /* @__PURE__ */ Ve.jsxs(
    "button",
    {
      onClick: h,
      className: `button ${e} ${n ? "disabled" : ""}`,
      disabled: n,
      ...u,
      children: [
        i && /* @__PURE__ */ Ve.jsx("img", { className: "button-img-icon", src: i }),
        o
      ]
    }
  );
}, M4 = (a) => {
  const e = a.split(" ");
  return { width: Number(e[2]), height: Number(e[3]) };
}, ei = (a) => a.split(";").map((e) => e.split(":")).reduce((e, n) => {
  let i = n[0];
  if (i === "")
    return e;
  const o = n[1];
  return i = i.replace(/-./g, (u) => u.toUpperCase()[1]), e[i] = o, e;
}, {}), O4 = [
  "available",
  "disabled",
  "holding",
  "ordered",
  "readOnly",
  "selected"
], mn = Object.freeze({
  available: "fill:#ffffff;stroke:#9C9B9B;pointer-events:auto;",
  disabled: "fill:#C2C1C1;stroke:#C2C1C1;pointer-events:auto;",
  holding: "fill:#D32F2F;stroke:#D32F2F;pointer-events:auto;",
  ordered: "fill:#F44336;stroke:#D32F2F;pointer-events:none;",
  readOnly: "fill:#ffffff;stroke:#9C9B9B;pointer-events:none;",
  selected: "fill:#ffffff;stroke:#08CE7C;pointer-events:none;"
}), I4 = Object.freeze({
  available: ei(mn.available),
  disabled: ei(mn.disabled),
  holding: ei(mn.holding),
  ordered: ei(mn.ordered),
  readOnly: ei(mn.readOnly),
  selected: ei(mn.selected)
}), Ql = (a) => a < 1 || a > 6 ? "available" : O4[a - 1], Jl = (a = "available", e = "parsed") => e === "raw" ? mn[a] : I4[a], L4 = (a, e) => Jl(Ql(a === 1 || a === 6 ? e ? 6 : 1 : a)), D4 = ({
  id: a = 0,
  name: e = 0,
  displayName: n = "",
  visible: i = !0,
  showName: o = !0,
  x: u = 0,
  y: h = 0,
  radius: d = 4.5,
  strokeWidth: f = 1,
  initStatus: p = 1,
  onClick: y = () => {
  },
  onSelectSeat: C = () => {
  },
  onDeselectSeat: x = () => {
  },
  isSelected: _ = !1,
  seatDataPack: m = {}
}) => {
  const [P, E] = $t(p), R = (w) => {
    var b, I;
    if (!(P === 1 || P === 6))
      return;
    const k = (I = (b = w.target) == null ? void 0 : b.getStage()) == null ? void 0 : I.container();
    k && (k.style.cursor = "pointer");
  }, N = (w) => {
    var b, I;
    if (!(P === 1 || P === 6))
      return;
    const k = (I = (b = w.target) == null ? void 0 : b.getStage()) == null ? void 0 : I.container();
    k && (k.style.cursor = "");
  }, v = (w) => {
    (P === 1 || P === 6) && (E((k) => k === 1 ? 6 : 1), _ ? x && x(e) : C && C(e, m), y && y(w));
  };
  return /* @__PURE__ */ Ve.jsxs(
    fu,
    {
      id: `${a}`,
      onMouseEnter: R,
      onMouseLeave: N,
      onClick: v,
      onTap: v,
      children: [
        /* @__PURE__ */ Ve.jsx(
          x4,
          {
            x: u,
            y: h,
            visible: i,
            radius: d,
            strokeWidth: f,
            ...L4(p, _)
          }
        ),
        o && /* @__PURE__ */ Ve.jsx(
          P4,
          {
            text: n,
            x: u - d / 2 * 2,
            y: h - d / 2 * 1.8,
            visible: i,
            fontSize: d,
            fontStyle: "bold",
            align: "center",
            verticalAlign: "middle",
            width: d * 2,
            height: d * 2
          }
        )
      ]
    }
  );
}, w0 = 0.05, bd = 0.75, Nd = 14, tt = {
  1001: "1001",
  1002: "1002",
  1003: "1003",
  1004: "1004"
}, G4 = (a, e) => {
  var f, p;
  if (a.evt.preventDefault(), !e.current || !e.current)
    return;
  const n = e.current.scaleX(), i = e.current.getPointerPosition(), o = {
    x: (((i == null ? void 0 : i.x) || 0) - e.current.x()) / n,
    y: (((i == null ? void 0 : i.y) || 0) - e.current.y()) / n
  };
  let u = a.evt.deltaY < 0 ? 1 : -1;
  a.evt.ctrlKey && (u = -u);
  const h = u > 0 ? n * 0.95 : n / 0.95, d = {
    x: ((i == null ? void 0 : i.x) || 0) - o.x * h,
    y: ((i == null ? void 0 : i.y) || 0) - o.y * h
  };
  h >= bd && h <= Nd && ((f = e == null ? void 0 : e.current) == null || f.scale({ x: h, y: h }), (p = e == null ? void 0 : e.current) == null || p.position({ ...d }));
}, U4 = (...a) => {
  var e, n, i, o, u;
  for (const h of a)
    (e = h == null ? void 0 : h.current) == null || e.offsetX(0), (n = h == null ? void 0 : h.current) == null || n.offsetY(0), (i = h == null ? void 0 : h.current) == null || i.x(0), (o = h == null ? void 0 : h.current) == null || o.y(0), (u = h == null ? void 0 : h.current) == null || u.scale({ x: 1, y: 1 });
}, ns = (a, e = 100) => {
  for (let n = 0; n < a.length; n++)
    setTimeout(() => {
      const i = a[n];
      i();
    }, e * n + 1);
};
var Ot = function() {
  return Ot = Object.assign || function(e) {
    for (var n, i = 1, o = arguments.length; i < o; i++) {
      n = arguments[i];
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
    }
    return e;
  }, Ot.apply(this, arguments);
};
function vs(a, e, n) {
  if (n || arguments.length === 2)
    for (var i = 0, o = e.length, u; i < o; i++)
      (u || !(i in e)) && (u || (u = Array.prototype.slice.call(e, 0, i)), u[i] = e[i]);
  return a.concat(u || Array.prototype.slice.call(e));
}
var Be = "-ms-", ji = "-moz-", Ne = "-webkit-", Ad = "comm", go = "rule", Du = "decl", z4 = "@import", Fd = "@keyframes", B4 = "@layer", V4 = Math.abs, Gu = String.fromCharCode, gu = Object.assign;
function H4(a, e) {
  return dt(a, 0) ^ 45 ? (((e << 2 ^ dt(a, 0)) << 2 ^ dt(a, 1)) << 2 ^ dt(a, 2)) << 2 ^ dt(a, 3) : 0;
}
function Md(a) {
  return a.trim();
}
function Fr(a, e) {
  return (a = e.exec(a)) ? a[0] : a;
}
function me(a, e, n) {
  return a.replace(e, n);
}
function os(a, e) {
  return a.indexOf(e);
}
function dt(a, e) {
  return a.charCodeAt(e) | 0;
}
function si(a, e, n) {
  return a.slice(e, n);
}
function _r(a) {
  return a.length;
}
function Od(a) {
  return a.length;
}
function Hi(a, e) {
  return e.push(a), a;
}
function j4(a, e) {
  return a.map(e).join("");
}
function x0(a, e) {
  return a.filter(function(n) {
    return !Fr(n, e);
  });
}
var po = 1, oi = 1, Id = 0, qt = 0, rt = 0, mi = "";
function vo(a, e, n, i, o, u, h, d) {
  return { value: a, root: e, parent: n, type: i, props: o, children: u, line: po, column: oi, length: h, return: "", siblings: d };
}
function $r(a, e) {
  return gu(vo("", null, null, "", null, null, 0, a.siblings), a, { length: -a.length }, e);
}
function ti(a) {
  for (; a.root; )
    a = $r(a.root, { children: [a] });
  Hi(a, a.siblings);
}
function W4() {
  return rt;
}
function Y4() {
  return rt = qt > 0 ? dt(mi, --qt) : 0, oi--, rt === 10 && (oi = 1, po--), rt;
}
function lr() {
  return rt = qt < Id ? dt(mi, qt++) : 0, oi++, rt === 10 && (oi = 1, po++), rt;
}
function _n() {
  return dt(mi, qt);
}
function ls() {
  return qt;
}
function mo(a, e) {
  return si(mi, a, e);
}
function pu(a) {
  switch (a) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function K4(a) {
  return po = oi = 1, Id = _r(mi = a), qt = 0, [];
}
function X4(a) {
  return mi = "", a;
}
function Zl(a) {
  return Md(mo(qt - 1, vu(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function $4(a) {
  for (; (rt = _n()) && rt < 33; )
    lr();
  return pu(a) > 2 || pu(rt) > 3 ? "" : " ";
}
function q4(a, e) {
  for (; --e && lr() && !(rt < 48 || rt > 102 || rt > 57 && rt < 65 || rt > 70 && rt < 97); )
    ;
  return mo(a, ls() + (e < 6 && _n() == 32 && lr() == 32));
}
function vu(a) {
  for (; lr(); )
    switch (rt) {
      case a:
        return qt;
      case 34:
      case 39:
        a !== 34 && a !== 39 && vu(rt);
        break;
      case 40:
        a === 41 && vu(a);
        break;
      case 92:
        lr();
        break;
    }
  return qt;
}
function Q4(a, e) {
  for (; lr() && a + rt !== 47 + 10; )
    if (a + rt === 42 + 42 && _n() === 47)
      break;
  return "/*" + mo(e, qt - 1) + "*" + Gu(a === 47 ? a : lr());
}
function J4(a) {
  for (; !pu(_n()); )
    lr();
  return mo(a, qt);
}
function Z4(a) {
  return X4(us("", null, null, null, [""], a = K4(a), 0, [0], a));
}
function us(a, e, n, i, o, u, h, d, f) {
  for (var p = 0, y = 0, C = h, x = 0, _ = 0, m = 0, P = 1, E = 1, R = 1, N = 0, v = "", w = o, k = u, b = i, I = v; E; )
    switch (m = N, N = lr()) {
      case 40:
        if (m != 108 && dt(I, C - 1) == 58) {
          os(I += me(Zl(N), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Zl(N);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += $4(m);
        break;
      case 92:
        I += q4(ls() - 1, 7);
        continue;
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            Hi(ep(Q4(lr(), ls()), e, n, f), f);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * P:
        d[p++] = _r(I) * R;
      case 125 * P:
      case 59:
      case 0:
        switch (N) {
          case 0:
          case 125:
            E = 0;
          case 59 + y:
            R == -1 && (I = me(I, /\f/g, "")), _ > 0 && _r(I) - C && Hi(_ > 32 ? k0(I + ";", i, n, C - 1, f) : k0(me(I, " ", "") + ";", i, n, C - 2, f), f);
            break;
          case 59:
            I += ";";
          default:
            if (Hi(b = P0(I, e, n, p, y, o, d, v, w = [], k = [], C, u), u), N === 123)
              if (y === 0)
                us(I, e, b, b, w, u, C, d, k);
              else
                switch (x === 99 && dt(I, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    us(a, b, b, i && Hi(P0(a, b, b, 0, 0, o, d, v, o, w = [], C, k), k), o, k, C, d, i ? w : k);
                    break;
                  default:
                    us(I, b, b, b, [""], k, 0, d, k);
                }
        }
        p = y = _ = 0, P = R = 1, v = I = "", C = h;
        break;
      case 58:
        C = 1 + _r(I), _ = m;
      default:
        if (P < 1) {
          if (N == 123)
            --P;
          else if (N == 125 && P++ == 0 && Y4() == 125)
            continue;
        }
        switch (I += Gu(N), N * P) {
          case 38:
            R = y > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            d[p++] = (_r(I) - 1) * R, R = 1;
            break;
          case 64:
            _n() === 45 && (I += Zl(lr())), x = _n(), y = C = _r(v = I += J4(ls())), N++;
            break;
          case 45:
            m === 45 && _r(I) == 2 && (P = 0);
        }
    }
  return u;
}
function P0(a, e, n, i, o, u, h, d, f, p, y, C) {
  for (var x = o - 1, _ = o === 0 ? u : [""], m = Od(_), P = 0, E = 0, R = 0; P < i; ++P)
    for (var N = 0, v = si(a, x + 1, x = V4(E = h[P])), w = a; N < m; ++N)
      (w = Md(E > 0 ? _[N] + " " + v : me(v, /&\f/g, _[N]))) && (f[R++] = w);
  return vo(a, e, n, o === 0 ? go : d, f, p, y, C);
}
function ep(a, e, n, i) {
  return vo(a, e, n, Ad, Gu(W4()), si(a, 2, -2), 0, i);
}
function k0(a, e, n, i, o) {
  return vo(a, e, n, Du, si(a, 0, i), si(a, i + 1, -1), i, o);
}
function Ld(a, e, n) {
  switch (H4(a, e)) {
    case 5103:
      return Ne + "print-" + a + a;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ne + a + a;
    case 4789:
      return ji + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ne + a + ji + a + Be + a + a;
    case 5936:
      switch (dt(a, e + 11)) {
        case 114:
          return Ne + a + Be + me(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        case 108:
          return Ne + a + Be + me(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        case 45:
          return Ne + a + Be + me(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
    case 6828:
    case 4268:
    case 2903:
      return Ne + a + Be + a + a;
    case 6165:
      return Ne + a + Be + "flex-" + a + a;
    case 5187:
      return Ne + a + me(a, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + Be + "flex-$1$2") + a;
    case 5443:
      return Ne + a + Be + "flex-item-" + me(a, /flex-|-self/g, "") + (Fr(a, /flex-|baseline/) ? "" : Be + "grid-row-" + me(a, /flex-|-self/g, "")) + a;
    case 4675:
      return Ne + a + Be + "flex-line-pack" + me(a, /align-content|flex-|-self/g, "") + a;
    case 5548:
      return Ne + a + Be + me(a, "shrink", "negative") + a;
    case 5292:
      return Ne + a + Be + me(a, "basis", "preferred-size") + a;
    case 6060:
      return Ne + "box-" + me(a, "-grow", "") + Ne + a + Be + me(a, "grow", "positive") + a;
    case 4554:
      return Ne + me(a, /([^-])(transform)/g, "$1" + Ne + "$2") + a;
    case 6187:
      return me(me(me(a, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"), a, "") + a;
    case 5495:
    case 3959:
      return me(a, /(image-set\([^]*)/, Ne + "$1$`$1");
    case 4968:
      return me(me(a, /(.+:)(flex-)?(.*)/, Ne + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ne + a + a;
    case 4200:
      if (!Fr(a, /flex-|baseline/))
        return Be + "grid-column-align" + si(a, e) + a;
      break;
    case 2592:
    case 3360:
      return Be + me(a, "template-", "") + a;
    case 4384:
    case 3616:
      return n && n.some(function(i, o) {
        return e = o, Fr(i.props, /grid-\w+-end/);
      }) ? ~os(a + (n = n[e].value), "span") ? a : Be + me(a, "-start", "") + a + Be + "grid-row-span:" + (~os(n, "span") ? Fr(n, /\d+/) : +Fr(n, /\d+/) - +Fr(a, /\d+/)) + ";" : Be + me(a, "-start", "") + a;
    case 4896:
    case 4128:
      return n && n.some(function(i) {
        return Fr(i.props, /grid-\w+-start/);
      }) ? a : Be + me(me(a, "-end", "-span"), "span ", "") + a;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(a, /(.+)-inline(.+)/, Ne + "$1$2") + a;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (_r(a) - 1 - e > 6)
        switch (dt(a, e + 1)) {
          case 109:
            if (dt(a, e + 4) !== 45)
              break;
          case 102:
            return me(a, /(.+:)(.+)-([^]+)/, "$1" + Ne + "$2-$3$1" + ji + (dt(a, e + 3) == 108 ? "$3" : "$2-$3")) + a;
          case 115:
            return ~os(a, "stretch") ? Ld(me(a, "stretch", "fill-available"), e, n) + a : a;
        }
      break;
    case 5152:
    case 5920:
      return me(a, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, o, u, h, d, f, p) {
        return Be + o + ":" + u + p + (h ? Be + o + "-span:" + (d ? f : +f - +u) + p : "") + a;
      });
    case 4949:
      if (dt(a, e + 6) === 121)
        return me(a, ":", ":" + Ne) + a;
      break;
    case 6444:
      switch (dt(a, dt(a, 14) === 45 ? 18 : 11)) {
        case 120:
          return me(a, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ne + (dt(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Ne + "$2$3$1" + Be + "$2box$3") + a;
        case 100:
          return me(a, ":", ":" + Be) + a;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return me(a, "scroll-", "scroll-snap-") + a;
  }
  return a;
}
function ms(a, e) {
  for (var n = "", i = 0; i < a.length; i++)
    n += e(a[i], i, a, e) || "";
  return n;
}
function tp(a, e, n, i) {
  switch (a.type) {
    case B4:
      if (a.children.length)
        break;
    case z4:
    case Du:
      return a.return = a.return || a.value;
    case Ad:
      return "";
    case Fd:
      return a.return = a.value + "{" + ms(a.children, i) + "}";
    case go:
      if (!_r(a.value = a.props.join(",")))
        return "";
  }
  return _r(n = ms(a.children, i)) ? a.return = a.value + "{" + n + "}" : "";
}
function rp(a) {
  var e = Od(a);
  return function(n, i, o, u) {
    for (var h = "", d = 0; d < e; d++)
      h += a[d](n, i, o, u) || "";
    return h;
  };
}
function np(a) {
  return function(e) {
    e.root || (e = e.return) && a(e);
  };
}
function ip(a, e, n, i) {
  if (a.length > -1 && !a.return)
    switch (a.type) {
      case Du:
        a.return = Ld(a.value, a.length, n);
        return;
      case Fd:
        return ms([$r(a, { value: me(a.value, "@", "@" + Ne) })], i);
      case go:
        if (a.length)
          return j4(n = a.props, function(o) {
            switch (Fr(o, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ti($r(a, { props: [me(o, /:(read-\w+)/, ":" + ji + "$1")] })), ti($r(a, { props: [o] })), gu(a, { props: x0(n, i) });
                break;
              case "::placeholder":
                ti($r(a, { props: [me(o, /:(plac\w+)/, ":" + Ne + "input-$1")] })), ti($r(a, { props: [me(o, /:(plac\w+)/, ":" + ji + "$1")] })), ti($r(a, { props: [me(o, /:(plac\w+)/, Be + "input-$1")] })), ti($r(a, { props: [o] })), gu(a, { props: x0(n, i) });
                break;
            }
            return "";
          });
    }
}
var ap = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, li = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Uu = typeof window < "u" && "HTMLElement" in window, sp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), yo = Object.freeze([]), ui = Object.freeze({});
function op(a, e, n) {
  return n === void 0 && (n = ui), a.theme !== n.theme && a.theme || e || n.theme;
}
var Dd = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), lp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, up = /(^-|-$)/g;
function E0(a) {
  return a.replace(lp, "-").replace(up, "");
}
var hp = /(a)(d)/gi, T0 = function(a) {
  return String.fromCharCode(a + (a > 25 ? 39 : 97));
};
function mu(a) {
  var e, n = "";
  for (e = Math.abs(a); e > 52; e = e / 52 | 0)
    n = T0(e % 52) + n;
  return (T0(e % 52) + n).replace(hp, "$1-$2");
}
var eu, ri = function(a, e) {
  for (var n = e.length; n; )
    a = 33 * a ^ e.charCodeAt(--n);
  return a;
}, Gd = function(a) {
  return ri(5381, a);
};
function cp(a) {
  return mu(Gd(a) >>> 0);
}
function dp(a) {
  return a.displayName || a.name || "Component";
}
function tu(a) {
  return typeof a == "string" && !0;
}
var Ud = typeof Symbol == "function" && Symbol.for, zd = Ud ? Symbol.for("react.memo") : 60115, fp = Ud ? Symbol.for("react.forward_ref") : 60112, gp = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, pp = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Bd = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, vp = ((eu = {})[fp] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, eu[zd] = Bd, eu);
function R0(a) {
  return ("type" in (e = a) && e.type.$$typeof) === zd ? Bd : "$$typeof" in a ? vp[a.$$typeof] : gp;
  var e;
}
var mp = Object.defineProperty, yp = Object.getOwnPropertyNames, b0 = Object.getOwnPropertySymbols, _p = Object.getOwnPropertyDescriptor, Sp = Object.getPrototypeOf, N0 = Object.prototype;
function Vd(a, e, n) {
  if (typeof e != "string") {
    if (N0) {
      var i = Sp(e);
      i && i !== N0 && Vd(a, i, n);
    }
    var o = yp(e);
    b0 && (o = o.concat(b0(e)));
    for (var u = R0(a), h = R0(e), d = 0; d < o.length; ++d) {
      var f = o[d];
      if (!(f in pp || n && n[f] || h && f in h || u && f in u)) {
        var p = _p(e, f);
        try {
          mp(a, f, p);
        } catch {
        }
      }
    }
  }
  return a;
}
function hi(a) {
  return typeof a == "function";
}
function zu(a) {
  return typeof a == "object" && "styledComponentId" in a;
}
function yn(a, e) {
  return a && e ? "".concat(a, " ").concat(e) : a || e || "";
}
function A0(a, e) {
  if (a.length === 0)
    return "";
  for (var n = a[0], i = 1; i < a.length; i++)
    n += e ? e + a[i] : a[i];
  return n;
}
function Xi(a) {
  return a !== null && typeof a == "object" && a.constructor.name === Object.name && !("props" in a && a.$$typeof);
}
function yu(a, e, n) {
  if (n === void 0 && (n = !1), !n && !Xi(a) && !Array.isArray(a))
    return e;
  if (Array.isArray(e))
    for (var i = 0; i < e.length; i++)
      a[i] = yu(a[i], e[i]);
  else if (Xi(e))
    for (var i in e)
      a[i] = yu(a[i], e[i]);
  return a;
}
function Bu(a, e) {
  Object.defineProperty(a, "toString", { value: e });
}
function ta(a) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var Cp = function() {
  function a(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return a.prototype.indexOfGroup = function(e) {
    for (var n = 0, i = 0; i < e; i++)
      n += this.groupSizes[i];
    return n;
  }, a.prototype.insertRules = function(e, n) {
    if (e >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, u = o; e >= u; )
        if ((u <<= 1) < 0)
          throw ta(16, "".concat(e));
      this.groupSizes = new Uint32Array(u), this.groupSizes.set(i), this.length = u;
      for (var h = o; h < u; h++)
        this.groupSizes[h] = 0;
    }
    for (var d = this.indexOfGroup(e + 1), f = (h = 0, n.length); h < f; h++)
      this.tag.insertRule(d, n[h]) && (this.groupSizes[e]++, d++);
  }, a.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var n = this.groupSizes[e], i = this.indexOfGroup(e), o = i + n;
      this.groupSizes[e] = 0;
      for (var u = i; u < o; u++)
        this.tag.deleteRule(i);
    }
  }, a.prototype.getGroup = function(e) {
    var n = "";
    if (e >= this.length || this.groupSizes[e] === 0)
      return n;
    for (var i = this.groupSizes[e], o = this.indexOfGroup(e), u = o + i, h = o; h < u; h++)
      n += "".concat(this.tag.getRule(h)).concat(`/*!sc*/
`);
    return n;
  }, a;
}(), hs = /* @__PURE__ */ new Map(), ys = /* @__PURE__ */ new Map(), ru = 1, is = function(a) {
  if (hs.has(a))
    return hs.get(a);
  for (; ys.has(ru); )
    ru++;
  var e = ru++;
  return hs.set(a, e), ys.set(e, a), e;
}, wp = function(a, e) {
  hs.set(a, e), ys.set(e, a);
}, xp = "style[".concat(li, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), Pp = new RegExp("^".concat(li, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), kp = function(a, e, n) {
  for (var i, o = n.split(","), u = 0, h = o.length; u < h; u++)
    (i = o[u]) && a.registerName(e, i);
}, Ep = function(a, e) {
  for (var n, i = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], u = 0, h = i.length; u < h; u++) {
    var d = i[u].trim();
    if (d) {
      var f = d.match(Pp);
      if (f) {
        var p = 0 | parseInt(f[1], 10), y = f[2];
        p !== 0 && (wp(y, p), kp(a, y, f[3]), a.getTag().insertRules(p, o)), o.length = 0;
      } else
        o.push(d);
    }
  }
};
function Tp() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hd = function(a) {
  var e = document.head, n = a || e, i = document.createElement("style"), o = function(d) {
    var f = Array.from(d.querySelectorAll("style[".concat(li, "]")));
    return f[f.length - 1];
  }(n), u = o !== void 0 ? o.nextSibling : null;
  i.setAttribute(li, "active"), i.setAttribute("data-styled-version", "6.0.7");
  var h = Tp();
  return h && i.setAttribute("nonce", h), n.insertBefore(i, u), i;
}, Rp = function() {
  function a(e) {
    this.element = Hd(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var i = document.styleSheets, o = 0, u = i.length; o < u; o++) {
        var h = i[o];
        if (h.ownerNode === n)
          return h;
      }
      throw ta(17);
    }(this.element), this.length = 0;
  }
  return a.prototype.insertRule = function(e, n) {
    try {
      return this.sheet.insertRule(n, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, a.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, a.prototype.getRule = function(e) {
    var n = this.sheet.cssRules[e];
    return n && n.cssText ? n.cssText : "";
  }, a;
}(), bp = function() {
  function a(e) {
    this.element = Hd(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return a.prototype.insertRule = function(e, n) {
    if (e <= this.length && e >= 0) {
      var i = document.createTextNode(n);
      return this.element.insertBefore(i, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, a.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, a.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, a;
}(), Np = function() {
  function a(e) {
    this.rules = [], this.length = 0;
  }
  return a.prototype.insertRule = function(e, n) {
    return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0);
  }, a.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, a.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, a;
}(), F0 = Uu, Ap = { isServer: !Uu, useCSSOMInjection: !sp }, jd = function() {
  function a(e, n, i) {
    e === void 0 && (e = ui), n === void 0 && (n = {});
    var o = this;
    this.options = Ot(Ot({}, Ap), e), this.gs = n, this.names = new Map(i), this.server = !!e.isServer, !this.server && Uu && F0 && (F0 = !1, function(u) {
      for (var h = document.querySelectorAll(xp), d = 0, f = h.length; d < f; d++) {
        var p = h[d];
        p && p.getAttribute(li) !== "active" && (Ep(u, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), Bu(this, function() {
      return function(u) {
        for (var h = u.getTag(), d = h.length, f = "", p = function(C) {
          var x = function(R) {
            return ys.get(R);
          }(C);
          if (x === void 0)
            return "continue";
          var _ = u.names.get(x), m = h.getGroup(C);
          if (_ === void 0 || m.length === 0)
            return "continue";
          var P = "".concat(li, ".g").concat(C, '[id="').concat(x, '"]'), E = "";
          _ !== void 0 && _.forEach(function(R) {
            R.length > 0 && (E += "".concat(R, ","));
          }), f += "".concat(m).concat(P, '{content:"').concat(E, '"}').concat(`/*!sc*/
`);
        }, y = 0; y < d; y++)
          p(y);
        return f;
      }(o);
    });
  }
  return a.registerId = function(e) {
    return is(e);
  }, a.prototype.reconstructWithOptions = function(e, n) {
    return n === void 0 && (n = !0), new a(Ot(Ot({}, this.options), e), this.gs, n && this.names || void 0);
  }, a.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, a.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(n) {
      var i = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Np(o) : i ? new Rp(o) : new bp(o);
    }(this.options), new Cp(e)));
    var e;
  }, a.prototype.hasNameForId = function(e, n) {
    return this.names.has(e) && this.names.get(e).has(n);
  }, a.prototype.registerName = function(e, n) {
    if (is(e), this.names.has(e))
      this.names.get(e).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(e, i);
    }
  }, a.prototype.insertRules = function(e, n, i) {
    this.registerName(e, n), this.getTag().insertRules(is(e), i);
  }, a.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, a.prototype.clearRules = function(e) {
    this.getTag().clearGroup(is(e)), this.clearNames(e);
  }, a.prototype.clearTag = function() {
    this.tag = void 0;
  }, a;
}(), Fp = /&/g, Mp = /^\s*\/\/.*$/gm;
function Wd(a, e) {
  return a.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(i) {
      return "".concat(e, " ").concat(i);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Wd(n.children, e)), n;
  });
}
function Op(a) {
  var e, n, i, o = a === void 0 ? ui : a, u = o.options, h = u === void 0 ? ui : u, d = o.plugins, f = d === void 0 ? yo : d, p = function(x, _, m) {
    return m === n || m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(e) : x;
  }, y = f.slice();
  y.push(function(x) {
    x.type === go && x.value.includes("&") && (x.props[0] = x.props[0].replace(Fp, n).replace(i, p));
  }), h.prefix && y.push(ip), y.push(tp);
  var C = function(x, _, m, P) {
    _ === void 0 && (_ = ""), m === void 0 && (m = ""), P === void 0 && (P = "&"), e = P, n = _, i = new RegExp("\\".concat(n, "\\b"), "g");
    var E = x.replace(Mp, ""), R = Z4(m || _ ? "".concat(m, " ").concat(_, " { ").concat(E, " }") : E);
    h.namespace && (R = Wd(R, h.namespace));
    var N = [];
    return ms(R, rp(y.concat(np(function(v) {
      return N.push(v);
    })))), N;
  };
  return C.hash = f.length ? f.reduce(function(x, _) {
    return _.name || ta(15), ri(x, _.name);
  }, 5381).toString() : "", C;
}
var Ip = new jd(), _u = Op(), Yd = $e.createContext({ shouldForwardProp: void 0, styleSheet: Ip, stylis: _u });
Yd.Consumer;
$e.createContext(void 0);
function M0() {
  return vf(Yd);
}
var Lp = function() {
  function a(e, n) {
    var i = this;
    this.inject = function(o, u) {
      u === void 0 && (u = _u);
      var h = i.name + u.hash;
      o.hasNameForId(i.id, h) || o.insertRules(i.id, h, u(i.rules, h, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, Bu(this, function() {
      throw ta(12, String(i.name));
    });
  }
  return a.prototype.getName = function(e) {
    return e === void 0 && (e = _u), this.name + e.hash;
  }, a;
}(), Dp = function(a) {
  return a >= "A" && a <= "Z";
};
function O0(a) {
  for (var e = "", n = 0; n < a.length; n++) {
    var i = a[n];
    if (n === 1 && i === "-" && a[0] === "-")
      return a;
    Dp(i) ? e += "-" + i.toLowerCase() : e += i;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Kd = function(a) {
  return a == null || a === !1 || a === "";
}, Xd = function(a) {
  var e, n, i = [];
  for (var o in a) {
    var u = a[o];
    a.hasOwnProperty(o) && !Kd(u) && (Array.isArray(u) && u.isCss || hi(u) ? i.push("".concat(O0(o), ":"), u, ";") : Xi(u) ? i.push.apply(i, vs(vs(["".concat(o, " {")], Xd(u), !1), ["}"], !1)) : i.push("".concat(O0(o), ": ").concat((e = o, (n = u) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in ap || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return i;
};
function Sn(a, e, n, i) {
  if (Kd(a))
    return [];
  if (zu(a))
    return [".".concat(a.styledComponentId)];
  if (hi(a)) {
    if (!hi(u = a) || u.prototype && u.prototype.isReactComponent || !e)
      return [a];
    var o = a(e);
    return Sn(o, e, n, i);
  }
  var u;
  return a instanceof Lp ? n ? (a.inject(n, i), [a.getName(i)]) : [a] : Xi(a) ? Xd(a) : Array.isArray(a) ? Array.prototype.concat.apply(yo, a.map(function(h) {
    return Sn(h, e, n, i);
  })) : [a.toString()];
}
function Gp(a) {
  for (var e = 0; e < a.length; e += 1) {
    var n = a[e];
    if (hi(n) && !zu(n))
      return !1;
  }
  return !0;
}
var Up = Gd("6.0.7"), zp = function() {
  function a(e, n, i) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Gp(e), this.componentId = n, this.baseHash = ri(Up, n), this.baseStyle = i, jd.registerId(n);
  }
  return a.prototype.generateAndInjectStyles = function(e, n, i) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, i) : "";
    if (this.isStatic && !i.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = yn(o, this.staticRulesId);
      else {
        var u = A0(Sn(this.rules, e, n, i)), h = mu(ri(this.baseHash, u) >>> 0);
        if (!n.hasNameForId(this.componentId, h)) {
          var d = i(u, ".".concat(h), void 0, this.componentId);
          n.insertRules(this.componentId, h, d);
        }
        o = yn(o, h), this.staticRulesId = h;
      }
    else {
      for (var f = ri(this.baseHash, i.hash), p = "", y = 0; y < this.rules.length; y++) {
        var C = this.rules[y];
        if (typeof C == "string")
          p += C;
        else if (C) {
          var x = A0(Sn(C, e, n, i));
          f = ri(f, x), p += x;
        }
      }
      if (p) {
        var _ = mu(f >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, i(p, ".".concat(_), void 0, this.componentId)), o = yn(o, _);
      }
    }
    return o;
  }, a;
}(), $d = $e.createContext(void 0);
$d.Consumer;
var nu = {};
function Bp(a, e, n) {
  var i = zu(a), o = a, u = !tu(a), h = e.attrs, d = h === void 0 ? yo : h, f = e.componentId, p = f === void 0 ? function(v, w) {
    var k = typeof v != "string" ? "sc" : E0(v);
    nu[k] = (nu[k] || 0) + 1;
    var b = "".concat(k, "-").concat(cp("6.0.7" + k + nu[k]));
    return w ? "".concat(w, "-").concat(b) : b;
  }(e.displayName, e.parentComponentId) : f, y = e.displayName;
  y === void 0 && function(v) {
    return tu(v) ? "styled.".concat(v) : "Styled(".concat(dp(v), ")");
  }(a);
  var C = e.displayName && e.componentId ? "".concat(E0(e.displayName), "-").concat(e.componentId) : e.componentId || p, x = i && o.attrs ? o.attrs.concat(d).filter(Boolean) : d, _ = e.shouldForwardProp;
  if (i && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (e.shouldForwardProp) {
      var P = e.shouldForwardProp;
      _ = function(v, w) {
        return m(v, w) && P(v, w);
      };
    } else
      _ = m;
  }
  var E = new zp(n, C, i ? o.componentStyle : void 0);
  function R(v, w) {
    return function(k, b, I) {
      var T = k.attrs, z = k.componentStyle, O = k.defaultProps, G = k.foldedComponentIds, Y = k.styledComponentId, H = k.target, q = $e.useContext($d), ae = M0(), ie = k.shouldForwardProp || ae.shouldForwardProp, oe = function(he, le, Le) {
        for (var xe, A = Ot(Ot({}, le), { className: void 0, theme: Le }), j = 0; j < he.length; j += 1) {
          var ee = hi(xe = he[j]) ? xe(A) : xe;
          for (var fe in ee)
            A[fe] = fe === "className" ? yn(A[fe], ee[fe]) : fe === "style" ? Ot(Ot({}, A[fe]), ee[fe]) : ee[fe];
        }
        return le.className && (A.className = yn(A.className, le.className)), A;
      }(T, b, op(b, q, O) || ui), B = oe.as || H, X = {};
      for (var V in oe)
        oe[V] === void 0 || V[0] === "$" || V === "as" || V === "theme" || (V === "forwardedAs" ? X.as = oe.forwardedAs : ie && !ie(V, B) || (X[V] = oe[V]));
      var K = function(he, le) {
        var Le = M0(), xe = he.generateAndInjectStyles(le, Le.styleSheet, Le.stylis);
        return xe;
      }(z, oe), $ = yn(G, Y);
      return K && ($ += " " + K), oe.className && ($ += " " + oe.className), X[tu(B) && !Dd.has(B) ? "class" : "className"] = $, X.ref = I, pf(B, X);
    }(N, v, w);
  }
  var N = $e.forwardRef(R);
  return N.attrs = x, N.componentStyle = E, N.shouldForwardProp = _, N.foldedComponentIds = i ? yn(o.foldedComponentIds, o.styledComponentId) : "", N.styledComponentId = C, N.target = i ? o.target : a, Object.defineProperty(N, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = i ? function(w) {
      for (var k = [], b = 1; b < arguments.length; b++)
        k[b - 1] = arguments[b];
      for (var I = 0, T = k; I < T.length; I++)
        yu(w, T[I], !0);
      return w;
    }({}, o.defaultProps, v) : v;
  } }), Bu(N, function() {
    return ".".concat(N.styledComponentId);
  }), u && Vd(N, a, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), N;
}
function I0(a, e) {
  for (var n = [a[0]], i = 0, o = e.length; i < o; i += 1)
    n.push(e[i], a[i + 1]);
  return n;
}
var L0 = function(a) {
  return Object.assign(a, { isCss: !0 });
};
function Vp(a) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (hi(a) || Xi(a)) {
    var i = a;
    return L0(Sn(I0(yo, vs([i], e, !0))));
  }
  var o = a;
  return e.length === 0 && o.length === 1 && typeof o[0] == "string" ? Sn(o) : L0(Sn(I0(o, e)));
}
function Su(a, e, n) {
  if (n === void 0 && (n = ui), !e)
    throw ta(1, e);
  var i = function(o) {
    for (var u = [], h = 1; h < arguments.length; h++)
      u[h - 1] = arguments[h];
    return a(e, n, Vp.apply(void 0, vs([o], u, !1)));
  };
  return i.attrs = function(o) {
    return Su(a, e, Ot(Ot({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, i.withConfig = function(o) {
    return Su(a, e, Ot(Ot({}, n), o));
  }, i;
}
var qd = function(a) {
  return Su(Bp, a);
}, Qd = qd;
Dd.forEach(function(a) {
  Qd[a] = qd(a);
});
const Hp = Qd.div`
  /* background-color: #000; */
  overflow: hidden;
  overscroll-behavior: none;

  border: 1px solid #2dc275;
  border-radius: 0.25rem;

  #stage-container {
    background-color: #a6a6b0;
    position: relative;
    border-radius: 0.25rem;

    /* border-top: 3px solid; */
    /* border-bottom: 3px solid; */
    /* border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(38, 163, 98, 1) 25%,
      rgba(45, 194, 117, 1) 75%,
      rgba(0, 0, 0, 0.95) 100%
    ); */

    #btns-container {
      background-color: #00000060;
      position: absolute;
      /* top: 0.8rem; */
      /* left: 0.8rem; */

      z-index: 50;
      padding: 0.2rem;
      border-radius: 0.2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.4rem;

      button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.2rem;
        background-color: transparent;
        border: 1px solid #2dc275;
        backdrop-filter: blur(0.2rem);
        transition: all 0.3s ease-in-out;
      }

      button:hover {
        background-color: #ffffff30;
      }

      button.disabled {
        border: 1px solid #a6a6b0;
        cursor: not-allowed;
        svg {
          path {
            fill: #a6a6b0;
          }
        }
      }

      button.disabled:hover {
        background-color: transparent;
      }
    }
  }
`, $p = ({
  w: a = 0,
  h: e = 0,
  data: n = void 0,
  isMinimap: i = !1,
  isWheelable: o = !1,
  isDraggable: u = !1,
  hasTools: h = !1,
  hasSeatNumbers: d = !0,
  chosenSectionId: f = 0,
  chosenSectionData: p = void 0,
  serviceLocation: y = "",
  onSectionClick: C = () => {
  },
  onPostMessage: x = () => {
  },
  onError: _ = () => {
  },
  onSelectSeat: m = void 0,
  onDeselectSeat: P = void 0,
  selectedSeatsIds: E = void 0
}) => {
  var Jt;
  const [R, N] = $t({}), [v, w] = $t({}), [k, b] = $t({}), [I, T] = $t(!1), [z, O] = $t({}), [G, Y] = $t(!1), [H, q] = $t(0), [ae, ie] = $t(!1), [oe, B] = $t(!1), [X, V] = $t(!1), [K, $] = $t(void 0), he = $a(null), le = $a(null), Le = $a(null), xe = $a(null), A = $n(() => {
    try {
      if (i)
        return;
      const Q = he.current, ue = le.current, be = xe.current;
      if (Q && ue && be) {
        const we = Math.abs(Q.width() / be.width()), xt = Math.abs(Q.height() / be.height()), ot = Math.min(we, xt);
        ue.scale({
          x: ot,
          y: ot
        }), q(ot);
        const Gt = be.getClientRect(), Ut = Gt.x + Gt.width / 2, hr = Gt.y + Gt.height / 2;
        if (v && Object.keys(v).length) {
          const wr = v.x - Ut, gt = v.y - hr;
          (wr || gt) && Q.position({
            x: wr,
            y: gt
          });
        }
      }
    } catch (Q) {
      $({
        code: 1001,
        message: `[ERROR][${tt[1001]}][handleInitChosenSection]: ${Q}`
      });
    }
  }, [i, v]), j = $n(() => {
    try {
      const Q = he.current, ue = le.current, be = Le.current;
      if (Q && ue && be) {
        U4(he);
        const we = Q.width() / be.width(), xt = Q.height() / be.height(), ot = Math.min(we, xt);
        ue.scale({ x: ot, y: ot }), q(ot);
        const Gt = Q.width() / 2, Ut = Q.height() / 2, hr = be.width() * ot / 2, wr = be.height() * ot / 2, gt = Gt - hr, Zt = Ut - wr;
        ue.to({
          x: gt,
          y: Zt,
          duration: 0.1
        }), O({
          scale: { x: ot, y: ot },
          position: {
            x: gt,
            y: Zt
          }
        }), Y(!1);
      }
    } catch (Q) {
      $({
        code: 1001,
        message: `[ERROR][${tt[1001]}][handleBackToInitState]: ${Q}`
      });
    }
  }, []), ee = $n(() => {
    try {
      ns(
        [
          () => T(!1),
          () => ie(!1),
          j,
          () => T(!0)
        ],
        300
      );
    } catch (Q) {
      $({
        code: 1001,
        message: `[ERROR][${tt[1001]}][handleReset]: ${Q}`
      });
    }
  }, [j]), fe = $n(() => {
    try {
      const Q = he.current;
      if (Q) {
        const ue = Q.scaleX(), be = Q.x(), we = Q.y();
        if (z && Object.keys(z).length) {
          const xt = z.scale.x, ot = z.position.x, Gt = z.position.y, Ut = Math.abs(ue - xt) > 1e-3, hr = Math.abs(be - ot) > 1e-3 || Math.abs(we - Gt) > 1e-3;
          Y(Ut || hr);
        }
      }
    } catch (Q) {
      $({
        code: 1001,
        message: `[ERROR][${tt[1001]}][handleReset]: ${Q}`
      });
    }
  }, [z]), de = $n(
    (Q) => {
      try {
        const ue = Math.abs(H + w0 * (Q === "out" ? -1 : 1));
        ue >= bd && ue <= Nd && ns([
          () => q(H + w0 * (Q === "out" ? -1 : 1)),
          fe
        ]);
      } catch (ue) {
        $({
          code: 1001,
          message: `[ERROR][${tt[1001]}][handleZoom]: ${ue}`
        });
      }
    },
    [H, fe]
  ), Re = $n(
    (Q, ue) => {
      try {
        if (y !== "mobile")
          return;
        switch (Q) {
          case "onSectionClick":
            x(JSON.stringify({ type: "onSectionClick", data: ue }));
            return;
          case "onSeatClick":
            x(
              JSON.stringify({
                type: "onSeatClick",
                data: ue
              })
            );
            return;
          default:
            x(JSON.stringify({ type: "onError", data: K }));
            return;
        }
      } catch (be) {
        $({
          code: 1001,
          message: `[ERROR][${tt[1001]}][handlePostMessage]: ${be}`
        });
      }
    },
    [K, x, y]
  ), De = (Q) => {
    try {
      if (!o || i)
        return;
      ns([
        () => G4(Q, he),
        () => {
          var ue;
          return q((ue = le == null ? void 0 : le.current) == null ? void 0 : ue.scaleX());
        }
      ]);
    } catch (ue) {
      $({
        code: 1002,
        message: `[ERROR][${tt[1002]}][onStageWheel]: ${ue}`
      });
    }
  }, Et = (Q) => {
    var ue, be;
    try {
      if (i)
        return;
      const we = (be = (ue = Q.target) == null ? void 0 : ue.getStage()) == null ? void 0 : be.container();
      we && (we.style.cursor = "pointer");
    } catch (we) {
      $({
        code: 1002,
        message: `[ERROR][${tt[1002]}][onSectionMouseEnter]: ${we}`
      });
    }
  }, Ae = (Q) => {
    var ue, be;
    try {
      if (i)
        return;
      const we = (be = (ue = Q.target) == null ? void 0 : ue.getStage()) == null ? void 0 : be.container();
      we && (we.style.cursor = "");
    } catch (we) {
      $({
        code: 1002,
        message: `[ERROR][${tt[1002]}][onSectionMouseLeave]: ${we}`
      });
    }
  };
  return qn(() => {
    if (!n || Object.keys(n).length <= 0) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: 'data' is compulsory!`
      });
      return;
    }
    if (a <= 0 || e <= 0) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: 'width' AND 'height' are compulsory!`
      });
      return;
    }
    if (!y) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: serviceLocation is compulsory!`
      });
      return;
    }
    if (!["web", "mobile", "mweb"].includes(
      y
    )) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: serviceLocation can only be 'web', 'mobile' or 'mweb'!`
      });
      return;
    }
    const we = f !== 0 && !i && (!p || Object.keys(p).length <= 0), xt = f === 0 && !i && p && Object.keys(p).length;
    if (we) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: Must provide 'chosenSectionData' if 'chosenSectionId' exists!`
      });
      return;
    }
    if (xt) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: Must provide 'chosenSectionId' if 'chosenSectionData' exists!`
      });
      return;
    }
    if (i && f === 0) {
      $({
        code: 1003,
        message: `[ERROR][${tt[1003]}]: Must provide 'chosenSectionId' if 'isMinimap' is true!`
      });
      return;
    }
    f && !i && (!E || !m || !P) && $({
      code: 1003,
      message: `[ERROR][${tt[1003]}]: Must provide 'selectedSeatsIds', 'onSelectSeat' AND 'onDeselectSeat' if 'chosenSectionId' exists!`
    }), V(!0);
  }, [
    p,
    f,
    n,
    e,
    i,
    P,
    m,
    E,
    y,
    a
  ]), qn(() => {
    if (!oe) {
      if (K && Object.keys(K).length) {
        _(K), Re("onError", K), B(!0);
        return;
      }
      B(!1);
    }
  }, [K, Re, oe, _]), qn(() => {
    try {
      if (n && Object.keys(n).length && n.viewbox) {
        const Q = he.current;
        if (Q) {
          const ue = Q.getAbsolutePosition(), be = ue.x + Q.width() / 2, we = ue.y + Q.height() / 2;
          w({ x: be, y: we }), N(M4(n == null ? void 0 : n.viewbox));
        }
      }
    } catch (Q) {
      $({
        code: 1004,
        message: `[ERROR][${tt[1004]}][stageCenter, groupDimensions]: ${Q}`
      });
    }
  }, [n]), qn(() => {
    try {
      if (R && Object.keys(R).length) {
        const Q = Le.current;
        if (Q) {
          const ue = Q.getAbsolutePosition(), be = ue.x + Q.width() / 2, we = ue.y + Q.height() / 2;
          b({ x: be, y: we });
        }
      }
    } catch (Q) {
      $({
        code: 1004,
        message: `[ERROR][${tt[1004]}][groupCenter]: ${Q}`
      });
    }
  }, [R]), qn(() => {
    const Q = v && Object.keys(v).length, ue = k && Object.keys(k).length;
    Q && ue && ee();
  }, [v, k, ee]), qn(() => {
    I && f !== 0 && ns(
      [A, () => ie(!0)],
      200
    );
  }, [f, A, I]), /* @__PURE__ */ Ve.jsx(Hp, { style: { opacity: X && !oe ? 1 : 0 }, children: /* @__PURE__ */ Ve.jsxs("div", { id: "stage-container", children: [
    h && !i && /* @__PURE__ */ Ve.jsxs("div", { id: "btns-container", children: [
      /* @__PURE__ */ Ve.jsx(ql, { onClick: () => de("in"), children: /* @__PURE__ */ Ve.jsx(A4, {}) }),
      /* @__PURE__ */ Ve.jsx(ql, { disabled: !G, onClick: ee, children: /* @__PURE__ */ Ve.jsx(F4, {}) }),
      /* @__PURE__ */ Ve.jsx(ql, { onClick: () => de("out"), children: /* @__PURE__ */ Ve.jsx(N4, {}) })
    ] }),
    /* @__PURE__ */ Ve.jsx(
      k4,
      {
        id: "seatmap-stage",
        width: a,
        height: e,
        ref: he,
        draggable: u && !i,
        onDragEnd: fe,
        visible: X && !oe,
        onWheel: (Q) => {
          Q.evt.preventDefault(), I && (De(Q), fe());
        },
        children: /* @__PURE__ */ Ve.jsx(
          w4,
          {
            id: "seatmap-layer",
            ref: le,
            scale: { x: H, y: H },
            draggable: u && !i,
            onDragEnd: fe,
            children: /* @__PURE__ */ Ve.jsx(
              fu,
              {
                ref: Le,
                width: R == null ? void 0 : R.width,
                height: R == null ? void 0 : R.height,
                children: (Jt = n == null ? void 0 : n.sections) == null ? void 0 : Jt.map((Q) => {
                  var wr;
                  const {
                    isStage: ue,
                    elements: be,
                    attribute: we,
                    id: xt,
                    isReservingSeat: ot,
                    seatMapId: Gt
                  } = Q;
                  if (!i && f !== 0 && xt !== f)
                    return /* @__PURE__ */ Ve.jsx(Ve.Fragment, {});
                  const hr = () => {
                    if (f === 0)
                      try {
                        Q && Object.keys(Q).length && (C(Q), Re("onSectionClick", Q));
                      } catch (gt) {
                        $({
                          code: 1002,
                          message: `[ERROR][${tt[1002]}][onSectionClick]: ${gt}`
                        });
                      }
                  };
                  return /* @__PURE__ */ Ve.jsxs(
                    fu,
                    {
                      visible: f !== 0 ? i ? !0 : ae : !0,
                      ref: xt === f ? xe : null,
                      width: we == null ? void 0 : we.width,
                      height: we == null ? void 0 : we.height,
                      onClick: hr,
                      onTap: hr,
                      children: [
                        be == null ? void 0 : be.map(({ data: gt, fill: Zt, display: An }, nn) => {
                          const Fn = i && nn > 0 && f !== 0, Mn = f !== 0 ? nn > 0 && An === 1 : nn > 0 && An === 2;
                          if (!ue && (Fn || Mn))
                            return /* @__PURE__ */ Ve.jsx(Ve.Fragment, {});
                          const yi = {
                            onMouseEnter: Et,
                            onMouseLeave: Ae
                          };
                          return ue ? /* @__PURE__ */ Ve.jsx(
                            S0,
                            {
                              visible: I,
                              fill: Zt || "#000",
                              data: gt
                            },
                            `${$l()}`
                          ) : /* @__PURE__ */ Ve.jsx(
                            S0,
                            {
                              visible: I,
                              fill: i ? f === xt ? Zt : "#d3d3d3" : Zt || "#fff",
                              data: gt,
                              ...f === 0 ? yi : {}
                            },
                            `${$l()}`
                          );
                        }),
                        (wr = p == null ? void 0 : p.rows) == null ? void 0 : wr.map((gt) => {
                          var Fn;
                          const {
                            id: Zt,
                            name: An,
                            status: nn
                          } = gt;
                          return (Fn = gt == null ? void 0 : gt.seats) == null ? void 0 : Fn.map((Mn) => {
                            const {
                              x: yi,
                              y: _o,
                              status: So,
                              id: On,
                              name: _i,
                              position: Co
                            } = Mn, ra = {
                              sectionId: xt,
                              sectionIsReserveSeat: ot,
                              sectionSeatMapId: Gt,
                              rowId: Zt,
                              rowName: An,
                              rowStatus: nn,
                              seatId: On,
                              seatName: _i,
                              seatPosition: Co
                            };
                            if (Mn)
                              return /* @__PURE__ */ Ve.jsx(
                                D4,
                                {
                                  x: yi,
                                  y: _o,
                                  id: On,
                                  name: On,
                                  displayName: _i,
                                  showName: d,
                                  visible: I && !i,
                                  initStatus: So,
                                  onClick: () => Re("onSeatClick", ra),
                                  onSelectSeat: m,
                                  onDeselectSeat: P,
                                  isSelected: E ? E.indexOf(On) >= 0 : !1,
                                  seatDataPack: ra
                                },
                                `seatKey-${$l()}`
                              );
                          });
                        })
                      ]
                    },
                    xt
                  );
                })
              }
            )
          }
        )
      }
    )
  ] }) });
};
export {
  $p as default
};
