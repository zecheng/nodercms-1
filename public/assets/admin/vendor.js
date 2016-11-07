!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length, n = ot.type(t);
        return "function" === n || ot.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (ot.isFunction(e))return ot.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType)return ot.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (gt.test(e))return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function (t) {
            return Q.call(e, t) > -1 !== n
        })
    }

    function i(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ot.each(t.match(bt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        X.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a), ot.ready()
    }

    function s() {
        this.expando = ot.expando + s.uid++
    }

    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)if (r = "data-" + e.replace(Tt, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Dt.test(n) ? ot.parseJSON(n) : n
            } catch (i) {
            }
            Ct.set(t, e, n)
        } else n = void 0;
        return n
    }

    function l(t, e, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return ot.css(t, e, "")
        }, u = s(), l = n && n[3] || (ot.cssNumber[e] ? "" : "px"), c = (ot.cssNumber[e] || "px" !== l && +u) && Et.exec(ot.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, ot.style(t, e, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function c(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }

    function f(t, e) {
        for (var n = 0, r = t.length; r > n; n++)St.set(t[n], "globalEval", !e || St.get(e[n], "globalEval"))
    }

    function h(t, e, n, r, i) {
        for (var o, a, s, u, l, h, d = e.createDocumentFragment(), p = [], g = 0, m = t.length; m > g; g++)if (o = t[g], o || 0 === o)if ("object" === ot.type(o))ot.merge(p, o.nodeType ? [o] : o); else if (Nt.test(o)) {
            for (a = a || d.appendChild(e.createElement("div")), s = (jt.exec(o) || ["", ""])[1].toLowerCase(), u = Rt[s] || Rt._default, a.innerHTML = u[1] + ot.htmlPrefilter(o) + u[2], h = u[0]; h--;)a = a.lastChild;
            ot.merge(p, a.childNodes), a = d.firstChild, a.textContent = ""
        } else p.push(e.createTextNode(o));
        for (d.textContent = "", g = 0; o = p[g++];)if (r && ot.inArray(o, r) > -1)i && i.push(o); else if (l = ot.contains(o.ownerDocument, o), a = c(d.appendChild(o), "script"), l && f(a), n)for (h = 0; o = a[h++];)It.test(o.type || "") && n.push(o);
        return d
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function g() {
        try {
            return X.activeElement
        } catch (t) {
        }
    }

    function m(t, e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in e)m(t, s, n, r, e[s], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)i = p; else if (!i)return t;
        return 1 === o && (a = i, i = function (t) {
            return ot().off(t), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = ot.guid++)), t.each(function () {
            ot.event.add(this, e, i, r, n)
        })
    }

    function v(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function $(t) {
        var e = Wt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        var n, r, i, o, a, s, u, l;
        if (1 === e.nodeType) {
            if (St.hasData(t) && (o = St.access(t), a = St.set(e, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)for (n = 0, r = l[i].length; r > n; n++)ot.event.add(e, i, l[i][n])
            }
            Ct.hasData(t) && (s = Ct.access(t), u = ot.extend({}, s), Ct.set(e, u))
        }
    }

    function b(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Pt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function x(t, e, n, r) {
        e = K.apply([], e);
        var i, o, a, s, u, l, f = 0, d = t.length, p = d - 1, g = e[0], m = ot.isFunction(g);
        if (m || d > 1 && "string" == typeof g && !rt.checkClone && Vt.test(g))return t.each(function (i) {
            var o = t.eq(i);
            m && (e[0] = g.call(this, i, o.html())), x(o, e, n, r)
        });
        if (d && (i = h(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (a = ot.map(c(i, "script"), y), s = a.length; d > f; f++)u = i, f !== p && (u = ot.clone(u, !0, !0), s && ot.merge(a, c(u, "script"))), n.call(t[f], u, f);
            if (s)for (l = a[a.length - 1].ownerDocument, ot.map(a, $), f = 0; s > f; f++)u = a[f], It.test(u.type || "") && !St.access(u, "globalEval") && ot.contains(l, u) && (u.src ? ot._evalUrl && ot._evalUrl(u.src) : ot.globalEval(u.textContent.replace(Bt, "")))
        }
        return t
    }

    function _(t, e, n) {
        for (var r, i = e ? ot.filter(e, t) : t, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || ot.cleanData(c(r)), r.parentNode && (n && ot.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
        return t
    }

    function k(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body), r = ot.css(n[0], "display");
        return n.detach(), r
    }

    function S(t) {
        var e = X, n = Yt[t];
        return n || (n = k(t, e), "none" !== n && n || (zt = (zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = zt[0].contentDocument, e.write(), e.close(), n = k(t, e), zt.detach()), Yt[t] = n), n
    }

    function C(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || Zt(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), n && !rt.pixelMarginRight() && Xt.test(a) && Gt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a
    }

    function D(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t) {
        if (t in re)return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)if (t = ne[n] + e, t in re)return t
    }

    function A(t, e, n) {
        var r = Et.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function E(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ot.css(t, n + Mt[o], !0, i)), r ? ("content" === n && (a -= ot.css(t, "padding" + Mt[o], !0, i)), "margin" !== n && (a -= ot.css(t, "border" + Mt[o] + "Width", !0, i))) : (a += ot.css(t, "padding" + Mt[o], !0, i), "padding" !== n && (a += ot.css(t, "border" + Mt[o] + "Width", !0, i)));
        return a
    }

    function M(e, n, r) {
        var i = !0, o = "width" === n ? e.offsetWidth : e.offsetHeight, a = Zt(e), s = "border-box" === ot.css(e, "boxSizing", !1, a);
        if (X.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = C(e, n, a), (0 > o || null == o) && (o = e.style[n]), Xt.test(o))return o;
            i = s && (rt.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + E(e, n, r || (s ? "border" : "content"), i, a) + "px"
    }

    function O(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++)r = t[a], r.style && (o[a] = St.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ot(r) && (o[a] = St.access(r, "olddisplay", S(r.nodeName)))) : (i = Ot(r), "none" === n && i || St.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (a = 0; s > a; a++)r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function P(t, e, n, r, i) {
        return new P.prototype.init(t, e, n, r, i)
    }

    function j() {
        return t.setTimeout(function () {
            ie = void 0
        }), ie = ot.now()
    }

    function I(t, e) {
        var n, r = 0, i = {height: t};
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)n = Mt[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function R(t, e, n) {
        for (var r, i = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, e, t))return r
    }

    function N(t, e, n) {
        var r, i, o, a, s, u, l, c, f = this, h = {}, d = t.style, p = t.nodeType && Ot(t), g = St.get(t, "fxshow");
        n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, f.always(function () {
            f.always(function () {
                s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ot.css(t, "display"), c = "none" === l ? St.get(t, "olddisplay") || S(t.nodeName) : l, "inline" === c && "none" === ot.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in e)if (i = e[r], ae.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r])continue;
                p = !0
            }
            h[r] = g && g[r] || ot.style(t, r)
        } else l = void 0;
        if (ot.isEmptyObject(h))"inline" === ("none" === l ? S(t.nodeName) : l) && (d.display = l); else {
            g ? "hidden" in g && (p = g.hidden) : g = St.access(t, "fxshow", {}), o && (g.hidden = !p), p ? ot(t).show() : f.done(function () {
                ot(t).hide()
            }), f.done(function () {
                var e;
                St.remove(t, "fxshow");
                for (e in h)ot.style(t, e, h[e])
            });
            for (r in h)a = R(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function U(t, e) {
        var n, r, i, o, a;
        for (n in t)if (r = ot.camelCase(n), i = e[r], o = t[n], ot.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = ot.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete t[r];
            for (n in o)n in t || (t[n] = o[n], e[n] = i)
        } else e[r] = i
    }

    function F(t, e, n) {
        var r, i, o = 0, a = F.prefilters.length, s = ot.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var e = ie || j(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
            return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
        }, l = s.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {specialEasing: {}, easing: ot.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: ie || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var r = ot.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (e) {
                var n = 0, r = e ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]), this
            }
        }), c = l.props;
        for (U(c, l.opts.specialEasing); a > o; o++)if (r = F.prefilters[o].call(l, t, c, l.opts))return ot.isFunction(r.stop) && (ot._queueHooks(l.elem, l.opts.queue).stop = ot.proxy(r.stop, r)), r;
        return ot.map(c, R, l), ot.isFunction(l.opts.start) && l.opts.start.call(t, l), ot.fx.timer(ot.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function H(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function L(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0, o = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function q(t, e, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ot.each(t[s] || [], function (t, s) {
                var l = s(e, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = t === Ce;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function V(t, e) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && ot.extend(!0, t, r), t
    }

    function W(t, e, n) {
        for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)for (i in s)if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n)o = u[0]; else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function B(t, e, n, r) {
        var i, o, a, s, u, l = {}, c = t.dataTypes.slice();
        if (c[1])for (a in t.converters)l[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && t["throws"])e = a(e); else try {
                e = a(e)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function z(t, e, n, r) {
        var i;
        if (ot.isArray(e))ot.each(e, function (e, i) {
            n || Ee.test(t) ? r(t, i) : z(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
        }); else if (n || "object" !== ot.type(e))r(t, e); else for (i in e)z(t + "[" + i + "]", e[i], n, r)
    }

    function Y(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var G = [], X = t.document, Z = G.slice, K = G.concat, J = G.push, Q = G.indexOf, tt = {}, et = tt.toString, nt = tt.hasOwnProperty, rt = {}, it = "2.2.3", ot = function (t, e) {
        return new ot.fn.init(t, e)
    }, at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, st = /^-ms-/, ut = /-([\da-z])/gi, lt = function (t, e) {
        return e.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: it, constructor: ot, selector: "", length: 0, toArray: function () {
            return Z.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Z.call(this)
        }, pushStack: function (t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t) {
            return ot.each(this, t)
        }, map: function (t) {
            return this.pushStack(ot.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(Z.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: J, sort: G.sort, splice: G.splice
    }, ot.extend = ot.fn.extend = function () {
        var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (t = arguments[s]))for (e in t)n = a[e], r = t[e], a !== r && (l && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, a[e] = ot.extend(l, o, r)) : void 0 !== r && (a[e] = r));
        return a
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === ot.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (t) {
            var e;
            if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t))return !1;
            if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf"))return !1;
            for (e in t);
            return void 0 === e || nt.call(t, e)
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            var e, n = eval;
            t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = X.createElement("script"), e.text = t, X.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        }, camelCase: function (t) {
            return t.replace(st, "ms-").replace(ut, lt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var r, i = 0;
            if (n(t))for (r = t.length; r > i && e.call(t[i], i, t[i]) !== !1; i++); else for (i in t)if (e.call(t[i], i, t[i]) === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(at, "")
        }, makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ot.merge(r, "string" == typeof t ? [t] : t) : J.call(r, t)), r
        }, inArray: function (t, e, n) {
            return null == e ? -1 : Q.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++)t[i++] = e[r];
            return t.length = i, t
        }, grep: function (t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++)r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        }, map: function (t, e, r) {
            var i, o, a = 0, s = [];
            if (n(t))for (i = t.length; i > a; a++)o = e(t[a], a, r), null != o && s.push(o); else for (a in t)o = e(t[a], a, r), null != o && s.push(o);
            return K.apply([], s)
        }, guid: 1, proxy: function (t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (r = Z.call(arguments, 2), i = function () {
                return t.apply(e || this, r.concat(Z.call(arguments)))
            }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
        }, now: Date.now, support: rt
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = G[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function (t) {
        function e(t, e, n, r) {
            var i, o, a, s, u, l, f, d, p = e && e.ownerDocument, g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g)return n;
            if (!r && ((e ? e.ownerDocument || e : H) !== O && M(e), e = e || O, j)) {
                if (11 !== g && (l = vt.exec(t)))if (i = l[1]) {
                    if (9 === g) {
                        if (!(a = e.getElementById(i)))return n;
                        if (a.id === i)return n.push(a), n
                    } else if (p && (a = p.getElementById(i)) && U(e, a) && a.id === i)return n.push(a), n
                } else {
                    if (l[2])return J.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = l[3]) && b.getElementsByClassName && e.getElementsByClassName)return J.apply(n, e.getElementsByClassName(i)), n
                }
                if (b.qsa && !B[t + " "] && (!I || !I.test(t))) {
                    if (1 !== g)p = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace($t, "\\$&") : e.setAttribute("id", s = F), f = S(t), o = f.length, u = ht.test(s) ? "#" + s : "[id='" + s + "']"; o--;)f[o] = u + " " + h(f[o]);
                        d = f.join(","), p = yt.test(t) && c(e.parentNode) || e
                    }
                    if (d)try {
                        return J.apply(n, p.querySelectorAll(d)), n
                    } catch (m) {
                    } finally {
                        s === F && e.removeAttribute("id")
                    }
                }
            }
            return D(t.replace(st, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = r
            }

            var e = [];
            return t
        }

        function r(t) {
            return t[F] = !0, t
        }

        function i(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--;)x.attrHandle[n[r]] = e
        }

        function a(t, e) {
            var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === e)return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return r(function (e) {
                return e = +e, r(function (n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function f() {
        }

        function h(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++)r += t[e].value;
            return r
        }

        function d(t, e, n) {
            var r = e.dir, i = n && "parentNode" === r, o = q++;
            return e.first ? function (e, n, o) {
                for (; e = e[r];)if (1 === e.nodeType || i)return t(e, n, o)
            } : function (e, n, a) {
                var s, u, l, c = [L, o];
                if (a) {
                    for (; e = e[r];)if ((1 === e.nodeType || i) && t(e, n, a))return !0
                } else for (; e = e[r];)if (1 === e.nodeType || i) {
                    if (l = e[F] || (e[F] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (s = u[r]) && s[0] === L && s[1] === o)return c[2] = s[2];
                    if (u[r] = c, c[2] = t(e, n, a))return !0
                }
            }
        }

        function p(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--;)if (!t[i](e, n, r))return !1;
                return !0
            } : t[0]
        }

        function g(t, n, r) {
            for (var i = 0, o = n.length; o > i; i++)e(t, n[i], r);
            return r
        }

        function m(t, e, n, r, i) {
            for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), l && e.push(s));
            return a
        }

        function v(t, e, n, i, o, a) {
            return i && !i[F] && (i = v(i)), o && !o[F] && (o = v(o, a)), r(function (r, a, s, u) {
                var l, c, f, h = [], d = [], p = a.length, v = r || g(e || "*", s.nodeType ? [s] : s, []), y = !t || !r && e ? v : m(v, h, t, s, u), $ = n ? o || (r ? t : p || i) ? [] : a : y;
                if (n && n(y, $, s, u), i)for (l = m($, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && ($[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = $.length; c--;)(f = $[c]) && l.push(y[c] = f);
                            o(null, $ = [], l, u)
                        }
                        for (c = $.length; c--;)(f = $[c]) && (l = o ? tt(r, f) : h[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else $ = m($ === a ? $.splice(p, $.length) : $), o ? o(null, a, $, u) : J.apply(a, $)
            })
        }

        function y(t) {
            for (var e, n, r, i = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = d(function (t) {
                return t === e
            }, a, !0), l = d(function (t) {
                return tt(e, t) > -1
            }, a, !0), c = [function (t, n, r) {
                var i = !o && (r || n !== T) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                return e = null, i
            }]; i > s; s++)if (n = x.relative[t[s].type])c = [d(p(c), n)]; else {
                if (n = x.filter[t[s].type].apply(null, t[s].matches), n[F]) {
                    for (r = ++s; i > r && !x.relative[t[r].type]; r++);
                    return v(s > 1 && p(c), s > 1 && h(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(st, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && h(t))
                }
                c.push(n)
            }
            return p(c)
        }

        function $(t, n) {
            var i = n.length > 0, o = t.length > 0, a = function (r, a, s, u, l) {
                var c, f, h, d = 0, p = "0", g = r && [], v = [], y = T, $ = r || o && x.find.TAG("*", l), w = L += null == y ? 1 : Math.random() || .1, b = $.length;
                for (l && (T = a === O || a || l); p !== b && null != (c = $[p]); p++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === O || (M(c), s = !j); h = t[f++];)if (h(c, a || O, s)) {
                            u.push(c);
                            break
                        }
                        l && (L = w)
                    }
                    i && ((c = !h && c) && d--, r && g.push(c))
                }
                if (d += p, i && p !== d) {
                    for (f = 0; h = n[f++];)h(g, v, a, s);
                    if (r) {
                        if (d > 0)for (; p--;)g[p] || v[p] || (v[p] = Z.call(u));
                        v = m(v)
                    }
                    J.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && e.uniqueSort(u)
                }
                return l && (L = w, T = y), g
            };
            return i ? r(a) : a
        }

        var w, b, x, _, k, S, C, D, T, A, E, M, O, P, j, I, R, N, U, F = "sizzle" + 1 * new Date, H = t.document, L = 0, q = 0, V = n(), W = n(), B = n(), z = function (t, e) {
            return t === e && (E = !0), 0
        }, Y = 1 << 31, G = {}.hasOwnProperty, X = [], Z = X.pop, K = X.push, J = X.push, Q = X.slice, tt = function (t, e) {
            for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", at = new RegExp(nt + "+", "g"), st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ut = new RegExp("^" + nt + "*," + nt + "*"), lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ft = new RegExp(ot), ht = new RegExp("^" + rt + "$"), dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, pt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, $t = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), bt = function (t, e, n) {
            var r = "0x" + e - 65536;
            return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, xt = function () {
            M()
        };
        try {
            J.apply(X = Q.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
        } catch (_t) {
            J = {
                apply: X.length ? function (t, e) {
                    K.apply(t, Q.call(e))
                } : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, k = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, M = e.setDocument = function (t) {
            var e, n, r = t ? t.ownerDocument || t : H;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, P = O.documentElement, j = !k(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), b.attributes = i(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = i(function (t) {
                return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = mt.test(O.getElementsByClassName), b.getById = i(function (t) {
                return P.appendChild(t).id = F, !O.getElementsByName || !O.getElementsByName(F).length
            }), b.getById ? (x.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (t) {
                var e = t.replace(wt, bt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function (t) {
                var e = t.replace(wt, bt);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return "undefined" != typeof e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
                }, R = [], I = [], (b.qsa = mt.test(O.querySelectorAll)) && (i(function (t) {
                P.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || I.push(".#.+[+~]")
            }), i(function (t) {
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (b.matchesSelector = mt.test(N = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function (t) {
                b.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), R.push("!=", ot)
            }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), e = mt.test(P.compareDocumentPosition), U = e || mt.test(P.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, z = e ? function (t, e) {
                if (t === e)return E = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === H && U(H, t) ? -1 : e === O || e.ownerDocument === H && U(H, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return E = !0, 0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], u = [e];
                if (!i || !o)return t === O ? -1 : e === O ? 1 : i ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (i === o)return a(t, e);
                for (n = t; n = n.parentNode;)s.unshift(n);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (; s[r] === u[r];)r++;
                return r ? a(s[r], u[r]) : s[r] === H ? -1 : u[r] === H ? 1 : 0
            }, O) : O
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== O && M(t), n = n.replace(ct, "='$1']"), b.matchesSelector && j && !B[n + " "] && (!R || !R.test(n)) && (!I || !I.test(n)))try {
                var r = N.call(t, n);
                if (r || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)return r
            } catch (i) {
            }
            return e(n, O, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== O && M(t), U(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== O && M(t);
            var n = x.attrHandle[e.toLowerCase()], r = n && G.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== r ? r : b.attributes || !j ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], r = 0, i = 0;
            if (E = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(z), E) {
                for (; e = t[i++];)e === t[i] && (r = n.push(i));
                for (; r--;)t.splice(n[r], 1)
            }
            return A = null, t
        }, _ = e.getText = function (t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)n += _(t)
                } else if (3 === i || 4 === i)return t.nodeValue
            } else for (; e = t[r++];)n += _(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(wt, bt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = V[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && V(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, n, r) {
                    return function (i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, u) {
                        var l, c, f, h, d, p, g = o !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !u && !s, $ = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = e; h = h[g];)if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (h = m, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), l = c[t] || [], d = l[0] === L && l[1], $ = d && l[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || ($ = d = 0) || p.pop();)if (1 === h.nodeType && ++$ && h === e) {
                                    c[t] = [L, d, $];
                                    break
                                }
                            } else if (y && (h = e, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), l = c[t] || [], d = l[0] === L && l[1], $ = d), $ === !1)for (; (h = ++d && h && h[g] || ($ = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++$ || (y && (f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[t] = [L, $]), h !== e)););
                            return $ -= i, $ === r || $ % r === 0 && $ / r >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var i, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                        for (var r, i = o(t, n), a = i.length; a--;)r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                    }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [], n = [], i = C(t.replace(st, "$1"));
                    return i[F] ? r(function (t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }), has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: r(function (t) {
                    return t = t.replace(wt, bt), function (e) {
                        return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                    }
                }), lang: r(function (t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(), function (e) {
                        var n;
                        do if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === P
                }, focus: function (t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !x.pseudos.empty(t)
                }, header: function (t) {
                    return gt.test(t.nodeName)
                }, input: function (t) {
                    return pt.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (t, e) {
                    return [e - 1]
                }),
                eq: l(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }), even: l(function (t, e) {
                    for (var n = 0; e > n; n += 2)t.push(n);
                    return t
                }), odd: l(function (t, e) {
                    for (var n = 1; e > n; n += 2)t.push(n);
                    return t
                }), lt: l(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0;)t.push(r);
                    return t
                }), gt: l(function (t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e;)t.push(r);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[w] = s(w);
        for (w in{submit: !0, reset: !0})x.pseudos[w] = u(w);
        return f.prototype = x.filters = x.pseudos, x.setFilters = new f, S = e.tokenize = function (t, n) {
            var r, i, o, a, s, u, l, c = W[t + " "];
            if (c)return n ? 0 : c.slice(0);
            for (s = t, u = [], l = x.preFilter; s;) {
                (!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = lt.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(st, " ")
                }), s = s.slice(r.length));
                for (a in x.filter)!(i = dt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r)break
            }
            return n ? s.length : s ? e.error(t) : W(t, u).slice(0)
        }, C = e.compile = function (t, e) {
            var n, r = [], i = [], o = B[t + " "];
            if (!o) {
                for (e || (e = S(t)), n = e.length; n--;)o = y(e[n]), o[F] ? r.push(o) : i.push(o);
                o = B(t, $(i, r)), o.selector = t
            }
            return o
        }, D = e.select = function (t, e, n, r) {
            var i, o, a, s, u, l = "function" == typeof t && t, f = !r && S(t = l.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && j && x.relative[o[1].type]) {
                    if (e = (x.find.ID(a.matches[0].replace(wt, bt), e) || [])[0], !e)return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)if ((u = x.find[s]) && (r = u(a.matches[0].replace(wt, bt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(i, 1), t = r.length && h(o), !t)return J.apply(n, r), n;
                    break
                }
            }
            return (l || C(t, f))(r, e, !j, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, b.sortStable = F.split("").sort(z).join("") === F, b.detectDuplicates = !!E, M(), b.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), i(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), i(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, n) {
            var r;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var ft = function (t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
            if (i && ot(t).is(n))break;
            r.push(t)
        }
        return r
    }, ht = function (t, e) {
        for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
        return n
    }, dt = ot.expr.match.needsContext, pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, gt = /^.[^:#\[\.,]*$/;
    ot.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? ot.find.matchesSelector(r, t) ? [r] : [] : ot.find.matches(t, ot.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function (t) {
            var e, n = this.length, r = [], i = this;
            if ("string" != typeof t)return this.pushStack(ot(t).filter(function () {
                for (e = 0; n > e; e++)if (ot.contains(i[e], this))return !0
            }));
            for (e = 0; n > e; e++)ot.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? ot.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        }, filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        }, is: function (t) {
            return !!r(this, "string" == typeof t && dt.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = ot.fn.init = function (t, e, n) {
        var r, i;
        if (!t)return this;
        if (n = n || mt, "string" == typeof t) {
            if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !r || !r[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : X, !0)), pt.test(r[1]) && ot.isPlainObject(e))for (r in e)ot.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return i = X.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = X, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
    };
    yt.prototype = ot.fn, mt = ot(X);
    var $t = /^(?:parents|prev(?:Until|All))/, wt = {children: !0, contents: !0, next: !0, prev: !0};
    ot.fn.extend({
        has: function (t) {
            var e = ot(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)if (ot.contains(this, e[t]))return !0
            })
        }, closest: function (t, e) {
            for (var n, r = 0, i = this.length, o = [], a = dt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? Q.call(ot(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return ft(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return ft(t, "parentNode", n)
        }, next: function (t) {
            return i(t, "nextSibling")
        }, prev: function (t) {
            return i(t, "previousSibling")
        }, nextAll: function (t) {
            return ft(t, "nextSibling")
        }, prevAll: function (t) {
            return ft(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return ft(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return ft(t, "previousSibling", n)
        }, siblings: function (t) {
            return ht((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return ht(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function (t, e) {
        ot.fn[t] = function (n, r) {
            var i = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (wt[t] || ot.uniqueSort(i), $t.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var bt = /\S+/g;
    ot.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, r, i, a = [], s = [], u = -1, l = function () {
            for (i = t.once, r = e = !0; s.length; u = -1)for (n = s.shift(); ++u < a.length;)a[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = a.length, n = !1);
            t.memory || (n = !1), e = !1, i && (a = n ? [] : "")
        }, c = {
            add: function () {
                return a && (n && !e && (u = a.length - 1, s.push(n)), function r(e) {
                    ot.each(e, function (e, n) {
                        ot.isFunction(n) ? t.unique && c.has(n) || a.push(n) : n && n.length && "string" !== ot.type(n) && r(n)
                    })
                }(arguments), n && !e && l()), this
            }, remove: function () {
                return ot.each(arguments, function (t, e) {
                    for (var n; (n = ot.inArray(e, a, n)) > -1;)a.splice(n, 1), u >= n && u--
                }), this
            }, has: function (t) {
                return t ? ot.inArray(t, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return i = s = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return i = s = [], n || (a = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (t, n) {
                return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, ot.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return ot.Deferred(function (n) {
                        ot.each(e, function (e, o) {
                            var a = ot.isFunction(t[e]) && t[e];
                            i[o[1]](function () {
                                var t = a && a.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? ot.extend(t, r) : r
                }
            }, i = {};
            return r.pipe = r.then, ot.each(e, function (t, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        }, when: function (t) {
            var e, n, r, i = 0, o = Z.call(arguments), a = o.length, s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0, u = 1 === s ? t : ot.Deferred(), l = function (t, n, r) {
                return function (i) {
                    n[t] = this, r[t] = arguments.length > 1 ? Z.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var xt;
    ot.fn.ready = function (t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? ot.readyWait++ : ot.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(X, [ot]), ot.fn.triggerHandler && (ot(X).triggerHandler("ready"), ot(X).off("ready"))))
        }
    }), ot.ready.promise = function (e) {
        return xt || (xt = ot.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? t.setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a))), xt.promise(e)
    }, ot.ready.promise();
    var _t = function (t, e, n, r, i, o, a) {
        var s = 0, u = t.length, l = null == n;
        if ("object" === ot.type(n)) {
            i = !0;
            for (s in n)_t(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function (t, e, n) {
                return l.call(ot(t), n)
            })), e))for (; u > s; s++)e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    }, kt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    s.uid = 1, s.prototype = {
        register: function (t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        }, cache: function (t) {
            if (!kt(t))return {};
            var e = t[this.expando];
            return e || (e = {}, kt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e)i[e] = n; else for (r in e)i[r] = e[r];
            return i
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        }, access: function (t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, r, i, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e)this.register(t); else {
                    ot.isArray(e) ? r = e.concat(e.map(ot.camelCase)) : (i = ot.camelCase(e), e in o ? r = [e, i] : (r = i, r = r in o ? [r] : r.match(bt) || [])), n = r.length;
                    for (; n--;)delete o[r[n]]
                }
                (void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var St = new s, Ct = new s, Dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Tt = /[A-Z]/g;
    ot.extend({
        hasData: function (t) {
            return Ct.hasData(t) || St.hasData(t)
        }, data: function (t, e, n) {
            return Ct.access(t, e, n)
        }, removeData: function (t, e) {
            Ct.remove(t, e)
        }, _data: function (t, e, n) {
            return St.access(t, e, n)
        }, _removeData: function (t, e) {
            St.remove(t, e)
        }
    }), ot.fn.extend({
        data: function (t, e) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = Ct.get(o), 1 === o.nodeType && !St.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), u(o, r, i[r])));
                    St.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function () {
                Ct.set(this, t)
            }) : _t(this, function (e) {
                var n, r;
                if (o && void 0 === e) {
                    if (n = Ct.get(o, t) || Ct.get(o, t.replace(Tt, "-$&").toLowerCase()), void 0 !== n)return n;
                    if (r = ot.camelCase(t), n = Ct.get(o, r), void 0 !== n)return n;
                    if (n = u(o, r, void 0), void 0 !== n)return n
                } else r = ot.camelCase(t), this.each(function () {
                    var n = Ct.get(this, r);
                    Ct.set(this, r, e), t.indexOf("-") > -1 && void 0 !== n && Ct.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Ct.remove(this, t)
            })
        }
    }), ot.extend({
        queue: function (t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = St.get(t, e), n && (!r || ot.isArray(n) ? r = St.access(t, e, ot.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = ot.queue(t, e), r = n.length, i = n.shift(), o = ot._queueHooks(t, e), a = function () {
                ot.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return St.get(t, n) || St.access(t, n, {
                    empty: ot.Callbacks("once memory").add(function () {
                        St.remove(t, [e + "queue", n])
                    })
                })
        }
    }), ot.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                ot.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, r = 1, i = ot.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = St.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(e)
        }
    });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Et = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"), Mt = ["Top", "Right", "Bottom", "Left"], Ot = function (t, e) {
        return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    }, Pt = /^(?:checkbox|radio)$/i, jt = /<([\w:-]+)/, It = /^$|\/(?:java|ecma)script/i, Rt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td;
    var Nt = /<|&#?\w+;/;
    !function () {
        var t = X.createDocumentFragment(), e = t.appendChild(X.createElement("div")), n = X.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), rt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ut = /^key/, Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ht = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, h, d, p, g, m = St.get(t);
            if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ot.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(bt) || [""], l = e.length; l--;)s = Ht.exec(e[l]) || [], d = g = s[1], p = (s[2] || "").split(".").sort(), d && (f = ot.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ot.event.special[d] || {}, c = ot.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && ot.expr.match.needsContext.test(i),
                namespace: p.join(".")
            }, o), (h = u[d]) || (h = u[d] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, p, a) !== !1 || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), ot.event.global[d] = !0)
        },
        remove: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, h, d, p, g, m = St.hasData(t) && St.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(bt) || [""], l = e.length; l--;)if (s = Ht.exec(e[l]) || [], d = g = s[1], p = (s[2] || "").split(".").sort(), d) {
                    for (f = ot.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, h = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;)c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                    a && !h.length && (f.teardown && f.teardown.call(t, p, m.handle) !== !1 || ot.removeEvent(t, d, m.handle), delete u[d])
                } else for (d in u)ot.event.remove(t, d + e[l], n, r, !0);
                ot.isEmptyObject(u) && St.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            t = ot.event.fix(t);
            var e, n, r, i, o, a = [], s = Z.call(arguments), u = (St.get(this, "events") || {})[t.type] || [], l = ot.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (a = ot.event.handlers.call(this, t, u), e = 0; (i = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, r, i, o, a = [], s = e.delegateCount, u = t.target;
            if (s && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))for (; u !== this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                for (r = [], n = 0; s > n; n++)o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(u) > -1 : ot.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && a.push({elem: u, handlers: r})
            }
            return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || X, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[ot.expando])return t;
            var e, n, r, i = t.type, o = t, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ft.test(i) ? this.mouseHooks : Ut.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = r.length; e--;)n = r[e], t[n] = o[n];
            return t.target || (t.target = X), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return ot.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ot.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ot.Event = function (t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ot.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.fn.extend({
        on: function (t, e, n, r) {
            return m(this, t, e, n, r)
        }, one: function (t, e, n, r) {
            return m(this, t, e, n, r, 1)
        }, off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)return r = t.handleObj, ot(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t)this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, qt = /<script|<style|<link/i, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i, Wt = /^true\/(.*)/, Bt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function (t) {
            return t.replace(Lt, "<$1></$2>")
        }, clone: function (t, e, n) {
            var r, i, o, a, s = t.cloneNode(!0), u = ot.contains(t.ownerDocument, t);
            if (!(rt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))for (a = c(s), o = c(t), r = 0, i = o.length; i > r; r++)b(o[r], a[r]);
            if (e)if (n)for (o = o || c(t), a = a || c(s), r = 0, i = o.length; i > r; r++)w(o[r], a[r]); else w(t, s);
            return a = c(s, "script"), a.length > 0 && f(a, !u && c(t, "script")), s
        }, cleanData: function (t) {
            for (var e, n, r, i = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)if (kt(n)) {
                if (e = n[St.expando]) {
                    if (e.events)for (r in e.events)i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, e.handle);
                    n[St.expando] = void 0
                }
                n[Ct.expando] && (n[Ct.expando] = void 0)
            }
        }
    }), ot.fn.extend({
        domManip: x, detach: function (t) {
            return _(this, t, !0)
        }, remove: function (t) {
            return _(this, t)
        }, text: function (t) {
            return _t(this, function (t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return x(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return x(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return x(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return x(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return ot.clone(this, t, e)
            })
        }, html: function (t) {
            return _t(this, function (t) {
                var e = this[0] || {}, n = 0, r = this.length;
                if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                if ("string" == typeof t && !qt.test(t) && !Rt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; r > n; n++)e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return x(this, arguments, function (e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ot.fn[t] = function (t) {
            for (var n, r = [], i = ot(t), o = i.length - 1, a = 0; o >= a; a++)n = a === o ? this : this.clone(!0), ot(i[a])[e](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var zt, Yt = {
        HTML: "block",
        BODY: "block"
    }, Gt = /^margin/, Xt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"), Zt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, Kt = function (t, e, n, r) {
        var i, o, a = {};
        for (o in e)a[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e)t.style[o] = a[o];
        return i
    }, Jt = X.documentElement;
    !function () {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Jt.appendChild(a);
            var e = t.getComputedStyle(s);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, Jt.removeChild(a)
        }

        var n, r, i, o, a = X.createElement("div"), s = X.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ot.extend(rt, {
            pixelPosition: function () {
                return e(), n
            }, boxSizingReliable: function () {
                return null == r && e(), r
            }, pixelMarginRight: function () {
                return null == r && e(), i
            }, reliableMarginLeft: function () {
                return null == r && e(), o
            }, reliableMarginRight: function () {
                var e, n = s.appendChild(X.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Jt.appendChild(a), e = !parseFloat(t.getComputedStyle(n).marginRight), Jt.removeChild(a), s.removeChild(n), e
            }
        }))
    }();
    var Qt = /^(none|table(?!-c[ea]).+)/, te = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ee = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ne = ["Webkit", "O", "Moz", "ms"], re = X.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = C(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = ot.camelCase(e), u = t.style;
                return e = ot.cssProps[s] || (ot.cssProps[s] = T(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Et.exec(n)) && i[1] && (n = l(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[s] ? "" : "px")), rt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
            }
        },
        css: function (t, e, n, r) {
            var i, o, a, s = ot.camelCase(e);
            return e = ot.cssProps[s] || (ot.cssProps[s] = T(s) || s), a = ot.cssHooks[e] || ot.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = C(t, e, r)), "normal" === i && e in ee && (i = ee[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), ot.each(["height", "width"], function (t, e) {
        ot.cssHooks[e] = {
            get: function (t, n, r) {
                return n ? Qt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Kt(t, te, function () {
                    return M(t, e, r)
                }) : M(t, e, r) : void 0
            }, set: function (t, n, r) {
                var i, o = r && Zt(t), a = r && E(t, e, r, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return a && (i = Et.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), A(t, n, a)
            }
        }
    }), ot.cssHooks.marginLeft = D(rt.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), ot.cssHooks.marginRight = D(rt.reliableMarginRight, function (t, e) {
        return e ? Kt(t, {display: "inline-block"}, C, [t, "marginRight"]) : void 0
    }), ot.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ot.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[t + Mt[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Gt.test(t) || (ot.cssHooks[t + e].set = A)
    }), ot.fn.extend({
        css: function (t, e) {
            return _t(this, function (t, e, n) {
                var r, i, o = {}, a = 0;
                if (ot.isArray(e)) {
                    for (r = Zt(t), i = e.length; i > a; a++)o[e[a]] = ot.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return O(this, !0)
        }, hide: function () {
            return O(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ot(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = P, P.prototype = {
        constructor: P, init: function (t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, ot.fx = P.prototype.init, ot.fx.step = {};
    var ie, oe, ae = /^(?:toggle|show|hide)$/, se = /queueHooks$/;
    ot.Animation = ot.extend(F, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return l(n.elem, t, Et.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(bt);
            for (var n, r = 0, i = t.length; i > r; r++)n = t[r], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(e)
        }, prefilters: [N], prefilter: function (t, e) {
            e ? F.prefilters.unshift(t) : F.prefilters.push(t)
        }
    }), ot.speed = function (t, e, n) {
        var r = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: n || !n && e || ot.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ot.isFunction(e) && e
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
        }, r
    }, ot.fn.extend({
        fadeTo: function (t, e, n, r) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
        }, animate: function (t, e, n, r) {
            var i = ot.isEmptyObject(t), o = ot.speed(e, n, r), a = function () {
                var e = F(this, ot.extend({}, t), o);
                (i || St.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (t, e, n) {
            var r = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, i = null != t && t + "queueHooks", o = ot.timers, a = St.get(this);
                if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && se.test(i) && r(a[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                (e || !n) && ot.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = St.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ot.timers, a = r ? r.length : 0;
                for (n.finish = !0, ot.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++)r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), ot.each(["toggle", "show", "hide"], function (t, e) {
        var n = ot.fn[e];
        ot.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, r, i)
        }
    }), ot.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        ot.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), ot.timers = [], ot.fx.tick = function () {
        var t, e = 0, n = ot.timers;
        for (ie = ot.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || ot.fx.stop(), ie = void 0
    }, ot.fx.timer = function (t) {
        ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
    }, ot.fx.interval = 13, ot.fx.start = function () {
        oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function () {
        t.clearInterval(oe), oe = null
    }, ot.fx.speeds = {slow: 600, fast: 200, _default: 400}, ot.fn.delay = function (e, n) {
        return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function () {
                t.clearTimeout(i)
            }
        })
    }, function () {
        var t = X.createElement("input"), e = X.createElement("select"), n = e.appendChild(X.createElement("option"));
        t.type = "checkbox", rt.checkOn = "" !== t.value, rt.optSelected = n.selected, e.disabled = !0, rt.optDisabled = !n.disabled, t = X.createElement("input"), t.value = "t", t.type = "radio", rt.radioValue = "t" === t.value
    }();
    var ue, le = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function (t, e) {
            return _t(this, ot.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ot.find.attr(t, e), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!rt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, r, i = 0, o = e && e.match(bt);
            if (o && 1 === t.nodeType)for (; n = o[i++];)r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        }
    }), ue = {
        set: function (t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = le[e] || ot.find.attr;
        le[e] = function (t, e, r) {
            var i, o;
            return r || (o = le[e], le[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, le[e] = o), i
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i, fe = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function (t, e) {
            return _t(this, ot.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[ot.propFix[t] || t]
            })
        }
    }), ot.extend({
        prop: function (t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, i = ot.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), rt.optSelected || (ot.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ot.propFix[this.toLowerCase()] = this
    });
    var he = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (ot.isFunction(t))return this.each(function (e) {
                ot(this).addClass(t.call(this, e, H(this)))
            });
            if ("string" == typeof t && t)for (e = t.match(bt) || []; n = this[u++];)if (i = H(n), r = 1 === n.nodeType && (" " + i + " ").replace(he, " ")) {
                for (a = 0; o = e[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = ot.trim(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (ot.isFunction(t))return this.each(function (e) {
                ot(this).removeClass(t.call(this, e, H(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof t && t)for (e = t.match(bt) || []; n = this[u++];)if (i = H(n), r = 1 === n.nodeType && (" " + i + " ").replace(he, " ")) {
                for (a = 0; o = e[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                s = ot.trim(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
                ot(this).toggleClass(t.call(this, n, H(this), e), e)
            }) : this.each(function () {
                var e, r, i, o;
                if ("string" === n)for (r = 0, i = ot(this), o = t.match(bt) || []; e = o[r++];)i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else(void 0 === t || "boolean" === n) && (e = H(this), e && St.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : St.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];)if (1 === n.nodeType && (" " + H(n) + " ").replace(he, " ").indexOf(e) > -1)return !0;
            return !1
        }
    });
    var de = /\r/g, pe = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function (t) {
            var e, n, r, i = this[0];
            {
                if (arguments.length)return r = ot.isFunction(t), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, ot(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function (t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i)return e = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(de, "") : null == n ? "" : n)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ")
                }
            }, select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], (n.selected || u === i) && (rt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                        if (e = ot(n).val(), o)return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var n, r, i = t.options, o = ot.makeArray(e), a = i.length; a--;)r = i[a], (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function () {
        ot.valHooks[this] = {
            set: function (t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        }, rt.checkOn || (ot.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ge = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function (e, n, r, i) {
            var o, a, s, u, l, c, f, h = [r || X], d = nt.call(e, "type") ? e.type : e, p = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !ge.test(d + ot.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, e = e[ot.expando] ? e : new ot.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : ot.makeArray(n, [e]), f = ot.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !ot.isWindow(r)) {
                    for (u = f.delegateType || d, ge.test(u + d) || (a = a.parentNode); a; a = a.parentNode)h.push(a), s = a;
                    s === (r.ownerDocument || X) && h.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? u : f.bindType || d, c = (St.get(a, "events") || {})[e.type] && St.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && kt(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !kt(r) || l && ot.isFunction(r[d]) && !ot.isWindow(r) && (s = r[l], s && (r[l] = null), ot.event.triggered = d, r[d](), ot.event.triggered = void 0, s && (r[l] = s)), e.result
            }
        }, simulate: function (t, e, n) {
            var r = ot.extend(new ot.Event, n, {type: t, isSimulated: !0});
            ot.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ot.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ot.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), rt.focusin = "onfocusin" in t, rt.focusin || ot.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this, i = St.access(r, e);
                i || r.addEventListener(t, n, !0), St.access(r, e, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = St.access(r, e) - 1;
                i ? St.access(r, e, i) : (r.removeEventListener(t, n, !0), St.remove(r, e))
            }
        }
    });
    var me = t.location, ve = ot.now(), ye = /\?/;
    ot.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e)return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (r) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
    };
    var $e = /#.*$/, we = /([?&])_=[^&]*/, be = /^(.*?):[ \t]*([^\r\n]*)$/gm, xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _e = /^(?:GET|HEAD)$/, ke = /^\/\//, Se = {}, Ce = {}, De = "*/".concat("*"), Te = X.createElement("a");
    Te.href = me.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: xe.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": De,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ot.parseJSON, "text xml": ot.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? V(V(t, ot.ajaxSettings), e) : V(ot.ajaxSettings, t)
        },
        ajaxPrefilter: L(Se),
        ajaxTransport: L(Ce),
        ajax: function (e, n) {
            function r(e, n, r, s) {
                var l, f, y, $, b, _ = n;
                2 !== w && (w = 2, u && t.clearTimeout(u), i = void 0, a = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && ($ = W(h, x, r)), $ = B(h, $, x, l), l ? (h.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (ot.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (ot.etag[o] = b)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = $.state, f = $.data, y = $.error, l = !y)) : (y = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || _) + "", l ? g.resolveWith(d, [f, _, x]) : g.rejectWith(d, [x, _, y]), x.statusCode(v), v = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, h, l ? f : y]), m.fireWith(d, [x, _]), c && (p.trigger("ajaxComplete", [x, h]), --ot.active || ot.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, h = ot.ajaxSetup({}, n), d = h.context || h, p = h.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = h.statusCode || {}, y = {}, $ = {}, w = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === w) {
                        if (!s)for (s = {}; e = be.exec(a);)s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === w ? a : null
                },
                setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return w || (t = $[n] = $[n] || t, y[t] = e), this
                },
                overrideMimeType: function (t) {
                    return w || (h.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > w)for (e in t)v[e] = [v[e], t[e]]; else x.always(t[x.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || b;
                    return i && i.abort(e), r(0, e), this
                }
            };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || me.href) + "").replace($e, "").replace(ke, me.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ot.trim(h.dataType || "*").toLowerCase().match(bt) || [""], null == h.crossDomain) {
                l = X.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Te.protocol + "//" + Te.host != l.protocol + "//" + l.host
                } catch (_) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ot.param(h.data, h.traditional)), q(Se, h, n, x), 2 === w)return x;
            c = ot.event && h.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !_e.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ye.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = we.test(o) ? o.replace(we, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)), h.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + De + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers)x.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === w))return x.abort();
            b = "abort";
            for (f in{success: 1, error: 1, complete: 1})x[f](h[f]);
            if (i = q(Ce, h, n, x)) {
                if (x.readyState = 1, c && p.trigger("ajaxSend", [x, h]), 2 === w)return x;
                h.async && h.timeout > 0 && (u = t.setTimeout(function () {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    w = 1, i.send(y, r)
                } catch (_) {
                    if (!(2 > w))throw _;
                    r(-1, _)
                }
            } else r(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function (t, e) {
        ot[e] = function (t, n, r, i) {
            return ot.isFunction(n) && (i = i || r, r = n, n = void 0), ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ot.isPlainObject(t) && t))
        }
    }), ot._evalUrl = function (t) {
        return ot.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, ot.fn.extend({
        wrapAll: function (t) {
            var e;
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                return t
            }).append(this)), this)
        }, wrapInner: function (t) {
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ot(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = ot.isFunction(t);
            return this.each(function (n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function (t) {
        return !ot.expr.filters.visible(t)
    }, ot.expr.filters.visible = function (t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Ae = /%20/g, Ee = /\[\]$/, Me = /\r?\n/g, Oe = /^(?:submit|button|image|reset|file)$/i, Pe = /^(?:input|select|textarea|keygen)/i;
    ot.param = function (t, e) {
        var n, r = [], i = function (t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t))ot.each(t, function () {
            i(this.name, this.value)
        }); else for (n in t)z(n, t[n], e, i);
        return r.join("&").replace(Ae, "+")
    }, ot.fn.extend({
        serialize: function () {
            return ot.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Pe.test(this.nodeName) && !Oe.test(t) && (this.checked || !Pt.test(t))
            }).map(function (t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                    return {name: e.name, value: t.replace(Me, "\r\n")}
                }) : {name: e.name, value: n.replace(Me, "\r\n")}
            }).get()
        }
    }), ot.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    };
    var je = {0: 200, 1223: 204}, Ie = ot.ajaxSettings.xhr();
    rt.cors = !!Ie && "withCredentials" in Ie, rt.ajax = Ie = !!Ie, ot.ajaxTransport(function (e) {
        var n, r;
        return rt.cors || Ie && !e.crossDomain ? {
            send: function (i, o) {
                var a, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (a in e.xhrFields)s[a] = e.xhrFields[a];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i)s.setRequestHeader(a, i[a]);
                n = function (t) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(je[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && t.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (n)throw u
                }
            }, abort: function () {
                n && n()
            }
        } : void 0
    }), ot.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ot.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (r, i) {
                    e = ot("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), X.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Re = [], Ne = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Re.pop() || ot.expando + "_" + ve++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, o, a, s = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ne, "$1" + i) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return a || ot.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? ot(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Re.push(i)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ot.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || X;
        var r = pt.exec(t), i = !n && [];
        return r ? [e.createElement(r[1])] : (r = h([t], e, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
    };
    var Ue = ot.fn.load;
    ot.fn.load = function (t, e, n) {
        if ("string" != typeof t && Ue)return Ue.apply(this, arguments);
        var r, i, o, a = this, s = t.indexOf(" ");
        return s > -1 && (r = ot.trim(t.slice(s)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && ot.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, a.html(r ? ot("<div>").append(ot.parseHTML(t)).find(r) : t)
        }).always(n && function (t, e) {
                a.each(function () {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ot.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function (t) {
        return ot.grep(ot.timers, function (e) {
            return t === e.elem
        }).length
    }, ot.offset = {
        setOffset: function (t, e, n) {
            var r, i, o, a, s, u, l, c = ot.css(t, "position"), f = ot(t), h = {};
            "static" === c && (t.style.position = "relative"), s = f.offset(), o = ot.css(t, "top"), u = ot.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
        }
    }, ot.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o)return e = o.documentElement, ot.contains(e, r) ? (i = r.getBoundingClientRect(), n = Y(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i
        }, position: function () {
            if (this[0]) {
                var t, e, n = this[0], r = {top: 0, left: 0};
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (r = t.offset()), r.top += ot.css(t[0], "borderTopWidth", !0), r.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - ot.css(n, "marginTop", !0),
                    left: e.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");)t = t.offsetParent;
                return t || Jt
            })
        }
    }), ot.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function (r) {
            return _t(this, function (t, r, i) {
                var o = Y(t);
                return void 0 === i ? o ? o[e] : t[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
            }, t, r, arguments.length)
        }
    }), ot.each(["top", "left"], function (t, e) {
        ot.cssHooks[e] = D(rt.pixelPosition, function (t, n) {
            return n ? (n = C(t, e), Xt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }), ot.each({Height: "height", Width: "width"}, function (t, e) {
        ot.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
            ot.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                return _t(this, function (e, n, r) {
                    var i;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ot.css(e, n, a) : ot.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), ot.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }, size: function () {
            return this.length
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ot
    });
    var Fe = t.jQuery, He = t.$;
    return ot.noConflict = function (e) {
        return t.$ === ot && (t.$ = He), e && t.jQuery === ot && (t.jQuery = Fe), ot
    }, e || (t.jQuery = t.$ = ot), ot
}), function () {
    function t() {
    }

    function e(t) {
        return t
    }

    function n(t) {
        return !!t
    }

    function r(t) {
        return !t
    }

    function i(t) {
        return function () {
            if (null === t)throw new Error("Callback was already called.");
            t.apply(this, arguments), t = null
        }
    }

    function o(t) {
        return function () {
            null !== t && (t.apply(this, arguments), t = null)
        }
    }

    function a(t) {
        return R(t) || "number" == typeof t.length && t.length >= 0 && t.length % 1 === 0
    }

    function s(t, e) {
        for (var n = -1, r = t.length; ++n < r;)e(t[n], n, t)
    }

    function u(t, e) {
        for (var n = -1, r = t.length, i = Array(r); ++n < r;)i[n] = e(t[n], n, t);
        return i
    }

    function l(t) {
        return u(Array(t), function (t, e) {
            return e
        })
    }

    function c(t, e, n) {
        return s(t, function (t, r, i) {
            n = e(n, t, r, i)
        }), n
    }

    function f(t, e) {
        s(U(t), function (n) {
            e(t[n], n)
        })
    }

    function h(t, e) {
        for (var n = 0; n < t.length; n++)if (t[n] === e)return n;
        return -1
    }

    function d(t) {
        var e, n, r = -1;
        return a(t) ? (e = t.length, function () {
            return r++, e > r ? r : null
        }) : (n = U(t), e = n.length, function () {
            return r++, e > r ? n[r] : null
        })
    }

    function p(t, e) {
        return e = null == e ? t.length - 1 : +e, function () {
            for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; n > i; i++)r[i] = arguments[i + e];
            switch (e) {
                case 0:
                    return t.call(this, r);
                case 1:
                    return t.call(this, arguments[0], r)
            }
        }
    }

    function g(t) {
        return function (e, n, r) {
            return t(e, r)
        }
    }

    function m(e) {
        return function (n, r, a) {
            a = o(a || t), n = n || [];
            var s = d(n);
            if (0 >= e)return a(null);
            var u = !1, l = 0, c = !1;
            !function f() {
                if (u && 0 >= l)return a(null);
                for (; e > l && !c;) {
                    var t = s();
                    if (null === t)return u = !0, void(0 >= l && a(null));
                    l += 1, r(n[t], t, i(function (t) {
                        l -= 1, t ? (a(t), c = !0) : f()
                    }))
                }
            }()
        }
    }

    function v(t) {
        return function (e, n, r) {
            return t(P.eachOf, e, n, r)
        }
    }

    function y(t) {
        return function (e, n, r, i) {
            return t(m(n), e, r, i)
        }
    }

    function $(t) {
        return function (e, n, r) {
            return t(P.eachOfSeries, e, n, r)
        }
    }

    function w(e, n, r, i) {
        i = o(i || t), n = n || [];
        var s = a(n) ? [] : {};
        e(n, function (t, e, n) {
            r(t, function (t, r) {
                s[e] = r, n(t)
            })
        }, function (t) {
            i(t, s)
        })
    }

    function b(t, e, n, r) {
        var i = [];
        t(e, function (t, e, r) {
            n(t, function (n) {
                n && i.push({index: e, value: t}), r()
            })
        }, function () {
            r(u(i.sort(function (t, e) {
                return t.index - e.index
            }), function (t) {
                return t.value
            }))
        })
    }

    function x(t, e, n, r) {
        b(t, e, function (t, e) {
            n(t, function (t) {
                e(!t)
            })
        }, r)
    }

    function _(t, e, n) {
        return function (r, i, o, a) {
            function s() {
                a && a(n(!1, void 0))
            }

            function u(t, r, i) {
                return a ? void o(t, function (r) {
                    a && e(r) && (a(n(!0, t)), a = o = !1), i()
                }) : i()
            }

            arguments.length > 3 ? t(r, i, u, s) : (a = o, o = i, t(r, u, s))
        }
    }

    function k(t, e) {
        return e
    }

    function S(e, n, r) {
        r = r || t;
        var i = a(n) ? [] : {};
        e(n, function (t, e, n) {
            t(p(function (t, r) {
                r.length <= 1 && (r = r[0]), i[e] = r, n(t)
            }))
        }, function (t) {
            r(t, i)
        })
    }

    function C(t, e, n, r) {
        var i = [];
        t(e, function (t, e, r) {
            n(t, function (t, e) {
                i = i.concat(e || []), r(t)
            })
        }, function (t) {
            r(t, i)
        })
    }

    function D(e, n, r) {
        function o(e, n, r, i) {
            if (null != i && "function" != typeof i)throw new Error("task callback must be a function");
            return e.started = !0, R(n) || (n = [n]), 0 === n.length && e.idle() ? P.setImmediate(function () {
                e.drain()
            }) : (s(n, function (n) {
                var o = {data: n, callback: i || t};
                r ? e.tasks.unshift(o) : e.tasks.push(o), e.tasks.length === e.concurrency && e.saturated()
            }), void P.setImmediate(e.process))
        }

        function a(t, e) {
            return function () {
                l -= 1;
                var n = !1, r = arguments;
                s(e, function (t) {
                    s(c, function (e, r) {
                        e !== t || n || (c.splice(r, 1), n = !0)
                    }), t.callback.apply(t, r)
                }), t.tasks.length + l === 0 && t.drain(), t.process()
            }
        }

        if (null == n)n = 1; else if (0 === n)throw new Error("Concurrency must not be zero");
        var l = 0, c = [], f = {
            tasks: [],
            concurrency: n,
            payload: r,
            saturated: t,
            empty: t,
            drain: t,
            started: !1,
            paused: !1,
            push: function (t, e) {
                o(f, t, !1, e)
            },
            kill: function () {
                f.drain = t, f.tasks = []
            },
            unshift: function (t, e) {
                o(f, t, !0, e)
            },
            process: function () {
                for (; !f.paused && l < f.concurrency && f.tasks.length;) {
                    var t = f.payload ? f.tasks.splice(0, f.payload) : f.tasks.splice(0, f.tasks.length), n = u(t, function (t) {
                        return t.data
                    });
                    0 === f.tasks.length && f.empty(), l += 1, c.push(t[0]);
                    var r = i(a(f, t));
                    e(n, r)
                }
            },
            length: function () {
                return f.tasks.length
            },
            running: function () {
                return l
            },
            workersList: function () {
                return c
            },
            idle: function () {
                return f.tasks.length + l === 0
            },
            pause: function () {
                f.paused = !0
            },
            resume: function () {
                if (f.paused !== !1) {
                    f.paused = !1;
                    for (var t = Math.min(f.concurrency, f.tasks.length), e = 1; t >= e; e++)P.setImmediate(f.process)
                }
            }
        };
        return f
    }

    function T(t) {
        return p(function (e, n) {
            e.apply(null, n.concat([p(function (e, n) {
                "object" == typeof console && (e ? console.error && console.error(e) : console[t] && s(n, function (e) {
                    console[t](e)
                }))
            })]))
        })
    }

    function A(t) {
        return function (e, n, r) {
            t(l(e), n, r)
        }
    }

    function E(t) {
        return p(function (e, n) {
            var r = p(function (n) {
                var r = this, i = n.pop();
                return t(e, function (t, e, i) {
                    t.apply(r, n.concat([i]))
                }, i)
            });
            return n.length ? r.apply(this, n) : r
        })
    }

    function M(t) {
        return p(function (e) {
            var n = e.pop();
            e.push(function () {
                var t = arguments;
                r ? P.setImmediate(function () {
                    n.apply(null, t)
                }) : n.apply(null, t)
            });
            var r = !0;
            t.apply(this, e), r = !1
        })
    }

    var O, P = {}, j = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this;
    null != j && (O = j.async), P.noConflict = function () {
        return j.async = O, P
    };
    var I = Object.prototype.toString, R = Array.isArray || function (t) {
            return "[object Array]" === I.call(t)
        }, N = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, U = Object.keys || function (t) {
            var e = [];
            for (var n in t)t.hasOwnProperty(n) && e.push(n);
            return e
        }, F = "function" == typeof setImmediate && setImmediate, H = F ? function (t) {
        F(t)
    } : function (t) {
        setTimeout(t, 0)
    };
    "object" == typeof process && "function" == typeof process.nextTick ? P.nextTick = process.nextTick : P.nextTick = H, P.setImmediate = F ? H : P.nextTick, P.forEach = P.each = function (t, e, n) {
        return P.eachOf(t, g(e), n)
    }, P.forEachSeries = P.eachSeries = function (t, e, n) {
        return P.eachOfSeries(t, g(e), n)
    }, P.forEachLimit = P.eachLimit = function (t, e, n, r) {
        return m(e)(t, g(n), r)
    }, P.forEachOf = P.eachOf = function (e, n, r) {
        function a(t) {
            l--, t ? r(t) : null === s && 0 >= l && r(null)
        }

        r = o(r || t), e = e || [];
        for (var s, u = d(e), l = 0; null != (s = u());)l += 1, n(e[s], s, i(a));
        0 === l && r(null)
    }, P.forEachOfSeries = P.eachOfSeries = function (e, n, r) {
        function a() {
            var t = !0;
            return null === u ? r(null) : (n(e[u], u, i(function (e) {
                if (e)r(e); else {
                    if (u = s(), null === u)return r(null);
                    t ? P.setImmediate(a) : a()
                }
            })), void(t = !1))
        }

        r = o(r || t), e = e || [];
        var s = d(e), u = s();
        a()
    }, P.forEachOfLimit = P.eachOfLimit = function (t, e, n, r) {
        m(e)(t, n, r)
    }, P.map = v(w), P.mapSeries = $(w), P.mapLimit = y(w), P.inject = P.foldl = P.reduce = function (t, e, n, r) {
        P.eachOfSeries(t, function (t, r, i) {
            n(e, t, function (t, n) {
                e = n, i(t)
            })
        }, function (t) {
            r(t, e)
        })
    }, P.foldr = P.reduceRight = function (t, n, r, i) {
        var o = u(t, e).reverse();
        P.reduce(o, n, r, i)
    }, P.transform = function (t, e, n, r) {
        3 === arguments.length && (r = n, n = e, e = R(t) ? [] : {}), P.eachOf(t, function (t, r, i) {
            n(e, t, r, i)
        }, function (t) {
            r(t, e)
        })
    }, P.select = P.filter = v(b), P.selectLimit = P.filterLimit = y(b), P.selectSeries = P.filterSeries = $(b), P.reject = v(x), P.rejectLimit = y(x), P.rejectSeries = $(x), P.any = P.some = _(P.eachOf, n, e), P.someLimit = _(P.eachOfLimit, n, e), P.all = P.every = _(P.eachOf, r, r), P.everyLimit = _(P.eachOfLimit, r, r), P.detect = _(P.eachOf, e, k), P.detectSeries = _(P.eachOfSeries, e, k), P.detectLimit = _(P.eachOfLimit, e, k), P.sortBy = function (t, e, n) {
        function r(t, e) {
            var n = t.criteria, r = e.criteria;
            return r > n ? -1 : n > r ? 1 : 0
        }

        P.map(t, function (t, n) {
            e(t, function (e, r) {
                e ? n(e) : n(null, {value: t, criteria: r})
            })
        }, function (t, e) {
            return t ? n(t) : void n(null, u(e.sort(r), function (t) {
                return t.value
            }))
        })
    }, P.auto = function (e, n, r) {
        function i(t) {
            y.unshift(t)
        }

        function a(t) {
            var e = h(y, t);
            e >= 0 && y.splice(e, 1)
        }

        function u() {
            d--, s(y.slice(0), function (t) {
                t()
            })
        }

        "function" == typeof arguments[1] && (r = n, n = null), r = o(r || t);
        var l = U(e), d = l.length;
        if (!d)return r(null);
        n || (n = d);
        var g = {}, m = 0, v = !1, y = [];
        i(function () {
            d || r(null, g)
        }), s(l, function (t) {
            function o() {
                return n > m && c($, function (t, e) {
                        return t && g.hasOwnProperty(e)
                    }, !0) && !g.hasOwnProperty(t)
            }

            function s() {
                o() && (m++, a(s), d[d.length - 1](y, g))
            }

            if (!v) {
                for (var l, d = R(e[t]) ? e[t] : [e[t]], y = p(function (e, n) {
                    if (m--, n.length <= 1 && (n = n[0]), e) {
                        var i = {};
                        f(g, function (t, e) {
                            i[e] = t
                        }), i[t] = n, v = !0, r(e, i)
                    } else g[t] = n, P.setImmediate(u)
                }), $ = d.slice(0, d.length - 1), w = $.length; w--;) {
                    if (!(l = e[$[w]]))throw new Error("Has nonexistent dependency in " + $.join(", "));
                    if (R(l) && h(l, t) >= 0)throw new Error("Has cyclic dependencies")
                }
                o() ? (m++, d[d.length - 1](y, g)) : i(s)
            }
        })
    }, P.retry = function (t, e, n) {
        function r(t, e) {
            if ("number" == typeof e)t.times = parseInt(e, 10) || o; else {
                if ("object" != typeof e)throw new Error("Unsupported argument type for 'times': " + typeof e);
                t.times = parseInt(e.times, 10) || o, t.interval = parseInt(e.interval, 10) || a
            }
        }

        function i(t, e) {
            function n(t, n) {
                return function (r) {
                    t(function (t, e) {
                        r(!t || n, {err: t, result: e})
                    }, e)
                }
            }

            function r(t) {
                return function (e) {
                    setTimeout(function () {
                        e(null)
                    }, t)
                }
            }

            for (; u.times;) {
                var i = !(u.times -= 1);
                s.push(n(u.task, i)), !i && u.interval > 0 && s.push(r(u.interval))
            }
            P.series(s, function (e, n) {
                n = n[n.length - 1], (t || u.callback)(n.err, n.result)
            })
        }

        var o = 5, a = 0, s = [], u = {times: o, interval: a}, l = arguments.length;
        if (1 > l || l > 3)throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
        return 2 >= l && "function" == typeof t && (n = e, e = t), "function" != typeof t && r(u, t), u.callback = n, u.task = e, u.callback ? i() : i
    }, P.waterfall = function (e, n) {
        function r(t) {
            return p(function (e, i) {
                if (e)n.apply(null, [e].concat(i)); else {
                    var o = t.next();
                    o ? i.push(r(o)) : i.push(n), M(t).apply(null, i)
                }
            })
        }

        if (n = o(n || t), !R(e)) {
            var i = new Error("First argument to waterfall must be an array of functions");
            return n(i)
        }
        return e.length ? void r(P.iterator(e))() : n()
    }, P.parallel = function (t, e) {
        S(P.eachOf, t, e)
    }, P.parallelLimit = function (t, e, n) {
        S(m(e), t, n)
    }, P.series = function (t, e) {
        S(P.eachOfSeries, t, e)
    }, P.iterator = function (t) {
        function e(n) {
            function r() {
                return t.length && t[n].apply(null, arguments), r.next()
            }

            return r.next = function () {
                return n < t.length - 1 ? e(n + 1) : null
            }, r
        }

        return e(0)
    }, P.apply = p(function (t, e) {
        return p(function (n) {
            return t.apply(null, e.concat(n))
        })
    }), P.concat = v(C), P.concatSeries = $(C), P.whilst = function (e, n, r) {
        if (r = r || t, e()) {
            var i = p(function (t, o) {
                t ? r(t) : e.apply(this, o) ? n(i) : r.apply(null, [null].concat(o))
            });
            n(i)
        } else r(null)
    }, P.doWhilst = function (t, e, n) {
        var r = 0;
        return P.whilst(function () {
            return ++r <= 1 || e.apply(this, arguments)
        }, t, n)
    }, P.until = function (t, e, n) {
        return P.whilst(function () {
            return !t.apply(this, arguments)
        }, e, n)
    }, P.doUntil = function (t, e, n) {
        return P.doWhilst(t, function () {
            return !e.apply(this, arguments);
        }, n)
    }, P.during = function (e, n, r) {
        r = r || t;
        var i = p(function (t, n) {
            t ? r(t) : (n.push(o), e.apply(this, n))
        }), o = function (t, e) {
            t ? r(t) : e ? n(i) : r(null)
        };
        e(o)
    }, P.doDuring = function (t, e, n) {
        var r = 0;
        P.during(function (t) {
            r++ < 1 ? t(null, !0) : e.apply(this, arguments)
        }, t, n)
    }, P.queue = function (t, e) {
        var n = D(function (e, n) {
            t(e[0], n)
        }, e, 1);
        return n
    }, P.priorityQueue = function (e, n) {
        function r(t, e) {
            return t.priority - e.priority
        }

        function i(t, e, n) {
            for (var r = -1, i = t.length - 1; i > r;) {
                var o = r + (i - r + 1 >>> 1);
                n(e, t[o]) >= 0 ? r = o : i = o - 1
            }
            return r
        }

        function o(e, n, o, a) {
            if (null != a && "function" != typeof a)throw new Error("task callback must be a function");
            return e.started = !0, R(n) || (n = [n]), 0 === n.length ? P.setImmediate(function () {
                e.drain()
            }) : void s(n, function (n) {
                var s = {data: n, priority: o, callback: "function" == typeof a ? a : t};
                e.tasks.splice(i(e.tasks, s, r) + 1, 0, s), e.tasks.length === e.concurrency && e.saturated(), P.setImmediate(e.process)
            })
        }

        var a = P.queue(e, n);
        return a.push = function (t, e, n) {
            o(a, t, e, n)
        }, delete a.unshift, a
    }, P.cargo = function (t, e) {
        return D(t, 1, e)
    }, P.log = T("log"), P.dir = T("dir"), P.memoize = function (t, n) {
        var r = {}, i = {}, o = Object.prototype.hasOwnProperty;
        n = n || e;
        var a = p(function (e) {
            var a = e.pop(), s = n.apply(null, e);
            o.call(r, s) ? P.setImmediate(function () {
                a.apply(null, r[s])
            }) : o.call(i, s) ? i[s].push(a) : (i[s] = [a], t.apply(null, e.concat([p(function (t) {
                r[s] = t;
                var e = i[s];
                delete i[s];
                for (var n = 0, o = e.length; o > n; n++)e[n].apply(null, t)
            })])))
        });
        return a.memo = r, a.unmemoized = t, a
    }, P.unmemoize = function (t) {
        return function () {
            return (t.unmemoized || t).apply(null, arguments)
        }
    }, P.times = A(P.map), P.timesSeries = A(P.mapSeries), P.timesLimit = function (t, e, n, r) {
        return P.mapLimit(l(t), e, n, r)
    }, P.seq = function () {
        var e = arguments;
        return p(function (n) {
            var r = this, i = n[n.length - 1];
            "function" == typeof i ? n.pop() : i = t, P.reduce(e, n, function (t, e, n) {
                e.apply(r, t.concat([p(function (t, e) {
                    n(t, e)
                })]))
            }, function (t, e) {
                i.apply(r, [t].concat(e))
            })
        })
    }, P.compose = function () {
        return P.seq.apply(null, Array.prototype.reverse.call(arguments))
    }, P.applyEach = E(P.eachOf), P.applyEachSeries = E(P.eachOfSeries), P.forever = function (e, n) {
        function r(t) {
            return t ? o(t) : void a(r)
        }

        var o = i(n || t), a = M(e);
        r()
    }, P.ensureAsync = M, P.constant = p(function (t) {
        var e = [null].concat(t);
        return function (t) {
            return t.apply(this, e)
        }
    }), P.wrapSync = P.asyncify = function (t) {
        return p(function (e) {
            var n, r = e.pop();
            try {
                n = t.apply(this, e)
            } catch (i) {
                return r(i)
            }
            N(n) && "function" == typeof n.then ? n.then(function (t) {
                r(null, t)
            })["catch"](function (t) {
                r(t.message ? t : new Error(t))
            }) : r(null, n)
        })
    }, "object" == typeof module && module.exports ? module.exports = P : "function" == typeof define && define.amd ? define([], function () {
        return P
    }) : j.async = P
}(), function () {
    function t(t, e) {
        return t.set(e[0], e[1]), t
    }

    function e(t, e) {
        return t.add(e), t
    }

    function n(t, e, n) {
        var r = n.length;
        switch (r) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }

    function r(t, e, n, r) {
        for (var i = -1, o = t.length; ++i < o;) {
            var a = t[i];
            e(r, a, n(a), t)
        }
        return r
    }

    function i(t, e) {
        for (var n = -1, r = t.length, i = -1, o = e.length, a = Array(r + o); ++n < r;)a[n] = t[n];
        for (; ++i < o;)a[n++] = e[i];
        return a
    }

    function o(t, e) {
        for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
        return t
    }

    function a(t, e) {
        for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
        return t
    }

    function s(t, e) {
        for (var n = -1, r = t.length; ++n < r;)if (!e(t[n], n, t))return !1;
        return !0
    }

    function u(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }

    function l(t, e) {
        return !!t.length && $(t, e, 0) > -1
    }

    function c(t, e, n) {
        for (var r = -1, i = t.length; ++r < i;)if (n(e, t[r]))return !0;
        return !1
    }

    function f(t, e) {
        for (var n = -1, r = t.length, i = Array(r); ++n < r;)i[n] = e(t[n], n, t);
        return i
    }

    function h(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;)t[i + n] = e[n];
        return t
    }

    function d(t, e, n, r) {
        var i = -1, o = t.length;
        for (r && o && (n = t[++i]); ++i < o;)n = e(n, t[i], i, t);
        return n
    }

    function p(t, e, n, r) {
        var i = t.length;
        for (r && i && (n = t[--i]); i--;)n = e(n, t[i], i, t);
        return n
    }

    function g(t, e) {
        for (var n = -1, r = t.length; ++n < r;)if (e(t[n], n, t))return !0;
        return !1
    }

    function m(t, e, n) {
        for (var r = -1, i = t.length; ++r < i;) {
            var o = t[r], a = e(o);
            if (null != a && (s === Z ? a === a : n(a, s)))var s = a, u = o
        }
        return u
    }

    function v(t, e, n, r) {
        var i;
        return n(t, function (t, n, o) {
            return e(t, n, o) ? (i = r ? n : t, !1) : void 0
        }), i
    }

    function y(t, e, n) {
        for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;)if (e(t[i], i, t))return i;
        return -1
    }

    function $(t, e, n) {
        if (e !== e)return F(t, n);
        for (var r = n - 1, i = t.length; ++r < i;)if (t[r] === e)return r;
        return -1
    }

    function w(t, e, n, r) {
        for (var i = n - 1, o = t.length; ++i < o;)if (r(t[i], e))return i;
        return -1
    }

    function b(t, e) {
        var n = t ? t.length : 0;
        return n ? k(t, e) / n : kt
    }

    function x(t, e, n, r, i) {
        return i(t, function (t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }

    function _(t, e) {
        var n = t.length;
        for (t.sort(e); n--;)t[n] = t[n].value;
        return t
    }

    function k(t, e) {
        for (var n, r = -1, i = t.length; ++r < i;) {
            var o = e(t[r]);
            o !== Z && (n = n === Z ? o : n + o)
        }
        return n
    }

    function S(t, e) {
        for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
        return r
    }

    function C(t, e) {
        return f(e, function (e) {
            return [e, t[e]]
        })
    }

    function D(t) {
        return function (e) {
            return t(e)
        }
    }

    function T(t, e) {
        return f(e, function (e) {
            return t[e]
        })
    }

    function A(t, e) {
        for (var n = -1, r = t.length; ++n < r && $(e, t[n], 0) > -1;);
        return n
    }

    function E(t, e) {
        for (var n = t.length; n-- && $(e, t[n], 0) > -1;);
        return n
    }

    function M(t) {
        return t && t.Object === Object ? t : null
    }

    function O(t, e) {
        if (t !== e) {
            var n = null === t, r = t === Z, i = t === t, o = null === e, a = e === Z, s = e === e;
            if (t > e && !o || !i || n && !a && s || r && s)return 1;
            if (e > t && !n || !s || o && !r && i || a && i)return -1
        }
        return 0
    }

    function P(t, e, n) {
        for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length; ++r < a;) {
            var u = O(i[r], o[r]);
            if (u) {
                if (r >= s)return u;
                var l = n[r];
                return u * ("desc" == l ? -1 : 1)
            }
        }
        return t.index - e.index
    }

    function j(t, e) {
        for (var n = t.length, r = 0; n--;)t[n] === e && r++;
        return r
    }

    function I(t) {
        return function (e, n) {
            var r;
            return e === Z && n === Z ? 0 : (e !== Z && (r = e), n !== Z && (r = r === Z ? n : t(r, n)), r)
        }
    }

    function R(t) {
        return Dn[t]
    }

    function N(t) {
        return Tn[t]
    }

    function U(t) {
        return "\\" + Mn[t]
    }

    function F(t, e, n) {
        for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
            var o = t[i];
            if (o !== o)return i
        }
        return -1
    }

    function H(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString)try {
            e = !!(t + "")
        } catch (n) {
        }
        return e
    }

    function L(t, e) {
        return t = "number" == typeof t || Ae.test(t) ? +t : -1, e = null == e ? xt : e, t > -1 && t % 1 == 0 && e > t
    }

    function q(t) {
        for (var e, n = []; !(e = t.next()).done;)n.push(e.value);
        return n
    }

    function V(t) {
        var e = -1, n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }), n
    }

    function W(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            (a === e || a === et) && (t[n] = et, o[i++] = n)
        }
        return o
    }

    function B(t) {
        var e = -1, n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }), n
    }

    function z(t) {
        if (!t || !bn.test(t))return t.length;
        for (var e = $n.lastIndex = 0; $n.test(t);)e++;
        return e
    }

    function Y(t) {
        return t.match($n)
    }

    function G(t) {
        return An[t]
    }

    function X(M) {
        function Ae(t) {
            if (as(t) && !Kc(t) && !(t instanceof Ie)) {
                if (t instanceof je)return t;
                if (dl.call(t, "__wrapped__"))return Zi(t)
            }
            return new je(t)
        }

        function Pe() {
        }

        function je(t, e) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = Z
        }

        function Ie(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = St, this.__views__ = []
        }

        function Re() {
            var t = new Ie(this.__wrapped__);
            return t.__actions__ = Gr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Gr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Gr(this.__views__), t
        }

        function Ne() {
            if (this.__filtered__) {
                var t = new Ie(this);
                t.__dir__ = -1, t.__filtered__ = !0
            } else t = this.clone(), t.__dir__ *= -1;
            return t
        }

        function Ue() {
            var t = this.__wrapped__.value(), e = this.__dir__, n = Kc(t), r = 0 > e, i = n ? t.length : 0, o = Ai(0, i, this.__views__), a = o.start, s = o.end, u = s - a, l = r ? s : a - 1, c = this.__iteratees__, f = c.length, h = 0, d = Ul(u, this.__takeCount__);
            if (!n || J > i || i == u && d == u)return Mr(t, this.__actions__);
            var p = [];
            t:for (; u-- && d > h;) {
                l += e;
                for (var g = -1, m = t[l]; ++g < f;) {
                    var v = c[g], y = v.iteratee, $ = v.type, w = y(m);
                    if ($ == $t)m = w; else if (!w) {
                        if ($ == yt)continue t;
                        break t
                    }
                }
                p[h++] = m
            }
            return p
        }

        function Fe() {
        }

        function He(t, e) {
            return qe(t, e) && delete t[e]
        }

        function Le(t, e) {
            if (Xl) {
                var n = t[e];
                return n === tt ? Z : n
            }
            return dl.call(t, e) ? t[e] : Z
        }

        function qe(t, e) {
            return Xl ? t[e] !== Z : dl.call(t, e)
        }

        function Ve(t, e, n) {
            t[e] = Xl && n === Z ? tt : n
        }

        function We(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function Be() {
            this.__data__ = {hash: new Fe, map: Bl ? new Bl : [], string: new Fe}
        }

        function ze(t) {
            var e = this.__data__;
            return Fi(t) ? He("string" == typeof t ? e.string : e.hash, t) : Bl ? e.map["delete"](t) : an(e.map, t)
        }

        function Ye(t) {
            var e = this.__data__;
            return Fi(t) ? Le("string" == typeof t ? e.string : e.hash, t) : Bl ? e.map.get(t) : sn(e.map, t)
        }

        function Ge(t) {
            var e = this.__data__;
            return Fi(t) ? qe("string" == typeof t ? e.string : e.hash, t) : Bl ? e.map.has(t) : un(e.map, t)
        }

        function Xe(t, e) {
            var n = this.__data__;
            return Fi(t) ? Ve("string" == typeof t ? n.string : n.hash, t, e) : Bl ? n.map.set(t, e) : cn(n.map, t, e), this
        }

        function Ze(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.__data__ = new We; ++e < n;)this.push(t[e])
        }

        function Ke(t, e) {
            var n = t.__data__;
            if (Fi(e)) {
                var r = n.__data__, i = "string" == typeof e ? r.string : r.hash;
                return i[e] === tt
            }
            return n.has(e)
        }

        function Je(t) {
            var e = this.__data__;
            if (Fi(t)) {
                var n = e.__data__, r = "string" == typeof t ? n.string : n.hash;
                r[t] = tt
            } else e.set(t, tt)
        }

        function Qe(t) {
            var e = -1, n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }

        function tn() {
            this.__data__ = {array: [], map: null}
        }

        function en(t) {
            var e = this.__data__, n = e.array;
            return n ? an(n, t) : e.map["delete"](t)
        }

        function nn(t) {
            var e = this.__data__, n = e.array;
            return n ? sn(n, t) : e.map.get(t)
        }

        function rn(t) {
            var e = this.__data__, n = e.array;
            return n ? un(n, t) : e.map.has(t)
        }

        function on(t, e) {
            var n = this.__data__, r = n.array;
            r && (r.length < J - 1 ? cn(r, t, e) : (n.array = null, n.map = new We(r)));
            var i = n.map;
            return i && i.set(t, e), this
        }

        function an(t, e) {
            var n = ln(t, e);
            if (0 > n)return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : El.call(t, n, 1), !0
        }

        function sn(t, e) {
            var n = ln(t, e);
            return 0 > n ? Z : t[n][1]
        }

        function un(t, e) {
            return ln(t, e) > -1
        }

        function ln(t, e) {
            for (var n = t.length; n--;)if (La(t[n][0], e))return n;
            return -1
        }

        function cn(t, e, n) {
            var r = ln(t, e);
            0 > r ? t.push([e, n]) : t[r][1] = n
        }

        function fn(t, e, n, r) {
            return t === Z || La(t, cl[n]) && !dl.call(r, n) ? e : t
        }

        function hn(t, e, n) {
            (n !== Z && !La(t[e], n) || "number" == typeof e && n === Z && !(e in t)) && (t[e] = n)
        }

        function dn(t, e, n) {
            var r = t[e];
            dl.call(t, e) && La(r, n) && (n !== Z || e in t) || (t[e] = n)
        }

        function pn(t, e, n, r) {
            return sc(t, function (t, i, o) {
                e(r, t, n(t), o)
            }), r
        }

        function gn(t, e) {
            return t && Xr(e, zs(e), t)
        }

        function mn(t, e) {
            for (var n = -1, r = null == t, i = e.length, o = Array(i); ++n < i;)o[n] = r ? Z : Vs(t, e[n]);
            return o
        }

        function $n(t, e, n) {
            return t === t && (n !== Z && (t = n >= t ? t : n), e !== Z && (t = t >= e ? t : e)), t
        }

        function Dn(t, e, n, r, i, a, s) {
            var u;
            if (r && (u = a ? r(t, i, a, s) : r(t)), u !== Z)return u;
            if (!os(t))return t;
            var l = Kc(t);
            if (l) {
                if (u = Mi(t), !e)return Gr(t, u)
            } else {
                var c = Ti(t), f = c == Pt || c == jt;
                if (Jc(t))return Ur(t, e);
                if (c == Nt || c == Tt || f && !a) {
                    if (H(t))return a ? t : {};
                    if (u = Oi(f ? {} : t), !e)return Zr(t, gn(u, t))
                } else {
                    if (!Cn[c])return a ? t : {};
                    u = Pi(t, c, Dn, e)
                }
            }
            s || (s = new Qe);
            var h = s.get(t);
            if (h)return h;
            if (s.set(t, u), !l)var d = n ? $i(t) : zs(t);
            return o(d || t, function (i, o) {
                d && (o = i, i = t[o]), dn(u, o, Dn(i, e, n, r, o, t, s))
            }), u
        }

        function Tn(t) {
            var e = zs(t), n = e.length;
            return function (r) {
                if (null == r)return !n;
                for (var i = n; i--;) {
                    var o = e[i], a = t[o], s = r[o];
                    if (s === Z && !(o in Object(r)) || !a(s))return !1
                }
                return !0
            }
        }

        function An(t) {
            return os(t) ? Dl(t) : {}
        }

        function En(t, e, n) {
            if ("function" != typeof t)throw new ul(Q);
            return Al(function () {
                t.apply(Z, n)
            }, e)
        }

        function Mn(t, e, n, r) {
            var i = -1, o = l, a = !0, s = t.length, u = [], h = e.length;
            if (!s)return u;
            n && (e = f(e, D(n))), r ? (o = c, a = !1) : e.length >= J && (o = Ke, a = !1, e = new Ze(e));
            t:for (; ++i < s;) {
                var d = t[i], p = n ? n(d) : d;
                if (a && p === p) {
                    for (var g = h; g--;)if (e[g] === p)continue t;
                    u.push(d)
                } else o(e, p, r) || u.push(d)
            }
            return u
        }

        function jn(t, e) {
            var n = !0;
            return sc(t, function (t, r, i) {
                return n = !!e(t, r, i)
            }), n
        }

        function In(t, e, n, r) {
            var i = t.length;
            for (n = Ts(n), 0 > n && (n = -n > i ? 0 : i + n), r = r === Z || r > i ? i : Ts(r), 0 > r && (r += i), r = n > r ? 0 : As(r); r > n;)t[n++] = e;
            return t
        }

        function Nn(t, e) {
            var n = [];
            return sc(t, function (t, r, i) {
                e(t, r, i) && n.push(t)
            }), n
        }

        function Un(t, e, n, r, i) {
            var o = -1, a = t.length;
            for (n || (n = Ii), i || (i = []); ++o < a;) {
                var s = t[o];
                e > 0 && n(s) ? e > 1 ? Un(s, e - 1, n, r, i) : h(i, s) : r || (i[i.length] = s)
            }
            return i
        }

        function Fn(t, e) {
            return t && lc(t, e, zs)
        }

        function Hn(t, e) {
            return t && cc(t, e, zs)
        }

        function Vn(t, e) {
            return u(e, function (e) {
                return ns(t[e])
            })
        }

        function Wn(t, e) {
            e = Ui(e, t) ? [e] : Rr(e);
            for (var n = 0, r = e.length; null != t && r > n;)t = t[e[n++]];
            return n && n == r ? t : Z
        }

        function Bn(t, e, n) {
            var r = e(t);
            return Kc(t) ? r : h(r, n(t))
        }

        function zn(t, e) {
            return dl.call(t, e) || "object" == typeof t && e in t && null === Ci(t)
        }

        function Yn(t, e) {
            return e in Object(t)
        }

        function Gn(t, e, n) {
            return t >= Ul(e, n) && t < Nl(e, n)
        }

        function Xn(t, e, n) {
            for (var r = n ? c : l, i = t[0].length, o = t.length, a = o, s = Array(o), u = 1 / 0, h = []; a--;) {
                var d = t[a];
                a && e && (d = f(d, D(e))), u = Ul(d.length, u), s[a] = !n && (e || i >= 120 && d.length >= 120) ? new Ze(a && d) : Z
            }
            d = t[0];
            var p = -1, g = s[0];
            t:for (; ++p < i && h.length < u;) {
                var m = d[p], v = e ? e(m) : m;
                if (!(g ? Ke(g, v) : r(h, v, n))) {
                    for (a = o; --a;) {
                        var y = s[a];
                        if (!(y ? Ke(y, v) : r(t[a], v, n)))continue t
                    }
                    g && g.push(v), h.push(m)
                }
            }
            return h
        }

        function Zn(t, e, n, r) {
            return Fn(t, function (t, i, o) {
                e(r, n(t), i, o)
            }), r
        }

        function Kn(t, e, r) {
            Ui(e, t) || (e = Rr(e), t = zi(t, e), e = mo(e));
            var i = null == t ? t : t[e];
            return null == i ? Z : n(i, t, r)
        }

        function Jn(t, e, n, r, i) {
            return t === e ? !0 : null == t || null == e || !os(t) && !as(e) ? t !== t && e !== e : Qn(t, e, Jn, n, r, i)
        }

        function Qn(t, e, n, r, i, o) {
            var a = Kc(t), s = Kc(e), u = At, l = At;
            a || (u = Ti(t), u = u == Tt ? Nt : u), s || (l = Ti(e), l = l == Tt ? Nt : l);
            var c = u == Nt && !H(t), f = l == Nt && !H(e), h = u == l;
            if (h && !c)return o || (o = new Qe), a || bs(t) ? mi(t, e, n, r, i, o) : vi(t, e, u, n, r, i, o);
            if (!(i & dt)) {
                var d = c && dl.call(t, "__wrapped__"), p = f && dl.call(e, "__wrapped__");
                if (d || p) {
                    var g = d ? t.value() : t, m = p ? e.value() : e;
                    return o || (o = new Qe), n(g, m, r, i, o)
                }
            }
            return h ? (o || (o = new Qe), yi(t, e, n, r, i, o)) : !1
        }

        function tr(t, e, n, r) {
            var i = n.length, o = i, a = !r;
            if (null == t)return !o;
            for (t = Object(t); i--;) {
                var s = n[i];
                if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t))return !1
            }
            for (; ++i < o;) {
                s = n[i];
                var u = s[0], l = t[u], c = s[1];
                if (a && s[2]) {
                    if (l === Z && !(u in t))return !1
                } else {
                    var f = new Qe;
                    if (r)var h = r(l, c, u, t, e, f);
                    if (!(h === Z ? Jn(c, l, r, ht | dt, f) : h))return !1
                }
            }
            return !0
        }

        function er(t) {
            return "function" == typeof t ? t : null == t ? Nu : "object" == typeof t ? Kc(t) ? ar(t[0], t[1]) : or(t) : Bu(t)
        }

        function nr(t) {
            return Rl(Object(t))
        }

        function rr(t) {
            t = null == t ? t : Object(t);
            var e = [];
            for (var n in t)e.push(n);
            return e
        }

        function ir(t, e) {
            var n = -1, r = za(t) ? Array(t.length) : [];
            return sc(t, function (t, i, o) {
                r[++n] = e(t, i, o)
            }), r
        }

        function or(t) {
            var e = _i(t);
            return 1 == e.length && e[0][2] ? Vi(e[0][0], e[0][1]) : function (n) {
                return n === t || tr(n, t, e)
            }
        }

        function ar(t, e) {
            return Ui(t) && qi(e) ? Vi(t, e) : function (n) {
                var r = Vs(n, t);
                return r === Z && r === e ? Bs(n, t) : Jn(e, r, Z, ht | dt)
            }
        }

        function sr(t, e, n, r, i) {
            if (t !== e) {
                if (!Kc(e) && !bs(e))var a = Ys(e);
                o(a || e, function (o, s) {
                    if (a && (s = o, o = e[s]), os(o))i || (i = new Qe), ur(t, e, s, n, sr, r, i); else {
                        var u = r ? r(t[s], o, s + "", t, e, i) : Z;
                        u === Z && (u = o), hn(t, s, u)
                    }
                })
            }
        }

        function ur(t, e, n, r, i, o, a) {
            var s = t[n], u = e[n], l = a.get(u);
            if (l)return void hn(t, n, l);
            var c = o ? o(s, u, n + "", t, e, a) : Z, f = c === Z;
            f && (c = u, Kc(u) || bs(u) ? Kc(s) ? c = s : Ya(s) ? c = Gr(s) : (f = !1, c = Dn(u, !0)) : gs(u) || Wa(u) ? Wa(s) ? c = Ms(s) : !os(s) || r && ns(s) ? (f = !1, c = Dn(u, !0)) : c = s : f = !1), a.set(u, c), f && i(c, u, r, o, a), a["delete"](u), hn(t, n, c)
        }

        function lr(t, e) {
            var n = t.length;
            if (n)return e += 0 > e ? n : 0, L(e, n) ? t[e] : Z
        }

        function cr(t, e, n) {
            var r = -1;
            e = f(e.length ? e : [Nu], D(xi()));
            var i = ir(t, function (t, n, i) {
                var o = f(e, function (e) {
                    return e(t)
                });
                return {criteria: o, index: ++r, value: t}
            });
            return _(i, function (t, e) {
                return P(t, e, n)
            })
        }

        function fr(t, e) {
            return t = Object(t), d(e, function (e, n) {
                return n in t && (e[n] = t[n]), e
            }, {})
        }

        function hr(t, e) {
            for (var n = -1, r = wi(t), i = r.length, o = {}; ++n < i;) {
                var a = r[n], s = t[a];
                e(s, a) && (o[a] = s)
            }
            return o
        }

        function dr(t) {
            return function (e) {
                return null == e ? Z : e[t]
            }
        }

        function pr(t) {
            return function (e) {
                return Wn(e, t)
            }
        }

        function gr(t, e, n, r) {
            var i = r ? w : $, o = -1, a = e.length, s = t;
            for (n && (s = f(t, D(n))); ++o < a;)for (var u = 0, l = e[o], c = n ? n(l) : l; (u = i(s, c, u, r)) > -1;)s !== t && El.call(s, u, 1), El.call(t, u, 1);
            return t
        }

        function mr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--;) {
                var i = e[n];
                if (r == n || i != o) {
                    var o = i;
                    if (L(i))El.call(t, i, 1); else if (Ui(i, t))delete t[i]; else {
                        var a = Rr(i), s = zi(t, a);
                        null != s && delete s[mo(a)]
                    }
                }
            }
            return t
        }

        function vr(t, e) {
            return t + Ol(Hl() * (e - t + 1))
        }

        function yr(t, e, n, r) {
            for (var i = -1, o = Nl(Ml((e - t) / (n || 1)), 0), a = Array(o); o--;)a[r ? o : ++i] = t, t += n;
            return a
        }

        function $r(t, e) {
            var n = "";
            if (!t || 1 > e || e > xt)return n;
            do e % 2 && (n += t), e = Ol(e / 2), e && (t += t); while (e);
            return n
        }

        function wr(t, e, n, r) {
            e = Ui(e, t) ? [e] : Rr(e);
            for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                var u = e[i];
                if (os(s)) {
                    var l = n;
                    if (i != a) {
                        var c = s[u];
                        l = r ? r(c, u, s) : Z, l === Z && (l = null == c ? L(e[i + 1]) ? [] : {} : c)
                    }
                    dn(s, u, l)
                }
                s = s[u]
            }
            return t
        }

        function br(t, e, n) {
            var r = -1, i = t.length;
            0 > e && (e = -e > i ? 0 : i + e), n = n > i ? i : n, 0 > n && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var o = Array(i); ++r < i;)o[r] = t[r + e];
            return o
        }

        function xr(t, e) {
            var n;
            return sc(t, function (t, r, i) {
                return n = e(t, r, i), !n
            }), !!n
        }

        function _r(t, e, n) {
            var r = 0, i = t ? t.length : r;
            if ("number" == typeof e && e === e && Dt >= i) {
                for (; i > r;) {
                    var o = r + i >>> 1, a = t[o];
                    (n ? e >= a : e > a) && null !== a ? r = o + 1 : i = o
                }
                return i
            }
            return kr(t, e, Nu, n)
        }

        function kr(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, u = e === Z; o > i;) {
                var l = Ol((i + o) / 2), c = n(t[l]), f = c !== Z, h = c === c;
                if (a)var d = h || r; else d = s ? h && f && (r || null != c) : u ? h && (r || f) : null == c ? !1 : r ? e >= c : e > c;
                d ? i = l + 1 : o = l
            }
            return Ul(o, Ct)
        }

        function Sr(t) {
            return Cr(t)
        }

        function Cr(t, e) {
            for (var n = 0, r = t.length, i = t[0], o = e ? e(i) : i, a = o, s = 1, u = [i]; ++n < r;)i = t[n], o = e ? e(i) : i, La(o, a) || (a = o, u[s++] = i);
            return u
        }

        function Dr(t, e, n) {
            var r = -1, i = l, o = t.length, a = !0, s = [], u = s;
            if (n)a = !1, i = c; else if (o >= J) {
                var f = e ? null : hc(t);
                if (f)return B(f);
                a = !1, i = Ke, u = new Ze
            } else u = e ? [] : s;
            t:for (; ++r < o;) {
                var h = t[r], d = e ? e(h) : h;
                if (a && d === d) {
                    for (var p = u.length; p--;)if (u[p] === d)continue t;
                    e && u.push(d), s.push(h)
                } else i(u, d, n) || (u !== s && u.push(d), s.push(h))
            }
            return s
        }

        function Tr(t, e) {
            e = Ui(e, t) ? [e] : Rr(e), t = zi(t, e);
            var n = mo(e);
            return null != t && Ws(t, n) ? delete t[n] : !0
        }

        function Ar(t, e, n, r) {
            return wr(t, e, n(Wn(t, e)), r)
        }

        function Er(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t););
            return n ? br(t, r ? 0 : o, r ? o + 1 : i) : br(t, r ? o + 1 : 0, r ? i : o)
        }

        function Mr(t, e) {
            var n = t;
            return n instanceof Ie && (n = n.value()), d(e, function (t, e) {
                return e.func.apply(e.thisArg, h([t], e.args))
            }, n)
        }

        function Or(t, e, n) {
            for (var r = -1, i = t.length; ++r < i;)var o = o ? h(Mn(o, t[r], e, n), Mn(t[r], o, e, n)) : t[r];
            return o && o.length ? Dr(o, e, n) : []
        }

        function Pr(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                var s = o > r ? e[r] : Z;
                n(a, t[r], s)
            }
            return a
        }

        function jr(t) {
            return Ya(t) ? t : []
        }

        function Ir(t) {
            return "function" == typeof t ? t : Nu
        }

        function Rr(t) {
            return Kc(t) ? t : vc(t)
        }

        function Nr(t, e, n) {
            var r = t.length;
            return n = n === Z ? r : n, !e && n >= r ? t : br(t, e, n)
        }

        function Ur(t, e) {
            if (e)return t.slice();
            var n = new t.constructor(t.length);
            return t.copy(n), n
        }

        function Fr(t) {
            var e = new t.constructor(t.byteLength);
            return new xl(e).set(new xl(t)), e
        }

        function Hr(t, e) {
            var n = e ? Fr(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength)
        }

        function Lr(e, n, r) {
            var i = n ? r(V(e), !0) : V(e);
            return d(i, t, new e.constructor)
        }

        function qr(t) {
            var e = new t.constructor(t.source, _e.exec(t));
            return e.lastIndex = t.lastIndex, e
        }

        function Vr(t, n, r) {
            var i = n ? r(B(t), !0) : B(t);
            return d(i, e, new t.constructor)
        }

        function Wr(t) {
            return oc ? Object(oc.call(t)) : {}
        }

        function Br(t, e) {
            var n = e ? Fr(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        }

        function zr(t, e, n, r) {
            for (var i = -1, o = t.length, a = n.length, s = -1, u = e.length, l = Nl(o - a, 0), c = Array(u + l), f = !r; ++s < u;)c[s] = e[s];
            for (; ++i < a;)(f || o > i) && (c[n[i]] = t[i]);
            for (; l--;)c[s++] = t[i++];
            return c
        }

        function Yr(t, e, n, r) {
            for (var i = -1, o = t.length, a = -1, s = n.length, u = -1, l = e.length, c = Nl(o - s, 0), f = Array(c + l), h = !r; ++i < c;)f[i] = t[i];
            for (var d = i; ++u < l;)f[d + u] = e[u];
            for (; ++a < s;)(h || o > i) && (f[d + n[a]] = t[i++]);
            return f
        }

        function Gr(t, e) {
            var n = -1, r = t.length;
            for (e || (e = Array(r)); ++n < r;)e[n] = t[n];
            return e
        }

        function Xr(t, e, n, r) {
            n || (n = {});
            for (var i = -1, o = e.length; ++i < o;) {
                var a = e[i], s = r ? r(n[a], t[a], a, n, t) : t[a];
                dn(n, a, s)
            }
            return n
        }

        function Zr(t, e) {
            return Xr(t, Di(t), e)
        }

        function Kr(t, e) {
            return function (n, i) {
                var o = Kc(n) ? r : pn, a = e ? e() : {};
                return o(n, t, xi(i), a)
            }
        }

        function Jr(t) {
            return Ma(function (e, n) {
                var r = -1, i = n.length, o = i > 1 ? n[i - 1] : Z, a = i > 2 ? n[2] : Z;
                for (o = "function" == typeof o ? (i--, o) : Z, a && Ni(n[0], n[1], a) && (o = 3 > i ? Z : o, i = 1), e = Object(e); ++r < i;) {
                    var s = n[r];
                    s && t(e, s, r, o)
                }
                return e
            })
        }

        function Qr(t, e) {
            return function (n, r) {
                if (null == n)return n;
                if (!za(n))return t(n, r);
                for (var i = n.length, o = e ? i : -1, a = Object(n); (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }

        function ti(t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), s = a.length; s--;) {
                    var u = a[t ? s : ++i];
                    if (n(o[u], u, o) === !1)break
                }
                return e
            }
        }

        function ei(t, e, n) {
            function r() {
                var e = this && this !== Ln && this instanceof r ? o : t;
                return e.apply(i ? n : this, arguments)
            }

            var i = e & nt, o = ii(t);
            return r
        }

        function ni(t) {
            return function (e) {
                e = Ps(e);
                var n = bn.test(e) ? Y(e) : Z, r = n ? n[0] : e.charAt(0), i = n ? Nr(n, 1).join("") : e.slice(1);
                return r[t]() + i
            }
        }

        function ri(t) {
            return function (e) {
                return d(Pu(du(e).replace(vn, "")), t, "")
            }
        }

        function ii(t) {
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = An(t.prototype), r = t.apply(n, e);
                return os(r) ? r : n
            }
        }

        function oi(t, e, r) {
            function i() {
                for (var a = arguments.length, s = Array(a), u = a, l = Si(i); u--;)s[u] = arguments[u];
                var c = 3 > a && s[0] !== l && s[a - 1] !== l ? [] : W(s, l);
                if (a -= c.length, r > a)return di(t, e, si, i.placeholder, Z, s, c, Z, Z, r - a);
                var f = this && this !== Ln && this instanceof i ? o : t;
                return n(f, this, s)
            }

            var o = ii(t);
            return i
        }

        function ai(t) {
            return Ma(function (e) {
                e = Un(e, 1);
                var n = e.length, r = n, i = je.prototype.thru;
                for (t && e.reverse(); r--;) {
                    var o = e[r];
                    if ("function" != typeof o)throw new ul(Q);
                    if (i && !a && "wrapper" == bi(o))var a = new je([], !0)
                }
                for (r = a ? r : n; ++r < n;) {
                    o = e[r];
                    var s = bi(o), u = "wrapper" == s ? dc(o) : Z;
                    a = u && Hi(u[0]) && u[1] == (lt | ot | st | ct) && !u[4].length && 1 == u[9] ? a[bi(u[0])].apply(a, u[3]) : 1 == o.length && Hi(o) ? a[s]() : a.thru(o)
                }
                return function () {
                    var t = arguments, r = t[0];
                    if (a && 1 == t.length && Kc(r) && r.length >= J)return a.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;)o = e[i].call(this, o);
                    return o
                }
            })
        }

        function si(t, e, n, r, i, o, a, s, u, l) {
            function c() {
                for (var v = arguments.length, y = v, $ = Array(v); y--;)$[y] = arguments[y];
                if (p)var w = Si(c), b = j($, w);
                if (r && ($ = zr($, r, i, p)), o && ($ = Yr($, o, a, p)), v -= b, p && l > v) {
                    var x = W($, w);
                    return di(t, e, si, c.placeholder, n, $, x, s, u, l - v)
                }
                var _ = h ? n : this, k = d ? _[t] : t;
                return v = $.length, s ? $ = Yi($, s) : g && v > 1 && $.reverse(), f && v > u && ($.length = u), this && this !== Ln && this instanceof c && (k = m || ii(k)), k.apply(_, $)
            }

            var f = e & lt, h = e & nt, d = e & rt, p = e & (ot | at), g = e & ft, m = d ? Z : ii(t);
            return c
        }

        function ui(t, e) {
            return function (n, r) {
                return Zn(n, t, e(r), {})
            }
        }

        function li(t) {
            return Ma(function (e) {
                return e = 1 == e.length && Kc(e[0]) ? f(e[0], D(xi())) : f(Un(e, 1, Ri), D(xi())), Ma(function (r) {
                    var i = this;
                    return t(e, function (t) {
                        return n(t, i, r)
                    })
                })
            })
        }

        function ci(t, e) {
            e = e === Z ? " " : e + "";
            var n = e.length;
            if (2 > n)return n ? $r(e, t) : e;
            var r = $r(e, Ml(t / z(e)));
            return bn.test(e) ? Nr(Y(r), 0, t).join("") : r.slice(0, t)
        }

        function fi(t, e, r, i) {
            function o() {
                for (var e = -1, u = arguments.length, l = -1, c = i.length, f = Array(c + u), h = this && this !== Ln && this instanceof o ? s : t; ++l < c;)f[l] = i[l];
                for (; u--;)f[l++] = arguments[++e];
                return n(h, a ? r : this, f)
            }

            var a = e & nt, s = ii(t);
            return o
        }

        function hi(t) {
            return function (e, n, r) {
                return r && "number" != typeof r && Ni(e, n, r) && (n = r = Z), e = Es(e), e = e === e ? e : 0, n === Z ? (n = e, e = 0) : n = Es(n) || 0, r = r === Z ? n > e ? 1 : -1 : Es(r) || 0, yr(e, n, r, t)
            }
        }

        function di(t, e, n, r, i, o, a, s, u, l) {
            var c = e & ot, f = c ? a : Z, h = c ? Z : a, d = c ? o : Z, p = c ? Z : o;
            e |= c ? st : ut, e &= ~(c ? ut : st), e & it || (e &= ~(nt | rt));
            var g = [t, e, i, d, f, p, h, s, u, l], m = n.apply(Z, g);
            return Hi(t) && mc(m, g), m.placeholder = r, m
        }

        function pi(t) {
            var e = al[t];
            return function (t, n) {
                if (t = Es(t), n = Ts(n)) {
                    var r = (Ps(t) + "e").split("e"), i = e(r[0] + "e" + (+r[1] + n));
                    return r = (Ps(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                }
                return e(t)
            }
        }

        function gi(t, e, n, r, i, o, a, s) {
            var u = e & rt;
            if (!u && "function" != typeof t)throw new ul(Q);
            var l = r ? r.length : 0;
            if (l || (e &= ~(st | ut), r = i = Z), a = a === Z ? a : Nl(Ts(a), 0), s = s === Z ? s : Ts(s), l -= i ? i.length : 0, e & ut) {
                var c = r, f = i;
                r = i = Z
            }
            var h = u ? Z : dc(t), d = [t, e, n, r, i, c, f, o, a, s];
            if (h && Wi(d, h), t = d[0], e = d[1], n = d[2], r = d[3], i = d[4], s = d[9] = null == d[9] ? u ? 0 : t.length : Nl(d[9] - l, 0), !s && e & (ot | at) && (e &= ~(ot | at)), e && e != nt)p = e == ot || e == at ? oi(t, e, s) : e != st && e != (nt | st) || i.length ? si.apply(Z, d) : fi(t, e, n, r); else var p = ei(t, e, n);
            var g = h ? fc : mc;
            return g(p, d)
        }

        function mi(t, e, n, r, i, o) {
            var a = -1, s = i & dt, u = i & ht, l = t.length, c = e.length;
            if (l != c && !(s && c > l))return !1;
            var f = o.get(t);
            if (f)return f == e;
            var h = !0;
            for (o.set(t, e); ++a < l;) {
                var d = t[a], p = e[a];
                if (r)var m = s ? r(p, d, a, e, t, o) : r(d, p, a, t, e, o);
                if (m !== Z) {
                    if (m)continue;
                    h = !1;
                    break
                }
                if (u) {
                    if (!g(e, function (t) {
                            return d === t || n(d, t, r, i, o)
                        })) {
                        h = !1;
                        break
                    }
                } else if (d !== p && !n(d, p, r, i, o)) {
                    h = !1;
                    break
                }
            }
            return o["delete"](t), h
        }

        function vi(t, e, n, r, i, o, a) {
            switch (n) {
                case zt:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)return !1;
                    t = t.buffer, e = e.buffer;
                case Bt:
                    return t.byteLength == e.byteLength && r(new xl(t), new xl(e)) ? !0 : !1;
                case Et:
                case Mt:
                    return +t == +e;
                case Ot:
                    return t.name == e.name && t.message == e.message;
                case Rt:
                    return t != +t ? e != +e : t == +e;
                case Ft:
                case Lt:
                    return t == e + "";
                case It:
                    var s = V;
                case Ht:
                    var u = o & dt;
                    if (s || (s = B), t.size != e.size && !u)return !1;
                    var l = a.get(t);
                    return l ? l == e : (o |= ht, a.set(t, e), mi(s(t), s(e), r, i, o, a));
                case qt:
                    if (oc)return oc.call(t) == oc.call(e)
            }
            return !1
        }

        function yi(t, e, n, r, i, o) {
            var a = i & dt, s = zs(t), u = s.length, l = zs(e), c = l.length;
            if (u != c && !a)return !1;
            for (var f = u; f--;) {
                var h = s[f];
                if (!(a ? h in e : zn(e, h)))return !1
            }
            var d = o.get(t);
            if (d)return d == e;
            var p = !0;
            o.set(t, e);
            for (var g = a; ++f < u;) {
                h = s[f];
                var m = t[h], v = e[h];
                if (r)var y = a ? r(v, m, h, e, t, o) : r(m, v, h, t, e, o);
                if (!(y === Z ? m === v || n(m, v, r, i, o) : y)) {
                    p = !1;
                    break
                }
                g || (g = "constructor" == h)
            }
            if (p && !g) {
                var $ = t.constructor, w = e.constructor;
                $ != w && "constructor" in t && "constructor" in e && !("function" == typeof $ && $ instanceof $ && "function" == typeof w && w instanceof w) && (p = !1)
            }
            return o["delete"](t), p
        }

        function $i(t) {
            return Bn(t, zs, Di)
        }

        function wi(t) {
            return Bn(t, Ys, gc)
        }

        function bi(t) {
            for (var e = t.name + "", n = Jl[e], r = dl.call(Jl, e) ? n.length : 0; r--;) {
                var i = n[r], o = i.func;
                if (null == o || o == t)return i.name
            }
            return e
        }

        function xi() {
            var t = Ae.iteratee || Uu;
            return t = t === Uu ? er : t, arguments.length ? t(arguments[0], arguments[1]) : t
        }

        function _i(t) {
            for (var e = eu(t), n = e.length; n--;)e[n][2] = qi(e[n][1]);
            return e
        }

        function ki(t, e) {
            var n = t[e];
            return fs(n) ? n : Z
        }

        function Si(t) {
            var e = dl.call(Ae, "placeholder") ? Ae : t;
            return e.placeholder
        }

        function Ci(t) {
            return Pl(Object(t))
        }

        function Di(t) {
            return Sl(Object(t))
        }

        function Ti(t) {
            return ml.call(t)
        }

        function Ai(t, e, n) {
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r], a = o.size;
                switch (o.type) {
                    case"drop":
                        t += a;
                        break;
                    case"dropRight":
                        e -= a;
                        break;
                    case"take":
                        e = Ul(e, t + a);
                        break;
                    case"takeRight":
                        t = Nl(t, e - a)
                }
            }
            return {start: t, end: e}
        }

        function Ei(t, e, n) {
            e = Ui(e, t) ? [e] : Rr(e);
            for (var r, i = -1, o = e.length; ++i < o;) {
                var a = e[i];
                if (!(r = null != t && n(t, a)))break;
                t = t[a]
            }
            if (r)return r;
            var o = t ? t.length : 0;
            return !!o && is(o) && L(a, o) && (Kc(t) || $s(t) || Wa(t))
        }

        function Mi(t) {
            var e = t.length, n = t.constructor(e);
            return e && "string" == typeof t[0] && dl.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }

        function Oi(t) {
            return "function" != typeof t.constructor || Li(t) ? {} : An(Ci(t))
        }

        function Pi(t, e, n, r) {
            var i = t.constructor;
            switch (e) {
                case Bt:
                    return Fr(t);
                case Et:
                case Mt:
                    return new i(+t);
                case zt:
                    return Hr(t, r);
                case Yt:
                case Gt:
                case Xt:
                case Zt:
                case Kt:
                case Jt:
                case Qt:
                case te:
                case ee:
                    return Br(t, r);
                case It:
                    return Lr(t, r, n);
                case Rt:
                case Lt:
                    return new i(t);
                case Ft:
                    return qr(t);
                case Ht:
                    return Vr(t, r, n);
                case qt:
                    return Wr(t)
            }
        }

        function ji(t) {
            var e = t ? t.length : Z;
            return is(e) && (Kc(t) || $s(t) || Wa(t)) ? S(e, String) : null
        }

        function Ii(t) {
            return Ya(t) && (Kc(t) || Wa(t))
        }

        function Ri(t) {
            return Kc(t) && !(2 == t.length && !ns(t[0]))
        }

        function Ni(t, e, n) {
            if (!os(n))return !1;
            var r = typeof e;
            return ("number" == r ? za(n) && L(e, n.length) : "string" == r && e in n) ? La(n[e], t) : !1
        }

        function Ui(t, e) {
            var n = typeof t;
            return "number" == n || "symbol" == n ? !0 : !Kc(t) && (ws(t) || de.test(t) || !he.test(t) || null != e && t in Object(e))
        }

        function Fi(t) {
            var e = typeof t;
            return "number" == e || "boolean" == e || "string" == e && "__proto__" != t || null == t
        }

        function Hi(t) {
            var e = bi(t), n = Ae[e];
            if ("function" != typeof n || !(e in Ie.prototype))return !1;
            if (t === n)return !0;
            var r = dc(n);
            return !!r && t === r[0]
        }

        function Li(t) {
            var e = t && t.constructor, n = "function" == typeof e && e.prototype || cl;
            return t === n
        }

        function qi(t) {
            return t === t && !os(t)
        }

        function Vi(t, e) {
            return function (n) {
                return null == n ? !1 : n[t] === e && (e !== Z || t in Object(n))
            }
        }

        function Wi(t, e) {
            var n = t[1], r = e[1], i = n | r, o = (nt | rt | lt) > i, a = r == lt && n == ot || r == lt && n == ct && t[7].length <= e[8] || r == (lt | ct) && e[7].length <= e[8] && n == ot;
            if (!o && !a)return t;
            r & nt && (t[2] = e[2], i |= n & nt ? 0 : it);
            var s = e[3];
            if (s) {
                var u = t[3];
                t[3] = u ? zr(u, s, e[4]) : s, t[4] = u ? W(t[3], et) : e[4]
            }
            return s = e[5], s && (u = t[5], t[5] = u ? Yr(u, s, e[6]) : s, t[6] = u ? W(t[5], et) : e[6]), s = e[7], s && (t[7] = s), r & lt && (t[8] = null == t[8] ? e[8] : Ul(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
        }

        function Bi(t, e, n, r, i, o) {
            return os(t) && os(e) && sr(t, e, Z, Bi, o.set(e, t)), t
        }

        function zi(t, e) {
            return 1 == e.length ? t : Wn(t, br(e, 0, -1))
        }

        function Yi(t, e) {
            for (var n = t.length, r = Ul(e.length, n), i = Gr(t); r--;) {
                var o = e[r];
                t[r] = L(o, n) ? i[o] : Z
            }
            return t
        }

        function Gi(t) {
            return "string" == typeof t || ws(t) ? t : t + ""
        }

        function Xi(t) {
            if (null != t) {
                try {
                    return hl.call(t)
                } catch (e) {
                }
                try {
                    return t + ""
                } catch (e) {
                }
            }
            return ""
        }

        function Zi(t) {
            if (t instanceof Ie)return t.clone();
            var e = new je(t.__wrapped__, t.__chain__);
            return e.__actions__ = Gr(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
        }

        function Ki(t, e, n) {
            e = (n ? Ni(t, e, n) : e === Z) ? 1 : Nl(Ts(e), 0);
            var r = t ? t.length : 0;
            if (!r || 1 > e)return [];
            for (var i = 0, o = 0, a = Array(Ml(r / e)); r > i;)a[o++] = br(t, i, i += e);
            return a
        }

        function Ji(t) {
            for (var e = -1, n = t ? t.length : 0, r = 0, i = []; ++e < n;) {
                var o = t[e];
                o && (i[r++] = o)
            }
            return i
        }

        function Qi() {
            var t = arguments.length, e = Ra(arguments[0]);
            if (2 > t)return t ? Gr(e) : [];
            for (var n = Array(t - 1); t--;)n[t - 1] = arguments[t];
            return i(e, Un(n, 1))
        }

        function to(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Z ? 1 : Ts(e), br(t, 0 > e ? 0 : e, r)) : []
        }

        function eo(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Z ? 1 : Ts(e), e = r - e, br(t, 0, 0 > e ? 0 : e)) : []
        }

        function no(t, e) {
            return t && t.length ? Er(t, xi(e, 3), !0, !0) : []
        }

        function ro(t, e) {
            return t && t.length ? Er(t, xi(e, 3), !0) : []
        }

        function io(t, e, n, r) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && Ni(t, e, n) && (n = 0, r = i), In(t, e, n, r)) : []
        }

        function oo(t, e) {
            return t && t.length ? y(t, xi(e, 3)) : -1
        }

        function ao(t, e) {
            return t && t.length ? y(t, xi(e, 3), !0) : -1
        }

        function so(t) {
            var e = t ? t.length : 0;
            return e ? Un(t, 1) : []
        }

        function uo(t) {
            var e = t ? t.length : 0;
            return e ? Un(t, bt) : []
        }

        function lo(t, e) {
            var n = t ? t.length : 0;
            return n ? (e = e === Z ? 1 : Ts(e), Un(t, e)) : []
        }

        function co(t) {
            for (var e = -1, n = t ? t.length : 0, r = {}; ++e < n;) {
                var i = t[e];
                r[i[0]] = i[1]
            }
            return r
        }

        function fo(t) {
            return t && t.length ? t[0] : Z
        }

        function ho(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n = Ts(n), 0 > n && (n = Nl(r + n, 0)), $(t, e, n)) : -1
        }

        function po(t) {
            return eo(t, 1)
        }

        function go(t, e) {
            return t ? Il.call(t, e) : ""
        }

        function mo(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : Z
        }

        function vo(t, e, n) {
            var r = t ? t.length : 0;
            if (!r)return -1;
            var i = r;
            if (n !== Z && (i = Ts(n), i = (0 > i ? Nl(r + i, 0) : Ul(i, r - 1)) + 1), e !== e)return F(t, i, !0);
            for (; i--;)if (t[i] === e)return i;
            return -1
        }

        function yo(t, e) {
            return t && t.length ? lr(t, Ts(e)) : Z
        }

        function $o(t, e) {
            return t && t.length && e && e.length ? gr(t, e) : t
        }

        function wo(t, e, n) {
            return t && t.length && e && e.length ? gr(t, e, xi(n)) : t
        }

        function bo(t, e, n) {
            return t && t.length && e && e.length ? gr(t, e, Z, n) : t
        }

        function xo(t, e) {
            var n = [];
            if (!t || !t.length)return n;
            var r = -1, i = [], o = t.length;
            for (e = xi(e, 3); ++r < o;) {
                var a = t[r];
                e(a, r, t) && (n.push(a), i.push(r))
            }
            return mr(t, i), n
        }

        function _o(t) {
            return t ? ql.call(t) : t
        }

        function ko(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && Ni(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : Ts(e), n = n === Z ? r : Ts(n)), br(t, e, n)) : []
        }

        function So(t, e) {
            return _r(t, e)
        }

        function Co(t, e, n) {
            return kr(t, e, xi(n))
        }

        function Do(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = _r(t, e);
                if (n > r && La(t[r], e))return r
            }
            return -1
        }

        function To(t, e) {
            return _r(t, e, !0)
        }

        function Ao(t, e, n) {
            return kr(t, e, xi(n), !0)
        }

        function Eo(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = _r(t, e, !0) - 1;
                if (La(t[r], e))return r
            }
            return -1
        }

        function Mo(t) {
            return t && t.length ? Sr(t) : []
        }

        function Oo(t, e) {
            return t && t.length ? Cr(t, xi(e)) : []
        }

        function Po(t) {
            return to(t, 1)
        }

        function jo(t, e, n) {
            return t && t.length ? (e = n || e === Z ? 1 : Ts(e), br(t, 0, 0 > e ? 0 : e)) : []
        }

        function Io(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === Z ? 1 : Ts(e), e = r - e, br(t, 0 > e ? 0 : e, r)) : []
        }

        function Ro(t, e) {
            return t && t.length ? Er(t, xi(e, 3), !1, !0) : []
        }

        function No(t, e) {
            return t && t.length ? Er(t, xi(e, 3)) : []
        }

        function Uo(t) {
            return t && t.length ? Dr(t) : []
        }

        function Fo(t, e) {
            return t && t.length ? Dr(t, xi(e)) : []
        }

        function Ho(t, e) {
            return t && t.length ? Dr(t, Z, e) : [];
        }

        function Lo(t) {
            if (!t || !t.length)return [];
            var e = 0;
            return t = u(t, function (t) {
                return Ya(t) ? (e = Nl(t.length, e), !0) : void 0
            }), S(e, function (e) {
                return f(t, dr(e))
            })
        }

        function qo(t, e) {
            if (!t || !t.length)return [];
            var r = Lo(t);
            return null == e ? r : f(r, function (t) {
                return n(e, Z, t)
            })
        }

        function Vo(t, e) {
            return Pr(t || [], e || [], dn)
        }

        function Wo(t, e) {
            return Pr(t || [], e || [], wr)
        }

        function Bo(t) {
            var e = Ae(t);
            return e.__chain__ = !0, e
        }

        function zo(t, e) {
            return e(t), t
        }

        function Yo(t, e) {
            return e(t)
        }

        function Go() {
            return Bo(this)
        }

        function Xo() {
            return new je(this.value(), this.__chain__)
        }

        function Zo() {
            this.__values__ === Z && (this.__values__ = Ds(this.value()));
            var t = this.__index__ >= this.__values__.length, e = t ? Z : this.__values__[this.__index__++];
            return {done: t, value: e}
        }

        function Ko() {
            return this
        }

        function Jo(t) {
            for (var e, n = this; n instanceof Pe;) {
                var r = Zi(n);
                r.__index__ = 0, r.__values__ = Z, e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t, e
        }

        function Qo() {
            var t = this.__wrapped__;
            if (t instanceof Ie) {
                var e = t;
                return this.__actions__.length && (e = new Ie(this)), e = e.reverse(), e.__actions__.push({
                    func: Yo,
                    args: [_o],
                    thisArg: Z
                }), new je(e, this.__chain__)
            }
            return this.thru(_o)
        }

        function ta() {
            return Mr(this.__wrapped__, this.__actions__)
        }

        function ea(t, e, n) {
            var r = Kc(t) ? s : jn;
            return n && Ni(t, e, n) && (e = Z), r(t, xi(e, 3))
        }

        function na(t, e) {
            var n = Kc(t) ? u : Nn;
            return n(t, xi(e, 3))
        }

        function ra(t, e) {
            if (e = xi(e, 3), Kc(t)) {
                var n = y(t, e);
                return n > -1 ? t[n] : Z
            }
            return v(t, e, sc)
        }

        function ia(t, e) {
            if (e = xi(e, 3), Kc(t)) {
                var n = y(t, e, !0);
                return n > -1 ? t[n] : Z
            }
            return v(t, e, uc)
        }

        function oa(t, e) {
            return Un(fa(t, e), 1)
        }

        function aa(t, e) {
            return Un(fa(t, e), bt)
        }

        function sa(t, e, n) {
            return n = n === Z ? 1 : Ts(n), Un(fa(t, e), n)
        }

        function ua(t, e) {
            return "function" == typeof e && Kc(t) ? o(t, e) : sc(t, xi(e))
        }

        function la(t, e) {
            return "function" == typeof e && Kc(t) ? a(t, e) : uc(t, xi(e))
        }

        function ca(t, e, n, r) {
            t = za(t) ? t : su(t), n = n && !r ? Ts(n) : 0;
            var i = t.length;
            return 0 > n && (n = Nl(i + n, 0)), $s(t) ? i >= n && t.indexOf(e, n) > -1 : !!i && $(t, e, n) > -1
        }

        function fa(t, e) {
            var n = Kc(t) ? f : ir;
            return n(t, xi(e, 3))
        }

        function ha(t, e, n, r) {
            return null == t ? [] : (Kc(e) || (e = null == e ? [] : [e]), n = r ? Z : n, Kc(n) || (n = null == n ? [] : [n]), cr(t, e, n))
        }

        function da(t, e, n) {
            var r = Kc(t) ? d : x, i = arguments.length < 3;
            return r(t, xi(e, 4), n, i, sc)
        }

        function pa(t, e, n) {
            var r = Kc(t) ? p : x, i = arguments.length < 3;
            return r(t, xi(e, 4), n, i, uc)
        }

        function ga(t, e) {
            var n = Kc(t) ? u : Nn;
            return e = xi(e, 3), n(t, function (t, n, r) {
                return !e(t, n, r)
            })
        }

        function ma(t) {
            var e = za(t) ? t : su(t), n = e.length;
            return n > 0 ? e[vr(0, n - 1)] : Z
        }

        function va(t, e, n) {
            var r = -1, i = Ds(t), o = i.length, a = o - 1;
            for (e = (n ? Ni(t, e, n) : e === Z) ? 1 : $n(Ts(e), 0, o); ++r < e;) {
                var s = vr(r, a), u = i[s];
                i[s] = i[r], i[r] = u
            }
            return i.length = e, i
        }

        function ya(t) {
            return va(t, St)
        }

        function $a(t) {
            if (null == t)return 0;
            if (za(t)) {
                var e = t.length;
                return e && $s(t) ? z(t) : e
            }
            if (as(t)) {
                var n = Ti(t);
                if (n == It || n == Ht)return t.size
            }
            return zs(t).length
        }

        function wa(t, e, n) {
            var r = Kc(t) ? g : xr;
            return n && Ni(t, e, n) && (e = Z), r(t, xi(e, 3))
        }

        function ba(t, e) {
            if ("function" != typeof e)throw new ul(Q);
            return t = Ts(t), function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }

        function xa(t, e, n) {
            return e = n ? Z : e, e = t && null == e ? t.length : e, gi(t, lt, Z, Z, Z, Z, e)
        }

        function _a(t, e) {
            var n;
            if ("function" != typeof e)throw new ul(Q);
            return t = Ts(t), function () {
                return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = Z), n
            }
        }

        function ka(t, e, n) {
            e = n ? Z : e;
            var r = gi(t, ot, Z, Z, Z, Z, Z, e);
            return r.placeholder = ka.placeholder, r
        }

        function Sa(t, e, n) {
            e = n ? Z : e;
            var r = gi(t, at, Z, Z, Z, Z, Z, e);
            return r.placeholder = Sa.placeholder, r
        }

        function Ca(t, e, n) {
            function r(e) {
                var n = h, r = d;
                return h = d = Z, y = e, g = t.apply(r, n)
            }

            function i(t) {
                return y = t, m = Al(s, e), $ ? r(t) : g
            }

            function o(t) {
                var n = t - v, r = t - y, i = e - n;
                return w ? Ul(i, p - r) : i
            }

            function a(t) {
                var n = t - v, r = t - y;
                return !v || n >= e || 0 > n || w && r >= p
            }

            function s() {
                var t = qc();
                return a(t) ? u(t) : void(m = Al(s, o(t)))
            }

            function u(t) {
                return _l(m), m = Z, b && h ? r(t) : (h = d = Z, g)
            }

            function l() {
                m !== Z && _l(m), v = y = 0, h = d = m = Z
            }

            function c() {
                return m === Z ? g : u(qc())
            }

            function f() {
                var t = qc(), n = a(t);
                if (h = arguments, d = this, v = t, n) {
                    if (m === Z)return i(v);
                    if (w)return _l(m), m = Al(s, e), r(v)
                }
                return m === Z && (m = Al(s, e)), g
            }

            var h, d, p, g, m, v = 0, y = 0, $ = !1, w = !1, b = !0;
            if ("function" != typeof t)throw new ul(Q);
            return e = Es(e) || 0, os(n) && ($ = !!n.leading, w = "maxWait" in n, p = w ? Nl(Es(n.maxWait) || 0, e) : p, b = "trailing" in n ? !!n.trailing : b), f.cancel = l, f.flush = c, f
        }

        function Da(t) {
            return gi(t, ft)
        }

        function Ta(t, e) {
            if ("function" != typeof t || e && "function" != typeof e)throw new ul(Q);
            var n = function () {
                var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
                if (o.has(i))return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a), a
            };
            return n.cache = new (Ta.Cache || We), n
        }

        function Aa(t) {
            if ("function" != typeof t)throw new ul(Q);
            return function () {
                return !t.apply(this, arguments)
            }
        }

        function Ea(t) {
            return _a(2, t)
        }

        function Ma(t, e) {
            if ("function" != typeof t)throw new ul(Q);
            return e = Nl(e === Z ? t.length - 1 : Ts(e), 0), function () {
                for (var r = arguments, i = -1, o = Nl(r.length - e, 0), a = Array(o); ++i < o;)a[i] = r[e + i];
                switch (e) {
                    case 0:
                        return t.call(this, a);
                    case 1:
                        return t.call(this, r[0], a);
                    case 2:
                        return t.call(this, r[0], r[1], a)
                }
                var s = Array(e + 1);
                for (i = -1; ++i < e;)s[i] = r[i];
                return s[e] = a, n(t, this, s)
            }
        }

        function Oa(t, e) {
            if ("function" != typeof t)throw new ul(Q);
            return e = e === Z ? 0 : Nl(Ts(e), 0), Ma(function (r) {
                var i = r[e], o = Nr(r, 0, e);
                return i && h(o, i), n(t, this, o)
            })
        }

        function Pa(t, e, n) {
            var r = !0, i = !0;
            if ("function" != typeof t)throw new ul(Q);
            return os(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ca(t, e, {
                leading: r,
                maxWait: e,
                trailing: i
            })
        }

        function ja(t) {
            return xa(t, 1)
        }

        function Ia(t, e) {
            return e = null == e ? Nu : e, Gc(e, t)
        }

        function Ra() {
            if (!arguments.length)return [];
            var t = arguments[0];
            return Kc(t) ? t : [t]
        }

        function Na(t) {
            return Dn(t, !1, !0)
        }

        function Ua(t, e) {
            return Dn(t, !1, !0, e)
        }

        function Fa(t) {
            return Dn(t, !0, !0)
        }

        function Ha(t, e) {
            return Dn(t, !0, !0, e)
        }

        function La(t, e) {
            return t === e || t !== t && e !== e
        }

        function qa(t, e) {
            return t > e
        }

        function Va(t, e) {
            return t >= e
        }

        function Wa(t) {
            return Ya(t) && dl.call(t, "callee") && (!Tl.call(t, "callee") || ml.call(t) == Tt)
        }

        function Ba(t) {
            return as(t) && ml.call(t) == Bt
        }

        function za(t) {
            return null != t && is(pc(t)) && !ns(t)
        }

        function Ya(t) {
            return as(t) && za(t)
        }

        function Ga(t) {
            return t === !0 || t === !1 || as(t) && ml.call(t) == Et
        }

        function Xa(t) {
            return as(t) && ml.call(t) == Mt
        }

        function Za(t) {
            return !!t && 1 === t.nodeType && as(t) && !gs(t)
        }

        function Ka(t) {
            if (za(t) && (Kc(t) || $s(t) || ns(t.splice) || Wa(t) || Jc(t)))return !t.length;
            if (as(t)) {
                var e = Ti(t);
                if (e == It || e == Ht)return !t.size
            }
            for (var n in t)if (dl.call(t, n))return !1;
            return !(Kl && zs(t).length)
        }

        function Ja(t, e) {
            return Jn(t, e)
        }

        function Qa(t, e, n) {
            n = "function" == typeof n ? n : Z;
            var r = n ? n(t, e) : Z;
            return r === Z ? Jn(t, e, n) : !!r
        }

        function ts(t) {
            return as(t) ? ml.call(t) == Ot || "string" == typeof t.message && "string" == typeof t.name : !1
        }

        function es(t) {
            return "number" == typeof t && jl(t)
        }

        function ns(t) {
            var e = os(t) ? ml.call(t) : "";
            return e == Pt || e == jt
        }

        function rs(t) {
            return "number" == typeof t && t == Ts(t)
        }

        function is(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && xt >= t
        }

        function os(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function as(t) {
            return !!t && "object" == typeof t
        }

        function ss(t) {
            return as(t) && Ti(t) == It
        }

        function us(t, e) {
            return t === e || tr(t, e, _i(e))
        }

        function ls(t, e, n) {
            return n = "function" == typeof n ? n : Z, tr(t, e, _i(e), n)
        }

        function cs(t) {
            return ps(t) && t != +t
        }

        function fs(t) {
            if (!os(t))return !1;
            var e = ns(t) || H(t) ? yl : De;
            return e.test(Xi(t))
        }

        function hs(t) {
            return null === t
        }

        function ds(t) {
            return null == t
        }

        function ps(t) {
            return "number" == typeof t || as(t) && ml.call(t) == Rt
        }

        function gs(t) {
            if (!as(t) || ml.call(t) != Nt || H(t))return !1;
            var e = Ci(t);
            if (null === e)return !0;
            var n = dl.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && hl.call(n) == gl
        }

        function ms(t) {
            return os(t) && ml.call(t) == Ft
        }

        function vs(t) {
            return rs(t) && t >= -xt && xt >= t
        }

        function ys(t) {
            return as(t) && Ti(t) == Ht
        }

        function $s(t) {
            return "string" == typeof t || !Kc(t) && as(t) && ml.call(t) == Lt
        }

        function ws(t) {
            return "symbol" == typeof t || as(t) && ml.call(t) == qt
        }

        function bs(t) {
            return as(t) && is(t.length) && !!Sn[ml.call(t)]
        }

        function xs(t) {
            return t === Z
        }

        function _s(t) {
            return as(t) && Ti(t) == Vt
        }

        function ks(t) {
            return as(t) && ml.call(t) == Wt
        }

        function Ss(t, e) {
            return e > t
        }

        function Cs(t, e) {
            return e >= t
        }

        function Ds(t) {
            if (!t)return [];
            if (za(t))return $s(t) ? Y(t) : Gr(t);
            if (Cl && t[Cl])return q(t[Cl]());
            var e = Ti(t), n = e == It ? V : e == Ht ? B : su;
            return n(t)
        }

        function Ts(t) {
            if (!t)return 0 === t ? t : 0;
            if (t = Es(t), t === bt || t === -bt) {
                var e = 0 > t ? -1 : 1;
                return e * _t
            }
            var n = t % 1;
            return t === t ? n ? t - n : t : 0
        }

        function As(t) {
            return t ? $n(Ts(t), 0, St) : 0
        }

        function Es(t) {
            if ("number" == typeof t)return t;
            if (ws(t))return kt;
            if (os(t)) {
                var e = ns(t.valueOf) ? t.valueOf() : t;
                t = os(e) ? e + "" : e
            }
            if ("string" != typeof t)return 0 === t ? t : +t;
            t = t.replace(ve, "");
            var n = Ce.test(t);
            return n || Te.test(t) ? Pn(t.slice(2), n ? 2 : 8) : Se.test(t) ? kt : +t
        }

        function Ms(t) {
            return Xr(t, Ys(t))
        }

        function Os(t) {
            return $n(Ts(t), -xt, xt)
        }

        function Ps(t) {
            if ("string" == typeof t)return t;
            if (null == t)return "";
            if (ws(t))return ac ? ac.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -bt ? "-0" : e
        }

        function js(t, e) {
            var n = An(t);
            return e ? gn(n, e) : n
        }

        function Is(t, e) {
            return v(t, xi(e, 3), Fn, !0)
        }

        function Rs(t, e) {
            return v(t, xi(e, 3), Hn, !0)
        }

        function Ns(t, e) {
            return null == t ? t : lc(t, xi(e), Ys)
        }

        function Us(t, e) {
            return null == t ? t : cc(t, xi(e), Ys)
        }

        function Fs(t, e) {
            return t && Fn(t, xi(e))
        }

        function Hs(t, e) {
            return t && Hn(t, xi(e))
        }

        function Ls(t) {
            return null == t ? [] : Vn(t, zs(t))
        }

        function qs(t) {
            return null == t ? [] : Vn(t, Ys(t))
        }

        function Vs(t, e, n) {
            var r = null == t ? Z : Wn(t, e);
            return r === Z ? n : r
        }

        function Ws(t, e) {
            return null != t && Ei(t, e, zn)
        }

        function Bs(t, e) {
            return null != t && Ei(t, e, Yn)
        }

        function zs(t) {
            var e = Li(t);
            if (!e && !za(t))return nr(t);
            var n = ji(t), r = !!n, i = n || [], o = i.length;
            for (var a in t)!zn(t, a) || r && ("length" == a || L(a, o)) || e && "constructor" == a || i.push(a);
            return i
        }

        function Ys(t) {
            for (var e = -1, n = Li(t), r = rr(t), i = r.length, o = ji(t), a = !!o, s = o || [], u = s.length; ++e < i;) {
                var l = r[e];
                a && ("length" == l || L(l, u)) || "constructor" == l && (n || !dl.call(t, l)) || s.push(l)
            }
            return s
        }

        function Gs(t, e) {
            var n = {};
            return e = xi(e, 3), Fn(t, function (t, r, i) {
                n[e(t, r, i)] = t
            }), n
        }

        function Xs(t, e) {
            var n = {};
            return e = xi(e, 3), Fn(t, function (t, r, i) {
                n[r] = e(t, r, i)
            }), n
        }

        function Zs(t, e) {
            return e = xi(e), hr(t, function (t, n) {
                return !e(t, n)
            })
        }

        function Ks(t, e) {
            return null == t ? {} : hr(t, xi(e))
        }

        function Js(t, e, n) {
            e = Ui(e, t) ? [e] : Rr(e);
            var r = -1, i = e.length;
            for (i || (t = Z, i = 1); ++r < i;) {
                var o = null == t ? Z : t[e[r]];
                o === Z && (r = i, o = n), t = ns(o) ? o.call(t) : o
            }
            return t
        }

        function Qs(t, e, n) {
            return null == t ? t : wr(t, e, n)
        }

        function tu(t, e, n, r) {
            return r = "function" == typeof r ? r : Z, null == t ? t : wr(t, e, n, r)
        }

        function eu(t) {
            return C(t, zs(t))
        }

        function nu(t) {
            return C(t, Ys(t))
        }

        function ru(t, e, n) {
            var r = Kc(t) || bs(t);
            if (e = xi(e, 4), null == n)if (r || os(t)) {
                var i = t.constructor;
                n = r ? Kc(t) ? new i : [] : ns(i) ? An(Ci(t)) : {}
            } else n = {};
            return (r ? o : Fn)(t, function (t, r, i) {
                return e(n, t, r, i)
            }), n
        }

        function iu(t, e) {
            return null == t ? !0 : Tr(t, e)
        }

        function ou(t, e, n) {
            return null == t ? t : Ar(t, e, Ir(n))
        }

        function au(t, e, n, r) {
            return r = "function" == typeof r ? r : Z, null == t ? t : Ar(t, e, Ir(n), r)
        }

        function su(t) {
            return t ? T(t, zs(t)) : []
        }

        function uu(t) {
            return null == t ? [] : T(t, Ys(t))
        }

        function lu(t, e, n) {
            return n === Z && (n = e, e = Z), n !== Z && (n = Es(n), n = n === n ? n : 0), e !== Z && (e = Es(e), e = e === e ? e : 0), $n(Es(t), e, n)
        }

        function cu(t, e, n) {
            return e = Es(e) || 0, n === Z ? (n = e, e = 0) : n = Es(n) || 0, t = Es(t), Gn(t, e, n)
        }

        function fu(t, e, n) {
            if (n && "boolean" != typeof n && Ni(t, e, n) && (e = n = Z), n === Z && ("boolean" == typeof e ? (n = e, e = Z) : "boolean" == typeof t && (n = t, t = Z)), t === Z && e === Z ? (t = 0, e = 1) : (t = Es(t) || 0, e === Z ? (e = t, t = 0) : e = Es(e) || 0), t > e) {
                var r = t;
                t = e, e = r
            }
            if (n || t % 1 || e % 1) {
                var i = Hl();
                return Ul(t + i * (e - t + On("1e-" + ((i + "").length - 1))), e)
            }
            return vr(t, e)
        }

        function hu(t) {
            return bf(Ps(t).toLowerCase())
        }

        function du(t) {
            return t = Ps(t), t && t.replace(Ee, R).replace(yn, "")
        }

        function pu(t, e, n) {
            t = Ps(t), e = "string" == typeof e ? e : e + "";
            var r = t.length;
            return n = n === Z ? r : $n(Ts(n), 0, r), n -= e.length, n >= 0 && t.indexOf(e, n) == n
        }

        function gu(t) {
            return t = Ps(t), t && ue.test(t) ? t.replace(ae, N) : t
        }

        function mu(t) {
            return t = Ps(t), t && me.test(t) ? t.replace(ge, "\\$&") : t
        }

        function vu(t, e, n) {
            t = Ps(t), e = Ts(e);
            var r = e ? z(t) : 0;
            if (!e || r >= e)return t;
            var i = (e - r) / 2;
            return ci(Ol(i), n) + t + ci(Ml(i), n)
        }

        function yu(t, e, n) {
            t = Ps(t), e = Ts(e);
            var r = e ? z(t) : 0;
            return e && e > r ? t + ci(e - r, n) : t
        }

        function $u(t, e, n) {
            t = Ps(t), e = Ts(e);
            var r = e ? z(t) : 0;
            return e && e > r ? ci(e - r, n) + t : t
        }

        function wu(t, e, n) {
            return n || null == e ? e = 0 : e && (e = +e), t = Ps(t).replace(ve, ""), Fl(t, e || (ke.test(t) ? 16 : 10))
        }

        function bu(t, e, n) {
            return e = (n ? Ni(t, e, n) : e === Z) ? 1 : Ts(e), $r(Ps(t), e)
        }

        function xu() {
            var t = arguments, e = Ps(t[0]);
            return t.length < 3 ? e : Ll.call(e, t[1], t[2])
        }

        function _u(t, e, n) {
            return n && "number" != typeof n && Ni(t, e, n) && (e = n = Z), (n = n === Z ? St : n >>> 0) ? (t = Ps(t), t && ("string" == typeof e || null != e && !ms(e)) && (e += "", "" == e && bn.test(t)) ? Nr(Y(t), 0, n) : Vl.call(t, e, n)) : []
        }

        function ku(t, e, n) {
            return t = Ps(t), n = $n(Ts(n), 0, t.length), t.lastIndexOf(e, n) == n
        }

        function Su(t, e, n) {
            var r = Ae.templateSettings;
            n && Ni(t, e, n) && (e = Z), t = Ps(t), e = ef({}, e, r, fn);
            var i, o, a = ef({}, e.imports, r.imports, fn), s = zs(a), u = T(a, s), l = 0, c = e.interpolate || Me, f = "__p += '", h = sl((e.escape || Me).source + "|" + c.source + "|" + (c === fe ? xe : Me).source + "|" + (e.evaluate || Me).source + "|$", "g"), d = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++kn + "]") + "\n";
            t.replace(h, function (e, n, r, a, s, u) {
                return r || (r = a), f += t.slice(l, u).replace(Oe, U), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
            }), f += "';\n";
            var p = e.variable;
            p || (f = "with (obj) {\n" + f + "\n}\n"), f = (o ? f.replace(ne, "") : f).replace(re, "$1").replace(ie, "$1;"), f = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var g = xf(function () {
                return Function(s, d + "return " + f).apply(Z, u)
            });
            if (g.source = f, ts(g))throw g;
            return g
        }

        function Cu(t) {
            return Ps(t).toLowerCase()
        }

        function Du(t) {
            return Ps(t).toUpperCase()
        }

        function Tu(t, e, n) {
            if (t = Ps(t), !t)return t;
            if (n || e === Z)return t.replace(ve, "");
            if (!(e += ""))return t;
            var r = Y(t), i = Y(e), o = A(r, i), a = E(r, i) + 1;
            return Nr(r, o, a).join("")
        }

        function Au(t, e, n) {
            if (t = Ps(t), !t)return t;
            if (n || e === Z)return t.replace($e, "");
            if (!(e += ""))return t;
            var r = Y(t), i = E(r, Y(e)) + 1;
            return Nr(r, 0, i).join("")
        }

        function Eu(t, e, n) {
            if (t = Ps(t), !t)return t;
            if (n || e === Z)return t.replace(ye, "");
            if (!(e += ""))return t;
            var r = Y(t), i = A(r, Y(e));
            return Nr(r, i).join("")
        }

        function Mu(t, e) {
            var n = pt, r = gt;
            if (os(e)) {
                var i = "separator" in e ? e.separator : i;
                n = "length" in e ? Ts(e.length) : n, r = "omission" in e ? Ps(e.omission) : r
            }
            t = Ps(t);
            var o = t.length;
            if (bn.test(t)) {
                var a = Y(t);
                o = a.length
            }
            if (n >= o)return t;
            var s = n - z(r);
            if (1 > s)return r;
            var u = a ? Nr(a, 0, s).join("") : t.slice(0, s);
            if (i === Z)return u + r;
            if (a && (s += u.length - s), ms(i)) {
                if (t.slice(s).search(i)) {
                    var l, c = u;
                    for (i.global || (i = sl(i.source, Ps(_e.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(c);)var f = l.index;
                    u = u.slice(0, f === Z ? s : f)
                }
            } else if (t.indexOf(i, s) != s) {
                var h = u.lastIndexOf(i);
                h > -1 && (u = u.slice(0, h))
            }
            return u + r
        }

        function Ou(t) {
            return t = Ps(t), t && se.test(t) ? t.replace(oe, G) : t
        }

        function Pu(t, e, n) {
            return t = Ps(t), e = n ? Z : e, e === Z && (e = xn.test(t) ? wn : we), t.match(e) || []
        }

        function ju(t) {
            var e = t ? t.length : 0, r = xi();
            return t = e ? f(t, function (t) {
                if ("function" != typeof t[1])throw new ul(Q);
                return [r(t[0]), t[1]]
            }) : [], Ma(function (r) {
                for (var i = -1; ++i < e;) {
                    var o = t[i];
                    if (n(o[0], this, r))return n(o[1], this, r)
                }
            })
        }

        function Iu(t) {
            return Tn(Dn(t, !0))
        }

        function Ru(t) {
            return function () {
                return t
            }
        }

        function Nu(t) {
            return t
        }

        function Uu(t) {
            return er("function" == typeof t ? t : Dn(t, !0))
        }

        function Fu(t) {
            return or(Dn(t, !0))
        }

        function Hu(t, e) {
            return ar(t, Dn(e, !0))
        }

        function Lu(t, e, n) {
            var r = zs(e), i = Vn(e, r);
            null != n || os(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = Vn(e, zs(e)));
            var a = !(os(n) && "chain" in n && !n.chain), s = ns(t);
            return o(i, function (n) {
                var r = e[n];
                t[n] = r, s && (t.prototype[n] = function () {
                    var e = this.__chain__;
                    if (a || e) {
                        var n = t(this.__wrapped__), i = n.__actions__ = Gr(this.__actions__);
                        return i.push({func: r, args: arguments, thisArg: t}), n.__chain__ = e, n
                    }
                    return r.apply(t, h([this.value()], arguments))
                })
            }), t
        }

        function qu() {
            return Ln._ === this && (Ln._ = vl), this
        }

        function Vu() {
        }

        function Wu(t) {
            return t = Ts(t), Ma(function (e) {
                return lr(e, t)
            })
        }

        function Bu(t) {
            return Ui(t) ? dr(t) : pr(t)
        }

        function zu(t) {
            return function (e) {
                return null == t ? Z : Wn(t, e)
            }
        }

        function Yu(t, e) {
            if (t = Ts(t), 1 > t || t > xt)return [];
            var n = St, r = Ul(t, St);
            e = xi(e), t -= St;
            for (var i = S(r, e); ++n < t;)e(n);
            return i
        }

        function Gu(t) {
            return Kc(t) ? f(t, Gi) : ws(t) ? [t] : Gr(vc(t))
        }

        function Xu(t) {
            var e = ++pl;
            return Ps(t) + e
        }

        function Zu(t) {
            return t && t.length ? m(t, Nu, qa) : Z
        }

        function Ku(t, e) {
            return t && t.length ? m(t, xi(e), qa) : Z
        }

        function Ju(t) {
            return b(t, Nu)
        }

        function Qu(t, e) {
            return b(t, xi(e))
        }

        function tl(t) {
            return t && t.length ? m(t, Nu, Ss) : Z
        }

        function el(t, e) {
            return t && t.length ? m(t, xi(e), Ss) : Z
        }

        function nl(t) {
            return t && t.length ? k(t, Nu) : 0
        }

        function rl(t, e) {
            return t && t.length ? k(t, xi(e)) : 0
        }

        M = M ? qn.defaults({}, M, qn.pick(Ln, _n)) : Ln;
        var il = M.Date, ol = M.Error, al = M.Math, sl = M.RegExp, ul = M.TypeError, ll = M.Array.prototype, cl = M.Object.prototype, fl = M.String.prototype, hl = M.Function.prototype.toString, dl = cl.hasOwnProperty, pl = 0, gl = hl.call(Object), ml = cl.toString, vl = Ln._, yl = sl("^" + hl.call(dl).replace(ge, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), $l = Rn ? M.Buffer : Z, wl = M.Reflect, bl = M.Symbol, xl = M.Uint8Array, _l = M.clearTimeout, kl = wl ? wl.enumerate : Z, Sl = Object.getOwnPropertySymbols, Cl = "symbol" == typeof(Cl = bl && bl.iterator) ? Cl : Z, Dl = Object.create, Tl = cl.propertyIsEnumerable, Al = M.setTimeout, El = ll.splice, Ml = al.ceil, Ol = al.floor, Pl = Object.getPrototypeOf, jl = M.isFinite, Il = ll.join, Rl = Object.keys, Nl = al.max, Ul = al.min, Fl = M.parseInt, Hl = al.random, Ll = fl.replace, ql = ll.reverse, Vl = fl.split, Wl = ki(M, "DataView"), Bl = ki(M, "Map"), zl = ki(M, "Promise"), Yl = ki(M, "Set"), Gl = ki(M, "WeakMap"), Xl = ki(Object, "create"), Zl = Gl && new Gl, Kl = !Tl.call({valueOf: 1}, "valueOf"), Jl = {}, Ql = Xi(Wl), tc = Xi(Bl), ec = Xi(zl), nc = Xi(Yl), rc = Xi(Gl), ic = bl ? bl.prototype : Z, oc = ic ? ic.valueOf : Z, ac = ic ? ic.toString : Z;
        Ae.templateSettings = {
            escape: le,
            evaluate: ce,
            interpolate: fe,
            variable: "",
            imports: {_: Ae}
        }, Ae.prototype = Pe.prototype, Ae.prototype.constructor = Ae, je.prototype = An(Pe.prototype), je.prototype.constructor = je, Ie.prototype = An(Pe.prototype), Ie.prototype.constructor = Ie, Fe.prototype = Xl ? Xl(null) : cl, We.prototype.clear = Be, We.prototype["delete"] = ze, We.prototype.get = Ye, We.prototype.has = Ge, We.prototype.set = Xe, Ze.prototype.push = Je, Qe.prototype.clear = tn, Qe.prototype["delete"] = en, Qe.prototype.get = nn, Qe.prototype.has = rn, Qe.prototype.set = on;
        var sc = Qr(Fn), uc = Qr(Hn, !0), lc = ti(), cc = ti(!0);
        kl && !Tl.call({valueOf: 1}, "valueOf") && (rr = function (t) {
            return q(kl(t))
        });
        var fc = Zl ? function (t, e) {
            return Zl.set(t, e), t
        } : Nu, hc = Yl && 2 === new Yl([1, 2]).size ? function (t) {
            return new Yl(t)
        } : Vu, dc = Zl ? function (t) {
            return Zl.get(t)
        } : Vu, pc = dr("length");
        Sl || (Di = function () {
            return []
        });
        var gc = Sl ? function (t) {
            for (var e = []; t;)h(e, Di(t)), t = Ci(t);
            return e
        } : Di;
        (Wl && Ti(new Wl(new ArrayBuffer(1))) != zt || Bl && Ti(new Bl) != It || zl && Ti(zl.resolve()) != Ut || Yl && Ti(new Yl) != Ht || Gl && Ti(new Gl) != Vt) && (Ti = function (t) {
            var e = ml.call(t), n = e == Nt ? t.constructor : Z, r = n ? Xi(n) : Z;
            if (r)switch (r) {
                case Ql:
                    return zt;
                case tc:
                    return It;
                case ec:
                    return Ut;
                case nc:
                    return Ht;
                case rc:
                    return Vt
            }
            return e
        });
        var mc = function () {
            var t = 0, e = 0;
            return function (n, r) {
                var i = qc(), o = vt - (i - e);
                if (e = i, o > 0) {
                    if (++t >= mt)return n
                } else t = 0;
                return fc(n, r)
            }
        }(), vc = Ta(function (t) {
            var e = [];
            return Ps(t).replace(pe, function (t, n, r, i) {
                e.push(r ? i.replace(be, "$1") : n || t)
            }), e
        }), yc = Ma(function (t, e) {
            return Ya(t) ? Mn(t, Un(e, 1, Ya, !0)) : []
        }), $c = Ma(function (t, e) {
            var n = mo(e);
            return Ya(n) && (n = Z), Ya(t) ? Mn(t, Un(e, 1, Ya, !0), xi(n)) : []
        }), wc = Ma(function (t, e) {
            var n = mo(e);
            return Ya(n) && (n = Z), Ya(t) ? Mn(t, Un(e, 1, Ya, !0), Z, n) : []
        }), bc = Ma(function (t) {
            var e = f(t, jr);
            return e.length && e[0] === t[0] ? Xn(e) : []
        }), xc = Ma(function (t) {
            var e = mo(t), n = f(t, jr);
            return e === mo(n) ? e = Z : n.pop(), n.length && n[0] === t[0] ? Xn(n, xi(e)) : []
        }), _c = Ma(function (t) {
            var e = mo(t), n = f(t, jr);
            return e === mo(n) ? e = Z : n.pop(), n.length && n[0] === t[0] ? Xn(n, Z, e) : []
        }), kc = Ma($o), Sc = Ma(function (t, e) {
            e = f(Un(e, 1), String);
            var n = mn(t, e);
            return mr(t, e.sort(O)), n
        }), Cc = Ma(function (t) {
            return Dr(Un(t, 1, Ya, !0))
        }), Dc = Ma(function (t) {
            var e = mo(t);
            return Ya(e) && (e = Z), Dr(Un(t, 1, Ya, !0), xi(e))
        }), Tc = Ma(function (t) {
            var e = mo(t);
            return Ya(e) && (e = Z), Dr(Un(t, 1, Ya, !0), Z, e)
        }), Ac = Ma(function (t, e) {
            return Ya(t) ? Mn(t, e) : []
        }), Ec = Ma(function (t) {
            return Or(u(t, Ya))
        }), Mc = Ma(function (t) {
            var e = mo(t);
            return Ya(e) && (e = Z), Or(u(t, Ya), xi(e))
        }), Oc = Ma(function (t) {
            var e = mo(t);
            return Ya(e) && (e = Z), Or(u(t, Ya), Z, e)
        }), Pc = Ma(Lo), jc = Ma(function (t) {
            var e = t.length, n = e > 1 ? t[e - 1] : Z;
            return n = "function" == typeof n ? (t.pop(), n) : Z, qo(t, n)
        }), Ic = Ma(function (t) {
            t = Un(t, 1);
            var e = t.length, n = e ? t[0] : 0, r = this.__wrapped__, i = function (e) {
                return mn(e, t)
            };
            return !(e > 1 || this.__actions__.length) && r instanceof Ie && L(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
                func: Yo,
                args: [i],
                thisArg: Z
            }), new je(r, this.__chain__).thru(function (t) {
                return e && !t.length && t.push(Z), t
            })) : this.thru(i)
        }), Rc = Kr(function (t, e, n) {
            dl.call(t, n) ? ++t[n] : t[n] = 1
        }), Nc = Kr(function (t, e, n) {
            dl.call(t, n) ? t[n].push(e) : t[n] = [e]
        }), Uc = Ma(function (t, e, r) {
            var i = -1, o = "function" == typeof e, a = Ui(e), s = za(t) ? Array(t.length) : [];
            return sc(t, function (t) {
                var u = o ? e : a && null != t ? t[e] : Z;
                s[++i] = u ? n(u, t, r) : Kn(t, e, r)
            }), s
        }), Fc = Kr(function (t, e, n) {
            t[n] = e
        }), Hc = Kr(function (t, e, n) {
            t[n ? 0 : 1].push(e)
        }, function () {
            return [[], []]
        }), Lc = Ma(function (t, e) {
            if (null == t)return [];
            var n = e.length;
            return n > 1 && Ni(t, e[0], e[1]) ? e = [] : n > 2 && Ni(e[0], e[1], e[2]) && (e = [e[0]]), e = 1 == e.length && Kc(e[0]) ? e[0] : Un(e, 1, Ri), cr(t, e, [])
        }), qc = il.now, Vc = Ma(function (t, e, n) {
            var r = nt;
            if (n.length) {
                var i = W(n, Si(Vc));
                r |= st
            }
            return gi(t, r, e, n, i)
        }), Wc = Ma(function (t, e, n) {
            var r = nt | rt;
            if (n.length) {
                var i = W(n, Si(Wc));
                r |= st
            }
            return gi(e, r, t, n, i)
        }), Bc = Ma(function (t, e) {
            return En(t, 1, e)
        }), zc = Ma(function (t, e, n) {
            return En(t, Es(e) || 0, n)
        });
        Ta.Cache = We;
        var Yc = Ma(function (t, e) {
            e = 1 == e.length && Kc(e[0]) ? f(e[0], D(xi())) : f(Un(e, 1, Ri), D(xi()));
            var r = e.length;
            return Ma(function (i) {
                for (var o = -1, a = Ul(i.length, r); ++o < a;)i[o] = e[o].call(this, i[o]);
                return n(t, this, i)
            })
        }), Gc = Ma(function (t, e) {
            var n = W(e, Si(Gc));
            return gi(t, st, Z, e, n)
        }), Xc = Ma(function (t, e) {
            var n = W(e, Si(Xc));
            return gi(t, ut, Z, e, n)
        }), Zc = Ma(function (t, e) {
            return gi(t, ct, Z, Z, Z, Un(e, 1))
        }), Kc = Array.isArray, Jc = $l ? function (t) {
            return t instanceof $l
        } : Ru(!1), Qc = Jr(function (t, e) {
            if (Kl || Li(e) || za(e))return void Xr(e, zs(e), t);
            for (var n in e)dl.call(e, n) && dn(t, n, e[n])
        }), tf = Jr(function (t, e) {
            if (Kl || Li(e) || za(e))return void Xr(e, Ys(e), t);
            for (var n in e)dn(t, n, e[n])
        }), ef = Jr(function (t, e, n, r) {
            Xr(e, Ys(e), t, r)
        }), nf = Jr(function (t, e, n, r) {
            Xr(e, zs(e), t, r)
        }), rf = Ma(function (t, e) {
            return mn(t, Un(e, 1))
        }), of = Ma(function (t) {
            return t.push(Z, fn), n(ef, Z, t)
        }), af = Ma(function (t) {
            return t.push(Z, Bi), n(ff, Z, t)
        }), sf = ui(function (t, e, n) {
            t[e] = n
        }, Ru(Nu)), uf = ui(function (t, e, n) {
            dl.call(t, e) ? t[e].push(n) : t[e] = [n]
        }, xi), lf = Ma(Kn), cf = Jr(function (t, e, n) {
            sr(t, e, n)
        }), ff = Jr(function (t, e, n, r) {
            sr(t, e, n, r)
        }), hf = Ma(function (t, e) {
            return null == t ? {} : (e = f(Un(e, 1), Gi), fr(t, Mn(wi(t), e)))
        }), df = Ma(function (t, e) {
            return null == t ? {} : fr(t, Un(e, 1))
        }), pf = ri(function (t, e, n) {
            return e = e.toLowerCase(), t + (n ? hu(e) : e)
        }), gf = ri(function (t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase()
        }), mf = ri(function (t, e, n) {
            return t + (n ? " " : "") + e.toLowerCase()
        }), vf = ni("toLowerCase"), yf = ri(function (t, e, n) {
            return t + (n ? "_" : "") + e.toLowerCase()
        }), $f = ri(function (t, e, n) {
            return t + (n ? " " : "") + bf(e)
        }), wf = ri(function (t, e, n) {
            return t + (n ? " " : "") + e.toUpperCase()
        }), bf = ni("toUpperCase"), xf = Ma(function (t, e) {
            try {
                return n(t, Z, e)
            } catch (r) {
                return ts(r) ? r : new ol(r)
            }
        }), _f = Ma(function (t, e) {
            return o(Un(e, 1), function (e) {
                t[e] = Vc(t[e], t)
            }), t
        }), kf = ai(), Sf = ai(!0), Cf = Ma(function (t, e) {
            return function (n) {
                return Kn(n, t, e)
            }
        }), Df = Ma(function (t, e) {
            return function (n) {
                return Kn(t, n, e)
            }
        }), Tf = li(f), Af = li(s), Ef = li(g), Mf = hi(), Of = hi(!0), Pf = I(function (t, e) {
            return t + e
        }), jf = pi("ceil"), If = I(function (t, e) {
            return t / e
        }), Rf = pi("floor"), Nf = I(function (t, e) {
            return t * e
        }), Uf = pi("round"), Ff = I(function (t, e) {
            return t - e
        });
        return Ae.after = ba, Ae.ary = xa, Ae.assign = Qc, Ae.assignIn = tf, Ae.assignInWith = ef, Ae.assignWith = nf, Ae.at = rf, Ae.before = _a, Ae.bind = Vc, Ae.bindAll = _f, Ae.bindKey = Wc, Ae.castArray = Ra, Ae.chain = Bo, Ae.chunk = Ki, Ae.compact = Ji, Ae.concat = Qi, Ae.cond = ju, Ae.conforms = Iu, Ae.constant = Ru, Ae.countBy = Rc, Ae.create = js, Ae.curry = ka, Ae.curryRight = Sa, Ae.debounce = Ca, Ae.defaults = of, Ae.defaultsDeep = af, Ae.defer = Bc, Ae.delay = zc, Ae.difference = yc, Ae.differenceBy = $c, Ae.differenceWith = wc, Ae.drop = to, Ae.dropRight = eo, Ae.dropRightWhile = no, Ae.dropWhile = ro, Ae.fill = io, Ae.filter = na, Ae.flatMap = oa, Ae.flatMapDeep = aa, Ae.flatMapDepth = sa, Ae.flatten = so, Ae.flattenDeep = uo, Ae.flattenDepth = lo, Ae.flip = Da, Ae.flow = kf, Ae.flowRight = Sf, Ae.fromPairs = co, Ae.functions = Ls, Ae.functionsIn = qs, Ae.groupBy = Nc, Ae.initial = po, Ae.intersection = bc, Ae.intersectionBy = xc, Ae.intersectionWith = _c, Ae.invert = sf, Ae.invertBy = uf, Ae.invokeMap = Uc, Ae.iteratee = Uu, Ae.keyBy = Fc, Ae.keys = zs, Ae.keysIn = Ys, Ae.map = fa, Ae.mapKeys = Gs, Ae.mapValues = Xs, Ae.matches = Fu, Ae.matchesProperty = Hu, Ae.memoize = Ta, Ae.merge = cf, Ae.mergeWith = ff, Ae.method = Cf, Ae.methodOf = Df, Ae.mixin = Lu, Ae.negate = Aa, Ae.nthArg = Wu, Ae.omit = hf, Ae.omitBy = Zs, Ae.once = Ea, Ae.orderBy = ha, Ae.over = Tf, Ae.overArgs = Yc, Ae.overEvery = Af, Ae.overSome = Ef, Ae.partial = Gc, Ae.partialRight = Xc, Ae.partition = Hc, Ae.pick = df, Ae.pickBy = Ks, Ae.property = Bu, Ae.propertyOf = zu, Ae.pull = kc, Ae.pullAll = $o, Ae.pullAllBy = wo, Ae.pullAllWith = bo, Ae.pullAt = Sc, Ae.range = Mf, Ae.rangeRight = Of, Ae.rearg = Zc, Ae.reject = ga, Ae.remove = xo, Ae.rest = Ma, Ae.reverse = _o,Ae.sampleSize = va,Ae.set = Qs,Ae.setWith = tu,Ae.shuffle = ya,Ae.slice = ko,Ae.sortBy = Lc,Ae.sortedUniq = Mo,Ae.sortedUniqBy = Oo,Ae.split = _u,Ae.spread = Oa,Ae.tail = Po,Ae.take = jo,Ae.takeRight = Io,Ae.takeRightWhile = Ro,Ae.takeWhile = No,Ae.tap = zo,Ae.throttle = Pa,Ae.thru = Yo,Ae.toArray = Ds,Ae.toPairs = eu,Ae.toPairsIn = nu,Ae.toPath = Gu,Ae.toPlainObject = Ms,Ae.transform = ru,Ae.unary = ja,Ae.union = Cc,Ae.unionBy = Dc,Ae.unionWith = Tc,Ae.uniq = Uo,Ae.uniqBy = Fo,Ae.uniqWith = Ho,Ae.unset = iu,Ae.unzip = Lo,Ae.unzipWith = qo,Ae.update = ou,Ae.updateWith = au,Ae.values = su,Ae.valuesIn = uu,Ae.without = Ac,Ae.words = Pu,Ae.wrap = Ia,Ae.xor = Ec,Ae.xorBy = Mc,Ae.xorWith = Oc,Ae.zip = Pc,Ae.zipObject = Vo,Ae.zipObjectDeep = Wo,Ae.zipWith = jc,Ae.entries = eu,Ae.entriesIn = nu,Ae.extend = tf,Ae.extendWith = ef,Lu(Ae, Ae),Ae.add = Pf,Ae.attempt = xf,Ae.camelCase = pf,Ae.capitalize = hu,Ae.ceil = jf,Ae.clamp = lu,Ae.clone = Na,Ae.cloneDeep = Fa,Ae.cloneDeepWith = Ha,Ae.cloneWith = Ua,Ae.deburr = du,Ae.divide = If,Ae.endsWith = pu,Ae.eq = La,Ae.escape = gu,Ae.escapeRegExp = mu,Ae.every = ea,Ae.find = ra,Ae.findIndex = oo,Ae.findKey = Is,Ae.findLast = ia,Ae.findLastIndex = ao,Ae.findLastKey = Rs,Ae.floor = Rf,Ae.forEach = ua,Ae.forEachRight = la,Ae.forIn = Ns,Ae.forInRight = Us,Ae.forOwn = Fs,Ae.forOwnRight = Hs,Ae.get = Vs,Ae.gt = qa,Ae.gte = Va,Ae.has = Ws,Ae.hasIn = Bs,Ae.head = fo,Ae.identity = Nu,Ae.includes = ca,Ae.indexOf = ho,Ae.inRange = cu,Ae.invoke = lf,Ae.isArguments = Wa,Ae.isArray = Kc,Ae.isArrayBuffer = Ba,Ae.isArrayLike = za,Ae.isArrayLikeObject = Ya,Ae.isBoolean = Ga,Ae.isBuffer = Jc,Ae.isDate = Xa,Ae.isElement = Za,Ae.isEmpty = Ka,Ae.isEqual = Ja,Ae.isEqualWith = Qa,Ae.isError = ts,Ae.isFinite = es,Ae.isFunction = ns,Ae.isInteger = rs,Ae.isLength = is,Ae.isMap = ss,Ae.isMatch = us,Ae.isMatchWith = ls,Ae.isNaN = cs,Ae.isNative = fs,Ae.isNil = ds,Ae.isNull = hs,Ae.isNumber = ps,Ae.isObject = os,Ae.isObjectLike = as,Ae.isPlainObject = gs,Ae.isRegExp = ms,Ae.isSafeInteger = vs,Ae.isSet = ys,Ae.isString = $s,Ae.isSymbol = ws,Ae.isTypedArray = bs,Ae.isUndefined = xs,Ae.isWeakMap = _s,Ae.isWeakSet = ks,Ae.join = go,Ae.kebabCase = gf,Ae.last = mo,Ae.lastIndexOf = vo,Ae.lowerCase = mf,Ae.lowerFirst = vf,Ae.lt = Ss,Ae.lte = Cs,Ae.max = Zu,Ae.maxBy = Ku,Ae.mean = Ju,Ae.meanBy = Qu,Ae.min = tl,Ae.minBy = el,Ae.multiply = Nf,Ae.nth = yo,Ae.noConflict = qu,Ae.noop = Vu,Ae.now = qc,Ae.pad = vu,Ae.padEnd = yu,Ae.padStart = $u,Ae.parseInt = wu,Ae.random = fu,Ae.reduce = da,Ae.reduceRight = pa,Ae.repeat = bu,Ae.replace = xu,Ae.result = Js,Ae.round = Uf,Ae.runInContext = X,Ae.sample = ma,Ae.size = $a,Ae.snakeCase = yf,Ae.some = wa,Ae.sortedIndex = So,Ae.sortedIndexBy = Co,Ae.sortedIndexOf = Do,Ae.sortedLastIndex = To,Ae.sortedLastIndexBy = Ao,Ae.sortedLastIndexOf = Eo,Ae.startCase = $f,Ae.startsWith = ku,Ae.subtract = Ff,Ae.sum = nl,Ae.sumBy = rl,Ae.template = Su,Ae.times = Yu,Ae.toInteger = Ts,Ae.toLength = As,Ae.toLower = Cu,Ae.toNumber = Es,Ae.toSafeInteger = Os,Ae.toString = Ps,Ae.toUpper = Du,Ae.trim = Tu,Ae.trimEnd = Au,Ae.trimStart = Eu,Ae.truncate = Mu,Ae.unescape = Ou,Ae.uniqueId = Xu,Ae.upperCase = wf,Ae.upperFirst = bf,Ae.each = ua,Ae.eachRight = la,Ae.first = fo,Lu(Ae, function () {
            var t = {};
            return Fn(Ae, function (e, n) {
                dl.call(Ae.prototype, n) || (t[n] = e)
            }), t
        }(), {chain: !1}),Ae.VERSION = K,o(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
            Ae[t].placeholder = Ae
        }),o(["drop", "take"], function (t, e) {
            Ie.prototype[t] = function (n) {
                var r = this.__filtered__;
                if (r && !e)return new Ie(this);
                n = n === Z ? 1 : Nl(Ts(n), 0);
                var i = this.clone();
                return r ? i.__takeCount__ = Ul(n, i.__takeCount__) : i.__views__.push({
                    size: Ul(n, St),
                    type: t + (i.__dir__ < 0 ? "Right" : "")
                }), i
            }, Ie.prototype[t + "Right"] = function (e) {
                return this.reverse()[t](e).reverse()
            }
        }),o(["filter", "map", "takeWhile"], function (t, e) {
            var n = e + 1, r = n == yt || n == wt;
            Ie.prototype[t] = function (t) {
                var e = this.clone();
                return e.__iteratees__.push({iteratee: xi(t, 3), type: n}), e.__filtered__ = e.__filtered__ || r, e
            }
        }),o(["head", "last"], function (t, e) {
            var n = "take" + (e ? "Right" : "");
            Ie.prototype[t] = function () {
                return this[n](1).value()[0]
            }
        }),o(["initial", "tail"], function (t, e) {
            var n = "drop" + (e ? "" : "Right");
            Ie.prototype[t] = function () {
                return this.__filtered__ ? new Ie(this) : this[n](1)
            }
        }),Ie.prototype.compact = function () {
            return this.filter(Nu)
        },Ie.prototype.find = function (t) {
            return this.filter(t).head()
        },Ie.prototype.findLast = function (t) {
            return this.reverse().find(t)
        },Ie.prototype.invokeMap = Ma(function (t, e) {
            return "function" == typeof t ? new Ie(this) : this.map(function (n) {
                return Kn(n, t, e)
            })
        }),Ie.prototype.reject = function (t) {
            return t = xi(t, 3), this.filter(function (e) {
                return !t(e)
            })
        },Ie.prototype.slice = function (t, e) {
            t = Ts(t);
            var n = this;
            return n.__filtered__ && (t > 0 || 0 > e) ? new Ie(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== Z && (e = Ts(e), n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
        },Ie.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
        },Ie.prototype.toArray = function () {
            return this.take(St)
        },Fn(Ie.prototype, function (t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = Ae[r ? "take" + ("last" == e ? "Right" : "") : e], o = r || /^find/.test(e);
            i && (Ae.prototype[e] = function () {
                var e = this.__wrapped__, a = r ? [1] : arguments, s = e instanceof Ie, u = a[0], l = s || Kc(e), c = function (t) {
                    var e = i.apply(Ae, h([t], a));
                    return r && f ? e[0] : e
                };
                l && n && "function" == typeof u && 1 != u.length && (s = l = !1);
                var f = this.__chain__, d = !!this.__actions__.length, p = o && !f, g = s && !d;
                if (!o && l) {
                    e = g ? e : new Ie(this);
                    var m = t.apply(e, a);
                    return m.__actions__.push({func: Yo, args: [c], thisArg: Z}), new je(m, f)
                }
                return p && g ? t.apply(this, a) : (m = this.thru(c), p ? r ? m.value()[0] : m.value() : m)
            })
        }),o(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
            var e = ll[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(t);
            Ae.prototype[t] = function () {
                var t = arguments;
                if (r && !this.__chain__) {
                    var i = this.value();
                    return e.apply(Kc(i) ? i : [], t)
                }
                return this[n](function (n) {
                    return e.apply(Kc(n) ? n : [], t)
                })
            }
        }),Fn(Ie.prototype, function (t, e) {
            var n = Ae[e];
            if (n) {
                var r = n.name + "", i = Jl[r] || (Jl[r] = []);
                i.push({name: e, func: n})
            }
        }),Jl[si(Z, rt).name] = [{
            name: "wrapper",
            func: Z
        }],Ie.prototype.clone = Re,Ie.prototype.reverse = Ne,Ie.prototype.value = Ue,Ae.prototype.at = Ic,Ae.prototype.chain = Go,Ae.prototype.commit = Xo,Ae.prototype.next = Zo,Ae.prototype.plant = Jo,Ae.prototype.reverse = Qo,Ae.prototype.toJSON = Ae.prototype.valueOf = Ae.prototype.value = ta,Cl && (Ae.prototype[Cl] = Ko),Ae
    }

    var Z, K = "4.11.1", J = 200, Q = "Expected a function", tt = "__lodash_hash_undefined__", et = "__lodash_placeholder__", nt = 1, rt = 2, it = 4, ot = 8, at = 16, st = 32, ut = 64, lt = 128, ct = 256, ft = 512, ht = 1, dt = 2, pt = 30, gt = "...", mt = 150, vt = 16, yt = 1, $t = 2, wt = 3, bt = 1 / 0, xt = 9007199254740991, _t = 1.7976931348623157e308, kt = NaN, St = 4294967295, Ct = St - 1, Dt = St >>> 1, Tt = "[object Arguments]", At = "[object Array]", Et = "[object Boolean]", Mt = "[object Date]", Ot = "[object Error]", Pt = "[object Function]", jt = "[object GeneratorFunction]", It = "[object Map]", Rt = "[object Number]", Nt = "[object Object]", Ut = "[object Promise]", Ft = "[object RegExp]", Ht = "[object Set]", Lt = "[object String]", qt = "[object Symbol]", Vt = "[object WeakMap]", Wt = "[object WeakSet]", Bt = "[object ArrayBuffer]", zt = "[object DataView]", Yt = "[object Float32Array]", Gt = "[object Float64Array]", Xt = "[object Int8Array]", Zt = "[object Int16Array]", Kt = "[object Int32Array]", Jt = "[object Uint8Array]", Qt = "[object Uint8ClampedArray]", te = "[object Uint16Array]", ee = "[object Uint32Array]", ne = /\b__p \+= '';/g, re = /\b(__p \+=) '' \+/g, ie = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oe = /&(?:amp|lt|gt|quot|#39|#96);/g, ae = /[&<>"'`]/g, se = RegExp(oe.source), ue = RegExp(ae.source), le = /<%-([\s\S]+?)%>/g, ce = /<%([\s\S]+?)%>/g, fe = /<%=([\s\S]+?)%>/g, he = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, de = /^\w*$/, pe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, ge = /[\\^$.*+?()[\]{}|]/g, me = RegExp(ge.source), ve = /^\s+|\s+$/g, ye = /^\s+/, $e = /\s+$/, we = /[a-zA-Z0-9]+/g, be = /\\(\\)?/g, xe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _e = /\w*$/, ke = /^0x/i, Se = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, De = /^\[object .+?Constructor\]$/, Te = /^0o[0-7]+$/i, Ae = /^(?:0|[1-9]\d*)$/, Ee = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Me = /($^)/, Oe = /['\n\r\u2028\u2029\\]/g, Pe = "\\ud800-\\udfff", je = "\\u0300-\\u036f\\ufe20-\\ufe23", Ie = "\\u20d0-\\u20f0", Re = "\\u2700-\\u27bf", Ne = "a-z\\xdf-\\xf6\\xf8-\\xff", Ue = "\\xac\\xb1\\xd7\\xf7", Fe = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", He = "\\u2018\\u2019\\u201c\\u201d", Le = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qe = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ve = "\\ufe0e\\ufe0f", We = Ue + Fe + He + Le, Be = "['’]", ze = "[" + Pe + "]", Ye = "[" + We + "]", Ge = "[" + je + Ie + "]", Xe = "\\d+", Ze = "[" + Re + "]", Ke = "[" + Ne + "]", Je = "[^" + Pe + We + Xe + Re + Ne + qe + "]", Qe = "\\ud83c[\\udffb-\\udfff]", tn = "(?:" + Ge + "|" + Qe + ")", en = "[^" + Pe + "]", nn = "(?:\\ud83c[\\udde6-\\uddff]){2}", rn = "[\\ud800-\\udbff][\\udc00-\\udfff]", on = "[" + qe + "]", an = "\\u200d", sn = "(?:" + Ke + "|" + Je + ")", un = "(?:" + on + "|" + Je + ")", ln = "(?:" + Be + "(?:d|ll|m|re|s|t|ve))?", cn = "(?:" + Be + "(?:D|LL|M|RE|S|T|VE))?", fn = tn + "?", hn = "[" + Ve + "]?", dn = "(?:" + an + "(?:" + [en, nn, rn].join("|") + ")" + hn + fn + ")*", pn = hn + fn + dn, gn = "(?:" + [Ze, nn, rn].join("|") + ")" + pn, mn = "(?:" + [en + Ge + "?", Ge, nn, rn, ze].join("|") + ")", vn = RegExp(Be, "g"), yn = RegExp(Ge, "g"), $n = RegExp(Qe + "(?=" + Qe + ")|" + mn + pn, "g"), wn = RegExp([on + "?" + Ke + "+" + ln + "(?=" + [Ye, on, "$"].join("|") + ")", un + "+" + cn + "(?=" + [Ye, on + sn, "$"].join("|") + ")", on + "?" + sn + "+" + ln, on + "+" + cn, Xe, gn].join("|"), "g"), bn = RegExp("[" + an + Pe + je + Ie + Ve + "]"), xn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _n = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], kn = -1, Sn = {};
    Sn[Yt] = Sn[Gt] = Sn[Xt] = Sn[Zt] = Sn[Kt] = Sn[Jt] = Sn[Qt] = Sn[te] = Sn[ee] = !0, Sn[Tt] = Sn[At] = Sn[Bt] = Sn[Et] = Sn[zt] = Sn[Mt] = Sn[Ot] = Sn[Pt] = Sn[It] = Sn[Rt] = Sn[Nt] = Sn[Ft] = Sn[Ht] = Sn[Lt] = Sn[Vt] = !1;
    var Cn = {};
    Cn[Tt] = Cn[At] = Cn[Bt] = Cn[zt] = Cn[Et] = Cn[Mt] = Cn[Yt] = Cn[Gt] = Cn[Xt] = Cn[Zt] = Cn[Kt] = Cn[It] = Cn[Rt] = Cn[Nt] = Cn[Ft] = Cn[Ht] = Cn[Lt] = Cn[qt] = Cn[Jt] = Cn[Qt] = Cn[te] = Cn[ee] = !0, Cn[Ot] = Cn[Pt] = Cn[Vt] = !1;
    var Dn = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss"
    }, Tn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, An = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }, En = {"function": !0, object: !0}, Mn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, On = parseFloat, Pn = parseInt, jn = En[typeof exports] && exports && !exports.nodeType ? exports : Z, In = En[typeof module] && module && !module.nodeType ? module : Z, Rn = In && In.exports === jn ? jn : Z, Nn = M(jn && In && "object" == typeof global && global), Un = M(En[typeof self] && self), Fn = M(En[typeof window] && window), Hn = M(En[typeof this] && this), Ln = Nn || Fn !== (Hn && Hn.window) && Fn || Un || Hn || Function("return this")(), qn = X();
    (Fn || Un || {})._ = qn, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return qn
    }) : jn && In ? (Rn && ((In.exports = qn)._ = qn), jn._ = qn) : Ln._ = qn
}.call(this), function (t, e, n) {
    "use strict";
    function r(t, e) {
        return e = e || Error, function () {
            var n, r, i = arguments[0], o = "[" + (t ? t + ":" : "") + i + "] ", a = arguments[1], s = arguments;
            for (n = o + a.replace(/\{\d+\}/g, function (t) {
                    var e = +t.slice(1, -1);
                    return e + 2 < s.length ? ht(s[e + 2]) : t
                }), n = n + "\nhttp://errors.angularjs.org/1.3.19/" + (t ? t + "/" : "") + i, r = 2; r < arguments.length; r++)n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(ht(arguments[r]));
            return new e(n)
        }
    }

    function i(t) {
        if (null == t || S(t))return !1;
        var e = "length" in Object(t) && t.length;
        return t.nodeType === $r && e ? !0 : w(t) || hr(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        var r, a;
        if (t)if (_(t))for (r in t)"prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t); else if (hr(t) || i(t)) {
            var s = "object" != typeof t;
            for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== o)t.forEach(e, n, t); else for (r in t)t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        return t
    }

    function a(t) {
        return Object.keys(t).sort()
    }

    function s(t, e, n) {
        for (var r = a(t), i = 0; i < r.length; i++)e.call(n, t[r[i]], r[i]);
        return r
    }

    function u(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function l() {
        return ++cr
    }

    function c(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
            var i = arguments[n];
            if (i)for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
                var u = o[a];
                t[u] = i[u]
            }
        }
        return c(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function d(t, e) {
        return f(Object.create(t), e)
    }

    function p() {
    }

    function g(t) {
        return t
    }

    function m(t) {
        return function () {
            return t
        }
    }

    function v(t) {
        return "undefined" == typeof t
    }

    function y(t) {
        return "undefined" != typeof t
    }

    function $(t) {
        return null !== t && "object" == typeof t
    }

    function w(t) {
        return "string" == typeof t
    }

    function b(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === sr.call(t)
    }

    function _(t) {
        return "function" == typeof t
    }

    function k(t) {
        return "[object RegExp]" === sr.call(t)
    }

    function S(t) {
        return t && t.window === t
    }

    function C(t) {
        return t && t.$evalAsync && t.$watch
    }

    function D(t) {
        return "[object File]" === sr.call(t)
    }

    function T(t) {
        return "[object FormData]" === sr.call(t)
    }

    function A(t) {
        return "[object Blob]" === sr.call(t)
    }

    function E(t) {
        return "boolean" == typeof t
    }

    function M(t) {
        return t && _(t.then)
    }

    function O(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function P(t) {
        var e, n = {}, r = t.split(",");
        for (e = 0; e < r.length; e++)n[r[e]] = !0;
        return n
    }

    function j(t) {
        return Xn(t.nodeName || t[0] && t[0].nodeName)
    }

    function I(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), e
    }

    function R(t, e, n, r) {
        if (S(t) || C(t))throw ur("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (e) {
            if (t === e)throw ur("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], $(t)) {
                var i = n.indexOf(t);
                if (-1 !== i)return r[i];
                n.push(t), r.push(e)
            }
            var a;
            if (hr(t)) {
                e.length = 0;
                for (var s = 0; s < t.length; s++)a = R(t[s], null, n, r), $(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
            } else {
                var u = e.$$hashKey;
                hr(e) ? e.length = 0 : o(e, function (t, n) {
                    delete e[n]
                });
                for (var l in t)t.hasOwnProperty(l) && (a = R(t[l], null, n, r), $(t[l]) && (n.push(t[l]), r.push(a)), e[l] = a);
                c(e, u)
            }
        } else if (e = t, t)if (hr(t))e = R(t, [], n, r); else if (x(t))e = new Date(t.getTime()); else if (k(t))e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex; else if ($(t)) {
            var f = Object.create(Object.getPrototypeOf(t));
            e = R(t, f, n, r)
        }
        return e
    }

    function N(t, e) {
        if (hr(t)) {
            e = e || [];
            for (var n = 0, r = t.length; r > n; n++)e[n] = t[n]
        } else if ($(t)) {
            e = e || {};
            for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
        }
        return e || t
    }

    function U(t, e) {
        if (t === e)return !0;
        if (null === t || null === e)return !1;
        if (t !== t && e !== e)return !0;
        var r, i, o, a = typeof t, s = typeof e;
        if (a == s && "object" == a) {
            if (!hr(t)) {
                if (x(t))return x(e) ? U(t.getTime(), e.getTime()) : !1;
                if (k(t))return k(e) ? t.toString() == e.toString() : !1;
                if (C(t) || C(e) || S(t) || S(e) || hr(e) || x(e) || k(e))return !1;
                o = {};
                for (i in t)if ("$" !== i.charAt(0) && !_(t[i])) {
                    if (!U(t[i], e[i]))return !1;
                    o[i] = !0
                }
                for (i in e)if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !_(e[i]))return !1;
                return !0
            }
            if (!hr(e))return !1;
            if ((r = t.length) == e.length) {
                for (i = 0; r > i; i++)if (!U(t[i], e[i]))return !1;
                return !0
            }
        }
        return !1
    }

    function F(t, e, n) {
        return t.concat(ir.call(e, n))
    }

    function H(t, e) {
        return ir.call(t, e || 0)
    }

    function L(t, e) {
        var n = arguments.length > 2 ? H(arguments, 2) : [];
        return !_(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, F(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function q(t, r) {
        var i = r;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : S(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : C(r) && (i = "$SCOPE"), i
    }

    function V(t, e) {
        return "undefined" == typeof t ? n : (b(e) || (e = e ? 2 : null), JSON.stringify(t, q, e))
    }

    function W(t) {
        return w(t) ? JSON.parse(t) : t
    }

    function B(t) {
        t = er(t).clone();
        try {
            t.empty()
        } catch (e) {
        }
        var n = er("<div>").append(t).html();
        try {
            return t[0].nodeType === br ? Xn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Xn(e)
            })
        } catch (e) {
            return Xn(n)
        }
    }

    function z(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
        }
    }

    function Y(t) {
        var e, n, r = {};
        return o((t || "").split("&"), function (t) {
            if (t && (e = t.replace(/\+/g, "%20").split("="), n = z(e[0]), y(n))) {
                var i = y(e[1]) ? z(e[1]) : !0;
                Zn.call(r, n) ? hr(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function G(t) {
        var e = [];
        return o(t, function (t, n) {
            hr(t) ? o(t, function (t) {
                e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
            }) : e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function X(t) {
        return Z(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Z(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function K(t, e) {
        var n, r, i = mr.length;
        for (t = er(t), r = 0; i > r; ++r)if (n = mr[r] + e, w(n = t.attr(n)))return n;
        return null
    }

    function J(t, e) {
        var n, r, i = {};
        o(mr, function (e) {
            var i = e + "app";
            !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
        }), o(mr, function (e) {
            var i, o = e + "app";
            !n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== K(n, "strict-di"), e(n, r ? [r] : [], i))
    }

    function Q(n, r, i) {
        $(i) || (i = {});
        var a = {strictDi: !1};
        i = f(a, i);
        var s = function () {
            if (n = er(n), n.injector()) {
                var t = n[0] === e ? "document" : B(n);
                throw ur("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            r = r || [], r.unshift(["$provide", function (t) {
                t.value("$rootElement", n)
            }]), i.debugInfoEnabled && r.push(["$compileProvider", function (t) {
                t.debugInfoEnabled(!0)
            }]), r.unshift("ng");
            var o = Wt(r, i.strictDi);
            return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), o
        }, u = /^NG_ENABLE_DEBUG_INFO!/, l = /^NG_DEFER_BOOTSTRAP!/;
        return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !l.test(t.name) ? s() : (t.name = t.name.replace(l, ""), lr.resumeBootstrap = function (t) {
            return o(t, function (t) {
                r.push(t)
            }), s()
        }, void(_(lr.resumeDeferredBootstrap) && lr.resumeDeferredBootstrap()))
    }

    function tt() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function et(t) {
        var e = lr.element(t).injector();
        if (!e)throw ur("test", "no injector found for element argument to getTestability");
        return e.get("$$testability")
    }

    function nt(t, e) {
        return e = e || "_", t.replace(vr, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function rt() {
        var e;
        yr || (nr = t.jQuery, nr && nr.fn.on ? (er = nr, f(nr.fn, {
            scope: Fr.scope,
            isolateScope: Fr.isolateScope,
            controller: Fr.controller,
            injector: Fr.injector,
            inheritedData: Fr.inheritedData
        }), e = nr.cleanData, nr.cleanData = function (t) {
            var n;
            if (fr)fr = !1; else for (var r, i = 0; null != (r = t[i]); i++)n = nr._data(r, "events"), n && n.$destroy && nr(r).triggerHandler("$destroy");
            e(t)
        }) : er = wt, lr.element = er, yr = !0)
    }

    function it(t, e, n) {
        if (!t)throw ur("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }

    function ot(t, e, n) {
        return n && hr(t) && (t = t[t.length - 1]), it(_(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function at(t, e) {
        if ("hasOwnProperty" === t)throw ur("badname", "hasOwnProperty is not a valid {0} name", e)
    }

    function st(t, e, n) {
        if (!e)return t;
        for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++)r = i[s], t && (t = (o = t)[r]);
        return !n && _(t) ? L(o, t) : t
    }

    function ut(t) {
        var e = t[0], n = t[t.length - 1], r = [e];
        do {
            if (e = e.nextSibling, !e)break;
            r.push(e)
        } while (e !== n);
        return er(r)
    }

    function lt() {
        return Object.create(null)
    }

    function ct(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }

        var n = r("$injector"), i = r("ng"), o = e(t, "angular", Object);
        return o.$$minErr = o.$$minErr || r, e(o, "module", function () {
            var t = {};
            return function (r, o, a) {
                var s = function (t, e) {
                    if ("hasOwnProperty" === t)throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                };
                return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
                    function t(t, n, r, i) {
                        return i || (i = e), function () {
                            return i[r || "push"]([t, n, arguments]), l
                        }
                    }

                    if (!o)throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var e = [], i = [], s = [], u = t("$injector", "invoke", "push", i), l = {
                        _invokeQueue: e,
                        _configBlocks: i,
                        _runBlocks: s,
                        requires: o,
                        name: r,
                        provider: t("$provide", "provider"),
                        factory: t("$provide", "factory"),
                        service: t("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        animation: t("$animateProvider", "register"),
                        filter: t("$filterProvider", "register"),
                        controller: t("$controllerProvider", "register"),
                        directive: t("$compileProvider", "directive"),
                        config: u,
                        run: function (t) {
                            return s.push(t), this
                        }
                    };
                    return a && u(a), l
                })
            }
        })
    }

    function ft(t) {
        var e = [];
        return JSON.stringify(t, function (t, n) {
            if (n = q(t, n), $(n)) {
                if (e.indexOf(n) >= 0)return "<<already seen>>";
                e.push(n)
            }
            return n
        })
    }

    function ht(t) {
        return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? ft(t) : t
    }

    function dt(e) {
        f(e, {
            bootstrap: Q,
            copy: R,
            extend: f,
            equals: U,
            element: er,
            forEach: o,
            injector: Wt,
            noop: p,
            bind: L,
            toJson: V,
            fromJson: W,
            identity: g,
            isUndefined: v,
            isDefined: y,
            isString: w,
            isFunction: _,
            isObject: $,
            isNumber: b,
            isElement: O,
            isArray: hr,
            version: Sr,
            isDate: x,
            lowercase: Xn,
            uppercase: Kn,
            callbacks: {counter: 0},
            getTestability: et,
            $$minErr: r,
            $$csp: gr,
            reloadWithDebugInfo: tt
        }), rr = ct(t);
        try {
            rr("ngLocale")
        } catch (n) {
            rr("ngLocale", []).provider("$locale", me)
        }
        rr("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: Ge}), t.provider("$compile", Kt).directive({
                a: Mi,
                input: Gi,
                textarea: Gi,
                form: Ri,
                script: Uo,
                select: Lo,
                style: Vo,
                option: qo,
                ngBind: Ki,
                ngBindHtml: Qi,
                ngBindTemplate: Ji,
                ngClass: eo,
                ngClassEven: ro,
                ngClassOdd: no,
                ngCloak: io,
                ngController: oo,
                ngForm: Ni,
                ngHide: Oo,
                ngIf: uo,
                ngInclude: lo,
                ngInit: fo,
                ngNonBindable: Co,
                ngPluralize: Do,
                ngRepeat: To,
                ngShow: Mo,
                ngStyle: Po,
                ngSwitch: jo,
                ngSwitchWhen: Io,
                ngSwitchDefault: Ro,
                ngOptions: Ho,
                ngTransclude: No,
                ngModel: _o,
                ngList: ho,
                ngChange: to,
                pattern: Bo,
                ngPattern: Bo,
                required: Wo,
                ngRequired: Wo,
                minlength: Yo,
                ngMinlength: Yo,
                maxlength: zo,
                ngMaxlength: zo,
                ngValue: Zi,
                ngModelOptions: So
            }).directive({ngInclude: co}).directive(Oi).directive(ao), t.provider({
                $anchorScroll: Bt,
                $animate: Xr,
                $browser: Gt,
                $cacheFactory: Xt,
                $controller: ee,
                $document: ne,
                $exceptionHandler: re,
                $filter: sn,
                $interpolate: pe,
                $interval: ge,
                $http: ce,
                $httpBackend: he,
                $location: Ee,
                $log: Me,
                $parse: qe,
                $rootScope: Ye,
                $q: Ve,
                $$q: We,
                $sce: Je,
                $sceDelegate: Ke,
                $sniffer: Qe,
                $templateCache: Zt,
                $templateRequest: tn,
                $$testability: en,
                $timeout: nn,
                $window: an,
                $$rAF: ze,
                $$asyncCallback: zt,
                $$jqLite: Ft
            })
        }])
    }

    function pt() {
        return ++Dr
    }

    function gt(t) {
        return t.replace(Er, function (t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Mr, "Moz$1")
    }

    function mt(t) {
        return !Ir.test(t)
    }

    function vt(t) {
        var e = t.nodeType;
        return e === $r || !e || e === _r
    }

    function yt(t, e) {
        var n, r, i, a, s = e.createDocumentFragment(), u = [];
        if (mt(t))u.push(e.createTextNode(t)); else {
            for (n = n || s.appendChild(e.createElement("div")), r = (Rr.exec(t) || ["", ""])[1].toLowerCase(), i = Ur[r] || Ur._default, n.innerHTML = i[1] + t.replace(Nr, "<$1></$2>") + i[2], a = i[0]; a--;)n = n.lastChild;
            u = F(u, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(u, function (t) {
            s.appendChild(t)
        }), s
    }

    function $t(t, n) {
        n = n || e;
        var r;
        return (r = jr.exec(t)) ? [n.createElement(r[1])] : (r = yt(t, n)) ? r.childNodes : []
    }

    function wt(t) {
        if (t instanceof wt)return t;
        var e;
        if (w(t) && (t = dr(t), e = !0), !(this instanceof wt)) {
            if (e && "<" != t.charAt(0))throw Pr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new wt(t)
        }
        e ? Et(this, $t(t)) : Et(this, t)
    }

    function bt(t) {
        return t.cloneNode(!0)
    }

    function xt(t, e) {
        if (e || kt(t), t.querySelectorAll)for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)kt(n[r])
    }

    function _t(t, e, n, r) {
        if (y(r))throw Pr("offargs", "jqLite#off() does not support the `selector` argument");
        var i = St(t), a = i && i.events, s = i && i.handle;
        if (s)if (e)o(e.split(" "), function (e) {
            if (y(n)) {
                var r = a[e];
                if (I(r || [], n), r && r.length > 0)return
            }
            Ar(t, e, s), delete a[e]
        }); else for (e in a)"$destroy" !== e && Ar(t, e, s), delete a[e]
    }

    function kt(t, e) {
        var r = t.ng339, i = r && Cr[r];
        if (i) {
            if (e)return void delete i.data[e];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), _t(t)), delete Cr[r], t.ng339 = n
        }
    }

    function St(t, e) {
        var r = t.ng339, i = r && Cr[r];
        return e && !i && (t.ng339 = r = pt(), i = Cr[r] = {events: {}, data: {}, handle: n}), i
    }

    function Ct(t, e, n) {
        if (vt(t)) {
            var r = y(n), i = !r && e && !$(e), o = !e, a = St(t, !i), s = a && a.data;
            if (r)s[e] = n; else {
                if (o)return s;
                if (i)return s && s[e];
                f(s, e)
            }
        }
    }

    function Dt(t, e) {
        return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
    }

    function Tt(t, e) {
        e && t.setAttribute && o(e.split(" "), function (e) {
            t.setAttribute("class", dr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + dr(e) + " ", " ")))
        })
    }

    function At(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function (t) {
                t = dr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", dr(n))
        }
    }

    function Et(t, e) {
        if (e)if (e.nodeType)t[t.length++] = e; else {
            var n = e.length;
            if ("number" == typeof n && e.window !== e) {
                if (n)for (var r = 0; n > r; r++)t[t.length++] = e[r]
            } else t[t.length++] = e
        }
    }

    function Mt(t, e) {
        return Ot(t, "$" + (e || "ngController") + "Controller")
    }

    function Ot(t, e, r) {
        t.nodeType == _r && (t = t.documentElement);
        for (var i = hr(e) ? e : [e]; t;) {
            for (var o = 0, a = i.length; a > o; o++)if ((r = er.data(t, i[o])) !== n)return r;
            t = t.parentNode || t.nodeType === kr && t.host
        }
    }

    function Pt(t) {
        for (xt(t, !0); t.firstChild;)t.removeChild(t.firstChild)
    }

    function jt(t, e) {
        e || xt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function It(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : er(n).on("load", e)
    }

    function Rt(t, e) {
        var n = Hr[e.toLowerCase()];
        return n && Lr[j(t)] && n
    }

    function Nt(t, e) {
        var n = t.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && qr[e]
    }

    function Ut(t, e) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = e[r || n.type], o = i ? i.length : 0;
            if (o) {
                if (v(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (i = N(i));
                for (var s = 0; o > s; s++)n.isImmediatePropagationStopped() || i[s].call(t, n)
            }
        };
        return n.elem = t, n
    }

    function Ft() {
        this.$get = function () {
            return f(wt, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), Dt(t, e)
                }, addClass: function (t, e) {
                    return t.attr && (t = t[0]), At(t, e)
                }, removeClass: function (t, e) {
                    return t.attr && (t = t[0]), Tt(t, e)
                }
            })
        }
    }

    function Ht(t, e) {
        var n = t && t.$$hashKey;
        if (n)return "function" == typeof n && (n = t.$$hashKey()), n;
        var r = typeof t;
        return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || l)() : r + ":" + t
    }

    function Lt(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(t, this.put, this)
    }

    function qt(t) {
        var e = t.toString().replace(zr, ""), n = e.match(Vr);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Vt(t, e, n) {
        var r, i, a, s;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e)throw w(n) && n || (n = t.name || qt(t)), Yr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = t.toString().replace(zr, ""), a = i.match(Vr), o(a[1].split(Wr), function (t) {
                        t.replace(Br, function (t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else hr(t) ? (s = t.length - 1, ot(t[s], "fn"), r = t.slice(0, s)) : ot(t, "fn", !0);
        return r
    }

    function Wt(t, e) {
        function r(t) {
            return function (e, n) {
                return $(e) ? void o(e, u(t)) : t(e, n)
            }
        }

        function i(t, e) {
            if (at(t, "service"), (_(e) || hr(e)) && (e = C.instantiate(e)), !e.$get)throw Yr("pget", "Provider '{0}' must define $get factory method.", t);
            return S[t + b] = e
        }

        function a(t, e) {
            return function () {
                var n = T.invoke(e, this);
                if (v(n))throw Yr("undef", "Provider '{0}' must return a value from $get factory method.", t);
                return n
            }
        }

        function s(t, e, n) {
            return i(t, {$get: n !== !1 ? a(t, e) : e})
        }

        function l(t, e) {
            return s(t, ["$injector", function (t) {
                return t.instantiate(e)
            }])
        }

        function c(t, e) {
            return s(t, m(e), !1)
        }

        function f(t, e) {
            at(t, "constant"), S[t] = e, D[t] = e
        }

        function h(t, e) {
            var n = C.get(t + b), r = n.$get;
            n.$get = function () {
                var t = T.invoke(r, n);
                return T.invoke(e, null, {$delegate: t})
            }
        }

        function d(t) {
            var e, n = [];
            return o(t, function (t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; n > e; e++) {
                        var r = t[e], i = C.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!k.get(t)) {
                    k.put(t, !0);
                    try {
                        w(t) ? (e = rr(t), n = n.concat(d(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : _(t) ? n.push(C.invoke(t)) : hr(t) ? n.push(C.invoke(t)) : ot(t, "module")
                    } catch (i) {
                        throw hr(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Yr("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function g(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === y)throw Yr("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
                    return t[e]
                }
                try {
                    return x.unshift(e), t[e] = y, t[e] = n(e, r)
                } catch (i) {
                    throw t[e] === y && delete t[e], i
                } finally {
                    x.shift()
                }
            }

            function i(t, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, s, u, l = [], c = Wt.$$annotate(t, e, o);
                for (s = 0, a = c.length; a > s; s++) {
                    if (u = c[s], "string" != typeof u)throw Yr("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    l.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                }
                return hr(t) && (t = t[a]), t.apply(n, l)
            }

            function o(t, e, n) {
                var r = Object.create((hr(t) ? t[t.length - 1] : t).prototype || null), o = i(t, r, e, n);
                return $(o) || _(o) ? o : r
            }

            return {
                invoke: i, instantiate: o, get: r, annotate: Wt.$$annotate, has: function (e) {
                    return S.hasOwnProperty(e + b) || t.hasOwnProperty(e)
                }
            }
        }

        e = e === !0;
        var y = {}, b = "Provider", x = [], k = new Lt([], !0), S = {
            $provide: {
                provider: r(i),
                factory: r(s),
                service: r(l),
                value: r(c),
                constant: r(f),
                decorator: h
            }
        }, C = S.$injector = g(S, function (t, e) {
            throw lr.isString(e) && x.push(e), Yr("unpr", "Unknown provider: {0}", x.join(" <- "))
        }), D = {}, T = D.$injector = g(D, function (t, e) {
            var r = C.get(t + b, e);
            return T.invoke(r.$get, r, n, t)
        });
        return o(d(t), function (t) {
            T.invoke(t || p)
        }), T
    }

    function Bt() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    return "a" === j(t) ? (e = t, !0) : void 0
                }), e
            }

            function o() {
                var t = s.yOffset;
                if (_(t))t = t(); else if (O(t)) {
                    var n = t[0], r = e.getComputedStyle(n);
                    t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else b(t) || (t = 0);
                return t
            }

            function a(t) {
                if (t) {
                    t.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = t.getBoundingClientRect().top;
                        e.scrollBy(0, r - n)
                    }
                } else e.scrollTo(0, 0)
            }

            function s() {
                var t, e = n.hash();
                e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }

            var u = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function (t, e) {
                (t !== e || "" !== t) && It(function () {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function zt() {
        this.$get = ["$$rAF", "$timeout", function (t, e) {
            return t.supported ? function (e) {
                return t(e)
            } : function (t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Yt(t, e, r, i) {
        function a(t) {
            try {
                t.apply(null, H(arguments, 1))
            } finally {
                if (k--, 0 === k)for (; S.length;)try {
                    S.pop()()
                } catch (e) {
                    r.error(e)
                }
            }
        }

        function s(t) {
            var e = t.indexOf("#");
            return -1 === e ? "" : t.substr(e)
        }

        function u(t, e) {
            !function n() {
                o(D, function (t) {
                    t()
                }), C = e(n, t)
            }()
        }

        function l() {
            f(), h()
        }

        function c() {
            try {
                return $.state
            } catch (t) {
            }
        }

        function f() {
            T = c(), T = v(T) ? null : T, U(T, I) && (T = I), I = T
        }

        function h() {
            (E !== g.url() || A !== T) && (E = g.url(), A = T, o(P, function (t) {
                t(g.url(), T)
            }))
        }

        function d(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        var g = this, m = e[0], y = t.location, $ = t.history, b = t.setTimeout, x = t.clearTimeout, _ = {};
        g.isMock = !1;
        var k = 0, S = [];
        g.$$completeOutstandingRequest = a, g.$$incOutstandingRequestCount = function () {
            k++
        }, g.notifyWhenNoOutstandingRequests = function (t) {
            o(D, function (t) {
                t()
            }), 0 === k ? t() : S.push(t)
        };
        var C, D = [];
        g.addPollFn = function (t) {
            return v(C) && u(100, b), D.push(t), t
        };
        var T, A, E = y.href, M = e.find("base"), O = null;
        f(), A = T, g.url = function (e, n, r) {
            if (v(r) && (r = null), y !== t.location && (y = t.location), $ !== t.history && ($ = t.history), e) {
                var o = A === r;
                if (E === e && (!i.history || o))return g;
                var a = E && be(E) === be(e);
                return E = e, A = r, !i.history || a && o ? ((!a || O) && (O = e), n ? y.replace(e) : a ? y.hash = s(e) : y.href = e) : ($[n ? "replaceState" : "pushState"](r, "", e), f(), A = T), g
            }
            return O || y.href.replace(/%27/g, "'")
        }, g.state = function () {
            return T
        };
        var P = [], j = !1, I = null;
        g.onUrlChange = function (e) {
            return j || (i.history && er(t).on("popstate", l), er(t).on("hashchange", l), j = !0), P.push(e), e
        }, g.$$checkUrlChange = h, g.baseHref = function () {
            var t = M.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var R = {}, N = "", F = g.baseHref();
        g.cookies = function (t, e) {
            var i, o, a, s, u;
            if (!t) {
                if (m.cookie !== N)for (N = m.cookie, o = N.split("; "), R = {}, s = 0; s < o.length; s++)a = o[s], u = a.indexOf("="), u > 0 && (t = d(a.substring(0, u)), R[t] === n && (R[t] = d(a.substring(u + 1))));
                return R
            }
            e === n ? m.cookie = encodeURIComponent(t) + "=;path=" + F + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(e) && (i = (m.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + F).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, g.defer = function (t, e) {
            var n;
            return k++, n = b(function () {
                delete _[n], a(t)
            }, e || 0), _[n] = !0, n
        }, g.defer.cancel = function (t) {
            return _[t] ? (delete _[t], x(t), a(p), !0) : !1
        }
    }

    function Gt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
            return new Yt(t, r, e, n)
        }]
    }

    function Xt() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t != h && (d ? d == t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in e)throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                var a = 0, s = f({}, n, {id: t}), u = {}, l = n && n.capacity || Number.MAX_VALUE, c = {}, h = null, d = null;
                return e[t] = {
                    put: function (t, e) {
                        if (l < Number.MAX_VALUE) {
                            var n = c[t] || (c[t] = {key: t});
                            i(n)
                        }
                        if (!v(e))return t in u || a++, u[t] = e, a > l && this.remove(d.key), e
                    }, get: function (t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e)return;
                            i(e)
                        }
                        return u[t]
                    }, remove: function (t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e)return;
                            e == h && (h = e.p), e == d && (d = e.n), o(e.n, e.p), delete c[t]
                        }
                        delete u[t], a--
                    }, removeAll: function () {
                        u = {}, a = 0, c = {}, h = d = null
                    }, destroy: function () {
                        u = null, s = null, c = null, delete e[t]
                    }, info: function () {
                        return f({}, s, {size: a})
                    }
                }
            }

            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function Zt() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Kt(t, r) {
        function i(t, e) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
            return o(t, function (t, i) {
                var o = t.match(n);
                if (!o)throw Zr("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
                r[i] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || i}
            }), r
        }

        function a(t) {
            var e = t.charAt(0);
            if (!e || e !== Xn(e))throw Zr("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", t);
            return t
        }

        var s = {}, l = "Directive", c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, h = /(([\w\-]+)(?:\:([^;]+))?;?)/, v = P("ngSrc,ngSrcset,src,srcset"), b = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, x = /^(on[a-z]+|formaction)$/;
        this.directive = function S(e, n) {
            return at(e, "directive"), w(e) ? (a(e), it(n, "directiveFactory"), s.hasOwnProperty(e) || (s[e] = [], t.factory(e + l, ["$injector", "$exceptionHandler", function (t, n) {
                var r = [];
                return o(s[e], function (o, a) {
                    try {
                        var s = t.invoke(o);
                        _(s) ? s = {compile: m(s)} : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", $(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), s[e].push(n)) : o(e, u(S)), this
        }, this.aHrefSanitizationWhitelist = function (t) {
            return y(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (t) {
            return y(t) ? (k = t, this) : k
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, i, a, u, m, y, S, D, T, A) {
            function E(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {
                }
            }

            function M(t, e, n, r, i) {
                t instanceof er || (t = er(t)), o(t, function (e, n) {
                    e.nodeType == br && e.nodeValue.match(/\S+/) && (t[n] = er(e).wrap("<span></span>").parent()[0])
                });
                var a = P(t, e, t, n, r, i);
                M.$$addScopeClass(t);
                var s = null;
                return function (e, n, r) {
                    it(e, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn, o = r.transcludeControllers, u = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = O(u));
                    var l;
                    if (l = "html" !== s ? er(J(s, er("<div>").append(t).html())) : n ? Fr.clone.call(t) : t, o)for (var c in o)l.data("$" + c + "Controller", o[c].instance);
                    return M.$$addScopeInfo(l, e), n && n(l, e), a && a(e, l, l, i), l
                }
            }

            function O(t) {
                var e = t && t[0];
                return e && "foreignobject" !== j(e) && e.toString().match(/SVG/) ? "svg" : "html"
            }

            function P(t, e, r, i, o, a) {
                function s(t, r, i, o) {
                    var a, s, u, l, c, f, h, d, m;
                    if (p) {
                        var v = r.length;
                        for (m = new Array(v), c = 0; c < g.length; c += 3)h = g[c], m[h] = r[h]
                    } else m = r;
                    for (c = 0, f = g.length; f > c;)u = m[g[c++]], a = g[c++], s = g[c++], a ? (a.scope ? (l = t.$new(), M.$$addScopeInfo(er(u), l)) : l = t, d = a.transcludeOnThisElement ? R(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? R(t, e) : null, a(s, l, u, i, d)) : s && s(t, u.childNodes, n, o)
                }

                for (var u, l, c, f, h, d, p, g = [], m = 0; m < t.length; m++)u = new at, l = N(t[m], [], u, 0 === m ? i : n, o), c = l.length ? q(l, t[m], u, e, r, null, [], [], a) : null, c && c.scope && M.$$addScopeClass(u.$$element), h = c && c.terminal || !(f = t[m].childNodes) || !f.length ? null : P(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || h) && (g.push(m, c, h), d = !0, p = p || c), a = null;
                return d ? s : null
            }

            function R(t, e, n, r) {
                var i = function (r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return i
            }

            function N(t, e, n, r, i) {
                var o, a, s = t.nodeType, u = n.$attr;
                switch (s) {
                    case $r:
                        W(e, Jt(j(t)), "E", r, i);
                        for (var l, f, d, p, g, m, v = t.attributes, y = 0, b = v && v.length; b > y; y++) {
                            var x = !1, _ = !1;
                            l = v[y], f = l.name, g = dr(l.value), p = Jt(f), (m = ft.test(p)) && (f = f.replace(Kr, "").substr(8).replace(/_(.)/g, function (t, e) {
                                return e.toUpperCase()
                            }));
                            var k = p.replace(/(Start|End)$/, "");
                            z(k) && p === k + "Start" && (x = f, _ = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), d = Jt(f.toLowerCase()), u[d] = f, (m || !n.hasOwnProperty(d)) && (n[d] = g, Rt(t, d) && (n[d] = !0)), tt(t, e, g, d, m), W(e, d, "A", r, i, x, _)
                        }
                        if (a = t.className, $(a) && (a = a.animVal), w(a) && "" !== a)for (; o = h.exec(a);)d = Jt(o[2]), W(e, d, "C", r, i) && (n[d] = dr(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case br:
                        K(e, t.nodeValue);
                        break;
                    case xr:
                        try {
                            o = c.exec(t.nodeValue), o && (d = Jt(o[1]), W(e, d, "M", r, i) && (n[d] = dr(o[2])))
                        } catch (S) {
                        }
                }
                return e.sort(X), e
            }

            function F(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t)throw Zr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                        t.nodeType == $r && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (i > 0)
                } else r.push(t);
                return er(r)
            }

            function L(t, e, n) {
                return function (r, i, o, a, s) {
                    return i = F(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function q(t, a, s, l, c, f, h, d, p) {
                function g(t, e, n, r) {
                    t && (n && (t = L(t, n, r)), t.require = S.require, t.directiveName = D, (j === S || S.$$isolateScope) && (t = rt(t, {isolateScope: !0})), h.push(t)), e && (n && (e = L(e, n, r)), e.require = S.require, e.directiveName = D, (j === S || S.$$isolateScope) && (e = rt(e, {isolateScope: !0})), d.push(e))
                }

                function v(t, e, n, r) {
                    var i, a, s = "data", u = !1, l = n;
                    if (w(e)) {
                        if (a = e.match(b), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", l = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || l[s]("$" + e + "Controller"), !i && !u)throw Zr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                        return i || null
                    }
                    return hr(e) && (i = [], o(e, function (e) {
                        i.push(v(t, e, n, r))
                    })), i
                }

                function y(t, e, i, l, c) {
                    function f(t, e, r) {
                        var i;
                        return C(t) || (r = e, e = t, t = n), z && (i = b), r || (r = z ? _.parent() : _), c(t, e, i, r, A)
                    }

                    var p, g, y, $, w, b, x, _, S;
                    if (a === i ? (S = s, _ = s.$$element) : (_ = er(i), S = new at(_, s)), j && (w = e.$new(!0)), c && (x = f, x.$$boundTransclude = c), P && (k = {}, b = {}, o(P, function (t) {
                            var n, r = {
                                $scope: t === j || t.$$isolateScope ? w : e,
                                $element: _,
                                $attrs: S,
                                $transclude: x
                            };
                            $ = t.controller, "@" == $ && ($ = S[t.name]), n = m($, r, !0, t.controllerAs), b[t.name] = n, z || _.data("$" + t.name + "Controller", n.instance), k[t.name] = n
                        })), j) {
                        M.$$addScopeInfo(_, w, !0, !(I && (I === j || I === j.$$originalDirective))), M.$$addScopeClass(_, !0);
                        var D = k && k[j.name], T = w;
                        D && D.identifier && j.bindToController === !0 && (T = D.instance), o(w.$$isolateBindings = j.$$isolateBindings, function (t, n) {
                            var i, o, a, s, l = t.attrName, c = t.optional, f = t.mode;
                            switch (f) {
                                case"@":
                                    S.$observe(l, function (t) {
                                        T[n] = t
                                    }), S.$$observers[l].$$scope = e, S[l] && (T[n] = r(S[l])(e));
                                    break;
                                case"=":
                                    if (c && !S[l])return;
                                    o = u(S[l]), s = o.literal ? U : function (t, e) {
                                        return t === e || t !== t && e !== e
                                    }, a = o.assign || function () {
                                            throw i = T[n] = o(e), Zr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", S[l], j.name)
                                        }, i = T[n] = o(e);
                                    var h = function (t) {
                                        return s(t, T[n]) || (s(t, i) ? a(e, t = T[n]) : T[n] = t), i = t
                                    };
                                    h.$stateful = !0;
                                    var d;
                                    d = t.collection ? e.$watchCollection(S[l], h) : e.$watch(u(S[l], h), null, o.literal), w.$on("$destroy", d);
                                    break;
                                case"&":
                                    o = u(S[l]), T[n] = function (t) {
                                        return o(e, t)
                                    }
                            }
                        })
                    }
                    for (k && (o(k, function (t) {
                        t()
                    }), k = null), p = 0, g = h.length; g > p; p++)y = h[p], ot(y, y.isolateScope ? w : e, _, S, y.require && v(y.directiveName, y.require, _, b), x);
                    var A = e;
                    for (j && (j.template || null === j.templateUrl) && (A = w), t && t(A, i.childNodes, n, c), p = d.length - 1; p >= 0; p--)y = d[p], ot(y, y.isolateScope ? w : e, _, S, y.require && v(y.directiveName, y.require, _, b), x)
                }

                p = p || {};
                for (var x, k, S, D, T, A, E, O = -Number.MAX_VALUE, P = p.controllerDirectives, j = p.newIsolateScopeDirective, I = p.templateDirective, R = p.nonTlbTranscludeDirective, q = !1, W = !1, z = p.hasElementTranscludeDirective, X = s.$$element = er(a), K = f, Q = l, tt = 0, nt = t.length; nt > tt; tt++) {
                    S = t[tt];
                    var it = S.$$start, st = S.$$end;
                    if (it && (X = F(a, it, st)), T = n, O > S.priority)break;
                    if ((E = S.scope) && (S.templateUrl || ($(E) ? (Z("new/isolated scope", j || x, S, X), j = S) : Z("new/isolated scope", j, S, X)), x = x || S), D = S.name, !S.templateUrl && S.controller && (E = S.controller, P = P || {}, Z("'" + D + "' controller", P[D], S, X), P[D] = S), (E = S.transclude) && (q = !0, S.$$tlb || (Z("transclusion", R, S, X), R = S), "element" == E ? (z = !0, O = S.priority, T = X, X = s.$$element = er(e.createComment(" " + D + ": " + s[D] + " ")), a = X[0], et(c, H(T), a), Q = M(T, l, O, K && K.name, {nonTlbTranscludeDirective: R})) : (T = er(bt(a)).contents(), X.empty(), Q = M(T, l))), S.template)if (W = !0, Z("template", I, S, X), I = S, E = _(S.template) ? S.template(X, s) : S.template, E = ct(E), S.replace) {
                        if (K = S, T = mt(E) ? [] : te(J(S.templateNamespace, dr(E))), a = T[0], 1 != T.length || a.nodeType !== $r)throw Zr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", D, "");
                        et(c, X, a);
                        var ut = {$attr: {}}, lt = N(a, [], ut), ft = t.splice(tt + 1, t.length - (tt + 1));
                        j && V(lt), t = t.concat(lt).concat(ft), Y(s, ut), nt = t.length
                    } else X.html(E);
                    if (S.templateUrl)W = !0, Z("template", I, S, X), I = S, S.replace && (K = S), y = G(t.splice(tt, t.length - tt), X, s, c, q && Q, h, d, {
                        controllerDirectives: P,
                        newIsolateScopeDirective: j,
                        templateDirective: I,
                        nonTlbTranscludeDirective: R
                    }), nt = t.length; else if (S.compile)try {
                        A = S.compile(X, s, Q), _(A) ? g(null, A, it, st) : A && g(A.pre, A.post, it, st)
                    } catch (ht) {
                        i(ht, B(X))
                    }
                    S.terminal && (y.terminal = !0, O = Math.max(O, S.priority))
                }
                return y.scope = x && x.scope === !0, y.transcludeOnThisElement = q, y.elementTranscludeOnThisElement = z, y.templateOnThisElement = W, y.transclude = Q, p.hasElementTranscludeDirective = z, y
            }

            function V(t) {
                for (var e = 0, n = t.length; n > e; e++)t[e] = d(t[e], {$$isolateScope: !0})
            }

            function W(e, r, o, a, u, c, f) {
                if (r === u)return null;
                var h = null;
                if (s.hasOwnProperty(r))for (var p, g = t.get(r + l), m = 0, v = g.length; v > m; m++)try {
                    p = g[m], (a === n || a > p.priority) && -1 != p.restrict.indexOf(o) && (c && (p = d(p, {
                        $$start: c,
                        $$end: f
                    })), e.push(p), h = p)
                } catch (y) {
                    i(y)
                }
                return h
            }

            function z(e) {
                if (s.hasOwnProperty(e))for (var n, r = t.get(e + l), i = 0, o = r.length; o > i; i++)if (n = r[i], n.multiElement)return !0;
                return !1
            }

            function Y(t, e) {
                var n = e.$attr, r = t.$attr, i = t.$$element;
                o(t, function (r, i) {
                    "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function (e, o) {
                    "class" == o ? (E(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                })
            }

            function G(t, e, n, r, i, s, u, l) {
                var c, f, h = [], p = e[0], g = t.shift(), m = d(g, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: g
                }), v = _(g.templateUrl) ? g.templateUrl(e, n) : g.templateUrl, y = g.templateNamespace;
                return e.empty(), a(v).then(function (a) {
                    var d, w, b, x;
                    if (a = ct(a), g.replace) {
                        if (b = mt(a) ? [] : te(J(y, dr(a))), d = b[0], 1 != b.length || d.nodeType !== $r)throw Zr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, v);
                        w = {$attr: {}}, et(r, e, d);
                        var _ = N(d, [], w);
                        $(g.scope) && V(_), t = _.concat(t), Y(n, w)
                    } else d = p, e.html(a);
                    for (t.unshift(m), c = q(t, d, n, i, e, g, s, u, l), o(r, function (t, n) {
                        t == d && (r[n] = e[0])
                    }), f = P(e[0].childNodes, i); h.length;) {
                        var k = h.shift(), S = h.shift(), C = h.shift(), D = h.shift(), T = e[0];
                        if (!k.$$destroyed) {
                            if (S !== p) {
                                var A = S.className;
                                l.hasElementTranscludeDirective && g.replace || (T = bt(d)), et(C, er(S), T), E(er(T), A)
                            }
                            x = c.transcludeOnThisElement ? R(k, c.transclude, D) : D, c(f, k, T, r, x)
                        }
                    }
                    h = null
                }), function (t, e, n, r, i) {
                    var o = i;
                    e.$$destroyed || (h ? h.push(e, n, r, o) : (c.transcludeOnThisElement && (o = R(e, c.transclude, i)), c(f, e, n, r, o)))
                }
            }

            function X(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function Z(t, e, n, r) {
                if (e)throw Zr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, B(r))
            }

            function K(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0, compile: function (t) {
                        var e = t.parent(), r = !!e.length;
                        return r && M.$$addBindingClass(e), function (t, e) {
                            var i = e.parent();
                            r || M.$$addBindingClass(i), M.$$addBindingInfo(i, n.expressions), t.$watch(n, function (t) {
                                e[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function J(t, n) {
                switch (t = Xn(t || "html")) {
                    case"svg":
                    case"math":
                        var r = e.createElement("div");
                        return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Q(t, e) {
                if ("srcdoc" == e)return D.HTML;
                var n = j(t);
                return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? D.RESOURCE_URL : void 0
            }

            function tt(t, e, n, i, o) {
                var a = Q(t, i);
                o = v[i] || o;
                var s = r(n, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === j(t))throw Zr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", B(t));
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, e, u) {
                                    var l = u.$$observers || (u.$$observers = {});
                                    if (x.test(i))throw Zr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = u[i];
                                    c !== n && (s = c && r(c, !0, a, o), n = c), s && (u[i] = s(t), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function (t, e) {
                                        "class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function et(t, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (t)for (i = 0, o = t.length; o > i; i++)if (t[i] == a) {
                    t[i++] = r;
                    for (var l = i, c = l + s - 1, f = t.length; f > l; l++, c++)f > c ? t[l] = t[c] : delete t[l];
                    t.length -= s - 1, t.context === a && (t.context = r);
                    break
                }
                u && u.replaceChild(r, a);
                var h = e.createDocumentFragment();
                h.appendChild(a), er(r).data(er(a).data()), nr ? (fr = !0, nr.cleanData([a])) : delete er.cache[a[er.expando]];
                for (var d = 1, p = n.length; p > d; d++) {
                    var g = n[d];
                    er(g).remove(), h.appendChild(g), delete n[d]
                }
                n[0] = r, n.length = 1
            }

            function rt(t, e) {
                return f(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function ot(t, e, n, r, o, a) {
                try {
                    t(e, n, r, o, a)
                } catch (s) {
                    i(s, B(n))
                }
            }

            var at = function (t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; r > n; n++)i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            };
            at.prototype = {
                $normalize: Jt, $addClass: function (t) {
                    t && t.length > 0 && T.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && t.length > 0 && T.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = Qt(t, e);
                    n && n.length && T.addClass(this.$$element, n);
                    var r = Qt(e, t);
                    r && r.length && T.removeClass(this.$$element, r)
                }, $set: function (t, e, r, a) {
                    var s, u = this.$$element[0], l = Rt(u, t), c = Nt(u, t), f = t;
                    if (l ? (this.$$element.prop(t, e), a = l) : c && (this[c] = e, f = c), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = nt(t, "-"))), s = j(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t)this[t] = e = A(e, "src" === t); else if ("img" === s && "srcset" === t) {
                        for (var h = "", d = dr(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, g = /\s/.test(d) ? p : /(,)/, m = d.split(g), v = Math.floor(m.length / 2), y = 0; v > y; y++) {
                            var $ = 2 * y;
                            h += A(dr(m[$]), !0), h += " " + dr(m[$ + 1])
                        }
                        var w = dr(m[2 * y]).split(/\s/);
                        h += A(dr(w[0]), !0), 2 === w.length && (h += " " + dr(w[1])), this[t] = e = h
                    }
                    r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
                    var b = this.$$observers;
                    b && o(b[f], function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            i(n)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = lt()), i = r[t] || (r[t] = []);
                    return i.push(e), y.$evalAsync(function () {
                        !i.$$inter && n.hasOwnProperty(t) && e(n[t])
                    }), function () {
                        I(i, e)
                    }
                }
            };
            var st = r.startSymbol(), ut = r.endSymbol(), ct = "{{" == st || "}}" == ut ? g : function (t) {
                return t.replace(/\{\{/g, st).replace(/}}/g, ut)
            }, ft = /^ngAttr[A-Z]/;
            return M.$$addBindingInfo = k ? function (t, e) {
                var n = t.data("$binding") || [];
                hr(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : p, M.$$addBindingClass = k ? function (t) {
                E(t, "ng-binding")
            } : p, M.$$addScopeInfo = k ? function (t, e, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                t.data(i, e)
            } : p, M.$$addScopeClass = k ? function (t, e) {
                E(t, e ? "ng-isolate-scope" : "ng-scope")
            } : p, M
        }]
    }

    function Jt(t) {
        return gt(t.replace(Kr, ""))
    }

    function Qt(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/);
        t:for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)if (a == i[s])continue t;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function te(t) {
        t = er(t);
        var e = t.length;
        if (1 >= e)return t;
        for (; e--;) {
            var n = t[e];
            n.nodeType === xr && or.call(t, e, 1)
        }
        return t
    }

    function ee() {
        var t = {}, e = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (e, n) {
            at(e, "controller"), $(e) ? f(t, e) : t[e] = n
        }, this.allowGlobals = function () {
            e = !0
        }, this.$get = ["$injector", "$window", function (o, a) {
            function s(t, e, n, i) {
                if (!t || !$(t.$scope))throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                t.$scope[e] = n
            }

            return function (r, u, l, c) {
                var h, d, p, g;
                if (l = l === !0, c && w(c) && (g = c), w(r)) {
                    if (d = r.match(i), !d)throw Jr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    p = d[1], g = g || d[3], r = t.hasOwnProperty(p) ? t[p] : st(u.$scope, p, !0) || (e ? st(a, p, !0) : n), ot(r, p, !0)
                }
                if (l) {
                    var m = (hr(r) ? r[r.length - 1] : r).prototype;
                    return h = Object.create(m || null), g && s(u, g, h, p || r.name), f(function () {
                        return o.invoke(r, h, u, p), h
                    }, {instance: h, identifier: g})
                }
                return h = o.instantiate(r, u, p), g && s(u, g, h, p || r.name), h
            }
        }]
    }

    function ne() {
        this.$get = ["$window", function (t) {
            return er(t.document)
        }]
    }

    function re() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function ie(t, e) {
        if (w(t)) {
            var n = t.replace(ri, "").trim();
            if (n) {
                var r = e("Content-Type");
                (r && 0 === r.indexOf(Qr) || oe(n)) && (t = W(n))
            }
        }
        return t
    }

    function oe(t) {
        var e = t.match(ei);
        return e && ni[e[0]].test(t)
    }

    function ae(t) {
        var e, n, r, i = lt();
        return t ? (o(t.split("\n"), function (t) {
            r = t.indexOf(":"), e = Xn(dr(t.substr(0, r))), n = dr(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
        }), i) : i
    }

    function se(t) {
        var e = $(t) ? t : n;
        return function (n) {
            if (e || (e = ae(t)), n) {
                var r = e[Xn(n)];
                return void 0 === r && (r = null), r
            }
            return e
        }
    }

    function ue(t, e, n, r) {
        return _(r) ? r(t, e, n) : (o(r, function (r) {
            t = r(t, e, n)
        }), t)
    }

    function le(t) {
        return t >= 200 && 300 > t
    }

    function ce() {
        var t = this.defaults = {
            transformResponse: [ie],
            transformRequest: [function (t) {
                return !$(t) || D(t) || A(t) || T(t) ? t : V(t)
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: N(ti), put: N(ti), patch: N(ti)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, e = !1;
        this.useApplyAsync = function (t) {
            return y(t) ? (e = !!t, this) : e
        };
        var i = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, u, l, c, h, d) {
            function p(e) {
                function i(t) {
                    var e = f({}, t);
                    return t.data ? e.data = ue(t.data, t.headers, t.status, u.transformResponse) : e.data = t.data, le(t.status) ? e : h.reject(e)
                }

                function a(t) {
                    var e, n = {};
                    return o(t, function (t, r) {
                        _(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
                    }), n
                }

                function s(e) {
                    var n, r, i, o = t.headers, s = f({}, e.headers);
                    o = f({}, o.common, o[Xn(e.method)]);
                    t:for (n in o) {
                        r = Xn(n);
                        for (i in s)if (Xn(i) === r)continue t;
                        s[n] = o[n]
                    }
                    return a(s)
                }

                if (!lr.isObject(e))throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                var u = f({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse
                }, e);
                u.headers = s(e), u.method = Kn(u.method);
                var l = function (e) {
                    var r = e.headers, a = ue(e.data, se(r), n, e.transformRequest);
                    return v(a) && o(r, function (t, e) {
                        "content-type" === Xn(e) && delete r[e]
                    }), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), b(e, a).then(i, i)
                }, c = [l, n], d = h.when(u);
                for (o(C, function (t) {
                    (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
                }); c.length;) {
                    var p = c.shift(), g = c.shift();
                    d = d.then(p, g)
                }
                return d.success = function (t) {
                    return ot(t, "fn"), d.then(function (e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d.error = function (t) {
                    return ot(t, "fn"), d.then(null, function (e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d
            }

            function g(t) {
                o(arguments, function (t) {
                    p[t] = function (e, n) {
                        return p(f(n || {}, {method: t, url: e}))
                    }
                })
            }

            function m(t) {
                o(arguments, function (t) {
                    p[t] = function (e, n, r) {
                        return p(f(r || {}, {method: t, url: e, data: n}))
                    }
                })
            }

            function b(r, i) {
                function o(t, n, r, i) {
                    function o() {
                        s(n, t, r, i)
                    }

                    d && (le(t) ? d.put(x, [t, n, ae(r), i]) : d.remove(x)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                }

                function s(t, e, n, i) {
                    e = e >= -1 ? e : 0, (le(e) ? m.resolve : m.reject)({
                        data: t,
                        status: e,
                        headers: se(n),
                        config: r,
                        statusText: i
                    })
                }

                function l(t) {
                    s(t.data, t.status, N(t.headers()), t.statusText)
                }

                function f() {
                    var t = p.pendingRequests.indexOf(r);
                    -1 !== t && p.pendingRequests.splice(t, 1)
                }

                var d, g, m = h.defer(), w = m.promise, b = r.headers, x = k(r.url, r.params);
                if (p.pendingRequests.push(r), w.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (d = $(r.cache) ? r.cache : $(t.cache) ? t.cache : S), d && (g = d.get(x), y(g) ? M(g) ? g.then(l, l) : hr(g) ? s(g[1], g[0], N(g[2]), g[3]) : s(g, 200, {}, "OK") : d.put(x, w)), v(g)) {
                    var _ = on(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
                    _ && (b[r.xsrfHeaderName || t.xsrfHeaderName] = _), a(r.method, x, i, o, b, r.timeout, r.withCredentials, r.responseType)
                }
                return w
            }

            function k(t, e) {
                if (!e)return t;
                var n = [];
                return s(e, function (t, e) {
                    null === t || v(t) || (hr(t) || (t = [t]), o(t, function (t) {
                        $(t) && (t = x(t) ? t.toISOString() : V(t)), n.push(Z(e) + "=" + Z(t))
                    }))
                }), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }

            var S = l("$http"), C = [];
            return o(i, function (t) {
                C.unshift(w(t) ? d.get(t) : d.invoke(t))
            }), p.pendingRequests = [], g("get", "delete", "head", "jsonp"), m("post", "put", "patch"), p.defaults = t, p
        }]
    }

    function fe() {
        return new t.XMLHttpRequest
    }

    function he() {
        this.$get = ["$browser", "$window", "$document", function (t, e, n) {
            return de(t, fe, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function de(t, e, r, i, a) {
        function s(t, e, n) {
            var r = a.createElement("script"), o = null;
            return r.type = "text/javascript", r.src = t, r.async = !0, o = function (t) {
                Ar(r, "load", o), Ar(r, "error", o), a.body.removeChild(r), r = null;
                var s = -1, u = "unknown";
                t && ("load" !== t.type || i[e].called || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, Tr(r, "load", o), Tr(r, "error", o), a.body.appendChild(r), o
        }

        return function (a, u, l, c, f, h, d, g) {
            function m() {
                w && w(), b && b.abort()
            }

            function v(e, i, o, a, s) {
                k !== n && r.cancel(k), w = b = null, e(i, o, a, s), t.$$completeOutstandingRequest(p)
            }

            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Xn(a)) {
                var $ = "_" + (i.counter++).toString(36);
                i[$] = function (t) {
                    i[$].data = t, i[$].called = !0
                };
                var w = s(u.replace("JSON_CALLBACK", "angular.callbacks." + $), $, function (t, e) {
                    v(c, t, i[$].data, "", e), i[$] = p
                })
            } else {
                var b = e();
                b.open(a, u, !0), o(f, function (t, e) {
                    y(t) && b.setRequestHeader(e, t)
                }), b.onload = function () {
                    var t = b.statusText || "", e = "response" in b ? b.response : b.responseText, n = 1223 === b.status ? 204 : b.status;
                    0 === n && (n = e ? 200 : "file" == rn(u).protocol ? 404 : 0), v(c, n, e, b.getAllResponseHeaders(), t)
                };
                var x = function () {
                    v(c, -1, null, null, "")
                };
                if (b.onerror = x, b.onabort = x, d && (b.withCredentials = !0), g)try {
                    b.responseType = g
                } catch (_) {
                    if ("json" !== g)throw _
                }
                b.send(l || null)
            }
            if (h > 0)var k = r(m, h); else M(h) && h.then(m)
        }
    }

    function pe() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(o, a, h, d) {
                function p(n) {
                    return n.replace(l, t).replace(c, e)
                }

                function g(t) {
                    try {
                        return t = A(t), d && !y(t) ? t : E(t)
                    } catch (e) {
                        var n = ii("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                        r(n)
                    }
                }

                d = !!d;
                for (var m, $, w, b = 0, x = [], k = [], S = o.length, C = [], D = []; S > b;) {
                    if (-1 == (m = o.indexOf(t, b)) || -1 == ($ = o.indexOf(e, m + s))) {
                        b !== S && C.push(p(o.substring(b)));
                        break
                    }
                    b !== m && C.push(p(o.substring(b, m))), w = o.substring(m + s, $), x.push(w), k.push(n(w, g)), b = $ + u, D.push(C.length), C.push("")
                }
                if (h && C.length > 1)throw ii("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!a || x.length) {
                    var T = function (t) {
                        for (var e = 0, n = x.length; n > e; e++) {
                            if (d && v(t[e]))return;
                            C[D[e]] = t[e]
                        }
                        return C.join("")
                    }, A = function (t) {
                        return h ? i.getTrusted(h, t) : i.valueOf(t)
                    }, E = function (t) {
                        if (null == t)return "";
                        switch (typeof t) {
                            case"string":
                                break;
                            case"number":
                                t = "" + t;
                                break;
                            default:
                                t = V(t)
                        }
                        return t
                    };
                    return f(function (t) {
                        var e = 0, n = x.length, i = new Array(n);
                        try {
                            for (; n > e; e++)i[e] = k[e](t);
                            return T(i)
                        } catch (a) {
                            var s = ii("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(s)
                        }
                    }, {
                        exp: o, expressions: x, $$watchDelegate: function (t, e, n) {
                            var r;
                            return t.$watchGroup(k, function (n, i) {
                                var o = T(n);
                                _(e) && e.call(this, o, n !== i ? r : o, t), r = o
                            }, n)
                        }
                    })
                }
            }

            var s = t.length, u = e.length, l = new RegExp(t.replace(/./g, o), "g"), c = new RegExp(e.replace(/./g, o), "g");
            return a.startSymbol = function () {
                return t
            }, a.endSymbol = function () {
                return e
            }, a
        }]
    }

    function ge() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (t, e, n, r) {
            function i(i, a, s, u) {
                var l = e.setInterval, c = e.clearInterval, f = 0, h = y(u) && !u, d = (h ? r : n).defer(), p = d.promise;
                return s = y(s) ? s : 0, p.then(null, null, i), p.$$intervalId = l(function () {
                    d.notify(f++), s > 0 && f >= s && (d.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), h || t.$apply()
                }, a), o[p.$$intervalId] = d, p
            }

            var o = {};
            return i.cancel = function (t) {
                return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
            }, i
        }]
    }

    function me() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function ve(t) {
        for (var e = t.split("/"), n = e.length; n--;)e[n] = X(e[n]);
        return e.join("/")
    }

    function ye(t, e) {
        var n = rn(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || ai[n.protocol] || null
    }

    function $e(t, e) {
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var r = rn(t);
        e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = Y(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function we(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }

    function be(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function xe(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function _e(t) {
        return t.substr(0, be(t).lastIndexOf("/") + 1)
    }

    function ke(t) {
        return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
    }

    function Se(t, e, r) {
        this.$$html5 = !0, r = r || "", ye(t, this), this.$$parse = function (t) {
            var n = we(e, t);
            if (!w(n))throw si("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
            $e(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = G(this.$$search), n = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i, o) {
            if (o && "#" === o[0])return this.hash(o.slice(1)), !0;
            var a, s, u;
            return (a = we(t, i)) !== n ? (s = a, u = (a = we(r, a)) !== n ? e + (we("/", a) || a) : t + s) : (a = we(e, i)) !== n ? u = e + a : e == i + "/" && (u = e), u && this.$$parse(u), !!u
        }
    }

    function Ce(t, e, n) {
        ye(t, this), this.$$parse = function (r) {
            function i(t, e, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
            }

            var o, a = we(t, r) || we(e, r);
            v(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", v(a) && (t = r, this.replace())) : (o = we(n, a), v(o) && (o = a)), $e(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
        }, this.$$compose = function () {
            var e = G(this.$$search), r = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function (e, n) {
            return be(t) == be(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function De(t, e, n) {
        this.$$html5 = !0, Ce.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
            var o, a;
            return t == be(r) ? o = r : (a = we(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
        }, this.$$compose = function () {
            var e = G(this.$$search), r = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + n + this.$$url
        }
    }

    function Te(t) {
        return function () {
            return this[t]
        }
    }

    function Ae(t, e) {
        return function (n) {
            return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Ee() {
        var t = "", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return E(t) ? (e.enabled = t, this) : $(t) ? (E(t.enabled) && (e.enabled = t.enabled), E(t.requireBase) && (e.requireBase = t.requireBase), E(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function s(t, e, n) {
                var i = l.url(), o = l.$$state;
                try {
                    r.url(t, e, n), l.$$state = r.state()
                } catch (a) {
                    throw l.url(i), l.$$state = o, a
                }
            }

            function u(t, e) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
            }

            var l, c, f, h = r.baseHref(), d = r.url();
            if (e.enabled) {
                if (!h && e.requireBase)throw si("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                f = ke(d) + (h || "/"), c = i.history ? Se : De
            } else f = be(d), c = Ce;
            var p = _e(f);
            l = new c(f, p, "#" + t), l.$$parseLinkUrl(d, d), l.$$state = r.state();
            var g = /^\s*(javascript|mailto):/i;
            o.on("click", function (t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                    for (var i = er(t.target); "a" !== j(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
                    var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
                    $(s) && "[object SVGAnimatedString]" === s.toString() && (s = rn(s.animVal).href), g.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (t.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), xe(l.absUrl()) != xe(d) && r.url(l.absUrl(), !0);
            var m = !0;
            return r.onUrlChange(function (t, e) {
                return v(we(p, t)) ? void(a.location.href = t) : (n.$evalAsync(function () {
                    var r, i = l.absUrl(), o = l.$$state;
                    l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, u(i, o)))
                }), void(n.$$phase || n.$digest()))
            }), n.$watch(function () {
                var t = xe(r.url()), e = xe(l.absUrl()), o = r.state(), a = l.$$replace, c = t !== e || l.$$html5 && i.history && o !== l.$$state;
                (m || c) && (m = !1, n.$evalAsync(function () {
                    var e = l.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                    l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (c && s(e, a, o === l.$$state ? null : l.$$state), u(t, o)))
                })), l.$$replace = !1
            }), l
        }]
    }

    function Me() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || p, a = !1;
                try {
                    a = !!i.apply
                } catch (s) {
                }
                return a ? function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(r(e))
                    }), i.apply(e, t)
                } : function (t, e) {
                    i(t, null == e ? "" : e)
                }
            }

            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Oe(t, e) {
        if (t = $(t) && t.toString ? t.toString() : t, "__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)throw li("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
        return t
    }

    function Pe(t, e) {
        if (t) {
            if (t.constructor === t)throw li("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t.window === t)throw li("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find))throw li("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
            if (t === Object)throw li("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
        }
        return t
    }

    function je(t, e) {
        if (t) {
            if (t.constructor === t)throw li("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t === ci || t === fi || t === hi)throw li("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
        }
    }

    function Ie(t) {
        return t.constant
    }

    function Re(t, e, n, r, i) {
        Pe(t, i), Pe(e, i);
        for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
            o = Oe(a.shift(), i);
            var u = 0 === s && e && e[o] || t[o];
            u || (u = {}, t[o] = u), t = Pe(u, i)
        }
        return o = Oe(a.shift(), i), Pe(t[o], i), t[o] = r, r
    }

    function Ne(t) {
        return "constructor" == t
    }

    function Ue(t, e, r, i, o, a, s) {
        Oe(t, a), Oe(e, a), Oe(r, a), Oe(i, a), Oe(o, a);
        var u = function (t) {
            return Pe(t, a)
        }, l = s || Ne(t) ? u : g, c = s || Ne(e) ? u : g, f = s || Ne(r) ? u : g, h = s || Ne(i) ? u : g, d = s || Ne(o) ? u : g;
        return function (a, s) {
            var u = s && s.hasOwnProperty(t) ? s : a;
            return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = c(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = h(u[i]), o ? null == u ? n : u = d(u[o]) : u) : u) : u) : u)
        }
    }

    function Fe(t, e) {
        return function (n, r) {
            return t(n, r, Pe, e)
        }
    }

    function He(t, e, r) {
        var i = e.expensiveChecks, a = i ? $i : yi, s = a[t];
        if (s)return s;
        var u = t.split("."), l = u.length;
        if (e.csp)s = 6 > l ? Ue(u[0], u[1], u[2], u[3], u[4], r, i) : function (t, e) {
            var o, a = 0;
            do o = Ue(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o; while (l > a);
            return o
        }; else {
            var c = "";
            i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(u, function (t, e) {
                Oe(t, r);
                var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
                (i || Ne(t)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), c += "return s;";
            var h = new Function("s", "l", "eso", "fe", c);
            h.toString = m(c), f && (h = Fe(h, r)), s = h
        }
        return s.sharedGetter = !0, s.assign = function (e, n, r) {
            return Re(e, r, t, n, t)
        }, a[t] = s, s
    }

    function Le(t) {
        return _(t.valueOf) ? t.valueOf() : wi.call(t)
    }

    function qe() {
        var t = lt(), e = lt();
        this.$get = ["$filter", "$sniffer", function (n, r) {
            function i(t) {
                var e = t;
                return t.sharedGetter && (e = function (e, n) {
                    return t(e, n)
                }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
            }

            function a(t, e) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
                }
                return e
            }

            function s(t, e) {
                return null == t || null == e ? t === e : "object" == typeof t && (t = Le(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
            }

            function u(t, e, n, r) {
                var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                if (1 === o.length) {
                    var u = s;
                    return o = o[0], t.$watch(function (t) {
                        var e = o(t);
                        return s(e, u) || (i = r(t), u = e && Le(e)), i
                    }, e, n)
                }
                for (var l = [], c = 0, f = o.length; f > c; c++)l[c] = s;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, a = o.length; a > n; n++) {
                        var u = o[n](t);
                        (e || (e = !s(u, l[n]))) && (l[n] = u && Le(u))
                    }
                    return e && (i = r(t)), i
                }, e, n)
            }

            function l(t, e, n, r) {
                var i, o;
                return i = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    o = t, _(e) && e.apply(this, arguments), y(t) && r.$$postDigest(function () {
                        y(o) && i()
                    })
                }, n)
            }

            function c(t, e, n, r) {
                function i(t) {
                    var e = !0;
                    return o(t, function (t) {
                        y(t) || (e = !1)
                    }), e
                }

                var a, s;
                return a = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    s = t, _(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function () {
                        i(s) && a()
                    })
                }, n)
            }

            function f(t, e, n, r) {
                var i;
                return i = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    _(e) && e.apply(this, arguments), i()
                }, n)
            }

            function h(t, e) {
                if (!e)return t;
                var n = t.$$watchDelegate, r = n !== c && n !== l, i = r ? function (n, r) {
                    var i = t(n, r);
                    return e(i, n, r)
                } : function (n, r) {
                    var i = t(n, r), o = e(i, n, r);
                    return y(i) ? o : i
                };
                return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
            }

            var d = {csp: r.csp, expensiveChecks: !1}, g = {csp: r.csp, expensiveChecks: !0};
            return function (r, o, a) {
                var s, m, v;
                switch (typeof r) {
                    case"string":
                        v = r = r.trim();
                        var y = a ? e : t;
                        if (s = y[v], !s) {
                            ":" === r.charAt(0) && ":" === r.charAt(1) && (m = !0, r = r.substring(2));
                            var $ = a ? g : d, w = new mi($), b = new vi(w, n, $);
                            s = b.parse(r), s.constant ? s.$$watchDelegate = f : m ? (s = i(s), s.$$watchDelegate = s.literal ? c : l) : s.inputs && (s.$$watchDelegate = u), y[v] = s
                        }
                        return h(s, o);
                    case"function":
                        return h(r, o);
                    default:
                        return h(p, o)
                }
            }
        }]
    }

    function Ve() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return Be(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function We() {
        this.$get = ["$browser", "$exceptionHandler", function (t, e) {
            return Be(function (e) {
                t.defer(e)
            }, e)
        }]
    }

    function Be(t, e) {
        function i(t, e, n) {
            function r(e) {
                return function (n) {
                    i || (i = !0, e.call(t, n))
                }
            }

            var i = !1;
            return [r(e), r(n)]
        }

        function a() {
            this.$$state = {status: 0}
        }

        function s(t, e) {
            return function (n) {
                e.call(t, n)
            }
        }

        function u(t) {
            var r, i, o;
            o = t.pending, t.processScheduled = !1, t.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
                i = o[a][0], r = o[a][t.status];
                try {
                    _(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
                } catch (u) {
                    i.reject(u), e(u)
                }
            }
        }

        function l(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
                u(e)
            }))
        }

        function c() {
            this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function f(t) {
            var e = new c, n = 0, r = hr(t) ? [] : {};
            return o(t, function (t, i) {
                n++, v(t).then(function (t) {
                    r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                }, function (t) {
                    r.hasOwnProperty(i) || e.reject(t)
                })
            }), 0 === n && e.resolve(r), e.promise
        }

        var h = r("$q", TypeError), d = function () {
            return new c
        };
        a.prototype = {
            then: function (t, e, n) {
                var r = new c;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && l(this.$$state), r.promise
            }, "catch": function (t) {
                return this.then(null, t)
            }, "finally": function (t, e) {
                return this.then(function (e) {
                    return m(e, !0, t)
                }, function (e) {
                    return m(e, !1, t)
                }, e)
            }
        }, c.prototype = {
            resolve: function (t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
            }, $$resolve: function (t) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    ($(t) || _(t)) && (n = t && t.then), _(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
                } catch (o) {
                    r[1](o), e(o)
                }
            }, reject: function (t) {
                this.promise.$$state.status || this.$$reject(t)
            }, $$reject: function (t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
            }, notify: function (n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && t(function () {
                    for (var t, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], t = r[o][3];
                        try {
                            i.notify(_(t) ? t(n) : n)
                        } catch (s) {
                            e(s)
                        }
                    }
                })
            }
        };
        var p = function (t) {
            var e = new c;
            return e.reject(t), e.promise
        }, g = function (t, e) {
            var n = new c;
            return e ? n.resolve(t) : n.reject(t), n.promise
        }, m = function (t, e, n) {
            var r = null;
            try {
                _(n) && (r = n())
            } catch (i) {
                return g(i, !1)
            }
            return M(r) ? r.then(function () {
                return g(t, e)
            }, function (t) {
                return g(t, !1)
            }) : g(t, e)
        }, v = function (t, e, n, r) {
            var i = new c;
            return i.resolve(t), i.promise.then(e, n, r)
        }, y = function w(t) {
            function e(t) {
                r.resolve(t)
            }

            function n(t) {
                r.reject(t)
            }

            if (!_(t))throw h("norslvr", "Expected resolverFn, got '{0}'", t);
            if (!(this instanceof w))return new w(t);
            var r = new c;
            return t(e, n), r.promise
        };
        return y.defer = d, y.reject = p, y.when = v, y.all = f, y
    }

    function ze() {
        this.$get = ["$window", "$timeout", function (t, e) {
            function n() {
                for (var t = 0; t < c.length; t++) {
                    var e = c[t];
                    e && (c[t] = null, e())
                }
                l = c.length = 0
            }

            function r(t) {
                var e = c.length;
                return l++, c.push(t), 0 === e && (u = s(n)), function () {
                    e >= 0 && (c[e] = null, e = null, 0 === --l && u && (u(), u = null, c.length = 0))
                }
            }

            var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame, o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, a = !!i, s = a ? function (t) {
                var e = i(t);
                return function () {
                    o(e)
                }
            } : function (t) {
                var n = e(t, 16.66, !1);
                return function () {
                    e.cancel(n)
                }
            };
            r.supported = a;
            var u, l = 0, c = [];
            return r
        }]
    }

    function Ye() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$ChildScope = null
            }

            return e.prototype = t, e
        }

        var e = 10, n = r("$rootScope"), a = null, s = null;
        this.digestTtl = function (t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, u, c, f) {
            function h(t) {
                t.currentScope.$$destroyed = !0
            }

            function d() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function g(t) {
                if (k.$$phase)throw n("inprog", "{0} already in progress", k.$$phase);
                k.$$phase = t
            }

            function m() {
                k.$$phase = null
            }

            function y(t, e, n) {
                do t.$$listenerCount[n] -= e,
                0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function w() {
            }

            function b() {
                for (; D.length;)try {
                    D.shift()()
                } catch (t) {
                    u(t)
                }
                s = null
            }

            function x() {
                null === s && (s = f.defer(function () {
                    k.$apply(b)
                }))
            }

            d.prototype = {
                constructor: d, $new: function (e, n) {
                    var r;
                    return n = n || this, e ? (r = new d, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n != this) && r.$on("$destroy", h), r
                }, $watch: function (t, e, n) {
                    var r = c(t);
                    if (r.$$watchDelegate)return r.$$watchDelegate(this, e, n, r);
                    var i = this, o = i.$$watchers, s = {fn: e, last: w, get: r, exp: t, eq: !!n};
                    return a = null, _(e) || (s.fn = p), o || (o = i.$$watchers = []), o.unshift(s), function () {
                        I(o, s), a = null
                    }
                }, $watchGroup: function (t, e) {
                    function n() {
                        u = !1, l ? (l = !1, e(i, i, s)) : e(i, r, s)
                    }

                    var r = new Array(t.length), i = new Array(t.length), a = [], s = this, u = !1, l = !0;
                    if (!t.length) {
                        var c = !0;
                        return s.$evalAsync(function () {
                            c && e(i, i, s)
                        }), function () {
                            c = !1
                        }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
                        i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                    }) : (o(t, function (t, e) {
                        var o = s.$watch(t, function (t, o) {
                            i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function () {
                        for (; a.length;)a.shift()()
                    })
                }, $watchCollection: function (t, e) {
                    function n(t) {
                        o = t;
                        var e, n, r, s, u;
                        if (!v(o)) {
                            if ($(o))if (i(o)) {
                                a !== d && (a = d, m = a.length = 0, f++), e = o.length, m !== e && (f++, a.length = m = e);
                                for (var l = 0; e > l; l++)u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
                            } else {
                                a !== p && (a = p = {}, m = 0, f++), e = 0;
                                for (n in o)o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (m++, a[n] = s, f++));
                                if (m > e) {
                                    f++;
                                    for (n in a)o.hasOwnProperty(n) || (m--, delete a[n])
                                }
                            } else a !== o && (a = o, f++);
                            return f
                        }
                    }

                    function r() {
                        if (g ? (g = !1, e(o, o, u)) : e(o, s, u), l)if ($(o))if (i(o)) {
                            s = new Array(o.length);
                            for (var t = 0; t < o.length; t++)s[t] = o[t]
                        } else {
                            s = {};
                            for (var n in o)Zn.call(o, n) && (s[n] = o[n])
                        } else s = o
                    }

                    n.$stateful = !0;
                    var o, a, s, u = this, l = e.length > 1, f = 0, h = c(t, n), d = [], p = {}, g = !0, m = 0;
                    return this.$watch(h, r)
                }, $digest: function () {
                    var t, r, i, o, l, c, h, d, p, v, y = e, $ = this, x = [];
                    g("$digest"), f.$$checkUrlChange(), this === k && null !== s && (f.defer.cancel(s), b()), a = null;
                    do {
                        for (c = !1, d = $; S.length;) {
                            try {
                                v = S.shift(), v.scope.$eval(v.expression, v.locals)
                            } catch (D) {
                                u(D)
                            }
                            a = null
                        }
                        t:do {
                            if (o = d.$$watchers)for (l = o.length; l--;)try {
                                if (t = o[l])if ((r = t.get(d)) === (i = t.last) || (t.eq ? U(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                    if (t === a) {
                                        c = !1;
                                        break t
                                    }
                                } else c = !0, a = t, t.last = t.eq ? R(r, null) : r, t.fn(r, i === w ? r : i, d), 5 > y && (p = 4 - y, x[p] || (x[p] = []), x[p].push({
                                    msg: _(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                    newVal: r,
                                    oldVal: i
                                }))
                            } catch (D) {
                                u(D)
                            }
                            if (!(h = d.$$childHead || d !== $ && d.$$nextSibling))for (; d !== $ && !(h = d.$$nextSibling);)d = d.$parent
                        } while (d = h);
                        if ((c || S.length) && !y--)throw m(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x)
                    } while (c || S.length);
                    for (m(); C.length;)try {
                        C.shift()()
                    } catch (D) {
                        u(D)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== k) {
                            for (var e in this.$$listenerCount)y(this, this.$$listenerCount[e], e);
                            t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                                return p
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (t, e) {
                    return c(t)(this, e)
                }, $evalAsync: function (t, e) {
                    k.$$phase || S.length || f.defer(function () {
                        S.length && k.$digest()
                    }), S.push({scope: this, expression: t, locals: e})
                }, $$postDigest: function (t) {
                    C.push(t)
                }, $apply: function (t) {
                    try {
                        return g("$apply"), this.$eval(t)
                    } catch (e) {
                        u(e)
                    } finally {
                        m();
                        try {
                            k.$digest()
                        } catch (e) {
                            throw u(e), e
                        }
                    }
                }, $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }

                    var n = this;
                    t && D.push(e), x()
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(e);
                        -1 !== r && (n[r] = null, y(i, 1, t))
                    }
                }, $emit: function (t, e) {
                    var n, r, i, o = [], a = this, s = !1, l = {
                        name: t, targetScope: a, stopPropagation: function () {
                            s = !0
                        }, preventDefault: function () {
                            l.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, c = F([l], arguments, 1);
                    do {
                        for (n = a.$$listeners[t] || o, l.currentScope = a, r = 0, i = n.length; i > r; r++)if (n[r])try {
                            n[r].apply(null, c)
                        } catch (f) {
                            u(f)
                        } else n.splice(r, 1), r--, i--;
                        if (s)return l.currentScope = null, l;
                        a = a.$parent
                    } while (a);
                    return l.currentScope = null, l
                }, $broadcast: function (t, e) {
                    var n = this, r = n, i = n, o = {
                        name: t, targetScope: n, preventDefault: function () {
                            o.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!n.$$listenerCount[t])return o;
                    for (var a, s, l, c = F([o], arguments, 1); r = i;) {
                        for (o.currentScope = r, a = r.$$listeners[t] || [], s = 0, l = a.length; l > s; s++)if (a[s])try {
                            a[s].apply(null, c)
                        } catch (f) {
                            u(f)
                        } else a.splice(s, 1), s--, l--;
                        if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling))for (; r !== n && !(i = r.$$nextSibling);)r = r.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var k = new d, S = k.$$asyncQueue = [], C = k.$$postDigestQueue = [], D = k.$$applyAsyncQueue = [];
            return k
        }]
    }

    function Ge() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? e : t;
                return i = rn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Xe(t) {
        if ("self" === t)return t;
        if (w(t)) {
            if (t.indexOf("***") > -1)throw bi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
            return t = pr(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (k(t))return new RegExp("^" + t.source + "$");
        throw bi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ze(t) {
        var e = [];
        return y(t) && o(t, function (t) {
            e.push(Xe(t))
        }), e
    }

    function Ke() {
        this.SCE_CONTEXTS = xi;
        var t = ["self"], e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = Ze(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = Ze(t)), e
        }, this.$get = ["$injector", function (r) {
            function i(t, e) {
                return "self" === t ? on(e) : !!t.exec(e.href)
            }

            function o(n) {
                var r, o, a = rn(n.toString()), s = !1;
                for (r = 0, o = t.length; o > r; r++)if (i(t[r], a)) {
                    s = !0;
                    break
                }
                if (s)for (r = 0, o = e.length; o > r; r++)if (i(e[r], a)) {
                    s = !1;
                    break
                }
                return s
            }

            function a(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            function s(t, e) {
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (!r)throw bi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                if (null === e || e === n || "" === e)return e;
                if ("string" != typeof e)throw bi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                return new r(e)
            }

            function u(t) {
                return t instanceof f ? t.$$unwrapTrustedValue() : t
            }

            function l(t, e) {
                if (null === e || e === n || "" === e)return e;
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (r && e instanceof r)return e.$$unwrapTrustedValue();
                if (t === xi.RESOURCE_URL) {
                    if (o(e))return e;
                    throw bi("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                }
                if (t === xi.HTML)return c(e);
                throw bi("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var c = function (t) {
                throw bi("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (c = r.get("$sanitize"));
            var f = a(), h = {};
            return h[xi.HTML] = a(f), h[xi.CSS] = a(f), h[xi.URL] = a(f), h[xi.JS] = a(f), h[xi.RESOURCE_URL] = a(h[xi.URL]), {
                trustAs: s,
                getTrusted: l,
                valueOf: u
            }
        }]
    }

    function Je() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > tr)throw bi("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = N(xi);
            r.isEnabled = function () {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = g), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                    return r.getTrusted(t, e)
                })
            };
            var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
            return o(xi, function (t, e) {
                var n = Xn(e);
                r[gt("parse_as_" + n)] = function (e) {
                    return i(t, e)
                }, r[gt("get_trusted_" + n)] = function (e) {
                    return a(t, e)
                }, r[gt("trust_as_" + n)] = function (e) {
                    return s(t, e)
                }
            }), r
        }]
    }

    function Qe() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, r, i = {}, o = h((/android (\d+)/.exec(Xn((t.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, l = s.body && s.body.style, c = !1, f = !1;
            if (l) {
                for (var d in l)if (r = u.exec(d)) {
                    n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity" in l && "webkit"), c = !!("transition" in l || n + "Transition" in l), f = !!("animation" in l || n + "Animation" in l), !o || c && f || (c = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > o || a), hasEvent: function (t) {
                    if ("input" === t && 11 >= tr)return !1;
                    if (v(i[t])) {
                        var e = s.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                }, csp: gr(), vendorPrefix: n, transitions: c, animations: f, android: o
            }
        }]
    }

    function tn() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (t, e, n, r) {
            function i(o, a) {
                function s(t) {
                    if (!a)throw Zr("tpload", "Failed to load template: {0}", o);
                    return n.reject(t)
                }

                i.totalPendingRequests++, w(o) && t.get(o) || (o = r.getTrustedResourceUrl(o));
                var u = e.defaults && e.defaults.transformResponse;
                hr(u) ? u = u.filter(function (t) {
                    return t !== ie
                }) : u === ie && (u = null);
                var l = {cache: t, transformResponse: u};
                return e.get(o, l)["finally"](function () {
                    i.totalPendingRequests--
                }).then(function (t) {
                    return t.data
                }, s)
            }

            return i.totalPendingRequests = 0, i
        }]
    }

    function en() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            var r = {};
            return r.findBindings = function (t, e, n) {
                var r = t.getElementsByClassName("ng-binding"), i = [];
                return o(r, function (t) {
                    var r = lr.element(t).data("$binding");
                    r && o(r, function (r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + pr(e) + "(\\s|\\||$)");
                            o.test(r) && i.push(t)
                        } else-1 != r.indexOf(e) && i.push(t)
                    })
                }), i
            }, r.findModels = function (t, e, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = t.querySelectorAll(a);
                    if (s.length)return s
                }
            }, r.getLocation = function () {
                return n.url()
            }, r.setLocation = function (e) {
                e !== n.url() && (n.url(e), t.$digest())
            }, r.whenStable = function (t) {
                e.notifyWhenNoOutstandingRequests(t)
            }, r
        }]
    }

    function nn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
            function o(o, s, u) {
                var l, c = y(u) && !u, f = (c ? r : n).defer(), h = f.promise;
                return l = e.defer(function () {
                    try {
                        f.resolve(o())
                    } catch (e) {
                        f.reject(e), i(e)
                    } finally {
                        delete a[h.$$timeoutId]
                    }
                    c || t.$apply()
                }, s), h.$$timeoutId = l, a[l] = f, h
            }

            var a = {};
            return o.cancel = function (t) {
                return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, o
        }]
    }

    function rn(t) {
        var e = t;
        return tr && (_i.setAttribute("href", e), e = _i.href), _i.setAttribute("href", e), {
            href: _i.href,
            protocol: _i.protocol ? _i.protocol.replace(/:$/, "") : "",
            host: _i.host,
            search: _i.search ? _i.search.replace(/^\?/, "") : "",
            hash: _i.hash ? _i.hash.replace(/^#/, "") : "",
            hostname: _i.hostname,
            port: _i.port,
            pathname: "/" === _i.pathname.charAt(0) ? _i.pathname : "/" + _i.pathname
        }
    }

    function on(t) {
        var e = w(t) ? rn(t) : t;
        return e.protocol === ki.protocol && e.host === ki.host
    }

    function an() {
        this.$get = m(t)
    }

    function sn(t) {
        function e(r, i) {
            if ($(r)) {
                var a = {};
                return o(r, function (t, n) {
                    a[n] = e(n, t)
                }), a
            }
            return t.factory(r + n, i)
        }

        var n = "Filter";
        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + n)
            }
        }], e("currency", fn), e("date", kn), e("filter", un), e("json", Sn), e("limitTo", Cn), e("lowercase", Ai), e("number", hn), e("orderBy", Dn), e("uppercase", Ei)
    }

    function un() {
        return function (t, e, n) {
            if (!hr(t))return t;
            var r, i, o = null !== e ? typeof e : "null";
            switch (o) {
                case"function":
                    r = e;
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    i = !0;
                case"object":
                    r = ln(e, n, i);
                    break;
                default:
                    return t
            }
            return t.filter(r)
        }
    }

    function ln(t, e, n) {
        var r, i = $(t) && "$" in t;
        return e === !0 ? e = U : _(e) || (e = function (t, e) {
            return v(t) ? !1 : null === t || null === e ? t === e : $(t) || $(e) ? !1 : (t = Xn("" + t), e = Xn("" + e), -1 !== t.indexOf(e))
        }), r = function (r) {
            return i && !$(r) ? cn(r, t.$, e, !1) : cn(r, t, e, n)
        }
    }

    function cn(t, e, n, r, i) {
        var o = null !== t ? typeof t : "null", a = null !== e ? typeof e : "null";
        if ("string" === a && "!" === e.charAt(0))return !cn(t, e.substring(1), n, r);
        if (hr(t))return t.some(function (t) {
            return cn(t, e, n, r)
        });
        switch (o) {
            case"object":
                var s;
                if (r) {
                    for (s in t)if ("$" !== s.charAt(0) && cn(t[s], e, n, !0))return !0;
                    return i ? !1 : cn(t, e, n, !1)
                }
                if ("object" === a) {
                    for (s in e) {
                        var u = e[s];
                        if (!_(u) && !v(u)) {
                            var l = "$" === s, c = l ? t : t[s];
                            if (!cn(c, u, n, l, l))return !1
                        }
                    }
                    return !0
                }
                return n(t, e);
            case"function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function fn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, r) {
            return v(n) && (n = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : dn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function hn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : dn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function dn(t, e, n, r, i) {
        if (!isFinite(t) || $(t))return "";
        var o = 0 > t;
        t = Math.abs(t);
        var a = t + "", s = "", u = [], l = !1;
        if (-1 !== a.indexOf("e")) {
            var c = a.match(/([\d\.]+)e(-?)(\d+)/);
            c && "-" == c[2] && c[3] > i + 1 ? t = 0 : (s = a, l = !0)
        }
        if (l)i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s)); else {
            var f = (a.split(Si)[1] || "").length;
            v(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
            var h = ("" + t).split(Si), d = h[0];
            h = h[1] || "";
            var p, g = 0, m = e.lgSize, y = e.gSize;
            if (d.length >= m + y)for (g = d.length - m, p = 0; g > p; p++)(g - p) % y === 0 && 0 !== p && (s += n), s += d.charAt(p);
            for (p = g; p < d.length; p++)(d.length - p) % m === 0 && 0 !== p && (s += n), s += d.charAt(p);
            for (; h.length < i;)h += "0";
            i && "0" !== i && (s += r + h.substr(0, i))
        }
        return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
    }

    function pn(t, e, n) {
        var r = "";
        for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;)t = "0" + t;
        return n && (t = t.substr(t.length - e)), r + t
    }

    function gn(t, e, n, r) {
        return n = n || 0, function (i) {
            var o = i["get" + t]();
            return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pn(o, e, r)
        }
    }

    function mn(t, e) {
        return function (n, r) {
            var i = n["get" + t](), o = Kn(e ? "SHORT" + t : t);
            return r[o][i]
        }
    }

    function vn(t) {
        var e = -1 * t.getTimezoneOffset(), n = e >= 0 ? "+" : "";
        return n += pn(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + pn(Math.abs(e % 60), 2)
    }

    function yn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function $n(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
    }

    function wn(t) {
        return function (e) {
            var n = yn(e.getFullYear()), r = $n(e), i = +r - +n, o = 1 + Math.round(i / 6048e5);
            return pn(o, t)
        }
    }

    function bn(t, e) {
        return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
    }

    function xn(t, e) {
        return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
    }

    function _n(t, e) {
        return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
    }

    function kn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
                e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])), a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
                var u = h(e[4] || 0) - i, l = h(e[5] || 0) - o, c = h(e[6] || 0), f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                return s.call(r, u, l, c, f), r
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, i) {
            var a, s, u = "", l = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, w(n) && (n = Ti.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !x(n))return n;
            for (; r;)s = Di.exec(r), s ? (l = F(l, s, 1), r = l.pop()) : (l.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function (e) {
                a = Ci[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Sn() {
        return function (t, e) {
            return v(e) && (e = 2), V(t, e)
        }
    }

    function Cn() {
        return function (t, e) {
            return b(t) && (t = t.toString()), hr(t) || w(t) ? (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : h(e), e ? e > 0 ? t.slice(0, e) : t.slice(e) : w(t) ? "" : []) : t
        }
    }

    function Dn(t) {
        return function (e, n, r) {
            function o(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i)return i
                }
                return 0
            }

            function a(t, e) {
                return e ? function (e, n) {
                    return t(n, e)
                } : t
            }

            function s(t) {
                switch (typeof t) {
                    case"number":
                    case"boolean":
                    case"string":
                        return !0;
                    default:
                        return !1
                }
            }

            function u(t) {
                return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
            }

            function l(t, e) {
                var n = typeof t, r = typeof e;
                return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
            }

            return i(e) ? (n = hr(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function (e) {
                var n = !1, r = e || g;
                if (w(e)) {
                    if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e)return a(l, n);
                    if (r = t(e), r.constant) {
                        var i = r();
                        return a(function (t, e) {
                            return l(t[i], e[i])
                        }, n)
                    }
                }
                return a(function (t, e) {
                    return l(r(t), r(e))
                }, n)
            }), ir.call(e).sort(a(o, r))) : e
        }
    }

    function Tn(t) {
        return _(t) && (t = {link: t}), t.restrict = t.restrict || "AC", m(t)
    }

    function An(t, e) {
        t.$name = e
    }

    function En(t, e, r, i, a) {
        var s = this, u = [], l = s.$$parentForm = t.parent().controller("form") || Pi;
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, l.$addControl(s), s.$rollbackViewValue = function () {
            o(u, function (t) {
                t.$rollbackViewValue()
            })
        }, s.$commitViewValue = function () {
            o(u, function (t) {
                t.$commitViewValue()
            })
        }, s.$addControl = function (t) {
            at(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
        }, s.$$renameControl = function (t, e) {
            var n = t.$name;
            s[n] === t && delete s[n], s[e] = t, t.$name = e
        }, s.$removeControl = function (t) {
            t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function (e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$error, function (e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$$success, function (e, n) {
                s.$setValidity(n, null, t)
            }), I(u, t)
        }, Bn({
            ctrl: this, $element: t, set: function (t, e, n) {
                var r = t[e];
                if (r) {
                    var i = r.indexOf(n);
                    -1 === i && r.push(n)
                } else t[e] = [n]
            }, unset: function (t, e, n) {
                var r = t[e];
                r && (I(r, n), 0 === r.length && delete t[e])
            }, parentForm: l, $animate: i
        }), s.$setDirty = function () {
            i.removeClass(t, mo), i.addClass(t, vo), s.$dirty = !0, s.$pristine = !1, l.$setDirty()
        }, s.$setPristine = function () {
            i.setClass(t, mo, vo + " " + ji), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function (t) {
                t.$setPristine()
            })
        }, s.$setUntouched = function () {
            o(u, function (t) {
                t.$setUntouched()
            })
        }, s.$setSubmitted = function () {
            i.addClass(t, ji), s.$submitted = !0, l.$setSubmitted()
        }
    }

    function Mn(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function On(t, e, n, r, i, o) {
        Pn(t, e, n, r, i, o), Mn(r)
    }

    function Pn(t, e, n, r, i, o) {
        var a = Xn(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function (t) {
                s = !0
            }), e.on("compositionend", function () {
                s = !1, u()
            })
        }
        var u = function (t) {
            if (l && (o.defer.cancel(l), l = null), !s) {
                var i = e.val(), u = t && t.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = dr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
            }
        };
        if (i.hasEvent("input"))e.on("input", u); else {
            var l, c = function (t, e, n) {
                l || (l = o.defer(function () {
                    l = null, e && e.value === n || u(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut", c)
        }
        e.on("change", u), r.$render = function () {
            e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        }
    }

    function jn(t, e) {
        if (x(t))return t;
        if (w(t)) {
            Wi.lastIndex = 0;
            var n = Wi.exec(t);
            if (n) {
                var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, l = yn(r), c = 7 * (i - 1);
                return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, l.getDate() + c, o, a, s, u)
            }
        }
        return NaN
    }

    function In(t, e) {
        return function (n, r) {
            var i, a;
            if (x(n))return n;
            if (w(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Ui.test(n))return new Date(n);
                if (t.lastIndex = 0, i = t.exec(n))return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function Rn(t, e, r, i) {
        return function (o, a, s, u, l, c, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function d(t) {
                return y(t) ? x(t) ? t : r(t) : n
            }

            Nn(o, a, s, u), Pn(o, a, s, u, l, c);
            var p, g = u && u.$options && u.$options.timezone;
            if (u.$$parserName = t, u.$parsers.push(function (t) {
                    if (u.$isEmpty(t))return null;
                    if (e.test(t)) {
                        var i = r(t, p);
                        return "UTC" === g && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                    }
                    return n
                }), u.$formatters.push(function (t) {
                    if (t && !x(t))throw bo("datefmt", "Expected `{0}` to be a date", t);
                    if (h(t)) {
                        if (p = t, p && "UTC" === g) {
                            var e = 6e4 * p.getTimezoneOffset();
                            p = new Date(p.getTime() + e)
                        }
                        return f("date")(t, i, g)
                    }
                    return p = null, ""
                }), y(s.min) || s.ngMin) {
                var m;
                u.$validators.min = function (t) {
                    return !h(t) || v(m) || r(t) >= m
                }, s.$observe("min", function (t) {
                    m = d(t), u.$validate()
                })
            }
            if (y(s.max) || s.ngMax) {
                var $;
                u.$validators.max = function (t) {
                    return !h(t) || v($) || r(t) <= $
                }, s.$observe("max", function (t) {
                    $ = d(t), u.$validate()
                })
            }
        }
    }

    function Nn(t, e, r, i) {
        var o = e[0], a = i.$$hasNativeValidators = $(o.validity);
        a && i.$parsers.push(function (t) {
            var r = e.prop(Gn) || {};
            return r.badInput && !r.typeMismatch ? n : t
        })
    }

    function Un(t, e, r, i, o, a) {
        if (Nn(t, e, r, i), Pn(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (t) {
                return i.$isEmpty(t) ? null : Li.test(t) ? parseFloat(t) : n
            }), i.$formatters.push(function (t) {
                if (!i.$isEmpty(t)) {
                    if (!b(t))throw bo("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            }), y(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function (t) {
                return i.$isEmpty(t) || v(s) || t >= s
            }, r.$observe("min", function (t) {
                y(t) && !b(t) && (t = parseFloat(t, 10)), s = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
        if (y(r.max) || r.ngMax) {
            var u;
            i.$validators.max = function (t) {
                return i.$isEmpty(t) || v(u) || u >= t
            }, r.$observe("max", function (t) {
                y(t) && !b(t) && (t = parseFloat(t, 10)), u = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
    }

    function Fn(t, e, n, r, i, o) {
        Pn(t, e, n, r, i, o), Mn(r), r.$$parserName = "url", r.$validators.url = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Fi.test(n)
        }
    }

    function Hn(t, e, n, r, i, o) {
        Pn(t, e, n, r, i, o), Mn(r), r.$$parserName = "email", r.$validators.email = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Hi.test(n)
        }
    }

    function Ln(t, e, n, r) {
        v(n.name) && e.attr("name", l());
        var i = function (t) {
            e[0].checked && r.$setViewValue(n.value, t && t.type)
        };
        e.on("click", i), r.$render = function () {
            var t = n.value;
            e[0].checked = t == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function qn(t, e, n, r, i) {
        var o;
        if (y(r)) {
            if (o = t(r), !o.constant)throw bo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return o(e)
        }
        return i
    }

    function Vn(t, e, n, r, i, o, a, s) {
        var u = qn(s, t, "ngTrueValue", n.ngTrueValue, !0), l = qn(s, t, "ngFalseValue", n.ngFalseValue, !1), c = function (t) {
            r.$setViewValue(e[0].checked, t && t.type)
        };
        e.on("click", c), r.$render = function () {
            e[0].checked = r.$viewValue
        }, r.$isEmpty = function (t) {
            return t === !1
        }, r.$formatters.push(function (t) {
            return U(t, u)
        }), r.$parsers.push(function (t) {
            return t ? u : l
        })
    }

    function Wn(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function r(t, e) {
                var n = [];
                t:for (var r = 0; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++)if (i == e[o])continue t;
                    n.push(i)
                }
                return n
            }

            function i(t) {
                if (hr(t))return t;
                if (w(t))return t.split(" ");
                if ($(t)) {
                    var e = [];
                    return o(t, function (t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }), e
                }
                return t
            }

            return {
                restrict: "AC", link: function (a, s, u) {
                    function l(t) {
                        var e = f(t, 1);
                        u.$addClass(e)
                    }

                    function c(t) {
                        var e = f(t, -1);
                        u.$removeClass(e)
                    }

                    function f(t, e) {
                        var n = s.data("$classCounts") || {}, r = [];
                        return o(t, function (t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function h(t, e) {
                        var i = r(e, t), o = r(t, e);
                        i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                    }

                    function d(t) {
                        if (e === !0 || a.$index % 2 === e) {
                            var n = i(t || []);
                            if (p) {
                                if (!U(t, p)) {
                                    var r = i(p);
                                    h(r, n)
                                }
                            } else l(n)
                        }
                        p = N(t)
                    }

                    var p;
                    a.$watch(u[t], d, !0), u.$observe("class", function (e) {
                        d(a.$eval(u[t]))
                    }), "ngClass" !== t && a.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[t]));
                            o === e ? l(s) : c(s)
                        }
                    })
                }
            }
        }]
    }

    function Bn(t) {
        function e(t, e, u) {
            e === n ? r("$pending", t, u) : i("$pending", t, u), E(e) ? e ? (f(s.$error, t, u), c(s.$$success, t, u)) : (c(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(wo, !0), s.$valid = s.$invalid = n, a("", null)) : (o(wo, !1), s.$valid = zn(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
            var l;
            l = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, l), h.$setValidity(t, l, s)
        }

        function r(t, e, n) {
            s[t] || (s[t] = {}), c(s[t], e, n)
        }

        function i(t, e, r) {
            s[t] && f(s[t], e, r), zn(s[t]) && (s[t] = n)
        }

        function o(t, e) {
            e && !l[t] ? (d.addClass(u, t), l[t] = !0) : !e && l[t] && (d.removeClass(u, t), l[t] = !1)
        }

        function a(t, e) {
            t = t ? "-" + nt(t, "-") : "", o(po + t, e === !0), o(go + t, e === !1)
        }

        var s = t.ctrl, u = t.$element, l = {}, c = t.set, f = t.unset, h = t.parentForm, d = t.$animate;
        l[go] = !(l[po] = u.hasClass(po)), s.$setValidity = e
    }

    function zn(t) {
        if (t)for (var e in t)return !1;
        return !0
    }

    var Yn = /^\/(.+)\/([a-z]*)$/, Gn = "validity", Xn = function (t) {
        return w(t) ? t.toLowerCase() : t
    }, Zn = Object.prototype.hasOwnProperty, Kn = function (t) {
        return w(t) ? t.toUpperCase() : t
    }, Jn = function (t) {
        return w(t) ? t.replace(/[A-Z]/g, function (t) {
            return String.fromCharCode(32 | t.charCodeAt(0))
        }) : t
    }, Qn = function (t) {
        return w(t) ? t.replace(/[a-z]/g, function (t) {
            return String.fromCharCode(-33 & t.charCodeAt(0))
        }) : t
    };
    "i" !== "I".toLowerCase() && (Xn = Jn, Kn = Qn);
    var tr, er, nr, rr, ir = [].slice, or = [].splice, ar = [].push, sr = Object.prototype.toString, ur = r("ng"), lr = t.angular || (t.angular = {}), cr = 0;
    tr = e.documentMode, p.$inject = [], g.$inject = [];
    var fr, hr = Array.isArray, dr = function (t) {
        return w(t) ? t.trim() : t
    }, pr = function (t) {
        return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, gr = function () {
        if (y(gr.isActive_))return gr.isActive_;
        var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
        if (!t)try {
            new Function("")
        } catch (n) {
            t = !0
        }
        return gr.isActive_ = t
    }, mr = ["ng-", "data-ng-", "ng:", "x-ng-"], vr = /[A-Z]/g, yr = !1, $r = 1, wr = 2, br = 3, xr = 8, _r = 9, kr = 11, Sr = {
        full: "1.3.19",
        major: 1,
        minor: 3,
        dot: 19,
        codeName: "glutinous-shriek"
    };
    wt.expando = "ng339";
    var Cr = wt.cache = {}, Dr = 1, Tr = function (t, e, n) {
        t.addEventListener(e, n, !1)
    }, Ar = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    };
    wt._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var Er = /([\:\-\_]+(.))/g, Mr = /^moz([A-Z])/, Or = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Pr = r("jqLite"), jr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ir = /<|&#?\w+;/, Rr = /<([\w:]+)/, Nr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ur = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ur.optgroup = Ur.option, Ur.tbody = Ur.tfoot = Ur.colgroup = Ur.caption = Ur.thead, Ur.th = Ur.td;
    var Fr = wt.prototype = {
        ready: function (n) {
            function r() {
                i || (i = !0, n())
            }

            var i = !1;
            "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), wt(t).on("load", r))
        }, toString: function () {
            var t = [];
            return o(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return er(t >= 0 ? this[t] : this[this.length + t])
        }, length: 0, push: ar, sort: [].sort, splice: [].splice
    }, Hr = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
        Hr[Xn(t)] = t
    });
    var Lr = {};
    o("input,select,option,textarea,button,form,details".split(","), function (t) {
        Lr[t] = !0
    });
    var qr = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    o({data: Ct, removeData: kt}, function (t, e) {
        wt[e] = t
    }), o({
        data: Ct, inheritedData: Ot, scope: function (t) {
            return er.data(t, "$scope") || Ot(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return er.data(t, "$isolateScope") || er.data(t, "$isolateScopeNoTemplate")
        }, controller: Mt, injector: function (t) {
            return Ot(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: Dt, css: function (t, e, n) {
            return e = gt(e), y(n) ? void(t.style[e] = n) : t.style[e]
        }, attr: function (t, e, r) {
            var i = t.nodeType;
            if (i !== br && i !== wr && i !== xr) {
                var o = Xn(e);
                if (Hr[o]) {
                    if (!y(r))return t[e] || (t.attributes.getNamedItem(e) || p).specified ? o : n;
                    r ? (t[e] = !0, t.setAttribute(e, o)) : (t[e] = !1, t.removeAttribute(o))
                } else if (y(r))t.setAttribute(e, r); else if (t.getAttribute) {
                    var a = t.getAttribute(e, 2);
                    return null === a ? n : a
                }
            }
        }, prop: function (t, e, n) {
            return y(n) ? void(t[e] = n) : t[e]
        }, text: function () {
            function t(t, e) {
                if (v(e)) {
                    var n = t.nodeType;
                    return n === $r || n === br ? t.textContent : ""
                }
                t.textContent = e
            }

            return t.$dv = "", t
        }(), val: function (t, e) {
            if (v(e)) {
                if (t.multiple && "select" === j(t)) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            return v(e) ? t.innerHTML : (xt(t, !0), void(t.innerHTML = e))
        }, empty: Pt
    }, function (t, e) {
        wt.prototype[e] = function (e, r) {
            var i, o, a = this.length;
            if (t !== Pt && (2 == t.length && t !== Dt && t !== Mt ? e : r) === n) {
                if ($(e)) {
                    for (i = 0; a > i; i++)if (t === Ct)t(this[i], e); else for (o in e)t(this[i], o, e[o]);
                    return this
                }
                for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
                    var c = t(this[l], e, r);
                    s = s ? s + c : c
                }
                return s
            }
            for (i = 0; a > i; i++)t(this[i], e, r);
            return this
        }
    }), o({
        removeData: kt, on: function Go(t, e, n, r) {
            if (y(r))throw Pr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (vt(t)) {
                var i = St(t, !0), o = i.events, a = i.handle;
                a || (a = i.handle = Ut(t, o));
                for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
                    e = s[u];
                    var l = o[e];
                    l || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Go(t, Or[e], function (t) {
                        var n = this, r = t.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && a(t, e)
                    }) : "$destroy" !== e && Tr(t, e, a), l = o[e]), l.push(n)
                }
            }
        }, off: _t, one: function (t, e, n) {
            t = er(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, r = t.parentNode;
            xt(t), o(new wt(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                t.nodeType === $r && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            var n = t.nodeType;
            if (n === $r || n === kr) {
                e = new wt(e);
                for (var r = 0, i = e.length; i > r; r++) {
                    var o = e[r];
                    t.appendChild(o)
                }
            }
        }, prepend: function (t, e) {
            if (t.nodeType === $r) {
                var n = t.firstChild;
                o(new wt(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            e = er(e).eq(0).clone()[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        }, remove: jt, detach: function (t) {
            jt(t, !0)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            e = new wt(e);
            for (var i = 0, o = e.length; o > i; i++) {
                var a = e[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        }, addClass: At, removeClass: Tt, toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var r = n;
                v(r) && (r = !Dt(t, e)), (r ? At : Tt)(t, e)
            })
        }, parent: function (t) {
            var e = t.parentNode;
            return e && e.nodeType !== kr ? e : null
        }, next: function (t) {
            return t.nextElementSibling
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: bt, triggerHandler: function (t, e, n) {
            var r, i, a, s = e.type || e, u = St(t), l = u && u.events, c = l && l[s];
            c && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                }, stopPropagation: p, type: s, target: t
            }, e.type && (r = f(r, e)), i = N(c), a = n ? [r].concat(n) : [r], o(i, function (e) {
                r.isImmediatePropagationStopped() || e.apply(t, a)
            }))
        }
    }, function (t, e) {
        wt.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++)v(i) ? (i = t(this[o], e, n, r), y(i) && (i = er(i))) : Et(i, t(this[o], e, n, r));
            return y(i) ? i : this
        }, wt.prototype.bind = wt.prototype.on, wt.prototype.unbind = wt.prototype.off
    }), Lt.prototype = {
        put: function (t, e) {
            this[Ht(t, this.nextUid)] = e
        }, get: function (t) {
            return this[Ht(t, this.nextUid)]
        }, remove: function (t) {
            var e = this[t = Ht(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Vr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Wr = /,/, Br = /^\s*(_?)(\S+?)\1\s*$/, zr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Yr = r("$injector");
    Wt.$$annotate = Vt;
    var Gr = r("$animate"), Xr = ["$provide", function (t) {
        this.$$selectors = {}, this.register = function (e, n) {
            var r = e + "-animation";
            if (e && "." != e.charAt(0))throw Gr("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
            this.$$selectors[e.substr(1)] = r, t.factory(r, n)
        }, this.classNameFilter = function (t) {
            return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (t, e, n) {
            function r(e) {
                var r, i = t.defer();
                return i.promise.$$cancelFn = function () {
                    r && r()
                }, n.$$postDigest(function () {
                    r = e(function () {
                        i.resolve()
                    })
                }), i.promise
            }

            function i(t, e) {
                var n = [], r = [], i = lt();
                return o((t.attr("class") || "").split(/\s+/), function (t) {
                    i[t] = !0
                }), o(e, function (t, e) {
                    var o = i[e];
                    t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
                }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
            }

            function a(t, e, n) {
                for (var r = 0, i = e.length; i > r; ++r) {
                    var o = e[r];
                    t[o] = n
                }
            }

            function s() {
                return l || (l = t.defer(), e(function () {
                    l.resolve(), l = null
                })), l.promise
            }

            function u(t, e) {
                if (lr.isObject(e)) {
                    var n = f(e.from || {}, e.to || {});
                    t.css(n)
                }
            }

            var l;
            return {
                animate: function (t, e, n) {
                    return u(t, {from: e, to: n}), s()
                }, enter: function (t, e, n, r) {
                    return u(t, r), n ? n.after(t) : e.prepend(t), s()
                }, leave: function (t, e) {
                    return u(t, e), t.remove(), s()
                }, move: function (t, e, n, r) {
                    return this.enter(t, e, n, r)
                }, addClass: function (t, e, n) {
                    return this.setClass(t, e, [], n)
                }, $$addClassImmediately: function (t, e, n) {
                    return t = er(t), e = w(e) ? e : hr(e) ? e.join(" ") : "", o(t, function (t) {
                        At(t, e)
                    }), u(t, n), s()
                }, removeClass: function (t, e, n) {
                    return this.setClass(t, [], e, n)
                }, $$removeClassImmediately: function (t, e, n) {
                    return t = er(t), e = w(e) ? e : hr(e) ? e.join(" ") : "", o(t, function (t) {
                        Tt(t, e)
                    }), u(t, n), s()
                }, setClass: function (t, e, n, o) {
                    var s = this, u = "$$animateClasses", l = !1;
                    t = er(t);
                    var c = t.data(u);
                    c ? o && c.options && (c.options = lr.extend(c.options || {}, o)) : (c = {
                        classes: {},
                        options: o
                    }, l = !0);
                    var f = c.classes;
                    return e = hr(e) ? e : e.split(" "), n = hr(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), l && (c.promise = r(function (e) {
                        var n = t.data(u);
                        if (t.removeData(u), n) {
                            var r = i(t, n.classes);
                            r && s.$$setClassImmediately(t, r[0], r[1], n.options)
                        }
                        e()
                    }), t.data(u, c)), c.promise
                }, $$setClassImmediately: function (t, e, n, r) {
                    return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
                }, enabled: p, cancel: p
            }
        }]
    }], Zr = r("$compile");
    Kt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Kr = /^((?:x|data)[\:\-_])/i, Jr = r("$controller"), Qr = "application/json", ti = {"Content-Type": Qr + ";charset=utf-8"}, ei = /^\[|^\{(?!\{)/, ni = {
        "[": /]$/,
        "{": /}$/
    }, ri = /^\)\]\}',?\n/, ii = r("$interpolate"), oi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ai = {
        http: 80,
        https: 443,
        ftp: 21
    }, si = r("$location"), ui = {
        $$html5: !1, $$replace: !1, absUrl: Te("$$absUrl"), url: function (t) {
            if (v(t))return this.$$url;
            var e = oi.exec(t);
            return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
        }, protocol: Te("$$protocol"), host: Te("$$host"), port: Te("$$port"), path: Ae("$$path", function (t) {
            return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
        }), search: function (t, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (w(t) || b(t))t = t.toString(), this.$$search = Y(t); else {
                        if (!$(t))throw si("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        t = R(t, {}), o(t, function (e, n) {
                            null == e && delete t[n]
                        }), this.$$search = t
                    }
                    break;
                default:
                    v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(), this
        }, hash: Ae("$$hash", function (t) {
            return null !== t ? t.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    o([De, Ce, Se], function (t) {
        t.prototype = Object.create(ui), t.prototype.state = function (e) {
            if (!arguments.length)return this.$$state;
            if (t !== Se || !this.$$html5)throw si("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = v(e) ? null : e, this
        }
    });
    var li = r("$parse"), ci = Function.prototype.call, fi = Function.prototype.apply, hi = Function.prototype.bind, di = lt();
    o({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (t, e) {
        t.constant = t.literal = t.sharedGetter = !0, di[e] = t
    }), di["this"] = function (t) {
        return t
    }, di["this"].sharedGetter = !0;
    var pi = f(lt(), {
        "+": function (t, e, r, i) {
            return r = r(t, e), i = i(t, e), y(r) ? y(i) ? r + i : r : y(i) ? i : n
        }, "-": function (t, e, n, r) {
            return n = n(t, e), r = r(t, e), (y(n) ? n : 0) - (y(r) ? r : 0)
        }, "*": function (t, e, n, r) {
            return n(t, e) * r(t, e)
        }, "/": function (t, e, n, r) {
            return n(t, e) / r(t, e)
        }, "%": function (t, e, n, r) {
            return n(t, e) % r(t, e)
        }, "===": function (t, e, n, r) {
            return n(t, e) === r(t, e)
        }, "!==": function (t, e, n, r) {
            return n(t, e) !== r(t, e)
        }, "==": function (t, e, n, r) {
            return n(t, e) == r(t, e)
        }, "!=": function (t, e, n, r) {
            return n(t, e) != r(t, e)
        }, "<": function (t, e, n, r) {
            return n(t, e) < r(t, e)
        }, ">": function (t, e, n, r) {
            return n(t, e) > r(t, e)
        }, "<=": function (t, e, n, r) {
            return n(t, e) <= r(t, e)
        }, ">=": function (t, e, n, r) {
            return n(t, e) >= r(t, e)
        }, "&&": function (t, e, n, r) {
            return n(t, e) && r(t, e)
        }, "||": function (t, e, n, r) {
            return n(t, e) || r(t, e)
        }, "!": function (t, e, n) {
            return !n(t, e)
        }, "=": !0, "|": !0
    }), gi = {n: "\n", f: "\f", r: "\r", t: "	", v: "\x0B", "'": "'", '"': '"'}, mi = function (t) {
        this.options = t
    };
    mi.prototype = {
        constructor: mi, lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if ('"' === e || "'" === e)this.readString(e); else if (this.isNumber(e) || "." === e && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(e))this.readIdent(); else if (this.is(e, "(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: e
                }), this.index++; else if (this.isWhitespace(e))this.index++; else {
                    var n = e + this.peek(), r = n + this.peek(2), i = pi[e], o = pi[n], a = pi[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : e;
                        this.tokens.push({index: this.index, text: s, operator: !0}), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        }, is: function (t, e) {
            return -1 !== e.indexOf(t)
        }, peek: function (t) {
            var e = t || 1;
            return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        }, isNumber: function (t) {
            return t >= "0" && "9" >= t && "string" == typeof t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "\x0B" === t || " " === t
        }, isIdent: function (t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            n = n || this.index;
            var r = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
            throw li("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Xn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n))t += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r))t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1))t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
        }, readIdent: function () {
            for (var t = this.index; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if (!this.isIdent(e) && !this.isNumber(e))break;
                this.index++
            }
            this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = gi[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o)i = !0; else {
                    if (o === t)return this.index++, void this.tokens.push({index: e, text: r, constant: !0, value: n});
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var vi = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    vi.ZERO = f(function () {
        return 0
    }, {sharedGetter: !0, constant: !0}), vi.prototype = {
        constructor: vi, parse: function (t) {
            this.text = t, this.tokens = this.lexer.lex(t);
            var e = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        }, primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in di ? t = di[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e, n; e = this.expect("(", "[", ".");)"(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        }, throwError: function (t, e) {
            throw li("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, peekToken: function () {
            if (0 === this.tokens.length)throw li("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        }, peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
                var o = this.tokens[t], a = o.text;
                if (a === e || a === n || a === r || a === i || !e && !n && !r && !i)return o
            }
            return !1
        }, expect: function (t, e, n, r) {
            var i = this.peek(t, e, n, r);
            return i ? (this.tokens.shift(), i) : !1
        }, consume: function (t) {
            if (0 === this.tokens.length)throw li("ueoe", "Unexpected end of expression: {0}", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        }, unaryFn: function (t, e) {
            var n = pi[t];
            return f(function (t, r) {
                return n(t, r, e)
            }, {constant: e.constant, inputs: [e]})
        }, binaryFn: function (t, e, n, r) {
            var i = pi[e];
            return f(function (e, r) {
                return i(e, r, t, n)
            }, {constant: t.constant && n.constant, inputs: !r && [t, n]})
        }, identifier: function () {
            for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)t += this.consume().text + this.consume().text;
            return He(t, this.options, this.text)
        }, constant: function () {
            var t = this.consume().value;
            return f(function () {
                return t
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var t = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";"))return 1 === t.length ? t[0] : function (e, n) {
                for (var r, i = 0, o = t.length; o > i; i++)r = t[i](e, n);
                return r
            }
        }, filterChain: function () {
            for (var t, e = this.expression(); t = this.expect("|");)e = this.filter(e);
            return e
        }, filter: function (t) {
            var e, r, i = this.$filter(this.consume().text);
            if (this.peek(":"))for (e = [], r = []; this.expect(":");)e.push(this.expression());
            var o = [t].concat(e || []);
            return f(function (o, a) {
                var s = t(o, a);
                if (r) {
                    r[0] = s;
                    for (var u = e.length; u--;)r[u + 1] = e[u](o, a);
                    return i.apply(n, r)
                }
                return i(s)
            }, {constant: !i.$stateful && o.every(Ie), inputs: !i.$stateful && o})
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function (e, r) {
                return n.assign(e, t(e, r), r)
            }, {inputs: [n, t]})) : n
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
                var r = this.assignment();
                return f(function (e, i) {
                    return n(e, i) ? t(e, i) : r(e, i)
                }, {constant: n.constant && t.constant && r.constant})
            }
            return n
        }, logicalOR: function () {
            for (var t, e = this.logicalAND(); t = this.expect("||");)e = this.binaryFn(e, t.text, this.logicalAND(), !0);
            return e
        }, logicalAND: function () {
            for (var t, e = this.equality(); t = this.expect("&&");)e = this.binaryFn(e, t.text, this.equality(), !0);
            return e
        }, equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");)e = this.binaryFn(e, t.text, this.relational());
            return e
        }, relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");)e = this.binaryFn(e, t.text, this.additive());
            return e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");)e = this.binaryFn(e, t.text, this.multiplicative());
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");)e = this.binaryFn(e, t.text, this.unary());
            return e
        }, unary: function () {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(vi.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
        }, fieldAccess: function (t) {
            var e = this.identifier();
            return f(function (r, i, o) {
                var a = o || t(r, i);
                return null == a ? n : e(a)
            }, {
                assign: function (n, r, i) {
                    var o = t(n, i);
                    return o || t.assign(n, o = {}, i), e.assign(o, r)
                }
            })
        }, objectIndex: function (t) {
            var e = this.text, r = this.expression();
            return this.consume("]"), f(function (i, o) {
                var a, s = t(i, o), u = r(i, o);
                return Oe(u, e), s ? a = Pe(s[u], e) : n
            }, {
                assign: function (n, i, o) {
                    var a = Oe(r(n, o), e), s = Pe(t(n, o), e);
                    return s || t.assign(n, s = {}, o), s[a] = i
                }
            })
        }, functionCall: function (t, e) {
            var r = [];
            if (")" !== this.peekToken().text)do r.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var i = this.text, o = r.length ? [] : null;
            return function (a, s) {
                var u = e ? e(a, s) : y(e) ? n : a, l = t(a, s, u) || p;
                if (o)for (var c = r.length; c--;)o[c] = Pe(r[c](a, s), i);
                Pe(u, i), je(l, i);
                var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
                return o && (o.length = 0), Pe(f, i)
            }
        }, arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                t.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), f(function (e, n) {
                for (var r = [], i = 0, o = t.length; o > i; i++)r.push(t[i](e, n));
                return r
            }, {literal: !0, constant: t.every(Ie), inputs: t})
        }, object: function () {
            var t = [], e = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                var n = this.consume();
                n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
            } while (this.expect(","));
            return this.consume("}"), f(function (n, r) {
                for (var i = {}, o = 0, a = e.length; a > o; o++)i[t[o]] = e[o](n, r);
                return i
            }, {literal: !0, constant: e.every(Ie), inputs: e})
        }
    };
    var yi = lt(), $i = lt(), wi = Object.prototype.valueOf, bi = r("$sce"), xi = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Zr = r("$compile"), _i = e.createElement("a"), ki = rn(t.location.href);
    sn.$inject = ["$provide"], fn.$inject = ["$locale"], hn.$inject = ["$locale"];
    var Si = ".", Ci = {
        yyyy: gn("FullYear", 4),
        yy: gn("FullYear", 2, 0, !0),
        y: gn("FullYear", 1),
        MMMM: mn("Month"),
        MMM: mn("Month", !0),
        MM: gn("Month", 2, 1),
        M: gn("Month", 1, 1),
        dd: gn("Date", 2),
        d: gn("Date", 1),
        HH: gn("Hours", 2),
        H: gn("Hours", 1),
        hh: gn("Hours", 2, -12),
        h: gn("Hours", 1, -12),
        mm: gn("Minutes", 2),
        m: gn("Minutes", 1),
        ss: gn("Seconds", 2),
        s: gn("Seconds", 1),
        sss: gn("Milliseconds", 3),
        EEEE: mn("Day"),
        EEE: mn("Day", !0),
        a: bn,
        Z: vn,
        ww: wn(2),
        w: wn(1),
        G: xn,
        GG: xn,
        GGG: xn,
        GGGG: _n
    }, Di = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Ti = /^\-?\d+$/;
    kn.$inject = ["$locale"];
    var Ai = m(Xn), Ei = m(Kn);
    Dn.$inject = ["$parse"];
    var Mi = m({
        restrict: "E", compile: function (t, e) {
            return e.href || e.xlinkHref || e.name ? void 0 : function (t, e) {
                if ("a" === e[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === sr.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }
    }), Oi = {};
    o(Hr, function (t, e) {
        if ("multiple" != t) {
            var n = Jt("ng-" + e);
            Oi[n] = function () {
                return {
                    restrict: "A", priority: 100, link: function (t, r, i) {
                        t.$watch(i[n], function (t) {
                            i.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(qr, function (t, e) {
        Oi[e] = function () {
            return {
                priority: 100, link: function (t, n, r) {
                    if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(Yn);
                        if (i)return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    t.$watch(r[e], function (t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = Jt("ng-" + t);
        Oi[e] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = t, a = t;
                    "href" === t && "[object SVGAnimatedString]" === sr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function (e) {
                        return e ? (i.$set(a, e), void(tr && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                    })
                }
            }
        }
    });
    var Pi = {
        $addControl: p,
        $$renameControl: An,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    }, ji = "ng-submitted";
    En.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Ii = function (t) {
        return ["$timeout", function (e) {
            var r = {
                name: "form", restrict: t ? "EAC" : "E", controller: En, compile: function (r, i) {
                    r.addClass(mo).addClass(po);
                    var o = i.name ? "name" : t && i.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (t, r, i, a) {
                            if (!("action" in i)) {
                                var s = function (e) {
                                    t.$apply(function () {
                                        a.$commitViewValue(), a.$setSubmitted()
                                    }), e.preventDefault()
                                };
                                Tr(r[0], "submit", s), r.on("$destroy", function () {
                                    e(function () {
                                        Ar(r[0], "submit", s)
                                    }, 0, !1)
                                })
                            }
                            var u = a.$$parentForm;
                            o && (Re(t, null, a.$name, a, a.$name), i.$observe(o, function (e) {
                                a.$name !== e && (Re(t, null, a.$name, n, a.$name), u.$$renameControl(a, e), Re(t, null, a.$name, a, a.$name))
                            })), r.on("$destroy", function () {
                                u.$removeControl(a), o && Re(t, null, i[o], n, a.$name), f(a, Pi)
                            })
                        }
                    }
                }
            };
            return r
        }]
    }, Ri = Ii(), Ni = Ii(!0), Ui = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Fi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Hi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Li = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, qi = /^(\d{4})-(\d{2})-(\d{2})$/, Vi = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Wi = /^(\d{4})-W(\d\d)$/, Bi = /^(\d{4})-(\d\d)$/, zi = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Yi = {
        text: On,
        date: Rn("date", qi, In(qi, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Rn("datetimelocal", Vi, In(Vi, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Rn("time", zi, In(zi, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Rn("week", Wi, jn, "yyyy-Www"),
        month: Rn("month", Bi, In(Bi, ["yyyy", "MM"]), "yyyy-MM"),
        number: Un,
        url: Fn,
        email: Hn,
        radio: Ln,
        checkbox: Vn,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Gi = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, s) {
                    s[0] && (Yi[Xn(a.type)] || Yi.text)(i, o, a, s[0], e, t, n, r)
                }
            }
        }
    }], Xi = /^(true|false|\d+)$/, Zi = function () {
        return {
            restrict: "A", priority: 100, compile: function (t, e) {
                return Xi.test(e.ngValue) ? function (t, e, n) {
                    n.$set("value", t.$eval(n.ngValue))
                } : function (t, e, n) {
                    t.$watch(n.ngValue, function (t) {
                        n.$set("value", t)
                    })
                }
            }
        }
    }, Ki = ["$compile", function (t) {
        return {
            restrict: "AC", compile: function (e) {
                return t.$$addBindingClass(e), function (e, r, i) {
                    t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function (t) {
                        r.textContent = t === n ? "" : t
                    })
                }
            }
        }
    }], Ji = ["$interpolate", "$compile", function (t, e) {
        return {
            compile: function (r) {
                return e.$$addBindingClass(r), function (r, i, o) {
                    var a = t(i.attr(o.$attr.ngBindTemplate));
                    e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function (t) {
                        i.textContent = t === n ? "" : t
                    })
                }
            }
        }
    }], Qi = ["$sce", "$parse", "$compile", function (t, e, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (t) {
                    return (t || "").toString()
                });
                return n.$$addBindingClass(r), function (e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                        r.html(t.getTrustedHtml(o(e)) || "")
                    })
                }
            }
        }
    }], to = m({
        restrict: "A", require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), eo = Wn("", !0), no = Wn("Odd", 0), ro = Wn("Even", 1), io = Tn({
        compile: function (t, e) {
            e.$set("ngCloak", n), t.removeClass("ng-cloak")
        }
    }), oo = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], ao = {}, so = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = Jt("ng-" + t);
        ao[e] = ["$parse", "$rootScope", function (n, r) {
            return {
                restrict: "A", compile: function (i, o) {
                    var a = n(o[e], null, !0);
                    return function (e, n) {
                        n.on(t, function (n) {
                            var i = function () {
                                a(e, {$event: n})
                            };
                            so[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var uo = ["$animate", function (t) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, l;
                n.$watch(i.ngIf, function (n) {
                    n ? u || a(function (n, o) {
                        u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, t.enter(n, r.parent(), r)
                    }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ut(s.clone), t.leave(l).then(function () {
                        l = null
                    }), s = null))
                })
            }
        }
    }], lo = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: lr.noop,
            compile: function (r, i) {
                var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                return function (r, i, u, l, c) {
                    var f, h, d, p = 0, g = function () {
                        h && (h.remove(), h = null), f && (f.$destroy(), f = null), d && (n.leave(d).then(function () {
                            h = null
                        }), h = d, d = null)
                    };
                    r.$watch(o, function (o) {
                        var u = function () {
                            !y(s) || s && !r.$eval(s) || e()
                        }, h = ++p;
                        o ? (t(o, !0).then(function (t) {
                            if (h === p) {
                                var e = r.$new();
                                l.template = t;
                                var s = c(e, function (t) {
                                    g(), n.enter(t, null, i).then(u)
                                });
                                f = e, d = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                            }
                        }, function () {
                            h === p && (g(), r.$emit("$includeContentError", o))
                        }), r.$emit("$includeContentRequested", o)) : (g(), l.template = null)
                    })
                }
            }
        }
    }], co = ["$compile", function (t) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                return /SVG/.test(r[0].toString()) ? (r.empty(), void t(yt(o.template, e).childNodes)(n, function (t) {
                    r.append(t)
                }, {futureParentElement: r})) : (r.html(o.template), void t(r.contents())(n))
            }
        }
    }], fo = Tn({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), ho = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (t, e, r, i) {
                var a = e.attr(r.$attr.ngList) || ", ", s = "false" !== r.ngTrim, u = s ? dr(a) : a, l = function (t) {
                    if (!v(t)) {
                        var e = [];
                        return t && o(t.split(u), function (t) {
                            t && e.push(s ? dr(t) : t)
                        }), e
                    }
                };
                i.$parsers.push(l), i.$formatters.push(function (t) {
                    return hr(t) ? t.join(a) : n
                }), i.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, po = "ng-valid", go = "ng-invalid", mo = "ng-pristine", vo = "ng-dirty", yo = "ng-untouched", $o = "ng-touched", wo = "ng-pending", bo = r("ngModel"), xo = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, r, i, a, s, u, l, c, f) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
        var h, d = a(r.ngModel), g = d.assign, m = d, $ = g, w = null, x = this;
        this.$$setOptions = function (t) {
            if (x.$options = t, t && t.getterSetter) {
                var e = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
                m = function (t) {
                    var n = d(t);
                    return _(n) && (n = e(t)), n
                }, $ = function (t, e) {
                    _(d(t)) ? n(t, {$$$p: x.$modelValue}) : g(t, x.$modelValue)
                }
            } else if (!d.assign)throw bo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, B(i))
        }, this.$render = p, this.$isEmpty = function (t) {
            return v(t) || "" === t || null === t || t !== t
        };
        var k = i.inheritedData("$formController") || Pi, S = 0;
        Bn({
            ctrl: this, $element: i, set: function (t, e) {
                t[e] = !0
            }, unset: function (t, e) {
                delete t[e]
            }, parentForm: k, $animate: s
        }), this.$setPristine = function () {
            x.$dirty = !1, x.$pristine = !0, s.removeClass(i, vo), s.addClass(i, mo)
        }, this.$setDirty = function () {
            x.$dirty = !0, x.$pristine = !1, s.removeClass(i, mo), s.addClass(i, vo), k.$setDirty()
        }, this.$setUntouched = function () {
            x.$touched = !1, x.$untouched = !0, s.setClass(i, yo, $o)
        }, this.$setTouched = function () {
            x.$touched = !0, x.$untouched = !1, s.setClass(i, $o, yo)
        }, this.$rollbackViewValue = function () {
            u.cancel(w), x.$viewValue = x.$$lastCommittedViewValue, x.$render()
        }, this.$validate = function () {
            if (!b(x.$modelValue) || !isNaN(x.$modelValue)) {
                var t = x.$$lastCommittedViewValue, e = x.$$rawModelValue, r = x.$valid, i = x.$modelValue, o = x.$options && x.$options.allowInvalid;
                x.$$runValidators(e, t, function (t) {
                    o || r === t || (x.$modelValue = t ? e : n, x.$modelValue !== i && x.$$writeModelToScope())
                })
            }
        }, this.$$runValidators = function (t, e, r) {
            function i() {
                var t = x.$$parserName || "parse";
                return h !== n ? (h || (o(x.$validators, function (t, e) {
                    u(e, null)
                }), o(x.$asyncValidators, function (t, e) {
                    u(e, null)
                })), u(t, h), h) : (u(t, null), !0)
            }

            function a() {
                var n = !0;
                return o(x.$validators, function (r, i) {
                    var o = r(t, e);
                    n = n && o, u(i, o)
                }), n ? !0 : (o(x.$asyncValidators, function (t, e) {
                    u(e, null)
                }), !1)
            }

            function s() {
                var r = [], i = !0;
                o(x.$asyncValidators, function (o, a) {
                    var s = o(t, e);
                    if (!M(s))throw bo("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                    u(a, n), r.push(s.then(function () {
                        u(a, !0)
                    }, function (t) {
                        i = !1, u(a, !1)
                    }))
                }), r.length ? c.all(r).then(function () {
                    l(i)
                }, p) : l(!0)
            }

            function u(t, e) {
                f === S && x.$setValidity(t, e)
            }

            function l(t) {
                f === S && r(t)
            }

            S++;
            var f = S;
            return i() && a() ? void s() : void l(!1)
        }, this.$commitViewValue = function () {
            var t = x.$viewValue;
            u.cancel(w), (x.$$lastCommittedViewValue !== t || "" === t && x.$$hasNativeValidators) && (x.$$lastCommittedViewValue = t, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function () {
            function e() {
                x.$modelValue !== a && x.$$writeModelToScope()
            }

            var r = x.$$lastCommittedViewValue, i = r;
            if (h = v(i) ? n : !0)for (var o = 0; o < x.$parsers.length; o++)if (i = x.$parsers[o](i), v(i)) {
                h = !1;
                break
            }
            b(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = m(t));
            var a = x.$modelValue, s = x.$options && x.$options.allowInvalid;
            x.$$rawModelValue = i, s && (x.$modelValue = i, e()), x.$$runValidators(i, x.$$lastCommittedViewValue, function (t) {
                s || (x.$modelValue = t ? i : n, e())
            })
        }, this.$$writeModelToScope = function () {
            $(t, x.$modelValue), o(x.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (n) {
                    e(n)
                }
            })
        }, this.$setViewValue = function (t, e) {
            x.$viewValue = t, (!x.$options || x.$options.updateOnDefault) && x.$$debounceViewValueCommit(e)
        }, this.$$debounceViewValueCommit = function (e) {
            var n, r = 0, i = x.$options;
            i && y(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[e]) ? r = n[e] : b(n["default"]) && (r = n["default"])), u.cancel(w), r ? w = u(function () {
                x.$commitViewValue()
            }, r) : l.$$phase ? x.$commitViewValue() : t.$apply(function () {
                x.$commitViewValue()
            })
        }, t.$watch(function () {
            var e = m(t);
            if (e !== x.$modelValue && (x.$modelValue === x.$modelValue || e === e)) {
                x.$modelValue = x.$$rawModelValue = e, h = n;
                for (var r = x.$formatters, i = r.length, o = e; i--;)o = r[i](o);
                x.$viewValue !== o && (x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(e, o, p))
            }
            return e
        })
    }], _o = ["$rootScope", function (t) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: xo,
            priority: 1,
            compile: function (e) {
                return e.addClass(mo).addClass(yo).addClass(po), {
                    pre: function (t, e, n, r) {
                        var i = r[0], o = r[1] || Pi;
                        i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function (t) {
                            i.$name !== t && o.$$renameControl(i, t)
                        }), t.$on("$destroy", function () {
                            o.$removeControl(i)
                        })
                    }, post: function (e, n, r, i) {
                        var o = i[0];
                        o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
                            o.$$debounceViewValueCommit(t && t.type)
                        }), n.on("blur", function (n) {
                            o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                        })
                    }
                }
            }
        }
    }], ko = /(\s+|^)default(\s+|$)/, So = function () {
        return {
            restrict: "A", controller: ["$scope", "$attrs", function (t, e) {
                var r = this;
                this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = dr(this.$options.updateOn.replace(ko, function () {
                    return r.$options.updateOnDefault = !0, " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, Co = Tn({terminal: !0, priority: 1e3}), Do = ["$locale", "$interpolate", function (t, e) {
        var n = /{}/g, r = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA", link: function (i, a, s) {
                function u(t) {
                    a.text(t || "")
                }

                var l, c = s.count, f = s.$attr.when && a.attr(s.$attr.when), h = s.offset || 0, d = i.$eval(f) || {}, p = {}, g = e.startSymbol(), m = e.endSymbol(), v = g + c + "-" + h + m, y = lr.noop;
                o(s, function (t, e) {
                    var n = r.exec(e);
                    if (n) {
                        var i = (n[1] ? "-" : "") + Xn(n[2]);
                        d[i] = a.attr(s.$attr[e])
                    }
                }), o(d, function (t, r) {
                    p[r] = e(t.replace(n, v))
                }), i.$watch(c, function (e) {
                    var n = parseFloat(e), r = isNaN(n);
                    r || n in d || (n = t.pluralCat(n - h)), n === l || r && isNaN(l) || (y(), y = i.$watch(p[n], u), l = n)
                })
            }
        }
    }], To = ["$parse", "$animate", function (t, a) {
        var s = "$$NG_REMOVED", u = r("ngRepeat"), l = function (t, e, n, r, i, o, a) {
            t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
        }, c = function (t) {
            return t.clone[0]
        }, f = function (t) {
            return t.clone[t.clone.length - 1]
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (r, h) {
                var d = h.ngRepeat, p = e.createComment(" end ngRepeat: " + d + " "), g = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!g)throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                var m = g[1], v = g[2], y = g[3], $ = g[4];
                if (g = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g)throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", m);
                var w = g[3] || g[1], b = g[2];
                if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y)))throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                var x, _, k, S, C = {$id: Ht};
                return $ ? x = t($) : (k = function (t, e) {
                    return Ht(e)
                }, S = function (t) {
                    return t
                }), function (t, e, r, h, g) {
                    x && (_ = function (e, n, r) {
                        return b && (C[b] = e), C[w] = n, C.$index = r, x(t, C)
                    });
                    var m = lt();
                    t.$watchCollection(v, function (r) {
                        var h, v, $, x, C, D, T, A, E, M, O, P, j = e[0], I = lt();
                        if (y && (t[y] = r), i(r))E = r, A = _ || k; else {
                            A = _ || S, E = [];
                            for (var R in r)r.hasOwnProperty(R) && "$" != R.charAt(0) && E.push(R);
                            E.sort()
                        }
                        for (x = E.length, O = new Array(x), h = 0; x > h; h++)if (C = r === E ? h : E[h], D = r[C], T = A(C, D, h), m[T])M = m[T], delete m[T], I[T] = M, O[h] = M; else {
                            if (I[T])throw o(O, function (t) {
                                t && t.scope && (m[t.id] = t)
                            }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, T, D);
                            O[h] = {id: T, scope: n, clone: n}, I[T] = !0
                        }
                        for (var N in m) {
                            if (M = m[N], P = ut(M.clone), a.leave(P), P[0].parentNode)for (h = 0, v = P.length; v > h; h++)P[h][s] = !0;
                            M.scope.$destroy()
                        }
                        for (h = 0; x > h; h++)if (C = r === E ? h : E[h], D = r[C], M = O[h], M.scope) {
                            $ = j;
                            do $ = $.nextSibling; while ($ && $[s]);
                            c(M) != $ && a.move(ut(M.clone), null, er(j)), j = f(M), l(M.scope, h, w, D, b, C, x)
                        } else g(function (t, e) {
                            M.scope = e;
                            var n = p.cloneNode(!1);
                            t[t.length++] = n, a.enter(t, null, er(j)), j = n, M.clone = t, I[M.id] = M, l(M.scope, h, w, D, b, C, x)
                        });
                        m = I
                    })
                }
            }
        }
    }], Ao = "ng-hide", Eo = "ng-hide-animate", Mo = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngShow, function (e) {
                    t[e ? "removeClass" : "addClass"](n, Ao, {tempClasses: Eo})
                })
            }
        }
    }], Oo = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngHide, function (e) {
                    t[e ? "addClass" : "removeClass"](n, Ao, {tempClasses: Eo})
                })
            }
        }
    }], Po = Tn(function (t, e, n) {
        t.$watch(n.ngStyle, function (t, n) {
            n && t !== n && o(n, function (t, n) {
                e.css(n, "")
            }), t && e.css(t)
        }, !0)
    }), jo = ["$animate", function (t) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (n, r, i, a) {
                var s = i.ngSwitch || i.on, u = [], l = [], c = [], f = [], h = function (t, e) {
                    return function () {
                        t.splice(e, 1)
                    }
                };
                n.$watch(s, function (n) {
                    var r, i;
                    for (r = 0, i = c.length; i > r; ++r)t.cancel(c[r]);
                    for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
                        var s = ut(l[r].clone);
                        f[r].$destroy();
                        var d = c[r] = t.leave(s);
                        d.then(h(c, r))
                    }
                    l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function (n) {
                        n.transclude(function (r, i) {
                            f.push(i);
                            var o = n.element;
                            r[r.length++] = e.createComment(" end ngSwitchWhen: ");
                            var a = {clone: r};
                            l.push(a), t.enter(r, o.parent(), o)
                        })
                    })
                })
            }
        }
    }], Io = Tn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: e
            })
        }
    }), Ro = Tn({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
        }
    }), No = Tn({
        restrict: "EAC", link: function (t, e, n, i, o) {
            if (!o)throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", B(e));
            o(function (t) {
                e.empty(), e.append(t)
            })
        }
    }), Uo = ["$templateCache", function (t) {
        return {
            restrict: "E", terminal: !0, compile: function (e, n) {
                if ("text/ng-template" == n.type) {
                    var r = n.id, i = e[0].text;
                    t.put(r, i)
                }
            }
        }
    }], Fo = r("ngOptions"), Ho = m({restrict: "A", terminal: !0}), Lo = ["$compile", "$parse", function (t, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, s = {$setViewValue: p};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                var r, i, o = this, a = {}, u = s;
                o.databound = n.ngModel, o.init = function (t, e, n) {
                    u = t, r = e, i = n
                }, o.addOption = function (e, n) {
                    at(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                }, o.removeOption = function (t) {
                    this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
                }, o.renderUnknownOption = function (e) {
                    var n = "? " + Ht(e) + " ?";
                    i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
                }, o.hasOption = function (t) {
                    return a.hasOwnProperty(t)
                }, e.$on("$destroy", function () {
                    o.renderUnknownOption = p
                })
            }],
            link: function (s, u, l, c) {
                function f(t, e, n, r) {
                    n.$render = function () {
                        var t = n.$viewValue;
                        r.hasOption(t) ? (k.parent() && k.remove(), e.val(t), "" === t && p.prop("selected", !0)) : null == t && p ? e.val("") : r.renderUnknownOption(t)
                    }, e.on("change", function () {
                        t.$apply(function () {
                            k.parent() && k.remove(), n.$setViewValue(e.val())
                        })
                    })
                }

                function h(t, e, n) {
                    var r;
                    n.$render = function () {
                        var t = new Lt(n.$viewValue);
                        o(e.find("option"), function (e) {
                            e.selected = y(t.get(e.value))
                        })
                    }, t.$watch(function () {
                        U(r, n.$viewValue) || (r = N(n.$viewValue), n.$render())
                    }), e.on("change", function () {
                        t.$apply(function () {
                            var t = [];
                            o(e.find("option"), function (e) {
                                e.selected && t.push(e.value)
                            }), n.$setViewValue(t)
                        })
                    })
                }

                function d(e, s, u) {
                    function l(t, n, r) {
                        return U[D] = r, E && (U[E] = n), t(e, U)
                    }

                    function c() {
                        e.$apply(function () {
                            var t, n = P(e) || [];
                            if (v)t = [], o(s.val(), function (e) {
                                e = I ? R[e] : e, t.push(f(e, n[e]))
                            }); else {
                                var r = I ? R[s.val()] : s.val();
                                t = f(r, n[r])
                            }
                            u.$setViewValue(t), k()
                        })
                    }

                    function f(t, e) {
                        if ("?" === t)return n;
                        if ("" === t)return null;
                        var r = A ? A : O;
                        return l(r, t, e)
                    }

                    function h() {
                        var t, n = P(e);
                        if (n && hr(n)) {
                            t = new Array(n.length);
                            for (var r = 0, i = n.length; i > r; r++)t[r] = l(C, r, n[r]);
                            return t
                        }
                        if (n) {
                            t = {};
                            for (var o in n)n.hasOwnProperty(o) && (t[o] = l(C, o, n[o]))
                        }
                        return t
                    }

                    function d(t) {
                        var e;
                        if (v)if (I && hr(t)) {
                            e = new Lt([]);
                            for (var n = 0; n < t.length; n++)e.put(l(I, null, t[n]), !0)
                        } else e = new Lt(t); else I && (t = l(I, null, t));
                        return function (n, r) {
                            var i;
                            return i = I ? I : A ? A : O, v ? y(e.remove(l(i, n, r))) : t === l(i, n, r)
                        }
                    }

                    function p() {
                        b || (e.$$postDigest(k), b = !0)
                    }

                    function m(t, e, n) {
                        t[e] = t[e] || 0, t[e] += n ? 1 : -1
                    }

                    function k() {
                        b = !1;
                        var t, n, r, i, c, f, h, p, $, k, S, D, T, A, O, j, F, H = {"": []}, L = [""], q = u.$viewValue, V = P(e) || [], W = E ? a(V) : V, B = {}, z = d(q), Y = !1;
                        for (R = {}, D = 0; k = W.length, k > D; D++)h = D, E && (h = W[D], "$" === h.charAt(0)) || (p = V[h], t = l(M, h, p) || "", (n = H[t]) || (n = H[t] = [], L.push(t)), T = z(h, p), Y = Y || T, j = l(C, h, p), j = y(j) ? j : "", F = I ? I(e, U) : E ? W[D] : D, I && (R[F] = h), n.push({
                            id: F,
                            label: j,
                            selected: T
                        }));
                        for (v || (w || null === q ? H[""].unshift({
                            id: "",
                            label: "",
                            selected: !Y
                        }) : Y || H[""].unshift({id: "?", label: "", selected: !0})), S = 0, $ = L.length; $ > S; S++) {
                            for (t = L[S], n = H[t], N.length <= S ? (i = {
                                element: _.clone().attr("label", t),
                                label: n.label
                            }, c = [i], N.push(c), s.append(i.element)) : (c = N[S], i = c[0], i.label != t && i.element.attr("label", i.label = t)), A = null, D = 0, k = n.length; k > D; D++)r = n[D], (f = c[D + 1]) ? (A = f.element, f.label !== r.label && (m(B, f.label, !1), m(B, r.label, !0), A.text(f.label = r.label), A.prop("label", f.label)), f.id !== r.id && A.val(f.id = r.id), A[0].selected !== r.selected && (A.prop("selected", f.selected = r.selected), tr && A.prop("selected", f.selected))) : ("" === r.id && w ? O = w : (O = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), c.push(f = {
                                element: O,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), m(B, r.label, !0), A ? A.after(O) : i.element.append(O), A = O);
                            for (D++; c.length > D;)r = c.pop(), m(B, r.label, !1), r.element.remove()
                        }
                        for (; N.length > S;) {
                            for (n = N.pop(), D = 1; D < n.length; ++D)m(B, n[D].label, !1);
                            n[0].element.remove()
                        }
                        o(B, function (t, e) {
                            t > 0 ? g.addOption(e) : 0 > t && g.removeOption(e)
                        })
                    }

                    var S;
                    if (!(S = $.match(i)))throw Fo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", $, B(s));
                    var C = r(S[2] || S[1]), D = S[4] || S[6], T = / as /.test(S[0]) && S[1], A = T ? r(T) : null, E = S[5], M = r(S[3] || ""), O = r(S[2] ? S[1] : D), P = r(S[7]), j = S[8], I = j ? r(S[8]) : null, R = {}, N = [[{
                        element: s,
                        label: ""
                    }]], U = {};
                    w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), s.empty(), s.on("change", c), u.$render = k, e.$watchCollection(P, p), e.$watchCollection(h, p), v && e.$watchCollection(function () {
                        return u.$modelValue
                    }, p)
                }

                if (c[1]) {
                    for (var p, g = c[0], m = c[1], v = l.multiple, $ = l.ngOptions, w = !1, b = !1, x = er(e.createElement("option")), _ = er(e.createElement("optgroup")), k = x.clone(), S = 0, C = u.children(), D = C.length; D > S; S++)if ("" === C[S].value) {
                        p = w = C.eq(S);
                        break
                    }
                    g.init(m, w, k), v && (m.$isEmpty = function (t) {
                        return !t || 0 === t.length
                    }), $ ? d(s, u, m) : v ? h(s, u, m) : f(s, u, m, g)
                }
            }
        }
    }], qo = ["$interpolate", function (t) {
        var e = {addOption: p, removeOption: p};
        return {
            restrict: "E", priority: 100, compile: function (n, r) {
                if (v(r.value)) {
                    var i = t(n.text(), !0);
                    i || r.$set("value", n.text())
                }
                return function (t, n, r) {
                    var o = "$selectController", a = n.parent(), s = a.data(o) || a.parent().data(o);
                    s && s.databound || (s = e), i ? t.$watch(i, function (t, e) {
                        r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
                    }) : s.addOption(r.value, n), n.on("$destroy", function () {
                        s.removeOption(r.value)
                    })
                }
            }
        }
    }], Vo = m({restrict: "E", terminal: !1}), Wo = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                r && (n.required = !0, r.$validators.required = function (t, e) {
                    return !n.required || !r.$isEmpty(e)
                }, n.$observe("required", function () {
                    r.$validate()
                }))
            }
        }
    }, Bo = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, i, o) {
                if (o) {
                    var a, s = i.ngPattern || i.pattern;
                    i.$observe("pattern", function (t) {
                        if (w(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test)throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, B(e));
                        a = t || n, o.$validate()
                    }), o.$validators.pattern = function (t, e) {
                        return o.$isEmpty(e) || v(a) || a.test(e)
                    }
                }
            }
        }
    }, zo = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = -1;
                    n.$observe("maxlength", function (t) {
                        var e = h(t);
                        i = isNaN(e) ? -1 : e, r.$validate()
                    }), r.$validators.maxlength = function (t, e) {
                        return 0 > i || r.$isEmpty(e) || e.length <= i
                    }
                }
            }
        }
    }, Yo = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("minlength", function (t) {
                        i = h(t) || 0, r.$validate()
                    }), r.$validators.minlength = function (t, e) {
                        return r.$isEmpty(e) || e.length >= i
                    }
                }
            }
        }
    };
    return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (rt(), dt(lr), void er(e).ready(function () {
        J(e, Q)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), function (t, e, n) {
    "use strict";
    e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        var t = "$$ngAnimateChildren";
        return function (n, r, i) {
            var o = i.ngAnimateChildren;
            e.isString(o) && 0 === o.length ? r.data(t, !0) : n.$watch(o, function (e) {
                r.data(t, !!e)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (t, e) {
        var n = e[0].body;
        return function (e) {
            return t(function () {
                e(n.offsetWidth)
            })
        }
    }]).config(["$provide", "$animateProvider", function (r, i) {
        function o(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType == m)return n
            }
        }

        function a(t) {
            return t && e.element(t)
        }

        function s(t) {
            return e.element(o(t))
        }

        function u(t, e) {
            return o(t) == o(e)
        }

        var l, c = e.noop, f = e.forEach, h = i.$$selectors, d = e.isArray, p = e.isString, g = e.isObject, m = 1, v = "$$ngAnimateState", y = "$$ngAnimateChildren", $ = "ng-animate", w = {running: !0};
        r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function (t, n, r, m, b, x, _, k, S, C) {
            function D(t, e) {
                var n = t.data(v) || {};
                return e && (n.running = !0, n.structural = !0, t.data(v, n)), n.disabled || n.running && n.structural
            }

            function T(t) {
                var e, r = n.defer();
                return r.promise.$$cancelFn = function () {
                    e && e()
                }, _.$$postDigest(function () {
                    e = t(function () {
                        r.resolve()
                    })
                }), r.promise
            }

            function A(t) {
                return g(t) ? (t.tempClasses && p(t.tempClasses) && (t.tempClasses = t.tempClasses.split(/\s+/)), t) : void 0
            }

            function E(t, e, n) {
                n = n || {};
                var r = {};
                f(n, function (t, e) {
                    f(e.split(" "), function (e) {
                        r[e] = t
                    })
                });
                var i = Object.create(null);
                f((t.attr("class") || "").split(/\s+/), function (t) {
                    i[t] = !0
                });
                var o = [], a = [];
                return f(e && e.classes || [], function (t, e) {
                    var n = i[e], s = r[e] || {};
                    t === !1 ? (n || "addClass" == s.event) && a.push(e) : t === !0 && (n && "removeClass" != s.event || o.push(e))
                }), o.length + a.length > 0 && [o.join(" "), a.join(" ")]
            }

            function M(t) {
                if (t) {
                    var e = [], n = {}, i = t.substr(1).split(".");
                    (m.transitions || m.animations) && e.push(r.get(h[""]));
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o], s = h[a];
                        s && !n[a] && (e.push(r.get(s)), n[a] = !0)
                    }
                    return e
                }
            }

            function O(t, n, r, i) {
                function o(t, e) {
                    var n = t[e], r = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                    return n || r ? ("leave" == e && (r = n, n = null), x.push({event: e, fn: n}), $.push({
                        event: e,
                        fn: r
                    }), !0) : void 0
                }

                function a(e, n, o) {
                    function a(t) {
                        if (n) {
                            if ((n[t] || c)(), ++h < s.length)return;
                            n = null
                        }
                        o()
                    }

                    var s = [];
                    f(e, function (t) {
                        t.fn && s.push(t)
                    });
                    var h = 0;
                    f(s, function (e, o) {
                        var s = function () {
                            a(o)
                        };
                        switch (e.event) {
                            case"setClass":
                                n.push(e.fn(t, u, l, s, i));
                                break;
                            case"animate":
                                n.push(e.fn(t, r, i.from, i.to, s));
                                break;
                            case"addClass":
                                n.push(e.fn(t, u || r, s, i));
                                break;
                            case"removeClass":
                                n.push(e.fn(t, l || r, s, i));
                                break;
                            default:
                                n.push(e.fn(t, s, i))
                        }
                    }), n && 0 === n.length && o()
                }

                var s = t[0];
                if (s) {
                    i && (i.to = i.to || {}, i.from = i.from || {});
                    var u, l;
                    d(r) && (u = r[0], l = r[1], u ? l ? r = u + " " + l : (r = u, n = "addClass") : (r = l, n = "removeClass"));
                    var h = "setClass" == n, p = h || "addClass" == n || "removeClass" == n || "animate" == n, g = t.attr("class"), m = g + " " + r;
                    if (H(m)) {
                        var v = c, y = [], $ = [], w = c, b = [], x = [], _ = (" " + m).replace(/\s+/g, ".");
                        return f(M(_), function (t) {
                            var e = o(t, n);
                            !e && h && (o(t, "addClass"), o(t, "removeClass"))
                        }), {
                            node: s,
                            event: n,
                            className: r,
                            isClassBased: p,
                            isSetClassOperation: h,
                            applyStyles: function () {
                                i && t.css(e.extend(i.from || {}, i.to || {}))
                            },
                            before: function (t) {
                                v = t, a($, y, function () {
                                    v = c, t()
                                })
                            },
                            after: function (t) {
                                w = t, a(x, b, function () {
                                    w = c, t()
                                })
                            },
                            cancel: function () {
                                y && (f(y, function (t) {
                                    (t || c)(!0)
                                }), v(!0)), b && (f(b, function (t) {
                                    (t || c)(!0)
                                }), w(!0))
                            }
                        }
                    }
                }
            }

            function P(t, n, r, i, o, a, s, u) {
                function h(e) {
                    var i = "$animate:" + e;
                    _ && _[i] && _[i].length > 0 && x(function () {
                        r.triggerHandler(i, {event: t, className: n})
                    })
                }

                function d() {
                    h("before")
                }

                function p() {
                    h("after")
                }

                function g() {
                    h("close"), u()
                }

                function m() {
                    m.hasBeenRun || (m.hasBeenRun = !0, a())
                }

                function y() {
                    if (!y.hasBeenRun) {
                        b && b.applyStyles(), y.hasBeenRun = !0, s && s.tempClasses && f(s.tempClasses, function (t) {
                            l.removeClass(r, t)
                        });
                        var e = r.data(v);
                        e && (b && b.isClassBased ? I(r, n) : (x(function () {
                            var e = r.data(v) || {};
                            P == e.index && I(r, n, t)
                        }), r.data(v, e))), g()
                    }
                }

                var w = c, b = O(r, t, n, s);
                if (!b)return m(), d(), p(), y(), w;
                t = b.event, n = b.className;
                var _ = e.element._data(b.node);
                if (_ = _ && _.events, i || (i = o ? o.parent() : r.parent()), R(r, i))return m(), d(), p(), y(), w;
                var k = r.data(v) || {}, S = k.active || {}, C = k.totalActive || 0, D = k.last, T = !1;
                if (C > 0) {
                    var A = [];
                    if (b.isClassBased) {
                        if ("setClass" == D.event)A.push(D), I(r, n); else if (S[n]) {
                            var E = S[n];
                            E.event == t ? T = !0 : (A.push(E), I(r, n))
                        }
                    } else if ("leave" == t && S["ng-leave"])T = !0; else {
                        for (var M in S)A.push(S[M]);
                        k = {}, I(r, !0)
                    }
                    A.length > 0 && f(A, function (t) {
                        t.cancel()
                    })
                }
                if (!b.isClassBased || b.isSetClassOperation || "animate" == t || T || (T = "addClass" == t == r.hasClass(n)), T)return m(), d(), p(), g(), w;
                S = k.active || {}, C = k.totalActive || 0, "leave" == t && r.one("$destroy", function (t) {
                    var n = e.element(this), r = n.data(v);
                    if (r) {
                        var i = r.active["ng-leave"];
                        i && (i.cancel(), I(n, "ng-leave"))
                    }
                }), l.addClass(r, $), s && s.tempClasses && f(s.tempClasses, function (t) {
                    l.addClass(r, t)
                });
                var P = U++;
                return C++, S[n] = b, r.data(v, {
                    last: b,
                    active: S,
                    index: P,
                    totalActive: C
                }), d(), b.before(function (e) {
                    var i = r.data(v);
                    e = e || !i || !i.active[n] || b.isClassBased && i.active[n].event != t, m(), e === !0 ? y() : (p(), b.after(y))
                }), b.cancel
            }

            function j(t) {
                var n = o(t);
                if (n) {
                    var r = e.isFunction(n.getElementsByClassName) ? n.getElementsByClassName($) : n.querySelectorAll("." + $);
                    f(r, function (t) {
                        t = e.element(t);
                        var n = t.data(v);
                        n && n.active && f(n.active, function (t) {
                            t.cancel()
                        })
                    })
                }
            }

            function I(t, e) {
                if (u(t, b))w.disabled || (w.running = !1, w.structural = !1); else if (e) {
                    var n = t.data(v) || {}, r = e === !0;
                    !r && n.active && n.active[e] && (n.totalActive--, delete n.active[e]), (r || !n.totalActive) && (l.removeClass(t, $), t.removeData(v))
                }
            }

            function R(t, n) {
                if (w.disabled)return !0;
                if (u(t, b))return w.running;
                var r, i, o;
                do {
                    if (0 === n.length)break;
                    var a = u(n, b), s = a ? w : n.data(v) || {};
                    if (s.disabled)return !0;
                    if (a && (o = !0), r !== !1) {
                        var l = n.data(y);
                        e.isDefined(l) && (r = l)
                    }
                    i = i || s.running || s.last && !s.last.isClassBased
                } while (n = n.parent());
                return !o || !r && i
            }

            l = C, b.data(v, w);
            var N = _.$watch(function () {
                return S.totalPendingRequests
            }, function (t, e) {
                0 === t && (N(), _.$$postDigest(function () {
                    _.$$postDigest(function () {
                        w.running = !1
                    })
                }))
            }), U = 0, F = i.classNameFilter(), H = F ? function (t) {
                return F.test(t)
            } : function () {
                return !0
            };
            return {
                animate: function (t, e, n, r, i) {
                    return r = r || "ng-inline-animate", i = A(i) || {}, i.from = n ? e : null, i.to = n ? n : e, T(function (e) {
                        return P("animate", r, s(t), null, null, c, i, e)
                    })
                }, enter: function (n, r, i, o) {
                    return o = A(o), n = e.element(n), r = a(r), i = a(i), D(n, !0), t.enter(n, r, i), T(function (t) {
                        return P("enter", "ng-enter", s(n), r, i, c, o, t)
                    })
                }, leave: function (n, r) {
                    return r = A(r), n = e.element(n), j(n), D(n, !0), T(function (e) {
                        return P("leave", "ng-leave", s(n), null, null, function () {
                            t.leave(n)
                        }, r, e)
                    })
                }, move: function (n, r, i, o) {
                    return o = A(o), n = e.element(n), r = a(r), i = a(i), j(n), D(n, !0), t.move(n, r, i), T(function (t) {
                        return P("move", "ng-move", s(n), r, i, c, o, t)
                    })
                }, addClass: function (t, e, n) {
                    return this.setClass(t, e, [], n)
                }, removeClass: function (t, e, n) {
                    return this.setClass(t, [], e, n)
                }, setClass: function (n, r, i, a) {
                    a = A(a);
                    var u = "$$animateClasses";
                    if (n = e.element(n), n = s(n), D(n))return t.$$setClassImmediately(n, r, i, a);
                    var l, c = n.data(u), h = !!c;
                    return c || (c = {}, c.classes = {}), l = c.classes, r = d(r) ? r : r.split(" "), f(r, function (t) {
                        t && t.length && (l[t] = !0)
                    }), i = d(i) ? i : i.split(" "), f(i, function (t) {
                        t && t.length && (l[t] = !1)
                    }), h ? (a && c.options && (c.options = e.extend(c.options || {}, a)), c.promise) : (n.data(u, c = {
                        classes: l,
                        options: a
                    }), c.promise = T(function (e) {
                        var r, i, a, s = o(n);
                        if (s && (r = n.data(u), n.removeData(u), a = n.parent(), i = s.parentNode), !i || i.$$NG_REMOVED || s.$$NG_REMOVED)return void e();
                        var l = n.data(v) || {}, c = E(n, r, l.active);
                        return c ? P("setClass", c, n, a, null, function () {
                            c[0] && t.$$addClassImmediately(n, c[0]), c[1] && t.$$removeClassImmediately(n, c[1])
                        }, r.options, e) : e()
                    }))
                }, cancel: function (t) {
                    t.$$cancelFn()
                }, enabled: function (t, e) {
                    switch (arguments.length) {
                        case 2:
                            if (t)I(e); else {
                                var n = e.data(v) || {};
                                n.disabled = !0, e.data(v, n)
                            }
                            break;
                        case 1:
                            w.disabled = !t;
                            break;
                        default:
                            t = !w.disabled
                    }
                    return !!t
                }
            }
        }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (r, i, a, s) {
            function u() {
                I || (I = s(function () {
                    G = [], I = null, z = {}
                }))
            }

            function h(t, e) {
                I && I(), G.push(e), I = s(function () {
                    f(G, function (t) {
                        t()
                    }), G = [], I = null, z = {}
                })
            }

            function g(t, n) {
                var r = o(t);
                t = e.element(r), K.push(t);
                var i = Date.now() + n;
                Z >= i || (a.cancel(X), Z = i, X = a(function () {
                    v(K), K = []
                }, n, !1))
            }

            function v(t) {
                f(t, function (t) {
                    var e = t.data(q);
                    e && f(e.closeAnimationFns, function (t) {
                        t()
                    })
                })
            }

            function y(t, e) {
                var n = e ? z[e] : null;
                if (!n) {
                    var i = 0, o = 0, a = 0, s = 0;
                    f(t, function (t) {
                        if (t.nodeType == m) {
                            var e = r.getComputedStyle(t) || {}, n = e[E + R];
                            i = Math.max($(n), i);
                            var u = e[E + U];
                            o = Math.max($(u), o);
                            e[O + U];
                            s = Math.max($(e[O + U]), s);
                            var l = $(e[O + R]);
                            l > 0 && (l *= parseInt(e[O + F], 10) || 1), a = Math.max(l, a)
                        }
                    }), n = {
                        total: 0,
                        transitionDelay: o,
                        transitionDuration: i,
                        animationDelay: s,
                        animationDuration: a
                    }, e && (z[e] = n)
                }
                return n
            }

            function $(t) {
                var e = 0, n = p(t) ? t.split(/\s*,\s*/) : [];
                return f(n, function (t) {
                    e = Math.max(parseFloat(t) || 0, e)
                }), e
            }

            function w(t) {
                var e = t.parent(), n = e.data(L);
                return n || (e.data(L, ++Y), n = Y), n + "-" + o(t).getAttribute("class")
            }

            function b(t, e, n, r) {
                var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(n) >= 0, a = w(e), s = a + " " + n, u = z[s] ? ++z[s].total : 0, c = {};
                if (u > 0) {
                    var f = n + "-stagger", h = a + " " + f, d = !z[h];
                    d && l.addClass(e, f), c = y(e, h), d && l.removeClass(e, f)
                }
                l.addClass(e, n);
                var p = e.data(q) || {}, g = y(e, s), m = g.transitionDuration, v = g.animationDuration;
                if (i && 0 === m && 0 === v)return l.removeClass(e, n), !1;
                var $ = r || i && m > 0, b = v > 0 && c.animationDelay > 0 && 0 === c.animationDuration, x = p.closeAnimationFns || [];
                e.data(q, {
                    stagger: c,
                    cacheKey: s,
                    running: p.running || 0,
                    itemIndex: u,
                    blockTransition: $,
                    closeAnimationFns: x
                });
                var S = o(e);
                return $ && (_(S, !0), r && e.css(r)), b && k(S, !0), !0
            }

            function x(t, e, n, r, i) {
                function s() {
                    e.off(U, u), l.removeClass(e, d), l.removeClass(e, p), R && a.cancel(R), T(e, n);
                    var t = o(e);
                    for (var r in v)t.style.removeProperty(v[r])
                }

                function u(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t, n = e.$manualTimeStamp || e.timeStamp || Date.now(), i = parseFloat(e.elapsedTime.toFixed(V));
                    Math.max(n - N, 0) >= O && i >= A && r()
                }

                var c = o(e), h = e.data(q);
                if (-1 == c.getAttribute("class").indexOf(n) || !h)return void r();
                var d = "", p = "";
                f(n.split(" "), function (t, e) {
                    var n = (e > 0 ? " " : "") + t;
                    d += n + "-active", p += n + "-pending"
                });
                var m = "", v = [], $ = h.itemIndex, w = h.stagger, b = 0;
                if ($ > 0) {
                    var x = 0;
                    w.transitionDelay > 0 && 0 === w.transitionDuration && (x = w.transitionDelay * $);
                    var S = 0;
                    w.animationDelay > 0 && 0 === w.animationDuration && (S = w.animationDelay * $, v.push(j + "animation-play-state")), b = Math.round(100 * Math.max(x, S)) / 100
                }
                b || (l.addClass(e, d), h.blockTransition && _(c, !1));
                var C = h.cacheKey + " " + d, D = y(e, C), A = Math.max(D.transitionDuration, D.animationDuration);
                if (0 === A)return l.removeClass(e, d), T(e, n), void r();
                !b && i && Object.keys(i).length > 0 && (D.transitionDuration || (e.css("transition", D.animationDuration + "s linear all"), v.push("transition")), e.css(i));
                var E = Math.max(D.transitionDelay, D.animationDelay), O = E * B;
                if (v.length > 0) {
                    var I = c.getAttribute("style") || "";
                    ";" !== I.charAt(I.length - 1) && (I += ";"), c.setAttribute("style", I + " " + m)
                }
                var R, N = Date.now(), U = P + " " + M, F = (E + A) * W, H = (b + F) * B;
                return b > 0 && (l.addClass(e, p), R = a(function () {
                    R = null, D.transitionDuration > 0 && _(c, !1), D.animationDuration > 0 && k(c, !1), l.addClass(e, d), l.removeClass(e, p), i && (0 === D.transitionDuration && e.css("transition", D.animationDuration + "s linear all"), e.css(i), v.push("transition"))
                }, b * B, !1)), e.on(U, u), h.closeAnimationFns.push(function () {
                    s(), r()
                }), h.running++, g(e, H), s
            }

            function _(t, e) {
                t.style[E + N] = e ? "none" : ""
            }

            function k(t, e) {
                t.style[O + H] = e ? "paused" : ""
            }

            function S(t, e, n, r) {
                return b(t, e, n, r) ? function (t) {
                    t && T(e, n)
                } : void 0
            }

            function C(t, e, n, r, i) {
                return e.data(q) ? x(t, e, n, r, i) : (T(e, n), void r())
            }

            function D(t, e, n, r, i) {
                var o = S(t, e, n, i.from);
                if (!o)return u(), void r();
                var a = o;
                return h(e, function () {
                    a = C(t, e, n, r, i.to)
                }), function (t) {
                    (a || c)(t)
                }
            }

            function T(t, e) {
                l.removeClass(t, e);
                var n = t.data(q);
                n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(q))
            }

            function A(t, e) {
                var n = "";
                return t = d(t) ? t : t.split(/\s+/), f(t, function (t, r) {
                    t && t.length > 0 && (n += (r > 0 ? " " : "") + t + e)
                }), n
            }

            var E, M, O, P, j = "";
            t.ontransitionend === n && t.onwebkittransitionend !== n ? (j = "-webkit-", E = "WebkitTransition", M = "webkitTransitionEnd transitionend") : (E = "transition", M = "transitionend"), t.onanimationend === n && t.onwebkitanimationend !== n ? (j = "-webkit-", O = "WebkitAnimation", P = "webkitAnimationEnd animationend") : (O = "animation", P = "animationend");
            var I, R = "Duration", N = "Property", U = "Delay", F = "IterationCount", H = "PlayState", L = "$$ngAnimateKey", q = "$$ngAnimateCSS3Data", V = 3, W = 1.5, B = 1e3, z = {}, Y = 0, G = [], X = null, Z = 0, K = [];
            return {
                animate: function (t, e, n, r, i, o) {
                    return o = o || {}, o.from = n, o.to = r, D("animate", t, e, i, o)
                }, enter: function (t, e, n) {
                    return n = n || {}, D("enter", t, "ng-enter", e, n)
                }, leave: function (t, e, n) {
                    return n = n || {}, D("leave", t, "ng-leave", e, n)
                }, move: function (t, e, n) {
                    return n = n || {}, D("move", t, "ng-move", e, n)
                }, beforeSetClass: function (t, e, n, r, i) {
                    i = i || {};
                    var o = A(n, "-remove") + " " + A(e, "-add"), a = S("setClass", t, o, i.from);
                    return a ? (h(t, r), a) : (u(), void r())
                }, beforeAddClass: function (t, e, n, r) {
                    r = r || {};
                    var i = S("addClass", t, A(e, "-add"), r.from);
                    return i ? (h(t, n), i) : (u(), void n())
                }, beforeRemoveClass: function (t, e, n, r) {
                    r = r || {};
                    var i = S("removeClass", t, A(e, "-remove"), r.from);
                    return i ? (h(t, n), i) : (u(), void n())
                }, setClass: function (t, e, n, r, i) {
                    i = i || {}, n = A(n, "-remove"), e = A(e, "-add");
                    var o = n + " " + e;
                    return C("setClass", t, o, r, i.to)
                }, addClass: function (t, e, n, r) {
                    return r = r || {}, C("addClass", t, A(e, "-add"), n, r.to)
                }, removeClass: function (t, e, n, r) {
                    return r = r || {}, C("removeClass", t, A(e, "-remove"), n, r.to)
                }
            }
        }])
    }])
}(window, window.angular), angular.module("ivpusic.cookie", ["ipCookie"]), angular.module("ipCookie", ["ng"]).factory("ipCookie", ["$document", function (t) {
    "use strict";
    function e(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
        }
    }

    return function () {
        function n(n, r, i) {
            var o, a, s, u, l, c, f, h, d;
            i = i || {};
            var p = i.decode || e, g = i.encode || encodeURIComponent;
            if (void 0 !== r)return r = "object" == typeof r ? JSON.stringify(r) : String(r), "number" == typeof i.expires && (d = i.expires, i.expires = new Date, -1 === d ? i.expires = new Date("Thu, 01 Jan 1970 00:00:00 GMT") : void 0 !== i.expirationUnit ? "hours" === i.expirationUnit ? i.expires.setHours(i.expires.getHours() + d) : "minutes" === i.expirationUnit ? i.expires.setMinutes(i.expires.getMinutes() + d) : "seconds" === i.expirationUnit ? i.expires.setSeconds(i.expires.getSeconds() + d) : "milliseconds" === i.expirationUnit ? i.expires.setMilliseconds(i.expires.getMilliseconds() + d) : i.expires.setDate(i.expires.getDate() + d) : i.expires.setDate(i.expires.getDate() + d)), t[0].cookie = [g(n), "=", g(r), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
            for (a = [], h = t[0].cookie, h && (a = h.split("; ")), o = {}, f = !1, s = 0; s < a.length; ++s)if (a[s]) {
                if (u = a[s], l = u.indexOf("="), c = u.substring(0, l), r = p(u.substring(l + 1)), angular.isUndefined(r))continue;
                if (void 0 === n || n === c) {
                    try {
                        o[c] = JSON.parse(r)
                    } catch (m) {
                        o[c] = r
                    }
                    if (n === c)return o[c];
                    f = !0
                }
            }
            return f && void 0 === n ? o : void 0
        }

        return n.remove = function (t, e) {
            var r = void 0 !== n(t);
            return r && (e || (e = {}), e.expires = -1, n(t, "", e)), r
        }, n
    }()
}]), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (t, e, n) {
    "use strict";
    function r(t, e) {
        return V(new (V(function () {
        }, {prototype: t})), e)
    }

    function i(t) {
        return q(arguments, function (e) {
            e !== t && q(e, function (e, n) {
                t.hasOwnProperty(n) || (t[n] = e)
            })
        }), t
    }

    function o(t, e) {
        var n = [];
        for (var r in t.path) {
            if (t.path[r] !== e.path[r])break;
            n.push(t.path[r])
        }
        return n
    }

    function a(t) {
        if (Object.keys)return Object.keys(t);
        var e = [];
        return q(t, function (t, n) {
            e.push(n)
        }), e
    }

    function s(t, e) {
        if (Array.prototype.indexOf)return t.indexOf(e, Number(arguments[2]) || 0);
        var n = t.length >>> 0, r = Number(arguments[2]) || 0;
        for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)if (r in t && t[r] === e)return r;
        return -1
    }

    function u(t, e, n, r) {
        var i, u = o(n, r), l = {}, c = [];
        for (var f in u)if (u[f] && u[f].params && (i = a(u[f].params), i.length))for (var h in i)s(c, i[h]) >= 0 || (c.push(i[h]), l[i[h]] = t[i[h]]);
        return V({}, l, e)
    }

    function l(t, e, n) {
        if (!n) {
            n = [];
            for (var r in t)n.push(r)
        }
        for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (t[o] != e[o])return !1
        }
        return !0
    }

    function c(t, e) {
        var n = {};
        return q(t, function (t) {
            n[t] = e[t]
        }), n
    }

    function f(t) {
        var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        return q(n, function (n) {
            n in t && (e[n] = t[n])
        }), e
    }

    function h(t) {
        var e = {}, n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var r in t)-1 == s(n, r) && (e[r] = t[r]);
        return e
    }

    function d(t, e) {
        var n = L(t), r = n ? [] : {};
        return q(t, function (t, i) {
            e(t, i) && (r[n ? r.length : i] = t)
        }), r
    }

    function p(t, e) {
        var n = L(t) ? [] : {};
        return q(t, function (t, r) {
            n[r] = e(t, r)
        }), n
    }

    function g(t, e) {
        var r = 1, o = 2, u = {}, l = [], c = u, f = V(t.when(u), {$$promises: u, $$values: u});
        this.study = function (u) {
            function d(t, n) {
                if (y[n] !== o) {
                    if (v.push(n), y[n] === r)throw v.splice(0, s(v, n)), new Error("Cyclic dependency: " + v.join(" -> "));
                    if (y[n] = r, F(t))m.push(n, [function () {
                        return e.get(t)
                    }], l); else {
                        var i = e.annotate(t);
                        q(i, function (t) {
                            t !== n && u.hasOwnProperty(t) && d(u[t], t)
                        }), m.push(n, t, i)
                    }
                    v.pop(), y[n] = o
                }
            }

            function p(t) {
                return H(t) && t.then && t.$$promises
            }

            if (!H(u))throw new Error("'invocables' must be an object");
            var g = a(u || {}), m = [], v = [], y = {};
            return q(u, d), u = v = y = null, function (r, o, a) {
                function s() {
                    --w || (b || i($, o.$$values), v.$$values = $, v.$$promises = v.$$promises || !0, delete v.$$inheritedValues, d.resolve($))
                }

                function u(t) {
                    v.$$failure = t, d.reject(t)
                }

                function l(n, i, o) {
                    function l(t) {
                        f.reject(t), u(t)
                    }

                    function c() {
                        if (!N(v.$$failure))try {
                            f.resolve(e.invoke(i, a, $)), f.promise.then(function (t) {
                                $[n] = t, s()
                            }, l)
                        } catch (t) {
                            l(t)
                        }
                    }

                    var f = t.defer(), h = 0;
                    q(o, function (t) {
                        y.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, y[t].then(function (e) {
                            $[t] = e, --h || c()
                        }, l))
                    }), h || c(), y[n] = f.promise
                }

                if (p(r) && a === n && (a = o, o = r, r = null), r) {
                    if (!H(r))throw new Error("'locals' must be an object")
                } else r = c;
                if (o) {
                    if (!p(o))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else o = f;
                var d = t.defer(), v = d.promise, y = v.$$promises = {}, $ = V({}, r), w = 1 + m.length / 3, b = !1;
                if (N(o.$$failure))return u(o.$$failure), v;
                o.$$inheritedValues && i($, h(o.$$inheritedValues, g)), V(y, o.$$promises), o.$$values ? (b = i($, h(o.$$values, g)), v.$$inheritedValues = h(o.$$values, g), s()) : (o.$$inheritedValues && (v.$$inheritedValues = h(o.$$inheritedValues, g)), o.then(s, u));
                for (var x = 0, _ = m.length; _ > x; x += 3)r.hasOwnProperty(m[x]) ? s() : l(m[x], m[x + 1], m[x + 2]);
                return v
            }
        }, this.resolve = function (t, e, n, r) {
            return this.study(t)(e, n, r)
        }
    }

    function m(t, e, n) {
        this.fromConfig = function (t, e, n) {
            return N(t.template) ? this.fromString(t.template, e) : N(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : N(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n) : null
        }, this.fromString = function (t, e) {
            return U(t) ? t(e) : t
        }, this.fromUrl = function (n, r) {
            return U(n) && (n = n(r)), null == n ? null : t.get(n, {
                cache: e,
                headers: {Accept: "text/html"}
            }).then(function (t) {
                return t.data
            })
        }, this.fromProvider = function (t, e, r) {
            return n.invoke(t, null, r || {params: e})
        }
    }

    function v(t, e, i) {
        function o(e, n, r, i) {
            if (m.push(e), p[e])return p[e];
            if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(e))throw new Error("Invalid parameter name '" + e + "' in pattern '" + t + "'");
            if (g[e])throw new Error("Duplicate parameter name '" + e + "' in pattern '" + t + "'");
            return g[e] = new z.Param(e, n, r, i), g[e]
        }

        function a(t, e, n, r) {
            var i = ["", ""], o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!e)return o;
            switch (n) {
                case!1:
                    i = ["(", ")" + (r ? "?" : "")];
                    break;
                case!0:
                    o = o.replace(/\/$/, ""), i = ["(?:/(", ")|/)?"];
                    break;
                default:
                    i = ["(" + n + "|", ")?"]
            }
            return o + i[0] + e + i[1]
        }

        function s(i, o) {
            var a, s, u, l, c;
            return a = i[2] || i[3], c = e.params[a], u = t.substring(h, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), s && (l = z.type(s) || r(z.type("string"), {pattern: new RegExp(s, e.caseInsensitive ? "i" : n)})), {
                id: a,
                regexp: s,
                segment: u,
                type: l,
                cfg: c
            }
        }

        e = V({params: {}}, H(e) ? e : {});
        var u, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, c = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", h = 0, d = this.segments = [], p = i ? i.params : {}, g = this.params = i ? i.params.$$new() : new z.ParamSet, m = [];
        this.source = t;
        for (var v, y, $; (u = l.exec(t)) && (v = s(u, !1), !(v.segment.indexOf("?") >= 0));)y = o(v.id, v.type, v.cfg, "path"), f += a(v.segment, y.type.pattern.source, y.squash, y.isOptional), d.push(v.segment), h = l.lastIndex;
        $ = t.substring(h);
        var w = $.indexOf("?");
        if (w >= 0) {
            var b = this.sourceSearch = $.substring(w);
            if ($ = $.substring(0, w), this.sourcePath = t.substring(0, h + w), b.length > 0)for (h = 0; u = c.exec(b);)v = s(u, !0), y = o(v.id, v.type, v.cfg, "search"), h = l.lastIndex
        } else this.sourcePath = t, this.sourceSearch = "";
        f += a($) + (e.strict === !1 ? "/?" : "") + "$", d.push($), this.regexp = new RegExp(f, e.caseInsensitive ? "i" : n), this.prefix = d[0], this.$$paramNames = m
    }

    function y(t) {
        V(this, t)
    }

    function $() {
        function t(t) {
            return null != t ? t.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : t
        }

        function i(t) {
            return null != t ? t.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : t
        }

        function o() {
            return {strict: g, caseInsensitive: h}
        }

        function u(t) {
            return U(t) || L(t) && U(t[t.length - 1])
        }

        function l() {
            for (; x.length;) {
                var t = x.shift();
                if (t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");
                e.extend(w[t.name], f.invoke(t.def))
            }
        }

        function c(t) {
            V(this, t || {})
        }

        z = this;
        var f, h = !1, g = !0, m = !1, w = {}, b = !0, x = [], _ = {
            string: {
                encode: t, decode: i, is: function (t) {
                    return null == t || !N(t) || "string" == typeof t
                }, pattern: /[^\/]*/
            },
            "int": {
                encode: t, decode: function (t) {
                    return parseInt(t, 10)
                }, is: function (t) {
                    return N(t) && this.decode(t.toString()) === t
                }, pattern: /\d+/
            },
            bool: {
                encode: function (t) {
                    return t ? 1 : 0
                }, decode: function (t) {
                    return 0 !== parseInt(t, 10)
                }, is: function (t) {
                    return t === !0 || t === !1
                }, pattern: /0|1/
            },
            date: {
                encode: function (t) {
                    return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : n
                },
                decode: function (t) {
                    if (this.is(t))return t;
                    var e = this.capture.exec(t);
                    return e ? new Date(e[1], e[2] - 1, e[3]) : n
                },
                is: function (t) {
                    return t instanceof Date && !isNaN(t.valueOf())
                },
                equals: function (t, e) {
                    return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {encode: e.toJson, decode: e.fromJson, is: e.isObject, equals: e.equals, pattern: /[^\/]*/},
            any: {encode: e.identity, decode: e.identity, equals: e.equals, pattern: /.*/}
        };
        $.$$getDefaultValue = function (t) {
            if (!u(t.value))return t.value;
            if (!f)throw new Error("Injectable functions cannot be called at configuration time");
            return f.invoke(t.value)
        }, this.caseInsensitive = function (t) {
            return N(t) && (h = t), h
        }, this.strictMode = function (t) {
            return N(t) && (g = t), g
        }, this.defaultSquashPolicy = function (t) {
            if (!N(t))return m;
            if (t !== !0 && t !== !1 && !F(t))throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");
            return m = t, t
        }, this.compile = function (t, e) {
            return new v(t, V(o(), e))
        }, this.isMatcher = function (t) {
            if (!H(t))return !1;
            var e = !0;
            return q(v.prototype, function (n, r) {
                U(n) && (e = e && N(t[r]) && U(t[r]))
            }), e
        }, this.type = function (t, e, n) {
            if (!N(e))return w[t];
            if (w.hasOwnProperty(t))throw new Error("A type named '" + t + "' has already been defined.");
            return w[t] = new y(V({name: t}, e)), n && (x.push({name: t, def: n}), b || l()), this
        }, q(_, function (t, e) {
            w[e] = new y(V({name: e}, t))
        }), w = r(w, {}), this.$get = ["$injector", function (t) {
            return f = t, b = !1, l(), q(_, function (t, e) {
                w[e] || (w[e] = new y(t))
            }), this
        }], this.Param = function (t, r, i, o) {
            function l(t) {
                var e = H(t) ? a(t) : [], n = -1 === s(e, "value") && -1 === s(e, "type") && -1 === s(e, "squash") && -1 === s(e, "array");
                return n && (t = {value: t}), t.$$fn = u(t.value) ? t.value : function () {
                    return t.value
                }, t
            }

            function c(n, r, i) {
                if (n.type && r)throw new Error("Param '" + t + "' has two type configurations.");
                return r ? r : n.type ? e.isString(n.type) ? w[n.type] : n.type instanceof y ? n.type : new y(n.type) : "config" === i ? w.any : w.string
            }

            function h() {
                var e = {array: "search" === o ? "auto" : !1}, n = t.match(/\[\]$/) ? {array: !0} : {};
                return V(e, n, i).array
            }

            function g(t, e) {
                var n = t.squash;
                if (!e || n === !1)return !1;
                if (!N(n) || null == n)return m;
                if (n === !0 || F(n))return n;
                throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
            }

            function v(t, e, r, i) {
                var o, a, u = [{from: "", to: r || e ? n : ""}, {from: null, to: r || e ? n : ""}];
                return o = L(t.replace) ? t.replace : [], F(i) && o.push({from: i, to: n}), a = p(o, function (t) {
                    return t.from
                }), d(u, function (t) {
                    return -1 === s(a, t.from)
                }).concat(o)
            }

            function $() {
                if (!f)throw new Error("Injectable functions cannot be called at configuration time");
                var t = f.invoke(i.$$fn);
                if (null !== t && t !== n && !_.type.is(t))throw new Error("Default value (" + t + ") for parameter '" + _.id + "' is not an instance of Type (" + _.type.name + ")");
                return t
            }

            function b(t) {
                function e(t) {
                    return function (e) {
                        return e.from === t
                    }
                }

                function n(t) {
                    var n = p(d(_.replace, e(t)), function (t) {
                        return t.to
                    });
                    return n.length ? n[0] : t
                }

                return t = n(t), N(t) ? _.type.$normalize(t) : $()
            }

            function x() {
                return "{Param:" + t + " " + r + " squash: '" + C + "' optional: " + S + "}"
            }

            var _ = this;
            i = l(i), r = c(i, r, o);
            var k = h();
            r = k ? r.$asArray(k, "search" === o) : r, "string" !== r.name || k || "path" !== o || i.value !== n || (i.value = "");
            var S = i.value !== n, C = g(i, S), D = v(i, k, S, C);
            V(this, {
                id: t,
                type: r,
                location: o,
                array: k,
                squash: C,
                replace: D,
                isOptional: S,
                value: b,
                dynamic: n,
                config: i,
                toString: x
            })
        }, c.prototype = {
            $$new: function () {
                return r(this, V(new c, {$$parent: this}))
            }, $$keys: function () {
                for (var t = [], e = [], n = this, r = a(c.prototype); n;)e.push(n), n = n.$$parent;
                return e.reverse(), q(e, function (e) {
                    q(a(e), function (e) {
                        -1 === s(t, e) && -1 === s(r, e) && t.push(e)
                    })
                }), t
            }, $$values: function (t) {
                var e = {}, n = this;
                return q(n.$$keys(), function (r) {
                    e[r] = n[r].value(t && t[r])
                }), e
            }, $$equals: function (t, e) {
                var n = !0, r = this;
                return q(r.$$keys(), function (i) {
                    var o = t && t[i], a = e && e[i];
                    r[i].type.equals(o, a) || (n = !1);
                }), n
            }, $$validates: function (t) {
                var r, i, o, a, s, u = this.$$keys();
                for (r = 0; r < u.length && (i = this[u[r]], o = t[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                    if (a = i.type.$normalize(o), !i.type.is(a))return !1;
                    if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s))return !1
                }
                return !0
            }, $$parent: n
        }, this.ParamSet = c
    }

    function w(t, r) {
        function i(t) {
            var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
            return null != e ? e[1].replace(/\\(.)/g, "$1") : ""
        }

        function o(t, e) {
            return t.replace(/\$(\$|\d{1,2})/, function (t, n) {
                return e["$" === n ? 0 : Number(n)]
            })
        }

        function a(t, e, n) {
            if (!n)return !1;
            var r = t.invoke(e, e, {$match: n});
            return N(r) ? r : !0
        }

        function s(r, i, o, a, s) {
            function h(t, e, n) {
                return "/" === m ? t : e ? m.slice(0, -1) + t : n ? m.slice(1) + t : t
            }

            function d(t) {
                function e(t) {
                    var e = t(o, r);
                    return e ? (F(e) && r.replace().url(e), !0) : !1
                }

                if (!t || !t.defaultPrevented) {
                    g && r.url() === g;
                    g = n;
                    var i, a = l.length;
                    for (i = 0; a > i; i++)if (e(l[i]))return;
                    c && e(c)
                }
            }

            function p() {
                return u = u || i.$on("$locationChangeSuccess", d)
            }

            var g, m = a.baseHref(), v = r.url();
            return f || p(), {
                sync: function () {
                    d()
                }, listen: function () {
                    return p()
                }, update: function (t) {
                    return t ? void(v = r.url()) : void(r.url() !== v && (r.url(v), r.replace()))
                }, push: function (t, e, i) {
                    var o = t.format(e || {});
                    null !== o && e && e["#"] && (o += "#" + e["#"]), r.url(o), g = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                }, href: function (n, i, o) {
                    if (!n.validates(i))return null;
                    var a = t.html5Mode();
                    e.isObject(a) && (a = a.enabled), a = a && s.history;
                    var u = n.format(i);
                    if (o = o || {}, a || null === u || (u = "#" + t.hashPrefix() + u), null !== u && i && i["#"] && (u += "#" + i["#"]), u = h(u, a, o.absolute), !o.absolute || !u)return u;
                    var l = !a && u ? "/" : "", c = r.port();
                    return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, l, u].join("")
                }
            }
        }

        var u, l = [], c = null, f = !1;
        this.rule = function (t) {
            if (!U(t))throw new Error("'rule' must be a function");
            return l.push(t), this
        }, this.otherwise = function (t) {
            if (F(t)) {
                var e = t;
                t = function () {
                    return e
                }
            } else if (!U(t))throw new Error("'rule' must be a function");
            return c = t, this
        }, this.when = function (t, e) {
            var n, s = F(e);
            if (F(t) && (t = r.compile(t)), !s && !U(e) && !L(e))throw new Error("invalid 'handler' in when()");
            var u = {
                matcher: function (t, e) {
                    return s && (n = r.compile(e), e = ["$match", function (t) {
                        return n.format(t)
                    }]), V(function (n, r) {
                        return a(n, e, t.exec(r.path(), r.search()))
                    }, {prefix: F(t.prefix) ? t.prefix : ""})
                }, regex: function (t, e) {
                    if (t.global || t.sticky)throw new Error("when() RegExp must not be global or sticky");
                    return s && (n = e, e = ["$match", function (t) {
                        return o(n, t)
                    }]), V(function (n, r) {
                        return a(n, e, t.exec(r.path()))
                    }, {prefix: i(t)})
                }
            }, l = {matcher: r.isMatcher(t), regex: t instanceof RegExp};
            for (var c in l)if (l[c])return this.rule(u[c](t, e));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (t) {
            t === n && (t = !0), f = t
        }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
    }

    function b(t, i) {
        function o(t) {
            return 0 === t.indexOf(".") || 0 === t.indexOf("^")
        }

        function h(t, e) {
            if (!t)return n;
            var r = F(t), i = r ? t : t.name, a = o(i);
            if (a) {
                if (!e)throw new Error("No reference point given for path '" + i + "'");
                e = h(e);
                for (var s = i.split("."), u = 0, l = s.length, c = e; l > u; u++)if ("" !== s[u] || 0 !== u) {
                    if ("^" !== s[u])break;
                    if (!c.parent)throw new Error("Path '" + i + "' not valid for state '" + e.name + "'");
                    c = c.parent
                } else c = e;
                s = s.slice(u).join("."), i = c.name + (c.name && s ? "." : "") + s
            }
            var f = S[i];
            return !f || !r && (r || f !== t && f.self !== t) ? n : f
        }

        function d(t, e) {
            C[t] || (C[t] = []), C[t].push(e)
        }

        function g(t) {
            for (var e = C[t] || []; e.length;)m(e.shift())
        }

        function m(e) {
            e = r(e, {
                self: e, resolve: e.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var n = e.name;
            if (!F(n) || n.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (S.hasOwnProperty(n))throw new Error("State '" + n + "' is already defined");
            var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : F(e.parent) ? e.parent : H(e.parent) && F(e.parent.name) ? e.parent.name : "";
            if (i && !S[i])return d(i, e.self);
            for (var o in T)U(T[o]) && (e[o] = T[o](e, T.$delegates[o]));
            return S[n] = e, !e[D] && e.url && t.when(e.url, ["$match", "$stateParams", function (t, n) {
                k.$current.navigable == e && l(t, n) || k.transitionTo(e, t, {inherit: !0, location: !1})
            }]), g(n), e
        }

        function v(t) {
            return t.indexOf("*") > -1
        }

        function y(t) {
            for (var e = t.split("."), n = k.$current.name.split("."), r = 0, i = e.length; i > r; r++)"*" === e[r] && (n[r] = "*");
            return "**" === e[0] && (n = n.slice(s(n, e[1])), n.unshift("**")), "**" === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), e.length != n.length ? !1 : n.join("") === e.join("")
        }

        function $(t, e) {
            return F(t) && !N(e) ? T[t] : U(e) && F(t) ? (T[t] && !T.$delegates[t] && (T.$delegates[t] = T[t]), T[t] = e, this) : this
        }

        function w(t, e) {
            return H(t) ? e = t : e.name = t, m(e), this
        }

        function b(t, i, o, s, f, d, g, m, $) {
            function w(e, n, r, o) {
                var a = t.$broadcast("$stateNotFound", e, n, r);
                if (a.defaultPrevented)return g.update(), A;
                if (!a.retry)return null;
                if (o.$retry)return g.update(), E;
                var s = k.transition = i.when(a.retry);
                return s.then(function () {
                    return s !== k.transition ? C : (e.options.$retry = !0, k.transitionTo(e.to, e.toParams, e.options))
                }, function () {
                    return A
                }), g.update(), s
            }

            function b(t, n, r, a, u, l) {
                function h() {
                    var n = [];
                    return q(t.views, function (r, i) {
                        var a = r.resolve && r.resolve !== t.resolve ? r.resolve : {};
                        a.$template = [function () {
                            return o.load(i, {view: r, locals: u.globals, params: d, notify: l.notify}) || ""
                        }], n.push(f.resolve(a, u.globals, u.resolve, t).then(function (n) {
                            if (U(r.controllerProvider) || L(r.controllerProvider)) {
                                var o = e.extend({}, a, u.globals);
                                n.$$controller = s.invoke(r.controllerProvider, null, o)
                            } else n.$$controller = r.controller;
                            n.$$state = t, n.$$controllerAs = r.controllerAs, u[i] = n
                        }))
                    }), i.all(n).then(function () {
                        return u.globals
                    })
                }

                var d = r ? n : c(t.params.$$keys(), n), p = {$stateParams: d};
                u.resolve = f.resolve(t.resolve, p, u.resolve, t);
                var g = [u.resolve.then(function (t) {
                    u.globals = t
                })];
                return a && g.push(a), i.all(g).then(h).then(function (t) {
                    return u
                })
            }

            var C = i.reject(new Error("transition superseded")), T = i.reject(new Error("transition prevented")), A = i.reject(new Error("transition aborted")), E = i.reject(new Error("transition failed"));
            return _.locals = {resolve: null, globals: {$stateParams: {}}}, k = {
                params: {},
                current: _.self,
                $current: _,
                transition: null
            }, k.reload = function (t) {
                return k.transitionTo(k.current, d, {reload: t || !0, inherit: !1, notify: !0})
            }, k.go = function (t, e, n) {
                return k.transitionTo(t, e, V({inherit: !0, relative: k.$current}, n))
            }, k.transitionTo = function (e, n, o) {
                n = n || {}, o = V({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, o || {});
                var a, l = k.$current, f = k.params, p = l.path, m = h(e, o.relative), v = n["#"];
                if (!N(m)) {
                    var y = {to: e, toParams: n, options: o}, $ = w(y, l.self, f, o);
                    if ($)return $;
                    if (e = y.to, n = y.toParams, o = y.options, m = h(e, o.relative), !N(m)) {
                        if (!o.relative)throw new Error("No such state '" + e + "'");
                        throw new Error("Could not resolve '" + e + "' from state '" + o.relative + "'")
                    }
                }
                if (m[D])throw new Error("Cannot transition to abstract state '" + e + "'");
                if (o.inherit && (n = u(d, n || {}, k.$current, m)), !m.params.$$validates(n))return E;
                n = m.params.$$values(n), e = m;
                var S = e.path, A = 0, M = S[A], O = _.locals, P = [];
                if (o.reload) {
                    if (F(o.reload) || H(o.reload)) {
                        if (H(o.reload) && !o.reload.name)throw new Error("Invalid reload state object");
                        var j = o.reload === !0 ? p[0] : h(o.reload);
                        if (o.reload && !j)throw new Error("No such reload state '" + (F(o.reload) ? o.reload : o.reload.name) + "'");
                        for (; M && M === p[A] && M !== j;)O = P[A] = M.locals, A++, M = S[A]
                    }
                } else for (; M && M === p[A] && M.ownParams.$$equals(n, f);)O = P[A] = M.locals, A++, M = S[A];
                if (x(e, n, l, f, O, o))return v && (n["#"] = v), k.params = n, W(k.params, d), W(c(e.params.$$keys(), d), e.locals.globals.$stateParams), o.location && e.navigable && e.navigable.url && (g.push(e.navigable.url, n, {
                    $$avoidResync: !0,
                    replace: "replace" === o.location
                }), g.update(!0)), k.transition = null, i.when(k.current);
                if (n = c(e.params.$$keys(), n || {}), v && (n["#"] = v), o.notify && t.$broadcast("$stateChangeStart", e.self, n, l.self, f, o).defaultPrevented)return t.$broadcast("$stateChangeCancel", e.self, n, l.self, f), null == k.transition && g.update(), T;
                for (var I = i.when(O), R = A; R < S.length; R++, M = S[R])O = P[R] = r(O), I = b(M, n, M === e, I, O, o);
                var U = k.transition = I.then(function () {
                    var r, i, a;
                    if (k.transition !== U)return C;
                    for (r = p.length - 1; r >= A; r--)a = p[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                    for (r = A; r < S.length; r++)i = S[r], i.locals = P[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                    return k.transition !== U ? C : (k.$current = e, k.current = e.self, k.params = n, W(k.params, d), k.transition = null, o.location && e.navigable && g.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), o.notify && t.$broadcast("$stateChangeSuccess", e.self, n, l.self, f), g.update(!0), k.current)
                }, function (r) {
                    return k.transition !== U ? C : (k.transition = null, a = t.$broadcast("$stateChangeError", e.self, n, l.self, f, r), a.defaultPrevented || g.update(), i.reject(r))
                });
                return U
            }, k.is = function (t, e, r) {
                r = V({relative: k.$current}, r || {});
                var i = h(t, r.relative);
                return N(i) ? k.$current !== i ? !1 : e ? l(i.params.$$values(e), d) : !0 : n
            }, k.includes = function (t, e, r) {
                if (r = V({relative: k.$current}, r || {}), F(t) && v(t)) {
                    if (!y(t))return !1;
                    t = k.$current.name
                }
                var i = h(t, r.relative);
                return N(i) ? N(k.$current.includes[i.name]) ? e ? l(i.params.$$values(e), d, a(e)) : !0 : !1 : n
            }, k.href = function (t, e, r) {
                r = V({lossy: !0, inherit: !0, absolute: !1, relative: k.$current}, r || {});
                var i = h(t, r.relative);
                if (!N(i))return null;
                r.inherit && (e = u(d, e || {}, k.$current, i));
                var o = i && r.lossy ? i.navigable : i;
                return o && o.url !== n && null !== o.url ? g.href(o.url, c(i.params.$$keys().concat("#"), e || {}), {absolute: r.absolute}) : null
            }, k.get = function (t, e) {
                if (0 === arguments.length)return p(a(S), function (t) {
                    return S[t].self
                });
                var n = h(t, e || k.$current);
                return n && n.self ? n.self : null
            }, k
        }

        function x(t, e, n, r, i, o) {
            function a(t, e, n) {
                function r(e) {
                    return "search" != t.params[e].location
                }

                var i = t.params.$$keys().filter(r), o = f.apply({}, [t.params].concat(i)), a = new z.ParamSet(o);
                return a.$$equals(e, n)
            }

            return !o.reload && t === n && (i === n.locals || t.self.reloadOnSearch === !1 && a(n, r, e)) ? !0 : void 0
        }

        var _, k, S = {}, C = {}, D = "abstract", T = {
            parent: function (t) {
                if (N(t.parent) && t.parent)return h(t.parent);
                var e = /^(.+)\.[^.]+$/.exec(t.name);
                return e ? h(e[1]) : _
            }, data: function (t) {
                return t.parent && t.parent.data && (t.data = t.self.data = r(t.parent.data, t.data)), t.data
            }, url: function (t) {
                var e = t.url, n = {params: t.params || {}};
                if (F(e))return "^" == e.charAt(0) ? i.compile(e.substring(1), n) : (t.parent.navigable || _).url.concat(e, n);
                if (!e || i.isMatcher(e))return e;
                throw new Error("Invalid url '" + e + "' in state '" + t + "'")
            }, navigable: function (t) {
                return t.url ? t : t.parent ? t.parent.navigable : null
            }, ownParams: function (t) {
                var e = t.url && t.url.params || new z.ParamSet;
                return q(t.params || {}, function (t, n) {
                    e[n] || (e[n] = new z.Param(n, null, t, "config"))
                }), e
            }, params: function (t) {
                var e = f(t.ownParams, t.ownParams.$$keys());
                return t.parent && t.parent.params ? V(t.parent.params.$$new(), e) : new z.ParamSet
            }, views: function (t) {
                var e = {};
                return q(N(t.views) ? t.views : {"": t}, function (n, r) {
                    r.indexOf("@") < 0 && (r += "@" + t.parent.name), e[r] = n
                }), e
            }, path: function (t) {
                return t.parent ? t.parent.path.concat(t) : []
            }, includes: function (t) {
                var e = t.parent ? V({}, t.parent.includes) : {};
                return e[t.name] = !0, e
            }, $delegates: {}
        };
        _ = m({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), _.navigable = null, this.decorator = $, this.state = w, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function x() {
        function t(t, e) {
            return {
                load: function (t, n) {
                    var r, i = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return n = V(i, n), n.view && (r = e.fromConfig(n.view, n.params, n.locals)), r
                }
            }
        }

        this.$get = t, t.$inject = ["$rootScope", "$templateFactory"]
    }

    function _() {
        var t = !1;
        this.useAnchorScroll = function () {
            t = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (e, n) {
            return t ? e : function (t) {
                return n(function () {
                    t[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function k(t, n, r, i) {
        function o() {
            return n.has ? function (t) {
                return n.has(t) ? n.get(t) : null
            } : function (t) {
                try {
                    return n.get(t)
                } catch (e) {
                    return null
                }
            }
        }

        function a(t, n) {
            function r(t) {
                return 1 === Y && G >= 4 ? !!l.enabled(t) : 1 === Y && G >= 2 ? !!l.enabled() : !!u
            }

            var i = {
                enter: function (t, e, n) {
                    e.after(t), n()
                }, leave: function (t, e) {
                    t.remove(), e()
                }
            };
            if (t.noanimation)return i;
            if (l)return {
                enter: function (t, n, o) {
                    r(t) ? e.version.minor > 2 ? l.enter(t, null, n).then(o) : l.enter(t, null, n, o) : i.enter(t, n, o)
                }, leave: function (t, n) {
                    r(t) ? e.version.minor > 2 ? l.leave(t).then(n) : l.leave(t, n) : i.leave(t, n)
                }
            };
            if (u) {
                var o = u && u(n, t);
                return {
                    enter: function (t, e, n) {
                        o.enter(t, null, e), n()
                    }, leave: function (t, e) {
                        o.leave(t), e()
                    }
                }
            }
            return i
        }

        var s = o(), u = s("$animator"), l = s("$animate"), c = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (n, o, s) {
                return function (n, o, u) {
                    function l() {
                        function t() {
                            e && e.remove(), n && n.$destroy()
                        }

                        var e = f, n = d;
                        n && (n._willBeDestroyed = !0), h ? (v.leave(h, function () {
                            t(), f = null
                        }), f = h) : (t(), f = null), h = null, d = null
                    }

                    function c(a) {
                        var c, f = C(n, u, o, i), y = f && t.$current && t.$current.locals[f];
                        if ((a || y !== p) && !n._willBeDestroyed) {
                            c = n.$new(), p = t.$current.locals[f], c.$emit("$viewContentLoading", f);
                            var $ = s(c, function (t) {
                                v.enter(t, o, function () {
                                    d && d.$emit("$viewContentAnimationEnded"), (e.isDefined(m) && !m || n.$eval(m)) && r(t)
                                }), l()
                            });
                            h = $, d = c, d.$emit("$viewContentLoaded", f), d.$eval(g)
                        }
                    }

                    var f, h, d, p, g = u.onload || "", m = u.autoscroll, v = a(u, n);
                    n.$on("$stateChangeSuccess", function () {
                        c(!1)
                    }), c(!0)
                }
            }
        };
        return c
    }

    function S(t, e, n, r) {
        return {
            restrict: "ECA", priority: -400, compile: function (i) {
                var o = i.html();
                return function (i, a, s) {
                    var u = n.$current, l = C(i, s, a, r), c = u && u.locals[l];
                    if (c) {
                        a.data("$uiView", {name: l, state: c.$$state}), a.html(c.$template ? c.$template : o);
                        var f = t(a.contents());
                        if (c.$$controller) {
                            c.$scope = i, c.$element = a;
                            var h = e(c.$$controller, c);
                            c.$$controllerAs && (i[c.$$controllerAs] = h), a.data("$ngControllerController", h), a.children().data("$ngControllerController", h)
                        }
                        f(i)
                    }
                }
            }
        }
    }

    function C(t, e, n, r) {
        var i = r(e.uiView || e.name || "")(t), o = n.inheritedData("$uiView");
        return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
    }

    function D(t, e) {
        var n, r = t.match(/^\s*({[^}]*})\s*$/);
        if (r && (t = e + "(" + r[1] + ")"), n = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length)throw new Error("Invalid state ref '" + t + "'");
        return {state: n[1], paramExpr: n[3] || null}
    }

    function T(t) {
        var e = t.parent().inheritedData("$uiView");
        return e && e.state && e.state.name ? e.state : void 0
    }

    function A(t) {
        var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")), n = "FORM" === t[0].nodeName;
        return {
            attr: n ? "action" : e ? "xlink:href" : "href",
            isAnchor: "A" === t.prop("tagName").toUpperCase(),
            clickable: !n
        }
    }

    function E(t, e, n, r, i) {
        return function (o) {
            var a = o.which || o.button, s = i();
            if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
                var u = n(function () {
                    e.go(s.state, s.params, s.options)
                });
                o.preventDefault();
                var l = r.isAnchor && !s.href ? 1 : 0;
                o.preventDefault = function () {
                    l-- <= 0 && n.cancel(u)
                }
            }
        }
    }

    function M(t, e) {
        return {relative: T(t) || e.$current, inherit: !0}
    }

    function O(t, n) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (r, i, o, a) {
                var s = D(o.uiSref, t.current.name), u = {
                    state: s.state,
                    href: null,
                    params: null
                }, l = A(i), c = a[1] || a[0];
                u.options = V(M(i, t), o.uiSrefOpts ? r.$eval(o.uiSrefOpts) : {});
                var f = function (n) {
                    n && (u.params = e.copy(n)), u.href = t.href(s.state, u.params, u.options), c && c.$$addStateInfo(s.state, u.params), null !== u.href && o.$set(l.attr, u.href)
                };
                s.paramExpr && (r.$watch(s.paramExpr, function (t) {
                    t !== u.params && f(t)
                }, !0), u.params = e.copy(r.$eval(s.paramExpr))), f(), l.clickable && i.bind("click", E(i, t, n, l, function () {
                    return u
                }))
            }
        }
    }

    function P(t, e) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (n, r, i, o) {
                function a(e) {
                    f.state = e[0], f.params = e[1], f.options = e[2], f.href = t.href(f.state, f.params, f.options), u && u.$$addStateInfo(f.state, f.params), f.href && i.$set(s.attr, f.href)
                }

                var s = A(r), u = o[1] || o[0], l = [i.uiState, i.uiStateParams || null, i.uiStateOpts || null], c = "[" + l.map(function (t) {
                        return t || "null"
                    }).join(", ") + "]", f = {state: null, params: null, options: null, href: null};
                n.$watch(c, a, !0), a(n.$eval(c)), s.clickable && r.bind("click", E(r, t, e, s, function () {
                    return f
                }))
            }
        }
    }

    function j(t, e, n) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (e, r, i, o) {
                function a(e, n, i) {
                    var o = t.get(e, T(r)), a = s(e, n);
                    g.push({state: o || {name: e}, params: n, hash: a}), m[a] = i
                }

                function s(t, n) {
                    if (!F(t))throw new Error("state should be a string");
                    return H(n) ? t + B(n) : (n = e.$eval(n), H(n) ? t + B(n) : t)
                }

                function u() {
                    for (var t = 0; t < g.length; t++)f(g[t].state, g[t].params) ? l(r, m[g[t].hash]) : c(r, m[g[t].hash]), h(g[t].state, g[t].params) ? l(r, d) : c(r, d)
                }

                function l(t, e) {
                    o(function () {
                        t.addClass(e)
                    })
                }

                function c(t, e) {
                    t.removeClass(e)
                }

                function f(e, n) {
                    return t.includes(e.name, n)
                }

                function h(e, n) {
                    return t.is(e.name, n)
                }

                var d, p, g = [], m = {};
                d = n(i.uiSrefActiveEq || "", !1)(e);
                try {
                    p = e.$eval(i.uiSrefActive)
                } catch (v) {
                }
                p = p || n(i.uiSrefActive || "", !1)(e), H(p) && q(p, function (n, r) {
                    if (F(n)) {
                        var i = D(n, t.current.name);
                        a(i.state, e.$eval(i.paramExpr), r)
                    }
                }), this.$$addStateInfo = function (t, e) {
                    H(p) && g.length > 0 || (a(t, e, p), u())
                }, e.$on("$stateChangeSuccess", u), u()
            }]
        }
    }

    function I(t) {
        var e = function (e, n) {
            return t.is(e, n)
        };
        return e.$stateful = !0, e
    }

    function R(t) {
        var e = function (e, n, r) {
            return t.includes(e, n, r)
        };
        return e.$stateful = !0, e
    }

    var N = e.isDefined, U = e.isFunction, F = e.isString, H = e.isObject, L = e.isArray, q = e.forEach, V = e.extend, W = e.copy, B = e.toJson;
    e.module("ui.router.util", ["ng"]), e.module("ui.router.router", ["ui.router.util"]), e.module("ui.router.state", ["ui.router.router", "ui.router.util"]), e.module("ui.router", ["ui.router.state"]), e.module("ui.router.compat", ["ui.router"]), g.$inject = ["$q", "$injector"], e.module("ui.router.util").service("$resolve", g), m.$inject = ["$http", "$templateCache", "$injector"], e.module("ui.router.util").service("$templateFactory", m);
    var z;
    v.prototype.concat = function (t, e) {
        var n = {caseInsensitive: z.caseInsensitive(), strict: z.strictMode(), squash: z.defaultSquashPolicy()};
        return new v(this.sourcePath + t + this.sourceSearch, V(n, e), this)
    }, v.prototype.toString = function () {
        return this.source
    }, v.prototype.exec = function (t, e) {
        function n(t) {
            function e(t) {
                return t.split("").reverse().join("")
            }

            function n(t) {
                return t.replace(/\\-/g, "-")
            }

            var r = e(t).split(/-(?!\\)/), i = p(r, e);
            return p(i, n).reverse()
        }

        var r = this.regexp.exec(t);
        if (!r)return null;
        e = e || {};
        var i, o, a, s = this.parameters(), u = s.length, l = this.segments.length - 1, c = {};
        if (l !== r.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        var f, h;
        for (i = 0; l > i; i++) {
            for (a = s[i], f = this.params[a], h = r[i + 1], o = 0; o < f.replace.length; o++)f.replace[o].from === h && (h = f.replace[o].to);
            h && f.array === !0 && (h = n(h)), N(h) && (h = f.type.decode(h)), c[a] = f.value(h)
        }
        for (; u > i; i++) {
            for (a = s[i], c[a] = this.params[a].value(e[a]), f = this.params[a], h = e[a], o = 0; o < f.replace.length; o++)f.replace[o].from === h && (h = f.replace[o].to);
            N(h) && (h = f.type.decode(h)), c[a] = f.value(h)
        }
        return c
    }, v.prototype.parameters = function (t) {
        return N(t) ? this.params[t] || null : this.$$paramNames
    }, v.prototype.validates = function (t) {
        return this.params.$$validates(t)
    }, v.prototype.format = function (t) {
        function e(t) {
            return encodeURIComponent(t).replace(/-/g, function (t) {
                return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        t = t || {};
        var n = this.segments, r = this.parameters(), i = this.params;
        if (!this.validates(t))return null;
        var o, a = !1, s = n.length - 1, u = r.length, l = n[0];
        for (o = 0; u > o; o++) {
            var c = s > o, f = r[o], h = i[f], d = h.value(t[f]), g = h.isOptional && h.type.equals(h.value(), d), m = g ? h.squash : !1, v = h.type.encode(d);
            if (c) {
                var y = n[o + 1], $ = o + 1 === s;
                if (m === !1)null != v && (l += L(v) ? p(v, e).join("-") : encodeURIComponent(v)), l += y; else if (m === !0) {
                    var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += y.match(w)[1]
                } else F(m) && (l += m + y);
                $ && h.squash === !0 && "/" === l.slice(-1) && (l = l.slice(0, -1))
            } else {
                if (null == v || g && m !== !1)continue;
                if (L(v) || (v = [v]), 0 === v.length)continue;
                v = p(v, encodeURIComponent).join("&" + f + "="), l += (a ? "&" : "?") + (f + "=" + v), a = !0
            }
        }
        return l
    }, y.prototype.is = function (t, e) {
        return !0
    }, y.prototype.encode = function (t, e) {
        return t
    }, y.prototype.decode = function (t, e) {
        return t
    }, y.prototype.equals = function (t, e) {
        return t == e
    }, y.prototype.$subPattern = function () {
        var t = this.pattern.toString();
        return t.substr(1, t.length - 2)
    }, y.prototype.pattern = /.*/, y.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, y.prototype.$normalize = function (t) {
        return this.is(t) ? t : this.decode(t)
    }, y.prototype.$asArray = function (t, e) {
        function r(t, e) {
            function r(t, e) {
                return function () {
                    return t[e].apply(t, arguments)
                }
            }

            function i(t) {
                return L(t) ? t : N(t) ? [t] : []
            }

            function o(t) {
                switch (t.length) {
                    case 0:
                        return n;
                    case 1:
                        return "auto" === e ? t[0] : t;
                    default:
                        return t
                }
            }

            function a(t) {
                return !t
            }

            function s(t, e) {
                return function (n) {
                    if (L(n) && 0 === n.length)return n;
                    n = i(n);
                    var r = p(n, t);
                    return e === !0 ? 0 === d(r, a).length : o(r)
                }
            }

            function u(t) {
                return function (e, n) {
                    var r = i(e), o = i(n);
                    if (r.length !== o.length)return !1;
                    for (var a = 0; a < r.length; a++)if (!t(r[a], o[a]))return !1;
                    return !0
                }
            }

            this.encode = s(r(t, "encode")), this.decode = s(r(t, "decode")), this.is = s(r(t, "is"), !0), this.equals = u(r(t, "equals")), this.pattern = t.pattern, this.$normalize = s(r(t, "$normalize")), this.name = t.name, this.$arrayMode = e
        }

        if (!t)return this;
        if ("auto" === t && !e)throw new Error("'auto' array mode is for query parameters only");
        return new r(this, t)
    }, e.module("ui.router.util").provider("$urlMatcherFactory", $), e.module("ui.router.util").run(["$urlMatcherFactory", function (t) {
    }]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.router").provider("$urlRouter", w), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], e.module("ui.router.state").factory("$stateParams", function () {
        return {}
    }).provider("$state", b), x.$inject = [], e.module("ui.router.state").provider("$view", x), e.module("ui.router.state").provider("$uiViewScroll", _);
    var Y = e.version.major, G = e.version.minor;
    k.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], S.$inject = ["$compile", "$controller", "$state", "$interpolate"], e.module("ui.router.state").directive("uiView", k), e.module("ui.router.state").directive("uiView", S), O.$inject = ["$state", "$timeout"], P.$inject = ["$state", "$timeout"], j.$inject = ["$state", "$stateParams", "$interpolate"], e.module("ui.router.state").directive("uiSref", O).directive("uiSrefActive", j).directive("uiSrefActiveEq", j).directive("uiState", P), I.$inject = ["$state"], R.$inject = ["$state"], e.module("ui.router.state").filter("isState", I).filter("includedByState", R)
}(window, window.angular), function () {
    function t(t, e) {
        window.XMLHttpRequest.prototype[t] = e(window.XMLHttpRequest.prototype[t])
    }

    function e(t, e, n) {
        try {
            Object.defineProperty(t, e, {get: n})
        } catch (r) {
        }
    }

    if (window.FileAPI || (window.FileAPI = {}), !window.XMLHttpRequest)throw"AJAX is not supported. XMLHttpRequest is not defined.";
    if (FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad, FileAPI.shouldLoad) {
        var n = function (t) {
            if (!t.__listeners) {
                t.upload || (t.upload = {}), t.__listeners = [];
                var e = t.upload.addEventListener;
                t.upload.addEventListener = function (n, r) {
                    t.__listeners[n] = r, e && e.apply(this, arguments)
                }
            }
        };
        t("open", function (t) {
            return function (e, r, i) {
                n(this), this.__url = r;
                try {
                    t.apply(this, [e, r, i])
                } catch (o) {
                    o.message.indexOf("Access is denied") > -1 && (this.__origError = o, t.apply(this, [e, "_fix_for_ie_crossdomain__", i]))
                }
            }
        }), t("getResponseHeader", function (t) {
            return function (e) {
                return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(e) : null == t ? null : t.apply(this, [e])
            }
        }), t("getAllResponseHeaders", function (t) {
            return function () {
                return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == t ? null : t.apply(this)
            }
        }), t("abort", function (t) {
            return function () {
                return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == t ? null : t.apply(this)
            }
        }), t("setRequestHeader", function (t) {
            return function (e, r) {
                if ("__setXHR_" === e) {
                    n(this);
                    var i = r(this);
                    i instanceof Function && i(this)
                } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[e] = r, t.apply(this, arguments)
            }
        }), t("send", function (t) {
            return function () {
                var n = this;
                if (arguments[0] && arguments[0].__isFileAPIShim) {
                    var r = arguments[0], i = {
                        url: n.__url, jsonp: !1, cache: !0, complete: function (t, r) {
                            t && angular.isString(t) && -1 !== t.indexOf("#2174") && (t = null), n.__completed = !0, !t && n.__listeners.load && n.__listeners.load({
                                type: "load",
                                loaded: n.__loaded,
                                total: n.__total,
                                target: n,
                                lengthComputable: !0
                            }), !t && n.__listeners.loadend && n.__listeners.loadend({
                                type: "loadend",
                                loaded: n.__loaded,
                                total: n.__total,
                                target: n,
                                lengthComputable: !0
                            }), "abort" === t && n.__listeners.abort && n.__listeners.abort({
                                type: "abort",
                                loaded: n.__loaded,
                                total: n.__total,
                                target: n,
                                lengthComputable: !0
                            }), void 0 !== r.status && e(n, "status", function () {
                                return 0 === r.status && t && "abort" !== t ? 500 : r.status
                            }), void 0 !== r.statusText && e(n, "statusText", function () {
                                return r.statusText
                            }), e(n, "readyState", function () {
                                return 4
                            }), void 0 !== r.response && e(n, "response", function () {
                                return r.response
                            });
                            var i = r.responseText || (t && 0 === r.status && "abort" !== t ? t : void 0);
                            e(n, "responseText", function () {
                                return i
                            }), e(n, "response", function () {
                                return i
                            }), t && e(n, "err", function () {
                                return t
                            }), n.__fileApiXHR = r, n.onreadystatechange && n.onreadystatechange(), n.onload && n.onload()
                        }, progress: function (t) {
                            if (t.target = n, n.__listeners.progress && n.__listeners.progress(t), n.__total = t.total, n.__loaded = t.loaded, t.total === t.loaded) {
                                var e = this;
                                setTimeout(function () {
                                    n.__completed || (n.getAllResponseHeaders = function () {
                                    }, e.complete(null, {status: 204, statusText: "No Content"}))
                                }, FileAPI.noContentTimeout || 1e4)
                            }
                        }, headers: n.__requestHeaders
                    };
                    i.data = {}, i.files = {};
                    for (var o = 0; o < r.data.length; o++) {
                        var a = r.data[o];
                        null != a.val && null != a.val.name && null != a.val.size && null != a.val.type ? i.files[a.key] = a.val : i.data[a.key] = a.val
                    }
                    setTimeout(function () {
                        if (!FileAPI.hasFlash)throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                        n.__fileApiXHR = FileAPI.upload(i)
                    }, 1)
                } else {
                    if (this.__origError)throw this.__origError;
                    t.apply(n, arguments)
                }
            }
        }), window.XMLHttpRequest.__isFileAPIShim = !0, window.FormData = FormData = function () {
            return {
                append: function (t, e, n) {
                    e.__isFileAPIBlobShim && (e = e.data[0]), this.data.push({key: t, val: e, name: n})
                }, data: [], __isFileAPIShim: !0
            }
        }, window.Blob = Blob = function (t) {
            return {data: t, __isFileAPIBlobShim: !0}
        }
    }
}(), function () {
    function t(t) {
        return "input" === t[0].tagName.toLowerCase() && t.attr("type") && "file" === t.attr("type").toLowerCase()
    }

    function e() {
        try {
            var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (t)return !0
        } catch (e) {
            if (void 0 !== navigator.mimeTypes["application/x-shockwave-flash"])return !0
        }
        return !1
    }

    function n(t) {
        var e = 0, n = 0;
        if (window.jQuery)return jQuery(t).offset();
        if (t.offsetParent)do e += t.offsetLeft - t.scrollLeft, n += t.offsetTop - t.scrollTop, t = t.offsetParent; while (t);
        return {left: e, top: n}
    }

    if (FileAPI.shouldLoad) {
        if (FileAPI.hasFlash = e(), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
            var r, i, o, a, s, u = document.createElement("script"), l = document.getElementsByTagName("script");
            if (window.FileAPI.jsUrl)r = window.FileAPI.jsUrl; else if (window.FileAPI.jsPath)i = window.FileAPI.jsPath; else for (o = 0; o < l.length; o++)if (s = l[o].src, a = s.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/), a > -1) {
                i = s.substring(0, a + 1);
                break
            }
            null == FileAPI.staticPath && (FileAPI.staticPath = i), u.setAttribute("src", r || i + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(u)
        }
        FileAPI.ngfFixIE = function (r, i, o) {
            if (!e())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
            var a = function () {
                var e = i.parent();
                r.attr("disabled") ? e && e.removeClass("js-fileapi-wrapper") : (i.attr("__ngf_flash_") || (i.unbind("change"), i.unbind("click"), i.bind("change", function (t) {
                    s.apply(this, [t]), o.apply(this, [t])
                }), i.attr("__ngf_flash_", "true")), e.addClass("js-fileapi-wrapper"), t(r) || (e.css("position", "absolute").css("top", n(r[0]).top + "px").css("left", n(r[0]).left + "px").css("width", r[0].offsetWidth + "px").css("height", r[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", r.css("display")).css("overflow", "hidden").css("z-index", "900000").css("visibility", "visible"), i.css("width", r[0].offsetWidth + "px").css("height", r[0].offsetHeight + "px").css("position", "absolute").css("top", "0px").css("left", "0px")))
            };
            r.bind("mouseenter", a);
            var s = function (t) {
                for (var e = FileAPI.getFiles(t), n = 0; n < e.length; n++)void 0 === e[n].size && (e[n].size = 0), void 0 === e[n].name && (e[n].name = "file"), void 0 === e[n].type && (e[n].type = "undefined");
                t.target || (t.target = {}), t.target.files = e, t.target.files !== e && (t.__files_ = e), (t.__files_ || t.target.files).item = function (e) {
                    return (t.__files_ || t.target.files)[e] || null
                }
            }
        }, FileAPI.disableFileInput = function (t, e) {
            e ? t.removeClass("js-fileapi-wrapper") : t.addClass("js-fileapi-wrapper")
        }
    }
}(), window.FileReader || (window.FileReader = function () {
    var t = this, e = !1;
    this.listeners = {}, this.addEventListener = function (e, n) {
        t.listeners[e] = t.listeners[e] || [], t.listeners[e].push(n)
    }, this.removeEventListener = function (e, n) {
        t.listeners[e] && t.listeners[e].splice(t.listeners[e].indexOf(n), 1)
    }, this.dispatchEvent = function (e) {
        var n = t.listeners[e.type];
        if (n)for (var r = 0; r < n.length; r++)n[r].call(t, e)
    }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
    var n = function (e, n) {
        var r = {type: e, target: t, loaded: n.loaded, total: n.total, error: n.error};
        return null != n.result && (r.target.result = n.result), r
    }, r = function (r) {
        e || (e = !0, t.onloadstart && t.onloadstart(n("loadstart", r)));
        var i;
        "load" === r.type ? (t.onloadend && t.onloadend(n("loadend", r)), i = n("load", r), t.onload && t.onload(i), t.dispatchEvent(i)) : "progress" === r.type ? (i = n("progress", r), t.onprogress && t.onprogress(i), t.dispatchEvent(i)) : (i = n("error", r), t.onerror && t.onerror(i), t.dispatchEvent(i))
    };
    this.readAsDataURL = function (t) {
        FileAPI.readAsDataURL(t, r)
    }, this.readAsText = function (t) {
        FileAPI.readAsText(t, r)
    }
}), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (t) {
    return function (e, n) {
        if ("__setXHR_" === e) {
            var r = n(this);
            r instanceof Function && r(this)
        } else t.apply(this, arguments)
    }
}(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
if (ngFileUpload.version = "12.0.4", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function (t, e, n) {

        function r(r) {
            function i(t) {
                l.notify && l.notify(t), c.progressFunc && n(function () {
                    c.progressFunc(t)
                })
            }

            function s(t) {
                return null != r._start && a ? {
                    loaded: t.loaded + r._start,
                    total: r._file && r._file.size || t.total,
                    type: t.type,
                    config: r,
                    lengthComputable: !0,
                    target: t.target
                } : t
            }

            function u() {
                t(r).then(function (t) {
                    a && r._chunkSize && !r._finished && r._file ? (i({
                        loaded: r._end,
                        total: r._file && r._file.size,
                        config: r,
                        type: "progress"
                    }), o.upload(r, !0)) : (r._finished && delete r._finished, l.resolve(t))
                }, function (t) {
                    l.reject(t)
                }, function (t) {
                    l.notify(t)
                })
            }

            r.method = r.method || "POST", r.headers = r.headers || {};
            var l = r._deferred = r._deferred || e.defer(), c = l.promise;
            return r.disableProgress || (r.headers.__setXHR_ = function () {
                return function (t) {
                    t && t.upload && t.upload.addEventListener && (r.__XHR = t, r.xhrFn && r.xhrFn(t), t.upload.addEventListener("progress", function (t) {
                        t.config = r, i(s(t))
                    }, !1), t.upload.addEventListener("load", function (t) {
                        t.lengthComputable && (t.config = r, i(s(t)))
                    }, !1))
                }
            }), a ? r._chunkSize && r._end && !r._finished ? (r._start = r._end, r._end += r._chunkSize, u()) : r.resumeSizeUrl ? t.get(r.resumeSizeUrl).then(function (t) {
                r.resumeSizeResponseReader ? r._start = r.resumeSizeResponseReader(t.data) : r._start = parseInt((null == t.data.size ? t.data : t.data.size).toString()), r._chunkSize && (r._end = r._start + r._chunkSize), u()
            }, function (t) {
                throw t
            }) : r.resumeSize ? r.resumeSize().then(function (t) {
                r._start = t, u()
            }, function (t) {
                throw t
            }) : (r._chunkSize && (r._start = 0, r._end = r._start + r._chunkSize), u()) : u(), c.success = function (t) {
                return c.then(function (e) {
                    t(e.data, e.status, e.headers, r)
                }), c
            }, c.error = function (t) {
                return c.then(null, function (e) {
                    t(e.data, e.status, e.headers, r)
                }), c
            }, c.progress = function (t) {
                return c.progressFunc = t, c.then(null, null, function (e) {
                    t(e)
                }), c
            }, c.abort = c.pause = function () {
                return r.__XHR && n(function () {
                    r.__XHR.abort()
                }), c
            }, c.xhr = function (t) {
                return r.xhrFn = function (e) {
                    return function () {
                        e && e.apply(c, arguments), t.apply(c, arguments)
                    }
                }(r.xhrFn), c
            }, o.promisesCount++, c["finally"](function () {
                o.promisesCount--
            }), c
        }

        function i(t) {
            var e = {};
            for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        var o = this;
        o.promisesCount = 0, this.isResumeSupported = function () {
            return window.Blob && window.Blob.prototype.slice
        };
        var a = this.isResumeSupported();
        this.isUploadInProgress = function () {
            return o.promisesCount > 0
        }, this.rename = function (t, e) {
            return t.ngfName = e, t
        }, this.jsonBlob = function (t) {
            null == t || angular.isString(t) || (t = JSON.stringify(t));
            var e = new window.Blob([t], {type: "application/json"});
            return e._ngfBlob = !0, e
        }, this.json = function (t) {
            return angular.toJson(t);
        }, this.isFile = function (t) {
            return null != t && (t instanceof window.Blob || t.flashId && t.name && t.size)
        }, this.upload = function (t, e) {
            function n(e, n) {
                if (e._ngfBlob)return e;
                if (t._file = t._file || e, null != t._start && a) {
                    t._end && t._end >= e.size && (t._finished = !0, t._end = e.size);
                    var r = e.slice(t._start, t._end || e.size);
                    return r.name = e.name, r.ngfName = e.ngfName, t._chunkSize && (n.append("_chunkSize", t._chunkSize), n.append("_currentChunkSize", t._end - t._start), n.append("_chunkNumber", Math.floor(t._start / t._chunkSize)), n.append("_totalSize", t._file.size)), r
                }
                return e
            }

            function s(e, r, i) {
                if (void 0 !== r)if (angular.isDate(r) && (r = r.toISOString()), angular.isString(r))e.append(i, r); else if (o.isFile(r)) {
                    var a = n(r, e), u = i.split(",");
                    u[1] && (a.ngfName = u[1].replace(/^\s+|\s+$/g, ""), i = u[0]), t._fileKey = t._fileKey || i, e.append(i, a, a.ngfName || a.name)
                } else if (angular.isObject(r)) {
                    if (r.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + i;
                    r.$$ngfCircularDetection = !0;
                    try {
                        for (var l in r)if (r.hasOwnProperty(l) && "$$ngfCircularDetection" !== l) {
                            var c = null == t.objectKey ? "[i]" : t.objectKey;
                            r.length && parseInt(l) > -1 && (c = null == t.arrayKey ? c : t.arrayKey), s(e, r[l], i + c.replace(/[ik]/g, l))
                        }
                    } finally {
                        delete r.$$ngfCircularDetection
                    }
                } else e.append(i, r)
            }

            function u() {
                t._chunkSize = o.translateScalars(t.resumeChunkSize), t._chunkSize = t._chunkSize ? parseInt(t._chunkSize.toString()) : null, t.headers = t.headers || {}, t.headers["Content-Type"] = void 0, t.transformRequest = t.transformRequest ? angular.isArray(t.transformRequest) ? t.transformRequest : [t.transformRequest] : [], t.transformRequest.push(function (e) {
                    var n, r = new window.FormData;
                    e = e || t.fields || {}, t.file && (e.file = t.file);
                    for (n in e)if (e.hasOwnProperty(n)) {
                        var i = e[n];
                        t.formDataAppender ? t.formDataAppender(r, n, i) : s(r, i, n)
                    }
                    return r
                })
            }

            return e || (t = i(t)), t._isDigested || (t._isDigested = !0, u()), r(t)
        }, this.http = function (e) {
            return e = i(e), e.transformRequest = e.transformRequest || function (e) {
                    return window.ArrayBuffer && e instanceof window.ArrayBuffer || e instanceof window.Blob ? e : t.defaults.transformRequest[0].apply(this, arguments)
                }, e._chunkSize = o.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, r(e)
        }, this.translateScalars = function (t) {
            if (angular.isString(t)) {
                if (t.search(/kb/i) === t.length - 2)return parseFloat(1024 * t.substring(0, t.length - 2));
                if (t.search(/mb/i) === t.length - 2)return parseFloat(1048576 * t.substring(0, t.length - 2));
                if (t.search(/gb/i) === t.length - 2)return parseFloat(1073741824 * t.substring(0, t.length - 2));
                if (t.search(/b/i) === t.length - 1)return parseFloat(t.substring(0, t.length - 1));
                if (t.search(/s/i) === t.length - 1)return parseFloat(t.substring(0, t.length - 1));
                if (t.search(/m/i) === t.length - 1)return parseFloat(60 * t.substring(0, t.length - 1));
                if (t.search(/h/i) === t.length - 1)return parseFloat(3600 * t.substring(0, t.length - 1))
            }
            return t
        }, this.urlToBlob = function (n) {
            var r = e.defer();
            return t({url: n, method: "get", responseType: "arraybuffer"}).then(function (t) {
                var e = new Uint8Array(t.data), n = t.headers("content-type") || "image/WebP", i = new window.Blob([e], {type: n});
                r.resolve(i)
            }, function (t) {
                r.reject(t)
            }), r.promise
        }, this.setDefaults = function (t) {
            this.defaults = t || {}
        }, this.defaults = {}, this.version = ngFileUpload.version
    }]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function (t, e, n, r, i) {
        function o(t, e, n) {
            var i = [u.emptyPromise()];
            return angular.forEach(t, function (r, o) {
                0 === r.type.indexOf("image/jpeg") && u.attrGetter("ngfFixOrientation", e, n, {$file: r}) && i.push(u.happyPromise(u.applyExifRotation(r), r).then(function (e) {
                    t.splice(o, 1, e)
                }))
            }), r.all(i)
        }

        function a(t, e, n) {
            var i = u.attrGetter("ngfResize", e, n);
            if (!i || !u.isResizeSupported() || !t.length)return u.emptyPromise();
            if (!(i instanceof Function))return s(i, t, e, n);
            var o = r.defer();
            i(t).then(function (r) {
                s(r, t, e, n).then(function (t) {
                    o.resolve(t)
                }, function (t) {
                    o.reject(t)
                })
            }, function (t) {
                o.reject(t)
            })
        }

        function s(t, e, n, i) {
            function o(r, o) {
                if (0 === r.type.indexOf("image")) {
                    if (t.pattern && !u.validatePattern(r, t.pattern))return;
                    var s = u.resize(r, t.width, t.height, t.quality, t.type, t.ratio, t.centerCrop, function (t, e) {
                        return u.attrGetter("ngfResizeIf", n, i, {$width: t, $height: e, $file: r})
                    }, t.restoreExif !== !1);
                    a.push(s), s.then(function (t) {
                        e.splice(o, 1, t)
                    }, function (t) {
                        r.$error = "resize", r.$errorParam = (t ? (t.message ? t.message : t) + ": " : "") + (r && r.name)
                    })
                }
            }

            for (var a = [u.emptyPromise()], s = 0; s < e.length; s++)o(e[s], s);
            return r.all(a)
        }

        var u = i;
        return u.getAttrWithDefaults = function (t, e) {
            if (null != t[e])return t[e];
            var n = u.defaults[e];
            return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
        }, u.attrGetter = function (e, n, r, i) {
            var o = this.getAttrWithDefaults(n, e);
            if (!r)return o;
            try {
                return i ? t(o)(r, i) : t(o)(r)
            } catch (a) {
                if (e.search(/min|max|pattern/i))return o;
                throw a
            }
        }, u.shouldUpdateOn = function (t, e, n) {
            var r = u.attrGetter("ngModelOptions", e, n);
            return r && r.updateOn ? r.updateOn.split(" ").indexOf(t) > -1 : !0
        }, u.emptyPromise = function () {
            var t = r.defer(), n = arguments;
            return e(function () {
                t.resolve.apply(t, n)
            }), t.promise
        }, u.rejectPromise = function () {
            var t = r.defer(), n = arguments;
            return e(function () {
                t.reject.apply(t, n)
            }), t.promise
        }, u.happyPromise = function (t, n) {
            var i = r.defer();
            return t.then(function (t) {
                i.resolve(t)
            }, function (t) {
                e(function () {
                    throw t
                }), i.resolve(n)
            }), i.promise
        }, u.updateModel = function (n, r, i, s, l, c, f) {
            function h(o, a, l, f, h) {
                r.$$ngfPrevValidFiles = o, r.$$ngfPrevInvalidFiles = a;
                var d = o && o.length ? o[0] : null, p = a && a.length ? a[0] : null;
                n && (u.applyModelValidation(n, o), n.$setViewValue(h ? d : o)), s && t(s)(i, {
                    $files: o,
                    $file: d,
                    $newFiles: l,
                    $duplicateFiles: f,
                    $invalidFiles: a,
                    $invalidFile: p,
                    $event: c
                });
                var g = u.attrGetter("ngfModelInvalid", r);
                g && e(function () {
                    t(g).assign(i, h ? p : a)
                }), e(function () {
                })
            }

            function d() {
                function t(t, e) {
                    return t.name === e.name && (t.$ngfOrigSize || t.size) === (e.$ngfOrigSize || e.size) && t.type === e.type
                }

                function e(e) {
                    var n;
                    for (n = 0; n < y.length; n++)if (t(e, y[n]))return !0;
                    for (n = 0; n < $.length; n++)if (t(e, $[n]))return !0;
                    return !1
                }

                if (l) {
                    v = [], w = [];
                    for (var n = 0; n < l.length; n++)e(l[n]) ? w.push(l[n]) : v.push(l[n])
                }
            }

            function p(t) {
                return angular.isArray(t) ? t : [t]
            }

            function g() {
                x = [], b = [], angular.forEach(v, function (t) {
                    t.$error ? b.push(t) : x.push(t)
                })
            }

            function m() {
                function t() {
                    e(function () {
                        h(_ ? y.concat(x) : x, _ ? $.concat(b) : b, l, w, k)
                    }, C && C.debounce ? C.debounce.change || C.debounce : 0)
                }

                a(S ? v : x, r, i).then(function () {
                    S ? u.validate(v, y.length, n, r, i).then(function () {
                        g(), t()
                    }) : t()
                }, function (t) {
                    throw"Could not resize files " + t
                })
            }

            var v, y, $, w = [], b = [], x = [];
            y = r.$$ngfPrevValidFiles || [], $ = r.$$ngfPrevInvalidFiles || [], n && n.$modelValue && (y = p(n.$modelValue));
            var _ = u.attrGetter("ngfKeep", r, i);
            v = (l || []).slice(0), ("distinct" === _ || u.attrGetter("ngfKeepDistinct", r, i) === !0) && d(r, i);
            var k = !_ && !u.attrGetter("ngfMultiple", r, i) && !u.attrGetter("multiple", r);
            if (!_ || v.length) {
                u.attrGetter("ngfBeforeModelChange", r, i, {
                    $files: l,
                    $file: l && l.length ? l[0] : null,
                    $newFiles: v,
                    $duplicateFiles: w,
                    $event: c
                });
                var S = u.attrGetter("ngfValidateAfterResize", r, i), C = u.attrGetter("ngModelOptions", r, i);
                u.validate(v, y.length, n, r, i).then(function () {
                    f ? h(v, [], l, w, k) : (C && C.allowInvalid || S ? x = v : g(), u.attrGetter("ngfFixOrientation", r, i) && u.isExifSupported() ? o(x, r, i).then(function () {
                        m()
                    }) : m())
                })
            }
        }, u
    }]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function (t, e, n, r) {
        function i(t) {
            var e = t.match(/Android[^\d]*(\d+)\.(\d+)/);
            if (e && e.length > 2) {
                var n = r.defaults.androidFixMinorVersion || 4;
                return parseInt(e[1]) < 4 || parseInt(e[1]) === n && parseInt(e[2]) < n
            }
            return -1 === t.indexOf("Chrome") && /.*Windows.*Safari.*/.test(t)
        }

        function o(t, e, n, r, o, s, u, l) {
            function c() {
                return "input" === e[0].tagName.toLowerCase() && n.type && "file" === n.type.toLowerCase()
            }

            function f() {
                return $("ngfChange") || $("ngfSelect")
            }

            function h(e) {
                if (l.shouldUpdateOn("change", n, t)) {
                    for (var i = e.__files_ || e.target && e.target.files, o = [], a = 0; a < i.length; a++)o.push(i[a]);
                    l.updateModel(r, n, t, f(), o.length ? o : null, e)
                }
            }

            function d(t) {
                if (e !== t)for (var n = 0; n < e[0].attributes.length; n++) {
                    var r = e[0].attributes[n];
                    "type" !== r.name && "class" !== r.name && "style" !== r.name && ((null == r.value || "" === r.value) && ("required" === r.name && (r.value = "required"), "multiple" === r.name && (r.value = "multiple")), t.attr(r.name, "id" === r.name ? "ngf-" + r.value : r.value))
                }
            }

            function p() {
                if (c())return e;
                var t = angular.element('<input type="file">');
                d(t);
                var n = angular.element("<label>upload</label>");
                return n.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), a.push({
                    el: e,
                    ref: n
                }), document.body.appendChild(n.append(t)[0]), t
            }

            function g(n) {
                if (e.attr("disabled"))return !1;
                if (!$("ngfSelectDisabled", t)) {
                    var r = m(n);
                    if (null != r)return r;
                    v(n);
                    try {
                        c() || document.body.contains(x[0]) || (a.push({
                            el: e,
                            ref: x.parent()
                        }), document.body.appendChild(x.parent()[0]), x.bind("change", h))
                    } catch (o) {
                    }
                    return i(navigator.userAgent) ? setTimeout(function () {
                        x[0].click()
                    }, 0) : x[0].click(), !1
                }
            }

            function m(t) {
                var e = t.changedTouches || t.originalEvent && t.originalEvent.changedTouches;
                if ("touchstart" === t.type)return b = e ? e[0].clientY : 0, !0;
                if (t.stopPropagation(), t.preventDefault(), "touchend" === t.type) {
                    var n = e ? e[0].clientY : 0;
                    if (Math.abs(n - b) > 20)return !1
                }
            }

            function v(e) {
                l.shouldUpdateOn("click", n, t) && x.val() && (x.val(null), l.updateModel(r, n, t, f(), null, e, !0))
            }

            function y(t) {
                if (x && !x.attr("__ngf_ie10_Fix_")) {
                    if (!x[0].parentNode)return void(x = null);
                    t.preventDefault(), t.stopPropagation(), x.unbind("click");
                    var e = x.clone();
                    return x.replaceWith(e), x = e, x.attr("__ngf_ie10_Fix_", "true"), x.bind("change", h), x.bind("click", y), x[0].click(), !1
                }
                x.removeAttr("__ngf_ie10_Fix_")
            }

            var $ = function (t, e) {
                return l.attrGetter(t, n, e)
            };
            l.registerModelChangeValidator(r, n, t);
            var w = [];
            w.push(t.$watch($("ngfMultiple"), function () {
                x.attr("multiple", $("ngfMultiple", t))
            })), w.push(t.$watch($("ngfCapture"), function () {
                x.attr("capture", $("ngfCapture", t))
            })), w.push(t.$watch($("ngfAccept"), function () {
                x.attr("accept", $("ngfAccept", t))
            })), n.$observe("accept", function () {
                x.attr("accept", $("accept"))
            }), w.push(function () {
                n.$$observers && delete n.$$observers.accept
            });
            var b = 0, x = e;
            c() || (x = p()), x.bind("change", h), c() ? e.bind("click", v) : e.bind("click touchstart touchend", g), -1 !== navigator.appVersion.indexOf("MSIE 10") && x.bind("click", y), r && r.$formatters.push(function (t) {
                return (null == t || 0 === t.length) && x.val() && x.val(null), t
            }), t.$on("$destroy", function () {
                c() || x.parent().remove(), angular.forEach(w, function (t) {
                    t()
                })
            }), s(function () {
                for (var t = 0; t < a.length; t++) {
                    var e = a[t];
                    document.body.contains(e.el[0]) || (a.splice(t, 1), e.ref.remove())
                }
            }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(e, x, h)
        }

        var a = [];
        return {
            restrict: "AEC", require: "?ngModel", link: function (i, a, s, u) {
                o(i, a, s, u, t, e, n, r)
            }
        }
    }]), function () {
        function t(t) {
            return "img" === t.tagName.toLowerCase() ? "image" : "audio" === t.tagName.toLowerCase() ? "audio" : "video" === t.tagName.toLowerCase() ? "video" : /./
        }

        function e(e, n, r, i, o, a, s, u) {
            function l(t) {
                var a = e.attrGetter("ngfNoObjectUrl", o, r);
                e.dataUrl(t, a)["finally"](function () {
                    n(function () {
                        var e = (a ? t.$ngfDataUrl : t.$ngfBlobUrl) || t.$ngfDataUrl;
                        u ? i.css("background-image", "url('" + (e || "") + "')") : i.attr("src", e), e ? i.removeClass("ng-hide") : i.addClass("ng-hide")
                    })
                })
            }

            n(function () {
                var n = r.$watch(o[a], function (n) {
                    var r = s;
                    if ("ngfThumbnail" === a && (r || (r = {
                            width: i[0].clientWidth,
                            height: i[0].clientHeight
                        }), 0 === r.width && window.getComputedStyle)) {
                        var o = getComputedStyle(i[0]);
                        r = {width: parseInt(o.width.slice(0, -2)), height: parseInt(o.height.slice(0, -2))}
                    }
                    return angular.isString(n) ? (i.removeClass("ng-hide"), u ? i.css("background-image", "url('" + n + "')") : i.attr("src", n)) : void(!n || !n.type || 0 !== n.type.search(t(i[0])) || u && 0 !== n.type.indexOf("image") ? i.addClass("ng-hide") : r && e.isResizeSupported() ? e.resize(n, r.width, r.height, r.quality).then(function (t) {
                        l(t)
                    }, function (t) {
                        throw t
                    }) : l(n))
                });
                r.$on("$destroy", function () {
                    n()
                })
            })
        }

        ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function (t, e, n) {
            var r = t;
            return r.base64DataUrl = function (t) {
                if (angular.isArray(t)) {
                    var e = n.defer(), i = 0;
                    return angular.forEach(t, function (n) {
                        r.dataUrl(n, !0)["finally"](function () {
                            if (i++, i === t.length) {
                                var n = [];
                                angular.forEach(t, function (t) {
                                    n.push(t.$ngfDataUrl)
                                }), e.resolve(n, t)
                            }
                        })
                    }), e.promise
                }
                return r.dataUrl(t, !0)
            }, r.dataUrl = function (t, i) {
                if (!t)return r.emptyPromise(t, t);
                if (i && null != t.$ngfDataUrl || !i && null != t.$ngfBlobUrl)return r.emptyPromise(i ? t.$ngfDataUrl : t.$ngfBlobUrl, t);
                var o = i ? t.$$ngfDataUrlPromise : t.$$ngfBlobUrlPromise;
                if (o)return o;
                var a = n.defer();
                return e(function () {
                    if (window.FileReader && t && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || t.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || t.size < 4e6)) {
                        var n = window.URL || window.webkitURL;
                        if (n && n.createObjectURL && !i) {
                            var o;
                            try {
                                o = n.createObjectURL(t)
                            } catch (s) {
                                return void e(function () {
                                    t.$ngfBlobUrl = "", a.reject()
                                })
                            }
                            e(function () {
                                if (t.$ngfBlobUrl = o, o) {
                                    a.resolve(o, t), r.blobUrls = r.blobUrls || [], r.blobUrlsTotalSize = r.blobUrlsTotalSize || 0, r.blobUrls.push({
                                        url: o,
                                        size: t.size
                                    }), r.blobUrlsTotalSize += t.size || 0;
// console.log(r.blobUrls);
// console.log(r.blobUrls[0].url);
                                    for (var e = r.defaults.blobUrlsMaxMemory || 268435456, i = r.defaults.blobUrlsMaxQueueSize || 200; (r.blobUrlsTotalSize > e || r.blobUrls.length > i) && r.blobUrls.length > 1;) {
                                        var s = r.blobUrls.splice(0, 1)[0];
                                        n.revokeObjectURL(s.url), r.blobUrlsTotalSize -= s.size
                                    }
                                }
                            })
                        } else {
                            var u = new FileReader;
                            u.onload = function (n) {
                                e(function () {
                                    t.$ngfDataUrl = n.target.result, a.resolve(n.target.result, t), e(function () {
                                        delete t.$ngfDataUrl
                                    }, 1e3)
                                })
                            }, u.onerror = function () {
                                e(function () {
                                    t.$ngfDataUrl = "", a.reject()
                                })
                            }, u.readAsDataURL(t)
                        }
                    } else e(function () {
                        t[i ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", a.reject()
                    })
                }), o = i ? t.$$ngfDataUrlPromise = a.promise : t.$$ngfBlobUrlPromise = a.promise, o["finally"](function () {
                    delete t[i ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
                }), o
            }, r
        }]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function (t, n) {
            return {
                restrict: "AE", link: function (r, i, o) {
                    e(t, n, r, i, o, "ngfSrc", t.attrGetter("ngfResize", o, r), !1)
                }
            }
        }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function (t, n) {
            return {
                restrict: "AE", link: function (r, i, o) {
                    e(t, n, r, i, o, "ngfBackground", t.attrGetter("ngfResize", o, r), !0)
                }
            }
        }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function (t, n) {
            return {
                restrict: "AE", link: function (r, i, o) {
                    var a = t.attrGetter("ngfSize", o, r);
                    e(t, n, r, i, o, "ngfThumbnail", a, t.attrGetter("ngfAsBackground", o, r))
                }
            }
        }]), ngFileUpload.config(["$compileProvider", function (t) {
            t.imgSrcSanitizationWhitelist && t.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/), t.aHrefSanitizationWhitelist && t.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)
        }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function (t, e) {
            return function (n, r, i) {
                if (angular.isString(n))return e.trustAsResourceUrl(n);
                var o = n && ((r ? n.$ngfDataUrl : n.$ngfBlobUrl) || n.$ngfDataUrl);
                return n && !o ? (!n.$ngfDataUrlFilterInProgress && angular.isObject(n) && (n.$ngfDataUrlFilterInProgress = !0, t.dataUrl(n, r)), "") : (n && delete n.$ngfDataUrlFilterInProgress, (n && o ? i ? e.trustAsResourceUrl(o) : o : n) || "")
            }
        }])
    }(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function (t, e, n) {
        function r(t) {
            var e = "", n = [];
            if (t.length > 2 && "/" === t[0] && "/" === t[t.length - 1])e = t.substring(1, t.length - 1); else {
                var i = t.split(",");
                if (i.length > 1)for (var o = 0; o < i.length; o++) {
                    var a = r(i[o]);
                    a.regexp ? (e += "(" + a.regexp + ")", o < i.length - 1 && (e += "|")) : n = n.concat(a.excludes)
                } else 0 === t.indexOf("!") ? n.push("^((?!" + r(t.substring(1)).regexp + ").)*$") : (0 === t.indexOf(".") && (t = "*" + t), e = "^" + t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", e = e.replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
            }
            return {regexp: e, excludes: n}
        }

        function i(t, e) {
            null == e || t.$dirty || (t.$setDirty ? t.$setDirty() : t.$dirty = !0)
        }

        var o = t;
        return o.validatePattern = function (t, e) {
            if (!e)return !0;
            var n = r(e), i = !0;
            if (n.regexp && n.regexp.length) {
                var o = new RegExp(n.regexp, "i");
                i = null != t.type && o.test(t.type) || null != t.name && o.test(t.name)
            }
            for (var a = n.excludes.length; a--;) {
                var s = new RegExp(n.excludes[a], "i");
                i = i && (null == t.type || s.test(t.type)) && (null == t.name || s.test(t.name))
            }
            return i
        }, o.ratioToFloat = function (t) {
            var e = t.toString(), n = e.search(/[x:]/i);
            return e = n > -1 ? parseFloat(e.substring(0, n)) / parseFloat(e.substring(n + 1)) : parseFloat(e)
        }, o.registerModelChangeValidator = function (t, e, n) {
            t && t.$formatters.push(function (r) {
                t.$dirty && (r && !angular.isArray(r) && (r = [r]), o.validate(r, 0, t, e, n).then(function () {
                    o.applyModelValidation(t, r)
                }))
            })
        }, o.applyModelValidation = function (t, e) {
            i(t, e), angular.forEach(t.$ngfValidations, function (e) {
                t.$setValidity(e.name, e.valid)
            })
        }, o.getValidationAttr = function (t, e, n, r, i) {
            var a = "ngf" + n[0].toUpperCase() + n.substr(1), s = o.attrGetter(a, t, e, {$file: i});
            if (null == s && (s = o.attrGetter("ngfValidate", t, e, {$file: i}))) {
                var u = (r || n).split(".");
                s = s[u[0]], u.length > 1 && (s = s && s[u[1]])
            }
            return s
        }, o.validate = function (t, n, r, i, a) {
            function s(e, n, s) {
                if (t) {
                    for (var u = t.length, l = null; u--;) {
                        var c = t[u];
                        if (c) {
                            var f = o.getValidationAttr(i, a, e, n, c);
                            null != f && (s(c, f, u) || (c.$error = e, (c.$errorMessages = c.$errorMessages || {})[e] = !0, c.$errorParam = f, t.splice(u, 1), l = !1))
                        }
                    }
                    null !== l && r.$ngfValidations.push({name: e, valid: l})
                }
            }

            function u(n, s, u, c, f) {
                function h(t, e, r) {
                    null != r ? c(e, r).then(function (i) {
                        f(i, r) ? t.resolve() : (e.$error = n, (e.$errorMessages = e.$errorMessages || {})[n] = !0, e.$errorParam = r, t.reject())
                    }, function () {
                        l("ngfValidateForce", {$file: e}) ? (e.$error = n, (e.$errorMessages = e.$errorMessages || {})[n] = !0, e.$errorParam = r, t.reject()) : t.resolve()
                    }) : t.resolve()
                }

                var d = [o.emptyPromise()];
                return t ? (t = void 0 === t.length ? [t] : t, angular.forEach(t, function (t) {
                    var r = e.defer();
                    return d.push(r.promise), !u || null != t.type && 0 === t.type.search(u) ? void("dimensions" === n && null != o.attrGetter("ngfDimensions", i) ? o.imageDimensions(t).then(function (e) {
                        h(r, t, l("ngfDimensions", {$file: t, $width: e.width, $height: e.height}))
                    }, function () {
                        r.reject()
                    }) : "duration" === n && null != o.attrGetter("ngfDuration", i) ? o.mediaDuration(t).then(function (e) {
                        h(r, t, l("ngfDuration", {$file: t, $duration: e}))
                    }, function () {
                        r.reject()
                    }) : h(r, t, o.getValidationAttr(i, a, n, s, t))) : void r.resolve()
                }), e.all(d).then(function () {
                    r.$ngfValidations.push({name: n, valid: !0})
                }, function () {
                    r.$ngfValidations.push({name: n, valid: !1})
                })) : void 0
            }

            r = r || {}, r.$ngfValidations = r.$ngfValidations || [], angular.forEach(r.$ngfValidations, function (t) {
                t.valid = !0
            });
            var l = function (t, e) {
                return o.attrGetter(t, i, a, e)
            };
            if (null == t || 0 === t.length)return o.emptyPromise(r);
            t = void 0 === t.length ? [t] : t.slice(0), s("maxFiles", null, function (t, e, r) {
                return e > n + r
            }), s("pattern", null, o.validatePattern), s("minSize", "size.min", function (t, e) {
                return t.size + .1 >= o.translateScalars(e)
            }), s("maxSize", "size.max", function (t, e) {
                return t.size - .1 <= o.translateScalars(e)
            });
            var c = 0;
            if (s("maxTotalSize", null, function (e, n) {
                    return c += e.size, c > o.translateScalars(n) ? (t.splice(0, t.length), !1) : !0
                }), s("validateFn", null, function (t, e) {
                    return e === !0 || null === e || "" === e
                }), !t.length)return o.emptyPromise(r, r.$ngfValidations);
            var f = e.defer(), h = [];
            return h.push(o.happyPromise(u("maxHeight", "height.max", /image/, this.imageDimensions, function (t, e) {
                return t.height <= e
            }))), h.push(o.happyPromise(u("minHeight", "height.min", /image/, this.imageDimensions, function (t, e) {
                return t.height >= e
            }))), h.push(o.happyPromise(u("maxWidth", "width.max", /image/, this.imageDimensions, function (t, e) {
                return t.width <= e
            }))), h.push(o.happyPromise(u("minWidth", "width.min", /image/, this.imageDimensions, function (t, e) {
                return t.width >= e
            }))), h.push(o.happyPromise(u("dimensions", null, /image/, function (t, e) {
                return o.emptyPromise(e)
            }, function (t) {
                return t
            }))), h.push(o.happyPromise(u("ratio", null, /image/, this.imageDimensions, function (t, e) {
                for (var n = e.toString().split(","), r = !1, i = 0; i < n.length; i++)Math.abs(t.width / t.height - o.ratioToFloat(n[i])) < 1e-4 && (r = !0);
                return r
            }))), h.push(o.happyPromise(u("maxRatio", "ratio.max", /image/, this.imageDimensions, function (t, e) {
                return t.width / t.height - o.ratioToFloat(e) < 1e-4
            }))), h.push(o.happyPromise(u("minRatio", "ratio.min", /image/, this.imageDimensions, function (t, e) {
                return t.width / t.height - o.ratioToFloat(e) > -1e-4
            }))), h.push(o.happyPromise(u("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function (t, e) {
                return t <= o.translateScalars(e)
            }))), h.push(o.happyPromise(u("minDuration", "duration.min", /audio|video/, this.mediaDuration, function (t, e) {
                return t >= o.translateScalars(e)
            }))), h.push(o.happyPromise(u("duration", null, /audio|video/, function (t, e) {
                return o.emptyPromise(e)
            }, function (t) {
                return t
            }))), h.push(o.happyPromise(u("validateAsyncFn", null, null, function (t, e) {
                return e
            }, function (t) {
                return t === !0 || null === t || "" === t
            }))), e.all(h).then(function () {
                f.resolve(r, r.$ngfValidations)
            })
        }, o.imageDimensions = function (t) {
            if (t.$ngfWidth && t.$ngfHeight) {
                var r = e.defer();
                return n(function () {
                    r.resolve({width: t.$ngfWidth, height: t.$ngfHeight})
                }), r.promise
            }
            if (t.$ngfDimensionPromise)return t.$ngfDimensionPromise;
            var i = e.defer();
            return n(function () {
                return 0 !== t.type.indexOf("image") ? void i.reject("not image") : void o.dataUrl(t).then(function (e) {
                    function r() {
                        var e = s[0].clientWidth, n = s[0].clientHeight;
                        s.remove(), t.$ngfWidth = e, t.$ngfHeight = n, i.resolve({width: e, height: n})
                    }

                    function o() {
                        s.remove(), i.reject("load error")
                    }

                    function a() {
                        n(function () {
                            s[0].parentNode && (s[0].clientWidth ? r() : u > 10 ? o() : a())
                        }, 1e3)
                    }

                    var s = angular.element("<img>").attr("src", e).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");
                    s.on("load", r), s.on("error", o);
                    var u = 0;
                    a(), angular.element(document.getElementsByTagName("body")[0]).append(s)
                }, function () {
                    i.reject("load error")
                })
            }), t.$ngfDimensionPromise = i.promise, t.$ngfDimensionPromise["finally"](function () {
                delete t.$ngfDimensionPromise
            }), t.$ngfDimensionPromise
        }, o.mediaDuration = function (t) {
            if (t.$ngfDuration) {
                var r = e.defer();
                return n(function () {
                    r.resolve(t.$ngfDuration)
                }), r.promise
            }
            if (t.$ngfDurationPromise)return t.$ngfDurationPromise;
            var i = e.defer();
            return n(function () {
                return 0 !== t.type.indexOf("audio") && 0 !== t.type.indexOf("video") ? void i.reject("not media") : void o.dataUrl(t).then(function (e) {
                    function r() {
                        var e = s[0].duration;
                        t.$ngfDuration = e, s.remove(), i.resolve(e)
                    }

                    function o() {
                        s.remove(), i.reject("load error")
                    }

                    function a() {
                        n(function () {
                            s[0].parentNode && (s[0].duration ? r() : u > 10 ? o() : a())
                        }, 1e3)
                    }

                    var s = angular.element(0 === t.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", e).css("visibility", "none").css("position", "fixed");
                    s.on("loadedmetadata", r), s.on("error", o);
                    var u = 0;
                    a(), angular.element(document.body).append(s)
                }, function () {
                    i.reject("load error")
                })
            }), t.$ngfDurationPromise = i.promise, t.$ngfDurationPromise["finally"](function () {
                delete t.$ngfDurationPromise
            }), t.$ngfDurationPromise
        }, o
    }]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function (t, e) {
        var n = t, r = function (t, e, n, r, i) {
            var o = i ? Math.max(n / t, r / e) : Math.min(n / t, r / e);
            return {width: t * o, height: e * o, marginX: t * o - n, marginY: e * o - r}
        }, i = function (t, i, o, a, s, u, l, c) {
            var f = e.defer(), h = document.createElement("canvas"), d = document.createElement("img");
            return d.onload = function () {
                if (null != c && c(d.width, d.height) === !1)return void f.reject("resizeIf");
                try {
                    if (u) {
                        var t = n.ratioToFloat(u), e = d.width / d.height;
                        t > e ? (i = d.width, o = i / t) : (o = d.height, i = o * t)
                    }
                    i || (i = d.width), o || (o = d.height);
                    var p = r(d.width, d.height, i, o, l);
                    h.width = Math.min(p.width, i), h.height = Math.min(p.height, o);
                    var g = h.getContext("2d");
                    g.drawImage(d, Math.min(0, -p.marginX / 2), Math.min(0, -p.marginY / 2), p.width, p.height), f.resolve(h.toDataURL(s || "image/WebP", a || .934))
                } catch (m) {
                    f.reject(m)
                }
            }, d.onerror = function () {
                f.reject()
            }, d.src = t, f.promise
        };
        return n.dataUrltoBlob = function (t, e, n) {
            for (var r = t.split(","), i = r[0].match(/:(.*?);/)[1], o = atob(r[1]), a = o.length, s = new Uint8Array(a); a--;)s[a] = o.charCodeAt(a);
            var u = new window.Blob([s], {type: i});
            return u.name = e, u.$ngfOrigSize = n, u
        }, n.isResizeSupported = function () {
            var t = document.createElement("canvas");
            return window.atob && t.getContext && t.getContext("2d") && window.Blob
        }, n.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
            get: function () {
                return this.$ngfName
            }, set: function (t) {
                this.$ngfName = t
            }, configurable: !0
        }), n.resize = function (t, r, o, a, s, u, l, c, f) {
            if (0 !== t.type.indexOf("image"))return n.emptyPromise(t);
            var h = e.defer();
            return n.dataUrl(t, !0).then(function (e) {
                i(e, r, o, a, s || t.type, u, l, c).then(function (r) {
                    if ("image/jpeg" === t.type && f)try {
                        r = n.restoreExif(e, r)
                    } catch (i) {
                        setTimeout(function () {
                            throw i
                        }, 1)
                    }
                    try {
                        var o = n.dataUrltoBlob(r, t.name, t.size);
                        h.resolve(o)
                    } catch (i) {
                        h.reject(i)
                    }
                }, function (e) {
                    "resizeIf" === e && h.resolve(t), h.reject(e)
                })
            }, function (t) {
                h.reject(t)
            }), h.promise
        }, n
    }]), function () {
        function t(t, n, r, i, o, a, s, u, l, c) {
            function f() {
                return n.attr("disabled") || v("ngfDropDisabled", t)
            }

            function h(e, n) {
                u.updateModel(i, r, t, v("ngfChange") || v("ngfDrop"), e, n)
            }

            function d(e, n) {
                if (!u.shouldUpdateOn(e, r, t) || !n)return u.rejectPromise([]);
                var i = [];
                n.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (t, e, n) {
                    i.push(n)
                });
                var o = [], a = [];
                if (i.length) {
                    angular.forEach(i, function (t) {
                        o.push(u.urlToBlob(t).then(function (t) {
                            a.push(t)
                        }))
                    });
                    var s = c.defer();
                    return c.all(o).then(function () {
                        s.resolve(a)
                    }, function (t) {
                        s.reject(t)
                    }), s.promise
                }
                return u.emptyPromise()
            }

            function p(t, e, n, r) {
                var i = v("ngfDragOverClass", t, {$event: n}), o = "dragover";
                if (angular.isString(i))o = i; else if (i && (i.delay && (b = i.delay), i.accept || i.reject)) {
                    var a = n.dataTransfer.items;
                    if (null != a && a.length)for (var s = i.pattern || v("ngfPattern", t, {$event: n}), l = a.length; l--;) {
                        if (!u.validatePattern(a[l], s)) {
                            o = i.reject;
                            break
                        }
                        o = i.accept
                    } else o = i.accept
                }
                r(o)
            }

            function g(e, n, i, o) {
                function a(t, e) {
                    var n = c.defer();
                    if (null != t)if (t.isDirectory) {
                        var r = [u.emptyPromise()];
                        if (h) {
                            var i = {type: "directory"};
                            i.name = i.path = (e || "") + t.name + t.name, d.push(i)
                        }
                        var o = t.createReader(), s = [], g = function () {
                            o.readEntries(function (i) {
                                try {
                                    i.length ? (s = s.concat(Array.prototype.slice.call(i || [], 0)), g()) : (angular.forEach(s.slice(0), function (n) {
                                        d.length <= l && f >= p && r.push(a(n, (e ? e : "") + t.name + "/"))
                                    }), c.all(r).then(function () {
                                        n.resolve()
                                    }, function (t) {
                                        n.reject(t)
                                    }))
                                } catch (o) {
                                    n.reject(o)
                                }
                            }, function (t) {
                                n.reject(t)
                            })
                        };
                        g()
                    } else t.file(function (t) {
                        try {
                            t.path = (e ? e : "") + t.name, h && (t = u.rename(t, t.path)), d.push(t), p += t.size, n.resolve()
                        } catch (r) {
                            n.reject(r)
                        }
                    }, function (t) {
                        n.reject(t)
                    });
                    return n.promise
                }

                var l = u.getValidationAttr(r, t, "maxFiles") || Number.MAX_VALUE, f = u.getValidationAttr(r, t, "maxTotalSize") || Number.MAX_VALUE, h = v("ngfIncludeDir", t), d = [], p = 0, g = [u.emptyPromise()];
                if (e && e.length > 0 && "file" !== s.protocol())for (var m = 0; m < e.length; m++) {
                    if (e[m].webkitGetAsEntry && e[m].webkitGetAsEntry() && e[m].webkitGetAsEntry().isDirectory) {
                        var y = e[m].webkitGetAsEntry();
                        if (y.isDirectory && !i)continue;
                        null != y && g.push(a(y))
                    } else {
                        var $ = e[m].getAsFile();
                        null != $ && (d.push($), p += $.size)
                    }
                    if (d.length > l || p > f || !o && d.length > 0)break
                } else if (null != n)for (var w = 0; w < n.length; w++) {
                    var b = n.item(w);
                    if ((b.type || b.size > 0) && (d.push(b), p += b.size), d.length > l || p > f || !o && d.length > 0)break
                }
                var x = c.defer();
                return c.all(g).then(function () {
                    if (o || h || !d.length)x.resolve(d); else {
                        for (var t = 0; d[t] && "directory" === d[t].type;)t++;
                        x.resolve([d[t]])
                    }
                }, function (t) {
                    x.reject(t)
                }), x.promise
            }

            var m = e(), v = function (t, e, n) {
                return u.attrGetter(t, r, e, n)
            };
            if (v("dropAvailable") && a(function () {
                    t[v("dropAvailable")] ? t[v("dropAvailable")].value = m : t[v("dropAvailable")] = m
                }), !m)return void(v("ngfHideOnDropNotAvailable", t) === !0 && n.css("display", "none"));
            null == v("ngfSelect") && u.registerModelChangeValidator(i, r, t);
            var y, $ = null, w = o(v("ngfStopPropagation")), b = 1;
            n[0].addEventListener("dragover", function (e) {
                if (!f() && u.shouldUpdateOn("drop", r, t)) {
                    if (e.preventDefault(), w(t) && e.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
                        var i = e.dataTransfer.effectAllowed;
                        e.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy"
                    }
                    a.cancel($), y || (y = "C", p(t, r, e, function (r) {
                        y = r, n.addClass(y), v("ngfDrag", t, {$isDragging: !0, $class: y, $event: e})
                    }))
                }
            }, !1), n[0].addEventListener("dragenter", function (e) {
                !f() && u.shouldUpdateOn("drop", r, t) && (e.preventDefault(), w(t) && e.stopPropagation())
            }, !1), n[0].addEventListener("dragleave", function (e) {
                !f() && u.shouldUpdateOn("drop", r, t) && (e.preventDefault(), w(t) && e.stopPropagation(), $ = a(function () {
                    y && n.removeClass(y), y = null, v("ngfDrag", t, {$isDragging: !1, $event: e})
                }, b || 100))
            }, !1), n[0].addEventListener("drop", function (e) {
                if (!f() && u.shouldUpdateOn("drop", r, t)) {
                    e.preventDefault(), w(t) && e.stopPropagation(), y && n.removeClass(y), y = null;
                    var i, o = e.dataTransfer.items;
                    try {
                        i = e.dataTransfer && e.dataTransfer.getData && e.dataTransfer.getData("text/html")
                    } catch (a) {
                    }
                    g(o, e.dataTransfer.files, v("ngfAllowDir", t) !== !1, v("multiple") || v("ngfMultiple", t)).then(function (t) {
                        t.length ? h(t, e) : d("dropUrl", i).then(function (t) {
                            h(t, e)
                        })
                    })
                }
            }, !1), n[0].addEventListener("paste", function (e) {
                if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && v("ngfEnableFirefoxPaste", t) && e.preventDefault(), !f() && u.shouldUpdateOn("paste", r, t)) {
                    var n = [], i = e.clipboardData || e.originalEvent.clipboardData;
                    if (i && i.items)for (var o = 0; o < i.items.length; o++)-1 !== i.items[o].type.indexOf("image") && n.push(i.items[o].getAsFile());
                    n.length ? h(n, e) : d("pasteUrl", i).then(function (t) {
                        h(t, e)
                    })
                }
            }, !1), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && v("ngfEnableFirefoxPaste", t) && (n.attr("contenteditable", !0), n.on("keypress", function (t) {
                t.metaKey || t.ctrlKey || t.preventDefault()
            }))
        }

        function e() {
            var t = document.createElement("div");
            return "draggable" in t && "ondrop" in t && !/Edge\/12./i.test(navigator.userAgent)
        }

        ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$location", "Upload", "$http", "$q", function (e, n, r, i, o, a) {
            return {
                restrict: "AEC", require: "?ngModel", link: function (s, u, l, c) {
                    t(s, u, l, c, e, n, r, i, o, a)
                }
            }
        }]), ngFileUpload.directive("ngfNoFileDrop", function () {
            return function (t, n) {
                e() && n.css("display", "none")
            }
        }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function (t, n, r) {
            return function (i, o, a) {
                if (e()) {
                    var s = t(r.attrGetter("ngfDropAvailable", a));
                    n(function () {
                        s(i), s.assign && s.assign(i, !0)
                    })
                }
            }
        }])
    }(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function (t, e) {
        function n(t, e, n, r) {
            switch (e) {
                case 2:
                    return t.transform(-1, 0, 0, 1, n, 0);
                case 3:
                    return t.transform(-1, 0, 0, -1, n, r);
                case 4:
                    return t.transform(1, 0, 0, -1, 0, r);
                case 5:
                    return t.transform(0, 1, 1, 0, 0, 0);
                case 6:
                    return t.transform(0, 1, -1, 0, r, 0);
                case 7:
                    return t.transform(0, -1, -1, 0, r, n);
                case 8:
                    return t.transform(0, -1, 1, 0, 0, n)
            }
        }

        function r(t) {
            for (var e = "", n = new Uint8Array(t), r = n.byteLength, i = 0; r > i; i++)e += String.fromCharCode(n[i]);
            return window.btoa(e)
        }

        var i = t;
        return i.isExifSupported = function () {
            return window.FileReader && (new FileReader).readAsArrayBuffer && i.isResizeSupported()
        }, i.readOrientation = function (t) {
            var n = e.defer(), r = new FileReader, i = t.slice ? t.slice(0, 65536) : t;
            return r.readAsArrayBuffer(i), r.onerror = function (t) {
                return n.reject(t)
            }, r.onload = function (t) {
                var e = {orientation: 1}, r = new DataView(this.result);
                if (65496 !== r.getUint16(0, !1))return n.resolve(e);
                for (var i = r.byteLength, o = 2; i > o;) {
                    var a = r.getUint16(o, !1);
                    if (o += 2, 65505 === a) {
                        if (1165519206 !== r.getUint32(o += 2, !1))return n.resolve(e);
                        var s = 18761 === r.getUint16(o += 6, !1);
                        o += r.getUint32(o + 4, s);
                        var u = r.getUint16(o, s);
                        o += 2;
                        for (var l = 0; u > l; l++)if (274 === r.getUint16(o + 12 * l, s)) {
                            var c = r.getUint16(o + 12 * l + 8, s);
                            return c >= 2 && 8 >= c && (r.setUint16(o + 12 * l + 8, 1, s), e.fixedArrayBuffer = t.target.result), e.orientation = c, n.resolve(e)
                        }
                    } else {
                        if (65280 !== (65280 & a))break;
                        o += r.getUint16(o, !1)
                    }
                }
                return n.resolve(e)
            }, n.promise
        }, i.applyExifRotation = function (t) {
            if (0 !== t.type.indexOf("image/jpeg"))return i.emptyPromise(t);
            var o = e.defer();
            return i.readOrientation(t).then(function (e) {
                return e.orientation < 2 || e.orientation > 8 ? o.resolve(t) : void i.dataUrl(t, !0).then(function (a) {
                    var s = document.createElement("canvas"), u = document.createElement("img");
                    u.onload = function () {
                        try {
                            s.width = e.orientation > 4 ? u.height : u.width, s.height = e.orientation > 4 ? u.width : u.height;
                            var a = s.getContext("2d");
                            n(a, e.orientation, u.width, u.height), a.drawImage(u, 0, 0);
                            var l = s.toDataURL(t.type || "image/WebP", .934);
                            l = i.restoreExif(r(e.fixedArrayBuffer), l);
                            var c = i.dataUrltoBlob(l, t.name);
                            o.resolve(c)
                        } catch (f) {
                            return o.reject(f)
                        }
                    }, u.onerror = function () {
                        o.reject()
                    }, u.src = a
                }, function (t) {
                    o.reject(t)
                })
            }, function (t) {
                o.reject(t)
            }), o.promise
        }, i.restoreExif = function (t, e) {
            var n = {};
            return n.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n.encode64 = function (t) {
                var e, n, r, i, o, a = "", s = "", u = "", l = 0;
                do e = t[l++], n = t[l++], s = t[l++], r = e >> 2, i = (3 & e) << 4 | n >> 4, o = (15 & n) << 2 | s >> 6, u = 63 & s, isNaN(n) ? o = u = 64 : isNaN(s) && (u = 64), a = a + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(u),
                    e = n = s = "", r = i = o = u = ""; while (l < t.length);
                return a
            }, n.restore = function (t, e) {
                t.match("data:image/jpeg;base64,") && (t = t.replace("data:image/jpeg;base64,", ""));
                var n = this.decode64(t), r = this.slice2Segments(n), i = this.exifManipulation(e, r);
                return "data:image/jpeg;base64," + this.encode64(i)
            }, n.exifManipulation = function (t, e) {
                var n = this.getExifArray(e), r = this.insertExif(t, n);
                return new Uint8Array(r)
            }, n.getExifArray = function (t) {
                for (var e, n = 0; n < t.length; n++)if (e = t[n], 255 === e[0] & 225 === e[1])return e;
                return []
            }, n.insertExif = function (t, e) {
                var n = t.replace("data:image/jpeg;base64,", ""), r = this.decode64(n), i = r.indexOf(255, 3), o = r.slice(0, i), a = r.slice(i), s = o;
                return s = s.concat(e), s = s.concat(a)
            }, n.slice2Segments = function (t) {
                for (var e = 0, n = []; ;) {
                    if (255 === t[e] & 218 === t[e + 1])break;
                    if (255 === t[e] & 216 === t[e + 1])e += 2; else {
                        var r = 256 * t[e + 2] + t[e + 3], i = e + r + 2, o = t.slice(e, i);
                        n.push(o), e = i
                    }
                    if (e > t.length)break
                }
                return n
            }, n.decode64 = function (t) {
                var e, n, r, i, o, a = "", s = "", u = 0, l = [], c = /[^A-Za-z0-9\+\/\=]/g;
                c.exec(t) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do r = this.KEY_STR.indexOf(t.charAt(u++)), i = this.KEY_STR.indexOf(t.charAt(u++)), o = this.KEY_STR.indexOf(t.charAt(u++)), s = this.KEY_STR.indexOf(t.charAt(u++)), e = r << 2 | i >> 4, n = (15 & i) << 4 | o >> 2, a = (3 & o) << 6 | s, l.push(e), 64 !== o && l.push(n), 64 !== s && l.push(a), e = n = a = "", r = i = o = s = ""; while (u < t.length);
                return l
            }, n.restore(t, e)
        }, i
    }]), angular.module("angular-img-cropper", []).directive("imageCropper", ["$document", "$window", "imageCropperDataShare", function (t, e, n) {
        return {
            scope: {
                image: "=",
                croppedImage: "=",
                cropWidth: "=",
                cropHeight: "=",
                keepAspect: "=",
                touchRadius: "=",
                cropAreaBounds: "=",
                minWidth: "=",
                minHeight: "="
            }, restrict: "A", link: function (t, e, r) {
                function i(n, r) {
                    if (!a || n !== r) {
                        var i = e[0], s = t.cropWidth, u = t.cropHeight, l = t.keepAspect, c = t.touchRadius, f = a && a.srcImage;
                        a = new m(i, i.width / 2 - s / 2, i.height / 2 - u / 2, s, u, l, c), $(i).data("crop.angular-img-cropper", a), f ? a.setImage(f) : o(t.image)
                    }
                }

                function o(e) {
                    if (e) {
                        var n = new Image;
                        void 0 !== r.cors && "no" !== r.cors && (n.crossOrigin = "Anonymous"), n.addEventListener("load", function () {
                            a.setImage(n), t.$apply()
                        }, !1), n.src = e
                    }
                }

                var a, s = s || function (t, e) {
                        function n() {
                            this.constructor = t
                        }

                        for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r]);
                        n.prototype = e.prototype, t.prototype = new n
                    }, u = function () {
                    function t(t, e, n) {
                        this.over = !1, this.drag = !1, this.position = new p(t, e), this.offset = new p(0, 0), this.radius = n
                    }

                    return t.prototype.setDrag = function (t) {
                        this.drag = t, this.setOver(t)
                    }, t.prototype.draw = function (t) {
                    }, t.prototype.setOver = function (t) {
                        this.over = t
                    }, t.prototype.touchInBounds = function (t, e) {
                        return t > this.position.x - this.radius && t < this.position.x + this.radius && e > this.position.y - this.radius && e < this.position.y + this.radius
                    }, t.prototype.getPosition = function () {
                        return this.position
                    }, t.prototype.setPosition = function (t, e) {
                        this.position.x = t, this.position.y = e
                    }, t
                }(), l = function () {
                    function t(e) {
                        this.borrowed = 0, t.instance = this;
                        for (var n = null, r = 0; e > r; r++)if (0 === r)this.firstAvailable = new p, n = this.firstAvailable; else {
                            var i = new p;
                            n.setNext(i), n = i
                        }
                    }

                    return t.prototype.borrow = function (t, e) {
                        if (null == this.firstAvailable)throw"Pool exhausted";
                        this.borrowed++;
                        var n = this.firstAvailable;
                        return this.firstAvailable = n.getNext(), n.x = t, n.y = e, n
                    }, t.prototype.returnPoint = function (t) {
                        this.borrowed--, t.x = 0, t.y = 0, t.setNext(this.firstAvailable), this.firstAvailable = t
                    }, t
                }(), c = function () {
                    function t() {
                    }

                    return t.init = function (t) {
                        this.canvas = t, this.ctx = this.canvas.getContext("2d")
                    }, t.DEG2RAD = .0174532925, t
                }(), f = function (t) {
                    function e(e, n, r) {
                        t.call(this, e, n, r), this.iconPoints = new Array, this.scaledIconPoints = new Array, this.getDragIconPoints(this.iconPoints, 1), this.getDragIconPoints(this.scaledIconPoints, 1.2)
                    }

                    return s(e, t), e.prototype.draw = function (t) {
                        this.over || this.drag ? this.drawIcon(t, this.scaledIconPoints) : this.drawIcon(t, this.iconPoints)
                    }, e.prototype.getDragIconPoints = function (t, e) {
                        var n = 17 * e, r = 14 * e, i = 8 * e, o = 4 * e;
                        t.push(l.instance.borrow(-o / 2, n - i)), t.push(l.instance.borrow(-r / 2, n - i)), t.push(l.instance.borrow(0, n)), t.push(l.instance.borrow(r / 2, n - i)), t.push(l.instance.borrow(o / 2, n - i)), t.push(l.instance.borrow(o / 2, o / 2)), t.push(l.instance.borrow(n - i, o / 2)), t.push(l.instance.borrow(n - i, r / 2)), t.push(l.instance.borrow(n, 0)), t.push(l.instance.borrow(n - i, -r / 2)), t.push(l.instance.borrow(n - i, -o / 2)), t.push(l.instance.borrow(o / 2, -o / 2)), t.push(l.instance.borrow(o / 2, -n + i)), t.push(l.instance.borrow(r / 2, -n + i)), t.push(l.instance.borrow(0, -n)), t.push(l.instance.borrow(-r / 2, -n + i)), t.push(l.instance.borrow(-o / 2, -n + i)), t.push(l.instance.borrow(-o / 2, -o / 2)), t.push(l.instance.borrow(-n + i, -o / 2)), t.push(l.instance.borrow(-n + i, -r / 2)), t.push(l.instance.borrow(-n, 0)), t.push(l.instance.borrow(-n + i, r / 2)), t.push(l.instance.borrow(-n + i, o / 2)), t.push(l.instance.borrow(-o / 2, o / 2))
                    }, e.prototype.drawIcon = function (t, e) {
                        t.beginPath(), t.moveTo(e[0].x + this.position.x, e[0].y + this.position.y);
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            t.lineTo(r.x + this.position.x, r.y + this.position.y)
                        }
                        t.closePath(), t.fillStyle = "rgba(255,228,0,1)", t.fill()
                    }, e.prototype.recalculatePosition = function (t) {
                        var e = t.getCentre();
                        this.setPosition(e.x, e.y), l.instance.returnPoint(e)
                    }, e
                }(u), h = function (t) {
                    function e(e, n, r) {
                        t.call(this, e, n, r)
                    }

                    return s(e, t), e.prototype.drawCornerBorder = function (t) {
                        var e = 10;
                        (this.over || this.drag) && (e = 12);
                        var n = 1, r = 1;
                        this.horizontalNeighbour.position.x < this.position.x && (n = -1), this.verticalNeighbour.position.y < this.position.y && (r = -1), t.beginPath(), t.lineJoin = "miter", t.moveTo(this.position.x, this.position.y), t.lineTo(this.position.x + e * n, this.position.y), t.lineTo(this.position.x + e * n, this.position.y + e * r), t.lineTo(this.position.x, this.position.y + e * r), t.lineTo(this.position.x, this.position.y), t.closePath(), t.lineWidth = 2, t.strokeStyle = "rgba(255,228,0,1)", t.stroke()
                    }, e.prototype.drawCornerFill = function (t) {
                        var e = 10;
                        (this.over || this.drag) && (e = 12);
                        var n = 1, r = 1;
                        this.horizontalNeighbour.position.x < this.position.x && (n = -1), this.verticalNeighbour.position.y < this.position.y && (r = -1), t.beginPath(), t.moveTo(this.position.x, this.position.y), t.lineTo(this.position.x + e * n, this.position.y), t.lineTo(this.position.x + e * n, this.position.y + e * r), t.lineTo(this.position.x, this.position.y + e * r), t.lineTo(this.position.x, this.position.y), t.closePath(), t.fillStyle = "rgba(0,0,0,1)", t.fill()
                    }, e.prototype.moveX = function (t) {
                        this.setPosition(t, this.position.y)
                    }, e.prototype.moveY = function (t) {
                        this.setPosition(this.position.x, t)
                    }, e.prototype.move = function (t, e) {
                        this.setPosition(t, e), this.verticalNeighbour.moveX(t), this.horizontalNeighbour.moveY(e)
                    }, e.prototype.addHorizontalNeighbour = function (t) {
                        this.horizontalNeighbour = t
                    }, e.prototype.addVerticalNeighbour = function (t) {
                        this.verticalNeighbour = t
                    }, e.prototype.getHorizontalNeighbour = function () {
                        return this.horizontalNeighbour
                    }, e.prototype.getVerticalNeighbour = function () {
                        return this.verticalNeighbour
                    }, e.prototype.draw = function (t) {
                        this.drawCornerFill(t), this.drawCornerBorder(t)
                    }, e
                }(u), d = function () {
                    function t(t, e, n, r) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), this.left = t, this.right = t + n, this.top = e, this.bottom = e + r
                    }

                    return t.prototype.getWidth = function () {
                        return this.right - this.left
                    }, t.prototype.getHeight = function () {
                        return this.bottom - this.top
                    }, t.prototype.getCentre = function () {
                        var t = this.getWidth(), e = this.getHeight();
                        return l.instance.borrow(this.left + t / 2, this.top + e / 2)
                    }, t
                }(), p = function () {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                    }

                    return t.prototype.setNext = function (t) {
                        this.next = t
                    }, t.prototype.getNext = function () {
                        return this.next
                    }, t
                }(), g = function () {
                    function t(t, e, n) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), this.id = 0, this.x = t, this.y = e, this.id = n
                    }

                    return t
                }(), m = function () {
                    function e(t, e, n, r, i, o, a) {
                        void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 100), void 0 === i && (i = 50), void 0 === o && (o = !0), void 0 === a && (a = 20), this.keepAspect = !1, this.aspectRatio = 0, this.currentDragTouches = new Array, this.isMouseDown = !1, this.ratioW = 1, this.ratioH = 1, this.fileType = "png", this.imageSet = !1, this.pointPool = new l(200), c.init(t), this.buffer = document.createElement("canvas"), this.cropCanvas = document.createElement("canvas"), this.buffer.width = t.width, this.buffer.height = t.height, this.tl = new h(e, n, a), this.tr = new h(e + r, n, a), this.bl = new h(e, n + i, a), this.br = new h(e + r, n + i, a), this.tl.addHorizontalNeighbour(this.tr), this.tl.addVerticalNeighbour(this.bl), this.tr.addHorizontalNeighbour(this.tl), this.tr.addVerticalNeighbour(this.br), this.bl.addHorizontalNeighbour(this.br), this.bl.addVerticalNeighbour(this.tl), this.br.addHorizontalNeighbour(this.bl), this.br.addVerticalNeighbour(this.tr), this.markers = [this.tl, this.tr, this.bl, this.br], this.center = new f(e + r / 2, n + i / 2, a), this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.keepAspect = o, this.aspectRatio = i / r, this.draw(this.ctx), this.croppedImage = new Image, this.currentlyInteracting = !1, angular.element(window).off("mousemove.angular-img-cropper mouseup.angular-img-cropper touchmove.angular-img-cropper touchend.angular-img-cropper").on("mousemove.angular-img-cropper", this.onMouseMove.bind(this)).on("mouseup.angular-img-cropper", this.onMouseUp.bind(this)).on("touchmove.angular-img-cropper", this.onTouchMove.bind(this)).on("touchend.angular-img-cropper", this.onTouchEnd.bind(this)), angular.element(t).off("mousedown.angular-img-cropper touchstart.angular-img-cropper").on("mousedown.angular-img-cropper", this.onMouseDown.bind(this)).on("touchstart.angular-img-cropper", this.onTouchStart.bind(this))
                    }

                    return e.prototype.resizeCanvas = function (t, e) {
                        this.canvas.width = t, this.canvas.height = e, this.buffer.width = t, this.buffer.height = e, this.draw(this.ctx)
                    }, e.prototype.draw = function (t) {
                        var e = this.getBounds();
                        if (this.srcImage) {
                            t.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                            var n = this.srcImage.height / this.srcImage.width, r = this.canvasHeight / this.canvasWidth, i = this.canvasWidth, o = this.canvasHeight;
                            r > n ? (i = this.canvasWidth, o = this.canvasWidth * n) : (o = this.canvasHeight, i = this.canvasHeight / n), this.ratioW = i / this.srcImage.width, this.ratioH = o / this.srcImage.height, n > r ? this.drawImageIOSFix(t, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - i / 2, 0, i, o) : this.drawImageIOSFix(t, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - o / 2, i, o), this.buffer.getContext("2d").drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight), t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(0, 0, this.canvasWidth, this.canvasHeight), t.drawImage(this.buffer, e.left, e.top, Math.max(e.getWidth(), 1), Math.max(e.getHeight(), 1), e.left, e.top, e.getWidth(), e.getHeight());
                            for (var a, s = 0; s < this.markers.length; s++)a = this.markers[s], a.draw(t);
                            this.center.draw(t), t.lineWidth = 2, t.strokeStyle = "rgba(255,228,0,1)", t.strokeRect(e.left, e.top, e.getWidth(), e.getHeight())
                        } else t.fillStyle = "rgba(192,192,192,1)", t.fillRect(0, 0, this.canvas.width, this.canvas.height)
                    }, e.prototype.dragCrop = function (e, n, r) {
                        var i = this.getBounds(), o = e - i.getWidth() / 2, a = e + i.getWidth() / 2, s = n - i.getHeight() / 2, u = n + i.getHeight() / 2;
                        a >= this.maxXClamp && (e = this.maxXClamp - i.getWidth() / 2), o <= this.minXClamp && (e = i.getWidth() / 2 + this.minXClamp), s < this.minYClamp && (n = i.getHeight() / 2 + this.minYClamp), u >= this.maxYClamp && (n = this.maxYClamp - i.getHeight() / 2), this.tl.moveX(e - i.getWidth() / 2), this.tl.moveY(n - i.getHeight() / 2), this.tr.moveX(e + i.getWidth() / 2), this.tr.moveY(n - i.getHeight() / 2), this.bl.moveX(e - i.getWidth() / 2), this.bl.moveY(n + i.getHeight() / 2), this.br.moveX(e + i.getWidth() / 2), this.br.moveY(n + i.getHeight() / 2), r.setPosition(e, n), t.cropAreaBounds && this.imageSet && (t.cropAreaBounds = this.getCropBounds(), t.$apply())
                    }, e.prototype.enforceMinSize = function (e, n, r) {
                        var i = e - r.getHorizontalNeighbour().getPosition().x, o = n - r.getVerticalNeighbour().getPosition().y, a = t.minWidth - Math.abs(i), s = t.minHeight - Math.abs(o);
                        return 0 == i || 0 == o ? (e = r.getPosition().x, n = r.getPosition().y, l.instance.borrow(e, n)) : (t.keepAspect ? a > 0 && s / this.aspectRatio > 0 ? a > s / this.aspectRatio ? 0 > i ? (e -= a, 0 > o ? n -= a * this.aspectRatio : n += a * this.aspectRatio) : (e += a, 0 > o ? n -= a * this.aspectRatio : n += a * this.aspectRatio) : 0 > o ? (n -= s, 0 > i ? e -= s / this.aspectRatio : e += s / this.aspectRatio) : (n += s, 0 > i ? e -= s / this.aspectRatio : e += s / this.aspectRatio) : a > 0 ? 0 > i ? (e -= a, 0 > o ? n -= a * this.aspectRatio : n += a * this.aspectRatio) : (e += a, 0 > o ? n -= a * this.aspectRatio : n += a * this.aspectRatio) : s > 0 && (0 > o ? (n -= s, 0 > i ? e -= s / this.aspectRatio : e += s / this.aspectRatio) : (n += s, 0 > i ? e -= s / this.aspectRatio : e += s / this.aspectRatio)) : (a > 0 && (0 > i ? e -= a : e += a), s > 0 && (0 > o ? n -= s : n += s)), (e < this.minXClamp || e > this.maxXClamp || n < this.minYClamp || n > this.maxYClamp) && (e = r.getPosition().x, n = r.getPosition().y), l.instance.borrow(e, n))
                    }, e.prototype.dragCorner = function (e, n, r) {
                        var i, o = 0, a = 0, s = 0, u = 0, c = 0, f = 0, h = 0, d = 0, p = 0;
                        if (t.keepAspect) {
                            if (i = r.getHorizontalNeighbour().getVerticalNeighbour(), s = i.getPosition().x, u = i.getPosition().y, e <= i.getPosition().x) {
                                if (n <= i.getPosition().y) {
                                    if (o = s - 100 / this.aspectRatio, a = u - 100 / this.aspectRatio * this.aspectRatio, p = this.getSide(l.instance.borrow(o, a), i.getPosition(), l.instance.borrow(e, n)), p > 0) {
                                        c = Math.abs(i.getPosition().y - n), f = c / this.aspectRatio, h = i.getPosition().y - c, d = i.getPosition().x - f;
                                        var g = this.enforceMinSize(d, h, r);
                                        r.move(g.x, g.y), l.instance.returnPoint(g)
                                    } else if (0 > p) {
                                        f = Math.abs(i.getPosition().x - e), c = f * this.aspectRatio, h = i.getPosition().y - c, d = i.getPosition().x - f;
                                        var g = this.enforceMinSize(d, h, r);
                                        r.move(g.x, g.y), l.instance.returnPoint(g)
                                    }
                                } else if (o = s - 100 / this.aspectRatio, a = u + 100 / this.aspectRatio * this.aspectRatio, p = this.getSide(l.instance.borrow(o, a), i.getPosition(), l.instance.borrow(e, n)), p > 0) {
                                    f = Math.abs(i.getPosition().x - e), c = f * this.aspectRatio, h = i.getPosition().y + c, d = i.getPosition().x - f;
                                    var g = this.enforceMinSize(d, h, r);
                                    r.move(g.x, g.y), l.instance.returnPoint(g)
                                } else if (0 > p) {
                                    c = Math.abs(i.getPosition().y - n), f = c / this.aspectRatio, h = i.getPosition().y + c, d = i.getPosition().x - f;
                                    var g = this.enforceMinSize(d, h, r);
                                    r.move(g.x, g.y), l.instance.returnPoint(g)
                                }
                            } else if (n <= i.getPosition().y) {
                                if (o = s + 100 / this.aspectRatio, a = u - 100 / this.aspectRatio * this.aspectRatio, p = this.getSide(l.instance.borrow(o, a), i.getPosition(), l.instance.borrow(e, n)), 0 > p) {
                                    c = Math.abs(i.getPosition().y - n), f = c / this.aspectRatio, h = i.getPosition().y - c, d = i.getPosition().x + f;
                                    var g = this.enforceMinSize(d, h, r);
                                    r.move(g.x, g.y), l.instance.returnPoint(g)
                                } else if (p > 0) {
                                    f = Math.abs(i.getPosition().x - e), c = f * this.aspectRatio, h = i.getPosition().y - c, d = i.getPosition().x + f;
                                    var g = this.enforceMinSize(d, h, r);
                                    r.move(g.x, g.y), l.instance.returnPoint(g)
                                }
                            } else if (o = s + 100 / this.aspectRatio, a = u + 100 / this.aspectRatio * this.aspectRatio, p = this.getSide(l.instance.borrow(o, a), i.getPosition(), l.instance.borrow(e, n)), 0 > p) {
                                f = Math.abs(i.getPosition().x - e), c = f * this.aspectRatio, h = i.getPosition().y + c, d = i.getPosition().x + f;
                                var g = this.enforceMinSize(d, h, r);
                                r.move(g.x, g.y), l.instance.returnPoint(g)
                            } else if (p > 0) {
                                c = Math.abs(i.getPosition().y - n), f = c / this.aspectRatio, h = i.getPosition().y + c, d = i.getPosition().x + f;
                                var g = this.enforceMinSize(d, h, r);
                                r.move(g.x, g.y), l.instance.returnPoint(g)
                            }
                        } else {
                            var g = this.enforceMinSize(e, n, r);
                            r.move(g.x, g.y), l.instance.returnPoint(g)
                        }
                        this.center.recalculatePosition(this.getBounds()), t.cropAreaBounds && this.imageSet && (t.cropAreaBounds = this.getCropBounds(), t.$apply())
                    }, e.prototype.getSide = function (t, e, n) {
                        var r = this.sign((e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x));
                        return l.instance.returnPoint(t), l.instance.returnPoint(n), r
                    }, e.prototype.sign = function (t) {
                        return +t === t ? 0 === t ? t : t > 0 ? 1 : -1 : NaN
                    }, e.prototype.handleRelease = function (t) {
                        if (null != t) {
                            for (var e = 0, n = 0; n < this.currentDragTouches.length; n++)t.id == this.currentDragTouches[n].id && (this.currentDragTouches[n].dragHandle.setDrag(!1), t.dragHandle = null, e = n);
                            this.currentDragTouches.splice(e, 1), this.draw(this.ctx)
                        }
                    }, e.prototype.handleMove = function (t) {
                        for (var e = !1, r = 0; r < this.currentDragTouches.length; r++)if (t.id == this.currentDragTouches[r].id && null != this.currentDragTouches[r].dragHandle) {
                            var i = this.currentDragTouches[r], o = this.clampPosition(t.x - i.dragHandle.offset.x, t.y - i.dragHandle.offset.y);
                            t.x = o.x, t.y = o.y, l.instance.returnPoint(o), i.dragHandle instanceof h ? this.dragCorner(t.x, t.y, i.dragHandle) : this.dragCrop(t.x, t.y, i.dragHandle), this.currentlyInteracting = !0, e = !0, n.setPressed(this.canvas);
                            break
                        }
                        if (!e) {
                            for (var a = 0; a < this.markers.length; a++) {
                                var s = this.markers[a];
                                if (s.touchInBounds(t.x, t.y)) {
                                    t.dragHandle = s, this.currentDragTouches.push(t), s.setDrag(!0), t.dragHandle.offset.x = t.x - t.dragHandle.getPosition().x, t.dragHandle.offset.y = t.y - t.dragHandle.getPosition().y, this.dragCorner(t.x - t.dragHandle.offset.x, t.y - t.dragHandle.offset.y, t.dragHandle);
                                    break
                                }
                            }
                            null == t.dragHandle && this.center.touchInBounds(t.x, t.y) && (t.dragHandle = this.center, this.currentDragTouches.push(t), t.dragHandle.setDrag(!0), t.dragHandle.offset.x = t.x - t.dragHandle.getPosition().x, t.dragHandle.offset.y = t.y - t.dragHandle.getPosition().y, this.dragCrop(t.x - t.dragHandle.offset.x, t.y - t.dragHandle.offset.y, t.dragHandle))
                        }
                    }, e.prototype.updateClampBounds = function () {
                        var t = this.srcImage.height / this.srcImage.width, e = this.canvas.height / this.canvas.width, n = this.canvas.width, r = this.canvas.height;
                        e > t ? (n = this.canvas.width, r = this.canvas.width * t) : (r = this.canvas.height, n = this.canvas.height / t), this.minXClamp = this.canvas.width / 2 - n / 2, this.minYClamp = this.canvas.height / 2 - r / 2, this.maxXClamp = this.canvas.width / 2 + n / 2, this.maxYClamp = this.canvas.height / 2 + r / 2
                    }, e.prototype.getCropBounds = function () {
                        var t = this.canvas.height - 2 * this.minYClamp, e = this.getBounds();
                        return e.top = Math.round((t - e.top + this.minYClamp) / this.ratioH), e.bottom = Math.round((t - e.bottom + this.minYClamp) / this.ratioH), e.left = Math.round((e.left - this.minXClamp) / this.ratioW), e.right = Math.round((e.right - this.minXClamp) / this.ratioW), e
                    }, e.prototype.clampPosition = function (t, e) {
                        return t < this.minXClamp && (t = this.minXClamp), t > this.maxXClamp && (t = this.maxXClamp), e < this.minYClamp && (e = this.minYClamp), e > this.maxYClamp && (e = this.maxYClamp), l.instance.borrow(t, e)
                    }, e.prototype.isImageSet = function () {
                        return this.imageSet
                    }, e.prototype.setImage = function (e) {
                        if (!e)throw"Image is null";
                        this.imageSet = !0, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        var n = this.buffer.getContext("2d");
                        n.clearRect(0, 0, this.buffer.width, this.buffer.height);
                        var i = e.src.split("."), o = i[1];
                        ("png" == o || "jpg" == o) && (this.fileType = o), this.srcImage = e, this.updateClampBounds();
                        var a = this.srcImage.height / this.srcImage.width, s = this.getBounds(), u = s.getHeight() / s.getWidth(), c = this.canvas.width, f = this.canvas.height;
                        this.canvasWidth = c, this.canvasHeight = f;
                        var h = this.canvas.width / 2, p = this.canvas.height / 2, g = l.instance.borrow(h - s.getWidth() / 2, p + s.getHeight() / 2), m = l.instance.borrow(h + s.getWidth() / 2, p + s.getHeight() / 2), v = l.instance.borrow(h - s.getWidth() / 2, p - s.getHeight() / 2), y = l.instance.borrow(h + s.getWidth() / 2, p - s.getHeight() / 2);
                        if (this.tl.setPosition(g.x, g.y), this.tr.setPosition(m.x, m.y), this.bl.setPosition(v.x, v.y), this.br.setPosition(y.x, y.y), l.instance.returnPoint(g), l.instance.returnPoint(m), l.instance.returnPoint(v), l.instance.returnPoint(y), this.center.setPosition(h, p), u > a) {
                            var $ = Math.min(c * a, f), w = $ / u;
                            g = l.instance.borrow(h - w / 2, p + $ / 2), m = l.instance.borrow(h + w / 2, p + $ / 2), v = l.instance.borrow(h - w / 2, p - $ / 2), y = l.instance.borrow(h + w / 2, p - $ / 2)
                        } else if (a > u) {
                            var b = Math.min(f / a, c), x = b * u;
                            g = l.instance.borrow(h - b / 2, p + x / 2), m = l.instance.borrow(h + b / 2, p + x / 2), v = l.instance.borrow(h - b / 2, p - x / 2), y = l.instance.borrow(h + b / 2, p - x / 2)
                        } else {
                            var b = Math.min(f, c), x = b * u;
                            g = l.instance.borrow(h - b / 2, p + x / 2), m = l.instance.borrow(h + b / 2, p + x / 2), v = l.instance.borrow(h - b / 2, p - x / 2), y = l.instance.borrow(h + b / 2, p - x / 2)
                        }
                        if (this.tl.setPosition(g.x, g.y), this.tr.setPosition(m.x, m.y), this.bl.setPosition(v.x, v.y), this.br.setPosition(y.x, y.y), l.instance.returnPoint(g), l.instance.returnPoint(m), l.instance.returnPoint(v), l.instance.returnPoint(y), t.cropAreaBounds && void 0 !== t.cropAreaBounds.left && void 0 !== t.cropAreaBounds.top && void 0 !== t.cropAreaBounds.right && void 0 !== t.cropAreaBounds.bottom) {
                            var _ = this.canvasHeight / this.canvasWidth;
                            _ > a ? (c = this.canvasWidth, f = this.canvasWidth * a) : (f = this.canvasHeight, c = this.canvasHeight / a), this.ratioW = c / this.srcImage.width, this.ratioH = f / this.srcImage.height;
                            var k = new d;
                            k.top = Math.round(f + this.minYClamp - this.ratioH * t.cropAreaBounds.top), k.bottom = Math.round(f + this.minYClamp - this.ratioH * t.cropAreaBounds.bottom), k.left = Math.round(this.ratioW * t.cropAreaBounds.left + this.minXClamp), k.right = Math.round(this.ratioW * t.cropAreaBounds.right + this.minXClamp), this.tl.setPosition(k.left, k.top), this.tr.setPosition(k.right, k.top), this.bl.setPosition(k.left, k.bottom), this.br.setPosition(k.right, k.bottom), this.center.setPosition(k.left + k.getWidth() / 2, k.top + k.getHeight() / 2)
                        }
                        this.vertSquashRatio = this.detectVerticalSquash(this.srcImage), this.draw(this.ctx);
                        var S = this.getCroppedImage(t.cropWidth, t.cropHeight);
                        void 0 !== r.croppedImage && (t.croppedImage = S.src), t.cropAreaBounds && this.imageSet && (t.cropAreaBounds = this.getCropBounds())
                    }, e.prototype.getCroppedImage = function (t, e) {
                        var n = this.getBounds();
                        if (!this.srcImage)throw"Source image not set.";
                        if (t && e) {
                            var r = this.srcImage.height / this.srcImage.width, i = this.canvas.height / this.canvas.width, o = this.canvas.width, a = this.canvas.height;
                            i > r ? (o = this.canvas.width, a = this.canvas.width * r) : r > i ? (a = this.canvas.height, o = this.canvas.height / r) : (a = this.canvas.height, o = this.canvas.width), this.ratioW = o / this.srcImage.width, this.ratioH = a / this.srcImage.height, this.cropCanvas.width = t, this.cropCanvas.height = e;
                            var s = (this.buffer.height - a) / 2 / this.ratioH, u = (this.buffer.width - o) / 2 / this.ratioW;
                            this.drawImageIOSFix(this.cropCanvas.getContext("2d"), this.srcImage, Math.max(Math.round(n.left / this.ratioW - u), 0), Math.max(Math.round(n.top / this.ratioH - s), 0), Math.max(Math.round(n.getWidth() / this.ratioW), 1), Math.max(Math.round(n.getHeight() / this.ratioH), 1), 0, 0, t, e), this.croppedImage.width = t, this.croppedImage.height = e
                        } else this.cropCanvas.width = Math.max(n.getWidth(), 1), this.cropCanvas.height = Math.max(n.getHeight(), 1), this.cropCanvas.getContext("2d").drawImage(this.buffer, n.left, n.top, Math.max(n.getWidth(), 1), Math.max(n.getHeight(), 1), 0, 0, n.getWidth(), n.getHeight()), this.croppedImage.width = this.cropCanvas.width, this.croppedImage.height = this.cropCanvas.height;
                        return this.croppedImage.src = this.cropCanvas.toDataURL("image/" + this.fileType), this.croppedImage
                    }, e.prototype.getBounds = function () {
                        for (var t = Number.MAX_VALUE, e = Number.MAX_VALUE, n = -Number.MAX_VALUE, r = -Number.MAX_VALUE, i = 0; i < this.markers.length; i++) {
                            var o = this.markers[i];
                            o.getPosition().x < t && (t = o.getPosition().x), o.getPosition().x > n && (n = o.getPosition().x), o.getPosition().y < e && (e = o.getPosition().y), o.getPosition().y > r && (r = o.getPosition().y)
                        }
                        var a = new d;
                        return a.left = t, a.right = n, a.top = e, a.bottom = r, a
                    }, e.prototype.setBounds = function (t) {
                        for (var e, n, r, i, o = this.getBounds(), a = 0; a < this.markers.length; a++) {
                            var s = this.markers[a];
                            s.getPosition().x == o.left ? s.getPosition().y == o.top ? e = s : r = s : s.getPosition().y == o.top ? n = s : i = s
                        }
                        e.setPosition(t.left, t.top), n.setPosition(t.right, t.top), r.setPosition(t.left, t.bottom), i.setPosition(t.right, t.bottom), this.center.recalculatePosition(t), this.center.draw(this.ctx)
                    }, e.prototype.getMousePos = function (t, e) {
                        var n = t.getBoundingClientRect();
                        return l.instance.borrow(e.clientX - n.left, e.clientY - n.top)
                    }, e.prototype.getTouchPos = function (t, e) {
                        var n = t.getBoundingClientRect();
                        return l.instance.borrow(e.clientX - n.left, e.clientY - n.top)
                    }, e.prototype.onTouchMove = function (t) {
                        if (a.isImageSet()) {
                            if (t.preventDefault(), t.touches.length >= 1)for (var e = 0; e < t.touches.length; e++) {
                                var n = t.touches[e], r = this.getTouchPos(this.canvas, n), i = new g(r.x, r.y, n.identifier);
                                l.instance.returnPoint(r), this.move(i, t)
                            }
                            this.draw(this.ctx)
                        }
                    }, e.prototype.onMouseMove = function (t) {
                        if (a.isImageSet()) {
                            var e = this.getMousePos(this.canvas, t);
                            this.move(new g(e.x, e.y, 0), t);
                            var n = this.getDragTouchForID(0);
                            n ? (n.x = e.x, n.y = e.y) : n = new g(e.x, e.y, 0), l.instance.returnPoint(e), this.drawCursors(n, t), this.draw(this.ctx)
                        }
                    }, e.prototype.move = function (t, e) {
                        this.isMouseDown && this.handleMove(t)
                    }, e.prototype.getDragTouchForID = function (t) {
                        for (var e = 0; e < this.currentDragTouches.length; e++)if (t == this.currentDragTouches[e].id)return this.currentDragTouches[e]
                    }, e.prototype.drawCursors = function (t, e) {
                        var r = !1;
                        null != t && (t.dragHandle == this.center && (n.setStyle(this.canvas, "move"), r = !0), null != t.dragHandle && t.dragHandle instanceof h && (this.drawCornerCursor(t.dragHandle, t.dragHandle.getPosition().x, t.dragHandle.getPosition().y, e), r = !0));
                        var i = !1;
                        if (!r) {
                            for (var o = 0; o < this.markers.length; o++)i = i || this.drawCornerCursor(this.markers[o], t.x, t.y, e);
                            i || n.setStyle(this.canvas, "initial")
                        }
                        i || r || !this.center.touchInBounds(t.x, t.y) ? this.center.setOver(!1) : (this.center.setOver(!0), n.setOver(this.canvas), n.setStyle(this.canvas, "move"))
                    }, e.prototype.drawCornerCursor = function (t, e, r, i) {
                        return t.touchInBounds(e, r) ? (t.setOver(!0), t.getHorizontalNeighbour().getPosition().x > t.getPosition().x ? t.getVerticalNeighbour().getPosition().y > t.getPosition().y ? (n.setOver(this.canvas), n.setStyle(this.canvas, "nwse-resize")) : (n.setOver(this.canvas), n.setStyle(this.canvas, "nesw-resize")) : t.getVerticalNeighbour().getPosition().y > t.getPosition().y ? (n.setOver(this.canvas), n.setStyle(this.canvas, "nesw-resize")) : (n.setOver(this.canvas), n.setStyle(this.canvas, "nwse-resize")), !0) : (t.setOver(!1), !1)
                    }, e.prototype.onTouchStart = function (t) {
                        a.isImageSet() && (this.isMouseDown = !0)
                    }, e.prototype.onTouchEnd = function (e) {
                        if (a.isImageSet()) {
                            for (var n = 0; n < e.changedTouches.length; n++) {
                                var i = e.changedTouches[n], o = this.getDragTouchForID(i.identifier);
                                null != o && ((o.dragHandle instanceof h || o.dragHandle instanceof f) && o.dragHandle.setOver(!1), this.handleRelease(o))
                            }
                            if (a.isImageSet() && this.currentlyInteracting) {
                                var s = this.getCroppedImage(t.cropWidth, t.cropHeight);
                                void 0 !== r.croppedImage && (t.croppedImage = s.src), t.$apply()
                            }
                            0 == this.currentDragTouches.length && (this.isMouseDown = !1, this.currentlyInteracting = !1)
                        }
                    }, e.prototype.drawImageIOSFix = function (t, e, n, r, i, o, a, s, u, l) {
                        t.drawImage(e, n * this.vertSquashRatio, r * this.vertSquashRatio, i * this.vertSquashRatio, o * this.vertSquashRatio, a, s, u, l)
                    }, e.prototype.detectVerticalSquash = function (t) {
                        var e = (t.naturalWidth, t.naturalHeight), n = document.createElement("canvas");
                        n.width = 1, n.height = e;
                        var r = n.getContext("2d");
                        r.drawImage(t, 0, 0);
                        for (var i = r.getImageData(0, 0, 1, e).data, o = 0, a = e, s = e; s > o;) {
                            var u = i[4 * (s - 1) + 3];
                            0 === u ? a = s : o = s, s = a + o >> 1
                        }
                        var l = s / e;
                        return 0 === l ? 1 : l
                    }, e.prototype.onMouseDown = function (t) {
                        a.isImageSet() && (this.isMouseDown = !0)
                    }, e.prototype.onMouseUp = function (e) {
                        if (a.isImageSet()) {
                            if (n.setReleased(this.canvas), this.isMouseDown = !1, this.handleRelease(new g(0, 0, 0)), 1 == this.currentlyInteracting) {
                                var i = this.getCroppedImage(t.cropWidth, t.cropHeight);
                                void 0 !== r.croppedImage && (t.croppedImage = i.src), t.$apply()
                            }
                            this.currentlyInteracting = !1
                        }
                    }, e
                }();
                t.$watch("cropWidth", i), t.$watch("cropHeight", i), t.$watch("keepAspect", i), t.$watch("touchRadius", i), t.$watch("image", o)
            }
        }
    }]), angular.module("angular-img-cropper").directive("imgCropperFileread", ["$timeout", function (t) {
        return {
            scope: {image: "="}, link: function (e, n) {
                n.bind("change", function (n) {
                    var r = new FileReader;
                    r.onload = function (n) {
                        t(function () {
                            e.image = n.target.result
                        }, 0)
                    }, n.target.files[0] && r.readAsDataURL(n.target.files[0])
                })
            }
        }
    }]), angular.module("angular-img-cropper").directive("imgCropperFilereadCall", function () {
        return {
            scope: {control: "="}, link: function (t) {
                t.internalControl = t.control || {}, t.internalControl.load = function (t) {
                    var e = angular.element(document.querySelector(t)), n = document.createEvent("MouseEvent");
                    n.initEvent("click", !0, !1), e[0].dispatchEvent(n)
                }
            }
        }
    }), angular.module("angular-img-cropper").factory("imageCropperDataShare", function () {
        var t, e, n = {};
        return n.setPressed = function (e) {
            t = e
        }, n.setReleased = function (e) {
            e === t && (t = void 0)
        }, n.setOver = function (t) {
            e = t
        }, n.setStyle = function (n, r) {
            void 0 !== t ? t === n && angular.element(document.documentElement).css("cursor", r) : n === e && angular.element(document.documentElement).css("cursor", r)
        }, n
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }

    var n = function (e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
            r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = t(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function () {
            var r = t(this), i = e(r), o = {relatedTarget: this};
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function r(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
        })
    }

    var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.6", a.prototype.toggle = function (r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = e(i), a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = {relatedTarget: this};
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented())return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = t(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = e(r), a = i.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which)return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a", u = i.find(".dropdown-menu" + s);
                if (u.length) {
                    var l = u.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
}(jQuery), +function (t) {
    "use strict";
    function e(e, r) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.modal"), a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var r = this, i = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var i = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            i ? r.$dialog.one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                r.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = t(this), i = r.attr("href"), o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin", u = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !r)return;
            var i = this, o = this.tip(), a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, u = /\s?auto?\s?/i, l = u.test(s);
            l && (s = s.replace(u, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), f = o[0].offsetWidth, h = o[0].offsetHeight;
            if (l) {
                var d = s, p = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + h > p.bottom ? "top" : "top" == s && c.top - h < p.top ? "bottom" : "right" == s && c.right + f > p.width ? "left" : "left" == s && c.left - f < p.left ? "right" : s, o.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, f, h);
            this.applyPlacement(g, s);
            var m = function () {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
            using: function (t) {
                r.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), r.addClass("in");
        var u = r[0].offsetWidth, l = r[0].offsetHeight;
        "top" == n && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n), h = f ? 2 * c.left - i + u : 2 * c.top - o + l, d = f ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(h, r[0][d], f)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function r() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }

        var i = this, o = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
        var o = r ? {
            top: 0,
            left: 0
        } : e.offset(), a = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, s = r ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, i, a, s, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - r / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
        var i = {top: 0, left: 0};
        if (!this.$viewport)return i;
        var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll, u = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
        } else {
            var l = e.left - o, c = e.left + o + n;
            l < a.left ? i.left = a.left - l : c > a.right && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = r, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = r, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this), i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: i[0]});
            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                    i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }

        var a = r.find("> .active"), s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = r, this
    };
    var i = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, r = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var i = function () {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";
    function t() {
        return ar.apply(null, arguments)
    }

    function e(t) {
        ar = t
    }

    function n(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function r(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function i(t, e) {
        var n, r = [];
        for (n = 0; n < t.length; ++n)r.push(e(t[n], n));
        return r
    }

    function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function a(t, e) {
        for (var n in e)o(e, n) && (t[n] = e[n]);
        return o(e, "toString") && (t.toString = e.toString), o(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function s(t, e, n, r) {
        return It(t, e, n, r, !0).utc()
    }

    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function l(t) {
        return null == t._pf && (t._pf = u()), t._pf
    }

    function c(t) {
        if (null == t._isValid) {
            var e = l(t), n = sr.call(e.parsedDateParts, function (t) {
                return null != t
            });
            t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
        }
        return t._isValid
    }

    function f(t) {
        var e = s(NaN);
        return null != t ? a(l(e), t) : l(e).userInvalidated = !0, e
    }

    function h(t) {
        return void 0 === t
    }

    function d(t, e) {
        var n, r, i;
        if (h(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), h(e._i) || (t._i = e._i), h(e._f) || (t._f = e._f), h(e._l) || (t._l = e._l), h(e._strict) || (t._strict = e._strict), h(e._tzm) || (t._tzm = e._tzm), h(e._isUTC) || (t._isUTC = e._isUTC), h(e._offset) || (t._offset = e._offset), h(e._pf) || (t._pf = l(e)), h(e._locale) || (t._locale = e._locale), ur.length > 0)for (n in ur)r = ur[n], i = e[r], h(i) || (t[r] = i);
        return t
    }

    function p(e) {
        d(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), lr === !1 && (lr = !0, t.updateOffset(this), lr = !1)
    }

    function g(t) {
        return t instanceof p || null != t && null != t._isAMomentObject
    }

    function m(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function v(t) {
        var e = +t, n = 0;
        return 0 !== e && isFinite(e) && (n = m(e)), n
    }

    function y(t, e, n) {
        var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), a = 0;
        for (r = 0; i > r; r++)(n && t[r] !== e[r] || !n && v(t[r]) !== v(e[r])) && a++;
        return a + o
    }

    function $(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function w(e, n) {
        var r = !0;
        return a(function () {
            return null != t.deprecationHandler && t.deprecationHandler(null, e), r && ($(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), n.apply(this, arguments)
        }, n)
    }

    function b(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), cr[e] || ($(n), cr[e] = !0)
    }

    function x(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function _(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function k(t) {
        var e, n;
        for (n in t)e = t[n], x(e) ? this[n] = e : this["_" + n] = e;
        this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function S(t, e) {
        var n, r = a({}, t);
        for (n in e)o(e, n) && (_(t[n]) && _(e[n]) ? (r[n] = {}, a(r[n], t[n]), a(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
        return r
    }

    function C(t) {
        null != t && this.set(t)
    }

    function D(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function T(t) {
        for (var e, n, r, i, o = 0; o < t.length;) {
            for (i = D(t[o]).split("-"), e = i.length, n = D(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (r = A(i.slice(0, e).join("-")))return r;
                if (n && n.length >= e && y(i, n, !0) >= e - 1)break;
                e--
            }
            o++
        }
        return null
    }

    function A(t) {
        var e = null;
        if (!pr[t] && "undefined" != typeof module && module && module.exports)try {
            e = hr._abbr, require("./locale/" + t), E(e)
        } catch (n) {
        }
        return pr[t]
    }

    function E(t, e) {
        var n;
        return t && (n = h(e) ? P(t) : M(t, e), n && (hr = n)), hr._abbr
    }

    function M(t, e) {
        return null !== e ? (e.abbr = t, null != pr[t] ? (b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = S(pr[t]._config, e)) : null != e.parentLocale && (null != pr[e.parentLocale] ? e = S(pr[e.parentLocale]._config, e) : b("parentLocaleUndefined", "specified parentLocale is not defined yet")), pr[t] = new C(e), E(t), pr[t]) : (delete pr[t], null)
    }

    function O(t, e) {
        if (null != e) {
            var n;
            null != pr[t] && (e = S(pr[t]._config, e)), n = new C(e), n.parentLocale = pr[t], pr[t] = n, E(t)
        } else null != pr[t] && (null != pr[t].parentLocale ? pr[t] = pr[t].parentLocale : null != pr[t] && delete pr[t]);
        return pr[t]
    }

    function P(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return hr;
        if (!n(t)) {
            if (e = A(t))return e;
            t = [t]
        }
        return T(t)
    }

    function j() {
        return fr(pr)
    }

    function I(t, e) {
        var n = t.toLowerCase();
        gr[n] = gr[n + "s"] = gr[e] = t
    }

    function R(t) {
        return "string" == typeof t ? gr[t] || gr[t.toLowerCase()] : void 0
    }

    function N(t) {
        var e, n, r = {};
        for (n in t)o(t, n) && (e = R(n), e && (r[e] = t[n]));
        return r
    }

    function U(e, n) {
        return function (r) {
            return null != r ? (H(this, e, r), t.updateOffset(this, n), this) : F(this, e)
        }
    }

    function F(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function H(t, e, n) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function L(t, e) {
        var n;
        if ("object" == typeof t)for (n in t)this.set(n, t[n]); else if (t = R(t), x(this[t]))return this[t](e);
        return this
    }

    function q(t, e, n) {
        var r = "" + Math.abs(t), i = e - r.length, o = t >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
    }

    function V(t, e, n, r) {
        var i = r;
        "string" == typeof r && (i = function () {
            return this[r]()
        }), t && ($r[t] = i), e && ($r[e[0]] = function () {
            return q(i.apply(this, arguments), e[1], e[2])
        }), n && ($r[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), t)
        })
    }

    function W(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function B(t) {
        var e, n, r = t.match(mr);
        for (e = 0, n = r.length; n > e; e++)$r[r[e]] ? r[e] = $r[r[e]] : r[e] = W(r[e]);
        return function (e) {
            var i, o = "";
            for (i = 0; n > i; i++)o += r[i] instanceof Function ? r[i].call(e, t) : r[i];
            return o
        }
    }

    function z(t, e) {
        return t.isValid() ? (e = Y(e, t.localeData()), yr[e] = yr[e] || B(e), yr[e](t)) : t.localeData().invalidDate()
    }

    function Y(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }

        var r = 5;
        for (vr.lastIndex = 0; r >= 0 && vr.test(t);)t = t.replace(vr, n), vr.lastIndex = 0, r -= 1;
        return t
    }

    function G(t, e, n) {
        Nr[t] = x(e) ? e : function (t, r) {
            return t && n ? n : e
        }
    }

    function X(t, e) {
        return o(Nr, t) ? Nr[t](e._strict, e._locale) : new RegExp(Z(t))
    }

    function Z(t) {
        return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, r, i) {
            return e || n || r || i
        }))
    }

    function K(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function J(t, e) {
        var n, r = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (r = function (t, n) {
            n[e] = v(t)
        }), n = 0; n < t.length; n++)Ur[t[n]] = r
    }

    function Q(t, e) {
        J(t, function (t, n, r, i) {
            r._w = r._w || {}, e(t, r._w, r, i)
        })
    }

    function tt(t, e, n) {
        null != e && o(Ur, t) && Ur[t](e, n._a, n, t)
    }

    function et(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function nt(t, e) {
        return n(this._months) ? this._months[t.month()] : this._months[Gr.test(e) ? "format" : "standalone"][t.month()]
    }

    function rt(t, e) {
        return n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Gr.test(e) ? "format" : "standalone"][t.month()]
    }

    function it(t, e, n) {
        var r, i, o, a = t.toLocaleLowerCase();
        if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; 12 > r; ++r)o = s([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === e ? (i = dr.call(this._shortMonthsParse, a), -1 !== i ? i : null) : (i = dr.call(this._longMonthsParse, a), -1 !== i ? i : null) : "MMM" === e ? (i = dr.call(this._shortMonthsParse, a), -1 !== i ? i : (i = dr.call(this._longMonthsParse, a), -1 !== i ? i : null)) : (i = dr.call(this._longMonthsParse, a), -1 !== i ? i : (i = dr.call(this._shortMonthsParse, a), -1 !== i ? i : null))
    }

    function ot(t, e, n) {
        var r, i, o;
        if (this._monthsParseExact)return it.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
            if (i = s([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t))return r;
            if (n && "MMM" === e && this._shortMonthsParse[r].test(t))return r;
            if (!n && this._monthsParse[r].test(t))return r
        }
    }

    function at(t, e) {
        var n;
        if (!t.isValid())return t;
        if ("string" == typeof e)if (/^\d+$/.test(e))e = v(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
        return n = Math.min(t.date(), et(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function st(e) {
        return null != e ? (at(this, e), t.updateOffset(this, !0), this) : F(this, "Month")
    }

    function ut() {
        return et(this.year(), this.month())
    }

    function lt(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ct(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex
    }

    function ft() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, n, r = [], i = [], o = [];
        for (e = 0; 12 > e; e++)n = s([2e3, e]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
        for (r.sort(t), i.sort(t), o.sort(t), e = 0; 12 > e; e++)r[e] = K(r[e]), i[e] = K(i[e]), o[e] = K(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function ht(t) {
        var e, n = t._a;
        return n && -2 === l(t).overflow && (e = n[Hr] < 0 || n[Hr] > 11 ? Hr : n[Lr] < 1 || n[Lr] > et(n[Fr], n[Hr]) ? Lr : n[qr] < 0 || n[qr] > 24 || 24 === n[qr] && (0 !== n[Vr] || 0 !== n[Wr] || 0 !== n[Br]) ? qr : n[Vr] < 0 || n[Vr] > 59 ? Vr : n[Wr] < 0 || n[Wr] > 59 ? Wr : n[Br] < 0 || n[Br] > 999 ? Br : -1, l(t)._overflowDayOfYear && (Fr > e || e > Lr) && (e = Lr), l(t)._overflowWeeks && -1 === e && (e = zr), l(t)._overflowWeekday && -1 === e && (e = Yr), l(t).overflow = e), t
    }

    function dt(t) {
        var e, n, r, i, o, a, s = t._i, u = Qr.exec(s) || ti.exec(s);
        if (u) {
            for (l(t).iso = !0, e = 0, n = ni.length; n > e; e++)if (ni[e][1].exec(u[1])) {
                i = ni[e][0], r = ni[e][2] !== !1;
                break
            }
            if (null == i)return void(t._isValid = !1);
            if (u[3]) {
                for (e = 0, n = ri.length; n > e; e++)if (ri[e][1].exec(u[3])) {
                    o = (u[2] || " ") + ri[e][0];
                    break
                }
                if (null == o)return void(t._isValid = !1)
            }
            if (!r && null != o)return void(t._isValid = !1);
            if (u[4]) {
                if (!ei.exec(u[4]))return void(t._isValid = !1);
                a = "Z"
            }
            t._f = i + (o || "") + (a || ""), Tt(t)
        } else t._isValid = !1
    }

    function pt(e) {
        var n = ii.exec(e._i);
        return null !== n ? void(e._d = new Date(+n[1])) : (dt(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function gt(t, e, n, r, i, o, a) {
        var s = new Date(t, e, n, r, i, o, a);
        return 100 > t && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
    }

    function mt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function vt(t) {
        return yt(t) ? 366 : 365
    }

    function yt(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function $t() {
        return yt(this.year())
    }

    function wt(t, e, n) {
        var r = 7 + e - n, i = (7 + mt(t, 0, r).getUTCDay() - e) % 7;
        return -i + r - 1
    }

    function bt(t, e, n, r, i) {
        var o, a, s = (7 + n - r) % 7, u = wt(t, r, i), l = 1 + 7 * (e - 1) + s + u;
        return 0 >= l ? (o = t - 1, a = vt(o) + l) : l > vt(t) ? (o = t + 1, a = l - vt(t)) : (o = t, a = l), {
            year: o,
            dayOfYear: a
        }
    }

    function xt(t, e, n) {
        var r, i, o = wt(t.year(), e, n), a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return 1 > a ? (i = t.year() - 1, r = a + _t(i, e, n)) : a > _t(t.year(), e, n) ? (r = a - _t(t.year(), e, n), i = t.year() + 1) : (i = t.year(), r = a), {
            week: r,
            year: i
        }
    }

    function _t(t, e, n) {
        var r = wt(t, e, n), i = wt(t + 1, e, n);
        return (vt(t) - r + i) / 7
    }

    function kt(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function St(e) {
        var n = new Date(t.now());
        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }

    function Ct(t) {
        var e, n, r, i, o = [];
        if (!t._d) {
            for (r = St(t), t._w && null == t._a[Lr] && null == t._a[Hr] && Dt(t), t._dayOfYear && (i = kt(t._a[Fr], r[Fr]), t._dayOfYear > vt(i) && (l(t)._overflowDayOfYear = !0), n = mt(i, 0, t._dayOfYear), t._a[Hr] = n.getUTCMonth(), t._a[Lr] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e)t._a[e] = o[e] = r[e];
            for (; 7 > e; e++)t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[qr] && 0 === t._a[Vr] && 0 === t._a[Wr] && 0 === t._a[Br] && (t._nextDay = !0, t._a[qr] = 0), t._d = (t._useUTC ? mt : gt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[qr] = 24)
        }
    }

    function Dt(t) {
        var e, n, r, i, o, a, s, u;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, a = 4, n = kt(e.GG, t._a[Fr], xt(Rt(), 1, 4).year), r = kt(e.W, 1), i = kt(e.E, 1), (1 > i || i > 7) && (u = !0)) : (o = t._locale._week.dow, a = t._locale._week.doy, n = kt(e.gg, t._a[Fr], xt(Rt(), o, a).year), r = kt(e.w, 1), null != e.d ? (i = e.d, (0 > i || i > 6) && (u = !0)) : null != e.e ? (i = e.e + o, (e.e < 0 || e.e > 6) && (u = !0)) : i = o), 1 > r || r > _t(n, o, a) ? l(t)._overflowWeeks = !0 : null != u ? l(t)._overflowWeekday = !0 : (s = bt(n, r, i, o, a),
            t._a[Fr] = s.year, t._dayOfYear = s.dayOfYear)
    }

    function Tt(e) {
        if (e._f === t.ISO_8601)return void dt(e);
        e._a = [], l(e).empty = !0;
        var n, r, i, o, a, s = "" + e._i, u = s.length, c = 0;
        for (i = Y(e._f, e._locale).match(mr) || [], n = 0; n < i.length; n++)o = i[n], r = (s.match(X(o, e)) || [])[0], r && (a = s.substr(0, s.indexOf(r)), a.length > 0 && l(e).unusedInput.push(a), s = s.slice(s.indexOf(r) + r.length), c += r.length), $r[o] ? (r ? l(e).empty = !1 : l(e).unusedTokens.push(o), tt(o, r, e)) : e._strict && !r && l(e).unusedTokens.push(o);
        l(e).charsLeftOver = u - c, s.length > 0 && l(e).unusedInput.push(s), l(e).bigHour === !0 && e._a[qr] <= 12 && e._a[qr] > 0 && (l(e).bigHour = void 0), l(e).parsedDateParts = e._a.slice(0), l(e).meridiem = e._meridiem, e._a[qr] = At(e._locale, e._a[qr], e._meridiem), Ct(e), ht(e)
    }

    function At(t, e, n) {
        var r;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n), r && 12 > e && (e += 12), r || 12 !== e || (e = 0), e) : e
    }

    function Et(t) {
        var e, n, r, i, o;
        if (0 === t._f.length)return l(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (i = 0; i < t._f.length; i++)o = 0, e = d({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], Tt(e), c(e) && (o += l(e).charsLeftOver, o += 10 * l(e).unusedTokens.length, l(e).score = o, (null == r || r > o) && (r = o, n = e));
        a(t, n || e)
    }

    function Mt(t) {
        if (!t._d) {
            var e = N(t._i);
            t._a = i([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10)
            }), Ct(t)
        }
    }

    function Ot(t) {
        var e = new p(ht(Pt(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function Pt(t) {
        var e = t._i, i = t._f;
        return t._locale = t._locale || P(t._l), null === e || void 0 === i && "" === e ? f({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), g(e) ? new p(ht(e)) : (n(i) ? Et(t) : i ? Tt(t) : r(e) ? t._d = e : jt(t), c(t) || (t._d = null), t))
    }

    function jt(e) {
        var o = e._i;
        void 0 === o ? e._d = new Date(t.now()) : r(o) ? e._d = new Date(o.valueOf()) : "string" == typeof o ? pt(e) : n(o) ? (e._a = i(o.slice(0), function (t) {
            return parseInt(t, 10)
        }), Ct(e)) : "object" == typeof o ? Mt(e) : "number" == typeof o ? e._d = new Date(o) : t.createFromInputFallback(e)
    }

    function It(t, e, n, r, i) {
        var o = {};
        return "boolean" == typeof n && (r = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = n, o._i = t, o._f = e, o._strict = r, Ot(o)
    }

    function Rt(t, e, n, r) {
        return It(t, e, n, r, !1)
    }

    function Nt(t, e) {
        var r, i;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length)return Rt();
        for (r = e[0], i = 1; i < e.length; ++i)(!e[i].isValid() || e[i][t](r)) && (r = e[i]);
        return r
    }

    function Ut() {
        var t = [].slice.call(arguments, 0);
        return Nt("isBefore", t)
    }

    function Ft() {
        var t = [].slice.call(arguments, 0);
        return Nt("isAfter", t)
    }

    function Ht(t) {
        var e = N(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || 0, a = e.day || 0, s = e.hour || 0, u = e.minute || 0, l = e.second || 0, c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = P(), this._bubble()
    }

    function Lt(t) {
        return t instanceof Ht
    }

    function qt(t, e) {
        V(t, 0, 0, function () {
            var t = this.utcOffset(), n = "+";
            return 0 > t && (t = -t, n = "-"), n + q(~~(t / 60), 2) + e + q(~~t % 60, 2)
        })
    }

    function Vt(t, e) {
        var n = (e || "").match(t) || [], r = n[n.length - 1] || [], i = (r + "").match(li) || ["-", 0, 0], o = +(60 * i[1]) + v(i[2]);
        return "+" === i[0] ? o : -o
    }

    function Wt(e, n) {
        var i, o;
        return n._isUTC ? (i = n.clone(), o = (g(e) || r(e) ? e.valueOf() : Rt(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), t.updateOffset(i, !1), i) : Rt(e).local()
    }

    function Bt(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function zt(e, n) {
        var r, i = this._offset || 0;
        return this.isValid() ? null != e ? ("string" == typeof e ? e = Vt(jr, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (r = Bt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? le(this, re(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Bt(this) : null != e ? this : NaN
    }

    function Yt(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function Gt(t) {
        return this.utcOffset(0, t)
    }

    function Xt(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Bt(this), "m")), this
    }

    function Zt() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Vt(Pr, this._i)), this
    }

    function Kt(t) {
        return this.isValid() ? (t = t ? Rt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
    }

    function Jt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Qt() {
        if (!h(this._isDSTShifted))return this._isDSTShifted;
        var t = {};
        if (d(t, this), t = Pt(t), t._a) {
            var e = t._isUTC ? s(t._a) : Rt(t._a);
            this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function te() {
        return this.isValid() ? !this._isUTC : !1
    }

    function ee() {
        return this.isValid() ? this._isUTC : !1
    }

    function ne() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function re(t, e) {
        var n, r, i, a = t, s = null;
        return Lt(t) ? a = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (s = ci.exec(t)) ? (n = "-" === s[1] ? -1 : 1, a = {
            y: 0,
            d: v(s[Lr]) * n,
            h: v(s[qr]) * n,
            m: v(s[Vr]) * n,
            s: v(s[Wr]) * n,
            ms: v(s[Br]) * n
        }) : (s = fi.exec(t)) ? (n = "-" === s[1] ? -1 : 1, a = {
            y: ie(s[2], n),
            M: ie(s[3], n),
            w: ie(s[4], n),
            d: ie(s[5], n),
            h: ie(s[6], n),
            m: ie(s[7], n),
            s: ie(s[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (i = ae(Rt(a.from), Rt(a.to)), a = {}, a.ms = i.milliseconds, a.M = i.months), r = new Ht(a), Lt(t) && o(t, "_locale") && (r._locale = t._locale), r
    }

    function ie(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function oe(t, e) {
        var n = {milliseconds: 0, months: 0};
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function ae(t, e) {
        var n;
        return t.isValid() && e.isValid() ? (e = Wt(e, t), t.isBefore(e) ? n = oe(t, e) : (n = oe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }

    function se(t) {
        return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function ue(t, e) {
        return function (n, r) {
            var i, o;
            return null === r || isNaN(+r) || (b(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = r, r = o), n = "string" == typeof n ? +n : n, i = re(n, r), le(this, i, t), this
        }
    }

    function le(e, n, r, i) {
        var o = n._milliseconds, a = se(n._days), s = se(n._months);
        e.isValid() && (i = null == i ? !0 : i, o && e._d.setTime(e._d.valueOf() + o * r), a && H(e, "Date", F(e, "Date") + a * r), s && at(e, F(e, "Month") + s * r), i && t.updateOffset(e, a || s))
    }

    function ce(t, e) {
        var n = t || Rt(), r = Wt(n, this).startOf("day"), i = this.diff(r, "days", !0), o = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse", a = e && (x(e[o]) ? e[o]() : e[o]);
        return this.format(a || this.localeData().calendar(o, this, Rt(n)))
    }

    function fe() {
        return new p(this)
    }

    function he(t, e) {
        var n = g(t) ? t : Rt(t);
        return this.isValid() && n.isValid() ? (e = R(h(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
    }

    function de(t, e) {
        var n = g(t) ? t : Rt(t);
        return this.isValid() && n.isValid() ? (e = R(h(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
    }

    function pe(t, e, n, r) {
        return r = r || "()", ("(" === r[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }

    function ge(t, e) {
        var n, r = g(t) ? t : Rt(t);
        return this.isValid() && r.isValid() ? (e = R(e || "millisecond"), "millisecond" === e ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
    }

    function me(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function ve(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function ye(t, e, n) {
        var r, i, o, a;
        return this.isValid() ? (r = Wt(t, this), r.isValid() ? (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = R(e), "year" === e || "month" === e || "quarter" === e ? (a = $e(this, r), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (o = this - r, a = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - i) / 864e5 : "week" === e ? (o - i) / 6048e5 : o), n ? a : m(a)) : NaN) : NaN
    }

    function $e(t, e) {
        var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(i, "months");
        return 0 > e - o ? (n = t.clone().add(i - 1, "months"), r = (e - o) / (o - n)) : (n = t.clone().add(i + 1, "months"), r = (e - o) / (n - o)), -(i + r) || 0
    }

    function we() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function be() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? x(Date.prototype.toISOString) ? this.toDate().toISOString() : z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function xe(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = z(this, e);
        return this.localeData().postformat(n)
    }

    function _e(t, e) {
        return this.isValid() && (g(t) && t.isValid() || Rt(t).isValid()) ? re({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function ke(t) {
        return this.from(Rt(), t)
    }

    function Se(t, e) {
        return this.isValid() && (g(t) && t.isValid() || Rt(t).isValid()) ? re({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function Ce(t) {
        return this.to(Rt(), t)
    }

    function De(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = P(t), null != e && (this._locale = e), this)
    }

    function Te() {
        return this._locale
    }

    function Ae(t) {
        switch (t = R(t)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
            case"date":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function Ee(t) {
        return t = R(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function Me() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function Oe() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function Pe() {
        return this._offset ? new Date(this.valueOf()) : this._d
    }

    function je() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function Ie() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Re() {
        return this.isValid() ? this.toISOString() : null
    }

    function Ne() {
        return c(this)
    }

    function Ue() {
        return a({}, l(this))
    }

    function Fe() {
        return l(this).overflow
    }

    function He() {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }

    function Le(t, e) {
        V(0, [t, t.length], 0, e)
    }

    function qe(t) {
        return ze.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Ve(t) {
        return ze.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function We() {
        return _t(this.year(), 1, 4)
    }

    function Be() {
        var t = this.localeData()._week;
        return _t(this.year(), t.dow, t.doy)
    }

    function ze(t, e, n, r, i) {
        var o;
        return null == t ? xt(this, r, i).year : (o = _t(t, r, i), e > o && (e = o), Ye.call(this, t, e, n, r, i))
    }

    function Ye(t, e, n, r, i) {
        var o = bt(t, e, n, r, i), a = mt(o.year, 0, o.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
    }

    function Ge(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function Xe(t) {
        return xt(t, this._week.dow, this._week.doy).week
    }

    function Ze() {
        return this._week.dow
    }

    function Ke() {
        return this._week.doy
    }

    function Je(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Qe(t) {
        var e = xt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function tn(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function en(t, e) {
        return n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
    }

    function nn(t) {
        return this._weekdaysShort[t.day()]
    }

    function rn(t) {
        return this._weekdaysMin[t.day()]
    }

    function on(t, e, n) {
        var r, i, o, a = t.toLocaleLowerCase();
        if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; 7 > r; ++r)o = s([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === e ? (i = dr.call(this._weekdaysParse, a), -1 !== i ? i : null) : "ddd" === e ? (i = dr.call(this._shortWeekdaysParse, a), -1 !== i ? i : null) : (i = dr.call(this._minWeekdaysParse, a), -1 !== i ? i : null) : "dddd" === e ? (i = dr.call(this._weekdaysParse, a), -1 !== i ? i : (i = dr.call(this._shortWeekdaysParse, a), -1 !== i ? i : (i = dr.call(this._minWeekdaysParse, a), -1 !== i ? i : null))) : "ddd" === e ? (i = dr.call(this._shortWeekdaysParse, a), -1 !== i ? i : (i = dr.call(this._weekdaysParse, a), -1 !== i ? i : (i = dr.call(this._minWeekdaysParse, a), -1 !== i ? i : null))) : (i = dr.call(this._minWeekdaysParse, a), -1 !== i ? i : (i = dr.call(this._weekdaysParse, a), -1 !== i ? i : (i = dr.call(this._shortWeekdaysParse, a), -1 !== i ? i : null)))
    }

    function an(t, e, n) {
        var r, i, o;
        if (this._weekdaysParseExact)return on.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; 7 > r; r++) {
            if (i = s([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t))return r;
            if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t))return r;
            if (n && "dd" === e && this._minWeekdaysParse[r].test(t))return r;
            if (!n && this._weekdaysParse[r].test(t))return r
        }
    }

    function sn(t) {
        if (!this.isValid())return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = tn(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function un(t) {
        if (!this.isValid())return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function ln(t) {
        return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN
    }

    function cn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dn.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex
    }

    function fn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dn.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
    }

    function hn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dn.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
    }

    function dn() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, n, r, i, o, a = [], u = [], l = [], c = [];
        for (e = 0; 7 > e; e++)n = s([2e3, 1]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(r), u.push(i), l.push(o), c.push(r), c.push(i), c.push(o);
        for (a.sort(t), u.sort(t), l.sort(t), c.sort(t), e = 0; 7 > e; e++)u[e] = K(u[e]), l[e] = K(l[e]), c[e] = K(c[e]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function pn(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function gn() {
        return this.hours() % 12 || 12
    }

    function mn() {
        return this.hours() || 24
    }

    function vn(t, e) {
        V(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function yn(t, e) {
        return e._meridiemParse
    }

    function $n(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function wn(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function bn(t, e) {
        e[Br] = v(1e3 * ("0." + t))
    }

    function xn() {
        return this._isUTC ? "UTC" : ""
    }

    function _n() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function kn(t) {
        return Rt(1e3 * t)
    }

    function Sn() {
        return Rt.apply(null, arguments).parseZone()
    }

    function Cn(t, e, n) {
        var r = this._calendar[t];
        return x(r) ? r.call(e, n) : r
    }

    function Dn(t) {
        var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function Tn() {
        return this._invalidDate
    }

    function An(t) {
        return this._ordinal.replace("%d", t)
    }

    function En(t) {
        return t
    }

    function Mn(t, e, n, r) {
        var i = this._relativeTime[n];
        return x(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
    }

    function On(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return x(n) ? n(e) : n.replace(/%s/i, e)
    }

    function Pn(t, e, n, r) {
        var i = P(), o = s().set(r, e);
        return i[n](o, t)
    }

    function jn(t, e, n) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return Pn(t, e, n, "month");
        var r, i = [];
        for (r = 0; 12 > r; r++)i[r] = Pn(t, r, n, "month");
        return i
    }

    function In(t, e, n, r) {
        "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
        var i = P(), o = t ? i._week.dow : 0;
        if (null != n)return Pn(e, (n + o) % 7, r, "day");
        var a, s = [];
        for (a = 0; 7 > a; a++)s[a] = Pn(e, (a + o) % 7, r, "day");
        return s
    }

    function Rn(t, e) {
        return jn(t, e, "months")
    }

    function Nn(t, e) {
        return jn(t, e, "monthsShort")
    }

    function Un(t, e, n) {
        return In(t, e, n, "weekdays")
    }

    function Fn(t, e, n) {
        return In(t, e, n, "weekdaysShort")
    }

    function Hn(t, e, n) {
        return In(t, e, n, "weekdaysMin")
    }

    function Ln() {
        var t = this._data;
        return this._milliseconds = Ui(this._milliseconds), this._days = Ui(this._days), this._months = Ui(this._months), t.milliseconds = Ui(t.milliseconds), t.seconds = Ui(t.seconds), t.minutes = Ui(t.minutes), t.hours = Ui(t.hours), t.months = Ui(t.months), t.years = Ui(t.years), this
    }

    function qn(t, e, n, r) {
        var i = re(e, n);
        return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, t._bubble()
    }

    function Vn(t, e) {
        return qn(this, t, e, 1)
    }

    function Wn(t, e) {
        return qn(this, t, e, -1)
    }

    function Bn(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }

    function zn() {
        var t, e, n, r, i, o = this._milliseconds, a = this._days, s = this._months, u = this._data;
        return o >= 0 && a >= 0 && s >= 0 || 0 >= o && 0 >= a && 0 >= s || (o += 864e5 * Bn(Gn(s) + a), a = 0, s = 0), u.milliseconds = o % 1e3, t = m(o / 1e3), u.seconds = t % 60, e = m(t / 60), u.minutes = e % 60, n = m(e / 60), u.hours = n % 24, a += m(n / 24), i = m(Yn(a)), s += i, a -= Bn(Gn(i)), r = m(s / 12), s %= 12, u.days = a, u.months = s, u.years = r, this
    }

    function Yn(t) {
        return 4800 * t / 146097
    }

    function Gn(t) {
        return 146097 * t / 4800
    }

    function Xn(t) {
        var e, n, r = this._milliseconds;
        if (t = R(t), "month" === t || "year" === t)return e = this._days + r / 864e5, n = this._months + Yn(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(Gn(this._months)), t) {
            case"week":
                return e / 7 + r / 6048e5;
            case"day":
                return e + r / 864e5;
            case"hour":
                return 24 * e + r / 36e5;
            case"minute":
                return 1440 * e + r / 6e4;
            case"second":
                return 86400 * e + r / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + r;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function Zn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
    }

    function Kn(t) {
        return function () {
            return this.as(t)
        }
    }

    function Jn(t) {
        return t = R(t), this[t + "s"]()
    }

    function Qn(t) {
        return function () {
            return this._data[t]
        }
    }

    function tr() {
        return m(this.days() / 7)
    }

    function er(t, e, n, r, i) {
        return i.relativeTime(e || 1, !!n, t, r)
    }

    function nr(t, e, n) {
        var r = re(t).abs(), i = to(r.as("s")), o = to(r.as("m")), a = to(r.as("h")), s = to(r.as("d")), u = to(r.as("M")), l = to(r.as("y")), c = i < eo.s && ["s", i] || 1 >= o && ["m"] || o < eo.m && ["mm", o] || 1 >= a && ["h"] || a < eo.h && ["hh", a] || 1 >= s && ["d"] || s < eo.d && ["dd", s] || 1 >= u && ["M"] || u < eo.M && ["MM", u] || 1 >= l && ["y"] || ["yy", l];
        return c[2] = e, c[3] = +t > 0, c[4] = n, er.apply(null, c)
    }

    function rr(t, e) {
        return void 0 === eo[t] ? !1 : void 0 === e ? eo[t] : (eo[t] = e, !0)
    }

    function ir(t) {
        var e = this.localeData(), n = nr(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n)
    }

    function or() {
        var t, e, n, r = no(this._milliseconds) / 1e3, i = no(this._days), o = no(this._months);
        t = m(r / 60), e = m(t / 60), r %= 60, t %= 60, n = m(o / 12), o %= 12;
        var a = n, s = o, u = i, l = e, c = t, f = r, h = this.asSeconds();
        return h ? (0 > h ? "-" : "") + "P" + (a ? a + "Y" : "") + (s ? s + "M" : "") + (u ? u + "D" : "") + (l || c || f ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (f ? f + "S" : "") : "P0D"
    }

    var ar, sr;
    sr = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), n = e.length >>> 0, r = 0; n > r; r++)if (r in e && t.call(this, e[r], r, e))return !0;
        return !1
    };
    var ur = t.momentProperties = [], lr = !1, cr = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var fr;
    fr = Object.keys ? Object.keys : function (t) {
        var e, n = [];
        for (e in t)o(t, e) && n.push(e);
        return n
    };
    var hr, dr, pr = {}, gr = {}, mr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, vr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, yr = {}, $r = {}, wr = /\d/, br = /\d\d/, xr = /\d{3}/, _r = /\d{4}/, kr = /[+-]?\d{6}/, Sr = /\d\d?/, Cr = /\d\d\d\d?/, Dr = /\d\d\d\d\d\d?/, Tr = /\d{1,3}/, Ar = /\d{1,4}/, Er = /[+-]?\d{1,6}/, Mr = /\d+/, Or = /[+-]?\d+/, Pr = /Z|[+-]\d\d:?\d\d/gi, jr = /Z|[+-]\d\d(?::?\d\d)?/gi, Ir = /[+-]?\d+(\.\d{1,3})?/, Rr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nr = {}, Ur = {}, Fr = 0, Hr = 1, Lr = 2, qr = 3, Vr = 4, Wr = 5, Br = 6, zr = 7, Yr = 8;
    dr = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
        return -1
    }, V("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), V("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), V("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), I("month", "M"), G("M", Sr), G("MM", Sr, br), G("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), G("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), J(["M", "MM"], function (t, e) {
        e[Hr] = v(t) - 1
    }), J(["MMM", "MMMM"], function (t, e, n, r) {
        var i = n._locale.monthsParse(t, r, n._strict);
        null != i ? e[Hr] = i : l(n).invalidMonth = t
    });
    var Gr = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, Xr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Zr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Kr = Rr, Jr = Rr, Qr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, ei = /Z|[+-]\d\d(?::?\d\d)?/, ni = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], ri = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], ii = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), V("Y", 0, 0, function () {
        var t = this.year();
        return 9999 >= t ? "" + t : "+" + t
    }), V(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), G("Y", Or), G("YY", Sr, br), G("YYYY", Ar, _r), G("YYYYY", Er, kr), G("YYYYYY", Er, kr), J(["YYYYY", "YYYYYY"], Fr), J("YYYY", function (e, n) {
        n[Fr] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
    }), J("YY", function (e, n) {
        n[Fr] = t.parseTwoDigitYear(e)
    }), J("Y", function (t, e) {
        e[Fr] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return v(t) + (v(t) > 68 ? 1900 : 2e3)
    };
    var oi = U("FullYear", !0);
    t.ISO_8601 = function () {
    };
    var ai = w("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
        var t = Rt.apply(null, arguments);
        return this.isValid() && t.isValid() ? this > t ? this : t : f()
    }), si = w("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
        var t = Rt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t > this ? this : t : f()
    }), ui = function () {
        return Date.now ? Date.now() : +new Date
    };
    qt("Z", ":"), qt("ZZ", ""), G("Z", jr), G("ZZ", jr), J(["Z", "ZZ"], function (t, e, n) {
        n._useUTC = !0, n._tzm = Vt(jr, t)
    });
    var li = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {
    };
    var ci = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, fi = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    re.fn = Ht.prototype;
    var hi = ue(1, "add"), di = ue(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var pi = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    V(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), V(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Le("gggg", "weekYear"), Le("ggggg", "weekYear"), Le("GGGG", "isoWeekYear"), Le("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), G("G", Or), G("g", Or), G("GG", Sr, br), G("gg", Sr, br), G("GGGG", Ar, _r), G("gggg", Ar, _r), G("GGGGG", Er, kr), G("ggggg", Er, kr), Q(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, r) {
        e[r.substr(0, 2)] = v(t)
    }), Q(["gg", "GG"], function (e, n, r, i) {
        n[i] = t.parseTwoDigitYear(e)
    }), V("Q", 0, "Qo", "quarter"), I("quarter", "Q"), G("Q", wr), J("Q", function (t, e) {
        e[Hr] = 3 * (v(t) - 1)
    }), V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), G("w", Sr), G("ww", Sr, br), G("W", Sr), G("WW", Sr, br), Q(["w", "ww", "W", "WW"], function (t, e, n, r) {
        e[r.substr(0, 1)] = v(t)
    });
    var gi = {dow: 0, doy: 6};
    V("D", ["DD", 2], "Do", "date"), I("date", "D"), G("D", Sr), G("DD", Sr, br), G("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), J(["D", "DD"], Lr), J("Do", function (t, e) {
        e[Lr] = v(t.match(Sr)[0], 10)
    });
    var mi = U("Date", !0);
    V("d", 0, "do", "day"), V("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), V("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), V("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), G("d", Sr), G("e", Sr), G("E", Sr), G("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), G("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), G("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), Q(["dd", "ddd", "dddd"], function (t, e, n, r) {
        var i = n._locale.weekdaysParse(t, r, n._strict);
        null != i ? e.d = i : l(n).invalidWeekday = t
    }), Q(["d", "e", "E"], function (t, e, n, r) {
        e[r] = v(t)
    });
    var vi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), yi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $i = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), wi = Rr, bi = Rr, xi = Rr;
    V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), G("DDD", Tr), G("DDDD", xr), J(["DDD", "DDDD"], function (t, e, n) {
        n._dayOfYear = v(t)
    }), V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, gn), V("k", ["kk", 2], 0, mn), V("hmm", 0, 0, function () {
        return "" + gn.apply(this) + q(this.minutes(), 2)
    }), V("hmmss", 0, 0, function () {
        return "" + gn.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
    }), V("Hmm", 0, 0, function () {
        return "" + this.hours() + q(this.minutes(), 2)
    }), V("Hmmss", 0, 0, function () {
        return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
    }), vn("a", !0), vn("A", !1), I("hour", "h"), G("a", yn), G("A", yn), G("H", Sr), G("h", Sr), G("HH", Sr, br), G("hh", Sr, br), G("hmm", Cr), G("hmmss", Dr), G("Hmm", Cr), G("Hmmss", Dr), J(["H", "HH"], qr), J(["a", "A"], function (t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), J(["h", "hh"], function (t, e, n) {
        e[qr] = v(t), l(n).bigHour = !0
    }), J("hmm", function (t, e, n) {
        var r = t.length - 2;
        e[qr] = v(t.substr(0, r)), e[Vr] = v(t.substr(r)), l(n).bigHour = !0
    }), J("hmmss", function (t, e, n) {
        var r = t.length - 4, i = t.length - 2;
        e[qr] = v(t.substr(0, r)), e[Vr] = v(t.substr(r, 2)), e[Wr] = v(t.substr(i)), l(n).bigHour = !0
    }), J("Hmm", function (t, e, n) {
        var r = t.length - 2;
        e[qr] = v(t.substr(0, r)), e[Vr] = v(t.substr(r))
    }), J("Hmmss", function (t, e, n) {
        var r = t.length - 4, i = t.length - 2;
        e[qr] = v(t.substr(0, r)), e[Vr] = v(t.substr(r, 2)), e[Wr] = v(t.substr(i))
    });
    var _i = /[ap]\.?m?\.?/i, ki = U("Hours", !0);
    V("m", ["mm", 2], 0, "minute"), I("minute", "m"), G("m", Sr), G("mm", Sr, br), J(["m", "mm"], Vr);
    var Si = U("Minutes", !1);
    V("s", ["ss", 2], 0, "second"), I("second", "s"), G("s", Sr), G("ss", Sr, br), J(["s", "ss"], Wr);
    var Ci = U("Seconds", !1);
    V("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), V(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), V(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), V(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), V(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), V(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), V(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), I("millisecond", "ms"), G("S", Tr, wr), G("SS", Tr, br), G("SSS", Tr, xr);
    var Di;
    for (Di = "SSSS"; Di.length <= 9; Di += "S")G(Di, Mr);
    for (Di = "S"; Di.length <= 9; Di += "S")J(Di, bn);
    var Ti = U("Milliseconds", !1);
    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
    var Ai = p.prototype;
    Ai.add = hi, Ai.calendar = ce, Ai.clone = fe, Ai.diff = ye, Ai.endOf = Ee, Ai.format = xe, Ai.from = _e, Ai.fromNow = ke, Ai.to = Se, Ai.toNow = Ce, Ai.get = L, Ai.invalidAt = Fe, Ai.isAfter = he, Ai.isBefore = de, Ai.isBetween = pe, Ai.isSame = ge, Ai.isSameOrAfter = me, Ai.isSameOrBefore = ve, Ai.isValid = Ne, Ai.lang = pi, Ai.locale = De, Ai.localeData = Te, Ai.max = si, Ai.min = ai, Ai.parsingFlags = Ue, Ai.set = L, Ai.startOf = Ae, Ai.subtract = di, Ai.toArray = je, Ai.toObject = Ie, Ai.toDate = Pe, Ai.toISOString = be, Ai.toJSON = Re, Ai.toString = we, Ai.unix = Oe, Ai.valueOf = Me, Ai.creationData = He, Ai.year = oi, Ai.isLeapYear = $t, Ai.weekYear = qe, Ai.isoWeekYear = Ve, Ai.quarter = Ai.quarters = Ge, Ai.month = st, Ai.daysInMonth = ut, Ai.week = Ai.weeks = Je, Ai.isoWeek = Ai.isoWeeks = Qe, Ai.weeksInYear = Be, Ai.isoWeeksInYear = We, Ai.date = mi, Ai.day = Ai.days = sn, Ai.weekday = un, Ai.isoWeekday = ln, Ai.dayOfYear = pn, Ai.hour = Ai.hours = ki, Ai.minute = Ai.minutes = Si, Ai.second = Ai.seconds = Ci, Ai.millisecond = Ai.milliseconds = Ti, Ai.utcOffset = zt, Ai.utc = Gt, Ai.local = Xt, Ai.parseZone = Zt, Ai.hasAlignedHourOffset = Kt, Ai.isDST = Jt, Ai.isDSTShifted = Qt, Ai.isLocal = te, Ai.isUtcOffset = ee, Ai.isUtc = ne, Ai.isUTC = ne, Ai.zoneAbbr = xn, Ai.zoneName = _n, Ai.dates = w("dates accessor is deprecated. Use date instead.", mi), Ai.months = w("months accessor is deprecated. Use month instead", st), Ai.years = w("years accessor is deprecated. Use year instead", oi), Ai.zone = w("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Yt);
    var Ei = Ai, Mi = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Oi = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Pi = "Invalid date", ji = "%d", Ii = /\d{1,2}/, Ri = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Ni = C.prototype;
    Ni._calendar = Mi, Ni.calendar = Cn, Ni._longDateFormat = Oi, Ni.longDateFormat = Dn, Ni._invalidDate = Pi, Ni.invalidDate = Tn, Ni._ordinal = ji, Ni.ordinal = An, Ni._ordinalParse = Ii, Ni.preparse = En, Ni.postformat = En, Ni._relativeTime = Ri, Ni.relativeTime = Mn, Ni.pastFuture = On, Ni.set = k, Ni.months = nt, Ni._months = Xr, Ni.monthsShort = rt, Ni._monthsShort = Zr, Ni.monthsParse = ot, Ni._monthsRegex = Jr, Ni.monthsRegex = ct, Ni._monthsShortRegex = Kr, Ni.monthsShortRegex = lt, Ni.week = Xe, Ni._week = gi, Ni.firstDayOfYear = Ke, Ni.firstDayOfWeek = Ze, Ni.weekdays = en, Ni._weekdays = vi, Ni.weekdaysMin = rn, Ni._weekdaysMin = $i, Ni.weekdaysShort = nn, Ni._weekdaysShort = yi, Ni.weekdaysParse = an, Ni._weekdaysRegex = wi, Ni.weekdaysRegex = cn, Ni._weekdaysShortRegex = bi, Ni.weekdaysShortRegex = fn, Ni._weekdaysMinRegex = xi, Ni.weekdaysMinRegex = hn, Ni.isPM = $n, Ni._meridiemParse = _i, Ni.meridiem = wn, E("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10, n = 1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", E),
        t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", P);
    var Ui = Math.abs, Fi = Kn("ms"), Hi = Kn("s"), Li = Kn("m"), qi = Kn("h"), Vi = Kn("d"), Wi = Kn("w"), Bi = Kn("M"), zi = Kn("y"), Yi = Qn("milliseconds"), Gi = Qn("seconds"), Xi = Qn("minutes"), Zi = Qn("hours"), Ki = Qn("days"), Ji = Qn("months"), Qi = Qn("years"), to = Math.round, eo = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, no = Math.abs, ro = Ht.prototype;
    ro.abs = Ln, ro.add = Vn, ro.subtract = Wn, ro.as = Xn, ro.asMilliseconds = Fi, ro.asSeconds = Hi, ro.asMinutes = Li, ro.asHours = qi, ro.asDays = Vi, ro.asWeeks = Wi, ro.asMonths = Bi, ro.asYears = zi, ro.valueOf = Zn, ro._bubble = zn, ro.get = Jn, ro.milliseconds = Yi, ro.seconds = Gi, ro.minutes = Xi, ro.hours = Zi, ro.days = Ki, ro.weeks = tr, ro.months = Ji, ro.years = Qi, ro.humanize = ir, ro.toISOString = or, ro.toString = or, ro.toJSON = or, ro.locale = De, ro.localeData = Te, ro.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", or), ro.lang = pi, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), G("x", Or), G("X", Ir), J("X", function (t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), J("x", function (t, e, n) {
        n._d = new Date(v(t))
    }), t.version = "2.13.0", e(Rt), t.fn = Ei, t.min = Ut, t.max = Ft, t.now = ui, t.utc = s, t.unix = kn, t.months = Rn, t.isDate = r, t.locale = E, t.invalid = f, t.duration = re, t.isMoment = g, t.weekdays = Un, t.parseZone = Sn, t.localeData = P, t.isDuration = Lt, t.monthsShort = Nn, t.weekdaysMin = Hn, t.defineLocale = M, t.updateLocale = O, t.locales = j, t.weekdaysShort = Fn, t.normalizeUnits = R, t.relativeTimeThreshold = rr, t.prototype = Ei;
    var io = t;
    return io
}), function () {
    function t(t) {
        this.tokens = [], this.tokens.links = {}, this.options = t || l.defaults, this.rules = c.normal, this.options.gfm && (this.options.tables ? this.rules = c.tables : this.rules = c.gfm)
    }

    function e(t, e) {
        if (this.options = e || l.defaults, this.links = t, this.rules = f.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links)throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = f.breaks : this.rules = f.gfm : this.options.pedantic && (this.rules = f.pedantic)
    }

    function n(t) {
        this.options = t || {}
    }

    function r(t) {
        this.tokens = [], this.token = null, this.options = t || l.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
    }

    function i(t, e) {
        return t.replace(e ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function o(t) {
        return t.replace(/&([#\w]+);/g, function (t, e) {
            return e = e.toLowerCase(), "colon" === e ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
        })
    }

    function a(t, e) {
        return t = t.source, e = e || "", function n(r, i) {
            return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), t = t.replace(r, i), n) : new RegExp(t, e)
        }
    }

    function s() {
    }

    function u(t) {
        for (var e, n, r = 1; r < arguments.length; r++) {
            e = arguments[r];
            for (n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }
        return t
    }

    function l(e, n, o) {
        if (o || "function" == typeof n) {
            o || (o = n, n = null), n = u({}, l.defaults, n || {});
            var a, s, c = n.highlight, f = 0;
            try {
                a = t.lex(e, n)
            } catch (h) {
                return o(h)
            }
            s = a.length;
            var d = function (t) {
                if (t)return n.highlight = c, o(t);
                var e;
                try {
                    e = r.parse(a, n)
                } catch (i) {
                    t = i
                }
                return n.highlight = c, t ? o(t) : o(null, e)
            };
            if (!c || c.length < 3)return d();
            if (delete n.highlight, !s)return d();
            for (; f < a.length; f++)!function (t) {
                return "code" !== t.type ? --s || d() : c(t.text, t.lang, function (e, n) {
                    return e ? d(e) : null == n || n === t.text ? --s || d() : (t.text = n, t.escaped = !0, void(--s || d()))
                })
            }(a[f])
        } else try {
            return n && (n = u({}, l.defaults, n)), r.parse(t.lex(e, n), n)
        } catch (h) {
            if (h.message += "\nPlease report this to https://github.com/chjj/marked.", (n || l.defaults).silent)return "<p>An error occured:</p><pre>" + i(h.message + "", !0) + "</pre>";
            throw h
        }
    }

    var c = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: s,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: s,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: s,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    c.bullet = /(?:[*+-]|\d+\.)/, c.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, c.item = a(c.item, "gm")(/bull/g, c.bullet)(), c.list = a(c.list)(/bull/g, c.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + c.def.source + ")")(), c.blockquote = a(c.blockquote)("def", c.def)(), c._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", c.html = a(c.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, c._tag)(), c.paragraph = a(c.paragraph)("hr", c.hr)("heading", c.heading)("lheading", c.lheading)("blockquote", c.blockquote)("tag", "<" + c._tag)("def", c.def)(), c.normal = u({}, c), c.gfm = u({}, c.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    }), c.gfm.paragraph = a(c.paragraph)("(?!", "(?!" + c.gfm.fences.source.replace("\\1", "\\2") + "|" + c.list.source.replace("\\1", "\\3") + "|")(), c.tables = u({}, c.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), t.rules = c, t.lex = function (e, n) {
        var r = new t(n);
        return r.lex(e)
    }, t.prototype.lex = function (t) {
        return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(t, !0)
    }, t.prototype.token = function (t, e, n) {
        for (var r, i, o, a, s, u, l, f, h, t = t.replace(/^ +$/gm, ""); t;)if ((o = this.rules.newline.exec(t)) && (t = t.substring(o[0].length), o[0].length > 1 && this.tokens.push({type: "space"})), o = this.rules.code.exec(t))t = t.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
            type: "code",
            text: this.options.pedantic ? o : o.replace(/\n+$/, "")
        }); else if (o = this.rules.fences.exec(t))t = t.substring(o[0].length), this.tokens.push({
            type: "code",
            lang: o[2],
            text: o[3] || ""
        }); else if (o = this.rules.heading.exec(t))t = t.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: o[1].length,
            text: o[2]
        }); else if (e && (o = this.rules.nptable.exec(t))) {
            for (t = t.substring(o[0].length), u = {
                type: "table",
                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: o[3].replace(/\n$/, "").split("\n")
            }, f = 0; f < u.align.length; f++)/^ *-+: *$/.test(u.align[f]) ? u.align[f] = "right" : /^ *:-+: *$/.test(u.align[f]) ? u.align[f] = "center" : /^ *:-+ *$/.test(u.align[f]) ? u.align[f] = "left" : u.align[f] = null;
            for (f = 0; f < u.cells.length; f++)u.cells[f] = u.cells[f].split(/ *\| */);
            this.tokens.push(u)
        } else if (o = this.rules.lheading.exec(t))t = t.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === o[2] ? 1 : 2,
            text: o[1]
        }); else if (o = this.rules.hr.exec(t))t = t.substring(o[0].length), this.tokens.push({type: "hr"}); else if (o = this.rules.blockquote.exec(t))t = t.substring(o[0].length), this.tokens.push({type: "blockquote_start"}), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, e, !0), this.tokens.push({type: "blockquote_end"}); else if (o = this.rules.list.exec(t)) {
            for (t = t.substring(o[0].length), a = o[2], this.tokens.push({
                type: "list_start",
                ordered: a.length > 1
            }), o = o[0].match(this.rules.item), r = !1, h = o.length, f = 0; h > f; f++)u = o[f], l = u.length, u = u.replace(/^ *([*+-]|\d+\.) +/, ""), ~u.indexOf("\n ") && (l -= u.length, u = this.options.pedantic ? u.replace(/^ {1,4}/gm, "") : u.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && f !== h - 1 && (s = c.bullet.exec(o[f + 1])[0], a === s || a.length > 1 && s.length > 1 || (t = o.slice(f + 1).join("\n") + t, f = h - 1)), i = r || /\n\n(?!\s*$)/.test(u), f !== h - 1 && (r = "\n" === u.charAt(u.length - 1), i || (i = r)), this.tokens.push({type: i ? "loose_item_start" : "list_item_start"}), this.token(u, !1, n), this.tokens.push({type: "list_item_end"});
            this.tokens.push({type: "list_end"})
        } else if (o = this.rules.html.exec(t))t = t.substring(o[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
            text: o[0]
        }); else if (!n && e && (o = this.rules.def.exec(t)))t = t.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
            href: o[2],
            title: o[3]
        }; else if (e && (o = this.rules.table.exec(t))) {
            for (t = t.substring(o[0].length), u = {
                type: "table",
                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
            }, f = 0; f < u.align.length; f++)/^ *-+: *$/.test(u.align[f]) ? u.align[f] = "right" : /^ *:-+: *$/.test(u.align[f]) ? u.align[f] = "center" : /^ *:-+ *$/.test(u.align[f]) ? u.align[f] = "left" : u.align[f] = null;
            for (f = 0; f < u.cells.length; f++)u.cells[f] = u.cells[f].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
            this.tokens.push(u)
        } else if (e && (o = this.rules.paragraph.exec(t)))t = t.substring(o[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
        }); else if (o = this.rules.text.exec(t))t = t.substring(o[0].length), this.tokens.push({
            type: "text",
            text: o[0]
        }); else if (t)throw new Error("Infinite loop on byte: " + t.charCodeAt(0));
        return this.tokens
    };
    var f = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: s,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: s,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };
    f._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, f._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, f.link = a(f.link)("inside", f._inside)("href", f._href)(), f.reflink = a(f.reflink)("inside", f._inside)(), f.normal = u({}, f), f.pedantic = u({}, f.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), f.gfm = u({}, f.normal, {
        escape: a(f.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: a(f.text)("]|", "~]|")("|", "|https?://|")()
    }), f.breaks = u({}, f.gfm, {
        br: a(f.br)("{2,}", "*")(),
        text: a(f.gfm.text)("{2,}", "*")()
    }), e.rules = f, e.output = function (t, n, r) {
        var i = new e(n, r);
        return i.output(t)
    }, e.prototype.output = function (t) {
        for (var e, n, r, o, a = ""; t;)if (o = this.rules.escape.exec(t))t = t.substring(o[0].length), a += o[1]; else if (o = this.rules.autolink.exec(t))t = t.substring(o[0].length), "@" === o[2] ? (n = ":" === o[1].charAt(6) ? this.mangle(o[1].substring(7)) : this.mangle(o[1]), r = this.mangle("mailto:") + n) : (n = i(o[1]), r = n), a += this.renderer.link(r, null, n); else if (this.inLink || !(o = this.rules.url.exec(t))) {
            if (o = this.rules.tag.exec(t))!this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), t = t.substring(o[0].length), a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(o[0]) : i(o[0]) : o[0]; else if (o = this.rules.link.exec(t))t = t.substring(o[0].length), this.inLink = !0, a += this.outputLink(o, {
                href: o[2],
                title: o[3]
            }), this.inLink = !1; else if ((o = this.rules.reflink.exec(t)) || (o = this.rules.nolink.exec(t))) {
                if (t = t.substring(o[0].length), e = (o[2] || o[1]).replace(/\s+/g, " "), e = this.links[e.toLowerCase()], !e || !e.href) {
                    a += o[0].charAt(0), t = o[0].substring(1) + t;
                    continue
                }
                this.inLink = !0, a += this.outputLink(o, e), this.inLink = !1
            } else if (o = this.rules.strong.exec(t))t = t.substring(o[0].length), a += this.renderer.strong(this.output(o[2] || o[1])); else if (o = this.rules.em.exec(t))t = t.substring(o[0].length), a += this.renderer.em(this.output(o[2] || o[1])); else if (o = this.rules.code.exec(t))t = t.substring(o[0].length), a += this.renderer.codespan(i(o[2], !0)); else if (o = this.rules.br.exec(t))t = t.substring(o[0].length), a += this.renderer.br(); else if (o = this.rules.del.exec(t))t = t.substring(o[0].length), a += this.renderer.del(this.output(o[1])); else if (o = this.rules.text.exec(t))t = t.substring(o[0].length), a += this.renderer.text(i(this.smartypants(o[0]))); else if (t)throw new Error("Infinite loop on byte: " + t.charCodeAt(0))
        } else t = t.substring(o[0].length), n = i(o[1]), r = n, a += this.renderer.link(r, null, n);
        return a
    }, e.prototype.outputLink = function (t, e) {
        var n = i(e.href), r = e.title ? i(e.title) : null;
        return "!" !== t[0].charAt(0) ? this.renderer.link(n, r, this.output(t[1])) : this.renderer.image(n, r, i(t[1]))
    }, e.prototype.smartypants = function (t) {
        return this.options.smartypants ? t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : t
    }, e.prototype.mangle = function (t) {
        if (!this.options.mangle)return t;
        for (var e, n = "", r = t.length, i = 0; r > i; i++)e = t.charCodeAt(i), Math.random() > .5 && (e = "x" + e.toString(16)), n += "&#" + e + ";";
        return n
    }, n.prototype.code = function (t, e, n) {
        if (this.options.highlight) {
            var r = this.options.highlight(t, e);
            null != r && r !== t && (n = !0, t = r)
        }
        return e ? '<pre><code class="' + this.options.langPrefix + i(e, !0) + '">' + (n ? t : i(t, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? t : i(t, !0)) + "\n</code></pre>"
    }, n.prototype.blockquote = function (t) {
        return "<blockquote>\n" + t + "</blockquote>\n"
    }, n.prototype.html = function (t) {
        return t
    }, n.prototype.heading = function (t, e, n) {
        return "<h" + e + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + t + "</h" + e + ">\n"
    }, n.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }, n.prototype.list = function (t, e) {
        var n = e ? "ol" : "ul";
        return "<" + n + ">\n" + t + "</" + n + ">\n"
    }, n.prototype.listitem = function (t) {
        return "<li>" + t + "</li>\n"
    }, n.prototype.paragraph = function (t) {
        return "<p>" + t + "</p>\n"
    }, n.prototype.table = function (t, e) {
        return "<table>\n<thead>\n" + t + "</thead>\n<tbody>\n" + e + "</tbody>\n</table>\n"
    }, n.prototype.tablerow = function (t) {
        return "<tr>\n" + t + "</tr>\n"
    }, n.prototype.tablecell = function (t, e) {
        var n = e.header ? "th" : "td", r = e.align ? "<" + n + ' style="text-align:' + e.align + '">' : "<" + n + ">";
        return r + t + "</" + n + ">\n"
    }, n.prototype.strong = function (t) {
        return "<strong>" + t + "</strong>"
    }, n.prototype.em = function (t) {
        return "<em>" + t + "</em>"
    }, n.prototype.codespan = function (t) {
        return "<code>" + t + "</code>"
    }, n.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
    }, n.prototype.del = function (t) {
        return "<del>" + t + "</del>"
    }, n.prototype.link = function (t, e, n) {
        if (this.options.sanitize) {
            try {
                var r = decodeURIComponent(o(t)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (i) {
                return ""
            }
            if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:"))return ""
        }
        var a = '<a href="' + t + '"';
        return e && (a += ' title="' + e + '"'), a += ">" + n + "</a>"
    }, n.prototype.image = function (t, e, n) {
        var r = '<img src="' + t + '" alt="' + n + '"';
        return e && (r += ' title="' + e + '"'), r += this.options.xhtml ? "/>" : ">"
    }, n.prototype.text = function (t) {
        return t
    }, r.parse = function (t, e, n) {
        var i = new r(e, n);
        return i.parse(t)
    }, r.prototype.parse = function (t) {
        this.inline = new e(t.links, this.options, this.renderer), this.tokens = t.reverse();
        for (var n = ""; this.next();)n += this.tok();
        return n
    }, r.prototype.next = function () {
        return this.token = this.tokens.pop()
    }, r.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
    }, r.prototype.parseText = function () {
        for (var t = this.token.text; "text" === this.peek().type;)t += "\n" + this.next().text;
        return this.inline.output(t)
    }, r.prototype.tok = function () {
        switch (this.token.type) {
            case"space":
                return "";
            case"hr":
                return this.renderer.hr();
            case"heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case"code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case"table":
                var t, e, n, r, i, o = "", a = "";
                for (n = "", t = 0; t < this.token.header.length; t++)r = {
                    header: !0,
                    align: this.token.align[t]
                }, n += this.renderer.tablecell(this.inline.output(this.token.header[t]), {
                    header: !0,
                    align: this.token.align[t]
                });
                for (o += this.renderer.tablerow(n), t = 0; t < this.token.cells.length; t++) {
                    for (e = this.token.cells[t], n = "", i = 0; i < e.length; i++)n += this.renderer.tablecell(this.inline.output(e[i]), {
                        header: !1,
                        align: this.token.align[i]
                    });
                    a += this.renderer.tablerow(n)
                }
                return this.renderer.table(o, a);
            case"blockquote_start":
                for (var a = ""; "blockquote_end" !== this.next().type;)a += this.tok();
                return this.renderer.blockquote(a);
            case"list_start":
                for (var a = "", s = this.token.ordered; "list_end" !== this.next().type;)a += this.tok();
                return this.renderer.list(a, s);
            case"list_item_start":
                for (var a = ""; "list_item_end" !== this.next().type;)a += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(a);
            case"loose_item_start":
                for (var a = ""; "list_item_end" !== this.next().type;)a += this.tok();
                return this.renderer.listitem(a);
            case"html":
                var u = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                return this.renderer.html(u);
            case"paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case"text":
                return this.renderer.paragraph(this.parseText())
        }
    }, s.exec = s, l.options = l.setOptions = function (t) {
        return u(l.defaults, t), l
    }, l.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new n,
        xhtml: !1
    }, l.Parser = r, l.parser = r.parse, l.Renderer = n, l.Lexer = t, l.lexer = t.lex, l.InlineLexer = e, l.inlineLexer = e.output, l.parse = l, "undefined" != typeof module && "object" == typeof exports ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
        return l
    }) : this.marked = l
}.call(function () {
    return this || ("undefined" != typeof window ? window : global)
}()), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    "use strict";
    var e = function (e, n) {
        var r = ["autofocus", "savable", "hideable", "width", "height", "resize", "iconlibrary", "language", "footer", "fullscreen", "hiddenButtons", "disabledButtons"];
        t.each(r, function (r, i) {
            "undefined" != typeof t(e).data(i) && (n = "object" == typeof n ? n : {}, n[i] = t(e).data(i))
        }), this.$ns = "bootstrap-markdown", this.$element = t(e), this.$editable = {
            el: null,
            type: null,
            attrKeys: [],
            attrValues: [],
            content: null
        }, this.$options = t.extend(!0, {}, t.fn.markdown.defaults, n, this.$element.data("options")), this.$oldContent = null, this.$isPreview = !1, this.$isFullscreen = !1, this.$editor = null, this.$textarea = null, this.$handler = [], this.$callback = [], this.$nextTab = [], this.showEditor()
    };
    e.prototype = {
        constructor: e, __alterButtons: function (e, n) {
            var r = this.$handler, i = "all" == e, o = this;
            t.each(r, function (t, r) {
                var a = !0;
                a = i ? !1 : r.indexOf(e) < 0, a === !1 && n(o.$editor.find('button[data-handler="' + r + '"]'))
            })
        }, __buildButtons: function (e, n) {
            var r, i = this.$ns, o = this.$handler, a = this.$callback;
            for (r = 0; r < e.length; r++) {
                var s, u = e[r];
                for (s = 0; s < u.length; s++) {
                    var l, c = u[s].data, f = t("<div/>", {"class": "btn-group"});
                    for (l = 0; l < c.length; l++) {
                        var h, d, p = c[l], g = i + "-" + p.name, m = this.__getIcon(p.icon), v = p.btnText ? p.btnText : "", y = p.btnClass ? p.btnClass : "btn", $ = p.tabIndex ? p.tabIndex : "-1", w = "undefined" != typeof p.hotkey ? p.hotkey : "", b = "undefined" != typeof jQuery.hotkeys && "" !== w ? " (" + w + ")" : "";
                        h = t("<button></button>"), h.text(" " + this.__localize(v)).addClass("btn-default btn-sm").addClass(y), y.match(/btn\-(primary|success|info|warning|danger|link)/) && h.removeClass("btn-default"), h.attr({
                            type: "button",
                            title: this.__localize(p.title) + b,
                            tabindex: $,
                            "data-provider": i,
                            "data-handler": g,
                            "data-hotkey": w
                        }), p.toggle === !0 && h.attr("data-toggle", "button"), d = t("<span/>"), d.addClass(m), d.prependTo(h), f.append(h), o.push(g), a.push(p.callback)
                    }
                    n.append(f)
                }
            }
            return n
        }, __setListener: function () {
            var e = "undefined" != typeof this.$textarea.attr("rows"), n = this.$textarea.val().split("\n").length > 5 ? this.$textarea.val().split("\n").length : "5", r = e ? this.$textarea.attr("rows") : n;
            this.$textarea.attr("rows", r), this.$options.resize && this.$textarea.css("resize", this.$options.resize), this.$textarea.on({
                focus: t.proxy(this.focus, this),
                keyup: t.proxy(this.keyup, this),
                change: t.proxy(this.change, this),
                select: t.proxy(this.select, this)
            }), this.eventSupported("keydown") && this.$textarea.on("keydown", t.proxy(this.keydown, this)), this.eventSupported("keypress") && this.$textarea.on("keypress", t.proxy(this.keypress, this)), this.$textarea.data("markdown", this)
        }, __handle: function (e) {
            var n = t(e.currentTarget), r = this.$handler, i = this.$callback, o = n.attr("data-handler"), a = r.indexOf(o), s = i[a];
            t(e.currentTarget).focus(), s(this), this.change(this), o.indexOf("cmdSave") < 0 && this.$textarea.focus(), e.preventDefault()
        }, __localize: function (e) {
            var n = t.fn.markdown.messages, r = this.$options.language;
            return "undefined" != typeof n && "undefined" != typeof n[r] && "undefined" != typeof n[r][e] ? n[r][e] : e
        }, __getIcon: function (t) {
            return "object" == typeof t ? t[this.$options.iconlibrary] : t
        }, setFullscreen: function (e) {
            var n = this.$editor, r = this.$textarea;
            e === !0 ? (n.addClass("md-fullscreen-mode"), t("body").addClass("md-nooverflow"), this.$options.onFullscreen(this)) : (n.removeClass("md-fullscreen-mode"), t("body").removeClass("md-nooverflow"), this.$options.onFullscreenExit(this), 1 == this.$isPreview && this.hidePreview().showPreview()), this.$isFullscreen = e, r.focus()
        }, showEditor: function () {
            var e, n = this, r = this.$ns, i = this.$element, o = (i.css("height"), i.css("width"), this.$editable), a = this.$handler, s = this.$callback, u = this.$options, l = t("<div/>", {
                "class": "md-editor",
                click: function () {
                    n.focus()
                }
            });
            if (null === this.$editor) {
                var c = t("<div/>", {"class": "md-header btn-toolbar"}), f = [];
                if (u.buttons.length > 0 && (f = f.concat(u.buttons[0])), u.additionalButtons.length > 0 && t.each(u.additionalButtons[0], function (e, n) {
                        var r = t.grep(f, function (t, e) {
                            return t.name === n.name
                        });
                        r.length > 0 ? r[0].data = r[0].data.concat(n.data) : f.push(u.additionalButtons[0][e])
                    }), u.reorderButtonGroups.length > 0 && (f = f.filter(function (t) {
                        return u.reorderButtonGroups.indexOf(t.name) > -1
                    }).sort(function (t, e) {
                        return u.reorderButtonGroups.indexOf(t.name) < u.reorderButtonGroups.indexOf(e.name) ? -1 : u.reorderButtonGroups.indexOf(t.name) > u.reorderButtonGroups.indexOf(e.name) ? 1 : 0
                    })), f.length > 0 && (c = this.__buildButtons([f], c)), u.fullscreen.enable && c.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="' + this.__getIcon(u.fullscreen.icons.fullscreenOn) + '"></span></a></div>').on("click", ".md-control-fullscreen", function (t) {
                        t.preventDefault(), n.setFullscreen(!0)
                    }), l.append(c), i.is("textarea"))i.before(l), e = i, e.addClass("md-input"), l.append(e); else {
                    var h = "function" == typeof toMarkdown ? toMarkdown(i.html()) : i.html(), d = t.trim(h);
                    e = t("<textarea/>", {
                        "class": "md-input",
                        val: d
                    }), l.append(e), o.el = i, o.type = i.prop("tagName").toLowerCase(), o.content = i.html(), t(i[0].attributes).each(function () {
                        o.attrKeys.push(this.nodeName), o.attrValues.push(this.nodeValue)
                    }), i.replaceWith(l)
                }
                var p = t("<div/>", {"class": "md-footer"}), g = !1, m = "";
                if (u.savable) {
                    g = !0;
                    var v = "cmdSave";
                    a.push(v), s.push(u.onSave), p.append('<button class="btn btn-success" data-provider="' + r + '" data-handler="' + v + '"><i class="icon icon-white icon-ok"></i> ' + this.__localize("Save") + "</button>")
                }
                if (m = "function" == typeof u.footer ? u.footer(this) : u.footer, "" !== t.trim(m) && (g = !0, p.append(m)), g && l.append(p), u.width && "inherit" !== u.width && (jQuery.isNumeric(u.width) ? (l.css("display", "table"), e.css("width", u.width + "px")) : l.addClass(u.width)), u.height && "inherit" !== u.height)if (jQuery.isNumeric(u.height)) {
                    var y = u.height;
                    c && (y = Math.max(0, y - c.outerHeight())), p && (y = Math.max(0, y - p.outerHeight())), e.css("height", y + "px")
                } else l.addClass(u.height);
                this.$editor = l, this.$textarea = e, this.$editable = o, this.$oldContent = this.getContent(), this.__setListener(), this.$editor.attr("id", (new Date).getTime()), this.$editor.on("click", '[data-provider="bootstrap-markdown"]', t.proxy(this.__handle, this)), (this.$element.is(":disabled") || this.$element.is("[readonly]")) && (this.$editor.addClass("md-editor-disabled"), this.disableButtons("all")), this.eventSupported("keydown") && "object" == typeof jQuery.hotkeys && c.find('[data-provider="bootstrap-markdown"]').each(function () {
                    var n = t(this), r = n.attr("data-hotkey");
                    "" !== r.toLowerCase() && e.bind("keydown", r, function () {
                        return n.trigger("click"), !1
                    })
                }), "preview" === u.initialstate ? this.showPreview() : "fullscreen" === u.initialstate && u.fullscreen.enable && this.setFullscreen(!0)
            } else this.$editor.show();
            return u.autofocus && (this.$textarea.focus(), this.$editor.addClass("active")), u.fullscreen.enable && u.fullscreen !== !1 && (this.$editor.append('<div class="md-fullscreen-controls"><a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="' + this.__getIcon(u.fullscreen.icons.fullscreenOff) + '"></span></a></div>'), this.$editor.on("click", ".exit-fullscreen", function (t) {
                t.preventDefault(), n.setFullscreen(!1)
            })), this.hideButtons(u.hiddenButtons), this.disableButtons(u.disabledButtons), u.dropZoneOptions && (this.$editor.dropzone ? (u.dropZoneOptions.init = function () {
                var t = 0;
                this.on("drop", function (n) {
                    t = e.prop("selectionStart")
                }), this.on("success", function (n, r) {
                    var i = e.val();
                    e.val(i.substring(0, t) + "\n![description](" + r + ")\n" + i.substring(t))
                }), this.on("error", function (t, e, n) {
                    console.log("Error:", e)
                })
            }, this.$textarea.addClass("dropzone"), this.$editor.dropzone(u.dropZoneOptions)) : console.log("dropZoneOptions was configured, but DropZone was not detected.")), u.onShow(this), this
        }, parseContent: function (t) {
            var e, t = t || this.$textarea.val();
            return e = this.$options.parser ? this.$options.parser(t) : "object" == typeof markdown ? markdown.toHTML(t) : "function" == typeof marked ? marked(t) : t
        }, showPreview: function () {
            var e, n, r = this.$options, i = this.$textarea, o = i.next(), a = t("<div/>", {
                "class": "md-preview",
                "data-provider": "markdown-preview"
            });
            return 1 == this.$isPreview ? this : (this.$isPreview = !0, this.disableButtons("all").enableButtons("cmdPreview"), n = r.onPreview(this), e = "string" == typeof n ? n : this.parseContent(), a.html(e), o && "md-footer" == o.attr("class") ? a.insertBefore(o) : i.parent().append(a), a.css({
                width: i.outerWidth() + "px",
                height: i.outerHeight() + "px"
            }), this.$options.resize && a.css("resize", this.$options.resize), i.hide(), a.data("markdown", this), (this.$element.is(":disabled") || this.$element.is("[readonly]")) && (this.$editor.addClass("md-editor-disabled"), this.disableButtons("all")), this)
        }, hidePreview: function () {
            this.$isPreview = !1;
            var t = this.$editor.find('div[data-provider="markdown-preview"]');
            return t.remove(), this.enableButtons("all"), this.disableButtons(this.$options.disabledButtons), this.$textarea.show(), this.__setListener(), this
        }, isDirty: function () {
            return this.$oldContent != this.getContent()
        }, getContent: function () {
            return this.$textarea.val()
        }, setContent: function (t) {
            return this.$textarea.val(t), this
        }, findSelection: function (t) {
            var e, n = this.getContent();
            if (e = n.indexOf(t), e >= 0 && t.length > 0) {
                var r, i = this.getSelection();
                return this.setSelection(e, e + t.length), r = this.getSelection(), this.setSelection(i.start, i.end), r
            }
            return null
        }, getSelection: function () {
            var t = this.$textarea[0];
            return ("selectionStart" in t && function () {
                var e = t.selectionEnd - t.selectionStart;
                return {
                    start: t.selectionStart,
                    end: t.selectionEnd,
                    length: e,
                    text: t.value.substr(t.selectionStart, e)
                }
            } || function () {
                return null
            })()
        }, setSelection: function (t, e) {
            var n = this.$textarea[0];
            return ("selectionStart" in n && function () {
                n.selectionStart = t, n.selectionEnd = e
            } || function () {
                return null
            })()
        }, replaceSelection: function (t) {
            var e = this.$textarea[0];
            return ("selectionStart" in e && function () {
                return e.value = e.value.substr(0, e.selectionStart) + t + e.value.substr(e.selectionEnd, e.value.length), e.selectionStart = e.value.length, this
            } || function () {
                return e.value += t, jQuery(e)
            })()
        }, getNextTab: function () {
            if (0 === this.$nextTab.length)return null;
            var t, e = this.$nextTab.shift();
            return "function" == typeof e ? t = e() : "object" == typeof e && e.length > 0 && (t = e), t
        }, setNextTab: function (t, e) {
            if ("string" == typeof t) {
                var n = this;
                this.$nextTab.push(function () {
                    return n.findSelection(t)
                })
            } else if ("number" == typeof t && "number" == typeof e) {
                var r = this.getSelection();
                this.setSelection(t, e), this.$nextTab.push(this.getSelection()), this.setSelection(r.start, r.end)
            }
        }, __parseButtonNameParam: function (t) {
            return "string" == typeof t ? t.split(" ") : t
        }, enableButtons: function (e) {
            var n = this.__parseButtonNameParam(e), r = this;
            return t.each(n, function (t, e) {
                r.__alterButtons(n[t], function (t) {
                    t.removeAttr("disabled")
                })
            }), this
        }, disableButtons: function (e) {
            var n = this.__parseButtonNameParam(e), r = this;
            return t.each(n, function (t, e) {
                r.__alterButtons(n[t], function (t) {
                    t.attr("disabled", "disabled")
                })
            }), this
        }, hideButtons: function (e) {
            var n = this.__parseButtonNameParam(e), r = this;
            return t.each(n, function (t, e) {
                r.__alterButtons(n[t], function (t) {
                    t.addClass("hidden")
                })
            }), this
        }, showButtons: function (e) {
            var n = this.__parseButtonNameParam(e), r = this;
            return t.each(n, function (t, e) {
                r.__alterButtons(n[t], function (t) {
                    t.removeClass("hidden")
                })
            }), this
        }, eventSupported: function (t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        }, keyup: function (t) {
            var e = !1;
            switch (t.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                    var n;
                    if (n = this.getNextTab(), null !== n) {
                        var r = this;
                        setTimeout(function () {
                            r.setSelection(n.start, n.end)
                        }, 500), e = !0
                    } else {
                        var i = this.getSelection();
                        i.start == i.end && i.end == this.getContent().length ? e = !1 : (this.setSelection(this.getContent().length, this.getContent().length), e = !0)
                    }
                    break;
                case 13:
                    e = !1;
                    break;
                case 27:
                    this.$isFullscreen && this.setFullscreen(!1), e = !1;
                    break;
                default:
                    e = !1
            }
            e && (t.stopPropagation(), t.preventDefault()), this.$options.onChange(this)
        }, change: function (t) {
            return this.$options.onChange(this), this
        }, select: function (t) {
            return this.$options.onSelect(this), this
        }, focus: function (e) {
            var n = this.$options, r = (n.hideable, this.$editor);
            return r.addClass("active"), t(document).find(".md-editor").each(function () {
                if (t(this).attr("id") !== r.attr("id")) {
                    var e;
                    e = t(this).find("textarea").data("markdown"), null === e && (e = t(this).find('div[data-provider="markdown-preview"]').data("markdown")), e && e.blur()
                }
            }), n.onFocus(this), this
        }, blur: function (e) {
            var n = this.$options, r = n.hideable, i = this.$editor, o = this.$editable;
            if (i.hasClass("active") || 0 === this.$element.parent().length) {
                if (i.removeClass("active"), r)if (null !== o.el) {
                    var a = t("<" + o.type + "/>"), s = this.getContent(), u = this.parseContent(s);
                    t(o.attrKeys).each(function (t, e) {
                        a.attr(o.attrKeys[t], o.attrValues[t])
                    }), a.html(u), i.replaceWith(a)
                } else i.hide();
                n.onBlur(this)
            }
            return this
        }
    };
    var n = t.fn.markdown;
    t.fn.markdown = function (n) {
        return this.each(function () {
            var r = t(this), i = r.data("markdown"), o = "object" == typeof n && n;
            i || r.data("markdown", i = new e(this, o))
        })
    }, t.fn.markdown.messages = {}, t.fn.markdown.defaults = {
        autofocus: !1,
        hideable: !1,
        savable: !1,
        width: "inherit",
        height: "inherit",
        resize: "none",
        iconlibrary: "glyph",
        language: "en",
        initialstate: "editor",
        parser: null,
        dropZoneOptions: null,
        buttons: [[{
            name: "groupFont",
            data: [{
                name: "cmdBold",
                hotkey: "Ctrl+B",
                title: "Bold",
                icon: {
                    glyph: "glyphicon glyphicon-bold",
                    fa: "fa fa-bold",
                    "fa-3": "icon-bold",
                    octicons: "octicon octicon-bold"
                },
                callback: function (t) {
                    var e, n, r = t.getSelection(), i = t.getContent();
                    e = 0 === r.length ? t.__localize("strong text") : r.text, "**" === i.substr(r.start - 2, 2) && "**" === i.substr(r.end, 2) ? (t.setSelection(r.start - 2, r.end + 2), t.replaceSelection(e), n = r.start - 2) : (t.replaceSelection("**" + e + "**"), n = r.start + 2), t.setSelection(n, n + e.length)
                }
            }, {
                name: "cmdItalic",
                title: "Italic",
                hotkey: "Ctrl+I",
                icon: {
                    glyph: "glyphicon glyphicon-italic",
                    fa: "fa fa-italic",
                    "fa-3": "icon-italic",
                    octicons: "octicon octicon-italic"
                },
                callback: function (t) {
                    var e, n, r = t.getSelection(), i = t.getContent();
                    e = 0 === r.length ? t.__localize("emphasized text") : r.text, "_" === i.substr(r.start - 1, 1) && "_" === i.substr(r.end, 1) ? (t.setSelection(r.start - 1, r.end + 1), t.replaceSelection(e), n = r.start - 1) : (t.replaceSelection("_" + e + "_"), n = r.start + 1), t.setSelection(n, n + e.length)
                }
            }, {
                name: "cmdHeading",
                title: "Heading",
                hotkey: "Ctrl+H",
                icon: {
                    glyph: "glyphicon glyphicon-header",
                    fa: "fa fa-header",
                    "fa-3": "icon-font",
                    octicons: "octicon octicon-text-size"
                },
                callback: function (t) {
                    var e, n, r, i, o = t.getSelection(), a = t.getContent();
                    e = 0 === o.length ? t.__localize("heading text") : o.text + "\n", r = 4, "### " === a.substr(o.start - r, r) || (r = 3, "###" === a.substr(o.start - r, r)) ? (t.setSelection(o.start - r, o.end), t.replaceSelection(e), n = o.start - r) : o.start > 0 && (i = a.substr(o.start - 1, 1), !!i && "\n" != i) ? (t.replaceSelection("\n\n### " + e), n = o.start + 6) : (t.replaceSelection("### " + e), n = o.start + 4), t.setSelection(n, n + e.length)
                }
            }]
        }, {
            name: "groupLink", data: [{
                name: "cmdUrl",
                title: "URL/Link",
                hotkey: "Ctrl+L",
                icon: {
                    glyph: "glyphicon glyphicon-link",
                    fa: "fa fa-link",
                    "fa-3": "icon-link",
                    octicons: "octicon octicon-link"
                },
                callback: function (e) {
                    var n, r, i, o = e.getSelection();
                    e.getContent();
                    n = 0 === o.length ? e.__localize("enter link description here") : o.text, i = prompt(e.__localize("Insert Hyperlink"), "http://");
                    var a = new RegExp("^((http|https)://|(mailto:)|(//))[a-z0-9]", "i");
                    if (null !== i && "" !== i && "http://" !== i && a.test(i)) {
                        var s = t("<div>" + i + "</div>").text();
                        e.replaceSelection("[" + n + "](" + s + ")"), r = o.start + 1, e.setSelection(r, r + n.length)
                    }
                }
            }, {
                name: "cmdImage",
                title: "Image",
                hotkey: "Ctrl+G",
                icon: {
                    glyph: "glyphicon glyphicon-picture",
                    fa: "fa fa-picture-o",
                    "fa-3": "icon-picture",
                    octicons: "octicon octicon-file-media"
                },
                callback: function (e) {
                    var n, r, i, o = e.getSelection();
                    e.getContent();
                    n = 0 === o.length ? e.__localize("enter image description here") : o.text, i = prompt(e.__localize("Insert Image Hyperlink"), "http://");
                    var a = new RegExp("^((http|https)://|(//))[a-z0-9]", "i");
                    if (null !== i && "" !== i && "http://" !== i && a.test(i)) {
                        var s = t("<div>" + i + "</div>").text();
                        e.replaceSelection("![" + n + "](" + s + ' "' + e.__localize("enter image title here") + '")'), r = o.start + 2, e.setNextTab(e.__localize("enter image title here")), e.setSelection(r, r + n.length)
                    }
                }
            }]
        }, {
            name: "groupMisc",
            data: [{
                name: "cmdList",
                hotkey: "Ctrl+U",
                title: "Unordered List",
                icon: {
                    glyph: "glyphicon glyphicon-list",
                    fa: "fa fa-list",
                    "fa-3": "icon-list-ul",
                    octicons: "octicon octicon-list-unordered"
                },
                callback: function (e) {
                    var n, r, i = e.getSelection();
                    e.getContent();
                    if (0 === i.length)n = e.__localize("list text here"), e.replaceSelection("- " + n), r = i.start + 2; else if (i.text.indexOf("\n") < 0)n = i.text, e.replaceSelection("- " + n), r = i.start + 2; else {
                        var o = [];
                        o = i.text.split("\n"), n = o[0], t.each(o, function (t, e) {
                            o[t] = "- " + e
                        }), e.replaceSelection("\n\n" + o.join("\n")), r = i.start + 4
                    }
                    e.setSelection(r, r + n.length)
                }
            }, {
                name: "cmdListO",
                hotkey: "Ctrl+O",
                title: "Ordered List",
                icon: {
                    glyph: "glyphicon glyphicon-th-list",
                    fa: "fa fa-list-ol",
                    "fa-3": "icon-list-ol",
                    octicons: "octicon octicon-list-ordered"
                },
                callback: function (e) {
                    var n, r, i = e.getSelection();
                    e.getContent();
                    if (0 === i.length)n = e.__localize("list text here"), e.replaceSelection("1. " + n), r = i.start + 3; else if (i.text.indexOf("\n") < 0)n = i.text, e.replaceSelection("1. " + n), r = i.start + 3; else {
                        var o = [];
                        o = i.text.split("\n"), n = o[0], t.each(o, function (t, e) {
                            o[t] = "1. " + e
                        }), e.replaceSelection("\n\n" + o.join("\n")), r = i.start + 5
                    }
                    e.setSelection(r, r + n.length)
                }
            }, {
                name: "cmdCode",
                hotkey: "Ctrl+K",
                title: "Code",
                icon: {
                    glyph: "glyphicon glyphicon-asterisk",
                    fa: "fa fa-code",
                    "fa-3": "icon-code",
                    octicons: "octicon octicon-code"
                },
                callback: function (t) {
                    var e, n, r = t.getSelection(), i = t.getContent();
                    e = 0 === r.length ? t.__localize("code text here") : r.text, "```\n" === i.substr(r.start - 4, 4) && "\n```" === i.substr(r.end, 4) ? (t.setSelection(r.start - 4, r.end + 4), t.replaceSelection(e), n = r.start - 4) : "`" === i.substr(r.start - 1, 1) && "`" === i.substr(r.end, 1) ? (t.setSelection(r.start - 1, r.end + 1), t.replaceSelection(e), n = r.start - 1) : i.indexOf("\n") > -1 ? (t.replaceSelection("```\n" + e + "\n```"), n = r.start + 4) : (t.replaceSelection("`" + e + "`"), n = r.start + 1), t.setSelection(n, n + e.length)
                }
            }, {
                name: "cmdQuote",
                hotkey: "Ctrl+Q",
                title: "Quote",
                icon: {
                    glyph: "glyphicon glyphicon-comment",
                    fa: "fa fa-quote-left",
                    "fa-3": "icon-quote-left",
                    octicons: "octicon octicon-quote"
                },
                callback: function (e) {
                    var n, r, i = e.getSelection();
                    e.getContent();
                    if (0 === i.length)n = e.__localize("quote here"), e.replaceSelection("> " + n), r = i.start + 2; else if (i.text.indexOf("\n") < 0)n = i.text, e.replaceSelection("> " + n), r = i.start + 2; else {
                        var o = [];
                        o = i.text.split("\n"), n = o[0], t.each(o, function (t, e) {
                            o[t] = "> " + e
                        }), e.replaceSelection("\n\n" + o.join("\n")), r = i.start + 4
                    }
                    e.setSelection(r, r + n.length)
                }
            }]
        }, {
            name: "groupUtil",
            data: [{
                name: "cmdPreview",
                toggle: !0,
                hotkey: "Ctrl+P",
                title: "Preview",
                btnText: "Preview",
                btnClass: "btn btn-primary btn-sm",
                icon: {
                    glyph: "glyphicon glyphicon-search",
                    fa: "fa fa-search",
                    "fa-3": "icon-search",
                    octicons: "octicon octicon-search"
                },
                callback: function (t) {
                    var e = t.$isPreview;
                    e === !1 ? t.showPreview() : t.hidePreview()
                }
            }]
        }]],
        additionalButtons: [],
        reorderButtonGroups: [],
        hiddenButtons: [],
        disabledButtons: [],
        footer: "",
        fullscreen: {
            enable: !0,
            icons: {
                fullscreenOn: {
                    fa: "fa fa-expand",
                    glyph: "glyphicon glyphicon-fullscreen",
                    "fa-3": "icon-resize-full",
                    octicons: "octicon octicon-link-external"
                },
                fullscreenOff: {
                    fa: "fa fa-compress",
                    glyph: "glyphicon glyphicon-fullscreen",
                    "fa-3": "icon-resize-small",
                    octicons: "octicon octicon-browser"
                }
            }
        },
        onShow: function (t) {
        },
        onPreview: function (t) {
        },
        onSave: function (t) {
        },
        onBlur: function (t) {
        },
        onFocus: function (t) {
        },
        onChange: function (t) {
        },
        onFullscreen: function (t) {
        },
        onFullscreenExit: function (t) {
        },
        onSelect: function (t) {
        }
    }, t.fn.markdown.Constructor = e, t.fn.markdown.noConflict = function () {
        return t.fn.markdown = n, this
    };
    var r = function (t) {
        var e = t;
        return e.data("markdown") ? void e.data("markdown").showEditor() : void e.markdown()
    }, i = function (e) {
        var n = t(document.activeElement);
        t(document).find(".md-editor").each(function () {
            var e = t(this), r = n.closest(".md-editor")[0] === this, i = e.find("textarea").data("markdown") || e.find('div[data-provider="markdown-preview"]').data("markdown");
            i && !r && i.blur()
        })
    };
    t(document).on("click.markdown.data-api", '[data-provide="markdown-editable"]', function (e) {
        r(t(this)), e.preventDefault()
    }).on("click focusin", function (t) {
        i(t)
    }).ready(function () {
        t('textarea[data-provide="markdown"]').each(function () {
            r(t(this))
        })
    })
}), function (t) {
    t.fn.markdown.messages.zh = {
        Bold: "粗体",
        Italic: "斜体",
        Heading: "标题",
        "URL/Link": "链接",
        Image: "图片",
        List: "列表",
        "Unordered List": "无序列表",
        "Ordered List": "有序列表",
        Code: "代码",
        Quote: "引用",
        Preview: "预览",
        "strong text": "粗体",
        "emphasized text": "强调",
        "heading text": "标题",
        "enter link description here": "输入链接说明",
        "Insert Hyperlink": "URL地址",
        "enter image description here": "输入图片说明",
        "Insert Image Hyperlink": "图片URL地址",
        "enter image title here": "在这里输入图片标题",
        "list text here": "这里是列表文本",
        "code text here": "这里输入代码",
        "quote here": "这里输入引用文本"
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t, e) {
    function n() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function r() {
        var t = new Date;
        return n(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function i(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }

    function o(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    function a(t) {
        return t && !isNaN(t.getTime())
    }

    function s(e, n) {
        function r(t, e) {
            return e.toLowerCase()
        }

        var i, o = t(e).data(), a = {}, s = new RegExp("^" + n.toLowerCase() + "([A-Z])");
        n = new RegExp("^" + n.toLowerCase());
        for (var u in o)n.test(u) && (i = u.replace(s, r), a[i] = o[u]);
        return a
    }

    function u(e) {
        var n = {};
        if (m[e] || (e = e.split("-")[0], m[e])) {
            var r = m[e];
            return t.each(g, function (t, e) {
                e in r && (n[e] = r[e])
            }), n
        }
    }

    var l = function () {
        var e = {
            get: function (t) {
                return this.slice(t)[0]
            }, contains: function (t) {
                for (var e = t && t.valueOf(), n = 0, r = this.length; r > n; n++)if (this[n].valueOf() === e)return n;
                return -1
            }, remove: function (t) {
                this.splice(t, 1)
            }, replace: function (e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            }, clear: function () {
                this.length = 0
            }, copy: function () {
                var t = new l;
                return t.replace(this), t
            }
        };
        return function () {
            var n = [];
            return n.push.apply(n, arguments), t.extend(n, e), n
        }
    }(), c = function (e, n) {
        t(e).data("datepicker", this), this._process_options(n), this.dates = new l, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(v.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (t, e) {
            return parseInt(e) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
    c.prototype = {
        constructor: c, _resolveViewName: function (t, n) {
            return 0 === t || "days" === t || "month" === t ? 0 : 1 === t || "months" === t || "year" === t ? 1 : 2 === t || "years" === t || "decade" === t ? 2 : 3 === t || "decades" === t || "century" === t ? 3 : 4 === t || "centuries" === t || "millennium" === t ? 4 : n === e ? !1 : n
        }, _check_template: function (n) {
            try {
                if (n === e || "" === n)return !1;
                if ((n.match(/[<>]/g) || []).length <= 0)return !0;
                var r = t(n);
                return r.length > 0
            } catch (i) {
                return !1
            }
        }, _process_options: function (e) {
            this._o = t.extend({}, this._o, e);
            var i = this.o = t.extend({}, this._o), o = i.language;
            m[o] || (o = o.split("-")[0], m[o] || (o = p.language)), i.language = o, i.startView = this._resolveViewName(i.startView, 0), i.minViewMode = this._resolveViewName(i.minViewMode, 0), i.maxViewMode = this._resolveViewName(i.maxViewMode, 4), i.startView = Math.min(i.startView, i.maxViewMode), i.startView = Math.max(i.startView, i.minViewMode), i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate !== !1 && (i.multidate = Math.max(0, i.multidate))), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
            var a = v.parseFormat(i.format);
            if (i.startDate !== -(1 / 0) && (i.startDate ? i.startDate instanceof Date ? i.startDate = this._local_to_utc(this._zero_time(i.startDate)) : i.startDate = v.parseDate(i.startDate, a, i.language, i.assumeNearbyYear) : i.startDate = -(1 / 0)), i.endDate !== 1 / 0 && (i.endDate ? i.endDate instanceof Date ? i.endDate = this._local_to_utc(this._zero_time(i.endDate)) : i.endDate = v.parseDate(i.endDate, a, i.language, i.assumeNearbyYear) : i.endDate = 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
                    return parseInt(t, 10)
                }), i.daysOfWeekHighlighted = i.daysOfWeekHighlighted || [], t.isArray(i.daysOfWeekHighlighted) || (i.daysOfWeekHighlighted = i.daysOfWeekHighlighted.split(/[,\s]*/)), i.daysOfWeekHighlighted = t.map(i.daysOfWeekHighlighted, function (t) {
                    return parseInt(t, 10)
                }), i.datesDisabled = i.datesDisabled || [], !t.isArray(i.datesDisabled)) {
                var s = [];
                s.push(v.parseDate(i.datesDisabled, a, i.language, i.assumeNearbyYear)), i.datesDisabled = s
            }
            i.datesDisabled = t.map(i.datesDisabled, function (t) {
                return v.parseDate(t, a, i.language, i.assumeNearbyYear)
            });
            var u = String(i.orientation).toLowerCase().split(/\s+/g), l = i.orientation.toLowerCase();
            if (u = t.grep(u, function (t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }), i.orientation = {x: "auto", y: "auto"}, l && "auto" !== l)if (1 === u.length)switch (u[0]) {
                case"top":
                case"bottom":
                    i.orientation.y = u[0];
                    break;
                case"left":
                case"right":
                    i.orientation.x = u[0]
            } else l = t.grep(u, function (t) {
                return /^left|right$/.test(t)
            }), i.orientation.x = l[0] || "auto", l = t.grep(u, function (t) {
                return /^top|bottom$/.test(t)
            }), i.orientation.y = l[0] || "auto"; else;
            if (i.defaultViewDate) {
                var c = i.defaultViewDate.year || (new Date).getFullYear(), f = i.defaultViewDate.month || 0, h = i.defaultViewDate.day || 1;
                i.defaultViewDate = n(c, f, h)
            } else i.defaultViewDate = r()
        }, _events: [], _secondaryEvents: [], _applyEvents: function (t) {
            for (var n, r, i, o = 0; o < t.length; o++)n = t[o][0], 2 === t[o].length ? (r = e, i = t[o][1]) : 3 === t[o].length && (r = t[o][1], i = t[o][2]), n.on(i, r)
        }, _unapplyEvents: function (t) {
            for (var n, r, i, o = 0; o < t.length; o++)n = t[o][0], 2 === t[o].length ? (i = e, r = t[o][1]) : 3 === t[o].length && (i = t[o][1], r = t[o][2]), n.off(r, i)
        }, _buildEvents: function () {
            var e = {
                keyup: t.proxy(function (e) {
                    -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this), keydown: t.proxy(this.keydown, this), paste: t.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [[this.element, e]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), e], [this.component, {click: t.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: t.proxy(this.show, this),
                keydown: t.proxy(this.keydown, this)
            }]], this._events.push([this.element, "*", {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": t.proxy(function (t) {
                    this.update(t.date)
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: t.proxy(this.click, this)}], [t(window), {resize: t.proxy(this.place, this)}], [t(document), {
                mousedown: t.proxy(function (t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (e, n) {
            var r = n || this.dates.get(-1), i = this._utc_to_local(r);
            this.element.trigger({
                type: e,
                date: i,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function (t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var n = this.dates.get(t);
                    return v.formatDate(n, e, this.o.language)
                }, this)
            })
        }, show: function () {
            var e = this.component ? this.element.find("input") : this.element;
            if (!e.attr("readonly") || this.o.enableOnReadonly !== !1)return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
        }, hide: function () {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        }, destroy: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        }, paste: function (e) {
            var n;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types))n = e.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData)return;
                n = window.clipboardData.getData("Text")
            }
            this.setDate(n), this.update(), e.preventDefault()
        }, _utc_to_local: function (t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        }, _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        }, _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        }, _zero_utc_time: function (t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        }, getDates: function () {
            return t.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return t.map(this.dates, function (t) {
                return new Date(t)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            var t = this.dates.get(-1);
            return "undefined" != typeof t ? new Date(t) : null
        }, clearDates: function () {
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        }, setDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
        }, setUTCDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        }, setDate: o("setDates"), setUTCDate: o("setUTCDates"), remove: o("destroy"), setValue: function () {
            var t = this.getFormattedDate();
            return this.isInput ? this.element.val(t) : this.component && this.element.find("input").val(t), this
        }, getFormattedDate: function (n) {
            n === e && (n = this.o.format);
            var r = this.o.language;
            return t.map(this.dates, function (t) {
                return v.formatDate(t, n, r)
            }).join(this.o.multidateSeparator)
        }, getStartDate: function () {
            return this.o.startDate
        }, setStartDate: function (t) {
            return this._process_options({startDate: t}), this.update(), this.updateNavArrows(), this
        }, getEndDate: function () {
            return this.o.endDate
        }, setEndDate: function (t) {
            return this._process_options({endDate: t}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekDisabled: function (t) {
            return this._process_options({daysOfWeekDisabled: t}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekHighlighted: function (t) {
            return this._process_options({daysOfWeekHighlighted: t}), this.update(), this
        }, setDatesDisabled: function (t) {
            this._process_options({datesDisabled: t}), this.update(), this.updateNavArrows()
        }, place: function () {
            if (this.isInline)return this;
            var e = this.picker.outerWidth(), n = this.picker.outerHeight(), r = 10, i = t(this.o.container), o = i.width(), a = "body" === this.o.container ? t(document).scrollTop() : i.scrollTop(), s = i.offset(), u = [];
            this.element.parents().each(function () {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== e && u.push(parseInt(e))
            });
            var l = Math.max.apply(Math, u) + this.o.zIndexOffset, c = this.component ? this.component.parent().offset() : this.element.offset(), f = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), d = c.left - s.left, p = c.top - s.top;
            "body" !== this.o.container && (p += a), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - h)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= c.left - r) : d + e > o ? (this.picker.addClass("datepicker-orient-right"), d += h - e) : this.picker.addClass("datepicker-orient-left");
            var g, m = this.o.orientation.y;
            if ("auto" === m && (g = -a + p - n, m = 0 > g ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? p -= n + parseInt(this.picker.css("padding-top")) : p += f, this.o.rtl) {
                var v = o - (d + h);
                this.picker.css({top: p, right: v, zIndex: l})
            } else this.picker.css({top: p, left: d, zIndex: l});
            return this
        }, _allow_update: !0, update: function () {
            if (!this._allow_update)return this;
            var e = this.dates.copy(), n = [], r = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function (t, e) {
                e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
            }, this)), r = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy(function (t) {
                return v.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), n = t.grep(n, t.proxy(function (t) {
                return !this.dateWithinRange(t) || !t
            }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, r ? this.setValue() : n.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        }, fillDow: function () {
            var e = this.o.weekStart, n = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (t, e) {
                return parseInt(e) + 1
            }), n += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;)n += '<th class="dow', t.inArray(e, this.o.daysOfWeekDisabled) > -1 && (n += " disabled"), n += '">' + m[this.o.language].daysMin[e++ % 7] + "</th>";
            n += "</tr>", this.picker.find(".datepicker-days thead").append(n)
        }, fillMonths: function () {
            for (var t = this._utc_to_local(this.viewDate), e = "", n = 0; 12 > n;) {
                var r = t && t.getMonth() === n ? " focused" : "";
                e += '<span class="month' + r + '">' + m[this.o.language].monthsShort[n++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(e)
        }, setRange: function (e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (e) {
            var n = [], r = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), o = new Date;
            return e.getUTCFullYear() < r || e.getUTCFullYear() === r && e.getUTCMonth() < i ? n.push("old") : (e.getUTCFullYear() > r || e.getUTCFullYear() === r && e.getUTCMonth() > i) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && n.push("today"), -1 !== this.dates.contains(e) && n.push("active"), this.dateWithinRange(e) || n.push("disabled"), this.dateIsDisabled(e) && n.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected"), e.valueOf() === this.range[0] && n.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
        }, _fill_yearsView: function (n, r, i, o, a, s, u, l) {
            var c, f, h, d, p, g, m, v, y, $, w;
            for (c = "", f = this.picker.find(n), h = parseInt(a / i, 10) * i, p = parseInt(s / o, 10) * o, g = parseInt(u / o, 10) * o, d = t.map(this.dates, function (t) {
                return parseInt(t.getUTCFullYear() / o, 10) * o
            }), f.find(".datepicker-switch").text(h + "-" + (h + 9 * o)), m = h - o, v = -1; 11 > v; v += 1)y = [r], $ = null, -1 === v ? y.push("old") : 10 === v && y.push("new"), -1 !== t.inArray(m, d) && y.push("active"), (p > m || m > g) && y.push("disabled"), m === this.viewDate.getFullYear() && y.push("focused"), l !== t.noop && (w = l(new Date(m, 0, 1)), w === e ? w = {} : "boolean" == typeof w ? w = {enabled: w} : "string" == typeof w && (w = {classes: w}), w.enabled === !1 && y.push("disabled"), w.classes && (y = y.concat(w.classes.split(/\s+/))), w.tooltip && ($ = w.tooltip)), c += '<span class="' + y.join(" ") + '"' + ($ ? ' title="' + $ + '"' : "") + ">" + m + "</span>", m += o;
            f.find("td").html(c)
        }, fill: function () {
            var r, i, o = new Date(this.viewDate), a = o.getUTCFullYear(), s = o.getUTCMonth(), u = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0), l = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0), c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, f = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, h = m[this.o.language].today || m.en.today || "", d = m[this.o.language].clear || m.en.clear || "", p = m[this.o.language].titleFormat || m.en.titleFormat;
            if (!isNaN(a) && !isNaN(s)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(v.formatDate(o, p, this.o.language)), this.picker.find("tfoot .today").text(h).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(d).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var g = n(a, s - 1, 28), y = v.getDaysInMonth(g.getUTCFullYear(), g.getUTCMonth());
                g.setUTCDate(y), g.setUTCDate(y - (g.getUTCDay() - this.o.weekStart + 7) % 7);
                var $ = new Date(g);
                g.getUTCFullYear() < 100 && $.setUTCFullYear(g.getUTCFullYear()), $.setUTCDate($.getUTCDate() + 42), $ = $.valueOf();
                for (var w, b = []; g.valueOf() < $;) {
                    if (g.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                        var x = new Date(+g + (this.o.weekStart - g.getUTCDay() - 7) % 7 * 864e5), _ = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5), k = new Date(Number(k = n(_.getUTCFullYear(), 0, 1)) + (11 - k.getUTCDay()) % 7 * 864e5), S = (_ - k) / 864e5 / 7 + 1;
                        b.push('<td class="cw">' + S + "</td>")
                    }
                    w = this.getClassNames(g), w.push("day"), this.o.beforeShowDay !== t.noop && (i = this.o.beforeShowDay(this._utc_to_local(g)), i === e ? i = {} : "boolean" == typeof i ? i = {enabled: i} : "string" == typeof i && (i = {classes: i}), i.enabled === !1 && w.push("disabled"), i.classes && (w = w.concat(i.classes.split(/\s+/))), i.tooltip && (r = i.tooltip)), w = t.unique(w), b.push('<td class="' + w.join(" ") + '"' + (r ? ' title="' + r + '"' : "") + ">" + g.getUTCDate() + "</td>"), r = null, g.getUTCDay() === this.o.weekEnd && b.push("</tr>"), g.setUTCDate(g.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
                var C = m[this.o.language].monthsTitle || m.en.monthsTitle || "Months", D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : a).end().find("span").removeClass("active");
                if (t.each(this.dates, function (t, e) {
                        e.getUTCFullYear() === a && D.eq(e.getUTCMonth()).addClass("active")
                    }), (u > a || a > c) && D.addClass("disabled"), a === u && D.slice(0, l).addClass("disabled"), a === c && D.slice(f + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var T = this;
                    t.each(D, function (n, r) {
                        var i = new Date(a, n, 1), o = T.o.beforeShowMonth(i);
                        o === e ? o = {} : "boolean" == typeof o ? o = {enabled: o} : "string" == typeof o && (o = {classes: o}), o.enabled !== !1 || t(r).hasClass("disabled") || t(r).addClass("disabled"), o.classes && t(r).addClass(o.classes), o.tooltip && t(r).prop("title", o.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, a, u, c, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, a, u, c, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, a, u, c, this.o.beforeShowCentury)
            }
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate), e = t.getUTCFullYear(), n = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (e) {
            e.preventDefault(), e.stopPropagation();
            var i, o, a, s, u, l, c;
            i = t(e.target), i.hasClass("datepicker-switch") && this.showMode(1);
            var f = i.closest(".prev, .next");
            f.length > 0 && (o = v.modes[this.viewMode].navStep * (f.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, o), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, o), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), i.hasClass("today") && (this.showMode(-2), this._setDate(r(), "linked" === this.o.todayBtn ? null : "view")), i.hasClass("clear") && this.clearDates(), i.hasClass("disabled") || (i.hasClass("day") && (a = parseInt(i.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), u = this.viewDate.getUTCMonth(), i.hasClass("old") && (0 === u ? (u = 11, s -= 1, l = !0, c = !0) : (u -= 1, l = !0)), i.hasClass("new") && (11 === u ? (u = 0, s += 1, l = !0, c = !0) : (u += 1, l = !0)), this._setDate(n(s, u, a)), c && this._trigger("changeYear", this.viewDate), l && this._trigger("changeMonth", this.viewDate)), i.hasClass("month") && (this.viewDate.setUTCDate(1), a = 1, u = i.parent().find("span").index(i), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(u), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(n(s, u, a)), this.showMode()) : this.showMode(-1), this.fill()), (i.hasClass("year") || i.hasClass("decade") || i.hasClass("century")) && (this.viewDate.setUTCDate(1), a = 1, u = 0, s = parseInt(i.text(), 10) || 0, this.viewDate.setUTCFullYear(s), i.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(s, u, a))), i.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(n(s, u, a))), i.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(n(s, u, a))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
        }, _toggle_multidate: function (t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), -1 !== e ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)for (; this.dates.length > this.o.multidate;)this.dates.remove(0)
        }, _setDate: function (t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate");
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        }, moveDay: function (t, e) {
            var n = new Date(t);
            return n.setUTCDate(t.getUTCDate() + e), n
        }, moveWeek: function (t, e) {
            return this.moveDay(t, 7 * e)
        }, moveMonth: function (t, e) {
            if (!a(t))return this.o.defaultViewDate;
            if (!e)return t;
            var n, r, i = new Date(t.valueOf()), o = i.getUTCDate(), s = i.getUTCMonth(), u = Math.abs(e);
            if (e = e > 0 ? 1 : -1, 1 === u)r = -1 === e ? function () {
                return i.getUTCMonth() === s
            } : function () {
                return i.getUTCMonth() !== n
            }, n = s + e, i.setUTCMonth(n), (0 > n || n > 11) && (n = (n + 12) % 12); else {
                for (var l = 0; u > l; l++)i = this.moveMonth(i, e);
                n = i.getUTCMonth(), i.setUTCDate(o), r = function () {
                    return n !== i.getUTCMonth()
                }
            }
            for (; r();)i.setUTCDate(--o), i.setUTCMonth(n);
            return i
        }, moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        }, moveAvailableDate: function (t, e, n) {
            do {
                if (t = this[n](t, e), !this.dateWithinRange(t))return !1;
                n = "moveDay"
            } while (this.dateIsDisabled(t));
            return t
        }, weekOfDateIsDisabled: function (e) {
            return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
        }, dateIsDisabled: function (e) {
            return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function (t) {
                    return i(e, t)
                }).length > 0
        }, dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        }, keydown: function (t) {
            if (!this.picker.is(":visible"))return void((40 === t.keyCode || 27 === t.keyCode) && (this.show(), t.stopPropagation()));
            var e, n, r = !1, i = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length)break;
                    e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(i, e, "moveYear"), n && this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveAvailableDate(i, e, "moveMonth"), n && this._trigger("changeMonth", this.viewDate)) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(i, e, "moveDay") : this.weekOfDateIsDisabled(i) || (n = this.moveAvailableDate(i, e, "moveWeek")) : 1 === this.viewMode ? ((38 === t.keyCode || 40 === t.keyCode) && (e = 4 * e), n = this.moveAvailableDate(i, e, "moveMonth")) : 2 === this.viewMode && ((38 === t.keyCode || 40 === t.keyCode) && (e = 4 * e), n = this.moveAvailableDate(i, e, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse)break;
                    i = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(i), r = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (r) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var o;
                this.isInput ? o = this.element : this.component && (o = this.element.find("input")), o && o.change()
            }
        }, showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + t))),
                this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var f = function (e, n) {
        t(e).data("datepicker", this), this.element = t(e), this.inputs = t.map(n.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete n.inputs, d.call(t(this.inputs), n).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    f.prototype = {
        updateDates: function () {
            this.dates = t.map(this.pickers, function (t) {
                return t.getUTCDate()
            }), this.updateRanges()
        }, updateRanges: function () {
            var e = t.map(this.dates, function (t) {
                return t.valueOf()
            });
            t.each(this.pickers, function (t, n) {
                n.setRange(e)
            })
        }, dateUpdated: function (e) {
            if (!this.updating) {
                this.updating = !0;
                var n = t(e.target).data("datepicker");
                if ("undefined" != typeof n) {
                    var r = n.getUTCDate(), i = t.inArray(e.target, this.inputs), o = i - 1, a = i + 1, s = this.inputs.length;
                    if (-1 !== i) {
                        if (t.each(this.pickers, function (t, e) {
                                e.getUTCDate() || e.setUTCDate(r)
                            }), r < this.dates[o])for (; o >= 0 && r < this.dates[o];)this.pickers[o--].setUTCDate(r); else if (r > this.dates[a])for (; s > a && r > this.dates[a];)this.pickers[a++].setUTCDate(r);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        }, remove: function () {
            t.map(this.pickers, function (t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var h = t.fn.datepicker, d = function (n) {
        var r = Array.apply(null, arguments);
        r.shift();
        var i;
        if (this.each(function () {
                var e = t(this), o = e.data("datepicker"), a = "object" == typeof n && n;
                if (!o) {
                    var l = s(this, "date"), h = t.extend({}, p, l, a), d = u(h.language), g = t.extend({}, p, d, l, a);
                    e.hasClass("input-daterange") || g.inputs ? (t.extend(g, {inputs: g.inputs || e.find("input").toArray()}), o = new f(this, g)) : o = new c(this, g), e.data("datepicker", o)
                }
                "string" == typeof n && "function" == typeof o[n] && (i = o[n].apply(o, r))
            }), i === e || i instanceof c || i instanceof f)return this;
        if (this.length > 1)throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
        return i
    };
    t.fn.datepicker = d;
    var p = t.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        beforeShowYear: t.noop,
        beforeShowDecade: t.noop,
        beforeShowCentury: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {leftArrow: "&laquo;", rightArrow: "&raquo;"}
    }, g = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = c;
    var m = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, v = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}, {
            clsName: "decades",
            navFnc: "FullDecade",
            navStep: 100
        }, {clsName: "centuries", navFnc: "FullCentury", navStep: 1e3}],
        isLeapYear: function (t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        getDaysInMonth: function (t, e) {
            return [31, v.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (t) {
            if ("function" == typeof t.toValue && "function" == typeof t.toDisplay)return t;
            var e = t.replace(this.validParts, "\x00").split("\x00"), n = t.match(this.validParts);
            if (!e || !e.length || !n || 0 === n.length)throw new Error("Invalid date format.");
            return {separators: e, parts: n}
        },
        parseDate: function (i, o, a, s) {
            function u(t, e) {
                return e === !0 && (e = 10), 100 > t && (t += 2e3, t > (new Date).getFullYear() + e && (t -= 100)), t
            }

            function l() {
                var t = this.slice(0, y[d].length), e = y[d].slice(0, t.length);
                return t.toLowerCase() === e.toLowerCase()
            }

            if (!i)return e;
            if (i instanceof Date)return i;
            if ("string" == typeof o && (o = v.parseFormat(o)), o.toValue)return o.toValue(i, o, a);
            var f, h, d, p, g = /([\-+]\d+)([dmwy])/, y = i.match(/([\-+]\d+)([dmwy])/g), $ = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            }, w = {yesterday: "-1d", today: "+0d", tomorrow: "+1d"};
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                for (i = new Date, d = 0; d < y.length; d++)f = g.exec(y[d]), h = parseInt(f[1]), p = $[f[2]], i = c.prototype[p](i, h);
                return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())
            }
            if ("undefined" != typeof w[i] && (i = w[i], y = i.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i))) {
                for (i = new Date, d = 0; d < y.length; d++)f = g.exec(y[d]), h = parseInt(f[1]), p = $[f[2]], i = c.prototype[p](i, h);
                return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())
            }
            y = i && i.match(this.nonpunctuation) || [], i = new Date;
            var b, x, _ = {}, k = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], S = {
                yyyy: function (t, e) {
                    return t.setUTCFullYear(s ? u(e, s) : e)
                }, yy: function (t, e) {
                    return t.setUTCFullYear(s ? u(e, s) : e)
                }, m: function (t, e) {
                    if (isNaN(t))return t;
                    for (e -= 1; 0 > e;)e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;)t.setUTCDate(t.getUTCDate() - 1);
                    return t
                }, d: function (t, e) {
                    return t.setUTCDate(e)
                }
            };
            S.M = S.MM = S.mm = S.m, S.dd = S.d, i = r();
            var C = o.parts.slice();
            if (y.length !== C.length && (C = t(C).filter(function (e, n) {
                    return -1 !== t.inArray(n, k)
                }).toArray()), y.length === C.length) {
                var D;
                for (d = 0, D = C.length; D > d; d++) {
                    if (b = parseInt(y[d], 10), f = C[d], isNaN(b))switch (f) {
                        case"MM":
                            x = t(m[a].months).filter(l), b = t.inArray(x[0], m[a].months) + 1;
                            break;
                        case"M":
                            x = t(m[a].monthsShort).filter(l), b = t.inArray(x[0], m[a].monthsShort) + 1
                    }
                    _[f] = b
                }
                var T, A;
                for (d = 0; d < k.length; d++)A = k[d], A in _ && !isNaN(_[A]) && (T = new Date(i), S[A](T, _[A]), isNaN(T) || (i = T))
            }
            return i
        },
        formatDate: function (e, n, r) {
            if (!e)return "";
            if ("string" == typeof n && (n = v.parseFormat(n)), n.toDisplay)return n.toDisplay(e, n, r);
            var i = {
                d: e.getUTCDate(),
                D: m[r].daysShort[e.getUTCDay()],
                DD: m[r].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: m[r].monthsShort[e.getUTCMonth()],
                MM: m[r].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m, e = [];
            for (var o = t.extend([], n.separators), a = 0, s = n.parts.length; s >= a; a++)o.length && e.push(o.shift()), e.push(i[n.parts[a]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    v.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = h, this
    }, t.fn.datepicker.version = "1.6.1", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var n = t(this);
        n.data("datepicker") || (e.preventDefault(), d.call(n, "show"))
    }), t(function () {
        d.call(t('[data-provide="datepicker-inline"]'))
    })
}), function (t) {
    t.fn.datepicker.dates["zh-CN"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        today: "今日",
        clear: "清除",
        format: "yyyy年mm月dd日",
        titleFormat: "yyyy年mm月",
        weekStart: 1
    }
}(jQuery);