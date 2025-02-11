"use client";
import { jsxs as W, jsx as d, Fragment as Le } from "react/jsx-runtime";
import * as c from "react";
import Z, { forwardRef as Ur, createElement as Fn, createContext as Vc, useState as Hr, useEffect as $n, useContext as Bc, useLayoutEffect as Wc } from "react";
import * as Jt from "react-dom";
import Kr from "react-dom";
function jr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = jr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Yr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = jr(e)) && (o && (o += " "), o += t);
  return o;
}
const ar = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ir = Yr, Ke = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return ir(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((u) => {
    const f = n == null ? void 0 : n[u], p = s == null ? void 0 : s[u];
    if (f === null) return null;
    const h = ar(f) || ar(p);
    return r[u][h];
  }), i = n && Object.entries(n).reduce((u, f) => {
    let [p, h] = f;
    return h === void 0 || (u[p] = h), u;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, f) => {
    let { class: p, className: h, ...g } = f;
    return Object.entries(g).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === b;
    }) ? [
      ...u,
      p,
      h
    ] : u;
  }, []);
  return ir(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xr = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = Ur(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: a,
    ...i
  }, l) => Fn(
    "svg",
    {
      ref: l,
      ...zc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Xr("lucide", r),
      ...i
    },
    [
      ...a.map(([u, f]) => Fn(u, f)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = (e, t) => {
  const n = Ur(
    ({ className: o, ...r }, s) => Fn(Uc, {
      ref: s,
      iconNode: t,
      className: Xr(`lucide-${Gc(e)}`, o),
      ...r
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = Re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = Re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kc = Re("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = Re("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = Re("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = Re("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = Re("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = Re("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = Re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), lo = "-", qc = (e) => {
  const t = Qc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(lo);
      return i[0] === "" && i.length !== 1 && i.shift(), Qr(i, t) || Zc(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = n[a] || [];
      return i && o[a] ? [...l, ...o[a]] : l;
    }
  };
}, Qr = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Qr(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(lo);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, lr = /^\[(.+)\]$/, Zc = (e) => {
  if (lr.test(e)) {
    const t = lr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Qc = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return el(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    Vn(a, o, s, t);
  }), o;
}, Vn = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : ur(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Jc(r)) {
        Vn(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      Vn(a, ur(t, s), n, o);
    });
  });
}, ur = (e, t) => {
  let n = e;
  return t.split(lo).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Jc = (e) => e.isThemeGetter, el = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, r];
}) : e, tl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = o.get(s)) !== void 0)
        return r(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : r(s, a);
    }
  };
}, Jr = "!", nl = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, a = (i) => {
    const l = [];
    let u = 0, f = 0, p;
    for (let b = 0; b < i.length; b++) {
      let w = i[b];
      if (u === 0) {
        if (w === r && (o || i.slice(b, b + s) === t)) {
          l.push(i.slice(f, b)), f = b + s;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? u++ : w === "]" && u--;
    }
    const h = l.length === 0 ? i : i.substring(f), g = h.startsWith(Jr), v = g ? h.substring(1) : h, m = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, ol = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, rl = (e) => ({
  cache: tl(e.cacheSize),
  parseClassName: nl(e),
  ...qc(e)
}), sl = /\s+/, al = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], a = e.trim().split(sl);
  let i = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = n(u);
    let v = !!g, m = o(v ? h.substring(0, g) : h);
    if (!m) {
      if (!v) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (m = o(h), !m) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = ol(f).join(":"), w = p ? b + Jr : b, y = w + m;
    if (s.includes(y))
      continue;
    s.push(y);
    const x = r(m, v);
    for (let C = 0; C < x.length; ++C) {
      const E = x[C];
      s.push(w + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function il() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = es(t)) && (o && (o += " "), o += n);
  return o;
}
const es = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = es(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cl(e, ...t) {
  let n, o, r, s = a;
  function a(l) {
    const u = t.reduce((f, p) => p(f), e());
    return n = rl(u), o = n.cache.get, r = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const u = o(l);
    if (u)
      return u;
    const f = al(l, n);
    return r(l, f), f;
  }
  return function() {
    return s(il.apply(null, arguments));
  };
}
const J = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ts = /^\[(?:([a-z-]+):)?(.+)\]$/i, ll = /^\d+\/\d+$/, ul = /* @__PURE__ */ new Set(["px", "full", "screen"]), dl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ml = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Me = (e) => Qe(e) || ul.has(e) || ll.test(e), Ae = (e) => rt(e, "length", El), Qe = (e) => !!e && !Number.isNaN(Number(e)), Sn = (e) => rt(e, "number", Qe), mt = (e) => !!e && Number.isInteger(Number(e)), gl = (e) => e.endsWith("%") && Qe(e.slice(0, -1)), $ = (e) => ts.test(e), Oe = (e) => dl.test(e), vl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bl = (e) => rt(e, vl, ns), wl = (e) => rt(e, "position", ns), yl = /* @__PURE__ */ new Set(["image", "url"]), xl = (e) => rt(e, yl, Sl), Cl = (e) => rt(e, "", Rl), ht = () => !0, rt = (e, t, n) => {
  const o = ts.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, El = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  fl.test(e) && !pl.test(e)
), ns = () => !1, Rl = (e) => ml.test(e), Sl = (e) => hl.test(e), Pl = () => {
  const e = J("colors"), t = J("spacing"), n = J("blur"), o = J("brightness"), r = J("borderColor"), s = J("borderRadius"), a = J("borderSpacing"), i = J("borderWidth"), l = J("contrast"), u = J("grayscale"), f = J("hueRotate"), p = J("invert"), h = J("gap"), g = J("gradientColorStops"), v = J("gradientColorStopPositions"), m = J("inset"), b = J("margin"), w = J("opacity"), y = J("padding"), x = J("saturate"), C = J("scale"), E = J("sepia"), P = J("skew"), R = J("space"), M = J("translate"), T = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", $, t], A = () => [$, t], G = () => ["", Me, Ae], F = () => ["auto", Qe, $], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", $], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [Qe, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ht],
      spacing: [Me, Ae],
      blur: ["none", "", Oe, $],
      brightness: H(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Oe, $],
      borderSpacing: A(),
      borderWidth: G(),
      contrast: H(),
      grayscale: N(),
      hueRotate: H(),
      invert: N(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [gl, Ae],
      inset: B(),
      margin: B(),
      opacity: H(),
      padding: A(),
      saturate: H(),
      scale: H(),
      sepia: N(),
      skew: H(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Oe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": U()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": U()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...K(), $]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", mt, $]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", mt, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ht]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", mt, $]
        }, $]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ht]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [mt, $]
        }, $]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...D(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [$, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [$, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Oe]
        }, Oe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [$, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Oe, Ae]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Sn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ht]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Qe, Sn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Me, $]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Me, Ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Me, $]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", $]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...K(), wl]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", bl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [r]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Me, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Me, Ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Me, Ae]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Oe, Cl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ht]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Oe, $]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [mt, $]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", $]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Me, Ae, Sn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Nl = /* @__PURE__ */ cl(Pl);
