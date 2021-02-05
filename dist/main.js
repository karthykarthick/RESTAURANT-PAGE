(() => { 'use strict'; const e = { 890: (e, n, t) => { t.d(n, { Z: () => i }); const r = t(645); const a = t.n(r)()(function (e) { return e[1] }); a.push([e.id, 'nav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\nimg {\r\n  width: 36%;\r\n  object-fit: unset;\r\n  border: 4px white solid;\r\n  border-radius: 10px;\r\n}\r\n\r\n.mainText {\r\n  font-size: 25px;\r\n  padding: 10px;\r\n  color: white;\r\n  text-shadow: 2px 1px black;\r\n}\r\n\r\n.menuContainer {\r\n  margin-left: 3%;\r\n  background-color: rgba(53, 199, 40, 0.812);\r\n  padding: 1%;\r\n  border: 4px white solid;\r\n  border-radius: 10px;\r\n  height: fit-content;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 6%;\r\n  background-image: url(https://thumbs.dreamstime.com/b/seamless-vegetables-pattern-green-background-vegetarian-food-43296007.jpg);\r\n  height: -webkit-fill-available;\r\n  min-height: fit-content;\r\n}\r\n\r\nspan {\r\n  width: -webkit-fill-available;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  border: 1px solid green;\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 16px;\r\n  list-style-type: none;\r\n  font-size: 26px;\r\n  padding: 10px;\r\n  color: white;\r\n  text-shadow: 2px 1px black;\r\n}\r\n\r\n.info {\r\n  font-size: 18px;\r\n  padding: 10px;\r\n  color: white;\r\n  text-shadow: 2px 1px black;\r\n  line-height: 2em;\r\n  font-weight: 700;\r\n  max-width: 60%;\r\n}\r\n\r\n.active {\r\n  background-color: rgba(53, 199, 40, 0.412);\r\n}\r\n\r\n.title {\r\n  color: white;\r\n  text-shadow: 2px 1px black;\r\n  border-bottom: 1px solid;\r\n  font-size: 35px;\r\n}\r\n', '']); const i = a }, 645: e => { e.exports = function (e) { const n = []; return n.toString = function () { return this.map(function (n) { const t = e(n); return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t }).join('') }, n.i = function (e, t, r) { typeof e === 'string' && (e = [[null, e, '']]); const a = {}; if (r) for (let i = 0; i < this.length; i++) { const o = this[i][0]; o != null && (a[o] = !0) } for (let c = 0; c < e.length; c++) { const d = [].concat(e[c]); r && a[d[0]] || (t && (d[2] ? d[2] = ''.concat(t, ' and ').concat(d[2]) : d[2] = t), n.push(d)) } }, n } }, 379: (e, n, t) => { let r; const a = (function () { const e = {}; return function (n) { if (void 0 === e[n]) { let t = document.querySelector(n); if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try { t = t.contentDocument.head } catch (e) { t = null }e[n] = t } return e[n] } }()); const i = []; function o (e) { for (var n = -1, t = 0; t < i.length; t++) if (i[t].identifier === e) { n = t; break } return n } function c (e, n) { for (var t = {}, r = [], a = 0; a < e.length; a++) { const c = e[a]; const d = n.base ? c[0] + n.base : c[0]; const l = t[d] || 0; const s = ''.concat(d, ' ').concat(l); t[d] = l + 1; const p = o(s); const u = { css: c[1], media: c[2], sourceMap: c[3] }; p !== -1 ? (i[p].references++, i[p].updater(u)) : i.push({ identifier: s, updater: f(u, n), references: 1 }), r.push(s) } return r } function d (e) { const n = document.createElement('style'); const r = e.attributes || {}; if (void 0 === r.nonce) { const i = t.nc; i && (r.nonce = i) } if (Object.keys(r).forEach(function (e) { n.setAttribute(e, r[e]) }), typeof e.insert === 'function')e.insert(n); else { const o = a(e.insert || 'head'); if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); o.appendChild(n) } return n } let l; const s = (l = [], function (e, n) { return l[e] = n, l.filter(Boolean).join('\n') }); function p (e, n, t, r) { const a = t ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css; if (e.styleSheet)e.styleSheet.cssText = s(n, a); else { const i = document.createTextNode(a); const o = e.childNodes; o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(i, o[n]) : e.appendChild(i) } } function u (e, n, t) { let r = t.css; const a = t.media; const i = t.sourceMap; if (a ? e.setAttribute('media', a) : e.removeAttribute('media'), i && typeof btoa !== 'undefined' && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')), e.styleSheet)e.styleSheet.cssText = r; else { for (;e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(r)) } } let m = null; let h = 0; function f (e, n) { let t, r, a; if (n.singleton) { const i = h++; t = m || (m = d(n)), r = p.bind(null, t, i, !1), a = p.bind(null, t, i, !0) } else t = d(n), r = u.bind(null, t, n), a = function () { !(function (e) { if (e.parentNode === null) return !1; e.parentNode.removeChild(e) }(t)) }; return r(e), function (n) { if (n) { if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return; r(e = n) } else a() } }e.exports = function (e, n) { (n = n || {}).singleton || typeof n.singleton === 'boolean' || (n.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r)); let t = c(e = e || [], n); return function (e) { if (e = e || [], Object.prototype.toString.call(e) === '[object Array]') { for (let r = 0; r < t.length; r++) { const a = o(t[r]); i[a].references-- } for (var d = c(e, n), l = 0; l < t.length; l++) { const s = o(t[l]); i[s].references === 0 && (i[s].updater(), i.splice(s, 1)) }t = d } } } } }; const n = {}; function t (r) { if (n[r]) return n[r].exports; const a = n[r] = { id: r, exports: {} }; return e[r](a, a.exports, t), a.exports }t.n = e => { const n = e && e.__esModule ? () => e.default : () => e; return t.d(n, { a: n }), n }, t.d = (e, n) => { for (const r in n)t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.g = (function () { if (typeof globalThis === 'object') return globalThis; try { return this || new Function('return this')() } catch (e) { if (typeof window === 'object') return window } }()), t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => { let e; t.g.importScripts && (e = t.g.location + ''); const n = t.g.document; if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) { const r = n.getElementsByTagName('script'); r.length && (e = r[r.length - 1].src) } if (!e) throw new Error('Automatic publicPath is not supported in this browser'); e = e.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^/]+$/, '/'), t.p = e })(), (() => { const e = t(379); const n = t.n(e); const r = t(890); n()(r.Z, { insert: 'head', singleton: !1 }), r.Z.locals; const a = t.p + '5e9538edee9292759993d996f7268d3f.jpg'; const i = () => { const e = document.createElement('section'); const n = document.createElement('h1'); const t = document.createElement('p'); const r = document.createElement('div'); const i = new Image(); return i.src = a, e.appendChild(i), n.textContent = 'Welcome to Green Smell!', t.innerHTML = 'Feel more than welcome to check out our prices and our unique cousine. Here you can find all the information necessary to order and the options in our menu.', n.classList.add('title'), t.classList.add('mainText'), r.classList.add('menuContainer'), r.appendChild(n), r.appendChild(t), e.appendChild(r), e }; const o = t.p + '106140c62a7bc7259f9ca93ba73519d6.jpeg'; const c = t.p + '5e137b8f0bfdc6f06c387fdcdcabf776.jpg'; document.body.appendChild(function () { const e = document.getElementById('content'); const n = document.createElement('nav'); const t = document.createElement('span'); const r = document.createElement('span'); const a = document.createElement('span'); return t.addEventListener('click', () => { document.querySelector('.active').classList.remove('active'), t.classList.add('active'), e.removeChild(e.lastChild), e.appendChild(i()) }), r.addEventListener('click', () => { document.querySelector('.active').classList.remove('active'), r.classList.add('active'), e.removeChild(e.lastChild), e.appendChild((() => { const e = document.createElement('section'); const n = document.createElement('h1'); const t = document.createElement('div'); const r = new Image(); const a = document.createElement('ul'); const i = ['Salad', '$8', 'French Fries', '$15', 'Spaghetti', '$14', 'Soup', '$7', 'Pizza', '$14', 'Lasagna', '$13', 'Burguer', '$11']; return r.src = o, n.textContent = 'Menu:', t.classList.add('menuContainer'), n.classList.add('title'), e.appendChild(r), t.appendChild(n), (() => { for (let e = 0; e < i.length; e += 1) { const n = document.createElement('li'); n.textContent = i[e], a.appendChild(n) } })(), t.appendChild(a), e.appendChild(t), e })()) }), a.addEventListener('click', () => { document.querySelector('.active').classList.remove('active'), a.classList.add('active'), e.removeChild(e.lastChild), e.appendChild((() => { const e = document.createElement('section'); const n = document.createElement('h1'); const t = document.createElement('div'); const r = document.createElement('p'); const a = new Image(); return a.src = c, n.textContent = 'Contact:', r.innerHTML = 'Adress: Thuripakkam, Chennai-600097 \n    Phone number: (91) 98765-4321;\n     Email: weknowyourtaste@example.com\n    Website: www.weknowyourtaste.com', t.classList.add('menuContainer'), r.classList.add('info'), n.classList.add('title'), e.appendChild(a), t.appendChild(n), t.appendChild(r), e.appendChild(t), e })()) }), t.textContent = 'HOME', t.classList.add('active'), r.textContent = 'MENU', a.textContent = 'MORE INFO', n.appendChild(t), n.appendChild(r), n.appendChild(a), e.appendChild(n), e.appendChild(i()), e }()) })() })()
