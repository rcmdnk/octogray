(function() {
  function h(a) {
    throw a;
  }
  var i = true,
    j = null,
    l = false,
    aa = navigator,
    ba = Error,
    ca = Boolean,
    m = undefined,
    da = encodeURIComponent,
    ea = parseInt,
    fa = parseFloat,
    n = String,
    p = window,
    ga = Number,
    r = Object,
    u = document,
    ha = decodeURIComponent,
    ia = RegExp,
    ja = Array,
    v = Math;

  function ka(a, b) {
    return a.toString = b
  }
  function la(a, b) {
    return a.length = b
  }
  function ma(a, b) {
    return a.className = b
  }
  function na(a, b) {
    return a.width = b
  }
  function oa(a, b) {
    return a.cancel = b
  }
  function pa(a, b) {
    return a.innerHTML = b
  }
  function qa(a, b) {
    return a.value = b
  }

  function ra(a, b) {
    return a.currentTarget = b
  }
  function sa(a, b) {
    return a.left = b
  }
  function ta(a, b) {
    return a.target = b
  }
  function ua(a, b) {
    return a.send = b
  }
  function va(a, b) {
    return a.isAvailable = b
  }
  function wa(a, b) {
    return a.bottom = b
  }
  function xa(a, b) {
    return a.restore = b
  }
  function ya(a, b) {
    return a.display = b
  }
  function za(a, b) {
    return a.isSupported = b
  }
  function Aa(a, b) {
    return a.height = b
  }
  function Ba(a, b) {
    return a.right = b
  }
  var x = "appendChild",
    Ca = "scrollTop",
    Da = "previousSibling",
    y = "push",
    z = "toString",
    A = "length",
    Ea = "propertyIsEnumerable",
    Fa = "getBoundingClientRect",
    Ga = "plugins",
    C = "prototype",
    Ha = "test",
    Ia = "shift",
    Ja = "className",
    Ka = "exec",
    La = "clearTimeout",
    D = "width",
    Ma = "index",
    Na = "text",
    Oa = "clientWidth",
    Pa = "cancel",
    Qa = "round",
    Ra = "abort",
    Sa = "slice",
    Ta = "setTimeout",
    E = "replace",
    Ua = "nodeType",
    Va = "document",
    Wa = "split",
    Xa = "offsetWidth",
    Ya = "concat",
    Za = "createTextNode",
    $a = "value",
    ab = "location",
    bb = "item",
    cb = "insertBefore",
    F = "indexOf",
    db = "message",
    eb = "hasOwnProperty",
    fb = "getComputedStyle",
    G = "dispatchEvent",
    H = "style",
    gb = "close",
    hb = "nodeName",
    ib = "currentTarget",
    I = "body",
    K = "left",
    jb = "write",
    kb = "ownerDocument",
    lb = "removeChild",
    mb = "target",
    nb = "screenX",
    ob = "screenY",
    pb = "lastChild",
    L = "call",
    qb = "match",
    rb = "getBoxObjectFor",
    sb = "send",
    tb = "createElement",
    ub = "protocol",
    vb = "keyCode",
    M = "firstChild",
    wb = "forEach",
    xb = "isAvailable",
    yb = "clientHeight",
    zb = "scrollLeft",
    Ab = "clientLeft",
    N = "bottom",
    Bb = "currentStyle",
    Cb = "href",
    Db = "substring",
    Eb = "clientTop",
    Fb = "handleEvent",
    Gb = "restore",
    Hb = "type",
    Jb = "apply",
    Kb = "translate",
    Lb = "parentWindow",
    O = "tagName",
    Mb = "setPosition",
    Nb = "reset",
    Ob = "defaultView",
    Pb = "name",
    P = "parentNode",
    Qb = "fileName",
    Rb = "isSupported",
    Sb = "nextSibling",
    Tb = "contentWindow",
    Q = "height",
    Ub = "offsetHeight",
    Vb = "join",
    Wb = "getElementsByTagName",
    Xb = "nodeValue",
    Yb = "documentElement",
    Zb = "substr",
    $b = "right";

  function ac(a) {
    return function(b) {
      this[a] = b
    }
  }
  function bc(a) {
    return function() {
      return this[a]
    }
  }
  var R, cc = cc || {}, S = this;

  function dc(a, b, c) {
    a = a[Wa](".");
    c = c || S;
    !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
    for (var d; a[A] && (d = a[Ia]());) if (!a[A] && b !== m) c[d] = b;
    else c = c[d] ? c[d] : c[d] = {}
  }
  function ec(a, b) {
    for (var c = a[Wa]("."), d = b || S, e; e = c[Ia]();) if (d[e]) d = d[e];
    else return j;
    return d
  }
  function fc() {}
  function gc(a) {
    a.Dc = function() {
      return a.Hd || (a.Hd = new a)
    }
  }

  function hc(a) {
    var b = typeof a;
    if (b == "object") if (a) {
      if (a instanceof ja || !(a instanceof r) && r[C][z][L](a) == "[object Array]" || typeof a[A] == "number" && typeof a.splice != "undefined" && typeof a[Ea] != "undefined" && !a[Ea]("splice")) return "array";
      if (!(a instanceof r) && (r[C][z][L](a) == "[object Function]" || typeof a[L] != "undefined" && typeof a[Ea] != "undefined" && !a[Ea]("call"))) return "function"
    } else return "null";
    else if (b == "function" && typeof a[L] == "undefined") return "object";
    return b
  }

  function ic(a) {
    return hc(a) == "array"
  }
  function jc(a) {
    var b = hc(a);
    return b == "array" || b == "object" && typeof a[A] == "number"
  }
  function kc(a) {
    return typeof a == "string"
  }
  function lc(a) {
    return hc(a) == "function"
  }
  function mc(a) {
    a = hc(a);
    return a == "object" || a == "array" || a == "function"
  }
  function nc(a) {
    return a[oc] || (a[oc] = ++pc)
  }
  var oc = "closure_uid_" + v.floor(v.random() * 2147483648)[z](36),
    pc = 0;

  function T(a, b) {
    var c = b || S;
    if (arguments[A] > 2) {
      var d = ja[C][Sa][L](arguments, 2);
      return function() {
        var e = ja[C][Sa][L](arguments);
        ja[C].unshift[Jb](e, d);
        return a[Jb](c, e)
      }
    } else return function() {
      return a[Jb](c, arguments)
    }
  }
  function qc(a) {
    var b = ja[C][Sa][L](arguments, 1);
    return function() {
      var c = ja[C][Sa][L](arguments);
      c.unshift[Jb](c, b);
      return a[Jb](this, c)
    }
  }
  var rc = Date.now || function() {
      return +new Date
    };

  function V(a, b) {
    function c() {}
    c.prototype = b[C];
    a.s = b[C];
    a.prototype = new c;
    a[C].constructor = a
  };
  var sc = google[Kb]._const,
    tc = sc._cl || "en",
    uc = sc._cuc,
    vc = sc._cnad || l,
    wc = sc._cnal || {}, xc = sc._cam == "lib" ? 1 : 0,
    yc;
  a: {
    for (var zc = u[Wb]("meta"), Ac = 0; Ac < zc[A]; ++Ac) if (zc[Ac][Pb] == "google-translate-customization") {
      yc = zc[Ac].content;
      break a
    }
    yc = ""
  }
  var Bc = yc,
    Cc = (sc._cac || "te") + (xc == 1 ? "_lib" : ""),
    Dc = sc._pah || "",
    Ec = sc._pbi || "",
    Fc = sc._pci || "",
    Gc = sc._phf || "",
    Hc = sc._plla || "",
    Ic = sc._pli || "",
    Jc = sc._pmi || "",
    Kc = sc._ps || "",
    Lc = sc._puh || "",
    Mc = p[ab][ub] == "https:" ? "https://" : "http://",
    Nc = Mc + "www.google.com/images/cleardot.gif",
    Oc = Mc + "www.google.com/intl/" + tc[E]("_", "-") + "/images/logos/translate_logo_sm.png",
    Pc = "http://" + Lc + "/translate_suggestion";

  function Qc() {}
  Qc[C].qc = l;
  Qc[C].p = function() {
    if (!this.qc) {
      this.qc = i;
      this.r()
    }
  };
  Qc[C].r = function() {};

  function Rc(a) {
    return a[E](/^[\s\xa0]+|[\s\xa0]+$/g, "")
  }
  function Sc(a) {
    return a[E](/^[\s\xa0]+/, "")
  }
  function Tc(a) {
    return a[E](/[\s\xa0]+$/, "")
  }
  var Uc = /^[a-zA-Z0-9\-_.!~*'()]*$/;

  function Vc(a) {
    a = n(a);
    if (!Uc[Ha](a)) return da(a);
    return a
  }

  function Wc(a, b) {
    if (b) return a[E](Xc, "&amp;")[E](Yc, "&lt;")[E](Zc, "&gt;")[E]($c, "&quot;");
    else {
      if (!ad[Ha](a)) return a;
      if (a[F]("&") != -1) a = a[E](Xc, "&amp;");
      if (a[F]("<") != -1) a = a[E](Yc, "&lt;");
      if (a[F](">") != -1) a = a[E](Zc, "&gt;");
      if (a[F]('"') != -1) a = a[E]($c, "&quot;");
      return a
    }
  }
  var Xc = /&/g,
    Yc = /</g,
    Zc = />/g,
    $c = /\"/g,
    ad = /[&<>\"]/;

  function bd(a) {
    if (a[F]("&") != -1) {
      if ("document" in S && a[F]("<") == -1) {
        a = a;
        var b = S[Va][tb]("div");
        pa(b, "<pre>" + a + "</pre>");
        b[M].normalize && b[M].normalize();
        a = b[M][M][Xb];
        pa(b, "");
        a = a[E](/(\r\n|\r|\n)/g, "\n")
      } else a = cd(a);
      return a
    }
    return a
  }
  function cd(a) {
    return a[E](/&([^;]+);/g, function(b, c) {
      switch (c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          if (c.charAt(0) == "#") {
            var d = ga("0" + c[Zb](1));
            if (!isNaN(d)) return n.fromCharCode(d)
          }
          return b
      }
    })
  }

  function dd(a, b) {
    for (var c = 0, d = Rc(n(a))[Wa]("."), e = Rc(n(b))[Wa]("."), f = v.max(d[A], e[A]), g = 0; c == 0 && g < f; g++) {
      var k = d[g] || "",
        o = e[g] || "",
        q = ia("(\\d*)(\\D*)", "g"),
        w = ia("(\\d*)(\\D*)", "g");
      do {
        var s = q[Ka](k) || ["", "", ""],
          t = w[Ka](o) || ["", "", ""];
        if (s[0][A] == 0 && t[0][A] == 0) break;
        c = s[1][A] == 0 ? 0 : ea(s[1], 10);
        var U = t[1][A] == 0 ? 0 : ea(t[1], 10);
        c = ed(c, U) || ed(s[2][A] == 0, t[2][A] == 0) || ed(s[2], t[2])
      } while (c == 0)
    }
    return c
  }
  function ed(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0
  };
  var fd = ja[C],
    gd = fd[F] ? function(a, b, c) {
      return fd[F][L](a, b, c)
    } : function(a, b, c) {
      c = c == j ? 0 : c < 0 ? v.max(0, a[A] + c) : c;
      if (kc(a)) {
        if (!kc(b) || b[A] != 1) return -1;
        return a[F](b, c)
      }
      for (c = c; c < a[A]; c++) if (c in a && a[c] === b) return c;
      return -1
    }, hd = fd[wb] ? function(a, b, c) {
      fd[wb][L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[A], e = kc(a) ? a[Wa]("") : a, f = 0; f < d; f++) f in e && b[L](c, e[f], f, a)
    };

  function id(a, b) {
    return gd(a, b) >= 0
  }
  function jd(a, b) {
    var c = gd(a, b),
      d;
    if (d = c >= 0) {
      var e = a;
      c = c;
      fd.splice[L](e, c, 1)
    }
    return d
  }

  function kd() {
    return fd[Ya][Jb](fd, arguments)
  }
  function ld(a) {
    if (ic(a)) return kd(a);
    else {
      for (var b = [], c = 0, d = a[A]; c < d; c++) b[c] = a[c];
      return b
    }
  }
  function md(a) {
    for (var b = 1; b < arguments[A]; b++) {
      var c = arguments[b],
        d;
      if (ic(c) || (d = jc(c)) && c[eb]("callee")) a[y][Jb](a, c);
      else if (d) for (var e = a[A], f = c[A], g = 0; g < f; g++) a[e + g] = c[g];
      else a[y](c)
    }
  }
  function nd(a) {
    return fd.splice[Jb](a, od(arguments, 1))
  }
  function od(a, b, c) {
    return arguments[A] <= 2 ? fd[Sa][L](a, b) : fd[Sa][L](a, b, c)
  };

  function pd(a, b) {
    this.x = a !== m ? a : 0;
    this.y = b !== m ? b : 0
  }
  pd[C].Q = function() {
    return new pd(this.x, this.y)
  };

  function qd(a, b) {
    return new pd(a.x - b.x, a.y - b.y)
  };

  function rd(a, b) {
    na(this, a);
    Aa(this, b)
  }
  rd[C].Q = function() {
    return new rd(this[D], this[Q])
  };
  rd[C].floor = function() {
    na(this, v.floor(this[D]));
    Aa(this, v.floor(this[Q]));
    return this
  };
  rd[C].round = function() {
    na(this, v[Qa](this[D]));
    Aa(this, v[Qa](this[Q]));
    return this
  };

  function sd(a, b, c) {
    for (var d in a) b[L](c, a[d], d, a)
  }
  function td(a) {
    var b = [],
      c = 0;
    for (var d in a) b[c++] = a[d];
    return b
  }
  function ud(a) {
    var b = [],
      c = 0;
    for (var d in a) b[c++] = d;
    return b
  }
  function vd(a, b) {
    var c;
    if (c = b in a) delete a[b];
    return c
  }
  var wd = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];

  function xd(a) {
    for (var b, c, d = 1; d < arguments[A]; d++) {
      c = arguments[d];
      for (b in c) a[b] = c[b];
      for (var e = 0; e < wd[A]; e++) {
        b = wd[e];
        if (r[C][eb][L](c, b)) a[b] = c[b]
      }
    }
  };
  var yd, zd, Ad, Bd, Cd, Dd, Ed;

  function Fd() {
    return S.navigator ? S.navigator.userAgent : j
  }
  function Gd() {
    return S.navigator
  }
  Cd = Bd = Ad = zd = yd = l;
  var Hd;
  if (Hd = Fd()) {
    var Id = Gd();
    yd = Hd[F]("Opera") == 0;
    zd = !yd && Hd[F]("MSIE") != -1;
    Bd = (Ad = !yd && Hd[F]("WebKit") != -1) && Hd[F]("Mobile") != -1;
    Cd = !yd && !Ad && Id.product == "Gecko"
  }
  var Jd = yd,
    W = zd,
    Kd = Cd,
    Ld = Ad,
    Md = Bd,
    Nd, Od = Gd(),
    Pd = Nd = Od && Od.platform || "";
  Dd = Pd[F]("Mac") != -1;
  Pd[F]("Win");
  Pd[F]("Linux");
  Ed = !! Gd() && (Gd().appVersion || "")[F]("X11") != -1;
  var Qd = Dd,
    Rd = Ed,
    Sd;
  a: {
    var Td = "",
      Ud;
    if (Jd && S.opera) {
      var Vd = S.opera.version;
      Td = typeof Vd == "function" ? Vd() : Vd
    } else {
      if (Kd) Ud = /rv\:([^\);]+)(\)|;)/;
      else if (W) Ud = /MSIE\s+([^\);]+)(\)|;)/;
      else if (Ld) Ud = /WebKit\/(\S+)/;
      if (Ud) {
        var Wd = Ud[Ka](Fd());
        Td = Wd ? Wd[1] : ""
      }
    }
    if (W) {
      var Xd, Yd = S[Va];
      Xd = Yd ? Yd.documentMode : m;
      if (Xd > fa(Td)) {
        Sd = n(Xd);
        break a
      }
    }
    Sd = Td
  }
  var Zd = Sd,
    $d = {};

  function ae(a) {
    return $d[a] || ($d[a] = dd(Zd, a) >= 0)
  };
  var be, ce = !W || ae("9"),
    de = W && !ae("9");

  function ee(a) {
    return (a = a[Ja]) && typeof a[Wa] == "function" ? a[Wa](/\s+/) : []
  }
  function fe(a) {
    var b = ee(a),
      c = od(arguments, 1),
      d;
    d = b;
    c = c;
    for (var e = 0, f = 0; f < c[A]; f++) if (!id(d, c[f])) {
      d[y](c[f]);
      e++
    }
    d = e == c[A];
    ma(a, b[Vb](" "));
    return d
  }
  function ge(a) {
    var b = ee(a),
      c = od(arguments, 1),
      d;
    d = b;
    c = c;
    for (var e = 0, f = 0; f < d[A]; f++) if (id(c, d[f])) {
      nd(d, f--, 1);
      e++
    }
    d = e == c[A];
    ma(a, b[Vb](" "));
    return d
  };

  function he(a) {
    return a ? new ie(je(a)) : be || (be = new ie)
  }

  function ke(a, b, c, d) {
    a = d || a;
    b = b && b != "*" ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (!Ld || le(u) || ae("528")) && (b || c)) {
      c = b + (c ? "." + c : "");
      return a.querySelectorAll(c)
    }
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, g; g = a[f]; f++) if (b == g[hb]) d[e++] = g;
        la(d, e);
        return d
      } else return a
    }
    a = a[Wb](b || "*");
    if (c) {
      d = {};
      for (f = e = 0; g = a[f]; f++) {
        b = g[Ja];
        if (typeof b[Wa] == "function" && id(b[Wa](/\s+/), c)) d[e++] = g
      }
      la(d, e);
      return d
    } else return a
  }

  function me(a, b) {
    sd(b, function(c, d) {
      if (d == "style") a[H].cssText = c;
      else if (d == "class") ma(a, c);
      else if (d == "for") a.htmlFor = c;
      else if (d in ne) a.setAttribute(ne[d], c);
      else a[d] = c
    })
  }
  var ne = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
    type: "type"
  };

  function oe(a) {
    var b = a[Va];
    if (Ld && !ae("500") && !Md) {
      if (typeof a.innerHeight == "undefined") a = p;
      b = a.innerHeight;
      var c = a[Va][Yb].scrollHeight;
      if (a == a.top) if (c < b) b -= 15;
      return new rd(a.innerWidth, b)
    }
    a = le(b);
    if (Jd && !ae("9.50")) a = l;
    a = a ? b[Yb] : b[I];
    return new rd(a[Oa], a[yb])
  }
  function pe(a) {
    a = !Ld && le(a) ? a[Yb] : a[I];
    return new pd(a[zb], a[Ca])
  }
  function qe() {
    return re(u, arguments)
  }

  function re(a, b) {
    var c = b[0],
      d = b[1];
    if (!ce && d && (d[Pb] || d[Hb])) {
      c = ["<", c];
      d[Pb] && c[y](' name="', Wc(d[Pb]), '"');
      if (d[Hb]) {
        c[y](' type="', Wc(d[Hb]), '"');
        var e = {};
        xd(e, d);
        d = e;
        delete d[Hb]
      }
      c[y](">");
      c = c[Vb]("")
    }
    c = a[tb](c);
    if (d) if (kc(d)) ma(c, d);
    else ic(d) ? fe[Jb](j, [c][Ya](d)) : me(c, d);
    b[A] > 2 && se(a, c, b, 2);
    return c
  }
  function se(a, b, c, d) {
    function e(g) {
      if (g) b[x](kc(g) ? a[Za](g) : g)
    }
    for (d = d; d < c[A]; d++) {
      var f = c[d];
      jc(f) && !(mc(f) && f[Ua] > 0) ? hd(te(f) ? ld(f) : f, e) : e(f)
    }
  }

  function le(a) {
    return a.compatMode == "CSS1Compat"
  }
  function ue(a, b) {
    a[x](b)
  }
  function ve(a) {
    se(je(a), a, arguments, 1)
  }
  function we(a) {
    for (var b; b = a[M];) a[lb](b)
  }
  function xe(a, b) {
    b[P] && b[P][cb](a, b)
  }
  function ye(a) {
    return a && a[P] ? a[P][lb](a) : j
  }
  function ze(a, b) {
    var c = b[P];
    c && c.replaceChild(a, b)
  }
  function Ae(a, b) {
    if (a.contains && b[Ua] == 1) return a == b || a.contains(b);
    if (typeof a.compareDocumentPosition != "undefined") return a == b || ca(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b[P];
    return b == a
  }

  function je(a) {
    return a[Ua] == 9 ? a : a[kb] || a[Va]
  }
  function Be(a) {
    return a = Ld ? a[Va] || a[Tb][Va] : a.contentDocument || a[Tb][Va]
  }
  function Ce(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a[M] && a[M][Ua] == 3) {
      for (; a[pb] != a[M];) a[lb](a[pb]);
      a[M].data = b
    } else {
      we(a);
      var c = je(a);
      a[x](c[Za](b))
    }
  }
  var De = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
  }, Ee = {
    IMG: " ",
    BR: "\n"
  };

  function Fe(a) {
    if (de && "innerText" in a) a = a.innerText[E](/(\r\n|\r|\n)/g, "\n");
    else {
      var b = [];
      Ge(a, b, i);
      a = b[Vb]("")
    }
    a = a[E](/ \xAD /g, " ")[E](/\xAD/g, "");
    W || (a = a[E](/ +/g, " "));
    if (a != " ") a = a[E](/^\s*/, "");
    return a
  }
  function Ge(a, b, c) {
    if (!(a[hb] in De)) if (a[Ua] == 3) c ? b[y](n(a[Xb])[E](/(\r\n|\r|\n)/g, "")) : b[y](a[Xb]);
    else if (a[hb] in Ee) b[y](Ee[a[hb]]);
    else for (a = a[M]; a;) {
      Ge(a, b, c);
      a = a[Sb]
    }
  }

  function te(a) {
    if (a && typeof a[A] == "number") if (mc(a)) return typeof a[bb] == "function" || typeof a[bb] == "string";
    else if (lc(a)) return typeof a[bb] == "function";
    return l
  }
  function ie(a) {
    this.a = a || S[Va] || u
  }
  function He(a) {
    return a.a
  }
  R = ie[C];
  R.n = function(a) {
    return kc(a) ? this.a.getElementById(a) : a
  };
  R.Wc = ie[C].n;
  R.t = function() {
    return re(this.a, arguments)
  };
  R.createElement = function(a) {
    return this.a[tb](a)
  };
  R.createTextNode = function(a) {
    return this.a[Za](a)
  };

  function Ie(a) {
    return le(a.a)
  }

  function Je(a) {
    return pe(a.a)
  }
  R.appendChild = ue;
  R.H = ve;
  R.hc = we;
  R.removeNode = ye;
  R.contains = Ae;
  R.Ib = Ce;
  var Ke;
  !W || ae("9");
  W && ae("8");

  function Le(a, b) {
    this.type = a;
    ta(this, b);
    ra(this, this[mb])
  }
  V(Le, Qc);
  Le[C].r = function() {
    delete this[Hb];
    delete this[mb];
    delete this[ib]
  };
  Le[C].a = l;
  Le[C].b = i;

  function Me(a, b) {
    a && Ne(this, a, b)
  }
  V(Me, Le);
  R = Me[C];
  ta(R, j);
  R.relatedTarget = j;
  R.offsetX = 0;
  R.offsetY = 0;
  R.clientX = 0;
  R.clientY = 0;
  R.screenX = 0;
  R.screenY = 0;
  R.button = 0;
  R.keyCode = 0;
  R.charCode = 0;
  R.ctrlKey = l;
  R.altKey = l;
  R.shiftKey = l;
  R.metaKey = l;
  R.Pd = l;
  R.yc = j;

  function Ne(a, b, c) {
    var d = a.type = b[Hb];
    ta(a, b[mb] || b.srcElement);
    ra(a, c);
    if (c = b.relatedTarget) {
      if (Kd) try {
        c = c[hb] && c
      } catch (e) {
        c = j
      }
    } else if (d == "mouseover") c = b.fromElement;
    else if (d == "mouseout") c = b.toElement;
    a.relatedTarget = c;
    a.offsetX = b.offsetX !== m ? b.offsetX : b.layerX;
    a.offsetY = b.offsetY !== m ? b.offsetY : b.layerY;
    a.clientX = b.clientX !== m ? b.clientX : b.pageX;
    a.clientY = b.clientY !== m ? b.clientY : b.pageY;
    a.screenX = b[nb] || 0;
    a.screenY = b[ob] || 0;
    a.button = b.button;
    a.keyCode = b[vb] || 0;
    a.charCode = b.charCode || (d == "keypress" ? b[vb] : 0);
    a.ctrlKey = b.ctrlKey;
    a.altKey = b.altKey;
    a.shiftKey = b.shiftKey;
    a.metaKey = b.metaKey;
    a.Pd = Qd ? b.metaKey : b.ctrlKey;
    a.yc = b;
    delete a.b;
    delete a.a
  }
  R.r = function() {
    Me.s.r[L](this);
    this.yc = j;
    ta(this, j);
    ra(this, j);
    this.relatedTarget = j
  };

  function Oe(a, b) {
    this.d = b;
    this.b = [];
    var c = a;
    if (c > this.d) h(ba("[goog.structs.SimplePool] Initial cannot be greater than max"));
    for (var d = 0; d < c; d++) this.b[y](this.a ? this.a() : {})
  }
  V(Oe, Qc);
  Oe[C].a = j;
  Oe[C].c = j;

  function Pe(a) {
    if (a.b[A]) return a.b.pop();
    return a.a ? a.a() : {}
  }
  function Qe(a, b) {
    a.b[A] < a.d ? a.b[y](b) : Re(a, b)
  }
  function Re(a, b) {
    if (a.c) a.c(b);
    else if (mc(b)) if (lc(b.p)) b.p();
    else for (var c in b) delete b[c]
  }
  Oe[C].r = function() {
    Oe.s.r[L](this);
    for (var a = this.b; a[A];) Re(this, a.pop());
    delete this.b
  };
  var Se, Te, Ue = "ScriptEngine" in S;
  Te = (Se = Ue && S.ScriptEngine() == "JScript") ? S.ScriptEngineMajorVersion() + "." + S.ScriptEngineMinorVersion() + "." + S.ScriptEngineBuildVersion() : "0";
  var Ve = Se,
    We = Te;

  function Xe() {}
  var Ye = 0;
  Xe[C].ga = 0;
  Xe[C].ab = l;
  Xe[C].a = l;
  Xe[C].handleEvent = function(a) {
    if (this.b) return this.Va[L](this.Bb || this.src, a);
    return this.Va[Fb][L](this.Va, a)
  };
  var Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf;
  (function() {
    function a() {
      return {
        o: 0,
        ca: 0
      }
    }
    function b() {
      return []
    }
    function c() {
      function t(U) {
        return g[L](t.src, t.ga, U)
      }
      return t
    }
    function d() {
      return new Xe
    }
    function e() {
      return new Me
    }
    var f = Ve && !(dd(We, "5.7") >= 0),
      g;
    df = function(t) {
      g = t
    };
    if (f) {
      Ze = function() {
        return Pe(k)
      };
      $e = function(t) {
        Qe(k, t)
      };
      af = function() {
        return Pe(o)
      };
      bf = function(t) {
        Qe(o, t)
      };
      cf = function() {
        return Pe(q)
      };
      ef = function() {
        Qe(q, c())
      };
      ff = function() {
        return Pe(w)
      };
      gf = function(t) {
        Qe(w, t)
      };
      hf = function() {
        return Pe(s)
      };
      jf = function(t) {
        Qe(s, t)
      };
      var k = new Oe(0, 600);
      k.a = a;
      var o = new Oe(0, 600);
      o.a = b;
      var q = new Oe(0, 600);
      q.a = c;
      var w = new Oe(0, 600);
      w.a = d;
      var s = new Oe(0, 600);
      s.a = e
    } else {
      Ze = a;
      $e = fc;
      af = b;
      bf = fc;
      cf = c;
      ef = fc;
      ff = d;
      gf = fc;
      hf = e;
      jf = fc
    }
  })();
  var kf = {}, lf = {}, mf = {}, nf = "on",
    of = {};

  function pf(a, b, c, d, e) {
    if (b) if (ic(b)) {
      for (var f = 0; f < b[A]; f++) pf(a, b[f], c, d, e);
      return j
    } else {
      d = !! d;
      var g = lf;
      b in g || (g[b] = Ze());
      g = g[b];
      if (!(d in g)) {
        g[d] = Ze();
        g.o++
      }
      g = g[d];
      var k = nc(a),
        o;
      g.ca++;
      if (g[k]) {
        o = g[k];
        for (f = 0; f < o[A]; f++) {
          g = o[f];
          if (g.Va == c && g.Bb == e) {
            if (g.ab) break;
            return o[f].ga
          }
        }
      } else {
        o = g[k] = af();
        g.o++
      }
      f = cf();
      f.src = a;
      var q = g = ff();
      c = c;
      var w = f,
        s = a,
        t = b,
        U = d;
      e = e;
      if (lc(c)) q.b = i;
      else if (c && c[Fb] && lc(c[Fb])) q.b = l;
      else h(ba("Invalid listener argument"));
      q.Va = c;
      q.c = w;
      q.src = s;
      q.type = t;
      q.hb = !! U;
      q.Bb = e;
      q.a = l;
      q.ga = ++Ye;
      q.ab = l;
      e = g.ga;
      f.ga = e;
      o[y](g);
      kf[e] = g;
      mf[k] || (mf[k] = af());
      mf[k][y](g);
      if (a.addEventListener) {
        if (a == S || !a.vc) a.addEventListener(b, f, d)
      } else a.attachEvent(qf(b), f);
      return e
    } else h(ba("Invalid event type"))
  }
  function rf(a, b, c, d, e) {
    if (ic(b)) {
      for (var f = 0; f < b[A]; f++) rf(a, b[f], c, d, e);
      return j
    }
    d = !! d;
    a = sf(a, b, d);
    if (!a) return l;
    for (f = 0; f < a[A]; f++) if (a[f].Va == c && a[f].hb == d && a[f].Bb == e) return tf(a[f].ga);
    return l
  }

  function tf(a) {
    if (!kf[a]) return l;
    var b = kf[a];
    if (b.ab) return l;
    var c = b.src,
      d = b[Hb],
      e = b.c,
      f = b.hb;
    if (c.removeEventListener) {
      if (c == S || !c.vc) c.removeEventListener(d, e, f)
    } else c.detachEvent && c.detachEvent(qf(d), e);
    c = nc(c);
    e = lf[d][f][c];
    if (mf[c]) {
      var g = mf[c];
      jd(g, b);
      g[A] == 0 && delete mf[c]
    }
    b.ab = i;
    e.Kc = i;
    uf(d, f, c, e);
    delete kf[a];
    return i
  }

  function uf(a, b, c, d) {
    if (!d.Db) if (d.Kc) {
      for (var e = 0, f = 0; e < d[A]; e++) if (d[e].ab) {
        var g = d[e].c;
        g.src = j;
        ef(g);
        gf(d[e])
      } else {
        if (e != f) d[f] = d[e];
        f++
      }
      la(d, f);
      d.Kc = l;
      if (f == 0) {
        bf(d);
        delete lf[a][b][c];
        lf[a][b].o--;
        if (lf[a][b].o == 0) {
          $e(lf[a][b]);
          delete lf[a][b];
          lf[a].o--
        }
        if (lf[a].o == 0) {
          $e(lf[a]);
          delete lf[a]
        }
      }
    }
  }

  function vf(a, b, c) {
    var d = 0,
      e = a == j,
      f = b == j,
      g = c == j;
    c = !! c;
    if (e) sd(mf, function(o) {
      for (var q = o[A] - 1; q >= 0; q--) {
        var w = o[q];
        if ((f || b == w[Hb]) && (g || c == w.hb)) {
          tf(w.ga);
          d++
        }
      }
    });
    else {
      a = nc(a);
      if (mf[a]) {
        a = mf[a];
        for (e = a[A] - 1; e >= 0; e--) {
          var k = a[e];
          if ((f || b == k[Hb]) && (g || c == k.hb)) {
            tf(k.ga);
            d++
          }
        }
      }
    }
    return d
  }
  function sf(a, b, c) {
    var d = lf;
    if (b in d) {
      d = d[b];
      if (c in d) {
        d = d[c];
        a = nc(a);
        if (d[a]) return d[a]
      }
    }
    return j
  }
  function qf(a) {
    if (a in of) return of[a];
    return of[a] = nf + a
  }

  function wf(a, b, c, d, e) {
    var f = 1;
    b = nc(b);
    if (a[b]) {
      a.ca--;
      a = a[b];
      if (a.Db) a.Db++;
      else a.Db = 1;
      try {
        for (var g = a[A], k = 0; k < g; k++) {
          var o = a[k];
          if (o && !o.ab) f &= xf(o, e) !== l
        }
      } finally {
        a.Db--;
        uf(c, d, b, a)
      }
    }
    return ca(f)
  }
  function xf(a, b) {
    var c = a[Fb](b);
    a.a && tf(a.ga);
    return c
  }

  function yf(a, b) {
    if (!kf[a]) return i;
    var c = kf[a],
      d = c[Hb],
      e = lf;
    if (!(d in e)) return i;
    e = e[d];
    var f, g, k;
    if (Ke === m) Ke = W && !S.addEventListener;
    if (k = Ke) {
      f = b || ec("window.event");
      k = i in e;
      var o = l in e;
      if (k) {
        if (f[vb] < 0 || f.returnValue != m) return i;
        a: {
          var q = f,
            w = l;
          if (q[vb] == 0) try {
            q.keyCode = -1;
            break a
          } catch (s) {
            w = i
          }
          if (w || q.returnValue == m) q.returnValue = i
        }
      }
      q = hf();
      Ne(q, f, this);
      f = i;
      try {
        if (k) {
          for (var t = af(), U = q[ib]; U; U = U[P]) t[y](U);
          g = e[i];
          g.ca = g.o;
          for (var J = t[A] - 1; !q.a && J >= 0 && g.ca; J--) {
            ra(q, t[J]);
            f &= wf(g, t[J], d, i, q)
          }
          if (o) {
            g = e[l];
            g.ca = g.o;
            for (J = 0; !q.a && J < t[A] && g.ca; J++) {
              ra(q, t[J]);
              f &= wf(g, t[J], d, l, q)
            }
          }
        } else f = xf(c, q)
      } finally {
        if (t) {
          la(t, 0);
          bf(t)
        }
        q.p();
        jf(q)
      }
      return f
    }
    d = new Me(b, this);
    try {
      f = xf(c, d)
    } finally {
      d.p()
    }
    return f
  }
  df(yf);

  function zf(a, b, c, d) {
    this.top = a;
    Ba(this, b);
    wa(this, c);
    sa(this, d)
  }
  zf[C].Q = function() {
    return new zf(this.top, this[$b], this[N], this[K])
  };
  zf[C].contains = function(a) {
    a = !this || !a ? l : a instanceof zf ? a[K] >= this[K] && a[$b] <= this[$b] && a.top >= this.top && a[N] <= this[N] : a.x >= this[K] && a.x <= this[$b] && a.y >= this.top && a.y <= this[N];
    return a
  };

  function Af(a, b, c, d) {
    sa(this, a);
    this.top = b;
    na(this, c);
    Aa(this, d)
  }
  Af[C].Q = function() {
    return new Af(this[K], this.top, this[D], this[Q])
  };
  Af[C].contains = function(a) {
    return a instanceof Af ? this[K] <= a[K] && this[K] + this[D] >= a[K] + a[D] && this.top <= a.top && this.top + this[Q] >= a.top + a[Q] : a.x >= this[K] && a.x <= this[K] + this[D] && a.y >= this.top && a.y <= this.top + this[Q]
  };

  function Bf(a, b, c) {
    kc(b) ? Cf(a, c, b) : sd(b, qc(Cf, a))
  }
  function Cf(a, b, c) {
    a[H][Df(c)] = b
  }
  function Ef(a, b) {
    var c = je(a);
    if (c[Ob] && c[Ob][fb]) if (c = c[Ob][fb](a, "")) return c[b];
    return j
  }
  function Ff(a, b) {
    return Ef(a, b) || (a[Bb] ? a[Bb][b] : j) || a[H][b]
  }
  function Gf(a, b, c) {
    var d, e = Kd && (Qd || Rd) && ae("1.9");
    if (b instanceof pd) {
      d = b.x;
      b = b.y
    } else {
      d = b;
      b = c
    }
    sa(a[H], Hf(d, e));
    a[H].top = Hf(b, e)
  }
  function If(a) {
    var b = a[Fa]();
    if (W) {
      a = a[kb];
      b.left -= a[Yb][Ab] + a[I][Ab];
      b.top -= a[Yb][Eb] + a[I][Eb]
    }
    return b
  }

  function Jf(a) {
    if (W) return a.offsetParent;
    var b = je(a),
      c = Ff(a, "position"),
      d = c == "fixed" || c == "absolute";
    for (a = a[P]; a && a != b; a = a[P]) {
      c = Ff(a, "position");
      d = d && c == "static" && a != b[Yb] && a != b[I];
      if (!d && (a.scrollWidth > a[Oa] || a.scrollHeight > a[yb] || c == "fixed" || c == "absolute")) return a
    }
    return j
  }

  function Kf(a) {
    var b = new zf(0, Infinity, Infinity, 0),
      c = he(a),
      d = c.a[I],
      e = !Ld && le(c.a) ? c.a[Yb] : c.a[I],
      f;
    for (a = a; a = Jf(a);) if ((!W || a[Oa] != 0) && (!Ld || a[yb] != 0 || a != d) && (a.scrollWidth != a[Oa] || a.scrollHeight != a[yb]) && Ff(a, "overflow") != "visible") {
      var g = Lf(a),
        k;
      k = a;
      if (Kd && !ae("1.9")) {
        var o = fa(Ef(k, "borderLeftWidth"));
        if (Mf(k)) {
          var q = k[Xa] - k[Oa] - o - fa(Ef(k, "borderRightWidth"));
          o += q
        }
        k = new pd(o, fa(Ef(k, "borderTopWidth")))
      } else k = new pd(k[Ab], k[Eb]);
      g.x += k.x;
      g.y += k.y;
      b.top = v.max(b.top, g.y);
      Ba(b, v.min(b[$b], g.x + a[Oa]));
      wa(b, v.min(b[N], g.y + a[yb]));
      sa(b, v.max(b[K], g.x));
      f = f || a != e
    }
    d = e[zb];
    e = e[Ca];
    if (Ld) {
      b.left += d;
      b.top += e
    } else {
      sa(b, v.max(b[K], d));
      b.top = v.max(b.top, e)
    }
    if (!f || Ld) {
      b.right += d;
      b.bottom += e
    }
    c = oe(c.a[Lb] || c.a[Ob] || p);
    Ba(b, v.min(b[$b], d + c[D]));
    wa(b, v.min(b[N], e + c[Q]));
    return b.top >= 0 && b[K] >= 0 && b[N] > b.top && b[$b] > b[K] ? b : j
  }

  function Lf(a) {
    var b, c = je(a),
      d = Ff(a, "position"),
      e = Kd && c[rb] && !a[Fa] && d == "absolute" && (b = c[rb](a)) && (b[nb] < 0 || b[ob] < 0),
      f = new pd(0, 0),
      g;
    b = c ? c[Ua] == 9 ? c : je(c) : u;
    g = W && !Ie(he(b)) ? b[I] : b[Yb];
    if (a == g) return f;
    if (a[Fa]) {
      b = If(a);
      a = Je(he(c));
      f.x = b[K] + a.x;
      f.y = b.top + a.y
    } else if (c[rb] && !e) {
      b = c[rb](a);
      a = c[rb](g);
      f.x = b[nb] - a[nb];
      f.y = b[ob] - a[ob]
    } else {
      b = a;
      do {
        f.x += b.offsetLeft;
        f.y += b.offsetTop;
        if (b != a) {
          f.x += b[Ab] || 0;
          f.y += b[Eb] || 0
        }
        if (Ld && Ff(b, "position") == "fixed") {
          f.x += c[I][zb];
          f.y += c[I][Ca];
          break
        }
        b = b.offsetParent
      } while (b && b != a);
      if (Jd || Ld && d == "absolute") f.y -= c[I].offsetTop;
      for (b = a;
      (b = Jf(b)) && b != c[I] && b != g;) {
        f.x -= b[zb];
        if (!Jd || b[O] != "TR") f.y -= b[Ca]
      }
    }
    return f
  }
  function Nf(a, b) {
    var c = new pd(0, 0),
      d = je(a) ? je(a)[Lb] || je(a)[Ob] : p,
      e = a;
    do {
      var f;
      if (d == b) f = Lf(e);
      else {
        var g = e;
        f = new pd;
        if (g[Ua] == 1) if (g[Fa]) {
          var k = If(g);
          f.x = k[K];
          f.y = k.top
        } else {
          k = Je(he(g));
          g = Lf(g);
          f.x = g.x - k.x;
          f.y = g.y - k.y
        } else {
          f.x = g.clientX;
          f.y = g.clientY
        }
        f = f
      }
      f = f;
      c.x += f.x;
      c.y += f.y
    } while (d && d != b && (e = d.frameElement) && (d = d.parent));
    return c
  }

  function Hf(a, b) {
    if (typeof a == "number") a = (b ? v[Qa](a) : a) + "px";
    return a
  }
  function Of(a) {
    var b = Jd && !ae("10");
    if (Ff(a, "display") != "none") return b ? new rd(a[Xa] || a[Oa], a[Ub] || a[yb]) : new rd(a[Xa], a[Ub]);
    var c = a[H],
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    ya(c, "inline");
    if (b) {
      b = a[Xa] || a[Oa];
      a = a[Ub] || a[yb]
    } else {
      b = a[Xa];
      a = a[Ub]
    }
    ya(c, d);
    c.position = f;
    c.visibility = e;
    return new rd(b, a)
  }
  function Pf(a) {
    var b = Lf(a);
    a = Of(a);
    return new Af(b.x, b.y, a[D], a[Q])
  }
  var Qf = {};

  function Df(a) {
    return Qf[a] || (Qf[a] = n(a)[E](/\-([a-z])/g, function(b, c) {
      return c.toUpperCase()
    }))
  }
  function X(a, b) {
    ya(a[H], b ? "" : "none")
  }
  function Rf(a, b) {
    var c = he(b),
      d = j;
    if (W) {
      d = c.a.createStyleSheet();
      Sf(d, a)
    } else {
      var e = ke(c.a, "head", void 0, void 0)[0];
      if (!e) {
        d = ke(c.a, "body", void 0, void 0)[0];
        e = c.t("head");
        d[P][cb](e, d)
      }
      d = c.t("style");
      Sf(d, a);
      c[x](e, d)
    }
    return d
  }
  function Sf(a, b) {
    if (W) a.cssText = b;
    else {
      var c = Ld ? "innerText" : "innerHTML";
      a[c] = b
    }
  }
  function Mf(a) {
    return "rtl" == Ff(a, "direction")
  }

  function Tf(a) {
    return new rd(a[Xa], a[Ub])
  }

  function Uf(a, b) {
    var c = je(a),
      d = Ie(he(c));
    if (W && (!d || !ae("8"))) {
      c = a[H];
      if (d) {
        c.pixelWidth = b[D];
        c.pixelHeight = b[Q]
      } else {
        var e = a,
          f = "padding";
        if (W) {
          d = Vf(e, f + "Left");
          var g = Vf(e, f + "Right"),
            k = Vf(e, f + "Top");
          e = Vf(e, f + "Bottom");
          d = new zf(k, g, e, d)
        } else {
          d = Ef(e, f + "Left");
          g = Ef(e, f + "Right");
          k = Ef(e, f + "Top");
          e = Ef(e, f + "Bottom");
          d = new zf(fa(k), fa(g), fa(e), fa(d))
        }
        f = a;
        if (W) {
          g = Wf(f, "borderLeft");
          k = Wf(f, "borderRight");
          e = Wf(f, "borderTop");
          f = Wf(f, "borderBottom");
          g = new zf(e, k, f, g)
        } else {
          g = Ef(f, "borderLeftWidth");
          k = Ef(f, "borderRightWidth");
          e = Ef(f, "borderTopWidth");
          f = Ef(f, "borderBottomWidth");
          g = new zf(fa(e), fa(k), fa(f), fa(g))
        }
        c.pixelWidth = b[D] + g[K] + d[K] + d[$b] + g[$b];
        c.pixelHeight = b[Q] + g.top + d.top + d[N] + g[N]
      }
    } else {
      c = b;
      d = "content-box";
      g = a[H];
      if (Kd) g.MozBoxSizing = d;
      else if (Ld) g.WebkitBoxSizing = d;
      else if (Jd && !ae("9.50")) d ? g.setProperty("box-sizing", d) : g.removeProperty("box-sizing");
      else g.qe = d;
      na(g, c[D] + "px");
      Aa(g, c[Q] + "px")
    }
  }

  function Xf(a, b, c, d) {
    if (/^\d+px?$/ [Ha](b)) return ea(b, 10);
    else {
      var e = a[H][c],
        f = a.runtimeStyle[c];
      a.runtimeStyle[c] = a[Bb][c];
      a[H][c] = b;
      b = a[H][d];
      a[H][c] = e;
      a.runtimeStyle[c] = f;
      return b
    }
  }
  function Vf(a, b) {
    return Xf(a, a[Bb] ? a[Bb][b] : j, "left", "pixelLeft")
  }
  var Yf = {
    thin: 2,
    medium: 4,
    thick: 6
  };

  function Wf(a, b) {
    if ((a[Bb] ? a[Bb][b + "Style"] : j) == "none") return 0;
    var c = a[Bb] ? a[Bb][b + "Width"] : j;
    if (c in Yf) return Yf[c];
    return Xf(a, c, "left", "pixelLeft")
  };

  function Zf(a) {
    this.c = a
  }
  V(Zf, Qc);
  var $f = new Oe(0, 100);

  function Y(a, b, c, d, e, f) {
    if (ic(c)) for (var g = 0; g < c[A]; g++) Y(a, b, c[g], d, e, f);
    else {
      c = pf(b, c, d || a, e || l, f || a.c || a);
      b = a;
      c = c;
      if (b.a) b.a[c] = i;
      else if (b.b) {
        b.a = Pe($f);
        b.a[b.b] = i;
        b.b = j;
        b.a[c] = i
      } else b.b = c
    }
    return a
  }

  function ag(a, b, c, d, e, f) {
    if (a.b || a.a) if (ic(c)) for (var g = 0; g < c[A]; g++) ag(a, b, c[g], d, e, f);
    else {
      a: {
        d = d || a;
        f = f || a.c || a;
        e = !! (e || l);
        if (b = sf(b, c, e)) for (c = 0; c < b[A]; c++) if (b[c].Va == d && b[c].hb == e && b[c].Bb == f) {
          b = b[c];
          break a
        }
        b = j
      }
      if (b) {
        b = b.ga;
        tf(b);
        if (a.a) vd(a.a, b);
        else if (a.b == b) a.b = j
      }
    }
    return a
  }
  function bg(a) {
    if (a.a) {
      for (var b in a.a) {
        tf(b);
        delete a.a[b]
      }
      Qe($f, a.a);
      a.a = j
    } else a.b && tf(a.b)
  }
  Zf[C].r = function() {
    Zf.s.r[L](this);
    bg(this)
  };
  Zf[C].handleEvent = function() {
    h(ba("EventHandler.handleEvent not implemented"))
  };

  function cg() {}
  V(cg, Qc);
  R = cg[C];
  R.vc = i;
  R.Hb = j;
  R.lc = ac("Hb");
  R.addEventListener = function(a, b, c, d) {
    pf(this, a, b, c, d)
  };
  R.removeEventListener = function(a, b, c, d) {
    rf(this, a, b, c, d)
  };
  R.dispatchEvent = function(a) {
    a = a;
    if (kc(a)) a = new Le(a, this);
    else if (a instanceof Le) ta(a, a[mb] || this);
    else {
      var b = a;
      a = new Le(a[Hb], this);
      xd(a, b)
    }
    b = 1;
    var c, d = a[Hb],
      e = lf;
    if (d in e) {
      e = e[d];
      d = i in e;
      var f;
      if (d) {
        c = [];
        for (f = this; f; f = f.Hb) c[y](f);
        f = e[i];
        f.ca = f.o;
        for (var g = c[A] - 1; !a.a && g >= 0 && f.ca; g--) {
          ra(a, c[g]);
          b &= wf(f, c[g], a[Hb], i, a) && a.b != l
        }
      }
      if (f = l in e) {
        f = e[l];
        f.ca = f.o;
        if (d) for (g = 0; !a.a && g < c[A] && f.ca; g++) {
          ra(a, c[g]);
          b &= wf(f, c[g], a[Hb], l, a) && a.b != l
        } else for (c = this; !a.a && c && f.ca; c = c.Hb) {
          ra(a, c);
          b &= wf(f, c,
          a[Hb], l, a) && a.b != l
        }
      }
      a = ca(b)
    } else a = i;
    return a
  };
  R.r = function() {
    cg.s.r[L](this);
    vf(this);
    this.Hb = j
  };

  function dg() {}
  gc(dg);
  dg[C].a = 0;
  dg.Dc();

  function eg(a) {
    this.b = a || he();
    this.Wd = fg
  }
  V(eg, cg);
  eg[C].N = dg.Dc();
  var fg = j;
  R = eg[C];
  R.R = j;
  R.Ea = l;
  R.h = j;
  R.Wd = j;
  R.Md = j;
  R.Qa = j;
  R.ta = j;
  R.wb = j;
  R.he = l;
  R.n = bc("h");
  R.lc = function(a) {
    if (this.Qa && this.Qa != a) h(ba("Method not supported"));
    eg.s.lc[L](this, a)
  };
  R.t = function() {
    this.h = this.b[tb]("div")
  };
  R.oa = function(a) {
    gg(this, a)
  };

  function gg(a, b, c) {
    if (a.Ea) h(ba("Component already rendered"));
    a.h || a.t();
    b ? b[cb](a.h, c || j) : a.b.a[I][x](a.h);
    if (!a.Qa || a.Qa.Ea) a.Z()
  }
  R.Z = function() {
    this.Ea = i;
    hg(this, function(a) {
      !a.Ea && a.n() && a.Z()
    })
  };
  R.M = function() {
    hg(this, function(a) {
      a.Ea && a.M()
    });
    this.D && bg(this.D);
    this.Ea = l
  };
  R.r = function() {
    eg.s.r[L](this);
    this.Ea && this.M();
    if (this.D) {
      this.D.p();
      delete this.D
    }
    hg(this, function(a) {
      a.p()
    });
    !this.he && this.h && ye(this.h);
    this.Qa = this.Md = this.h = this.wb = this.ta = j
  };

  function Z(a, b) {
    return (a.R || (a.R = ":" + (a.N.a++)[z](36))) + "." + b
  }
  function hg(a, b, c) {
    a.ta && hd(a.ta, b, c)
  }
  R.removeChild = function(a, b) {
    if (a) {
      var c = kc(a) ? a : a.R || (a.R = ":" + (a.N.a++)[z](36)),
        d;
      if (this.wb && c) {
        d = this.wb;
        d = c in d ? d[c] : void 0;
        d = d || j
      } else d = j;
      a = d;
      if (c && a) {
        vd(this.wb, c);
        jd(this.ta, a);
        if (b) {
          a.M();
          a.h && ye(a.h)
        }
        c = a;
        if (c == j) h(ba("Unable to set parent component"));
        c.Qa = j;
        eg.s.lc[L](c, j)
      }
    }
    if (!a) h(ba("Child is not in parent component"));
    return a
  };
  R.hc = function(a) {
    for (; this.ta && this.ta[A] != 0;) this[lb](this.ta ? this.ta[0] || j : j, a)
  };

  function ig(a, b, c, d, e, f, g, k) {
    var o, q = c.offsetParent;
    if (q) {
      var w = q[O] == "HTML" || q[O] == "BODY";
      if (!w || Ff(q, "position") != "static") {
        o = Lf(q);
        w || (o = qd(o, new pd(q[zb], q[Ca])))
      }
    }
    w = a;
    q = Pf(w);
    var s = Kf(w);
    if (s) {
      w = q;
      var t = new Af(s[K], s.top, s[$b] - s[K], s[N] - s.top);
      s = v.max(w[K], t[K]);
      var U = v.min(w[K] + w[D], t[K] + t[D]);
      if (s <= U) {
        var J = v.max(w.top, t.top);
        t = v.min(w.top + w[Q], t.top + t[Q]);
        if (J <= t) {
          sa(w, s);
          w.top = J;
          na(w, U - s);
          Aa(w, t - J)
        }
      }
    }
    w = q = q;
    s = he(a);
    J = he(c);
    if (s.a != J.a) {
      U = s.a[I];
      J = Nf(U, J.a[Lb] || J.a[Ob]);
      J = qd(J, Lf(U));
      if (W && !Ie(s)) J = qd(J, Je(s));
      w.left += J.x;
      w.top += J.y
    }
    a = (b & 4 && Mf(a) ? b ^ 2 : b) & -5;
    b = new pd(a & 2 ? q[K] + q[D] : q[K], a & 1 ? q.top + q[Q] : q.top);
    if (o) b = qd(b, o);
    if (e) {
      b.x += (a & 2 ? -1 : 1) * e.x;
      b.y += (a & 1 ? -1 : 1) * e.y
    }
    var B;
    if (g) if ((B = Kf(c)) && o) {
      B.top = v.max(0, B.top - o.y);
      B.right -= o.x;
      B.bottom -= o.y;
      sa(B, v.max(0, B[K] - o.x))
    }
    var Ib;
    a: {
      e = b;
      c = c;
      a = d;
      d = f;
      B = B;
      f = g;
      k = k;
      e = e.Q();
      o = 0;
      a = (a & 4 && Mf(c) ? a ^ 2 : a) & -5;
      g = Of(c);
      k = k ? k.Q() : g;
      if (d || a != 0) {
        if (a & 2) e.x -= k[D] + (d ? d[$b] : 0);
        else if (d) e.x += d[K];
        if (a & 1) e.y -= k[Q] + (d ? d[N] : 0);
        else if (d) e.y += d.top
      }
      if (f) {
        if (B) {
          d = e;
          o = k;
          B = B;
          f = f;
          a = 0;
          if (d.x < B[K] && f & 1) {
            d.x = B[K];
            a |= 1
          }
          if (d.x < B[K] && d.x + o[D] > B[$b] && f & 16) {
            o.width -= d.x + o[D] - B[$b];
            a |= 4
          }
          if (d.x + o[D] > B[$b] && f & 1) {
            d.x = v.max(B[$b] - o[D], B[K]);
            a |= 1
          }
          if (f & 2) a |= (d.x < B[K] ? 16 : 0) | (d.x + o[D] > B[$b] ? 32 : 0);
          if (d.y < B.top && f & 4) {
            d.y = B.top;
            a |= 2
          }
          if (d.y >= B.top && d.y + o[Q] > B[N] && f & 32) {
            o.height -= d.y + o[Q] - B[N];
            a |= 8
          }
          if (d.y + o[Q] > B[N] && f & 4) {
            d.y = v.max(B[N] - o[Q], B.top);
            a |= 2
          }
          if (f & 8) a |= (d.y < B.top ? 64 : 0) | (d.y + o[Q] > B[N] ? 128 : 0);
          B = a
        } else B = 256;
        o = B;
        if (o & 496) {
          Ib = o;
          break a
        }
      }
      Gf(c, e);
      g = g == k ? i : !g || !k ? l : g[D] == k[D] && g[Q] == k[Q];
      if (!g) {
        g = c;
        k = k;
        if (k instanceof rd) {
          Ib = k[Q];
          k = k[D]
        } else h(ba("missing height argument"));
        na(g[H], Hf(k, i));
        Aa(g[H], Hf(Ib, i))
      }
      Ib = o
    }
    return Ib
  };
  var jg = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
    kg = "\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc";
  ia("[" + kg + "]");
  ia("[" + jg + "]");
  ia("^[" + jg + "]");
  ia("^[" + kg + "]");
  ia("^[^" + kg + "]*[" + jg + "]");
  ia("^[^" + jg + "]*[" + kg + "]");
  ia("[" + jg + "][^" + kg + "]*$");
  ia("[" + kg + "][^" + jg + "]*$");
  var lg = ia("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)");

  function mg(a) {
    this.a = Ve ? [] : "";
    a != j && this.H[Jb](this, arguments)
  }
  mg[C].da = function(a) {
    this.clear();
    this.H(a)
  };
  if (Ve) {
    mg[C].b = 0;
    mg[C].H = function(a, b) {
      if (b == j) this.a[this.b++] = a;
      else {
        this.a[y][Jb](this.a, arguments);
        this.b = this.a[A]
      }
      return this
    }
  } else mg[C].H = function(a, b) {
    this.a += a;
    if (b != j) for (var c = 1; c < arguments[A]; c++) this.a += arguments[c];
    return this
  };
  mg[C].clear = function() {
    if (Ve) {
      la(this.a, 0);
      this.b = 0
    } else this.a = ""
  };
  ka(mg[C], function() {
    if (Ve) {
      var a = this.a[Vb]("");
      this.clear();
      a && this.H(a);
      return a
    } else return this.a
  });
  var ng = mg;

  function og(a, b) {
    var c = b || new ng;
    c.H('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="', a.A, '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="', a.dir, '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="', a.id, '" class="goog-te-menu"></div></body>');
    if (!b) return c[z]()
  }

  function pg(a, b) {
    var c = b || new ng;
    c.H('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="', a.A, '"></head><body class="goog-te-banner" scroll="no" border=0 dir="', a.dir, '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="', a.fc, '" class="goog-logo-link" target="_blank"><img src="', a.Fa, '" alt="Google ', "Translate", '"></a></td>', a.Ha ? '<td width=1><img src="' + a.Aa + '" width="9" height="15" title="' + a.Ha + '" alt="' + a.Ha + '" style="background-image:url(' + a.Sa + ');background-position:-56px 0px;margin:0 4px"></td>' : "", '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="', a.Td, '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">', a.Sd, '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="', a.ad, '"><b>', "Translate", '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
    a.Nd, '"></button></div></div></td></tr><tr id="', a.Rd, '" style="display:none" valign=middle><td><span class="goog-te-banner-content">', "Translation in progress", '&nbsp;<span dir="ltr">(<b id="', a.Qd, '"></b>%)</span>&nbsp;<img src="', a.Ld, '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="', a.Zc, '">', "Cancel", '</button></div></div></td></tr><tr id="', a.gd, '" style="display:none"><td><span class="goog-te-banner-content">', a.fd, '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
    a.Ud, '">', "Show original", '</button></div></div></td></tr><tr id="', a.ed, '" style="display:none" valign=middle><td><span id="', a.dd, '" class="goog-te-banner-content"></span></td></tr></table></td><td width=1><a href="', a.Kd, '" target="_blank" style="white-space:nowrap">', "Learn more", '</a></td><td width=1><a id="', a.$c, '" class="goog-close-link" href="javascript:void(0)" title="', "Close", '"><img src="', a.Aa, '" width="15" height="15" alt="', "Close", '" style="background-image:url(', a.Sa, ');background-position:-28px 0px"></a></td></tr></table></body>');
    if (!b) return c[z]()
  }
  function qg(a, b) {
    var c = b || new ng;
    c.H('<span id="', a.id, '"></span>');
    if (!b) return c[z]()
  }
  function rg(a, b) {
    var c = b || new ng;
    c.H(a.Pc, '<div id="', a.id, '"></div>', a.Oc);
    if (!b) return c[z]()
  }

  function sg(a, b) {
    var c = b || new ng;
    c.H('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="', a.A, '"></head><body class="goog-te-ftab ', a.xb, '" scroll="no" style="overflow:hidden" dir="', a.dir, '"><a id="', a.ge, '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="', a.Aa, '" style="background-image:url(', a.Sa, ');background-position:-65px 0px"><span>', "Translate", "</span></a></body>");
    if (!b) return c[z]()
  }

  function tg(a, b) {
    var c = b || new ng;
    c.H(".", a[Ja], " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;", a.top || a.top == 0 ? "top:" + a.top + "px; _top:expression((" + a.top + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;", a[K] || a[K] == 0 ? "left:" + a[K] + "px; _left:expression((" + a[K] + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;", a[N] || a[N] == 0 ? "bottom:" + a[N] + "px; _top:expression((-" + a[N] + "-document.getElementById('" + a.id + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;", a[$b] || a[$b] == 0 ? "right:" + a[$b] + "px; _left:expression((-" + a[$b] + "-document.getElementById('" + a.id + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;", "}");
    if (!b) return c[z]()
  }

  function ug(a, b) {
    var c = b || new ng;
    c.H('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="', a.A, '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="', a.dir, '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="content" class="goog-te-balloon"><table border=0 cellspacing=0 cellpadding=0 width=100%><tr valign=middle><td nowrap><b>', "Original text:", '</b></td><td id="logo" width=1 nowrap>', a.cc ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + a.Fa + "',sizingMethod='scale');\"></span>" : '<img src="' + a.Fa + '">', '</td><td width=8></td><td width=1 nowrap><a id="close" href="javascript:void(0)" title="', "Close", '"><img src="', a.Aa, '" width="15" height="15" style="background-image:url(', a.Sa, ');background-position:-28px 0px"></a></td></tr></table><div id="original" class="goog-te-balloon-text"></div><div id="zippy" class="goog-te-balloon-zippy" style="display:none"><img id="zippy_img" class="plus" width="12" height="12" src="', a.Aa, '"><span>',
      "Contribute a better translation", '</span></div><div id="feedback" style="display:none"><iframe name="feedback-frame" frameBorder=0 style="width:100%;display:none"></iframe></div><div class="goog-te-balloon-form" style="display:none"><form id="suggestForm" target="feedback-frame" method="post"><input type="hidden" name="gtrans"><input type="hidden" name="hl"><input type="hidden" name="text"><input type="hidden" name="langpair"><input type="hidden" name="oe" value="UTF-8">');
    for (var d = a.aa, e = d[A],
    f = 0; f < e; f++) {
      var g = d[f];
      c.H('<input type="hidden" name="', g, '" />')
    }
    c.H('<textarea rows="3" name="utrans"></textarea><div style="text-align:', a.dir == "rtl" ? "left" : "right", '"><input type="submit" value="', "Contribute", '"></div></form></div><div id="forward" class="goog-te-balloon-footer" style="display:none"><a id="forward_link" href="javascript:void(0)">', "Contribute a better translation", "</a></div></div></body>");
    if (!b) return c[z]()
  };

  function vg(a) {
    for (var b = {}, c = 0; c < a[A]; ++c) b[a[c]] = i;
    return b
  }
  function wg(a, b, c) {
    this.c = [];
    this.f = a || 0;
    if (b || !c) this.d = b || 1;
    else this.j = c;
    this.a = 0;
    this.b = i
  }
  wg[C].add = function(a) {
    this.c[y](a)
  };
  wg[C].go = function() {
    if (this.b) {
      this.b = l;
      p[Ta](T(this.g, this), this.f)
    }
  };
  oa(wg[C], function() {
    this.b = i
  });
  wg[C].g = function() {
    if (!this.b) {
      if (this.d) for (var a = 0; a < this.d; ++a) if (this.c[this.a]) {
        this.c[this.a][L]();
        this.a++
      } else {
        this.b = i;
        return
      } else for (a = (new Date).getTime();
      (new Date).getTime() - a < this.j;) if (this.c[this.a]) {
        this.c[this.a][L]();
        this.a++
      } else {
        this.b = i;
        return
      }
      p[Ta](T(this.g, this), this.f)
    }
  };

  function xg(a) {
    this.ib = a ? [a] : [];
    this.Ga = [0];
    this.Ba = l
  }
  function yg(a, b) {
    if (a.Ba) return b;
    a.Ga[y](0);
    var c = a.Ga[A] - 1;
    return T(function() {
      this.Ga[c]++;
      b && b[Jb](j, arguments);
      zg(this)
    }, a)
  }

  function Ag(a, b) {
    if (a.Ba) return b;
    return T(function() {
      if (this.Ba) b[Jb](j, arguments);
      else {
        var c = arguments;
        this.ib[y](function() {
          b[Jb](j, c)
        })
      }
    }, a)
  }
  xg[C].qa = function() {
    this.Ga[0] = 1;
    zg(this)
  };

  function zg(a) {
    for (var b = 0; b < a.Ga[A]; ++b) if (a.Ga[b] == 0) return;
    a.Ba = i;
    for (b = 0; b < a.ib[A]; ++b) {
      var c = a.ib[b];
      a.ib[b] = j;
      c[L]()
    }
    a.ib = [];
    a.Ga = []
  }
  function Bg(a) {
    this.Tc = a;
    this.ra = this.Nb = l
  }
  function Cg(a, b) {
    return T(function() {
      b && b[Jb](j, arguments);
      if (this.ra) {
        if (!this.Nb) {
          this.Tc[L]();
          this.Nb = i
        }
      } else this.Nb = i
    }, a)
  }
  Bg[C].qa = function() {
    if (!this.ra) {
      this.ra = i;
      this.Nb && this.Tc[L]()
    }
  };

  function Dg(a, b, c, d) {
    this.La = b;
    this.d = a;
    this.f = c || 0;
    this.o = d || 0;
    this.a = this.ra = l
  }
  Dg[C].go = function() {
    this.ra || this.c()
  };
  Dg[C].c = function() {
    if (this.ra = (this.a = !! this.d[L]()) || --this.o <= 0) {
      this.La[L](j, this.a);
      this.b = 0
    } else this.b = p[Ta](T(this.c, this), this.f)
  };
  oa(Dg[C], function() {
    this.b && p[La](this.b);
    this.ra = i;
    this.La[L](j, this.a)
  });

  function Eg(a) {
    var b = "";
    if (a) if (a[Ua] == 3) b = n(a[Xb]);
    else if (a[O] == "TITLE") b = u.title;
    else if (a[O] == "INPUT" || a[O] == "TEXTAREA") b = a[$a];
    else if (a[M] && !a[M][Sb] && a[M][Ua] == 3) b = n(a[M][Xb]);
    return b
  }
  function Fg(a, b) {
    if (a) if (a[Ua] == 3) a.nodeValue = b;
    else if (a[O] == "TITLE") u.title = b;
    else if (a[O] == "INPUT" || a[O] == "TEXTAREA") qa(a, b);
    else a[Ua] == 1 && Ce(a, b)
  }
  function Gg(a, b) {
    return function() {
      a[G](b)
    }
  }

  function Hg(a) {
    a = Rc(a).toLowerCase()[E]("_", "-");
    if (a == "zh-cn") return "zh-CN";
    else if (a == "zh-tw") return "zh-TW";
    var b = a[F]("-");
    a = b >= 0 ? a[Db](0, b) : a;
    if (a == "zh") return "zh-CN";
    return a
  }
  function Ig(a) {
    var b = [];
    for (var c in a) if (a[c] !== r[C][c]) {
      var d = Vc(c);
      if (hc(a[c]) == "array") for (var e = 0; e < a[c][A]; ++e) b[y](d + "=" + Vc(a[c][e]));
      else b[y](d + "=" + Vc(a[c]))
    }
    return b[Vb]("&")
  }
  function Jg(a, b) {
    var c = b || {};
    c.nca = a;
    c.client = Cc;
    var d = new Image;
    d.src = "//" + Lc + "/gen204?" + Ig(c);
    d.onload = function() {
      d.onload = j
    }
  }

  function Kg(a, b) {
    if ((W || Jd) && p[ab].hostname != u.domain) {
      Lg = Lg ? Lg + 1 : 1;
      var c = "f" + Lg + "_" + rc()[z](36);
      p[c] = function() {
        p[c] = m;
        a.src = "javascript:void(0)";
        b && p[Ta](function() {
          b()
        }, 0)
      };
      a.src = "javascript:void(document.write(\"<script>document.domain='" + u.domain + "';parent['" + c + "']();<\/script>\"))"
    } else b && b()
  }
  var Lg;

  function Mg() {
    var a = {};
    try {
      for (var b in r[C]) {
        var c = r[C][b];
        delete r[C][b];
        a[b] = c
      }
    } catch (d) {
      return {}
    }
    return a
  }
  function Ng(a) {
    for (var b in a) r[C][b] = a[b]
  };

  function Og(a, b) {
    eg[L](this, b);
    this.e = a || {};
    this.e.A || (this.e.A = Kc);
    this.e.T = this.e.T;
    this.e.xa = !! this.e.xa;
    this.e.aa = this.e.aa || [];
    this.d = new Zf(this);
    this.j = new xg
  }
  V(Og, eg);
  R = Og[C];
  R.t = function() {
    this.h = this.b[tb]("div");
    this.h[H].position = "absolute";
    this.h[H].zIndex = 1073741824;
    this.h[H].top = "-9999em";
    this.f = l;
    var a = {
      id: Z(this, "container")
    }, b = this.h;
    a = a;
    var c = new ng;
    c.H('<iframe id="', a.id, '" class="goog-te-balloon-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
    a = c[z]();
    pa(b, a)
  };
  R.Z = function() {
    Og.s.Z[L](this);
    var a = {
      A: this.e.A,
      dir: lg[Ha](tc) ? "rtl" : "ltr",
      Fa: Jc,
      cc: W && !ae("7.0"),
      Aa: Nc,
      Sa: Fc,
      aa: this.e.aa
    };
    this.h.id = Z(this, "balloonContainer");
    this.z = this.b.n(Z(this, "container"));
    Y(this.d, this.z, "load", this.be);
    Kg(this.z, T(function() {
      var b = Be(this.z);
      b[jb](ug(a));
      b[gb]()
    }, this))
  };
  R.be = function() {
    X(this.h, i);
    var a = new ie(Be(this.z));
    this.a = a;
    this.k = a.n("content");
    this.m = a.n("original");
    var b = W ? this.z : this.z[Tb] || Be(this.z)[Lb] || Be(this.z)[Ob];
    Y(this.d, b, "mouseout", this.Ed);
    Y(this.d, b, "mouseover", this.Fd);
    Y(this.d, a.n("close"), "click", Gg(this, "close"));
    if (W) na(this.k[H], "100%");
    this.e.xa || X(a.n("logo"), l);
    this.g = 200;
    if (this.e.T != 0) {
      this.c = a.n("suggestForm");
      this.c.action = Pc;
      Y(this.d, this.c, "submit", this.ud);
      if (this.e.T == 1) {
        this.l = a.n("zippy_img");
        this.B = a.n("feedback");
        a = a.n("zippy");
        Y(this.d, a, "click", this.Gc);
        X(a, i);
        for (a = a[M]; a; a = a[Sb]) this.g += a[Xa]
      } else if (this.e.T == 2) {
        ta(this.c, "_blank");
        X(a.n("forward"), i);
        Y(this.d, a.n("forward_link"), "click", T(this.c.submit, this.c))
      }
    }
    X(this.h, l);
    this[G]("load");
    this.j.qa()
  };
  R.M = function() {
    Og.s.M[L](this);
    this.d.p();
    this.a = this.d = j;
    ye(this.z);
    this.B = this.l = this.c = this.m = this.k = this.z = j
  };
  R.Gc = function() {
    if (this.l[Ja] == "plus") {
      ma(this.l, "minus");
      X(this.c[P], i);
      this[G]("open_form")
    } else {
      ma(this.l, "plus");
      X(this.c[P], l);
      this[G]("close_form")
    }
    Pg(this)
  };
  R.Ed = function() {
    this[G]("mouseout")
  };
  R.Fd = function() {
    this[G]("mouseover")
  };
  R.ud = function() {
    this.e.T == 1 && this.Gc()
  };
  R.kc = function(a, b, c, d, e) {
    if (this.j.Ba) {
      Ce(this.m, Rc(a || ""));
      if (this.c) {
        qa(this.c.gtrans, b || "");
        qa(this.c.hl, tc);
        qa(this.c[Na], a || "");
        qa(this.c.langpair, c + "|" + d);
        qa(this.c.utrans, Rc(b || ""));
        for (a = 0; a < this.e.aa[A]; ++a) {
          b = this.e.aa[a];
          qa(this.c[b], e && e[b] || "")
        }
      }
    } else Ag(this.j, T(this.kc, this, a, b, c, d, e))[L]()
  };

  function Pg(a) {
    var b = Tf(a.k);
    if (b[D] < a.g) na(b, a.g);
    if (b[Q] <= 0) Aa(b, a.g);
    Uf(a.z, b);
    Uf(a.h, b)
  }
  R.reset = function(a) {
    if (this.j.Ba) {
      this.h[H].top = "-9999em";
      X(this.h, i);
      var b = this.a[tb]("span");
      this.m[M] && b[x](this.m[M].cloneNode(i));
      b[H].whiteSpace = "nowrap";
      this.k[x](b);
      var c = b[Xa] + 20;
      this.k[lb](b);
      b = this.b.a[I][Xa] / 2;
      if (a && c > a) c = a;
      if (c > b) c = b;
      if (c < this.g) c = this.g;
      na(this.z[H], c + "px");
      Pg(this);
      if (this.e.T == 1) {
        ma(this.l, "plus");
        X(this.c[P], l);
        X(this.B, l)
      }
    } else Ag(this.j, T(this[Nb], this, a))[L]()
  };
  R.fa = bc("f");
  R.P = function(a, b, c) {
    if (this.j.Ba) {
      if (a) {
        if (b) {
          var d = 0,
            e = 0,
            f = 0;
          if (c && c[A]) {
            for (var g = NaN, k = NaN, o = NaN, q = NaN, w = 0; w < c[A]; ++w) {
              var s = Pf(c[w]);
              if (s[D] && s[Q]) {
                g < s[K] || (g = s[K]);
                k > s[K] + s[D] || (k = s[K] + s[D]);
                o < s.top || (o = s.top);
                q > s.top + s[Q] || (q = s.top + s[Q])
              }
            }
            this[Nb](k - g);
            if (g && o && q) {
              s = Pf(b);
              d = g - s[K];
              e = o - s.top;
              f = s.top + s[Q] - q
            }
          } else this[Nb]();
          c = ig(b, 4, this.h, 5, new pd(d || 0, -4 + (e || 0)), m, 9);
          if (c & 496) ig(b, 5, this.h, 4, new pd(d || 0, -4 + (f || 0)), m, 5)
        }
      } else {
        this[Nb]();
        X(this.h, a)
      }
      this.f = a
    } else Ag(this.j, T(this.P, this, a, b, c))[L]()
  };

  function Qg(a, b) {
    this.e = a || {};
    this.e.T = a.T;
    this.e.xa = !! a.xa;
    this.e.wc = ea(a.wc, 10) || 300;
    this.e.aa = a.aa;
    this.j = 0;
    this.d = {};
    this.c = l;
    this.b = new Zf(this);
    this.f = j;
    this.k = {};
    this.a = new Og({
      A: Kc,
      T: this.e.T,
      xa: this.e.xa,
      aa: this.e.aa
    }, b);
    this.a.oa(He(b || he())[I]);
    Y(this.b, this.a, "open_form", this.md);
    Y(this.b, this.a, "close_form", this.kd);
    Y(this.b, this.a, "mouseout", this.Ec);
    Y(this.b, this.a, "mouseover", this.nd);
    Y(this.b, this.a, "close", this.ld);
    this.g = ""
  }
  V(Qg, Qc);

  function Rg(a, b, c, d, e, f) {
    a.d[++a.j] = {
      text: c,
      fe: d,
      Yd: e || a.l,
      ee: f || a.m,
      na: b
    };
    for (c = 0; c < b[A]; ++c) if (b[c]) {
      Y(a.b, b[c], "mouseout", a.Ec);
      Y(a.b, b[c], "mouseover", T(a.Bd, a, a.j, b[c]))
    }
    return a.j[z]()
  }
  function Sg(a, b) {
    var c = a.d[b];
    if (c) {
      for (var d = 0; d < c.na[A]; ++d) if (c.na[d]) {
        ag(a.b, c.na[d], "mouseout");
        ag(a.b, c.na[d], "mouseover")
      }
      delete a.d[b]
    }
  }
  R = Qg[C];
  R.r = function() {
    Tg(this);
    for (var a in this.d) Sg(this, a);
    this.b.p();
    this.b = j;
    this.a.p();
    this.a = j
  };

  function Ug(a) {
    if (a.f) {
      p[La](a.f);
      a.f = j
    }
  }

  function Vg(a, b) {
    Ug(a);
    a.f = p[Ta](T(function(c) {
      c[L](this);
      this.f = j
    }, a, b), a.e.wc)
  }
  R.md = function() {
    this.c = i
  };
  R.kd = function() {
    Ug(this);
    this.c = l
  };

  function Wg(a, b, c) {
    if (a = a.d[b]) {
      c = c || typeof c == "undefined";
      for (b = 0; b < a.na[A]; ++b) if (a.na[b]) {
        Bf(a.na[b], "backgroundColor", c ? "#E6ECF9" : "");
        Bf(a.na[b], "color", c ? "#000" : "")
      }
    }
  }
  R.Ec = function() {
    this.c || Vg(this, function() {
      Wg(this, this.g, l);
      this.a.P(l);
      this.c = l
    })
  };
  R.nd = function() {
    this.c || Ug(this)
  };

  function Tg(a) {
    a.c = i;
    Ug(a);
    Wg(a, a.g, l);
    a.a.P(l);
    a.c = l
  }
  R.ld = function() {
    Tg(this)
  };
  R.Bd = function(a, b) {
    this.c || Vg(this, function() {
      Wg(this, this.g, l);
      this.g = a;
      Wg(this, a);
      var c = this.d[a];
      this.e.T != 0 ? this.a.kc(c[Na], c.fe, c.Yd, c.ee, this.k) : this.a.kc(c[Na]);
      this.a.P(i, b, c.na);
      this.c = l
    })
  };

  function Xg(a, b, c, d, e, f) {
    this.a = a;
    this.ka = b;
    this.B = d;
    this.l = c;
    this.g = e;
    this.j = ja(this.a[A]);
    this.b = ja(this.a[A]);
    this.c = [];
    this.d = [];
    this.f = this.k = l;
    this.m = f || "transparent"
  }
  V(Xg, Qc);

  function Yg(a, b, c, d) {
    a.k = i;
    a.c = [];
    a.c.cd = d;
    if (!d) {
      d = u[tb]("div");
      X(d, l);
      pa(d, b[F]("<i>") >= 0 ? b : "<b>" + b + "</b>");
      u[I][x](d);
      b = j;
      for (var e = d[M]; e; e = e[Sb]) if (e[O] == "I") a.c[y](b = {
        Mc: Fe(e),
        $: []
      });
      else if (e[O] == "B") {
        b || a.c[y](b = {
          Mc: "",
          $: []
        });
        if (a.a[A] == 1) b.$[y]({
          index: 0,
          text: bd(Fe(e))
        });
        else {
          for (var f = {}, g = -1, k = function(s, t, U) {
            f[s] || (f[s] = "");
            if (U) f[s] = t + f[s];
            else f[s] += t
          }, o = e[M]; o; o = o[Sb]) if (o.attributes && o.attributes.i) {
            g = ea(o.attributes.i[Xb], 10);
            g != NaN && k(g, Fe(o))
          } else if (o[Ua] == 3) if (Rc(o[Xb]) == "") {
            var q = a.a[g],
              w = a.a[g + 1];
            q && (q[Da] || q[Sb]) || !(w && (w[Da] || w[Sb])) ? k(g, o[Xb]) : k(g + 1, o[Xb], i)
          } else k(g, o[Xb]);
          for (g in f) f[g] !== r[C][g] && g >= 0 && g < a.a[A] && b.$[y]({
            index: g,
            text: bd(f[g])
          });
          if (f[-1]) if (b.$[A] == 0 && f[-1]) b.$[y]({
            index: 0,
            text: bd(f[-1])
          });
          else b.$[0].text = bd(f[-1]) + b.$[0][Na];
          f = j
        }
        b = j
      }
      d[P][lb](d)
    }
    c && (c[a.ka] = a.c);
    Zg(a)
  }
  function $g(a) {
    for (var b = 0; b < a.a[A]; ++b) try {
      if (!a.a[b] || !a.a[b][P]) {
        a.a[b] = j;
        a.b[b] = j
      }
    } catch (c) {
      a.a[b] = j;
      a.b[b] = j
    }
  }
  xa(Xg[C], function() {
    if (this.f) {
      this.f = l;
      if (this.d[A] > 0) {
        for (var a = 0; a < this.d[A]; ++a) Sg(this.g, this.d[a]);
        this.d = []
      }
      $g(this);
      for (a = 0; a < this.a[A]; ++a) if (this.j[a] && this.a[a]) {
        Fg(this.a[a], this.l[a]);
        if (this.b[a]) {
          var b = this.b[a];
          this.a[a] = b[M];
          b = b;
          var c = void 0,
            d = b[P];
          if (d && d[Ua] != 11) if (b.removeNode) b.removeNode(l);
          else {
            for (; c = b[M];) d[cb](c, b);
            ye(b)
          }
          this.b[a] = j
        }
        this.j[a] = l
      }
    }
  });

  function Zg(a, b) {
    function c(t, U) {
      t.background = U;
      t.border = "0";
      t.fontSize = "100%";
      t.margin = "0";
      t.outline = "0";
      t.padding = "0";
      t.verticalAlign = "baseline";
      ya(t, "inline")
    }
    if (b && b[a.ka]) {
      a.c = b[a.ka];
      a.k = i
    }
    if (!(!a.k || a.f || a.c.cd)) {
      a.f = i;
      $g(a);
      for (var d = 0; d < a.a[A]; ++d) if (!a.j[d] && a.a[d]) {
        var e = a.a[d];
        if (e[P] && (e[P][O] == "OPTION" || e[P][O] == "TITLE") || e[O] == "TITLE" || e[O] == "INPUT" || e[O] == "TEXTAREA") {
          Fg(a.a[d], "");
          a.b[d] = j
        } else {
          var f = e[kb] ? e[kb][tb]("font") : u[tb]("font");
          c(f[H], a.m);
          ze(f, e);
          a.b[d] = f;
          a.a[d] = f
        }
        a.j[d] = i
      }
      for (d = 0; d < a.c[A]; ++d) {
        var g = a.c[d],
          k = g.Mc;
        if (!k) {
          for (var o = [], q = 0; q < g.$[A]; ++q) o[y](a.l[g.$[q][Ma]]);
          k = o[Vb](" ")
        }
        var w = [];
        o = [];
        for (q = 0; q < g.$[A]; ++q) {
          o[y](g.$[q][Na]);
          var s = g.$[q];
          if (e = a.b[s[Ma]]) {
            f = e[kb] ? e[kb][tb]("font") : u[tb]("font");
            w[y](f);
            c(f[H], a.m);
            a.g || (f.title = k);
            Fg(f, s[Na]);
            e[x](f);
            d != 0 && e[M] != f && xe(f[kb] ? f[kb][Za](" ") : u[Za](" "), f)
          } else a.a[s[Ma]] && Fg(a.a[s[Ma]], Eg(a.a[s[Ma]]) + s[Na])
        }
        a.g && a.d[y](Rg(a.g, w, k, o[Vb]("")))
      }
      for (d = 0; d < a.a[A]; ++d) {
        e = a.b[d];
        g = a.l[d];
        f = g[Db](0, g[A] - Sc(g)[A]);
        g = g[Db](Tc(g)[A]);
        if (f == " ") f = "";
        if (g == " ") g = "";
        if (e) {
          if (f) {
            for (k = e[M]; k; k = k[Sb]) {
              o = Sc(Eg(k));
              Fg(k, o);
              if (o) break
            }(k = e[M]) ? Fg(k, f + Eg(k)) : ue(e, e[kb] ? e[kb][Za](f) : u[Za](f))
          }
          if (g) {
            for (k = e[pb]; k; k = k[Da]) {
              o = Tc(Eg(k));
              Fg(k, o);
              if (o) break
            }(k = e[pb]) ? Fg(k, Eg(k) + g) : ue(e, e[kb] ? e[kb][Za](g) : u[Za](g))
          }
        } else {
          e = Eg(a.a[d]);
          if (f && g) e = f + Rc(e) + g;
          else if (f) e = f + Sc(e);
          else if (g) e = Tc(e) + g;
          Fg(a.a[d], e)
        }
      }
    }
  }
  Xg[C].r = function() {
    Xg.s.r[L](this);
    this[Gb]();
    this.a = j
  };

  function ah(a) {
    eg[L](this, a);
    this.g = new Zf(this)
  }
  V(ah, eg);
  R = ah[C];
  R.t = function() {
    this.h = this.b[tb]("select");
    ma(this.h, "goog-te-combo")
  };
  R.Z = function() {
    ah.s.Z[L](this);
    this.xc()
  };
  R.xc = function() {
    pf(this.h, "change", Gg(this, "chg_lang"));
    this[G]("load")
  };

  function bh(a, b) {
    if (a.h[P] != b) {
      a.h[P][lb](a.h);
      b[x](a.h)
    }
  }
  R.va = function(a) {
    this.b.hc(this.h);
    for (var b in a) if (a[b] !== r[C][b]) {
      var c = this.b.t("option", {
        value: b
      });
      this.b.Ib(c, a[b]);
      this.h[x](c)
    }
    this.h.selectedIndex = 0
  };
  R.Ab = function() {
    return this.h[$a]
  };
  R.wa = function(a) {
    if (this.h[$a] != a) for (var b = 0, c; c = this.h.options[bb](b); ++b) if (c[$a] == a) {
      this.h.selectedIndex = b;
      return
    }
  };
  R.Zb = function(a) {
    if (hc(a) == "undefined") return this.h.options[bb](this.h.selectedIndex)[Na];
    for (var b = 0, c; c = this.h.options[bb](b); ++b) if (c[$a] == a) return c[Na]
  };
  R.M = function() {
    ah.s.M[L](this);
    this.g.p();
    this.g = j
  };
  R.bb = function(a) {
    this.h.disabled = !a
  };

  function ch(a, b) {
    ah[L](this, b);
    this.e = a || {};
    this.e.A || (this.e.A = Kc)
  }
  V(ch, ah);
  R = ch[C];
  R.t = function() {
    this.h = this.b[tb]("a");
    ma(this.h, "goog-te-menu-value");
    this.h.href = "javascript:void(0)";
    this.K = this.b.t("span");
    this.h[x](this.K);
    if (this.e.hd) {
      this.h[x](this.b.t("img", {
        src: Nc,
        width: 1,
        height: 1
      }));
      this.h[x](this.b.t("span", {
        style: "border-left:1px solid #bbb"
      }, "\u200b"));
      this.h[x](this.b.t("img", {
        src: Nc,
        width: 1,
        height: 1
      }));
      this.f = this.b.t("span", {
        style: "color:#9b9b9b"
      }, "\u25bc");
      this.h[x](this.f);
      this.l = this.f
    } else {
      this.d = this.b.t("img", {
        src: Nc,
        style: "background-image:url(" + Fc + ");background-position:-14px 0px;border:none",
        width: 14,
        height: 14
      });
      this.h[x](this.d);
      this.l = this.d
    }
    this.C = qe("iframe", {
      frameBorder: 0,
      "class": "goog-te-menu-frame skiptranslate"
    });
    this.C[H].visibility = "visible";
    X(this.C, l);
    u[I][x](this.C)
  };
  R.xc = function() {
    var a = {
      dir: lg[Ha](tc) ? "rtl" : "ltr",
      A: this.e.A,
      id: Z(this, "menuBody")
    };
    Y(this.g, this.C, "load", this.ae);
    Kg(this.C, T(function() {
      var b = Be(this.C);
      b[jb](og(a));
      b[gb]()
    }, this))
  };
  R.ae = function() {
    this.a = new ie(Be(this.C));
    this.j = this.a.n(Z(this, "menuBody"));
    Y(this.g, this.h, "click", this.sd);
    W ? Y(this.g, this.C, "blur", this.bc) : Y(this.g, this.C[Tb] || Be(this.C)[Lb] || Be(this.C)[Ob], "blur", this.bc);
    this[G]("load")
  };
  R.va = function() {};
  R.Ad = function(a) {
    if (this.k != a[ib][$a]) {
      this.wa(a[ib][$a]);
      this[G]("chg_lang")
    }
    this.bc()
  };
  R.sd = function() {
    this.Kb();
    (this.C[Tb] || Be(this.C)[Lb] || Be(this.C)[Ob]).focus();
    this.O = i
  };
  R.bc = function() {
    if (this.O) {
      this.O = l;
      this.Kb(l)
    }
  };
  R.Kb = function(a) {
    if (a == l) {
      this.d && Bf(this.d, "backgroundPosition", "-14px 0px");
      this.f && Bf(this.f, "color", "#9b9b9b");
      X(this.C, l)
    } else {
      a = Nf(this.l, p);
      a.y += this.l[Ub];
      a.x += this.l[Xa] - this.m[D] >> 1;
      if (W && !ae("7.0")) {
        var b = u[I];
        a.y -= b.offsetTop;
        a.x -= b.offsetLeft
      } else {
        b = pe(u);
        a.y -= b.y;
        a.x -= b.x
      }
      b = oe(p);
      if (a.x > b[D] - this.m[D]) a.x = b[D] - this.m[D];
      if (a.x < 0) a.x = 0;
      if (a.y > b[Q] - this.m[Q]) a.y = b[Q] - this.m[Q];
      if (a.y < 0) a.y = 0;
      Gf(this.C, a);
      this.d && Bf(this.d, "backgroundPosition", "0px 0px");
      this.f && Bf(this.f, "color", "#d5d5d5");
      X(this.C, i)
    }
  };
  R.Ab = bc("k");
  R.wa = function(a) {
    if (this.k != a) {
      var b = this.Zb(a);
      if (b) {
        this.k = a;
        this.b.Ib(this.K, b)
      }
    }
  };
  R.Zb = function() {};
  R.M = function() {
    ch.s.M[L](this);
    ye(this.C);
    this.j = this.a = this.C = this.l = this.f = this.d = this.K = j
  };

  function dh(a, b) {
    ch[L](this, a, b);
    this.e = a || {};
    this.e.A || (this.e.A = Kc)
  }
  V(dh, ch);
  R = dh[C];
  R.va = function(a) {
    this.a.hc(this.j);
    X(this.C, i);
    this.B = a;
    this.c = [];
    for (var b in a) if (a[b] !== r[C][b]) {
      var c = {
        Ua: this.a.t("a", {
          className: "goog-te-menu2-item-selected",
          href: "javascript:void(0)",
          value: b
        })
      };
      this.c[y](c);
      var d = this.a.t("div", {
        style: "white-space:nowrap"
      });
      this.a[x](c.Ua, d);
      this.a[x](d, this.a.t("span", {
        className: "indicator"
      }, "\u203a"));
      this.a[x](d, this.a.t("span", {
        className: "text"
      }, a[b]));
      Y(this.g, c.Ua, "click", this.Ad)
    }
    a = this.c[A] - 1;
    a = v[Qa]((a - a % 11) / 11) + 1;
    this.F = this.a.t("table", {
      cellspacing: 0,
      cellpadding: 0,
      border: 0
    });
    c = this.a.t("tbody");
    b = this.a.t("tr", {
      valign: "top"
    });
    ma(this.j, "goog-te-menu2");
    this.a[x](this.j, this.F);
    this.a[x](this.F, c);
    this.a[x](c, b);
    for (d = c = 0; c < a; ++c) {
      var e = this.a.t("td");
      this.a[x](b, e);
      for (var f = 0; f < 11 && d < this.c[A]; ++f, ++d) this.a[x](e, this.c[d].Ua);
      if (c != a - 1) {
        e = this.a.t("td", {
          "class": "goog-te-menu2-colpad"
        }, "\u00a0");
        this.a[x](b, e)
      }
    }
    this.k = j;
    this.wa(this.c[0].Ua[$a]);
    eh(this);
    X(this.C, l)
  };
  R.Zb = function(a) {
    a = hc(a) == "undefined" ? this.k : a;
    return this.B[a]
  };
  R.wa = function(a) {
    if (this.k != a) {
      dh.s.wa[L](this, a);
      for (var b = 0; b < this.c[A]; ++b) {
        var c = this.c[b];
        ma(c.Ua, c.Ua[$a] == a ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
      }
    }
  };

  function eh(a) {
    Uf(a.j, Tf(a.F));
    Uf(a.C, Tf(a.j));
    a.m = Tf(a.C)
  }
  R.Kb = function(a) {
    dh.s.Kb[L](this, a);
    a != l && eh(this)
  };
  R.M = function() {
    dh.s.M[L](this);
    this.F = this.c = j
  };

  function fh(a) {
    return a = "Translated to: " + a
  }
  function gh(a) {
    return a = "View this page in: " + a
  };
  var hh = "StopIteration" in S ? S.StopIteration : ba("StopIteration");

  function ih() {}
  ih[C].Ya = function() {
    h(hh)
  };
  ih[C].Xc = function() {
    return this
  };

  function jh(a, b, c, d, e) {
    this.a = !! b;
    a && this[Mb](a, d);
    this.b = e != m ? e : this.S || 0;
    if (this.a) this.b *= -1;
    this.c = !c
  }
  V(jh, ih);
  R = jh[C];
  R.ha = j;
  R.S = 0;
  R.oc = l;
  R.setPosition = function(a, b, c) {
    if (this.ha = a) this.S = typeof b == "number" ? b : this.ha[Ua] != 1 ? 0 : this.a ? -1 : 1;
    if (typeof c == "number") this.b = c
  };
  R.Q = function() {
    return new jh(this.ha, this.a, !this.c, this.S, this.b)
  };

  function kh(a) {
    var b = a.a ? -1 : 1;
    if (a.S == b) {
      a.S = b * -1;
      a.b += a.S * (a.a ? -1 : 1)
    }
  }
  R.Ya = function() {
    var a;
    if (this.oc) {
      if (!this.ha || this.c && this.b == 0) h(hh);
      a = this.ha;
      var b = this.a ? -1 : 1;
      if (this.S == b) {
        var c = this.a ? a[pb] : a[M];
        c ? this[Mb](c) : this[Mb](a, b * -1)
      } else(c = this.a ? a[Da] : a[Sb]) ? this[Mb](c) : this[Mb](a[P], b * -1);
      this.b += this.S * (this.a ? -1 : 1)
    } else this.oc = i;
    a = this.ha;
    if (!this.ha) h(hh);
    return a
  };
  R.splice = function() {
    var a = this.ha,
      b = this.a ? 1 : -1;
    if (this.S == b) {
      this.S = b * -1;
      this.b += this.S * (this.a ? -1 : 1)
    }
    this.a = !this.a;
    jh[C].Ya[L](this);
    this.a = !this.a;
    b = jc(arguments[0]) ? arguments[0] : arguments;
    for (var c = b[A] - 1; c >= 0; c--) a[P] && a[P][cb](b[c], a[Sb]);
    ye(a)
  };
  var lh = ia("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

  function mh(a, b, c) {
    this.a = new jh;
    this.D = a;
    this.ia = b;
    this.O = c
  }
  var nh = vg(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "CODE", "DFN", "EM", "FONT", "I", "KBD", "LABEL", "Q", "S", "SMALL", "SPAN", "STRIKE", "STRONG", "SUB", "SUP", "TT", "U", "VAR"]),
    oh = vg(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "IMG", "LINK", "META", "MAP", "OBJECT", "PARAM", "SCRIPT", "STYLE", "INPUT", "TEXTAREA", "TITLE"]),
    ph = vg(["submit", "button"]);
  mh[C].reset = function(a, b) {
    this.j = [];
    this.l = [];
    this.F = i;
    this.k = [];
    this.B = [];
    qh(this, a, i, b)
  };

  function qh(a, b, c, d) {
    a.a[Mb](b, 1, 1);
    a.m = i;
    a.d = 0;
    a.f = [c];
    a.b = W ? [] : j;
    a.g = !! d;
    a.a.oc || a.a.Ya();
    rh(a)
  }

  function sh(a, b) {
    if (a.m) {
      var c = 0,
        d = [],
        e = [],
        f = 0,
        g = [],
        k = a.g ? 27 : 13;
      do {
        var o = a.N;
        f += a.d || (a.d = (a.g ? Vc(o)[A] : o[A]) + k);
        if (c != 0 && f > b) break;
        a.d = 0;
        d[y](a.K);
        g[y](a.c);
        if (c == 0) {
          e[y](o);
          c++
        } else {
          if (c == 1) e[0] = "<a i=0>" + e[0] + "</a>";
          e[y]("<a i=" + c+++">");
          e[y](o);
          e[y]("</a>")
        }
      } while (rh(a));
      return new Xg(d, e[Vb](""), g, (d[A] == 1 ? f - k : f) - a.d, a.ia, a.O)
    } else if (a.j[A] > 0) {
      qh(a, a.j[Ia](), a.l[Ia](), a.g);
      return sh(a, b)
    } else if (a.k[A] > 0) {
      a.F = l;
      qh(a, a.k[Ia](), a.B[Ia](), a.g);
      return sh(a, b)
    }
  }

  function th(a) {
    return a.f[a.f[A] - 1]
  }
  function uh(a) {
    var b = a.a.ha,
      c = a.a.S;
    a.b && a.b[A] > 0 && c != 1 && !b[Sb] ? a.a[Mb](a.b[a.b[A] - 1], -1, a.a.b - 1) : a.a.Ya()
  }

  function rh(a) {
    var b = i;
    try {
      for (;;) {
        var c = a.K = a.a.ha,
          d = a.a.S;
        if (d == -1) {
          a.f.pop();
          if (a.b && a.b[A] > 0) a.b.length -= 1;
          b = b && !! c && (c[Ua] == 3 || nh[c[O]])
        } else if (c && (c[Ua] == 3 || c[O] == "TITLE" || c[O] == "TEXTAREA" && id(ee(c), "translate") || c[O] == "INPUT" && (ph[c[Hb]] || id(ee(c), "translate")))) {
          kh(a.a);
          if (th(a)) {
            a.c = Eg(c);
            var e = Rc(a.c[E](/\xa0|[ \t]+/g, " "));
            e || (a.c = e);
            if (a.c) {
              a.N = Wc(a.c);
              uh(a);
              break
            }
          }
        } else if (d == 1) {
          if (vh(c) || !c[M]) kh(a.a);
          else if (c[O] == "IFRAME") {
            kh(a.a);
            try {
              var f;
              if (!(f = !c.src[qb](/https?:\/\//))) {
                var g,
                k = c.src[qb](lh)[3] || j;
                g = k && ha(k);
                f = g == p[ab].hostname
              }
              if (f) {
                var o = c[Tb][Va][Yb];
                if (o) {
                  a.j[y](o);
                  a.l[y](th(a))
                }
              }
            } catch (q) {}
          } else {
            var w;
            if (w = a.F) {
              var s;
              var t = c;
              if (t[Xa] && t[Ub]) s = i;
              else {
                var U = je(t),
                  J = j;
                s = (J = U[Ob] && U[Ob][fb] ? U[Ob][fb](t, j) : t[Bb]) && J.display != "none" && J.visibility != "hidden"
              }
              w = !s
            }
            if (w) {
              kh(a.a);
              a.k[y](c);
              a.B[y](th(a))
            } else {
              t = a;
              J = c;
              var B = !id(ee(J), "notranslate") && (id(ee(J), "translate") || th(t));
              t.f[y](B);
              a.b && a.b[y](c);
              a.D && th(a) && c[O] == "A" && c[Cb] && a.D(c)
            }
          }
          b = b && th(a) && !! c && (c[Ua] == 3 || nh[c[O]])
        }
        uh(a)
      }
    } catch (Ib) {
      if (Ib != hh) h(Ib);
      a.m = l;
      a.c = j;
      b = l
    }
    return b
  }
  function vh(a) {
    return a[Ua] != 3 && (!a[O] || oh[a[O]] || id(ee(a), "skiptranslate"))
  };

  function wh(a, b) {
    eg[L](this, b);
    this.d = new Zf(this);
    this.e = a || {};
    this.e.A || (this.e.A = Kc);
    this.e.nc = l;
    Bf(this.b.a[I], "position", "relative");
    Bf(this.b.a[I], "minHeight", "100%");
    Bf(this.b.a[Yb], "height", "100%");
    Bf(this.b.a[I], "top", "0px");
    if (W) {
      p._bannerquirkfixleft = -ea("0" + this.b.a[I].leftMargin, 10);
      p._bannerquirkfixtop = -ea("0" + this.b.a[I].topMargin, 10) - 40
    }
  }
  V(wh, eg);
  R = wh[C];
  R.oa = function() {
    var a = this.b.a[I][M];
    gg(this, a[P], a)
  };
  R.t = function() {
    this.h = this.b[tb]("div");
    this.f = l;
    X(this.h, l);
    fe(this.h, "skiptranslate");
    var a = {
      id: Z(this, "container")
    }, b = this.h;
    a = a;
    var c = new ng;
    c.H('<iframe id="', a.id, '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
    a = c[z]();
    pa(b, a)
  };
  R.Z = function() {
    wh.s.Z[L](this);
    var a = {
      dir: lg[Ha](tc) ? "rtl" : "ltr",
      A: this.e.A,
      Aa: Nc,
      fc: "http://translate.google.com",
      Fa: Oc,
      Sa: Fc,
      Td: Z(this, "promptSection"),
      ad: Z(this, "confirm"),
      Kd: "http://www.google.com/intl/en/help/faq_translation.html#element",
      Rd: Z(this, "progressSection"),
      Qd: Z(this, "progressValue"),
      Ld: Ic,
      Zc: Z(this, "cancel"),
      gd: Z(this, "finishSection"),
      Ud: Z(this, "restore"),
      ed: Z(this, "errorSection"),
      dd: Z(this, "errorContent"),
      $c: Z(this, "close"),
      re: Fc,
      Nd: Z(this, "noAutoPopup")
    }, b = [];
    this.e.nc && b[y](qg({
      id: Z(this,
        "promptSourceLang")
    }));
    b[y](qg({
      id: Z(this, "promptTargetLang")
    }));
    a.Sd = gh[Jb](j, b);
    b = [];
    this.e.nc && b[y](qg({
      id: Z(this, "finishSourceLang")
    }));
    b[y](qg({
      id: Z(this, "finishTargetLang")
    }));
    a.fd = fh[Jb](j, b);
    this.e.Ha && (a.Ha = this.e.Ha);
    this.z = this.b.n(Z(this, "container"));
    Y(this.d, this.z, "load", this.ce);
    Kg(this.z, T(function() {
      var c = Be(this.z);
      c[jb](pg(a));
      c[gb]()
    }, this))
  };
  R.ce = function() {
    this.a = new ie(Be(this.z));
    pa(this.a.n(Z(this, "errorContent")), "Error: The server could not complete your request. Try again later.");
    if (this.e.A == Kc) {
      var a = "url(" + Ec + ")";
      Bf(this.a.a[I], "backgroundImage", a);
      for (var b = this.a.a[Wb]("button"), c = 0; c < b[A]; ++c) {
        Bf(b[c][P], "backgroundImage", a);
        Bf(b[c][P], "backgroundRepeat", "repeat-x");
        Bf(b[c][P], "backgroundPosition", "0 -39px")
      }
    }
    if (this.e.nc) this.I = new dh(this.e, this.a);
    this.c = new dh(this.e, this.a);
    Y(this.d, this.a.n(Z(this, "confirm")), "click",
    Gg(this, "clk_confirm"));
    Y(this.d, this.a.n(Z(this, "cancel")), "click", Gg(this, "clk_cancel"));
    Y(this.d, this.a.n(Z(this, "restore")), "click", Gg(this, "clk_restore"));
    Y(this.d, this.a.n(Z(this, "close")), "click", Gg(this, "clk_close"));
    this.k = this.a.n(Z(this, "noAutoPopup"));
    Y(this.d, this.k, "click", Gg(this, "clk_no_ap"));
    this.I && Y(this.d, this.I, "chg_lang", Gg(this, "chg_src_lang"));
    Y(this.d, this.c, "chg_lang", Gg(this, "chg_tgt_lang"));
    a = new xg(T(this[G], this, "load"));
    this.I && Y(this.d, this.I, "load", yg(a));
    Y(this.d,
    this.c, "load", yg(a));
    a.qa();
    this.I && this.I.oa(this.a.n(Z(this, "promptSourceLang")));
    this.c.oa(this.a.n(Z(this, "promptTargetLang")))
  };
  R.M = function() {
    this.P(l);
    wh.s.M[L](this);
    this.d.p();
    this.d = j;
    if (this.I) {
      this.I.p();
      this.I = j
    }
    this.c.p();
    this.c = j;
    ye(this.z);
    this.kb = this.a = j
  };
  R.ba = function() {
    return this.c.Ab()
  };

  function xh(a, b) {
    a.I && a.I.wa(b);
    if (a.l) if (a.l[b]) {
      var c;
      c = c = "Turn off for: " + a.l[b];
      a.a.Ib(a.k, c)
    }
  }
  R.V = function(a) {
    this.c.wa(a)
  };

  function yh(a, b, c, d) {
    if (a.kb != b) {
      a.kb = b;
      if (b == 0) {
        a.I && bh(a.I, a.a.n(Z(a, "promptSourceLang")));
        if (a.j) {
          var e = a.ba();
          a.c.va(a.j);
          a.V(e)
        }
        bh(a.c, a.a.n(Z(a, "promptTargetLang")))
      } else if (b == 2) {
        a.I && bh(a.I, a.a.n(Z(a, "finishSourceLang")));
        if (a.g) {
          e = a.ba();
          a.c.va(a.g);
          a.V(e)
        }
        bh(a.c, a.a.n(Z(a, "finishTargetLang")))
      }
      e = {};
      e[-1] = a.a.n(Z(a, "errorSection"));
      e[0] = a.a.n(Z(a, "promptSection"));
      e[1] = a.a.n(Z(a, "progressSection"));
      e[2] = a.a.n(Z(a, "finishSection"));
      for (var f in e) e[f] !== r[C][f] && X(e[f], f == b)
    }
    c && a.P(i);
    ya(a.k[P][P][H],
    d ? "block" : "none")
  }
  R.fa = bc("f");
  R.P = function(a) {
    if (this.f != a) {
      this.f = a;
      if (W) var b = ea("0" + this.b.a[I].leftMargin, 10),
        c = ea("0" + this.b.a[I].topMargin, 10);
      var d = this.b.a.compatMode == "BackCompat";
      if (a) {
        Bf(this.b.a[I], "top", "40px");
        X(this.h, i);
        if (W) if (ae("7.0")) {
          p._bannerquirkfixleft = p._bannerquirkfixtop = 0;
          if (d) this.b.a[I].topMargin = c + 40
        } else if (d) {
          this.m = i;
          this.b.a[I].topMargin = c + 40;
          p._bannerquirkfixleft = p._bannerquirkfixtop = 0
        } else {
          p._bannerquirkfixleft = -b;
          p._bannerquirkfixtop = -c - 40
        }
      } else {
        Bf(this.b.a[I], "top", "0px");
        X(this.h, l);
        if (d && c >= 40) this.b.a[I].topMargin = c - 40
      }
    }
  };

  function zh(a, b) {
    a.a.Ib(a.a.n(Z(a, "progressValue")), b)
  }
  R.mc = function(a, b) {
    this.j = a;
    this.g = b;
    this.c.va(a)
  };

  function Ah(a, b) {
    eg[L](this, b);
    this.e = a || {};
    this.a = new Zf(this)
  }
  V(Ah, eg);
  var Bh = {
    pe: 0,
    le: 1,
    me: 2
  };
  R = Ah[C];
  R.t = function() {
    this.h = this.b[tb]("div");
    fe(this.h, "skiptranslate");
    fe(this.h, "goog-te-gadget");
    X(this.h, l);
    if (this.e.Ta == 2) pa(this.h, rg({
      id: Z(this, "targetLanguage"),
      Pc: "",
      Oc: ""
    }));
    else {
      var a;
      a = {
        cc: W && !ae("7.0"),
        Fa: Jc,
        fc: "http://translate.google.com"
      };
      var b = new ng;
      b.H('<span style="white-space:nowrap"><a class="goog-logo-link" href="', a.fc, '" target="_blank">', a.cc ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + a.Fa +
        "',sizingMethod='scale');\"></span>" : '<img src="' + a.Fa + '">', "Translate", "</a></span>");
      a = b[z]();
      a = a = "Powered by " + a;
      pa(this.h, rg({
        id: Z(this, "targetLanguage"),
        Pc: "",
        Oc: this.e.Ta == 1 ? "&nbsp;&nbsp;" + a : a
      }))
    }
  };
  R.Z = function() {
    Ah.s.Z[L](this);
    this.c = this.e.Ta == 2 ? new dh({
      hd: i
    }, this.b) : new ah(this.b);
    Y(this.a, this.c, "chg_lang", Gg(this, "chg_tgt_lang"));
    Y(this.a, this.c, "load", this.yd);
    var a = this.b.Wc(Z(this, "targetLanguage"));
    if (this.e.Ta == 2) {
      var b = this.b.t("img", {
        src: Nc,
        "class": "goog-te-gadget-icon"
      });
      b[H].backgroundImage = "url(" + Fc + ")";
      b[H].backgroundPosition = "-65px 0px";
      var c = this.b.t("span", {
        style: "vertical-align: middle"
      });
      a[x](b);
      a[x](c);
      this.c.oa(c);
      a[H].whiteSpace = "nowrap";
      ma(a, "goog-te-gadget-simple")
    } else {
      this.c.oa(a);
      if (this.e.Ta == 1) ya(a[H], "inline")
    }
  };
  R.yd = function() {
    this[G]("load")
  };
  R.M = function() {
    Ah.s.M[L](this);
    this.a.p();
    this.a = j;
    this.c.p();
    this.c = j
  };
  R.ba = function() {
    return this.c.Ab()
  };
  R.V = function(a) {
    if (a == "") this.j && this.c.va(this.j);
    else this.g && this.c.va(this.g);
    this.c.wa(a)
  };
  R.P = function(a) {
    X(this.h, a)
  };
  R.bb = function(a) {
    this.c.bb(a)
  };
  R.mc = function(a, b) {
    this.j = a;
    this.g = b
  };

  function Ch(a, b) {
    eg[L](this, b);
    this.e = a || {};
    this.e.A || (this.e.A = Kc);
    this.a = new Zf(this)
  }
  V(Ch, eg);
  var Dh = {
    ne: 1,
    oe: 2,
    je: 3,
    ie: 4
  };
  R = Ch[C];
  R.t = function() {
    this.h = this.b[tb]("div");
    this.f = l;
    X(this.h, l);
    var a = {
      id: Z(this, "container")
    }, b = this.h;
    a = a;
    var c = new ng;
    c.H('<iframe id="', a.id, '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
    a = c[z]();
    pa(b, a)
  };
  R.Z = function() {
    Ch.s.Z[L](this);
    var a = {
      dir: lg[Ha](tc) ? "rtl" : "ltr",
      A: this.e.A,
      ge: Z(this, "translate"),
      Aa: Nc,
      Sa: Fc
    };
    this.h.id = Z(this, "floatContainer");
    var b = {
      id: this.h.id,
      className: "goog-te-ftab-float"
    };
    this.h.className += " goog-te-ftab-float";
    switch (this.e.mb) {
      case 2:
        a.xb = "goog-float-top";
        b.top = 0;
        Ba(b, 20);
        break;
      case 3:
        a.xb = "goog-float-bottom";
        wa(b, 0);
        Ba(b, 20);
        break;
      case 4:
        a.xb = "goog-float-bottom";
        wa(b, 0);
        sa(b, 20);
        break;
      default:
        a.xb = "goog-float-top";
        b.top = 0;
        sa(b, 20)
    }
    Rf(tg(b), this.h);
    this.z = this.b.n(Z(this,
      "container"));
    Y(this.a, this.z, "load", this.de);
    Kg(this.z, T(function() {
      var c = Be(this.z);
      c[jb](sg(a));
      c[gb]()
    }, this))
  };
  R.de = function() {
    var a = new ie(Be(this.z));
    this.c = a.n(Z(this, "translate"));
    Y(this.a, this.c, "click", Gg(this, "clk_trans"));
    X(this.h, i);
    a = Tf(this.c);
    X(this.h, l);
    Uf(this.z, a);
    Uf(this.h, a);
    this[G]("load")
  };
  R.M = function() {
    Ch.s.M[L](this);
    this.a.p();
    this.a = j;
    ye(this.z);
    this.c = this.z = j
  };
  R.fa = bc("f");
  R.P = function(a) {
    this.f = a;
    X(this.h, a)
  };

  function Eh(a) {
    if (typeof a.Ca == "function") return a.Ca();
    if (kc(a)) return a[Wa]("");
    if (jc(a)) {
      for (var b = [], c = a[A], d = 0; d < c; d++) b[y](a[d]);
      return b
    }
    return td(a)
  }
  function Fh(a, b, c) {
    if (typeof a[wb] == "function") a[wb](b, c);
    else if (jc(a) || kc(a)) hd(a, b, c);
    else {
      var d;
      var e = a;
      if (typeof e.Oa == "function") d = e.Oa();
      else if (typeof e.Ca != "function") if (jc(e) || kc(e)) {
        d = [];
        e = e[A];
        for (var f = 0; f < e; f++) d[y](f);
        d = d
      } else d = ud(e);
      else d = void 0;
      e = Eh(a);
      f = e[A];
      for (var g = 0; g < f; g++) b[L](c, e[g], d && d[g], a)
    }
  };

  function Gh(a) {
    this.b = {};
    this.a = [];
    var b = arguments[A];
    if (b > 1) {
      if (b % 2) h(ba("Uneven number of arguments"));
      for (var c = 0; c < b; c += 2) this.da(arguments[c], arguments[c + 1])
    } else if (a) {
      c = a;
      if (c instanceof Gh) {
        b = c.Oa();
        c = c.Ca()
      } else {
        b = ud(c);
        c = td(c)
      }
      for (var d = 0; d < b[A]; d++) this.da(b[d], c[d])
    }
  }
  R = Gh[C];
  R.o = 0;
  R.sb = 0;
  R.Ca = function() {
    Hh(this);
    for (var a = [], b = 0; b < this.a[A]; b++) {
      var c = this.a[b];
      a[y](this.b[c])
    }
    return a
  };
  R.Oa = function() {
    Hh(this);
    return this.a[Ya]()
  };
  R.ja = function(a) {
    return Ih(this.b, a)
  };
  R.clear = function() {
    this.b = {};
    la(this.a, 0);
    this.sb = this.o = 0
  };
  R.remove = function(a) {
    if (Ih(this.b, a)) {
      delete this.b[a];
      this.o--;
      this.sb++;
      this.a[A] > 2 * this.o && Hh(this);
      return i
    }
    return l
  };

  function Hh(a) {
    if (a.o != a.a[A]) {
      for (var b = 0, c = 0; b < a.a[A];) {
        var d = a.a[b];
        if (Ih(a.b, d)) a.a[c++] = d;
        b++
      }
      la(a.a, c)
    }
    if (a.o != a.a[A]) {
      var e = {};
      for (c = b = 0; b < a.a[A];) {
        d = a.a[b];
        if (!Ih(e, d)) {
          a.a[c++] = d;
          e[d] = 1
        }
        b++
      }
      la(a.a, c)
    }
  }
  R.sa = function(a, b) {
    if (Ih(this.b, a)) return this.b[a];
    return b
  };
  R.da = function(a, b) {
    if (!Ih(this.b, a)) {
      this.o++;
      this.a[y](a);
      this.sb++
    }
    this.b[a] = b
  };
  R.Q = function() {
    return new Gh(this)
  };
  R.Xc = function(a) {
    Hh(this);
    var b = 0,
      c = this.a,
      d = this.b,
      e = this.sb,
      f = this,
      g = new ih;
    g.Ya = function() {
      for (;;) {
        if (e != f.sb) h(ba("The map has changed since the iterator was created"));
        if (b >= c[A]) h(hh);
        var k = c[b++];
        return a ? k : d[k]
      }
    };
    return g
  };

  function Ih(a, b) {
    return r[C][eb][L](a, b)
  };

  function Jh(a, b) {
    var c;
    if (a instanceof Jh) {
      Kh(this, b == j ? a.Pa : b);
      Lh(this, a.ua);
      Mh(this, a.rb);
      Nh(this, a.Na);
      Oh(this, a.$a);
      Ph(this, a.Za);
      Qh(this, a.a.Q());
      Rh(this, a.nb)
    } else if (a && (c = n(a)[qb](lh))) {
      Kh(this, !! b);
      Lh(this, c[1] || "", i);
      Mh(this, c[2] || "", i);
      Nh(this, c[3] || "", i);
      Oh(this, c[4]);
      Ph(this, c[5] || "", i);
      Qh(this, c[6] || "", i);
      Rh(this, c[7] || "", i)
    } else {
      Kh(this, !! b);
      this.a = new Sh(j, this, this.Pa)
    }
  }
  R = Jh[C];
  R.ua = "";
  R.rb = "";
  R.Na = "";
  R.$a = j;
  R.Za = "";
  R.nb = "";
  R.Id = l;
  R.Pa = l;
  ka(R, function() {
    if (this.W) return this.W;
    var a = [];
    this.ua && a[y](Th(this.ua, Uh), ":");
    if (this.Na) {
      a[y]("//");
      this.rb && a[y](Th(this.rb, Uh), "@");
      a[y](Vh(this.Na));
      this.$a != j && a[y](":", n(this.$a))
    }
    if (this.Za) {
      this.Na && this.Za.charAt(0) != "/" && a[y]("/");
      a[y](Th(this.Za, Wh))
    }
    var b = n(this.a);
    b && a[y]("?", b);
    this.nb && a[y]("#", Th(this.nb, Xh));
    return this.W = a[Vb]("")
  });
  R.Q = function() {
    var a;
    a = this.ua;
    var b = this.rb,
      c = this.Na,
      d = this.$a,
      e = this.Za,
      f = this.a.Q(),
      g = this.nb,
      k = new Jh(j, this.Pa);
    a && Lh(k, a);
    b && Mh(k, b);
    c && Nh(k, c);
    d && Oh(k, d);
    e && Ph(k, e);
    f && Qh(k, f);
    g && Rh(k, g);
    return a = k
  };

  function Lh(a, b, c) {
    Yh(a);
    delete a.W;
    a.ua = c ? b ? ha(b) : "" : b;
    if (a.ua) a.ua = a.ua[E](/:$/, "");
    return a
  }
  function Mh(a, b, c) {
    Yh(a);
    delete a.W;
    a.rb = c ? b ? ha(b) : "" : b;
    return a
  }
  function Nh(a, b, c) {
    Yh(a);
    delete a.W;
    a.Na = c ? b ? ha(b) : "" : b;
    return a
  }

  function Oh(a, b) {
    Yh(a);
    delete a.W;
    if (b) {
      b = ga(b);
      if (isNaN(b) || b < 0) h(ba("Bad port number " + b));
      a.$a = b
    } else a.$a = j;
    return a
  }
  function Ph(a, b, c) {
    Yh(a);
    delete a.W;
    a.Za = c ? b ? ha(b) : "" : b;
    return a
  }
  function Qh(a, b, c) {
    Yh(a);
    delete a.W;
    if (b instanceof Sh) {
      a.a = b;
      a.a.d = a;
      Zh(a.a, a.Pa)
    } else {
      c || (b = Th(b, $h));
      a.a = new Sh(b, a, a.Pa)
    }
    return a
  }
  function ai(a, b, c) {
    Yh(a);
    delete a.W;
    a.a.da(b, c);
    return a
  }

  function bi(a, b, c) {
    Yh(a);
    delete a.W;
    ic(c) || (c = [n(c)]);
    var d = a.a;
    b = b;
    c = c;
    ci(d);
    di(d);
    b = ei(d, b);
    if (d.ja(b)) {
      var e = d.w.sa(b);
      if (ic(e)) d.o -= e[A];
      else d.o--
    }
    if (c[A] > 0) {
      d.w.da(b, c);
      d.o += c[A]
    }
    return a
  }
  function Rh(a, b, c) {
    Yh(a);
    delete a.W;
    a.nb = c ? b ? ha(b) : "" : b;
    return a
  }
  function Yh(a) {
    if (a.Id) h(ba("Tried to modify a read-only Uri"))
  }
  function Kh(a, b) {
    a.Pa = b;
    a.a && Zh(a.a, b)
  }
  function Vh(a) {
    if (kc(a)) return da(a);
    return j
  }
  var fi = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;

  function Th(a, b) {
    var c = j;
    if (kc(a)) {
      c = a;
      fi[Ha](c) || (c = encodeURI(a));
      if (c.search(b) >= 0) c = c[E](b, gi)
    }
    return c
  }
  function gi(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15)[z](16) + (a & 15)[z](16)
  }
  var Uh = /[#\/\?@]/g,
    Wh = /[\#\?]/g,
    $h = /[\#\?@]/g,
    Xh = /#/g;

  function Sh(a, b, c) {
    this.a = a || j;
    this.d = b || j;
    this.c = !! c
  }

  function ci(a) {
    if (!a.w) {
      a.w = new Gh;
      if (a.a) for (var b = a.a[Wa]("&"), c = 0; c < b[A]; c++) {
        var d = b[c][F]("="),
          e = j,
          f = j;
        if (d >= 0) {
          e = b[c][Db](0, d);
          f = b[c][Db](d + 1)
        } else e = b[c];
        e = ha(e[E](/\+/g, " "));
        e = ei(a, e);
        a.add(e, f ? ha(f[E](/\+/g, " ")) : "")
      }
    }
  }
  R = Sh[C];
  R.w = j;
  R.o = j;
  R.add = function(a, b) {
    ci(this);
    di(this);
    a = ei(this, a);
    if (this.ja(a)) {
      var c = this.w.sa(a);
      ic(c) ? c[y](b) : this.w.da(a, [c, b])
    } else this.w.da(a, b);
    this.o++;
    return this
  };
  R.remove = function(a) {
    ci(this);
    a = ei(this, a);
    if (this.w.ja(a)) {
      di(this);
      var b = this.w.sa(a);
      if (ic(b)) this.o -= b[A];
      else this.o--;
      return this.w.remove(a)
    }
    return l
  };
  R.clear = function() {
    di(this);
    this.w && this.w.clear();
    this.o = 0
  };
  R.ja = function(a) {
    ci(this);
    a = ei(this, a);
    return this.w.ja(a)
  };
  R.Oa = function() {
    ci(this);
    for (var a = this.w.Ca(), b = this.w.Oa(), c = [], d = 0; d < b[A]; d++) {
      var e = a[d];
      if (ic(e)) for (var f = 0; f < e[A]; f++) c[y](b[d]);
      else c[y](b[d])
    }
    return c
  };
  R.Ca = function(a) {
    ci(this);
    if (a) {
      a = ei(this, a);
      if (this.ja(a)) {
        var b = this.w.sa(a);
        if (ic(b)) return b;
        else {
          a = [];
          a[y](b)
        }
      } else a = []
    } else {
      b = this.w.Ca();
      a = [];
      for (var c = 0; c < b[A]; c++) {
        var d = b[c];
        ic(d) ? md(a, d) : a[y](d)
      }
    }
    return a
  };
  R.da = function(a, b) {
    ci(this);
    di(this);
    a = ei(this, a);
    if (this.ja(a)) {
      var c = this.w.sa(a);
      if (ic(c)) this.o -= c[A];
      else this.o--
    }
    this.w.da(a, b);
    this.o++;
    return this
  };
  R.sa = function(a, b) {
    ci(this);
    a = ei(this, a);
    if (this.ja(a)) {
      var c = this.w.sa(a);
      return ic(c) ? c[0] : c
    } else return b
  };
  ka(R, function() {
    if (this.a) return this.a;
    if (!this.w) return "";
    for (var a = [], b = 0, c = this.w.Oa(), d = 0; d < c[A]; d++) {
      var e = c[d],
        f = Vc(e);
      e = this.w.sa(e);
      if (ic(e)) for (var g = 0; g < e[A]; g++) {
        b > 0 && a[y]("&");
        a[y](f);
        e[g] !== "" && a[y]("=", Vc(e[g]));
        b++
      } else {
        b > 0 && a[y]("&");
        a[y](f);
        e !== "" && a[y]("=", Vc(e));
        b++
      }
    }
    return this.a = a[Vb]("")
  });

  function di(a) {
    delete a.b;
    delete a.a;
    a.d && delete a.d.W
  }
  R.Q = function() {
    var a = new Sh;
    if (this.b) a.b = this.b;
    if (this.a) a.a = this.a;
    if (this.w) a.w = this.w.Q();
    return a
  };

  function ei(a, b) {
    var c = n(b);
    if (a.c) c = c.toLowerCase();
    return c
  }
  function Zh(a, b) {
    var c = b && !a.c;
    if (c) {
      ci(a);
      di(a);
      Fh(a.w, function(d, e) {
        var f = e.toLowerCase();
        if (e != f) {
          this.remove(e);
          this.add(f, d)
        }
      }, a)
    }
    a.c = b
  };

  function hi(a, b) {
    this.b = new Jh(a);
    this.a = b ? b : "callback";
    this.ya = 5E3
  }
  var ii = 0;
  ua(hi[C], function(a, b, c, d) {
    if (!u[Yb][M]) {
      c && c(a);
      return j
    }
    d = d || "_" + (ii++)[z](36) + rc()[z](36);
    S._callbacks_ || (S._callbacks_ = {});
    var e = u[tb]("script"),
      f = j;
    if (this.ya > 0) {
      f = ji(d, e, a, c);
      f = S[Ta](f, this.ya)
    }
    c = this.b.Q();
    a = a;
    var g = c;
    for (var k in a) if (!a[eb] || a[eb](k)) bi(g, k, a[k]);
    if (b) {
      b = ki(d, e, b, f);
      S._callbacks_[d] = b;
      bi(c, this.a, "_callbacks_." + d)
    }
    me(e, {
      type: "text/javascript",
      id: d,
      charset: "UTF-8",
      src: c[z]()
    });
    b = u[Wb]("head")[0];
    b[x](e);
    return {
      R: d,
      ya: f
    }
  });
  oa(hi[C], function(a) {
    if (a && a.R) {
      var b = kc(a.R) ? u.getElementById(a.R) : a.R;
      if (b && b[O] == "SCRIPT" && typeof S._callbacks_[a.R] == "function") {
        a.ya && S[La](a.ya);
        li(a.R, b, l)
      }
    }
  });

  function ji(a, b, c, d) {
    return function() {
      li(a, b, l);
      d && d(c)
    }
  }
  function ki(a, b, c, d) {
    return function() {
      S[La](d);
      li(a, b, i);
      c[Jb](m, arguments)
    }
  }
  function li(a, b, c) {
    S[Ta](function() {
      ye(b)
    }, 0);
    if (S._callbacks_[a]) if (c) delete S._callbacks_[a];
    else S._callbacks_[a] = fc
  };

  function mi(a) {
    return ni(a || arguments.callee.caller, [])
  }

  function ni(a, b) {
    var c = [];
    if (id(b, a)) c[y]("[...circular reference...]");
    else if (a && b[A] < 50) {
      c[y](oi(a) + "(");
      for (var d = a.arguments, e = 0; e < d[A]; e++) {
        e > 0 && c[y](", ");
        var f;
        f = d[e];
        switch (typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            f = f;
            break;
          case "number":
            f = n(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = oi(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        if (f[A] > 40) f = f[Zb](0, 40) + "...";
        c[y](f)
      }
      b[y](a);
      c[y](")\n");
      try {
        c[y](ni(a.caller, b))
      } catch (g) {
        c[y]("[exception trying to get caller]\n")
      }
    } else a ? c[y]("[...long stack...]") : c[y]("[end]");
    return c[Vb]("")
  }
  function oi(a) {
    a = n(a);
    if (!pi[a]) {
      var b = /function ([^\(]+)/ [Ka](a);
      if (b) {
        b = b[1];
        pi[a] = b
      } else pi[a] = "[Anonymous]"
    }
    return pi[a]
  }
  var pi = {};

  function qi(a, b, c, d, e) {
    this[Nb](a, b, c, d, e)
  }
  qi[C].c = 0;
  qi[C].a = j;
  qi[C].zc = j;
  var ri = 0;
  qi[C].reset = function(a, b, c, d, e) {
    this.c = typeof e == "number" ? e : ri++;
    this.g = d || rc();
    this.b = a;
    this.f = b;
    this.d = c;
    delete this.a;
    delete this.zc
  };
  qi[C].Rc = ac("b");

  function si(a) {
    this.g = a
  }
  si[C].a = j;
  si[C].c = j;
  si[C].b = j;
  si[C].d = j;

  function ti(a, b) {
    this.name = a;
    qa(this, b)
  }
  ka(ti[C], bc("name"));
  var ui = new ti("SEVERE", 1E3),
    vi = new ti("WARNING", 900),
    wi = new ti("CONFIG", 700),
    xi = new ti("FINE", 500);
  si[C].Rc = ac("c");

  function yi(a) {
    if (a.c) return a.c;
    if (a.a) return yi(a.a);
    return j
  }
  si[C].log = function(a, b, c) {
    if (a[$a] >= yi(this)[$a]) {
      a = this.f(a, b, c);
      for (b = this; b;) {
        c = b;
        var d = a;
        if (c.d) for (var e = 0, f = void 0; f = c.d[e]; e++) f(d);
        b = b.a
      }
    }
  };
  si[C].f = function(a, b, c) {
    var d;
    d = d = new qi(a, n(b), this.g);
    if (c) {
      d.a = c;
      var e = d,
        f;
      var g = arguments.callee.caller;
      try {
        var k, o = c,
          q = ec("window.location.href");
        k = typeof o == "string" ? {
          message: o,
          name: "Unknown error",
          lineNumber: "Not available",
          fileName: q,
          stack: "Not available"
        } : !o.lineNumber || !o[Qb] || !o.stack ? {
          message: o[db],
          name: o[Pb],
          lineNumber: o.lineNumber || o.line || "Not available",
          fileName: o[Qb] || o.filename || o.sourceURL || q,
          stack: o.stack || "Not available"
        } : o;
        var w = "Message: " + Wc(k[db]) + '\nUrl: <a href="view-source:' + k[Qb] + '" target="_new">' + k[Qb] + "</a>\nLine: " + k.lineNumber + "\n\nBrowser stack:\n" + Wc(k.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Wc(mi(g) + "-> ");
        f = w
      } catch (s) {
        f = "Exception trying to expose exception! You win, we lose. " + s
      }
      e.zc = f
    }
    return d
  };

  function zi(a, b, c) {
    a.log(xi, b, c)
  }
  var Ai = {}, Bi = j;

  function Ci(a) {
    if (!Bi) {
      Bi = new si("");
      Ai[""] = Bi;
      Bi.Rc(wi)
    }
    var b = Ai[a];
    if (!(b = b)) {
      a = a;
      b = new si(a);
      var c = a.lastIndexOf("."),
        d = a[Zb](0, c);
      c = a[Zb](c + 1);
      d = Ci(d);
      c = c;
      var e = b,
        f;
      f = d;
      if (!f.b) f.b = {};
      f = f.b;
      f[c] = e;
      b.a = d;
      b = Ai[a] = b
    }
    return b
  };
  var Di = S.window;

  function Ei() {}
  Ei[C].vb = j;

  function Fi() {
    return Gi(Hi)
  }
  var Hi;

  function Ii() {}
  V(Ii, Ei);

  function Gi(a) {
    return (a = Ji(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }
  function Ki(a) {
    a = Ji(a);
    var b = {};
    if (a) {
      b[0] = i;
      b[1] = i
    }
    return b
  }
  Ii[C].a = j;

  function Ji(a) {
    if (!a.a && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b[A]; c++) {
        var d = b[c];
        try {
          new ActiveXObject(d);
          return a.a = d
        } catch (e) {}
      }
      h(ba("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.a
  }
  var Li = new Ii;
  Hi = Li;

  function Mi(a) {
    this.headers = new Gh;
    this.a = a || j
  }
  V(Mi, cg);
  R = Mi[C];
  R.U = Ci("goog.net.XhrIo");
  R.za = l;
  R.G = j;
  R.Pb = j;
  R.Ic = "";
  R.Hc = "";
  R.ob = 0;
  R.pb = "";
  R.Wb = l;
  R.Cb = l;
  R.dc = l;
  R.Da = l;
  R.Lb = 0;
  R.Ja = j;
  ua(R, function(a, b, c, d) {
    if (this.G) h(ba("[goog.net.XhrIo] Object is active with another request"));
    b = b || "GET";
    this.Ic = a;
    this.pb = "";
    this.ob = 0;
    this.Hc = b;
    this.Wb = l;
    this.za = i;
    this.G = this.a ? Gi(this.a) : new Fi;
    this.Pb = this.a ? this.a.vb || (this.a.vb = Ki(this.a)) : Hi.vb || (Hi.vb = Ki(Hi));
    this.G.onreadystatechange = T(this.Lc, this);
    try {
      zi(this.U, Ni(this, "Opening Xhr"));
      this.dc = i;
      this.G.open(b, a, i);
      this.dc = l
    } catch (e) {
      zi(this.U, Ni(this, "Error opening Xhr: " + e[db]));
      Oi(this, 5, e);
      return
    }
    a = c || "";
    var f = this.headers.Q();
    d && Fh(d, function(k, o) {
      f.da(o, k)
    });
    b == "POST" && !f.ja("Content-Type") && f.da("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Fh(f, function(k, o) {
      this.G.setRequestHeader(o, k)
    }, this);
    try {
      if (this.Ja) {
        Di[La](this.Ja);
        this.Ja = j
      }
      if (this.Lb > 0) {
        zi(this.U, Ni(this, "Will abort after " + this.Lb + "ms if incomplete"));
        this.Ja = Di[Ta](T(this.ya, this), this.Lb)
      }
      zi(this.U, Ni(this, "Sending request"));
      this.Cb = i;
      this.G[sb](a);
      this.Cb = l
    } catch (g) {
      zi(this.U, Ni(this, "Send error: " + g[db]));
      Oi(this, 5, g)
    }
  });
  R.dispatchEvent = function(a) {
    return Mi.s[G][L](this, a)
  };
  R.ya = function() {
    if (typeof cc != "undefined") if (this.G) {
      this.pb = "Timed out after " + this.Lb + "ms, aborting";
      this.ob = 8;
      zi(this.U, Ni(this, this.pb));
      this[G]("timeout");
      this[Ra](8)
    }
  };

  function Oi(a, b, c) {
    a.za = l;
    if (a.G) {
      a.Da = i;
      a.G[Ra]();
      a.Da = l
    }
    a.pb = c;
    a.ob = b;
    Pi(a);
    Qi(a)
  }
  function Pi(a) {
    if (!a.Wb) {
      a.Wb = i;
      a[G]("complete");
      a[G]("error")
    }
  }
  R.abort = function(a) {
    if (this.G) {
      zi(this.U, Ni(this, "Aborting"));
      this.za = l;
      this.Da = i;
      this.G[Ra]();
      this.Da = l;
      this.ob = a || 7;
      this[G]("complete");
      this[G]("abort");
      Qi(this)
    }
  };
  R.r = function() {
    if (this.G) {
      if (this.za) {
        this.za = l;
        this.Da = i;
        this.G[Ra]();
        this.Da = l
      }
      Qi(this, i)
    }
    Mi.s.r[L](this)
  };
  R.Lc = function() {
    !this.dc && !this.Cb && !this.Da ? this.Od() : Ri(this)
  };
  R.Od = function() {
    Ri(this)
  };

  function Ri(a) {
    if (a.za) if (typeof cc != "undefined") if (a.Pb[1] && Si(a) == 4 && Ti(a) == 2) zi(a.U, Ni(a, "Local request error detected and ignored"));
    else if (a.Cb && Si(a) == 4) Di[Ta](T(a.Lc, a), 0);
    else {
      a[G]("readystatechange");
      if (Si(a) == 4) {
        zi(a.U, Ni(a, "Request complete"));
        a.za = l;
        if (Ui(a)) {
          a[G]("complete");
          a[G]("success")
        } else {
          a.ob = 6;
          var b = a,
            c;
          try {
            c = Si(a) > 2 ? a.G.statusText : ""
          } catch (d) {
            zi(a.U, "Can not get status: " + d[db]);
            c = ""
          }
          b.pb = c + " [" + Ti(a) + "]";
          Pi(a)
        }
        Qi(a)
      }
    }
  }

  function Qi(a, b) {
    if (a.G) {
      var c = a.G,
        d = a.Pb[0] ? fc : j;
      a.G = j;
      a.Pb = j;
      if (a.Ja) {
        Di[La](a.Ja);
        a.Ja = j
      }
      b || a[G]("ready");
      try {
        c.onreadystatechange = d
      } catch (e) {
        a.U.log(ui, "Problem encountered resetting onreadystatechange: " + e[db], void 0)
      }
    }
  }
  function Ui(a) {
    switch (Ti(a)) {
      case 0:
      case 200:
      case 204:
      case 304:
        return i;
      default:
        return l
    }
  }
  function Si(a) {
    return a.G ? a.G.readyState : 0
  }
  function Ti(a) {
    try {
      return Si(a) > 2 ? a.G.status : -1
    } catch (b) {
      a.U.log(vi, "Can not get status: " + b[db], void 0);
      return -1
    }
  }

  function Ni(a, b) {
    return b + " [" + a.Hc + " " + a.Ic + " " + Ti(a) + "]"
  };
  var Vi;
  (function() {
    function a(k) {
      k = k[qb](/[\d]+/g);
      la(k, 3);
      return k[Vb](".")
    }
    var b = l,
      c = "";
    if (aa[Ga] && aa[Ga][A]) {
      var d = aa[Ga]["Shockwave Flash"];
      if (d) {
        b = i;
        if (d.description) c = a(d.description)
      }
      if (aa[Ga]["Shockwave Flash 2.0"]) {
        b = i;
        c = "2.0.0.11"
      }
    } else if (aa.mimeTypes && aa.mimeTypes[A]) {
      if (b = (d = aa.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) c = a(d.enabledPlugin.description)
    } else try {
      d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      b = i;
      c = a(d.GetVariable("$version"))
    } catch (e) {
      try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        b = i;
        c = "6.0.21"
      } catch (f) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          b = i;
          c = a(d.GetVariable("$version"))
        } catch (g) {}
      }
    }
    Vi = c
  })();

  function Wi(a, b) {
    this.cb = new Jh(a);
    if (b) for (var c in b) b[c] !== r[C][c] && ai(this.cb, c, b[c])
  }
  V(Wi, Qc);
  za(Wi[C], function() {
    return i
  });
  va(Wi[C], function() {
    return this[Rb]()
  });
  ua(Wi[C], function() {
    return j
  });
  oa(Wi[C], function() {});

  function Xi(a, b, c, d) {
    Wi[L](this, a, b);
    this.b = d == j || !! d;
    this.a = new hi(this.cb[z](), c)
  }
  V(Xi, Wi);
  za(Xi[C], bc("b"));
  ua(Xi[C], function(a, b) {
    this.a.ya = -1;
    return this.a[sb](a, b)
  });
  oa(Xi[C], function(a) {
    this.a[Pa](a)
  });

  function Yi(a, b, c) {
    Wi[L](this, "", c);
    this.d = a;
    this.f = b;
    this.g = Ig(c);
    this.b = {};
    S._fhr_callback_ || (S._fhr_callback_ = {});
    this.d = a;
    this.c = dd(Vi, "9.0") >= 0
  }
  V(Yi, Wi);
  var Zi = 0;

  function $i() {
    return "I" + (Zi++)[z](36) + rc()[z](36)
  }

  function aj(a) {
    if (a.c) {
      if (!a.k) {
        a.k = qe("div", {
          style: "position:absolute;top:-1000px;height:1px;width:1px"
        });
        u[I][x](a.k);
        a.R = "f" + $i();
        var b = {
          id: a.R,
          src: a.d
        }, c = a.k;
        if (W) {
          b = b;
          var d = new ng;
          d.H('<object id="', b.id, '" name="', b.id, '" width="400" height="500" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="', b.src, '"/><param name="allowScriptAccess" value="always"/></object>');
          b = d[z]()
        } else {
          b = b;
          d = new ng;
          d.H('<object id="', b.id, '" name="', b.id, '" width="400" height="500" type="application/x-shockwave-flash" data="', b.src, '"><param name="allowScriptAccess" value="always"/></object>');
          b = d[z]()
        }
        pa(c, b)
      }
      if (!a.a) a.a = W ? p[a.R] : u[a.R]
    }
  }
  R = Yi[C];
  za(R, function() {
    return this.c && p[ab][ub] != "file:"
  });
  va(R, function() {
    aj(this);
    return this.c && this.a && this.a[xb] && this.a[xb]()
  });
  ua(R, function(a, b) {
    aj(this);
    if (!this.a || !this.a[sb]) return j;
    var c = "cb" + $i();
    S._fhr_callback_[c] = b;
    var d = this.a[sb](this.f, "_fhr_callback_." + c, this.g, Ig(a));
    if (d < 0) {
      delete S._fhr_callback_[c];
      return j
    }
    var e = $i();
    this.b[e] = {
      Yc: c,
      pa: d
    };
    return e
  });
  oa(R, function(a) {
    aj(this);
    var b = this.b[a];
    if (b) {
      this.a[Pa](b.pa);
      delete S._fhr_callback_[b.Yc];
      delete this.b[a]
    }
  });
  R.r = function() {
    Yi.s.r[L](this);
    for (var a in this.b) if (this.b[a] !== r[C][a]) {
      var b = this.b[a];
      this.a[Pa](b.pa);
      delete S._fhr_callback_[b.pa]
    }
    if (this.k) {
      ye(this.k);
      this.a = this.b = this.k = j
    }
  };

  function bj(a, b) {
    Wi[L](this, a, b);
    this.b = {};
    this.a = this.c = 0;
    if (!Kd) {
      if (p.XMLHttpRequest) {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) this.a = 1
      }
      if (!this.a && p.XDomainRequest && p[ab][ub] != "file:") {
        this.a = 2;
        ai(this.cb, "u", p[ab][Cb])
      }
    }
  }
  V(bj, Wi);
  za(bj[C], function() {
    return !!this.a
  });
  ua(bj[C], function(a, b) {
    var c = Mg(),
      d = ++this.c,
      e = {};
    if (this.a == 1) {
      e.Ka = new Mi;
      pf(e.Ka, "complete", T(function() {
        if (!e.Ub) {
          if (Ui(e.Ka)) {
            var f = b,
              g;
            var k = e.Ka;
            try {
              g = k.G ? k.G.responseText : ""
            } catch (o) {
              zi(k.U, "Can not get responseText: " + o[db]);
              g = ""
            }
            f(g)
          } else b(j, "IO_ERROR");
          cj(this, d)
        }
      }, this));
      e.Ka[sb](this.cb[z](), "POST", Ig(a), {
        "Content-Type": "application/x-www-form-urlencoded"
      })
    } else {
      e.ea = new XDomainRequest;
      e.ea.timeout = 2E4;
      e.ea.onload = T(function() {
        if (!e.Ub) {
          b(e.ea.responseText);
          cj(this, d)
        }
      }, this);
      e.ea.onerror = e.ea.ontimeout = T(function() {
        if (!e.Ub) {
          b(j, "IO_ERROR");
          cj(this, d)
        }
      }, this);
      e.ea.open("POST", this.cb[z]());
      e.ea[sb](Ig(a))
    }
    this.b[d] = e;
    Ng(c);
    return d
  });
  oa(bj[C], function(a) {
    var b = this.b[a];
    if (b) {
      b.Ub = i;
      b.ea && b.ea[Ra]();
      cj(this, a)
    }
  });

  function cj(a, b) {
    var c = a.b[b];
    if (c) {
      if (c.Ka) {
        c.Ka.p();
        c.Ka = j
      } else if (c.ea) c.ea = j;
      delete a.b[b]
    }
  }
  bj[C].r = function() {
    bj.s.r[L](this);
    for (var a in this.b) this[Pa](a)
  };

  function dj(a) {
    var b = {
      anno: 3,
      client: Cc,
      format: "html",
      v: "1.0"
    };
    a && (b.ssl = 1);
    if (Bc) b.scid = Bc;
    a = a ? "https://" : "http://";
    this.J = j;
    this.Ma = {
      jb: ej,
      Jc: 300
    };
    this.b = new Xi(a + Hc, {
      client: Cc
    }, "cb");
    b = [{
      L: new bj(a + Dc + "/translate_a/t", b),
      jb: fj,
      Fb: 30720,
      gc: 122880,
      Wa: -1,
      jc: 0,
      lb: l
    }, {
      L: new Yi(a + Gc, "translate", b),
      Nc: 100,
      jb: fj,
      Fb: 30720,
      gc: 122880,
      Wa: -1,
      jc: 0,
      lb: l
    }, {
      L: new Xi(a + Dc + "/translate_a/t", b, "cb", W && Zd <= 7),
      jb: gj,
      Fb: 1900,
      gc: 122880,
      Wa: -1,
      jc: 3,
      lb: i
    }];
    this.c = new hj(b);
    this.a = l;
    for (a = 0; a < b[A]; ++a) this.a = this.a || b[a].L[Rb]();
    this.a || Jg("te_au")
  }
  V(dj, Qc);

  function hj(a) {
    this.b = a
  }
  hj[C].start = function(a) {
    this.La = a;
    this.a = 0;
    ij(this)
  };

  function ij(a) {
    if (a.a >= a.b[A]) a.La(j);
    else {
      var b = a.b[a.a++];
      if (b.Nc)(new Dg(T(b.L[xb], b.L), T(function(c) {
        c ? this.La(b) : ij(this)
      }, a), 30, b.Nc)).go();
      else b.L[xb]() ? a.La(b) : ij(a)
    }
  }

  function jj(a) {
    var b;
    if (hc(a) != "array") b = [
      [a, 200]
    ];
    else if (hc(a[0]) != "array") if (a[A] == 2) b = [
      [a[0], 200, a[1]],
      [a[1], 200, a[1]]
    ];
    else {
      b = [];
      for (var c = 0; c < a[A]; ++c) b[c] = [a[c], 200]
    } else {
      b = [];
      for (c = 0; c < a[A]; ++c) b[c] = [a[c][0], 200, a[c][1]]
    }
    return b
  }
  function fj(a) {
    return function(b) {
      if (b) try {
        var c = b[F]("\u0000");
        if (c >= 0) b = b[Zb](0, c);
        var d = eval("(" + b + ")")
      } catch (e) {
        d = j;
        Jg("te_afbr")
      }
      d ? a(jj(d), 200) : a([], 500)
    }
  }
  function gj(a) {
    return function(b) {
      b ? a(jj(b), 200) : a([], 500)
    }
  }

  function ej(a) {
    return function(b) {
      if (b) try {
        var c = eval("(" + b + ")")
      } catch (d) {
        c = j
      }
      a(c && c[1] || m)
    }
  }
  R = dj[C];
  R.Gd = function(a) {
    if (!this.d) {
      this.d = i;
      this.c.start(T(function(b) {
        if (b) {
          this.J = b;
          this.Ma.L = b.L
        }
        a()
      }, this))
    }
  };
  za(R, bc("a"));
  va(R, function() {
    return this.J !== j && this.J.L !== j && this.J.L[xb]()
  });
  R.translate = function(a, b, c, d, e, f) {
    a = this.J.jb(a);
    b = {
      q: b,
      sl: c,
      tl: d
    };
    b.tc = e;
    if (f) b.ctt = 1;
    return this.J.L[sb](b, a)
  };

  function kj(a) {
    return a.J.lb ? a.J.Fb - a.J.L.cb.Q()[z]()[A] : a.J.Fb
  }
  R.r = function() {
    dj.s.r[L](this);
    if (this.J) {
      this.J.L.p();
      this.J.L = j
    }
    this.Ma.L = j;
    this.b.p();
    this.b = j
  };

  function lj(a, b) {
    this.d = a;
    this.l = !! b;
    this.a = this.k = 0;
    this.b = this.c = -1;
    this.f = this.j = this.g = 0
  }
  var mj = vg([".", ",", ";", ":", "\\?", "!"]),
    nj = vg([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

  function oj(a, b) {
    if (!a.l) return 1;
    if (b <= 127) {
      if (b <= 32 || nj[b]) return 3;
      return 1
    } else if (b <= 2047) return 6;
    else if (b <= 65535) return 9;
    return 12
  }

  function pj(a, b) {
    a.l && (b -= 12);
    for (var c = "", d = a.k; d < a.d[A]; ++d) {
      var e = a.d.charAt(d),
        f = e.charCodeAt(0);
      a.g += oj(a, f);
      if (mj[e]) {
        a.b = d;
        a.j = a.g
      } else if (e == " ") {
        a.c = d;
        a.f = a.g
      }
      if (a.g >= b) {
        if (a.b >= 0) {
          c = a.d[Db](a.a, a.b + 1);
          a.g -= a.j;
          a.a = a.b + 1;
          if (a.b >= a.c) {
            a.c = -1;
            a.f = 0
          } else a.f -= a.j;
          a.b = -1;
          a.j = 0
        } else if (a.c >= 0) {
          c = a.d[Db](a.a, a.c + 1);
          a.g -= a.f;
          a.a = a.c + 1;
          if (a.c >= a.b) a.b = -1;
          else a.j -= a.f;
          a.c = -1;
          a.f = 0
        } else {
          c = a.d[Db](a.a, d + 1);
          a.g = 0;
          a.a = d + 1;
          a.b = a.c = -1;
          a.f = a.j = 0
        }
        a.k = d + 1;
        return c
      }
    }
    if (a.a < a.d[A]) {
      c = a.d[Db](a.a);
      a.a = a.d[A]
    }
    return c
  }

  function qj(a, b, c, d, e) {
    this.ia = a;
    this.g = b;
    this.sc = c;
    this.N = new mh(d ? T(this.Vd, this) : j, c, e);
    this.m = j;
    this.D = l;
    this.j = "auto";
    this.d = "en";
    this.rc = l;
    this.l = {};
    this.c = {};
    this.ke = []
  }
  V(qj, Qc);
  R = qj[C];
  R.Bc = function() {
    var a = this.eb,
      b;
    if (b = a.db > 0) {
      b = a;
      var c;
      c = a.Eb;
      var d = sh(this.N, c);
      if (d) c = d;
      else if (this.Qb[A]) {
        this.N[Nb](this.Qb[Ia](), this.eb.Vc);
        c = sh(this.N, c)
      } else c = j;
      b = b.Y = c
    }
    if (b) {
      this.m[y](a.Y);
      var e = this.g.J.lb ? a.Y.B : a.Y.ka[A];
      this.gb += a.Y.ka[A];
      if (this.l && this.l[a.Y.ka]) {
        this.b.add(T(this.Sb, this, a.Y));
        a.db -= e
      } else if (e > a.X) {
        b = a.Y.ka;
        c = new lj(b);
        d = [];
        var f = "";
        if (a.ma) for (; rj(a) && e > a.X;);
        for (; f = pj(c, a.X);) {
          e = {
            pa: j,
            Y: a.Y,
            Ra: d,
            content: f,
            qb: l
          };
          d[y](e);
          this.a[y](e);
          a.db -= f[A];
          if (a.db <= 0) {
            e.uc = b[Db](c.a);
            break
          } else rj(a)
        }
      } else {
        if (!a.ma || e > a.Vb || a.ic >= a.Wa && a.Wa > 0) {
          if (a.ma) {
            this.a[y](a.ma);
            sj(this);
            rj(a);
            a.Vb = a.X
          }
          a.ma = {
            pa: j,
            la: [],
            qb: l
          };
          a.ic = 0
        }
        a.ma.la[y](a.Y);
        a.Vb -= e + this.g.J.jc;
        a.db -= e;
        a.ic++
      }
      this.f.add(T(this.Bc, this))
    } else {
      if (b = !! a.ma) {
        this.a[y](a.ma);
        a.ma = j
      }
      this.f = j;
      if (this.B == this.a[A]) this.b.add(T(this.Xb, this));
      else if (this.F == 0 || b && this.B == this.a[A] - 1) sj(this);
      this.b.go()
    }
  };
  R.Vd = function(a) {
    var b = Rc(a[Cb]);
    if (!(b[F]("javascript:") == 0 || b[F]("#") >= 0)) {
      this.fb[y](a[Cb]);
      this.k[y](a);
      a.href = b + "#googtrans/" + this.j + "/" + this.d
    }
  };

  function sj(a) {
    for (var b = 3 + a.B; a.F < a.a[A] && a.F < b; ++a.F) {
      var c = a,
        d = a.F,
        e = c.a[d],
        f = e.Sc || c.j,
        g = [];
      if (e.la) for (var k = 0; k < e.la[A]; ++k) g[y](e.la[k].ka);
      else g[y](e.content);
      e.pa = c.g[Kb](T(c.Dd, c, d), g, f, c.d, d + 1, c.rc)
    }
  }
  R.Dd = function(a, b, c) {
    a = this.a[a];
    if (this.D && a) {
      if (c != 200) this.b.add(T(this.O, this, this.K, l, i));
      else if (a.la) {
        var d = [];
        for (c = 0; c < b[A] && c < a.la[A]; ++c) if (b[c] && b[c][1] && b[c][1] == 200) {
          var e = b[c][0],
            f = b[c][2] && b[c][2] == this.d;
          this.b.add(T(this.Sb, this, a.la[c], e, f));
          if (b[c][2]) {
            var g = b[c][2];
            this.c[g] || (this.c[g] = 0);
            this.c[g] += e[A]
          }
        } else d[y](a.la[c]);
        this.j == "auto" && d[A] > 0 && !a.qb && this.a[y]({
          pa: j,
          Sc: "en",
          la: d,
          qb: i
        })
      } else if (b && b[0]) {
        a.Uc = b[0][0];
        f = l;
        if (b[0][2]) {
          g = b[0][2];
          f = g == this.d;
          if (this.c[g]) this.c[g] = 0;
          this.c[g] = b[0][0][A]
        }
        b = [];
        for (c = 0; c < a.Ra[A]; ++c) if (typeof a.Ra[c].Uc == "string") {
          b[y](a.Ra[c].Uc);
          a.Ra[c].uc && b[y](a.Ra[c].uc)
        } else break;
        b[A] == a.Ra[A] && this.b.add(T(this.Sb, this, a.Y, b[Vb](""), f))
      } else if (this.j == "auto" && !a.qb) {
        a.Sc = "en";
        a.qb = i;
        a.pa = j;
        this.a[y](a)
      }
      this.B++;
      (b = this.B == this.a[A] && !this.f) && this.b.add(T(this.Xb, this));
      this.f || this.b.go();
      sj(this)
    }
  };
  R.Sb = function(a, b, c) {
    b ? Yg(a, b, this.l, c) : Zg(a, this.l);
    this.Rb += a.ka[A];
    a = v.min(v[Qa](this.Rb * 100 / this.gb), 100);
    if (this.K != a) {
      this.K = a;
      this.O(this.K, l)
    }
  };
  R.Xb = function() {
    this.D = l;
    this.O && this.O(100, i);
    this.a = j;
    this.F = this.B = 0;
    this.O = j;
    this.K = this.Rb = this.gb = 0
  };

  function tj(a) {
    if (a.D) {
      for (var b = 0; b < a.a[A]; ++b) a.g.J.L[Pa](a.a[b].pa);
      a.Xb()
    }
    if (a.f) {
      a.f[Pa]();
      a.f = j
    }
    if (a.b) {
      a.b[Pa]();
      a.b = j
    }
    if (a.m) {
      for (b = 0; b < a.m[A]; ++b) a.m[b].p();
      a.m = j
    }
    if (a.k) {
      for (b = 0; b < a.k[A]; ++b) a.k[b].href = a.fb[b];
      a.k = j;
      a.fb = j
    }
    if (a.Ia) {
      var c = [][Ya](a.ia);
      for (b = 0; b < c[A]; ++b) ge(c[b], a.Ia);
      a.Ia = j
    }
  }
  R.translate = function(a, b, c) {
    if (a != this.j || b != this.d) {
      tj(this);
      this.l = {}
    } else if (this.D) return;
    this.O = c;
    this.K = this.Rb = this.gb = 0;
    this.b = new wg(0, 0, 50);
    this.D = i;
    this.j = a;
    this.d = b;
    if (this.sc) {
      c = this.sc;
      b = b;
      a && (c.l = a);
      b && (c.m = b)
    }
    this.a = [];
    this.m = [];
    this.F = this.B = 0;
    this.k = [];
    this.fb = [];
    a = 860;
    for (var d in this.l) if (this.l[d] !== r[C][d]) {
      a = kj(this.g);
      break
    }
    this.eb = {
      X: a,
      Vb: a,
      Eb: kj(this.g),
      db: this.g.J.gc,
      ic: 0,
      Wa: this.g.J.Wa,
      Vc: this.g.J.lb,
      ma: j,
      Y: j
    };
    this.Ia = lg[Ha](this.d) ? "translated-rtl" : "translated-ltr";
    a = [][Ya](this.ia);
    for (d = 0; d < a[A]; ++d) fe(a[d], this.Ia);
    this.Qb = [][Ya](this.ia);
    this.N[Nb](this.Qb[Ia](), this.eb.Vc);
    this.f = new wg(0, 0, 50);
    this.f.add(T(this.Bc, this));
    this.f.go()
  };

  function rj(a) {
    var b = a.X;
    if (a.X < a.Eb) {
      a.X *= 6;
      if (a.X > a.Eb) a.X = a.Eb
    }
    var c = a.db + 1024;
    if (a.X > c) a.X = c;
    return b != a.X
  }
  xa(R, function() {
    tj(this)
  });
  R.r = function() {
    qj.s.r[L](this);
    tj(this);
    this.ia = this.N = j
  };

  function uj() {
    this.b = 1;
    this.a = {}
  }
  V(uj, Qc);
  var vj = new uj;

  function wj(a, b) {
    if (a.a[b]) {
      a.a[b][Gb]();
      a.a[b].p();
      a.a[b] = j
    }
  }
  uj[C].r = function() {
    for (var a in this.a) if (this.a[a] !== r[C][a]) {
      var b;
      b = a;
      var c = ga(b);
      b = c == 0 && /^[\s\xa0]*$/ [Ha](b) ? NaN : c;
      wj(this, b)
    }
    this.b = 1;
    this.a = {}
  };

  function xj(a, b, c, d) {
    this.g = b;
    this.k = c;
    this.f = d;
    this.d = l;
    this.a = new dj(a || l);
    a = new xg;
    b = new Bg(T(this.a.Gd, this.a, yg(a)));
    this.zb = Cg(b, Ag(a, T(this.zb, this)));
    this.yb = Cg(b, Ag(a, T(this.yb, this)));
    this.Mb = Cg(b, Ag(a, T(this.Mb, this)));
    xa(this, Cg(b, Ag(a, T(this[Gb], this))));
    b.qa();
    a.qa();
    this.b = vj;
    this.c = this.pc(u[Yb])
  }
  V(xj, Qc);
  R = xj[C];
  va(R, function() {
    return this.a[Rb]()
  });

  function yj(a) {
    Jg(a.a[Rb]() ? "te_afas" : "te_afau")
  }
  R.zb = function(a, b) {
    if (this.a[xb]()) this.a.b[sb](b ? {
      hl: b
    } : {}, a);
    else {
      yj(this);
      a(j, i)
    }
  };
  R.yb = function(a) {
    var b = u[Yb].lang;
    if (b) a(b);
    else if (this.a[xb]()) {
      var c = new jh(u[I], l, l, 1, 1);
      b = [];
      try {
        for (var d = 0, e = this.a.Ma.Jc; b[A] + d < e;) {
          var f = c.Ya();
          if (c.S == 1 && vh(f)) kh(c);
          else if (f[Ua] == 3) {
            var g = Rc(f[Xb][E](/\xa0|[ \t]+/g, " "));
            if (g) {
              b[y](g);
              d += g[A]
            }
          }
        }
      } catch (k) {
        if (k != hh) h(k)
      }
      e = this.a;
      b = b[Vb](" ");
      a = e.Ma.jb(a);
      b = {
        q: b[Db](0, e.Ma.Jc)
      };
      b.sl = "auto";
      b.tl = "en";
      e.Ma.L[sb](b, a)
    } else {
      yj(this);
      a(j, i)
    }
  };
  R.jd = function(a) {
    var b = j;
    a = a != j ? a : this.c;
    a != -1 && (b = this.b.a[a]);
    a = "";
    if (!b) return a;
    if (b.j != "auto") return b.j;
    var c = 0;
    if (b.c) for (var d in b.c) if (b.c[d] !== r[C][d]) if (b.c[d] > c) {
      c = b.c[d];
      a = d
    }
    return a
  };
  R.Mb = function(a, b, c, d) {
    if (a == b && a != "zh-CN" || !a) a = "auto";
    if (this.a[xb]()) {
      if (d !== m && typeof d == "number") d = d;
      else {
        d = d || u[Yb];
        if (this.b.a[this.c].ia != d) {
          this[Gb]();
          wj(this.b, this.c);
          this.c = this.pc(d)
        }
        d = this.c
      }
      if (d = this.b.a[d]) {
        d.rc = this.d;
        d[Kb](a, b, c)
      }
    } else {
      yj(this);
      c(0, l, i)
    }
  };
  R.$d = function(a) {
    a = a != j ? a : this.c;
    return a == -1 || !this.b.a[a] ? l : this.b.a[a].D
  };
  R.Qc = ac("d");
  xa(R, function(a) {
    if (this.a[xb]()) {
      a = a != j ? a : this.c;
      a != -1 && this.b.a[a] && this.b.a[a][Gb]()
    }
  });
  R.r = function() {
    xj.s.r[L](this);
    this.a.p();
    this.a = j;
    this.b.p();
    this.c = m
  };
  R.pc = function(a) {
    var b = this.b;
    b.a[b.b] = new qj(a, this.a, this.g, this.k, this.f);
    return a = b.b++
  };
  R.Zd = function(a) {
    wj(this.b, a)
  };

  function zj(a, b) {
    if (hc(a) == "string") {
      b = a;
      a = {}
    }
    if (hc(b) == "string") b = kc(n(b)) ? u.getElementById(n(b)) : n(b);
    this.k = b;
    var c = r(a);
    this.c = "auto";
    var d;
    if (!(d = p.parent != p)) {
      if (d = !p.external || !p.external.googleToolbarVersion || fa(p.external.googleToolbarVersion) < 6.2) {
        if (d = !p.gtbExternal || !p.gtbExternal.isTranslateEnabled || !p.gtbExternal.isTranslateEnabled()) {
          d = (d = aa.appVersion && aa.appVersion[qb](/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/)) && d[2] && d[3] ? ga(d[2]) * 1E3 + ga(d[3]) >= 4001 : l;
          d = !d
        }
        d = d
      }
      d = d
    }
    this.e = {
      tb: d,
      Tb: j,
      ub: j,
      ec: [],
      Ac: [],
      bd: l,
      Xa: l,
      Ob: l,
      Cc: l,
      Yb: "",
      Ta: 0
    };
    d = p[ab][ub] == "https:";
    this.ia = {
      A: Kc,
      Ha: d ? "The content of this secure page will be sent to Google for translation using a secure connection." : j
    };
    this.e.Ob = d;
    this.O = {
      A: Kc,
      mb: j
    };
    if (c) {
      "autoDisplay" in c && (this.e.tb = this.e.tb && ca(c.autoDisplay));
      "multilanguagePage" in c && (this.e.Xa = ca(c.multilanguagePage));
      "gaTrack" in c && (this.e.Cc = ca(c.gaTrack));
      "layout" in c && (this.e.Ta = c.layout);
      if (c.pageLanguage) this.e.Gb = Hg(c.pageLanguage);
      if ("useSecureConnection" in c) {
        this.e.Ob = !! c.useSecureConnection;
        this.ia.Ha = this.e.Ob ? "The content of this secure page will be sent to Google for translation using a secure connection." : j
      }
      if (c.includedLanguages) this.e.ec = c.includedLanguages[Wa](",");
      if (c.excludedLanguages) this.e.Ac = c.excludedLanguages[Wa](",");
      if (this.e.Gb) this.c = this.e.Gb;
      if (c.gaId) this.e.Yb = c.gaId;
      this.O.mb = ga(c.floatPosition) || this.O.mb
    }
    Aj(this);
    c = {
      T: Bc ? 1 : 0,
      xa: i,
      se: Pc,
      aa: ["client", "u", "scid"]
    };
    this.fb = new Qg(c);
    c = {
      client: Cc,
      u: p[ab][Cb],
      scid: Bc
    };
    this.fb.k = c || {};
    this.m = new xj(this.e.Ob, this.fb);
    this.f = new Zf(this);
    this.F = l;
    this.Ia = !this.e.tb && !this.O.mb && !this.k;
    Y(this.f, p, "unload", this.p);
    this.j = new xg(T(this.xd, this));
    this.D = new xg(T(this.zd, this));
    this.K = new Bg(T(this.Jd, this));
    this.a = new wh(this.ia);
    this.m.zb(yg(this.j, T(this.wd, this)), tc);
    if (this.k) {
      this.b = new Ah(this.e);
      Y(this.f, this.b, "load", yg(this.j));
      Y(this.f, this.b, "chg_tgt_lang", Cg(this.K, Ag(this.D, T(this.vd, this))));
      this.b.oa(this.k)
    } else if (this.O.mb) {
      this.g = new Ch(this.O);
      Y(this.f, this.g, "load", yg(this.j));
      Y(this.f, this.g, "clk_trans", Cg(this.K, Ag(this.D, T(this.td, this))));
      this.g.oa()
    }!this.e.Gb && this.e.bd && this.m.yb(yg(this.j, T(this.rd, this)));
    this.j.qa()
  }
  V(zj, Qc);

  function Aj(a) {
    function b(f, g) {
      var k = ha(f[E](/\+/g, " "))[qb]("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)");
      if (k) if (k[3]) {
        g.e.Tb = k[2];
        g.e.ub = k[3];
        return i
      } else if (k[6]) {
        g.e.Tb = k[5];
        g.e.ub = k[6];
        return i
      }
      return l
    }
    for (var c = [function() {
      var f = p[ab][Cb][qb](/#.*googtrans(.*)/);
      return f && f[1]
    }, function() {
      var f = u.cookie[qb](/(^|; )googtrans=(.*?)(;|$)/);
      return f && f[2]
    }], d = 0; d < c[A]; ++d) {
      var e = c[d]();
      if (e && b(e, a)) break
    }
  }

  function Bj(a, b, c) {
    for (a = p[ab].hostname[Wa]("."); a[A] > 2;) a[Ia]();
    a = ";domain=" + a[Vb](".") + ";path=/";
    if (!b && !c) {
      b = new Date;
      b.setTime(b.getTime() - 1);
      b = "googtrans=none;expires=" + b.toGMTString()
    } else b = b ? "googtrans=/" + b + "/" + c : "googtrans=/" + c;
    u.cookie = b;
    try {
      u.cookie = b + a
    } catch (d) {}
  }
  R = zj[C];
  R.wd = function(a) {
    this.d = Hg(tc);
    this.B = a || {};
    this.l = {};
    this.N = {};
    a = !this.e.ec[A];
    var b = vg(this.e.ec),
      c = vg(this.e.Ac);
    this.l[tc] = "";
    this.N[tc] = "";
    for (var d in this.B.tl) if (this.B.tl[d] !== r[C][d]) if ((a || d in b) && !(d in c)) {
      this.N[d] = this.B.tl[d];
      if (d != this.e.Gb || this.e.Xa) this.l[d] = this.B.tl[d]
    }
    this.l[tc] || delete this.l[tc];
    this.N[tc] || delete this.N[tc];
    var e;
    d = this.B.sl;
    a = {};
    for (e in d) a[e] = d[e];
    this.eb = e = a
  };
  R.rd = function(a) {
    if (a) this.c = Hg(a)
  };
  R.xd = function() {
    delete this.j;
    if (this.B) {
      this.c = this.c || this.e.Tb;
      this.d = this.e.ub || this.d;
      var a = this.e.tb && this.c != this.d && !(this.c in wc);
      if (this.c == "zh-TW") this.c = "zh-CN";
      if (!this.eb[this.c]) {
        a = l;
        this.c = "auto"
      }
      if (!this.l[this.d]) {
        a = l;
        if (this.l.en) this.d = "en";
        else for (var b in this.l) if (this.l[b] !== r[C][b]) {
          this.d = b;
          break
        }
      }
      if (this.b) {
        var c = this.l,
          d = {
            "": "Select Language"
          };
        for (b in c) if (c[b] !== r[C][b]) d[b] = c[b];
        this.b.mc(d, this.N);
        this.b.V("")
      }
      if (!vc && a) if (this.e.ub) Cg(this.K, Ag(this.D, T(this.Jb,
      this, i, i)))[L]();
      else {
        this.F = i;
        Cg(this.K, Ag(this.D, T(this.Jb, this)))[L]();
        Jg("te_ap", {
          sl: this.c
        })
      } else {
        this.g && this.g.P(i);
        this.b && this.b.P(i)
      }
      p.google[Kb].TranslateService && this.bb(l);
      this.K.qa()
    }
  };
  R.zd = function() {
    var a = this.a,
      b = this.eb;
    a.I && a.I.va(b);
    a.l = b;
    this.a.mc(this.l, this.N);
    xh(this.a, this.c);
    this.a.V(this.d);
    Y(this.f, this.a, "clk_confirm", this.pd);
    Y(this.f, this.a, "clk_cancel", this.od);
    Y(this.f, this.a, "clk_restore", this.ac);
    Y(this.f, this.a, "clk_close", this.$b);
    Y(this.f, this.a, "clk_no_ap", this.qd);
    Y(this.f, this.a, "chg_src_lang", this.Fc);
    Y(this.f, this.a, "chg_tgt_lang", this.Fc);
    this.b && this.b.P(i)
  };
  R.Jd = function() {
    Y(this.f, this.a, "load", yg(this.D));
    this.a.oa();
    this.D.qa()
  };
  R.r = function() {
    this.m[Gb]();
    zj.s.r[L](this);
    this.m.p();
    this.f.p();
    this.f = j;
    this.a && this.a.p();
    this.a = j;
    this.g && this.g.p();
    this.g = j;
    this.b && this.b.p();
    this.k = this.b = j
  };
  R.pd = function() {
    if (!(!this.a.fa() || !this.e.Xa && this.c == this.a.ba())) {
      this.F && Jg("te_apt", {
        sl: this.c
      });
      Cj(this, l);
      this.b && this.b.V(this.a.ba())
    }
  };
  R.od = function() {
    if (this.a.fa()) {
      Dj(this);
      yh(this.a, 0);
      this.b && this.b.V("")
    }
  };
  R.ac = function() {
    if (this.a.fa()) {
      Dj(this);
      yh(this.a, 0)
    }
    this.b && this.b.V("")
  };
  R.$b = function() {
    if (this.a.fa()) {
      if (this.F) {
        this.F = l;
        Jg("te_apc", {
          sl: this.c
        })
      }
      Dj(this);
      this.a.P(l);
      this.b && this.b.V("");
      this.g && this.g.P(i)
    }
  };
  R.qd = function() {
    if (this.a.fa()) {
      Jg("te_apr", {
        sl: this.c
      });
      this.F = l;
      this.$b();
      if (this.Ia) {
        var a = this.onTurnOffLanguageClick;
        try {
          hc(a) == "function" && a[Jb](this, [])
        } catch (b) {}
      }
    }
  };
  R.Fc = function() {
    if (this.a.fa()) if (!this.e.Xa && this.c == this.a.ba()) this.ac();
    else {
      this.c = (this.a.I ? this.a.I.Ab() : "") || this.c;
      this.d = this.a.ba();
      if (this.a.kb == 2) {
        this.b && this.b.V(this.a.ba());
        Cj(this)
      }
    }
  };
  R.Jb = function(a, b) {
    if (!this.a.fa()) {
      this.g && this.g.P(l);
      a ? Cj(this, b) : yh(this.a, 0, i, this.F || this.Ia)
    }
  };
  R.Xd = function(a, b) {
    Cg(this.K, Ag(this.D, T(this.Jb, this, a, b)))[L]()
  };
  R.td = function() {
    this.Jb(this.a.kb == 2)
  };
  R.vd = function() {
    if (this.b.ba()) if (!this.e.Xa && this.c == this.b.ba()) this.ac();
    else {
      this.d = this.b.ba();
      this.a.V(this.d);
      Cj(this)
    } else this.b.V(this.d)
  };

  function Cj(a, b) {
    if (p.google[Kb].TranslateService) try {
      var c = p.google[Kb].TranslateService.getInstance();
      c[Gb]()
    } catch (d) {}
    a.F = l;
    !b && a.c in wc && Jg("te_ape", {
      sl: a.c
    });
    zh(a.a, 0);
    yh(a.a, 1, i);
    a.m.Qc( !! b);
    p[Ta](T(a.m.Mb, a.m, a.e.Xa ? "auto" : a.c, a.d, T(a.Cd, a), j), 0);
    if (a.e.Cc && p._gaq && p._gat) try {
      a.e.Yb ? p._gat._getTracker(a.e.Yb)._trackEvent("Google Website Translator", "Translate", a.d) : p._gat._getTrackerByName()._trackEvent("Google Website Translator", "Translate", a.d)
    } catch (e) {}
    if (a.e.Cc && p.ga ) try {
        f.ga('send', 'event', "Google Website Translator", "Translate", a.d);
    } catch (e) {}
  }
  R.Cd = function(a, b, c) {
    hc(this.gb) == "function" && this.gb();
    if (!(!this.a.fa() || this.a.kb != 1)) if (c) {
      Dj(this);
      yh(this.a, -1, i)
    } else {
      zh(this.a, a);
      if (b) {
        this.b && this.b.V(this.d);
        xh(this.a, this.c);
        yh(this.a, 2);
        Bj(this, this.c, this.d)
      }
    }
  };

  function Dj(a) {
    Bj(a);
    p[Ta](T(a.m[Gb], a.m, j), 0)
  }
  R.bb = function(a) {
    a || this.$b();
    this.b && this.b.bb(a);
    this.g && this.g.P(a)
  };

  function Ej(a) {
    if (a) {
      a = n(a);
      a = a[Wa](".");
      if (a[A]) {
        for (var b = p, c = 0; c < a[A]; ++c) {
          var d = a[c];
          if (!d || !(d in b)) return;
          b = b[d]
        }
        return b
      }
    }
  }
  function Fj() {
    for (var a in r[C]) {
      sd = function(d, e, f) {
        for (var g in d) d[g] !== r[C][g] && e[L](f, d[g], g, d)
      };
      break
    }
    var b = rc(),
      c = Ej(uc);
    if (c && hc(c) == "function") xc == 1 ? c() : function d() {
      var e = u.readyState;
      hc(e) == "undefined" || e == "complete" || rc() - b >= 2E4 ? c() : p[Ta](d, 500)
    }()
  };
  if (xc == 1) {
    var $ = j,
      Gj = function(a) {
        if (!$) {
          var b = p[ab][ub] == "https:";
          if (a && "useSecureConnection" in a) b = !! a.useSecureConnection;
          a = {
            T: 0,
            xa: i
          };
          a = new Qg(a);
          $ = new xj(b, a);
          $.constructor = m;
          va($, $[xb]);
          $.getSupportedLanguages = $.zb;
          $.getPageLanguage = $.yb;
          $.getDetectedLanguage = $.jd;
          $.createContext = $.pc;
          $.disposeContext = $.Zd;
          $.setClickThrough = $.Qc;
          $.translatePage = $.Mb;
          xa($, $[Gb]);
          $.isTranslating = $.$d
        }
        return $
      };
    Gj.getInstance = function() {
      return $
    };
    dc("google.translate.TranslateService", Gj, void 0);
    Jg("te_li")
  } else {
    var Hj = j,
      Ij = function(a, b) {
        if (!Hj) {
          Hj = new zj(a, b);
          Hj.constructor = m
        }
        return Hj
      };
    Ij.getInstance = function() {
      return Hj
    };
    dc("google.translate.TranslateElement", Ij, void 0);
    zj[C].dispose = zj[C].p;
    zj[C].showBanner = zj[C].Xd;
    zj[C].setEnabled = zj[C].bb;
    dc("google.translate.TranslateElement.FloatPosition", Dh, void 0);
    Dh.TOP_LEFT = 1;
    Dh.TOP_RIGHT = 2;
    Dh.BOTTOM_RIGHT = 3;
    Dh.BOTTOM_LEFT = 4;
    dc("google.translate.TranslateElement.InlineLayout", Bh, void 0);
    Bh.VERTICAL = 0;
    Bh.HORIZONTAL = 1;
    Bh.SIMPLE = 2
  }
  Fj();
})()
