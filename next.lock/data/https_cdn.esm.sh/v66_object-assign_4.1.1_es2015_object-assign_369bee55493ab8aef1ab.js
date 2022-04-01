/* esm.sh - esbuild bundle(object-assign@4.1.1) es2015 production */
var y = Object.create
var c = Object.defineProperty
var h = Object.getOwnPropertyDescriptor
var w = Object.getOwnPropertyNames,
  l = Object.getOwnPropertySymbols,
  P = Object.getPrototypeOf,
  i = Object.prototype.hasOwnProperty,
  E = Object.prototype.propertyIsEnumerable
var S = (r) => c(r, '__esModule', {value: !0})
var p = (r, e) => {
  var t = {}
  for (var n in r) i.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n])
  if (r != null && l)
    for (var n of l(r)) e.indexOf(n) < 0 && E.call(r, n) && (t[n] = r[n])
  return t
}
var $ = (r, e) => () => (e || r((e = {exports: {}}).exports, e), e.exports)
var N = (r, e, t, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let o of w(e))
        !i.call(r, o) &&
          (t || o !== 'default') &&
          c(r, o, {get: () => e[o], enumerable: !(n = h(e, o)) || n.enumerable})
    return r
  },
  b = (r, e) =>
    N(
      S(
        c(
          r != null ? y(P(r)) : {},
          'default',
          !e && r && r.__esModule
            ? {get: () => r.default, enumerable: !0}
            : {value: r, enumerable: !0}
        )
      ),
      r
    )
var u = $((z, O) => {
  'use strict'
  var m = Object.getOwnPropertySymbols,
    q = Object.prototype.hasOwnProperty,
    x = Object.prototype.propertyIsEnumerable
  function C(r) {
    if (r == null)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    return Object(r)
  }
  function I() {
    try {
      if (!Object.assign) return !1
      var r = new String('abc')
      if (((r[5] = 'de'), Object.getOwnPropertyNames(r)[0] === '5')) return !1
      for (var e = {}, t = 0; t < 10; t++) e['_' + String.fromCharCode(t)] = t
      var n = Object.getOwnPropertyNames(e).map(function (a) {
        return e[a]
      })
      if (n.join('') !== '0123456789') return !1
      var o = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (a) {
          o[a] = a
        }),
        Object.keys(Object.assign({}, o)).join('') === 'abcdefghijklmnopqrst'
      )
    } catch (a) {
      return !1
    }
  }
  O.exports = I()
    ? Object.assign
    : function (r, e) {
        for (var t, n = C(r), o, a = 1; a < arguments.length; a++) {
          t = Object(arguments[a])
          for (var s in t) q.call(t, s) && (n[s] = t[s])
          if (m) {
            o = m(t)
            for (var f = 0; f < o.length; f++)
              x.call(t, o[f]) && (n[o[f]] = t[o[f]])
          }
        }
        return n
      }
})
var v = b(u()),
  k = b(u()),
  j = k,
  {default: T} = j,
  U = p(j, ['default']),
  g,
  d,
  A = (d = (g = v.default) != null ? g : T) != null ? d : U
export {A as default}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
