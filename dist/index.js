"use client";
import { jsxs as z, jsx as d, Fragment as Le } from "react/jsx-runtime";
import * as c from "react";
import Z, { forwardRef as Rr, createElement as _n, createContext as sc, useState as Er, useContext as ic, useLayoutEffect as ac, useEffect as cc } from "react";
import * as Zt from "react-dom";
import Mr from "react-dom";
function Nr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Nr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Pr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Nr(e)) && (o && (o += " "), o += t);
  return o;
}
const Wo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Go = Pr, He = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Go(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, i = Object.keys(r).map((u) => {
    const f = n == null ? void 0 : n[u], p = s == null ? void 0 : s[u];
    if (f === null) return null;
    const h = Wo(f) || Wo(p);
    return r[u][h];
  }), a = n && Object.entries(n).reduce((u, f) => {
    let [p, h] = f;
    return h === void 0 || (u[p] = h), u;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((u, f) => {
    let { class: p, className: h, ...g } = f;
    return Object.entries(g).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === b;
    }) ? [
      ...u,
      p,
      h
    ] : u;
  }, []);
  return Go(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ir = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uc = {
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
const dc = Rr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => _n(
    "svg",
    {
      ref: l,
      ...uc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Ir("lucide", r),
      ...a
    },
    [
      ...i.map(([u, f]) => _n(u, f)),
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
  const n = Rr(
    ({ className: o, ...r }, s) => _n(dc, {
      ref: s,
      iconNode: t,
      className: Ir(`lucide-${lc(e)}`, o),
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
const qn = Re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = Re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = Re("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = Re("CircleAlert", [
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
const hc = Re("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = Re("CircleX", [
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
const _r = Re("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = Re("Info", [
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
const vc = Re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Zn = "-", bc = (e) => {
  const t = yc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Zn);
      return a[0] === "" && a.length !== 1 && a.shift(), Ar(a, t) || wc(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && o[i] ? [...l, ...o[i]] : l;
    }
  };
}, Ar = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Ar(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Zn);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Ko = /^\[(.+)\]$/, wc = (e) => {
  if (Ko.test(e)) {
    const t = Ko.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, yc = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Cc(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    An(i, o, s, t);
  }), o;
}, An = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Uo(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (xc(r)) {
        An(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, i]) => {
      An(i, Uo(t, s), n, o);
    });
  });
}, Uo = (e, t) => {
  let n = e;
  return t.split(Zn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, xc = (e) => e.isThemeGetter, Cc = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, r];
}) : e, Sc = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return r(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : r(s, i);
    }
  };
}, Tr = "!", Rc = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, f = 0, p;
    for (let b = 0; b < a.length; b++) {
      let w = a[b];
      if (u === 0) {
        if (w === r && (o || a.slice(b, b + s) === t)) {
          l.push(a.slice(f, b)), f = b + s;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? u++ : w === "]" && u--;
    }
    const h = l.length === 0 ? a : a.substring(f), g = h.startsWith(Tr), v = g ? h.substring(1) : h, m = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, Ec = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Mc = (e) => ({
  cache: Sc(e.cacheSize),
  parseClassName: Rc(e),
  ...bc(e)
}), Nc = /\s+/, Pc = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], i = e.trim().split(Nc);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = n(u);
    let v = !!g, m = o(v ? h.substring(0, g) : h);
    if (!m) {
      if (!v) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = o(h), !m) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      v = !1;
    }
    const b = Ec(f).join(":"), w = p ? b + Tr : b, y = w + m;
    if (s.includes(y))
      continue;
    s.push(y);
    const x = r(m, v);
    for (let C = 0; C < x.length; ++C) {
      const S = x[C];
      s.push(w + S);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Ic() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = kr(t)) && (o && (o += " "), o += n);
  return o;
}
const kr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = kr(e[o])) && (n && (n += " "), n += t);
  return n;
};
function _c(e, ...t) {
  let n, o, r, s = i;
  function i(l) {
    const u = t.reduce((f, p) => p(f), e());
    return n = Mc(u), o = n.cache.get, r = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = o(l);
    if (u)
      return u;
    const f = Pc(l, n);
    return r(l, f), f;
  }
  return function() {
    return s(Ic.apply(null, arguments));
  };
}
const J = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Or = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ac = /^\d+\/\d+$/, Tc = /* @__PURE__ */ new Set(["px", "full", "screen"]), kc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Oc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Lc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pe = (e) => Qe(e) || Tc.has(e) || Ac.test(e), Te = (e) => ot(e, "length", Uc), Qe = (e) => !!e && !Number.isNaN(Number(e)), bn = (e) => ot(e, "number", Qe), ft = (e) => !!e && Number.isInteger(Number(e)), $c = (e) => e.endsWith("%") && Qe(e.slice(0, -1)), $ = (e) => Or.test(e), ke = (e) => kc.test(e), Vc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Bc = (e) => ot(e, Vc, Dr), Wc = (e) => ot(e, "position", Dr), Gc = /* @__PURE__ */ new Set(["image", "url"]), zc = (e) => ot(e, Gc, jc), Kc = (e) => ot(e, "", Hc), pt = () => !0, ot = (e, t, n) => {
  const o = Or.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Uc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Oc.test(e) && !Dc.test(e)
), Dr = () => !1, Hc = (e) => Lc.test(e), jc = (e) => Fc.test(e), Yc = () => {
  const e = J("colors"), t = J("spacing"), n = J("blur"), o = J("brightness"), r = J("borderColor"), s = J("borderRadius"), i = J("borderSpacing"), a = J("borderWidth"), l = J("contrast"), u = J("grayscale"), f = J("hueRotate"), p = J("invert"), h = J("gap"), g = J("gradientColorStops"), v = J("gradientColorStopPositions"), m = J("inset"), b = J("margin"), w = J("opacity"), y = J("padding"), x = J("saturate"), C = J("scale"), S = J("sepia"), M = J("skew"), R = J("space"), P = J("translate"), I = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", $, t], _ = () => [$, t], W = () => ["", Pe, Te], F = () => ["auto", Qe, $], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", $], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Qe, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pt],
      spacing: [Pe, Te],
      blur: ["none", "", ke, $],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ke, $],
      borderSpacing: _(),
      borderWidth: W(),
      contrast: U(),
      grayscale: N(),
      hueRotate: U(),
      invert: N(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$c, Te],
      inset: V(),
      margin: V(),
      opacity: U(),
      padding: _(),
      saturate: U(),
      scale: U(),
      sepia: N(),
      skew: U(),
      space: _(),
      translate: _()
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
        columns: [ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
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
        object: [...H(), $]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        z: ["auto", ft, $]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        order: ["first", "last", "none", ft, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [pt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ft, $]
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
        "grid-rows": [pt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ft, $]
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
        justify: ["normal", ...T()]
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
        content: ["normal", ...T(), "baseline"]
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
        "place-content": [...T(), "baseline"]
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
          screen: [ke]
        }, ke]
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
        text: ["base", ke, Te]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pt]
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
        "line-clamp": ["none", Qe, bn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pe, $]
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
        decoration: ["auto", "from-font", Pe, Te]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Pe, $]
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
        indent: _()
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
        bg: [...H(), Wc]
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
        bg: ["auto", "cover", "contain", Bc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, zc]
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
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
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
        "divide-x": [a]
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
        "divide-y": [a]
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
        "outline-offset": [Pe, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pe, Te]
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
        ring: W()
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
        "ring-offset": [Pe, Te]
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
        shadow: ["", "inner", "none", ke, Kc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [pt]
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
        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "drop-shadow": ["", "none", ke, $]
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
        sepia: [S]
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
        "backdrop-sepia": [S]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        duration: U()
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
        delay: U()
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
        rotate: [ft, $]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        stroke: [Pe, Te, bn]
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
}, Xc = /* @__PURE__ */ _c(Yc);
function k(...e) {
  return Xc(Pr(e));
}
const qc = He("w-full rounded-sm p-4 text-sm flex gap-4", {
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
}), Zc = {
  default: zo,
  info: zo,
  success: hc,
  warning: mc,
  error: gc
}, Ah = ({
  className: e,
  variant: t = "default",
  title: n,
  children: o,
  ...r
}) => {
  const s = Zc[t || "default"];
  return /* @__PURE__ */ z(
    "div",
    {
      role: "alert",
      className: k(qc({ variant: t }), e),
      ...r,
      children: [
        /* @__PURE__ */ d(s, { className: "h-5 w-5" }),
        /* @__PURE__ */ z("div", { className: "flex flex-col gap-1", children: [
          n && /* @__PURE__ */ d("h5", { className: "font-bold leading-none", children: n }),
          o
        ] })
      ]
    }
  );
};
function Ho(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function yt(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Ho(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Ho(e[r], null);
        }
      };
  };
}
function B(...e) {
  return c.useCallback(yt(...e), e);
}
var Ie = c.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = c.Children.toArray(n), s = r.find(Jc);
  if (s) {
    const i = s.props.children, a = r.map((l) => l === s ? c.Children.count(i) > 1 ? c.Children.only(null) : c.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ d(Tn, { ...o, ref: t, children: c.isValidElement(i) ? c.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ d(Tn, { ...o, ref: t, children: n });
});
Ie.displayName = "Slot";
var Tn = c.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (c.isValidElement(n)) {
    const r = tl(n);
    return c.cloneElement(n, {
      ...el(o, n.props),
      // @ts-ignore
      ref: t ? yt(t, r) : r
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Tn.displayName = "SlotClone";
var Qc = ({ children: e }) => /* @__PURE__ */ d(Le, { children: e });
function Jc(e) {
  return c.isValidElement(e) && e.type === Qc;
}
function el(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      s(...a), r(...a);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function tl(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const nl = He(
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
), ol = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, s) => /* @__PURE__ */ d(
    o ? Ie : "button",
    {
      className: k(nl({ variant: t, size: n, className: e })),
      ref: s,
      ...r
    }
  )
);
function rl(e, t) {
  const n = c.createContext(t), o = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ d(n.Provider, { value: l, children: i });
  };
  o.displayName = e + "Provider";
  function r(s) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function de(e, t = []) {
  let n = [];
  function o(s, i) {
    const a = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (p) => {
      var w;
      const { scope: h, children: g, ...v } = p, m = ((w = h == null ? void 0 : h[e]) == null ? void 0 : w[l]) || a, b = c.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ d(m.Provider, { value: b, children: g });
    };
    u.displayName = s + "Provider";
    function f(p, h) {
      var m;
      const g = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a, v = c.useContext(g);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const r = () => {
    const s = n.map((i) => c.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return r.scopeName = e, [o, sl(r, ...t)];
}
function sl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const i = o.reduce((a, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function E(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
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
function me({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, r] = il({ defaultProp: t, onChange: n }), s = e !== void 0, i = s ? e : o, a = ee(n), l = c.useCallback(
    (u) => {
      if (s) {
        const p = typeof u == "function" ? u(e) : u;
        p !== e && a(p);
      } else
        r(u);
    },
    [s, e, r, a]
  );
  return [i, l];
}
function il({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [o] = n, r = c.useRef(o), s = ee(t);
  return c.useEffect(() => {
    r.current !== o && (s(o), r.current = o);
  }, [o, r, s]), n;
}
function xt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var te = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
};
function Jt(e) {
  const [t, n] = c.useState(void 0);
  return te(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function al(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var re = (e) => {
  const { present: t, children: n } = e, o = cl(t), r = typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n), s = B(o.ref, ll(r));
  return typeof n == "function" || o.isPresent ? c.cloneElement(r, { ref: s }) : null;
};
re.displayName = "Presence";
function cl(e) {
  const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = al(i, {
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
    const u = At(o.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), te(() => {
    const u = o.current, f = r.current;
    if (f !== e) {
      const h = s.current, g = At(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), te(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (g) => {
        const m = At(o.current).includes(g.animationName);
        if (g.target === t && m && (l("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (g) => {
        g.target === t && (s.current = At(o.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      u && (o.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function At(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ll(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ul = [
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
], A = ul.reduce((e, t) => {
  const n = c.forwardRef((o, r) => {
    const { asChild: s, ...i } = o, a = s ? Ie : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(a, { ...i, ref: r });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Wt(e, t) {
  e && Zt.flushSync(() => e.dispatchEvent(t));
}
var Qn = "Checkbox", [dl, Th] = de(Qn), [fl, pl] = dl(Qn), Lr = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [h, g] = c.useState(null), v = B(t, (C) => g(C)), m = c.useRef(!1), b = h ? f || !!h.closest("form") : !0, [w = !1, y] = me({
      prop: r,
      defaultProp: s,
      onChange: u
    }), x = c.useRef(w);
    return c.useEffect(() => {
      const C = h == null ? void 0 : h.form;
      if (C) {
        const S = () => y(x.current);
        return C.addEventListener("reset", S), () => C.removeEventListener("reset", S);
      }
    }, [h, y]), /* @__PURE__ */ z(fl, { scope: n, state: w, disabled: a, children: [
      /* @__PURE__ */ d(
        A.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": De(w) ? "mixed" : w,
          "aria-required": i,
          "data-state": Vr(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...p,
          ref: v,
          onKeyDown: E(e.onKeyDown, (C) => {
            C.key === "Enter" && C.preventDefault();
          }),
          onClick: E(e.onClick, (C) => {
            y((S) => De(S) ? !0 : !S), b && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        ml,
        {
          control: h,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: w,
          required: i,
          disabled: a,
          form: f,
          style: { transform: "translateX(-100%)" },
          defaultChecked: De(s) ? !1 : s
        }
      )
    ] });
  }
);
Lr.displayName = Qn;
var Fr = "CheckboxIndicator", $r = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, s = pl(Fr, n);
    return /* @__PURE__ */ d(re, { present: o || De(s.state) || s.state === !0, children: /* @__PURE__ */ d(
      A.span,
      {
        "data-state": Vr(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
$r.displayName = Fr;
var ml = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: r, ...s } = e, i = c.useRef(null), a = xt(n), l = Jt(t);
  c.useEffect(() => {
    const f = i.current, p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (a !== n && g) {
      const v = new Event("click", { bubbles: o });
      f.indeterminate = De(n), g.call(f, De(n) ? !1 : n), f.dispatchEvent(v);
    }
  }, [a, n, o]);
  const u = c.useRef(De(n) ? !1 : n);
  return /* @__PURE__ */ d(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r ?? u.current,
      ...s,
      tabIndex: -1,
      ref: i,
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
function De(e) {
  return e === "indeterminate";
}
function Vr(e) {
  return De(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var hl = Lr, gl = $r;
const kh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  hl,
  {
    ref: n,
    className: k(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(
      gl,
      {
        className: k("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d(qn, { className: "h-4 w-4" })
      }
    )
  }
)), jo = "vogelvlug-design-system-color-mode", Br = sc({
  logo: { src: "" },
  ImageElement: "img",
  LinkElement: "a",
  colorMode: "system",
  setColorMode: () => null
}), Yo = (e) => {
  const t = window.document.documentElement;
  if (t.classList.remove("light", "dark"), e === "system") {
    const n = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    t.classList.add(n);
    return;
  }
  t.classList.add(e);
}, Oh = ({
  children: e,
  logo: t,
  ImageElement: n = "img",
  LinkElement: o = "a",
  colorMode: r = "system"
}) => {
  const [s, i] = Er(
    () => (localStorage == null ? void 0 : localStorage.getItem(jo)) || r
  ), a = (l) => {
    localStorage == null || localStorage.setItem(jo, l), i(l), Yo(l);
  };
  return typeof window < "u" && Yo(s), /* @__PURE__ */ d(
    Br.Provider,
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
}, en = () => {
  const e = ic(Br);
  if (!e)
    throw new Error(
      "useDesignSystem must be used within a DesignSystemProvider"
    );
  return e;
}, vl = He("w-auto", {
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
}), Dh = ({
  height: e
}) => {
  const { logo: t, ImageElement: n, LinkElement: o } = en(), r = {
    alt: "Logo",
    className: k(vl({ height: e }))
  };
  return /* @__PURE__ */ d(o, { href: "/", children: /* @__PURE__ */ d(n, { src: n === "img" ? t.src : t, ...r }) });
};
var bl = c.useId || (() => {
}), wl = 0;
function ie(e) {
  const [t, n] = c.useState(bl());
  return te(() => {
    e || n((o) => o ?? String(wl++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Jn = "Collapsible", [yl, Lh] = de(Jn), [xl, eo] = yl(Jn), Wr = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l = !1, u] = me({
      prop: o,
      defaultProp: r,
      onChange: i
    });
    return /* @__PURE__ */ d(
      xl,
      {
        scope: n,
        disabled: s,
        contentId: ie(),
        open: l,
        onOpenToggle: c.useCallback(() => u((f) => !f), [u]),
        children: /* @__PURE__ */ d(
          A.div,
          {
            "data-state": no(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
Wr.displayName = Jn;
var Gr = "CollapsibleTrigger", zr = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = eo(Gr, n);
    return /* @__PURE__ */ d(
      A.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": no(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: E(e.onClick, r.onOpenToggle)
      }
    );
  }
);
zr.displayName = Gr;
var to = "CollapsibleContent", Kr = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = eo(to, e.__scopeCollapsible);
    return /* @__PURE__ */ d(re, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ d(Cl, { ...o, ref: t, present: s }) });
  }
);
Kr.displayName = to;
var Cl = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, i = eo(to, n), [a, l] = c.useState(o), u = c.useRef(null), f = B(t, u), p = c.useRef(0), h = p.current, g = c.useRef(0), v = g.current, m = i.open || a, b = c.useRef(m), w = c.useRef(void 0);
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
  }, [i.open, o]), /* @__PURE__ */ d(
    A.div,
    {
      "data-state": no(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
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
function no(e) {
  return e ? "open" : "closed";
}
var Sl = Wr, Rl = zr;
const Fh = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d(Sl, { className: k("group", t), ...n, children: e }), $h = ({ children: e, className: t, ...n }) => /* @__PURE__ */ z(
  Rl,
  {
    className: k("flex items-center gap-2", t),
    ...n,
    children: [
      e,
      /* @__PURE__ */ d(Qt, { className: "h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" })
    ]
  }
), Vh = Kr;
var El = "Separator", Xo = "horizontal", Ml = ["horizontal", "vertical"], Ur = c.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Xo, ...r } = e, s = Nl(o) ? o : Xo, a = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ d(
    A.div,
    {
      "data-orientation": s,
      ...a,
      ...r,
      ref: t
    }
  );
});
Ur.displayName = El;
function Nl(e) {
  return Ml.includes(e);
}
var Pl = Ur;
const Bh = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ d(
    Pl,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: k(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
function Ct(e) {
  const t = e + "CollectionProvider", [n, o] = de(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: v, children: m } = g, b = Z.useRef(null), w = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(r, { scope: v, itemMap: w, collectionRef: b, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = Z.forwardRef(
    (g, v) => {
      const { scope: m, children: b } = g, w = s(a, m), y = B(v, w.collectionRef);
      return /* @__PURE__ */ d(Ie, { ref: y, children: b });
    }
  );
  l.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = Z.forwardRef(
    (g, v) => {
      const { scope: m, children: b, ...w } = g, y = Z.useRef(null), x = B(v, y), C = s(u, m);
      return Z.useEffect(() => (C.itemMap.set(y, { ref: y, ...w }), () => void C.itemMap.delete(y))), /* @__PURE__ */ d(Ie, { [f]: "", ref: x, children: b });
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
        (C, S) => w.indexOf(C.ref.current) - w.indexOf(S.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: p },
    h,
    o
  ];
}
var Il = c.createContext(void 0);
function St(e) {
  const t = c.useContext(Il);
  return e || t || "ltr";
}
function _l(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Al = "DismissableLayer", kn = "dismissableLayer.update", Tl = "dismissableLayer.pointerDownOutside", kl = "dismissableLayer.focusOutside", qo, Hr = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Rt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(Hr), [f, p] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), v = B(t, (R) => p(R)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(b), y = f ? m.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= w, S = Ll((R) => {
      const P = R.target, I = [...u.branches].some((D) => D.contains(P));
      !C || I || (r == null || r(R), i == null || i(R), R.defaultPrevented || a == null || a());
    }, h), M = Fl((R) => {
      const P = R.target;
      [...u.branches].some((D) => D.contains(P)) || (s == null || s(R), i == null || i(R), R.defaultPrevented || a == null || a());
    }, h);
    return _l((R) => {
      y === u.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (qo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Zo(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = qo);
        };
    }, [f, h, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Zo());
    }, [f, u]), c.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(kn, R), () => document.removeEventListener(kn, R);
    }, []), /* @__PURE__ */ d(
      A.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: E(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: E(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: E(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Rt.displayName = Al;
var Ol = "DismissableLayerBranch", Dl = c.forwardRef((e, t) => {
  const n = c.useContext(Hr), o = c.useRef(null), r = B(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d(A.div, { ...e, ref: r });
});
Dl.displayName = Ol;
function Ll(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          jr(
            Tl,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Fl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && jr(kl, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Zo() {
  const e = new CustomEvent(kn);
  document.dispatchEvent(e);
}
function jr(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Wt(r, s) : r.dispatchEvent(s);
}
var wn = 0;
function oo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Qo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Qo()), wn++, () => {
      wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wn--;
    };
  }, []);
}
function Qo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var yn = "focusScope.autoFocusOnMount", xn = "focusScope.autoFocusOnUnmount", Jo = { bubbles: !1, cancelable: !0 }, $l = "FocusScope", tn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = ee(r), f = ee(s), p = c.useRef(null), h = B(t, (m) => l(m)), g = c.useRef({
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
        if (g.paused || !a) return;
        const C = x.target;
        a.contains(C) ? p.current = C : Oe(p.current, { select: !0 });
      }, b = function(x) {
        if (g.paused || !a) return;
        const C = x.relatedTarget;
        C !== null && (a.contains(C) || Oe(p.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const S of x)
            S.removedNodes.length > 0 && Oe(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const y = new MutationObserver(w);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [o, a, g.paused]), c.useEffect(() => {
    if (a) {
      tr.add(g);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const w = new CustomEvent(yn, Jo);
        a.addEventListener(yn, u), a.dispatchEvent(w), w.defaultPrevented || (Vl(Kl(Yr(a)), { select: !0 }), document.activeElement === m && Oe(a));
      }
      return () => {
        a.removeEventListener(yn, u), setTimeout(() => {
          const w = new CustomEvent(xn, Jo);
          a.addEventListener(xn, f), a.dispatchEvent(w), w.defaultPrevented || Oe(m ?? document.body, { select: !0 }), a.removeEventListener(xn, f), tr.remove(g);
        }, 0);
      };
    }
  }, [a, u, f, g]);
  const v = c.useCallback(
    (m) => {
      if (!n && !o || g.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (b && w) {
        const y = m.currentTarget, [x, C] = Bl(y);
        x && C ? !m.shiftKey && w === C ? (m.preventDefault(), n && Oe(x, { select: !0 })) : m.shiftKey && w === x && (m.preventDefault(), n && Oe(C, { select: !0 })) : w === y && m.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ d(A.div, { tabIndex: -1, ...i, ref: h, onKeyDown: v });
});
tn.displayName = $l;
function Vl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Oe(o, { select: t }), document.activeElement !== n) return;
}
function Bl(e) {
  const t = Yr(e), n = er(t, e), o = er(t.reverse(), e);
  return [n, o];
}
function Yr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function er(e, t) {
  for (const n of e)
    if (!Wl(n, { upTo: t })) return n;
}
function Wl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Gl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Gl(e) && t && e.select();
  }
}
var tr = zl();
function zl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Kl(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ul = ["top", "right", "bottom", "left"], Fe = Math.min, le = Math.max, Gt = Math.round, Tt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), Hl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, jl = {
  start: "end",
  end: "start"
};
function On(e, t, n) {
  return le(e, Fe(t, n));
}
function _e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function rt(e) {
  return e.split("-")[1];
}
function ro(e) {
  return e === "x" ? "y" : "x";
}
function so(e) {
  return e === "y" ? "height" : "width";
}
function $e(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "y" : "x";
}
function io(e) {
  return ro($e(e));
}
function Yl(e, t, n) {
  n === void 0 && (n = !1);
  const o = rt(e), r = io(e), s = so(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = zt(i)), [i, zt(i)];
}
function Xl(e) {
  const t = zt(e);
  return [Dn(e), t, Dn(t)];
}
function Dn(e) {
  return e.replace(/start|end/g, (t) => jl[t]);
}
function ql(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Zl(e, t, n, o) {
  const r = rt(e);
  let s = ql(Ae(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Dn)))), s;
}
function zt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hl[t]);
}
function Ql(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Xr(e) {
  return typeof e != "number" ? Ql(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
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
function or(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = $e(t), i = io(t), a = so(i), l = Ae(t), u = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, h = o[a] / 2 - r[a] / 2;
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
  switch (rt(t)) {
    case "start":
      g[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Jl = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = or(u, o, l), h = o, g = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: w
    } = a[m], {
      x: y,
      y: x,
      data: C,
      reset: S
    } = await w({
      x: f,
      y: p,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: g,
      rects: u,
      platform: i,
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
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : S.rects), {
      x: f,
      y: p
    } = or(u, h, l)), m = -1);
  }
  return {
    x: f,
    y: p,
    placement: h,
    strategy: r,
    middlewareData: g
  };
};
async function gt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = _e(t, e), v = Xr(g), b = a[h ? p === "floating" ? "reference" : "floating" : p], w = Kt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), y = p === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Kt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: x,
    strategy: l
  }) : y);
  return {
    top: (w.top - S.top + v.top) / C.y,
    bottom: (S.bottom - w.bottom + v.bottom) / C.y,
    left: (w.left - S.left + v.left) / C.x,
    right: (S.right - w.right + v.right) / C.x
  };
}
const eu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = _e(e, t) || {};
    if (u == null)
      return {};
    const p = Xr(f), h = {
      x: n,
      y: o
    }, g = io(r), v = so(g), m = await i.getDimensions(u), b = g === "y", w = b ? "top" : "left", y = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", C = s.reference[v] + s.reference[g] - h[g] - s.floating[v], S = h[g] - s.reference[g], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let R = M ? M[x] : 0;
    (!R || !await (i.isElement == null ? void 0 : i.isElement(M))) && (R = a.floating[x] || s.floating[v]);
    const P = C / 2 - S / 2, I = R / 2 - m[v] / 2 - 1, D = Fe(p[w], I), V = Fe(p[y], I), _ = D, W = R - m[v] - V, F = R / 2 - m[v] / 2 + P, H = On(_, F, W), L = !l.arrow && rt(r) != null && F !== H && s.reference[v] / 2 - (F < _ ? D : V) - m[v] / 2 < 0, G = L ? F < _ ? F - _ : F - W : 0;
    return {
      [g]: h[g] + G,
      data: {
        [g]: H,
        centerOffset: F - H - G,
        ...L && {
          alignmentOffset: G
        }
      },
      reset: L
    };
  }
}), tu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
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
      const w = Ae(r), y = $e(a), x = Ae(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = h || (x || !m ? [zt(a)] : Xl(a)), M = v !== "none";
      !h && M && S.push(...Zl(a, m, v, C));
      const R = [a, ...S], P = await gt(t, b), I = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && I.push(P[w]), p) {
        const F = Yl(r, i, C);
        I.push(P[F[0]], P[F[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: I
      }], !I.every((F) => F <= 0)) {
        var V, _;
        const F = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, H = R[F];
        if (H)
          return {
            data: {
              index: F,
              overflows: D
            },
            reset: {
              placement: H
            }
          };
        let L = (_ = D.filter((G) => G.overflows[0] <= 0).sort((G, T) => G.overflows[1] - T.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var W;
              const G = (W = D.filter((T) => {
                if (M) {
                  const N = $e(T.placement);
                  return N === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((N) => N > 0).reduce((N, K) => N + K, 0)]).sort((T, N) => T[1] - N[1])[0]) == null ? void 0 : W[0];
              G && (L = G);
              break;
            }
            case "initialPlacement":
              L = a;
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
function rr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function sr(e) {
  return Ul.some((t) => e[t] >= 0);
}
const nu = function(e) {
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
          const s = await gt(t, {
            ...r,
            elementContext: "reference"
          }), i = rr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: sr(i)
            }
          };
        }
        case "escaped": {
          const s = await gt(t, {
            ...r,
            altBoundary: !0
          }), i = rr(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: sr(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ou(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Ae(n), a = rt(n), l = $e(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, f = s && l ? -1 : 1, p = _e(t, e);
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
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), l ? {
    x: g * f,
    y: h * u
  } : {
    x: h * u,
    y: g * f
  };
}
const ru = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await ou(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, su = function(e) {
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
        crossAxis: i = !1,
        limiter: a = {
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
      }, f = await gt(t, l), p = $e(Ae(r)), h = ro(p);
      let g = u[h], v = u[p];
      if (s) {
        const b = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = g + f[b], x = g - f[w];
        g = On(y, g, x);
      }
      if (i) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = v + f[b], x = v - f[w];
        v = On(y, v, x);
      }
      const m = a.fn({
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
            [p]: i
          }
        }
      };
    }
  };
}, iu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = _e(e, t), f = {
        x: n,
        y: o
      }, p = $e(r), h = ro(p);
      let g = f[h], v = f[p];
      const m = _e(a, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const x = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[x] + b.mainAxis, S = s.reference[h] + s.reference[x] - b.mainAxis;
        g < C ? g = C : g > S && (g = S);
      }
      if (u) {
        var w, y;
        const x = h === "y" ? "width" : "height", C = ["top", "left"].includes(Ae(r)), S = s.reference[p] - s.floating[x] + (C && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : b.crossAxis), M = s.reference[p] + s.reference[x] + (C ? 0 : ((y = i.offset) == null ? void 0 : y[p]) || 0) - (C ? b.crossAxis : 0);
        v < S ? v = S : v > M && (v = M);
      }
      return {
        [h]: g,
        [p]: v
      };
    }
  };
}, au = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = _e(e, t), f = await gt(t, u), p = Ae(r), h = rt(r), g = $e(r) === "y", {
        width: v,
        height: m
      } = s.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = h === "end" ? "top" : "bottom");
      const y = m - f.top - f.bottom, x = v - f.left - f.right, C = Fe(m - f[b], y), S = Fe(v - f[w], x), M = !t.middlewareData.shift;
      let R = C, P = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = x), (o = t.middlewareData.shift) != null && o.enabled.y && (R = y), M && !h) {
        const D = le(f.left, 0), V = le(f.right, 0), _ = le(f.top, 0), W = le(f.bottom, 0);
        g ? P = v - 2 * (D !== 0 || V !== 0 ? D + V : le(f.left, f.right)) : R = m - 2 * (_ !== 0 || W !== 0 ? _ + W : le(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: R
      });
      const I = await i.getDimensions(a.floating);
      return v !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nn() {
  return typeof window < "u";
}
function st(e) {
  return qr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (qr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qr(e) {
  return nn() ? e instanceof Node || e instanceof ue(e).Node : !1;
}
function ve(e) {
  return nn() ? e instanceof Element || e instanceof ue(e).Element : !1;
}
function Se(e) {
  return nn() ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement : !1;
}
function ir(e) {
  return !nn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function Et(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function cu(e) {
  return ["table", "td", "th"].includes(st(e));
}
function on(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ao(e) {
  const t = co(), n = ve(e) ? be(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function lu(e) {
  let t = Ve(e);
  for (; Se(t) && !tt(t); ) {
    if (ao(t))
      return t;
    if (on(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function co() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(e) {
  return ["html", "body", "#document"].includes(st(e));
}
function be(e) {
  return ue(e).getComputedStyle(e);
}
function rn(e) {
  return ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ve(e) {
  if (st(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ir(e) && e.host || // Fallback.
    Ee(e)
  );
  return ir(t) ? t.host : t;
}
function Zr(e) {
  const t = Ve(e);
  return tt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Se(t) && Et(t) ? t : Zr(t);
}
function vt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Zr(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = ue(r);
  if (s) {
    const a = Ln(i);
    return t.concat(i, i.visualViewport || [], Et(r) ? r : [], a && n ? vt(a) : []);
  }
  return t.concat(r, vt(r, [], n));
}
function Ln(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qr(e) {
  const t = be(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Se(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = Gt(n) !== s || Gt(o) !== i;
  return a && (n = s, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function lo(e) {
  return ve(e) ? e : e.contextElement;
}
function Je(e) {
  const t = lo(e);
  if (!Se(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Qr(t);
  let i = (s ? Gt(n.width) : n.width) / o, a = (s ? Gt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const uu = /* @__PURE__ */ Ce(0);
function Jr(e) {
  const t = ue(e);
  return !co() || !t.visualViewport ? uu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function du(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function ze(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = lo(e);
  let i = Ce(1);
  t && (o ? ve(o) && (i = Je(o)) : i = Je(e));
  const a = du(s, n, o) ? Jr(s) : Ce(0);
  let l = (r.left + a.x) / i.x, u = (r.top + a.y) / i.y, f = r.width / i.x, p = r.height / i.y;
  if (s) {
    const h = ue(s), g = o && ve(o) ? ue(o) : o;
    let v = h, m = Ln(v);
    for (; m && o && g !== v; ) {
      const b = Je(m), w = m.getBoundingClientRect(), y = be(m), x = w.left + (m.clientLeft + parseFloat(y.paddingLeft)) * b.x, C = w.top + (m.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, u *= b.y, f *= b.x, p *= b.y, l += x, u += C, v = ue(m), m = Ln(v);
    }
  }
  return Kt({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function uo(e, t) {
  const n = rn(e).scrollLeft;
  return t ? t.left + n : ze(Ee(e)).left + n;
}
function es(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    uo(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function fu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = Ee(o), a = t ? on(t.floating) : !1;
  if (o === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ce(1);
  const f = Ce(0), p = Se(o);
  if ((p || !p && !s) && ((st(o) !== "body" || Et(i)) && (l = rn(o)), Se(o))) {
    const g = ze(o);
    u = Je(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const h = i && !p && !s ? es(i, l, !0) : Ce(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + h.y
  };
}
function pu(e) {
  return Array.from(e.getClientRects());
}
function mu(e) {
  const t = Ee(e), n = rn(e), o = e.ownerDocument.body, r = le(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = le(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + uo(e);
  const a = -n.scrollTop;
  return be(o).direction === "rtl" && (i += le(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: a
  };
}
function hu(e, t) {
  const n = ue(e), o = Ee(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    const u = co();
    (!u || u && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function gu(e, t) {
  const n = ze(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Se(e) ? Je(e) : Ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = r * s.x, u = o * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function ar(e, t, n) {
  let o;
  if (t === "viewport")
    o = hu(e, n);
  else if (t === "document")
    o = mu(Ee(e));
  else if (ve(t))
    o = gu(t, n);
  else {
    const r = Jr(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Kt(o);
}
function ts(e, t) {
  const n = Ve(e);
  return n === t || !ve(n) || tt(n) ? !1 : be(n).position === "fixed" || ts(n, t);
}
function vu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = vt(e, [], !1).filter((a) => ve(a) && st(a) !== "body"), r = null;
  const s = be(e).position === "fixed";
  let i = s ? Ve(e) : e;
  for (; ve(i) && !tt(i); ) {
    const a = be(i), l = ao(i);
    !l && a.position === "fixed" && (r = null), (s ? !l && !r : !l && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Et(i) && !l && ts(e, i)) ? o = o.filter((f) => f !== i) : r = a, i = Ve(i);
  }
  return t.set(e, o), o;
}
function bu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? on(t) ? [] : vu(t, this._c) : [].concat(n), o], a = i[0], l = i.reduce((u, f) => {
    const p = ar(t, f, r);
    return u.top = le(p.top, u.top), u.right = Fe(p.right, u.right), u.bottom = Fe(p.bottom, u.bottom), u.left = le(p.left, u.left), u;
  }, ar(t, a, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function wu(e) {
  const {
    width: t,
    height: n
  } = Qr(e);
  return {
    width: t,
    height: n
  };
}
function yu(e, t, n) {
  const o = Se(t), r = Ee(t), s = n === "fixed", i = ze(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ce(0);
  if (o || !o && !s)
    if ((st(t) !== "body" || Et(r)) && (a = rn(t)), o) {
      const h = ze(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else r && (l.x = uo(r));
  const u = r && !o && !s ? es(r, a) : Ce(0), f = i.left + a.scrollLeft - l.x - u.x, p = i.top + a.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Cn(e) {
  return be(e).position === "static";
}
function cr(e, t) {
  if (!Se(e) || be(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ee(e) === n && (n = n.ownerDocument.body), n;
}
function ns(e, t) {
  const n = ue(e);
  if (on(e))
    return n;
  if (!Se(e)) {
    let r = Ve(e);
    for (; r && !tt(r); ) {
      if (ve(r) && !Cn(r))
        return r;
      r = Ve(r);
    }
    return n;
  }
  let o = cr(e, t);
  for (; o && cu(o) && Cn(o); )
    o = cr(o, t);
  return o && tt(o) && Cn(o) && !ao(o) ? n : o || lu(e) || n;
}
const xu = async function(e) {
  const t = this.getOffsetParent || ns, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: yu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Cu(e) {
  return be(e).direction === "rtl";
}
const Su = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fu,
  getDocumentElement: Ee,
  getClippingRect: bu,
  getOffsetParent: ns,
  getElementRects: xu,
  getClientRects: pu,
  getDimensions: wu,
  getScale: Je,
  isElement: ve,
  isRTL: Cu
};
function Ru(e, t) {
  let n = null, o;
  const r = Ee(e);
  function s() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const {
      left: u,
      top: f,
      width: p,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !p || !h)
      return;
    const g = Tt(f), v = Tt(r.clientWidth - (u + p)), m = Tt(r.clientHeight - (f + h)), b = Tt(u), y = {
      rootMargin: -g + "px " + -v + "px " + -m + "px " + -b + "px",
      threshold: le(0, Fe(1, l)) || 1
    };
    let x = !0;
    function C(S) {
      const M = S[0].intersectionRatio;
      if (M !== l) {
        if (!x)
          return i();
        M ? i(!1, M) : o = setTimeout(() => {
          i(!1, 1e-7);
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
  return i(!0), s;
}
function Eu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = lo(e), f = r || s ? [...u ? vt(u) : [], ...vt(t)] : [];
  f.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const p = u && a ? Ru(u, n) : null;
  let h = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = g) == null || x.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let v, m = l ? ze(e) : null;
  l && b();
  function b() {
    const w = ze(e);
    m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && n(), m = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    f.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), p == null || p(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(v);
  };
}
const Mu = ru, Nu = su, Pu = tu, Iu = au, _u = nu, lr = eu, Au = iu, Tu = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Su,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Jl(e, t, {
    ...r,
    platform: s
  });
};
var Ft = typeof document < "u" ? ac : cc;
function Ut(e, t) {
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
        if (!Ut(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !Ut(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function os(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ur(e, t) {
  const n = os(e);
  return Math.round(t * n) / n;
}
function Sn(e) {
  const t = c.useRef(e);
  return Ft(() => {
    t.current = e;
  }), t;
}
function ku(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
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
  Ut(h, o) || g(o);
  const [v, m] = c.useState(null), [b, w] = c.useState(null), y = c.useCallback((T) => {
    T !== M.current && (M.current = T, m(T));
  }, []), x = c.useCallback((T) => {
    T !== R.current && (R.current = T, w(T));
  }, []), C = s || v, S = i || b, M = c.useRef(null), R = c.useRef(null), P = c.useRef(f), I = l != null, D = Sn(l), V = Sn(r), _ = Sn(u), W = c.useCallback(() => {
    if (!M.current || !R.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: h
    };
    V.current && (T.platform = V.current), Tu(M.current, R.current, T).then((N) => {
      const K = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      F.current && !Ut(P.current, K) && (P.current = K, Zt.flushSync(() => {
        p(K);
      }));
    });
  }, [h, t, n, V, _]);
  Ft(() => {
    u === !1 && P.current.isPositioned && (P.current.isPositioned = !1, p((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  Ft(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Ft(() => {
    if (C && (M.current = C), S && (R.current = S), C && S) {
      if (D.current)
        return D.current(C, S, W);
      W();
    }
  }, [C, S, W, D, I]);
  const H = c.useMemo(() => ({
    reference: M,
    floating: R,
    setReference: y,
    setFloating: x
  }), [y, x]), L = c.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), G = c.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return T;
    const N = ur(L.floating, f.x), K = ur(L.floating, f.y);
    return a ? {
      ...T,
      transform: "translate(" + N + "px, " + K + "px)",
      ...os(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: K
    };
  }, [n, a, L.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: W,
    refs: H,
    elements: L,
    floatingStyles: G
  }), [f, W, H, L, G]);
}
const Ou = (e) => {
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
      return o && t(o) ? o.current != null ? lr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? lr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Du = (e, t) => ({
  ...Mu(e),
  options: [e, t]
}), Lu = (e, t) => ({
  ...Nu(e),
  options: [e, t]
}), Fu = (e, t) => ({
  ...Au(e),
  options: [e, t]
}), $u = (e, t) => ({
  ...Pu(e),
  options: [e, t]
}), Vu = (e, t) => ({
  ...Iu(e),
  options: [e, t]
}), Bu = (e, t) => ({
  ..._u(e),
  options: [e, t]
}), Wu = (e, t) => ({
  ...Ou(e),
  options: [e, t]
});
var Gu = "Arrow", rs = c.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ d(
    A.svg,
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
rs.displayName = Gu;
var zu = rs, fo = "Popper", [ss, sn] = de(fo), [Ku, is] = ss(fo), as = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ d(Ku, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
as.displayName = fo;
var cs = "PopperAnchor", ls = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = is(cs, n), i = c.useRef(null), a = B(t, i);
    return c.useEffect(() => {
      s.onAnchorChange((o == null ? void 0 : o.current) || i.current);
    }), o ? null : /* @__PURE__ */ d(A.div, { ...r, ref: a });
  }
);
ls.displayName = cs;
var po = "PopperContent", [Uu, Hu] = ss(po), us = c.forwardRef(
  (e, t) => {
    var O, Y, Q, j, X, q;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...m
    } = e, b = is(po, n), [w, y] = c.useState(null), x = B(t, (ce) => y(ce)), [C, S] = c.useState(null), M = Jt(C), R = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, I = o + (s !== "center" ? "-" + s : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(u) ? u : [u], _ = V.length > 0, W = {
      padding: D,
      boundary: V.filter(Yu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _
    }, { refs: F, floatingStyles: H, placement: L, isPositioned: G, middlewareData: T } = ku({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...ce) => Eu(...ce, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Du({ mainAxis: r + P, alignmentAxis: i }),
        l && Lu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Fu() : void 0,
          ...W
        }),
        l && $u({ ...W }),
        Vu({
          ...W,
          apply: ({ elements: ce, rects: ye, availableWidth: lt, availableHeight: ut }) => {
            const { width: dt, height: rc } = ye.reference, _t = ce.floating.style;
            _t.setProperty("--radix-popper-available-width", `${lt}px`), _t.setProperty("--radix-popper-available-height", `${ut}px`), _t.setProperty("--radix-popper-anchor-width", `${dt}px`), _t.setProperty("--radix-popper-anchor-height", `${rc}px`);
          }
        }),
        C && Wu({ element: C, padding: a }),
        Xu({ arrowWidth: R, arrowHeight: P }),
        h && Bu({ strategy: "referenceHidden", ...W })
      ]
    }), [N, K] = ps(L), U = ee(v);
    te(() => {
      G && (U == null || U());
    }, [G, U]);
    const se = (O = T.arrow) == null ? void 0 : O.x, Me = (Y = T.arrow) == null ? void 0 : Y.y, fe = ((Q = T.arrow) == null ? void 0 : Q.centerOffset) !== 0, [Ne, ae] = c.useState();
    return te(() => {
      w && ae(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: G ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ne,
          "--radix-popper-transform-origin": [
            (j = T.transformOrigin) == null ? void 0 : j.x,
            (X = T.transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = T.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          Uu,
          {
            scope: n,
            placedSide: N,
            onArrowChange: S,
            arrowX: se,
            arrowY: Me,
            shouldHideArrow: fe,
            children: /* @__PURE__ */ d(
              A.div,
              {
                "data-side": N,
                "data-align": K,
                ...m,
                ref: x,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
us.displayName = po;
var ds = "PopperArrow", ju = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fs = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = Hu(ds, o), i = ju[s.placedSide];
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
          [i]: 0,
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
          zu,
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
fs.displayName = ds;
function Yu(e) {
  return e !== null;
}
var Xu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, y;
    const { placement: n, rects: o, middlewareData: r } = t, i = ((b = r.arrow) == null ? void 0 : b.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = ps(n), p = { start: "0%", center: "50%", end: "100%" }[f], h = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, g = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "", m = "";
    return u === "bottom" ? (v = i ? p : `${h}px`, m = `${-l}px`) : u === "top" ? (v = i ? p : `${h}px`, m = `${o.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, m = i ? p : `${g}px`) : u === "left" && (v = `${o.floating.width + l}px`, m = i ? p : `${g}px`), { data: { x: v, y: m } };
  }
});
function ps(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var mo = as, ms = ls, hs = us, gs = fs, qu = "Portal", an = c.forwardRef((e, t) => {
  var a;
  const { container: n, ...o } = e, [r, s] = c.useState(!1);
  te(() => s(!0), []);
  const i = n || r && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Mr.createPortal(/* @__PURE__ */ d(A.div, { ...o, ref: t }), i) : null;
});
an.displayName = qu;
var Rn = "rovingFocusGroup.onEntryFocus", Zu = { bubbles: !1, cancelable: !0 }, cn = "RovingFocusGroup", [Fn, vs, Qu] = Ct(cn), [Ju, ln] = de(
  cn,
  [Qu]
), [ed, td] = Ju(cn), bs = c.forwardRef(
  (e, t) => /* @__PURE__ */ d(Fn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Fn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(nd, { ...e, ref: t }) }) })
);
bs.displayName = cn;
var nd = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, h = c.useRef(null), g = B(t, h), v = St(s), [m = null, b] = me({
    prop: i,
    defaultProp: a,
    onChange: l
  }), [w, y] = c.useState(!1), x = ee(u), C = vs(n), S = c.useRef(!1), [M, R] = c.useState(0);
  return c.useEffect(() => {
    const P = h.current;
    if (P)
      return P.addEventListener(Rn, x), () => P.removeEventListener(Rn, x);
  }, [x]), /* @__PURE__ */ d(
    ed,
    {
      scope: n,
      orientation: o,
      dir: v,
      loop: r,
      currentTabStopId: m,
      onItemFocus: c.useCallback(
        (P) => b(P),
        [b]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => R((P) => P + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => R((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        A.div,
        {
          tabIndex: w || M === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: E(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: E(e.onFocus, (P) => {
            const I = !S.current;
            if (P.target === P.currentTarget && I && !w) {
              const D = new CustomEvent(Rn, Zu);
              if (P.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const V = C().filter((L) => L.focusable), _ = V.find((L) => L.active), W = V.find((L) => L.id === m), H = [_, W, ...V].filter(
                  Boolean
                ).map((L) => L.ref.current);
                xs(H, f);
              }
            }
            S.current = !1;
          }),
          onBlur: E(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), ws = "RovingFocusGroupItem", ys = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      ...i
    } = e, a = ie(), l = s || a, u = td(ws, n), f = u.currentTabStopId === l, p = vs(n), { onFocusableItemAdd: h, onFocusableItemRemove: g } = u;
    return c.useEffect(() => {
      if (o)
        return h(), () => g();
    }, [o, h, g]), /* @__PURE__ */ d(
      Fn.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ d(
          A.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: E(e.onMouseDown, (v) => {
              o ? u.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: E(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: E(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const m = sd(v, u.orientation, u.dir);
              if (m !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = p().filter((y) => y.focusable).map((y) => y.ref.current);
                if (m === "last") w.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && w.reverse();
                  const y = w.indexOf(v.currentTarget);
                  w = u.loop ? id(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => xs(w));
              }
            })
          }
        )
      }
    );
  }
);
ys.displayName = ws;
var od = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rd(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function sd(e, t, n) {
  const o = rd(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return od[o];
}
function xs(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function id(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Cs = bs, Ss = ys, ad = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ye = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Ot = {}, En = 0, Rs = function(e) {
  return e && (e.host || Rs(e.parentNode));
}, cd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Rs(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ld = function(e, t, n, o) {
  var r = cd(t, Array.isArray(e) ? e : [e]);
  Ot[n] || (Ot[n] = /* @__PURE__ */ new WeakMap());
  var s = Ot[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(r), u = function(p) {
    !p || a.has(p) || (a.add(p), u(p.parentNode));
  };
  r.forEach(u);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var g = h.getAttribute(o), v = g !== null && g !== "false", m = (Ye.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          Ye.set(h, m), s.set(h, b), i.push(h), m === 1 && v && kt.set(h, !0), b === 1 && h.setAttribute(n, "true"), v || h.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return f(t), a.clear(), En++, function() {
    i.forEach(function(p) {
      var h = Ye.get(p) - 1, g = s.get(p) - 1;
      Ye.set(p, h), s.set(p, g), h || (kt.has(p) || p.removeAttribute(o), kt.delete(p)), g || p.removeAttribute(n);
    }), En--, En || (Ye = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Ot = {});
  };
}, ho = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = ad(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), ld(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, xe = function() {
  return xe = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, xe.apply(this, arguments);
};
function Es(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function ud(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var $t = "right-scroll-bar-position", Vt = "width-before-scroll-bar", dd = "with-scroll-bars-hidden", fd = "--removed-body-scroll-bar-size";
function Mn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pd(e, t) {
  var n = Er(function() {
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
var md = typeof window < "u" ? c.useLayoutEffect : c.useEffect, dr = /* @__PURE__ */ new WeakMap();
function hd(e, t) {
  var n = pd(null, function(o) {
    return e.forEach(function(r) {
      return Mn(r, o);
    });
  });
  return md(function() {
    var o = dr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), i = n.current;
      r.forEach(function(a) {
        s.has(a) || Mn(a, null);
      }), s.forEach(function(a) {
        r.has(a) || Mn(a, i);
      });
    }
    dr.set(n, e);
  }, [e]), n;
}
function gd(e) {
  return e;
}
function vd(e, t) {
  t === void 0 && (t = gd);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, o);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var f = i;
        i = [], f.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return r;
}
function bd(e) {
  e === void 0 && (e = {});
  var t = vd(null);
  return t.options = xe({ async: !0, ssr: !1 }, e), t;
}
var Ms = function(e) {
  var t = e.sideCar, n = Es(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, xe({}, n));
};
Ms.isSideCarExport = !0;
function wd(e, t) {
  return e.useMedium(t), Ms;
}
var Ns = bd(), Nn = function() {
}, un = c.forwardRef(function(e, t) {
  var n = c.useRef(null), o = c.useState({
    onScrollCapture: Nn,
    onWheelCapture: Nn,
    onTouchMoveCapture: Nn
  }), r = o[0], s = o[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, h = e.sideCar, g = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, y = e.gapMode, x = Es(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, S = hd([n, t]), M = xe(xe({}, x), r);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(C, { sideCar: Ns, removeScrollBar: u, shards: p, noIsolation: g, inert: v, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: y }),
    i ? c.cloneElement(c.Children.only(a), xe(xe({}, M), { ref: S })) : c.createElement(w, xe({}, M, { className: l, ref: S }), a)
  );
});
un.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
un.classNames = {
  fullWidth: Vt,
  zeroRight: $t
};
var yd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yd();
  return t && e.setAttribute("nonce", t), e;
}
function Cd(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Sd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Rd = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xd()) && (Cd(t, n), Sd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ed = function() {
  var e = Rd();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ps = function() {
  var e = Ed(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Md = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Nd = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pn(n), Pn(o), Pn(r)];
}, Pd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Md;
  var t = Nd(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Id = Ps(), et = "data-scroll-locked", _d = function(e, t, n, o) {
  var r = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dd, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(et, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat($t, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Vt, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat($t, " .").concat($t, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(et, `] {
    `).concat(fd, ": ").concat(a, `px;
  }
`);
}, fr = function() {
  var e = parseInt(document.body.getAttribute(et) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ad = function() {
  c.useEffect(function() {
    return document.body.setAttribute(et, (fr() + 1).toString()), function() {
      var e = fr() - 1;
      e <= 0 ? document.body.removeAttribute(et) : document.body.setAttribute(et, e.toString());
    };
  }, []);
}, Td = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Ad();
  var s = c.useMemo(function() {
    return Pd(r);
  }, [r]);
  return c.createElement(Id, { styles: _d(s, !t, r, n ? "" : "!important") });
}, $n = !1;
if (typeof window < "u")
  try {
    var Dt = Object.defineProperty({}, "passive", {
      get: function() {
        return $n = !0, !0;
      }
    });
    window.addEventListener("test", Dt, Dt), window.removeEventListener("test", Dt, Dt);
  } catch {
    $n = !1;
  }
var Xe = $n ? { passive: !1 } : !1, kd = function(e) {
  return e.tagName === "TEXTAREA";
}, Is = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kd(e) && n[t] === "visible")
  );
}, Od = function(e) {
  return Is(e, "overflowY");
}, Dd = function(e) {
  return Is(e, "overflowX");
}, pr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = _s(e, o);
    if (r) {
      var s = As(e, o), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Ld = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Fd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, _s = function(e, t) {
  return e === "v" ? Od(t) : Dd(t);
}, As = function(e, t) {
  return e === "v" ? Ld(t) : Fd(t);
}, $d = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Vd = function(e, t, n, o, r) {
  var s = $d(e, window.getComputedStyle(t).direction), i = s * o, a = n.target, l = t.contains(a), u = !1, f = i > 0, p = 0, h = 0;
  do {
    var g = As(e, a), v = g[0], m = g[1], b = g[2], w = m - b - s * v;
    (v || w) && _s(e, a) && (p += w, h += v), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && (Math.abs(p) < 1 || !r) || !f && (Math.abs(h) < 1 || !r)) && (u = !0), u;
}, Lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mr = function(e) {
  return [e.deltaX, e.deltaY];
}, hr = function(e) {
  return e && "current" in e ? e.current : e;
}, Bd = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gd = 0, qe = [];
function zd(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), o = c.useRef(), r = c.useState(Gd++)[0], s = c.useState(Ps)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = ud([e.lockRef.current], (e.shards || []).map(hr), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Lt(m), y = n.current, x = "deltaX" in m ? m.deltaX : y[0] - w[0], C = "deltaY" in m ? m.deltaY : y[1] - w[1], S, M = m.target, R = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && R === "h" && M.type === "range")
      return !1;
    var P = pr(R, M);
    if (!P)
      return !0;
    if (P ? S = R : (S = R === "v" ? "h" : "v", P = pr(R, M)), !P)
      return !1;
    if (!o.current && "changedTouches" in m && (x || C) && (o.current = S), !S)
      return !0;
    var I = o.current || S;
    return Vd(I, b, m, I === "h" ? x : C, !0);
  }, []), l = c.useCallback(function(m) {
    var b = m;
    if (!(!qe.length || qe[qe.length - 1] !== s)) {
      var w = "deltaY" in b ? mr(b) : Lt(b), y = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && Bd(S.delta, w);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var x = (i.current.shards || []).map(hr).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), C = x.length > 0 ? a(b, x[0]) : !i.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(m, b, w, y) {
    var x = { name: m, delta: b, target: w, should: y, shadowParent: Kd(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = c.useCallback(function(m) {
    n.current = Lt(m), o.current = void 0;
  }, []), p = c.useCallback(function(m) {
    u(m.type, mr(m), m.target, a(m, e.lockRef.current));
  }, []), h = c.useCallback(function(m) {
    u(m.type, Lt(m), m.target, a(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return qe.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Xe), document.addEventListener("touchmove", l, Xe), document.addEventListener("touchstart", f, Xe), function() {
      qe = qe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Xe), document.removeEventListener("touchmove", l, Xe), document.removeEventListener("touchstart", f, Xe);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(s, { styles: Wd(r) }) : null,
    g ? c.createElement(Td, { gapMode: e.gapMode }) : null
  );
}
function Kd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ud = wd(Ns, zd);
var dn = c.forwardRef(function(e, t) {
  return c.createElement(un, xe({}, e, { ref: t, sideCar: Ud }));
});
dn.classNames = un.classNames;
var Vn = ["Enter", " "], Hd = ["ArrowDown", "PageUp", "Home"], Ts = ["ArrowUp", "PageDown", "End"], jd = [...Hd, ...Ts], Yd = {
  ltr: [...Vn, "ArrowRight"],
  rtl: [...Vn, "ArrowLeft"]
}, Xd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Mt = "Menu", [bt, qd, Zd] = Ct(Mt), [je, ks] = de(Mt, [
  Zd,
  sn,
  ln
]), Nt = sn(), Os = ln(), [Ds, Be] = je(Mt), [Qd, Pt] = je(Mt), Ls = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, a = Nt(t), [l, u] = c.useState(null), f = c.useRef(!1), p = ee(s), h = St(r);
  return c.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d(mo, { ...a, children: /* @__PURE__ */ d(
    Ds,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d(
        Qd,
        {
          scope: t,
          onClose: c.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: i,
          children: o
        }
      )
    }
  ) });
};
Ls.displayName = Mt;
var Jd = "MenuAnchor", go = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Nt(n);
    return /* @__PURE__ */ d(ms, { ...r, ...o, ref: t });
  }
);
go.displayName = Jd;
var vo = "MenuPortal", [ef, Fs] = je(vo, {
  forceMount: void 0
}), $s = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Be(vo, t);
  return /* @__PURE__ */ d(ef, { scope: t, forceMount: n, children: /* @__PURE__ */ d(re, { present: n || s.open, children: /* @__PURE__ */ d(an, { asChild: !0, container: r, children: o }) }) });
};
$s.displayName = vo;
var pe = "MenuContent", [tf, bo] = je(pe), Vs = c.forwardRef(
  (e, t) => {
    const n = Fs(pe, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(pe, e.__scopeMenu), i = Pt(pe, e.__scopeMenu);
    return /* @__PURE__ */ d(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(re, { present: o || s.open, children: /* @__PURE__ */ d(bt.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d(nf, { ...r, ref: t }) : /* @__PURE__ */ d(of, { ...r, ref: t }) }) }) });
  }
), nf = c.forwardRef(
  (e, t) => {
    const n = Be(pe, e.__scopeMenu), o = c.useRef(null), r = B(t, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return ho(s);
    }, []), /* @__PURE__ */ d(
      wo,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: E(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), of = c.forwardRef((e, t) => {
  const n = Be(pe, e.__scopeMenu);
  return /* @__PURE__ */ d(
    wo,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), wo = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: v,
      ...m
    } = e, b = Be(pe, n), w = Pt(pe, n), y = Nt(n), x = Os(n), C = qd(n), [S, M] = c.useState(null), R = c.useRef(null), P = B(t, R, b.onContentChange), I = c.useRef(0), D = c.useRef(""), V = c.useRef(0), _ = c.useRef(null), W = c.useRef("right"), F = c.useRef(0), H = v ? dn : c.Fragment, L = v ? { as: Ie, allowPinchZoom: !0 } : void 0, G = (N) => {
      var O, Y;
      const K = D.current + N, U = C().filter((Q) => !Q.disabled), se = document.activeElement, Me = (O = U.find((Q) => Q.ref.current === se)) == null ? void 0 : O.textValue, fe = U.map((Q) => Q.textValue), Ne = gf(fe, K, Me), ae = (Y = U.find((Q) => Q.textValue === Ne)) == null ? void 0 : Y.ref.current;
      (function Q(j) {
        D.current = j, window.clearTimeout(I.current), j !== "" && (I.current = window.setTimeout(() => Q(""), 1e3));
      })(K), ae && setTimeout(() => ae.focus());
    };
    c.useEffect(() => () => window.clearTimeout(I.current), []), oo();
    const T = c.useCallback((N) => {
      var U, se;
      return W.current === ((U = _.current) == null ? void 0 : U.side) && bf(N, (se = _.current) == null ? void 0 : se.area);
    }, []);
    return /* @__PURE__ */ d(
      tf,
      {
        scope: n,
        searchRef: D,
        onItemEnter: c.useCallback(
          (N) => {
            T(N) && N.preventDefault();
          },
          [T]
        ),
        onItemLeave: c.useCallback(
          (N) => {
            var K;
            T(N) || ((K = R.current) == null || K.focus(), M(null));
          },
          [T]
        ),
        onTriggerLeave: c.useCallback(
          (N) => {
            T(N) && N.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: V,
        onPointerGraceIntentChange: c.useCallback((N) => {
          _.current = N;
        }, []),
        children: /* @__PURE__ */ d(H, { ...L, children: /* @__PURE__ */ d(
          tn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: E(s, (N) => {
              var K;
              N.preventDefault(), (K = R.current) == null || K.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d(
              Rt,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ d(
                  Cs,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: E(l, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      hs,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ni(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: E(m.onKeyDown, (N) => {
                          const U = N.target.closest("[data-radix-menu-content]") === N.currentTarget, se = N.ctrlKey || N.altKey || N.metaKey, Me = N.key.length === 1;
                          U && (N.key === "Tab" && N.preventDefault(), !se && Me && G(N.key));
                          const fe = R.current;
                          if (N.target !== fe || !jd.includes(N.key)) return;
                          N.preventDefault();
                          const ae = C().filter((O) => !O.disabled).map((O) => O.ref.current);
                          Ts.includes(N.key) && ae.reverse(), mf(ae);
                        }),
                        onBlur: E(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(I.current), D.current = "");
                        }),
                        onPointerMove: E(
                          e.onPointerMove,
                          wt((N) => {
                            const K = N.target, U = F.current !== N.clientX;
                            if (N.currentTarget.contains(K) && U) {
                              const se = N.clientX > F.current ? "right" : "left";
                              W.current = se, F.current = N.clientX;
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
Vs.displayName = pe;
var rf = "MenuGroup", yo = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(A.div, { role: "group", ...o, ref: t });
  }
);
yo.displayName = rf;
var sf = "MenuLabel", Bs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(A.div, { ...o, ref: t });
  }
);
Bs.displayName = sf;
var Ht = "MenuItem", gr = "menu.itemSelect", fn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = c.useRef(null), i = Pt(Ht, e.__scopeMenu), a = bo(Ht, e.__scopeMenu), l = B(t, s), u = c.useRef(!1), f = () => {
      const p = s.current;
      if (!n && p) {
        const h = new CustomEvent(gr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(gr, (g) => o == null ? void 0 : o(g), { once: !0 }), Wt(p, h), h.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d(
      Ws,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: E(e.onClick, f),
        onPointerDown: (p) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, p), u.current = !0;
        },
        onPointerUp: E(e.onPointerUp, (p) => {
          var h;
          u.current || (h = p.currentTarget) == null || h.click();
        }),
        onKeyDown: E(e.onKeyDown, (p) => {
          const h = a.searchRef.current !== "";
          n || h && p.key === " " || Vn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
fn.displayName = Ht;
var Ws = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, i = bo(Ht, n), a = Os(n), l = c.useRef(null), u = B(t, l), [f, p] = c.useState(!1), [h, g] = c.useState("");
    return c.useEffect(() => {
      const v = l.current;
      v && g((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ d(
      bt.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? h,
        children: /* @__PURE__ */ d(Ss, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ d(
          A.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: E(
              e.onPointerMove,
              wt((v) => {
                o ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: E(
              e.onPointerLeave,
              wt((v) => i.onItemLeave(v))
            ),
            onFocus: E(e.onFocus, () => p(!0)),
            onBlur: E(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), af = "MenuCheckboxItem", Gs = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ d(js, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d(
      fn,
      {
        role: "menuitemcheckbox",
        "aria-checked": jt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": So(n),
        onSelect: E(
          r.onSelect,
          () => o == null ? void 0 : o(jt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gs.displayName = af;
var zs = "MenuRadioGroup", [cf, lf] = je(
  zs,
  { value: void 0, onValueChange: () => {
  } }
), Ks = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ee(o);
    return /* @__PURE__ */ d(cf, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ d(yo, { ...r, ref: t }) });
  }
);
Ks.displayName = zs;
var Us = "MenuRadioItem", Hs = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = lf(Us, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ d(js, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ d(
      fn,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": So(s),
        onSelect: E(
          o.onSelect,
          () => {
            var i;
            return (i = r.onValueChange) == null ? void 0 : i.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Hs.displayName = Us;
var xo = "MenuItemIndicator", [js, uf] = je(
  xo,
  { checked: !1 }
), Ys = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = uf(xo, n);
    return /* @__PURE__ */ d(
      re,
      {
        present: o || jt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d(
          A.span,
          {
            ...r,
            ref: t,
            "data-state": So(s.checked)
          }
        )
      }
    );
  }
);
Ys.displayName = xo;
var df = "MenuSeparator", Xs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ d(
      A.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Xs.displayName = df;
var ff = "MenuArrow", qs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Nt(n);
    return /* @__PURE__ */ d(gs, { ...r, ...o, ref: t });
  }
);
qs.displayName = ff;
var Co = "MenuSub", [pf, Zs] = je(Co), Qs = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = Be(Co, t), i = Nt(t), [a, l] = c.useState(null), [u, f] = c.useState(null), p = ee(r);
  return c.useEffect(() => (s.open === !1 && p(!1), () => p(!1)), [s.open, p]), /* @__PURE__ */ d(mo, { ...i, children: /* @__PURE__ */ d(
    Ds,
    {
      scope: t,
      open: o,
      onOpenChange: p,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ d(
        pf,
        {
          scope: t,
          contentId: ie(),
          triggerId: ie(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Qs.displayName = Co;
var mt = "MenuSubTrigger", Js = c.forwardRef(
  (e, t) => {
    const n = Be(mt, e.__scopeMenu), o = Pt(mt, e.__scopeMenu), r = Zs(mt, e.__scopeMenu), s = bo(mt, e.__scopeMenu), i = c.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s, u = { __scopeMenu: e.__scopeMenu }, f = c.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return c.useEffect(() => f, [f]), c.useEffect(() => {
      const p = a.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [a, l]), /* @__PURE__ */ d(go, { asChild: !0, ...u, children: /* @__PURE__ */ d(
      Ws,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": ni(n.open),
        ...e,
        ref: yt(t, r.onTriggerChange),
        onClick: (p) => {
          var h;
          (h = e.onClick) == null || h.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: E(
          e.onPointerMove,
          wt((p) => {
            s.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: E(
          e.onPointerLeave,
          wt((p) => {
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
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(p), p.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: E(e.onKeyDown, (p) => {
          var g;
          const h = s.searchRef.current !== "";
          e.disabled || h && p.key === " " || Yd[o.dir].includes(p.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Js.displayName = mt;
var ei = "MenuSubContent", ti = c.forwardRef(
  (e, t) => {
    const n = Fs(pe, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(pe, e.__scopeMenu), i = Pt(pe, e.__scopeMenu), a = Zs(ei, e.__scopeMenu), l = c.useRef(null), u = B(t, l);
    return /* @__PURE__ */ d(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(re, { present: o || s.open, children: /* @__PURE__ */ d(bt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(
      wo,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: E(e.onFocusOutside, (f) => {
          f.target !== a.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: E(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: E(e.onKeyDown, (f) => {
          var g;
          const p = f.currentTarget.contains(f.target), h = Xd[i.dir].includes(f.key);
          p && h && (s.onOpenChange(!1), (g = a.trigger) == null || g.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
ti.displayName = ei;
function ni(e) {
  return e ? "open" : "closed";
}
function jt(e) {
  return e === "indeterminate";
}
function So(e) {
  return jt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function mf(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function gf(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = hf(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function vf(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, l = t[s].y, u = t[i].x, f = t[i].y;
    l > o != f > o && n < (u - a) * (o - l) / (f - l) + a && (r = !r);
  }
  return r;
}
function bf(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return vf(n, t);
}
function wt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var wf = Ls, yf = go, xf = $s, Cf = Vs, Sf = yo, Rf = Bs, Ef = fn, Mf = Gs, Nf = Ks, Pf = Hs, If = Ys, _f = Xs, Af = qs, Tf = Qs, kf = Js, Of = ti, Ro = "DropdownMenu", [Df, Wh] = de(
  Ro,
  [ks]
), oe = ks(), [Lf, oi] = Df(Ro), ri = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = oe(t), u = c.useRef(null), [f = !1, p] = me({
    prop: r,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ d(
    Lf,
    {
      scope: t,
      triggerId: ie(),
      triggerRef: u,
      contentId: ie(),
      open: f,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((h) => !h), [p]),
      modal: a,
      children: /* @__PURE__ */ d(wf, { ...l, open: f, onOpenChange: p, dir: o, modal: a, children: n })
    }
  );
};
ri.displayName = Ro;
var si = "DropdownMenuTrigger", ii = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = oi(si, n), i = oe(n);
    return /* @__PURE__ */ d(yf, { asChild: !0, ...i, children: /* @__PURE__ */ d(
      A.button,
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
        ref: yt(t, s.triggerRef),
        onPointerDown: E(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: E(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && s.onOpenToggle(), a.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
ii.displayName = si;
var Ff = "DropdownMenuPortal", ai = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = oe(t);
  return /* @__PURE__ */ d(xf, { ...o, ...n });
};
ai.displayName = Ff;
var ci = "DropdownMenuContent", li = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oi(ci, n), s = oe(n), i = c.useRef(!1);
    return /* @__PURE__ */ d(
      Cf,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: E(e.onCloseAutoFocus, (a) => {
          var l;
          i.current || (l = r.triggerRef.current) == null || l.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: E(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!r.modal || f) && (i.current = !0);
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
li.displayName = ci;
var $f = "DropdownMenuGroup", ui = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ d(Sf, { ...r, ...o, ref: t });
  }
);
ui.displayName = $f;
var Vf = "DropdownMenuLabel", di = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ d(Rf, { ...r, ...o, ref: t });
  }
);
di.displayName = Vf;
var Bf = "DropdownMenuItem", fi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ d(Ef, { ...r, ...o, ref: t });
  }
);
fi.displayName = Bf;
var Wf = "DropdownMenuCheckboxItem", pi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(Mf, { ...r, ...o, ref: t });
});
pi.displayName = Wf;
var Gf = "DropdownMenuRadioGroup", mi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(Nf, { ...r, ...o, ref: t });
});
mi.displayName = Gf;
var zf = "DropdownMenuRadioItem", hi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(Pf, { ...r, ...o, ref: t });
});
hi.displayName = zf;
var Kf = "DropdownMenuItemIndicator", gi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(If, { ...r, ...o, ref: t });
});
gi.displayName = Kf;
var Uf = "DropdownMenuSeparator", vi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(_f, { ...r, ...o, ref: t });
});
vi.displayName = Uf;
var Hf = "DropdownMenuArrow", jf = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ d(Af, { ...r, ...o, ref: t });
  }
);
jf.displayName = Hf;
var Yf = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, i = oe(t), [a = !1, l] = me({
    prop: o,
    defaultProp: s,
    onChange: r
  });
  return /* @__PURE__ */ d(Tf, { ...i, open: a, onOpenChange: l, children: n });
}, Xf = "DropdownMenuSubTrigger", bi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(kf, { ...r, ...o, ref: t });
});
bi.displayName = Xf;
var qf = "DropdownMenuSubContent", wi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ d(
    Of,
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
wi.displayName = qf;
var Zf = ri, Qf = ii, yi = ai, Jf = li, ep = ui, tp = di, np = fi, op = pi, rp = mi, sp = hi, xi = gi, ip = vi, ap = Yf, cp = bi, lp = wi;
const Gh = Zf, zh = Qf, Kh = ep, Uh = yi, Hh = ap, jh = rp, Yh = ({
  className: e,
  inset: t,
  children: n,
  ...o
}) => /* @__PURE__ */ z(
  cp,
  {
    className: k(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ d(fc, { className: "ml-auto" })
    ]
  }
), Xh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  lp,
  {
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
), qh = ({
  className: e,
  sideOffset: t = 4,
  ...n
}) => /* @__PURE__ */ d(yi, { children: /* @__PURE__ */ d(
  Jf,
  {
    sideOffset: t,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }), Zh = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ d(
  np,
  {
    className: k(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
), Qh = ({
  className: e,
  children: t,
  checked: n,
  ...o
}) => /* @__PURE__ */ z(
  op,
  {
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(xi, { children: /* @__PURE__ */ d(qn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
), Jh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ z(
  sp,
  {
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(xi, { children: /* @__PURE__ */ d(_r, { className: "fill-current h-2 w-2" }) }) }),
      t
    ]
  }
), eg = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ d(
  tp,
  {
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
), tg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  ip,
  {
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
), ng = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "span",
  {
    className: k("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
var up = (e) => e.type === "checkbox", dp = (e) => e instanceof Date, Ci = (e) => e == null;
const fp = (e) => typeof e == "object";
var it = (e) => !Ci(e) && !Array.isArray(e) && fp(e) && !dp(e), pp = (e) => it(e) && e.target ? up(e.target) ? e.target.checked : e.target.value : e, mp = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, hp = (e, t) => e.has(mp(t)), gp = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return it(t) && t.hasOwnProperty("isPrototypeOf");
}, vp = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Eo(e) {
  let t;
  const n = Array.isArray(e), o = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(vp && (e instanceof Blob || o)) && (n || it(e)))
    if (t = n ? [] : {}, !n && !gp(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Eo(e[r]));
  else
    return e;
  return t;
}
var Si = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Bn = (e) => e === void 0, ne = (e, t, n) => {
  if (!t || !it(e))
    return n;
  const o = Si(t.split(/[,[\].]+?/)).reduce((r, s) => Ci(r) ? r : r[s], e);
  return Bn(o) || o === e ? Bn(e[t]) ? n : e[t] : o;
}, In = (e) => typeof e == "boolean", bp = (e) => /^\w*$/.test(e), wp = (e) => Si(e.replace(/["|']|\]/g, "").split(/\.|\[/)), vr = (e, t, n) => {
  let o = -1;
  const r = bp(t) ? [t] : wp(t), s = r.length, i = s - 1;
  for (; ++o < s; ) {
    const a = r[o];
    let l = n;
    if (o !== i) {
      const u = e[a];
      l = it(u) || Array.isArray(u) ? u : isNaN(+r[o + 1]) ? {} : [];
    }
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    e[a] = l, e = e[a];
  }
  return e;
};
const br = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, wr = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ri = Z.createContext(null), pn = () => Z.useContext(Ri), yp = (e) => {
  const { children: t, ...n } = e;
  return Z.createElement(Ri.Provider, { value: n }, t);
};
var xp = (e, t, n, o = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(r, s, {
      get: () => {
        const i = s;
        return t._proxyFormState[i] !== wr.all && (t._proxyFormState[i] = !o || wr.all), n && (n[i] = !0), e[i];
      }
    });
  return r;
}, Cp = (e) => it(e) && !Object.keys(e).length, Sp = (e, t, n, o) => {
  n(e);
  const { name: r, ...s } = e;
  return Cp(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === !o);
}, Rp = (e) => Array.isArray(e) ? e : [e], Ei = (e, t, n) => !e || !t || e === t || Rp(e).some((o) => o && (n ? o === t : o.startsWith(t) || t.startsWith(o)));
function Mi(e) {
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
function Ep(e) {
  const t = pn(), { control: n = t.control, disabled: o, name: r, exact: s } = e || {}, [i, a] = Z.useState(n._formState), l = Z.useRef(!0), u = Z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = Z.useRef(r);
  return f.current = r, Mi({
    disabled: o,
    next: (p) => l.current && Ei(f.current, p.name, s) && Sp(p, u.current, n._updateFormState) && a({
      ...n._formState,
      ...p
    }),
    subject: n._subjects.state
  }), Z.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), Z.useMemo(() => xp(i, n, u.current, !1), [i, n]);
}
var Mp = (e) => typeof e == "string", Np = (e, t, n, o, r) => Mp(e) ? ne(n, e, r) : Array.isArray(e) ? e.map((s) => ne(n, s)) : n;
function Pp(e) {
  const t = pn(), { control: n = t.control, name: o, defaultValue: r, disabled: s, exact: i } = e || {}, a = Z.useRef(o);
  a.current = o, Mi({
    disabled: s,
    subject: n._subjects.values,
    next: (f) => {
      Ei(a.current, f.name, i) && u(Eo(Np(a.current, n._names, f.values || n._formValues, !1, r)));
    }
  });
  const [l, u] = Z.useState(n._getWatch(o, r));
  return Z.useEffect(() => n._removeUnmounted()), l;
}
function Ip(e) {
  const t = pn(), { name: n, disabled: o, control: r = t.control, shouldUnregister: s } = e, i = hp(r._names.array, n), a = Pp({
    control: r,
    name: n,
    defaultValue: ne(r._formValues, n, ne(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Ep({
    control: r,
    name: n,
    exact: !0
  }), u = Z.useRef(r.register(n, {
    ...e.rules,
    value: a,
    ...In(e.disabled) ? { disabled: e.disabled } : {}
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
    value: a,
    ...In(o) || l.disabled ? { disabled: l.disabled || o } : {},
    onChange: (h) => u.current.onChange({
      target: {
        value: pp(h),
        name: n
      },
      type: br.CHANGE
    }),
    onBlur: () => u.current.onBlur({
      target: {
        value: ne(r._formValues, n),
        name: n
      },
      type: br.BLUR
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
    a,
    r._fields
  ]);
  return Z.useEffect(() => {
    const h = r._options.shouldUnregister || s, g = (v, m) => {
      const b = ne(r._fields, v);
      b && b._f && (b._f.mount = m);
    };
    if (g(n, !0), h) {
      const v = Eo(ne(r._options.defaultValues, n));
      vr(r._defaultValues, n, v), Bn(ne(r._formValues, n)) && vr(r._formValues, n, v);
    }
    return () => {
      (i ? h && !r._state.action : h) ? r.unregister(n) : g(n, !1);
    };
  }, [n, r, i, s]), Z.useEffect(() => {
    In(o) && ne(r._fields, n) && r._updateDisabledField({
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
const _p = (e) => e.render(Ip(e));
var Ap = "Label", Ni = c.forwardRef((e, t) => /* @__PURE__ */ d(
  A.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ni.displayName = Ap;
var Tp = Ni;
const kp = He(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Op = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Tp,
  {
    ref: n,
    className: k(kp(), e),
    ...t
  }
)), og = yp, Pi = c.createContext(
  {}
), rg = ({
  ...e
}) => /* @__PURE__ */ d(Pi.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d(_p, { ...e }) }), mn = () => {
  const e = c.useContext(Pi), t = c.useContext(Ii), { getFieldState: n, formState: o } = pn(), r = n(e.name, o);
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
}, Ii = c.createContext(
  {}
), Dp = c.forwardRef(({ className: e, ...t }, n) => {
  const o = c.useId();
  return /* @__PURE__ */ d(Ii.Provider, { value: { id: o }, children: /* @__PURE__ */ d("div", { ref: n, className: k("space-y-2", e), ...t }) });
});
Dp.displayName = "FormItem";
const Lp = c.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: r } = mn();
  return /* @__PURE__ */ d(
    Op,
    {
      ref: n,
      className: k(o && "text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
});
Lp.displayName = "FormLabel";
const Fp = c.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: r, formMessageId: s } = mn();
  return /* @__PURE__ */ d(
    Ie,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${r} ${s}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Fp.displayName = "FormControl";
const $p = c.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = mn();
  return /* @__PURE__ */ d(
    "p",
    {
      ref: n,
      id: o,
      className: k("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
$p.displayName = "FormDescription";
const Vp = c.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: r, formMessageId: s } = mn(), i = r ? String(r == null ? void 0 : r.message) : t;
  return i ? /* @__PURE__ */ d(
    "p",
    {
      ref: o,
      id: s,
      className: k("text-sm font-medium text-destructive", e),
      ...n,
      children: i
    }
  ) : null;
});
Vp.displayName = "FormMessage";
const sg = c.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ d(
    "input",
    {
      type: t,
      className: k(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: o,
      ...n
    }
  )
);
var Bp = "VisuallyHidden", Mo = c.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    A.span,
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
Mo.displayName = Bp;
var Wp = Mo, at = "NavigationMenu", [No, _i, Gp] = Ct(at), [Wn, zp, Kp] = Ct(at), [Po, ig] = de(
  at,
  [Gp, Kp]
), [Up, he] = Po(at), [Hp, jp] = Po(at), Ai = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      delayDuration: i = 200,
      skipDelayDuration: a = 300,
      orientation: l = "horizontal",
      dir: u,
      ...f
    } = e, [p, h] = c.useState(null), g = B(t, (I) => h(I)), v = St(u), m = c.useRef(0), b = c.useRef(0), w = c.useRef(0), [y, x] = c.useState(!0), [C = "", S] = me({
      prop: o,
      onChange: (I) => {
        const D = I !== "", V = a > 0;
        D ? (window.clearTimeout(w.current), V && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          a
        )), r == null || r(I);
      },
      defaultProp: s
    }), M = c.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => S(""), 150);
    }, [S]), R = c.useCallback(
      (I) => {
        window.clearTimeout(b.current), S(I);
      },
      [S]
    ), P = c.useCallback(
      (I) => {
        C === I ? window.clearTimeout(b.current) : m.current = window.setTimeout(() => {
          window.clearTimeout(b.current), S(I);
        }, i);
      },
      [C, S, i]
    );
    return c.useEffect(() => () => {
      window.clearTimeout(m.current), window.clearTimeout(b.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ d(
      Oi,
      {
        scope: n,
        isRootMenu: !0,
        value: C,
        dir: v,
        orientation: l,
        rootNavigationMenu: p,
        onTriggerEnter: (I) => {
          window.clearTimeout(m.current), y ? P(I) : R(I);
        },
        onTriggerLeave: () => {
          window.clearTimeout(m.current), M();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: M,
        onItemSelect: (I) => {
          S((D) => D === I ? "" : I);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ d(
          A.nav,
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
Ai.displayName = at;
var Ti = "NavigationMenuSub", ki = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      orientation: i = "horizontal",
      ...a
    } = e, l = he(Ti, n), [u = "", f] = me({
      prop: o,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ d(
      Oi,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ d(A.div, { "data-orientation": i, ...a, ref: t })
      }
    );
  }
);
ki.displayName = Ti;
var Oi = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: o,
    dir: r,
    orientation: s,
    children: i,
    value: a,
    onItemSelect: l,
    onItemDismiss: u,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: h,
    onContentLeave: g
  } = e, [v, m] = c.useState(null), [b, w] = c.useState(/* @__PURE__ */ new Map()), [y, x] = c.useState(null);
  return /* @__PURE__ */ d(
    Up,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: o,
      value: a,
      previousValue: xt(a),
      baseId: ie(),
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
      onViewportContentChange: c.useCallback((C, S) => {
        w((M) => (M.set(C, S), new Map(M)));
      }, []),
      onViewportContentRemove: c.useCallback((C) => {
        w((S) => S.has(C) ? (S.delete(C), new Map(S)) : S);
      }, []),
      children: /* @__PURE__ */ d(No.Provider, { scope: t, children: /* @__PURE__ */ d(Hp, { scope: t, items: b, children: i }) })
    }
  );
}, Di = "NavigationMenuList", Li = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = he(Di, n), s = /* @__PURE__ */ d(A.ul, { "data-orientation": r.orientation, ...o, ref: t });
    return /* @__PURE__ */ d(A.div, { style: { position: "relative" }, ref: r.onIndicatorTrackChange, children: /* @__PURE__ */ d(No.Slot, { scope: n, children: r.isRootMenu ? /* @__PURE__ */ d(Ui, { asChild: !0, children: s }) : s }) });
  }
);
Li.displayName = Di;
var Fi = "NavigationMenuItem", [Yp, $i] = Po(Fi), Vi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: o, ...r } = e, s = ie(), i = o || s || "LEGACY_REACT_AUTO_VALUE", a = c.useRef(null), l = c.useRef(null), u = c.useRef(null), f = c.useRef(() => {
    }), p = c.useRef(!1), h = c.useCallback((v = "start") => {
      if (a.current) {
        f.current();
        const m = zn(a.current);
        m.length && Ao(v === "start" ? m : m.reverse());
      }
    }, []), g = c.useCallback(() => {
      if (a.current) {
        const v = zn(a.current);
        v.length && (f.current = nm(v));
      }
    }, []);
    return /* @__PURE__ */ d(
      Yp,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: a,
        focusProxyRef: u,
        wasEscapeCloseRef: p,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ d(A.li, { ...r, ref: t })
      }
    );
  }
);
Vi.displayName = Fi;
var Gn = "NavigationMenuTrigger", Bi = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: o, ...r } = e, s = he(Gn, e.__scopeNavigationMenu), i = $i(Gn, e.__scopeNavigationMenu), a = c.useRef(null), l = B(a, i.triggerRef, t), u = ji(s.baseId, i.value), f = Yi(s.baseId, i.value), p = c.useRef(!1), h = c.useRef(!1), g = i.value === s.value;
  return /* @__PURE__ */ z(Le, { children: [
    /* @__PURE__ */ d(No.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ d(Hi, { asChild: !0, children: /* @__PURE__ */ d(
      A.button,
      {
        id: u,
        disabled: o,
        "data-disabled": o ? "" : void 0,
        "data-state": To(g),
        "aria-expanded": g,
        "aria-controls": f,
        ...r,
        ref: l,
        onPointerEnter: E(e.onPointerEnter, () => {
          h.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: E(
          e.onPointerMove,
          Yt(() => {
            o || h.current || i.wasEscapeCloseRef.current || p.current || (s.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: E(
          e.onPointerLeave,
          Yt(() => {
            o || (s.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: E(e.onClick, () => {
          s.onItemSelect(i.value), h.current = g;
        }),
        onKeyDown: E(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          g && v.key === b && (i.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ z(Le, { children: [
      /* @__PURE__ */ d(
        Wp,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (v) => {
            const m = i.contentRef.current, b = v.relatedTarget, w = b === a.current, y = m == null ? void 0 : m.contains(b);
            (w || !y) && i.onFocusProxyEnter(w ? "start" : "end");
          }
        }
      ),
      s.viewport && /* @__PURE__ */ d("span", { "aria-owns": f })
    ] })
  ] });
});
Bi.displayName = Gn;
var Xp = "NavigationMenuLink", yr = "navigationMenu.linkSelect", Wi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: o, onSelect: r, ...s } = e;
    return /* @__PURE__ */ d(Hi, { asChild: !0, children: /* @__PURE__ */ d(
      A.a,
      {
        "data-active": o ? "" : void 0,
        "aria-current": o ? "page" : void 0,
        ...s,
        ref: t,
        onClick: E(
          e.onClick,
          (i) => {
            const a = i.target, l = new CustomEvent(yr, {
              bubbles: !0,
              cancelable: !0
            });
            if (a.addEventListener(yr, (u) => r == null ? void 0 : r(u), { once: !0 }), Wt(a, l), !l.defaultPrevented && !i.metaKey) {
              const u = new CustomEvent(Bt, {
                bubbles: !0,
                cancelable: !0
              });
              Wt(a, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Wi.displayName = Xp;
var Io = "NavigationMenuIndicator", qp = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = he(Io, e.__scopeNavigationMenu), s = !!r.value;
  return r.indicatorTrack ? Mr.createPortal(
    /* @__PURE__ */ d(re, { present: n || s, children: /* @__PURE__ */ d(Zp, { ...o, ref: t }) }),
    r.indicatorTrack
  ) : null;
});
qp.displayName = Io;
var Zp = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = he(Io, n), s = _i(n), [i, a] = c.useState(
    null
  ), [l, u] = c.useState(null), f = r.orientation === "horizontal", p = !!r.value;
  c.useEffect(() => {
    var m;
    const v = (m = s().find((b) => b.value === r.value)) == null ? void 0 : m.ref.current;
    v && a(v);
  }, [s, r.value]);
  const h = () => {
    i && u({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  };
  return Kn(i, h), Kn(r.indicatorTrack, h), l ? /* @__PURE__ */ d(
    A.div,
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
}), nt = "NavigationMenuContent", Gi = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = he(nt, e.__scopeNavigationMenu), s = $i(nt, e.__scopeNavigationMenu), i = B(s.contentRef, t), a = s.value === r.value, l = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...o
  };
  return r.viewport ? /* @__PURE__ */ d(Qp, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ d(re, { present: n || a, children: /* @__PURE__ */ d(
    zi,
    {
      "data-state": To(a),
      ...l,
      ref: i,
      onPointerEnter: E(e.onPointerEnter, r.onContentEnter),
      onPointerLeave: E(
        e.onPointerLeave,
        Yt(r.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !a && r.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
Gi.displayName = nt;
var Qp = c.forwardRef((e, t) => {
  const n = he(nt, e.__scopeNavigationMenu), { onViewportContentChange: o, onViewportContentRemove: r } = n;
  return te(() => {
    o(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, o]), te(() => () => r(e.value), [e.value, r]), null;
}), Bt = "navigationMenu.rootContentDismiss", zi = c.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: o,
    triggerRef: r,
    focusProxyRef: s,
    wasEscapeCloseRef: i,
    onRootContentClose: a,
    onContentFocusOutside: l,
    ...u
  } = e, f = he(nt, n), p = c.useRef(null), h = B(p, t), g = ji(f.baseId, o), v = Yi(f.baseId, o), m = _i(n), b = c.useRef(null), { onItemDismiss: w } = f;
  c.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const C = () => {
        var S;
        w(), a(), x.contains(document.activeElement) && ((S = r.current) == null || S.focus());
      };
      return x.addEventListener(Bt, C), () => x.removeEventListener(Bt, C);
    }
  }, [f.isRootMenu, e.value, r, w, a]);
  const y = c.useMemo(() => {
    const C = m().map((D) => D.value);
    f.dir === "rtl" && C.reverse();
    const S = C.indexOf(f.value), M = C.indexOf(f.previousValue), R = o === f.value, P = M === C.indexOf(o);
    if (!R && !P) return b.current;
    const I = (() => {
      if (S !== M) {
        if (R && M !== -1) return S > M ? "from-end" : "from-start";
        if (P && S !== -1) return S > M ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = I, I;
  }, [f.previousValue, f.value, f.dir, m, o]);
  return /* @__PURE__ */ d(Ui, { asChild: !0, children: /* @__PURE__ */ d(
    Rt,
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
        const x = new Event(Bt, {
          bubbles: !0,
          cancelable: !0
        });
        (C = p.current) == null || C.dispatchEvent(x);
      },
      onFocusOutside: E(e.onFocusOutside, (x) => {
        var S;
        l();
        const C = x.target;
        (S = f.rootNavigationMenu) != null && S.contains(C) && x.preventDefault();
      }),
      onPointerDownOutside: E(e.onPointerDownOutside, (x) => {
        var R;
        const C = x.target, S = m().some((P) => {
          var I;
          return (I = P.ref.current) == null ? void 0 : I.contains(C);
        }), M = f.isRootMenu && ((R = f.viewport) == null ? void 0 : R.contains(C));
        (S || M || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: E(e.onKeyDown, (x) => {
        var M;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const R = zn(x.currentTarget), P = document.activeElement, I = R.findIndex((_) => _ === P), V = x.shiftKey ? R.slice(0, I).reverse() : R.slice(I + 1, R.length);
          Ao(V) ? x.preventDefault() : (M = s.current) == null || M.focus();
        }
      }),
      onEscapeKeyDown: E(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), _o = "NavigationMenuViewport", Ki = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = !!he(_o, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d(re, { present: n || s, children: /* @__PURE__ */ d(Jp, { ...o, ref: t }) });
});
Ki.displayName = _o;
var Jp = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: o, ...r } = e, s = he(_o, n), i = B(t, s.onViewportChange), a = jp(
    nt,
    e.__scopeNavigationMenu
  ), [l, u] = c.useState(null), [f, p] = c.useState(null), h = l ? (l == null ? void 0 : l.width) + "px" : void 0, g = l ? (l == null ? void 0 : l.height) + "px" : void 0, v = !!s.value, m = v ? s.value : s.previousValue;
  return Kn(f, () => {
    f && u({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ d(
    A.div,
    {
      "data-state": To(v),
      "data-orientation": s.orientation,
      ...r,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": g,
        ...r.style
      },
      onPointerEnter: E(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: E(e.onPointerLeave, Yt(s.onContentLeave)),
      children: Array.from(a.items).map(([w, { ref: y, forceMount: x, ...C }]) => {
        const S = m === w;
        return /* @__PURE__ */ d(re, { present: x || S, children: /* @__PURE__ */ d(
          zi,
          {
            ...C,
            ref: yt(y, (M) => {
              S && M && p(M);
            })
          }
        ) }, w);
      })
    }
  );
}), em = "FocusGroup", Ui = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = he(em, n);
    return /* @__PURE__ */ d(Wn.Provider, { scope: n, children: /* @__PURE__ */ d(Wn.Slot, { scope: n, children: /* @__PURE__ */ d(A.div, { dir: r.dir, ...o, ref: t }) }) });
  }
), xr = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], tm = "FocusGroupItem", Hi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = zp(n), s = he(tm, n);
    return /* @__PURE__ */ d(Wn.ItemSlot, { scope: n, children: /* @__PURE__ */ d(
      A.button,
      {
        ...o,
        ref: t,
        onKeyDown: E(e.onKeyDown, (i) => {
          if (["Home", "End", ...xr].includes(i.key)) {
            let l = r().map((p) => p.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), xr.includes(i.key)) {
              const p = l.indexOf(i.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => Ao(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function zn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ao(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function nm(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Kn(e, t) {
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
function To(e) {
  return e ? "open" : "closed";
}
function ji(e, t) {
  return `${e}-trigger-${t}`;
}
function Yi(e, t) {
  return `${e}-content-${t}`;
}
function Yt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var om = Ai, rm = ki, Xi = Li, Cr = Vi, sm = Bi, qi = Wi, im = Gi, am = Ki;
const ag = ({ children: e }) => /* @__PURE__ */ z(om, { className: "relative z-10 list-none", children: [
  /* @__PURE__ */ d(Xi, { className: "flex max-w-max flex-1 list-none items-center justify-center gap-6 text-sm", children: e }),
  /* @__PURE__ */ d("div", { className: "absolute top-full flex justify-center", children: /* @__PURE__ */ d(am, { className: "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" }) })
] }), cg = ({
  href: e,
  title: t,
  children: n
}) => n ? /* @__PURE__ */ z(Cr, { children: [
  /* @__PURE__ */ z(sm, { className: "flex items-center gap-1 font-semibold", children: [
    t,
    " ",
    /* @__PURE__ */ d(Qt, { className: "size-4" })
  ] }),
  /* @__PURE__ */ d(im, { className: "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", children: /* @__PURE__ */ d(rm, { children: /* @__PURE__ */ d(Xi, { className: "flex flex-col gap-4 p-4", children: n }) }) })
] }) : /* @__PURE__ */ d(Cr, { children: /* @__PURE__ */ d(cm, { href: e, title: t }) }), cm = ({ href: e, title: t }) => {
  const { LinkElement: n } = en();
  return /* @__PURE__ */ d(qi, { asChild: !0, children: /* @__PURE__ */ d(n, { className: "text-sm font-semibold", href: e, children: t }) });
}, lg = ({
  href: e,
  title: t,
  description: n
}) => {
  const { LinkElement: o } = en();
  return /* @__PURE__ */ d("li", { className: "w-[224px]", children: /* @__PURE__ */ d(qi, { asChild: !0, children: /* @__PURE__ */ z(o, { href: e, className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ d("span", { className: "text-sm font-semibold", children: t }),
    /* @__PURE__ */ d("span", { className: "text-xs text-subtitle", children: n })
  ] }) }) });
}, lm = He("inline-block", {
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
}) => /* @__PURE__ */ d(t, { className: k(lm({ variant: e, align: n }), s), children: o.split(" ").map((a, l) => r.includes(l) ? /* @__PURE__ */ z("span", { className: "text-color-accent", children: [
  a,
  " "
] }, l) : a + " ") }), ug = ({
  price: e,
  discount: t,
  tax: n,
  currencyCode: o,
  variant: r = "h2",
  originalPriceVariant: s = "h4"
}) => {
  const i = t ?? 0, a = n ?? 0, l = (u) => new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: o ?? "EUR"
  }).format(u);
  return /* @__PURE__ */ z("div", { className: "flex items-center gap-2", children: [
    i > 0 && /* @__PURE__ */ d(
      Ze,
      {
        variant: s,
        className: "text-subtitle line-through",
        text: l(e + i + a)
      }
    ),
    /* @__PURE__ */ d(Ze, { variant: r, text: l(e) })
  ] });
};
var ko = "Radio", [um, Zi] = de(ko), [dm, fm] = um(ko), Qi = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: o,
      checked: r = !1,
      required: s,
      disabled: i,
      value: a = "on",
      onCheck: l,
      form: u,
      ...f
    } = e, [p, h] = c.useState(null), g = B(t, (b) => h(b)), v = c.useRef(!1), m = p ? u || !!p.closest("form") : !0;
    return /* @__PURE__ */ z(dm, { scope: n, checked: r, disabled: i, children: [
      /* @__PURE__ */ d(
        A.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": ta(r),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
          ...f,
          ref: g,
          onClick: E(e.onClick, (b) => {
            r || l == null || l(), m && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ d(
        pm,
        {
          control: p,
          bubbles: !v.current,
          name: o,
          value: a,
          checked: r,
          required: s,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Qi.displayName = ko;
var Ji = "RadioIndicator", ea = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e, s = fm(Ji, n);
    return /* @__PURE__ */ d(re, { present: o || s.checked, children: /* @__PURE__ */ d(
      A.span,
      {
        "data-state": ta(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
ea.displayName = Ji;
var pm = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), i = xt(n), a = Jt(t);
  return c.useEffect(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && p) {
      const h = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(h);
    }
  }, [i, n, o]), /* @__PURE__ */ d(
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
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function ta(e) {
  return e ? "checked" : "unchecked";
}
var mm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Oo = "RadioGroup", [hm, dg] = de(Oo, [
  ln,
  Zi
]), na = ln(), oa = Zi(), [gm, vm] = hm(Oo), ra = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: o,
      defaultValue: r,
      value: s,
      required: i = !1,
      disabled: a = !1,
      orientation: l,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...h
    } = e, g = na(n), v = St(u), [m, b] = me({
      prop: s,
      defaultProp: r,
      onChange: p
    });
    return /* @__PURE__ */ d(
      gm,
      {
        scope: n,
        name: o,
        required: i,
        disabled: a,
        value: m,
        onValueChange: b,
        children: /* @__PURE__ */ d(
          Cs,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ d(
              A.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
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
ra.displayName = Oo;
var sa = "RadioGroupItem", ia = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = vm(sa, n), i = s.disabled || o, a = na(n), l = oa(n), u = c.useRef(null), f = B(t, u), p = s.value === r.value, h = c.useRef(!1);
    return c.useEffect(() => {
      const g = (m) => {
        mm.includes(m.key) && (h.current = !0);
      }, v = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ d(
      Ss,
      {
        asChild: !0,
        ...a,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ d(
          Qi,
          {
            disabled: i,
            required: s.required,
            checked: p,
            ...l,
            ...r,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(r.value),
            onKeyDown: E((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: E(r.onFocus, () => {
              var g;
              h.current && ((g = u.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
ia.displayName = sa;
var bm = "RadioGroupIndicator", aa = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...o } = e, r = oa(n);
    return /* @__PURE__ */ d(ea, { ...r, ...o, ref: t });
  }
);
aa.displayName = bm;
var wm = ra, ym = ia, xm = aa;
const fg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  wm,
  {
    className: k("grid gap-2", e),
    ...t,
    ref: n
  }
)), pg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ym,
  {
    ref: n,
    className: k(
      "aspect-square h-4 w-4 rounded-full border border-neutral-400 text-neutral-600 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neutral-600 data-[state=checked]:bg-neutral-600",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(xm, { className: "flex items-center justify-center", children: /* @__PURE__ */ d(_r, { className: "h-1.5 w-1.5 fill-base-white text-base-white" }) })
  }
));
function Sr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Cm = [" ", "Enter", "ArrowUp", "ArrowDown"], Sm = [" ", "Enter"], It = "Select", [hn, gn, Rm] = Ct(It), [ct, mg] = de(It, [
  Rm,
  sn
]), vn = sn(), [Em, We] = ct(It), [Mm, Nm] = ct(It), ca = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: h,
    required: g,
    form: v
  } = e, m = vn(t), [b, w] = c.useState(null), [y, x] = c.useState(null), [C, S] = c.useState(!1), M = St(u), [R = !1, P] = me({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [I, D] = me({
    prop: i,
    defaultProp: a,
    onChange: l
  }), V = c.useRef(null), _ = b ? v || !!b.closest("form") : !0, [W, F] = c.useState(/* @__PURE__ */ new Set()), H = Array.from(W).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ d(mo, { ...m, children: /* @__PURE__ */ z(
    Em,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: ie(),
      value: I,
      onValueChange: D,
      open: R,
      onOpenChange: P,
      dir: M,
      triggerPointerDownPosRef: V,
      disabled: h,
      children: [
        /* @__PURE__ */ d(hn.Provider, { scope: t, children: /* @__PURE__ */ d(
          Mm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((L) => {
              F((G) => new Set(G).add(L));
            }, []),
            onNativeOptionRemove: c.useCallback((L) => {
              F((G) => {
                const T = new Set(G);
                return T.delete(L), T;
              });
            }, []),
            children: n
          }
        ) }),
        _ ? /* @__PURE__ */ z(
          Oa,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: I,
            onChange: (L) => D(L.target.value),
            disabled: h,
            form: v,
            children: [
              I === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(W)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
ca.displayName = It;
var la = "SelectTrigger", ua = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = vn(n), i = We(la, n), a = i.disabled || o, l = B(t, i.onTriggerChange), u = gn(n), f = c.useRef("touch"), [p, h, g] = Da((m) => {
      const b = u().filter((x) => !x.disabled), w = b.find((x) => x.value === i.value), y = La(b, m, w);
      y !== void 0 && i.onValueChange(y.value);
    }), v = (m) => {
      a || (i.onOpenChange(!0), g()), m && (i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d(ms, { asChild: !0, ...s, children: /* @__PURE__ */ d(
      A.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": ka(i.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: E(r.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && v(m);
        }),
        onPointerDown: E(r.onPointerDown, (m) => {
          f.current = m.pointerType;
          const b = m.target;
          b.hasPointerCapture(m.pointerId) && b.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (v(m), m.preventDefault());
        }),
        onKeyDown: E(r.onKeyDown, (m) => {
          const b = p.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(b && m.key === " ") && Cm.includes(m.key) && (v(), m.preventDefault());
        })
      }
    ) });
  }
);
ua.displayName = la;
var da = "SelectValue", fa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: i = "", ...a } = e, l = We(da, n), { onValueNodeHasChildrenChange: u } = l, f = s !== void 0, p = B(t, l.onValueNodeChange);
    return te(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ d(
      A.span,
      {
        ...a,
        ref: p,
        style: { pointerEvents: "none" },
        children: ka(l.value) ? /* @__PURE__ */ d(Le, { children: i }) : s
      }
    );
  }
);
fa.displayName = da;
var Pm = "SelectIcon", pa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ d(A.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
pa.displayName = Pm;
var Im = "SelectPortal", ma = (e) => /* @__PURE__ */ d(an, { asChild: !0, ...e });
ma.displayName = Im;
var Ke = "SelectContent", ha = c.forwardRef(
  (e, t) => {
    const n = We(Ke, e.__scopeSelect), [o, r] = c.useState();
    if (te(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? Zt.createPortal(
        /* @__PURE__ */ d(ga, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(hn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d(va, { ...e, ref: t });
  }
);
ha.displayName = Ke;
var ge = 10, [ga, Ge] = ct(Ke), _m = "SelectContentImpl", va = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
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
    } = e, y = We(Ke, n), [x, C] = c.useState(null), [S, M] = c.useState(null), R = B(t, (O) => C(O)), [P, I] = c.useState(null), [D, V] = c.useState(
      null
    ), _ = gn(n), [W, F] = c.useState(!1), H = c.useRef(!1);
    c.useEffect(() => {
      if (x) return ho(x);
    }, [x]), oo();
    const L = c.useCallback(
      (O) => {
        const [Y, ...Q] = _().map((q) => q.ref.current), [j] = Q.slice(-1), X = document.activeElement;
        for (const q of O)
          if (q === X || (q == null || q.scrollIntoView({ block: "nearest" }), q === Y && S && (S.scrollTop = 0), q === j && S && (S.scrollTop = S.scrollHeight), q == null || q.focus(), document.activeElement !== X)) return;
      },
      [_, S]
    ), G = c.useCallback(
      () => L([P, x]),
      [L, P, x]
    );
    c.useEffect(() => {
      W && G();
    }, [W, G]);
    const { onOpenChange: T, triggerPointerDownPosRef: N } = y;
    c.useEffect(() => {
      if (x) {
        let O = { x: 0, y: 0 };
        const Y = (j) => {
          var X, q;
          O = {
            x: Math.abs(Math.round(j.pageX) - (((X = N.current) == null ? void 0 : X.x) ?? 0)),
            y: Math.abs(Math.round(j.pageY) - (((q = N.current) == null ? void 0 : q.y) ?? 0))
          };
        }, Q = (j) => {
          O.x <= 10 && O.y <= 10 ? j.preventDefault() : x.contains(j.target) || T(!1), document.removeEventListener("pointermove", Y), N.current = null;
        };
        return N.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [x, T, N]), c.useEffect(() => {
      const O = () => T(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [T]);
    const [K, U] = Da((O) => {
      const Y = _().filter((X) => !X.disabled), Q = Y.find((X) => X.ref.current === document.activeElement), j = La(Y, O, Q);
      j && setTimeout(() => j.ref.current.focus());
    }), se = c.useCallback(
      (O, Y, Q) => {
        const j = !H.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && (I(O), j && (H.current = !0));
      },
      [y.value]
    ), Me = c.useCallback(() => x == null ? void 0 : x.focus(), [x]), fe = c.useCallback(
      (O, Y, Q) => {
        const j = !H.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && V(O);
      },
      [y.value]
    ), Ne = o === "popper" ? Un : ba, ae = Ne === Un ? {
      side: a,
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
      ga,
      {
        scope: n,
        content: x,
        viewport: S,
        onViewportChange: M,
        itemRefCallback: se,
        selectedItem: P,
        onItemLeave: Me,
        itemTextRefCallback: fe,
        focusSelectedItem: G,
        selectedItemText: D,
        position: o,
        isPositioned: W,
        searchRef: K,
        children: /* @__PURE__ */ d(dn, { as: Ie, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          tn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: E(r, (O) => {
              var Y;
              (Y = y.trigger) == null || Y.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              Rt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  Ne,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...ae,
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
                    onKeyDown: E(w.onKeyDown, (O) => {
                      const Y = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !Y && O.key.length === 1 && U(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let j = _().filter((X) => !X.disabled).map((X) => X.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (j = j.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const X = O.target, q = j.indexOf(X);
                          j = j.slice(q + 1);
                        }
                        setTimeout(() => L(j)), O.preventDefault();
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
va.displayName = _m;
var Am = "SelectItemAlignedPosition", ba = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = We(Ke, n), i = Ge(Ke, n), [a, l] = c.useState(null), [u, f] = c.useState(null), p = B(t, (R) => f(R)), h = gn(n), g = c.useRef(!1), v = c.useRef(!0), { viewport: m, selectedItem: b, selectedItemText: w, focusSelectedItem: y } = i, x = c.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && m && b && w) {
      const R = s.trigger.getBoundingClientRect(), P = u.getBoundingClientRect(), I = s.valueNode.getBoundingClientRect(), D = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const X = D.left - P.left, q = I.left - X, ce = R.left - q, ye = R.width + ce, lt = Math.max(ye, P.width), ut = window.innerWidth - ge, dt = Sr(q, [
          ge,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ge, ut - lt)
        ]);
        a.style.minWidth = ye + "px", a.style.left = dt + "px";
      } else {
        const X = P.right - D.right, q = window.innerWidth - I.right - X, ce = window.innerWidth - R.right - q, ye = R.width + ce, lt = Math.max(ye, P.width), ut = window.innerWidth - ge, dt = Sr(q, [
          ge,
          Math.max(ge, ut - lt)
        ]);
        a.style.minWidth = ye + "px", a.style.right = dt + "px";
      }
      const V = h(), _ = window.innerHeight - ge * 2, W = m.scrollHeight, F = window.getComputedStyle(u), H = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), G = parseInt(F.borderBottomWidth, 10), T = parseInt(F.paddingBottom, 10), N = H + L + W + T + G, K = Math.min(b.offsetHeight * 5, N), U = window.getComputedStyle(m), se = parseInt(U.paddingTop, 10), Me = parseInt(U.paddingBottom, 10), fe = R.top + R.height / 2 - ge, Ne = _ - fe, ae = b.offsetHeight / 2, O = b.offsetTop + ae, Y = H + L + O, Q = N - Y;
      if (Y <= fe) {
        const X = V.length > 0 && b === V[V.length - 1].ref.current;
        a.style.bottom = "0px";
        const q = u.clientHeight - m.offsetTop - m.offsetHeight, ce = Math.max(
          Ne,
          ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? Me : 0) + q + G
        ), ye = Y + ce;
        a.style.height = ye + "px";
      } else {
        const X = V.length > 0 && b === V[0].ref.current;
        a.style.top = "0px";
        const ce = Math.max(
          fe,
          H + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? se : 0) + ae
        ) + Q;
        a.style.height = ce + "px", m.scrollTop = Y - fe + m.offsetTop;
      }
      a.style.margin = `${ge}px 0`, a.style.minHeight = K + "px", a.style.maxHeight = _ + "px", o == null || o(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    a,
    u,
    m,
    b,
    w,
    s.dir,
    o
  ]);
  te(() => x(), [x]);
  const [C, S] = c.useState();
  te(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const M = c.useCallback(
    (R) => {
      R && v.current === !0 && (x(), y == null || y(), v.current = !1);
    },
    [x, y]
  );
  return /* @__PURE__ */ d(
    km,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: M,
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
            A.div,
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
ba.displayName = Am;
var Tm = "SelectPopperPosition", Un = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = ge,
    ...s
  } = e, i = vn(n);
  return /* @__PURE__ */ d(
    hs,
    {
      ...i,
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
Un.displayName = Tm;
var [km, Do] = ct(Ke, {}), Hn = "SelectViewport", wa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Ge(Hn, n), i = Do(Hn, n), a = B(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ z(Le, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d(hn.Slot, { scope: n, children: /* @__PURE__ */ d(
        A.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: a,
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
          onScroll: E(r.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: h } = i;
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
wa.displayName = Hn;
var ya = "SelectGroup", [Om, Dm] = ct(ya), xa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = ie();
    return /* @__PURE__ */ d(Om, { scope: n, id: r, children: /* @__PURE__ */ d(A.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
xa.displayName = ya;
var Ca = "SelectLabel", Sa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Dm(Ca, n);
    return /* @__PURE__ */ d(A.div, { id: r.id, ...o, ref: t });
  }
);
Sa.displayName = Ca;
var Xt = "SelectItem", [Lm, Ra] = ct(Xt), Ea = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...i
    } = e, a = We(Xt, n), l = Ge(Xt, n), u = a.value === o, [f, p] = c.useState(s ?? ""), [h, g] = c.useState(!1), v = B(
      t,
      (y) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, y, o, r);
      }
    ), m = ie(), b = c.useRef("touch"), w = () => {
      r || (a.onValueChange(o), a.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      Lm,
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
          hn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: f,
            children: /* @__PURE__ */ d(
              A.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: E(i.onFocus, () => g(!0)),
                onBlur: E(i.onBlur, () => g(!1)),
                onClick: E(i.onClick, () => {
                  b.current !== "mouse" && w();
                }),
                onPointerUp: E(i.onPointerUp, () => {
                  b.current === "mouse" && w();
                }),
                onPointerDown: E(i.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: E(i.onPointerMove, (y) => {
                  var x;
                  b.current = y.pointerType, r ? (x = l.onItemLeave) == null || x.call(l) : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: E(i.onPointerLeave, (y) => {
                  var x;
                  y.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: E(i.onKeyDown, (y) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (Sm.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ea.displayName = Xt;
var ht = "SelectItemText", Ma = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, i = We(ht, n), a = Ge(ht, n), l = Ra(ht, n), u = Nm(ht, n), [f, p] = c.useState(null), h = B(
      t,
      (w) => p(w),
      l.onItemTextChange,
      (w) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, w, l.value, l.disabled);
      }
    ), g = f == null ? void 0 : f.textContent, v = c.useMemo(
      () => /* @__PURE__ */ d("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = u;
    return te(() => (m(v), () => b(v)), [m, b, v]), /* @__PURE__ */ z(Le, { children: [
      /* @__PURE__ */ d(A.span, { id: l.textId, ...s, ref: h }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Zt.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Ma.displayName = ht;
var Na = "SelectItemIndicator", Pa = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Ra(Na, n).isSelected ? /* @__PURE__ */ d(A.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Pa.displayName = Na;
var jn = "SelectScrollUpButton", Ia = c.forwardRef((e, t) => {
  const n = Ge(jn, e.__scopeSelect), o = Do(jn, e.__scopeSelect), [r, s] = c.useState(!1), i = B(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ d(
    Aa,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ia.displayName = jn;
var Yn = "SelectScrollDownButton", _a = c.forwardRef((e, t) => {
  const n = Ge(Yn, e.__scopeSelect), o = Do(Yn, e.__scopeSelect), [r, s] = c.useState(!1), i = B(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        s(f);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ d(
    Aa,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
_a.displayName = Yn;
var Aa = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Ge("SelectScrollButton", n), i = c.useRef(null), a = gn(n), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), te(() => {
    var f;
    const u = a().find((p) => p.ref.current === document.activeElement);
    (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ d(
    A.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: E(r.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerMove: E(r.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerLeave: E(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), Fm = "SelectSeparator", Ta = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ d(A.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Ta.displayName = Fm;
var Xn = "SelectArrow", $m = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = vn(n), s = We(Xn, n), i = Ge(Xn, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ d(gs, { ...r, ...o, ref: t }) : null;
  }
);
$m.displayName = Xn;
function ka(e) {
  return e === "" || e === void 0;
}
var Oa = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = c.useRef(null), s = B(t, r), i = xt(n);
    return c.useEffect(() => {
      const a = r.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(p);
      }
    }, [i, n]), /* @__PURE__ */ d(Mo, { asChild: !0, children: /* @__PURE__ */ d("select", { ...o, ref: s, defaultValue: n }) });
  }
);
Oa.displayName = "BubbleSelect";
function Da(e) {
  const t = ee(e), n = c.useRef(""), o = c.useRef(0), r = c.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function l(u) {
        n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function La(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Vm(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Vm(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Bm = ca, Wm = ua, Gm = fa, zm = pa, Km = ma, Um = ha, Hm = wa, jm = xa, Ym = Sa, Xm = Ea, qm = Ma, Zm = Pa, Qm = Ia, Jm = _a, eh = Ta;
const hg = Bm, gg = jm, vg = Gm, bg = ({ className: e, children: t, ...n }) => /* @__PURE__ */ z(
  Wm,
  {
    className: k(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d(zm, { asChild: !0, children: /* @__PURE__ */ d(Qt, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
), th = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Qm,
  {
    className: k(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(pc, { className: "h-4 w-4" })
  }
), nh = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Jm,
  {
    className: k(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d(Qt, { className: "h-4 w-4" })
  }
), wg = ({ className: e, children: t, position: n = "popper", ...o }) => /* @__PURE__ */ d(Km, { children: /* @__PURE__ */ z(
  Um,
  {
    className: k(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ d(th, {}),
      /* @__PURE__ */ d(
        Hm,
        {
          className: k(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(nh, {})
    ]
  }
) }), yg = ({ className: e, ...t }) => /* @__PURE__ */ d(
  Ym,
  {
    className: k("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
), xg = ({ className: e, children: t, ...n }) => /* @__PURE__ */ z(
  Xm,
  {
    className: k(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(Zm, { children: /* @__PURE__ */ d(qn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d(qm, { children: t })
    ]
  }
), Cg = ({ className: e, ...t }) => /* @__PURE__ */ d(
  eh,
  {
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
);
var Lo = "Dialog", [Fa, Sg] = de(Lo), [oh, we] = Fa(Lo), $a = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u = !1, f] = me({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ d(
    oh,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: ie(),
      titleId: ie(),
      descriptionId: ie(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: n
    }
  );
};
$a.displayName = Lo;
var Va = "DialogTrigger", Ba = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Va, n), s = B(t, r.triggerRef);
    return /* @__PURE__ */ d(
      A.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Vo(r.open),
        ...o,
        ref: s,
        onClick: E(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Ba.displayName = Va;
var Fo = "DialogPortal", [rh, Wa] = Fa(Fo, {
  forceMount: void 0
}), Ga = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = we(Fo, t);
  return /* @__PURE__ */ d(rh, { scope: t, forceMount: n, children: c.Children.map(o, (i) => /* @__PURE__ */ d(re, { present: n || s.open, children: /* @__PURE__ */ d(an, { asChild: !0, container: r, children: i }) })) });
};
Ga.displayName = Fo;
var qt = "DialogOverlay", za = c.forwardRef(
  (e, t) => {
    const n = Wa(qt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(qt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d(re, { present: o || s.open, children: /* @__PURE__ */ d(sh, { ...r, ref: t }) }) : null;
  }
);
za.displayName = qt;
var sh = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(qt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(dn, { as: Ie, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ d(
        A.div,
        {
          "data-state": Vo(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), Ue = "DialogContent", Ka = c.forwardRef(
  (e, t) => {
    const n = Wa(Ue, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(Ue, e.__scopeDialog);
    return /* @__PURE__ */ d(re, { present: o || s.open, children: s.modal ? /* @__PURE__ */ d(ih, { ...r, ref: t }) : /* @__PURE__ */ d(ah, { ...r, ref: t }) });
  }
);
Ka.displayName = Ue;
var ih = c.forwardRef(
  (e, t) => {
    const n = we(Ue, e.__scopeDialog), o = c.useRef(null), r = B(t, n.contentRef, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return ho(s);
    }, []), /* @__PURE__ */ d(
      Ua,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: E(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: E(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: E(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), ah = c.forwardRef(
  (e, t) => {
    const n = we(Ue, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ d(
      Ua,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const i = s.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), Ua = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...i } = e, a = we(Ue, n), l = c.useRef(null), u = B(t, l);
    return oo(), /* @__PURE__ */ z(Le, { children: [
      /* @__PURE__ */ d(
        tn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d(
            Rt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Vo(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ z(Le, { children: [
        /* @__PURE__ */ d(ch, { titleId: a.titleId }),
        /* @__PURE__ */ d(uh, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), $o = "DialogTitle", Ha = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we($o, n);
    return /* @__PURE__ */ d(A.h2, { id: r.titleId, ...o, ref: t });
  }
);
Ha.displayName = $o;
var ja = "DialogDescription", Ya = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(ja, n);
    return /* @__PURE__ */ d(A.p, { id: r.descriptionId, ...o, ref: t });
  }
);
Ya.displayName = ja;
var Xa = "DialogClose", qa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Xa, n);
    return /* @__PURE__ */ d(
      A.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: E(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
qa.displayName = Xa;
function Vo(e) {
  return e ? "open" : "closed";
}
var Za = "DialogTitleWarning", [Rg, Qa] = rl(Za, {
  contentName: Ue,
  titleName: $o,
  docsSlug: "dialog"
}), ch = ({ titleId: e }) => {
  const t = Qa(Za), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, lh = "DialogDescriptionWarning", uh = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qa(lh).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, dh = $a, fh = Ba, ph = Ga, mh = za, hh = Ka, gh = Ha, vh = Ya, Ja = qa;
const Eg = dh, Mg = fh, Ng = Ja, bh = ph, wh = ({ className: e, ...t }) => /* @__PURE__ */ d(
  mh,
  {
    className: k(
      "bg-black/80 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
), yh = He(
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
), Pg = ({
  side: e = "right",
  className: t,
  children: n,
  ...o
}) => /* @__PURE__ */ z(bh, { children: [
  /* @__PURE__ */ d(wh, {}),
  /* @__PURE__ */ z(
    hh,
    {
      className: k(yh({ side: e }), t),
      ...o,
      children: [
        /* @__PURE__ */ d(ol, { className: "absolute right-4 top-4", variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ z(Ja, { children: [
          /* @__PURE__ */ d(vc, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] }) }),
        n
      ]
    }
  )
] }), Ig = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
), _g = ({ className: e, ...t }) => /* @__PURE__ */ d(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
), Ag = ({ className: e, ...t }) => /* @__PURE__ */ d(
  gh,
  {
    className: k("text-lg font-semibold text-foreground", e),
    ...t
  }
), Tg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  vh,
  {
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
);
function kg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: k("animate-pulse rounded-md bg-neutral-200", e),
      ...t
    }
  );
}
var Bo = "Switch", [xh, Og] = de(Bo), [Ch, Sh] = xh(Bo), ec = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [h, g] = c.useState(null), v = B(t, (x) => g(x)), m = c.useRef(!1), b = h ? f || !!h.closest("form") : !0, [w = !1, y] = me({
      prop: r,
      defaultProp: s,
      onChange: u
    });
    return /* @__PURE__ */ z(Ch, { scope: n, checked: w, disabled: a, children: [
      /* @__PURE__ */ d(
        A.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": oc(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...p,
          ref: v,
          onClick: E(e.onClick, (x) => {
            y((C) => !C), b && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        Rh,
        {
          control: h,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: w,
          required: i,
          disabled: a,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ec.displayName = Bo;
var tc = "SwitchThumb", nc = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = Sh(tc, n);
    return /* @__PURE__ */ d(
      A.span,
      {
        "data-state": oc(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
nc.displayName = tc;
var Rh = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), i = xt(n), a = Jt(t);
  return c.useEffect(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (i !== n && p) {
      const h = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(h);
    }
  }, [i, n, o]), /* @__PURE__ */ d(
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
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function oc(e) {
  return e ? "checked" : "unchecked";
}
var Eh = ec, Mh = nc;
const Nh = He(
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
), Dg = ({ className: e, variant: t, ...n }) => /* @__PURE__ */ d(
  Eh,
  {
    className: k(Nh({ variant: t }), e),
    ...n,
    children: /* @__PURE__ */ d(
      Mh,
      {
        className: k(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
), Lg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ d(
  "table",
  {
    ref: n,
    className: k("w-full caption-bottom text-sm", e),
    ...t
  }
) })), Fg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: k("[&_tr]:border-b", e), ...t })), $g = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tbody",
  {
    ref: n,
    className: k("[&_tr:last-child]:border-0", e),
    ...t
  }
)), Vg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tfoot",
  {
    ref: n,
    className: k(
      "bg-muted/50 border-t border-default font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
)), Bg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tr",
  {
    ref: n,
    className: k(
      "border-b border-default transition-colors hover:bg-subtle data-[state=selected]:bg-subtle",
      e
    ),
    ...t
  }
)), Wg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "th",
  {
    ref: n,
    className: k(
      "h-12 px-4 text-left align-middle font-bold text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
)), Gg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "td",
  {
    ref: n,
    className: k("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
)), zg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "caption",
  {
    ref: n,
    className: k("mt-4 text-sm text-subtitle", e),
    ...t
  }
)), Kg = ({
  imageSrc: e,
  name: t,
  tagline: n,
  link: o,
  text: r,
  className: s
}) => {
  const { LinkElement: i, ImageElement: a } = en();
  return /* @__PURE__ */ z(
    "div",
    {
      className: k(
        "flex w-80 flex-col gap-4 rounded border border-default bg-surface p-6 shadow-md",
        s
      ),
      children: [
        /* @__PURE__ */ z("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ d("div", { className: "relative h-12 w-12 overflow-hidden rounded-full", children: /* @__PURE__ */ d(
            a,
            {
              src: e,
              width: 48,
              height: 48,
              alt: `${t}'s testimonial`,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ z("div", { className: "flex flex-col items-start gap-0", children: [
            /* @__PURE__ */ d(Ze, { element: "h4", variant: "h5", text: t }),
            n && o && /* @__PURE__ */ d(i, { href: o, children: /* @__PURE__ */ d(Ze, { element: "p", variant: "subtitle", text: n }) }),
            n && !o && /* @__PURE__ */ d(Ze, { element: "p", variant: "subtitle", text: n })
          ] })
        ] }),
        /* @__PURE__ */ d(Ze, { element: "p", variant: "body", text: r })
      ]
    }
  );
};
export {
  Ah as Alert,
  ol as Button,
  kh as Checkbox,
  Dh as ClickableLogo,
  Fh as Collapsible,
  Vh as CollapsibleContent,
  $h as CollapsibleTrigger,
  Oh as DesignSystemProvider,
  Bh as Divider,
  Gh as DropdownMenu,
  Qh as DropdownMenuCheckboxItem,
  qh as DropdownMenuContent,
  Kh as DropdownMenuGroup,
  Zh as DropdownMenuItem,
  eg as DropdownMenuLabel,
  Uh as DropdownMenuPortal,
  jh as DropdownMenuRadioGroup,
  Jh as DropdownMenuRadioItem,
  tg as DropdownMenuSeparator,
  ng as DropdownMenuShortcut,
  Hh as DropdownMenuSub,
  Xh as DropdownMenuSubContent,
  Yh as DropdownMenuSubTrigger,
  zh as DropdownMenuTrigger,
  og as Form,
  Fp as FormControl,
  $p as FormDescription,
  rg as FormField,
  Dp as FormItem,
  Lp as FormLabel,
  Vp as FormMessage,
  sg as Input,
  Op as Label,
  ag as NavMenu,
  cg as NavMenuItem,
  lg as NavSubMenuItem,
  ug as PriceView,
  fg as RadioGroup,
  pg as RadioGroupItem,
  hg as Select,
  wg as SelectContent,
  gg as SelectGroup,
  xg as SelectItem,
  yg as SelectLabel,
  nh as SelectScrollDownButton,
  th as SelectScrollUpButton,
  Cg as SelectSeparator,
  bg as SelectTrigger,
  vg as SelectValue,
  Eg as Sheet,
  Ng as SheetClose,
  Pg as SheetContent,
  Tg as SheetDescription,
  _g as SheetFooter,
  Ig as SheetHeader,
  wh as SheetOverlay,
  bh as SheetPortal,
  Ag as SheetTitle,
  Mg as SheetTrigger,
  kg as Skeleton,
  Dg as Switch,
  Lg as Table,
  $g as TableBody,
  zg as TableCaption,
  Gg as TableCell,
  Vg as TableFooter,
  Wg as TableHead,
  Fg as TableHeader,
  Bg as TableRow,
  Kg as Testimonial,
  Ze as Typography,
  mn as useFormField
};