function _(...e) {
  return Nl(Yr(e));
}
const Ml = Ke("w-full rounded-sm p-4 text-sm flex gap-4", {
  variants: {
    variant: {
      default: "bg-neutral-200 text-foreground",
      success: "bg-success-100 text-success-600",
      warning: "bg-warning-100 text-warning-600",
      error: "bg-warning-100 text-warning-600",
      info: "bg-main-100 text-main-600"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Tl = {
  default: cr,
  info: cr,
  success: Yc,
  warning: jc,
  error: Xc
}, Ig = ({
  className: e,
  variant: t = "default",
  title: n,
  children: o,
  ...r
}) => {
  const s = Tl[t || "default"];
  return /* @__PURE__ */ W(
    "div",
    {
      role: "alert",
      className: _(Ml({ variant: t }), e),
      ...r,
      children: [
        /* @__PURE__ */ d(s, { className: "h-5 w-5" }),
        /* @__PURE__ */ W("div", { className: "flex flex-col gap-1", children: [
          n && /* @__PURE__ */ d("h5", { className: "font-bold leading-none", children: n }),
          o
        ] })
      ]
    }
  );
};
function dr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Et(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = dr(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : dr(e[r], null);
        }
      };
  };
}
function V(...e) {
  return c.useCallback(Et(...e), e);
}
var Te = c.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = c.Children.toArray(n), s = r.find(_l);
  if (s) {
    const a = s.props.children, i = r.map((l) => l === s ? c.Children.count(a) > 1 ? c.Children.only(null) : c.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ d(Bn, { ...o, ref: t, children: c.isValidElement(a) ? c.cloneElement(a, void 0, i) : null });
  }
  return /* @__PURE__ */ d(Bn, { ...o, ref: t, children: n });
});
Te.displayName = "Slot";
var Bn = c.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (c.isValidElement(n)) {
    const r = Al(n);
    return c.cloneElement(n, {
      ...Il(o, n.props),
      // @ts-ignore
      ref: t ? Et(t, r) : r
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Bn.displayName = "SlotClone";
var os = ({ children: e }) => /* @__PURE__ */ d(Le, { children: e });
function _l(e) {
  return c.isValidElement(e) && e.type === os;
}
function Il(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      s(...i), r(...i);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Al(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Ol = Ke(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus:ring-ring focus:ring-2 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:bg-fill-main-hover",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:bg-fill-warning-hover",
        outline: "border border-input bg-background hover:bg-subtle hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-fill-accent-hover",
        ghost: "hover:bg-subtle hover:text-accent-foreground focus:ring-0",
        link: "text-primary underline-offset-4 hover:underline focus:ring-0"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Dl = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, s) => /* @__PURE__ */ d(
    o ? Te : "button",
    {
      className: _(Ol({ variant: t, size: n, className: e })),
      ref: s,
      ...r
    }
  )
);
function kl(e, t) {
  const n = c.createContext(t), o = (s) => {
    const { children: a, ...i } = s, l = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d(n.Provider, { value: l, children: a });
  };
  o.displayName = e + "Provider";
  function r(s) {
    const a = c.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function ie(e, t = []) {
  let n = [];
  function o(s, a) {
    const i = c.createContext(a), l = n.length;
    n = [...n, a];
    const u = (p) => {
      var w;
      const { scope: h, children: g, ...v } = p, m = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[l]) || i, b = c.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ d(m.Provider, { value: b, children: g });
    };
    u.displayName = s + "Provider";
    function f(p, h) {
      var m;
      const g = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || i, v = c.useContext(g);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const r = () => {
    const s = n.map((a) => c.createContext(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return r.scopeName = e, [o, Ll(r, ...t)];
}
function Ll(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((i, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...i, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function S(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function ee(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function fe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, r] = Fl({ defaultProp: t, onChange: n }), s = e !== void 0, a = s ? e : o, i = ee(n), l = c.useCallback(
    (u) => {
      if (s) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && i(p);
      } else
        r(u);
    },
    [s, e, r, i]
  );
  return [a, l];
}
function Fl({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [o] = n, r = c.useRef(o), s = ee(t);
  return c.useEffect(() => {
    r.current !== o && (s(o), r.current = o);
  }, [o, r, s]), n;
}
function Rt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var te = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
};
function tn(e) {
  const [t, n] = c.useState(void 0);
  return te(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          a = u.inlineSize, i = u.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function $l(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var oe = (e) => {
  const { present: t, children: n } = e, o = Vl(t), r = typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n), s = V(o.ref, Bl(r));
  return typeof n == "function" || o.isPresent ? c.cloneElement(r, { ref: s }) : null;
};
oe.displayName = "Presence";
function Vl(e) {
  const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = $l(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = Dt(o.current);
    s.current = i === "mounted" ? u : "none";
  }, [i]), te(() => {
    const u = o.current, f = r.current;
    if (f !== e) {
      const h = s.current, g = Dt(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), te(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (g) => {
        const m = Dt(o.current).includes(g.animationName);
        if (g.target === t && m && (l("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (g) => {
        g.target === t && (s.current = Dt(o.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((u) => {
      u && (o.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Dt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Bl(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Wl = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], I = Wl.reduce((e, t) => {
  const n = c.forwardRef((o, r) => {
    const { asChild: s, ...a } = o, i = s ? Te : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(i, { ...a, ref: r });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function bt(e, t) {
  e && Jt.flushSync(() => e.dispatchEvent(t));
}
var uo = "Checkbox", [Gl, Ag] = ie(uo), [zl, Ul] = Gl(uo), rs = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [h, g] = c.useState(null), v = V(t, (C) => g(C)), m = c.useRef(!1), b = h ? f || !!h.closest("form") : !0, [w = !1, y] = fe({
      prop: r,
      defaultProp: s,
      onChange: u
    }), x = c.useRef(w);
    return c.useEffect(() => {
      const C = h == null ? void 0 : h.form;
      if (C) {
        const E = () => y(x.current);
        return C.addEventListener("reset", E), () => C.removeEventListener("reset", E);
      }
    }, [h, y]), /* @__PURE__ */ W(zl, { scope: n, state: w, disabled: i, children: [
      /* @__PURE__ */ d(
        I.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": ke(w) ? "mixed" : w,
          "aria-required": a,
          "data-state": is(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...p,
          ref: v,
          onKeyDown: S(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: S(e.onClick, (C) => {
            y((E) => ke(E) ? !0 : !E), b && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        Hl,
        {
          control: h,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: w,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" },
          defaultChecked: ke(s) ? !1 : s
        }
      )
    ] });
  }
);
rs.displayName = uo;
var ss = "CheckboxIndicator", as = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, s = Ul(ss, n);
    return /* @__PURE__ */ d(oe, { present: o || ke(s.state) || s.state === !0, children: /* @__PURE__ */ d(
      I.span,
      {
        "data-state": is(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
as.displayName = ss;
var Hl = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: r, ...s } = e, a = c.useRef(null), i = Rt(n), l = tn(t);
  c.useEffect(() => {
    const f = a.current, p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (i !== n && g) {
      const v = new Event("click", { bubbles: o });
      f.indeterminate = ke(n), g.call(f, ke(n) ? !1 : n), f.dispatchEvent(v);
    }
  }, [i, n, o]);
  const u = c.useRef(ke(n) ? !1 : n);
  return /* @__PURE__ */ d(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r ?? u.current,
      ...s,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function ke(e) {
  return e === "indeterminate";
}
function is(e) {
  return ke(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Kl = rs, jl = as;
const Og = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Kl,
  {
    ref: n,
    className: _(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(
      jl,
      {
        className: _("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d(co, { className: "h-4 w-4" })
      }
    )
  }
)), fr = "vogelvlug-design-system-color-mode", cs = Vc({
  logo: { src: "" },
  ImageElement: "img",
  LinkElement: "a",
  colorMode: "system",
  setColorMode: () => null
}), pr = (e) => {
  const t = window.document.documentElement;
  if (t.classList.remove("light", "dark"), e === "system") {
    const n = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    t.classList.add(n);
    return;
  }
  t.classList.add(e);
}, Dg = ({
  children: e,
  logo: t,
  ImageElement: n = "img",
  LinkElement: o = "a",
  colorMode: r = "system"
}) => {
  const [s, a] = Hr(r);
  return $n(() => {
    const i = localStorage == null ? void 0 : localStorage.getItem(fr);
    a(i), pr(i);
  }, []), $n(() => {
    localStorage.setItem(fr, s), pr(s);
  }, [s]), /* @__PURE__ */ d(
    cs.Provider,
    {
      value: {
        logo: t,
        ImageElement: n,
        LinkElement: o,
        colorMode: s,
        setColorMode: a
      },
      children: e
    }
  );
}, nn = () => {
  const e = Bc(cs);
  if (!e)
    throw new Error(
      "useDesignSystem must be used within a DesignSystemProvider"
    );
  return e;
}, Yl = Ke("w-auto", {
  variants: {
    height: {
      sm: "h-6",
      md: "h-8",
      lg: "h-12"
    }
  },
  defaultVariants: {
    height: "md"
  }
}), kg = ({
  height: e
}) => {
  const { logo: t, ImageElement: n, LinkElement: o } = nn(), r = {
    alt: "Logo",
    className: _(Yl({ height: e }))
  };
  return /* @__PURE__ */ d(o, { href: "/", children: /* @__PURE__ */ d(n, { src: n === "img" ? t.src : t, ...r }) });
};
var Xl = c.useId || (() => {
}), ql = 0;
function se(e) {
  const [t, n] = c.useState(Xl());
  return te(() => {
    e || n((o) => o ?? String(ql++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var fo = "Collapsible", [Zl, Lg] = ie(fo), [Ql, po] = Zl(fo), ls = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [l = !1, u] = fe({
      prop: o,
      defaultProp: r,
      onChange: a
    });
    return /* @__PURE__ */ d(
      Ql,
      {
        scope: n,
        disabled: s,
        contentId: se(),
        open: l,
        onOpenToggle: c.useCallback(() => u((f) => !f), [u]),
        children: /* @__PURE__ */ d(
          I.div,
          {
            "data-state": ho(l),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
ls.displayName = fo;
var us = "CollapsibleTrigger", ds = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = po(us, n);
    return /* @__PURE__ */ d(
      I.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": ho(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: S(e.onClick, r.onOpenToggle)
      }
    );
  }
);
ds.displayName = us;
var mo = "CollapsibleContent", fs = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = po(mo, e.__scopeCollapsible);
    return /* @__PURE__ */ d(oe, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ d(Jl, { ...o, ref: t, present: s }) });
  }
);
fs.displayName = mo;
var Jl = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = po(mo, n), [i, l] = c.useState(o), u = c.useRef(null), f = V(t, u), p = c.useRef(0), h = p.current, g = c.useRef(0), v = g.current, m = a.open || i, b = c.useRef(m), w = c.useRef(void 0);
  return c.useEffect(() => {
    const y = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), te(() => {
    const y = u.current;
    if (y) {
      w.current = w.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const x = y.getBoundingClientRect();
      p.current = x.height, g.current = x.width, b.current || (y.style.transitionDuration = w.current.transitionDuration, y.style.animationName = w.current.animationName), l(o);
    }
  }, [a.open, o]), /* @__PURE__ */ d(
    I.div,
    {
      "data-state": ho(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: m && r
    }
  );
});
function ho(e) {
  return e ? "open" : "closed";
}
var eu = ls, tu = ds;
const Fg = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d(eu, { className: _("group", t), ...n, children: e }), $g = ({ children: e, className: t, ...n }) => /* @__PURE__ */ W(
  tu,
  {
    className: _("flex items-center gap-2", t),
    ...n,
    children: [
      e,
      /* @__PURE__ */ d(en, { className: "h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" })
    ]
  }
), Vg = fs;
function ps(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var nu = "DismissableLayer", Wn = "dismissableLayer.update", ou = "dismissableLayer.pointerDownOutside", ru = "dismissableLayer.focusOutside", mr, ms = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), St = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, u = c.useContext(ms), [f, p] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), v = V(t, (R) => p(R)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(b), y = f ? m.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= w, E = iu((R) => {
      const M = R.target, T = [...u.branches].some((O) => O.contains(M));
      !C || T || (r == null || r(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, h), P = cu((R) => {
      const M = R.target;
      [...u.branches].some((O) => O.contains(M)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, h);
    return ps((R) => {
      y === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (mr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), hr(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = mr);
        };
    }, [f, h, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), hr());
    }, [f, u]), c.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(Wn, R), () => document.removeEventListener(Wn, R);
    }, []), /* @__PURE__ */ d(
      I.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: S(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: S(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: S(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
St.displayName = nu;
var su = "DismissableLayerBranch", au = c.forwardRef((e, t) => {
  const n = c.useContext(ms), o = c.useRef(null), r = V(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d(I.div, { ...e, ref: r });
});
au.displayName = su;
function iu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let l = function() {
          hs(
            ou,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function cu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && hs(ru, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function hr() {
  const e = new CustomEvent(Wn);
  document.dispatchEvent(e);
}
function hs(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? bt(r, s) : r.dispatchEvent(s);
}
var Pn = "focusScope.autoFocusOnMount", Nn = "focusScope.autoFocusOnUnmount", gr = { bubbles: !1, cancelable: !0 }, lu = "FocusScope", on = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = c.useState(null), u = ee(r), f = ee(s), p = c.useRef(null), h = V(t, (m) => l(m)), g = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (o) {
      let m = function(x) {
        if (g.paused || !i) return;
        const C = x.target;
        i.contains(C) ? p.current = C : De(p.current, { select: !0 });
      }, b = function(x) {
        if (g.paused || !i) return;
        const C = x.relatedTarget;
        C !== null && (i.contains(C) || De(p.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && De(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const y = new MutationObserver(w);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [o, i, g.paused]), c.useEffect(() => {
    if (i) {
      br.add(g);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const w = new CustomEvent(Pn, gr);
        i.addEventListener(Pn, u), i.dispatchEvent(w), w.defaultPrevented || (uu(hu(gs(i)), { select: !0 }), document.activeElement === m && De(i));
      }
      return () => {
        i.removeEventListener(Pn, u), setTimeout(() => {
          const w = new CustomEvent(Nn, gr);
          i.addEventListener(Nn, f), i.dispatchEvent(w), w.defaultPrevented || De(m ?? document.body, { select: !0 }), i.removeEventListener(Nn, f), br.remove(g);
        }, 0);
      };
    }
  }, [i, u, f, g]);
  const v = c.useCallback(
    (m) => {
      if (!n && !o || g.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (b && w) {
        const y = m.currentTarget, [x, C] = du(y);
        x && C ? !m.shiftKey && w === C ? (m.preventDefault(), n && De(x, { select: !0 })) : m.shiftKey && w === x && (m.preventDefault(), n && De(C, { select: !0 })) : w === y && m.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ d(I.div, { tabIndex: -1, ...a, ref: h, onKeyDown: v });
});
on.displayName = lu;
function uu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (De(o, { select: t }), document.activeElement !== n) return;
}
function du(e) {
  const t = gs(e), n = vr(t, e), o = vr(t.reverse(), e);
  return [n, o];
}
function gs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function vr(e, t) {
  for (const n of e)
    if (!fu(n, { upTo: t })) return n;
}
function fu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function De(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && pu(e) && t && e.select();
  }
}
var br = mu();
function mu() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = wr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = wr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function wr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function hu(e) {
  return e.filter((t) => t.tagName !== "A");
}
var gu = "Portal", rn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...o } = e, [r, s] = c.useState(!1);
  te(() => s(!0), []);
  const a = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? Kr.createPortal(/* @__PURE__ */ d(I.div, { ...o, ref: t }), a) : null;
});
rn.displayName = gu;
var Mn = 0;
function go() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? yr()), document.body.insertAdjacentElement("beforeend", e[1] ?? yr()), Mn++, () => {
      Mn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Mn--;
    };
  }, []);
}
function yr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var xe = function() {
  return xe = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, xe.apply(this, arguments);
};
function vs(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function vu(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Bt = "right-scroll-bar-position", Wt = "width-before-scroll-bar", bu = "with-scroll-bars-hidden", wu = "--removed-body-scroll-bar-size";
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yu(e, t) {
  var n = Hr(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var xu = typeof window < "u" ? c.useLayoutEffect : c.useEffect, xr = /* @__PURE__ */ new WeakMap();
function Cu(e, t) {
  var n = yu(null, function(o) {
    return e.forEach(function(r) {
      return Tn(r, o);
    });
  });
  return xu(function() {
    var o = xr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(i) {
        s.has(i) || Tn(i, null);
      }), s.forEach(function(i) {
        r.has(i) || Tn(i, a);
      });
    }
    xr.set(n, e);
  }, [e]), n;
}
function Eu(e) {
  return e;
}
function Ru(e, t) {
  t === void 0 && (t = Eu);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, o);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var l = function() {
        var f = a;
        a = [], f.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          a.push(f), u();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return r;
}
function Su(e) {
  e === void 0 && (e = {});
  var t = Ru(null);
  return t.options = xe({ async: !0, ssr: !1 }, e), t;
}
var bs = function(e) {
  var t = e.sideCar, n = vs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, xe({}, n));
};
bs.isSideCarExport = !0;
function Pu(e, t) {
  return e.useMedium(t), bs;
}
var ws = Su(), _n = function() {
}, sn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), o = c.useState({
    onScrollCapture: _n,
    onWheelCapture: _n,
    onTouchMoveCapture: _n
  }), r = o[0], s = o[1], a = e.forwardProps, i = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, h = e.sideCar, g = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, y = e.gapMode, x = vs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, E = Cu([n, t]), P = xe(xe({}, x), r);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(C, { sideCar: ws, removeScrollBar: u, shards: p, noIsolation: g, inert: v, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: y }),
    a ? c.cloneElement(c.Children.only(i), xe(xe({}, P), { ref: E })) : c.createElement(w, xe({}, P, { className: l, ref: E }), i)
  );
});
sn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
sn.classNames = {
  fullWidth: Wt,
  zeroRight: Bt
};
var Nu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Nu();
  return t && e.setAttribute("nonce", t), e;
}
function Tu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _u(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Iu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Mu()) && (Tu(t, n), _u(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Au = function() {
  var e = Iu();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ys = function() {
  var e = Au(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Ou = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, In = function(e) {
  return parseInt(e || "", 10) || 0;
}, Du = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [In(n), In(o), In(r)];
}, ku = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ou;
  var t = Du(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Lu = ys(), Je = "data-scroll-locked", Fu = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(bu, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(Je, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Bt, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(Wt, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(Bt, " .").concat(Bt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Wt, " .").concat(Wt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Je, `] {
    `).concat(wu, ": ").concat(i, `px;
  }
`);
}, Cr = function() {
  var e = parseInt(document.body.getAttribute(Je) || "0", 10);
  return isFinite(e) ? e : 0;
}, $u = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Je, (Cr() + 1).toString()), function() {
      var e = Cr() - 1;
      e <= 0 ? document.body.removeAttribute(Je) : document.body.setAttribute(Je, e.toString());
    };
  }, []);
}, Vu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  $u();
  var s = c.useMemo(function() {
    return ku(r);
  }, [r]);
  return c.createElement(Lu, { styles: Fu(s, !t, r, n ? "" : "!important") });
}, Gn = !1;
if (typeof window < "u")
  try {
    var kt = Object.defineProperty({}, "passive", {
      get: function() {
        return Gn = !0, !0;
      }
    });
    window.addEventListener("test", kt, kt), window.removeEventListener("test", kt, kt);
  } catch {
    Gn = !1;
  }
var Ye = Gn ? { passive: !1 } : !1, Bu = function(e) {
  return e.tagName === "TEXTAREA";
}, xs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Bu(e) && n[t] === "visible")
  );
}, Wu = function(e) {
  return xs(e, "overflowY");
}, Gu = function(e) {
  return xs(e, "overflowX");
}, Er = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Cs(e, o);
    if (r) {
      var s = Es(e, o), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, zu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Uu = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Cs = function(e, t) {
  return e === "v" ? Wu(t) : Gu(t);
}, Es = function(e, t) {
  return e === "v" ? zu(t) : Uu(t);
}, Hu = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ku = function(e, t, n, o, r) {
  var s = Hu(e, window.getComputedStyle(t).direction), a = s * o, i = n.target, l = t.contains(i), u = !1, f = a > 0, p = 0, h = 0;
  do {
    var g = Es(e, i), v = g[0], m = g[1], b = g[2], w = m - b - s * v;
    (v || w) && Cs(e, i) && (p += w, h += v), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && (Math.abs(p) < 1 || !r) || !f && (Math.abs(h) < 1 || !r)) && (u = !0), u;
}, Lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rr = function(e) {
  return [e.deltaX, e.deltaY];
}, Sr = function(e) {
  return e && "current" in e ? e.current : e;
}, ju = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xu = 0, Xe = [];
function qu(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), o = c.useRef(), r = c.useState(Xu++)[0], s = c.useState(ys)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = vu([e.lockRef.current], (e.shards || []).map(Sr), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = Lt(m), y = n.current, x = "deltaX" in m ? m.deltaX : y[0] - w[0], C = "deltaY" in m ? m.deltaY : y[1] - w[1], E, P = m.target, R = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && R === "h" && P.type === "range")
      return !1;
    var M = Er(R, P);
    if (!M)
      return !0;
    if (M ? E = R : (E = R === "v" ? "h" : "v", M = Er(R, P)), !M)
      return !1;
    if (!o.current && "changedTouches" in m && (x || C) && (o.current = E), !E)
      return !0;
    var T = o.current || E;
    return Ku(T, b, m, T === "h" ? x : C, !0);
  }, []), l = c.useCallback(function(m) {
    var b = m;
    if (!(!Xe.length || Xe[Xe.length - 1] !== s)) {
      var w = "deltaY" in b ? Rr(b) : Lt(b), y = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && ju(E.delta, w);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var x = (a.current.shards || []).map(Sr).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), C = x.length > 0 ? i(b, x[0]) : !a.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(m, b, w, y) {
    var x = { name: m, delta: b, target: w, should: y, shadowParent: Zu(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = c.useCallback(function(m) {
    n.current = Lt(m), o.current = void 0;
  }, []), p = c.useCallback(function(m) {
    u(m.type, Rr(m), m.target, i(m, e.lockRef.current));
  }, []), h = c.useCallback(function(m) {
    u(m.type, Lt(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Xe.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Ye), document.addEventListener("touchmove", l, Ye), document.addEventListener("touchstart", f, Ye), function() {
      Xe = Xe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Ye), document.removeEventListener("touchmove", l, Ye), document.removeEventListener("touchstart", f, Ye);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(s, { styles: Yu(r) }) : null,
    g ? c.createElement(Vu, { gapMode: e.gapMode }) : null
  );
}
function Zu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qu = Pu(ws, qu);
var an = c.forwardRef(function(e, t) {
  return c.createElement(sn, xe({}, e, { ref: t, sideCar: Qu }));
});
an.classNames = sn.classNames;
var Ju = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), $t = {}, An = 0, Rs = function(e) {
  return e && (e.host || Rs(e.parentNode));
}, ed = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Rs(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, td = function(e, t, n, o) {
  var r = ed(t, Array.isArray(e) ? e : [e]);
  $t[n] || ($t[n] = /* @__PURE__ */ new WeakMap());
  var s = $t[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(r), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  r.forEach(u);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var g = h.getAttribute(o), v = g !== null && g !== "false", m = (qe.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          qe.set(h, m), s.set(h, b), a.push(h), m === 1 && v && Ft.set(h, !0), b === 1 && h.setAttribute(n, "true"), v || h.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return f(t), i.clear(), An++, function() {
    a.forEach(function(p) {
      var h = qe.get(p) - 1, g = s.get(p) - 1;
      qe.set(p, h), s.set(p, g), h || (Ft.has(p) || p.removeAttribute(o), Ft.delete(p)), g || p.removeAttribute(n);
    }), An--, An || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), $t = {});
  };
}, vo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Ju(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), td(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, bo = "Dialog", [Ss, Bg] = ie(bo), [nd, we] = Ss(bo), Ps = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !0
  } = e, i = c.useRef(null), l = c.useRef(null), [u = !1, f] = fe({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ d(
    nd,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: se(),
      titleId: se(),
      descriptionId: se(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: n
    }
  );
};
Ps.displayName = bo;
var Ns = "DialogTrigger", Ms = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Ns, n), s = V(t, r.triggerRef);
    return /* @__PURE__ */ d(
      I.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": xo(r.open),
        ...o,
        ref: s,
        onClick: S(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Ms.displayName = Ns;
var wo = "DialogPortal", [od, Ts] = Ss(wo, {
  forceMount: void 0
}), _s = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = we(wo, t);
  return /* @__PURE__ */ d(od, { scope: t, forceMount: n, children: c.Children.map(o, (a) => /* @__PURE__ */ d(oe, { present: n || s.open, children: /* @__PURE__ */ d(rn, { asChild: !0, container: r, children: a }) })) });
};
_s.displayName = wo;
var Ut = "DialogOverlay", Is = c.forwardRef(
  (e, t) => {
    const n = Ts(Ut, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(Ut, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d(oe, { present: o || s.open, children: /* @__PURE__ */ d(rd, { ...r, ref: t }) }) : null;
  }
);
Is.displayName = Ut;
var rd = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Ut, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(an, { as: Te, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ d(
        I.div,
        {
          "data-state": xo(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ze = "DialogContent", As = c.forwardRef(
  (e, t) => {
    const n = Ts(ze, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(ze, e.__scopeDialog);
    return /* @__PURE__ */ d(oe, { present: o || s.open, children: s.modal ? /* @__PURE__ */ d(sd, { ...r, ref: t }) : /* @__PURE__ */ d(ad, { ...r, ref: t }) });
  }
);
As.displayName = ze;
var sd = c.forwardRef(
  (e, t) => {
    const n = we(ze, e.__scopeDialog), o = c.useRef(null), r = V(t, n.contentRef, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return vo(s);
    }, []), /* @__PURE__ */ d(
      Os,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: S(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: S(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: S(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), ad = c.forwardRef(
  (e, t) => {
    const n = we(ze, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ d(
      Os,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (o.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), Os = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, i = we(ze, n), l = c.useRef(null), u = V(t, l);
    return go(), /* @__PURE__ */ W(Le, { children: [
      /* @__PURE__ */ d(
        on,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d(
            St,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": xo(i.open),
              ...a,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ W(Le, { children: [
        /* @__PURE__ */ d(id, { titleId: i.titleId }),
        /* @__PURE__ */ d(ld, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), yo = "DialogTitle", Ds = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(yo, n);
    return /* @__PURE__ */ d(I.h2, { id: r.titleId, ...o, ref: t });
  }
);
Ds.displayName = yo;
var ks = "DialogDescription", Ls = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(ks, n);
    return /* @__PURE__ */ d(I.p, { id: r.descriptionId, ...o, ref: t });
  }
);
Ls.displayName = ks;
var Fs = "DialogClose", $s = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Fs, n);
    return /* @__PURE__ */ d(
      I.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: S(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
$s.displayName = Fs;
function xo(e) {
  return e ? "open" : "closed";
}
var Vs = "DialogTitleWarning", [Wg, Bs] = kl(Vs, {
  contentName: ze,
  titleName: yo,
  docsSlug: "dialog"
}), id = ({ titleId: e }) => {
  const t = Bs(Vs), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, cd = "DialogDescriptionWarning", ld = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Bs(cd).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Ws = Ps, Gs = Ms, zs = _s, Co = Is, Eo = As, Ro = Ds, So = Ls, cn = $s;
const Gg = Ws, zg = Gs, ud = zs, Ug = cn, Us = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Co,
  {
    ref: n,
    className: _(
      "bg-base-black/60 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Us.displayName = Co.displayName;
const dd = c.forwardRef(({ className: e, children: t, hideCloseButton: n = !1, ...o }, r) => /* @__PURE__ */ W(ud, { children: [
  /* @__PURE__ */ d(Us, {}),
  /* @__PURE__ */ W(
    Eo,
    {
      ref: r,
      className: _(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        e
      ),
      ...o,
      children: [
        t,
        !n && /* @__PURE__ */ W(cn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ d(Zr, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
dd.displayName = Eo.displayName;
const fd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: _(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fd.displayName = "DialogHeader";
const pd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: _(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pd.displayName = "DialogFooter";
const md = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Ro,
  {
    ref: n,
    className: _(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
md.displayName = Ro.displayName;
const hd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  So,
  {
    ref: n,
    className: _("text-sm text-muted-foreground", e),
    ...t
  }
));
hd.displayName = So.displayName;
var gd = "Separator", Pr = "horizontal", vd = ["horizontal", "vertical"], Hs = c.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Pr, ...r } = e, s = bd(o) ? o : Pr, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ d(
    I.div,
    {
      "data-orientation": s,
      ...i,
      ...r,
      ref: t
    }
  );
});
Hs.displayName = gd;
function bd(e) {
  return vd.includes(e);
}
var wd = Hs;
const Hg = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ d(
    wd,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: _(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
function Pt(e) {
  const t = e + "CollectionProvider", [n, o] = ie(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: v, children: m } = g, b = Z.useRef(null), w = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(r, { scope: v, itemMap: w, collectionRef: b, children: m });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = Z.forwardRef(
    (g, v) => {
      const { scope: m, children: b } = g, w = s(i, m), y = V(v, w.collectionRef);
      return /* @__PURE__ */ d(Te, { ref: y, children: b });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = Z.forwardRef(
    (g, v) => {
      const { scope: m, children: b, ...w } = g, y = Z.useRef(null), x = V(v, y), C = s(u, m);
      return Z.useEffect(() => (C.itemMap.set(y, { ref: y, ...w }), () => void C.itemMap.delete(y))), /* @__PURE__ */ d(Te, { [f]: "", ref: x, children: b });
    }
  );
  p.displayName = u;
  function h(g) {
    const v = s(e + "CollectionConsumer", g);
    return Z.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (C, E) => w.indexOf(C.ref.current) - w.indexOf(E.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    h,
    o
  ];
}
var yd = c.createContext(void 0);
function Nt(e) {
  const t = c.useContext(yd);
  return e || t || "ltr";
}
const xd = ["top", "right", "bottom", "left"], Fe = Math.min, ue = Math.max, Ht = Math.round, Vt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), Cd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ed = {
  start: "end",
  end: "start"
};
function zn(e, t, n) {
  return ue(e, Fe(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ie(e) {
  return e.split("-")[0];
}
function st(e) {
  return e.split("-")[1];
}
function Po(e) {
  return e === "x" ? "y" : "x";
}
function No(e) {
  return e === "y" ? "height" : "width";
}
function $e(e) {
  return ["top", "bottom"].includes(Ie(e)) ? "y" : "x";
}
function Mo(e) {
  return Po($e(e));
}
function Rd(e, t, n) {
  n === void 0 && (n = !1);
  const o = st(e), r = Mo(e), s = No(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Kt(a)), [a, Kt(a)];
}
function Sd(e) {
  const t = Kt(e);
  return [Un(e), t, Un(t)];
}
function Un(e) {
  return e.replace(/start|end/g, (t) => Ed[t]);
}
function Pd(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function Nd(e, t, n, o) {
  const r = st(e);
  let s = Pd(Ie(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(Un)))), s;
}
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cd[t]);
}
function Md(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ks(e) {
  return typeof e != "number" ? Md(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Nr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = $e(t), a = Mo(t), i = No(a), l = Ie(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, h = o[i] / 2 - r[i] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: o.x - r.width,
        y: p
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  switch (st(t)) {
    case "start":
      g[a] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[a] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Td = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = Nr(u, o, l), h = o, g = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: w
    } = i[m], {
      x: y,
      y: x,
      data: C,
      reset: E
    } = await w({
      x: f,
      y: p,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: g,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, p = x ?? p, g = {
      ...g,
      [b]: {
        ...g[b],
        ...C
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: f,
      y: p
    } = Nr(u, h, l)), m = -1);
  }
  return {
    x: f,
    y: p,
    placement: h,
    strategy: r,
    middlewareData: g
  };
};
async function wt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: i,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = _e(t, e), v = Ks(g), b = i[h ? p === "floating" ? "reference" : "floating" : p], w = jt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), y = p === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = jt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (w.top - E.top + v.top) / C.y,
    bottom: (E.bottom - w.bottom + v.bottom) / C.y,
    left: (w.left - E.left + v.left) / C.x,
    right: (E.right - w.right + v.right) / C.x
  };
}
const _d = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = _e(e, t) || {};
    if (u == null)
      return {};
    const p = Ks(f), h = {
      x: n,
      y: o
    }, g = Mo(r), v = No(g), m = await a.getDimensions(u), b = g === "y", w = b ? "top" : "left", y = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", C = s.reference[v] + s.reference[g] - h[g] - s.floating[v], E = h[g] - s.reference[g], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let R = P ? P[x] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(P))) && (R = i.floating[x] || s.floating[v]);
    const M = C / 2 - E / 2, T = R / 2 - m[v] / 2 - 1, O = Fe(p[w], T), B = Fe(p[y], T), A = O, G = R - m[v] - B, F = R / 2 - m[v] / 2 + M, K = zn(A, F, G), L = !l.arrow && st(r) != null && F !== K && s.reference[v] / 2 - (F < A ? O : B) - m[v] / 2 < 0, z = L ? F < A ? F - A : F - G : 0;
    return {
      [g]: h[g] + z,
      data: {
        [g]: K,
        centerOffset: F - K - z,
        ...L && {
          alignmentOffset: z
        }
      },
      reset: L
    };
  }
}), Id = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = _e(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ie(r), y = $e(i), x = Ie(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = h || (x || !m ? [Kt(i)] : Sd(i)), P = v !== "none";
      !h && P && E.push(...Nd(i, m, v, C));
      const R = [i, ...E], M = await wt(t, b), T = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && T.push(M[w]), p) {
        const F = Rd(r, a, C);
        T.push(M[F[0]], M[F[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: T
      }], !T.every((F) => F <= 0)) {
        var B, A;
        const F = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1, K = R[F];
        if (K)
          return {
            data: {
              index: F,
              overflows: O
            },
            reset: {
              placement: K
            }
          };
        let L = (A = O.filter((z) => z.overflows[0] <= 0).sort((z, D) => z.overflows[1] - D.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var G;
              const z = (G = O.filter((D) => {
                if (P) {
                  const N = $e(D.placement);
                  return N === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((N) => N > 0).reduce((N, U) => N + U, 0)]).sort((D, N) => D[1] - N[1])[0]) == null ? void 0 : G[0];
              z && (L = z);
              break;
            }
            case "initialPlacement":
              L = i;
              break;
          }
        if (r !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Mr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Tr(e) {
  return xd.some((t) => e[t] >= 0);
}
const Ad = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = _e(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await wt(t, {
            ...r,
            elementContext: "reference"
          }), a = Mr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Tr(a)
            }
          };
        }
        case "escaped": {
          const s = await wt(t, {
            ...r,
            altBoundary: !0
          }), a = Mr(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Tr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Od(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Ie(n), i = st(n), l = $e(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, f = s && l ? -1 : 1, p = _e(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof v == "number" && (g = i === "end" ? v * -1 : v), l ? {
    x: g * f,
    y: h * u
  } : {
    x: h * u,
    y: g * f
  };
}
const Dd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: i
      } = t, l = await Od(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, kd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: w,
              y
            } = b;
            return {
              x: w,
              y
            };
          }
        },
        ...l
      } = _e(e, t), u = {
        x: n,
        y: o
      }, f = await wt(t, l), p = $e(Ie(r)), h = Po(p);
      let g = u[h], v = u[p];
      if (s) {
        const b = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = g + f[b], x = g - f[w];
        g = zn(y, g, x);
      }
      if (a) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = v + f[b], x = v - f[w];
        v = zn(y, v, x);
      }
      const m = i.fn({
        ...t,
        [h]: g,
        [p]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o,
          enabled: {
            [h]: s,
            [p]: a
          }
        }
      };
    }
  };
}, Ld = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = _e(e, t), f = {
        x: n,
        y: o
      }, p = $e(r), h = Po(p);
      let g = f[h], v = f[p];
      const m = _e(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const x = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[x] + b.mainAxis, E = s.reference[h] + s.reference[x] - b.mainAxis;
        g < C ? g = C : g > E && (g = E);
      }
      if (u) {
        var w, y;
        const x = h === "y" ? "width" : "height", C = ["top", "left"].includes(Ie(r)), E = s.reference[p] - s.floating[x] + (C && ((w = a.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : b.crossAxis), P = s.reference[p] + s.reference[x] + (C ? 0 : ((y = a.offset) == null ? void 0 : y[p]) || 0) - (C ? b.crossAxis : 0);
        v < E ? v = E : v > P && (v = P);
      }
      return {
        [h]: g,
        [p]: v
      };
    }
  };
}, Fd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...u
      } = _e(e, t), f = await wt(t, u), p = Ie(r), h = st(r), g = $e(r) === "y", {
        width: v,
        height: m
      } = s.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = h === "end" ? "top" : "bottom");
      const y = m - f.top - f.bottom, x = v - f.left - f.right, C = Fe(m - f[b], y), E = Fe(v - f[w], x), P = !t.middlewareData.shift;
      let R = C, M = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = x), (o = t.middlewareData.shift) != null && o.enabled.y && (R = y), P && !h) {
        const O = ue(f.left, 0), B = ue(f.right, 0), A = ue(f.top, 0), G = ue(f.bottom, 0);
        g ? M = v - 2 * (O !== 0 || B !== 0 ? O + B : ue(f.left, f.right)) : R = m - 2 * (A !== 0 || G !== 0 ? A + G : ue(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: R
      });
      const T = await a.getDimensions(i.floating);
      return v !== T.width || m !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ln() {
  return typeof window < "u";
}
function at(e) {
  return js(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Se(e) {
  var t;
  return (t = (js(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function js(e) {
  return ln() ? e instanceof Node || e instanceof de(e).Node : !1;
}
function ve(e) {
  return ln() ? e instanceof Element || e instanceof de(e).Element : !1;
}
function Ee(e) {
  return ln() ? e instanceof HTMLElement || e instanceof de(e).HTMLElement : !1;
}
function _r(e) {
  return !ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function Mt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function $d(e) {
  return ["table", "td", "th"].includes(at(e));
}
function un(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function To(e) {
  const t = _o(), n = ve(e) ? be(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Vd(e) {
  let t = Ve(e);
  for (; Ee(t) && !tt(t); ) {
    if (To(t))
      return t;
    if (un(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function _o() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(e) {
  return ["html", "body", "#document"].includes(at(e));
}
function be(e) {
  return de(e).getComputedStyle(e);
}
function dn(e) {
  return ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ve(e) {
  if (at(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _r(e) && e.host || // Fallback.
    Se(e)
  );
  return _r(t) ? t.host : t;
}
function Ys(e) {
  const t = Ve(e);
  return tt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ee(t) && Mt(t) ? t : Ys(t);
}
function yt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ys(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = de(r);
  if (s) {
    const i = Hn(a);
    return t.concat(a, a.visualViewport || [], Mt(r) ? r : [], i && n ? yt(i) : []);
  }
  return t.concat(r, yt(r, [], n));
}
function Hn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xs(e) {
  const t = be(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Ee(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = Ht(n) !== s || Ht(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function Io(e) {
  return ve(e) ? e : e.contextElement;
}
function et(e) {
  const t = Io(e);
  if (!Ee(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Xs(t);
  let a = (s ? Ht(n.width) : n.width) / o, i = (s ? Ht(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Bd = /* @__PURE__ */ Ce(0);
function qs(e) {
  const t = de(e);
  return !_o() || !t.visualViewport ? Bd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function Ue(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Io(e);
  let a = Ce(1);
  t && (o ? ve(o) && (a = et(o)) : a = et(e));
  const i = Wd(s, n, o) ? qs(s) : Ce(0);
  let l = (r.left + i.x) / a.x, u = (r.top + i.y) / a.y, f = r.width / a.x, p = r.height / a.y;
  if (s) {
    const h = de(s), g = o && ve(o) ? de(o) : o;
    let v = h, m = Hn(v);
    for (; m && o && g !== v; ) {
      const b = et(m), w = m.getBoundingClientRect(), y = be(m), x = w.left + (m.clientLeft + parseFloat(y.paddingLeft)) * b.x, C = w.top + (m.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, u *= b.y, f *= b.x, p *= b.y, l += x, u += C, v = de(m), m = Hn(v);
    }
  }
  return jt({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function Ao(e, t) {
  const n = dn(e).scrollLeft;
  return t ? t.left + n : Ue(Se(e)).left + n;
}
function Zs(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ao(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Gd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Se(o), i = t ? un(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ce(1);
  const f = Ce(0), p = Ee(o);
  if ((p || !p && !s) && ((at(o) !== "body" || Mt(a)) && (l = dn(o)), Ee(o))) {
    const g = Ue(o);
    u = et(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const h = a && !p && !s ? Zs(a, l, !0) : Ce(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + h.y
  };
}
function zd(e) {
  return Array.from(e.getClientRects());
}
function Ud(e) {
  const t = Se(e), n = dn(e), o = e.ownerDocument.body, r = ue(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = ue(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + Ao(e);
  const i = -n.scrollTop;
  return be(o).direction === "rtl" && (a += ue(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function Hd(e, t) {
  const n = de(e), o = Se(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    const u = _o();
    (!u || u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
function Kd(e, t) {
  const n = Ue(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Ee(e) ? et(e) : Ce(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: u
  };
}
function Ir(e, t, n) {
  let o;
  if (t === "viewport")
    o = Hd(e, n);
  else if (t === "document")
    o = Ud(Se(e));
  else if (ve(t))
    o = Kd(t, n);
  else {
    const r = qs(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return jt(o);
}
function Qs(e, t) {
  const n = Ve(e);
  return n === t || !ve(n) || tt(n) ? !1 : be(n).position === "fixed" || Qs(n, t);
}
function jd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = yt(e, [], !1).filter((i) => ve(i) && at(i) !== "body"), r = null;
  const s = be(e).position === "fixed";
  let a = s ? Ve(e) : e;
  for (; ve(a) && !tt(a); ) {
    const i = be(a), l = To(a);
    !l && i.position === "fixed" && (r = null), (s ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Mt(a) && !l && Qs(e, a)) ? o = o.filter((f) => f !== a) : r = i, a = Ve(a);
  }
  return t.set(e, o), o;
}
function Yd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? un(t) ? [] : jd(t, this._c) : [].concat(n), o], i = a[0], l = a.reduce((u, f) => {
    const p = Ir(t, f, r);
    return u.top = ue(p.top, u.top), u.right = Fe(p.right, u.right), u.bottom = Fe(p.bottom, u.bottom), u.left = ue(p.left, u.left), u;
  }, Ir(t, i, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Xd(e) {
  const {
    width: t,
    height: n
  } = Xs(e);
  return {
    width: t,
    height: n
  };
}
function qd(e, t, n) {
  const o = Ee(t), r = Se(t), s = n === "fixed", a = Ue(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ce(0);
  if (o || !o && !s)
    if ((at(t) !== "body" || Mt(r)) && (i = dn(t)), o) {
      const h = Ue(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else r && (l.x = Ao(r));
  const u = r && !o && !s ? Zs(r, i) : Ce(0), f = a.left + i.scrollLeft - l.x - u.x, p = a.top + i.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function On(e) {
  return be(e).position === "static";
}
function Ar(e, t) {
  if (!Ee(e) || be(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Se(e) === n && (n = n.ownerDocument.body), n;
}
function Js(e, t) {
  const n = de(e);
  if (un(e))
    return n;
  if (!Ee(e)) {
    let r = Ve(e);
    for (; r && !tt(r); ) {
      if (ve(r) && !On(r))
        return r;
      r = Ve(r);
    }
    return n;
  }
  let o = Ar(e, t);
  for (; o && $d(o) && On(o); )
    o = Ar(o, t);
  return o && tt(o) && On(o) && !To(o) ? n : o || Vd(e) || n;
}
const Zd = async function(e) {
  const t = this.getOffsetParent || Js, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: qd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Qd(e) {
  return be(e).direction === "rtl";
}
const Jd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gd,
  getDocumentElement: Se,
  getClippingRect: Yd,
  getOffsetParent: Js,
  getElementRects: Zd,
  getClientRects: zd,
  getDimensions: Xd,
  getScale: et,
  isElement: ve,
  isRTL: Qd
};
function ef(e, t) {
  let n = null, o;
  const r = Se(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const {
      left: u,
      top: f,
      width: p,
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !p || !h)
      return;
    const g = Vt(f), v = Vt(r.clientWidth - (u + p)), m = Vt(r.clientHeight - (f + h)), b = Vt(u), y = {
      rootMargin: -g + "px " + -v + "px " + -m + "px " + -b + "px",
      threshold: ue(0, Fe(1, l)) || 1
    };
    let x = !0;
    function C(E) {
      const P = E[0].intersectionRatio;
      if (P !== l) {
        if (!x)
          return a();
        P ? a(!1, P) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function tf(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = Io(e), f = r || s ? [...u ? yt(u) : [], ...yt(t)] : [];
  f.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const p = u && i ? ef(u, n) : null;
  let h = -1, g = null;
  a && (g = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = g) == null || x.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let v, m = l ? Ue(e) : null;
  l && b();
  function b() {
    const w = Ue(e);
    m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && n(), m = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    f.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), p == null || p(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(v);
  };
}
const nf = Dd, of = kd, rf = Id, sf = Fd, af = Ad, Or = _d, cf = Ld, lf = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Jd,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Td(e, t, {
    ...r,
    platform: s
  });
};
var Gt = typeof document < "u" ? Wc : $n;
function Yt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Yt(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !Yt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ea(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dr(e, t) {
  const n = ea(e);
  return Math.round(t * n) / n;
}
function Dn(e) {
  const t = c.useRef(e);
  return Gt(() => {
    t.current = e;
  }), t;
}
function uf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, p] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = c.useState(o);
  Yt(h, o) || g(o);
  const [v, m] = c.useState(null), [b, w] = c.useState(null), y = c.useCallback((D) => {
    D !== P.current && (P.current = D, m(D));
  }, []), x = c.useCallback((D) => {
    D !== R.current && (R.current = D, w(D));
  }, []), C = s || v, E = a || b, P = c.useRef(null), R = c.useRef(null), M = c.useRef(f), T = l != null, O = Dn(l), B = Dn(r), A = Dn(u), G = c.useCallback(() => {
    if (!P.current || !R.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: h
    };
    B.current && (D.platform = B.current), lf(P.current, R.current, D).then((N) => {
      const U = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      F.current && !Yt(M.current, U) && (M.current = U, Jt.flushSync(() => {
        p(U);
      }));
    });
  }, [h, t, n, B, A]);
  Gt(() => {
    u === !1 && M.current.isPositioned && (M.current.isPositioned = !1, p((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  Gt(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Gt(() => {
    if (C && (P.current = C), E && (R.current = E), C && E) {
      if (O.current)
        return O.current(C, E, G);
      G();
    }
  }, [C, E, G, O, T]);
  const K = c.useMemo(() => ({
    reference: P,
    floating: R,
    setReference: y,
    setFloating: x
  }), [y, x]), L = c.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), z = c.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return D;
    const N = Dr(L.floating, f.x), U = Dr(L.floating, f.y);
    return i ? {
      ...D,
      transform: "translate(" + N + "px, " + U + "px)",
      ...ea(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: U
    };
  }, [n, i, L.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: G,
    refs: K,
    elements: L,
    floatingStyles: z
  }), [f, G, K, L, z]);
}
const df = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Or({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Or({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, ff = (e, t) => ({
  ...nf(e),
  options: [e, t]
}), pf = (e, t) => ({
  ...of(e),
  options: [e, t]
}), mf = (e, t) => ({
  ...cf(e),
  options: [e, t]
}), hf = (e, t) => ({
  ...rf(e),
  options: [e, t]
}), gf = (e, t) => ({
  ...sf(e),
  options: [e, t]
}), vf = (e, t) => ({
  ...af(e),
  options: [e, t]
}), bf = (e, t) => ({
  ...df(e),
  options: [e, t]
});
var wf = "Arrow", ta = c.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ d(
    I.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ta.displayName = wf;
var yf = ta, Oo = "Popper", [na, it] = ie(Oo), [xf, oa] = na(Oo), ra = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ d(xf, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
ra.displayName = Oo;
var sa = "PopperAnchor", aa = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = oa(sa, n), a = c.useRef(null), i = V(t, a);
    return c.useEffect(() => {
      s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
    }), o ? null : /* @__PURE__ */ d(I.div, { ...r, ref: i });
  }
);
aa.displayName = sa;
var Do = "PopperContent", [Cf, Ef] = na(Do), ia = c.forwardRef(
  (e, t) => {
    var k, Y, Q, j, X, q;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...m
    } = e, b = oa(Do, n), [w, y] = c.useState(null), x = V(t, (le) => y(le)), [C, E] = c.useState(null), P = tn(C), R = (P == null ? void 0 : P.width) ?? 0, M = (P == null ? void 0 : P.height) ?? 0, T = o + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, B = Array.isArray(u) ? u : [u], A = B.length > 0, G = {
      padding: O,
      boundary: B.filter(Sf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: F, floatingStyles: K, placement: L, isPositioned: z, middlewareData: D } = uf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...le) => tf(...le, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        ff({ mainAxis: r + M, alignmentAxis: a }),
        l && pf({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? mf() : void 0,
          ...G
        }),
        l && hf({ ...G }),
        gf({
          ...G,
          apply: ({ elements: le, rects: ye, availableWidth: dt, availableHeight: ft }) => {
            const { width: pt, height: $c } = ye.reference, Ot = le.floating.style;
            Ot.setProperty("--radix-popper-available-width", `${dt}px`), Ot.setProperty("--radix-popper-available-height", `${ft}px`), Ot.setProperty("--radix-popper-anchor-width", `${pt}px`), Ot.setProperty("--radix-popper-anchor-height", `${$c}px`);
          }
        }),
        C && bf({ element: C, padding: i }),
        Pf({ arrowWidth: R, arrowHeight: M }),
        h && vf({ strategy: "referenceHidden", ...G })
      ]
    }), [N, U] = ua(L), H = ee(v);
    te(() => {
      z && (H == null || H());
    }, [z, H]);
    const ae = (k = D.arrow) == null ? void 0 : k.x, Pe = (Y = D.arrow) == null ? void 0 : Y.y, pe = ((Q = D.arrow) == null ? void 0 : Q.centerOffset) !== 0, [Ne, ce] = c.useState();
    return te(() => {
      w && ce(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: z ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ne,
          "--radix-popper-transform-origin": [
            (j = D.transformOrigin) == null ? void 0 : j.x,
            (X = D.transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = D.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          Cf,
          {
            scope: n,
            placedSide: N,
            onArrowChange: E,
            arrowX: ae,
            arrowY: Pe,
            shouldHideArrow: pe,
            children: /* @__PURE__ */ d(
              I.div,
              {
                "data-side": N,
                "data-align": U,
                ...m,
                ref: x,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ia.displayName = Do;
var ca = "PopperArrow", Rf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, la = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = Ef(ca, o), a = Rf[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d(
          yf,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
la.displayName = ca;
function Sf(e) {
  return e !== null;
}
var Pf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, y;
    const { placement: n, rects: o, middlewareData: r } = t, a = ((b = r.arrow) == null ? void 0 : b.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, f] = ua(n), p = { start: "0%", center: "50%", end: "100%" }[f], h = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, g = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "", m = "";
    return u === "bottom" ? (v = a ? p : `${h}px`, m = `${-l}px`) : u === "top" ? (v = a ? p : `${h}px`, m = `${o.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, m = a ? p : `${g}px`) : u === "left" && (v = `${o.floating.width + l}px`, m = a ? p : `${g}px`), { data: { x: v, y: m } };
  }
});
function ua(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fn = ra, ko = aa, Lo = ia, Fo = la, kn = "rovingFocusGroup.onEntryFocus", Nf = { bubbles: !1, cancelable: !0 }, pn = "RovingFocusGroup", [Kn, da, Mf] = Pt(pn), [Tf, mn] = ie(
  pn,
  [Mf]
), [_f, If] = Tf(pn), fa = c.forwardRef(
  (e, t) => /* @__PURE__ */ d(Kn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Kn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Af, { ...e, ref: t }) }) })
);
fa.displayName = pn;
var Af = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, h = c.useRef(null), g = V(t, h), v = Nt(s), [m = null, b] = fe({
    prop: a,
    defaultProp: i,
    onChange: l
  }), [w, y] = c.useState(!1), x = ee(u), C = da(n), E = c.useRef(!1), [P, R] = c.useState(0);
  return c.useEffect(() => {
    const M = h.current;
    if (M)
      return M.addEventListener(kn, x), () => M.removeEventListener(kn, x);
  }, [x]), /* @__PURE__ */ d(
    _f,
    {
      scope: n,
      orientation: o,
      dir: v,
      loop: r,
      currentTabStopId: m,
      onItemFocus: c.useCallback(
        (M) => b(M),
        [b]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => R((M) => M + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => R((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        I.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: S(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: S(e.onFocus, (M) => {
            const T = !E.current;
            if (M.target === M.currentTarget && T && !w) {
              const O = new CustomEvent(kn, Nf);
              if (M.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const B = C().filter((L) => L.focusable), A = B.find((L) => L.active), G = B.find((L) => L.id === m), K = [A, G, ...B].filter(
                  Boolean
                ).map((L) => L.ref.current);
                ha(K, f);
              }
            }
            E.current = !1;
          }),
          onBlur: S(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), pa = "RovingFocusGroupItem", ma = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      ...a
    } = e, i = se(), l = s || i, u = If(pa, n), f = u.currentTabStopId === l, p = da(n), { onFocusableItemAdd: h, onFocusableItemRemove: g } = u;
    return c.useEffect(() => {
      if (o)
        return h(), () => g();
    }, [o, h, g]), /* @__PURE__ */ d(
      Kn.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ d(
          I.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: S(e.onMouseDown, (v) => {
              o ? u.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: S(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: S(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const m = kf(v, u.orientation, u.dir);
              if (m !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = p().filter((y) => y.focusable).map((y) => y.ref.current);
                if (m === "last") w.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && w.reverse();
                  const y = w.indexOf(v.currentTarget);
                  w = u.loop ? Lf(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => ha(w));
              }
            })
          }
        )
      }
    );
  }
);
ma.displayName = pa;
var Of = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Df(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function kf(e, t, n) {
  const o = Df(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Of[o];
}
function ha(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Lf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var ga = fa, va = ma, jn = ["Enter", " "], Ff = ["ArrowDown", "PageUp", "Home"], ba = ["ArrowUp", "PageDown", "End"], $f = [...Ff, ...ba], Vf = {
  ltr: [...jn, "ArrowRight"],
  rtl: [...jn, "ArrowLeft"]
}, Bf = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Tt = "Menu", [xt, Wf, Gf] = Pt(Tt), [je, wa] = ie(Tt, [
  Gf,
  it,
  mn
]), _t = it(), ya = mn(), [xa, Be] = je(Tt), [zf, It] = je(Tt), Ca = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: a = !0 } = e, i = _t(t), [l, u] = c.useState(null), f = c.useRef(!1), p = ee(s), h = Nt(r);
  return c.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d(fn, { ...i, children: /* @__PURE__ */ d(
    xa,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d(
        zf,
        {
          scope: t,
          onClose: c.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: a,
          children: o
        }
      )
    }
  ) });
};
Ca.displayName = Tt;
var Uf = "MenuAnchor", $o = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = _t(n);
    return /* @__PURE__ */ d(ko, { ...r, ...o, ref: t });
  }
);
$o.displayName = Uf;
var Vo = "MenuPortal", [Hf, Ea] = je(Vo, {
  forceMount: void 0
}), Ra = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Be(Vo, t);
  return /* @__PURE__ */ d(Hf, { scope: t, forceMount: n, children: /* @__PURE__ */ d(oe, { present: n || s.open, children: /* @__PURE__ */ d(rn, { asChild: !0, container: r, children: o }) }) });
};
Ra.displayName = Vo;
var me = "MenuContent", [Kf, Bo] = je(me), Sa = c.forwardRef(
  (e, t) => {
    const n = Ea(me, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(me, e.__scopeMenu), a = It(me, e.__scopeMenu);
    return /* @__PURE__ */ d(xt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(oe, { present: o || s.open, children: /* @__PURE__ */ d(xt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ d(jf, { ...r, ref: t }) : /* @__PURE__ */ d(Yf, { ...r, ref: t }) }) }) });
  }
), jf = c.forwardRef(
  (e, t) => {
    const n = Be(me, e.__scopeMenu), o = c.useRef(null), r = V(t, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return vo(s);
    }, []), /* @__PURE__ */ d(
      Wo,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: S(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Yf = c.forwardRef((e, t) => {
  const n = Be(me, e.__scopeMenu);
  return /* @__PURE__ */ d(
    Wo,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Wo = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: v,
      ...m
    } = e, b = Be(me, n), w = It(me, n), y = _t(n), x = ya(n), C = Wf(n), [E, P] = c.useState(null), R = c.useRef(null), M = V(t, R, b.onContentChange), T = c.useRef(0), O = c.useRef(""), B = c.useRef(0), A = c.useRef(null), G = c.useRef("right"), F = c.useRef(0), K = v ? an : c.Fragment, L = v ? { as: Te, allowPinchZoom: !0 } : void 0, z = (N) => {
      var k, Y;
      const U = O.current + N, H = C().filter((Q) => !Q.disabled), ae = document.activeElement, Pe = (k = H.find((Q) => Q.ref.current === ae)) == null ? void 0 : k.textValue, pe = H.map((Q) => Q.textValue), Ne = ap(pe, U, Pe), ce = (Y = H.find((Q) => Q.textValue === Ne)) == null ? void 0 : Y.ref.current;
      (function Q(j) {
        O.current = j, window.clearTimeout(T.current), j !== "" && (T.current = window.setTimeout(() => Q(""), 1e3));
      })(U), ce && setTimeout(() => ce.focus());
    };
    c.useEffect(() => () => window.clearTimeout(T.current), []), go();
    const D = c.useCallback((N) => {
      var H, ae;
      return G.current === ((H = A.current) == null ? void 0 : H.side) && cp(N, (ae = A.current) == null ? void 0 : ae.area);
    }, []);
    return /* @__PURE__ */ d(
      Kf,
      {
        scope: n,
        searchRef: O,
        onItemEnter: c.useCallback(
          (N) => {
            D(N) && N.preventDefault();
          },
          [D]
        ),
        onItemLeave: c.useCallback(
          (N) => {
            var U;
            D(N) || ((U = R.current) == null || U.focus(), P(null));
          },
          [D]
        ),
        onTriggerLeave: c.useCallback(
          (N) => {
            D(N) && N.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: B,
        onPointerGraceIntentChange: c.useCallback((N) => {
          A.current = N;
        }, []),
        children: /* @__PURE__ */ d(K, { ...L, children: /* @__PURE__ */ d(
          on,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: S(s, (N) => {
              var U;
              N.preventDefault(), (U = R.current) == null || U.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ d(
              St,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ d(
                  ga,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: S(l, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      Lo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ga(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...m,
                        ref: M,
                        style: { outline: "none", ...m.style },
                        onKeyDown: S(m.onKeyDown, (N) => {
                          const H = N.target.closest("[data-radix-menu-content]") === N.currentTarget, ae = N.ctrlKey || N.altKey || N.metaKey, Pe = N.key.length === 1;
                          H && (N.key === "Tab" && N.preventDefault(), !ae && Pe && z(N.key));
                          const pe = R.current;
                          if (N.target !== pe || !$f.includes(N.key)) return;
                          N.preventDefault();
                          const ce = C().filter((k) => !k.disabled).map((k) => k.ref.current);
                          ba.includes(N.key) && ce.reverse(), rp(ce);
                        }),
                        onBlur: S(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(T.current), O.current = "");
                        }),
                        onPointerMove: S(
                          e.onPointerMove,
                          Ct((N) => {
                            const U = N.target, H = F.current !== N.clientX;
                            if (N.currentTarget.contains(U) && H) {
                              const ae = N.clientX > F.current ? "right" : "left";
                              G.current = ae, F.current = N.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Sa.displayName = me;
var Xf = "MenuGroup", Go = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(I.div, { role: "group", ...o, ref: t });
  }
);
Go.displayName = Xf;
var qf = "MenuLabel", Pa = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(I.div, { ...o, ref: t });
  }
);
Pa.displayName = qf;
var Xt = "MenuItem", kr = "menu.itemSelect", hn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = c.useRef(null), a = It(Xt, e.__scopeMenu), i = Bo(Xt, e.__scopeMenu), l = V(t, s), u = c.useRef(!1), f = () => {
      const p = s.current;
      if (!n && p) {
        const h = new CustomEvent(kr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(kr, (g) => o == null ? void 0 : o(g), { once: !0 }), bt(p, h), h.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ d(
      Na,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: S(e.onClick, f),
        onPointerDown: (p) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, p), u.current = !0;
        },
        onPointerUp: S(e.onPointerUp, (p) => {
          var h;
          u.current || (h = p.currentTarget) == null || h.click();
        }),
        onKeyDown: S(e.onKeyDown, (p) => {
          const h = i.searchRef.current !== "";
          n || h && p.key === " " || jn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
hn.displayName = Xt;
var Na = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, a = Bo(Xt, n), i = ya(n), l = c.useRef(null), u = V(t, l), [f, p] = c.useState(!1), [h, g] = c.useState("");
    return c.useEffect(() => {
      const v = l.current;
      v && g((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ d(
      xt.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? h,
        children: /* @__PURE__ */ d(va, { asChild: !0, ...i, focusable: !o, children: /* @__PURE__ */ d(
          I.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: S(
              e.onPointerMove,
              Ct((v) => {
                o ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: S(
              e.onPointerLeave,
              Ct((v) => a.onItemLeave(v))
            ),
            onFocus: S(e.onFocus, () => p(!0)),
            onBlur: S(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), Zf = "MenuCheckboxItem", Ma = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ d(Oa, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d(
      hn,
      {
        role: "menuitemcheckbox",
        "aria-checked": qt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": Ho(n),
        onSelect: S(
          r.onSelect,
          () => o == null ? void 0 : o(qt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ma.displayName = Zf;
var Ta = "MenuRadioGroup", [Qf, Jf] = je(
  Ta,
  { value: void 0, onValueChange: () => {
  } }
), _a = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ee(o);
    return /* @__PURE__ */ d(Qf, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ d(Go, { ...r, ref: t }) });
  }
);
_a.displayName = Ta;
var Ia = "MenuRadioItem", Aa = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = Jf(Ia, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ d(Oa, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ d(
      hn,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": Ho(s),
        onSelect: S(
          o.onSelect,
          () => {
            var a;
            return (a = r.onValueChange) == null ? void 0 : a.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Aa.displayName = Ia;
var zo = "MenuItemIndicator", [Oa, ep] = je(
  zo,
  { checked: !1 }
), Da = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = ep(zo, n);
    return /* @__PURE__ */ d(
      oe,
      {
        present: o || qt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d(
          I.span,
          {
            ...r,
            ref: t,
            "data-state": Ho(s.checked)
          }
        )
      }
    );
  }
);
Da.displayName = zo;
var tp = "MenuSeparator", ka = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(
      I.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
ka.displayName = tp;
var np = "MenuArrow", La = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = _t(n);
    return /* @__PURE__ */ d(Fo, { ...r, ...o, ref: t });
  }
);
La.displayName = np;
var Uo = "MenuSub", [op, Fa] = je(Uo), $a = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = Be(Uo, t), a = _t(t), [i, l] = c.useState(null), [u, f] = c.useState(null), p = ee(r);
  return c.useEffect(() => (s.open === !1 && p(!1), () => p(!1)), [s.open, p]), /* @__PURE__ */ d(fn, { ...a, children: /* @__PURE__ */ d(
    xa,
    {
      scope: t,
      open: o,
      onOpenChange: p,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ d(
        op,
        {
          scope: t,
          contentId: se(),
          triggerId: se(),
          trigger: i,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
$a.displayName = Uo;
var gt = "MenuSubTrigger", Va = c.forwardRef(
  (e, t) => {
    const n = Be(gt, e.__scopeMenu), o = It(gt, e.__scopeMenu), r = Fa(gt, e.__scopeMenu), s = Bo(gt, e.__scopeMenu), a = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = s, u = { __scopeMenu: e.__scopeMenu }, f = c.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return c.useEffect(() => f, [f]), c.useEffect(() => {
      const p = i.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [i, l]), /* @__PURE__ */ d($o, { asChild: !0, ...u, children: /* @__PURE__ */ d(
      Na,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Ga(n.open),
        ...e,
        ref: Et(t, r.onTriggerChange),
        onClick: (p) => {
          var h;
          (h = e.onClick) == null || h.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: S(
          e.onPointerMove,
          Ct((p) => {
            s.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: S(
          e.onPointerLeave,
          Ct((p) => {
            var g, v;
            f();
            const h = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (h) {
              const m = (v = n.content) == null ? void 0 : v.dataset.side, b = m === "right", w = b ? -5 : 5, y = h[b ? "left" : "right"], x = h[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + w, y: p.clientY },
                  { x: y, y: h.top },
                  { x, y: h.top },
                  { x, y: h.bottom },
                  { x: y, y: h.bottom }
                ],
                side: m
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(p), p.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: S(e.onKeyDown, (p) => {
          var g;
          const h = s.searchRef.current !== "";
          e.disabled || h && p.key === " " || Vf[o.dir].includes(p.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Va.displayName = gt;
var Ba = "MenuSubContent", Wa = c.forwardRef(
  (e, t) => {
    const n = Ea(me, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(me, e.__scopeMenu), a = It(me, e.__scopeMenu), i = Fa(Ba, e.__scopeMenu), l = c.useRef(null), u = V(t, l);
    return /* @__PURE__ */ d(xt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(oe, { present: o || s.open, children: /* @__PURE__ */ d(xt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(
      Wo,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...r,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          a.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: S(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: S(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: S(e.onKeyDown, (f) => {
          var g;
          const p = f.currentTarget.contains(f.target), h = Bf[a.dir].includes(f.key);
          p && h && (s.onOpenChange(!1), (g = i.trigger) == null || g.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Wa.displayName = Ba;
function Ga(e) {
  return e ? "open" : "closed";
}
function qt(e) {
  return e === "indeterminate";
}
function Ho(e) {
  return qt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function rp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function sp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ap(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = sp(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function ip(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, l = t[s].y, u = t[a].x, f = t[a].y;
    l > o != f > o && n < (u - i) * (o - l) / (f - l) + i && (r = !r);
  }
  return r;
}
function cp(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ip(n, t);
}
function Ct(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var lp = Ca, up = $o, dp = Ra, fp = Sa, pp = Go, mp = Pa, hp = hn, gp = Ma, vp = _a, bp = Aa, wp = Da, yp = ka, xp = La, Cp = $a, Ep = Va, Rp = Wa, Ko = "DropdownMenu", [Sp, Kg] = ie(
  Ko,
  [wa]
), re = wa(), [Pp, za] = Sp(Ko), Ua = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, l = re(t), u = c.useRef(null), [f = !1, p] = fe({
    prop: r,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ d(
    Pp,
    {
      scope: t,
      triggerId: se(),
      triggerRef: u,
      contentId: se(),
      open: f,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((h) => !h), [p]),
      modal: i,
      children: /* @__PURE__ */ d(lp, { ...l, open: f, onOpenChange: p, dir: o, modal: i, children: n })
    }
  );
};
Ua.displayName = Ko;
var Ha = "DropdownMenuTrigger", Ka = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = za(Ha, n), a = re(n);
    return /* @__PURE__ */ d(up, { asChild: !0, ...a, children: /* @__PURE__ */ d(
      I.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: Et(t, s.triggerRef),
        onPointerDown: S(e.onPointerDown, (i) => {
          !o && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: S(e.onKeyDown, (i) => {
          o || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Ka.displayName = Ha;
var Np = "DropdownMenuPortal", ja = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = re(t);
  return /* @__PURE__ */ d(dp, { ...o, ...n });
};
ja.displayName = Np;
var Ya = "DropdownMenuContent", Xa = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = za(Ya, n), s = re(n), a = c.useRef(!1);
    return /* @__PURE__ */ d(
      fp,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: S(e.onCloseAutoFocus, (i) => {
          var l;
          a.current || (l = r.triggerRef.current) == null || l.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: S(e.onInteractOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!r.modal || f) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Xa.displayName = Ya;
var Mp = "DropdownMenuGroup", qa = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
    return /* @__PURE__ */ d(pp, { ...r, ...o, ref: t });
  }
);
qa.displayName = Mp;
var Tp = "DropdownMenuLabel", Za = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
    return /* @__PURE__ */ d(mp, { ...r, ...o, ref: t });
  }
);
Za.displayName = Tp;
var _p = "DropdownMenuItem", Qa = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
    return /* @__PURE__ */ d(hp, { ...r, ...o, ref: t });
  }
);
Qa.displayName = _p;
var Ip = "DropdownMenuCheckboxItem", Ja = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(gp, { ...r, ...o, ref: t });
});
Ja.displayName = Ip;
var Ap = "DropdownMenuRadioGroup", ei = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(vp, { ...r, ...o, ref: t });
});
ei.displayName = Ap;
var Op = "DropdownMenuRadioItem", ti = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(bp, { ...r, ...o, ref: t });
});
ti.displayName = Op;
var Dp = "DropdownMenuItemIndicator", ni = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(wp, { ...r, ...o, ref: t });
});
ni.displayName = Dp;
var kp = "DropdownMenuSeparator", oi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(yp, { ...r, ...o, ref: t });
});
oi.displayName = kp;
var Lp = "DropdownMenuArrow", Fp = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
    return /* @__PURE__ */ d(xp, { ...r, ...o, ref: t });
  }
);
Fp.displayName = Lp;
var $p = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, a = re(t), [i = !1, l] = fe({
    prop: o,
    defaultProp: s,
    onChange: r
  });
  return /* @__PURE__ */ d(Cp, { ...a, open: i, onOpenChange: l, children: n });
}, Vp = "DropdownMenuSubTrigger", ri = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(Ep, { ...r, ...o, ref: t });
});
ri.displayName = Vp;
var Bp = "DropdownMenuSubContent", si = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = re(n);
  return /* @__PURE__ */ d(
    Rp,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
si.displayName = Bp;
var Wp = Ua, Gp = Ka, ai = ja, zp = Xa, Up = qa, Hp = Za, Kp = Qa, jp = Ja, Yp = ei, Xp = ti, ii = ni, qp = oi, Zp = $p, Qp = ri, Jp = si;
const jg = Wp, Yg = Gp, Xg = Up, qg = ai, Zg = Zp, Qg = Yp, Jg = ({
  className: e,
  inset: t,
  children: n,
  ...o
}) => /* @__PURE__ */ W(
  Qp,
  {
    className: _(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ d(Hc, { className: "ml-auto" })
    ]
  }
), ev = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  Jp,
  {
    className: _(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
), tv = ({
  className: e,
  sideOffset: t = 4,
  ...n
}) => /* @__PURE__ */ d(ai, { children: /* @__PURE__ */ d(
  zp,
  {
    sideOffset: t,
    className: _(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }), nv = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ d(
  Kp,
  {
    className: _(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
), ov = ({
  className: e,
  children: t,
  checked: n,
  ...o
}) => /* @__PURE__ */ W(
  jp,
  {
    className: _(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(ii, { children: /* @__PURE__ */ d(co, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
), rv = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ W(
  Xp,
  {
    className: _(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(ii, { children: /* @__PURE__ */ d(qr, { className: "fill-current h-2 w-2" }) }) }),
      t
    ]
  }
), sv = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ d(
  Hp,
  {
    className: _(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
), av = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  qp,
  {
    className: _("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
), iv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "span",
  {
    className: _("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
var em = (e) => e.type === "checkbox", tm = (e) => e instanceof Date, ci = (e) => e == null;
const nm = (e) => typeof e == "object";
var ct = (e) => !ci(e) && !Array.isArray(e) && nm(e) && !tm(e), om = (e) => ct(e) && e.target ? em(e.target) ? e.target.checked : e.target.value : e, rm = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, sm = (e, t) => e.has(rm(t)), am = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ct(t) && t.hasOwnProperty("isPrototypeOf");
}, im = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function jo(e) {
  let t;
  const n = Array.isArray(e), o = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(im && (e instanceof Blob || o)) && (n || ct(e)))
    if (t = n ? [] : {}, !n && !am(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = jo(e[r]));
  else
    return e;
  return t;
}
var li = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Yn = (e) => e === void 0, ne = (e, t, n) => {
  if (!t || !ct(e))
    return n;
  const o = li(t.split(/[,[\].]+?/)).reduce((r, s) => ci(r) ? r : r[s], e);
  return Yn(o) || o === e ? Yn(e[t]) ? n : e[t] : o;
}, Ln = (e) => typeof e == "boolean", cm = (e) => /^\w*$/.test(e), lm = (e) => li(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Lr = (e, t, n) => {
  let o = -1;
  const r = cm(t) ? [t] : lm(t), s = r.length, a = s - 1;
  for (; ++o < s; ) {
    const i = r[o];
    let l = n;
    if (o !== a) {
      const u = e[i];
      l = ct(u) || Array.isArray(u) ? u : isNaN(+r[o + 1]) ? {} : [];
    }
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    e[i] = l, e = e[i];
  }
  return e;
};
const Fr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, $r = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ui = Z.createContext(null), gn = () => Z.useContext(ui), um = (e) => {
  const { children: t, ...n } = e;
  return Z.createElement(ui.Provider, { value: n }, t);
};
var dm = (e, t, n, o = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(r, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== $r.all && (t._proxyFormState[a] = !o || $r.all), n && (n[a] = !0), e[a];
      }
    });
  return r;
}, fm = (e) => ct(e) && !Object.keys(e).length, pm = (e, t, n, o) => {
  n(e);
  const { name: r, ...s } = e;
  return fm(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((a) => t[a] === !o);
}, mm = (e) => Array.isArray(e) ? e : [e], di = (e, t, n) => !e || !t || e === t || mm(e).some((o) => o && (n ? o === t : o.startsWith(t) || t.startsWith(o)));
function fi(e) {
  const t = Z.useRef(e);
  t.current = e, Z.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function hm(e) {
  const t = gn(), { control: n = t.control, disabled: o, name: r, exact: s } = e || {}, [a, i] = Z.useState(n._formState), l = Z.useRef(!0), u = Z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = Z.useRef(r);
  return f.current = r, fi({
    disabled: o,
    next: (p) => l.current && di(f.current, p.name, s) && pm(p, u.current, n._updateFormState) && i({
      ...n._formState,
      ...p
    }),
    subject: n._subjects.state
  }), Z.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), Z.useMemo(() => dm(a, n, u.current, !1), [a, n]);
}
var gm = (e) => typeof e == "string", vm = (e, t, n, o, r) => gm(e) ? ne(n, e, r) : Array.isArray(e) ? e.map((s) => ne(n, s)) : n;
function bm(e) {
  const t = gn(), { control: n = t.control, name: o, defaultValue: r, disabled: s, exact: a } = e || {}, i = Z.useRef(o);
  i.current = o, fi({
    disabled: s,
    subject: n._subjects.values,
    next: (f) => {
      di(i.current, f.name, a) && u(jo(vm(i.current, n._names, f.values || n._formValues, !1, r)));
    }
  });
  const [l, u] = Z.useState(n._getWatch(o, r));
  return Z.useEffect(() => n._removeUnmounted()), l;
}
function wm(e) {
  const t = gn(), { name: n, disabled: o, control: r = t.control, shouldUnregister: s } = e, a = sm(r._names.array, n), i = bm({
    control: r,
    name: n,
    defaultValue: ne(r._formValues, n, ne(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = hm({
    control: r,
    name: n,
    exact: !0
  }), u = Z.useRef(r.register(n, {
    ...e.rules,
    value: i,
    ...Ln(e.disabled) ? { disabled: e.disabled } : {}
  })), f = Z.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!ne(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!ne(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!ne(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!ne(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => ne(l.errors, n)
    }
  }), [l, n]), p = Z.useMemo(() => ({
    name: n,
    value: i,
    ...Ln(o) || l.disabled ? { disabled: l.disabled || o } : {},
    onChange: (h) => u.current.onChange({
      target: {
        value: om(h),
        name: n
      },
      type: Fr.CHANGE
    }),
    onBlur: () => u.current.onBlur({
      target: {
        value: ne(r._formValues, n),
        name: n
      },
      type: Fr.BLUR
    }),
    ref: (h) => {
      const g = ne(r._fields, n);
      g && h && (g._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (v) => h.setCustomValidity(v),
        reportValidity: () => h.reportValidity()
      });
    }
  }), [
    n,
    r._formValues,
    o,
    l.disabled,
    i,
    r._fields
  ]);
  return Z.useEffect(() => {
    const h = r._options.shouldUnregister || s, g = (v, m) => {
      const b = ne(r._fields, v);
      b && b._f && (b._f.mount = m);
    };
    if (g(n, !0), h) {
      const v = jo(ne(r._options.defaultValues, n));
      Lr(r._defaultValues, n, v), Yn(ne(r._formValues, n)) && Lr(r._formValues, n, v);
    }
    return () => {
      (a ? h && !r._state.action : h) ? r.unregister(n) : g(n, !1);
    };
  }, [n, r, a, s]), Z.useEffect(() => {
    Ln(o) && ne(r._fields, n) && r._updateDisabledField({
      disabled: o,
      fields: r._fields,
      name: n,
      value: ne(r._fields, n)._f.value
    });
  }, [o, n, r]), Z.useMemo(() => ({
    field: p,
    formState: l,
    fieldState: f
  }), [p, l, f]);
}
const ym = (e) => e.render(wm(e));
var xm = "Label", pi = c.forwardRef((e, t) => /* @__PURE__ */ d(
  I.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
pi.displayName = xm;
var Cm = pi;
const Em = Ke(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Rm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Cm,
  {
    ref: n,
    className: _(Em(), e),
    ...t
  }
)), cv = um, mi = c.createContext(
  {}
), lv = ({
  ...e
}) => /* @__PURE__ */ d(mi.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d(ym, { ...e }) }), vn = () => {
  const e = c.useContext(mi), t = c.useContext(hi), { getFieldState: n, formState: o } = gn(), r = n(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...r
  };
}, hi = c.createContext(
  {}
), Sm = c.forwardRef(({ className: e, ...t }, n) => {
  const o = c.useId();
  return /* @__PURE__ */ d(hi.Provider, { value: { id: o }, children: /* @__PURE__ */ d("div", { ref: n, className: _("space-y-1", e), ...t }) });
});
Sm.displayName = "FormItem";
const Pm = c.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: r } = vn();
  return /* @__PURE__ */ d(
    Rm,
    {
      ref: n,
      className: _(o && "text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
});
Pm.displayName = "FormLabel";
const Nm = c.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: r, formMessageId: s } = vn();
  return /* @__PURE__ */ d(
    Te,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${r} ${s}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Nm.displayName = "FormControl";
const Mm = c.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = vn();
  return /* @__PURE__ */ d(
    "p",
    {
      ref: n,
      id: o,
      className: _("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Mm.displayName = "FormDescription";
const Tm = c.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: r, formMessageId: s } = vn(), a = r ? String(r == null ? void 0 : r.message) : t;
  return a ? /* @__PURE__ */ d(
    "p",
    {
      ref: o,
      id: s,
      className: _("text-sm font-medium text-destructive", e),
      ...n,
      children: a
    }
  ) : null;
});
Tm.displayName = "FormMessage";
const uv = c.forwardRef(
  ({ className: e, type: t, prefix: n, suffix: o, ...r }, s) => /* @__PURE__ */ W("div", { className: "relative flex w-full items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background dark:focus-within:ring-neutral-600", children: [
    n && /* @__PURE__ */ d("div", { className: "pointer-events-none flex h-10 items-center pl-3 text-subtitle", children: n }),
    /* @__PURE__ */ d(
      "input",
      {
        type: t,
        className: _(
          "h-10 w-full bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground placeholder:opacity-60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          e
        ),
        ref: s,
        ...r
      }
    ),
    o && /* @__PURE__ */ d("div", { className: "pointer-events-none flex h-10 items-center pr-3 text-subtitle", children: o })
  ] })
);
var _m = "VisuallyHidden", Yo = c.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    I.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Yo.displayName = _m;
var gi = Yo, lt = "NavigationMenu", [Xo, vi, Im] = Pt(lt), [Xn, Am, Om] = Pt(lt), [qo, dv] = ie(
  lt,
  [Im, Om]
), [Dm, he] = qo(lt), [km, Lm] = qo(lt), bi = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      delayDuration: a = 200,
      skipDelayDuration: i = 300,
      orientation: l = "horizontal",
      dir: u,
      ...f
    } = e, [p, h] = c.useState(null), g = V(t, (T) => h(T)), v = Nt(u), m = c.useRef(0), b = c.useRef(0), w = c.useRef(0), [y, x] = c.useState(!0), [C = "", E] = fe({
      prop: o,
      onChange: (T) => {
        const O = T !== "", B = i > 0;
        O ? (window.clearTimeout(w.current), B && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          i
        )), r == null || r(T);
      },
      defaultProp: s
    }), P = c.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => E(""), 150);
    }, [E]), R = c.useCallback(
      (T) => {
        window.clearTimeout(b.current), E(T);
      },
      [E]
    ), M = c.useCallback(
      (T) => {
        C === T ? window.clearTimeout(b.current) : m.current = window.setTimeout(() => {
          window.clearTimeout(b.current), E(T);
        }, a);
      },
      [C, E, a]
    );
    return c.useEffect(() => () => {
      window.clearTimeout(m.current), window.clearTimeout(b.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ d(
      yi,
      {
        scope: n,
        isRootMenu: !0,
        value: C,
        dir: v,
        orientation: l,
        rootNavigationMenu: p,
        onTriggerEnter: (T) => {
          window.clearTimeout(m.current), y ? M(T) : R(T);
        },
        onTriggerLeave: () => {
          window.clearTimeout(m.current), P();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: P,
        onItemSelect: (T) => {
          E((O) => O === T ? "" : T);
        },
        onItemDismiss: () => E(""),
        children: /* @__PURE__ */ d(
          I.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: v,
            ...f,
            ref: g
          }
        )
      }
    );
  }
);
bi.displayName = lt;
var wi = "NavigationMenuSub", Fm = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      orientation: a = "horizontal",
      ...i
    } = e, l = he(wi, n), [u = "", f] = fe({
      prop: o,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ d(
      yi,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: l.dir,
        orientation: a,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ d(I.div, { "data-orientation": a, ...i, ref: t })
      }
    );
  }
);
Fm.displayName = wi;
var yi = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: o,
    dir: r,
    orientation: s,
    children: a,
    value: i,
    onItemSelect: l,
    onItemDismiss: u,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: h,
    onContentLeave: g
  } = e, [v, m] = c.useState(null), [b, w] = c.useState(/* @__PURE__ */ new Map()), [y, x] = c.useState(null);
  return /* @__PURE__ */ d(
    Dm,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: o,
      value: i,
      previousValue: Rt(i),
      baseId: se(),
      dir: r,
      orientation: s,
      viewport: v,
      onViewportChange: m,
      indicatorTrack: y,
      onIndicatorTrackChange: x,
      onTriggerEnter: ee(f),
      onTriggerLeave: ee(p),
      onContentEnter: ee(h),
      onContentLeave: ee(g),
      onItemSelect: ee(l),
      onItemDismiss: ee(u),
      onViewportContentChange: c.useCallback((C, E) => {
        w((P) => (P.set(C, E), new Map(P)));
      }, []),
      onViewportContentRemove: c.useCallback((C) => {
        w((E) => E.has(C) ? (E.delete(C), new Map(E)) : E);
      }, []),
      children: /* @__PURE__ */ d(Xo.Provider, { scope: t, children: /* @__PURE__ */ d(km, { scope: t, items: b, children: a }) })
    }
  );
}, xi = "NavigationMenuList", Ci = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = he(xi, n), s = /* @__PURE__ */ d(I.ul, { "data-orientation": r.orientation, ...o, ref: t });
    return /* @__PURE__ */ d(I.div, { style: { position: "relative" }, ref: r.onIndicatorTrackChange, children: /* @__PURE__ */ d(Xo.Slot, { scope: n, children: r.isRootMenu ? /* @__PURE__ */ d(Ii, { asChild: !0, children: s }) : s }) });
  }
);
Ci.displayName = xi;
var Ei = "NavigationMenuItem", [$m, Ri] = qo(Ei), Si = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: o, ...r } = e, s = se(), a = o || s || "LEGACY_REACT_AUTO_VALUE", i = c.useRef(null), l = c.useRef(null), u = c.useRef(null), f = c.useRef(() => {
    }), p = c.useRef(!1), h = c.useCallback((v = "start") => {
      if (i.current) {
        f.current();
        const m = Zn(i.current);
        m.length && Jo(v === "start" ? m : m.reverse());
      }
    }, []), g = c.useCallback(() => {
      if (i.current) {
        const v = Zn(i.current);
        v.length && (f.current = Km(v));
      }
    }, []);
    return /* @__PURE__ */ d(
      $m,
      {
        scope: n,
        value: a,
        triggerRef: l,
        contentRef: i,
        focusProxyRef: u,
        wasEscapeCloseRef: p,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ d(I.li, { ...r, ref: t })
      }
    );
  }
);
Si.displayName = Ei;
var qn = "NavigationMenuTrigger", Pi = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: o, ...r } = e, s = he(qn, e.__scopeNavigationMenu), a = Ri(qn, e.__scopeNavigationMenu), i = c.useRef(null), l = V(i, a.triggerRef, t), u = Oi(s.baseId, a.value), f = Di(s.baseId, a.value), p = c.useRef(!1), h = c.useRef(!1), g = a.value === s.value;
  return /* @__PURE__ */ W(Le, { children: [
    /* @__PURE__ */ d(Xo.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ d(Ai, { asChild: !0, children: /* @__PURE__ */ d(
      I.button,
      {
        id: u,
        disabled: o,
        "data-disabled": o ? "" : void 0,
        "data-state": er(g),
        "aria-expanded": g,
        "aria-controls": f,
        ...r,
        ref: l,
        onPointerEnter: S(e.onPointerEnter, () => {
          h.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: S(
          e.onPointerMove,
          Zt(() => {
            o || h.current || a.wasEscapeCloseRef.current || p.current || (s.onTriggerEnter(a.value), p.current = !0);
          })
        ),
        onPointerLeave: S(
          e.onPointerLeave,
          Zt(() => {
            o || (s.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: S(e.onClick, () => {
          s.onItemSelect(a.value), h.current = g;
        }),
        onKeyDown: S(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          g && v.key === b && (a.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ W(Le, { children: [
      /* @__PURE__ */ d(
        gi,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: a.focusProxyRef,
          onFocus: (v) => {
            const m = a.contentRef.current, b = v.relatedTarget, w = b === i.current, y = m == null ? void 0 : m.contains(b);
            (w || !y) && a.onFocusProxyEnter(w ? "start" : "end");
          }
        }
      ),
      s.viewport && /* @__PURE__ */ d("span", { "aria-owns": f })
    ] })
  ] });
});
Pi.displayName = qn;
var Vm = "NavigationMenuLink", Vr = "navigationMenu.linkSelect", Ni = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: o, onSelect: r, ...s } = e;
    return /* @__PURE__ */ d(Ai, { asChild: !0, children: /* @__PURE__ */ d(
      I.a,
      {
        "data-active": o ? "" : void 0,
        "aria-current": o ? "page" : void 0,
        ...s,
        ref: t,
        onClick: S(
          e.onClick,
          (a) => {
            const i = a.target, l = new CustomEvent(Vr, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(Vr, (u) => r == null ? void 0 : r(u), { once: !0 }), bt(i, l), !l.defaultPrevented && !a.metaKey) {
              const u = new CustomEvent(zt, {
                bubbles: !0,
                cancelable: !0
              });
              bt(i, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ni.displayName = Vm;
var Zo = "NavigationMenuIndicator", Bm = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = he(Zo, e.__scopeNavigationMenu), s = !!r.value;
  return r.indicatorTrack ? Kr.createPortal(
    /* @__PURE__ */ d(oe, { present: n || s, children: /* @__PURE__ */ d(Wm, { ...o, ref: t }) }),
    r.indicatorTrack
  ) : null;
});
Bm.displayName = Zo;
var Wm = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = he(Zo, n), s = vi(n), [a, i] = c.useState(
    null
  ), [l, u] = c.useState(null), f = r.orientation === "horizontal", p = !!r.value;
  c.useEffect(() => {
    var m;
    const v = (m = s().find((b) => b.value === r.value)) == null ? void 0 : m.ref.current;
    v && i(v);
  }, [s, r.value]);
  const h = () => {
    a && u({
      size: f ? a.offsetWidth : a.offsetHeight,
      offset: f ? a.offsetLeft : a.offsetTop
    });
  };
  return Qn(a, h), Qn(r.indicatorTrack, h), l ? /* @__PURE__ */ d(
    I.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": r.orientation,
      ...o,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...o.style
      }
    }
  ) : null;
}), nt = "NavigationMenuContent", Mi = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = he(nt, e.__scopeNavigationMenu), s = Ri(nt, e.__scopeNavigationMenu), a = V(s.contentRef, t), i = s.value === r.value, l = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...o
  };
  return r.viewport ? /* @__PURE__ */ d(Gm, { forceMount: n, ...l, ref: a }) : /* @__PURE__ */ d(oe, { present: n || i, children: /* @__PURE__ */ d(
    Ti,
    {
      "data-state": er(i),
      ...l,
      ref: a,
      onPointerEnter: S(e.onPointerEnter, r.onContentEnter),
      onPointerLeave: S(
        e.onPointerLeave,
        Zt(r.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && r.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
Mi.displayName = nt;
var Gm = c.forwardRef((e, t) => {
  const n = he(nt, e.__scopeNavigationMenu), { onViewportContentChange: o, onViewportContentRemove: r } = n;
  return te(() => {
    o(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, o]), te(() => () => r(e.value), [e.value, r]), null;
}), zt = "navigationMenu.rootContentDismiss", Ti = c.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: o,
    triggerRef: r,
    focusProxyRef: s,
    wasEscapeCloseRef: a,
    onRootContentClose: i,
    onContentFocusOutside: l,
    ...u
  } = e, f = he(nt, n), p = c.useRef(null), h = V(p, t), g = Oi(f.baseId, o), v = Di(f.baseId, o), m = vi(n), b = c.useRef(null), { onItemDismiss: w } = f;
  c.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const C = () => {
        var E;
        w(), i(), x.contains(document.activeElement) && ((E = r.current) == null || E.focus());
      };
      return x.addEventListener(zt, C), () => x.removeEventListener(zt, C);
    }
  }, [f.isRootMenu, e.value, r, w, i]);
  const y = c.useMemo(() => {
    const C = m().map((O) => O.value);
    f.dir === "rtl" && C.reverse();
    const E = C.indexOf(f.value), P = C.indexOf(f.previousValue), R = o === f.value, M = P === C.indexOf(o);
    if (!R && !M) return b.current;
    const T = (() => {
      if (E !== P) {
        if (R && P !== -1) return E > P ? "from-end" : "from-start";
        if (M && E !== -1) return E > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = T, T;
  }, [f.previousValue, f.value, f.dir, m, o]);
  return /* @__PURE__ */ d(Ii, { asChild: !0, children: /* @__PURE__ */ d(
    St,
    {
      id: v,
      "aria-labelledby": g,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...u,
      ref: h,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var C;
        const x = new Event(zt, {
          bubbles: !0,
          cancelable: !0
        });
        (C = p.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: S(e.onFocusOutside, (x) => {
        var E;
        l();
        const C = x.target;
        (E = f.rootNavigationMenu) != null && E.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: S(e.onPointerDownOutside, (x) => {
        var R;
        const C = x.target, E = m().some((M) => {
          var T;
          return (T = M.ref.current) == null ? void 0 : T.contains(C);
        }), P = f.isRootMenu && ((R = f.viewport) == null ? void 0 : R.contains(C));
        (E || P || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: S(e.onKeyDown, (x) => {
        var P;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const R = Zn(x.currentTarget), M = document.activeElement, T = R.findIndex((A) => A === M), B = x.shiftKey ? R.slice(0, T).reverse() : R.slice(T + 1, R.length);
          Jo(B) ? x.preventDefault() : (P = s.current) == null || P.focus();
        }
      }),
      onEscapeKeyDown: S(e.onEscapeKeyDown, (x) => {
        a.current = !0;
      })
    }
  ) });
}), Qo = "NavigationMenuViewport", _i = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = !!he(Qo, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d(oe, { present: n || s, children: /* @__PURE__ */ d(zm, { ...o, ref: t }) });
});
_i.displayName = Qo;
var zm = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: o, ...r } = e, s = he(Qo, n), a = V(t, s.onViewportChange), i = Lm(
    nt,
    e.__scopeNavigationMenu
  ), [l, u] = c.useState(null), [f, p] = c.useState(null), h = l ? (l == null ? void 0 : l.width) + "px" : void 0, g = l ? (l == null ? void 0 : l.height) + "px" : void 0, v = !!s.value, m = v ? s.value : s.previousValue;
  return Qn(f, () => {
    f && u({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ d(
    I.div,
    {
      "data-state": er(v),
      "data-orientation": s.orientation,
      ...r,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": g,
        ...r.style
      },
      onPointerEnter: S(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: S(e.onPointerLeave, Zt(s.onContentLeave)),
      children: Array.from(i.items).map(([w, { ref: y, forceMount: x, ...C }]) => {
        const E = m === w;
        return /* @__PURE__ */ d(oe, { present: x || E, children: /* @__PURE__ */ d(
          Ti,
          {
            ...C,
            ref: Et(y, (P) => {
              E && P && p(P);
            })
          }
        ) }, w);
      })
    }
  );
}), Um = "FocusGroup", Ii = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = he(Um, n);
    return /* @__PURE__ */ d(Xn.Provider, { scope: n, children: /* @__PURE__ */ d(Xn.Slot, { scope: n, children: /* @__PURE__ */ d(I.div, { dir: r.dir, ...o, ref: t }) }) });
  }
), Br = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Hm = "FocusGroupItem", Ai = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = Am(n), s = he(Hm, n);
    return /* @__PURE__ */ d(Xn.ItemSlot, { scope: n, children: /* @__PURE__ */ d(
      I.button,
      {
        ...o,
        ref: t,
        onKeyDown: S(e.onKeyDown, (a) => {
          if (["Home", "End", ...Br].includes(a.key)) {
            let l = r().map((p) => p.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && l.reverse(), Br.includes(a.key)) {
              const p = l.indexOf(a.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => Jo(l)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function Zn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function Km(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Qn(e, t) {
  const n = ee(t);
  te(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [e, n]);
}
function er(e) {
  return e ? "open" : "closed";
}
function Oi(e, t) {
  return `${e}-trigger-${t}`;
}
function Di(e, t) {
  return `${e}-content-${t}`;
}
function Zt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var jm = bi, ki = Ci, Jn = Si, Ym = Pi, Li = Ni, Xm = Mi, qm = _i;
const fv = ({ children: e }) => /* @__PURE__ */ W(jm, { className: "relative z-10 list-none", children: [
  /* @__PURE__ */ d(ki, { className: "flex max-w-max flex-1 list-none items-center justify-center gap-6 text-sm", children: e }),
  /* @__PURE__ */ d("div", { className: "absolute top-full flex justify-center", children: /* @__PURE__ */ d(qm, { className: "origin-top-center relative mt-4 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" }) })
] }), pv = ({
  href: e,
  title: t,
  children: n
}) => n ? /* @__PURE__ */ W(Jn, { children: [
  /* @__PURE__ */ W(Ym, { className: "flex items-center gap-1 font-semibold", children: [
    t,
    " ",
    /* @__PURE__ */ d(en, { className: "size-4" })
  ] }),
  /* @__PURE__ */ d(Xm, { className: "left-0 top-0 w-full bg-default data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", children: /* @__PURE__ */ d(ki, { className: "flex flex-col gap-2 p-2", children: n }) })
] }) : /* @__PURE__ */ d(Jn, { children: /* @__PURE__ */ d(Zm, { href: e, title: t }) }), Zm = ({ href: e, title: t }) => {
  const { LinkElement: n } = nn();
  return /* @__PURE__ */ d(Li, { asChild: !0, children: /* @__PURE__ */ d(n, { className: "text-sm font-semibold", href: e, children: t }) });
}, mv = ({
  href: e,
  title: t,
  description: n,
  Icon: o
}) => {
  const { LinkElement: r } = nn();
  return /* @__PURE__ */ d(Jn, { className: "w-[320px]", children: /* @__PURE__ */ d(Li, { asChild: !0, children: /* @__PURE__ */ W(
    r,
    {
      href: e,
      className: "flex items-center gap-4 rounded p-3 hover:bg-subtle",
      children: [
        o ? /* @__PURE__ */ d(o, { className: "h-6 w-6 text-color-accent" }) : null,
        /* @__PURE__ */ W("span", { className: "flex flex-col", children: [
          /* @__PURE__ */ d("span", { className: "text-sm font-semibold", children: t }),
          /* @__PURE__ */ d("span", { className: "text-xs text-subtitle", children: n })
        ] })
      ]
    }
  ) }) });
}, Qm = Ke("inline-block", {
  variants: {
    variant: {
      body: "text-base font-normal",
      h1: "sm:text-4xl text-3xl leading-tight font-bold text-title",
      h2: "sm:text-3xl text-2xl leading-tight font-bold text-title",
      h3: "sm:text-2xl text-xl leading-tight font-bold text-title",
      h4: "sm:text-xl text-lg leading-tight font-bold text-title",
      h5: "sm:text-lg text-base leading-tight font-bold text-title",
      h6: "text-base leading-tight font-bold text-title",
      subtitle: "font-medium text-subtitle",
      overtitle: "text-base font-medium uppercase tracking-wider text-overtitle",
      label: "text-sm font-medium text-caption",
      main: "text-base font-medium text-color-main",
      accent: "text-base font-medium text-color-accent"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body"
  }
}), Ze = ({
  variant: e,
  element: t = "span",
  align: n,
  text: o,
  highlightWords: r = [],
  className: s
}) => /* @__PURE__ */ d(t, { className: _(Qm({ variant: e, align: n }), s), children: o.split(" ").map((i, l) => r.includes(l) ? /* @__PURE__ */ W("span", { className: "text-color-accent", children: [
  i,
  " "
] }, l) : i + " ") }), hv = ({
  price: e,
  discount: t,
  tax: n,
  currencyCode: o,
  variant: r = "h2",
  originalPriceVariant: s = "h4"
}) => {
  const a = t ?? 0, i = n ?? 0, l = (u) => new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: o ?? "EUR"
  }).format(u);
  return /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
    a > 0 && /* @__PURE__ */ d(
      Ze,
      {
        variant: s,
        className: "text-subtitle line-through",
        text: l(e + a + i)
      }
    ),
    /* @__PURE__ */ d(Ze, { variant: r, text: l(e) })
  ] });
};
var tr = "Radio", [Jm, Fi] = ie(tr), [eh, th] = Jm(tr), $i = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: o,
      checked: r = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: l,
      form: u,
      ...f
    } = e, [p, h] = c.useState(null), g = V(t, (b) => h(b)), v = c.useRef(!1), m = p ? u || !!p.closest("form") : !0;
    return /* @__PURE__ */ W(eh, { scope: n, checked: r, disabled: a, children: [
      /* @__PURE__ */ d(
        I.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": Wi(r),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: g,
          onClick: S(e.onClick, (b) => {
            r || l == null || l(), m && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ d(
        nh,
        {
          control: p,
          bubbles: !v.current,
          name: o,
          value: i,
          checked: r,
          required: s,
          disabled: a,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
$i.displayName = tr;
var Vi = "RadioIndicator", Bi = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e, s = th(Vi, n);
    return /* @__PURE__ */ d(oe, { present: o || s.checked, children: /* @__PURE__ */ d(
      I.span,
      {
        "data-state": Wi(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
Bi.displayName = Vi;
var nh = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Rt(n), i = tn(t);
  return c.useEffect(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (a !== n && p) {
      const h = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(h);
    }
  }, [a, n, o]), /* @__PURE__ */ d(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...r,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Wi(e) {
  return e ? "checked" : "unchecked";
}
var oh = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], nr = "RadioGroup", [rh, gv] = ie(nr, [
  mn,
  Fi
]), Gi = mn(), zi = Fi(), [sh, ah] = rh(nr), Ui = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: o,
      defaultValue: r,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: l,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...h
    } = e, g = Gi(n), v = Nt(u), [m, b] = fe({
      prop: s,
      defaultProp: r,
      onChange: p
    });
    return /* @__PURE__ */ d(
      sh,
      {
        scope: n,
        name: o,
        required: a,
        disabled: i,
        value: m,
        onValueChange: b,
        children: /* @__PURE__ */ d(
          ga,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ d(
              I.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: v,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Ui.displayName = nr;
var Hi = "RadioGroupItem", Ki = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = ah(Hi, n), a = s.disabled || o, i = Gi(n), l = zi(n), u = c.useRef(null), f = V(t, u), p = s.value === r.value, h = c.useRef(!1);
    return c.useEffect(() => {
      const g = (m) => {
        oh.includes(m.key) && (h.current = !0);
      }, v = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ d(
      va,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ d(
          $i,
          {
            disabled: a,
            required: s.required,
            checked: p,
            ...l,
            ...r,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(r.value),
            onKeyDown: S((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: S(r.onFocus, () => {
              var g;
              h.current && ((g = u.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
Ki.displayName = Hi;
var ih = "RadioGroupIndicator", ji = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...o } = e, r = zi(n);
    return /* @__PURE__ */ d(Bi, { ...r, ...o, ref: t });
  }
);
ji.displayName = ih;
var ch = Ui, lh = Ki, uh = ji;
const vv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ch,
  {
    className: _("grid gap-2", e),
    ...t,
    ref: n
  }
)), bv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  lh,
  {
    ref: n,
    className: _(
      "aspect-square h-4 w-4 rounded-full border border-neutral-400 text-neutral-600 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neutral-600 data-[state=checked]:bg-neutral-600",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(uh, { className: "flex items-center justify-center", children: /* @__PURE__ */ d(qr, { className: "h-1.5 w-1.5 fill-base-white text-base-white" }) })
  }
));
function Wr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var dh = [" ", "Enter", "ArrowUp", "ArrowDown"], fh = [" ", "Enter"], At = "Select", [bn, wn, ph] = Pt(At), [ut, wv] = ie(At, [
  ph,
  it
]), yn = it(), [mh, We] = ut(At), [hh, gh] = ut(At), Yi = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: h,
    required: g,
    form: v
  } = e, m = yn(t), [b, w] = c.useState(null), [y, x] = c.useState(null), [C, E] = c.useState(!1), P = Nt(u), [R = !1, M] = fe({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [T, O] = fe({
    prop: a,
    defaultProp: i,
    onChange: l
  }), B = c.useRef(null), A = b ? v || !!b.closest("form") : !0, [G, F] = c.useState(/* @__PURE__ */ new Set()), K = Array.from(G).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ d(fn, { ...m, children: /* @__PURE__ */ W(
    mh,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: E,
      contentId: se(),
      value: T,
      onValueChange: O,
      open: R,
      onOpenChange: M,
      dir: P,
      triggerPointerDownPosRef: B,
      disabled: h,
      children: [
        /* @__PURE__ */ d(bn.Provider, { scope: t, children: /* @__PURE__ */ d(
          hh,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((L) => {
              F((z) => new Set(z).add(L));
            }, []),
            onNativeOptionRemove: c.useCallback((L) => {
              F((z) => {
                const D = new Set(z);
                return D.delete(L), D;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ W(
          yc,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: T,
            onChange: (L) => O(L.target.value),
            disabled: h,
            form: v,
            children: [
              T === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
Yi.displayName = At;
var Xi = "SelectTrigger", qi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = yn(n), a = We(Xi, n), i = a.disabled || o, l = V(t, a.onTriggerChange), u = wn(n), f = c.useRef("touch"), [p, h, g] = xc((m) => {
      const b = u().filter((x) => !x.disabled), w = b.find((x) => x.value === a.value), y = Cc(b, m, w);
      y !== void 0 && a.onValueChange(y.value);
    }), v = (m) => {
      i || (a.onOpenChange(!0), g()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d(ko, { asChild: !0, ...s, children: /* @__PURE__ */ d(
      I.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": wc(a.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: S(r.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && v(m);
        }),
        onPointerDown: S(r.onPointerDown, (m) => {
          f.current = m.pointerType;
          const b = m.target;
          b.hasPointerCapture(m.pointerId) && b.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (v(m), m.preventDefault());
        }),
        onKeyDown: S(r.onKeyDown, (m) => {
          const b = p.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(b && m.key === " ") && dh.includes(m.key) && (v(), m.preventDefault());
        })
      }
    ) });
  }
);
qi.displayName = Xi;
var Zi = "SelectValue", Qi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...i } = e, l = We(Zi, n), { onValueNodeHasChildrenChange: u } = l, f = s !== void 0, p = V(t, l.onValueNodeChange);
    return te(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ d(
      I.span,
      {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: wc(l.value) ? /* @__PURE__ */ d(Le, { children: a }) : s
      }
    );
  }
);
Qi.displayName = Zi;
var vh = "SelectIcon", Ji = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ d(I.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
Ji.displayName = vh;
var bh = "SelectPortal", ec = (e) => /* @__PURE__ */ d(rn, { asChild: !0, ...e });
ec.displayName = bh;
var He = "SelectContent", tc = c.forwardRef(
  (e, t) => {
    const n = We(He, e.__scopeSelect), [o, r] = c.useState();
    if (te(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? Jt.createPortal(
        /* @__PURE__ */ d(nc, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(bn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d(oc, { ...e, ref: t });
  }
);
tc.displayName = He;
var ge = 10, [nc, Ge] = ut(He), wh = "SelectContentImpl", oc = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: b,
      //
      ...w
    } = e, y = We(He, n), [x, C] = c.useState(null), [E, P] = c.useState(null), R = V(t, (k) => C(k)), [M, T] = c.useState(null), [O, B] = c.useState(
      null
    ), A = wn(n), [G, F] = c.useState(!1), K = c.useRef(!1);
    c.useEffect(() => {
      if (x) return vo(x);
    }, [x]), go();
    const L = c.useCallback(
      (k) => {
        const [Y, ...Q] = A().map((q) => q.ref.current), [j] = Q.slice(-1), X = document.activeElement;
        for (const q of k)
          if (q === X || (q == null || q.scrollIntoView({ block: "nearest" }), q === Y && E && (E.scrollTop = 0), q === j && E && (E.scrollTop = E.scrollHeight), q == null || q.focus(), document.activeElement !== X)) return;
      },
      [A, E]
    ), z = c.useCallback(
      () => L([M, x]),
      [L, M, x]
    );
    c.useEffect(() => {
      G && z();
    }, [G, z]);
    const { onOpenChange: D, triggerPointerDownPosRef: N } = y;
    c.useEffect(() => {
      if (x) {
        let k = { x: 0, y: 0 };
        const Y = (j) => {
          var X, q;
          k = {
            x: Math.abs(Math.round(j.pageX) - (((X = N.current) == null ? void 0 : X.x) ?? 0)),
            y: Math.abs(Math.round(j.pageY) - (((q = N.current) == null ? void 0 : q.y) ?? 0))
          };
        }, Q = (j) => {
          k.x <= 10 && k.y <= 10 ? j.preventDefault() : x.contains(j.target) || D(!1), document.removeEventListener("pointermove", Y), N.current = null;
        };
        return N.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [x, D, N]), c.useEffect(() => {
      const k = () => D(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [D]);
    const [U, H] = xc((k) => {
      const Y = A().filter((X) => !X.disabled), Q = Y.find((X) => X.ref.current === document.activeElement), j = Cc(Y, k, Q);
      j && setTimeout(() => j.ref.current.focus());
    }), ae = c.useCallback(
      (k, Y, Q) => {
        const j = !K.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && (T(k), j && (K.current = !0));
      },
      [y.value]
    ), Pe = c.useCallback(() => x == null ? void 0 : x.focus(), [x]), pe = c.useCallback(
      (k, Y, Q) => {
        const j = !K.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && B(k);
      },
      [y.value]
    ), Ne = o === "popper" ? eo : rc, ce = Ne === eo ? {
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d(
      nc,
      {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: ae,
        selectedItem: M,
        onItemLeave: Pe,
        itemTextRefCallback: pe,
        focusSelectedItem: z,
        selectedItemText: O,
        position: o,
        isPositioned: G,
        searchRef: U,
        children: /* @__PURE__ */ d(an, { as: Te, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          on,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: S(r, (k) => {
              var Y;
              (Y = y.trigger) == null || Y.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              St,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  Ne,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...w,
                    ...ce,
                    onPlaced: () => F(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: S(w.onKeyDown, (k) => {
                      const Y = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !Y && k.key.length === 1 && H(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let j = A().filter((X) => !X.disabled).map((X) => X.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (j = j.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const X = k.target, q = j.indexOf(X);
                          j = j.slice(q + 1);
                        }
                        setTimeout(() => L(j)), k.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
oc.displayName = wh;
var yh = "SelectItemAlignedPosition", rc = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = We(He, n), a = Ge(He, n), [i, l] = c.useState(null), [u, f] = c.useState(null), p = V(t, (R) => f(R)), h = wn(n), g = c.useRef(!1), v = c.useRef(!0), { viewport: m, selectedItem: b, selectedItemText: w, focusSelectedItem: y } = a, x = c.useCallback(() => {
    if (s.trigger && s.valueNode && i && u && m && b && w) {
      const R = s.trigger.getBoundingClientRect(), M = u.getBoundingClientRect(), T = s.valueNode.getBoundingClientRect(), O = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const X = O.left - M.left, q = T.left - X, le = R.left - q, ye = R.width + le, dt = Math.max(ye, M.width), ft = window.innerWidth - ge, pt = Wr(q, [
          ge,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ge, ft - dt)
        ]);
        i.style.minWidth = ye + "px", i.style.left = pt + "px";
      } else {
        const X = M.right - O.right, q = window.innerWidth - T.right - X, le = window.innerWidth - R.right - q, ye = R.width + le, dt = Math.max(ye, M.width), ft = window.innerWidth - ge, pt = Wr(q, [
          ge,
          Math.max(ge, ft - dt)
        ]);
        i.style.minWidth = ye + "px", i.style.right = pt + "px";
      }
      const B = h(), A = window.innerHeight - ge * 2, G = m.scrollHeight, F = window.getComputedStyle(u), K = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), z = parseInt(F.borderBottomWidth, 10), D = parseInt(F.paddingBottom, 10), N = K + L + G + D + z, U = Math.min(b.offsetHeight * 5, N), H = window.getComputedStyle(m), ae = parseInt(H.paddingTop, 10), Pe = parseInt(H.paddingBottom, 10), pe = R.top + R.height / 2 - ge, Ne = A - pe, ce = b.offsetHeight / 2, k = b.offsetTop + ce, Y = K + L + k, Q = N - Y;
      if (Y <= pe) {
        const X = B.length > 0 && b === B[B.length - 1].ref.current;
        i.style.bottom = "0px";
        const q = u.clientHeight - m.offsetTop - m.offsetHeight, le = Math.max(
          Ne,
          ce + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? Pe : 0) + q + z
        ), ye = Y + le;
        i.style.height = ye + "px";
      } else {
        const X = B.length > 0 && b === B[0].ref.current;
        i.style.top = "0px";
        const le = Math.max(
          pe,
          K + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? ae : 0) + ce
        ) + Q;
        i.style.height = le + "px", m.scrollTop = Y - pe + m.offsetTop;
      }
      i.style.margin = `${ge}px 0`, i.style.minHeight = U + "px", i.style.maxHeight = A + "px", o == null || o(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    u,
    m,
    b,
    w,
    s.dir,
    o
  ]);
  te(() => x(), [x]);
  const [C, E] = c.useState();
  te(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = c.useCallback(
    (R) => {
      R && v.current === !0 && (x(), y == null || y(), v.current = !1);
    },
    [x, y]
  );
  return /* @__PURE__ */ d(
    Ch,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ d(
            I.div,
            {
              ...r,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
rc.displayName = yh;
var xh = "SelectPopperPosition", eo = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = ge,
    ...s
  } = e, a = yn(n);
  return /* @__PURE__ */ d(
    Lo,
    {
      ...a,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
eo.displayName = xh;
var [Ch, or] = ut(He, {}), to = "SelectViewport", sc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Ge(to, n), a = or(to, n), i = V(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ W(Le, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d(bn.Slot, { scope: n, children: /* @__PURE__ */ d(
        I.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: S(r.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && p) {
              const g = Math.abs(l.current - f.scrollTop);
              if (g > 0) {
                const v = window.innerHeight - ge * 2, m = parseFloat(p.style.minHeight), b = parseFloat(p.style.height), w = Math.max(m, b);
                if (w < v) {
                  const y = w + g, x = Math.min(v, y), C = y - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
sc.displayName = to;
var ac = "SelectGroup", [Eh, Rh] = ut(ac), ic = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = se();
    return /* @__PURE__ */ d(Eh, { scope: n, id: r, children: /* @__PURE__ */ d(I.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
ic.displayName = ac;
var cc = "SelectLabel", lc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Rh(cc, n);
    return /* @__PURE__ */ d(I.div, { id: r.id, ...o, ref: t });
  }
);
lc.displayName = cc;
var Qt = "SelectItem", [Sh, uc] = ut(Qt), dc = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, i = We(Qt, n), l = Ge(Qt, n), u = i.value === o, [f, p] = c.useState(s ?? ""), [h, g] = c.useState(!1), v = V(
      t,
      (y) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, y, o, r);
      }
    ), m = se(), b = c.useRef("touch"), w = () => {
      r || (i.onValueChange(o), i.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      Sh,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: m,
        isSelected: u,
        onItemTextChange: c.useCallback((y) => {
          p((x) => x || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          bn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: f,
            children: /* @__PURE__ */ d(
              I.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: S(a.onFocus, () => g(!0)),
                onBlur: S(a.onBlur, () => g(!1)),
                onClick: S(a.onClick, () => {
                  b.current !== "mouse" && w();
                }),
                onPointerUp: S(a.onPointerUp, () => {
                  b.current === "mouse" && w();
                }),
                onPointerDown: S(a.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: S(a.onPointerMove, (y) => {
                  var x;
                  b.current = y.pointerType, r ? (x = l.onItemLeave) == null || x.call(l) : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: S(a.onPointerLeave, (y) => {
                  var x;
                  y.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: S(a.onKeyDown, (y) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (fh.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
dc.displayName = Qt;
var vt = "SelectItemText", fc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = We(vt, n), i = Ge(vt, n), l = uc(vt, n), u = gh(vt, n), [f, p] = c.useState(null), h = V(
      t,
      (w) => p(w),
      l.onItemTextChange,
      (w) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, w, l.value, l.disabled);
      }
    ), g = f == null ? void 0 : f.textContent, v = c.useMemo(
      () => /* @__PURE__ */ d("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = u;
    return te(() => (m(v), () => b(v)), [m, b, v]), /* @__PURE__ */ W(Le, { children: [
      /* @__PURE__ */ d(I.span, { id: l.textId, ...s, ref: h }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Jt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
fc.displayName = vt;
var pc = "SelectItemIndicator", mc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return uc(pc, n).isSelected ? /* @__PURE__ */ d(I.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
mc.displayName = pc;
var no = "SelectScrollUpButton", hc = c.forwardRef((e, t) => {
  const n = Ge(no, e.__scopeSelect), o = or(no, e.__scopeSelect), [r, s] = c.useState(!1), a = V(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ d(
    vc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
hc.displayName = no;
var oo = "SelectScrollDownButton", gc = c.forwardRef((e, t) => {
  const n = Ge(oo, e.__scopeSelect), o = or(oo, e.__scopeSelect), [r, s] = c.useState(!1), a = V(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        s(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ d(
    vc,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
gc.displayName = oo;
var vc = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Ge("SelectScrollButton", n), a = c.useRef(null), i = wn(n), l = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), te(() => {
    var f;
    const u = i().find((p) => p.ref.current === document.activeElement);
    (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d(
    I.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: S(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: S(r.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: S(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), Ph = "SelectSeparator", bc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ d(I.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
bc.displayName = Ph;
var ro = "SelectArrow", Nh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = yn(n), s = We(ro, n), a = Ge(ro, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d(Fo, { ...r, ...o, ref: t }) : null;
  }
);
Nh.displayName = ro;
function wc(e) {
  return e === "" || e === void 0;
}
var yc = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = c.useRef(null), s = V(t, r), a = Rt(n);
    return c.useEffect(() => {
      const i = r.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== n && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(i, n), i.dispatchEvent(p);
      }
    }, [a, n]), /* @__PURE__ */ d(Yo, { asChild: !0, children: /* @__PURE__ */ d("select", { ...o, ref: s, defaultValue: n }) });
  }
);
yc.displayName = "BubbleSelect";
function xc(e) {
  const t = ee(e), n = c.useRef(""), o = c.useRef(0), r = c.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function l(u) {
        n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }(i);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function Cc(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Mh(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Mh(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Th = Yi, _h = qi, Ih = Qi, Ah = Ji, Oh = ec, Dh = tc, kh = sc, Lh = ic, Fh = lc, $h = dc, Vh = fc, Bh = mc, Wh = hc, Gh = gc, zh = bc;
const yv = Th, xv = Lh, Cv = Ih, Ev = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ W(
  _h,
  {
    className: _(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(Ah, { asChild: !0, children: /* @__PURE__ */ d(en, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
), Uh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  Wh,
  {
    className: _(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(Kc, { className: "h-4 w-4" })
  }
), Hh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  Gh,
  {
    className: _(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(en, { className: "h-4 w-4" })
  }
), Rv = ({
  className: e,
  children: t,
  position: n = "popper",
  ...o
}) => /* @__PURE__ */ d(Oh, { children: /* @__PURE__ */ W(
  Dh,
  {
    className: _(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ d(Uh, {}),
      /* @__PURE__ */ d(
        kh,
        {
          className: _(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(Hh, {})
    ]
  }
) }), Sv = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Fh,
  {
    className: _("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
), Pv = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ W(
  $h,
  {
    className: _(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-500",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(Bh, { children: /* @__PURE__ */ d(co, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d(Vh, { children: t })
    ]
  }
), Nv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  zh,
  {
    className: _("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
), Mv = Ws, Tv = Gs, _v = cn, Kh = zs, jh = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Co,
  {
    className: _(
      "bg-black/80 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
), Yh = Ke(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition border-default ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Iv = ({
  side: e = "right",
  className: t,
  children: n,
  ...o
}) => /* @__PURE__ */ W(Kh, { children: [
  /* @__PURE__ */ d(jh, {}),
  /* @__PURE__ */ W(
    Eo,
    {
      className: _(Yh({ side: e }), t),
      ...o,
      children: [
        /* @__PURE__ */ d(Dl, { className: "absolute right-4 top-4", variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ W(cn, { children: [
          /* @__PURE__ */ d(Zr, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] }) }),
        n
      ]
    }
  )
] }), Av = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "div",
  {
    className: _(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
), Ov = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "div",
  {
    className: _(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
), Dv = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Ro,
  {
    className: _("text-lg font-semibold text-foreground", e),
    ...t
  }
), kv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  So,
  {
    className: _("text-sm text-muted-foreground", e),
    ...t
  }
);
function Lv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: _("animate-pulse rounded-md bg-neutral-200", e),
      ...t
    }
  );
}
var rr = "Switch", [Xh, Fv] = ie(rr), [qh, Zh] = Xh(rr), Ec = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [h, g] = c.useState(null), v = V(t, (x) => g(x)), m = c.useRef(!1), b = h ? f || !!h.closest("form") : !0, [w = !1, y] = fe({
      prop: r,
      defaultProp: s,
      onChange: u
    });
    return /* @__PURE__ */ W(qh, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ d(
        I.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": Pc(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...p,
          ref: v,
          onClick: S(e.onClick, (x) => {
            y((C) => !C), b && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        Qh,
        {
          control: h,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: w,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ec.displayName = rr;
var Rc = "SwitchThumb", Sc = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = Zh(Rc, n);
    return /* @__PURE__ */ d(
      I.span,
      {
        "data-state": Pc(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Sc.displayName = Rc;
var Qh = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Rt(n), i = tn(t);
  return c.useEffect(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (a !== n && p) {
      const h = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(h);
    }
  }, [a, n, o]), /* @__PURE__ */ d(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...r,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Pc(e) {
  return e ? "checked" : "unchecked";
}
var Jh = Ec, eg = Sc;
const tg = Ke(
  "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-default shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
  {
    variants: {
      variant: {
        primary: "data-[state=checked]:bg-fill-main data-[state=checked]:border-primary",
        accent: "data-[state=checked]:bg-fill-accent data-[state=checked]:border-accent"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
), $v = ({ className: e, variant: t, ...n }) => /* @__PURE__ */ d(
  Jh,
  {
    className: _(tg({ variant: t }), e),
    ...n,
    children: /* @__PURE__ */ d(
      eg,
      {
        className: _(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
), Vv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ d(
  "table",
  {
    ref: n,
    className: _("w-full caption-bottom text-sm", e),
    ...t
  }
) })), Bv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: _("[&_tr]:border-b", e), ...t })), Wv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tbody",
  {
    ref: n,
    className: _("[&_tr:last-child]:border-0", e),
    ...t
  }
)), Gv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tfoot",
  {
    ref: n,
    className: _(
      "bg-muted/50 border-t border-default font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
)), zv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tr",
  {
    ref: n,
    className: _(
      "border-b border-default transition-colors hover:bg-subtle data-[state=selected]:bg-subtle",
      e
    ),
    ...t
  }
)), Uv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "th",
  {
    ref: n,
    className: _(
      "h-12 px-4 text-left align-middle font-bold text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
)), Hv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "td",
  {
    ref: n,
    className: _("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
)), Kv = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "caption",
  {
    ref: n,
    className: _("mt-4 text-sm text-subtitle", e),
    ...t
  }
)), jv = ({
  imageSrc: e,
  name: t,
  tagline: n,
  link: o,
  text: r,
  className: s
}) => {
  const { LinkElement: a, ImageElement: i } = nn();
  return /* @__PURE__ */ W(
    "div",
    {
      className: _(
        "flex w-80 flex-col gap-4 rounded border border-default bg-surface p-6 shadow-md",
        s
      ),
      children: [
        /* @__PURE__ */ W("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ d("div", { className: "relative h-12 w-12 overflow-hidden rounded-full", children: /* @__PURE__ */ d(
            i,
            {
              src: e,
              width: 48,
              height: 48,
              alt: `${t}'s testimonial`,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ W("div", { className: "flex flex-col items-start gap-0", children: [
            /* @__PURE__ */ d(Ze, { element: "h4", variant: "h5", text: t }),
            n && o && /* @__PURE__ */ d(a, { href: o, children: /* @__PURE__ */ d(Ze, { element: "p", variant: "subtitle", text: n }) }),
            n && !o && /* @__PURE__ */ d(Ze, { element: "p", variant: "subtitle", text: n })
          ] })
        ] }),
        /* @__PURE__ */ d(Ze, { element: "p", variant: "body", text: r })
      ]
    }
  );
};
var ng = "DismissableLayer", so = "dismissableLayer.update", og = "dismissableLayer.pointerDownOutside", rg = "dismissableLayer.focusOutside", Gr, Nc = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mc = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, u = c.useContext(Nc), [f, p] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), v = V(t, (R) => p(R)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(b), y = f ? m.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= w, E = ig((R) => {
      const M = R.target, T = [...u.branches].some((O) => O.contains(M));
      !C || T || (r == null || r(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, h), P = cg((R) => {
      const M = R.target;
      [...u.branches].some((O) => O.contains(M)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, h);
    return ps((R) => {
      y === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Gr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), zr(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Gr);
        };
    }, [f, h, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), zr());
    }, [f, u]), c.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(so, R), () => document.removeEventListener(so, R);
    }, []), /* @__PURE__ */ d(
      I.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: S(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: S(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: S(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Mc.displayName = ng;
var sg = "DismissableLayerBranch", ag = c.forwardRef((e, t) => {
  const n = c.useContext(Nc), o = c.useRef(null), r = V(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d(I.div, { ...e, ref: r });
});
ag.displayName = sg;
function ig(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let l = function() {
          Tc(
            og,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function cg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && Tc(rg, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function zr() {
  const e = new CustomEvent(so);
  document.dispatchEvent(e);
}
function Tc(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? bt(r, s) : r.dispatchEvent(s);
}
var [xn, Yv] = ie("Tooltip", [
  it
]), Cn = it(), _c = "TooltipProvider", lg = 700, ao = "tooltip.open", [ug, sr] = xn(_c), Ic = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = lg,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, [a, i] = c.useState(!0), l = c.useRef(!1), u = c.useRef(0);
  return c.useEffect(() => {
    const f = u.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ d(
    ug,
    {
      scope: t,
      isOpenDelayed: a,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(u.current), i(!1);
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => i(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: c.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
Ic.displayName = _c;
var En = "Tooltip", [dg, Rn] = xn(En), Ac = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r = !1,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, l = sr(En, e.__scopeTooltip), u = Cn(t), [f, p] = c.useState(null), h = se(), g = c.useRef(0), v = a ?? l.disableHoverableContent, m = i ?? l.delayDuration, b = c.useRef(!1), [w = !1, y] = fe({
    prop: o,
    defaultProp: r,
    onChange: (R) => {
      R ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ao))) : l.onClose(), s == null || s(R);
    }
  }), x = c.useMemo(() => w ? b.current ? "delayed-open" : "instant-open" : "closed", [w]), C = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b.current = !1, y(!0);
  }, [y]), E = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y(!1);
  }, [y]), P = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      b.current = !0, y(!0), g.current = 0;
    }, m);
  }, [m, y]);
  return c.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ d(fn, { ...u, children: /* @__PURE__ */ d(
    dg,
    {
      scope: t,
      contentId: h,
      open: w,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayed ? P() : C();
      }, [l.isOpenDelayed, P, C]),
      onTriggerLeave: c.useCallback(() => {
        v ? E() : (window.clearTimeout(g.current), g.current = 0);
      }, [E, v]),
      onOpen: C,
      onClose: E,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
Ac.displayName = En;
var io = "TooltipTrigger", Oc = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Rn(io, n), s = sr(io, n), a = Cn(n), i = c.useRef(null), l = V(t, i, r.onTriggerChange), u = c.useRef(!1), f = c.useRef(!1), p = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d(ko, { asChild: !0, ...a, children: /* @__PURE__ */ d(
      I.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: l,
        onPointerMove: S(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: S(e.onPointerLeave, () => {
          r.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: S(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: S(e.onFocus, () => {
          u.current || r.onOpen();
        }),
        onBlur: S(e.onBlur, r.onClose),
        onClick: S(e.onClick, r.onClose)
      }
    ) });
  }
);
Oc.displayName = io;
var fg = "TooltipPortal", [Xv, pg] = xn(fg, {
  forceMount: void 0
}), ot = "TooltipContent", Dc = c.forwardRef(
  (e, t) => {
    const n = pg(ot, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = Rn(ot, e.__scopeTooltip);
    return /* @__PURE__ */ d(oe, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d(kc, { side: r, ...s, ref: t }) : /* @__PURE__ */ d(mg, { side: r, ...s, ref: t }) });
  }
), mg = c.forwardRef((e, t) => {
  const n = Rn(ot, e.__scopeTooltip), o = sr(ot, e.__scopeTooltip), r = c.useRef(null), s = V(t, r), [a, i] = c.useState(null), { trigger: l, onClose: u } = n, f = r.current, { onPointerInTransitChange: p } = o, h = c.useCallback(() => {
    i(null), p(!1);
  }, [p]), g = c.useCallback(
    (v, m) => {
      const b = v.currentTarget, w = { x: v.clientX, y: v.clientY }, y = bg(w, b.getBoundingClientRect()), x = wg(w, y), C = yg(m.getBoundingClientRect()), E = Cg([...x, ...C]);
      i(E), p(!0);
    },
    [p]
  );
  return c.useEffect(() => () => h(), [h]), c.useEffect(() => {
    if (l && f) {
      const v = (b) => g(b, f), m = (b) => g(b, l);
      return l.addEventListener("pointerleave", v), f.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", m);
      };
    }
  }, [l, f, g, h]), c.useEffect(() => {
    if (a) {
      const v = (m) => {
        const b = m.target, w = { x: m.clientX, y: m.clientY }, y = (l == null ? void 0 : l.contains(b)) || (f == null ? void 0 : f.contains(b)), x = !xg(w, a);
        y ? h() : x && (h(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, f, a, u, h]), /* @__PURE__ */ d(kc, { ...e, ref: s });
}), [hg, gg] = xn(En, { isInside: !1 }), kc = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, l = Rn(ot, n), u = Cn(n), { onClose: f } = l;
    return c.useEffect(() => (document.addEventListener(ao, f), () => document.removeEventListener(ao, f)), [f]), c.useEffect(() => {
      if (l.trigger) {
        const p = (h) => {
          const g = h.target;
          g != null && g.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ d(
      Mc,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ W(
          Lo,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d(os, { children: o }),
              /* @__PURE__ */ d(hg, { scope: n, isInside: !0, children: /* @__PURE__ */ d(gi, { id: l.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
Dc.displayName = ot;
var Lc = "TooltipArrow", vg = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Cn(n);
    return gg(
      Lc,
      n
    ).isInside ? null : /* @__PURE__ */ d(Fo, { ...r, ...o, ref: t });
  }
);
vg.displayName = Lc;
function bg(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function wg(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function yg(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function xg(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, l = t[s].y, u = t[a].x, f = t[a].y;
    l > o != f > o && n < (u - i) * (o - l) / (f - l) + i && (r = !r);
  }
  return r;
}
function Cg(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Eg(t);
}
function Eg(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Rg = Ic, Sg = Ac, Pg = Oc, Fc = Dc;
const qv = Rg, Zv = Sg, Qv = Pg, Ng = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ d(
  Fc,
  {
    ref: o,
    sideOffset: t,
    className: _(
      "z-50 overflow-hidden rounded-md bg-base-black px-3 py-1.5 text-sm text-neutral-100 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Ng.displayName = Fc.displayName;
export {
  Ig as Alert,
  Dl as Button,
  Og as Checkbox,
  kg as ClickableLogo,
  Fg as Collapsible,
  Vg as CollapsibleContent,
  $g as CollapsibleTrigger,
  Dg as DesignSystemProvider,
  Gg as Dialog,
  Ug as DialogClose,
  dd as DialogContent,
  hd as DialogDescription,
  pd as DialogFooter,
  fd as DialogHeader,
  Us as DialogOverlay,
  ud as DialogPortal,
  md as DialogTitle,
  zg as DialogTrigger,
  Hg as Divider,
  jg as DropdownMenu,
  ov as DropdownMenuCheckboxItem,
  tv as DropdownMenuContent,
  Xg as DropdownMenuGroup,
  nv as DropdownMenuItem,
  sv as DropdownMenuLabel,
  qg as DropdownMenuPortal,
  Qg as DropdownMenuRadioGroup,
  rv as DropdownMenuRadioItem,
  av as DropdownMenuSeparator,
  iv as DropdownMenuShortcut,
  Zg as DropdownMenuSub,
  ev as DropdownMenuSubContent,
  Jg as DropdownMenuSubTrigger,
  Yg as DropdownMenuTrigger,
  cv as Form,
  Nm as FormControl,
  Mm as FormDescription,
  lv as FormField,
  Sm as FormItem,
  Pm as FormLabel,
  Tm as FormMessage,
  uv as Input,
  Rm as Label,
  fv as NavMenu,
  pv as NavMenuItem,
  mv as NavSubMenuItem,
  hv as PriceView,
  vv as RadioGroup,
  bv as RadioGroupItem,
  yv as Select,
  Rv as SelectContent,
  xv as SelectGroup,
  Pv as SelectItem,
  Sv as SelectLabel,
  Hh as SelectScrollDownButton,
  Uh as SelectScrollUpButton,
  Nv as SelectSeparator,
  Ev as SelectTrigger,
  Cv as SelectValue,
  Mv as Sheet,
  _v as SheetClose,
  Iv as SheetContent,
  kv as SheetDescription,
  Ov as SheetFooter,
  Av as SheetHeader,
  jh as SheetOverlay,
  Kh as SheetPortal,
  Dv as SheetTitle,
  Tv as SheetTrigger,
  Lv as Skeleton,
  $v as Switch,
  Vv as Table,
  Wv as TableBody,
  Kv as TableCaption,
  Hv as TableCell,
  Gv as TableFooter,
  Uv as TableHead,
  Bv as TableHeader,
  zv as TableRow,
  jv as Testimonial,
  Zv as Tooltip,
  Ng as TooltipContent,
  qv as TooltipProvider,
  Qv as TooltipTrigger,
  Ze as Typography,
  vn as useFormField
};
