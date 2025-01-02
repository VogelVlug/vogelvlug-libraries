"use client";
import { jsxs as G, jsx as u, Fragment as Le } from "react/jsx-runtime";
import * as c from "react";
import Z, { forwardRef as Ir, createElement as An, createContext as mc, useState as _r, useContext as gc, useLayoutEffect as hc, useEffect as vc } from "react";
import * as Zt from "react-dom";
import Ar from "react-dom";
function Tr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Tr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function kr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Tr(e)) && (o && (o += " "), o += t);
  return o;
}
const Ho = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, jo = kr, He = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return jo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: s } = t, a = Object.keys(r).map((d) => {
    const f = n == null ? void 0 : n[d], p = s == null ? void 0 : s[d];
    if (f === null) return null;
    const g = Ho(f) || Ho(p);
    return r[d][g];
  }), i = n && Object.entries(n).reduce((d, f) => {
    let [p, g] = f;
    return g === void 0 || (d[p] = g), d;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, f) => {
    let { class: p, className: g, ...h } = f;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === b;
    }) ? [
      ...d,
      p,
      g
    ] : d;
  }, []);
  return jo(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Or = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wc = {
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
const yc = Ir(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: a,
    ...i
  }, l) => An(
    "svg",
    {
      ref: l,
      ...wc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Or("lucide", r),
      ...i
    },
    [
      ...a.map(([d, f]) => An(d, f)),
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
  const n = Ir(
    ({ className: o, ...r }, s) => An(yc, {
      ref: s,
      iconNode: t,
      className: Or(`lucide-${bc(e)}`, o),
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
const Zn = Re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
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
const xc = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = Re("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = Re("CircleAlert", [
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
const Rc = Re("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = Re("CircleX", [
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
const Dr = Re("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = Re("Info", [
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
const Lr = Re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Qn = "-", Nc = (e) => {
  const t = Pc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Qn);
      return i[0] === "" && i.length !== 1 && i.shift(), Fr(i, t) || Mc(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const l = n[a] || [];
      return i && o[a] ? [...l, ...o[a]] : l;
    }
  };
}, Fr = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Fr(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Qn);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Xo = /^\[(.+)\]$/, Mc = (e) => {
  if (Xo.test(e)) {
    const t = Xo.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Pc = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return _c(Object.entries(e.classGroups), n).forEach(([s, a]) => {
    Tn(a, o, s, t);
  }), o;
}, Tn = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : qo(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Ic(r)) {
        Tn(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, a]) => {
      Tn(a, qo(t, s), n, o);
    });
  });
}, qo = (e, t) => {
  let n = e;
  return t.split(Qn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Ic = (e) => e.isThemeGetter, _c = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([a, i]) => [t + a, i])) : s);
  return [n, r];
}) : e, Ac = (e) => {
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
}, $r = "!", Tc = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, a = (i) => {
    const l = [];
    let d = 0, f = 0, p;
    for (let b = 0; b < i.length; b++) {
      let w = i[b];
      if (d === 0) {
        if (w === r && (o || i.slice(b, b + s) === t)) {
          l.push(i.slice(f, b)), f = b + s;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const g = l.length === 0 ? i : i.substring(f), h = g.startsWith($r), v = h ? g.substring(1) : g, m = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: a
  }) : a;
}, kc = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Oc = (e) => ({
  cache: Ac(e.cacheSize),
  parseClassName: Tc(e),
  ...Nc(e)
}), Dc = /\s+/, Lc = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], a = e.trim().split(Dc);
  let i = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const d = a[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    } = n(d);
    let v = !!h, m = o(v ? g.substring(0, h) : g);
    if (!m) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (m = o(g), !m) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = kc(f).join(":"), w = p ? b + $r : b, y = w + m;
    if (s.includes(y))
      continue;
    s.push(y);
    const x = r(m, v);
    for (let C = 0; C < x.length; ++C) {
      const S = x[C];
      s.push(w + S);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Fc() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Vr(t)) && (o && (o += " "), o += n);
  return o;
}
const Vr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Vr(e[o])) && (n && (n += " "), n += t);
  return n;
};
function $c(e, ...t) {
  let n, o, r, s = a;
  function a(l) {
    const d = t.reduce((f, p) => p(f), e());
    return n = Oc(d), o = n.cache.get, r = n.cache.set, s = i, i(l);
  }
  function i(l) {
    const d = o(l);
    if (d)
      return d;
    const f = Lc(l, n);
    return r(l, f), f;
  }
  return function() {
    return s(Fc.apply(null, arguments));
  };
}
const J = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Br = /^\[(?:([a-z-]+):)?(.+)\]$/i, Vc = /^\d+\/\d+$/, Bc = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Kc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Uc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pe = (e) => Qe(e) || Bc.has(e) || Vc.test(e), Te = (e) => ot(e, "length", Jc), Qe = (e) => !!e && !Number.isNaN(Number(e)), wn = (e) => ot(e, "number", Qe), ft = (e) => !!e && Number.isInteger(Number(e)), Hc = (e) => e.endsWith("%") && Qe(e.slice(0, -1)), $ = (e) => Br.test(e), ke = (e) => Wc.test(e), jc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Yc = (e) => ot(e, jc, Wr), Xc = (e) => ot(e, "position", Wr), qc = /* @__PURE__ */ new Set(["image", "url"]), Zc = (e) => ot(e, qc, tl), Qc = (e) => ot(e, "", el), pt = () => !0, ot = (e, t, n) => {
  const o = Br.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Jc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Gc.test(e) && !zc.test(e)
), Wr = () => !1, el = (e) => Kc.test(e), tl = (e) => Uc.test(e), nl = () => {
  const e = J("colors"), t = J("spacing"), n = J("blur"), o = J("brightness"), r = J("borderColor"), s = J("borderRadius"), a = J("borderSpacing"), i = J("borderWidth"), l = J("contrast"), d = J("grayscale"), f = J("hueRotate"), p = J("invert"), g = J("gap"), h = J("gradientColorStops"), v = J("gradientColorStopPositions"), m = J("inset"), b = J("margin"), w = J("opacity"), y = J("padding"), x = J("saturate"), C = J("scale"), S = J("sepia"), N = J("skew"), R = J("space"), P = J("translate"), I = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", $, t], _ = () => [$, t], W = () => ["", Pe, Te], F = () => ["auto", Qe, $], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", $], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Qe, $];
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
      grayscale: M(),
      hueRotate: U(),
      invert: M(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Hc, Te],
      inset: V(),
      margin: V(),
      opacity: U(),
      padding: _(),
      saturate: U(),
      scale: U(),
      sepia: M(),
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
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
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
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
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
        content: ["normal", ...k(), "baseline"]
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
        "place-content": [...k(), "baseline"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wn]
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
        "line-clamp": ["none", Qe, wn]
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
        bg: [...H(), Xc]
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
        bg: ["auto", "cover", "contain", Yc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Zc]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        shadow: ["", "inner", "none", ke, Qc]
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
        "drop-shadow": ["", "none", ke, $]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
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
        "backdrop-grayscale": [d]
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
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
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
        stroke: [Pe, Te, wn]
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
}, ol = /* @__PURE__ */ $c(nl);
function A(...e) {
  return ol(kr(e));
}
const rl = He("w-full rounded-sm p-4 text-sm flex gap-4", {
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
}), sl = {
  default: Yo,
  info: Yo,
  success: Rc,
  warning: Sc,
  error: Ec
}, $g = ({
  className: e,
  variant: t = "default",
  title: n,
  children: o,
  ...r
}) => {
  const s = sl[t || "default"];
  return /* @__PURE__ */ G(
    "div",
    {
      role: "alert",
      className: A(rl({ variant: t }), e),
      ...r,
      children: [
        /* @__PURE__ */ u(s, { className: "h-5 w-5" }),
        /* @__PURE__ */ G("div", { className: "flex flex-col gap-1", children: [
          n && /* @__PURE__ */ u("h5", { className: "font-bold leading-none", children: n }),
          o
        ] })
      ]
    }
  );
};
function Zo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function yt(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Zo(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Zo(e[r], null);
        }
      };
  };
}
function B(...e) {
  return c.useCallback(yt(...e), e);
}
var Ie = c.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = c.Children.toArray(n), s = r.find(il);
  if (s) {
    const a = s.props.children, i = r.map((l) => l === s ? c.Children.count(a) > 1 ? c.Children.only(null) : c.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ u(kn, { ...o, ref: t, children: c.isValidElement(a) ? c.cloneElement(a, void 0, i) : null });
  }
  return /* @__PURE__ */ u(kn, { ...o, ref: t, children: n });
});
Ie.displayName = "Slot";
var kn = c.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (c.isValidElement(n)) {
    const r = ll(n);
    return c.cloneElement(n, {
      ...cl(o, n.props),
      // @ts-ignore
      ref: t ? yt(t, r) : r
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
kn.displayName = "SlotClone";
var al = ({ children: e }) => /* @__PURE__ */ u(Le, { children: e });
function il(e) {
  return c.isValidElement(e) && e.type === al;
}
function cl(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      s(...i), r(...i);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ll(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const ul = He(
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
), dl = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, s) => /* @__PURE__ */ u(
    o ? Ie : "button",
    {
      className: A(ul({ variant: t, size: n, className: e })),
      ref: s,
      ...r
    }
  )
);
function fl(e, t) {
  const n = c.createContext(t), o = (s) => {
    const { children: a, ...i } = s, l = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ u(n.Provider, { value: l, children: a });
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
function de(e, t = []) {
  let n = [];
  function o(s, a) {
    const i = c.createContext(a), l = n.length;
    n = [...n, a];
    const d = (p) => {
      var w;
      const { scope: g, children: h, ...v } = p, m = ((w = g == null ? void 0 : g[e]) == null ? void 0 : w[l]) || i, b = c.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ u(m.Provider, { value: b, children: h });
    };
    d.displayName = s + "Provider";
    function f(p, g) {
      var m;
      const h = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[l]) || i, v = c.useContext(h);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [d, f];
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
  return r.scopeName = e, [o, pl(r, ...t)];
}
function pl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((i, { useScope: l, scopeName: d }) => {
        const p = l(s)[`__scope${d}`];
        return { ...i, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
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
  const [o, r] = ml({ defaultProp: t, onChange: n }), s = e !== void 0, a = s ? e : o, i = ee(n), l = c.useCallback(
    (d) => {
      if (s) {
        const p = typeof d == "function" ? d(e) : d;
        p !== e && i(p);
      } else
        r(d);
    },
    [s, e, r, i]
  );
  return [a, l];
}
function ml({
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
        let a, i;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          a = d.inlineSize, i = d.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function gl(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var re = (e) => {
  const { present: t, children: n } = e, o = hl(t), r = typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n), s = B(o.ref, vl(r));
  return typeof n == "function" || o.isPresent ? c.cloneElement(r, { ref: s }) : null;
};
re.displayName = "Presence";
function hl(e) {
  const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [i, l] = gl(a, {
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
    const d = At(o.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), te(() => {
    const d = o.current, f = r.current;
    if (f !== e) {
      const g = s.current, h = At(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), te(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = (h) => {
        const m = At(o.current).includes(h.animationName);
        if (h.target === t && m && (l("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, g = (h) => {
        h.target === t && (s.current = At(o.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((d) => {
      d && (o.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function At(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vl(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bl = [
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
], T = bl.reduce((e, t) => {
  const n = c.forwardRef((o, r) => {
    const { asChild: s, ...a } = o, i = s ? Ie : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u(i, { ...a, ref: r });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Wt(e, t) {
  e && Zt.flushSync(() => e.dispatchEvent(t));
}
var Jn = "Checkbox", [wl, Vg] = de(Jn), [yl, xl] = wl(Jn), Gr = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l = "on",
      onCheckedChange: d,
      form: f,
      ...p
    } = e, [g, h] = c.useState(null), v = B(t, (C) => h(C)), m = c.useRef(!1), b = g ? f || !!g.closest("form") : !0, [w = !1, y] = me({
      prop: r,
      defaultProp: s,
      onChange: d
    }), x = c.useRef(w);
    return c.useEffect(() => {
      const C = g == null ? void 0 : g.form;
      if (C) {
        const S = () => y(x.current);
        return C.addEventListener("reset", S), () => C.removeEventListener("reset", S);
      }
    }, [g, y]), /* @__PURE__ */ G(yl, { scope: n, state: w, disabled: i, children: [
      /* @__PURE__ */ u(
        T.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": De(w) ? "mixed" : w,
          "aria-required": a,
          "data-state": Ur(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
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
      b && /* @__PURE__ */ u(
        Cl,
        {
          control: g,
          bubbles: !m.current,
          name: o,
          value: l,
          checked: w,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" },
          defaultChecked: De(s) ? !1 : s
        }
      )
    ] });
  }
);
Gr.displayName = Jn;
var zr = "CheckboxIndicator", Kr = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, s = xl(zr, n);
    return /* @__PURE__ */ u(re, { present: o || De(s.state) || s.state === !0, children: /* @__PURE__ */ u(
      T.span,
      {
        "data-state": Ur(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Kr.displayName = zr;
var Cl = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: r, ...s } = e, a = c.useRef(null), i = xt(n), l = Jt(t);
  c.useEffect(() => {
    const f = a.current, p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(p, "checked").set;
    if (i !== n && h) {
      const v = new Event("click", { bubbles: o });
      f.indeterminate = De(n), h.call(f, De(n) ? !1 : n), f.dispatchEvent(v);
    }
  }, [i, n, o]);
  const d = c.useRef(De(n) ? !1 : n);
  return /* @__PURE__ */ u(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r ?? d.current,
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
function De(e) {
  return e === "indeterminate";
}
function Ur(e) {
  return De(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Sl = Gr, Rl = Kr;
const Bg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Sl,
  {
    ref: n,
    className: A(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(
      Rl,
      {
        className: A("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ u(Zn, { className: "h-4 w-4" })
      }
    )
  }
)), Qo = "vogelvlug-design-system-color-mode", Hr = mc({
  logo: { src: "" },
  ImageElement: "img",
  LinkElement: "a",
  colorMode: "system",
  setColorMode: () => null
}), Jo = (e) => {
  const t = window.document.documentElement;
  if (t.classList.remove("light", "dark"), e === "system") {
    const n = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    t.classList.add(n);
    return;
  }
  t.classList.add(e);
}, Wg = ({
  children: e,
  logo: t,
  ImageElement: n = "img",
  LinkElement: o = "a",
  colorMode: r = "system"
}) => {
  const [s, a] = _r(
    () => (localStorage == null ? void 0 : localStorage.getItem(Qo)) || r
  ), i = (l) => {
    localStorage == null || localStorage.setItem(Qo, l), a(l), Jo(l);
  };
  return typeof window < "u" && Jo(s), /* @__PURE__ */ u(
    Hr.Provider,
    {
      value: {
        logo: t,
        ImageElement: n,
        LinkElement: o,
        colorMode: s,
        setColorMode: i
      },
      children: e
    }
  );
}, en = () => {
  const e = gc(Hr);
  if (!e)
    throw new Error(
      "useDesignSystem must be used within a DesignSystemProvider"
    );
  return e;
}, El = He("w-auto", {
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
}), Gg = ({
  height: e
}) => {
  const { logo: t, ImageElement: n, LinkElement: o } = en(), r = {
    alt: "Logo",
    className: A(El({ height: e }))
  };
  return /* @__PURE__ */ u(o, { href: "/", children: /* @__PURE__ */ u(n, { src: n === "img" ? t.src : t, ...r }) });
};
var Nl = c.useId || (() => {
}), Ml = 0;
function ae(e) {
  const [t, n] = c.useState(Nl());
  return te(() => {
    e || n((o) => o ?? String(Ml++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var eo = "Collapsible", [Pl, zg] = de(eo), [Il, to] = Pl(eo), jr = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [l = !1, d] = me({
      prop: o,
      defaultProp: r,
      onChange: a
    });
    return /* @__PURE__ */ u(
      Il,
      {
        scope: n,
        disabled: s,
        contentId: ae(),
        open: l,
        onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ u(
          T.div,
          {
            "data-state": oo(l),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
jr.displayName = eo;
var Yr = "CollapsibleTrigger", Xr = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = to(Yr, n);
    return /* @__PURE__ */ u(
      T.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": oo(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: E(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Xr.displayName = Yr;
var no = "CollapsibleContent", qr = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = to(no, e.__scopeCollapsible);
    return /* @__PURE__ */ u(re, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ u(_l, { ...o, ref: t, present: s }) });
  }
);
qr.displayName = no;
var _l = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = to(no, n), [i, l] = c.useState(o), d = c.useRef(null), f = B(t, d), p = c.useRef(0), g = p.current, h = c.useRef(0), v = h.current, m = a.open || i, b = c.useRef(m), w = c.useRef(void 0);
  return c.useEffect(() => {
    const y = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), te(() => {
    const y = d.current;
    if (y) {
      w.current = w.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const x = y.getBoundingClientRect();
      p.current = x.height, h.current = x.width, b.current || (y.style.transitionDuration = w.current.transitionDuration, y.style.animationName = w.current.animationName), l(o);
    }
  }, [a.open, o]), /* @__PURE__ */ u(
    T.div,
    {
      "data-state": oo(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: m && r
    }
  );
});
function oo(e) {
  return e ? "open" : "closed";
}
var Al = jr, Tl = Xr;
const Kg = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ u(Al, { className: A("group", t), ...n, children: e }), Ug = ({ children: e, className: t, ...n }) => /* @__PURE__ */ G(
  Tl,
  {
    className: A("flex items-center gap-2", t),
    ...n,
    children: [
      e,
      /* @__PURE__ */ u(Qt, { className: "h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" })
    ]
  }
), Hg = qr;
function kl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Ol = "DismissableLayer", On = "dismissableLayer.update", Dl = "dismissableLayer.pointerDownOutside", Ll = "dismissableLayer.focusOutside", er, Zr = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ct = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...l
    } = e, d = c.useContext(Zr), [f, p] = c.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = c.useState({}), v = B(t, (R) => p(R)), m = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(b), y = f ? m.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= w, S = Vl((R) => {
      const P = R.target, I = [...d.branches].some((D) => D.contains(P));
      !C || I || (r == null || r(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, g), N = Bl((R) => {
      const P = R.target;
      [...d.branches].some((D) => D.contains(P)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, g);
    return kl((R) => {
      y === d.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, g), c.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (er = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), tr(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = er);
        };
    }, [f, g, n, d]), c.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), tr());
    }, [f, d]), c.useEffect(() => {
      const R = () => h({});
      return document.addEventListener(On, R), () => document.removeEventListener(On, R);
    }, []), /* @__PURE__ */ u(
      T.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: E(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: E(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: E(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Ct.displayName = Ol;
var Fl = "DismissableLayerBranch", $l = c.forwardRef((e, t) => {
  const n = c.useContext(Zr), o = c.useRef(null), r = B(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ u(T.div, { ...e, ref: r });
});
$l.displayName = Fl;
function Vl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let l = function() {
          Qr(
            Dl,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
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
function Bl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ee(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && Qr(Ll, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function tr() {
  const e = new CustomEvent(On);
  document.dispatchEvent(e);
}
function Qr(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Wt(r, s) : r.dispatchEvent(s);
}
var yn = "focusScope.autoFocusOnMount", xn = "focusScope.autoFocusOnUnmount", nr = { bubbles: !1, cancelable: !0 }, Wl = "FocusScope", tn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, l] = c.useState(null), d = ee(r), f = ee(s), p = c.useRef(null), g = B(t, (m) => l(m)), h = c.useRef({
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
        if (h.paused || !i) return;
        const C = x.target;
        i.contains(C) ? p.current = C : Oe(p.current, { select: !0 });
      }, b = function(x) {
        if (h.paused || !i) return;
        const C = x.relatedTarget;
        C !== null && (i.contains(C) || Oe(p.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const S of x)
            S.removedNodes.length > 0 && Oe(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const y = new MutationObserver(w);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [o, i, h.paused]), c.useEffect(() => {
    if (i) {
      rr.add(h);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const w = new CustomEvent(yn, nr);
        i.addEventListener(yn, d), i.dispatchEvent(w), w.defaultPrevented || (Gl(jl(Jr(i)), { select: !0 }), document.activeElement === m && Oe(i));
      }
      return () => {
        i.removeEventListener(yn, d), setTimeout(() => {
          const w = new CustomEvent(xn, nr);
          i.addEventListener(xn, f), i.dispatchEvent(w), w.defaultPrevented || Oe(m ?? document.body, { select: !0 }), i.removeEventListener(xn, f), rr.remove(h);
        }, 0);
      };
    }
  }, [i, d, f, h]);
  const v = c.useCallback(
    (m) => {
      if (!n && !o || h.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (b && w) {
        const y = m.currentTarget, [x, C] = zl(y);
        x && C ? !m.shiftKey && w === C ? (m.preventDefault(), n && Oe(x, { select: !0 })) : m.shiftKey && w === x && (m.preventDefault(), n && Oe(C, { select: !0 })) : w === y && m.preventDefault();
      }
    },
    [n, o, h.paused]
  );
  return /* @__PURE__ */ u(T.div, { tabIndex: -1, ...a, ref: g, onKeyDown: v });
});
tn.displayName = Wl;
function Gl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Oe(o, { select: t }), document.activeElement !== n) return;
}
function zl(e) {
  const t = Jr(e), n = or(t, e), o = or(t.reverse(), e);
  return [n, o];
}
function Jr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function or(e, t) {
  for (const n of e)
    if (!Kl(n, { upTo: t })) return n;
}
function Kl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ul(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ul(e) && t && e.select();
  }
}
var rr = Hl();
function Hl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = sr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = sr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function sr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function jl(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Yl = "Portal", nn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...o } = e, [r, s] = c.useState(!1);
  te(() => s(!0), []);
  const a = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? Ar.createPortal(/* @__PURE__ */ u(T.div, { ...o, ref: t }), a) : null;
});
nn.displayName = Yl;
var Cn = 0;
function ro() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ar()), document.body.insertAdjacentElement("beforeend", e[1] ?? ar()), Cn++, () => {
      Cn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Cn--;
    };
  }, []);
}
function ar() {
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
function es(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Xl(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ft = "right-scroll-bar-position", $t = "width-before-scroll-bar", ql = "with-scroll-bars-hidden", Zl = "--removed-body-scroll-bar-size";
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ql(e, t) {
  var n = _r(function() {
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
var Jl = typeof window < "u" ? c.useLayoutEffect : c.useEffect, ir = /* @__PURE__ */ new WeakMap();
function eu(e, t) {
  var n = Ql(null, function(o) {
    return e.forEach(function(r) {
      return Sn(r, o);
    });
  });
  return Jl(function() {
    var o = ir.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(i) {
        s.has(i) || Sn(i, null);
      }), s.forEach(function(i) {
        r.has(i) || Sn(i, a);
      });
    }
    ir.set(n, e);
  }, [e]), n;
}
function tu(e) {
  return e;
}
function nu(e, t) {
  t === void 0 && (t = tu);
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
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          a.push(f), d();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return r;
}
function ou(e) {
  e === void 0 && (e = {});
  var t = nu(null);
  return t.options = xe({ async: !0, ssr: !1 }, e), t;
}
var ts = function(e) {
  var t = e.sideCar, n = es(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, xe({}, n));
};
ts.isSideCarExport = !0;
function ru(e, t) {
  return e.useMedium(t), ts;
}
var ns = ou(), Rn = function() {
}, on = c.forwardRef(function(e, t) {
  var n = c.useRef(null), o = c.useState({
    onScrollCapture: Rn,
    onWheelCapture: Rn,
    onTouchMoveCapture: Rn
  }), r = o[0], s = o[1], a = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, g = e.sideCar, h = e.noIsolation, v = e.inert, m = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, y = e.gapMode, x = es(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = g, S = eu([n, t]), N = xe(xe({}, x), r);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(C, { sideCar: ns, removeScrollBar: d, shards: p, noIsolation: h, inert: v, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: y }),
    a ? c.cloneElement(c.Children.only(i), xe(xe({}, N), { ref: S })) : c.createElement(w, xe({}, N, { className: l, ref: S }), i)
  );
});
on.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
on.classNames = {
  fullWidth: $t,
  zeroRight: Ft
};
var su = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function au() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = su();
  return t && e.setAttribute("nonce", t), e;
}
function iu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var lu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = au()) && (iu(t, n), cu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, uu = function() {
  var e = lu();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, os = function() {
  var e = uu(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, du = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, En = function(e) {
  return parseInt(e || "", 10) || 0;
}, fu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [En(n), En(o), En(r)];
}, pu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return du;
  var t = fu(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, mu = os(), Je = "data-scroll-locked", gu = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ql, ` {
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
  
  .`).concat(Ft, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat($t, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(Ft, " .").concat(Ft, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat($t, " .").concat($t, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Je, `] {
    `).concat(Zl, ": ").concat(i, `px;
  }
`);
}, cr = function() {
  var e = parseInt(document.body.getAttribute(Je) || "0", 10);
  return isFinite(e) ? e : 0;
}, hu = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Je, (cr() + 1).toString()), function() {
      var e = cr() - 1;
      e <= 0 ? document.body.removeAttribute(Je) : document.body.setAttribute(Je, e.toString());
    };
  }, []);
}, vu = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  hu();
  var s = c.useMemo(function() {
    return pu(r);
  }, [r]);
  return c.createElement(mu, { styles: gu(s, !t, r, n ? "" : "!important") });
}, Dn = !1;
if (typeof window < "u")
  try {
    var Tt = Object.defineProperty({}, "passive", {
      get: function() {
        return Dn = !0, !0;
      }
    });
    window.addEventListener("test", Tt, Tt), window.removeEventListener("test", Tt, Tt);
  } catch {
    Dn = !1;
  }
var Ye = Dn ? { passive: !1 } : !1, bu = function(e) {
  return e.tagName === "TEXTAREA";
}, rs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !bu(e) && n[t] === "visible")
  );
}, wu = function(e) {
  return rs(e, "overflowY");
}, yu = function(e) {
  return rs(e, "overflowX");
}, lr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = ss(e, o);
    if (r) {
      var s = as(e, o), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, xu = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Cu = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ss = function(e, t) {
  return e === "v" ? wu(t) : yu(t);
}, as = function(e, t) {
  return e === "v" ? xu(t) : Cu(t);
}, Su = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ru = function(e, t, n, o, r) {
  var s = Su(e, window.getComputedStyle(t).direction), a = s * o, i = n.target, l = t.contains(i), d = !1, f = a > 0, p = 0, g = 0;
  do {
    var h = as(e, i), v = h[0], m = h[1], b = h[2], w = m - b - s * v;
    (v || w) && ss(e, i) && (p += w, g += v), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && (Math.abs(p) < 1 || !r) || !f && (Math.abs(g) < 1 || !r)) && (d = !0), d;
}, kt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ur = function(e) {
  return [e.deltaX, e.deltaY];
}, dr = function(e) {
  return e && "current" in e ? e.current : e;
}, Eu = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Nu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mu = 0, Xe = [];
function Pu(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), o = c.useRef(), r = c.useState(Mu++)[0], s = c.useState(os)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var m = Xl([e.lockRef.current], (e.shards || []).map(dr), !0).filter(Boolean);
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
    var w = kt(m), y = n.current, x = "deltaX" in m ? m.deltaX : y[0] - w[0], C = "deltaY" in m ? m.deltaY : y[1] - w[1], S, N = m.target, R = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && R === "h" && N.type === "range")
      return !1;
    var P = lr(R, N);
    if (!P)
      return !0;
    if (P ? S = R : (S = R === "v" ? "h" : "v", P = lr(R, N)), !P)
      return !1;
    if (!o.current && "changedTouches" in m && (x || C) && (o.current = S), !S)
      return !0;
    var I = o.current || S;
    return Ru(I, b, m, I === "h" ? x : C, !0);
  }, []), l = c.useCallback(function(m) {
    var b = m;
    if (!(!Xe.length || Xe[Xe.length - 1] !== s)) {
      var w = "deltaY" in b ? ur(b) : kt(b), y = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && Eu(S.delta, w);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var x = (a.current.shards || []).map(dr).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), C = x.length > 0 ? i(b, x[0]) : !a.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(m, b, w, y) {
    var x = { name: m, delta: b, target: w, should: y, shadowParent: Iu(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = c.useCallback(function(m) {
    n.current = kt(m), o.current = void 0;
  }, []), p = c.useCallback(function(m) {
    d(m.type, ur(m), m.target, i(m, e.lockRef.current));
  }, []), g = c.useCallback(function(m) {
    d(m.type, kt(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Xe.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Ye), document.addEventListener("touchmove", l, Ye), document.addEventListener("touchstart", f, Ye), function() {
      Xe = Xe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Ye), document.removeEventListener("touchmove", l, Ye), document.removeEventListener("touchstart", f, Ye);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(s, { styles: Nu(r) }) : null,
    h ? c.createElement(vu, { gapMode: e.gapMode }) : null
  );
}
function Iu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const _u = ru(ns, Pu);
var rn = c.forwardRef(function(e, t) {
  return c.createElement(on, xe({}, e, { ref: t, sideCar: _u }));
});
rn.classNames = on.classNames;
var Au = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Dt = {}, Nn = 0, is = function(e) {
  return e && (e.host || is(e.parentNode));
}, Tu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = is(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ku = function(e, t, n, o) {
  var r = Tu(t, Array.isArray(e) ? e : [e]);
  Dt[n] || (Dt[n] = /* @__PURE__ */ new WeakMap());
  var s = Dt[n], a = [], i = /* @__PURE__ */ new Set(), l = new Set(r), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  r.forEach(d);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        f(g);
      else
        try {
          var h = g.getAttribute(o), v = h !== null && h !== "false", m = (qe.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          qe.set(g, m), s.set(g, b), a.push(g), m === 1 && v && Ot.set(g, !0), b === 1 && g.setAttribute(n, "true"), v || g.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", g, w);
        }
    });
  };
  return f(t), i.clear(), Nn++, function() {
    a.forEach(function(p) {
      var g = qe.get(p) - 1, h = s.get(p) - 1;
      qe.set(p, g), s.set(p, h), g || (Ot.has(p) || p.removeAttribute(o), Ot.delete(p)), h || p.removeAttribute(n);
    }), Nn--, Nn || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Dt = {});
  };
}, so = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Au(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), ku(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ao = "Dialog", [cs, jg] = de(ao), [Ou, we] = cs(ao), ls = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !0
  } = e, i = c.useRef(null), l = c.useRef(null), [d = !1, f] = me({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ u(
    Ou,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: ae(),
      titleId: ae(),
      descriptionId: ae(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: n
    }
  );
};
ls.displayName = ao;
var us = "DialogTrigger", ds = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(us, n), s = B(t, r.triggerRef);
    return /* @__PURE__ */ u(
      T.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": lo(r.open),
        ...o,
        ref: s,
        onClick: E(e.onClick, r.onOpenToggle)
      }
    );
  }
);
ds.displayName = us;
var io = "DialogPortal", [Du, fs] = cs(io, {
  forceMount: void 0
}), ps = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = we(io, t);
  return /* @__PURE__ */ u(Du, { scope: t, forceMount: n, children: c.Children.map(o, (a) => /* @__PURE__ */ u(re, { present: n || s.open, children: /* @__PURE__ */ u(nn, { asChild: !0, container: r, children: a }) })) });
};
ps.displayName = io;
var Gt = "DialogOverlay", ms = c.forwardRef(
  (e, t) => {
    const n = fs(Gt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(Gt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u(re, { present: o || s.open, children: /* @__PURE__ */ u(Lu, { ...r, ref: t }) }) : null;
  }
);
ms.displayName = Gt;
var Lu = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(Gt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u(rn, { as: Ie, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ u(
        T.div,
        {
          "data-state": lo(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ze = "DialogContent", gs = c.forwardRef(
  (e, t) => {
    const n = fs(ze, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = we(ze, e.__scopeDialog);
    return /* @__PURE__ */ u(re, { present: o || s.open, children: s.modal ? /* @__PURE__ */ u(Fu, { ...r, ref: t }) : /* @__PURE__ */ u($u, { ...r, ref: t }) });
  }
);
gs.displayName = ze;
var Fu = c.forwardRef(
  (e, t) => {
    const n = we(ze, e.__scopeDialog), o = c.useRef(null), r = B(t, n.contentRef, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return so(s);
    }, []), /* @__PURE__ */ u(
      hs,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: E(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: E(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: E(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), $u = c.forwardRef(
  (e, t) => {
    const n = we(ze, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ u(
      hs,
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
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), hs = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, i = we(ze, n), l = c.useRef(null), d = B(t, l);
    return ro(), /* @__PURE__ */ G(Le, { children: [
      /* @__PURE__ */ u(
        tn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ u(
            Ct,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": lo(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ G(Le, { children: [
        /* @__PURE__ */ u(Vu, { titleId: i.titleId }),
        /* @__PURE__ */ u(Wu, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), co = "DialogTitle", vs = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(co, n);
    return /* @__PURE__ */ u(T.h2, { id: r.titleId, ...o, ref: t });
  }
);
vs.displayName = co;
var bs = "DialogDescription", ws = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(bs, n);
    return /* @__PURE__ */ u(T.p, { id: r.descriptionId, ...o, ref: t });
  }
);
ws.displayName = bs;
var ys = "DialogClose", xs = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = we(ys, n);
    return /* @__PURE__ */ u(
      T.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: E(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
xs.displayName = ys;
function lo(e) {
  return e ? "open" : "closed";
}
var Cs = "DialogTitleWarning", [Yg, Ss] = fl(Cs, {
  contentName: ze,
  titleName: co,
  docsSlug: "dialog"
}), Vu = ({ titleId: e }) => {
  const t = Ss(Cs), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Bu = "DialogDescriptionWarning", Wu = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ss(Bu).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Rs = ls, Es = ds, Ns = ps, uo = ms, fo = gs, po = vs, mo = ws, sn = xs;
const Xg = Rs, qg = Es, Gu = Ns, Zg = sn, Ms = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  uo,
  {
    ref: n,
    className: A(
      "bg-base-black/60 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ms.displayName = uo.displayName;
const zu = c.forwardRef(({ className: e, children: t, hideCloseButton: n = !1, ...o }, r) => /* @__PURE__ */ G(Gu, { children: [
  /* @__PURE__ */ u(Ms, {}),
  /* @__PURE__ */ G(
    fo,
    {
      ref: r,
      className: A(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        e
      ),
      ...o,
      children: [
        t,
        !n && /* @__PURE__ */ G(sn, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ u(Lr, { className: "h-4 w-4" }),
          /* @__PURE__ */ u("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
zu.displayName = fo.displayName;
const Ku = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: A(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ku.displayName = "DialogHeader";
const Uu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Uu.displayName = "DialogFooter";
const Hu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  po,
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Hu.displayName = po.displayName;
const ju = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  mo,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
ju.displayName = mo.displayName;
var Yu = "Separator", fr = "horizontal", Xu = ["horizontal", "vertical"], Ps = c.forwardRef((e, t) => {
  const { decorative: n, orientation: o = fr, ...r } = e, s = qu(o) ? o : fr, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ u(
    T.div,
    {
      "data-orientation": s,
      ...i,
      ...r,
      ref: t
    }
  );
});
Ps.displayName = Yu;
function qu(e) {
  return Xu.includes(e);
}
var Zu = Ps;
const Qg = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ u(
    Zu,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: A(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
function St(e) {
  const t = e + "CollectionProvider", [n, o] = de(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: v, children: m } = h, b = Z.useRef(null), w = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u(r, { scope: v, itemMap: w, collectionRef: b, children: m });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", l = Z.forwardRef(
    (h, v) => {
      const { scope: m, children: b } = h, w = s(i, m), y = B(v, w.collectionRef);
      return /* @__PURE__ */ u(Ie, { ref: y, children: b });
    }
  );
  l.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = Z.forwardRef(
    (h, v) => {
      const { scope: m, children: b, ...w } = h, y = Z.useRef(null), x = B(v, y), C = s(d, m);
      return Z.useEffect(() => (C.itemMap.set(y, { ref: y, ...w }), () => void C.itemMap.delete(y))), /* @__PURE__ */ u(Ie, { [f]: "", ref: x, children: b });
    }
  );
  p.displayName = d;
  function g(h) {
    const v = s(e + "CollectionConsumer", h);
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
    { Provider: a, Slot: l, ItemSlot: p },
    g,
    o
  ];
}
var Qu = c.createContext(void 0);
function Rt(e) {
  const t = c.useContext(Qu);
  return e || t || "ltr";
}
const Ju = ["top", "right", "bottom", "left"], Fe = Math.min, le = Math.max, zt = Math.round, Lt = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), ed = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, td = {
  start: "end",
  end: "start"
};
function Ln(e, t, n) {
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
function go(e) {
  return e === "x" ? "y" : "x";
}
function ho(e) {
  return e === "y" ? "height" : "width";
}
function $e(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "y" : "x";
}
function vo(e) {
  return go($e(e));
}
function nd(e, t, n) {
  n === void 0 && (n = !1);
  const o = rt(e), r = vo(e), s = ho(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Kt(a)), [a, Kt(a)];
}
function od(e) {
  const t = Kt(e);
  return [Fn(e), t, Fn(t)];
}
function Fn(e) {
  return e.replace(/start|end/g, (t) => td[t]);
}
function rd(e, t, n) {
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
function sd(e, t, n, o) {
  const r = rt(e);
  let s = rd(Ae(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(Fn)))), s;
}
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ed[t]);
}
function ad(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Is(e) {
  return typeof e != "number" ? ad(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ut(e) {
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
function pr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = $e(t), a = vo(t), i = ho(a), l = Ae(t), d = s === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, g = o[i] / 2 - r[i] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: o.x - r.width,
        y: p
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  switch (rt(t)) {
    case "start":
      h[a] -= g * (n && d ? -1 : 1);
      break;
    case "end":
      h[a] += g * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const id = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = pr(d, o, l), g = o, h = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: w
    } = i[m], {
      x: y,
      y: x,
      data: C,
      reset: S
    } = await w({
      x: f,
      y: p,
      initialPlacement: o,
      placement: g,
      strategy: r,
      middlewareData: h,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, p = x ?? p, h = {
      ...h,
      [b]: {
        ...h[b],
        ...C
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (d = S.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : S.rects), {
      x: f,
      y: p
    } = pr(d, g, l)), m = -1);
  }
  return {
    x: f,
    y: p,
    placement: g,
    strategy: r,
    middlewareData: h
  };
};
async function ht(e, t) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: h = 0
  } = _e(t, e), v = Is(h), b = i[g ? p === "floating" ? "reference" : "floating" : p], w = Ut(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
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
  }, S = Ut(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
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
const cd = (e) => ({
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
      element: d,
      padding: f = 0
    } = _e(e, t) || {};
    if (d == null)
      return {};
    const p = Is(f), g = {
      x: n,
      y: o
    }, h = vo(r), v = ho(h), m = await a.getDimensions(d), b = h === "y", w = b ? "top" : "left", y = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", C = s.reference[v] + s.reference[h] - g[h] - s.floating[v], S = g[h] - s.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = N ? N[x] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(N))) && (R = i.floating[x] || s.floating[v]);
    const P = C / 2 - S / 2, I = R / 2 - m[v] / 2 - 1, D = Fe(p[w], I), V = Fe(p[y], I), _ = D, W = R - m[v] - V, F = R / 2 - m[v] / 2 + P, H = Ln(_, F, W), L = !l.arrow && rt(r) != null && F !== H && s.reference[v] / 2 - (F < _ ? D : V) - m[v] / 2 < 0, z = L ? F < _ ? F - _ : F - W : 0;
    return {
      [h]: g[h] + z,
      data: {
        [h]: H,
        centerOffset: F - H - z,
        ...L && {
          alignmentOffset: z
        }
      },
      reset: L
    };
  }
}), ld = function(e) {
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
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = _e(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ae(r), y = $e(i), x = Ae(i) === i, C = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), S = g || (x || !m ? [Kt(i)] : od(i)), N = v !== "none";
      !g && N && S.push(...sd(i, m, v, C));
      const R = [i, ...S], P = await ht(t, b), I = [];
      let D = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && I.push(P[w]), p) {
        const F = nd(r, a, C);
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
        let L = (_ = D.filter((z) => z.overflows[0] <= 0).sort((z, k) => z.overflows[1] - k.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var W;
              const z = (W = D.filter((k) => {
                if (N) {
                  const M = $e(k.placement);
                  return M === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((M) => M > 0).reduce((M, K) => M + K, 0)]).sort((k, M) => k[1] - M[1])[0]) == null ? void 0 : W[0];
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
function mr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function gr(e) {
  return Ju.some((t) => e[t] >= 0);
}
const ud = function(e) {
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
          const s = await ht(t, {
            ...r,
            elementContext: "reference"
          }), a = mr(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: gr(a)
            }
          };
        }
        case "escaped": {
          const s = await ht(t, {
            ...r,
            altBoundary: !0
          }), a = mr(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: gr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function dd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Ae(n), i = rt(n), l = $e(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, f = s && l ? -1 : 1, p = _e(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
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
  return i && typeof v == "number" && (h = i === "end" ? v * -1 : v), l ? {
    x: h * f,
    y: g * d
  } : {
    x: g * d,
    y: h * f
  };
}
const fd = function(e) {
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
      } = t, l = await dd(t, e);
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
}, pd = function(e) {
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
      } = _e(e, t), d = {
        x: n,
        y: o
      }, f = await ht(t, l), p = $e(Ae(r)), g = go(p);
      let h = d[g], v = d[p];
      if (s) {
        const b = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", y = h + f[b], x = h - f[w];
        h = Ln(y, h, x);
      }
      if (a) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = v + f[b], x = v - f[w];
        v = Ln(y, v, x);
      }
      const m = i.fn({
        ...t,
        [g]: h,
        [p]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o,
          enabled: {
            [g]: s,
            [p]: a
          }
        }
      };
    }
  };
}, md = function(e) {
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
        crossAxis: d = !0
      } = _e(e, t), f = {
        x: n,
        y: o
      }, p = $e(r), g = go(p);
      let h = f[g], v = f[p];
      const m = _e(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const x = g === "y" ? "height" : "width", C = s.reference[g] - s.floating[x] + b.mainAxis, S = s.reference[g] + s.reference[x] - b.mainAxis;
        h < C ? h = C : h > S && (h = S);
      }
      if (d) {
        var w, y;
        const x = g === "y" ? "width" : "height", C = ["top", "left"].includes(Ae(r)), S = s.reference[p] - s.floating[x] + (C && ((w = a.offset) == null ? void 0 : w[p]) || 0) + (C ? 0 : b.crossAxis), N = s.reference[p] + s.reference[x] + (C ? 0 : ((y = a.offset) == null ? void 0 : y[p]) || 0) - (C ? b.crossAxis : 0);
        v < S ? v = S : v > N && (v = N);
      }
      return {
        [g]: h,
        [p]: v
      };
    }
  };
}, gd = function(e) {
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
        ...d
      } = _e(e, t), f = await ht(t, d), p = Ae(r), g = rt(r), h = $e(r) === "y", {
        width: v,
        height: m
      } = s.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = g === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = g === "end" ? "top" : "bottom");
      const y = m - f.top - f.bottom, x = v - f.left - f.right, C = Fe(m - f[b], y), S = Fe(v - f[w], x), N = !t.middlewareData.shift;
      let R = C, P = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = x), (o = t.middlewareData.shift) != null && o.enabled.y && (R = y), N && !g) {
        const D = le(f.left, 0), V = le(f.right, 0), _ = le(f.top, 0), W = le(f.bottom, 0);
        h ? P = v - 2 * (D !== 0 || V !== 0 ? D + V : le(f.left, f.right)) : R = m - 2 * (_ !== 0 || W !== 0 ? _ + W : le(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: R
      });
      const I = await a.getDimensions(i.floating);
      return v !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function an() {
  return typeof window < "u";
}
function st(e) {
  return _s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (_s(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _s(e) {
  return an() ? e instanceof Node || e instanceof ue(e).Node : !1;
}
function ve(e) {
  return an() ? e instanceof Element || e instanceof ue(e).Element : !1;
}
function Se(e) {
  return an() ? e instanceof HTMLElement || e instanceof ue(e).HTMLElement : !1;
}
function hr(e) {
  return !an() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
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
function hd(e) {
  return ["table", "td", "th"].includes(st(e));
}
function cn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function bo(e) {
  const t = wo(), n = ve(e) ? be(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function vd(e) {
  let t = Ve(e);
  for (; Se(t) && !tt(t); ) {
    if (bo(t))
      return t;
    if (cn(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function wo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(e) {
  return ["html", "body", "#document"].includes(st(e));
}
function be(e) {
  return ue(e).getComputedStyle(e);
}
function ln(e) {
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
    hr(e) && e.host || // Fallback.
    Ee(e)
  );
  return hr(t) ? t.host : t;
}
function As(e) {
  const t = Ve(e);
  return tt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Se(t) && Et(t) ? t : As(t);
}
function vt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = As(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ue(r);
  if (s) {
    const i = $n(a);
    return t.concat(a, a.visualViewport || [], Et(r) ? r : [], i && n ? vt(i) : []);
  }
  return t.concat(r, vt(r, [], n));
}
function $n(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ts(e) {
  const t = be(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Se(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = zt(n) !== s || zt(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function yo(e) {
  return ve(e) ? e : e.contextElement;
}
function et(e) {
  const t = yo(e);
  if (!Se(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Ts(t);
  let a = (s ? zt(n.width) : n.width) / o, i = (s ? zt(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const bd = /* @__PURE__ */ Ce(0);
function ks(e) {
  const t = ue(e);
  return !wo() || !t.visualViewport ? bd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Ke(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = yo(e);
  let a = Ce(1);
  t && (o ? ve(o) && (a = et(o)) : a = et(e));
  const i = wd(s, n, o) ? ks(s) : Ce(0);
  let l = (r.left + i.x) / a.x, d = (r.top + i.y) / a.y, f = r.width / a.x, p = r.height / a.y;
  if (s) {
    const g = ue(s), h = o && ve(o) ? ue(o) : o;
    let v = g, m = $n(v);
    for (; m && o && h !== v; ) {
      const b = et(m), w = m.getBoundingClientRect(), y = be(m), x = w.left + (m.clientLeft + parseFloat(y.paddingLeft)) * b.x, C = w.top + (m.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, d *= b.y, f *= b.x, p *= b.y, l += x, d += C, v = ue(m), m = $n(v);
    }
  }
  return Ut({
    width: f,
    height: p,
    x: l,
    y: d
  });
}
function xo(e, t) {
  const n = ln(e).scrollLeft;
  return t ? t.left + n : Ke(Ee(e)).left + n;
}
function Os(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xo(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function yd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Ee(o), i = t ? cn(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ce(1);
  const f = Ce(0), p = Se(o);
  if ((p || !p && !s) && ((st(o) !== "body" || Et(a)) && (l = ln(o)), Se(o))) {
    const h = Ke(o);
    d = et(o), f.x = h.x + o.clientLeft, f.y = h.y + o.clientTop;
  }
  const g = a && !p && !s ? Os(a, l, !0) : Ce(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + g.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + g.y
  };
}
function xd(e) {
  return Array.from(e.getClientRects());
}
function Cd(e) {
  const t = Ee(e), n = ln(e), o = e.ownerDocument.body, r = le(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = le(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + xo(e);
  const i = -n.scrollTop;
  return be(o).direction === "rtl" && (a += le(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function Sd(e, t) {
  const n = ue(e), o = Ee(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    const d = wo();
    (!d || d && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: l
  };
}
function Rd(e, t) {
  const n = Ke(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Se(e) ? et(e) : Ce(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, l = r * s.x, d = o * s.y;
  return {
    width: a,
    height: i,
    x: l,
    y: d
  };
}
function vr(e, t, n) {
  let o;
  if (t === "viewport")
    o = Sd(e, n);
  else if (t === "document")
    o = Cd(Ee(e));
  else if (ve(t))
    o = Rd(t, n);
  else {
    const r = ks(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Ut(o);
}
function Ds(e, t) {
  const n = Ve(e);
  return n === t || !ve(n) || tt(n) ? !1 : be(n).position === "fixed" || Ds(n, t);
}
function Ed(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = vt(e, [], !1).filter((i) => ve(i) && st(i) !== "body"), r = null;
  const s = be(e).position === "fixed";
  let a = s ? Ve(e) : e;
  for (; ve(a) && !tt(a); ) {
    const i = be(a), l = bo(a);
    !l && i.position === "fixed" && (r = null), (s ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Et(a) && !l && Ds(e, a)) ? o = o.filter((f) => f !== a) : r = i, a = Ve(a);
  }
  return t.set(e, o), o;
}
function Nd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? cn(t) ? [] : Ed(t, this._c) : [].concat(n), o], i = a[0], l = a.reduce((d, f) => {
    const p = vr(t, f, r);
    return d.top = le(p.top, d.top), d.right = Fe(p.right, d.right), d.bottom = Fe(p.bottom, d.bottom), d.left = le(p.left, d.left), d;
  }, vr(t, i, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Md(e) {
  const {
    width: t,
    height: n
  } = Ts(e);
  return {
    width: t,
    height: n
  };
}
function Pd(e, t, n) {
  const o = Se(t), r = Ee(t), s = n === "fixed", a = Ke(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ce(0);
  if (o || !o && !s)
    if ((st(t) !== "body" || Et(r)) && (i = ln(t)), o) {
      const g = Ke(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else r && (l.x = xo(r));
  const d = r && !o && !s ? Os(r, i) : Ce(0), f = a.left + i.scrollLeft - l.x - d.x, p = a.top + i.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Mn(e) {
  return be(e).position === "static";
}
function br(e, t) {
  if (!Se(e) || be(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ee(e) === n && (n = n.ownerDocument.body), n;
}
function Ls(e, t) {
  const n = ue(e);
  if (cn(e))
    return n;
  if (!Se(e)) {
    let r = Ve(e);
    for (; r && !tt(r); ) {
      if (ve(r) && !Mn(r))
        return r;
      r = Ve(r);
    }
    return n;
  }
  let o = br(e, t);
  for (; o && hd(o) && Mn(o); )
    o = br(o, t);
  return o && tt(o) && Mn(o) && !bo(o) ? n : o || vd(e) || n;
}
const Id = async function(e) {
  const t = this.getOffsetParent || Ls, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Pd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function _d(e) {
  return be(e).direction === "rtl";
}
const Ad = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yd,
  getDocumentElement: Ee,
  getClippingRect: Nd,
  getOffsetParent: Ls,
  getElementRects: Id,
  getClientRects: xd,
  getDimensions: Md,
  getScale: et,
  isElement: ve,
  isRTL: _d
};
function Td(e, t) {
  let n = null, o;
  const r = Ee(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const {
      left: d,
      top: f,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (i || t(), !p || !g)
      return;
    const h = Lt(f), v = Lt(r.clientWidth - (d + p)), m = Lt(r.clientHeight - (f + g)), b = Lt(d), y = {
      rootMargin: -h + "px " + -v + "px " + -m + "px " + -b + "px",
      threshold: le(0, Fe(1, l)) || 1
    };
    let x = !0;
    function C(S) {
      const N = S[0].intersectionRatio;
      if (N !== l) {
        if (!x)
          return a();
        N ? a(!1, N) : o = setTimeout(() => {
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
function kd(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, d = yo(e), f = r || s ? [...d ? vt(d) : [], ...vt(t)] : [];
  f.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const p = d && i ? Td(d, n) : null;
  let g = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let v, m = l ? Ke(e) : null;
  l && b();
  function b() {
    const w = Ke(e);
    m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && n(), m = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    f.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), p == null || p(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const Od = fd, Dd = pd, Ld = ld, Fd = gd, $d = ud, wr = cd, Vd = md, Bd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Ad,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return id(e, t, {
    ...r,
    platform: s
  });
};
var Vt = typeof document < "u" ? hc : vc;
function Ht(e, t) {
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
        if (!Ht(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !Ht(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yr(e, t) {
  const n = Fs(e);
  return Math.round(t * n) / n;
}
function Pn(e) {
  const t = c.useRef(e);
  return Vt(() => {
    t.current = e;
  }), t;
}
function Wd(e) {
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
    open: d
  } = e, [f, p] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, h] = c.useState(o);
  Ht(g, o) || h(o);
  const [v, m] = c.useState(null), [b, w] = c.useState(null), y = c.useCallback((k) => {
    k !== N.current && (N.current = k, m(k));
  }, []), x = c.useCallback((k) => {
    k !== R.current && (R.current = k, w(k));
  }, []), C = s || v, S = a || b, N = c.useRef(null), R = c.useRef(null), P = c.useRef(f), I = l != null, D = Pn(l), V = Pn(r), _ = Pn(d), W = c.useCallback(() => {
    if (!N.current || !R.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: g
    };
    V.current && (k.platform = V.current), Bd(N.current, R.current, k).then((M) => {
      const K = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      F.current && !Ht(P.current, K) && (P.current = K, Zt.flushSync(() => {
        p(K);
      }));
    });
  }, [g, t, n, V, _]);
  Vt(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, p((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [d]);
  const F = c.useRef(!1);
  Vt(() => (F.current = !0, () => {
    F.current = !1;
  }), []), Vt(() => {
    if (C && (N.current = C), S && (R.current = S), C && S) {
      if (D.current)
        return D.current(C, S, W);
      W();
    }
  }, [C, S, W, D, I]);
  const H = c.useMemo(() => ({
    reference: N,
    floating: R,
    setReference: y,
    setFloating: x
  }), [y, x]), L = c.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), z = c.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return k;
    const M = yr(L.floating, f.x), K = yr(L.floating, f.y);
    return i ? {
      ...k,
      transform: "translate(" + M + "px, " + K + "px)",
      ...Fs(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: K
    };
  }, [n, i, L.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: W,
    refs: H,
    elements: L,
    floatingStyles: z
  }), [f, W, H, L, z]);
}
const Gd = (e) => {
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
      return o && t(o) ? o.current != null ? wr({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? wr({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, zd = (e, t) => ({
  ...Od(e),
  options: [e, t]
}), Kd = (e, t) => ({
  ...Dd(e),
  options: [e, t]
}), Ud = (e, t) => ({
  ...Vd(e),
  options: [e, t]
}), Hd = (e, t) => ({
  ...Ld(e),
  options: [e, t]
}), jd = (e, t) => ({
  ...Fd(e),
  options: [e, t]
}), Yd = (e, t) => ({
  ...$d(e),
  options: [e, t]
}), Xd = (e, t) => ({
  ...Gd(e),
  options: [e, t]
});
var qd = "Arrow", $s = c.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ u(
    T.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
$s.displayName = qd;
var Zd = $s, Co = "Popper", [Vs, un] = de(Co), [Qd, Bs] = Vs(Co), Ws = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ u(Qd, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
Ws.displayName = Co;
var Gs = "PopperAnchor", zs = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = Bs(Gs, n), a = c.useRef(null), i = B(t, a);
    return c.useEffect(() => {
      s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
    }), o ? null : /* @__PURE__ */ u(T.div, { ...r, ref: i });
  }
);
zs.displayName = Gs;
var So = "PopperContent", [Jd, ef] = Vs(So), Ks = c.forwardRef(
  (e, t) => {
    var O, Y, Q, j, X, q;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...m
    } = e, b = Bs(So, n), [w, y] = c.useState(null), x = B(t, (ce) => y(ce)), [C, S] = c.useState(null), N = Jt(C), R = (N == null ? void 0 : N.width) ?? 0, P = (N == null ? void 0 : N.height) ?? 0, I = o + (s !== "center" ? "-" + s : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, V = Array.isArray(d) ? d : [d], _ = V.length > 0, W = {
      padding: D,
      boundary: V.filter(nf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _
    }, { refs: F, floatingStyles: H, placement: L, isPositioned: z, middlewareData: k } = Wd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...ce) => kd(...ce, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        zd({ mainAxis: r + P, alignmentAxis: a }),
        l && Kd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Ud() : void 0,
          ...W
        }),
        l && Hd({ ...W }),
        jd({
          ...W,
          apply: ({ elements: ce, rects: ye, availableWidth: lt, availableHeight: ut }) => {
            const { width: dt, height: pc } = ye.reference, _t = ce.floating.style;
            _t.setProperty("--radix-popper-available-width", `${lt}px`), _t.setProperty("--radix-popper-available-height", `${ut}px`), _t.setProperty("--radix-popper-anchor-width", `${dt}px`), _t.setProperty("--radix-popper-anchor-height", `${pc}px`);
          }
        }),
        C && Xd({ element: C, padding: i }),
        of({ arrowWidth: R, arrowHeight: P }),
        g && Yd({ strategy: "referenceHidden", ...W })
      ]
    }), [M, K] = js(L), U = ee(v);
    te(() => {
      z && (U == null || U());
    }, [z, U]);
    const se = (O = k.arrow) == null ? void 0 : O.x, Ne = (Y = k.arrow) == null ? void 0 : Y.y, fe = ((Q = k.arrow) == null ? void 0 : Q.centerOffset) !== 0, [Me, ie] = c.useState();
    return te(() => {
      w && ie(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ u(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: z ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Me,
          "--radix-popper-transform-origin": [
            (j = k.transformOrigin) == null ? void 0 : j.x,
            (X = k.transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = k.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u(
          Jd,
          {
            scope: n,
            placedSide: M,
            onArrowChange: S,
            arrowX: se,
            arrowY: Ne,
            shouldHideArrow: fe,
            children: /* @__PURE__ */ u(
              T.div,
              {
                "data-side": M,
                "data-align": K,
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
Ks.displayName = So;
var Us = "PopperArrow", tf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Hs = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = ef(Us, o), a = tf[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u(
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
        children: /* @__PURE__ */ u(
          Zd,
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
Hs.displayName = Us;
function nf(e) {
  return e !== null;
}
var of = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, y;
    const { placement: n, rects: o, middlewareData: r } = t, a = ((b = r.arrow) == null ? void 0 : b.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [d, f] = js(n), p = { start: "0%", center: "50%", end: "100%" }[f], g = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, h = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "", m = "";
    return d === "bottom" ? (v = a ? p : `${g}px`, m = `${-l}px`) : d === "top" ? (v = a ? p : `${g}px`, m = `${o.floating.height + l}px`) : d === "right" ? (v = `${-l}px`, m = a ? p : `${h}px`) : d === "left" && (v = `${o.floating.width + l}px`, m = a ? p : `${h}px`), { data: { x: v, y: m } };
  }
});
function js(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ro = Ws, Ys = zs, Xs = Ks, qs = Hs, In = "rovingFocusGroup.onEntryFocus", rf = { bubbles: !1, cancelable: !0 }, dn = "RovingFocusGroup", [Vn, Zs, sf] = St(dn), [af, fn] = de(
  dn,
  [sf]
), [cf, lf] = af(dn), Qs = c.forwardRef(
  (e, t) => /* @__PURE__ */ u(Vn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(Vn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(uf, { ...e, ref: t }) }) })
);
Qs.displayName = dn;
var uf = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, g = c.useRef(null), h = B(t, g), v = Rt(s), [m = null, b] = me({
    prop: a,
    defaultProp: i,
    onChange: l
  }), [w, y] = c.useState(!1), x = ee(d), C = Zs(n), S = c.useRef(!1), [N, R] = c.useState(0);
  return c.useEffect(() => {
    const P = g.current;
    if (P)
      return P.addEventListener(In, x), () => P.removeEventListener(In, x);
  }, [x]), /* @__PURE__ */ u(
    cf,
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
      children: /* @__PURE__ */ u(
        T.div,
        {
          tabIndex: w || N === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: E(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: E(e.onFocus, (P) => {
            const I = !S.current;
            if (P.target === P.currentTarget && I && !w) {
              const D = new CustomEvent(In, rf);
              if (P.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const V = C().filter((L) => L.focusable), _ = V.find((L) => L.active), W = V.find((L) => L.id === m), H = [_, W, ...V].filter(
                  Boolean
                ).map((L) => L.ref.current);
                ta(H, f);
              }
            }
            S.current = !1;
          }),
          onBlur: E(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Js = "RovingFocusGroupItem", ea = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      ...a
    } = e, i = ae(), l = s || i, d = lf(Js, n), f = d.currentTabStopId === l, p = Zs(n), { onFocusableItemAdd: g, onFocusableItemRemove: h } = d;
    return c.useEffect(() => {
      if (o)
        return g(), () => h();
    }, [o, g, h]), /* @__PURE__ */ u(
      Vn.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ u(
          T.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: E(e.onMouseDown, (v) => {
              o ? d.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: E(e.onFocus, () => d.onItemFocus(l)),
            onKeyDown: E(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const m = pf(v, d.orientation, d.dir);
              if (m !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let w = p().filter((y) => y.focusable).map((y) => y.ref.current);
                if (m === "last") w.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && w.reverse();
                  const y = w.indexOf(v.currentTarget);
                  w = d.loop ? mf(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => ta(w));
              }
            })
          }
        )
      }
    );
  }
);
ea.displayName = Js;
var df = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ff(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pf(e, t, n) {
  const o = ff(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return df[o];
}
function ta(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function mf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var na = Qs, oa = ea, Bn = ["Enter", " "], gf = ["ArrowDown", "PageUp", "Home"], ra = ["ArrowUp", "PageDown", "End"], hf = [...gf, ...ra], vf = {
  ltr: [...Bn, "ArrowRight"],
  rtl: [...Bn, "ArrowLeft"]
}, bf = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Nt = "Menu", [bt, wf, yf] = St(Nt), [je, sa] = de(Nt, [
  yf,
  un,
  fn
]), Mt = un(), aa = fn(), [ia, Be] = je(Nt), [xf, Pt] = je(Nt), ca = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: a = !0 } = e, i = Mt(t), [l, d] = c.useState(null), f = c.useRef(!1), p = ee(s), g = Rt(r);
  return c.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u(Ro, { ...i, children: /* @__PURE__ */ u(
    ia,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u(
        xf,
        {
          scope: t,
          onClose: c.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: g,
          modal: a,
          children: o
        }
      )
    }
  ) });
};
ca.displayName = Nt;
var Cf = "MenuAnchor", Eo = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Mt(n);
    return /* @__PURE__ */ u(Ys, { ...r, ...o, ref: t });
  }
);
Eo.displayName = Cf;
var No = "MenuPortal", [Sf, la] = je(No, {
  forceMount: void 0
}), ua = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Be(No, t);
  return /* @__PURE__ */ u(Sf, { scope: t, forceMount: n, children: /* @__PURE__ */ u(re, { present: n || s.open, children: /* @__PURE__ */ u(nn, { asChild: !0, container: r, children: o }) }) });
};
ua.displayName = No;
var pe = "MenuContent", [Rf, Mo] = je(pe), da = c.forwardRef(
  (e, t) => {
    const n = la(pe, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(pe, e.__scopeMenu), a = Pt(pe, e.__scopeMenu);
    return /* @__PURE__ */ u(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(re, { present: o || s.open, children: /* @__PURE__ */ u(bt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ u(Ef, { ...r, ref: t }) : /* @__PURE__ */ u(Nf, { ...r, ref: t }) }) }) });
  }
), Ef = c.forwardRef(
  (e, t) => {
    const n = Be(pe, e.__scopeMenu), o = c.useRef(null), r = B(t, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return so(s);
    }, []), /* @__PURE__ */ u(
      Po,
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
), Nf = c.forwardRef((e, t) => {
  const n = Be(pe, e.__scopeMenu);
  return /* @__PURE__ */ u(
    Po,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Po = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: g,
      onDismiss: h,
      disableOutsideScroll: v,
      ...m
    } = e, b = Be(pe, n), w = Pt(pe, n), y = Mt(n), x = aa(n), C = wf(n), [S, N] = c.useState(null), R = c.useRef(null), P = B(t, R, b.onContentChange), I = c.useRef(0), D = c.useRef(""), V = c.useRef(0), _ = c.useRef(null), W = c.useRef("right"), F = c.useRef(0), H = v ? rn : c.Fragment, L = v ? { as: Ie, allowPinchZoom: !0 } : void 0, z = (M) => {
      var O, Y;
      const K = D.current + M, U = C().filter((Q) => !Q.disabled), se = document.activeElement, Ne = (O = U.find((Q) => Q.ref.current === se)) == null ? void 0 : O.textValue, fe = U.map((Q) => Q.textValue), Me = $f(fe, K, Ne), ie = (Y = U.find((Q) => Q.textValue === Me)) == null ? void 0 : Y.ref.current;
      (function Q(j) {
        D.current = j, window.clearTimeout(I.current), j !== "" && (I.current = window.setTimeout(() => Q(""), 1e3));
      })(K), ie && setTimeout(() => ie.focus());
    };
    c.useEffect(() => () => window.clearTimeout(I.current), []), ro();
    const k = c.useCallback((M) => {
      var U, se;
      return W.current === ((U = _.current) == null ? void 0 : U.side) && Bf(M, (se = _.current) == null ? void 0 : se.area);
    }, []);
    return /* @__PURE__ */ u(
      Rf,
      {
        scope: n,
        searchRef: D,
        onItemEnter: c.useCallback(
          (M) => {
            k(M) && M.preventDefault();
          },
          [k]
        ),
        onItemLeave: c.useCallback(
          (M) => {
            var K;
            k(M) || ((K = R.current) == null || K.focus(), N(null));
          },
          [k]
        ),
        onTriggerLeave: c.useCallback(
          (M) => {
            k(M) && M.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: V,
        onPointerGraceIntentChange: c.useCallback((M) => {
          _.current = M;
        }, []),
        children: /* @__PURE__ */ u(H, { ...L, children: /* @__PURE__ */ u(
          tn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: E(s, (M) => {
              var K;
              M.preventDefault(), (K = R.current) == null || K.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ u(
              Ct,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: g,
                onDismiss: h,
                children: /* @__PURE__ */ u(
                  na,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: E(l, (M) => {
                      w.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u(
                      Xs,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Pa(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: E(m.onKeyDown, (M) => {
                          const U = M.target.closest("[data-radix-menu-content]") === M.currentTarget, se = M.ctrlKey || M.altKey || M.metaKey, Ne = M.key.length === 1;
                          U && (M.key === "Tab" && M.preventDefault(), !se && Ne && z(M.key));
                          const fe = R.current;
                          if (M.target !== fe || !hf.includes(M.key)) return;
                          M.preventDefault();
                          const ie = C().filter((O) => !O.disabled).map((O) => O.ref.current);
                          ra.includes(M.key) && ie.reverse(), Lf(ie);
                        }),
                        onBlur: E(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), D.current = "");
                        }),
                        onPointerMove: E(
                          e.onPointerMove,
                          wt((M) => {
                            const K = M.target, U = F.current !== M.clientX;
                            if (M.currentTarget.contains(K) && U) {
                              const se = M.clientX > F.current ? "right" : "left";
                              W.current = se, F.current = M.clientX;
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
da.displayName = pe;
var Mf = "MenuGroup", Io = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(T.div, { role: "group", ...o, ref: t });
  }
);
Io.displayName = Mf;
var Pf = "MenuLabel", fa = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(T.div, { ...o, ref: t });
  }
);
fa.displayName = Pf;
var jt = "MenuItem", xr = "menu.itemSelect", pn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = c.useRef(null), a = Pt(jt, e.__scopeMenu), i = Mo(jt, e.__scopeMenu), l = B(t, s), d = c.useRef(!1), f = () => {
      const p = s.current;
      if (!n && p) {
        const g = new CustomEvent(xr, { bubbles: !0, cancelable: !0 });
        p.addEventListener(xr, (h) => o == null ? void 0 : o(h), { once: !0 }), Wt(p, g), g.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ u(
      pa,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: E(e.onClick, f),
        onPointerDown: (p) => {
          var g;
          (g = e.onPointerDown) == null || g.call(e, p), d.current = !0;
        },
        onPointerUp: E(e.onPointerUp, (p) => {
          var g;
          d.current || (g = p.currentTarget) == null || g.click();
        }),
        onKeyDown: E(e.onKeyDown, (p) => {
          const g = i.searchRef.current !== "";
          n || g && p.key === " " || Bn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
pn.displayName = jt;
var pa = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, a = Mo(jt, n), i = aa(n), l = c.useRef(null), d = B(t, l), [f, p] = c.useState(!1), [g, h] = c.useState("");
    return c.useEffect(() => {
      const v = l.current;
      v && h((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ u(
      bt.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? g,
        children: /* @__PURE__ */ u(oa, { asChild: !0, ...i, focusable: !o, children: /* @__PURE__ */ u(
          T.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: E(
              e.onPointerMove,
              wt((v) => {
                o ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: E(
              e.onPointerLeave,
              wt((v) => a.onItemLeave(v))
            ),
            onFocus: E(e.onFocus, () => p(!0)),
            onBlur: E(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), If = "MenuCheckboxItem", ma = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ u(wa, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u(
      pn,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": To(n),
        onSelect: E(
          r.onSelect,
          () => o == null ? void 0 : o(Yt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ma.displayName = If;
var ga = "MenuRadioGroup", [_f, Af] = je(
  ga,
  { value: void 0, onValueChange: () => {
  } }
), ha = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ee(o);
    return /* @__PURE__ */ u(_f, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ u(Io, { ...r, ref: t }) });
  }
);
ha.displayName = ga;
var va = "MenuRadioItem", ba = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = Af(va, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ u(wa, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ u(
      pn,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": To(s),
        onSelect: E(
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
ba.displayName = va;
var _o = "MenuItemIndicator", [wa, Tf] = je(
  _o,
  { checked: !1 }
), ya = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = Tf(_o, n);
    return /* @__PURE__ */ u(
      re,
      {
        present: o || Yt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u(
          T.span,
          {
            ...r,
            ref: t,
            "data-state": To(s.checked)
          }
        )
      }
    );
  }
);
ya.displayName = _o;
var kf = "MenuSeparator", xa = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(
      T.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
xa.displayName = kf;
var Of = "MenuArrow", Ca = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Mt(n);
    return /* @__PURE__ */ u(qs, { ...r, ...o, ref: t });
  }
);
Ca.displayName = Of;
var Ao = "MenuSub", [Df, Sa] = je(Ao), Ra = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = Be(Ao, t), a = Mt(t), [i, l] = c.useState(null), [d, f] = c.useState(null), p = ee(r);
  return c.useEffect(() => (s.open === !1 && p(!1), () => p(!1)), [s.open, p]), /* @__PURE__ */ u(Ro, { ...a, children: /* @__PURE__ */ u(
    ia,
    {
      scope: t,
      open: o,
      onOpenChange: p,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ u(
        Df,
        {
          scope: t,
          contentId: ae(),
          triggerId: ae(),
          trigger: i,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Ra.displayName = Ao;
var mt = "MenuSubTrigger", Ea = c.forwardRef(
  (e, t) => {
    const n = Be(mt, e.__scopeMenu), o = Pt(mt, e.__scopeMenu), r = Sa(mt, e.__scopeMenu), s = Mo(mt, e.__scopeMenu), a = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: e.__scopeMenu }, f = c.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return c.useEffect(() => f, [f]), c.useEffect(() => {
      const p = i.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [i, l]), /* @__PURE__ */ u(Eo, { asChild: !0, ...d, children: /* @__PURE__ */ u(
      pa,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Pa(n.open),
        ...e,
        ref: yt(t, r.onTriggerChange),
        onClick: (p) => {
          var g;
          (g = e.onClick) == null || g.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: E(
          e.onPointerMove,
          wt((p) => {
            s.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: E(
          e.onPointerLeave,
          wt((p) => {
            var h, v;
            f();
            const g = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (g) {
              const m = (v = n.content) == null ? void 0 : v.dataset.side, b = m === "right", w = b ? -5 : 5, y = g[b ? "left" : "right"], x = g[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + w, y: p.clientY },
                  { x: y, y: g.top },
                  { x, y: g.top },
                  { x, y: g.bottom },
                  { x: y, y: g.bottom }
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
        onKeyDown: E(e.onKeyDown, (p) => {
          var h;
          const g = s.searchRef.current !== "";
          e.disabled || g && p.key === " " || vf[o.dir].includes(p.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Ea.displayName = mt;
var Na = "MenuSubContent", Ma = c.forwardRef(
  (e, t) => {
    const n = la(pe, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Be(pe, e.__scopeMenu), a = Pt(pe, e.__scopeMenu), i = Sa(Na, e.__scopeMenu), l = c.useRef(null), d = B(t, l);
    return /* @__PURE__ */ u(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(re, { present: o || s.open, children: /* @__PURE__ */ u(bt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(
      Po,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...r,
        ref: d,
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
        onFocusOutside: E(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: E(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: E(e.onKeyDown, (f) => {
          var h;
          const p = f.currentTarget.contains(f.target), g = bf[a.dir].includes(f.key);
          p && g && (s.onOpenChange(!1), (h = i.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ma.displayName = Na;
function Pa(e) {
  return e ? "open" : "closed";
}
function Yt(e) {
  return e === "indeterminate";
}
function To(e) {
  return Yt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Lf(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ff(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function $f(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Ff(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const l = a.find(
    (d) => d.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Vf(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, l = t[s].y, d = t[a].x, f = t[a].y;
    l > o != f > o && n < (d - i) * (o - l) / (f - l) + i && (r = !r);
  }
  return r;
}
function Bf(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Vf(n, t);
}
function wt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Wf = ca, Gf = Eo, zf = ua, Kf = da, Uf = Io, Hf = fa, jf = pn, Yf = ma, Xf = ha, qf = ba, Zf = ya, Qf = xa, Jf = Ca, ep = Ra, tp = Ea, np = Ma, ko = "DropdownMenu", [op, Jg] = de(
  ko,
  [sa]
), oe = sa(), [rp, Ia] = op(ko), _a = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, l = oe(t), d = c.useRef(null), [f = !1, p] = me({
    prop: r,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ u(
    rp,
    {
      scope: t,
      triggerId: ae(),
      triggerRef: d,
      contentId: ae(),
      open: f,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((g) => !g), [p]),
      modal: i,
      children: /* @__PURE__ */ u(Wf, { ...l, open: f, onOpenChange: p, dir: o, modal: i, children: n })
    }
  );
};
_a.displayName = ko;
var Aa = "DropdownMenuTrigger", Ta = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = Ia(Aa, n), a = oe(n);
    return /* @__PURE__ */ u(Gf, { asChild: !0, ...a, children: /* @__PURE__ */ u(
      T.button,
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
        onPointerDown: E(e.onPointerDown, (i) => {
          !o && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: E(e.onKeyDown, (i) => {
          o || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Ta.displayName = Aa;
var sp = "DropdownMenuPortal", ka = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = oe(t);
  return /* @__PURE__ */ u(zf, { ...o, ...n });
};
ka.displayName = sp;
var Oa = "DropdownMenuContent", Da = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Ia(Oa, n), s = oe(n), a = c.useRef(!1);
    return /* @__PURE__ */ u(
      Kf,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: E(e.onCloseAutoFocus, (i) => {
          var l;
          a.current || (l = r.triggerRef.current) == null || l.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: E(e.onInteractOutside, (i) => {
          const l = i.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
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
Da.displayName = Oa;
var ap = "DropdownMenuGroup", La = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ u(Uf, { ...r, ...o, ref: t });
  }
);
La.displayName = ap;
var ip = "DropdownMenuLabel", Fa = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ u(Hf, { ...r, ...o, ref: t });
  }
);
Fa.displayName = ip;
var cp = "DropdownMenuItem", $a = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ u(jf, { ...r, ...o, ref: t });
  }
);
$a.displayName = cp;
var lp = "DropdownMenuCheckboxItem", Va = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(Yf, { ...r, ...o, ref: t });
});
Va.displayName = lp;
var up = "DropdownMenuRadioGroup", Ba = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(Xf, { ...r, ...o, ref: t });
});
Ba.displayName = up;
var dp = "DropdownMenuRadioItem", Wa = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(qf, { ...r, ...o, ref: t });
});
Wa.displayName = dp;
var fp = "DropdownMenuItemIndicator", Ga = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(Zf, { ...r, ...o, ref: t });
});
Ga.displayName = fp;
var pp = "DropdownMenuSeparator", za = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(Qf, { ...r, ...o, ref: t });
});
za.displayName = pp;
var mp = "DropdownMenuArrow", gp = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
    return /* @__PURE__ */ u(Jf, { ...r, ...o, ref: t });
  }
);
gp.displayName = mp;
var hp = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, a = oe(t), [i = !1, l] = me({
    prop: o,
    defaultProp: s,
    onChange: r
  });
  return /* @__PURE__ */ u(ep, { ...a, open: i, onOpenChange: l, children: n });
}, vp = "DropdownMenuSubTrigger", Ka = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(tp, { ...r, ...o, ref: t });
});
Ka.displayName = vp;
var bp = "DropdownMenuSubContent", Ua = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = oe(n);
  return /* @__PURE__ */ u(
    np,
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
Ua.displayName = bp;
var wp = _a, yp = Ta, Ha = ka, xp = Da, Cp = La, Sp = Fa, Rp = $a, Ep = Va, Np = Ba, Mp = Wa, ja = Ga, Pp = za, Ip = hp, _p = Ka, Ap = Ua;
const eh = wp, th = yp, nh = Cp, oh = Ha, rh = Ip, sh = Np, ah = ({
  className: e,
  inset: t,
  children: n,
  ...o
}) => /* @__PURE__ */ G(
  _p,
  {
    className: A(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ u(xc, { className: "ml-auto" })
    ]
  }
), ih = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  Ap,
  {
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
), ch = ({
  className: e,
  sideOffset: t = 4,
  ...n
}) => /* @__PURE__ */ u(Ha, { children: /* @__PURE__ */ u(
  xp,
  {
    sideOffset: t,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }), lh = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ u(
  Rp,
  {
    className: A(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
), uh = ({
  className: e,
  children: t,
  checked: n,
  ...o
}) => /* @__PURE__ */ G(
  Ep,
  {
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(ja, { children: /* @__PURE__ */ u(Zn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
), dh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ G(
  Mp,
  {
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(ja, { children: /* @__PURE__ */ u(Dr, { className: "fill-current h-2 w-2" }) }) }),
      t
    ]
  }
), fh = ({
  className: e,
  inset: t,
  ...n
}) => /* @__PURE__ */ u(
  Sp,
  {
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
), ph = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  Pp,
  {
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
), mh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "span",
  {
    className: A("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
var Tp = (e) => e.type === "checkbox", kp = (e) => e instanceof Date, Ya = (e) => e == null;
const Op = (e) => typeof e == "object";
var at = (e) => !Ya(e) && !Array.isArray(e) && Op(e) && !kp(e), Dp = (e) => at(e) && e.target ? Tp(e.target) ? e.target.checked : e.target.value : e, Lp = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Fp = (e, t) => e.has(Lp(t)), $p = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return at(t) && t.hasOwnProperty("isPrototypeOf");
}, Vp = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Oo(e) {
  let t;
  const n = Array.isArray(e), o = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Vp && (e instanceof Blob || o)) && (n || at(e)))
    if (t = n ? [] : {}, !n && !$p(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Oo(e[r]));
  else
    return e;
  return t;
}
var Xa = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Wn = (e) => e === void 0, ne = (e, t, n) => {
  if (!t || !at(e))
    return n;
  const o = Xa(t.split(/[,[\].]+?/)).reduce((r, s) => Ya(r) ? r : r[s], e);
  return Wn(o) || o === e ? Wn(e[t]) ? n : e[t] : o;
}, _n = (e) => typeof e == "boolean", Bp = (e) => /^\w*$/.test(e), Wp = (e) => Xa(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Cr = (e, t, n) => {
  let o = -1;
  const r = Bp(t) ? [t] : Wp(t), s = r.length, a = s - 1;
  for (; ++o < s; ) {
    const i = r[o];
    let l = n;
    if (o !== a) {
      const d = e[i];
      l = at(d) || Array.isArray(d) ? d : isNaN(+r[o + 1]) ? {} : [];
    }
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    e[i] = l, e = e[i];
  }
  return e;
};
const Sr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Rr = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, qa = Z.createContext(null), mn = () => Z.useContext(qa), Gp = (e) => {
  const { children: t, ...n } = e;
  return Z.createElement(qa.Provider, { value: n }, t);
};
var zp = (e, t, n, o = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(r, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== Rr.all && (t._proxyFormState[a] = !o || Rr.all), n && (n[a] = !0), e[a];
      }
    });
  return r;
}, Kp = (e) => at(e) && !Object.keys(e).length, Up = (e, t, n, o) => {
  n(e);
  const { name: r, ...s } = e;
  return Kp(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((a) => t[a] === !o);
}, Hp = (e) => Array.isArray(e) ? e : [e], Za = (e, t, n) => !e || !t || e === t || Hp(e).some((o) => o && (n ? o === t : o.startsWith(t) || t.startsWith(o)));
function Qa(e) {
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
function jp(e) {
  const t = mn(), { control: n = t.control, disabled: o, name: r, exact: s } = e || {}, [a, i] = Z.useState(n._formState), l = Z.useRef(!0), d = Z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = Z.useRef(r);
  return f.current = r, Qa({
    disabled: o,
    next: (p) => l.current && Za(f.current, p.name, s) && Up(p, d.current, n._updateFormState) && i({
      ...n._formState,
      ...p
    }),
    subject: n._subjects.state
  }), Z.useEffect(() => (l.current = !0, d.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), Z.useMemo(() => zp(a, n, d.current, !1), [a, n]);
}
var Yp = (e) => typeof e == "string", Xp = (e, t, n, o, r) => Yp(e) ? ne(n, e, r) : Array.isArray(e) ? e.map((s) => ne(n, s)) : n;
function qp(e) {
  const t = mn(), { control: n = t.control, name: o, defaultValue: r, disabled: s, exact: a } = e || {}, i = Z.useRef(o);
  i.current = o, Qa({
    disabled: s,
    subject: n._subjects.values,
    next: (f) => {
      Za(i.current, f.name, a) && d(Oo(Xp(i.current, n._names, f.values || n._formValues, !1, r)));
    }
  });
  const [l, d] = Z.useState(n._getWatch(o, r));
  return Z.useEffect(() => n._removeUnmounted()), l;
}
function Zp(e) {
  const t = mn(), { name: n, disabled: o, control: r = t.control, shouldUnregister: s } = e, a = Fp(r._names.array, n), i = qp({
    control: r,
    name: n,
    defaultValue: ne(r._formValues, n, ne(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = jp({
    control: r,
    name: n,
    exact: !0
  }), d = Z.useRef(r.register(n, {
    ...e.rules,
    value: i,
    ..._n(e.disabled) ? { disabled: e.disabled } : {}
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
    ..._n(o) || l.disabled ? { disabled: l.disabled || o } : {},
    onChange: (g) => d.current.onChange({
      target: {
        value: Dp(g),
        name: n
      },
      type: Sr.CHANGE
    }),
    onBlur: () => d.current.onBlur({
      target: {
        value: ne(r._formValues, n),
        name: n
      },
      type: Sr.BLUR
    }),
    ref: (g) => {
      const h = ne(r._fields, n);
      h && g && (h._f.ref = {
        focus: () => g.focus(),
        select: () => g.select(),
        setCustomValidity: (v) => g.setCustomValidity(v),
        reportValidity: () => g.reportValidity()
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
    const g = r._options.shouldUnregister || s, h = (v, m) => {
      const b = ne(r._fields, v);
      b && b._f && (b._f.mount = m);
    };
    if (h(n, !0), g) {
      const v = Oo(ne(r._options.defaultValues, n));
      Cr(r._defaultValues, n, v), Wn(ne(r._formValues, n)) && Cr(r._formValues, n, v);
    }
    return () => {
      (a ? g && !r._state.action : g) ? r.unregister(n) : h(n, !1);
    };
  }, [n, r, a, s]), Z.useEffect(() => {
    _n(o) && ne(r._fields, n) && r._updateDisabledField({
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
const Qp = (e) => e.render(Zp(e));
var Jp = "Label", Ja = c.forwardRef((e, t) => /* @__PURE__ */ u(
  T.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ja.displayName = Jp;
var em = Ja;
const tm = He(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), nm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  em,
  {
    ref: n,
    className: A(tm(), e),
    ...t
  }
)), gh = Gp, ei = c.createContext(
  {}
), hh = ({
  ...e
}) => /* @__PURE__ */ u(ei.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u(Qp, { ...e }) }), gn = () => {
  const e = c.useContext(ei), t = c.useContext(ti), { getFieldState: n, formState: o } = mn(), r = n(e.name, o);
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
}, ti = c.createContext(
  {}
), om = c.forwardRef(({ className: e, ...t }, n) => {
  const o = c.useId();
  return /* @__PURE__ */ u(ti.Provider, { value: { id: o }, children: /* @__PURE__ */ u("div", { ref: n, className: A("space-y-1", e), ...t }) });
});
om.displayName = "FormItem";
const rm = c.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: r } = gn();
  return /* @__PURE__ */ u(
    nm,
    {
      ref: n,
      className: A(o && "text-destructive", e),
      htmlFor: r,
      ...t
    }
  );
});
rm.displayName = "FormLabel";
const sm = c.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: r, formMessageId: s } = gn();
  return /* @__PURE__ */ u(
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
sm.displayName = "FormControl";
const am = c.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = gn();
  return /* @__PURE__ */ u(
    "p",
    {
      ref: n,
      id: o,
      className: A("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
am.displayName = "FormDescription";
const im = c.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: r, formMessageId: s } = gn(), a = r ? String(r == null ? void 0 : r.message) : t;
  return a ? /* @__PURE__ */ u(
    "p",
    {
      ref: o,
      id: s,
      className: A("text-sm font-medium text-destructive", e),
      ...n,
      children: a
    }
  ) : null;
});
im.displayName = "FormMessage";
const vh = c.forwardRef(
  ({ className: e, type: t, prefix: n, suffix: o, ...r }, s) => /* @__PURE__ */ G("div", { className: "relative flex w-full items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background dark:focus-within:ring-neutral-600", children: [
    n && /* @__PURE__ */ u("div", { className: "pointer-events-none flex h-10 items-center pl-3 text-subtitle", children: n }),
    /* @__PURE__ */ u(
      "input",
      {
        type: t,
        className: A(
          "h-10 w-full bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground placeholder:opacity-60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          e
        ),
        ref: s,
        ...r
      }
    ),
    o && /* @__PURE__ */ u("div", { className: "pointer-events-none flex h-10 items-center pr-3 text-subtitle", children: o })
  ] })
);
var cm = "VisuallyHidden", Do = c.forwardRef(
  (e, t) => /* @__PURE__ */ u(
    T.span,
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
Do.displayName = cm;
var lm = Do, it = "NavigationMenu", [Lo, ni, um] = St(it), [Gn, dm, fm] = St(it), [Fo, bh] = de(
  it,
  [um, fm]
), [pm, ge] = Fo(it), [mm, gm] = Fo(it), oi = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      delayDuration: a = 200,
      skipDelayDuration: i = 300,
      orientation: l = "horizontal",
      dir: d,
      ...f
    } = e, [p, g] = c.useState(null), h = B(t, (I) => g(I)), v = Rt(d), m = c.useRef(0), b = c.useRef(0), w = c.useRef(0), [y, x] = c.useState(!0), [C = "", S] = me({
      prop: o,
      onChange: (I) => {
        const D = I !== "", V = i > 0;
        D ? (window.clearTimeout(w.current), V && x(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => x(!0),
          i
        )), r == null || r(I);
      },
      defaultProp: s
    }), N = c.useCallback(() => {
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
        }, a);
      },
      [C, S, a]
    );
    return c.useEffect(() => () => {
      window.clearTimeout(m.current), window.clearTimeout(b.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ u(
      ai,
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
          window.clearTimeout(m.current), N();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: N,
        onItemSelect: (I) => {
          S((D) => D === I ? "" : I);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ u(
          T.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: v,
            ...f,
            ref: h
          }
        )
      }
    );
  }
);
oi.displayName = it;
var ri = "NavigationMenuSub", si = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      orientation: a = "horizontal",
      ...i
    } = e, l = ge(ri, n), [d = "", f] = me({
      prop: o,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ u(
      ai,
      {
        scope: n,
        isRootMenu: !1,
        value: d,
        dir: l.dir,
        orientation: a,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ u(T.div, { "data-orientation": a, ...i, ref: t })
      }
    );
  }
);
si.displayName = ri;
var ai = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: o,
    dir: r,
    orientation: s,
    children: a,
    value: i,
    onItemSelect: l,
    onItemDismiss: d,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: g,
    onContentLeave: h
  } = e, [v, m] = c.useState(null), [b, w] = c.useState(/* @__PURE__ */ new Map()), [y, x] = c.useState(null);
  return /* @__PURE__ */ u(
    pm,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: o,
      value: i,
      previousValue: xt(i),
      baseId: ae(),
      dir: r,
      orientation: s,
      viewport: v,
      onViewportChange: m,
      indicatorTrack: y,
      onIndicatorTrackChange: x,
      onTriggerEnter: ee(f),
      onTriggerLeave: ee(p),
      onContentEnter: ee(g),
      onContentLeave: ee(h),
      onItemSelect: ee(l),
      onItemDismiss: ee(d),
      onViewportContentChange: c.useCallback((C, S) => {
        w((N) => (N.set(C, S), new Map(N)));
      }, []),
      onViewportContentRemove: c.useCallback((C) => {
        w((S) => S.has(C) ? (S.delete(C), new Map(S)) : S);
      }, []),
      children: /* @__PURE__ */ u(Lo.Provider, { scope: t, children: /* @__PURE__ */ u(mm, { scope: t, items: b, children: a }) })
    }
  );
}, ii = "NavigationMenuList", ci = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = ge(ii, n), s = /* @__PURE__ */ u(T.ul, { "data-orientation": r.orientation, ...o, ref: t });
    return /* @__PURE__ */ u(T.div, { style: { position: "relative" }, ref: r.onIndicatorTrackChange, children: /* @__PURE__ */ u(Lo.Slot, { scope: n, children: r.isRootMenu ? /* @__PURE__ */ u(vi, { asChild: !0, children: s }) : s }) });
  }
);
ci.displayName = ii;
var li = "NavigationMenuItem", [hm, ui] = Fo(li), di = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: o, ...r } = e, s = ae(), a = o || s || "LEGACY_REACT_AUTO_VALUE", i = c.useRef(null), l = c.useRef(null), d = c.useRef(null), f = c.useRef(() => {
    }), p = c.useRef(!1), g = c.useCallback((v = "start") => {
      if (i.current) {
        f.current();
        const m = Kn(i.current);
        m.length && Bo(v === "start" ? m : m.reverse());
      }
    }, []), h = c.useCallback(() => {
      if (i.current) {
        const v = Kn(i.current);
        v.length && (f.current = Rm(v));
      }
    }, []);
    return /* @__PURE__ */ u(
      hm,
      {
        scope: n,
        value: a,
        triggerRef: l,
        contentRef: i,
        focusProxyRef: d,
        wasEscapeCloseRef: p,
        onEntryKeyDown: g,
        onFocusProxyEnter: g,
        onRootContentClose: h,
        onContentFocusOutside: h,
        children: /* @__PURE__ */ u(T.li, { ...r, ref: t })
      }
    );
  }
);
di.displayName = li;
var zn = "NavigationMenuTrigger", fi = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: o, ...r } = e, s = ge(zn, e.__scopeNavigationMenu), a = ui(zn, e.__scopeNavigationMenu), i = c.useRef(null), l = B(i, a.triggerRef, t), d = wi(s.baseId, a.value), f = yi(s.baseId, a.value), p = c.useRef(!1), g = c.useRef(!1), h = a.value === s.value;
  return /* @__PURE__ */ G(Le, { children: [
    /* @__PURE__ */ u(Lo.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ u(bi, { asChild: !0, children: /* @__PURE__ */ u(
      T.button,
      {
        id: d,
        disabled: o,
        "data-disabled": o ? "" : void 0,
        "data-state": Wo(h),
        "aria-expanded": h,
        "aria-controls": f,
        ...r,
        ref: l,
        onPointerEnter: E(e.onPointerEnter, () => {
          g.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: E(
          e.onPointerMove,
          Xt(() => {
            o || g.current || a.wasEscapeCloseRef.current || p.current || (s.onTriggerEnter(a.value), p.current = !0);
          })
        ),
        onPointerLeave: E(
          e.onPointerLeave,
          Xt(() => {
            o || (s.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: E(e.onClick, () => {
          s.onItemSelect(a.value), g.current = h;
        }),
        onKeyDown: E(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          h && v.key === b && (a.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    h && /* @__PURE__ */ G(Le, { children: [
      /* @__PURE__ */ u(
        lm,
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
      s.viewport && /* @__PURE__ */ u("span", { "aria-owns": f })
    ] })
  ] });
});
fi.displayName = zn;
var vm = "NavigationMenuLink", Er = "navigationMenu.linkSelect", pi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: o, onSelect: r, ...s } = e;
    return /* @__PURE__ */ u(bi, { asChild: !0, children: /* @__PURE__ */ u(
      T.a,
      {
        "data-active": o ? "" : void 0,
        "aria-current": o ? "page" : void 0,
        ...s,
        ref: t,
        onClick: E(
          e.onClick,
          (a) => {
            const i = a.target, l = new CustomEvent(Er, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(Er, (d) => r == null ? void 0 : r(d), { once: !0 }), Wt(i, l), !l.defaultPrevented && !a.metaKey) {
              const d = new CustomEvent(Bt, {
                bubbles: !0,
                cancelable: !0
              });
              Wt(i, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
pi.displayName = vm;
var $o = "NavigationMenuIndicator", bm = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = ge($o, e.__scopeNavigationMenu), s = !!r.value;
  return r.indicatorTrack ? Ar.createPortal(
    /* @__PURE__ */ u(re, { present: n || s, children: /* @__PURE__ */ u(wm, { ...o, ref: t }) }),
    r.indicatorTrack
  ) : null;
});
bm.displayName = $o;
var wm = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = ge($o, n), s = ni(n), [a, i] = c.useState(
    null
  ), [l, d] = c.useState(null), f = r.orientation === "horizontal", p = !!r.value;
  c.useEffect(() => {
    var m;
    const v = (m = s().find((b) => b.value === r.value)) == null ? void 0 : m.ref.current;
    v && i(v);
  }, [s, r.value]);
  const g = () => {
    a && d({
      size: f ? a.offsetWidth : a.offsetHeight,
      offset: f ? a.offsetLeft : a.offsetTop
    });
  };
  return Un(a, g), Un(r.indicatorTrack, g), l ? /* @__PURE__ */ u(
    T.div,
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
}), nt = "NavigationMenuContent", mi = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = ge(nt, e.__scopeNavigationMenu), s = ui(nt, e.__scopeNavigationMenu), a = B(s.contentRef, t), i = s.value === r.value, l = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...o
  };
  return r.viewport ? /* @__PURE__ */ u(ym, { forceMount: n, ...l, ref: a }) : /* @__PURE__ */ u(re, { present: n || i, children: /* @__PURE__ */ u(
    gi,
    {
      "data-state": Wo(i),
      ...l,
      ref: a,
      onPointerEnter: E(e.onPointerEnter, r.onContentEnter),
      onPointerLeave: E(
        e.onPointerLeave,
        Xt(r.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && r.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
mi.displayName = nt;
var ym = c.forwardRef((e, t) => {
  const n = ge(nt, e.__scopeNavigationMenu), { onViewportContentChange: o, onViewportContentRemove: r } = n;
  return te(() => {
    o(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, o]), te(() => () => r(e.value), [e.value, r]), null;
}), Bt = "navigationMenu.rootContentDismiss", gi = c.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: o,
    triggerRef: r,
    focusProxyRef: s,
    wasEscapeCloseRef: a,
    onRootContentClose: i,
    onContentFocusOutside: l,
    ...d
  } = e, f = ge(nt, n), p = c.useRef(null), g = B(p, t), h = wi(f.baseId, o), v = yi(f.baseId, o), m = ni(n), b = c.useRef(null), { onItemDismiss: w } = f;
  c.useEffect(() => {
    const x = p.current;
    if (f.isRootMenu && x) {
      const C = () => {
        var S;
        w(), i(), x.contains(document.activeElement) && ((S = r.current) == null || S.focus());
      };
      return x.addEventListener(Bt, C), () => x.removeEventListener(Bt, C);
    }
  }, [f.isRootMenu, e.value, r, w, i]);
  const y = c.useMemo(() => {
    const C = m().map((D) => D.value);
    f.dir === "rtl" && C.reverse();
    const S = C.indexOf(f.value), N = C.indexOf(f.previousValue), R = o === f.value, P = N === C.indexOf(o);
    if (!R && !P) return b.current;
    const I = (() => {
      if (S !== N) {
        if (R && N !== -1) return S > N ? "from-end" : "from-start";
        if (P && S !== -1) return S > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = I, I;
  }, [f.previousValue, f.value, f.dir, m, o]);
  return /* @__PURE__ */ u(vi, { asChild: !0, children: /* @__PURE__ */ u(
    Ct,
    {
      id: v,
      "aria-labelledby": h,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...d,
      ref: g,
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
        }), N = f.isRootMenu && ((R = f.viewport) == null ? void 0 : R.contains(C));
        (S || N || !f.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: E(e.onKeyDown, (x) => {
        var N;
        const C = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !C) {
          const R = Kn(x.currentTarget), P = document.activeElement, I = R.findIndex((_) => _ === P), V = x.shiftKey ? R.slice(0, I).reverse() : R.slice(I + 1, R.length);
          Bo(V) ? x.preventDefault() : (N = s.current) == null || N.focus();
        }
      }),
      onEscapeKeyDown: E(e.onEscapeKeyDown, (x) => {
        a.current = !0;
      })
    }
  ) });
}), Vo = "NavigationMenuViewport", hi = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, s = !!ge(Vo, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u(re, { present: n || s, children: /* @__PURE__ */ u(xm, { ...o, ref: t }) });
});
hi.displayName = Vo;
var xm = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: o, ...r } = e, s = ge(Vo, n), a = B(t, s.onViewportChange), i = gm(
    nt,
    e.__scopeNavigationMenu
  ), [l, d] = c.useState(null), [f, p] = c.useState(null), g = l ? (l == null ? void 0 : l.width) + "px" : void 0, h = l ? (l == null ? void 0 : l.height) + "px" : void 0, v = !!s.value, m = v ? s.value : s.previousValue;
  return Un(f, () => {
    f && d({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ u(
    T.div,
    {
      "data-state": Wo(v),
      "data-orientation": s.orientation,
      ...r,
      ref: a,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": g,
        "--radix-navigation-menu-viewport-height": h,
        ...r.style
      },
      onPointerEnter: E(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: E(e.onPointerLeave, Xt(s.onContentLeave)),
      children: Array.from(i.items).map(([w, { ref: y, forceMount: x, ...C }]) => {
        const S = m === w;
        return /* @__PURE__ */ u(re, { present: x || S, children: /* @__PURE__ */ u(
          gi,
          {
            ...C,
            ref: yt(y, (N) => {
              S && N && p(N);
            })
          }
        ) }, w);
      })
    }
  );
}), Cm = "FocusGroup", vi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = ge(Cm, n);
    return /* @__PURE__ */ u(Gn.Provider, { scope: n, children: /* @__PURE__ */ u(Gn.Slot, { scope: n, children: /* @__PURE__ */ u(T.div, { dir: r.dir, ...o, ref: t }) }) });
  }
), Nr = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Sm = "FocusGroupItem", bi = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...o } = e, r = dm(n), s = ge(Sm, n);
    return /* @__PURE__ */ u(Gn.ItemSlot, { scope: n, children: /* @__PURE__ */ u(
      T.button,
      {
        ...o,
        ref: t,
        onKeyDown: E(e.onKeyDown, (a) => {
          if (["Home", "End", ...Nr].includes(a.key)) {
            let l = r().map((p) => p.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && l.reverse(), Nr.includes(a.key)) {
              const p = l.indexOf(a.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => Bo(l)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function Kn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function Rm(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Un(e, t) {
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
function Wo(e) {
  return e ? "open" : "closed";
}
function wi(e, t) {
  return `${e}-trigger-${t}`;
}
function yi(e, t) {
  return `${e}-content-${t}`;
}
function Xt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Em = oi, Nm = si, xi = ci, Mr = di, Mm = fi, Ci = pi, Pm = mi, Im = hi;
const wh = ({ children: e }) => /* @__PURE__ */ G(Em, { className: "relative z-10 list-none", children: [
  /* @__PURE__ */ u(xi, { className: "flex max-w-max flex-1 list-none items-center justify-center gap-6 text-sm", children: e }),
  /* @__PURE__ */ u("div", { className: "absolute top-full flex justify-center", children: /* @__PURE__ */ u(Im, { className: "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" }) })
] }), yh = ({
  href: e,
  title: t,
  children: n
}) => n ? /* @__PURE__ */ G(Mr, { children: [
  /* @__PURE__ */ G(Mm, { className: "flex items-center gap-1 font-semibold", children: [
    t,
    " ",
    /* @__PURE__ */ u(Qt, { className: "size-4" })
  ] }),
  /* @__PURE__ */ u(Pm, { className: "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", children: /* @__PURE__ */ u(Nm, { children: /* @__PURE__ */ u(xi, { className: "flex flex-col gap-4 p-4", children: n }) }) })
] }) : /* @__PURE__ */ u(Mr, { children: /* @__PURE__ */ u(_m, { href: e, title: t }) }), _m = ({ href: e, title: t }) => {
  const { LinkElement: n } = en();
  return /* @__PURE__ */ u(Ci, { asChild: !0, children: /* @__PURE__ */ u(n, { className: "text-sm font-semibold", href: e, children: t }) });
}, xh = ({
  href: e,
  title: t,
  description: n
}) => {
  const { LinkElement: o } = en();
  return /* @__PURE__ */ u("li", { className: "w-[224px]", children: /* @__PURE__ */ u(Ci, { asChild: !0, children: /* @__PURE__ */ G(o, { href: e, className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ u("span", { className: "text-sm font-semibold", children: t }),
    /* @__PURE__ */ u("span", { className: "text-xs text-subtitle", children: n })
  ] }) }) });
}, Am = He("inline-block", {
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
}) => /* @__PURE__ */ u(t, { className: A(Am({ variant: e, align: n }), s), children: o.split(" ").map((i, l) => r.includes(l) ? /* @__PURE__ */ G("span", { className: "text-color-accent", children: [
  i,
  " "
] }, l) : i + " ") }), Ch = ({
  price: e,
  discount: t,
  tax: n,
  currencyCode: o,
  variant: r = "h2",
  originalPriceVariant: s = "h4"
}) => {
  const a = t ?? 0, i = n ?? 0, l = (d) => new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: o ?? "EUR"
  }).format(d);
  return /* @__PURE__ */ G("div", { className: "flex items-center gap-2", children: [
    a > 0 && /* @__PURE__ */ u(
      Ze,
      {
        variant: s,
        className: "text-subtitle line-through",
        text: l(e + a + i)
      }
    ),
    /* @__PURE__ */ u(Ze, { variant: r, text: l(e) })
  ] });
};
var Go = "Radio", [Tm, Si] = de(Go), [km, Om] = Tm(Go), Ri = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: o,
      checked: r = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: l,
      form: d,
      ...f
    } = e, [p, g] = c.useState(null), h = B(t, (b) => g(b)), v = c.useRef(!1), m = p ? d || !!p.closest("form") : !0;
    return /* @__PURE__ */ G(km, { scope: n, checked: r, disabled: a, children: [
      /* @__PURE__ */ u(
        T.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": Mi(r),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: h,
          onClick: E(e.onClick, (b) => {
            r || l == null || l(), m && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ u(
        Dm,
        {
          control: p,
          bubbles: !v.current,
          name: o,
          value: i,
          checked: r,
          required: s,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ri.displayName = Go;
var Ei = "RadioIndicator", Ni = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e, s = Om(Ei, n);
    return /* @__PURE__ */ u(re, { present: o || s.checked, children: /* @__PURE__ */ u(
      T.span,
      {
        "data-state": Mi(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
Ni.displayName = Ei;
var Dm = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = xt(n), i = Jt(t);
  return c.useEffect(() => {
    const l = s.current, d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (a !== n && p) {
      const g = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(g);
    }
  }, [a, n, o]), /* @__PURE__ */ u(
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
function Mi(e) {
  return e ? "checked" : "unchecked";
}
var Lm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], zo = "RadioGroup", [Fm, Sh] = de(zo, [
  fn,
  Si
]), Pi = fn(), Ii = Si(), [$m, Vm] = Fm(zo), _i = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: o,
      defaultValue: r,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: l,
      dir: d,
      loop: f = !0,
      onValueChange: p,
      ...g
    } = e, h = Pi(n), v = Rt(d), [m, b] = me({
      prop: s,
      defaultProp: r,
      onChange: p
    });
    return /* @__PURE__ */ u(
      $m,
      {
        scope: n,
        name: o,
        required: a,
        disabled: i,
        value: m,
        onValueChange: b,
        children: /* @__PURE__ */ u(
          na,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ u(
              T.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: v,
                ...g,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
_i.displayName = zo;
var Ai = "RadioGroupItem", Ti = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = Vm(Ai, n), a = s.disabled || o, i = Pi(n), l = Ii(n), d = c.useRef(null), f = B(t, d), p = s.value === r.value, g = c.useRef(!1);
    return c.useEffect(() => {
      const h = (m) => {
        Lm.includes(m.key) && (g.current = !0);
      }, v = () => g.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ u(
      oa,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ u(
          Ri,
          {
            disabled: a,
            required: s.required,
            checked: p,
            ...l,
            ...r,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(r.value),
            onKeyDown: E((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: E(r.onFocus, () => {
              var h;
              g.current && ((h = d.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
Ti.displayName = Ai;
var Bm = "RadioGroupIndicator", ki = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...o } = e, r = Ii(n);
    return /* @__PURE__ */ u(Ni, { ...r, ...o, ref: t });
  }
);
ki.displayName = Bm;
var Wm = _i, Gm = Ti, zm = ki;
const Rh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Wm,
  {
    className: A("grid gap-2", e),
    ...t,
    ref: n
  }
)), Eh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Gm,
  {
    ref: n,
    className: A(
      "aspect-square h-4 w-4 rounded-full border border-neutral-400 text-neutral-600 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neutral-600 data-[state=checked]:bg-neutral-600",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(zm, { className: "flex items-center justify-center", children: /* @__PURE__ */ u(Dr, { className: "h-1.5 w-1.5 fill-base-white text-base-white" }) })
  }
));
function Pr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Km = [" ", "Enter", "ArrowUp", "ArrowDown"], Um = [" ", "Enter"], It = "Select", [hn, vn, Hm] = St(It), [ct, Nh] = de(It, [
  Hm,
  un
]), bn = un(), [jm, We] = ct(It), [Ym, Xm] = ct(It), Oi = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: l,
    dir: d,
    name: f,
    autoComplete: p,
    disabled: g,
    required: h,
    form: v
  } = e, m = bn(t), [b, w] = c.useState(null), [y, x] = c.useState(null), [C, S] = c.useState(!1), N = Rt(d), [R = !1, P] = me({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [I, D] = me({
    prop: a,
    defaultProp: i,
    onChange: l
  }), V = c.useRef(null), _ = b ? v || !!b.closest("form") : !0, [W, F] = c.useState(/* @__PURE__ */ new Set()), H = Array.from(W).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ u(Ro, { ...m, children: /* @__PURE__ */ G(
    jm,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: S,
      contentId: ae(),
      value: I,
      onValueChange: D,
      open: R,
      onOpenChange: P,
      dir: N,
      triggerPointerDownPosRef: V,
      disabled: g,
      children: [
        /* @__PURE__ */ u(hn.Provider, { scope: t, children: /* @__PURE__ */ u(
          Ym,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((L) => {
              F((z) => new Set(z).add(L));
            }, []),
            onNativeOptionRemove: c.useCallback((L) => {
              F((z) => {
                const k = new Set(z);
                return k.delete(L), k;
              });
            }, []),
            children: n
          }
        ) }),
        _ ? /* @__PURE__ */ G(
          ac,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: I,
            onChange: (L) => D(L.target.value),
            disabled: g,
            form: v,
            children: [
              I === void 0 ? /* @__PURE__ */ u("option", { value: "" }) : null,
              Array.from(W)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Oi.displayName = It;
var Di = "SelectTrigger", Li = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = bn(n), a = We(Di, n), i = a.disabled || o, l = B(t, a.onTriggerChange), d = vn(n), f = c.useRef("touch"), [p, g, h] = ic((m) => {
      const b = d().filter((x) => !x.disabled), w = b.find((x) => x.value === a.value), y = cc(b, m, w);
      y !== void 0 && a.onValueChange(y.value);
    }), v = (m) => {
      i || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ u(Ys, { asChild: !0, ...s, children: /* @__PURE__ */ u(
      T.button,
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
        "data-placeholder": sc(a.value) ? "" : void 0,
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
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && g(m.key), !(b && m.key === " ") && Km.includes(m.key) && (v(), m.preventDefault());
        })
      }
    ) });
  }
);
Li.displayName = Di;
var Fi = "SelectValue", $i = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...i } = e, l = We(Fi, n), { onValueNodeHasChildrenChange: d } = l, f = s !== void 0, p = B(t, l.onValueNodeChange);
    return te(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ u(
      T.span,
      {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: sc(l.value) ? /* @__PURE__ */ u(Le, { children: a }) : s
      }
    );
  }
);
$i.displayName = Fi;
var qm = "SelectIcon", Vi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ u(T.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
Vi.displayName = qm;
var Zm = "SelectPortal", Bi = (e) => /* @__PURE__ */ u(nn, { asChild: !0, ...e });
Bi.displayName = Zm;
var Ue = "SelectContent", Wi = c.forwardRef(
  (e, t) => {
    const n = We(Ue, e.__scopeSelect), [o, r] = c.useState();
    if (te(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? Zt.createPortal(
        /* @__PURE__ */ u(Gi, { scope: e.__scopeSelect, children: /* @__PURE__ */ u(hn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ u(zi, { ...e, ref: t });
  }
);
Wi.displayName = Ue;
var he = 10, [Gi, Ge] = ct(Ue), Qm = "SelectContentImpl", zi = c.forwardRef(
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
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: b,
      //
      ...w
    } = e, y = We(Ue, n), [x, C] = c.useState(null), [S, N] = c.useState(null), R = B(t, (O) => C(O)), [P, I] = c.useState(null), [D, V] = c.useState(
      null
    ), _ = vn(n), [W, F] = c.useState(!1), H = c.useRef(!1);
    c.useEffect(() => {
      if (x) return so(x);
    }, [x]), ro();
    const L = c.useCallback(
      (O) => {
        const [Y, ...Q] = _().map((q) => q.ref.current), [j] = Q.slice(-1), X = document.activeElement;
        for (const q of O)
          if (q === X || (q == null || q.scrollIntoView({ block: "nearest" }), q === Y && S && (S.scrollTop = 0), q === j && S && (S.scrollTop = S.scrollHeight), q == null || q.focus(), document.activeElement !== X)) return;
      },
      [_, S]
    ), z = c.useCallback(
      () => L([P, x]),
      [L, P, x]
    );
    c.useEffect(() => {
      W && z();
    }, [W, z]);
    const { onOpenChange: k, triggerPointerDownPosRef: M } = y;
    c.useEffect(() => {
      if (x) {
        let O = { x: 0, y: 0 };
        const Y = (j) => {
          var X, q;
          O = {
            x: Math.abs(Math.round(j.pageX) - (((X = M.current) == null ? void 0 : X.x) ?? 0)),
            y: Math.abs(Math.round(j.pageY) - (((q = M.current) == null ? void 0 : q.y) ?? 0))
          };
        }, Q = (j) => {
          O.x <= 10 && O.y <= 10 ? j.preventDefault() : x.contains(j.target) || k(!1), document.removeEventListener("pointermove", Y), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [x, k, M]), c.useEffect(() => {
      const O = () => k(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [k]);
    const [K, U] = ic((O) => {
      const Y = _().filter((X) => !X.disabled), Q = Y.find((X) => X.ref.current === document.activeElement), j = cc(Y, O, Q);
      j && setTimeout(() => j.ref.current.focus());
    }), se = c.useCallback(
      (O, Y, Q) => {
        const j = !H.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && (I(O), j && (H.current = !0));
      },
      [y.value]
    ), Ne = c.useCallback(() => x == null ? void 0 : x.focus(), [x]), fe = c.useCallback(
      (O, Y, Q) => {
        const j = !H.current && !Q;
        (y.value !== void 0 && y.value === Y || j) && V(O);
      },
      [y.value]
    ), Me = o === "popper" ? Hn : Ki, ie = Me === Hn ? {
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: m,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ u(
      Gi,
      {
        scope: n,
        content: x,
        viewport: S,
        onViewportChange: N,
        itemRefCallback: se,
        selectedItem: P,
        onItemLeave: Ne,
        itemTextRefCallback: fe,
        focusSelectedItem: z,
        selectedItemText: D,
        position: o,
        isPositioned: W,
        searchRef: K,
        children: /* @__PURE__ */ u(rn, { as: Ie, allowPinchZoom: !0, children: /* @__PURE__ */ u(
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
            children: /* @__PURE__ */ u(
              Ct,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ u(
                  Me,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...ie,
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
zi.displayName = Qm;
var Jm = "SelectItemAlignedPosition", Ki = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = We(Ue, n), a = Ge(Ue, n), [i, l] = c.useState(null), [d, f] = c.useState(null), p = B(t, (R) => f(R)), g = vn(n), h = c.useRef(!1), v = c.useRef(!0), { viewport: m, selectedItem: b, selectedItemText: w, focusSelectedItem: y } = a, x = c.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && m && b && w) {
      const R = s.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), I = s.valueNode.getBoundingClientRect(), D = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const X = D.left - P.left, q = I.left - X, ce = R.left - q, ye = R.width + ce, lt = Math.max(ye, P.width), ut = window.innerWidth - he, dt = Pr(q, [
          he,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(he, ut - lt)
        ]);
        i.style.minWidth = ye + "px", i.style.left = dt + "px";
      } else {
        const X = P.right - D.right, q = window.innerWidth - I.right - X, ce = window.innerWidth - R.right - q, ye = R.width + ce, lt = Math.max(ye, P.width), ut = window.innerWidth - he, dt = Pr(q, [
          he,
          Math.max(he, ut - lt)
        ]);
        i.style.minWidth = ye + "px", i.style.right = dt + "px";
      }
      const V = g(), _ = window.innerHeight - he * 2, W = m.scrollHeight, F = window.getComputedStyle(d), H = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), z = parseInt(F.borderBottomWidth, 10), k = parseInt(F.paddingBottom, 10), M = H + L + W + k + z, K = Math.min(b.offsetHeight * 5, M), U = window.getComputedStyle(m), se = parseInt(U.paddingTop, 10), Ne = parseInt(U.paddingBottom, 10), fe = R.top + R.height / 2 - he, Me = _ - fe, ie = b.offsetHeight / 2, O = b.offsetTop + ie, Y = H + L + O, Q = M - Y;
      if (Y <= fe) {
        const X = V.length > 0 && b === V[V.length - 1].ref.current;
        i.style.bottom = "0px";
        const q = d.clientHeight - m.offsetTop - m.offsetHeight, ce = Math.max(
          Me,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? Ne : 0) + q + z
        ), ye = Y + ce;
        i.style.height = ye + "px";
      } else {
        const X = V.length > 0 && b === V[0].ref.current;
        i.style.top = "0px";
        const ce = Math.max(
          fe,
          H + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? se : 0) + ie
        ) + Q;
        i.style.height = ce + "px", m.scrollTop = Y - fe + m.offsetTop;
      }
      i.style.margin = `${he}px 0`, i.style.minHeight = K + "px", i.style.maxHeight = _ + "px", o == null || o(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    g,
    s.trigger,
    s.valueNode,
    i,
    d,
    m,
    b,
    w,
    s.dir,
    o
  ]);
  te(() => x(), [x]);
  const [C, S] = c.useState();
  te(() => {
    d && S(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = c.useCallback(
    (R) => {
      R && v.current === !0 && (x(), y == null || y(), v.current = !1);
    },
    [x, y]
  );
  return /* @__PURE__ */ u(
    tg,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ u(
            T.div,
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
Ki.displayName = Jm;
var eg = "SelectPopperPosition", Hn = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = he,
    ...s
  } = e, a = bn(n);
  return /* @__PURE__ */ u(
    Xs,
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
Hn.displayName = eg;
var [tg, Ko] = ct(Ue, {}), jn = "SelectViewport", Ui = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Ge(jn, n), a = Ko(jn, n), i = B(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ G(Le, { children: [
      /* @__PURE__ */ u(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ u(hn.Slot, { scope: n, children: /* @__PURE__ */ u(
        T.div,
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
          onScroll: E(r.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = a;
            if (g != null && g.current && p) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - he * 2, m = parseFloat(p.style.minHeight), b = parseFloat(p.style.height), w = Math.max(m, b);
                if (w < v) {
                  const y = w + h, x = Math.min(v, y), C = y - x;
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
Ui.displayName = jn;
var Hi = "SelectGroup", [ng, og] = ct(Hi), ji = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = ae();
    return /* @__PURE__ */ u(ng, { scope: n, id: r, children: /* @__PURE__ */ u(T.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
ji.displayName = Hi;
var Yi = "SelectLabel", Xi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = og(Yi, n);
    return /* @__PURE__ */ u(T.div, { id: r.id, ...o, ref: t });
  }
);
Xi.displayName = Yi;
var qt = "SelectItem", [rg, qi] = ct(qt), Zi = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, i = We(qt, n), l = Ge(qt, n), d = i.value === o, [f, p] = c.useState(s ?? ""), [g, h] = c.useState(!1), v = B(
      t,
      (y) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, y, o, r);
      }
    ), m = ae(), b = c.useRef("touch"), w = () => {
      r || (i.onValueChange(o), i.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u(
      rg,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: m,
        isSelected: d,
        onItemTextChange: c.useCallback((y) => {
          p((x) => x || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u(
          hn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: f,
            children: /* @__PURE__ */ u(
              T.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: E(a.onFocus, () => h(!0)),
                onBlur: E(a.onBlur, () => h(!1)),
                onClick: E(a.onClick, () => {
                  b.current !== "mouse" && w();
                }),
                onPointerUp: E(a.onPointerUp, () => {
                  b.current === "mouse" && w();
                }),
                onPointerDown: E(a.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: E(a.onPointerMove, (y) => {
                  var x;
                  b.current = y.pointerType, r ? (x = l.onItemLeave) == null || x.call(l) : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: E(a.onPointerLeave, (y) => {
                  var x;
                  y.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: E(a.onKeyDown, (y) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (Um.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Zi.displayName = qt;
var gt = "SelectItemText", Qi = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = We(gt, n), i = Ge(gt, n), l = qi(gt, n), d = Xm(gt, n), [f, p] = c.useState(null), g = B(
      t,
      (w) => p(w),
      l.onItemTextChange,
      (w) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, w, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, v = c.useMemo(
      () => /* @__PURE__ */ u("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = d;
    return te(() => (m(v), () => b(v)), [m, b, v]), /* @__PURE__ */ G(Le, { children: [
      /* @__PURE__ */ u(T.span, { id: l.textId, ...s, ref: g }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Zt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Qi.displayName = gt;
var Ji = "SelectItemIndicator", ec = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return qi(Ji, n).isSelected ? /* @__PURE__ */ u(T.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
ec.displayName = Ji;
var Yn = "SelectScrollUpButton", tc = c.forwardRef((e, t) => {
  const n = Ge(Yn, e.__scopeSelect), o = Ko(Yn, e.__scopeSelect), [r, s] = c.useState(!1), a = B(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        s(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u(
    oc,
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
tc.displayName = Yn;
var Xn = "SelectScrollDownButton", nc = c.forwardRef((e, t) => {
  const n = Ge(Xn, e.__scopeSelect), o = Ko(Xn, e.__scopeSelect), [r, s] = c.useState(!1), a = B(t, o.onScrollButtonChange);
  return te(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        s(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u(
    oc,
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
nc.displayName = Xn;
var oc = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Ge("SelectScrollButton", n), a = c.useRef(null), i = vn(n), l = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), te(() => {
    var f;
    const d = i().find((p) => p.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u(
    T.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: E(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: E(r.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: E(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), sg = "SelectSeparator", rc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ u(T.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
rc.displayName = sg;
var qn = "SelectArrow", ag = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = bn(n), s = We(qn, n), a = Ge(qn, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ u(qs, { ...r, ...o, ref: t }) : null;
  }
);
ag.displayName = qn;
function sc(e) {
  return e === "" || e === void 0;
}
var ac = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = c.useRef(null), s = B(t, r), a = xt(n);
    return c.useEffect(() => {
      const i = r.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== n && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(i, n), i.dispatchEvent(p);
      }
    }, [a, n]), /* @__PURE__ */ u(Do, { asChild: !0, children: /* @__PURE__ */ u("select", { ...o, ref: s, defaultValue: n }) });
  }
);
ac.displayName = "BubbleSelect";
function ic(e) {
  const t = ee(e), n = c.useRef(""), o = c.useRef(0), r = c.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function l(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }(i);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function cc(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = ig(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const l = a.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function ig(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var cg = Oi, lg = Li, ug = $i, dg = Vi, fg = Bi, pg = Wi, mg = Ui, gg = ji, hg = Xi, vg = Zi, bg = Qi, wg = ec, yg = tc, xg = nc, Cg = rc;
const Mh = cg, Ph = gg, Ih = ug, _h = ({ className: e, children: t, ...n }) => /* @__PURE__ */ G(
  lg,
  {
    className: A(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u(dg, { asChild: !0, children: /* @__PURE__ */ u(Qt, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
), Sg = ({ className: e, ...t }) => /* @__PURE__ */ u(
  yg,
  {
    className: A(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(Cc, { className: "h-4 w-4" })
  }
), Rg = ({ className: e, ...t }) => /* @__PURE__ */ u(
  xg,
  {
    className: A(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(Qt, { className: "h-4 w-4" })
  }
), Ah = ({ className: e, children: t, position: n = "popper", ...o }) => /* @__PURE__ */ u(fg, { children: /* @__PURE__ */ G(
  pg,
  {
    className: A(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-default bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ u(Sg, {}),
      /* @__PURE__ */ u(
        mg,
        {
          className: A(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u(Rg, {})
    ]
  }
) }), Th = ({ className: e, ...t }) => /* @__PURE__ */ u(
  hg,
  {
    className: A("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
), kh = ({ className: e, children: t, ...n }) => /* @__PURE__ */ G(
  vg,
  {
    className: A(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(wg, { children: /* @__PURE__ */ u(Zn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u(bg, { children: t })
    ]
  }
), Oh = ({ className: e, ...t }) => /* @__PURE__ */ u(
  Cg,
  {
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
), Dh = Rs, Lh = Es, Fh = sn, Eg = Ns, Ng = ({ className: e, ...t }) => /* @__PURE__ */ u(
  uo,
  {
    className: A(
      "bg-black/80 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
), Mg = He(
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
), $h = ({
  side: e = "right",
  className: t,
  children: n,
  ...o
}) => /* @__PURE__ */ G(Eg, { children: [
  /* @__PURE__ */ u(Ng, {}),
  /* @__PURE__ */ G(
    fo,
    {
      className: A(Mg({ side: e }), t),
      ...o,
      children: [
        /* @__PURE__ */ u(dl, { className: "absolute right-4 top-4", variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ G(sn, { children: [
          /* @__PURE__ */ u(Lr, { className: "h-4 w-4" }),
          /* @__PURE__ */ u("span", { className: "sr-only", children: "Close" })
        ] }) }),
        n
      ]
    }
  )
] }), Vh = ({ className: e, ...t }) => /* @__PURE__ */ u(
  "div",
  {
    className: A(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
), Bh = ({ className: e, ...t }) => /* @__PURE__ */ u(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
), Wh = ({ className: e, ...t }) => /* @__PURE__ */ u(
  po,
  {
    className: A("text-lg font-semibold text-foreground", e),
    ...t
  }
), Gh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  mo,
  {
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
);
function zh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: A("animate-pulse rounded-md bg-neutral-200", e),
      ...t
    }
  );
}
var Uo = "Switch", [Pg, Kh] = de(Uo), [Ig, _g] = Pg(Uo), lc = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: l = "on",
      onCheckedChange: d,
      form: f,
      ...p
    } = e, [g, h] = c.useState(null), v = B(t, (x) => h(x)), m = c.useRef(!1), b = g ? f || !!g.closest("form") : !0, [w = !1, y] = me({
      prop: r,
      defaultProp: s,
      onChange: d
    });
    return /* @__PURE__ */ G(Ig, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ u(
        T.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": fc(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...p,
          ref: v,
          onClick: E(e.onClick, (x) => {
            y((C) => !C), b && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ u(
        Ag,
        {
          control: g,
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
lc.displayName = Uo;
var uc = "SwitchThumb", dc = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = _g(uc, n);
    return /* @__PURE__ */ u(
      T.span,
      {
        "data-state": fc(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
dc.displayName = uc;
var Ag = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = xt(n), i = Jt(t);
  return c.useEffect(() => {
    const l = s.current, d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (a !== n && p) {
      const g = new Event("click", { bubbles: o });
      p.call(l, n), l.dispatchEvent(g);
    }
  }, [a, n, o]), /* @__PURE__ */ u(
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
function fc(e) {
  return e ? "checked" : "unchecked";
}
var Tg = lc, kg = dc;
const Og = He(
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
), Uh = ({ className: e, variant: t, ...n }) => /* @__PURE__ */ u(
  Tg,
  {
    className: A(Og({ variant: t }), e),
    ...n,
    children: /* @__PURE__ */ u(
      kg,
      {
        className: A(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
), Hh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ u(
  "table",
  {
    ref: n,
    className: A("w-full caption-bottom text-sm", e),
    ...t
  }
) })), jh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("thead", { ref: n, className: A("[&_tr]:border-b", e), ...t })), Yh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tbody",
  {
    ref: n,
    className: A("[&_tr:last-child]:border-0", e),
    ...t
  }
)), Xh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tfoot",
  {
    ref: n,
    className: A(
      "bg-muted/50 border-t border-default font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
)), qh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tr",
  {
    ref: n,
    className: A(
      "border-b border-default transition-colors hover:bg-subtle data-[state=selected]:bg-subtle",
      e
    ),
    ...t
  }
)), Zh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "th",
  {
    ref: n,
    className: A(
      "h-12 px-4 text-left align-middle font-bold text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
)), Qh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "td",
  {
    ref: n,
    className: A("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
)), Jh = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "caption",
  {
    ref: n,
    className: A("mt-4 text-sm text-subtitle", e),
    ...t
  }
)), ev = ({
  imageSrc: e,
  name: t,
  tagline: n,
  link: o,
  text: r,
  className: s
}) => {
  const { LinkElement: a, ImageElement: i } = en();
  return /* @__PURE__ */ G(
    "div",
    {
      className: A(
        "flex w-80 flex-col gap-4 rounded border border-default bg-surface p-6 shadow-md",
        s
      ),
      children: [
        /* @__PURE__ */ G("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ u("div", { className: "relative h-12 w-12 overflow-hidden rounded-full", children: /* @__PURE__ */ u(
            i,
            {
              src: e,
              width: 48,
              height: 48,
              alt: `${t}'s testimonial`,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ G("div", { className: "flex flex-col items-start gap-0", children: [
            /* @__PURE__ */ u(Ze, { element: "h4", variant: "h5", text: t }),
            n && o && /* @__PURE__ */ u(a, { href: o, children: /* @__PURE__ */ u(Ze, { element: "p", variant: "subtitle", text: n }) }),
            n && !o && /* @__PURE__ */ u(Ze, { element: "p", variant: "subtitle", text: n })
          ] })
        ] }),
        /* @__PURE__ */ u(Ze, { element: "p", variant: "body", text: r })
      ]
    }
  );
};
export {
  $g as Alert,
  dl as Button,
  Bg as Checkbox,
  Gg as ClickableLogo,
  Kg as Collapsible,
  Hg as CollapsibleContent,
  Ug as CollapsibleTrigger,
  Wg as DesignSystemProvider,
  Xg as Dialog,
  Zg as DialogClose,
  zu as DialogContent,
  ju as DialogDescription,
  Uu as DialogFooter,
  Ku as DialogHeader,
  Ms as DialogOverlay,
  Gu as DialogPortal,
  Hu as DialogTitle,
  qg as DialogTrigger,
  Qg as Divider,
  eh as DropdownMenu,
  uh as DropdownMenuCheckboxItem,
  ch as DropdownMenuContent,
  nh as DropdownMenuGroup,
  lh as DropdownMenuItem,
  fh as DropdownMenuLabel,
  oh as DropdownMenuPortal,
  sh as DropdownMenuRadioGroup,
  dh as DropdownMenuRadioItem,
  ph as DropdownMenuSeparator,
  mh as DropdownMenuShortcut,
  rh as DropdownMenuSub,
  ih as DropdownMenuSubContent,
  ah as DropdownMenuSubTrigger,
  th as DropdownMenuTrigger,
  gh as Form,
  sm as FormControl,
  am as FormDescription,
  hh as FormField,
  om as FormItem,
  rm as FormLabel,
  im as FormMessage,
  vh as Input,
  nm as Label,
  wh as NavMenu,
  yh as NavMenuItem,
  xh as NavSubMenuItem,
  Ch as PriceView,
  Rh as RadioGroup,
  Eh as RadioGroupItem,
  Mh as Select,
  Ah as SelectContent,
  Ph as SelectGroup,
  kh as SelectItem,
  Th as SelectLabel,
  Rg as SelectScrollDownButton,
  Sg as SelectScrollUpButton,
  Oh as SelectSeparator,
  _h as SelectTrigger,
  Ih as SelectValue,
  Dh as Sheet,
  Fh as SheetClose,
  $h as SheetContent,
  Gh as SheetDescription,
  Bh as SheetFooter,
  Vh as SheetHeader,
  Ng as SheetOverlay,
  Eg as SheetPortal,
  Wh as SheetTitle,
  Lh as SheetTrigger,
  zh as Skeleton,
  Uh as Switch,
  Hh as Table,
  Yh as TableBody,
  Jh as TableCaption,
  Qh as TableCell,
  Xh as TableFooter,
  Zh as TableHead,
  jh as TableHeader,
  qh as TableRow,
  ev as Testimonial,
  Ze as Typography,
  gn as useFormField
};
