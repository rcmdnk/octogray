(function() {
  var f = window,
    aa = Object,
    ba = Infinity,
    ca = Function,
    k = document,
    ea = isNaN,
    fa = Array,
    l = Math,
    ha = Number,
    ia = navigator,
    m = Error,
    ja = Boolean,
    ka = parseInt,
    la = parseFloat,
    p = String,
    ma = decodeURIComponent;

  function na(a, b) {
    return a.onload = b
  }
  function oa(a, b) {
    return a.width = b
  }
  function pa(a, b) {
    return a.ceil = b
  }
  function qa(a, b) {
    return a.floor = b
  }
  function ra(a, b) {
    return a.send = b
  }
  function sa(a, b) {
    return a.remove = b
  }
  function ta(a, b) {
    return a.select = b
  }
  function ua(a, b) {
    return a.clear = b
  }
  function va(a, b) {
    return a.toString = b
  }

  function wa(a, b) {
    return a.altKey = b
  }
  function xa(a, b) {
    return a.position = b
  }
  function ya(a, b) {
    return a.next = b
  }
  function za(a, b) {
    return a.clone = b
  }
  function Aa(a, b) {
    return a.pixelHeight = b
  }
  function Ba(a, b) {
    return a.bottom = b
  }
  function Ca(a, b) {
    return a.href = b
  }
  function Da(a, b) {
    return a.restore = b
  }
  function Ea(a, b) {
    return a.contains = b
  }
  function Fa(a, b) {
    return a.display = b
  }
  function Ga(a, b) {
    return a.height = b
  }
  function Ha(a, b) {
    return a.right = b
  }
  function Ia(a, b) {
    return a.onreadystatechange = b
  }

  function Ja(a, b) {
    return a.round = b
  }
  function Ka(a, b) {
    return a.cancel = b
  }
  function La(a, b) {
    return a.innerHTML = b
  }
  function Ma(a, b) {
    return a.onerror = b
  }
  function Na(a, b) {
    return a.value = b
  }
  function Oa(a, b) {
    return a.currentTarget = b
  }
  function Pa(a, b) {
    return a.left = b
  }
  function Qa(a, b) {
    return a.type = b
  }
  function Ra(a, b) {
    return a.tabIndex = b
  }
  function Sa(a, b) {
    return a.translate = b
  }
  function Ta(a, b) {
    return a.name = b
  }
  function Ua(a, b) {
    return a.visibility = b
  }
  function Va(a, b) {
    return a.stop = b
  }
  function Xa(a, b) {
    return a.length = b
  }

  function Ya(a, b) {
    return a.title = b
  }
  function Za(a, b) {
    return a.prototype = b
  }
  function $a(a, b) {
    return a.className = b
  }
  function ab(a, b) {
    return a.pixelWidth = b
  }
  function bb(a, b) {
    return a.disabled = b
  }
  function cb(a, b) {
    return a.target = b
  }
  var r = "appendChild",
    db = "activeElement",
    eb = "shift",
    fb = "exec",
    gb = "clearTimeout",
    hb = "classList",
    u = "width",
    ib = "collapse",
    v = "replace",
    jb = "ceil",
    kb = "floor",
    lb = "offsetWidth",
    mb = "concat",
    nb = "charAt",
    ob = "createTextNode",
    pb = "insertBefore",
    qb = "setEnd",
    x = "dispatchEvent",
    rb = "write",
    sb = "match",
    tb = "send",
    ub = "remove",
    vb = "focus",
    wb = "querySelector",
    xb = "createElement",
    yb = "scrollHeight",
    zb = "keyCode",
    y = "firstChild",
    Ab = "select",
    Bb = "forEach",
    Cb = "setAttribute",
    Db = "handleEvent",
    Eb = "clear",
    Fb = "childNodes",
    Gb = "bind",
    Hb = "rangeCount",
    Ib = "nextSibling",
    Jb = "getTime",
    Kb = "register",
    Lb = "getElementsByTagName",
    Mb = "documentElement",
    Nb = "substr",
    Ob = "previousSibling",
    Pb = "toString",
    Qb = "altKey",
    Rb = "propertyIsEnumerable",
    Sb = "sourceIndex",
    Tb = "size",
    Ub = "setTimeout",
    Vb = "next",
    Wb = "split",
    Xb = "constructor",
    Yb = "stack",
    Zb = "location",
    $b = "message",
    ac = "hasOwnProperty",
    bc = "getComputedStyle",
    B = "style",
    dc = "hostname",
    ec = "close",
    fc = "ownerDocument",
    gc = "clone",
    hc = "setImmediate",
    ic = "lastChild",
    jc = "isEnabled",
    kc = "start",
    lc = "random",
    mc = "protocol",
    nc = "scrollLeft",
    C = "bottom",
    oc = "href",
    pc = "restore",
    qc = "contains",
    rc = "apply",
    sc = "tagName",
    tc = "removeAttribute",
    uc = "fileName",
    vc = "display",
    wc = "offsetTop",
    D = "height",
    xc = "offsetHeight",
    yc = "Range",
    zc = "nodeValue",
    Ac = "right",
    E = "push",
    Bc = "open",
    Cc = "test",
    Dc = "finish",
    Ec = "text",
    Fc = "round",
    Gc = "cancel",
    Hc = "slice",
    F = "nodeType",
    Ic = "getElementById",
    Jc = "value",
    Kc = "item",
    Lc = "indexOf",
    Mc = "defineProperties",
    Nc = "metaKey",
    Oc = "compareDocumentPosition",
    Pc = "nodeName",
    Qc = "currentTarget",
    Sc = "createRange",
    G = "left",
    Tc = "readyState",
    Uc = "fromCharCode",
    Vc = "addEventListener",
    Wc = "parentElement",
    Xc = "type",
    Yc = "translate",
    Zc = "defaultView",
    $c = "name",
    ad = "response",
    bd = "clientX",
    cd = "clientY",
    dd = "scrollTop",
    ed = "stop",
    fd = "setStart",
    gd = "innerText",
    H = "length",
    hd = "google",
    I = "prototype",
    id = "className",
    jd = "clientWidth",
    kd = "abort",
    ld = "document",
    md = "ctrlKey",
    nd = "duration",
    od = "then",
    pd = "offsetLeft",
    J = "body",
    qd = "removeChild",
    K = "target",
    L = "call",
    rd = "link",
    sd = "getAttribute",
    td = "querySelectorAll",
    ud = "clientHeight",
    vd = "charCodeAt",
    wd = "compatMode",
    xd = "currentStyle",
    yd =
      "substring",
    zd = "shiftKey",
    M = "parentNode",
    Ad = "toUpperCase",
    Bd = "splice",
    N = "join",
    Cd = "toLowerCase",
    O = "",
    Dd = "\x00",
    Ed = "\n",
    Fd = "\n\nBrowser stack:\n",
    Gd = "\nLine: ",
    Hd = "\nUrl: ",
    P = " ",
    Id = " &#160;",
    Jd = " [",
    Kd = " goog-te-ftab-float",
    Ld = " name=",
    Md = ' name="',
    Nd = " skiptranslate",
    Od = ' type="',
    Pd = '"',
    Qd = '" />',
    Rd = '" ></input><input class="activity-cancel" type="button" value="',
    Sd = '" alt="',
    Td = '" alt="Google ',
    Ud = '" class="goog-close-link" href="javascript:void(0)" title="',
    Vd = '" class="goog-te-banner-content"></span></td></tr></table></td><td>',
    Wd = '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>',
    Xd = '" class="goog-te-menu"></div></body>',
    Yd = '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>',
    Zd = '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="https://www.google.com/images/cleardot.gif" style="background-image:url(',
    $d = '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="',
    ae = '" method="',
    be = '" scroll="no" style="overflow:hidden" dir="',
    ce = '" style="background-image:url(',
    de = '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">',
    ee = '" style="display:none" valign=middle><td><span class="goog-te-banner-content">',
    fe = '" style="display:none" valign=middle><td><span id="',
    ge = '" style="display:none"><td><span class="goog-te-banner-content">',
    he = '" width="20" height="20" /></div>',
    ie = '">',
    je = '"></a></td>',
    ke = '"></b>%)</span>&nbsp;<img src="',
    le = '"></button></div></div></td></tr><tr id="',
    me = '"></div>',
    ne = '"></head>',
    oe = '"></head><body class="goog-te-banner" scroll="no" border=0 dir="',
    pe = '"></head><body class="goog-te-ftab ',
    qe = '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="',
    re = '"></iframe>',
    se = '"></input></div><div class="parameters"><input type="hidden" name="gtrans" /><input type="hidden" name="utrans" /><input type="hidden" name="hl" /><input type="hidden" name="text" /><input type="hidden" name="langpair" /><input type="hidden" name="oe" value="UTF-8" />',
    te = '"></span>',
    ue = '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
    ve = '"><a id="',
    we = '"><b>',
    xe = '"><div class="form-buttons" style="text-align:',
    ye = '"><div style="padding: 8px;"><div><div class="logo"><img src="',
    ze = '"><img src="https://www.google.com/images/cleardot.gif" width="15" height="15" alt="',
    Ae = '"><input class="activity-submit" type="button" value="',
    Be = '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="https://translate.google.com" class="goog-logo-link" target="_blank"><img src="',
    Ce = "#",
    De = "#000",
    Ee = "#9b9b9b",
    Fe = "#E6ECF9",
    Ge = "#d5d5d5",
    He = "#googtrans/",
    Ie = "%",
    Je = "%$1",
    Ke = "&",
    Le = "&#0;",
    Me = "&#39;",
    Ne = "&amp;",
    Oe = "&gt;",
    Pe = "&lt;",
    Qe = "&nbsp;&nbsp;",
    Re = '&nbsp;<span dir="ltr">(<b id="',
    Se = "&quot;",
    Te = "&tk=",
    Ue = "'",
    Ve = "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');",
    We = "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');",
    Xe = "';parent['",
    Ye = "']();\x3c/script>\"))",
    Ze = "(",
    $e = "(\\d*)(\\D*)",
    af = "(^",
    bf = ")",
    cf = ")\n",
    df = ") repeat-x 0 -39px",
    ef = ")([a-z])",
    ff = ");background-position:-14px 0px;border:none",
    gf = ');background-position:-28px 0px"></a></td></tr></table></body>',
    hf = ');background-position:-56px 0px;margin:0 4px"></td>',
    jf = ');background-position:-65px 0px"><span>',
    kf = "*",
    lf = "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');",
    mf = "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');",
    nf = ",",
    of = ", ",
    pf = "-",
    qf = "---",
    rf = "-10000px",
    sf = "-10px",
    tf = "-14px 0px",
    uf = "-65px 0px",
    vf = "-9999px",
    wf = "-> ",
    xf = "-> [end]\n\nJS stack traversal:\n",
    yf = "-active",
    zf = "-checkbox",
    Af = "-checked",
    Bf = "-content",
    Cf = "-disabled",
    Df = "-document.getElementById('",
    Ef = "-focused",
    Ff = "-highlight",
    Gf = "-horizontal",
    Hf = "-hover",
    If = "-inner-box",
    Jf = "-moz",
    Kf = "-ms",
    Lf = "-o",
    Mf = "-open",
    Nf = "-outer-box",
    Of = "-rtl",
    Pf = "-selected",
    Qf = "-transition",
    Rf = "-vertical",
    Sf = "-webkit",
    Tf = ".",
    Uf = "...",
    Vf = ".alt-edited",
    Wf = ".goog-te-ftab-float {z-index:9999999; overflow:visible; position:fixed; _position:absolute;",
    Xf = "/",
    Yf = "//",
    Zf = "/gen204?",
    $f = "/translate_a/t",
    ag = "0",
    bg = "0 -39px",
    cg = "0px",
    dg = "0px 0px",
    eg = "1",
    fg = "1.0",
    gg = "10",
    hg = "10.0",
    ig = "100%",
    jg = "100px",
    kg = "10px",
    lg = "11",
    mg = "1f303",
    ng = "1f30c",
    og = "1f30e",
    pg = "1f30f",
    qg = "1f319",
    rg = "1f31e",
    sg = "1f31f",
    tg = "1f334",
    ug = "1f340",
    vg = "1f373",
    wg = "1f374",
    xg = "1f377",
    yg = "1f378",
    zg = "1f37a",
    Ag = "1f37b",
    Bg = "1f386",
    Cg = "1f38a",
    Dg = "1f393",
    Eg = "1f3a4",
    Fg = "1f3a5",
    Gg = "1f3a8",
    Hg = "1f3b0",
    Ig = "1f3c1",
    Jg = "1f3c3",
    Kg = "1f3c4",
    Lg = "1f3c6",
    Mg = "1f3e5",
    Ng = "1f3e6",
    Og = "1f40d",
    Pg = "1f415",
    Qg = "1f416",
    Rg = "1f426",
    Sg = "1f431",
    Tg = "1f437",
    Ug = "1f44d",
    Vg = "1f464",
    Wg = "1f468",
    Xg = "1f469",
    Yg = "1f474",
    Zg = "1f476",
    $g = "1f479",
    ah = "1f47b",
    bh = "1f47f",
    ch = "1f482",
    dh = "1f486",
    eh = "1f489",
    fh = "1f48d",
    gh = "1f48f",
    hh = "1f491",
    ih = "1f492",
    jh = "1f4a3",
    kh = "1f4a4",
    lh = "1f4a5",
    mh = "1f4a8",
    nh = "1f4aa",
    oh = "1f4ad",
    ph = "1f4dd",
    qh = "1f604",
    rh = "1f614",
    sh = "1f61c",
    th = "1f625",
    uh = "1f62a",
    vh = "1px",
    wh = "1px solid #000",
    xh = "4.4",
    yh = "40px",
    zh = "525",
    Ah = "528",
    Bh = "7",
    Ch = "7.0",
    Dh = "8",
    Eh = ":",
    Fh = ": ",
    Gh = ";",
    Hh = ";domain=",
    Ih = ";path=/",
    Jh = "<",
    Kh = "</",
    Lh = "</a>",
    Mh = "</a></span>",
    Nh = "</b>",
    Oh = '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
    Ph = '</button></div></div></td></tr><tr id="',
    Qh = '</div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">',
    Rh = "</div></form></div>",
    Sh = '</div><div class="activity-form-container"></div></div>',
    Th = '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;" /><div class="activity-root"></div></div></div><div class="status-message"></div></div>',
    Uh = "</span></a></body>",
    Vh = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
    Wh = "<a i=",
    Xh = "<a i=0>",
    Yh = "<b>",
    Zh = "<body><iframe id=",
    $h = "<br />",
    ai = "<br>",
    bi = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="',
    ci = '<div id="',
    di = '<div id="goog-gt-tt" class="skiptranslate" dir="',
    ei = '<div><span class="alt-translated-text"></span><div class="alt-helper-text">',
    fi = '<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>',
    gi = '<head><base href="',
    hi = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
    ii = "<i>",
    ji = '<iframe id="',
    ki = '<iframe style="width:100%;height:1.1em;float:right;" id="signin_status" border="0" frameBorder="0" src="',
    li = '<iframe style="width:348px;height:1.1em;float:right;" id="signin_status" border="0" frameBorder="0" src="',
    mi = '<img src="https://www.google.com/images/logos/google_logo_41.png" width="37px" height="13px" style="padding-right: 3px">',
    ni = '<input type="hidden" name="',
    oi = '<span id="',
    pi = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='https://www.google.com/images/logos/google_logo_41.png',sizingMethod='scale');\"></span>",
    qi = '<span style="white-space:nowrap" ><a class="goog-logo-link" href="https://translate.google.com" target="_blank">',
    ri = '<td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="',
    si = '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="',
    ti = '<td width=1><img src="https://www.google.com/images/cleardot.gif" width="9" height="15" title="',
    ui = "=",
    vi = '="',
    wi = "=none;expires=",
    xi = ">",
    yi = "></iframe>",
    zi = "?",
    Ai = "@",
    Bi = "A",
    Ci = "APPLET",
    Di = "AREA",
    Ei = "B",
    Fi = "BASE",
    Gi = "BODY",
    Hi = "BR",
    Ii = "BUTTON",
    Ji = "BackCompat",
    Ki = "COL",
    Li = "COMMAND",
    Mi = "CSS1Compat",
    Ni = "Component already rendered",
    Oi = "Const{",
    Pi = "Content-Type",
    Qi = "DIV",
    Ri = "DXImageTransform.Microsoft.DropShadow",
    Si = "EMBED",
    Ti = "End",
    Ui = "EndToEnd",
    Vi = "Error while loading script ",
    Wi = "Exception trying to expose exception! You win, we lose. ",
    Xi = "FRAME",
    Yi = "GET",
    Zi = "Google Website Translator",
    $i = "HEAD",
    aj = "HR",
    bj = "HTML",
    cj = "I",
    dj = "IFRAME",
    ej = "IMG",
    fj = "INPUT",
    gj = "ISINDEX",
    hj = "Jsloader error (code #",
    ij = "KEYGEN",
    jj = "LINK",
    kj = "META",
    lj = "MSIE",
    mj = "MSXML2.XMLHTTP",
    nj = "MSXML2.XMLHTTP.3.0",
    oj = "MSXML2.XMLHTTP.6.0",
    pj = "Message: ",
    qj = "Microsoft.XMLHTTP",
    rj = "Moz",
    sj = "MozOpacity",
    tj = "NOFRAMES",
    uj = "NOSCRIPT",
    vj = "Not available",
    wj = "O",
    xj = "OBJECT",
    yj = "PARAM",
    zj = "POST",
    Aj = "PRE",
    Bj = "Presto",
    Cj = "Promise cannot resolve to itself",
    Dj = "SCRIPT",
    Ej = "SOURCE",
    Fj = "SPAN",
    Gj = "STYLE",
    Hj = "Start",
    Ij = "StartToEnd",
    Jj = "StartToStart",
    Kj = "Style",
    Lj = "TEXTAREA",
    Mj = "TITLE",
    Nj = "TRACK",
    Oj = "Timed out after ",
    Pj = "Timeout reached for loading script ",
    Qj = "To",
    Rj = "Translate",
    Sj = "Trident",
    Tj = "UL",
    Uj = "UTF-8",
    Vj = "Unable to set parent component",
    Wj = "Unknown error",
    Xj = "UnknownError",
    Yj = "WBR",
    Zj = "Webkit",
    ak = "Width",
    bk = "[",
    ck = "[...circular reference...]",
    dk =
      "[...long stack...]",
    ek = "[Anonymous]",
    fk = "[end]",
    gk = "[exception trying to get caller]\n",
    hk = "[fn]",
    ik = "[goog.net.IframeIo] Unable to send, already active.",
    jk = "[msg_undefined]",
    kk = "[object Array]",
    lk = "[object Function]",
    mk = "[object Window]",
    nk = "\\$1",
    ok = "\\s",
    pk = "\\x08",
    qk = "]",
    rk = "]+",
    sk = "^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)",
    tk = "_",
    uk = "_blank",
    vk = "_callbacks_.",
    wk = "_inner",
    xk = "_new",
    yk = "a",
    zk = "ability",
    Ak = "able",
    Bk = "abort",
    Ck = "about:blank",
    Dk = "about:invalid#zClosurez",
    Ek = "absolute",
    Fk = "accumulate",
    Gk = "action",
    Hk = "activate",
    Ik = "activedescendant",
    Jk = "activity-cancel",
    Kk = "activity-form",
    Lk = "activity-form-container",
    Mk = "activity-link",
    Nk = "activity-links",
    Ok = "activity-root",
    Pk = "activity-submit",
    Qk = "add",
    Rk = "add?u=",
    Sk = "additions text",
    Tk = "afterhide",
    Uk = "aftershow",
    Vk = "al",
    Wk = "alism",
    Xk = "ality",
    Yk = "alize",
    Zk = "ally",
    $k = "alpha(opacity=",
    al = "alt",
    bl = "alt-edited",
    cl = "alt-input",
    dl = "alt-input-submit",
    el = "alt-input-text",
    fl = "alt-low-conf",
    gl = "alt-menu",
    hl = "alt-translated-text",
    il = "alternate",
    jl = "althighlight",
    kl = "altmenuhl",
    ll = "altmenuhold",
    ml = "altshow",
    nl = "amp",
    ol = "ance",
    pl = "ancy",
    ql = "animate",
    rl = "ant",
    sl = "application/x-www-form-urlencoded",
    tl = "application/x-www-form-urlencoded;charset=utf-8",
    ul = "aria-",
    vl = "aria-activedescendant",
    wl = "array",
    xl = "ate",
    yl = "ation",
    zl = "atn",
    Al = "ator",
    Bl = "auto",
    Cl = "autoDisplay",
    Dl = "background-image:url(",
    El = "background: url(",
    Fl = "backgroundColor",
    Gl = "backgroundImage",
    Hl = "backgroundPosition",
    Il = "backgroundRepeat",
    Jl = "beforehide",
    Kl = "beforeshow",
    Ll = "beforeunload",
    Ml = "begin",
    Nl = "ble",
    Ol = "block",
    Pl = "blur",
    Ql = "bly",
    Rl = "body",
    Sl = "boolean",
    Tl = "border-box",
    Ul = "border-left:1px solid #bbb",
    Vl = "borderBottom",
    Wl = "borderBottomWidth",
    Xl = "borderLeft",
    Yl = "borderLeftWidth",
    Zl = "borderRight",
    $l = "borderRightWidth",
    am = "borderTop",
    bm = "borderTopWidth",
    cm = "bottom:",
    dm = "bottom:auto;",
    em = "button",
    fm = "c",
    gm = "cB",
    hm = "call",
    im = "callImmediate",
    jm = "callback",
    km = "cancel",
    lm = "cancelled",
    mm = "cb",
    nm = "change",
    om = "character",
    pm = "check",
    qm = "checked",
    rm = "chg_src_lang",
    sm = "chg_tgt_lang",
    tm = "class",
    um = "click",
    vm = "client",
    wm = "client=",
    xm = "clk_cancel",
    ym = "clk_close",
    zm = "clk_confirm",
    Am = "clk_no_ap",
    Bm = "clk_no_ap_site",
    Cm = "clk_restore",
    Dm = "clk_trans",
    Em = "clkcancel",
    Fm = "clkundo",
    Gm = "close",
    Hm = "closure_frame",
    Im = "color",
    Jm = "color:#9b9b9b",
    Km = "complete",
    Lm = "confirm",
    Mm = "container",
    Nm = "content-box",
    Om = "content-type",
    Pm = "contextmenu",
    Qm = "continue",
    Rm = "contribute",
    Sm = "contribute-original-text",
    Tm = "data-",
    Um = "dblclick",
    Vm = "deactivate",
    Wm = "destroy",
    Xm = "direction",
    Ym = "disable",
    Zm = "disableAutoTranslation",
    $m = "disabled",
    an = "display",
    bn = "div",
    cn = "dize",
    dn = "document",
    en = "documentUri",
    fn = "dom",
    gn = "e",
    hn = "ed",
    jn = "editpopupclk",
    kn = "eed",
    ln = "ely",
    mn = "ement",
    nn = "emoji",
    on = "en",
    pn = "enable",
    qn = "ence",
    rn = "ency",
    sn = "end",
    tn = "ent",
    un = "enter",
    vn = "ently",
    wn = "er",
    xn = "error",
    yn = "errorContent",
    zn = "errorSection",
    An = "expanded",
    Bn = "f",
    Cn = "failed",
    Dn = "false",
    En = "file",
    Fn = "file:",
    Gn = "filter",
    Hn = "finish",
    In = "finishSection",
    Jn = "finishSourceLang",
    Kn = "finishTargetLang",
    Ln = "fixed",
    Mn = "floatContainer",
    Nn = "focus",
    Pn = "font",
    Qn =
      "for",
    Rn = "form",
    Sn = "form-message",
    Tn = "ful",
    Un = "fulness",
    Vn = "function",
    Wn = "g",
    Xn = "gaTrack",
    Yn = "goog-float-bottom",
    Zn = "goog-float-top",
    $n = "goog-inline-block",
    ao = "goog-inline-block ",
    bo = "goog-menu",
    co = "goog-menuheader",
    eo = "goog-menuitem-accel",
    fo = "goog-menuitem-mnemonic-separator",
    go = "goog-menuseparator",
    ho = "goog-option",
    io = "goog-option-selected",
    jo = "goog-te-button",
    ko = "goog-te-combo",
    lo = "goog-te-gadget",
    mo = "goog-te-gadget-icon",
    no = "goog-te-gadget-simple",
    oo = "goog-te-menu-frame skiptranslate",
    po = "goog-te-menu-value",
    qo = "goog-te-menu2",
    ro = "goog-te-menu2-colpad",
    so = "goog-te-menu2-item",
    to = "goog-te-menu2-item-selected",
    uo = "goog-te-menu2-separator",
    vo = "goog-text-highlight",
    wo = "googtrans",
    xo = "googtransopt",
    yo = "gt",
    zo = "gt-hl-layer",
    Ao = "gt-hl-text",
    Bo = "gtrans",
    Co = "gts-order",
    Do = "handleMultipleResult_",
    Eo = "handleSingleResult_",
    Fo = "haspopup",
    Go = "head",
    Ho = "height",
    Io = "hidden",
    Jo = "hide",
    Ko = "highlight",
    Lo = "hl",
    Mo = "horizontal",
    No = "hps",
    Oo = "html",
    Po = "http:",
    Qo = "https://",
    Ro = "https://translate.google.com",
    So = "https://translate.google.com/manager/website/",
    To = "https://translate.google.com/manager/website/static_files/html/reload.html",
    Uo = "https://www.google.com/images/cleardot.gif",
    Vo = "https://www.google.com/images/icons/product/translate-32.png",
    Wo = "i",
    Xo = "iant",
    Yo = "ible",
    Zo = "ic",
    $o = "ie",
    ap = "ies",
    bp = "iframe",
    cp = "ile",
    dp = "ility",
    ep = "img",
    fp = "index",
    gp = "indicator",
    hp = "ing",
    ip = "inline",
    jp = "inline-block",
    kp = "innerText",
    lp = "input",
    mp = "interactive",
    np = "invalidResponse",
    op = "ion",
    pp = "ism",
    qp = "iti",
    rp = "ive",
    sp = "iveness",
    tp = "ivity",
    up = "ization",
    vp = "ize",
    wp =
      "izer",
    xp = "javascript:",
    yp = 'javascript:""',
    zp = "javascript:void(0)",
    Ap = "javascript:void(document.write(\"<script>document.domain='",
    Bp = "jsonParseErr",
    Cp = "key",
    Dp = "keydown",
    Ep = "keypress",
    Fp = "keyup",
    Gp = "km",
    Hp = "l",
    Ip = "layout",
    Jp = "learn_more",
    Kp = "leave",
    Lp = "left",
    Mp = "left ",
    Np = "left:",
    Op = "left:auto;",
    Pp = "lo",
    Qp = "load",
    Rp = "loaded",
    Sp = "log",
    Tp = "logy",
    Up = "lt",
    Vp = "ltr",
    Wp = "manage_site",
    Xp = "ment",
    Yp = "menu",
    Zp = "menuBody",
    $p = "menuitemcheckbox",
    aq = "menuitemradio",
    bq = "message",
    cq = "minHeight",
    dq = "mousedown",
    eq =
      "mousemove",
    fq = "mouseout",
    gq = "mouseover",
    hq = "mouseup",
    iq = "move_offscreen",
    jq = "ms",
    kq = "ms, aborting",
    lq = "multilanguagePage",
    mq = "n",
    nq = "native code",
    oq = "noAutoPopup",
    pq = "nodeName",
    qq = "nodeType",
    rq = "nodeValue",
    sq = "none",
    tq = "normal",
    uq = "notranslate",
    vq = "nowrap",
    wq = "null",
    xq = "number",
    yq = "o",
    zq = "object",
    Aq = "off",
    Bq = "on",
    Cq = "onreadystatechange",
    Dq = "opacity",
    Eq = "opacity 1s linear",
    Fq = "open",
    Gq = "ophrase",
    Hq = "option",
    Iq = "options",
    Jq = "original-text",
    Kq = "osentence",
    Lq = "ou",
    Mq = "ous",
    Nq = "ously",
    Oq = "ousness",
    Pq =
      "overflow",
    Qq = "overflowX",
    Rq = "paddingBottom",
    Sq = "paddingLeft",
    Tq = "paddingRight",
    Uq = "paddingTop",
    Vq = "phrsclk",
    Wq = "pixelHeight",
    Xq = "pixelLeft",
    Yq = "pixelWidth",
    Zq = "placeholder",
    $q = "play",
    ar = "position",
    br = "position:absolute;display:none;",
    cr = "pre",
    dr = "pressed",
    er = "progressSection",
    fr = "progressValue",
    gr = "promptSection",
    hr = "promptSourceLang",
    ir = "promptTargetLang",
    jr = "px",
    kr = "px; _left:expression((",
    lr = "px; _left:expression((-",
    or = "px; _top:expression((",
    pr = "px; _top:expression((-",
    qr = "q",
    rr = "quot",
    sr = "ready",
    tr = "readystatechange",
    ur = "relative",
    vr = "remove",
    wr = "repeat-x",
    xr = "reset",
    yr = "resize",
    zr = "restore",
    Ar = "resume",
    Br = "right",
    Cr = "right:",
    Dr = "right:auto;",
    Er = "role",
    Fr = "round-trip-content",
    Gr = "round-trip-popup",
    Hr = "rtl",
    Ir = "s",
    Jr = "s ",
    Kr = "sanitizedviewsrc",
    Lr = "script",
    Mr = "scroll",
    Nr = "select",
    Or = "selected",
    Pr = "separator",
    Qr = "shes",
    Rr = "show",
    Sr = "skiptranslate",
    Tr = "sl",
    Ur = "smtalt",
    Vr = "source=baf",
    Wr = "sourceIndex",
    Xr = "span",
    Yr = "splice",
    Zr = "sses",
    $r = "started-activity-container",
    as = "static",
    bs = "status-message",
    cs = "stop",
    ds = "string",
    es = "style",
    fs = "submit",
    gs = "submitted",
    hs = "success",
    is = "successful",
    js = "suggestions?site=",
    ks = "t",
    ls = "tabIndex",
    ms = "tabindex",
    ns = "table",
    os = "targetLanguage",
    ps = "tbody",
    qs = "tc",
    rs = "tches",
    ss = "td",
    ts = "te_afas",
    us = "te_afau",
    vs = "te_afbr",
    ws = "te_ap",
    xs = "te_apc",
    ys = "te_ape",
    zs = "te_apr",
    As = "te_apt",
    Bs = "te_au",
    Cs = "text",
    Ds = "text/javascript",
    Es = "textContent",
    Fs = "textarea",
    Gs = "textarea-placeholder-input",
    Hs = "timeout",
    Is = "tion",
    Js = "tional",
    Ks = "title",
    Ls = "tl",
    Ms = "toggle_display",
    Ns = "top",
    Os = "top:",
    Ps = "top:auto;",
    Qs = "tr",
    Rs = "trans",
    Ss = "trans-edit",
    Ts = "trans-target",
    Us = "trans-target-empty",
    Vs = "trans-target-highlight",
    Ws = "trans.common.TranslationAPI",
    Xs = "transition",
    Ys = "translate",
    Zs = "translated-ltr",
    $s = "translated-rtl",
    at = "true",
    bt = "tsentence",
    ct = "turn_off_site",
    dt = "type_error:Const",
    et = "type_error:SafeHtml",
    ft = "type_error:SafeStyle",
    gt = "type_error:SafeUrl",
    ht = "type_error:TrustedResourceUrl",
    it = "u",
    jt = "uncheck",
    kt = "unhighlight",
    lt = "unload",
    mt = "unselect",
    nt = "unselectable",
    ot = "updating",
    pt = "url(",
    qt = "usealt",
    rt = "utf-8",
    st = "utrans",
    tt = "v",
    ut = "value",
    vt = "var ",
    wt = "vertical",
    xt = "vertical-align: middle",
    yt = "view-source scheme plus HTTP/HTTPS URL",
    zt = "view-source:",
    At = "visible",
    Bt = "w",
    Ct = "white-space:nowrap",
    Dt = "width",
    Et = "window.event",
    Ft = "window.location.href",
    Gt = "withCredentials",
    Ht = "x",
    It = "xes",
    Jt = "y",
    Kt = "z",
    Lt = "zClosurez",
    Mt = "zSoyz",
    Nt = "zh",
    Ot = "zh-CN",
    Pt = "zh-TW",
    Qt = "zh-cn",
    Rt = "zh-tw",
    St = "zx",
    Tt = "{",
    Ut = "|",
    Vt = "|[",
    Wt = "}",
    Xt = "\u00a0",
    Yt = "\u00a0\u25bc",
    Zt = "\u200b",
    $t = "\u203a",
    au = "\u25bc";

  function bu() {
    return function() {}
  }
  function cu(a) {
    return function(b) {
      this[a] = b
    }
  }
  function du(a) {
    return function() {
      return this[a]
    }
  }
  function eu(a) {
    return function() {
      return a
    }
  }
  var Q, fu = fu || {}, R = this;

  function gu(a) {
    return void 0 !== a
  }
  function hu(a) {
    a = a[Wb](Tf);
    for (var b = R, c; c = a[eb]();) if (null != b[c]) b = b[c];
    else return null;
    return b
  }
  function iu() {}
  function ju(a) {
    a.ia = function() {
      return a.Mh ? a.Mh : a.Mh = new a
    }
  }

  function ku(a) {
    var b = typeof a;
    if (b == zq) if (a) {
      if (a instanceof fa) return wl;
      if (a instanceof aa) return b;
      var c = aa[I][Pb][L](a);
      if (c == mk) return zq;
      if (c == kk || typeof a[H] == xq && "undefined" != typeof a[Bd] && "undefined" != typeof a[Rb] && !a[Rb](Yr)) return wl;
      if (c == lk || "undefined" != typeof a[L] && "undefined" != typeof a[Rb] && !a[Rb](hm)) return Vn
    } else return wq;
    else if (b == Vn && "undefined" == typeof a[L]) return zq;
    return b
  }
  function lu(a) {
    return ku(a) == wl
  }
  function mu(a) {
    var b = ku(a);
    return b == wl || b == zq && typeof a[H] == xq
  }

  function nu(a) {
    return typeof a == ds
  }
  function ou(a) {
    return typeof a == xq
  }
  function pu(a) {
    return ku(a) == Vn
  }
  function qu(a) {
    var b = typeof a;
    return b == zq && null != a || b == Vn
  }
  function ru(a) {
    return a[su] || (a[su] = ++tu)
  }
  var su = "closure_uid_" + (1E9 * l[lc]() >>> 0),
    tu = 0;

  function uu(a, b, c) {
    return a[L][rc](a[Gb], arguments)
  }

  function vu(a, b, c) {
    if (!a) throw m();
    if (2 < arguments[H]) {
      var d = fa[I][Hc][L](arguments, 2);
      return function() {
        var c = fa[I][Hc][L](arguments);
        fa[I].unshift[rc](c, d);
        return a[rc](b, c)
      }
    }
    return function() {
      return a[rc](b, arguments)
    }
  }
  function S(a, b, c) {
    S = ca[I][Gb] && -1 != ca[I][Gb][Pb]()[Lc](nq) ? uu : vu;
    return S[rc](null, arguments)
  }
  function wu(a, b) {
    var c = fa[I][Hc][L](arguments, 1);
    return function() {
      var b = c[Hc]();
      b[E][rc](b, arguments);
      return a[rc](this, b)
    }
  }
  var xu = Date.now || function() {
      return +new Date
    };

  function yu(a, b) {
    var c = a[Wb](Tf),
      d = R;
    c[0] in d || !d.execScript || d.execScript(vt + c[0]);
    for (var e; c[H] && (e = c[eb]());)!c[H] && gu(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
  }
  function U(a, b) {
    function c() {}
    Za(c, b[I]);
    a.j = b[I];
    Za(a, new c);
    a[I].constructor = a;
    a.ak = function(a, c, g) {
      for (var h = fa(arguments[H] - 2), n = 2; n < arguments[H]; n++) h[n - 2] = arguments[n];
      return b[I][c][rc](a, h)
    }
  }
  ca[I].bind = ca[I][Gb] || function(a, b) {
    if (1 < arguments[H]) {
      var c = fa[I][Hc][L](arguments, 1);
      c.unshift(this, a);
      return S[rc](null, c)
    }
    return S(this, a)
  };

  function zu() {
    this.a = []
  }
  zu[I].add = function(a) {
    this.a[E](a)
  };

  function Au() {
    this.a = []
  }
  U(Au, zu);
  ju(Au);
  Au[I].add = function(a) {
    if (a) for (; a(););
  };

  function Bu(a) {
    this.a = [];
    this.b = .5;
    Cu(this, a);
    this.e = 0;
    this.d = !0;
    this.f = S(this.g, this)
  }
  U(Bu, zu);

  function Cu(a, b) {
    1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
  }
  Bu[I].add = function(a) {
    Bu.j.add[L](this, a);
    this.d && Du(this)
  };

  function Du(a) {
    a.d = !1;
    var b = l.min(a.e, 5E3);
    f[Ub](a.f, b)
  }
  Bu[I].g = function() {
    var a = (new Date)[Jb](),
      b = 0;
    do {
      var c;
      this.a[H] && (this.a[0] && this.a[0]() || this.a[eb]());
      c = !! this.a[H];
      var d = 95 * this.b + 5,
        b = (new Date)[Jb]() - a
    } while (c && b < d);
    this.e = l[jb](b * (1 / this.b - 1)) + 1;
    c ? Du(this) : this.d = !0
  };

  function Eu() {
    return jk
  }
  var Fu = {};
  (function() {
    function a(a) {
      return function() {
        return a
      }
    }
    Fu = {
      xg: a(0),
      yg: a(1),
      zg: a(2),
      ik: a(3),
      ni: a(4),
      og: a(5),
      Yi: a(45),
      Gj: a(6),
      dj: a(7),
      wg: a(8),
      oi: a(9),
      rk: a(10),
      pi: a(11),
      mi: a(12),
      pk: a(13),
      Th: a(14),
      nk: a(15),
      Fi: a(16),
      tk: a(17),
      uj: a(18),
      dk: a(19),
      hk: a(20),
      zi: a(21),
      Mj: a(22),
      mk: a(23),
      lk: a(24),
      jk: a(25),
      sk: a(26),
      qk: a(27),
      kk: a(28),
      Ij: a(29),
      Jj: a(30),
      ck: a(32),
      bk: a(33),
      Ti: a(34),
      gk: a(35),
      ek: a(36),
      fk: a(37),
      Gg: a(38),
      Hj: a(39),
      Og: a(40),
      Lj: a(41)
    }
  })();
  var Gu = f[hd] && google[Yc] && google[Yc]._const;
  Gu || (Gu = {
    _cac: O,
    _cam: O,
    _cjlc: O,
    _cl: O,
    _cuc: O,
    _cnad: !1,
    _cnal: {},
    _pah: O,
    _pas: O,
    _pbi: O,
    _pci: O,
    _phf: O,
    _pli: O,
    _plla: O,
    _pmi: O,
    _ps: O,
    _pta: O,
    _puh: O
  });
  var Hu = f[hd] && f[hd][Yc] && f[hd][Yc].v || O,
    Iu = Gu._cl || on,
    Ju = Gu._cnal || {}, Ku = "lib" == Gu._cam ? 1 : 0,
    Lu;
  t: {
    for (var Mu = k[Lb]("meta"), Nu = 0; Nu < Mu[H]; ++Nu) if ("google-translate-customization" == Mu[Nu][$c]) {
      Lu = Mu[Nu].content;
      break t
    }
    Lu = O
  }
  var Ou = Lu,
    Pu = (Gu._cac || "te") + (1 == Ku ? "_lib" : O),
    Qu = Gu._pah || O,
    Ru = Gu._pas || Qo,
    Su = Gu._pbi || O,
    Tu = Gu._pci || O,
    Uu = Gu._plla || O,
    Vu = Gu._pli || O,
    Wu = Gu._ps || O,
    Xu = Gu._puh || O,
    Yu = "https://www.google.com/intl/" + Iu[v](tk, pf) + "/images/logos/translate_logo_sm.png",
    Zu = Yf + Xu + "/translate_suggestion",
    $u = "https://www.google.com/support/translate" + (Iu == on ? O : "#googtrans/en/" + Iu),
    av = Yf + Xu + "/translate_a/tminfo",
    bv = Yf + Xu + "/translate/tminfo";

  function cv(a) {
    if (m.captureStackTrace) m.captureStackTrace(this, cv);
    else {
      var b = m()[Yb];
      b && (this.stack = b)
    }
    a && (this.message = p(a))
  }
  U(cv, m);
  Ta(cv[I], "CustomError");
  var dv, ev = {
    Dk: 1,
    vk: 2,
    Kk: 3,
    yk: 4,
    Fk: 5,
    Ek: 6,
    Ik: 7,
    zk: 8,
    Ak: 9,
    Ck: 10,
    Bk: 11,
    Hk: 12
  };

  function fv(a) {
    return a[v](/\xa0|[ \t]+/g, P)
  }
  function gv(a) {
    return a[v](/[\t\r\n ]+/g, P)[v](/^[\t\r\n ]+|[\t\r\n ]+$/g, O)
  }
  var hv = p[I].trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a[v](/^[\s\xa0]+|[\s\xa0]+$/g, O)
    };

  function iv(a) {
    return a[v](/^[\s\xa0]+/, O)
  }
  function jv(a) {
    return a[v](/[\s\xa0]+$/, O)
  }
  function kv(a) {
    return encodeURIComponent(p(a))
  }
  function lv(a) {
    return ma(a[v](/\+/g, P))
  }
  function mv(a, b) {
    return a[v](/(\r\n|\r|\n)/g, b ? $h : ai)
  }

  function nv(a) {
    if (!ov[Cc](a)) return a; - 1 != a[Lc](Ke) && (a = a[v](pv, Ne)); - 1 != a[Lc](Jh) && (a = a[v](qv, Pe)); - 1 != a[Lc](xi) && (a = a[v](rv, Oe)); - 1 != a[Lc](Pd) && (a = a[v](sv, Se)); - 1 != a[Lc](Ue) && (a = a[v](tv, Me)); - 1 != a[Lc](Dd) && (a = a[v](uv, Le));
    return a
  }
  var pv = /&/g,
    qv = /</g,
    rv = />/g,
    sv = /"/g,
    tv = /'/g,
    uv = /\x00/g,
    ov = /[\x00&<>"']/;

  function vv(a) {
    return -1 != a[Lc](Ke) ? dn in R ? wv(a) : xv(a) : a
  }

  function wv(a) {
    var b = {
      "&amp;": Ke,
      "&lt;": Jh,
      "&gt;": xi,
      "&quot;": Pd
    }, c;
    c = R[ld][xb](bn);
    return a[v](yv, function(a, e) {
      var g = b[a];
      if (g) return g;
      if (e[nb](0) == Ce) {
        var h = ha(ag + e[Nb](1));
        ea(h) || (g = p[Uc](h))
      }
      g || (La(c, a + P), g = c[y][zc][Hc](0, -1));
      return b[a] = g
    })
  }
  function xv(a) {
    return a[v](/&([^;]+);/g, function(a, c) {
      switch (c) {
        case nl:
          return Ke;
        case Up:
          return Jh;
        case yo:
          return xi;
        case rr:
          return Pd;
        default:
          if (c[nb](0) == Ce) {
            var d = ha(ag + c[Nb](1));
            if (!ea(d)) return p[Uc](d)
          }
          return a
      }
    })
  }
  var yv = /&([^;\s<&]+);?/g;

  function zv(a, b) {
    for (var c = 0, d = hv(p(a))[Wb](Tf), e = hv(p(b))[Wb](Tf), g = l.max(d[H], e[H]), h = 0; 0 == c && h < g; h++) {
      var n = d[h] || O,
        q = e[h] || O,
        t = RegExp($e, Wn),
        w = RegExp($e, Wn);
      do {
        var z = t[fb](n) || [O, O, O],
          A = w[fb](q) || [O, O, O];
        if (0 == z[0][H] && 0 == A[0][H]) break;
        c = Av(0 == z[1][H] ? 0 : ka(z[1], 10), 0 == A[1][H] ? 0 : ka(A[1], 10)) || Av(0 == z[2][H], 0 == A[2][H]) || Av(z[2], A[2])
      } while (0 == c)
    }
    return c
  }
  function Av(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }
  function Bv(a) {
    return p(a)[v](/\-([a-z])/g, function(a, c) {
      return c[Ad]()
    })
  }

  function Cv(a) {
    var b = nu(void 0) ? "undefined" [v](/([-()\[\]{}+?*.$\^|,:#<!\\])/g, nk)[v](/\x08/g, pk) : ok;
    return a[v](new RegExp(af + (b ? Vt + b + rk : O) + ef, Wn), function(a, b, e) {
      return b + e[Ad]()
    })
  };

  function Dv(a) {
    return a[a[H] - 1]
  }
  var Ev = fa[I],
    Fv = Ev[Lc] ? function(a, b, c) {
      return Ev[Lc][L](a, b, c)
    } : function(a, b, c) {
      c = null == c ? 0 : 0 > c ? l.max(0, a[H] + c) : c;
      if (nu(a)) return nu(b) && 1 == b[H] ? a[Lc](b, c) : -1;
      for (; c < a[H]; c++) if (c in a && a[c] === b) return c;
      return -1
    }, Gv = Ev[Bb] ? function(a, b, c) {
      Ev[Bb][L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[H], e = nu(a) ? a[Wb](O) : a, g = 0; g < d; g++) g in e && b[L](c, e[g], g, a)
    }, Hv = Ev.filter ? function(a, b, c) {
      return Ev.filter[L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[H], e = [], g = 0, h = nu(a) ? a[Wb](O) : a, n = 0; n < d; n++) if (n in h) {
        var q = h[n];
        b[L](c,
        q, n, a) && (e[g++] = q)
      }
      return e
    }, Iv = Ev.map ? function(a, b, c) {
      return Ev.map[L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[H], e = fa(d), g = nu(a) ? a[Wb](O) : a, h = 0; h < d; h++) h in g && (e[h] = b[L](c, g[h], h, a));
      return e
    }, Jv = Ev.some ? function(a, b, c) {
      return Ev.some[L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[H], e = nu(a) ? a[Wb](O) : a, g = 0; g < d; g++) if (g in e && b[L](c, e[g], g, a)) return !0;
      return !1
    }, Kv = Ev.every ? function(a, b, c) {
      return Ev.every[L](a, b, c)
    } : function(a, b, c) {
      for (var d = a[H], e = nu(a) ? a[Wb](O) : a, g = 0; g < d; g++) if (g in e && !b[L](c, e[g], g, a)) return !1;
      return !0
    };

  function Lv(a, b) {
    var c;
    t: {
      c = a[H];
      for (var d = nu(a) ? a[Wb](O) : a, e = 0; e < c; e++) if (e in d && b[L](void 0, d[e], e, a)) {
        c = e;
        break t
      }
      c = -1
    }
    return 0 > c ? null : nu(a) ? a[nb](c) : a[c]
  }
  function Mv(a, b) {
    return 0 <= Fv(a, b)
  }
  function Nv(a, b) {
    var c = Fv(a, b),
      d;
    (d = 0 <= c) && Ev[Bd][L](a, c, 1);
    return d
  }
  function Ov(a) {
    return Ev[mb][rc](Ev, arguments)
  }
  function Pv(a) {
    var b = a[H];
    if (0 < b) {
      for (var c = fa(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }
  function Qv(a, b, c, d) {
    Ev[Bd][rc](a, Rv(arguments, 1))
  }

  function Rv(a, b, c) {
    return 2 >= arguments[H] ? Ev[Hc][L](a, b) : Ev[Hc][L](a, b, c)
  };
  var Sv = {
    set: function(a, b) {
      $a(a, b)
    },
    get: function(a) {
      a = a[id];
      return nu(a) && a[sb](/\S+/g) || []
    },
    add: function(a, b) {
      var c = Sv.get(a),
        d = Rv(arguments, 1),
        e = c[H] + d[H];
      Sv.Oh(c, d);
      Sv.set(a, c[N](P));
      return c[H] == e
    },
    remove: function(a, b) {
      var c = Sv.get(a),
        d = Rv(arguments, 1),
        e = Sv.Ph(c, d);
      Sv.set(a, e[N](P));
      return e[H] == c[H] - d[H]
    },
    Oh: function(a, b) {
      for (var c = 0; c < b[H]; c++) Mv(a, b[c]) || a[E](b[c])
    },
    Ph: function(a, b) {
      return Hv(a, function(a) {
        return !Mv(b, a)
      })
    },
    Pk: function(a, b, c) {
      for (var d = Sv.get(a), e = !1, g = 0; g < d[H]; g++) d[g] == b && (Qv(d, g--, 1), e = !0);
      e && (d[E](c), Sv.set(a, d[N](P)));
      return e
    },
    Ok: function(a, b, c) {
      var d = Sv.get(a);
      nu(b) ? Nv(d, b) : lu(b) && (d = Sv.Ph(d, b));
      nu(c) && !Mv(d, c) ? d[E](c) : lu(c) && Sv.Oh(d, c);
      Sv.set(a, d[N](P))
    },
    has: function(a, b) {
      return Mv(Sv.get(a), b)
    },
    enable: function(a, b, c) {
      c ? Sv.add(a, b) : Sv[ub](a, b)
    },
    toggle: function(a, b) {
      var c = !Sv.has(a, b);
      Sv.enable(a, b, c);
      return c
    }
  };

  function Tv(a, b, c) {
    for (var d in a) b[L](c, a[d], d, a)
  }
  function Uv(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }
  function Vv(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }
  function Wv() {
    var a = Xv,
      b;
    for (b in a) return !1;
    return !0
  }
  function Yv(a, b, c) {
    if (b in a) throw m('The object already contains the key "' + b + Pd);
    a[b] = c
  }
  function Zv(a) {
    var b = {}, c;
    for (c in a) b[c] = a[c];
    return b
  }
  var $v = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function aw(a, b) {
    for (var c, d, e = 1; e < arguments[H]; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var g = 0; g < $v[H]; g++) c = $v[g], aa[I][ac][L](d, c) && (a[c] = d[c])
    }
  }
  function bw(a) {
    var b = arguments[H];
    if (1 == b && lu(arguments[0])) return bw[rc](null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
  };
  var cw = bw(["area", "base", "br", "col", "command", "embed", "hr", ep, lp, "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  var dw = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

  function ew() {
    this.a = O;
    this.b = fw
  }
  ew[I].Yb = !0;
  ew[I].Xb = du(yk);
  va(ew[I], function() {
    return Oi + this.a + Wt
  });

  function gw(a) {
    return a instanceof ew && a[Xb] === ew && a.b === fw ? a.a : dt
  }
  var fw = {};

  function hw(a) {
    var b = new ew;
    b.a = a;
    return b
  };

  function iw() {
    this.a = O;
    this.b = jw
  }
  iw[I].Yb = !0;
  var jw = {};
  iw[I].Xb = du(yk);

  function kw(a) {
    var b = new iw;
    b.a = a;
    return b
  }
  var lw = kw(O),
    mw = /^[-.%_!# a-zA-Z0-9]+$/;

  function nw() {
    this.a = O;
    this.b = ow
  }
  nw[I].Yb = !0;
  nw[I].Xb = du(yk);
  nw[I].cg = !0;
  nw[I].pc = eu(1);

  function pw(a) {
    return a instanceof nw && a[Xb] === nw && a.b === ow ? a.a : gt
  }
  var qw = /^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/i;

  function rw(a) {
    try {
      var b = encodeURI(a)
    } catch (c) {
      return Dk
    }
    return b[v](sw, function(a) {
      return tw[a]
    })
  }
  var sw = /[()']|%5B|%5D|%25/g,
    tw = {
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "%5B": bk,
      "%5D": qk,
      "%25": Ie
    }, ow = {};

  function uw(a) {
    var b = new nw;
    b.a = a;
    return b
  };

  function vw() {
    this.a = ww
  }
  vw[I].Yb = !0;
  vw[I].Xb = eu(O);
  vw[I].cg = !0;
  vw[I].pc = eu(1);
  var ww = {};

  function xw() {
    this.a = O;
    this.d = yw;
    this.b = null
  }
  xw[I].cg = !0;
  xw[I].pc = du("b");
  xw[I].Yb = !0;
  xw[I].Xb = du(yk);

  function zw(a) {
    return a instanceof xw && a[Xb] === xw && a.d === yw ? a.a : et
  }
  function Aw(a) {
    if (a instanceof xw) return a;
    var b = null;
    a.cg && (b = a.pc());
    return Bw(nv(a.Yb ? a.Xb() : p(a)), b)
  }
  function Cw(a) {
    if (a instanceof xw) return a;
    a = Aw(a);
    var b;
    b = zw(a);
    b = mv(b[v](/  /g, Id), void 0);
    return Bw(b, a.pc())
  }
  var Dw = /^[a-zA-Z0-9-]+$/,
    Ew = bw(Gk, "cite", "data", "formaction", "href", "manifest", "poster", "src"),
    Fw = bw("embed", bp, "link", zq, Lr, es, "template");

  function Gw(a, b, c) {
    if (!Dw[Cc](a)) throw m("Invalid tag name <" + a + ">.");
    if (a[Cd]() in Fw) throw m("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
      e = Jh + a;
    if (b) for (var g in b) {
      if (!Dw[Cc](g)) throw m('Invalid attribute name "' + g + '".');
      var h = b[g];
      if (null != h) {
        var n, q = a;
        n = g;
        if (h instanceof ew) h = gw(h);
        else if (n[Cd]() == es) {
          if (!qu(h)) throw m('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
          if (!(h instanceof iw)) {
            var q = O,
              t = void 0;
            for (t in h) {
              if (!/^[-_a-zA-Z0-9]+$/ [Cc](t)) throw m("Name allows only [-_a-zA-Z0-9], got: " + t);
              var w = h[t];
              null != w && (w instanceof ew ? w = gw(w) : mw[Cc](w) || (w = Lt), q += t + Eh + w + Gh)
            }
            h = q ? kw(q) : lw
          }
          q = void 0;
          q = h instanceof iw && h[Xb] === iw && h.b === jw ? h.a : ft;
          h = q
        } else {
          if (/^on/i [Cc](n)) throw m('Attribute "' + n + '" requires goog.string.Const value, "' + h + '" given.');
          if (n[Cd]() in Ew) if (h instanceof vw) h = h instanceof vw && h[Xb] === vw && h.a === ww ? O : ht;
          else if (h instanceof nw) h = pw(h);
          else throw m('Attribute "' + n + '" on tag "' + q + '" requires goog.html.SafeUrl or goog.string.Const value, "' + h + '" given.');
        }
        h.Yb && (h = h.Xb());
        n = n + vi + nv(p(h)) + Pd;
        e = e + (P + n)
      }
    }
    gu(c) ? lu(c) || (c = [c]) : c = [];
    !0 === cw[a[Cd]()] ? e += xi : (d = Hw(c), e += xi + zw(d) + Kh + a + xi, d = d.pc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i [Cc](a) ? d = 0 : d = null);
    return Bw(e, d)
  }
  function Hw(a) {
    function b(a) {
      lu(a) ? Gv(a, b) : (a = Aw(a), d += zw(a), a = a.pc(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
      d = O;
    Gv(arguments, b);
    return Bw(d, c)
  }
  var yw = {};

  function Bw(a, b) {
    var c = new xw;
    c.a = a;
    c.b = b;
    return c
  }
  Bw(O, 0);

  function Iw(a, b) {
    this.x = gu(a) ? a : 0;
    this.y = gu(b) ? b : 0
  }
  Q = Iw[I];
  za(Q, function() {
    return new Iw(this.x, this.y)
  });

  function Jw(a, b) {
    return new Iw(a.x - b.x, a.y - b.y)
  }
  pa(Q, function() {
    this.x = l[jb](this.x);
    this.y = l[jb](this.y);
    return this
  });
  qa(Q, function() {
    this.x = l[kb](this.x);
    this.y = l[kb](this.y);
    return this
  });
  Ja(Q, function() {
    this.x = l[Fc](this.x);
    this.y = l[Fc](this.y);
    return this
  });
  Sa(Q, function(a, b) {
    a instanceof Iw ? (this.x += a.x, this.y += a.y) : (this.x += a, ou(b) && (this.y += b));
    return this
  });

  function Kw(a, b) {
    oa(this, a);
    Ga(this, b)
  }
  za(Kw[I], function() {
    return new Kw(this[u], this[D])
  });
  pa(Kw[I], function() {
    oa(this, l[jb](this[u]));
    Ga(this, l[jb](this[D]));
    return this
  });
  qa(Kw[I], function() {
    oa(this, l[kb](this[u]));
    Ga(this, l[kb](this[D]));
    return this
  });
  Ja(Kw[I], function() {
    oa(this, l[Fc](this[u]));
    Ga(this, l[Fc](this[D]));
    return this
  });
  var Lw;
  t: {
    var Mw = R.navigator;
    if (Mw) {
      var Nw = Mw.userAgent;
      if (Nw) {
        Lw = Nw;
        break t
      }
    }
    Lw = O
  }
  function Ow(a) {
    return -1 != Lw[Lc](a)
  };
  var Pw = Ow("Opera") || Ow("OPR"),
    V = Ow(Sj) || Ow(lj),
    Qw = Ow("Gecko") && -1 == Lw[Cd]()[Lc]("webkit") && !(Ow(Sj) || Ow(lj)),
    W = -1 != Lw[Cd]()[Lc]("webkit"),
    Rw = W && Ow("Mobile"),
    Sw = Ow("Macintosh"),
    Tw = Ow("Windows"),
    Uw = Ow("Android"),
    Vw = Ow("iPhone") && !Ow("iPod") && !Ow("iPad"),
    Ww = Ow("iPad");

  function Xw() {
    var a = R[ld];
    return a ? a.documentMode : void 0
  }
  var Yw = function() {
    var a = O,
      b;
    if (Pw && R.opera) return a = R.opera.version, pu(a) ? a() : a;
    Qw ? b = /rv\:([^\);]+)(\)|;)/ : V ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : W && (b = /WebKit\/(\S+)/);
    b && (a = (a = b[fb](Lw)) ? a[1] : O);
    return V && (b = Xw(), b > la(a)) ? p(b) : a
  }(),
    Zw = {};

  function X(a) {
    return Zw[a] || (Zw[a] = 0 <= zv(Yw, a))
  }
  function $w(a) {
    return V && ax >= a
  }
  var bx = R[ld],
    ax = bx && V ? Xw() || (bx[wd] == Mi ? ka(Yw, 10) : 5) : void 0;
  var cx = !V || $w(9),
    dx = !Qw && !V || V && $w(9) || Qw && X("1.9.1"),
    ex = V && !X("9"),
    fx = V && !$w(9);

  function gx(a) {
    return a ? new hx(ix(a)) : dv || (dv = new hx)
  }
  function jx(a, b) {
    return nu(b) ? a[Ic](b) : b
  }
  function kx() {
    var a = k;
    return a[td] && a[wb] ? a[td](Vf) : lx(k, kf, bl, void 0)
  }
  function mx(a, b) {
    var c = b || k,
      d = null;
    c[td] && c[wb] ? d = c[wb](Tf + a) : d = lx(k, kf, a, b)[0];
    return d || null
  }

  function lx(a, b, c, d) {
    a = d || a;
    b = b && b != kf ? b[Ad]() : O;
    if (a[td] && a[wb] && (b || c)) return a[td](b + (c ? Tf + c : O));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, g = 0, h; h = a[g]; g++) b == h[Pc] && (d[e++] = h);
        Xa(d, e);
        return d
      }
      return a
    }
    a = a[Lb](b || kf);
    if (c) {
      d = {};
      for (g = e = 0; h = a[g]; g++) b = h[id], typeof b[Wb] == Vn && Mv(b[Wb](/\s+/), c) && (d[e++] = h);
      Xa(d, e);
      return d
    }
    return a
  }

  function nx(a, b) {
    Tv(b, function(b, d) {
      d == es ? a[B].cssText = b : d == tm ? $a(a, b) : d == Qn ? a.htmlFor = b : d in ox ? a[Cb](ox[d], b) : 0 == d.lastIndexOf(ul, 0) || 0 == d.lastIndexOf(Tm, 0) ? a[Cb](d, b) : a[d] = b
    })
  }
  var ox = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: Ho,
    maxlength: "maxLength",
    role: Er,
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: Dt
  };

  function px(a) {
    a = a[ld];
    a = a[wd] == Mi ? a[Mb] : a[J];
    return new Kw(a[jd], a[ud])
  }

  function qx(a) {
    var b = rx(a);
    a = a.parentWindow || a[Zc];
    return V && X(gg) && a.pageYOffset != b[dd] ? new Iw(b[nc], b[dd]) : new Iw(a.pageXOffset || b[nc], a.pageYOffset || b[dd])
  }
  function rx(a) {
    return W || a[wd] != Mi ? a[J] || a[Mb] : a[Mb]
  }
  function sx(a) {
    return a ? a.parentWindow || a[Zc] : f
  }
  function tx(a, b, c) {
    return ux(k, arguments)
  }

  function ux(a, b) {
    var c = b[0],
      d = b[1];
    if (!cx && d && (d[$c] || d[Xc])) {
      c = [Jh, c];
      d[$c] && c[E](Md, nv(d[$c]), Pd);
      if (d[Xc]) {
        c[E](Od, nv(d[Xc]), Pd);
        var e = {};
        aw(e, d);
        delete e[Xc];
        d = e
      }
      c[E](xi);
      c = c[N](O)
    }
    c = a[xb](c);
    d && (nu(d) ? $a(c, d) : lu(d) ? $a(c, d[N](P)) : nx(c, d));
    2 < b[H] && vx(a, c, b, 2);
    return c
  }
  function vx(a, b, c, d) {
    function e(c) {
      c && b[r](nu(c) ? a[ob](c) : c)
    }
    for (; d < c[H]; d++) {
      var g = c[d];
      !mu(g) || qu(g) && 0 < g[F] ? e(g) : Gv(wx(g) ? Pv(g) : g, e)
    }
  }

  function xx(a, b) {
    var c = a[xb](bn);
    V ? (La(c, ai + b), c[qd](c[y])) : La(c, b);
    if (1 == c[Fb][H]) c = c[qd](c[y]);
    else {
      for (var d = a.createDocumentFragment(); c[y];) d[r](c[y]);
      c = d
    }
    return c
  }
  function yx(a) {
    if (1 != a[F]) return !1;
    switch (a[sc]) {
      case Ci:
      case Di:
      case Fi:
      case Hi:
      case Ki:
      case Li:
      case Si:
      case Xi:
      case aj:
      case ej:
      case fj:
      case dj:
      case gj:
      case ij:
      case jj:
      case tj:
      case uj:
      case kj:
      case xj:
      case yj:
      case Dj:
      case Ej:
      case Gj:
      case Nj:
      case Yj:
        return !1
    }
    return !0
  }
  function zx(a, b) {
    vx(ix(a), a, arguments, 1)
  }

  function Ax(a) {
    for (var b; b = a[y];) a[qd](b)
  }
  function Bx(a, b) {
    b[M] && b[M][pb](a, b)
  }
  function Cx(a, b) {
    b[M] && b[M][pb](a, b[Ib])
  }
  function Dx(a) {
    a && a[M] && a[M][qd](a)
  }
  function Ex(a) {
    return dx && void 0 != a.children ? a.children : Hv(a[Fb], function(a) {
      return 1 == a[F]
    })
  }
  function Fx(a) {
    return void 0 != a.firstElementChild ? a.firstElementChild : Gx(a[y], !0)
  }
  function Gx(a, b) {
    for (; a && 1 != a[F];) a = b ? a[Ib] : a[Ob];
    return a
  }

  function Hx(a, b) {
    if (a[qc] && 1 == b[F]) return a == b || a[qc](b);
    if ("undefined" != typeof a[Oc]) return a == b || ja(a[Oc](b) & 16);
    for (; b && a != b;) b = b[M];
    return b == a
  }

  function Ix(a, b) {
    if (a == b) return 0;
    if (a[Oc]) return a[Oc](b) & 2 ? 1 : -1;
    if (V && !$w(9)) {
      if (9 == a[F]) return -1;
      if (9 == b[F]) return 1
    }
    if (Wr in a || a[M] && Wr in a[M]) {
      var c = 1 == a[F],
        d = 1 == b[F];
      if (c && d) return a[Sb] - b[Sb];
      var e = a[M],
        g = b[M];
      return e == g ? Jx(a, b) : !c && Hx(e, b) ? -1 * Kx(a, b) : !d && Hx(g, a) ? Kx(b, a) : (c ? a[Sb] : e[Sb]) - (d ? b[Sb] : g[Sb])
    }
    d = ix(a);
    c = d[Sc]();
    c.selectNode(a);
    c[ib](!0);
    d = d[Sc]();
    d.selectNode(b);
    d[ib](!0);
    return c.compareBoundaryPoints(R[yc].START_TO_END, d)
  }

  function Kx(a, b) {
    var c = a[M];
    if (c == b) return -1;
    for (var d = b; d[M] != c;) d = d[M];
    return Jx(d, a)
  }
  function Jx(a, b) {
    for (var c = b; c = c[Ob];) if (c == a) return -1;
    return 1
  }
  function Lx(a) {
    var b, c = arguments[H];
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = ba;
    for (b = 0; b < c; b++) {
      for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h[M];
      d[E](g);
      e = l.min(e, g[H])
    }
    g = null;
    for (b = 0; b < e; b++) {
      for (var h = d[0][b], n = 1; n < c; n++) if (h != d[n][b]) return g;
      g = h
    }
    return g
  }
  function ix(a) {
    return 9 == a[F] ? a : a[fc] || a[ld]
  }

  function Mx(a) {
    return a.contentDocument || a.contentWindow[ld]
  }
  function Nx(a) {
    return a.contentWindow || sx(Mx(a))
  }
  function Ox(a, b) {
    if (Es in a) a.textContent = b;
    else if (3 == a[F]) a.data = b;
    else if (a[y] && 3 == a[y][F]) {
      for (; a[ic] != a[y];) a[qd](a[ic]);
      a[y].data = b
    } else {
      Ax(a);
      var c = ix(a);
      a[r](c[ob](p(b)))
    }
  }
  var Px = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
  }, Rx = {
    IMG: P,
    BR: Ed
  };

  function Sx(a, b) {
    b ? Ra(a, 0) : (Ra(a, -1), a[tc](ls))
  }
  function Tx(a) {
    a = a.getAttributeNode(ms);
    return null != a && a.specified
  }

  function Ux(a) {
    a = a.tabIndex;
    return ou(a) && 0 <= a && 32768 > a
  }
  function Vx(a) {
    if (ex && kp in a) a = a[gd][v](/(\r\n|\r|\n)/g, Ed);
    else {
      var b = [];
      Wx(a, b, !0);
      a = b[N](O)
    }
    a = a[v](/ \xAD /g, P)[v](/\xAD/g, O);
    a = a[v](/\u200B/g, O);
    ex || (a = a[v](/ +/g, P));
    a != P && (a = a[v](/^\s*/, O));
    return a
  }
  function Xx(a) {
    var b = [];
    Wx(a, b, !1);
    return b[N](O)
  }
  function Wx(a, b, c) {
    if (!(a[Pc] in Px)) if (3 == a[F]) c ? b[E](p(a[zc])[v](/(\r\n|\r|\n)/g, O)) : b[E](a[zc]);
    else if (a[Pc] in Rx) b[E](Rx[a[Pc]]);
    else for (a = a[y]; a;) Wx(a, b, c), a = a[Ib]
  }

  function wx(a) {
    if (a && typeof a[H] == xq) {
      if (qu(a)) return typeof a[Kc] == Vn || typeof a[Kc] == ds;
      if (pu(a)) return typeof a[Kc] == Vn
    }
    return !1
  }
  function hx(a) {
    this.a = a || R[ld] || k
  }
  Q = hx[I];
  Q.h = function(a) {
    return jx(this.a, a)
  };
  Q.t = function(a, b, c) {
    return ux(this.a, arguments)
  };

  function Yx(a, b) {
    return a.a[xb](b)
  }
  function Zx(a, b) {
    return a.a[ob](p(b))
  }
  function $x(a) {
    return a.a[wd] == Mi
  }
  function ay(a) {
    a = a.a;
    return a.parentWindow || a[Zc]
  }
  Q.appendChild = function(a, b) {
    a[r](b)
  };
  Q.Mc = Ax;
  Q.Xi = Ex;
  Q.ph = Fx;
  Ea(Q, Hx);
  Q.Qa = Ox;
  Q.gf = Vx;
  var by = {}, cy = {};

  function dy() {
    throw m("Do not instantiate directly");
  }
  dy[I].a = null;
  dy[I].ya = du("content");
  va(dy[I], du("content"));

  function ey(a, b) {
    var c = Yx(gx(), Qi),
      d = fy(a(b || gy, void 0, void 0));
    La(c, d);
    return 1 == c[Fb][H] && (d = c[y], 1 == d[F]) ? d : c
  }
  function fy(a) {
    if (!qu(a)) return p(a);
    if (a instanceof dy) {
      if (a.b === by) return a.ya();
      if (a.b === cy) return nv(a.ya())
    }
    return Mt
  }
  var gy = {};

  function hy(a, b, c, d) {
    this.top = a;
    Ha(this, b);
    Ba(this, c);
    Pa(this, d)
  }
  Q = hy[I];
  za(Q, function() {
    return new hy(this.top, this[Ac], this[C], this[G])
  });
  Ea(Q, function(a) {
    return this && a ? a instanceof hy ? a[G] >= this[G] && a[Ac] <= this[Ac] && a.top >= this.top && a[C] <= this[C] : a.x >= this[G] && a.x <= this[Ac] && a.y >= this.top && a.y <= this[C] : !1
  });
  pa(Q, function() {
    this.top = l[jb](this.top);
    Ha(this, l[jb](this[Ac]));
    Ba(this, l[jb](this[C]));
    Pa(this, l[jb](this[G]));
    return this
  });
  qa(Q, function() {
    this.top = l[kb](this.top);
    Ha(this, l[kb](this[Ac]));
    Ba(this, l[kb](this[C]));
    Pa(this, l[kb](this[G]));
    return this
  });
  Ja(Q, function() {
    this.top = l[Fc](this.top);
    Ha(this, l[Fc](this[Ac]));
    Ba(this, l[Fc](this[C]));
    Pa(this, l[Fc](this[G]));
    return this
  });
  Sa(Q, function(a, b) {
    a instanceof Iw ? (Pa(this, this[G] + a.x), Ha(this, this[Ac] + a.x), this.top += a.y, Ba(this, this[C] + a.y)) : (Pa(this, this[G] + a), Ha(this, this[Ac] + a), ou(b) && (this.top += b, Ba(this, this[C] + b)));
    return this
  });

  function iy(a, b, c, d) {
    Pa(this, a);
    this.top = b;
    oa(this, c);
    Ga(this, d)
  }
  Q = iy[I];
  za(Q, function() {
    return new iy(this[G], this.top, this[u], this[D])
  });
  Ea(Q, function(a) {
    return a instanceof iy ? this[G] <= a[G] && this[G] + this[u] >= a[G] + a[u] && this.top <= a.top && this.top + this[D] >= a.top + a[D] : a.x >= this[G] && a.x <= this[G] + this[u] && a.y >= this.top && a.y <= this.top + this[D]
  });
  pa(Q, function() {
    Pa(this, l[jb](this[G]));
    this.top = l[jb](this.top);
    oa(this, l[jb](this[u]));
    Ga(this, l[jb](this[D]));
    return this
  });
  qa(Q, function() {
    Pa(this, l[kb](this[G]));
    this.top = l[kb](this.top);
    oa(this, l[kb](this[u]));
    Ga(this, l[kb](this[D]));
    return this
  });
  Ja(Q, function() {
    Pa(this, l[Fc](this[G]));
    this.top = l[Fc](this.top);
    oa(this, l[Fc](this[u]));
    Ga(this, l[Fc](this[D]));
    return this
  });
  Sa(Q, function(a, b) {
    a instanceof Iw ? (Pa(this, this[G] + a.x), this.top += a.y) : (Pa(this, this[G] + a), ou(b) && (this.top += b));
    return this
  });

  function jy(a, b, c) {
    if (nu(b))(b = ky(a, b)) && (a[B][b] = c);
    else for (var d in b) {
      c = a;
      var e = b[d],
        g = ky(c, d);
      g && (c[B][g] = e)
    }
  }
  var ly = {};

  function ky(a, b) {
    var c = ly[b];
    if (!c) {
      var d = Bv(b),
        c = d;
      void 0 === a[B][d] && (d = (W ? Zj : Qw ? rj : V ? jq : Pw ? wj : null) + Cv(d), void 0 !== a[B][d] && (c = d));
      ly[b] = c
    }
    return c
  }
  function my(a, b) {
    var c = ix(a);
    return c[Zc] && c[Zc][bc] && (c = c[Zc][bc](a, null)) ? c[b] || c.getPropertyValue(b) || O : O
  }
  function ny(a, b) {
    return my(a, b) || (a[xd] ? a[xd][b] : null) || a[B] && a[B][b]
  }

  function oy(a, b, c) {
    var d;
    b instanceof Iw ? (d = b.x, b = b.y) : (d = b, b = c);
    Pa(a[B], py(d));
    a[B].top = py(b)
  }
  function qy(a) {
    a = a ? ix(a) : k;
    return !V || $w(9) || $x(gx(a)) ? a[Mb] : a[J]
  }
  function ry(a) {
    var b;
    try {
      b = a.getBoundingClientRect()
    } catch (c) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
    V && a[fc][J] && (a = a[fc], Pa(b, b[G] - (a[Mb].clientLeft + a[J].clientLeft)), b.top -= a[Mb].clientTop + a[J].clientTop);
    return b
  }

  function sy(a) {
    if (V && !$w(8)) return a.offsetParent;
    var b = ix(a),
      c = ny(a, ar),
      d = c == Ln || c == Ek;
    for (a = a[M]; a && a != b; a = a[M]) if (c = ny(a, ar), d = d && c == as && a != b[Mb] && a != b[J], !d && (a.scrollWidth > a[jd] || a[yb] > a[ud] || c == Ln || c == Ek || c == ur)) return a;
    return null
  }

  function ty(a) {
    for (var b = new hy(0, ba, ba, 0), c = gx(a), d = c.a[J], e = c.a[Mb], g = rx(c.a); a = sy(a);) if (!(V && 0 == a[jd] || W && 0 == a[ud] && a == d) && a != d && a != e && ny(a, Pq) != At) {
      var h = uy(a),
        n = new Iw(a.clientLeft, a.clientTop);
      h.x += n.x;
      h.y += n.y;
      b.top = l.max(b.top, h.y);
      Ha(b, l.min(b[Ac], h.x + a[jd]));
      Ba(b, l.min(b[C], h.y + a[ud]));
      Pa(b, l.max(b[G], h.x))
    }
    d = g[nc];
    g = g[dd];
    Pa(b, l.max(b[G], d));
    b.top = l.max(b.top, g);
    c = px(ay(c) || f);
    Ha(b, l.min(b[Ac], d + c[u]));
    Ba(b, l.min(b[C], g + c[D]));
    return 0 <= b.top && 0 <= b[G] && b[C] > b.top && b[Ac] > b[G] ? b : null
  }

  function uy(a) {
    var b = ix(a);
    ny(a, ar);
    var c = new Iw(0, 0),
      d = qy(b);
    if (a == d) return c;
    a = ry(a);
    b = gx(b);
    b = qx(b.a);
    c.x = a[G] + b.x;
    c.y = a.top + b.y;
    return c
  }
  function vy(a, b) {
    var c = new Iw(0, 0),
      d = sx(ix(a)),
      e = a;
    do {
      var g;
      d == b ? g = uy(e) : (g = ry(e), g = new Iw(g[G], g.top));
      c.x += g.x;
      c.y += g.y
    } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));
    return c
  }
  function py(a) {
    typeof a == xq && (a = a + jr);
    return a
  }

  function wy(a) {
    var b = xy;
    if (ny(a, an) != sq) return b(a);
    var c = a[B],
      d = c[vc],
      e = c.visibility,
      g = c.position;
    Ua(c, Io);
    xa(c, Ek);
    Fa(c, ip);
    a = b(a);
    Fa(c, d);
    xa(c, g);
    Ua(c, e);
    return a
  }
  function xy(a) {
    var b = a[lb],
      c = a[xc],
      d = W && !b && !c;
    return gu(b) && !d || !a.getBoundingClientRect ? new Kw(b, c) : (a = ry(a), new Kw(a[Ac] - a[G], a[C] - a.top))
  }
  function yy(a, b) {
    Fa(a[B], b ? O : sq)
  }

  function zy(a, b) {
    var c = gx(b),
      d = null,
      e = c.a;
    if (V && e.createStyleSheet) c = d = e.createStyleSheet(), V && gu(c.cssText) ? c.cssText = a : La(c, a);
    else {
      e = lx(c.a, Go, void 0, void 0)[0];
      e || (d = lx(c.a, Rl, void 0, void 0)[0], e = c.t(Go), d[M][pb](e, d));
      var g = d = c.t(es);
      V && gu(g.cssText) ? g.cssText = a : La(g, a);
      c[r](e, d)
    }
  }
  function Ay(a) {
    return Hr == ny(a, Xm)
  }
  var By = Qw ? "MozUserSelect" : W ? "WebkitUserSelect" : null;

  function Cy(a, b, c) {
    c = c ? null : a[Lb](kf);
    if (By) {
      if (b = b ? sq : O, a[B][By] = b, c) {
        a = 0;
        for (var d; d = c[a]; a++) d[B][By] = b
      }
    } else if (V || Pw) if (b = b ? Bq : O, a[Cb](nt, b), c) for (a = 0; d = c[a]; a++) d[Cb](nt, b)
  }
  function Dy(a) {
    return new Kw(a[lb], a[xc])
  }
  function Ey(a, b) {
    var c = ix(a),
      d = $x(gx(c));
    if (!V || X(gg) || d && X(Dh)) Fy(a, b, Nm);
    else if (c = a[B], d) ab(c, b[u]), Aa(c, b[D]);
    else {
      var d = Gy(a),
        e = Hy(a);
      ab(c, b[u] + e[G] + d[G] + d[Ac] + e[Ac]);
      Aa(c, b[D] + e.top + d.top + d[C] + e[C])
    }
  }

  function Fy(a, b, c) {
    a = a[B];
    Qw ? a.MozBoxSizing = c : W ? a.WebkitBoxSizing = c : a.boxSizing = c;
    oa(a, l.max(b[u], 0) + jr);
    Ga(a, l.max(b[D], 0) + jr)
  }
  function Iy(a, b, c, d) {
    if (/^\d+px?$/ [Cc](b)) return ka(b, 10);
    var e = a[B][c],
      g = a.runtimeStyle[c];
    a.runtimeStyle[c] = a[xd][c];
    a[B][c] = b;
    b = a[B][d];
    a[B][c] = e;
    a.runtimeStyle[c] = g;
    return b
  }
  function Jy(a, b) {
    var c = a[xd] ? a[xd][b] : null;
    return c ? Iy(a, c, Lp, Xq) : 0
  }

  function Gy(a) {
    if (V) {
      var b = Jy(a, Sq),
        c = Jy(a, Tq),
        d = Jy(a, Uq);
      a = Jy(a, Rq);
      return new hy(d, c, a, b)
    }
    b = my(a, Sq);
    c = my(a, Tq);
    d = my(a, Uq);
    a = my(a, Rq);
    return new hy(la(d), la(c), la(a), la(b))
  }
  var Ky = {
    thin: 2,
    medium: 4,
    thick: 6
  };

  function Ly(a, b) {
    if ((a[xd] ? a[xd][b + Kj] : null) == sq) return 0;
    var c = a[xd] ? a[xd][b + ak] : null;
    return c in Ky ? Ky[c] : Iy(a, c, Lp, Xq)
  }

  function Hy(a) {
    if (V && !$w(9)) {
      var b = Ly(a, Xl),
        c = Ly(a, Zl),
        d = Ly(a, am);
      a = Ly(a, Vl);
      return new hy(d, c, a, b)
    }
    b = my(a, Yl);
    c = my(a, $l);
    d = my(a, bm);
    a = my(a, Wl);
    return new hy(la(d), la(c), la(a), la(b))
  };

  function My() {
    this.Ra = this.Ra;
    this.Fe = this.Fe
  }
  My[I].Ra = !1;
  My[I].H = function() {
    this.Ra || (this.Ra = !0, this.B())
  };
  My[I].B = function() {
    if (this.Fe) for (; this.Fe[H];) this.Fe[eb]()()
  };

  function Ny(a) {
    a && typeof a.H == Vn && a.H()
  };

  function Oy(a) {
    Oy[P](a);
    return a
  }
  Oy[P] = iu;

  function Py(a, b) {
    try {
      return Oy(a[b]), !0
    } catch (c) {}
    return !1
  };
  var Qy = !V || $w(9),
    Ry = !V || $w(9),
    Sy = V && !X("9");
  !W || X(Ah);
  Qw && X("1.9b") || V && X(Dh) || Pw && X("9.5") || W && X(Ah);
  Qw && !X(Dh) || V && X("9");

  function Ty(a, b) {
    Qa(this, a);
    cb(this, b);
    Oa(this, this[K]);
    this.e = !1;
    this.kh = !0
  }
  Ty[I].Db = function() {
    this.e = !0
  };
  Ty[I].Ua = function() {
    this.kh = !1
  };

  function Uy(a, b) {
    Ty[L](this, a ? a[Xc] : O);
    cb(this, null);
    Oa(this, null);
    this.d = null;
    this.a = this.clientY = this.clientX = this.kf = this.jf = 0;
    this.ctrlKey = !1;
    wa(this, !1);
    this.metaKey = this.shiftKey = !1;
    this.state = null;
    this.f = !1;
    this.b = null;
    if (a) {
      this.b = a;
      var c = Qa(this, a[Xc]);
      cb(this, a[K] || a.srcElement);
      Oa(this, b);
      var d = a.relatedTarget;
      d ? Qw && (Py(d, pq) || (d = null)) : c == gq ? d = a.fromElement : c == fq && (d = a.toElement);
      this.d = d;
      if (aa[Mc]) aa[Mc](this, {
        jf: {
          configurable: !0,
          enumerable: !0,
          get: this.Ig,
          set: this.Qi
        },
        kf: {
          configurable: !0,
          enumerable: !0,
          get: this.Jg,
          set: this.Ri
        }
      });
      else this.jf = this.Ig(), this.kf = this.Jg();
      this.clientX = void 0 !== a[bd] ? a[bd] : a.pageX;
      this.clientY = void 0 !== a[cd] ? a[cd] : a.pageY;
      this.a = a[zb] || 0;
      this.ctrlKey = a[md];
      wa(this, a[Qb]);
      this.shiftKey = a[zd];
      this.metaKey = a[Nc];
      this.f = Sw ? a[Nc] : a[md];
      this.state = a.state;
      a.defaultPrevented && this.Ua()
    }
  }
  U(Uy, Ty);
  var Vy = [1, 4, 2];

  function Wy(a) {
    return Qy ? 0 == a.b.button : a[Xc] == um ? !0 : !! (a.b.button & Vy[0])
  }
  Q = Uy[I];
  Q.Db = function() {
    Uy.j.Db[L](this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
  };
  Q.Ua = function() {
    Uy.j.Ua[L](this);
    var a = this.b;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Sy) try {
      if (a[md] || 112 <= a[zb] && 123 >= a[zb]) a.keyCode = -1
    } catch (b) {}
  };
  Q.Ig = function() {
    return W || void 0 !== this.b.offsetX ? this.b.offsetX : this.b.layerX
  };
  Q.Qi = function(a) {
    aa[Mc](this, {
      jf: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: a
      }
    })
  };
  Q.Jg = function() {
    return W || void 0 !== this.b.offsetY ? this.b.offsetY : this.b.layerY
  };
  Q.Ri = function(a) {
    aa[Mc](this, {
      kf: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: a
      }
    })
  };
  var Xy = "closure_listenable_" + (1E6 * l[lc]() | 0);

  function Yy(a) {
    return !(!a || !a[Xy])
  }
  var Zy = 0;

  function $y(a, b, c, d, e) {
    this.cc = a;
    this.a = null;
    this.src = b;
    Qa(this, c);
    this.Yd = !! d;
    this.ie = e;
    this.vf = ++Zy;
    this.oc = this.Zd = !1
  }
  function az(a) {
    a.oc = !0;
    a.cc = null;
    a.a = null;
    a.src = null;
    a.ie = null
  };

  function bz(a) {
    this.src = a;
    this.a = {};
    this.b = 0
  }
  bz[I].add = function(a, b, c, d, e) {
    var g = a[Pb]();
    a = this.a[g];
    a || (a = this.a[g] = [], this.b++);
    var h = cz(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Zd = !1)) : (b = new $y(b, this.src, g, !! d, e), b.Zd = c, a[E](b));
    return b
  };
  sa(bz[I], function(a, b, c, d) {
    a = a[Pb]();
    if (!(a in this.a)) return !1;
    var e = this.a[a];
    b = cz(e, b, c, d);
    return -1 < b ? (az(e[b]), Ev[Bd][L](e, b, 1), 0 == e[H] && (delete this.a[a], this.b--), !0) : !1
  });

  function dz(a, b) {
    var c = b[Xc];
    if (!(c in a.a)) return !1;
    var d = Nv(a.a[c], b);
    d && (az(b), 0 == a.a[c][H] && (delete a.a[c], a.b--));
    return d
  }
  function ez(a, b) {
    var c = b && b[Pb](),
      d = 0,
      e;
    for (e in a.a) if (!c || e == c) {
      for (var g = a.a[e], h = 0; h < g[H]; h++)++d, az(g[h]);
      delete a.a[e];
      a.b--
    }
    return d
  }
  function fz(a, b, c, d, e) {
    a = a.a[b[Pb]()];
    b = -1;
    a && (b = cz(a, c, d, e));
    return -1 < b ? a[b] : null
  }
  function cz(a, b, c, d) {
    for (var e = 0; e < a[H]; ++e) {
      var g = a[e];
      if (!g.oc && g.cc == b && g.Yd == !! c && g.ie == d) return e
    }
    return -1
  };
  var gz = "closure_lm_" + (1E6 * l[lc]() | 0),
    hz = {}, iz = 0;

  function jz(a, b, c, d, e) {
    if (lu(b)) {
      for (var g = 0; g < b[H]; g++) jz(a, b[g], c, d, e);
      return null
    }
    c = kz(c);
    return Yy(a) ? a.m(b, c, d, e) : lz(a, b, c, !1, d, e)
  }
  function lz(a, b, c, d, e, g) {
    if (!b) throw m("Invalid event type");
    var h = !! e,
      n = mz(a);
    n || (a[gz] = n = new bz(a));
    c = n.add(b, c, d, e, g);
    if (c.a) return c;
    d = nz();
    c.a = d;
    d.src = a;
    d.cc = c;
    a[Vc] ? a[Vc](b[Pb](), d, h) : a.attachEvent(oz(b[Pb]()), d);
    iz++;
    return c
  }

  function nz() {
    var a = pz,
      b = Ry ? function(c) {
        return a[L](b.src, b.cc, c)
      } : function(c) {
        c = a[L](b.src, b.cc, c);
        if (!c) return c
      };
    return b
  }
  function qz(a, b, c, d, e) {
    if (lu(b)) {
      for (var g = 0; g < b[H]; g++) qz(a, b[g], c, d, e);
      return null
    }
    c = kz(c);
    return Yy(a) ? a.Ka.add(p(b), c, !0, d, e) : lz(a, b, c, !0, d, e)
  }
  function rz(a, b, c, d, e) {
    if (lu(b)) for (var g = 0; g < b[H]; g++) rz(a, b[g], c, d, e);
    else c = kz(c), Yy(a) ? a.U(b, c, d, e) : a && (a = mz(a)) && (b = fz(a, b, c, !! d, e)) && sz(b)
  }

  function sz(a) {
    if (ou(a) || !a || a.oc) return !1;
    var b = a.src;
    if (Yy(b)) return dz(b.Ka, a);
    var c = a[Xc],
      d = a.a;
    b.removeEventListener ? b.removeEventListener(c, d, a.Yd) : b.detachEvent && b.detachEvent(oz(c), d);
    iz--;
    (c = mz(b)) ? (dz(c, a), 0 == c.b && (c.src = null, b[gz] = null)) : az(a);
    return !0
  }
  function tz(a, b) {
    if (!a) return 0;
    if (Yy(a)) return a.Ka ? ez(a.Ka, b) : 0;
    var c = mz(a);
    if (!c) return 0;
    var d = 0,
      e = b && b[Pb](),
      g;
    for (g in c.a) if (!e || g == e) for (var h = c.a[g][mb](), n = 0; n < h[H]; ++n) sz(h[n]) && ++d;
    return d
  }

  function oz(a) {
    return a in hz ? hz[a] : hz[a] = Bq + a
  }
  function uz(a, b, c, d) {
    var e = !0;
    if (a = mz(a)) if (b = a.a[b[Pb]()]) for (b = b[mb](), a = 0; a < b[H]; a++) {
      var g = b[a];
      g && g.Yd == c && !g.oc && (g = vz(g, d), e = e && !1 !== g)
    }
    return e
  }
  function vz(a, b) {
    var c = a.cc,
      d = a.ie || a.src;
    a.Zd && sz(a);
    return c[L](d, b)
  }

  function pz(a, b) {
    if (a.oc) return !0;
    if (!Ry) {
      var c = b || hu(Et),
        d = new Uy(c, this),
        e = !0;
      if (!(0 > c[zb] || void 0 != c.returnValue)) {
        t: {
          var g = !1;
          if (0 == c[zb]) try {
            c.keyCode = -1;
            break t
          } catch (h) {
            g = !0
          }
          if (g || void 0 == c.returnValue) c.returnValue = !0
        }
        c = [];
        for (g = d[Qc]; g; g = g[M]) c[E](g);
        for (var g = a[Xc], n = c[H] - 1; !d.e && 0 <= n; n--) {
          Oa(d, c[n]);
          var q = uz(c[n], g, !0, d),
            e = e && q
        }
        for (n = 0; !d.e && n < c[H]; n++) Oa(d, c[n]), q = uz(c[n], g, !1, d), e = e && q
      }
      return e
    }
    return vz(a, new Uy(b, this))
  }
  function mz(a) {
    a = a[gz];
    return a instanceof bz ? a : null
  }
  var wz = "__closure_events_fn_" + (1E9 * l[lc]() >>> 0);

  function kz(a) {
    if (pu(a)) return a;
    a[wz] || (a[wz] = function(b) {
      return a[Db](b)
    });
    return a[wz]
  };

  function xz(a) {
    My[L](this);
    this.b = a;
    this.a = {}
  }
  U(xz, My);
  var yz = [];
  xz[I].m = function(a, b, c, d) {
    lu(b) || (b && (yz[0] = b[Pb]()), b = yz);
    for (var e = 0; e < b[H]; e++) {
      var g = jz(a, b[e], c || this[Db], d || !1, this.b || this);
      if (!g) break;
      this.a[g.vf] = g
    }
    return this
  };

  function zz(a, b, c, d) {
    Az(a, b, c, d, void 0)
  }
  function Az(a, b, c, d, e, g) {
    if (lu(c)) for (var h = 0; h < c[H]; h++) Az(a, b, c[h], d, e, g);
    else(b = qz(b, c, d || a[Db], e, g || a.b || a)) && (a.a[b.vf] = b)
  }
  xz[I].U = function(a, b, c, d, e) {
    if (lu(b)) for (var g = 0; g < b[H]; g++) this.U(a, b[g], c, d, e);
    else c = c || this[Db], e = e || this.b || this, c = kz(c), d = !! d, b = Yy(a) ? fz(a.Ka, p(b), c, d, e) : a ? (a = mz(a)) ? fz(a, b, c, d, e) : null : null, b && (sz(b), delete this.a[b.vf]);
    return this
  };

  function Bz(a) {
    Tv(a.a, sz);
    a.a = {}
  }
  xz[I].B = function() {
    xz.j.B[L](this);
    Bz(this)
  };
  xz[I].handleEvent = function() {
    throw m("EventHandler.handleEvent not implemented");
  };

  function Cz() {
    My[L](this);
    this.Ka = new bz(this);
    this.Fj = this;
    this.Rc = null
  }
  U(Cz, My);
  Cz[I][Xy] = !0;
  Q = Cz[I];
  Q.Ae = du("Rc");
  Q.Wf = cu("Rc");
  Q.addEventListener = function(a, b, c, d) {
    jz(this, a, b, c, d)
  };
  Q.removeEventListener = function(a, b, c, d) {
    rz(this, a, b, c, d)
  };
  Q.dispatchEvent = function(a) {
    var b, c = this.Ae();
    if (c) {
      b = [];
      for (var d = 1; c; c = c.Ae()) b[E](c), ++d
    }
    c = this.Fj;
    d = a[Xc] || a;
    if (nu(a)) a = new Ty(a, c);
    else if (a instanceof Ty) cb(a, a[K] || c);
    else {
      var e = a;
      a = new Ty(d, c);
      aw(a, e)
    }
    var e = !0,
      g;
    if (b) for (var h = b[H] - 1; !a.e && 0 <= h; h--) g = Oa(a, b[h]), e = Dz(g, d, !0, a) && e;
    a.e || (g = Oa(a, c), e = Dz(g, d, !0, a) && e, a.e || (e = Dz(g, d, !1, a) && e));
    if (b) for (h = 0; !a.e && h < b[H]; h++) g = Oa(a, b[h]), e = Dz(g, d, !1, a) && e;
    return e
  };
  Q.B = function() {
    Cz.j.B[L](this);
    this.Ka && ez(this.Ka, void 0);
    this.Rc = null
  };
  Q.m = function(a, b, c, d) {
    return this.Ka.add(p(a), b, !1, c, d)
  };
  Q.U = function(a, b, c, d) {
    return this.Ka[ub](p(a), b, c, d)
  };

  function Dz(a, b, c, d) {
    b = a.Ka.a[p(b)];
    if (!b) return !0;
    b = b[mb]();
    for (var e = !0, g = 0; g < b[H]; ++g) {
      var h = b[g];
      if (h && !h.oc && h.Yd == c) {
        var n = h.cc,
          q = h.ie || h.src;
        h.Zd && dz(a.Ka, h);
        e = !1 !== n[L](q, d) && e
      }
    }
    return e && 0 != d.kh
  };

  function Ez(a) {
    if (a[Qb] && !a[md] || a[Nc] || 112 <= a.a && 123 >= a.a) return !1;
    switch (a.a) {
      case 18:
      case 20:
      case 93:
      case 17:
      case 40:
      case 35:
      case 27:
      case 36:
      case 45:
      case 37:
      case 224:
      case 91:
      case 144:
      case 12:
      case 34:
      case 33:
      case 19:
      case 255:
      case 44:
      case 39:
      case 145:
      case 16:
      case 38:
      case 224:
      case 92:
        return !1;
      case 0:
        return !Qw;
      default:
        return 166 > a.a || 183 < a.a
    }
  }

  function Fz(a, b, c, d, e) {
    if (!(V || W && X(zh))) return !0;
    if (Sw && e) return Gz(a);
    if (e && !d) return !1;
    ou(b) && (b = Hz(b));
    if (!c && (17 == b || 18 == b || Sw && 91 == b)) return !1;
    if (W && d && c) switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
    }
    if (V && d && b == a) return !1;
    switch (a) {
      case 13:
        return !0;
      case 27:
        return !W
    }
    return Gz(a)
  }

  function Gz(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || W && 0 == a) return !0;
    switch (a) {
      case 32:
      case 63:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return !0;
      default:
        return !1
    }
  }
  function Hz(a) {
    if (Qw) a = Iz(a);
    else if (Sw && W) t: switch (a) {
      case 93:
        a = 91;
        break t
    }
    return a
  }

  function Iz(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a
    }
  };

  function Jz(a) {
    R[Ub](function() {
      throw a;
    }, 0)
  }
  var Kz;

  function Lz() {
    var a = R.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof f && f.postMessage && f[Vc] && !Ow(Bj) && (a = function() {
      var a = k[xb](bp);
      Fa(a[B], sq);
      a.src = O;
      k[Mb][r](a);
      var b = a.contentWindow,
        a = b[ld];
      a[Bc]();
      a[rb](O);
      a[ec]();
      var c = im + l[lc](),
        d = b[Zb][mc] == Fn ? kf : b[Zb][mc] + Yf + b[Zb].host,
        a = S(function(a) {
          if ((d == kf || a.origin == d) && a.data == c) this.port1.onmessage()
        }, this);
      b[Vc](bq, a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          b.postMessage(c, d)
        }
      }
    });
    if ("undefined" !== typeof a && !Ow(Sj) && !Ow(lj)) {
      var b = new a,
        c = {}, d = c;
      b.port1.onmessage = function() {
        if (gu(c[Vb])) {
          c = c[Vb];
          var a = c.Qh;
          c.Qh = null;
          a()
        }
      };
      return function(a) {
        ya(d, {
          Qh: a
        });
        d = d[Vb];
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof k && Cq in k[xb](Lr) ? function(a) {
      var b = k[xb](Lr);
      Ia(b, function() {
        Ia(b, null);
        b[M][qd](b);
        b = null;
        a();
        a = null
      });
      k[Mb][r](b)
    } : function(a) {
      R[Ub](a, 0)
    }
  };

  function Mz(a, b) {
    Nz || Oz();
    Pz || (Nz(), Pz = !0);
    Qz[E](new Rz(a, b))
  }
  var Nz;

  function Oz() {
    if (R.Promise && R.Promise.resolve) {
      var a = R.Promise.resolve();
      Nz = function() {
        a[od](Sz)
      }
    } else Nz = function() {
      var a = Sz;
      if (!pu(R[hc]) || R.Window && R.Window[I][hc] == R[hc]) Kz || (Kz = Lz()), Kz(a);
      else R[hc](a)
    }
  }
  var Pz = !1,
    Qz = [];

  function Sz() {
    for (; Qz[H];) {
      var a = Qz;
      Qz = [];
      for (var b = 0; b < a[H]; b++) {
        var c = a[b];
        try {
          c.a[L](c.b)
        } catch (d) {
          Jz(d)
        }
      }
    }
    Pz = !1
  }
  function Rz(a, b) {
    this.a = a;
    this.b = b
  };

  function Tz(a) {
    a[I].then = a[I][od];
    a[I].$goog_Thenable = !0
  }
  function Uz(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };

  function Vz(a, b) {
    this.b = 0;
    this.g = void 0;
    this.a = this.d = null;
    this.e = this.f = !1;
    try {
      var c = this;
      a[L](b, function(a) {
        Wz(c, 2, a)
      }, function(a) {
        Wz(c, 3, a)
      })
    } catch (d) {
      Wz(this, 3, d)
    }
  }
  Vz[I].then = function(a, b, c) {
    return Xz(this, pu(a) ? a : null, pu(b) ? b : null, c)
  };
  Tz(Vz);
  Ka(Vz[I], function(a) {
    0 == this.b && Mz(function() {
      var b = new Yz(a);
      Zz(this, b)
    }, this)
  });

  function Zz(a, b) {
    if (0 == a.b) if (a.d) {
      var c = a.d;
      if (c.a) {
        for (var d = 0, e = -1, g = 0, h; h = c.a[g]; g++) if (h = h.Xc) if (d++, h == a && (e = g), 0 <= e && 1 < d) break;
        0 <= e && (0 == c.b && 1 == d ? Zz(c, b) : (d = c.a[Bd](e, 1)[0], $z(c, d, 3, b)))
      }
    } else Wz(a, 3, b)
  }
  function aA(a, b) {
    a.a && a.a[H] || 2 != a.b && 3 != a.b || bA(a);
    a.a || (a.a = []);
    a.a[E](b)
  }

  function Xz(a, b, c, d) {
    var e = {
      Xc: null,
      sh: null,
      th: null
    };
    e.Xc = new Vz(function(a, h) {
      e.sh = b ? function(c) {
        try {
          var e = b[L](d, c);
          a(e)
        } catch (t) {
          h(t)
        }
      } : a;
      e.th = c ? function(b) {
        try {
          var e = c[L](d, b);
          !gu(e) && b instanceof Yz ? h(b) : a(e)
        } catch (t) {
          h(t)
        }
      } : h
    });
    e.Xc.d = a;
    aA(a, e);
    return e.Xc
  }
  Vz[I].l = function(a) {
    this.b = 0;
    Wz(this, 2, a)
  };
  Vz[I].p = function(a) {
    this.b = 0;
    Wz(this, 3, a)
  };

  function Wz(a, b, c) {
    if (0 == a.b) {
      if (a == c) b = 3, c = new TypeError(Cj);
      else {
        if (Uz(c)) {
          a.b = 1;
          c[od](a.l, a.p, a);
          return
        }
        if (qu(c)) try {
          var d = c[od];
          if (pu(d)) {
            cA(a, c, d);
            return
          }
        } catch (e) {
          b = 3, c = e
        }
      }
      a.g = c;
      a.b = b;
      bA(a);
      3 != b || c instanceof Yz || dA(a, c)
    }
  }
  function cA(a, b, c) {
    function d(b) {
      g || (g = !0, a.p(b))
    }
    function e(b) {
      g || (g = !0, a.l(b))
    }
    a.b = 1;
    var g = !1;
    try {
      c[L](b, e, d)
    } catch (h) {
      d(h)
    }
  }
  function bA(a) {
    a.f || (a.f = !0, Mz(a.k, a))
  }
  Vz[I].k = function() {
    for (; this.a && this.a[H];) {
      var a = this.a;
      this.a = [];
      for (var b = 0; b < a[H]; b++) $z(this, a[b], this.b, this.g)
    }
    this.f = !1
  };

  function $z(a, b, c, d) {
    if (2 == c) b.sh(d);
    else {
      if (b.Xc) for (; a && a.e; a = a.d) a.e = !1;
      b.th(d)
    }
  }
  function dA(a, b) {
    a.e = !0;
    Mz(function() {
      a.e && eA[L](null, b)
    })
  }
  var eA = Jz;

  function Yz(a) {
    cv[L](this, a)
  }
  U(Yz, cv);
  Ta(Yz[I], km);

  function fA(a, b, c) {
    if (pu(a)) c && (a = S(a, c));
    else if (a && typeof a[Db] == Vn) a = S(a[Db], a);
    else throw m("Invalid listener argument");
    return 2147483647 < b ? -1 : R[Ub](a, b || 0)
  }
  function gA(a) {
    R[gb](a)
  };

  function hA(a, b) {
    Cz[L](this);
    this.l = new xz(this);
    this.nc(a || null);
    b && (this.uc = b)
  }
  U(hA, Cz);
  Q = hA[I];
  Q.n = null;
  Q.$c = !0;
  Q.wh = null;
  Q.Bc = !1;
  Q.Pf = -1;
  Q.uc = Ms;
  Q.h = du(mq);
  Q.nc = function(a) {
    iA(this);
    this.n = a
  };
  Q.Qc = function(a) {
    iA(this);
    this.$c = a
  };

  function iA(a) {
    if (a.Bc) throw m("Can not change this state of the popup while showing.");
  }
  Q.K = du("Bc");
  Q.F = function(a) {
    this.sa && this.sa[ed]();
    this.ra && this.ra[ed]();
    if (a) {
      if (!this.Bc && this.tf()) {
        if (!this.n) throw m("Caller must call setElement before trying to show the popup");
        this.ob();
        a = ix(this.n);
        if (this.$c) if (this.l.m(a, dq, this.Hf, !0), V) {
          var b;
          try {
            b = a[db]
          } catch (c) {}
          for (; b && b[Pc] == dj;) {
            try {
              var d = Mx(b)
            } catch (e) {
              break
            }
            a = d;
            b = a[db]
          }
          this.l.m(a, dq, this.Hf, !0);
          this.l.m(a, Vm, this.xh)
        } else this.l.m(a, Pl, this.xh);
        this.uc == Ms ? (Ua(this.n[B], At), yy(this.n, !0)) : this.uc == iq && this.ob();
        this.Bc = !0;
        this.Pf = xu();
        this.sa ? (qz(this.sa, sn, this.yh, !1, this), this.sa.Ab()) : this.yh()
      }
    } else jA(this)
  };
  Q.ob = iu;

  function jA(a, b) {
    a.Bc && a[x]({
      type: Jl,
      target: b
    }) && (a.l && Bz(a.l), a.Bc = !1, xu(), a.ra ? (qz(a.ra, sn, wu(a.Gh, b), !1, a), a.ra.Ab()) : a.Gh(b))
  }
  Q.Gh = function(a) {
    this.uc == Ms ? this.Pj() : this.uc == iq && (this.n[B].top = rf);
    this.zf(a)
  };
  Q.Pj = function() {
    Ua(this.n[B], Io);
    yy(this.n, !1)
  };
  Q.tf = function() {
    return this[x](Kl)
  };
  Q.yh = function() {
    this[x](Rr)
  };
  Q.zf = function(a) {
    this[x]({
      type: Jo,
      target: a
    })
  };
  Q.Hf = function(a) {
    a = a[K];
    Hx(this.n, a) || kA(this, a) || 150 > xu() - this.Pf || jA(this, a)
  };
  Q.xh = function(a) {
    var b = ix(this.n);
    if ("undefined" != typeof k[db]) {
      if (a = b[db], !a || Hx(this.n, a) || a[sc] == Gi) return
    } else if (a[K] != b) return;
    150 > xu() - this.Pf || jA(this)
  };

  function kA(a, b) {
    return Jv(a.wh || [], function(a) {
      return b === a || Hx(a, b)
    })
  }
  Q.B = function() {
    hA.j.B[L](this);
    this.l.H();
    Ny(this.sa);
    Ny(this.ra);
    delete this.n;
    delete this.l;
    delete this.wh
  };

  function lA(a) {
    if (a[hb]) return a[hb];
    a = a[id];
    return nu(a) && a[sb](/\S+/g) || []
  }
  function mA(a, b) {
    return a[hb] ? a[hb][qc](b) : Mv(lA(a), b)
  }
  function nA(a, b) {
    a[hb] ? a[hb].add(b) : mA(a, b) || $a(a, a[id] + (0 < a[id][H] ? P + b : b))
  }
  function oA(a, b) {
    if (a[hb]) Gv(b, function(b) {
      nA(a, b)
    });
    else {
      var c = {};
      Gv(lA(a), function(a) {
        c[a] = !0
      });
      Gv(b, function(a) {
        c[a] = !0
      });
      $a(a, O);
      for (var d in c) $a(a, a[id] + (0 < a[id][H] ? P + d : d))
    }
  }
  function pA(a, b) {
    if (a[hb]) a[hb][ub](b);
    else mA(a, b) && $a(a, Hv(lA(a), function(a) {
      return a != b
    })[N](P))
  }

  function qA(a, b) {
    a[hb] ? Gv(b, function(b) {
      pA(a, b)
    }) : $a(a, Hv(lA(a), function(a) {
      return !Mv(b, a)
    })[N](P))
  };

  function rA(a, b, c) {
    My[L](this);
    this.b = a;
    this.e = b || 0;
    this.d = c;
    this.a = S(this.Pi, this)
  }
  U(rA, My);
  Q = rA[I];
  Q.ea = 0;
  Q.B = function() {
    rA.j.B[L](this);
    this[ed]();
    delete this.b;
    delete this.d
  };
  Q.start = function(a) {
    this[ed]();
    this.ea = fA(this.a, gu(a) ? a : this.e)
  };
  Va(Q, function() {
    0 != this.ea && gA(this.ea);
    this.ea = 0
  });
  Q.Pi = function() {
    this.ea = 0;
    this.b && this.b[L](this.d)
  };
  var Xv = {}, sA = null;

  function tA(a) {
    a = ru(a);
    delete Xv[a];
    Wv() && sA && sA[ed]()
  }
  function uA() {
    sA || (sA = new rA(function() {
      vA()
    }, 20));
    var a = sA;
    0 != a.ea || a[kc]()
  }
  function vA() {
    var a = xu();
    Tv(Xv, function(b) {
      wA(b, a)
    });
    Wv() || uA()
  };

  function xA() {
    Cz[L](this);
    this.a = 0;
    this.p = this.e = null
  }
  U(xA, Cz);
  xA[I].d = function() {
    this.Ta(Ml)
  };
  xA[I].f = function() {
    this.Ta(sn)
  };
  xA[I].Bb = function() {
    this.Ta(cs)
  };
  xA[I].Ta = function(a) {
    this[x](a)
  };

  function yA(a, b, c, d) {
    xA[L](this);
    if (!lu(a) || !lu(b)) throw m("Start and end parameters must be arrays");
    if (a[H] != b[H]) throw m("Start and end points must be the same length");
    this.l = a;
    this.w = b;
    this.duration = c;
    this.D = d;
    this.g = [];
    this.b = 0
  }
  U(yA, xA);
  Q = yA[I];
  Q.Ab = function(a) {
    if (a || 0 == this.a) this.b = 0, this.g = this.l;
    else if (1 == this.a) return !1;
    tA(this);
    this.e = a = xu(); - 1 == this.a && (this.e -= this[nd] * this.b);
    this.p = this.e + this[nd];
    this.b || this.d();
    this.Ta($q); - 1 == this.a && this.Ta(Ar);
    this.a = 1;
    var b = ru(this);
    b in Xv || (Xv[b] = this);
    uA();
    wA(this, a);
    return !0
  };
  Va(Q, function(a) {
    tA(this);
    this.a = 0;
    a && (this.b = 1);
    zA(this, this.b);
    this.Bb();
    this.f()
  });
  Q.af = function(a) {
    this.b = a;
    1 == this.a && (this.e = xu() - this[nd] * this.b, this.p = this.e + this[nd])
  };
  Q.B = function() {
    0 == this.a || this[ed](!1);
    this.Ta(Wm);
    yA.j.B[L](this)
  };

  function wA(a, b) {
    a.b = (b - a.e) / (a.p - a.e);
    1 <= a.b && (a.b = 1);
    zA(a, a.b);
    1 == a.b ? (a.a = 0, tA(a), a.Ta(Hn), a.f()) : 1 == a.a && a.ef()
  }
  function zA(a, b) {
    pu(a.D) && (b = a.D(b));
    a.g = fa(a.l[H]);
    for (var c = 0; c < a.l[H]; c++) a.g[c] = (a.w[c] - a.l[c]) * b + a.l[c]
  }
  Q.ef = function() {
    this.Ta(ql)
  };
  Q.Ta = function(a) {
    this[x](new AA(a, this))
  };

  function AA(a, b) {
    Ty[L](this, a);
    this.x = b.g[0];
    this.y = b.g[1];
    this.duration = b[nd];
    this.state = b.a
  }
  U(AA, Ty);

  function BA(a, b, c, d, e) {
    yA[L](this, b, c, d, e);
    this.k = a
  }
  U(BA, yA);
  BA[I].o = iu;
  BA[I].ef = function() {
    this.o();
    BA.j.ef[L](this)
  };
  BA[I].f = function() {
    this.o();
    BA.j.f[L](this)
  };
  BA[I].d = function() {
    this.o();
    BA.j.d[L](this)
  };

  function CA(a, b, c, d, e) {
    ou(b) && (b = [b]);
    ou(c) && (c = [c]);
    BA[L](this, a, b, c, d, e);
    if (1 != b[H] || 1 != c[H]) throw m("Start and end points must be 1D");
    this.A = -1
  }
  U(CA, BA);
  var DA = 1 / 1024;
  CA[I].o = function() {
    var a = this.g[0];
    if (l.abs(a - this.A) >= DA) {
      var b = this.k[B];
      Dq in b ? b.opacity = a : sj in b ? b.MozOpacity = a : Gn in b && (b.filter = a === O ? O : $k + 100 * a + bf);
      this.A = a
    }
  };
  CA[I].d = function() {
    this.A = -1;
    CA.j.d[L](this)
  };
  CA[I].f = function() {
    this.A = -1;
    CA.j.f[L](this)
  };

  function EA(a, b, c) {
    CA[L](this, a, 1, 0, b, c)
  }
  U(EA, CA);
  EA[I].d = function() {
    Fa(this.k[B], O);
    EA.j.d[L](this)
  };
  EA[I].f = function() {
    Fa(this.k[B], sq);
    EA.j.f[L](this)
  };

  function FA(a, b, c) {
    CA[L](this, a, 0, 1, b, c)
  }
  U(FA, CA);
  FA[I].d = function() {
    Fa(this.k[B], O);
    FA.j.d[L](this)
  };

  function GA() {}
  ju(GA);
  GA[I].a = 0;

  function HA(a) {
    Cz[L](this);
    this.a = a || gx();
    this.ra = IA;
    this.ea = null;
    this.R = !1;
    this.n = null;
    this.D = void 0;
    this.A = this.l = this.p = this.sa = null;
    this.bb = !1
  }
  U(HA, Cz);
  HA[I].Ob = GA.ia();
  var IA = null;

  function JA(a, b) {
    switch (a) {
      case 1:
        return b ? Ym : pn;
      case 2:
        return b ? Ko : kt;
      case 4:
        return b ? Hk : Vm;
      case 8:
        return b ? Nr : mt;
      case 16:
        return b ? pm : jt;
      case 32:
        return b ? Nn : Pl;
      case 64:
        return b ? Fq : Gm
    }
    throw m("Invalid component state");
  }
  function KA(a) {
    return a.ea || (a.ea = Eh + (a.Ob.a++)[Pb](36))
  }

  function LA(a, b) {
    if (a.p && a.p.A) {
      var c = a.p.A,
        d = a.ea;
      d in c && delete c[d];
      Yv(a.p.A, b, a)
    }
    a.ea = b
  }
  Q = HA[I];
  Q.h = du(mq);

  function MA(a, b) {
    return a.n ? mx(b, a.n || a.a.a) : null
  }
  function NA(a) {
    a.D || (a.D = new xz(a));
    return a.D
  }
  function OA(a, b) {
    if (a == b) throw m(Vj);
    if (b && a.p && a.ea && PA(a.p, a.ea) && a.p != b) throw m(Vj);
    a.p = b;
    HA.j.Wf[L](a, b)
  }
  Q.Ib = du("p");
  Q.Wf = function(a) {
    if (this.p && this.p != a) throw m("Method not supported");
    HA.j.Wf[L](this, a)
  };
  Q.t = function() {
    this.n = Yx(this.a, bn)
  };
  Q.ha = function(a) {
    QA(this, a)
  };

  function QA(a, b, c) {
    if (a.R) throw m(Ni);
    a.n || a.t();
    b ? b[pb](a.n, c || null) : a.a.a[J][r](a.n);
    a.p && !a.p.R || a.M()
  }
  function RA(a, b) {
    if (a.R) throw m(Ni);
    if (b && a.Df(b)) {
      a.bb = !0;
      var c = ix(b);
      a.a && a.a.a == c || (a.a = gx(b));
      a.W(b);
      a.M()
    } else throw m("Invalid element to decorate");
  }
  Q.Df = eu(!0);
  Q.W = cu(mq);
  Q.M = function() {
    this.R = !0;
    SA(this, function(a) {
      !a.R && a.h() && a.M()
    })
  };
  Q.V = function() {
    SA(this, function(a) {
      a.R && a.V()
    });
    this.D && Bz(this.D);
    this.R = !1
  };
  Q.B = function() {
    this.R && this.V();
    this.D && (this.D.H(), delete this.D);
    SA(this, function(a) {
      a.H()
    });
    !this.bb && this.n && Dx(this.n);
    this.p = this.sa = this.n = this.A = this.l = null;
    HA.j.B[L](this)
  };

  function Y(a, b) {
    return KA(a) + Tf + b
  }
  Q.fd = function(a, b) {
    this.Xf(a, TA(this), b)
  };
  Q.Xf = function(a, b, c) {
    if (a.R && (c || !this.R)) throw m(Ni);
    if (0 > b || b > TA(this)) throw m("Child component index out of bounds");
    this.A && this.l || (this.A = {}, this.l = []);
    if (a.Ib() == this) {
      var d = KA(a);
      this.A[d] = a;
      Nv(this.l, a)
    } else Yv(this.A, KA(a), a);
    OA(a, this);
    Qv(this.l, b, 0, a);
    a.R && this.R && a.Ib() == this ? (c = this.qe(), b = c[Fb][b] || null, b != a.h() && c[pb](a.h(), b)) : c ? (this.n || this.t(), b = UA(this, b + 1), QA(a, this.qe(), b ? b.n : null)) : this.R && !a.R && a.n && a.n[M] && 1 == a.n[M][F] && a.M()
  };
  Q.qe = du(mq);

  function VA(a) {
    null == a.ra && (a.ra = Ay(a.R ? a.n : a.a.a[J]));
    return a.ra
  }
  function TA(a) {
    return a.l ? a.l[H] : 0
  }
  function PA(a, b) {
    var c;
    a.A && b ? (c = a.A, c = (b in c ? c[b] : void 0) || null) : c = null;
    return c
  }
  function UA(a, b) {
    return a.l ? a.l[b] || null : null
  }
  function SA(a, b, c) {
    a.l && Gv(a.l, b, c)
  }
  function WA(a, b) {
    return a.l && b ? Fv(a.l, b) : -1
  }
  Q.removeChild = function(a, b) {
    if (a) {
      var c = nu(a) ? a : KA(a);
      a = PA(this, c);
      if (c && a) {
        var d = this.A;
        c in d && delete d[c];
        Nv(this.l, a);
        b && (a.V(), a.n && Dx(a.n));
        OA(a, null)
      }
    }
    if (!a) throw m("Child is not in parent component");
    return a
  };
  Q.Mc = function(a) {
    for (var b = []; this.l && 0 != this.l[H];) b[E](this[qd](UA(this, 0), a));
    return b
  };

  function XA(a, b) {
    Cz[L](this);
    a && YA(this, a, b)
  }
  U(XA, Cz);
  Q = XA[I];
  Q.n = null;
  Q.Ce = null;
  Q.$f = null;
  Q.De = null;
  Q.La = -1;
  Q.Hb = -1;
  Q.xf = !1;
  var ZA = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  }, $A = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  }, aB = V || W && X(zh),
    bB = Sw && Qw;
  Q = XA[I];
  Q.Nj = function(a) {
    W && (17 == this.La && !a[md] || 18 == this.La && !a[Qb] || Sw && 91 == this.La && !a[Nc]) && (this.Hb = this.La = -1); - 1 == this.La && (a[md] && 17 != a.a ? this.La = 17 : a[Qb] && 18 != a.a ? this.La = 18 : a[Nc] && 91 != a.a && (this.La = 91));
    if (aB && !Fz(a.a, this.La, a[zd], a[md], a[Qb])) this[Db](a);
    else this.Hb = Hz(a.a), bB && (this.xf = a[Qb])
  };
  Q.Oj = function(a) {
    this.Hb = this.La = -1;
    this.xf = a[Qb]
  };
  Q.handleEvent = function(a) {
    var b = a.b,
      c, d, e = b[Qb];
    V && a[Xc] == Ep ? c = this.Hb : W && a[Xc] == Ep ? c = this.Hb : Pw ? c = this.Hb : (c = b[zb] || this.Hb, d = b.charCode || 0, bB && (e = this.xf), Sw && 63 == d && 224 == c && (c = 191));
    d = c = Hz(c);
    var g = b.keyIdentifier;
    c ? 63232 <= c && c in ZA ? d = ZA[c] : 25 == c && a[zd] && (d = 9) : g && g in $A && (d = $A[g]);
    this.La = d;
    a = new cB(d, 0, 0, b);
    wa(a, e);
    this[x](a)
  };
  Q.h = du(mq);

  function YA(a, b, c) {
    a.De && dB(a);
    a.n = b;
    a.Ce = jz(a.n, Ep, a, c);
    a.$f = jz(a.n, Dp, a.Nj, c, a);
    a.De = jz(a.n, Fp, a.Oj, c, a)
  }

  function dB(a) {
    a.Ce && (sz(a.Ce), sz(a.$f), sz(a.De), a.Ce = null, a.$f = null, a.De = null);
    a.n = null;
    a.La = -1;
    a.Hb = -1
  }
  Q.B = function() {
    XA.j.B[L](this);
    dB(this)
  };

  function cB(a, b, c, d) {
    Uy[L](this, d);
    Qa(this, Cp);
    this.a = a
  }
  U(cB, Uy);
  var eB;

  function fB(a, b) {
    b ? a[Cb](Er, b) : a[tc](Er)
  }
  function gB(a, b, c) {
    lu(c) && (c = c[N](P));
    var d = ul + b;
    if (c === O || void 0 == c) eB || (eB = {
      atomic: !1,
      autocomplete: sq,
      dropeffect: sq,
      haspopup: !1,
      live: Aq,
      multiline: !1,
      multiselectable: !1,
      orientation: wt,
      readonly: !1,
      relevant: Sk,
      required: !1,
      sort: sq,
      busy: !1,
      disabled: !1,
      hidden: !1,
      invalid: Dn
    }), c = eB, b in c ? a[Cb](d, c[b]) : a[tc](d);
    else a[Cb](d, c)
  };

  function hB() {}
  var iB;
  ju(hB);
  var jB = {
    button: dr,
    checkbox: qm,
    menuitem: Or,
    menuitemcheckbox: qm,
    menuitemradio: qm,
    radio: qm,
    tab: Or,
    treeitem: Or
  };
  Q = hB[I];
  Q.Fc = bu();
  Q.t = function(a) {
    return a.a.t(bn, kB(this, a)[N](P), a.ya())
  };
  Q.Gb = function(a) {
    return a
  };

  function lB(a, b, c) {
    if (a = a.h ? a.h() : a) {
      var d = [b];
      V && !X(Bh) && (d = mB(lA(a), b), d[E](b));
      (c ? oA : qA)(a, d)
    }
  }
  Q.se = eu(!0);
  Q.Ia = function(a, b) {
    b.id && LA(a, b.id);
    var c = this.Gb(b);
    c && c[y] ? nB(a, c[y][Ib] ? Pv(c[Fb]) : c[y]) : a.Zb = null;
    var d = 0,
      e = this.Q(),
      g = this.Q(),
      h = !1,
      n = !1,
      q = !1,
      t = Pv(lA(b));
    Gv(t, function(a) {
      h || a != e ? n || a != g ? d |= this.Be(a) : n = !0 : (h = !0, g == e && (n = !0));
      1 == this.Be(a) && Tx(c) && Ux(c) && Sx(c, !1)
    }, this);
    a.Z = d;
    h || (t[E](e), g == e && (n = !0));
    n || t[E](g);
    var w = a.Af;
    w && t[E][rc](t, w);
    if (V && !X(Bh)) {
      var z = mB(t);
      0 < z[H] && (t[E][rc](t, z), q = !0)
    }
    h && n && !w && !q || $a(b, t[N](P));
    return b
  };
  Q.dh = function(a) {
    VA(a) && this.Vf(a.h(), !0);
    a[jc]() && this.qc(a, a.K())
  };

  function oB(a, b, c) {
    if (a = c || a.Fc()) c = b[sd](Er) || null, a != c && fB(b, a)
  }
  function pB(a, b, c) {
    b.K() || gB(c, Io, !b.K());
    b[jc]() || a.Ya(c, 1, !b[jc]());
    b.aa & 8 && a.Ya(c, 8, !! (b.Z & 8));
    b.aa & 16 && a.Ya(c, 16, !! (b.Z & 16));
    b.aa & 64 && a.Ya(c, 64, !! (b.Z & 64))
  }
  Q.ee = function(a, b) {
    Cy(a, !b, !V && !Pw)
  };
  Q.Vf = function(a, b) {
    lB(a, this.Q() + Of, b)
  };
  Q.Kf = function(a) {
    var b;
    return a.aa & 32 && (b = a.h()) ? Tx(b) && Ux(b) : !1
  };
  Q.qc = function(a, b) {
    var c;
    if (a.aa & 32 && (c = a.h())) {
      if (!b && a.Z & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.Z & 32 && a.bh()
      }(Tx(c) && Ux(c)) != b && Sx(c, b)
    }
  };
  Q.F = function(a, b) {
    yy(a, b);
    a && gB(a, Io, !b)
  };
  Q.gd = function(a, b, c) {
    var d = a.h();
    if (d) {
      var e = this.ld(b);
      e && lB(a, e, c);
      this.Ya(d, b, c)
    }
  };
  Q.Ya = function(a, b, c) {
    iB || (iB = {
      1: $m,
      8: Or,
      16: qm,
      64: An
    });
    b = iB[b];
    var d = a[sd](Er) || null;
    d && (d = jB[d] || b, b = b == qm || b == Or ? d : b);
    b && gB(a, b, c)
  };
  Q.hd = function(a, b) {
    var c = this.Gb(a);
    if (c && (Ax(c), b)) if (nu(b)) Ox(c, b);
    else {
      var d = function(a) {
        if (a) {
          var b = ix(c);
          c[r](nu(a) ? b[ob](a) : a)
        }
      };
      lu(b) ? Gv(b, d) : !mu(b) || qq in b ? d(b) : Gv(Pv(b), d)
    }
  };
  Q.Q = eu("goog-control");

  function kB(a, b) {
    var c = a.Q(),
      d = [c],
      e = a.Q();
    e != c && d[E](e);
    c = b.Z;
    for (e = []; c;) {
      var g = c & -c;
      e[E](a.ld(g));
      c &= ~g
    }
    d[E][rc](d, e);
    (c = b.Af) && d[E][rc](d, c);
    V && !X(Bh) && d[E][rc](d, mB(d));
    return d
  }
  function mB(a, b) {
    var c = [];
    b && (a = a[mb]([b]));
    Gv([], function(d) {
      !Kv(d, wu(Mv, a)) || b && !Mv(d, b) || c[E](d[N](tk))
    });
    return c
  }
  Q.ld = function(a) {
    this.a || qB(this);
    return this.a[a]
  };
  Q.Be = function(a) {
    if (!this.d) {
      this.a || qB(this);
      var b = this.a,
        c = {}, d;
      for (d in b) c[b[d]] = d;
      this.d = c
    }
    a = ka(this.d[a], 10);
    return ea(a) ? 0 : a
  };

  function qB(a) {
    var b = a.Q();
    b[v](/\xa0|\s/g, P);
    a.a = {
      1: b + Cf,
      2: b + Hf,
      4: b + yf,
      8: b + Pf,
      16: b + Af,
      32: b + Ef,
      64: b + Mf
    }
  };

  function rB() {}
  U(rB, hB);
  ju(rB);
  Q = rB[I];
  Q.Fc = eu(em);
  Q.Ya = function(a, b, c) {
    switch (b) {
      case 8:
      case 16:
        gB(a, dr, c);
        break;
      default:
      case 64:
      case 1:
        rB.j.Ya[L](this, a, b, c)
    }
  };
  Q.t = function(a) {
    var b = rB.j.t[L](this, a),
      c = a.f;
    b && (c ? Ya(b, c) : b[tc](Ks));
    (c = a.oa()) && this.va(b, c);
    a.aa & 16 && this.Ya(b, 16, !! (a.Z & 16));
    return b
  };
  Q.Ia = function(a, b) {
    b = rB.j.Ia[L](this, a, b);
    var c = this.oa(b);
    a.g = c;
    a.f = b.title;
    a.aa & 16 && this.Ya(b, 16, !! (a.Z & 16));
    return b
  };
  Q.oa = iu;
  Q.va = iu;
  Q.Q = eu("goog-button");

  function sB(a, b) {
    if (!a) throw m("Invalid class name " + a);
    if (!pu(b)) throw m("Invalid decorator function " + b);
    tB[a] = b
  }
  var uB = {}, tB = {};

  function vB(a, b, c) {
    HA[L](this, c);
    if (!b) {
      b = this[Xb];
      for (var d; b;) {
        d = ru(b);
        if (d = uB[d]) break;
        b = b.j ? b.j[Xb] : null
      }
      b = d ? pu(d.ia) ? d.ia() : new d : null
    }
    this.b = b;
    this.Zb = gu(a) ? a : null
  }
  U(vB, HA);
  Q = vB[I];
  Q.Zb = null;
  Q.Z = 0;
  Q.aa = 39;
  Q.sb = 255;
  Q.pd = 0;
  Q.ga = !0;
  Q.Af = null;
  Q.uf = !0;
  Q.de = !1;

  function wB(a, b) {
    a.R && b != a.uf && xB(a, b);
    a.uf = b
  }
  Q.t = function() {
    var a = this.b.t(this);
    this.n = a;
    oB(this.b, a, this.Yc());
    this.de || this.b.ee(a, !1);
    this.K() || this.b.F(a, !1)
  };
  Q.Yc = eu(null);
  Q.qe = function() {
    return this.b.Gb(this.h())
  };
  Q.Df = function(a) {
    return this.b.se(a)
  };
  Q.W = function(a) {
    this.n = a = this.b.Ia(this, a);
    oB(this.b, a, this.Yc());
    this.de || this.b.ee(a, !1);
    this.ga = a[B][vc] != sq
  };
  Q.M = function() {
    vB.j.M[L](this);
    pB(this.b, this, this.n);
    this.b.dh(this);
    if (this.aa & -2 && (this.uf && xB(this, !0), this.aa & 32)) {
      var a = this.h();
      if (a) {
        var b = this.e || (this.e = new XA);
        YA(b, a);
        NA(this).m(b, Cp, this.Ca).m(a, Nn, this.hj).m(a, Pl, this.bh)
      }
    }
  };

  function xB(a, b) {
    var c = NA(a),
      d = a.h();
    b ? (c.m(d, gq, a.Sf).m(d, dq, a.ve).m(d, hq, a.kd).m(d, fq, a.Tf), a.md != iu && c.m(d, Pm, a.md), V && c.m(d, Um, a.Dh)) : (c.U(d, gq, a.Sf).U(d, dq, a.ve).U(d, hq, a.kd).U(d, fq, a.Tf), a.md != iu && c.U(d, Pm, a.md), V && c.U(d, Um, a.Dh))
  }
  Q.V = function() {
    vB.j.V[L](this);
    this.e && dB(this.e);
    this.K() && this[jc]() && this.b.qc(this, !1)
  };
  Q.B = function() {
    vB.j.B[L](this);
    this.e && (this.e.H(), delete this.e);
    delete this.b;
    this.Af = this.Zb = null
  };
  Q.ya = du("Zb");
  Q.Tb = function(a) {
    this.b.hd(this.h(), a);
    this.Zb = a
  };

  function nB(a, b) {
    a.Zb = b
  }
  Q.nb = function() {
    var a = this.ya();
    if (!a) return O;
    a = nu(a) ? a : lu(a) ? Iv(a, Xx)[N](O) : Vx(a);
    return gv(a)
  };
  Q.Hh = function(a) {
    this.Tb(a)
  };
  Q.K = du("ga");
  Q.F = function(a, b) {
    if (b || this.ga != a && this[x](a ? Rr : Jo)) {
      var c = this.h();
      c && this.b.F(c, a);
      this[jc]() && this.b.qc(this, a);
      this.ga = a;
      return !0
    }
    return !1
  };
  Q.isEnabled = function() {
    return !(this.Z & 1)
  };
  Q.na = function(a) {
    var b = this.Ib();
    b && typeof b[jc] == Vn && !b[jc]() || !yB(this, 1, !a) || (a || (zB(this, !1), AB(this, !1)), this.K() && this.b.qc(this, a), BB(this, 1, !a, !0))
  };

  function AB(a, b) {
    yB(a, 2, b) && BB(a, 2, b)
  }
  function zB(a, b) {
    yB(a, 4, b) && BB(a, 4, b)
  }
  function CB(a, b) {
    yB(a, 64, b) && BB(a, 64, b)
  }
  function BB(a, b, c, d) {
    d || 1 != b ? a.aa & b && c != !! (a.Z & b) && (a.b.gd(a, b, c), a.Z = c ? a.Z | b : a.Z & ~b) : a.na(!c)
  }
  Q.qa = function(a, b) {
    if (this.R && this.Z & a && !b) throw m(Ni);
    !b && this.Z & a && BB(this, a, !1);
    this.aa = b ? this.aa | a : this.aa & ~a
  };

  function DB(a, b) {
    return !!(a.sb & b) && !! (a.aa & b)
  }
  function yB(a, b, c) {
    return !!(a.aa & b) && !! (a.Z & b) != c && (!(a.pd & b) || a[x](JA(b, c))) && !a.Ra
  }
  Q.Sf = function(a) {
    (!a.d || !Hx(this.h(), a.d)) && this[x](un) && this[jc]() && DB(this, 2) && AB(this, !0)
  };
  Q.Tf = function(a) {
    a.d && Hx(this.h(), a.d) || !this[x](Kp) || (DB(this, 4) && zB(this, !1), DB(this, 2) && AB(this, !1))
  };
  Q.md = iu;
  Q.ve = function(a) {
    this[jc]() && (DB(this, 2) && AB(this, !0), !Wy(a) || W && Sw && a[md] || (DB(this, 4) && zB(this, !0), this.b.Kf(this) && this.h()[vb]()));
    this.de || !Wy(a) || W && Sw && a[md] || a.Ua()
  };
  Q.kd = function(a) {
    this[jc]() && (DB(this, 2) && AB(this, !0), this.Z & 4 && this.sc(a) && DB(this, 4) && zB(this, !1))
  };
  Q.Dh = function(a) {
    this[jc]() && this.sc(a)
  };
  Q.sc = function(a) {
    if (DB(this, 16)) {
      var b = !(this.Z & 16);
      yB(this, 16, b) && BB(this, 16, b)
    }
    DB(this, 8) && yB(this, 8, !0) && BB(this, 8, !0);
    DB(this, 64) && CB(this, !(this.Z & 64));
    b = new Ty(Gk, this);
    a && (wa(b, a[Qb]), b.ctrlKey = a[md], b.metaKey = a[Nc], b.shiftKey = a[zd], b.f = a.f);
    return this[x](b)
  };
  Q.hj = function() {
    DB(this, 32) && yB(this, 32, !0) && BB(this, 32, !0)
  };
  Q.bh = function() {
    DB(this, 4) && zB(this, !1);
    DB(this, 32) && yB(this, 32, !1) && BB(this, 32, !1)
  };
  Q.Ca = function(a) {
    return this.K() && this[jc]() && this.bd(a) ? (a.Ua(), a.Db(), !0) : !1
  };
  Q.bd = function(a) {
    return 13 == a.a && this.sc(a)
  };
  if (!pu(vB)) throw m("Invalid component class " + vB);
  if (!pu(hB)) throw m("Invalid renderer class " + hB);
  var EB = ru(vB);
  uB[EB] = hB;
  sB("goog-control", function() {
    return new vB(null)
  });

  function FB() {}
  U(FB, rB);
  ju(FB);
  Q = FB[I];
  Q.Fc = bu();
  Q.t = function(a) {
    wB(a, !1);
    a.sb &= -256;
    a.qa(32, !1);
    return a.a.t(em, {
      "class": kB(this, a)[N](P),
      disabled: !a[jc](),
      title: a.f || O,
      value: a.oa() || O
    }, a.nb() || O)
  };
  Q.se = function(a) {
    return a[sc] == Ii || a[sc] == fj && (a[Xc] == em || a[Xc] == fs || a[Xc] == xr)
  };
  Q.Ia = function(a, b) {
    wB(a, !1);
    a.sb &= -256;
    a.qa(32, !1);
    if (b.disabled) {
      var c = this.ld(1);
      nA(b, c)
    }
    return FB.j.Ia[L](this, a, b)
  };
  Q.dh = function(a) {
    NA(a).m(a.h(), um, a.sc)
  };
  Q.ee = iu;
  Q.Vf = iu;
  Q.Kf = function(a) {
    return a[jc]()
  };
  Q.qc = iu;
  Q.gd = function(a, b, c) {
    FB.j.gd[L](this, a, b, c);
    (a = a.h()) && 1 == b && bb(a, c)
  };
  Q.oa = function(a) {
    return a[Jc]
  };
  Q.va = function(a, b) {
    a && Na(a, b)
  };
  Q.Ya = iu;

  function GB(a, b, c) {
    vB[L](this, a, b || FB.ia(), c)
  }
  U(GB, vB);
  Q = GB[I];
  Q.oa = du(Wn);
  Q.va = function(a) {
    this.g = a;
    this.b.va(this.h(), a)
  };
  Q.B = function() {
    GB.j.B[L](this);
    delete this.g;
    delete this.f
  };
  Q.M = function() {
    GB.j.M[L](this);
    if (this.aa & 32) {
      var a = this.h();
      a && NA(this).m(a, Fp, this.bd)
    }
  };
  Q.bd = function(a) {
    return 13 == a.a && a[Xc] == Cp || 32 == a.a && a[Xc] == Fp ? this.sc(a) : 32 == a.a
  };
  sB("goog-button", function() {
    return new GB(null)
  });

  function HB(a, b, c, d, e, g, h, n, q) {
    var t = IB(c),
      w;
    w = uy(a);
    var z = wy(a);
    w = new iy(w.x, w.y, z[u], z[D]);
    if (z = ty(a)) {
      var A = new iy(z[G], z.top, z[Ac] - z[G], z[C] - z.top),
        z = l.max(w[G], A[G]),
        T = l.min(w[G] + w[u], A[G] + A[u]);
      if (z <= T) {
        var ga = l.max(w.top, A.top),
          A = l.min(w.top + w[D], A.top + A[D]);
        ga <= A && (Pa(w, z), w.top = ga, oa(w, T - z), Ga(w, A - ga))
      }
    }
    z = gx(a);
    ga = gx(c);
    z.a != ga.a && (T = z.a[J], ga = vy(T, ay(ga)), ga = Jw(ga, uy(T)), !V || $w(9) || $x(z) || (ga = Jw(ga, qx(z.a))), Pa(w, w[G] + ga.x), w.top += ga.y);
    a = JB(a, b);
    b = new Iw(a & 2 ? w[G] + w[u] : w[G], a & 1 ? w.top + w[D] : w.top);
    b = Jw(b, t);
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    var da;
    if (h) if (q) da = q;
    else if (da = ty(c)) da.top -= t.y, Ha(da, da[Ac] - t.x), Ba(da, da[C] - t.y), Pa(da, da[G] - t.x);
    return KB(b, c, d, g, da, h, n)
  }
  function IB(a) {
    var b;
    if (a = a.offsetParent) {
      var c = a[sc] == bj || a[sc] == Gi;
      c && ny(a, ar) == as || (b = uy(a), c || (c = (c = Ay(a)) && Qw ? -a[nc] : !c || V && X(Dh) || ny(a, Qq) == At ? a[nc] : a.scrollWidth - a[jd] - a[nc], b = Jw(b, new Iw(c, a[dd]))))
    }
    return b || new Iw
  }

  function KB(a, b, c, d, e, g, h) {
    a = a[gc]();
    var n = JB(b, c);
    c = wy(b);
    h = h ? h[gc]() : c[gc]();
    a = a[gc]();
    h = h[gc]();
    var q = 0;
    if (d || 0 != n) n & 2 ? a.x -= h[u] + (d ? d[Ac] : 0) : d && (a.x += d[G]), n & 1 ? a.y -= h[D] + (d ? d[C] : 0) : d && (a.y += d.top);
    g && (e ? (d = a, n = h, q = 0, 65 == (g & 65) && (d.x < e[G] || d.x >= e[Ac]) && (g &= -2), 132 == (g & 132) && (d.y < e.top || d.y >= e[C]) && (g &= -5), d.x < e[G] && g & 1 && (d.x = e[G], q |= 1), d.x < e[G] && d.x + n[u] > e[Ac] && g & 16 && (oa(n, l.max(n[u] - (d.x + n[u] - e[Ac]), 0)), q |= 4), d.x + n[u] > e[Ac] && g & 1 && (d.x = l.max(e[Ac] - n[u], e[G]), q |= 1), g & 2 && (q = q | (d.x < e[G] ? 16 : 0) | (d.x + n[u] > e[Ac] ? 32 : 0)), d.y < e.top && g & 4 && (d.y = e.top, q |= 2), d.y <= e.top && d.y + n[D] < e[C] && g & 32 && (Ga(n, l.max(n[D] - (e.top - d.y), 0)), d.y = e.top, q |= 8), d.y >= e.top && d.y + n[D] > e[C] && g & 32 && (Ga(n, l.max(n[D] - (d.y + n[D] - e[C]), 0)), q |= 8), d.y + n[D] > e[C] && g & 4 && (d.y = l.max(e[C] - n[D], e.top), q |= 2), g & 8 && (q = q | (d.y < e.top ? 64 : 0) | (d.y + n[D] > e[C] ? 128 : 0)), e = q) : e = 256, q = e);
    g = new iy(0, 0, 0, 0);
    Pa(g, a.x);
    g.top = a.y;
    oa(g, h[u]);
    Ga(g, h[D]);
    e = q;
    if (e & 496) return e;
    oy(b, new Iw(g[G], g.top));
    h = new Kw(g[u], g[D]);
    c == h || c && h && c[u] == h[u] && c[D] == h[D] || (c = h, h = ix(b),
    g = $x(gx(h)), !V || X(gg) || g && X(Dh) ? Fy(b, c, Tl) : (h = b[B], g ? (g = Gy(b), b = Hy(b), ab(h, c[u] - b[G] - g[G] - g[Ac] - b[Ac]), Aa(h, c[D] - b.top - g.top - g[C] - b[C])) : (ab(h, c[u]), Aa(h, c[D]))));
    return e
  }
  function JB(a, b) {
    return (b & 4 && Ay(a) ? b ^ 2 : b) & -5
  };

  function LB() {}
  LB[I].b = bu();
  var MB = V && X(8),
    NB = W ? "<wbr></wbr>" : Pw ? "&shy;" : MB ? "&#8203;" : "<wbr>";

  function OB() {
    dy[L](this)
  }
  U(OB, dy);
  OB[I].b = by;
  (function(a) {
    function b(a) {
      this.content = a
    }
    Za(b, a[I]);
    return function(a, d) {
      var e = new b(p(a));
      void 0 !== d && (e.a = d);
      return e
    }
  })(OB);
  (function(a) {
    function b(a) {
      this.content = a
    }
    Za(b, a[I]);
    return function(a, d) {
      var e = p(a);
      if (!e) return O;
      e = new b(e);
      void 0 !== d && (e.a = d);
      return e
    }
  })(OB);
  var PB, QB, RB, SB, TB, UB, VB;
  VB = UB = TB = SB = RB = QB = PB = !1;
  var WB = Lw;
  WB && (-1 != WB[Lc]("Firefox") ? PB = !0 : -1 != WB[Lc]("Camino") ? QB = !0 : -1 != WB[Lc]("iPad") ? SB = !0 : -1 != WB[Lc]("iPhone") || -1 != WB[Lc]("iPod") ? RB = !0 : -1 != WB[Lc]("Chrome") ? UB = !0 : -1 != WB[Lc]("Android") ? TB = !0 : -1 != WB[Lc]("Safari") && (VB = !0));
  var XB = PB,
    YB = QB,
    ZB = RB,
    $B = SB,
    aC = TB,
    bC = UB,
    cC = VB;

  function dC(a) {
    return (a = a[fb](Lw)) ? a[1] : O
  }
  var eC = function() {
    if (XB) return dC(/Firefox\/([0-9.]+)/);
    if (V || Pw) return Yw;
    if (bC) return dC(/Chrome\/([0-9.]+)/);
    if (cC) return dC(/Version\/([0-9.]+)/);
    if (ZB || $B) {
      var a;
      if (a = /Version\/(\S+).*Mobile\/(\S+)/ [fb](Lw)) return a[1] + Tf + a[2]
    } else {
      if (aC) return (a = dC(/Android\s+([0-9.]+)/)) ? a : dC(/Version\/([0-9.]+)/);
      if (YB) return dC(/Camino\/([0-9.]+)/)
    }
    return O
  }();
  var fC = V || W || Pw || !1;
  W && X("534.16");
  V && X(Ch);
  Qw && X("1.8");
  W || V && X("9");
  V || Pw || Qw && X("1.9");
  Qw || W && X("527");
  V || W && X(zh);
  W && X("531");
  W && X(Ah);
  Qw && X("1.9") || V || Pw || W && X("531");
  Qw || W && X("526");
  bC && 0 <= zv(eC, "4") || cC && X("533") || Qw && X("2.0") || V && X(gg);
  Pw && X("11.10");
  bC && zv(eC, "12");

  function gC(a) {
    return eval(Ze + a + bf)
  };
  var hC = "StopIteration" in R ? R.StopIteration : m("StopIteration");

  function iC() {}
  ya(iC[I], function() {
    throw hC;
  });
  iC[I].Ma = function() {
    return this
  };

  function jC(a) {
    if (a instanceof iC) return a;
    if (typeof a.Ma == Vn) return a.Ma(!1);
    if (mu(a)) {
      var b = 0,
        c = new iC;
      ya(c, function() {
        for (;;) {
          if (b >= a[H]) throw hC;
          if (b in a) return a[b++];
          b++
        }
      });
      return c
    }
    throw m("Not implemented");
  }
  function kC(a, b, c) {
    a = jC(a);
    try {
      for (; b[L](c, a[Vb](), void 0, a););
    } catch (d) {
      if (d !== hC) throw d;
    }
  };

  function lC(a, b) {
    this.b = {};
    this.a = [];
    this.e = this.d = 0;
    var c = arguments[H];
    if (1 < c) {
      if (c % 2) throw m("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
      a instanceof lC ? (c = a.gb(), d = a.Ja()) : (c = Vv(a), d = Uv(a));
      for (var e = 0; e < c[H]; e++) this.set(c[e], d[e])
    }
  }
  Q = lC[I];
  Q.Ja = function() {
    mC(this);
    for (var a = [], b = 0; b < this.a[H]; b++) a[E](this.b[this.a[b]]);
    return a
  };
  Q.gb = function() {
    mC(this);
    return this.a[mb]()
  };

  function nC(a, b) {
    return oC(a.b, b)
  }
  ua(Q, function() {
    this.b = {};
    Xa(this.a, 0);
    this.e = this.d = 0
  });
  sa(Q, function(a) {
    return oC(this.b, a) ? (delete this.b[a], this.d--, this.e++, this.a[H] > 2 * this.d && mC(this), !0) : !1
  });

  function mC(a) {
    if (a.d != a.a[H]) {
      for (var b = 0, c = 0; b < a.a[H];) {
        var d = a.a[b];
        oC(a.b, d) && (a.a[c++] = d);
        b++
      }
      Xa(a.a, c)
    }
    if (a.d != a.a[H]) {
      for (var e = {}, c = b = 0; b < a.a[H];) d = a.a[b], oC(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      Xa(a.a, c)
    }
  }
  Q.get = function(a, b) {
    return oC(this.b, a) ? this.b[a] : b
  };
  Q.set = function(a, b) {
    oC(this.b, a) || (this.d++, this.a[E](a), this.e++);
    this.b[a] = b
  };
  Q.forEach = function(a, b) {
    for (var c = this.gb(), d = 0; d < c[H]; d++) {
      var e = c[d],
        g = this.get(e);
      a[L](b, g, e, this)
    }
  };
  za(Q, function() {
    return new lC(this)
  });
  Q.Ma = function(a) {
    mC(this);
    var b = 0,
      c = this.a,
      d = this.b,
      e = this.e,
      g = this,
      h = new iC;
    ya(h, function() {
      for (;;) {
        if (e != g.e) throw m("The map has changed since the iterator was created");
        if (b >= c[H]) throw hC;
        var h = c[b++];
        return a ? h : d[h]
      }
    });
    return h
  };

  function oC(a, b) {
    return aa[I][ac][L](a, b)
  };

  function pC(a) {
    if (typeof a.Ja == Vn) return a.Ja();
    if (nu(a)) return a[Wb](O);
    if (mu(a)) {
      for (var b = [], c = a[H], d = 0; d < c; d++) b[E](a[d]);
      return b
    }
    return Uv(a)
  }
  function qC(a, b, c) {
    if (typeof a[Bb] == Vn) a[Bb](b, c);
    else if (mu(a) || nu(a)) Gv(a, b, c);
    else {
      var d;
      if (typeof a.gb == Vn) d = a.gb();
      else if (typeof a.Ja != Vn) if (mu(a) || nu(a)) {
        d = [];
        for (var e = a[H], g = 0; g < e; g++) d[E](g)
      } else d = Vv(a);
      else d = void 0;
      for (var e = pC(a), g = e[H], h = 0; h < g; h++) b[L](c, e[h], d && d[h], a)
    }
  };

  function rC(a) {
    this.a = new lC;
    if (a) {
      a = pC(a);
      for (var b = a[H], c = 0; c < b; c++) this.add(a[c])
    }
  }
  function sC(a) {
    var b = typeof a;
    return b == zq && a || b == Vn ? yq + ru(a) : b[Nb](0, 1) + a
  }
  Q = rC[I];
  Q.add = function(a) {
    this.a.set(sC(a), a)
  };
  sa(Q, function(a) {
    return this.a[ub](sC(a))
  });
  ua(Q, function() {
    this.a[Eb]()
  });
  Ea(Q, function(a) {
    return nC(this.a, sC(a))
  });
  Q.Ja = function() {
    return this.a.Ja()
  };
  za(Q, function() {
    return new rC(this)
  });
  Q.Ma = function() {
    return this.a.Ma(!1)
  };

  function tC(a) {
    var b;
    b || (b = uC(a || arguments.callee.caller, []));
    return b
  }

  function uC(a, b) {
    var c = [];
    if (Mv(b, a)) c[E](ck);
    else if (a && 50 > b[H]) {
      c[E](vC(a) + Ze);
      for (var d = a.arguments, e = 0; d && e < d[H]; e++) {
        0 < e && c[E](of);
        var g;
        g = d[e];
        switch (typeof g) {
          case zq:
            g = g ? zq : wq;
            break;
          case ds:
            break;
          case xq:
            g = p(g);
            break;
          case Sl:
            g = g ? at : Dn;
            break;
          case Vn:
            g = (g = vC(g)) ? g : hk;
            break;
          default:
            g = typeof g
        }
        40 < g[H] && (g = g[Nb](0, 40) + Uf);
        c[E](g)
      }
      b[E](a);
      c[E](cf);
      try {
        c[E](uC(a.caller, b))
      } catch (h) {
        c[E](gk)
      }
    } else a ? c[E](dk) : c[E](fk);
    return c[N](O)
  }

  function vC(a) {
    if (wC[a]) return wC[a];
    a = p(a);
    if (!wC[a]) {
      var b = /function ([^\(]+)/ [fb](a);
      wC[a] = b ? b[1] : ek
    }
    return wC[a]
  }
  var wC = {};
  var xC = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

  function yC(a) {
    if (zC) {
      zC = !1;
      var b = R[Zb];
      if (b) {
        var c = b[oc];
        if (c && (c = AC(c)) && c != b[dc]) throw zC = !0, m();
      }
    }
    return a[sb](xC)
  }
  var zC = W;

  function AC(a) {
    return (a = yC(a)[3] || null) ? decodeURI(a) : a
  }
  function BC(a, b) {
    for (var c = a[Wb](Ke), d = 0; d < c[H]; d++) {
      var e = c[d][Lc](ui),
        g = null,
        h = null;
      0 <= e ? (g = c[d][yd](0, e), h = c[d][yd](e + 1)) : g = c[d];
      b(g, h ? lv(h) : O)
    }
  };

  function CC() {}
  CC[I].a = null;

  function DC(a) {
    var b;
    (b = a.a) || (b = {}, EC(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
  };
  var FC;

  function GC() {}
  U(GC, CC);

  function HC(a) {
    return (a = EC(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }
  function EC(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = [oj, nj, mj, qj], c = 0; c < b[H]; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.b = d
        } catch (e) {}
      }
      throw m("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
  }
  FC = new GC;

  function IC(a) {
    Cz[L](this);
    this.G = new lC;
    this.A = a || null;
    this.b = !1;
    this.k = this.a = null;
    this.p = this.e = O;
    this.d = this.D = this.l = this.o = !1;
    this.f = 0;
    this.g = null;
    this.C = O;
    this.w = this.I = !1
  }
  U(IC, Cz);
  var JC = /^https?$/i,
    KC = [zj, "PUT"],
    LC = [];

  function MC(a, b, c, d) {
    var e = new IC;
    LC[E](e);
    b && e.m(Km, b);
    e.Ka.add(sr, e.Ej, !0, void 0, void 0);
    e.f = l.max(0, 1E4);
    e[tb](a, c, d, void 0)
  }
  Q = IC[I];
  Q.Ej = function() {
    this.H();
    Nv(LC, this)
  };
  ra(Q, function(a, b, c, d) {
    if (this.a) throw m("[goog.net.XhrIo] Object is active with another request=" + this.e + "; newUri=" + a);
    b = b ? b[Ad]() : Yi;
    this.e = a;
    this.p = O;
    this.o = !1;
    this.b = !0;
    this.a = this.A ? HC(this.A) : HC(FC);
    this.k = this.A ? DC(this.A) : DC(FC);
    Ia(this.a, S(this.tg, this));
    try {
      this.D = !0, this.a[Bc](b, p(a), !0), this.D = !1
    } catch (e) {
      NC(this, e);
      return
    }
    a = c || O;
    var g = this.G[gc]();
    d && qC(d, function(a, b) {
      g.set(b, a)
    });
    d = Lv(g.gb(), OC);
    c = R.FormData && a instanceof R.FormData;
    !Mv(KC, b) || d || c || g.set(Pi, tl);
    g[Bb](function(a, b) {
      this.a.setRequestHeader(b,
      a)
    }, this);
    this.C && (this.a.responseType = this.C);
    Gt in this.a && (this.a.withCredentials = this.I);
    try {
      PC(this), 0 < this.f && ((this.w = QC(this.a)) ? (this.a.timeout = this.f, this.a.ontimeout = S(this.Cb, this)) : this.g = fA(this.Cb, this.f, this)), this.l = !0, this.a[tb](a), this.l = !1
    } catch (h) {
      NC(this, h)
    }
  });

  function QC(a) {
    return V && X(9) && ou(a.timeout) && gu(a.ontimeout)
  }
  function OC(a) {
    return Om == a[Cd]()
  }
  Q.Cb = function() {
    "undefined" != typeof fu && this.a && (this.p = Oj + this.f + kq, this[x](Hs), this[kd](8))
  };

  function NC(a, b) {
    a.b = !1;
    a.a && (a.d = !0, a.a[kd](), a.d = !1);
    a.p = b;
    RC(a);
    SC(a)
  }
  function RC(a) {
    a.o || (a.o = !0, a[x](Km), a[x](xn))
  }
  Q.abort = function() {
    this.a && this.b && (this.b = !1, this.d = !0, this.a[kd](), this.d = !1, this[x](Km), this[x](Bk), SC(this))
  };
  Q.B = function() {
    this.a && (this.b && (this.b = !1, this.d = !0, this.a[kd](), this.d = !1), SC(this, !0));
    IC.j.B[L](this)
  };
  Q.tg = function() {
    this.Ra || (this.D || this.l || this.d ? TC(this) : this.Bj())
  };
  Q.Bj = function() {
    TC(this)
  };

  function TC(a) {
    if (a.b && "undefined" != typeof fu && (!a.k[1] || 4 != UC(a) || 2 != VC(a))) if (a.l && 4 == UC(a)) fA(a.tg, 0, a);
    else if (a[x](tr), 4 == UC(a)) {
      a.b = !1;
      try {
        if (WC(a)) a[x](Km), a[x](hs);
        else {
          var b;
          try {
            b = 2 < UC(a) ? a.a.statusText : O
          } catch (c) {
            b = O
          }
          a.p = b + Jd + VC(a) + qk;
          RC(a)
        }
      } finally {
        SC(a)
      }
    }
  }
  function SC(a, b) {
    if (a.a) {
      PC(a);
      var c = a.a,
        d = a.k[0] ? iu : null;
      a.a = null;
      a.k = null;
      b || a[x](sr);
      try {
        Ia(c, d)
      } catch (e) {}
    }
  }
  function PC(a) {
    a.a && a.w && (a.a.ontimeout = null);
    ou(a.g) && (gA(a.g), a.g = null)
  }

  function WC(a) {
    var b = VC(a),
      c;
    t: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        c = !0;
        break t;
      default:
        c = !1
    }
    if (!c) {
      if (b = 0 === b) a = yC(p(a.e))[1] || null, !a && self[Zb] && (a = self[Zb][mc], a = a[Nb](0, a[H] - 1)), b = !JC[Cc](a ? a[Cd]() : O);
      c = b
    }
    return c
  }
  function UC(a) {
    return a.a ? a.a[Tc] : 0
  }
  function VC(a) {
    try {
      return 2 < UC(a) ? a.a.status : -1
    } catch (b) {
      return -1
    }
  }
  function XC(a) {
    try {
      return a.a ? a.a.responseText : O
    } catch (b) {
      return O
    }
  };

  function YC() {
    this.b = []
  }
  U(YC, hB);
  ju(YC);

  function ZC(a, b) {
    var c = a.b[b];
    if (!c) {
      switch (b) {
        case 0:
          c = a.Q() + Ff;
          break;
        case 1:
          c = a.Q() + zf;
          break;
        case 2:
          c = a.Q() + Bf
      }
      a.b[b] = c
    }
    return c
  }
  Q = YC[I];
  Q.Fc = eu("menuitem");
  Q.t = function(a) {
    var b = a.a.t(bn, kB(this, a)[N](P), $C(this, a.ya(), a.a));
    aD(this, a, b, !! (a.aa & 8) || !! (a.aa & 16));
    return b
  };
  Q.Gb = function(a) {
    return a && a[y]
  };
  Q.Ia = function(a, b) {
    var c = Fx(b),
      d = ZC(this, 2);
    c && mA(c, d) || b[r]($C(this, b[Fb], a.a));
    mA(b, ho) && (a.qa(16, !0), a && b && aD(this, a, b, !0));
    return YC.j.Ia[L](this, a, b)
  };
  Q.hd = function(a, b) {
    var c = this.Gb(a),
      d = bD(this, a) ? c[y] : null;
    YC.j.hd[L](this, a, b);
    d && !bD(this, a) && c[pb](d, c[y] || null)
  };

  function $C(a, b, c) {
    a = ZC(a, 2);
    return c.t(bn, a, b)
  }
  function bD(a, b) {
    var c = a.Gb(b);
    if (c) {
      var c = c[y],
        d = ZC(a, 1);
      return !!c && qu(c) && 1 == c[F] && mA(c, d)
    }
    return !1
  }
  function aD(a, b, c, d) {
    oB(a, c, b.Yc());
    pB(a, b, c);
    if (d != bD(a, c)) if (d ? nA(c, ho) : pA(c, ho), c = a.Gb(c), d) a = ZC(a, 1), c[pb](b.a.t(bn, a), c[y] || null);
    else c[qd](c[y])
  }
  Q.ld = function(a) {
    switch (a) {
      case 2:
        return ZC(this, 0);
      case 16:
      case 8:
        return io;
      default:
        return YC.j.ld[L](this, a)
    }
  };
  Q.Be = function(a) {
    var b = ZC(this, 0);
    switch (a) {
      case io:
        return 16;
      case b:
        return 2;
      default:
        return YC.j.Be[L](this, a)
    }
  };
  Q.Q = eu("goog-menuitem");

  function cD(a, b, c, d) {
    vB[L](this, a, d || YC.ia(), c);
    this.va(b)
  }
  U(cD, vB);
  Q = cD[I];
  Q.oa = function() {
    var a = this.sa;
    return null != a ? a : this.nb()
  };
  Q.va = cu("sa");
  Q.qa = function(a, b) {
    cD.j.qa[L](this, a, b);
    switch (a) {
      case 8:
        this.Z & 16 && !b && yB(this, 16, !1) && BB(this, 16, !1);
        var c = this.h();
        c && this && c && aD(this.b, this, c, b);
        break;
      case 16:
        (c = this.h()) && this && c && aD(this.b, this, c, b)
    }
  };
  Q.nb = function() {
    var a = this.ya();
    return lu(a) ? (a = Iv(a, function(a) {
      return qu(a) && 1 == a[F] && (mA(a, eo) || mA(a, fo)) ? O : Xx(a)
    })[N](O), gv(a)) : cD.j.nb[L](this)
  };
  Q.kd = function(a) {
    var b = this.Ib();
    if (b) {
      var c = b.T;
      b.T = null;
      if (b = c && ou(a[bd])) b = new Iw(a[bd], a[cd]), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
      if (b) return
    }
    cD.j.kd[L](this, a)
  };
  Q.bd = function(a) {
    return a.a == this.oh && this.sc(a) ? !0 : cD.j.bd[L](this, a)
  };
  Q.oj = du("oh");
  sB("goog-menuitem", function() {
    return new cD(null)
  });
  cD[I].Yc = function() {
    return this.aa & 16 ? $p : this.aa & 8 ? aq : cD.j.Yc[L](this)
  };
  cD[I].Ib = function() {
    return vB[I].Ib[L](this)
  };
  cD[I].Ae = function() {
    return vB[I].Ae[L](this)
  };

  function dD(a, b) {
    var c;
    a instanceof dD ? (this.dc = gu(b) ? b : a.dc, eD(this, a.wc), this.me = a.me, this.jd = a.jd, fD(this, a.le), this.ke = a.ke, gD(this, a.a[gc]()), this.je = a.je) : a && (c = yC(p(a))) ? (this.dc = !! b, eD(this, c[1] || O, !0), this.me = hD(c[2] || O), this.jd = hD(c[3] || O, !0), fD(this, c[4]), this.ke = hD(c[5] || O, !0), gD(this, c[6] || O, !0), this.je = hD(c[7] || O)) : (this.dc = !! b, this.a = new iD(null, 0, this.dc))
  }
  Q = dD[I];
  Q.wc = O;
  Q.me = O;
  Q.jd = O;
  Q.le = null;
  Q.ke = O;
  Q.je = O;
  Q.dc = !1;
  va(Q, function() {
    var a = [],
      b = this.wc;
    b && a[E](jD(b, kD, !0), Eh);
    if (b = this.jd) {
      a[E](Yf);
      var c = this.me;
      c && a[E](jD(c, kD, !0), Ai);
      a[E](kv(b)[v](/%25([0-9a-fA-F]{2})/g, Je));
      b = this.le;
      null != b && a[E](Eh, p(b))
    }
    if (b = this.ke) this.jd && b[nb](0) != Xf && a[E](Xf), a[E](jD(b, b[nb](0) == Xf ? lD : mD, !0));
    (b = this.a[Pb]()) && a[E](zi, b);
    (b = this.je) && a[E](Ce, jD(b, nD));
    return a[N](O)
  });
  za(Q, function() {
    return new dD(this)
  });

  function eD(a, b, c) {
    a.wc = c ? hD(b, !0) : b;
    a.wc && (a.wc = a.wc[v](/:$/, O))
  }

  function fD(a, b) {
    if (b) {
      b = ha(b);
      if (ea(b) || 0 > b) throw m("Bad port number " + b);
      a.le = b
    } else a.le = null
  }
  function gD(a, b, c) {
    b instanceof iD ? (a.a = b, oD(a.a, a.dc)) : (c || (b = jD(b, pD)), a.a = new iD(b, 0, a.dc))
  }
  function qD() {
    return bv instanceof dD ? bv[gc]() : new dD(bv, void 0)
  }
  function hD(a, b) {
    return a ? b ? decodeURI(a) : ma(a) : O
  }
  function jD(a, b, c) {
    return nu(a) ? (a = encodeURI(a)[v](b, rD), c && (a = a[v](/%25([0-9a-fA-F]{2})/g, Je)), a) : null
  }
  function rD(a) {
    a = a[vd](0);
    return Ie + (a >> 4 & 15)[Pb](16) + (a & 15)[Pb](16)
  }
  var kD = /[#\/\?@]/g,
    mD = /[\#\?:]/g,
    lD = /[\#\?]/g,
    pD = /[\#\?@]/g,
    nD = /#/g;

  function iD(a, b, c) {
    this.a = a || null;
    this.b = !! c
  }
  function sD(a) {
    a.da || (a.da = new lC, a.Na = 0, a.a && BC(a.a, function(b, c) {
      a.add(lv(b), c)
    }))
  }
  Q = iD[I];
  Q.da = null;
  Q.Na = null;
  Q.add = function(a, b) {
    sD(this);
    this.a = null;
    a = tD(this, a);
    var c = this.da.get(a);
    c || this.da.set(a, c = []);
    c[E](b);
    this.Na++;
    return this
  };
  sa(Q, function(a) {
    sD(this);
    a = tD(this, a);
    return nC(this.da, a) ? (this.a = null, this.Na -= this.da.get(a)[H], this.da[ub](a)) : !1
  });
  ua(Q, function() {
    this.da = this.a = null;
    this.Na = 0
  });

  function uD(a, b) {
    sD(a);
    b = tD(a, b);
    return nC(a.da, b)
  }
  Q.gb = function() {
    sD(this);
    for (var a = this.da.Ja(), b = this.da.gb(), c = [], d = 0; d < b[H]; d++) for (var e = a[d], g = 0; g < e[H]; g++) c[E](b[d]);
    return c
  };
  Q.Ja = function(a) {
    sD(this);
    var b = [];
    if (nu(a)) uD(this, a) && (b = Ov(b, this.da.get(tD(this, a))));
    else {
      a = this.da.Ja();
      for (var c = 0; c < a[H]; c++) b = Ov(b, a[c])
    }
    return b
  };
  Q.set = function(a, b) {
    sD(this);
    this.a = null;
    a = tD(this, a);
    uD(this, a) && (this.Na -= this.da.get(a)[H]);
    this.da.set(a, [b]);
    this.Na++;
    return this
  };
  Q.get = function(a, b) {
    var c = a ? this.Ja(a) : [];
    return 0 < c[H] ? p(c[0]) : b
  };

  function vD(a, b, c) {
    a[ub](b);
    0 < c[H] && (a.a = null, a.da.set(tD(a, b), Pv(c)), a.Na += c[H])
  }
  va(Q, function() {
    if (this.a) return this.a;
    if (!this.da) return O;
    for (var a = [], b = this.da.gb(), c = 0; c < b[H]; c++) for (var d = b[c], e = kv(d), d = this.Ja(d), g = 0; g < d[H]; g++) {
      var h = e;
      d[g] !== O && (h += ui + kv(d[g]));
      a[E](h)
    }
    return this.a = a[N](Ke)
  });
  za(Q, function() {
    var a = new iD;
    a.a = this.a;
    this.da && (a.da = this.da[gc](), a.Na = this.Na);
    return a
  });

  function tD(a, b) {
    var c = p(b);
    a.b && (c = c[Cd]());
    return c
  }
  function oD(a, b) {
    b && !a.b && (sD(a), a.a = null, a.da[Bb](function(a, b) {
      var e = b[Cd]();
      b != e && (this[ub](b), vD(this, e, a))
    }, a));
    a.b = b
  }
  Q.$i = function(a) {
    for (var b = 0; b < arguments[H]; b++) qC(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  };

  function wD(a, b) {
    lu(b) || (b = [b]);
    var c = Iv(b, function(a) {
      return nu(a) ? a : a.uk + P + a[nd] + Jr + a.timing + P + a.Pa + Ir
    });
    jy(a, Xs, c[N](nf))
  }
  var xD = function(a) {
    var b = !1,
      c;
    return function() {
      b || (c = a(), b = !0);
      return c
    }
  }(function() {
    if (V) return X(hg);
    var a = k[xb](bn),
      b = W ? Sf : Qw ? Jf : V ? Kf : Pw ? Lf : null,
      c = {
        transition: Eq
      };
    b && (c[b + Qf] = Eq);
    b = Gw(bn, {
      style: c
    });
    La(a, zw(b));
    a = a[y];
    b = a[B][Bv(Xs)];
    return ("undefined" !== typeof b ? b : a[B][ky(a, Xs)] || O) != O
  });

  function yD(a, b, c, d, e) {
    xA[L](this);
    this.n = a;
    this.l = b;
    this.k = c;
    this.b = d;
    this.A = lu(e) ? e : [e]
  }
  U(yD, xA);
  Q = yD[I];
  Q.Ab = function() {
    if (1 == this.a) return !1;
    this.d();
    this.Ta($q);
    this.e = xu();
    this.a = 1;
    if (xD()) return jy(this.n, this.k), this.g = fA(this.Si, void 0, this), !0;
    this.$e(!1);
    return !1
  };
  Q.Si = function() {
    wy(this.n);
    wD(this.n, this.A);
    jy(this.n, this.b);
    this.g = fA(S(this.$e, this, !1), 1E3 * this.l)
  };
  Va(Q, function() {
    1 == this.a && this.$e(!0)
  });
  Q.$e = function(a) {
    jy(this.n, Xs, O);
    gA(this.g);
    jy(this.n, this.b);
    this.p = xu();
    this.a = 0;
    a ? this.Bb() : this.Ta(Hn);
    this.f()
  };
  Q.B = function() {
    this[ed]();
    yD.j.B[L](this)
  };

  function zD(a, b, c) {
    this.d = a;
    this.e = b;
    this.p = c
  }
  U(zD, LB);
  zD[I].b = function(a, b, c) {
    HB(this.d, this.e, a, b, void 0, c, this.p)
  };

  function AD(a, b) {
    this.a = a instanceof Iw ? a : new Iw(a, b)
  }
  U(AD, LB);
  AD[I].b = function(a, b, c, d) {
    HB(qy(a), 0, a, b, this.a, c, null, d)
  };

  function BD(a, b, c, d) {
    zD[L](this, a, b);
    this.l = c ? 5 : 0;
    this.f = d || void 0
  }
  U(BD, zD);
  BD[I].g = cu(Hp);
  BD[I].b = function(a, b, c, d) {
    var e = HB(this.d, this.e, a, b, null, c, 10, d, this.f);
    if (e & 496) {
      var g = CD(e, this.e);
      b = CD(e, b);
      e = HB(this.d, g, a, b, null, c, 10, d, this.f);
      e & 496 && (g = CD(e, g), b = CD(e, b), HB(this.d, g, a, b, null, c, this.l, d, this.f))
    }
  };

  function CD(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
  };

  function DD(a, b) {
    this.a = a instanceof Iw ? a : new Iw(a, b)
  }
  U(DD, LB);
  DD[I].b = function(a, b, c, d) {
    var e;
    e = ix(a);
    var g = e[J];
    e = e[Mb];
    e = new Iw(g[nc] || e[nc], g[dd] || e[dd]);
    g = this.a.x + e.x;
    e = this.a.y + e.y;
    var h = IB(a),
      g = g - h.x;
    e -= h.y;
    KB(new Iw(g, e), a, b, c, null, null, d)
  };

  function ED(a, b) {
    DD[L](this, a, b)
  }
  U(ED, DD);
  ED[I].d = 0;
  ED[I].g = cu("d");
  ED[I].b = function(a, b, c, d) {
    var e = qy(a),
      e = ty(e),
      g;
    g = gx(a);
    g = rx(g.a);
    g = new Iw(this.a.x + g[nc], this.a.y + g[dd]);
    var h = b,
      n = KB(g, a, h, c, e, 10, d);
    if (0 != (n & 496)) {
      if (n & 16 || n & 32) h ^= 2;
      if (n & 64 || n & 128) h ^= 1;
      n = KB(g, a, h, c, e, 10, d);
      0 != (n & 496) && KB(g, a, b, c, e, this.d, d)
    }
  };

  function FD(a, b) {
    this.p = b || void 0;
    hA[L](this, a)
  }
  U(FD, hA);
  FD[I].ob = function() {
    if (this.p) {
      var a = !this.K() && this.uc != iq,
        b = this.h();
      a && (Ua(b[B], Io), yy(b, !0));
      this.p.b(b, 4, this.cf);
      a && yy(b, !1)
    }
  };

  function GD(a, b, c) {
    this.Fa = c || (a ? gx(jx(k, a)) : gx());
    FD[L](this, this.Fa.t(bn, {
      style: br
    }));
    this.Gc = new Iw(1, 1);
    this.A = new rC;
    a && HD(this, a);
    null != b && this.Sa(b)
  }
  U(GD, FD);
  var ID = [];
  Q = GD[I];
  Q.za = null;
  $a(Q, "goog-tooltip");
  Q.df = 500;
  Q.ff = 0;

  function HD(a, b) {
    b = jx(k, b);
    a.A.add(b);
    jz(b, gq, a.ag, !1, a);
    jz(b, fq, a.Dc, !1, a);
    jz(b, eq, a.Jh, !1, a);
    jz(b, Nn, a.Ih, !1, a);
    jz(b, Pl, a.Dc, !1, a)
  }
  function JD(a, b) {
    if (b) {
      var c = jx(k, b);
      KD(a, c);
      a.A[ub](c)
    } else {
      for (var d = a.A.Ja(), e = 0; c = d[e]; e++) KD(a, c);
      a.A[Eb]()
    }
  }

  function KD(a, b) {
    rz(b, gq, a.ag, !1, a);
    rz(b, fq, a.Dc, !1, a);
    rz(b, eq, a.Jh, !1, a);
    rz(b, Nn, a.Ih, !1, a);
    rz(b, Pl, a.Dc, !1, a)
  }
  Q.Sa = function(a) {
    Ox(this.h(), a)
  };
  Q.nc = function(a) {
    var b = this.h();
    b && Dx(b);
    GD.j.nc[L](this, a);
    a && (b = this.Fa.a[J], b[pb](a, b[ic]))
  };
  Q.pa = function() {
    return Vx(this.h())
  };

  function LD(a) {
    return a.C ? a.K() ? 4 : 1 : a.T ? 3 : a.K() ? 2 : 0
  }
  Q.tf = function() {
    if (!hA[I].tf[L](this)) return !1;
    if (this.a) for (var a, b = 0; a = ID[b]; b++) Hx(a.h(), this.a) || a.F(!1);
    Mv(ID, this) || ID[E](this);
    a = this.h();
    $a(a, this[id]);
    MD(this);
    jz(a, gq, this.ce, !1, this);
    jz(a, fq, this.ae, !1, this);
    ND(this);
    return !0
  };
  Q.zf = function() {
    Nv(ID, this);
    for (var a = this.h(), b, c = 0; b = ID[c]; c++) b.a && Hx(a, b.a) && b.F(!1);
    this.mh && OD(this.mh);
    rz(a, gq, this.ce, !1, this);
    rz(a, fq, this.ae, !1, this);
    this.a = void 0;
    0 == LD(this) && (this.Ga = !1);
    hA[I].zf[L](this)
  };
  Q.Of = function(a, b) {
    this.a == a && this.A[qc](this.a) && (this.Ga || !this.$j ? (this.F(!1), this.K() || (this.a = a, this.p = b || PD(this, 0) || void 0, this.K() && this.ob(), this.F(!0))) : this.a = void 0);
    this.C = void 0
  };
  Q.rj = function(a) {
    this.T = void 0;
    a == this.a && (null != this.za && (this.za == this.h() || this.A[qc](this.za)) || this.ih && this.ih.za || this.F(!1))
  };

  function QD(a, b) {
    var c = qx(a.Fa.a);
    a.Gc.x = b[bd] + c.x;
    a.Gc.y = b[cd] + c.y
  }
  Q.ag = function(a) {
    var b = RD(this, a[K]);
    this.za = b;
    MD(this);
    b != this.a && (this.a = b, SD(this, b), TD(this), QD(this, a))
  };

  function RD(a, b) {
    try {
      for (; b && !a.A[qc](b);) b = b[M];
      return b
    } catch (c) {
      return null
    }
  }
  Q.Jh = function(a) {
    QD(this, a);
    this.Ga = !0
  };
  Q.Ih = function(a) {
    this.za = a = RD(this, a[K]);
    this.Ga = !0;
    if (this.a != a) {
      this.a = a;
      var b = PD(this, 1);
      MD(this);
      SD(this, a, b);
      TD(this)
    }
  };

  function PD(a, b) {
    if (0 == b) {
      var c = a.Gc[gc]();
      return new UD(c)
    }
    return new VD(a.za)
  }
  function TD(a) {
    if (a.a) for (var b, c = 0; b = ID[c]; c++) Hx(b.h(), a.a) && (b.ih = a, a.mh = b)
  }
  Q.Dc = function(a) {
    var b = RD(this, a[K]),
      c = RD(this, a.d);
    b != c && (b == this.za && (this.za = null), ND(this), this.Ga = !1, !this.K() || a.d && Hx(this.h(), a.d) ? this.a = void 0 : OD(this))
  };
  Q.ce = function() {
    var a = this.h();
    this.za != a && (MD(this), this.za = a)
  };
  Q.ae = function(a) {
    var b = this.h();
    this.za != b || a.d && Hx(b, a.d) || (this.za = null, OD(this))
  };

  function SD(a, b, c) {
    a.C || (a.C = fA(S(a.Of, a, b, c), a.df))
  }
  function ND(a) {
    a.C && (gA(a.C), a.C = void 0)
  }
  function OD(a) {
    2 == LD(a) && (a.T = fA(S(a.rj, a, a.a), a.ff))
  }

  function MD(a) {
    a.T && (gA(a.T), a.T = void 0)
  }
  Q.B = function() {
    this.F(!1);
    ND(this);
    JD(this);
    this.h() && Dx(this.h());
    this.za = null;
    delete this.Fa;
    GD.j.B[L](this)
  };

  function UD(a, b) {
    AD[L](this, a, b)
  }
  U(UD, AD);
  UD[I].b = function(a, b, c) {
    b = qy(a);
    b = ty(b);
    c = c ? new hy(c.top + 10, c[Ac], c[C], c[G] + 10) : new hy(10, 0, 0, 10);
    KB(this.a, a, 4, c, b, 9) & 496 && KB(this.a, a, 4, c, b, 5)
  };

  function VD(a) {
    zD[L](this, a, 3)
  }
  U(VD, zD);
  VD[I].b = function(a, b, c) {
    var d = new Iw(10, 0);
    HB(this.d, this.e, a, b, d, c, 9) & 496 && HB(this.d, 2, a, 1, d, c, 5)
  };

  function WD(a, b) {
    a[b] || (a[b] = []);
    return a[b]
  }
  function XD(a, b) {
    return a[b] ? a[b][H] : 0
  }
  function YD(a, b) {
    if (null == a || null == b) return null == a == (null == b);
    if (a[Xb] != fa && a[Xb] != aa) throw "Invalid object type passed into JsProto.areObjectsEqual()";
    if (a === b) return !0;
    if (a[Xb] != b[Xb]) return !1;
    for (var c in a) if (!(c in b && ZD(a[c], b[c]))) return !1;
    for (var d in b) if (!(d in a)) return !1;
    return !0
  }

  function ZD(a, b) {
    if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
    if (a instanceof aa && b instanceof aa) {
      if (!YD(a, b)) return !1
    } else return !1;
    return !0
  };

  function $D(a) {
    this.a = a || []
  }
  function aE(a) {
    this.a = a || []
  }
  function bE(a) {
    this.a = a || []
  }
  function cE(a) {
    this.a = a || []
  }
  function dE(a) {
    this.a = a || []
  }
  function eE(a) {
    this.a = a || []
  }
  function fE(a) {
    a = a.a[0];
    return null != a ? a : O
  }
  function gE(a) {
    a = a.a[4];
    return null != a ? a : O
  }
  function hE(a) {
    return XD(a.a, 2)
  }
  function iE(a, b) {
    return new aE(WD(a.a, 2)[b])
  }
  function jE(a, b) {
    return new bE(WD(a.a, 3)[b])
  }
  function kE(a) {
    a = a.a[0];
    return null != a ? a : O
  }
  function lE(a) {
    a = a.a[1];
    return null != a ? a : 0
  }

  function mE(a) {
    a = a.a[2];
    return null != a ? a : !1
  }
  function nE(a) {
    a = a.a[3];
    return null != a ? a : !1
  }
  function oE(a) {
    a = a.a[0];
    return null != a ? a : 0
  }
  function pE(a) {
    a = a.a[1];
    return null != a ? a : 0
  }
  function qE(a) {
    a = a.a[0];
    return null != a ? a : O
  }
  function rE(a) {
    return XD(a.a, 5)
  }
  function sE(a, b) {
    return new $D(WD(a.a, 5)[b])
  }
  function tE(a, b) {
    return new dE(WD(a.a, 0)[b])
  };

  function uE() {
    this.b = [];
    this.a = {};
    this.e = !1;
    this.g = 1;
    this.f = {};
    this.d = null;
    jz(f, Ll, this.qi, !1, this)
  }
  ju(uE);

  function vE(a, b) {
    if (null == b) return eg;
    switch (ku(b)) {
      case ds:
        return kv(b);
      case xq:
        return O + b;
      case Sl:
        return b ? eg : ag;
      case wl:
        var c = [],
          d;
        for (d in b) c[E](vE(a, b[d]));
        return c[N](nf);
      case zq:
        c = [];
        for (d in b) c[E]([kv(d), vE(a, b[d])][N](ui));
        return c[N](nf);
      default:
        return O
    }
  }
  Q = uE[I];
  Q.log = function(a, b, c) {
    this.b[E]([a, b, c]);
    this.e || (this.e = !0, fA(this.Wg, 0, this))
  };
  Q.Wg = function() {
    for (var a = 0; a < this.b[H]; a++) {
      var b = this.b[a];
      wE(this, b[0], b[1], b[2])
    }
    this.b = [];
    this.e = !1
  };

  function wE(a, b, c, d) {
    var e = a.d ? [wm, a.d, Ke][N](O) : O;
    xE(a, (d || O) + Zf + e + [kv(b), vE(a, c)][N](ui))
  }
  function xE(a, b) {
    var c = new Image,
      d = a.g++;
    a.f[d] = c;
    na(c, Ma(c, function() {
      delete uE.ia().f[d]
    }));
    c.src = b;
    c = null
  }
  Q.Qd = function(a, b, c, d, e) {
    yE(this, a, d, e);
    gA(this.a[a][0]);
    b = fA(S(this.qh, this, a, c), b);
    this.a[a][0] = b
  };
  Q.qh = function(a, b) {
    wE(this, a, this.a[a][1], b);
    a in this.a && (gA(this.a[a][0]), delete this.a[a])
  };

  function yE(a, b, c, d) {
    var e = 0,
      g = null;
    b in a.a && (g = a.a[b], e = g[0], g = g[1]);
    if (ku(c) == zq) {
      ku(g) != zq && (g = {});
      for (var h in c) g[h] = zE(h in g ? g[h] : null, c[h], d)
    } else g = zE(g, c, d);
    a.a[b] = [e, g]
  }
  function zE(a, b, c) {
    null != b || (b = 1);
    c == Fk ? (ea(a) && (a = ka(a, 10)), ea(b) && (b = ka(b, 10)), a += b) : a = b;
    return a
  }
  Q.qi = function() {
    this.Wg();
    for (var a in this.a) 0 != this.a[a] && this.qh(a)
  };

  function AE() {
    My[L](this)
  }
  U(AE, My);
  Da(AE[I], function(a) {
    var b = this.b();
    a || this.H();
    return b
  });

  function BE(a, b, c, d, e) {
    this.b = !! b;
    a && CE(this, a, d);
    this.a = void 0 != e ? e : this.$ || 0;
    this.b && (this.a *= -1);
    this.d = !c
  }
  U(BE, iC);
  Q = BE[I];
  Q.s = null;
  Q.$ = 0;
  Q.Rd = !1;

  function CE(a, b, c, d) {
    if (a.s = b) a.$ = ou(c) ? c : 1 != a.s[F] ? 0 : a.b ? -1 : 1;
    ou(d) && (a.a = d)
  }
  Q.yb = function(a) {
    this.s = a.s;
    this.$ = a.$;
    this.a = a.a;
    this.b = a.b;
    this.d = a.d
  };
  za(Q, function() {
    return new BE(this.s, this.b, !this.d, this.$, this.a)
  });
  Q.zb = function() {
    var a = this.b ? -1 : 1;
    this.$ == a && (this.$ = -1 * a, this.a += this.$ * (this.b ? -1 : 1))
  };
  ya(Q, function() {
    var a;
    if (this.Rd) {
      if (!this.s || this.d && 0 == this.a) throw hC;
      a = this.s;
      var b = this.b ? -1 : 1;
      if (this.$ == b) {
        var c = this.b ? a[ic] : a[y];
        c ? CE(this, c) : CE(this, a, -1 * b)
      } else(c = this.b ? a[Ob] : a[Ib]) ? CE(this, c) : CE(this, a[M], -1 * b);
      this.a += this.$ * (this.b ? -1 : 1)
    } else this.Rd = !0;
    a = this.s;
    if (!this.s) throw hC;
    return a
  });
  Q.splice = function(a) {
    var b = this.s,
      c = this.b ? 1 : -1;
    this.$ == c && (this.$ = -1 * c, this.a += this.$ * (this.b ? -1 : 1));
    this.b = !this.b;
    BE[I][Vb][L](this);
    this.b = !this.b;
    for (var c = mu(arguments[0]) ? arguments[0] : arguments, d = c[H] - 1; 0 <= d; d--) Cx(c[d], b);
    Dx(b)
  };

  function DE() {}
  function EE(a) {
    if (a.getSelection) return a.getSelection();
    a = a[ld];
    var b = a.selection;
    if (b) {
      try {
        var c = b[Sc]();
        if (c[Wc]) {
          if (c[Wc]()[ld] != a) return null
        } else if (!c[H] || c[Kc](0)[ld] != a) return null
      } catch (d) {
        return null
      }
      return b
    }
    return null
  }
  function FE(a) {
    for (var b = [], c = 0, d = a.nd(); c < d; c++) b[E](a.vc(c));
    return b
  }
  function GE(a) {
    return a.Zc() ? a.Ea() : a.Wa()
  }
  function HE(a) {
    return a.Zc() ? a.Da() : a.Va()
  }
  DE[I].Zc = eu(!1);

  function IE(a, b) {
    BE[L](this, a, b, !0)
  }
  U(IE, BE);

  function JE() {}
  U(JE, DE);

  function KE(a, b, c, d, e) {
    var g;
    a && (this.N = a, this.qd = b, this.O = c, this.Cc = d, 1 == a[F] && a[sc] != Hi && (a = a[Fb], (b = a[b]) ? (this.N = b, this.qd = 0) : (a[H] && (this.N = Dv(a)), g = !0)), 1 == c[F] && ((this.O = c[Fb][d]) ? this.Cc = 0 : this.O = c));
    BE[L](this, e ? this.O : this.N, e, !0);
    if (g) try {
      this[Vb]()
    } catch (h) {
      if (h != hC) throw h;
    }
  }
  U(KE, IE);
  Q = KE[I];
  Q.N = null;
  Q.O = null;
  Q.qd = 0;
  Q.Cc = 0;
  Q.Ge = du("N");
  Q.ed = function() {
    return this.Rd && this.s == this.O && (!this.Cc || 1 != this.$)
  };
  ya(Q, function() {
    if (this.ed()) throw hC;
    return KE.j[Vb][L](this)
  });
  Q.zb = function() {
    KE.j.zb[rc](this);
    if (Hx(this.s, this.O)) throw hC;
  };
  Q.yb = function(a) {
    this.N = a.N;
    this.O = a.O;
    this.qd = a.qd;
    this.Cc = a.Cc;
    this.ib = a.ib;
    KE.j.yb[L](this, a)
  };
  za(Q, function() {
    var a = new KE(this.N, this.qd, this.O, this.Cc, this.ib);
    a.yb(this);
    return a
  });

  function LE() {}
  function ME(a, b) {
    var c = b.sd();
    try {
      return 0 <= a.jb(c, 0, 0) && 0 >= a.jb(c, 1, 1)
    } catch (d) {
      if (!V) throw d;
      return !1
    }
  }
  LE[I].Ma = function() {
    return new KE(this.$a(), this.xb(), this.wb(), this.Kb())
  };

  function NE(a) {
    this.J = a
  }
  U(NE, LE);

  function OE(a) {
    var b = ix(a)[Sc]();
    if (3 == a[F]) b[fd](a, 0), b[qb](a, a[H]);
    else if (PE(a)) {
      for (var c, d = a;
      (c = d[y]) && PE(c);) d = c;
      b[fd](d, 0);
      for (d = a;
      (c = d[ic]) && PE(c);) d = c;
      b[qb](d, 1 == d[F] ? d[Fb][H] : d[H])
    } else c = a[M], a = Fv(c[Fb], a), b[fd](c, a), b[qb](c, a + 1);
    return b
  }
  function QE(a, b, c, d) {
    var e = ix(a)[Sc]();
    e[fd](a, b);
    e[qb](c, d);
    return e
  }
  Q = NE[I];
  za(Q, function() {
    return new this[Xb](this.J.cloneRange())
  });
  Q.sd = du("J");
  Q.bg = function() {
    return this.J.commonAncestorContainer
  };
  Q.$a = function() {
    return this.J.startContainer
  };
  Q.xb = function() {
    return this.J.startOffset
  };
  Q.wb = function() {
    return this.J.endContainer
  };
  Q.Kb = function() {
    return this.J.endOffset
  };
  Q.jb = function(a, b, c) {
    return this.J.compareBoundaryPoints(1 == c ? 1 == b ? R[yc].START_TO_START : R[yc].START_TO_END : 1 == b ? R[yc].END_TO_START : R[yc].END_TO_END, a)
  };
  Q.Za = function() {
    return this.J.collapsed
  };
  Q.pa = function() {
    return this.J[Pb]()
  };
  ta(Q, function(a) {
    var b = sx(ix(this.$a()));
    this.rd(b.getSelection(), a)
  });
  Q.rd = function(a) {
    a.removeAllRanges();
    a.addRange(this.J)
  };

  function RE(a) {
    this.J = a
  }
  U(RE, NE);
  RE[I].rd = function(a, b) {
    if (!b || this.Za()) RE.j.rd[L](this, a, b);
    else a[ib](this.wb(), this.Kb()), a.extend(this.$a(), this.xb())
  };

  function SE(a, b) {
    this.J = a;
    this.a = b
  }
  U(SE, LE);

  function TE(a) {
    var b = ix(a)[J].createTextRange();
    if (1 == a[F]) b.moveToElementText(a), PE(a) && !a[Fb][H] && b[ib](!1);
    else {
      for (var c = 0, d = a; d = d[Ob];) {
        var e = d[F];
        if (3 == e) c += d[H];
        else if (1 == e) {
          b.moveToElementText(d);
          break
        }
      }
      d || b.moveToElementText(a[M]);
      b[ib](!d);
      c && b.move(om, c);
      b.moveEnd(om, a[H])
    }
    return b
  }
  Q = SE[I];
  Q.tb = null;
  Q.N = null;
  Q.O = null;
  Q.ab = -1;
  Q.kb = -1;
  za(Q, function() {
    var a = new SE(this.J.duplicate(), this.a);
    a.tb = this.tb;
    a.N = this.N;
    a.O = this.O;
    return a
  });
  Q.sd = du("J");
  Q.bg = function() {
    if (!this.tb) {
      var a = this.J[Ec],
        b = this.J.duplicate(),
        c = a[v](/ +$/, O);
      (c = a[H] - c[H]) && b.moveEnd(om, -c);
      c = b[Wc]();
      b = b.htmlText[v](/(\r\n|\r|\n)+/g, P)[H];
      if (this.Za() && 0 < b) return this.tb = c;
      for (; b > c.outerHTML[v](/(\r\n|\r|\n)+/g, P)[H];) c = c[M];
      for (; 1 == c[Fb][H] && c[gd] == UE(c[y]) && PE(c[y]);) c = c[y];
      0 == a[H] && (c = VE(this, c));
      this.tb = c
    }
    return this.tb
  };

  function VE(a, b) {
    for (var c = b[Fb], d = 0, e = c[H]; d < e; d++) {
      var g = c[d];
      if (PE(g)) {
        var h = TE(g),
          n = h.htmlText != g.outerHTML;
        if (a.Za() && n ? 0 <= a.jb(h, 1, 1) && 0 >= a.jb(h, 1, 0) : a.J.inRange(h)) return VE(a, g)
      }
    }
    return b
  }
  Q.$a = function() {
    this.N || (this.N = WE(this, 1), this.Za() && (this.O = this.N));
    return this.N
  };
  Q.xb = function() {
    0 > this.ab && (this.ab = XE(this, 1), this.Za() && (this.kb = this.ab));
    return this.ab
  };
  Q.wb = function() {
    if (this.Za()) return this.$a();
    this.O || (this.O = WE(this, 0));
    return this.O
  };
  Q.Kb = function() {
    if (this.Za()) return this.xb();
    0 > this.kb && (this.kb = XE(this, 0), this.Za() && (this.ab = this.kb));
    return this.kb
  };
  Q.jb = function(a, b, c) {
    return this.J.compareEndPoints((1 == b ? Hj : Ti) + Qj + (1 == c ? Hj : Ti), a)
  };

  function WE(a, b, c) {
    c = c || a.bg();
    if (!c || !c[y]) return c;
    for (var d = 1 == b, e = 0, g = c[Fb][H]; e < g; e++) {
      var h = d ? e : g - e - 1,
        n = c[Fb][h],
        q;
      try {
        q = YE(n)
      } catch (t) {
        continue
      }
      var w = q.sd();
      if (a.Za()) if (!PE(n)) {
        if (0 == a.jb(w, 1, 1)) {
          a.ab = a.kb = h;
          break
        }
      } else {
        if (ME(q, a)) return WE(a, b, n)
      } else {
        if (ME(a, q)) {
          if (!PE(n)) {
            d ? a.ab = h : a.kb = h + 1;
            break
          }
          return WE(a, b, n)
        }
        if (0 > a.jb(w, 1, 0) && 0 < a.jb(w, 0, 1)) return WE(a, b, n)
      }
    }
    return c
  }

  function XE(a, b) {
    var c = 1 == b,
      d = c ? a.$a() : a.wb();
    if (1 == d[F]) {
      for (var d = d[Fb], e = d[H], g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
        var n = d[h];
        if (!PE(n) && 0 == a.J.compareEndPoints((1 == b ? Hj : Ti) + Qj + (1 == b ? Hj : Ti), YE(n).sd())) return c ? h : h + 1
      }
      return -1 == h ? 0 : h
    }
    e = a.J.duplicate();
    g = TE(d);
    e.setEndPoint(c ? Ui : Jj, g);
    e = e[Ec][H];
    return c ? d[H] - e : e
  }
  function UE(a) {
    return 3 == a[F] ? a[zc] : a[gd]
  }
  Q.Za = function() {
    return 0 == this.J.compareEndPoints(Ij, this.J)
  };
  Q.pa = function() {
    return this.J[Ec]
  };
  ta(Q, function() {
    this.J[Ab]()
  });

  function ZE(a) {
    this.J = a
  }
  U(ZE, NE);
  ZE[I].rd = function(a) {
    a[ib](this.$a(), this.xb());
    this.wb() == this.$a() && this.Kb() == this.xb() || a.extend(this.wb(), this.Kb());
    0 == a[Hb] && a.addRange(this.J)
  };

  function $E(a) {
    this.J = a
  }
  U($E, NE);
  $E[I].jb = function(a, b, c) {
    return X(Ah) ? $E.j.jb[L](this, a, b, c) : this.J.compareBoundaryPoints(1 == c ? 1 == b ? R[yc].START_TO_START : R[yc].END_TO_START : 1 == b ? R[yc].START_TO_END : R[yc].END_TO_END, a)
  };
  $E[I].rd = function(a, b) {
    a.removeAllRanges();
    b ? a.setBaseAndExtent(this.wb(), this.Kb(), this.$a(), this.xb()) : a.setBaseAndExtent(this.$a(), this.xb(), this.wb(), this.Kb())
  };

  function aF(a) {
    return fx ? new SE(a, ix(a[Wc]())) : W ? new $E(a) : Qw ? new RE(a) : Pw ? new ZE(a) : new NE(a)
  }
  function YE(a) {
    if (V && !$w(9)) {
      var b = new SE(TE(a), ix(a));
      if (PE(a)) {
        for (var c, d = a;
        (c = d[y]) && PE(c);) d = c;
        b.N = d;
        b.ab = 0;
        for (d = a;
        (c = d[ic]) && PE(c);) d = c;
        b.O = d;
        b.kb = 1 == d[F] ? d[Fb][H] : d[H];
        b.tb = a
      } else b.N = b.O = b.tb = a[M], b.ab = Fv(b.tb[Fb], a), b.kb = b.ab + 1;
      a = b
    } else a = W ? new $E(OE(a)) : Qw ? new RE(OE(a)) : Pw ? new ZE(OE(a)) : new NE(OE(a));
    return a
  }
  function PE(a) {
    return yx(a) || 3 == a[F]
  };

  function bF() {}
  U(bF, DE);

  function cF(a, b) {
    var c = new bF;
    c.Ec = a;
    c.ib = !! b;
    return c
  }
  function dF(a, b, c, d) {
    var e = new bF;
    e.ib = eF(a, b, c, d);
    if (qu(a) && 1 == a[F] && !yx(a)) {
      var g = a[M];
      b = Fv(g[Fb], a);
      a = g
    }
    qu(c) && 1 == c[F] && !yx(c) && (g = c[M], d = Fv(g[Fb], c), c = g);
    e.ib ? (e.N = c, e.gc = d, e.O = a, e.hc = b) : (e.N = a, e.gc = b, e.O = c, e.hc = d);
    return e
  }
  Q = bF[I];
  Q.Ec = null;
  Q.N = null;
  Q.gc = null;
  Q.O = null;
  Q.hc = null;
  Q.ib = !1;
  za(Q, function() {
    var a = new bF;
    a.Ec = this.Ec && this.Ec[gc]();
    a.N = this.N;
    a.gc = this.gc;
    a.O = this.O;
    a.hc = this.hc;
    a.ib = this.ib;
    return a
  });
  Q.$d = function() {
    return fF(this).sd()
  };
  Q.nd = eu(1);
  Q.vc = function() {
    return this
  };

  function fF(a) {
    var b;
    if (!(b = a.Ec)) {
      b = a.Ea();
      var c = a.Da(),
        d = a.Wa(),
        e = a.Va();
      if (V && !$w(9)) {
        var g = b,
          h = c,
          n = d,
          q = e,
          t = !1;
        1 == g[F] && (h = g[Fb][h], t = !h, g = h || g[ic] || g, h = 0);
        var w = TE(g);
        h && w.move(om, h);
        if (g == n && h == q) w[ib](!0);
        else t && w[ib](!1), t = !1, 1 == n[F] && (n = (h = n[Fb][q]) || n[ic] || n, q = 0, t = !h), g = TE(n), g[ib](!t), q && g.moveEnd(om, q), w.setEndPoint(Ui, g);
        q = new SE(w, ix(b));
        q.N = b;
        q.ab = c;
        q.O = d;
        q.kb = e;
        b = q
      } else b = W ? new $E(QE(b, c, d, e)) : Qw ? new RE(QE(b, c, d, e)) : Pw ? new ZE(QE(b, c, d, e)) : new NE(QE(b, c, d, e));
      b = a.Ec = b
    }
    return b
  }
  Q.xe = function() {
    return fF(this).bg()
  };
  Q.Ea = function() {
    return this.N || (this.N = fF(this).$a())
  };
  Q.Da = function() {
    return null != this.gc ? this.gc : this.gc = fF(this).xb()
  };
  Q.Wa = function() {
    return this.O || (this.O = fF(this).wb())
  };
  Q.Va = function() {
    return null != this.hc ? this.hc : this.hc = fF(this).Kb()
  };
  Q.Zc = du("ib");
  Q.oe = function() {
    return fF(this).Za()
  };
  Q.pa = function() {
    return fF(this).pa()
  };
  Q.Ma = function() {
    return new KE(this.Ea(), this.Da(), this.Wa(), this.Va())
  };
  ta(Q, function() {
    fF(this)[Ab](this.ib)
  });
  Q.Gf = function() {
    return new gF(this)
  };

  function gF(a) {
    My[L](this);
    this.a = a.Zc() ? a.Wa() : a.Ea();
    this.e = a.Zc() ? a.Va() : a.Da();
    this.d = GE(a);
    this.f = HE(a)
  }
  U(gF, AE);
  gF[I].b = function() {
    return dF(this.a, this.e, this.d, this.f)
  };
  gF[I].B = function() {
    gF.j.B[L](this);
    this.d = this.a = null
  };

  function hF() {}
  U(hF, JE);

  function iF(a) {
    var b = new hF;
    b.J = a;
    return b
  }
  function jF(a) {
    for (var b = ix(arguments[0])[J].createControlRange(), c = 0, d = arguments[H]; c < d; c++) b.addElement(arguments[c]);
    return iF(b)
  }
  Q = hF[I];
  Q.J = null;
  Q.Ee = null;
  Q.He = null;
  za(Q, function() {
    return jF[rc](this, kF(this))
  });
  Q.$d = function() {
    return this.J || k[J].createControlRange()
  };
  Q.nd = function() {
    return this.J ? this.J[H] : 0
  };
  Q.vc = function(a) {
    a = this.J[Kc](a);
    return cF(YE(a), void 0)
  };
  Q.xe = function() {
    return Lx[rc](null, kF(this))
  };
  Q.Ea = function() {
    return lF(this)[0]
  };
  Q.Da = eu(0);
  Q.Wa = function() {
    var a = lF(this),
      b = Dv(a);
    return Lv(a, function(a) {
      return Hx(a, b)
    })
  };
  Q.Va = function() {
    return this.Wa()[Fb][H]
  };

  function kF(a) {
    if (!a.Ee && (a.Ee = [], a.J)) for (var b = 0; b < a.J[H]; b++) a.Ee[E](a.J[Kc](b));
    return a.Ee
  }
  function lF(a) {
    a.He || (a.He = kF(a)[mb](), a.He.sort(function(a, c) {
      return a[Sb] - c[Sb]
    }));
    return a.He
  }
  Q.oe = function() {
    return !this.J || !this.J[H]
  };
  Q.pa = eu(O);
  Q.Ma = function() {
    return new mF(this)
  };
  ta(Q, function() {
    this.J && this.J[Ab]()
  });
  Q.Gf = function() {
    return new nF(this)
  };

  function nF(a) {
    this.a = kF(a)
  }
  U(nF, AE);
  nF[I].b = function() {
    for (var a = (this.a[H] ? ix(this.a[0]) : k)[J].createControlRange(), b = 0, c = this.a[H]; b < c; b++) a.addElement(this.a[b]);
    return iF(a)
  };
  nF[I].B = function() {
    nF.j.B[L](this);
    delete this.a
  };

  function mF(a) {
    a && (this.bc = lF(a), this.N = this.bc[eb](), this.O = Dv(this.bc) || this.N);
    BE[L](this, this.N, !1, !0)
  }
  U(mF, IE);
  Q = mF[I];
  Q.N = null;
  Q.O = null;
  Q.bc = null;
  Q.Ge = du("N");
  Q.ed = function() {
    return !this.a && !this.bc[H]
  };
  ya(Q, function() {
    if (this.ed()) throw hC;
    if (!this.a) {
      var a = this.bc[eb]();
      CE(this, a, 1, 1);
      return a
    }
    return mF.j[Vb][L](this)
  });
  Q.yb = function(a) {
    this.bc = a.bc;
    this.N = a.N;
    this.O = a.O;
    mF.j.yb[L](this, a)
  };
  za(Q, function() {
    var a = new mF(null);
    a.yb(this);
    return a
  });

  function oF() {
    this.a = [];
    this.b = [];
    this.e = this.d = null
  }
  U(oF, JE);

  function pF(a) {
    var b = new oF;
    b.b = a;
    b.a = Iv(a, function(a) {
      return a.$d()
    });
    return b
  }
  Q = oF[I];
  za(Q, function() {
    var a = new oF;
    a.a = Pv(this.a);
    return a
  });
  Q.$d = function() {
    return this.a[0]
  };
  Q.nd = function() {
    return this.a[H]
  };
  Q.vc = function(a) {
    this.b[a] || (this.b[a] = cF(aF(this.a[a]), void 0));
    return this.b[a]
  };
  Q.xe = function() {
    if (!this.e) {
      for (var a = [], b = 0, c = this.nd(); b < c; b++) a[E](this.vc(b).xe());
      this.e = Lx[rc](null, a)
    }
    return this.e
  };

  function qF(a) {
    a.d || (a.d = FE(a), a.d.sort(function(a, c) {
      var d = a.Ea(),
        e = a.Da(),
        g = c.Ea(),
        h = c.Da();
      return d == g && e == h ? 0 : eF(d, e, g, h) ? 1 : -1
    }));
    return a.d
  }
  Q.Ea = function() {
    return qF(this)[0].Ea()
  };
  Q.Da = function() {
    return qF(this)[0].Da()
  };
  Q.Wa = function() {
    return Dv(qF(this)).Wa()
  };
  Q.Va = function() {
    return Dv(qF(this)).Va()
  };
  Q.oe = function() {
    return 0 == this.a[H] || 1 == this.a[H] && this.vc(0).oe()
  };
  Q.pa = function() {
    return Iv(FE(this), function(a) {
      return a.pa()
    })[N](O)
  };
  Q.Ma = function() {
    return new rF(this)
  };
  ta(Q, function() {
    var a = EE(sx(ix(V ? this.xe() : this.Ea())));
    a.removeAllRanges();
    for (var b = 0, c = this.nd(); b < c; b++) a.addRange(this.vc(b).$d())
  });
  Q.Gf = function() {
    return new sF(this)
  };

  function sF(a) {
    this.a = Iv(FE(a), function(a) {
      return a.Gf()
    })
  }
  U(sF, AE);
  sF[I].b = function() {
    var a = Iv(this.a, function(a) {
      return a[pc]()
    });
    return pF(a)
  };
  sF[I].B = function() {
    sF.j.B[L](this);
    Gv(this.a, function(a) {
      a.H()
    });
    delete this.a
  };

  function rF(a) {
    a && (this.ac = Iv(qF(a), function(a) {
      return jC(a)
    }));
    BE[L](this, a ? this.Ge() : null, !1, !0)
  }
  U(rF, IE);
  Q = rF[I];
  Q.ac = null;
  Q.ge = 0;
  Q.Ge = function() {
    return this.ac[0].Ge()
  };
  Q.ed = function() {
    return this.ac[this.ge].ed()
  };
  ya(Q, function() {
    try {
      var a = this.ac[this.ge],
        b = a[Vb]();
      CE(this, a.s, a.$, a.a);
      return b
    } catch (c) {
      if (c !== hC || this.ac[H] - 1 == this.ge) throw c;
      this.ge++;
      return this[Vb]()
    }
  });
  Q.yb = function(a) {
    this.ac = Pv(a.ac);
    rF.j.yb[L](this, a)
  };
  za(Q, function() {
    var a = new rF(null);
    a.yb(this);
    return a
  });

  function tF() {
    var a = EE(f);
    return a && uF(a)
  }
  function uF(a) {
    var b, c = !1;
    if (a[Sc]) try {
      b = a[Sc]()
    } catch (d) {
      return null
    } else if (a[Hb]) {
      if (1 < a[Hb]) {
        c = new oF;
        b = 0;
        for (var e = a[Hb]; b < e; b++) c.a[E](a.getRangeAt(b));
        return c
      }
      b = a.getRangeAt(0);
      c = eF(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else return null;
    return (a = b) && a.addElement ? iF(a) : cF(aF(a), c)
  }
  function vF(a) {
    return cF(YE(a), void 0)
  }

  function eF(a, b, c, d) {
    if (a == c) return d < b;
    var e;
    if (1 == a[F] && b) if (e = a[Fb][b]) a = e, b = 0;
    else if (Hx(a, c)) return !0;
    if (1 == c[F] && d) if (e = c[Fb][d]) c = e, d = 0;
    else if (Hx(c, a)) return !1;
    return 0 < (Ix(a, c) || b - d)
  };

  function wF(a) {
    this.a = a
  }
  ju(wF);

  function xF(a, b) {
    a && Ra(a, b ? 0 : -1)
  }
  Q = wF[I];
  Q.t = function(a) {
    return a.a.t(bn, yF(this, a)[N](P))
  };
  Q.Zf = function(a) {
    return a[sc] == Qi
  };

  function zF(a, b, c) {
    c.id && LA(b, c.id);
    var d = a.Q(),
      e = !1,
      g = lA(c);
    g && Gv(g, function(a) {
      a == d ? e = !0 : a && (a == d + Cf ? b.na(!1) : a == d + Gf ? AF(b, Mo) : a == d + Rf && AF(b, wt))
    }, a);
    e || nA(c, d);
    BF(a, b, c);
    return c
  }

  function BF(a, b, c) {
    if (c) for (var d = c[y], e; d && d[M] == c;) {
      e = d[Ib];
      if (1 == d[F]) {
        var g = a.Uf(d);
        g && (g.n = d, b[jc]() || g.na(!1), b.fd(g), RA(g, d))
      } else d[zc] && hv(d[zc]) != O || c[qd](d);
      d = e
    }
  }
  Q.Uf = function(a) {
    t: {
      var b;
      a = lA(a);
      for (var c = 0, d = a[H]; c < d; c++) if (b = a[c], b = b in tB ? tB[b]() : null) {
        a = b;
        break t
      }
      a = null
    }
    return a
  };
  Q.Mf = function(a) {
    a = a.h();
    Cy(a, !0, Qw);
    V && (a.hideFocus = !0);
    var b = this.a;
    b && fB(a, b)
  };
  Q.Q = eu("goog-container");

  function yF(a, b) {
    var c = a.Q(),
      d = [c, b.$b == Mo ? c + Gf : c + Rf];
    b[jc]() || d[E](c + Cf);
    return d
  };

  function CF() {}
  U(CF, hB);
  ju(CF);
  CF[I].t = function(a) {
    return a.a.t(bn, this.Q())
  };
  CF[I].Ia = function(a, b) {
    b.id && LA(a, b.id);
    if (b[sc] == aj) {
      var c = b;
      b = this.t(a);
      Bx(b, c);
      Dx(c)
    } else nA(b, this.Q());
    return b
  };
  CF[I].hd = bu();
  CF[I].Q = eu(go);

  function DF(a, b) {
    vB[L](this, null, a || CF.ia(), b);
    this.qa(1, !1);
    this.qa(2, !1);
    this.qa(4, !1);
    this.qa(32, !1);
    this.Z = 1
  }
  U(DF, vB);
  DF[I].M = function() {
    DF.j.M[L](this);
    fB(this.h(), Pr)
  };
  sB(go, function() {
    return new DF
  });

  function EF(a) {
    this.a = a || Yp
  }
  U(EF, wF);
  ju(EF);
  Q = EF[I];
  Q.Zf = function(a) {
    return a[sc] == Tj || EF.j.Zf[L](this, a)
  };
  Q.Uf = function(a) {
    return a[sc] == aj ? new DF : EF.j.Uf[L](this, a)
  };
  Q.ud = function(a, b) {
    return Hx(a.h(), b)
  };
  Q.Q = eu(bo);
  Q.Mf = function(a) {
    EF.j.Mf[L](this, a);
    gB(a.h(), Fo, at)
  };

  function FF(a, b, c) {
    HA[L](this, c);
    this.rb = b || wF.ia();
    this.$b = a || wt
  }
  U(FF, HA);
  Q = FF[I];
  Q.xc = null;
  Q.od = null;
  Q.rb = null;
  Q.$b = null;
  Q.ga = !0;
  Q.fc = !0;
  Q.Wb = !0;
  Q.ma = -1;
  Q.la = null;
  Q.Ac = !1;
  Q.vb = null;

  function GF(a) {
    return a.xc || a.h()
  }
  function HF(a, b) {
    if (a.Wb) {
      var c = GF(a),
        d = a.R;
      a.xc = b;
      var e = GF(a);
      d && (a.xc = c, IF(a, !1), a.xc = b, YA(JF(a), e), IF(a, !0))
    } else throw m("Can't set key event target for container that doesn't support keyboard focus!");
  }
  function JF(a) {
    return a.od || (a.od = new XA(GF(a)))
  }
  Q.t = function() {
    this.n = this.rb.t(this)
  };
  Q.qe = function() {
    return this.h()
  };
  Q.Df = function(a) {
    return this.rb.Zf(a)
  };
  Q.W = function(a) {
    this.n = zF(this.rb, this, a);
    a[B][vc] == sq && (this.ga = !1)
  };
  Q.M = function() {
    FF.j.M[L](this);
    SA(this, function(a) {
      a.R && KF(this, a)
    }, this);
    var a = this.h();
    this.rb.Mf(this);
    this.F(this.ga, !0);
    NA(this).m(this, un, this.Lf).m(this, Ko, this.Tc).m(this, kt, this.wf).m(this, Fq, this.Aj).m(this, Gm, this.yj).m(a, dq, this.wj).m(ix(a), hq, this.zj).m(a, [dq, hq, gq, fq, Pm], this.xj);
    this.Wb && IF(this, !0)
  };

  function IF(a, b) {
    var c = NA(a),
      d = GF(a);
    b ? c.m(d, Nn, a.Fh).m(d, Pl, a.ze).m(JF(a), Cp, a.Ca) : c.U(d, Nn, a.Fh).U(d, Pl, a.ze).U(JF(a), Cp, a.Ca)
  }
  Q.V = function() {
    this.Fb(-1);
    this.la && CB(this.la, !1);
    this.Ac = !1;
    FF.j.V[L](this)
  };
  Q.B = function() {
    FF.j.B[L](this);
    this.od && (this.od.H(), this.od = null);
    this.rb = this.la = this.vb = this.xc = null
  };
  Q.Lf = eu(!0);
  Q.Tc = function(a) {
    var b = WA(this, a[K]);
    if (-1 < b && b != this.ma) {
      var c = LF(this);
      c && AB(c, !1);
      this.ma = b;
      c = LF(this);
      this.Ac && zB(c, !0);
      this.la && c != this.la && (c.aa & 64 ? CB(c, !0) : CB(this.la, !1))
    }
    b = this.h();
    null != a[K].h() && gB(b, Ik, a[K].h().id)
  };
  Q.wf = function(a) {
    a[K] == LF(this) && (this.ma = -1);
    this.h()[tc](vl)
  };
  Q.Aj = function(a) {
    (a = a[K]) && a != this.la && a.Ib() == this && (this.la && CB(this.la, !1), this.la = a)
  };
  Q.yj = function(a) {
    a[K] == this.la && (this.la = null)
  };
  Q.wj = function(a) {
    this.fc && (this.Ac = !0);
    var b = GF(this);
    b && Tx(b) && Ux(b) ? b[vb]() : a.Ua()
  };
  Q.zj = function() {
    this.Ac = !1
  };
  Q.xj = function(a) {
    var b;
    t: {
      b = a[K];
      if (this.vb) for (var c = this.h(); b && b !== c;) {
        var d = b.id;
        if (d in this.vb) {
          b = this.vb[d];
          break t
        }
        b = b[M]
      }
      b = null
    }
    if (b) switch (a[Xc]) {
      case dq:
        b.ve(a);
        break;
      case hq:
        b.kd(a);
        break;
      case gq:
        b.Sf(a);
        break;
      case fq:
        b.Tf(a);
        break;
      case Pm:
        b.md(a)
    }
  };
  Q.Fh = bu();
  Q.ze = function() {
    this.Fb(-1);
    this.Ac = !1;
    this.la && CB(this.la, !1)
  };
  Q.Ca = function(a) {
    return this[jc]() && this.K() && (0 != TA(this) || this.xc) && this.Cf(a) ? (a.Ua(), a.Db(), !0) : !1
  };
  Q.Cf = function(a) {
    var b = LF(this);
    if (b && typeof b.Ca == Vn && b.Ca(a) || this.la && this.la != b && typeof this.la.Ca == Vn && this.la.Ca(a)) return !0;
    if (a[zd] || a[md] || a[Nc] || a[Qb]) return !1;
    switch (a.a) {
      case 27:
        if (this.Wb) GF(this).blur();
        else return !1;
        break;
      case 36:
        MF(this);
        break;
      case 35:
        NF(this);
        break;
      case 38:
        if (this.$b == wt) OF(this);
        else return !1;
        break;
      case 37:
        if (this.$b == Mo) VA(this) ? PF(this) : OF(this);
        else return !1;
        break;
      case 40:
        if (this.$b == wt) PF(this);
        else return !1;
        break;
      case 39:
        if (this.$b == Mo) VA(this) ? OF(this) : PF(this);
        else return !1;
        break;
      default:
        return !1
    }
    return !0
  };

  function KF(a, b) {
    var c = b.h(),
      c = c.id || (c.id = KA(b));
    a.vb || (a.vb = {});
    a.vb[c] = b
  }
  Q.fd = function(a, b) {
    FF.j.fd[L](this, a, b)
  };
  Q.Xf = function(a, b, c) {
    a.pd |= 2;
    a.pd |= 64;
    a.qa(32, !1);
    wB(a, !1);
    var d = a.Ib() == this ? WA(this, a) : -1;
    FF.j.Xf[L](this, a, b, c);
    a.R && this.R && KF(this, a);
    a = d; - 1 == a && (a = TA(this));
    a == this.ma ? this.ma = l.min(TA(this) - 1, b) : a > this.ma && b <= this.ma ? this.ma++ : a < this.ma && b > this.ma && this.ma--
  };
  Q.removeChild = function(a, b) {
    if (a = nu(a) ? PA(this, a) : a) {
      var c = WA(this, a); - 1 != c && (c == this.ma ? (AB(a, !1), this.ma = -1) : c < this.ma && this.ma--);
      var d = a.h();
      d && d.id && this.vb && (c = this.vb, d = d.id, d in c && delete c[d])
    }
    a = FF.j[qd][L](this, a, b);
    wB(a, !0);
    return a
  };

  function AF(a, b) {
    if (a.h()) throw m(Ni);
    a.$b = b
  }
  Q.K = du("ga");
  Q.F = function(a, b) {
    if (b || this.ga != a && this[x](a ? Rr : Jo)) {
      this.ga = a;
      var c = this.h();
      c && (yy(c, a), this.Wb && xF(GF(this), this.fc && this.ga), b || this[x](this.ga ? Uk : Tk));
      return !0
    }
    return !1
  };
  Q.isEnabled = du("fc");
  Q.na = function(a) {
    this.fc != a && this[x](a ? pn : Ym) && (a ? (this.fc = !0, SA(this, function(a) {
      a.Kh ? delete a.Kh : a.na(!0)
    })) : (SA(this, function(a) {
      a[jc]() ? a.na(!1) : a.Kh = !0
    }), this.Ac = this.fc = !1), this.Wb && xF(GF(this), a && this.ga))
  };

  function QF(a, b) {
    b != a.Wb && a.R && IF(a, b);
    a.Wb = b;
    a.fc && a.ga && xF(GF(a), b)
  }
  Q.Fb = function(a) {
    (a = UA(this, a)) ? AB(a, !0) : -1 < this.ma && AB(LF(this), !1)
  };

  function LF(a) {
    return UA(a, a.ma)
  }
  function MF(a) {
    RF(a, function(a, c) {
      return (a + 1) % c
    }, TA(a) - 1)
  }

  function NF(a) {
    RF(a, function(a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, 0)
  }
  function PF(a) {
    RF(a, function(a, c) {
      return (a + 1) % c
    }, a.ma)
  }
  function OF(a) {
    RF(a, function(a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, a.ma)
  }
  function RF(a, b, c) {
    c = 0 > c ? WA(a, a.la) : c;
    var d = TA(a);
    c = b[L](a, c, d);
    for (var e = 0; e <= d;) {
      var g = UA(a, c);
      if (g && a.Lh(g)) {
        a.Fb(c);
        break
      }
      e++;
      c = b[L](a, c, d)
    }
  }
  Q.Lh = function(a) {
    return a.K() && a[jc]() && !! (a.aa & 2)
  };

  function SF() {}
  U(SF, hB);
  ju(SF);
  SF[I].Q = eu(co);

  function TF(a, b, c) {
    vB[L](this, a, c || SF.ia(), b);
    this.qa(1, !1);
    this.qa(2, !1);
    this.qa(4, !1);
    this.qa(32, !1);
    this.Z = 1
  }
  U(TF, vB);
  sB(co, function() {
    return new TF(null)
  });
  sB(go, function() {
    return new DF
  });

  function UF(a, b) {
    FF[L](this, wt, b || EF.ia(), a);
    QF(this, !1)
  }
  U(UF, FF);
  Q = UF[I];
  Q.If = !0;
  Q.Q = function() {
    return this.rb.Q()
  };
  Q.ud = function(a) {
    if (this.rb.ud(this, a)) return !0;
    for (var b = 0, c = TA(this); b < c; b++) {
      var d = UA(this, b);
      if (typeof d.ud == Vn && d.ud(a)) return !0
    }
    return !1
  };
  Q.F = function(a, b, c) {
    (b = UF.j.F[L](this, a, b)) && a && this.R && this.If && GF(this)[vb]();
    a && c && ou(c[bd]) ? this.T = new Iw(c[bd], c[cd]) : this.T = null;
    return b
  };
  Q.Lf = function(a) {
    this.If && GF(this)[vb]();
    return UF.j.Lf[L](this, a)
  };
  Q.Lh = function(a) {
    return a[jc]() && a.K() && !! (a.aa & 2)
  };
  Q.W = function(a) {
    for (var b = this.rb, c = lx(this.a.a, bn, b.Q() + Bf, a), d = c[H], e = 0; e < d; e++) BF(b, this, c[e]);
    UF.j.W[L](this, a)
  };
  Q.Cf = function(a) {
    var b = UF.j.Cf[L](this, a);
    b || SA(this, function(c) {
      !b && c.oj && c.oh == a.a && (this[jc]() && this.Fb(WA(this, c)), b = c.Ca(a))
    }, this);
    return b
  };
  Q.Fb = function(a) {
    UF.j.Fb[L](this, a);
    var b = UA(this, a);
    if (b) {
      a = this.h();
      var c = b.h(),
        d = uy(c),
        b = uy(a),
        e = Hy(a),
        g = d.x - b.x - e[G],
        d = d.y - b.y - e.top,
        h = a[jd] - c[lb],
        c = a[ud] - c[xc],
        n = a[nc],
        q = a[dd];
      if (a == k[J] || a == k[Mb]) n = b.x + e[G], q = b.y + e.top, V && !$w(10) && (n += e[G], q += e.top);
      n += l.min(g, l.max(g - h, 0));
      q += l.min(d, l.max(d - c, 0));
      b = new Iw(n, q);
      a.scrollLeft = b.x;
      a.scrollTop = b.y
    }
  };

  function VF(a, b) {
    UF[L](this, a, b);
    this.If = !0;
    QF(this, !0);
    this.F(!1, !0);
    this.b = new lC
  }
  U(VF, UF);
  Q = VF[I];
  Q.ta = null;
  Q.W = function(a) {
    VF.j.W[L](this, a);
    if (a = a[sd](Qn) || a.htmlFor) a = this.a.h(a), WF(this, a) || (a = this.Xd(a, 1, void 0, void 0, void 0), this.R && this.Wc(a))
  };
  Q.M = function() {
    VF.j.M[L](this);
    this.b[Bb](this.Wc, this);
    var a = NA(this);
    a.m(this, Gk, this.nf);
    a.m(this.a.a, dq, this.Vg, !0);
    W && a.m(this.a.a, Pm, this.Vg, !0)
  };
  Q.Xd = function(a, b, c, d, e) {
    if (!a) return null;
    b = {
      n: a,
      jh: b,
      nj: c,
      he: d ? Pm : dq,
      cf: e
    };
    this.b.set(ru(a), b);
    return b
  };

  function WF(a, b) {
    return b ? nC(a.b, ru(b)) : !1
  }
  Q.Wc = function(a) {
    NA(this).m(a.n, a.he, this.we)
  };
  Q.Ad = function() {
    if (this.R) for (var a = this.b.gb(), b = 0; b < a[H]; b++) this.Ff(this.b.get(a[b]));
    this.b[Eb]()
  };
  Q.Ff = function(a) {
    NA(this).U(a.n, a.he, this.we)
  };
  Q.Md = function(a, b, c) {
    b = gu(a.jh) ? new BD(a.n, a.jh, !0) : new ED(b, c);
    b.g && b.g(5);
    var d = a.nj;
    c = a.cf;
    var e = a.n;
    a = this.K();
    this.K() || xu();
    this.ta = e || null;
    this[x](Kl) && (d = "undefined" != typeof d ? d : 4, a || Ua(this.h()[B], Io), yy(this.h(), !0), b.b(this.h(), d, c), a || Ua(this.h()[B], At), this.Fb(-1), this.F(!0))
  };
  Q.Sb = function() {
    this.K() && (this.F(!1), this.K() || (xu(), this.ta = null))
  };
  Q.nf = function() {
    this.Sb()
  };
  Q.we = function(a) {
    for (var b = this.b.gb(), c = 0; c < b[H]; c++) {
      var d = this.b.get(b[c]);
      if (d.n == a[Qc]) {
        this.Md(d, a[bd], a[cd]);
        a.Ua();
        a.Db();
        break
      }
    }
  };
  Q.Vg = function(a) {
    this.K() && !this.ud(a[K]) && this.Sb()
  };
  Q.ze = function(a) {
    VF.j.ze[L](this, a);
    this.Sb()
  };
  Q.B = function() {
    VF.j.B[L](this);
    this.b && (this.b[Eb](), delete this.b)
  };

  function XF(a, b) {
    FD[L](this, a);
    this.d = b;
    this.a = 0;
    this.b = null;
    this.e = 0;
    this.F(!0);
    this.F(!1);
    nA(this.h(), Gr);
    nA(this.d, Fr)
  }
  U(XF, FD);
  XF[I].k = function() {
    gA(this.e);
    1 == this.a ? qz(this.b, Hn, S(this.k, this)) : 0 == this.a && (this.e = fA(S(this.g, this, -1), 200))
  };
  XF[I].g = function(a) {
    if (this.a != a && (0 != this.a || !(this.K() && 1 == a || !this.K() && -1 == a))) {
      var b = this.K();
      this.F(!0);
      var c = -l[jb](wy(this.d)[u]);
      Ay(this.h()) && (c = -c);
      var d = 1 == a ? c : 0,
        c = 1 == a ? 0 : c;
      this.F(b);
      if (xD()) {
        b = .2;
        if (0 != this.a) {
          var e = ka(my(this.d, Lp), 10);
          this.f();
          b *= (c - e) / (c - d);
          d = e
        }
        this.a = a;
        this.b = new yD(this.d, b, {
          left: d + jr
        }, {
          left: c + jr
        }, Mp + b + Ir);
        this.b.Ab();
        qz(this.b, Hn, S(this.f, this)); - 1 == a ? qz(this.b, Hn, S(this.F, this, !1)) : this.F(!0)
      } else jy(this.d, Lp, c + jr), this.F(1 == a ? !0 : !1)
    }
  };
  XF[I].f = function() {
    0 != this.a && (this.b[ed](), fA(S(tz, this, this.b)), this.a = 0, this.b = null)
  };

  function YF() {
    var a = tF();
    return null != a && !a.oe() && 0 < a.pa()[H]
  };

  function ZF(a, b, c) {
    VF[L](this, b, c);
    this.w = new lC;
    this.k = new lC;
    this.e = a || 5;
    this.g = null;
    this.o = !1;
    this.f = fa(this.e);
    this.I = fa(this.e);
    this.G = uE.ia();
    this.C = null
  }
  U(ZF, VF);
  var $F = O;
  Q = ZF[I];
  Q.t = function() {
    ZF.j.t[L](this);
    for (var a = 0; a < this.e; ++a) this.fd(new cD(O), !0)
  };
  Q.ha = function(a) {
    ZF.j.ha[L](this, a);
    nA(this.h(), gl)
  };
  Q.lf = function(a) {
    a = this.k.get(ru(a));
    for (var b = 0; b < hE(a) && b < this.e; ++b) {
      var c = UA(this, b);
      c.Tb(kE(iE(a, b)));
      c.va(b);
      c.F(!0, !0)
    }
    for (; b < this.e; ++b) UA(this, b).F(!1)
  };

  function aG(a, b, c, d) {
    a.w.set(ru(b), c);
    a.k.set(ru(b), d);
    c = new hy(-2, 1, -2, 1);
    WF(a, b) || (b = a.Xd(b, 5, 4, !1, c), a.R && a.Wc(b))
  }
  function bG(a, b) {
    var c = a.w.get(ru(b));
    return null != c ? c : null
  }
  Q.Ad = function() {
    ZF.j.Ad[L](this);
    this.k[Eb]();
    this.w[Eb]()
  };
  Q.F = function(a, b) {
    var c = this.ta;
    a && null != c ? (cG(this, c), this.G.Qd(ml, 2E3, this.C, 1, Fk)) : null != this.g && dG(this.g, 0, 0);
    null != c && (a ? this.yf(c) : this.Jf(c));
    c = ZF.j.F[L](this, a, b);
    a && null != this.h() && Cy(this.h(), !1);
    return c
  };
  Q.Sb = function() {
    ZF.j.Sb[L](this);
    if (this.o) for (var a = 0; a < this.f[H]; a++) {
      var b = this.f[a];
      gA(b.e);
      b.f();
      b.g(-1);
      b.f();
      b.F(!1)
    }
  };
  Q.yf = function(a) {
    nA(a, Ts);
    Ya(a, O)
  };
  Q.Jf = function(a) {
    pA(a, Ts);
    Ya(a, $F)
  };
  Q.Ca = function(a) {
    if (a[zd] || a[md] || a[Qb] || 36 == a.a || 35 == a.a) return !1;
    var b = ZF.j.Ca[L](this, a);
    if (!b && (37 == a.a || 39 == a.a)) {
      var c = Ay(this.ta[M][M]),
        d = null;
      if (!c && 37 == a.a || c && 39 == a.a) d = !1;
      if (!c && 39 == a.a || c && 37 == a.a) d = !0;
      if (this.pf(d) && (c = this.ta, (c = d ? void 0 != c.nextElementSibling ? c.nextElementSibling : Gx(c[Ib], !0) : void 0 != c.previousElementSibling ? c.previousElementSibling : Gx(c[Ob], !1)) && c != this.ta)) return this.Sb(), this.Xg(d), this.Md(c ? this.b.get(ru(c)) : null, 0, 0), eG(this), a.Ua(), a.Db(), !0
    }
    return b
  };
  Q.Md = function(a, b, c) {
    Ay((a.n || this.ta)[M][M]) ? jy(this.h(), Xm, Hr) : jy(this.h(), Xm, O);
    if (this.o) for (var d = 0; d < this.f[H]; d++) fG(this, d), Ox(this.f[d].d, Uf);
    this.lf(a.n);
    ZF.j.Md[L](this, a, b, c)
  };

  function fG(a, b) {
    HB(UA(a, b).h(), 6, a.f[b].h(), 4, new Iw(1, 0))
  }
  Q.Tc = function(a) {
    ZF.j.Tc[L](this, a);
    var b = this.ta;
    null != b && (this.G.Qd(kl, 2E3, this.C, 1, Fk), cG(this, b), a = this.Ld(a[K]), -1 != a && a != this.e && (gA(this.I[a]), this.I[a] = fA(S(this.G.Qd, this.G, ll, 2E3, this.C, 1, Fk), 300), this.o && (b = this.f[a], Ay(this.ta[M][M]) ? (nA(b.h(), Hr), jy(b.h(), Xm, Hr)) : (pA(b.h(), Hr), jy(b.h(), Xm, O)), fG(this, a), gA(b.e), 0 == b.a ? b.e = fA(S(b.g, b, 1), 300) : b.g(1))))
  };
  Q.wf = function(a) {
    ZF.j.wf[L](this, a);
    a = this.Ld(a[K]); - 1 != a && a != this.e && (gA(this.I[a]), this.o && this.f[a].k())
  };
  Q.Ld = function(a) {
    return WA(this, a)
  };
  Q.pf = eu(!0);
  Q.Xg = bu();
  Q.Xd = function(a, b, c, d, e) {
    (a = ZF.j.Xd[L](this, a, b, c, d, e)) && a.he == dq && (a.he = um);
    return a
  };
  Q.Wc = function(a) {
    ZF.j.Wc[L](this, a);
    NA(this).m(a.n, gq, this.Bh);
    NA(this).m(a.n, fq, this.ue);
    NA(this).m(a.n, Pm, this.zh);
    NA(this).m(a.n, eq, this.Ah)
  };
  Q.Ff = function(a) {
    ZF.j.Ff[L](this, a);
    NA(this).U(a.n, gq, this.Bh);
    NA(this).U(a.n, fq, this.ue);
    NA(this).U(a.n, Pm, this.zh);
    NA(this).U(a.n, eq, this.Ah)
  };

  function cG(a, b) {
    if (null != a.g) {
      var c = a.k.get(ru(b)),
        d = gG(a.g);
      if (0 < gE(c)[H] && 0 < XD(c.a, 3)) {
        var e = d[Lc](gE(c));
        if (0 <= e) {
          for (var d = [], g = 0; g < XD(c.a, 3); ++g) d[E]({
            dd: e + oE(jE(c, g)),
            Bf: e + pE(jE(c, g))
          });
          dG(a.g, 0, 0, void 0, d)
        } else e = d[Lc](fE(c)), 0 <= e && dG(a.g, e, e + fE(c)[H])
      }
    }
  }
  function hG(a, b) {
    b ? kC(a.b.Ma(!1), function(a) {
      this.a.gf(a.n) == O && (nA(a.n, Us), this.a.Qa(a.n, tk));
      return !0
    }, a) : kC(a.b.Ma(!1), function(a) {
      mA(a.n, Us) && (pA(a.n, Us), this.a.Qa(a.n, O));
      return !0
    }, a)
  }
  Q.Bh = function(a) {
    YF() || (nA(a[K], Vs), cG(this, a[K]), hG(this, !0), this.G.Qd(jl, 2E3, this.C, 1, Fk))
  };
  Q.ue = function(a) {
    pA(a[K], Vs);
    null != this.g && !this.K() && dG(this.g, 0, 0);
    hG(this, !1)
  };
  Q.Ah = function(a) {
    YF() && this.ue(a)
  };
  Q.zh = function(a) {
    YF() || (this.ue(a), vF(a[K])[Ab]())
  };

  function eG(a) {
    kC(a.b.Ma(!1), function(a) {
      pA(a.n, Vs);
      return !0
    }, a)
  }
  Q.nf = function(a) {
    a && a[Qc] && a[Qc].ta && (a.g = a[Qc].ta);
    ZF.j.nf[L](this, a)
  };
  Q.we = function(a) {
    YF() ? eG(this) : ZF.j.we[L](this, a)
  };

  function iG(a, b, c) {
    this.ba = this.L = this.d = null;
    ZF[L](this, a, b, c)
  }
  U(iG, ZF);
  Q = iG[I];
  Q.Xg = cu("d");
  Q.F = function(a, b) {
    this.L = this.ta;
    var c = iG.j.F[L](this, a, b);
    this.d = null;
    a ? this.ba = this.nb() : null != this.ba && this.ba != this.nb() && this[x](new Ty(Gk, this));
    return c
  };
  Q.nb = function() {
    if (null != this.L) {
      var a = Vx(this.L);
      if (null != a) return a
    }
    return O
  };
  Q.yf = function(a) {
    iG.j.yf[L](this, a);
    nA(a, Ss);
    a.contentEditable = !0;
    HF(this, a);
    GF(this)[vb]();
    Sx(GF(this), !0);
    NA(this).m(a, Dp, this.rh);
    NA(this).m(a, fq, this.pe);
    NA(this).m(a, gq, this.pe);
    if (null != this.d) {
      var b = vF(a);
      a = this.d ? b.Da() : b.Va();
      b = GE(b);
      dF(b, a, b, a)[Ab]()
    }
  };
  Q.Jf = function(a) {
    iG.j.Jf[L](this, a);
    pA(a, Ss);
    a.contentEditable = !1;
    GF(this) && Sx(GF(this), !1);
    NA(this).U(a, Dp, this.rh);
    NA(this).U(a, fq, this.pe);
    NA(this).U(a, gq, this.pe)
  };
  Q.pe = function() {
    var a = tF();
    null == a || a.Ea() == a.Wa() && a.Da() == a.Va() || this.F(a.Ea() == a.Wa())
  };
  Q.rh = function(a) {
    for (var b = 0; b < this.e; ++b) UA(this, b).F(!1);
    if (13 == a.a || 3 == a.a) return null === LF(this) ? (this.Sb(), a.Db(), a.Ua(), !0) : !1;
    null === LF(this) || !Ez(a) && 37 != a.a && 39 != a.a || (this.ta[vb](), this.Fb(WA(this, null)));
    return !1
  };
  Q.pf = function(a) {
    var b = tF();
    if (b.Ea() == b.Wa() && b.Da() == b.Va()) {
      var c = HE(b),
        b = vF(GE(b));
      if (!a && c == b.Da() || a && c == b.Va()) return !0
    }
    return !1
  };

  function jG(a, b, c) {
    ZF[L](this, a, b, c);
    this.d = null
  }
  U(jG, ZF);
  Q = jG[I];
  Q.ha = function(a) {
    jG.j.ha[L](this, a);
    this.d = new kG(O);
    this.fd(this.d, !0)
  };
  Q.lf = function(a) {
    jG.j.lf[L](this, a);
    Na(this.d.h()[y], this.a.gf(a))
  };
  Q.F = function(a, b) {
    var c = jG.j.F[L](this, a, b);
    a && null != this.h() && (GF(this) != this.d.h()[y] && GF(this) != this.d.h()[y][Ib] || AB(this.d, !0));
    return c
  };
  Q.Tc = function(a) {
    jG.j.Tc[L](this, a);
    a[K] == this.d ? HF(this, this.d.h()[y]) : HF(this, this.h());
    GF(this)[vb]();
    Ra(GF(this), 0)
  };
  Q.Ld = function(a) {
    return a == this.d ? -1 : jG.j.Ld[L](this, a)
  };
  Q.Ca = function(a) {
    return 9 == a.a ? (this.d.Z & 2 ? (GF(this) == this.d.h()[y] ? HF(this, this.d.h()[y][Ib]) : HF(this, this.d.h()[y]), GF(this)[vb](), Ra(GF(this), 0)) : AB(this.d, !0), a.Ua(), a.Db(), !0) : jG.j.Ca[L](this, a)
  };
  Q.pf = function() {
    return null === LF(this) || !(LF(this) instanceof kG)
  };

  function kG(a, b, c) {
    vB[L](this, a, c || lG.ia(), b);
    this.qa(4, !1)
  }
  U(kG, vB);
  Q = kG[I];
  Q.ve = function(a) {
    a[K] == this.h()[y][Ib] && this.Nf()
  };
  Q.Nf = function() {
    this[x](Gk)
  };
  Q.M = function() {
    kG.j.M[L](this);
    NA(this).m(this.h()[y][Ib], um, this.Nf)
  };
  Q.V = function() {
    NA(this).U(this.h()[y][Ib], um, this.Nf);
    kG.j.V[L](this)
  };
  Q.nb = function() {
    return this.h()[y][Jc]
  };

  function lG() {}
  U(lG, hB);
  ju(lG);
  var mG = O;
  lG[I].t = function(a) {
    var b = a.a.t(lp, {
      value: a.ya(),
      id: el,
      type: Cs
    }),
      c = a.a.t(lp, {
        value: mG,
        id: dl,
        "class": O,
        type: em
      });
    return a.a.t(bn, {
      id: cl
    }, b, c)
  };

  function nG() {}
  U(nG, hB);
  ju(nG);
  Q = nG[I];
  Q.Fc = bu();
  Q.Ia = function(a, b) {
    wB(a, !1);
    a.sb &= -256;
    a.qa(32, !1);
    nG.j.Ia[L](this, a, b);
    a.Tb(b[Jc]);
    return b
  };
  Q.t = function(a) {
    wB(a, !1);
    a.sb &= -256;
    a.qa(32, !1);
    return a.a.t(Fs, {
      "class": kB(this, a)[N](P),
      disabled: !a[jc]()
    }, a.ya() || O)
  };
  Q.se = function(a) {
    return a[sc] == Lj
  };
  Q.Vf = iu;
  Q.Kf = function(a) {
    return a[jc]()
  };
  Q.qc = iu;
  Q.gd = function(a, b, c) {
    nG.j.gd[L](this, a, b, c);
    (a = a.h()) && 1 == b && bb(a, c)
  };
  Q.Ya = iu;
  Q.hd = function(a, b) {
    a && Na(a, b)
  };
  Q.Q = eu("goog-textarea");

  function oG(a, b, c) {
    vB[L](this, a, b || nG.ia(), c);
    wB(this, !1);
    this.de = !0;
    (b = this.h()) && this.b.ee(b, !0);
    this.rc = a != O;
    a || (this.Zb = O)
  }
  U(oG, vB);
  var pG = Qw || W || V && $w(11);
  Q = oG[I];
  Q.zc = !1;
  Q.re = !1;
  Q.rc = !1;
  Q.ub = 0;
  Q.uh = 0;
  Q.Yf = 0;
  Q.ah = !1;
  Q.Ud = !1;
  Q.sf = !1;
  Q.rf = !1;
  Q.yc = O;

  function qG(a) {
    return a.d.top + a.d[C] + a.k.top + a.k[C]
  }
  function rG(a) {
    var b = a.Yf,
      c = a.h();
    b && c && a.Ud && (b -= qG(a));
    return b
  }
  function sG(a) {
    a.Yf = 50;
    tG(a)
  }
  function uG(a) {
    a.uh = 50;
    tG(a)
  }
  Q.va = function(a) {
    this.Tb(p(a))
  };
  Q.oa = function() {
    return this.h()[Jc] != this.yc || vG(this) || this.rc ? this.h()[Jc] : O
  };
  Q.Tb = function(a) {
    oG.j.Tb[L](this, a);
    this.rc = a != O;
    tG(this)
  };
  Q.na = function(a) {
    oG.j.na[L](this, a);
    bb(this.h(), !a)
  };

  function tG(a) {
    a.h() && a.fe()
  }
  function vG(a) {
    return Zq in a.h()
  }
  function wG(a) {
    a.yc && (vG(a) ? a.h().placeholder = a.yc : !a.h() || a.rc || a.re || (nA(a.h(), Gs), Na(a.h(), a.yc)))
  }
  Q.M = function() {
    oG.j.M[L](this);
    var a = this.h();
    jy(a, {
      overflowY: Io,
      overflowX: Bl,
      boxSizing: Tl,
      MsBoxSizing: Tl,
      WebkitBoxSizing: Tl,
      MozBoxSizing: Tl
    });
    this.d = Gy(a);
    this.k = Hy(a);
    NA(this).m(a, Mr, this.fe).m(a, Nn, this.fe).m(a, Fp, this.fe).m(a, hq, this.qj).m(a, Pl, this.pj);
    wG(this);
    tG(this)
  };

  function xG(a) {
    if (!a.ah) {
      var b = a.h().cloneNode(!1);
      jy(b, {
        position: Ek,
        height: Bl,
        top: vf,
        margin: ag,
        padding: vh,
        border: wh,
        overflow: Io
      });
      a.a.a[J][r](b);
      var c = b[yb];
      b[B].padding = kg;
      var d = b[yb];
      a.sf = d > c;
      b[B].borderWidth = kg;
      a.rf = b[yb] > d;
      Ga(b[B], jg);
      100 != b[xc] && (a.Ud = !0);
      Dx(b);
      a.ah = !0
    }
    b = a.h();
    ea(a.d.top) && (a.d = Gy(b), a.k = Hy(b));
    var c = a.h()[yb],
      e = a.h(),
      d = e[xc] - e[ud];
    if (!a.sf) var g = a.d,
      d = d - (g.top + g[C]);
    a.rf || (e = Hy(e), d -= e.top + e[C]);
    c = c + (0 < d ? d : 0);
    a.Ud ? c -= qG(a) : (a.sf || (d = a.d, c += d.top + d[C]), a.rf || (a = Hy(b), c += a.top + a[C]));
    return c
  }
  function yG(a, b) {
    a.ub != b && (a.ub = b, Ga(a.h()[B], b + jr))
  }
  function zG(a) {
    var b = a.h();
    Ga(b[B], Bl);
    var c = b[Jc][sb](/\n/g) || [];
    b.rows = c[H] + 1;
    a.ub = 0
  }
  Q.pj = function() {
    vG(this) || (this.re = !1, this.h()[Jc] == O && (this.rc = !1, wG(this)))
  };
  Q.fe = function(a) {
    if (!this.zc) {
      var b = this.h();
      !vG(this) && a && a[Xc] == Nn && (b[Jc] == this.yc && this.yc && !this.re && (pA(b, Gs), Na(b, O)), this.re = !0, this.rc = b[Jc] != O);
      var c = !1;
      this.zc = !0;
      a = this.ub;
      if (b[yb]) {
        var d = !1,
          e = !1,
          g = xG(this),
          h = b[xc],
          n = rG(this),
          q;
        q = this.uh;
        var t = this.h();
        q && t && this.Ud && (q -= qG(this));
        n && g < n ? (yG(this, n), d = !0) : q && g > q ? (yG(this, q), b[B].overflowY = O, e = !0) : h != g ? yG(this, g) : this.ub || (this.ub = g);
        d || e || !pG || (c = !0)
      } else zG(this);
      this.zc = !1;
      c && (b = this.h(), this.zc || (this.zc = !0, (e = b[yb]) ? (g = xG(this), c = rG(this), c && g <= c || (d = this.d, b[B].paddingBottom = d[C] + 1 + jr, xG(this) == g && (b[B].paddingBottom = d[C] + e + jr, b.scrollTop = 0, e = xG(this) - e, e >= c ? yG(this, e) : yG(this, c)), b[B].paddingBottom = d[C] + jr)) : zG(this), this.zc = !1));
      a != this.ub && this[x](yr)
    }
  };
  Q.qj = function() {
    var a = this.h(),
      b = a[xc];
    a.filters && a.filters[H] && (a = a.filters[Kc](Ri)) && (b -= a.offX);
    b != this.ub && (this.ub = this.Yf = b)
  };

  function AG() {}
  U(AG, rB);
  ju(AG);
  Q = AG[I];
  Q.t = function(a) {
    var b = kB(this, a),
      b = a.a.t(bn, {
        "class": ao + b[N](P)
      }, BG(this, a.ya(), a.a));
    a = a.f;
    b && (a ? Ya(b, a) : b[tc](Ks));
    return b
  };
  Q.Fc = eu(em);
  Q.Gb = function(a) {
    return a && a[y] && a[y][y]
  };

  function BG(a, b, c) {
    return c.t(bn, ao + (a.Q() + Nf), c.t(bn, ao + (a.Q() + If), b))
  }
  Q.se = function(a) {
    return a[sc] == Qi
  };
  Q.Ia = function(a, b) {
    CG(b, !0);
    CG(b, !1);
    var c;
    t: {
      c = a.a.ph(b);
      var d = this.Q() + Nf;
      if (c && mA(c, d) && (c = a.a.ph(c), d = this.Q() + If, c && mA(c, d))) {
        c = !0;
        break t
      }
      c = !1
    }
    c || b[r](BG(this, b[Fb], a.a));
    oA(b, [$n, this.Q()]);
    return AG.j.Ia[L](this, a, b)
  };
  Q.Q = eu("goog-custom-button");

  function CG(a, b) {
    if (a) for (var c = b ? a[y] : a[ic], d; c && c[M] == a;) {
      d = b ? c[Ib] : c[Ob];
      if (3 == c[F]) {
        var e = c[zc];
        if (hv(e) == O) a[qd](c);
        else {
          c.nodeValue = b ? iv(e) : jv(e);
          break
        }
      } else break;
      c = d
    }
  };

  function DG(a, b, c) {
    GB[L](this, a, b || AG.ia(), c);
    this.qa(16, !0)
  }
  U(DG, GB);
  sB("goog-toggle-button", function() {
    return new DG(null)
  });

  function EG(a, b) {
    this.d = a;
    this.a = O;
    b && (this.a = b);
    this.b = 0
  }
  function FG() {
    var a = l[kb]((new Date)[Jb]() / 36E5) ^ 123456;
    return a + Ut + l[kb]((l.sqrt(5) - 1) / 2 * (a ^ 654321) % 1 * 1048576)
  }
  function GG(a, b, c, d, e) {
    c = c[Pb]();
    c += Te + FG();
    d = d[Pb]();
    var g = zj;
    b += zi + c;
    2E3 > c[H] + d[H] && (g = Yi, b += Ke + d, d = O);
    ++a.b;
    MC(b, function(b) {
      --a.b;
      e(b)
    }, g, d)
  }

  function HG(a, b, c, d, e, g, h) {
    var n = a.a + $f,
      q = new iD,
      t = new iD;
    q.set(vm, a.d);
    q.set(Tr, b);
    q.set(Ls, c);
    q.set(Lo, d);
    h && q.$i(h);
    (b = ku(e) != wl) ? t.set(qr, e) : vD(t, qr, e);
    e = g;
    e = b ? S(a.f, a, g) : S(a.e, a, g);
    GG(a, n, q, t, e)
  }
  EG[I].f = function(a, b) {
    var c = b[K];
    IG(c) ? (c = JG(c, Eo), lu(c) && (c = new dE(c)), a(c)) : (KG(c), a(null))
  };
  EG[I].e = function(a, b) {
    var c = b[K];
    IG(c) ? (c = JG(c, Do), lu(c) && (c = new eE(c)), a(c)) : (KG(c), a(null))
  };

  function JG(a, b) {
    var c;
    var d = XC(a),
      e = {
        "class": Ws,
        func: b,
        url: p(a.e)
      };
    try {
      c = gC(d)
    } catch (g) {
      throw c = uE.ia(), e.js = d, e.error = g[$b], c.log(Bp, e), g;
    }
    return c
  }
  function IG(a) {
    return WC(a) && (XC(a)[0] == bk || XC(a)[0] == Tt)
  }
  function KG(a) {
    var b = uE.ia(),
      c = p(a.e);
    a = XC(a);
    b.log(np, {
      q: c[yd](0, 500),
      ql: c[H],
      r: a[yd](0, 500),
      rl: a[H]
    })
  };

  function LG(a, b, c, d, e, g, h, n, q, t) {
    HA[L](this, b);
    this.d = q || null;
    null != this.d && this.d.g(S(this.Bi, this));
    this.I = a;
    this.f = Bl;
    this.Fa = this.e = O;
    this.cb = new EG(ks);
    this.Lb = !! d && fC && !V;
    this.L = null != h ? h : 0;
    this.b = null;
    this.Lb ? this.b = new iG : this.b = new jG;
    if (0 < this.L) for (a = this.b, a.o = !0, b = 0; b < a.e; b++) d = tx(bn, bo, O), c = tx(bn, null, d), d = new XF(c, d), a.f[b] = d, k[J][r](c);
    this.b.ha(e);
    this.g = t || null;
    this.Ga = null != g ? g : -1;
    this.w = uE.ia();
    this.o = new lC;
    this.T = this.C = this.G = null;
    this.k = n || null;
    this.ba = !1;
    null != this.k && (this.k.e(S(this.Ci,
    this)), this.k.d(S(this.Ai, this)))
  }
  U(LG, HA);

  function MG(a) {
    a.G = Ro;
    a.b.C = a.G
  }

  function NG(a, b) {
    b && (a.I = b, a.T = null);
    OG(a) && (a.d.b(), null != a.g && a.g.b(!1));
    if (null != a.I) {
      var c = 0 != kx()[H];
      a.a.Mc(a.h());
      a.b.Ad();
      for (var d = new dE(a.I), e = O, g = 0, h = 0, n = fa(21), q = 0; q < n[H]; q++) n[q] = 0;
      for (var t = O, q = 0; q < rE(d); q++) PG(d, q) && (t += P), t += QG(d, q);
      for (var w = [], z = !1, q = 0; q < rE(d); q++) {
        var A = sE(d, q),
          T = iE(A, 0);
        PG(d, q) ? a.a[r](a.h(), Zx(a.a, P)) : a.e != Gp && a.e != Pp || a.a[r](a.h(), xx(a.a.a, NB));
        var ga;
        if (0 == hE(sE(d, q))) A = mv(nv(fE(sE(d, q)))), ga = xx(a.a.a, A);
        else {
          var da = QG(d, q);
          /^[\s\xa0]*$/ [Cc](da) || (ga = a.a.t(Xr,
          null, Zx(a.a, QG(d, q))), mE(T) && nA(ga, No), nE(T) && nA(ga, zl), T = lE(T), 0 <= a.Ga && T < a.Ga && (h++, nA(ga, fl)), g += T, 1E3 == T ? n[n[H] - 1]++ : n[l[kb]((T - 0) / 50)]++, null != A.a[4] && 0 < gE(A)[H] ? (e = gE(A), w[E](e)) : (new $D(A.a)).a[4] = e, nC(a.o, a.f + Tf + a.e + Tf + fE(A)) && (T = a.o.get(a.f + Tf + a.e + Tf + fE(A)), T != RG(A, 0) && (a.a.Qa(ga, T), nA(ga, bl), z = !0, SG(a, !0))), null != a.C && t != a.C && (a.a.Qa(ga, 0 == q ? a.C : O), nA(ga, bl), z = !0, SG(a, !0)), Ya(ga, $F), aG(a.b, ga, q, A))
        }
        ga && a.a[r](a.h(), ga)
      }
      q = {
        confSum: g,
        numLowConf: h,
        numPhrases: rE(d)
      };
      for (d = 0; d < n[H]; d++) 0 != n[d] && (q[gm + d] = n[d]);
      yE(a.w, Rs, q);
      if (null != a.d) {
        n = a.f + Tf + a.e;
        for (q = 0; q < w[H]; ++q) n += Tf + w[q];
        nC(a.o, n) && (TG(a, !1), z = !0, UG(a, a.o.get(n)), null != a.g && a.g.b(!1), SG(a, !0))
      }
      z || (SG(a, !1), TG(a, !1));
      (z || c) && a[x](Gk)
    } else SG(a, !1), TG(a, !1)
  }
  function VG(a) {
    if (OG(a)) return a.d.a();
    var b = [];
    if (a.h() && a.h()[Fb]) for (var c = 0; c < a.h()[Fb][H]; ++c) b[c] = a.a.gf(a.h()[Fb][c]);
    return b[N](O)
  }

  function WG(a, b, c) {
    for (var d = 0; d < rE(a); d++) {
      var e = sE(a, d);
      if (YD(b.a, e ? e.a : null)) {
        e = c;
        b = -1;
        c = rE(a);
        for (var g = d; 0 <= g; g--) if (XG(a, g)) {
          b = g;
          break
        }
        for (g = d + 1; g <= rE(a); g++) if (XG(a, g)) {
          c = g;
          break
        }
        if (null != e && e) d = YG(a, b, c);
        else if (a) {
          e = d + 1;
          g = d;
          for (d = QG(a, d)[H]; 64 > d && (e != c || g != b);) e < c && (d += QG(a, e++)[H] + 1), 64 > d && g > b && (d += QG(a, --g)[H] + 1);
          d = YG(a, g, e)
        } else d = O;
        return d
      }
    }
    return O
  }
  function YG(a, b, c) {
    var d = [];
    d[E](QG(a, b));
    for (b += 1; b < c; b++) PG(a, b) && d[E](P), d[E](QG(a, b));
    return d[N](O)
  }

  function XG(a, b) {
    var c = sE(a, b).a[5];
    return 0 == (null != c ? c : 0)
  }
  function PG(a, b) {
    if (0 == b) return !1;
    var c = sE(a, b),
      d = sE(a, b - 1);
    if (c = mE(iE(c, 0)) && !nE(iE(d, 0))) d = RG(d, 0), c = d[H] - 1, c = !(0 <= c && d[Lc](Ed, c) == c);
    return c
  }
  Q = LG[I];
  Q.Pc = du(Bn);
  Q.xa = du(gn);
  Q.t = function() {
    this.W(Yx(this.a, Xr))
  };
  Q.W = function(a) {
    LG.j.W[L](this, a);
    NG(this)
  };
  Q.M = function() {
    LG.j.M[L](this);
    NA(this).m(this.b, Gk, this.Pg);
    null != this.g && null != this.g.a && NA(this).m(this.g.a, um, this.Qg);
    NA(this).m(this.b, Rr, this.Ui)
  };
  Q.V = function() {
    NA(this).U(this.b, Gk, this.Pg);
    null != this.g && null != this.g.a && NA(this).U(this.g.a, um, this.Qg)
  };
  Q.B = function() {
    LG.j.B[L](this);
    this.b.H()
  };
  Q.Bi = function() {
    this.k.na(this.d.d());
    SG(this, this.d.d())
  };
  Q.Pg = function(a) {
    if (a[Xc] != Jo || a[K] == this.b) if (null == a[K] && null != this.d) this.w.log(jn), null != this.g && this.g.b(!0), this.d.l(VG(this)), this.ba = this.k.h()[B][vc] != sq, this.k.b(), this.k.na(this.g.a[B][vc] != sq), SG(this, !1);
    else {
      var b = a.g;
      null == b && null != a[Qc] && (b = a[Qc].ta);
      var c = a[K].nb();
      if (null != b && null != a[K]) {
        var d = b,
          e = this.b.k.get(ru(d));
        this.a.Qa(d, c);
        c == RG(e, 0) ? (pA(d, bl), 0 == kx()[H] && (SG(this, !1), TG(this, !1))) : (nA(d, bl), SG(this, !0), TG(this, !0));
        null != this.o && this.o.set(this.f + Tf + this.e + Tf + fE(e), c);
        d = this.b.k.get(ru(b));
        if (a[K] instanceof cD && ou(a[K].oa())) {
          mE(iE(d, a[K].oa())) ? nA(b, No) : pA(b, No);
          nE(iE(d, a[K].oa())) ? nA(b, zl) : pA(b, zl);
          for (var e = b[M], g = e[Fb], h = {}, n = null, q = -1, t = [], w = 0; w < g[H]; w++) {
            var z = g[w];
            if (1 == z[F]) {
              h[w] = !0;
              var A;
              if (A = n) A = z, A = !mA(n, zl) && mA(A, No);
              A && (0 <= q ? h[q] = !0 : t[E](z));
              n = z;
              q = -1
            } else Vx(z) == P && (q = w)
          }
          for (w = g[H] - 1; 0 <= w; w--) h[w] || e[qd](g[w]);
          for (w = 0; w < t[H]; w++) e[pb](k[ob](P), t[w])
        }
        null != this.o && this.o.set(this.f + Tf + this.e + Tf + fE(d), c);
        h = RG(d, 0);
        e = new dE(this.I);
        g = WA(this.b, a[K]);
        c = {
          sl: this.f,
          tl: this.e,
          utrans: c,
          gtrans: h,
          index: g,
          ophrase: fE(d),
          osentence: gE(d),
          tsentence: WG(e, d)
        };
        b = bG(this.b, b);
        null != b && (c.confidence = lE(iE(sE(e, b), 0)));
        if (a[K] instanceof kG || -1 == g) c.manual = 1;
        for (var T in c) nu(c[T]) && 64 < c[T][H] && (c.tr = 1, c[T] = c[T][Nb](0, 64));
        this.w.log(qt, c, this.G);
        this[x](Gk)
      }
    }
  };

  function UG(a, b) {
    if (a.h()) if (null == a.C && (a.T = Pv(a.a.Xi(a.h()))), a.C = b, a.h()[Fb] && 0 < a.h()[Fb][H] && WF(a.b, a.h()[Fb][0])) {
      a.a.Mc(a.h());
      a.b.Ad();
      var c = a.a.t(Xr, bl, a.C);
      a.a[r](a.h(), c);
      aG(a.b, c, 0, new $D)
    } else La(a.h(), mv(nv(b)))
  }
  Q.Qg = function() {
    null != this.d && OG(this) ? this.d.f() : ZG(this);
    this.w.log(Fm, void 0, this.G)
  };
  Q.Ai = function() {
    OG(this) && (this.d.d() && (UG(this, this.d.a()), this.ba = !0), this.d.b(), null != this.g && this.g.b(!1), this.d.d() && SG(this, !0), this.k.na(!0), yy(this.k.h(), this.ba), this[x](Gk));
    this.w.log(Em, void 0, this.G)
  };
  Q.Ui = function() {
    if (0 < this.L) {
      var a = this.b.k.get(ru(this.b.ta)),
        b = new iD(Vr);
      if (1 == this.L && 1 < hE(a)) {
        for (var c = [], d = 0, e = hE(a); d < e; d++) c[E](RG(a, d));
        HG(this.cb, this.e, this.f, jx(k, Lo)[Jc], c, S(this.kj, this), b)
      } else for (d = 0, e = hE(a); d < e; d++) c = RG(a, d), HG(this.cb, this.e, this.f, jx(k, Lo)[Jc], c, S(this.Dg, this, d), b)
    }
    a = new dE(this.I);
    b = bG(this.b, this.b.ta);
    d = {};
    null != b && (d.confidence = lE(iE(sE(a, b), 0)));
    this.f && this.e && this.Fa && (d.segments = rE(a), d.sl = this.f, d.tl = this.e, d.hl = this.Fa);
    this.w.log(Vq, d, this.G)
  };
  Q.Dg = function(a, b) {
    var c;
    if (1 == this.L || 1 < rE(b)) {
      var d = qE(new cE(WD(b.a, 0)[0]));
      c = 1;
      for (var e = XD(b.a, 0); c < e; c++) {
        var g;
        g = c;
        g = new cE(WD(b.a, 0)[g]);
        d = d + (P + qE(g))
      }
      c = d
    } else if (1 == rE(b)) {
      d = [];
      g = sE(b, 0);
      c = 0;
      for (e = l.min(this.L, hE(g)); c < e; c++) d[E](RG(g, c));
      c = d[N](of)
    } else c = Uf;
    e = this.b;
    !e.o || a >= e.e || c == O || (Ox(e.f[a].d, c), fG(e, a))
  };
  Q.kj = function(a) {
    for (var b = 0; b < XD(a.a, 0); b++) this.Dg(b, tE(a, b))
  };

  function ZG(a) {
    OG(a) && (null != a.g && a.g.b(!1), a.d.b());
    a.o[Eb]();
    a.C = null;
    NG(a);
    a[x](Gk)
  }

  function SG(a, b) {
    null != a.g && null != a.g.a && yy(a.g.a, b)
  }
  function TG(a, b) {
    null != a.k && (b && a.k.b(), yy(a.k.h(), b))
  }
  Q.Ci = function() {
    var a = {};
    a.sl = this.f;
    a.tl = this.e;
    var b = [],
      c = 0,
      d = 0,
      e = new dE(this.I),
      g;
    null != this.T ? g = this.T : g = Ex(this.h());
    for (var h = 0; h < g[H]; h++) {
      var n = sE(e, h);
      if (null != n) {
        var q = Vx(g[h]),
          t;
        t: {
          var w = q;
          t = n;
          if (0 == hE(t)) t = 0;
          else {
            for (var z = 0; z < hE(t); ++z) if (w == RG(t, z)) {
              t = z;
              break t
            }
            t = -1
          }
        }
        if (0 != t || OG(this)) {
          w = gE(n);
          z = WG(e, n, !0);
          if (0 == b[H] || w != b[b[H] - 1]) c++, b[E](w), a[Kq + c] = w, a[bt + c] = z;
          w = c + pf + d;
          d++;
          0 != t && (a[fp + w] = t, a[st + w] = q);
          a[Bo + w] = RG(n, 0);
          q = jE(n, 0);
          q = oE(q) + Eh + pE(q);
          for (t = 1; t < XD(n.a, 3); ++t) z = jE(n, t), q += Gh + oE(z) + Eh + pE(z);
          a[Gq + w] = q
        }
      }
    }
    if (OG(this)) {
      this[x](Gk);
      this.d.b();
      null != this.g && this.g.b(!1);
      SG(this, !0);
      this.d.a() != VG(this) && UG(this, this.d.a());
      c = this.f + Tf + this.e;
      for (h = 0; h < b[H]; ++h) c += Tf + b[h];
      b = this.d.a();
      this.o.set(c, b);
      a.usentence = b
    }
    this.w.log(Ur, a, this.G)
  };

  function OG(a) {
    return null != a.d && a.d.e()
  }
  function QG(a, b) {
    return RG(sE(a, b), 0)
  }
  function RG(a, b) {
    return kE(iE(a, b))
  };

  function $G() {
    this.n = null;
    this.a = tx(Qi, zo, k[ob](O));
    this.n && (Bx(this.a, this.n), aH(this))
  }
  function dG(a, b, c, d, e) {
    var g = d || Ao;
    d = gG(a);
    aH(a);
    Ax(a.a);
    if (b != c || e) {
      if (0 < b) {
        var h = d[yd](0, b);
        bH(a.a, h, 0, e)
      }
      b < c && (h = d[yd](b, c), g = tx(Fj, g), bH(g, h, b, e), a.a[r](g));
      c < d[H] && (h = d[yd](c), bH(a.a, h, c, e))
    }
  }

  function aH(a) {
    var b;
    b = a.n;
    var c = ix(b),
      d = V && b[xd];
    d && $x(gx(c)) && d[u] != Bl && d[D] != Bl && !d.boxSizing ? (c = Iy(b, d[u], Dt, Yq), b = Iy(b, d[D], Ho, Wq), b = new Kw(c, b)) : (d = Dy(b), c = Gy(b), b = Hy(b), b = new Kw(d[u] - b[G] - c[G] - c[Ac] - b[Ac], d[D] - b.top - c.top - c[C] - b[C]));
    Ey(a.a, b);
    c = uy(a.n);
    b = a.a;
    var d = c.x,
      c = c.y,
      e = uy(b);
    d instanceof Iw && (c = d.y, d = d.x);
    oy(b, b[pd] + (d - e.x), b[wc] + (c - e.y));
    b = Gy(a.n);
    jy(a.a, Sq, b[G] + jr);
    jy(a.a, Tq, b[Ac] + jr);
    a.a.dir = a.n.dir
  }

  function bH(a, b, c, d) {
    d = d || [];
    for (var e = 0, g; g = d[e]; e++) if (!(0 > g.dd - c)) {
      if (g.dd - c >= b[H]) break;
      if (0 < g.dd - c) {
        var h = b[yd](0, g.dd - c);
        cH(a, h)
      }
      var n = g[id] || Ao,
        h = b[yd](g.dd - c, g.Bf - c),
        n = tx(Fj, n);
      cH(n, h);
      a[r](n);
      b = b[yd](g.Bf - c);
      c = g.Bf
    }
    b && cH(a, b)
  }
  function cH(a, b) {
    for (var c = b[v](/(\r\n|\r|\n)/g, Ed)[Wb](Ed), d = 0, e = c[H]; d < e; d++) {
      if (0 < d) {
        var g = tx(Hi);
        a[r](g)
      }
      a[r](k[ob](p(c[d])))
    }
  }
  function gG(a) {
    return a.n && (a.n[Jc] || Vx(a.n))
  };

  function dH(a) {
    for (var b = {}, c = 0; c < a[H]; ++c) b[a[c]] = !0;
    return b
  }
  function eH(a) {
    this.b = a ? [a] : [];
    this.a = [0];
    this.d = !1
  }
  eH[I].register = function(a) {
    if (this.d) return a || iu;
    this.a[E](0);
    var b = this.a[H] - 1;
    return S(function() {
      this.a[b]++;
      a && a[rc](null, arguments);
      fH(this)
    }, this)
  };
  eH[I].Pa = function(a) {
    return this.d ? a : S(function() {
      if (this.d) a[rc](null, arguments);
      else {
        var b = arguments;
        this.b[E](function() {
          a[rc](null, b)
        })
      }
    }, this)
  };
  eH[I].finish = function() {
    this.a[0] = 1;
    fH(this)
  };

  function fH(a) {
    for (var b = 0; b < a.a[H]; ++b) if (0 == a.a[b]) return;
    a.d = !0;
    for (b = 0; b < a.b[H]; ++b) {
      var c = a.b[b];
      a.b[b] = null;
      c[L]()
    }
    a.b = [];
    a.a = []
  }
  function gH(a) {
    this.d = a;
    this.b = this.a = !1
  }
  function hH(a, b) {
    return S(function() {
      b && b[rc](null, arguments);
      this.b ? this.a || (this.d[L](), this.a = !0) : this.a = !0
    }, a)
  }
  gH[I].finish = function() {
    this.b || (this.b = !0, this.a && this.d[L]())
  };

  function iH(a, b, c, d) {
    this.a = b;
    this.g = a;
    this.p = c || 0;
    this.l = d || 0;
    this.b = this.d = !1
  }
  function jH(a) {
    a.d || a.f()
  }
  iH[I].f = function() {
    (this.d = (this.b = !! this.g[L]()) || 0 >= --this.l) ? (this.a[L](null, this.b), this.e = 0) : this.e = f[Ub](S(this.f, this), this.p)
  };
  Ka(iH[I], function() {
    this.e && f[gb](this.e);
    this.d = !0;
    this.a[L](null, this.b)
  });

  function kH(a, b) {
    return function() {
      a[x](b)
    }
  }
  function lH(a) {
    a = hv(a)[Cd]()[v](tk, pf);
    if (a == Qt) return Ot;
    if (a == Rt) return Pt;
    var b = a[Lc](pf);
    a = 0 <= b ? a[yd](0, b) : a;
    return a == Nt ? Ot : a
  }

  function mH(a) {
    var b = [],
      c;
    for (c in a) if (a[c] !== aa[I][c]) {
      var d = kv(c);
      if (ku(a[c]) == wl) for (var e = 0; e < a[c][H]; ++e) b[E](d + ui + kv(a[c][e]));
      else b[E](d + ui + kv(a[c]))
    }
    return b[N](Ke)
  }
  function nH(a, b) {
    var c = b || {};
    c.nca = a;
    c.client = Pu;
    Hu && (c.logld = tt + Hu);
    var d = new Image;
    d.src = Yf + Xu + Zf + mH(c);
    na(d, function() {
      na(d, null)
    })
  }

  function oH(a, b) {
    if ((V || Pw) && f[Zb][dc] != k.domain) {
      pH = pH ? pH + 1 : 1;
      var c = Bn + pH + tk + xu()[Pb](36);
      f[c] = function() {
        f[c] = void 0;
        a.src = zp;
        b && f[Ub](function() {
          b()
        }, 0)
      };
      a.src = Ap + k.domain + Xe + c + Ye
    } else b && b()
  }
  var pH;

  function qH() {
    var a = {};
    try {
      for (var b in aa[I]) {
        var c = aa[I][b];
        delete aa[I][b];
        a[b] = c
      }
    } catch (d) {
      return {}
    }
    return a
  }
  function rH(a) {
    for (var b in a) aa[I][b] = a[b]
  }
  function sH(a) {
    for (var b in a) if (a[b] !== aa[I][b]) return !1;
    return !0
  }
  function tH(a, b) {
    return a != Bl && a != Ot && a == b
  };
  var uH, vH, wH;
  (function() {
    function a(a, c, g) {
      var h = fa[I][Hc][L](arguments);
      h[Bd](0, 2);
      h = Hp + a[Pb](16) + Wo + c[Pb](16) + (h[H] ? pf + h[N](tk) : O);
      b ? b[E](h) : nH(h)
    }
    var b = null,
      c = null;
    uH = function(b, c, g) {
      for (var h in g) g[h] !== aa[I][h] && (c[h] = pu(g[h]) ? g[h] : wu(a, b, ha(g[h])))
    };
    vH = function() {
      b && wH();
      b = [];
      c = jz(f, lt, function() {
        wH()
      })
    };
    wH = function() {
      c && (sz(c), c = null);
      b && b[H] && nH(b[N](O));
      b = null
    }
  })();
  /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  function xH(a, b) {
    this.f = [];
    this.D = a;
    this.o = b || null;
    this.e = this.a = !1;
    this.d = void 0;
    this.k = this.w = this.l = !1;
    this.g = 0;
    this.b = null;
    this.p = 0
  }
  Ka(xH[I], function(a) {
    if (this.a) this.d instanceof xH && this.d[Gc]();
    else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        if (a) b[Gc](a);
        else b.p--, 0 >= b.p && b[Gc]()
      }
      this.D ? this.D[L](this.o, this) : this.k = !0;
      this.a || (a = new yH, zH(this), AH(this, !1, a))
    }
  });
  xH[I].A = function(a, b) {
    this.l = !1;
    AH(this, a, b)
  };

  function AH(a, b, c) {
    a.a = !0;
    a.d = c;
    a.e = !b;
    BH(a)
  }

  function zH(a) {
    if (a.a) {
      if (!a.k) throw new CH;
      a.k = !1
    }
  }
  function DH(a, b, c, d) {
    a.f[E]([b, c, d]);
    a.a && BH(a)
  }
  xH[I].then = function(a, b, c) {
    var d, e, g = new Vz(function(a, b) {
      d = a;
      e = b
    });
    DH(this, d, function(a) {
      a instanceof yH ? g[Gc]() : e(a)
    });
    return g[od](a, b, c)
  };
  Tz(xH);

  function EH(a) {
    return Jv(a.f, function(a) {
      return pu(a[1])
    })
  }

  function BH(a) {
    if (a.g && a.a && EH(a)) {
      var b = a.g,
        c = FH[b];
      c && (R[gb](c.ea), delete FH[b]);
      a.g = 0
    }
    a.b && (a.b.p--, delete a.b);
    for (var b = a.d, d = c = !1; a.f[H] && !a.l;) {
      var e = a.f[eb](),
        g = e[0],
        h = e[1],
        e = e[2];
      if (g = a.e ? h : g) try {
        var n = g[L](e || a.o, b);
        gu(n) && (a.e = a.e && (n == b || n instanceof m), a.d = b = n);
        Uz(b) && (d = !0, a.l = !0)
      } catch (q) {
        b = q, a.e = !0, EH(a) || (c = !0)
      }
    }
    a.d = b;
    if (d) if (n = S(a.A, a, !0), d = S(a.A, a, !1), b instanceof xH) DH(b, n, d), b.w = !0;
    else b[od](n, d);
    c && (b = new GH(b), FH[b.ea] = b, a.g = b.ea)
  }
  function CH() {
    cv[L](this)
  }
  U(CH, cv);
  CH[I].message = "Deferred has already fired";
  Ta(CH[I], "AlreadyCalledError");

  function yH() {
    cv[L](this)
  }
  U(yH, cv);
  yH[I].message = "Deferred was canceled";
  Ta(yH[I], "CanceledError");

  function GH(a) {
    this.ea = R[Ub](S(this.b, this), 0);
    this.a = a
  }
  GH[I].b = function() {
    delete FH[this.ea];
    throw this.a;
  };
  var FH = {};

  function HH(a, b) {
    var c = b || {}, d = c[ld] || k,
      e = k[xb](Dj),
      g = {
        Nh: e,
        Cb: void 0
      }, h = new xH(IH, g),
      n = null,
      q = null != c.timeout ? c.timeout : 5E3;
    0 < q && (n = f[Ub](function() {
      JH(e, !0);
      var b = new KH(1, Pj + a);
      zH(h);
      AH(h, !1, b)
    }, q), g.Cb = n);
    na(e, Ia(e, function() {
      e[Tc] && e[Tc] != Rp && e[Tc] != Km || (JH(e, c.lj || !1, n), zH(h), AH(h, !0, null))
    }));
    Ma(e, function() {
      JH(e, !0, n);
      var b = new KH(0, Vi + a);
      zH(h);
      AH(h, !1, b)
    });
    nx(e, {
      type: Ds,
      charset: Uj,
      src: a
    });
    LH(d)[r](e);
    return h
  }
  function LH(a) {
    var b = a[Lb]($i);
    return b && 0 != b[H] ? b[0] : a[Mb]
  }

  function IH() {
    if (this && this.Nh) {
      var a = this.Nh;
      a && a[sc] == Dj && JH(a, !0, this.Cb)
    }
  }
  function JH(a, b, c) {
    null != c && R[gb](c);
    na(a, iu);
    Ma(a, iu);
    Ia(a, iu);
    b && f[Ub](function() {
      Dx(a)
    }, 0)
  }
  function KH(a, b) {
    var c = hj + a + bf;
    b && (c += Fh + b);
    cv[L](this, c)
  }
  U(KH, cv);

  function MH(a, b) {
    this.b = new dD(a);
    this.a = b ? b : jm;
    this.Cb = 5E3
  }
  var NH = 0;
  ra(MH[I], function(a, b, c, d) {
    a = a || null;
    d = d || tk + (NH++)[Pb](36) + xu()[Pb](36);
    R._callbacks_ || (R._callbacks_ = {});
    var e = this.b[gc]();
    if (a) for (var g in a) if (!a[ac] || a[ac](g)) {
      var h = e,
        n = g,
        q = a[g];
      lu(q) || (q = [p(q)]);
      vD(h.a, n, q)
    }
    b && (R._callbacks_[d] = OH(d, b), b = this.a, g = vk + d, lu(g) || (g = [p(g)]), vD(e.a, b, g));
    b = HH(e[Pb](), {
      timeout: this.Cb,
      lj: !0
    });
    DH(b, null, PH(d, a, c), void 0);
    return {
      ea: d,
      gh: b
    }
  });
  Ka(MH[I], function(a) {
    a && (a.gh && a.gh[Gc](), a.ea && QH(a.ea, !1))
  });

  function PH(a, b, c) {
    return function() {
      QH(a, !1);
      c && c(b)
    }
  }
  function OH(a, b) {
    return function(c) {
      QH(a, !0);
      b[rc](void 0, arguments)
    }
  }
  function QH(a, b) {
    R._callbacks_[a] && (b ? delete R._callbacks_[a] : R._callbacks_[a] = iu)
  };

  function RH(a, b) {
    My[L](this);
    this.kc = new dD(a);
    if (b) for (var c in b) b[c] !== aa[I][c] && this.kc.a.set(c, b[c])
  }
  U(RH, My);
  RH[I].d = eu(!0);
  RH[I].Ha = function() {
    return this.d()
  };
  ra(RH[I], eu(null));
  Ka(RH[I], bu());

  function SH(a, b, c, d) {
    RH[L](this, a, b);
    this.b = null == d || !! d;
    this.a = new MH(this.kc[Pb](), c)
  }
  U(SH, RH);
  SH[I].d = du("b");
  ra(SH[I], function(a, b) {
    this.a.Cb = -1;
    return this.a[tb](a, b)
  });
  Ka(SH[I], function(a) {
    this.a[Gc](a)
  });

  function TH(a, b) {
    RH[L](this, a, b);
    this.b = {};
    this.a = this.p = 0;
    f.XMLHttpRequest && Gt in new XMLHttpRequest && (this.a = 1);
    !this.a && f.XDomainRequest && f[Zb][mc] != Fn && (this.a = 2, this.kc.a.set(it, f[Zb][oc]))
  }
  U(TH, RH);
  uH(17170, TH[I], {
    Zg: 1,
    Yg: 2
  });
  TH[I].d = function() {
    return !!this.a
  };
  ra(TH[I], function(a, b) {
    var c = qH(),
      d = ++this.p,
      e = {}, g = {};
    qr in a && (g.q = a.q, delete a.q);
    a.mode = this.a;
    if (a.sl == on && a.tl == nn) {
      e.hb = {};
      e.hb.H = bu();
      var h = O;
      qr in g && (h = R.JSON.stringify(g.q));
      g = S(function() {
        b(h);
        UH(this, d)
      }, this);
      R[Ub](g, 0);
      qs in a && 1 == a.tc && !(fn in a) && nH(nn)
    } else 1 == this.a ? (e.hb = new IC, jz(e.hb, Km, S(function() {
      e.ad || (WC(e.hb) ? b(XC(e.hb)) : (this.Yg(), b(null)), UH(this, d))
    }, this)), jz(e.hb, Hs, S(function() {
      e.ad || (this.Zg(), UH(this, d))
    }, this)), e.hb[tb](this.kc[Pb]() + Ke + mH(a), zj, mH(g), {
      "Content-Type": sl
    })) : (e.Xa = new XDomainRequest, e.Xa.timeout = 2E4, na(e.Xa, S(function() {
      e.ad || (b(e.Xa.responseText), UH(this, d))
    }, this)), Ma(e.Xa, S(function() {
      e.ad || (this.Yg(), b(null), UH(this, d))
    }, this)), e.Xa.ontimeout = S(function() {
      e.ad || (this.Zg(), b(null), UH(this, d))
    }, this), e.Xa[Bc](zj, this.kc[Pb]() + Ke + mH(a)), e.Xa[tb](mH(g)));
    this.b[d] = e;
    rH(c);
    return d
  });
  Ka(TH[I], function(a) {
    var b = this.b[a];
    b && (b.ad = !0, b.Xa && b.Xa[kd](), UH(this, a))
  });

  function UH(a, b) {
    var c = a.b[b];
    c && (c.hb ? (c.hb.H(), c.hb = null) : c.Xa && (c.Xa = null), delete a.b[b])
  }
  TH[I].B = function() {
    TH.j.B[L](this);
    for (var a in this.b) this[Gc](a)
  };

  function VH(a, b) {
    My[L](this);
    var c;
    b ? c = {
      client: b
    } : c = {
      anno: 3,
      client: Pu,
      format: Oo,
      v: fg
    };
    c.key = a;
    Ou && (c.scid = Ou);
    Hu && (c.logld = tt + Hu);
    this.a = null;
    this.l = !0;
    this.b = {
      Ed: S(this.C, this),
      rg: 300
    };
    this.e = new SH(Ru + Uu, {
      client: Pu
    }, mm);
    this.f = new SH(Ru + av, {
      client: Pu
    }, mm);
    c = [{
      ua: new TH(Ru + Qu + $f, c),
      Ed: S(this.w, this),
      f: 30720,
      l: 4294967295,
      g: -1,
      yd: 0,
      e: !1
    }, {
      ua: new SH(Ru + Qu + $f, c, mm, V && 7 >= Yw),
      Ed: S(this.D, this),
      f: 1900,
      l: 4294967295,
      g: -1,
      yd: 3,
      e: !0
    }];
    this.p = new WH(c);
    this.d = !1;
    for (var d = 0; d < c[H]; ++d) this.d = this.d || c[d].ua.d();
    this.d || this.o()
  }
  U(VH, My);
  uH(7361, VH[I], {
    A: function() {
      nH(vs)
    },
    o: function() {
      nH(Bs)
    }
  });

  function XH(a, b) {
    if (!a.l) return b;
    var c;
    if (ku(b) != wl) c = [
      [b, 200]
    ];
    else if (2 == b[H] && ku(b[0]) != wl && ku(b[1]) != wl) c = [
      [b[0], 200, b[1]],
      [b[1], 200, b[1]]
    ];
    else {
      c = [];
      for (var d = 0; d < b[H]; ++d) ku(b[d]) != wl ? c[d] = [b[d], 200] : c[d] = [b[d][0], 200, b[d][1]]
    }
    return c
  }
  VH[I].w = function(a) {
    var b = this;
    return function(c) {
      if (c) try {
        var d = c[Lc](Dd);
        0 <= d && (c = c[Nb](0, d));
        var e = eval(Ze + c + bf)
      } catch (g) {
        e = null, b.A()
      }
      e ? a(XH(b, e), 200) : a([], 500)
    }
  };
  VH[I].D = function(a) {
    var b = this;
    return function(c) {
      c ? a(XH(b, c), 200) : a([], 500)
    }
  };
  VH[I].C = function(a) {
    return function(b) {
      if (b) try {
        var c = eval(Ze + b + bf)
      } catch (d) {
        c = null
      }
      a(c && c[1] || void 0)
    }
  };

  function WH(a) {
    this.b = a
  }
  WH[I].start = function(a) {
    this.a = a;
    this.w = 0;
    YH(this)
  };

  function YH(a) {
    if (a.w >= a.b[H]) a.a(null);
    else {
      var b = a.b[a.w++];
      b.ej ? jH(new iH(S(b.ua.Ha, b.ua), S(function(a) {
        a ? this.a(b) : YH(this)
      }, a), 30, b.ej)) : b.ua.Ha() ? a.a(b) : YH(a)
    }
  }
  VH[I].g = function(a) {
    this.k || (this.k = !0, this.p[kc](S(function(b) {
      b && (this.a = b, this.b.ua = b.ua);
      a()
    }, this)))
  };
  VH[I].Ha = function() {
    return null !== this.a && null !== this.a.ua && this.a.ua.Ha()
  };
  Sa(VH[I], function(a, b, c, d, e, g, h) {
    a = this.a.Ed(a);
    b = {
      q: b,
      sl: c,
      tl: d
    };
    b.tc = e;
    g && (b.ctt = 1);
    h && (b.dom = 1);
    return this.a.ua[tb](b, a)
  });
  VH[I].B = function() {
    VH.j.B[L](this);
    this.a && (this.a.ua.H(), this.a.ua = null);
    this.b.ua = null;
    this.e.H();
    this.e = null;
    this.f.H();
    this.f = null
  };

  function ZH(a) {
    return oi + a.id + te
  }
  function $H(a) {
    return a.fh + ci + a.id + me + a.eh
  }
  function aI(a) {
    return di + a.dir + ye + a.Ji + he + (a.Ki ? li + a.Li + re : O) + Qh + Fu.Lj + Th
  }
  function bI(a) {
    var b = bi + a.Cj + ae + a.method + xe + (a.dir == Hr ? Br : Lp) + Ae + Fu.Mj + Rd + Fu.yg + se;
    a = a.Dj;
    for (var c = a[H], d = 0; d < c; d++) b += ni + a[d] + Qd;
    return b + Rh
  }
  function cI() {
    return fi
  }
  function dI(a) {
    return ei + a.Rj + Sh
  };

  function eI(a) {
    HA[L](this);
    a = a || {};
    this.id = a.id || KA(this);
    this.bf = a.bf || O;
    this.Od = a.Od || null;
    this.ne = a.ne || null;
    this.Id = a.Id || !1;
    $a(this, a[id] || null);
    this.d = null
  }
  U(eI, HA);
  eI[I].mc = cu("d");
  eI[I].Pb = function() {
    if (!this.R) throw m("Activity must be rendered before it can be resumed.");
    if (!this.d) throw m("Acitivity must have a tooltip instance to be resumed");
  };
  eI[I].Bb = bu();
  eI[I].H = function() {
    this.Ra || (eI.j.H[L](this), delete this.ne)
  };

  function fI() {
    Cz[L](this);
    this.b = Hm + gI++;
    this.d = [];
    hI[this.b] = this
  }
  var iI;
  U(fI, Cz);
  var hI = {}, gI = 0;

  function jI(a, b) {
    var c = gx(a);
    qC(b, function(b, e) {
      var g = c.t(lp, {
        type: Io,
        name: e,
        value: b
      });
      a[r](g)
    })
  }
  Q = fI[I];
  Q.X = null;
  Q.ka = null;
  Q.Vb = null;
  Q.cj = 0;
  Q.qb = !1;
  Q.mf = null;
  Q.nh = null;
  Q.ec = null;
  ra(Q, function(a, b, c, d) {
    if (this.qb) throw m(ik);
    this.mf = a = new dD(a);
    b = b ? b[Ad]() : Yi;
    c && (c = l[kb](2147483648 * l[lc]())[Pb](36) + l.abs(l[kb](2147483648 * l[lc]()) ^ xu())[Pb](36), a.a.set(St, c));
    iI || (iI = tx(Rn), iI.acceptCharset = rt, c = iI[B], xa(c, Ek), Ua(c, Io), c.top = Pa(c, sf), oa(c, Ga(c, kg)), c.overflow = Io, k[J][r](iI));
    this.X = iI;
    b == Yi && jI(this.X, a.a);
    d && jI(this.X, d);
    this.X.action = a[Pb]();
    this.X.method = b;
    kI(this);
    lI(this)
  });

  function mI(a, b) {
    if (a.qb) throw m(ik);
    var c = new dD(b.action);
    a.mf = c;
    a.X = b;
    a.X.action = c[Pb]();
    kI(a)
  }
  Q.abort = function() {
    if (this.qb) {
      var a = nI(this);
      tz(a);
      this.qb = !1;
      this[x](Bk);
      oI(this)
    }
  };
  Q.B = function() {
    this.qb && this[kd]();
    fI.j.B[L](this);
    this.ka && pI(this);
    lI(this);
    this.X = null;
    delete this.e;
    this.mf = this.nh = this.X = null;
    delete hI[this.b]
  };

  function kI(a) {
    a.qb = !0;
    a.Vb = a.b + tk + (a.cj++)[Pb](36);
    var b = {
      name: a.Vb,
      id: a.Vb
    };
    V && 7 > Yw && (b.src = yp);
    a.ka = gx(a.X).t(bp, b);
    b = a.ka[B];
    Ua(b, Io);
    oa(b, Ga(b, kg));
    Fa(b, sq);
    W ? b.marginTop = b.marginLeft = sf : (xa(b, Ek), b.top = Pa(b, sf));
    if (V && !X(lg)) {
      cb(a.X, a.Vb || O);
      gx(a.X).a[J][r](a.ka);
      jz(a.ka, tr, a.qf, !1, a);
      try {
        a.a = !1, a.X.submit()
      } catch (c) {
        rz(a.ka, tr, a.qf, !1, a), qI(a)
      }
    } else {
      gx(a.X).a[J][r](a.ka);
      var b = a.Vb + wk,
        d = Mx(a.ka),
        e = Zh + b + Ld + b + yi;
      k.baseURI && (e = gi + nv(k.baseURI) + ne + e);
      Pw ? La(d[Mb], e) : d[rb](e);
      jz(d[Ic](b), Qp, a.Vd, !1, a);
      for (var g = a.X[Lb](Fs), e = 0, h = g[H]; e < h; e++) {
        var n = g[e][Jc];
        Xx(g[e]) != n && (Ox(g[e], n), Na(g[e], n))
      }
      g = d.importNode(a.X, !0);
      cb(g, b);
      g.action = a.X.action;
      d[J][r](g);
      for (var n = a.X[Lb](Nr), q = g[Lb](Nr), e = 0, h = n[H]; e < h; e++) for (var t = n[e][Lb](Hq), w = q[e][Lb](Hq), z = 0, A = t[H]; z < A; z++) w[z].selected = t[z].selected;
      n = a.X[Lb](lp);
      q = g[Lb](lp);
      e = 0;
      for (h = n[H]; e < h; e++) if (n[e][Xc] == En && n[e][Jc] != q[e][Jc]) {
        cb(a.X, b);
        g = a.X;
        break
      }
      try {
        a.a = !1, g.submit(), d[ec](), Qw && fA(a.$g, 250, a)
      } catch (T) {
        var ga;
        try {
          var da;
          var Wa = hu(Ft);
          if (nu(T)) da = {
            message: T,
            name: Wj,
            lineNumber: vj,
            fileName: Wa,
            stack: vj
          };
          else {
            var Rc, cc, e = !1;
            try {
              Rc = T.lineNumber || T.Zj || vj
            } catch (uK) {
              Rc = vj, e = !0
            }
            try {
              cc = T[uc] || T.filename || T.sourceURL || R.$googDebugFname || Wa
            } catch (vK) {
              cc = vj, e = !0
            }
            da = !e && T.lineNumber && T[uc] && T[Yb] && T[$b] && T[$c] ? T : {
              message: T[$b] || vj,
              name: T[$c] || Xj,
              lineNumber: Rc,
              fileName: cc,
              stack: T[Yb] || vj
            }
          }
          var mr;
          var On = da[uc];
          null != On || (On = O);
          if (/^https?:\/\//i [Cc](On)) {
            var nr;
            Wa = On;
            Wa instanceof nw ? nr = Wa : (Wa = Wa.Yb ? Wa.Xb() : p(Wa), Wa = qw[Cc](Wa) ? rw(Wa) : Dk, nr = uw(Wa));
            var Qx = hw(yt),
              aK = zt + pw(nr);
            gw(Qx);
            gw(Qx);
            mr = uw(aK)
          } else {
            var bK = hw(Kr);
            mr = uw(gw(bK))
          }
          ga = Hw(Cw(pj + da[$b] + Hd), Gw(yk, {
            href: mr,
            target: xk
          }, da[uc]), Cw(Gd + da.lineNumber + Fd + da[Yb] + xf + tC(void 0) + wf))
        } catch (cK) {
          ga = Cw(Wi + cK)
        }
        zw(ga);
        rz(d[Ic](b), Qp, a.Vd, !1, a);
        d[ec]();
        qI(a)
      }
    }
  }
  Q.qf = function() {
    if (this.ka[Tc] == Km) {
      rz(this.ka, tr, this.qf, !1, this);
      var a;
      try {
        if (a = Mx(this.ka), V && a[Zb] == Ck && !ia.onLine) {
          qI(this);
          return
        }
      } catch (b) {
        qI(this);
        return
      }
      rI(this, a)
    }
  };
  Q.Vd = function() {
    if (!Pw || (this.ka ? Mx(nI(this)) : null)[Zb] != Ck) {
      rz(nI(this), Qp, this.Vd, !1, this);
      try {
        rI(this, this.ka ? Mx(nI(this)) : null)
      } catch (a) {
        qI(this)
      }
    }
  };

  function rI(a, b) {
    a.qb = !1;
    var c;
    try {
      var d = b[J];
      a.nh = d.textContent || d[gd]
    } catch (e) {
      c = 1
    }
    c || typeof a.e != Vn || (d = a.e(b)) && (c = 4);
    c ? qI(a) : (a[x](Km), a[x](hs), oI(a))
  }
  function qI(a) {
    a.a || (a.qb = !1, a[x](Km), a[x](xn), oI(a), a.a = !0)
  }
  function oI(a) {
    pI(a);
    lI(a);
    a.X = null;
    a[x](sr)
  }

  function pI(a) {
    var b = a.ka;
    b && (Ia(b, null), na(b, null), Ma(b, null), a.d[E](b));
    a.ec && (gA(a.ec), a.ec = null);
    Qw || Pw ? a.ec = fA(a.Ch, 2E3, a) : a.Ch();
    a.ka = null;
    a.Vb = null
  }
  Q.Ch = function() {
    this.ec && (gA(this.ec), this.ec = null);
    for (; 0 != this.d[H];) {
      var a = this.d.pop();
      Dx(a)
    }
  };

  function lI(a) {
    a.X && a.X == iI && Ax(a.X)
  }
  function nI(a) {
    return a.ka ? V && !X(lg) ? a.ka : Mx(a.ka)[Ic](a.Vb + wk) : null
  }
  Q.$g = function() {
    if (this.qb) {
      var a = this.ka ? Mx(nI(this)) : null;
      a && !Py(a, en) ? (rz(nI(this), Qp, this.Vd, !1, this), qI(this)) : fA(this.$g, 250, this)
    }
  };

  function sI(a, b) {
    HA[L](this);
    this.k = a || O;
    this.d = null;
    this.g = [];
    this.b = null;
    this.o = b || Yi;
    this.e = this.f = null
  }
  U(sI, HA);
  Q = sI[I];
  Q.t = function() {
    var a = {
      Cj: this.k,
      method: this.o,
      Dj: this.g,
      dir: dw[Cc](Iu) ? Hr : Vp
    };
    this.W(ey(bI, a))
  };
  Q.W = function(a) {
    this.n = a;
    this.b = MA(this, Kk);
    a = MA(this, Pk);
    this.e = new GB(O);
    RA(this.e, a);
    a = MA(this, Jk);
    this.d = new GB(O);
    RA(this.d, a);
    MA(this, Sn)
  };
  Q.M = function() {
    var a = NA(this);
    a.m(this.e, Gk, S(this.tj, this));
    a.m(this.d, Gk, S(this[x], this, lm))
  };
  Q.tj = function() {
    var a = !0;
    this.f && (a = this.f());
    a && (a = new fI, jz(a, hs, function() {
      this[x](is)
    }), jz(a, xn, function() {
      this[x](Cn)
    }), mI(a, this.b));
    this[x](gs)
  };

  function tI(a, b) {
    for (var c in b) a.b[c] && Na(a.b[c], b[c])
  }
  function uI(a, b) {
    return a.b[b] ? a.b[b][Jc] : O
  }
  Q.B = function() {
    this.e = this.b = this.d = null;
    sI.j.B[L](this)
  };

  function vI(a, b) {
    a.f = b
  };

  function wI(a, b) {
    eI[L](this, a);
    this.e = null;
    this.o = b || {};
    this.g = new $G;
    this.k = this.b = null;
    this.f = new VH((a || {}).eb || O, xI);
    this.f.l = !1
  }
  U(wI, eI);
  var xI = 1 == Ku ? "te-lib-alt" : "te-alt";
  Q = wI[I];
  Q.mc = function(a) {
    wI.j.mc[L](this, a);
    this.f.g(S(this.Pb, this))
  };
  Q.Pb = function() {
    wI.j.Pb[L](this);
    var a = this.d.G,
      b = this.d.k;
    if (a && b) {
      Ox(this.k, a);
      var c = this.g;
      c.n = b;
      Bx(c.a, c.n);
      aH(c);
      yy(this.g.a, !0);
      b = this.d.Pc();
      c = this.d.xa();
      if (this.f.Ha() && b && c) {
        var d = this.d.pa(),
          e = S(this.hi, this);
        this.f && this.f[Yc](e, [d], b, c, 0, !1);
        tI(this.b, {
          gtrans: a,
          text: this.d.pa(),
          hl: Iu,
          langpair: b + Ut + c
        });
        tI(this.b, this.o);
        tI(this.b, {
          client: xI
        })
      }
      this[x](sr)
    }
  };
  Q.t = function() {
    this.W(ey(dI, {
      Rj: Fu.Og
    }))
  };
  Q.W = function(a) {
    this.n = a;
    this.k = MA(this, hl);
    var b = MA(this, Lk);
    this.b = new sI(Zu, zj);
    this.b.g = Vv(this.o);
    vI(this.b, S(function() {
      tI(this.b, {
        utrans: VG(this.e)
      });
      return uI(this.b, st) != uI(this.b, Bo)
    }, this));
    this.b.ha(b);
    mG = Fu.Ti;
    $F = Fu.Og;
    this.e = new LG(void 0, void 0, 0, !0, a);
    this.e.b.g = this.g;
    MG(this.e);
    this.e.w.d = xI;
    RA(this.e, this.k)
  };
  Q.M = function() {
    wI.j.M[L](this);
    var a = NA(this);
    a.m(this.b, lm, S(function() {
      ZG(this.e);
      this[x](lm)
    }, this));
    a.m(this.b, gs, S(function() {
      var a = VG(this.e);
      this.d.G = a && hv(a);
      this[x](gs);
      Ox(this.d.g.h(), Fu.Gg)
    }, this))
  };
  Q.hi = function(a) {
    a && NG(this.e, a)
  };
  Q.Bb = function() {
    yy(this.g.a, !1)
  };
  Q.B = function() {
    this.e && this.e.H();
    this.k = this.g = this.e = null;
    this.f && this.f.H();
    this.f = null;
    this.b && this.b.H();
    this.b = null;
    wI.j.B[L](this)
  };

  function yI(a, b) {
    eI[L](this, a);
    this.g = !1;
    this.f = b || {};
    this.e = null
  }
  U(yI, eI);
  Q = yI[I];
  Q.mc = function(a) {
    yI.j.mc[L](this, a);
    NA(this).m(this.e.h(), Dp, S(this.d.Qc, this.d, !1));
    this.g = this.d.$c;
    this.Pb()
  };
  Q.Pb = function() {
    yI.j.Pb[L](this);
    this.e.Tb(this.d.G);
    var a = this.d.Pc(),
      b = this.d.xa();
    a && b && (tI(this.b, {
      gtrans: this.d.G,
      text: this.d.pa(),
      hl: Iu,
      langpair: a + Ut + b
    }), tI(this.b, this.f));
    this[x](sr);
    this.e.h()[vb]()
  };
  Q.Bb = function() {
    this.d.Qc(this.g)
  };
  Q.t = function() {
    this.W(ey(cI))
  };
  Q.W = function(a) {
    this.n = a;
    a = MA(this, Sm);
    this.e = new oG(O);
    RA(this.e, a);
    uG(this.e);
    sG(this.e);
    a = MA(this, Lk);
    this.b = new sI(Zu, zj);
    this.b.g = Vv(this.f);
    vI(this.b, S(function() {
      tI(this.b, {
        utrans: hv(this.e.oa())
      });
      return uI(this.b, st) != uI(this.b, Bo)
    }, this));
    this.b.ha(a)
  };
  Q.M = function() {
    yI.j.M[L](this);
    var a = NA(this);
    a.m(this.b, lm, S(function() {
      this[x](lm)
    }, this));
    a.m(this.b, gs, S(function() {
      var a = this.e.oa();
      this.d.G = a && hv(a);
      this[x](gs);
      Ox(this.d.g.h(), Fu.Gg)
    }, this))
  };
  Q.B = function() {
    this.e && this.e.H();
    this.e = null;
    this.b && this.b.H();
    this.b = null;
    yI.j.B[L](this)
  };

  function zI(a) {
    Cz[L](this);
    this.g = a;
    this.f = {};
    this.d = new xz(this);
    this.e = null
  }
  U(zI, Cz);
  zI[I].Ug = bu();
  zI[I].lh = bu();
  zI[I].B = function() {
    this.d.H();
    this.d = null
  };

  function AI(a, b, c) {
    if (b = a.g.e[b]) {
      c = c || "undefined" == typeof c;
      for (var d = 0; d < b.Ba[H]; ++d) b.Ba[d] && a.vh(b.Ba[d], c)
    }
  }
  zI[I].vh = function(a, b) {
    jy(a, Fl, b ? Fe : O);
    jy(a, Im, b ? De : O)
  };

  function BI() {
    HA[L](this);
    this.b = null
  }
  U(BI, HA);
  Q = BI[I];
  Q.t = function() {
    this.W(this.a.t(bn, {
      "class": bs
    }))
  };
  Q.W = function(a) {
    this.n = a;
    Fa(a[B], sq)
  };

  function CI(a) {
    var b, c = b;
    b = S(function() {
      Ox(this.h(), O);
      c && c()
    }, a);
    b = S(a.Kj, a, 750, b);
    DI(a, b)
  }
  ua(Q, function() {
    this.b && (this.b[ed](!0), this.b = null);
    Ox(this.h(), O);
    this.F(!1)
  });

  function DI(a, b) {
    a.b = new FA(a.h(), 750);
    zz(NA(a), a.b, Ml, S(function() {
      Fa(this.h()[B], Ol)
    }, a));
    zz(NA(a), a.b, Hn, S(function() {
      this.b = null;
      f[Ub](b, 2E3)
    }, a));
    a.b.Ab()
  }
  Q.Kj = function(a, b) {
    this.K() && (this.b = new EA(this.h(), a), zz(NA(this), this.b, Hn, S(function() {
      b && b()
    }, this)), this.b.Ab())
  };
  Q.F = function(a) {
    Fa(this.h()[B], a ? Ol : sq);
    this.h()[B].opacity = a ? eg : ag
  };
  Q.K = function() {
    return this.h()[B][vc] !== sq && this.h()[B].opacity !== ag
  };

  function EI(a) {
    GD[L](this);
    a = a || {};
    this.I = {};
    this.Ob = {};
    this.D = null;
    this.ng = !1;
    this.Lb = this.b = this.w = null;
    this.L = {};
    this.d = new xz(this);
    this.k = this.e = this.g = this.cb = this.f = this.G = this.ba = null;
    this.o = !0;
    this.bb = [];
    this.Rh = a.mb || !1
  }
  U(EI, GD);
  Q = EI[I];
  Q.ha = function() {
    this.o = !1;
    var a = qD();
    a.a.set(Qm, To);
    var b = dw[Cc](Iu) ? Hr : Vp;
    this.nc(ey(aI, {
      Ji: Vo,
      Vj: Uo,
      Wj: Tu,
      Ki: this.Rh,
      Li: a[Pb](),
      dir: b
    }));
    $a(this, this[id] + Nd);
    if (a = !! (this.h() && this.D && this.cb && this.g.h() && this.w && this.k)) this.d.m(f, yr, S(this.ob, this)), this.d.m(this, Jo, S(this.Ni, this)), this.bb[H] && (a = this.We[rc](this, this.bb), this.bb = []);
    return a
  };
  Q.We = function(a) {
    for (var b = [], c = 0; c < arguments[H]; ++c) {
      var d = arguments[c];
      if (d) if (this.D || d.ne) {
        var e;
        e = d;
        var g = tx(Xr, {
          "class": e[id] || Mk
        });
        Ox(g, e.bf || O);
        e = g;
        b[E](e);
        zx(d.ne || this.D, e);
        d.mc && d.Bb && (g = S(this.vj, this, d), this.d.m(e, um, g), d.Od && this.d.m(this.w, d.Od, g));
        d.id = d.id || KA(d);
        this.I[d.id] && this.hh(d);
        this.I[d.id] = d;
        this.Ob[d.id] = e
      } else this.bb[E](d)
    }
    return b
  };
  Q.hh = function(a) {
    for (var b = 0; b < arguments[H]; ++b) {
      var c = nu(arguments[b]) || arguments[b] instanceof p ? arguments[b] : arguments[b].id,
        d = this.I[c],
        e = this.Ob[c];
      d && e && (this.b && this.b.id === c && this.of(), this.d.U(d, [gs, lm]), d.H(), this.L[c] && delete this.L[c], delete this.I[c], delete this.Ob[c], Dx(e))
    }
  };
  Q.vj = function(a) {
    if (this.w) {
      a != this.b && this.b && (this.g[Eb](), this.b.Bb[L](this.b), this.b.h() && Fa(this.b.h()[B], sq), FI(this, !1), this.b = null);
      FI(this, !0);
      this.g[Eb]();
      this.b = a;
      var b = null,
        c = null;
      this.L[a.id] ? (b = this.L[a.id], c = a.Pb) : (a.ha(), b = a.h(), c = a.mc, this.d.m(a, [gs, lm], S(this.of, this)), a.Id && (this.L[a.id] = b));
      zx(this.w, b);
      c[L](a, this);
      a = new FA(b, 100);
      zz(this.d, a, Hn, S(this.ob, this, !0, !0));
      a.Ab()
    }
  };
  Q.of = function() {
    if (this.b) if (this.g[Eb](), this.b.Bb[L](this.b), this.b.h()) {
      var a = new EA(this.b.h(), 100);
      zz(this.d, a, Hn, S(function() {
        Dx(this.b.h());
        this.b = null;
        FI(this, !1);
        Vx(this.g.h()) && (CI(this.g), this.ob(!0, !0))
      }, this));
      a.Ab()
    } else FI(this, !1), this.b = null
  };
  Q.Of = function(a, b) {
    this.Lb = a;
    EI.j.Of[L](this, a, b);
    Fa(this.h()[B], Ol)
  };
  Q.ag = function(a) {
    if (!this.o) {
      var b = RD(this, a[K]);
      this.za = b;
      MD(this);
      b != this.a ? (this.a = b, SD(this, b), TD(this), QD(this, a)) : SD(this, b)
    }
  };
  Q.Ni = function() {
    this.g[Eb]();
    this.ng && this.of()
  };
  Q.B = function() {
    for (var a in this.I) this.hh(a);
    this.d && this.d.H();
    this.d = null;
    this.g && this.g.H();
    this.k = this.cb = this.Lb = this.w = this.D = this.g = null;
    EI.j.B[L](this)
  };

  function FI(a, b) {
    a.ng = b;
    a.o = b;
    if (a.o) {
      var c = a.h();
      a.ba = new Iw(c[pd], c[wc])
    } else a.ba && ((a.p || null).a = a.ba, oy(a.h(), a.ba), a.ba = null);
    Fa(a.D[B], b ? sq : jp);
    Fa(a.cb[B], b ? jp : sq)
  }
  Q.Qc = function(a) {
    if (this.K()) {
      a = (this.$c = a) ? this.l.m : this.l.U;
      var b = ix(this.h());
      a[L](this.l, b, dq, this.Hf, !0)
    } else EI.j.Qc[L](this, a)
  };
  Q.nc = function(a) {
    EI.j.nc[L](this, a);
    if (a) {
      this.D = mx(Nk, a);
      var b = mx(bs, a);
      b && (this.g = new BI, RA(this.g, b));
      this.cb = mx($r, a);
      this.w = mx(Ok, a);
      this.k = mx(Jq, a)
    }
  };
  Q.ob = function(a, b) {
    var c;
    c = uy(k[J]).y;
    if (this.p) {
      (this.p || null).a.y += c;
      EI.j.ob[L](this);
      var d = ka(this.h()[B][G], 10),
        e = ka(this.h()[B].top, 10) - (a ? 0 : c);
      if (b) var g = this.cf || null || {}, e = e - (g.top || 10),
        d = d - (g[G] || 10);
      e -= c;
      (this.p || null).a.y = e;
      (this.p || null).a.x = d;
      oy(this.h(), new Iw(d, e))
    }
  };
  Q.F = function(a) {
    EI.j.F[L](this, a)
  };
  Q.Nd = cu(Bn);
  Q.wa = cu(gn);
  Q.Sa = function(a) {
    a = a ? hv(a) : O;
    this.k ? Ox(this.k, a) : EI.j.Sa[L](this, a)
  };
  Q.Pc = du(Bn);
  Q.xa = du(gn);
  Q.pa = function() {
    return this.k ? Vx(this.k) : EI.j.pa[L](this)
  };
  Q.Dc = function(a) {
    this.o || EI.j.Dc[L](this, a)
  };
  Q.ce = function(a) {
    this.o || EI.j.ce[L](this, a)
  };
  Q.ae = function(a) {
    this.o || EI.j.ae[L](this, a)
  };

  function GI(a, b) {
    zI[L](this, a);
    b = b || {};
    this.b = {
      eb: b.eb || O,
      Mb: b.Mb || 1,
      mb: b.mb
    };
    this.a = null;
    this.a = new EI({
      mb: this.b.mb
    });
    this.a.ff = 300;
    this.a.df = 1E3;
    this.a.Qc(!0);
    this.d.m(this.a, Rr, S(this.Hi, this));
    this.d.m(this.a, Jo, S(this.Gi, this));
    var c = new wI({
      eb: this.b.eb,
      id: il,
      bf: Fu.zi,
      Id: !0
    }, this.f);
    this.a.We(c);
    this.d.m(c, gs, S(this.Eg, this));
    this.b.Mb && (c = new yI({
      id: Rm,
      Od: Um,
      Id: !0
    }, this.f), this.a.We(c), this.d.m(c, gs, S(this.Eg, this)));
    this.a.ha()
  }
  U(GI, zI);
  Q = GI[I];
  Q.Jb = function(a) {
    this.G = a;
    if (this.G == gn || this.G == yk) this.a.ff = 600, this.a.df = 600
  };
  Q.Ug = function(a, b) {
    b && (b.a = a, HD(this.a, b))
  };
  Q.lh = function(a) {
    a && JD(this.a, a)
  };
  Q.Hi = function() {
    var a = this.a.Lb;
    if (a && void 0 !== a.a) {
      var b = a.a,
        a = this.g.e[b];
      AI(this, this.e, !1);
      this.e = b;
      AI(this, b);
      this.a.Nd(a.Vi);
      this.a.wa(a.Wi);
      b = a.S;
      this.a.G = b && hv(b);
      this.a.Sa(a[Ec])
    }
  };
  Q.Gi = function() {
    AI(this, this.e, !1)
  };
  Q.Eg = function() {
    this.g.e[this.e].Zi[x](ot)
  };
  Q.B = function() {
    this.a.H();
    this.a = null;
    GI.j.B[L](this)
  };
  Q.vh = function(a, b) {
    Sv[b ? Qk : vr](a, vo)
  };

  function HI(a) {
    My[L](this);
    a = a || {};
    this.b = Zv(a);
    this.b.Mb = a.Mb;
    this.b.Me = !! a.Me;
    this.b.mb = !! a.mb;
    this.b.xi = ka(a.xi, 10) || 300;
    this.b.yi = a.yi;
    this.f = 0;
    this.e = {};
    this.d = new xz(this);
    this.a = new GI(this, this.b)
  }
  U(HI, My);
  HI[I].Jb = function(a) {
    this.a.Jb && this.a.Jb(a)
  };

  function II(a, b, c, d, e, g) {
    c = a.e[++a.f] = {
      id: a.f[Pb](),
      Zi: g,
      text: c,
      Yj: e || c,
      S: d,
      Vi: a.g,
      Wi: a.l,
      Ba: b
    };
    for (d = 0; d < b[H]; ++d) b[d] && a.a.Ug(c.id, b[d]);
    return c.id
  }

  function JI(a, b) {
    var c = a.e[b];
    if (c) {
      for (var d = 0; d < c.Ba[H]; ++d) c.Ba[d] && a.a.lh(c.Ba[d]);
      delete a.e[b]
    }
  }
  HI[I].B = function() {
    for (var a in this.e) JI(this, a);
    this.d.H();
    this.d = null;
    this.a.H();
    this.a = null
  };

  function KI(a, b) {
    this.a = new BE(a, !1, b, 1, 1);
    this.d = V ? [] : null;
    this.b = [];
    for (var c = a; c = c[M];) LI(this, c, !0);
    this.b[E](!1);
    this.b.reverse();
    for (c = 1; c < this.b[H]; ++c) null == this.b[c] && (this.b[c] = this.b[c - 1]);
    this.e = !1
  }
  uH(52754, KI[I], {
    Ii: 1
  });

  function LI(a, b, c) {
    var d = (b[B] && b[B].whiteSpace || O)[yd](0, 3);
    d == cr || !d && b[sc] == Aj ? a.b[E](!0) : d && d != cr ? a.b[E](!1) : c ? a.b[E](null) : a.b[E](a.b[a.b[H] - 1])
  }
  KI[I].s = function() {
    return this.a.s
  };
  ya(KI[I], function() {
    try {
      this.d && 0 < this.d[H] && -1 == this.a.$ && this.d.length--, -1 == this.a.$ && this.b.length--, this.d && 0 < this.d[H] && 1 != this.a.$ && !this.a.s[Ib] ? CE(this.a, this.d[this.d[H] - 1], -1, this.a.a - 1) : (this.a[Vb](), this.d && 1 == this.a.$ && this.d[E](this.a.s)), 1 == this.a.$ && this.a.Rd && LI(this, this.a.s)
    } catch (a) {
      a != hC && this.Ii(a), this.e = !0
    }
  });

  function MI(a, b, c, d, e, g) {
    Cz[L](this);
    this.a = [];
    for (var h = 0; h < a[H]; ++h) this.a[E](qq in a[h] ? NI(a[h]) : a[h]), OI(a[h].s);
    this.g = b;
    this.Nc = d || 0;
    this.Sh = e || 0;
    this.l = c;
    this.o = g || null;
    this.k = this.A = this.D = !1;
    this.b = [];
    this.f = [];
    this.e = [];
    this.p = [];
    this.d = new xz(this);
    this.Qe = this.C = !1
  }
  var NI;
  U(MI, Cz);
  var PI = "_gt_" + l[lc]()[Pb](36)[Nb](2),
    QI = "_gtn_" + l[lc]()[Pb](36)[Nb](2);
  MI[I].cd = du(yk);

  function RI(a) {
    if (!a) return !1;
    if (3 != a[F] || !V) return PI in a && !! a[PI];
    if (!a[M]) return !0;
    if (!(QI in a[M])) return !1;
    var b = a[M][QI];
    if (!b || !b[a[zc]]) return !1;
    for (var b = b[a[zc]], c = 0; c < b[H]; ++c) if (b[c] == a) return !0;
    return !1
  }(function() {
    function a(a) {
      Ya(k, a)
    }
    var b = {};
    NI = function(c, d) {
      if (c[sc] == Mj) return {
        s: c,
        Sa: a,
        Sc: !0,
        sg: !0,
        Ye: !0
      };
      if (3 == c[F]) return {
        s: c,
        Sa: function(a, b) {
          Ox(b, a)
        }
      };
      d || (d = ut);
      b[d] || (b[d] = function(a, b) {
        !V && b[Cb] && b[Cb](d, a);
        nu(a) && (b[d] = a)
      });
      var e = {
        s: c,
        Sa: b[d],
        Sc: !0
      };
      d != ut && (e.Ye = !0);
      return e
    }
  })();

  function SI(a, b) {
    if (!a) return O;
    if (a[sc] == Mj) return p(k.title);
    3 == a[F] ? b = rq : b || (b = ut);
    return !V && a[sd] && a[sd](b) ? p(a[sd](b)) : nu(a[b]) ? p(a[b]) : O
  }
  MI[I].ya = du(Wn);
  (function() {
    function a(a, c, d, e) {
      e = e[y] && 3 == e[y][F] ? e[y][zc] : Vx(e);
      e = {
        P: d,
        S: vv(e)
      };
      a[E](e);
      c[d] ? c[d].end = e : c[d] = {
        start: e,
        end: e
      };
      return e
    }
    MI[I].G = function(b) {
      var c = gu(void 0) ? void 0 : this.w;
      if (c) {
        this.D = !0;
        delete this.w;
        gu(void 0) && (this.k = void 0);
        this.e = [];
        var d = k[xb](bn);
        yy(d, !1);
        La(d, 0 <= c[Lc](ii) ? c : Yh + c + Nh);
        k[J][r](d);
        for (var e, c = [], g = d[y]; g; g = g[Ib]) if (g[sc] == cj) e = {
          qg: Vx(g),
          Dd: g.innerHTML,
          Y: []
        }, this.e[E](e);
        else if (g[sc] == Ei) {
          e || (e = {
            qg: O,
            Dd: O,
            Y: []
          }, this.e[E](e));
          if (1 == this.a[H]) a(e.Y, c, 0, g);
          else {
            e = e.Y;
            for (var h = 0, n = [], q = g[y]; q; q = q[Ib]) q.attributes && q.attributes.i ? (h = ka(q.attributes.i[zc], 10), !ea(h) && 0 <= h && h < this.a[H] && (this.a[h].Sc && n[h] ? n[h].S += q[y] && 3 == q[y][F] ? q[y][zc] : Vx(q) : n[h] = a(e, c, h, q))) : 3 == q[F] && e[E]({
              P: -1,
              S: vv(q[zc])
            }); - 1 == e[0].P && (1 == e[H] ? e[0].P = 0 : (e[1].S = e[0].S + e[1].S, e[eb]()))
          }
          e = void 0
        }
        for (h = 0; h < this.e[H] - 1; ++h) e = this.e[h], g = jv(e.Y[e.Y[H] - 1].S), g = g[vd](g[H] - 1), 12288 <= g && 12351 >= g || 65280 <= g && 65519 >= g || (e.Y[e.Y[H] - 1].S += P);
        Dx(d);
        for (h = 0; h < this.a[H]; ++h) if (d = c[h]) g = this.l[h], e = g[yd](0,
        g[H] - iv(g)[H]), g = g[yd](jv(g)[H]), e == P && (e = O), g == P && (g = O), e && (d[kc].S = e + iv(d[kc].S)), g && (d.end.S = jv(d.end.S) + g);
        1 != this.e[H] || this.e[0].Dd || (this.e[0].Dd = this.g);
        b && (b[rb][this.g] = this.e);
        TI(this)
      }
    }
  })();

  function UI(a, b, c) {
    return b && (b.lb[a.g] || b[rb][a.g] || !! c && (a.g in b.lb || a.g in b[rb]))
  }

  function TI(a, b) {
    UI(a, b) && (a.e = b[rb][a.g], a.e || (a.e = b.lb[a.g], b[rb][a.g] = a.e), a.D = !0);
    if (a.D && !a.A && !a.k && (a.A = !0, VI(a.a), a.a[H])) if (a.f = [], a.b = [], 1 == a.a[H] && a.a[0].Ye) {
      for (var c = [], d = 0; d < a.e[H]; ++d) for (var e = a.e[d], g = 0; g < e.Y[H]; ++g) c[E](e.Y[g].S);
      a.a[0].Sa(c[N](P), a.a[0].s)
    } else {
      d = null;
      for (g = 0; g < a.a[H]; ++g) if (a.a[g].s) {
        d = a.a[g].s;
        break
      }
      if (d) {
        var c = [],
          h = [],
          d = new KI(d, !0);
        d[Vb]();
        var e = a.a[a.a[H] - 1].s,
          n = 0,
          g = !1;
        do {
          d[Vb]();
          var q = d.s();
          if (!q) break;
          for (var t = d.a.a, w = d.a.$; n < a.a[H] && !a.a[n].s;)++n;
          if (q == a.a[n].s || !g && 1 == w && q[Ob]) {
            var w = WI(a, q),
              z = a.b[H];
            a.b[E]({
              s: w
            });
            q == a.a[n].s ? (c[z] = a.a[n].Sc ? t - 1 : t, a.f[n] = z, Bx(w, q), g = !0, ++n) : (c[z] = t, Bx(w, q))
          } else g = !1
        } while (q != e);
        for (g = 0; g < a.a[H]; ++g) if (h[g] = [], a.a[g].s && gu(a.f[g])) for (d = 0; d < a.b[H]; ++d) if (!(c[d] > c[a.f[g]])) {
          if (c[d] == c[a.f[g]]) {
            if (a.b[d].s[M] != a.b[a.f[g]].s[M]) continue
          } else {
            e = c[a.f[g]] - c[d];
            for (n = a.b[a.f[g]].s[M]; e-- && n && n != a.b[d].s[M];) n = n[M];
            if (n != a.b[d].s[M]) continue
          }
          h[g][E](d)
        }
        q = -1;
        for (d = a.e[H] - 1; 0 <= d; --d) for (e = a.e[d], g = e.Y[H] - 1; 0 <= g; --g) {
          var A = e.Y[g];
          if (!(0 > A.P) && a.a[A.P] && a.a[A.P].s) if (0 > q) A.Gd = dH(h[A.P]), q = h[A.P][h[A.P][H] - 1];
          else for (n = h[A.P][H] - 1; 0 <= n; --n) if (h[A.P][n] <= q) {
            A.Gd = dH(h[A.P][Hc](0, n + 1));
            q = h[A.P][n];
            break
          }
        }
        for (d = n = 0; d < a.e[H]; ++d) {
          e = a.e[d];
          q = e.qg;
          if (!q) {
            q = a.a[H];
            t = -1;
            for (g = 0; g < e.Y[H]; ++g) h = e.Y[g].P, 0 > h || !a.a[A.P].s || (h > t && (t = h), h < q && (q = h));
            h = [];
            for (g = q; g <= t; ++g) a.l[g] && h[E](a.l[g] || O);
            q = h[N](O)
          }
          h = [];
          for (g = 0; g < e.Y[H]; ++g) if (A = e.Y[g], h[E](A.S), 0 > A.P) {
            t = a.f[e.Y[g - 1].P];
            if (gu(t)) var T = c[t];
            if (g < e.Y[H] - 1 && (t = a.f[e.Y[g + 1].P], gu(t))) var ga = c[t];
            if (gu(T) || gu(ga)) t: if (w = (!gu(T) || ga < T) && g < e.Y[H] - 1, t = e.Y[w ? g + 1 : g - 1], a.a[t.P].s) {
              z = A.S;
              A.S = O;
              if (/^ +$/ [Cc](z)) {
                var da = w ? t.S[vd](0) : t.S[vd](t.S[H] - 1);
                if (3584 <= da && 3711 >= da || 12288 <= da && 12351 >= da || 12352 <= da && 12543 >= da || 12784 <= da && 12799 >= da || 19968 <= da && 40959 >= da || 65280 <= da && 65519 >= da) break t
              }
              t.S = w ? z + t.S : t.S + z
            }
          }
          w = [];
          for (g = 0; g < e.Y[H] && !(n >= a.b[H]); ++g) if (A = e.Y[g], A.Gd && !(0 > A.P) && a.a[A.P].s && A.S) if (n == a.f[A.P] || n in A.Gd && (!(n + 1 in A.Gd) || n + 1 != a.f[A.P])) {
            if (a.b[n] && a.b[n].s) {
              t = WI(a, a.b[n].s);
              w[E](t);
              for (var z = a.b[n].s, da = c[a.f[A.P]] - c[n], Wa = t, Rc = a.a[A.P].s[M], cc = Wa; Rc && da--;) cc = Rc.cloneNode(!1), cc[r](Wa), Rc = Rc[M], Wa = cc;
              z[r](cc);
              z = a.a[A.P].s;
              a.a[A.P].Sc ? a.a[A.P].sg || t[r](z) : (z = a.a[A.P].s.cloneNode(!1), z.id && (z.id = O), t[r](z));
              a.a[A.P].Sa(A.S, z)
            }
          } else ++n, --g;
          if (a.o) 3 != a.o.b.Mb && a.p[E](II(a.o, w, q, h[N](O), e.Dd, a));
          else for (g = 0; g < w[H]; ++g) Ya(w[g], q)
        }
        for (g = 0; g < a.a[H]; ++g) a.a[g].s && !a.a[g].Sc && Dx(a.a[g].s);
        for (d = g = 0; d < a.b[H]; ++d) if (t = a.b[d].s) {
          for (; g < a.a[H] && d > a.f[g];) g++;
          (g >= a.a[H] || d != a.f[g]) && !t[y] && (Dx(t), a.b[d].s = null)
        }
      }
    }
  }
  Da(MI[I], function() {
    if (this.A) {
      this.A = !1;
      if (0 < this.p[H]) {
        for (var a = 0; a < this.p[H]; ++a) JI(this.o, this.p[a]);
        this.p = []
      }
      VI(this.b);
      if (1 == this.a[H] && this.a[0].Ye) this.a[0].Sa(this.l[0], this.a[0].s);
      else {
        for (var b = a = 0; b < this.b[H]; ++b) {
          var c = this.b[b].s;
          if (c) {
            for (; a < this.a[H] && b > this.f[a];) {
              var d = a++;
              this.a[d].s && (XI(this.a[d].s), this.a[d].s = null)
            }
            if (a < this.a[H] && b == this.f[a] && this.a[a].s) {
              this.a[a].sg || (Ax(c), c[r](this.a[a].s));
              this.a[a].Sa(this.l[a], this.a[a].s);
              a++;
              var d = void 0,
                e = c[M];
              if (e && 11 != e[F]) if (c.removeNode) c.removeNode(!1);
              else {
                for (; d = c[y];) e[pb](d, c);
                Dx(c)
              }
            } else Dx(c)
          }
        }
        this.b = []
      }
    }
  });
  MI[I].B = function() {
    MI.j.B[L](this);
    this[pc]();
    for (var a = 0; a < this.a[H]; ++a) this.a[a].s && XI(this.a[a].s);
    this.a = null
  };

  function OI(a) {
    if (a) if (3 == a[F] && V) {
      QI in a[M] && a[M][QI] || (a[M][QI] = {});
      var b = a[M][QI];
      b[a[zc]] || (b[a[zc]] = []);
      for (var b = b[a[zc]], c = 0; c < b[H]; ++c) if (b[c] == a) return;
      b[E](a)
    } else a[PI] = 1
  }

  function XI(a) {
    if (!a || 3 == a[F] && V) {
      var b = a[M];
      if (b && QI in b) {
        var c = b[QI];
        if (c && a && c[a[zc]]) {
          var d = c[a[zc]];
          if (d) for (var e = 0; e < d[H]; ++e) if (d[e] == a) {
            d[Bd](e, 1);
            break
          }
          0 == d[H] && delete c[a[zc]]
        }
        if (c && sH(c)) try {
          delete b[QI]
        } catch (g) {
          b[QI] = O
        }
      }
    } else if (PI in a) try {
      delete a[PI]
    } catch (h) {
      a[PI] = O
    }
  }
  function VI(a) {
    for (var b = 0; b < a[H]; ++b) try {
      a[b].s && !a[b].s[M] && (a[b].s = null)
    } catch (c) {
      a[b].s = null
    }
    for (b = a[H] - 1; 0 <= b && !a[b].s; --b);
    Xa(a, b + 1)
  }

  function WI(a, b) {
    var c = b[fc] ? b[fc][xb](Pn) : k[xb](Pn);
    OI(c);
    a.C && (c[B].fontWeight = tq);
    return c
  };

  function YI(a, b) {
    this.A = a || null;
    this.w = b || Au.ia();
    this.e = this.f = this.D = null;
    this.l = this.d = !1;
    this.p = null;
    this.a = [];
    this.b = 0
  }
  function ZI() {}
  function $I() {}
  function aJ(a, b) {
    a.d || (a.D = b)
  }
  function bJ(a, b) {
    a.e = b
  }
  YI[I].g = function(a) {
    this.d || (this.d = !0, this.o = a, this.b++, this.p = this.D, this.k())
  };
  Va(YI[I], function() {
    this.b++;
    this.d = !1;
    this.a = []
  });

  function cJ(a) {
    if (!a.d) return null;
    for (var b = !1, c = 0; c < a.a[H]; ++c) if (a.a[c][K] === a) {
      a.a[c].ready = !1;
      a.a[c].Tg = a.b + 1;
      b = !0;
      break
    }
    b || a.a[E]({
      target: a,
      ready: !1,
      Tg: a.b + 1
    });
    return S(a.k, a, a, a.b + 1)
  }
  function dJ(a) {
    if (!a.d) return !0;
    for (var b = 0; b < a.a[H]; ++b) if (a.a[b][K] === a && a.a[b].Tg == a.b) return a.a[b].ready;
    return !0
  }
  YI[I].k = function(a, b) {
    if (this.d) {
      if (a) for (var c = 0; c < this.a[H]; ++c) if (this.a[c][K] === a) {
        this.a[c].ready = !0;
        break
      }
      this.l || this.w.add(S(this.Ra, this, b || this.b))
    }
  };
  YI[I].Ra = function(a) {
    if (this.b != a) return !1;
    a = this.p;
    if (a == $I) return this[ed](), this.f && this.f[L](this.A, this, this.o), !1;
    this.l = !0;
    var b;
    try {
      if (b = a[L](this.A, this, this.o), !b) throw m();
    } catch (c) {
      this[ed]();
      if (this.e) this.e[L](this.A, c, this, this.o);
      else throw c;
      return !1
    } finally {
      this.l = !1
    }
    b != ZI && (this.p = b, this.b++, this.k());
    return !1
  };

  function eJ(a, b, c, d, e) {
    b = b || {};
    this.Ra = e || [];
    this.g = [];
    this.k = [];
    fJ(this, a || k[Mb], !gu(b.vg) || !! b.vg);
    this.l = c || MI;
    this.D = b.ii;
    this.d = this.a = this.f = this.Jc = null;
    this.p = !! b.Ic;
    this.C = !! b.ji;
    this.w = this.p ? 27 : 13;
    this.o = !0;
    this.A = [];
    this.e = new YI(this, d)
  }
  uH(5762, eJ[I], {
    aj: 1
  });

  function gJ(a, b, c, d) {
    a.e.d || (b = {
      Mg: b,
      Lg: c,
      Ba: [],
      Kg: [],
      Ub: [],
      Td: 0,
      size: 0,
      pb: !0
    }, a.Jc = null, aJ(a.e, a.b), a.e.f = d, bJ(a.e, S(function(a) {
      this.aj(a);
      d()
    }, a)), a.e.g(b))
  }

  function hJ(a, b) {
    return 0 < a.Ba[H] ? new b(a.Ba, a.Ub[N](O), a.Kg, a.Td, a[Tb]) : null
  }

  function iJ(a, b) {
    if (!a.d) return a.Jc = hJ(b, a.l), !0;
    if (!b.pb && 0 < b.Ba[H]) return a.Jc = hJ(b, a.l), !0;
    b.pb = a.d.mg;
    var c;
    t: {
      c = a.d;
      var d = a.w;
      if (b[Tb] > b.Lg || b.Td > b.Mg) c = !1;
      else {
        var e = c[Tb],
          g = c[Ec][H];
        if (0 != b.Ba[H] && (e += 1 == b.Ba[H] ? b[Tb] + d + d : b[Tb] + d, g += b.Td, e > b.Lg || g > b.Mg)) {
          c = !1;
          break t
        }
        b.size = e;
        b.Td = g;
        b.Ba[E](c.s);
        b.Kg[E](c[Ec]);
        d = b.Ba[H] - 1;
        if (0 == d) b.Ub[E](c.Re);
        else 1 == d && (b.Ub[0] = Xh + b.Ub[0] + Lh), b.Ub[E](Wh + d + xi), b.Ub[E](c.Re), b.Ub[E](Lh);
        c = !0
      }
    }
    if (c) return a.d = null,
    !1;
    a.Jc = hJ(b, a.l);
    return !0
  }

  function jJ(a, b, c) {
    var d = SI(b, c);
    d && hv(fv(d)) && a.A[E]({
      s: b,
      di: c,
      text: d
    })
  }
  eJ[I].b = function(a, b) {
    if (this.d && iJ(this, b)) return $I;
    if (!this.a) {
      this.o = !! this.g[H];
      if (!this.g[H]) {
        var c = this.A[eb]();
        if (c) return this.d = {
          mg: !1,
          s: NI(c.s, c.di),
          text: c[Ec],
          Re: nv(c[Ec]),
          size: this.p ? kv(c[Ec])[H] : c[Ec][H]
        }, b.pb = !1, iJ(this, b), $I
      }
      c = this.g[eb]() || this.k[eb]();
      if (!c) return this.d = null, iJ(this, b), $I;
      this.f = [c.ei];
      this.a = new KI(c.root)
    }
    this.a[Vb]();
    if (this.a.e) return this.a = null, b.pb = !1, this.b;
    var c = this.a.s(),
      d = this.a.a.$;
    if (-1 == d) {
      kJ(this);
      if (!c || 3 != c[F] && !lJ[c[sc]]) b.pb = !1;
      return this.b
    }
    var e = !RI(c) && (c[F] == ev && mJ(this) || !mA(c, uq) && (mA(c, Ys) || mJ(this)));
    this.f[E](e);
    d = 1 == d;
    if (((e = !! c && (3 == c[F] && nu(c[zc]) || c[sc] == Mj && nu(c[Jc]) || c[sc] == Lj && mA(c, Ys) || c[sc] == fj && (nJ[c[Xc]] || mA(c, Ys)))) || d) && this.o && !oJ(c)) return fJ(this, c, mJ(this), !0), this.a.a.zb(), kJ(this), this.b;
    if (d && mJ(this)) {
      this.C && jJ(this, c, Ks);
      jJ(this, c, al);
      var g = this.a;
      if (g.b[g.b[H] - 1]) for (g = c[y]; g;) {
        if (3 == g[F]) {
          var h = g[zc][Wb](Ed);
          if (2 < h[H] || 2 == h[H] && hv(h[0]) != O && hv(h[1]) != O) {
            g.nodeValue = h[0];
            for (var n = 1; n < h[H]; ++n) {
              var q = ix(c)[xb](Pn);
              this.Ra[E](q);
              Cx(q, g);
              g = q;
              Cx(ix(c)[ob](Ed + h[n]), g);
              g = g[Ib]
            }
          }
        }
        g = g[Ib]
      }
    }
    if (e) {
      this.a.a.zb();
      if (mJ(this)) {
        var t = SI(c);
        if (hv(fv(t)) && (this.d = {
          mg: !0,
          s: NI(c),
          text: t,
          Re: nv(t),
          size: this.p ? kv(t)[H] : t[H]
        }, iJ(this, b))) return kJ(this), $I
      }
      kJ(this);
      return this.b
    }
    if (d) {
      if (pJ(c) || !c[y] && c[sc] != dj) return b.pb = b.pb && !! qJ[c[sc]], this.a.a.zb(), kJ(this), this.b;
      if (c[sc] == dj) {
        try {
          c.src[sb](/https?:\/\//) && AC(c.src) != f[Zb][dc] || (t = Mx(c)[Mb]) && fJ(this, t, mJ(this))
        } catch (w) {}
        b.pb = !1;
        this.a.a.zb();
        kJ(this);
        return this.b
      }
      mJ(this) && c && (3 == c[F] || lJ[c[sc]]) ? this.D && c[sc] == Bi && c[oc] && this.D(c) : b.pb = !1;
      return this.b
    }
    this.a.a.zb();
    kJ(this);
    return this.b
  };

  function pJ(a) {
    return RI(a) || 3 != a[F] && (!a[sc] || rJ[a[sc]] || qJ[a[sc]] || mA(a, Sr) || a.id == Co)
  }
  function oJ(a) {
    if (3 == a[F]) return !0;
    if (1 != a[F]) return !1;
    if (!a[lb] || !a[xc]) {
      var b = ix(a),
        c = null;
      b[Zc] && b[Zc][bc] ? c = b[Zc][bc](a, null) : c = a[xd];
      return c && c[vc] != sq && c.visibility != Io
    }
    return !0
  }
  var lJ = dH([Bi, "ABBR", "ACRONYM", Ei, "BASEFONT", "BDO", "BIG", "CITE", "CODE", "DFN", "EM", "FONT", cj, fj, "NOBR", "KBD", "LABEL", "Q", "S", "SMALL", Fj, "STRIKE", "STRONG", "SUB", "SUP", Lj, "TT", "U", "VAR"]),
    rJ = dH([Ci, Di, Fi, Xi, "FRAMESET", aj, jj, kj, tj, uj, fj, Lj, Mj]),
    qJ = dH([Hi, ej, "MAP", xj, yj, Dj, Gj, Yj]),
    nJ = dH([fs, em]);

  function fJ(a, b, c, d) {
    (d ? a.k : a.g)[E]({
      root: b,
      ei: !gu(c) || c
    })
  }
  function mJ(a) {
    return a.f[a.f[H] - 1]
  }
  function kJ(a) {
    a.f.pop()
  };
  var sJ = function() {
    var a;
    return Tw ? (a = /Windows NT ([0-9.]+)/, (a = a[fb](Lw)) ? a[1] : ag) : Sw ? (a = /10[_.][0-9_.]+/, (a = a[fb](Lw)) ? a[0][v](/_/g, Tf) : gg) : Uw ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a[fb](Lw)) ? a[1] : O) : Vw || Ww ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a[fb](Lw)) ? a[1][v](/_/g, Tf) : O) : O
  }();

  function tJ(a) {
    this.b = a[Cd]();
    this.a = a[H] - 1;
    this.d = 0
  }
  var uJ = {
    ach: 1,
    at: 1,
    bl: 1,
    c: 1,
    dg: 1,
    iz: 1,
    v: 1
  };

  function vJ(a) {
    if (0 < a.a) switch (a.b[a.a - 1]) {
      case yk:
        if (Z(a, Js) && wJ(a, Is)) return !0;
        break;
      case fm:
        if (Z(a, rn) && wJ(a, qn) || Z(a, pl) && wJ(a, ol)) return !0;
        break;
      case gn:
        if (Z(a, wp) && wJ(a, vp)) return !0;
        break;
      case Hp:
        if (Z(a, Ql) && wJ(a, Nl) || Z(a, Zk) && wJ(a, Vk) || Z(a, vn) && wJ(a, tn) || Z(a, ln) && wJ(a, gn) || Z(a, Nq) && wJ(a, Mq)) return !0;
        break;
      case yq:
        if (Z(a, up) && wJ(a, vp) || Z(a, yl) && wJ(a, xl) || Z(a, Al) && wJ(a, xl)) return !0;
        break;
      case mq:
        if (Z(a, Xo) && wJ(a, Jt)) return !0;
        break;
      case Ir:
        if (Z(a, Wk) && wJ(a, Vk) || Z(a, sp) && wJ(a, rp) || Z(a, Un) && wJ(a,
        Tn) || Z(a, Oq) && wJ(a, Mq)) return !0;
        break;
      case ks:
        if (Z(a, Xk) && wJ(a, Vk) || Z(a, tp) && wJ(a, rp)) return !0;
        if (Z(a, zk)) return xJ(a, Ak), !0;
        if (Z(a, dp) && wJ(a, cp)) return !0;
        break;
      case it:
        if (Z(a, Tn) && wJ(a, O)) return !0;
        break;
      case Wn:
        if (Z(a, Tp) && wJ(a, Sp)) return !0;
        break;
      case Kt:
        if (Z(a, Yk) && wJ(a, Vk)) return !0
    }
    return !1
  }

  function yJ(a) {
    if (0 != a.a) {
      switch (a.b[a.a - 1]) {
        case yk:
          if (Z(a, Vk)) break;
          return;
        case fm:
          if (Z(a, ol)) break;
          if (Z(a, qn)) break;
          return;
        case gn:
          if (Z(a, wn)) break;
          return;
        case Wo:
          if (Z(a, Zo)) break;
          return;
        case Hp:
          if (Z(a, Ak)) break;
          if (Z(a, Yo)) break;
          return;
        case mq:
          if (Z(a, rl)) break;
          if (Z(a, mn)) break;
          if (Z(a, Xp)) break;
          if (Z(a, tn)) break;
          return;
        case yq:
          if (Z(a, op) && 0 <= a.d && (a.b[a.d] == Ir || a.b[a.d] == ks)) break;
          if (Z(a, Lq)) break;
          return;
        case Ir:
          if (Z(a, pp)) break;
          return;
        case ks:
          if (Z(a, qp)) break;
          return;
        case it:
          if (Z(a, Mq)) break;
          return;
        case tt:
          if (Z(a, rp)) break;
          return;
        case Kt:
          if (Z(a, cn)) return;
          if (Z(a, vp)) break;
          return;
        default:
          return
      }
      1 < zJ(a) && (a.a = a.d)
    }
  }
  function AJ(a, b) {
    switch (a.b[b]) {
      case yk:
      case gn:
      case Wo:
      case yq:
      case it:
        return !1;
      case Jt:
        return 0 == b ? !0 : !AJ(a, b - 1);
      default:
        return !0
    }
  }
  function zJ(a) {
    for (var b = 0, c = 0;; c++) {
      do if (b > a.d) return c;
      while (AJ(a, b++));
      do if (b > a.d) return c;
      while (!AJ(a, b++))
    }
  }
  function Z(a, b) {
    var c = b[H],
      d = a.a - c + 1;
    if (0 > d) return !1;
    for (var e = 0; e < c; e++) if (a.b[d + e] != b[nb](e)) return !1;
    a.d = a.a - c;
    return !0
  }

  function xJ(a, b) {
    var c = b[H];
    a.b = a.b[yd](0, a.d + 1) + b;
    a.a = a.d + c
  }
  function wJ(a, b) {
    return 0 < zJ(a) ? (xJ(a, b), !0) : !1
  };
  var BJ = {
    skiing: ["1f3bf"],
    sos: ["1f198"],
    bowling: ["1f3b3"],
    happiness: [qh],
    currently: ["1f50c"],
    might: [nh],
    change: ["1f500"],
    thought: [oh],
    caroline: ["1f478"],
    bee: ["1f41d"],
    copyright: ["00a9"],
    mahjong: ["1f004"],
    jokest: ["1f0cf"],
    joker: ["1f0cf"],
    twirl: ["1f300"],
    tempest: ["1f300"],
    hurricane: ["1f300"],
    hazy: ["1f301"],
    smog: ["1f301"],
    umbrella: ["1f302"],
    metropoli: [mg],
    downtown: [mg],
    sunrise: ["1f304"],
    dawn: ["1f304"],
    sunset: ["1f305", "1f306", "1f307"],
    ok: ["1f197", "1f44c"],
    rainbow: ["1f308"],
    color: ["1f308"],
    wave: ["1f30a",
      "1f44b"],
    tsunami: ["1f30a"],
    sea: ["1f30a"],
    volcano: ["1f30b"],
    erupt: ["1f30b"],
    galaxy: [ng],
    universe: [ng],
    globe: ["1f30d", og, "1f310", pg],
    global: [og, pg],
    worldwide: [pg, "1f310"],
    planet: [pg, og],
    planetary: [pg],
    crescent: ["1f312"],
    gibbous: ["1f314"],
    nighttime: [qg, "1f31b"],
    goodnight: [qg],
    moonlight: [qg, "1f31c"],
    noon: [rg],
    sunniness: [rg],
    sunshine: [rg],
    sunlight: [rg],
    spark: [sg],
    meteor: ["1f320"],
    chestnut: ["1f330"],
    seedl: ["1f331"],
    sprout: ["1f331"],
    timber: ["1f332", "1f333"],
    tropic: [tg, "1f379"],
    cactu: ["1f335"],
    tulip: ["1f337"],
    blossom: ["1f338", "1f339", "1f33b", "1f33c"],
    bouquet: ["1f338", "1f490"],
    rose: ["1f339"],
    hibiscu: ["1f33a"],
    sunflow: ["1f33b"],
    maize: ["1f33d"],
    wheat: ["1f33e"],
    harvest: ["1f33e"],
    herb: ["1f33f"],
    clover: [ug],
    irish: [ug],
    foliage: ["1f341"],
    mushroom: ["1f344"],
    tomato: ["1f345"],
    eggplant: ["1f346"],
    grape: ["1f347"],
    melon: ["1f348"],
    watermelon: ["1f349"],
    tangerine: ["1f34a"],
    lemon: ["1f34b"],
    banana: ["1f34c"],
    pineapple: ["1f34d"],
    pear: ["1f350"],
    peach: ["1f351"],
    cherry: ["1f352"],
    strawberry: ["1f353"],
    hamburg: ["1f354"],
    burger: ["1f354"],
    cheeseburg: ["1f354"],
    pizza: ["1f355"],
    pepperoni: ["1f355"],
    steak: ["1f356"],
    thanksgive: ["1f357"],
    turkey: ["1f357"],
    banquet: ["1f357"],
    onigiri: ["1f359"],
    curry: ["1f35b"],
    spaghetti: ["1f35d"],
    meatball: ["1f35d"],
    pasta: ["1f35d"],
    loaf: ["1f35e"],
    toast: ["1f35e", Ag],
    fry: ["1f35f"],
    skewer: ["1f361"],
    mochi: ["1f361"],
    oden: ["1f362"],
    kebab: ["1f362"],
    kabob: ["1f362"],
    sushi: ["1f363"],
    nigiri: ["1f363"],
    sashimi: ["1f363"],
    tempura: ["1f364"],
    doughnut: ["1f369"],
    donut: ["1f369"],
    cookie: ["1f36a"],
    candy: ["1f36b", "1f36c"],
    confect: ["1f36c"],
    lollipop: ["1f36d"],
    lolly: ["1f36d"],
    custard: ["1f36e"],
    flan: ["1f36e"],
    honeypot: ["1f36f"],
    honey: ["1f36f"],
    shortcake: ["1f370"],
    bento: ["1f371"],
    chow: [wg],
    teacup: ["1f375"],
    sake: ["1f376"],
    imbibe: [xg, yg, zg, Ag],
    intoxicate: [xg],
    booze: [xg, zg],
    bar: [xg, zg],
    cocktail: [xg, yg, "1f379"],
    martini: [yg],
    drunk: [zg, yg],
    clink: [Ag],
    mug: [Ag],
    saloon: [Ag],
    infant: ["1f37c"],
    ribbon: ["1f380"],
    bow: ["1f380"],
    wrap: ["1f381"],
    "package": ["1f381", "1f4e6"],
    "jack-o-lantern": ["1f383"],
    halloween: ["1f383", ah],
    pumpkin: ["1f383"],
    christma: ["1f384",
      "1f385"],
    christmastime: ["1f385"],
    santa: ["1f385"],
    firework: [Bg, "1f387"],
    firecrack: [Bg],
    explode: [Bg, jh, lh],
    detonate: [Bg, jh, lh],
    burst: [Bg],
    pyrotechn: [Bg],
    balloon: ["1f388"],
    helium: ["1f388"],
    jubilate: ["1f389"],
    congratulate: ["1f389", Lg],
    confetti: [Cg],
    celebrate: [Cg],
    congrat: [Cg],
    bamboo: ["1f38d"],
    knapsack: ["1f392"],
    backpack: ["1f392"],
    rucksack: ["1f392"],
    graduate: [Dg],
    scholarship: [Dg],
    alumna: [Dg],
    alumni: [Dg],
    commenc: [Dg],
    curriculum: [Dg],
    alumnu: [Dg],
    carousel: ["1f3a0"],
    "merry-go-round": ["1f3a0"],
    carniv: ["1f3a1",
      "1f3aa"],
    fish: ["1f3a3", "1f41f", "1f421", "1f420"],
    microphone: [Eg],
    singer: [Eg],
    harmon: [Eg],
    vocalise: [Eg],
    movie: [Fg],
    camera: [Fg, "1f3ac"],
    tape: [Fg],
    movy: [Fg],
    cinema: ["1f3a6", "1f3ac"],
    theater: ["1f3a6", "1f3ad"],
    headphone: ["1f3a7"],
    artist: [Gg],
    palette: [Gg],
    pigment: [Gg],
    artwork: [Gg],
    painter: [Gg],
    magic: ["1f3a9"],
    circu: ["1f3aa"],
    tent: ["1f3aa"],
    ticket: ["1f3ab"],
    admiss: ["1f3ab"],
    studio: ["1f3ac"],
    masquerade: ["1f3ad"],
    drama: ["1f3ad"],
    theatre: ["1f3ad"],
    game: ["1f3ae", "1f3b2"],
    gamepad: ["1f3ae"],
    dart: ["1f3af"],
    jackpot: [Hg],
    gamble: [Hg, "1f3b2"],
    casino: [Hg],
    prosper: [Hg],
    billiard: ["1f3b1"],
    melodi: ["1f3b5"],
    audio: ["1f3b5"],
    saxophone: ["1f3b7"],
    jazz: ["1f3b7", "1f3ba"],
    guitar: ["1f3b8"],
    concert: ["1f3b8"],
    keyboard: ["1f3b9"],
    trumpet: ["1f3ba"],
    violin: ["1f3bb"],
    racket: ["1f3be"],
    ski: ["1f3bf"],
    basketball: ["1f3c0"],
    chequer: [Ig],
    snowboard: ["1f3c2"],
    runner: [Jg],
    surfer: [Kg],
    surfride: [Kg],
    surfboard: [Kg],
    hawaii: [Kg, tg, "1f33a"],
    trophy: [Lg],
    award: [Lg],
    medal: [Lg],
    prizewin: [Lg],
    champ: [Lg],
    horseback: ["1f3c7", "1f40e"],
    jockey: ["1f3c7"],
    gridiron: ["1f3c8"],
    pigskin: ["1f3c8", "1f3c9"],
    swimmer: ["1f3ca"],
    dive: ["1f3ca"],
    mortgage: ["1f3e0"],
    household: ["1f3e0", "1f3e1"],
    emerg: [Mg],
    ambul: [Mg],
    healthcare: [Mg],
    wellness: [Mg],
    doctor: [Mg, eh],
    diagnose: [Mg],
    prescript: [Mg, "1f48a"],
    health: [Mg],
    financi: [Ng, "1f3e7"],
    atm: [Ng, "1f3e7"],
    finance: [Ng],
    investor: [Ng],
    debit: ["1f3e7"],
    payment: ["1f3e7"],
    factory: ["1f3ed"],
    industry: ["1f3ed"],
    smokestack: ["1f3ed"],
    lantern: ["1f3ee"],
    castle: ["1f3f0"],
    kingdom: ["1f3f0"],
    rat: ["1f400", "1f42d"],
    mouse: ["1f400", "1f401", "1f42d"],
    bull: ["1f402"],
    anger: ["1f402", "1f621", "1f624"],
    tauru: ["1f402"],
    buffalo: ["1f403"],
    cow: ["1f404", "1f42e"],
    moo: ["1f404", "1f42e"],
    leopard: ["1f406"],
    kitty: ["1f406", "1f408", Sg, "1f638", "1f63b"],
    meow: ["1f406", "1f408", Sg, "1f638", "1f639", "1f63a", "1f63d"],
    rabbit: ["1f407", "1f430"],
    bunny: ["1f407", "1f430", "1f46f"],
    cute: ["1f407", Zg],
    dragon: ["1f409", "1f432"],
    crocodile: ["1f40a"],
    whale: ["1f40b", "1f433"],
    snail: ["1f40c"],
    snake: [Og],
    sly: [Og],
    rattlesnake: [Og],
    slither: [Og],
    serpent: [Og],
    pony: ["1f40e"],
    neigh: ["1f40e", "1f434"],
    ram: ["1f40f"],
    woolen: ["1f411"],
    rooster: ["1f413"],
    puppy: [Pg],
    pup: [Pg, "1f436"],
    bark: [Pg],
    arf: [Pg],
    doggy: [Pg, "1f436"],
    paw: [Pg, "1f43e"],
    pet: [Pg],
    piggish: [Qg],
    piglet: [Qg],
    oink: [Qg, Tg],
    hog: [Qg, "1f417", Tg],
    boar: ["1f417"],
    warthog: ["1f417"],
    octopu: ["1f419"],
    tentacle: ["1f419"],
    shell: ["1f41a"],
    bug: ["1f41b"],
    centipede: ["1f41b"],
    millipede: ["1f41b"],
    insect: ["1f41b", "1f41c"],
    ant: ["1f41c"],
    honeybee: ["1f41d"],
    bumblebee: ["1f41d"],
    ladybug: ["1f41e"],
    salmon: ["1f41f"],
    bass: ["1f41f"],
    tuna: ["1f41f"],
    goldfish: ["1f420"],
    blowfish: ["1f421"],
    turtle: ["1f422"],
    chirp: ["1f423", "1f424"],
    chick: ["1f423", "1f424", "1f425"],
    cheep: ["1f424"],
    peep: ["1f425"],
    birdie: [Rg],
    birdsong: [Rg],
    birdwatch: [Rg],
    canary: [Rg],
    penguin: ["1f427"],
    antarctica: ["1f427"],
    arctic: ["1f427"],
    glacial: ["1f427"],
    koala: ["1f428"],
    australia: ["1f428"],
    poodle: ["1f429"],
    camel: ["1f42a", "1f42b"],
    dolphin: ["1f42c"],
    beef: ["1f42e"],
    tiger: ["1f42f"],
    purr: [Sg],
    kitten: [Sg, "1f639", "1f63b"],
    dragonhead: ["1f432"],
    spout: ["1f433"],
    chimp: ["1f435"],
    chimpanzee: ["1f435"],
    ape: ["1f435"],
    doggie: ["1f436"],
    piggy: [Tg],
    porky: [Tg],
    pork: [Tg],
    bacon: [Tg],
    ham: [Tg],
    frog: ["1f438"],
    ribbit: ["1f438"],
    toad: ["1f438"],
    hamster: ["1f439"],
    wolf: ["1f43a"],
    teddy: ["1f43b"],
    panda: ["1f43c"],
    snout: ["1f43d"],
    pawprint: ["1f43e"],
    tongue: ["1f445"],
    fist: ["1f44a"],
    fistbump: ["1f44a"],
    puncher: ["1f44a"],
    punch: ["1f44a"],
    nope: ["1f44e"],
    applause: ["1f44f"],
    clap: ["1f44f"],
    crown: ["1f451"],
    princess: ["1f451", "1f478"],
    eyeglass: ["1f453"],
    spectacle: ["1f453"],
    visualise: ["1f453"],
    necktie: ["1f454"],
    manag: ["1f454"],
    "t-shirt": ["1f455"],
    jean: ["1f456"],
    knicker: ["1f456"],
    kimono: ["1f458"],
    bikini: ["1f459"],
    swimsuit: ["1f459"],
    blouse: ["1f45a"],
    purse: ["1f45b", "1f45d"],
    coinpurse: ["1f45b"],
    handbag: ["1f45c"],
    "high-heel": ["1f460"],
    fashion: ["1f460"],
    sandal: ["1f461"],
    boot: ["1f462"],
    footprint: ["1f463"],
    barefoot: ["1f463"],
    silhouette: [Vg],
    mystery: [Vg],
    couple: ["1f46b", gh, hh],
    offic: ["1f46e"],
    cop: ["1f46e"],
    dame: ["1f471"],
    gentlewoman: ["1f471"],
    kid: ["1f472"],
    turban: ["1f473"],
    grandpa: [Yg],
    nanna: ["1f475"],
    grandma: ["1f475"],
    construct: ["1f477"],
    manufacture: ["1f477"],
    builder: ["1f477"],
    wick: [$g,
      "1f608"],
    wickedness: [$g, bh, "1f608"],
    daemon: [$g, bh],
    monster: [$g, "1f47e"],
    devil: [$g, bh],
    ghost: [ah],
    specter: [ah],
    spooky: [ah],
    boo: [ah, "1f61e"],
    angel: ["1f47c", "1f607"],
    extraterrestri: ["1f47d", "1f47e"],
    alien: ["1f47d", "1f47e"],
    alienate: ["1f47d"],
    roswell: ["1f47d"],
    imp: [bh],
    evil: [bh, "1f608"],
    vicious: [bh],
    demon: [bh],
    diabol: [bh],
    stewardess: ["1f481"],
    guardsman: [ch],
    scout: [ch],
    guard: [ch],
    sentry: [ch],
    safeguard: [ch],
    dancer: ["1f483"],
    nail: ["1f485"],
    fingernail: ["1f485"],
    manicure: ["1f485"],
    massage: [dh],
    tranquil: [dh],
    sabbath: [dh],
    tranquillity: [dh],
    decompress: [dh],
    tranquile: [dh],
    facial: [dh],
    spa: [dh],
    haircut: ["1f487"],
    trim: ["1f487"],
    barber: ["1f488"],
    syringe: [eh],
    physician: [eh],
    drug: [eh, "1f48a"],
    pill: ["1f48a"],
    kiss: ["1f48b", gh, "1f618", "1f61a"],
    xo: ["1f48b"],
    xoxoxo: ["1f48b"],
    marriage: [fh, ih],
    diamond: [fh, "1f48e"],
    honeymoon: [fh, hh, ih],
    betroth: [fh],
    engage: [fh],
    gem: ["1f48e"],
    jewel: ["1f48e"],
    passion: [gh, "1f496", "1f497", "1f49c", "1f60d", "1f618"],
    affectionateness: [gh],
    warmheartedness: [gh, "1f497"],
    smooch: [gh, "1f618"],
    bloom: ["1f490",
      "1f4a0"],
    date: [hh],
    engag: [hh],
    nuptial: [ih],
    propose: [ih],
    matrimoni: [ih],
    wedlock: [ih],
    heartbeat: ["1f493"],
    emot: ["1f493"],
    broken: ["1f494"],
    heartbroken: ["1f494"],
    affect: ["1f495"],
    cupid: ["1f498"],
    coldness: ["1f499"],
    inhuman: ["1f499"],
    spunk: ["1f49b"],
    enrapture: ["1f49e"],
    daisy: ["1f4a0"],
    bomb: [jh],
    blowup: [jh],
    explos: [jh, lh],
    snooze: [kh],
    slumber: [kh, "1f634"],
    wearisome: [kh],
    bore: [kh, uh],
    expand: [lh],
    bang: [lh],
    blast: [lh],
    splash: ["1f4a6"],
    sweat: ["1f4a6"],
    splatter: ["1f4a6"],
    droplet: ["1f4a7"],
    puff: [mh],
    gasp: [mh, "1f62e"],
    fart: [mh],
    poo: ["1f4a9"],
    defecate: ["1f4a9"],
    poop: ["1f4a9"],
    crap: ["1f4a9"],
    bicep: [nh],
    brawn: [nh],
    brawniness: [nh],
    dizzy: ["1f4ab"],
    speech: ["1f4ac"],
    imaginate: [oh],
    daydream: [oh],
    currence: ["1f4b1"],
    charge: ["1f4b3"],
    yen: ["1f4b4"],
    dollar: ["1f4b5"],
    euro: ["1f4b6"],
    workstate: ["1f4bb"],
    desktop: ["1f4bb"],
    technolog: ["1f4bb"],
    briefcase: ["1f4bc"],
    duplicate: ["1f4bf"],
    folder: ["1f4c2"],
    scroll: ["1f4c3"],
    calendar: ["1f4c5", "1f4c6"],
    clipboard: ["1f4cb"],
    pushpin: ["1f4cc"],
    paperclip: ["1f4ce"],
    bookmark: ["1f4d1"],
    notebook: ["1f4d3",
      "1f4d4"],
    textbook: ["1f4d6"],
    warn: ["1f4db"],
    caution: ["1f4db"],
    satellite: ["1f4e1"],
    antenna: ["1f4e1"],
    megaphone: ["1f4e3"],
    "e-mail": ["1f4e7"],
    mailbox: ["1f4ec"],
    tv: ["1f4fa"],
    battery: ["1f50b"],
    plug: ["1f50c"],
    bolt: ["1f529"],
    chop: ["1f52a"],
    telescope: ["1f52d"],
    stargaze: ["1f52d"],
    japan: ["1f5fe", "1f38c"],
    goblin: ["1f47a"],
    hilari: ["1f602"],
    smile: ["1f603", "1f638", "1f60a", qh, "263a"],
    lol: ["1f605", "1f60b", "1f61b"],
    wink: ["1f609", sh],
    blush: ["1f60a", "1f633"],
    haha: ["1f60b", "1f61b"],
    yawn: ["1f60c"],
    tire: ["1f60c"],
    sunglass: ["1f60e"],
    smirk: ["1f60f", "1f63c"],
    crafty: ["1f60f"],
    apathet: ["1f610"],
    meh: ["1f610", "1f611"],
    indiffer: ["1f610"],
    ugh: ["1f611"],
    speechless: ["1f611"],
    unamuse: ["1f612"],
    irritate: ["1f612"],
    hmm: ["1f612", "1f615"],
    distress: ["1f613", th],
    queasy: ["1f613"],
    disturb: ["1f613"],
    nervous: ["1f613"],
    gloomy: [rh],
    unhappy: [rh],
    depress: [rh],
    hmmm: ["1f615"],
    grimace: ["1f615", "1f62c"],
    horrend: ["1f616"],
    aw: ["1f616", th],
    goofy: [sh],
    whacky: [sh],
    goof: [sh],
    disappoint: ["1f61e"],
    darn: ["1f61e"],
    shuck: ["1f61e"],
    worry: ["1f61f"],
    upset: ["1f620", "1f623",
      "1f624", "1f629", "1f62d"],
    furious: ["1f621", "1f63e"],
    doh: ["1f623"],
    wrath: ["1f624"],
    temper: ["1f624"],
    frighten: [th, "1f627"],
    dread: ["1f626", th],
    fright: ["1f626"],
    fear: ["1f628", "1f627", "1f631"],
    omg: ["1f628"],
    weary: ["1f629"],
    sleepy: [uh, "1f634"],
    nap: [uh],
    asleep: [uh],
    zzz: [uh, "1f634"],
    outcry: ["1f62b"],
    weep: ["1f62d"],
    scream: ["1f631"],
    screech: ["1f631"],
    traumat: ["1f632"],
    horrify: ["1f632"],
    humiliate: ["1f633"],
    embarrass: ["1f633"],
    chagrin: ["1f633"],
    agony: ["1f635"],
    flu: ["1f637"],
    cough: ["1f637"],
    grin: ["1f638"],
    muah: ["1f63d"],
    dru: ["2708"],
    airplane: ["2708"],
    innoc: ["1f607"],
    slick: ["1f60f"],
    andrew: ["1f61d"],
    foggy: ["1f301"],
    sundown: ["1f305"],
    nova: [ng],
    supernova: [ng],
    stoke: ["1f433"],
    brett: [Kg],
    palm: [tg],
    lucky: [ug],
    math: ["1f522"],
    yay: [sg],
    stellar: [sg],
    superstar: [sg],
    paradise: [tg],
    beach: [tg],
    hawai: [tg],
    florida: [tg],
    prick: ["1f335"],
    desert: ["1f335"],
    petal: ["1f33a"],
    fortune: [ug],
    fallen: ["1f342"],
    mario: ["1f344"],
    purple: ["1f347"],
    picnic: ["1f349"],
    peel: ["1f34c"],
    berry: ["1f353"],
    jam: ["1f353"],
    noodle: ["1f35c"],
    shrimp: ["1f364"],
    prawn: ["1f364"],
    froyo: ["1f366"],
    sweetly: ["1f36f"],
    supper: ["1f372"],
    lunch: [wg],
    alcohol: [yg],
    vacate: ["1f379"],
    cheer: [Ag],
    marit: ["1f38e"],
    degree: [Dg],
    college: [Dg],
    honk: ["1f3ba"],
    cello: ["1f3bb"],
    orchestra: ["1f3bb"],
    sash: ["1f3bd"],
    skier: ["1f3bf"],
    bball: ["1f3c0"],
    winner: [Ig],
    jog: [Jg],
    slowly: ["1f422"],
    grunter: ["1f43d"],
    tara: ["1f43c"],
    brooke: ["26bd"],
    soccer: ["26bd"],
    josh: [Wg],
    zane: [Zg],
    note: ["1f3b5"],
    mwah: ["1f618"],
    add: ["2795"],
    again: ["1f501"],
    age: [Yg],
    agree: [Ug],
    amount: ["1f4cf"],
    angry: ["1f620", "1f621", "1f63e"],
    apple: ["1f34e",
      "1f34f"],
    are: ["1f1f7"],
    arm: [nh],
    art: [Gg],
    aunt: [Xg],
    autumn: ["1f341", "1f342"],
    baby: [Zg, "1f37c"],
    back: ["1f519"],
    bad: ["1f44e"],
    bag: ["1f45c"],
    ball: ["26be", "1f3be"],
    bank: [Ng],
    bath: ["1f6c0"],
    be: ["1f41d"],
    bear: ["1f43b"],
    beauti: ["1f339", "1f337"],
    beer: [zg, Ag],
    bell: ["1f514"],
    bird: ["1f424", Rg],
    birth: ["1f423"],
    birthday: ["1f382"],
    black: ["2b1b"],
    block: ["1f6ab"],
    blow: [mh],
    blue: ["1f535"],
    boat: ["26f5"],
    body: [Vg],
    bone: ["1f356"],
    book: ["1f4da", "1f4d5"],
    born: ["1f423"],
    bottle: ["1f37c", "1f376"],
    bowl: ["1f35c"],
    box: ["1f4e6"],
    boy: ["1f466", "1f472"],
    bread: ["1f35e"],
    "break": ["1f494"],
    breakfast: [vg],
    bridge: ["1f309"],
    bright: ["1f4a1"],
    brother: ["1f466"],
    build: ["1f3e2"],
    burn: ["1f525"],
    bu: ["1f68c"],
    business: ["1f4bc"],
    cake: ["1f382", "1f370"],
    call: ["1f4de"],
    car: ["1f697"],
    card: ["1f4b3"],
    cat: ["1f406", Sg, "1f639", "1f408", "1f63a", "1f63b"],
    "catch": ["1f3a3"],
    chair: ["1f4ba"],
    chance: [Hg],
    chicken: ["1f414"],
    child: [Zg, "1f472"],
    children: ["1f6b8"],
    chocolate: ["1f36b"],
    circle: ["1f534"],
    city: [mg, "1f307", "1f306"],
    clean: ["1f6bf"],
    clock: ["23f0"],
    cloth: ["1f455"],
    clothe: ["1f455"],
    cloud: ["2601"],
    cloudy: ["26c5"],
    coffee: ["2615"],
    cold: ["26c4"],
    colour: ["1f308"],
    complete: [Ig],
    comput: ["1f4bb"],
    control: ["1f3ae"],
    cook: [vg],
    cool: ["1f60e", "1f192"],
    copper: ["1f46e"],
    corn: ["1f33d"],
    correct: ["1f3af"],
    cost: ["1f4b0", "1f4b2", "1f4b3", "1f4b5"],
    cross: ["1f645", "1f500"],
    cry: ["1f62d"],
    cut: ["1f487", "2702"],
    dance: ["1f483"],
    danger: ["26a0"],
    daughter: ["1f467"],
    day: [rg],
    dead: ["1f480"],
    die: ["1f480"],
    dinner: ["1f357", "1f355", "1f35d"],
    direct: ["1f449"],
    dish: ["1f4e1"],
    dog: [Pg, "1f436", "1f429"],
    door: ["1f6aa"],
    down: ["1f447"],
    draw: ["270f"],
    dress: ["1f45a", "1f457"],
    drink: ["1f379", xg, Ag],
    drive: ["1f698"],
    drop: ["1f4a7"],
    ear: ["1f442"],
    earn: ["1f4b5"],
    earth: [og, pg],
    eat: [wg, vg],
    educate: [Dg],
    egg: [vg],
    eight: ["1f557"],
    electr: ["1f50c"],
    eleph: ["1f418"],
    end: [Ig, "270b", "1f51a"],
    enjoy: ["1f60d"],
    escape: [Jg],
    exact: ["1f3af"],
    examinate: [ph],
    excite: ["1f64c"],
    expens: ["1f4b0"],
    eye: ["1f440"],
    face: ["1f31d"],
    fall: ["1f341", "1f343", "1f342"],
    family: ["1f46a"],
    farm: ["1f69c"],
    fat: [Qg],
    father: [Wg],
    female: [Xg],
    fever: ["1f628",
      "1f637"],
    film: [Fg],
    find: ["1f50d"],
    fine: [Ug, "1f3ab"],
    finger: ["261d"],
    finish: [Ig],
    fire: ["1f525"],
    five: ["1f554"],
    fix: ["1f527"],
    flag: ["1f6a9"],
    "float": ["1f388"],
    flower: ["1f33c", "1f4a0", "1f490"],
    fly: ["2708"],
    food: ["1f354", wg],
    foot: ["1f463"],
    football: ["1f3c8"],
    forest: ["1f332", "1f333"],
    fork: [wg],
    four: ["1f553"],
    fox: ["1f43a"],
    free: ["1f193"],
    freedom: ["1f5fd"],
    freeze: ["2744"],
    friend: ["1f46c", "1f46d"],
    fruit: ["1f353"],
    fun: ["1f388", qh],
    funny: [qh, "1f605", "1f606", "1f61b"],
    future: ["1f52e"],
    gentleman: [Wg, "1f3a9"],
    gift: ["1f381"],
    glad: ["1f60a"],
    glass: ["1f453", xg, yg],
    go: [Jg],
    goat: ["1f410"],
    good: ["1f44c", Ug],
    goodbye: ["1f64b"],
    grandfath: [Yg],
    grandmoth: ["1f475"],
    grave: ["1f480"],
    great: [Ug],
    ground: ["1f447"],
    group: ["1f465"],
    grow: ["1f331"],
    gun: ["1f52b"],
    hair: ["1f487", "1f471"],
    hammer: ["1f528"],
    hand: ["270b"],
    happy: ["1f600"],
    hat: ["1f452", "1f3a9"],
    hate: ["1f620"],
    healthy: ["1f34e", "1f34f"],
    hear: ["1f442", "1f3a7"],
    heart: ["1f49c", "1f493", "1f498"],
    heavy: ["2693"],
    hello: ["1f44b"],
    help: ["1f481"],
    hen: ["1f414"],
    her: ["1f467"],
    here: ["1f447"],
    hill: ["1f304"],
    him: [Wg],
    hit: [lh],
    home: ["1f3e0", "1f3e1"],
    horse: ["1f40e", "1f3c7", "1f434"],
    hospit: ["1f3e8", Mg, eh],
    hot: ["1f525", "1f375"],
    hotel: ["1f3e8"],
    hour: ["23f3"],
    house: ["1f3e0", "1f3e1"],
    hundr: ["1f4af"],
    hungry: ["1f444"],
    ice: ["2744"],
    idea: ["1f4a1"],
    island: ["1f5fe"],
    key: ["1f511"],
    kind: ["1f607"],
    king: ["1f451", "1f3f0"],
    kitchen: [vg],
    knife: ["1f52a", wg],
    knock: ["270a"],
    ladder: ["1f692"],
    lady: ["1f471"],
    late: [mg],
    laugh: ["1f445", qh, "1f602"],
    leaf: ["1f341"],
    left: ["1f448"],
    letter: [ph, "1f48c", "1f171"],
    light: ["1f526"],
    like: [Ug],
    lip: ["1f48b"],
    list: [ph],
    listen: ["1f442", "1f3a7"],
    lock: ["1f512"],
    look: ["1f440"],
    love: [gh, hh, "1f60d", "1f497", "1f493"],
    low: ["1f4c9"],
    luck: [ug],
    male: [Wg],
    man: [Wg],
    map: [og],
    mark: ["2705"],
    marry: ["1f38e", ih],
    meal: [wg],
    mean: ["1f620"],
    measure: ["1f4cf"],
    meat: ["1f356"],
    medicine: ["1f48a"],
    member: ["1f0cf"],
    milk: ["1f404"],
    minute: ["23f0"],
    mistake: ["1f630"],
    money: ["1f4b8", "1f4b0", "1f4b1"],
    monkey: ["1f435", "1f412"],
    month: ["1f4c5"],
    moon: ["1f31c", "1f31b", qg, "1f31d"],
    morn: ["1f304"],
    mother: [Xg],
    mountain: ["1f5fb"],
    mouth: ["1f444"],
    music: ["1f3b6", "1f3b5", Eg],
    needle: [eh],
    "new": ["1f195"],
    newspap: ["1f4f0"],
    nice: ["1f44c"],
    night: [qg, "1f31b"],
    nine: ["1f558"],
    no: ["1f6ab"],
    noise: ["1f4e2"],
    nose: ["1f443"],
    noth: ["1f636"],
    number: ["1f522"],
    ocean: ["1f30a"],
    off: ["1f4f4"],
    office: ["1f3e2"],
    oil: ["26fd"],
    old: [Yg],
    one: ["1f550"],
    open: ["1f513"],
    orange: ["1f34a"],
    page: ["1f4c4"],
    pain: ["1f635", "1f616"],
    paint: [Gg],
    paper: ["1f4c4"],
    parent: ["1f46a"],
    park: ["1f17f"],
    party: [Cg, "1f389", "1f483", Ag],
    path: ["1f43e"],
    pay: ["1f4b3"],
    peace: ["270c"],
    pen: ["2712"],
    pencil: [ph],
    people: ["1f465"],
    person: [Vg],
    petrol: ["26fd"],
    photograph: ["1f4f7"],
    piano: ["1f3b9"],
    picture: ["1f4f7"],
    pig: [Qg, Tg, "1f417"],
    pin: ["1f4cc"],
    pink: ["1f338"],
    plane: ["2708"],
    plant: ["1f331", "1f33f"],
    play: ["1f3ae"],
    poison: ["1f480"],
    police: ["1f693", "1f46e"],
    power: ["26a1"],
    pretty: ["1f484"],
    price: ["1f4b2"],
    prince: ["1f3f0"],
    prize: [Lg],
    queen: ["1f451", "1f478"],
    question: ["2754"],
    quiet: ["1f649"],
    radio: ["1f4fb"],
    rain: ["2614", "1f302"],
    read: ["1f4d8"],
    record: [Fg],
    red: ["1f534"],
    rememb: [oh],
    repair: ["1f527"],
    repeat: ["1f502"],
    report: ["1f4d3"],
    rest: ["1f6c0"],
    restaur: [wg],
    rice: ["1f35a"],
    ride: ["1f6b4"],
    right: ["1f449"],
    ring: [fh],
    rock: ["1f3b8"],
    rule: ["1f4cf"],
    ruler: ["1f4cf"],
    run: [Jg],
    sad: ["1f622", rh],
    sail: ["26f5"],
    save: ["1f4be"],
    say: ["1f4ac"],
    school: ["1f3eb"],
    science: ["1f52c"],
    scissor: ["2702"],
    search: ["1f50d"],
    seat: ["1f4ba"],
    second: ["231a"],
    see: ["1f440"],
    send: ["1f4ee"],
    seven: ["1f556"],
    shade: ["1f60e"],
    shadow: [Vg],
    sharp: ["1f52a"],
    sheep: ["1f40f", "1f411"],
    shine: [rg],
    ship: ["1f6a2"],
    shirt: ["1f3bd"],
    shoe: ["1f45e", "1f45f", "1f460"],
    shoot: ["1f52b"],
    shout: ["1f4e3", "1f631"],
    sick: ["1f637"],
    signal: ["1f4f6"],
    silence: ["1f64a"],
    silly: [sh],
    sing: [Eg],
    sister: ["1f467"],
    sit: ["1f4ba"],
    six: ["1f555"],
    sky: ["26c5"],
    sleep: [kh, "1f60c", uh],
    slow: ["1f40c", "1f422"],
    smell: ["1f443"],
    smoke: ["1f6ac"],
    snow: ["26c4"],
    son: [Zg],
    soon: ["1f51c"],
    sorry: ["1f629", "1f627", rh],
    sound: ["1f50a", "1f509"],
    space: ["1f680"],
    speak: ["1f444"],
    speed: ["1f6a4"],
    sport: ["26bd"],
    spring: ["1f337"],
    square: ["2b1c"],
    star: [sg, "1f320", ng],
    station: ["1f689"],
    stay: ["270b"],
    steam: ["2668"],
    step: ["1f463"],
    stone: ["1f48e"],
    stop: ["1f6a6"],
    store: ["1f3ea"],
    storm: ["1f300"],
    strong: [nh],
    success: [Lg],
    sugar: ["1f36d"],
    summer: [rg],
    sun: ["1f506", rg],
    sunny: ["2600", rg],
    surprise: [Cg, "1f389"],
    sweet: ["1f36f", "1f36d"],
    swim: ["1f3ca"],
    talk: ["1f4ac"],
    taxi: ["1f695"],
    tea: ["2615", "1f375"],
    tear: ["1f622"],
    telephone: ["1f4de"],
    televis: ["1f4fa"],
    ten: ["1f559"],
    tenni: ["1f3be"],
    terrible: [th, "1f616"],
    test: [ph],
    that: ["1f449"],
    think: [oh],
    three: ["1f552"],
    tie: ["1f454"],
    today: ["1f4c6"],
    togeth: ["1f46a"],
    tonight: [mg],
    tool: ["1f527"],
    top: ["1f51d"],
    train: ["1f684"],
    tram: ["1f68b"],
    travel: ["2708"],
    tree: ["1f332", "1f333", tg],
    trouble: ["1f63c"],
    turn: ["1f527"],
    up: ["261d", "1f446", "1f199"],
    voice: [Eg],
    wait: ["23f3"],
    wake: ["23f0"],
    walk: ["1f45f", "1f6b6"],
    wash: ["1f6bf"],
    waste: ["1f6af"],
    watch: ["231a"],
    water: ["1f6b0", "1f4a7", "1f4a6"],
    wear: ["1f457"],
    weather: ["26c5"],
    wed: ["1f470", ih],
    wet: ["1f4a7"],
    white: ["2b1c"],
    wife: [Xg],
    win: [Lg],
    wind: [mh],
    wine: [xg],
    winter: ["2744"],
    wire: ["1f50c"],
    wise: [Yg],
    woman: [Xg],
    work: ["1f4bc"],
    world: [og, "1f30d", pg],
    write: [ph],
    wrong: ["26d4"],
    ye: [Ug],
    yesterday: ["1f4c6"],
    you: ["1f1fa"],
    young: ["1f466"],
    zoo: ["1f42f"]
  }, CJ = {
    2614: 1,
    2615: 1,
    "1f501": 1,
    "1f502": 1,
    "1f504": 1,
    "1f62c": 1,
    "1f608": 1,
    "1f4ec": 1,
    "1f471": 1,
    "1f37c": 1,
    "1f3c9": 1,
    "1f6bf": 1,
    "1f6c1": 1,
    "1f506": 1,
    "1f505": 1,
    "1f31e": 1,
    "1f472": 1,
    "1f686": 1,
    "1f68d": 1,
    "1f698": 1,
    "1f690": 1,
    "1f6c4": 1,
    "1f406": 1,
    "1f408": 1,
    "1f413": 1,
    "1f6b8": 1,
    "1f415": 1,
    "1f46d": 1,
    "1f69b": 1,
    "1f30e": 1,
    "1f30d": 1,
    "1f404": 1,
    "1f416": 1,
    "1f332": 1,
    "1f333": 1,
    "1f350": 1,
    "1f34b": 1,
    "1f410": 1,
    "1f465": 1,
    "1f509": 1,
    "1f607": 1,
    "1f31c": 1,
    "1f600": 1,
    "1f6a6": 1,
    "1f52d": 1,
    "1f500": 1,
    "1f4b7": 1,
    "1f4b6": 1,
    "1f62f": 1,
    "1f310": 1,
    "1f636": 1,
    "1f627": 1,
    "1f4ef": 1,
    "1f694": 1,
    "1f6c2": 1,
    "1f681": 1,
    "1f515": 1,
    "1f507": 1,
    "1f615": 1,
    "1f4ad": 1,
    "1f634": 1,
    "1f611": 1,
    "1f3c7": 1,
    "1f6b4": 1,
    "1f6a1": 1,
    "1f6a0": 1,
    "1f3e4": 1,
    "1f626": 1,
    "1f52c": 1,
    "1f60e": 1,
    "1f40f": 1,
    "1f682": 1,
    "1f696": 1,
    "1f46c": 1,
    "1f688": 1,
    "1f69d": 1,
    "1f68e": 1,
    "1f68a": 1,
    "1f68b": 1,
    "1f6af": 1,
    "1f6b0": 1,
    "1f31d": 1,
    "1f400": 1,
    "1f401": 1,
    "1f402": 1,
    "1f403": 1,
    "1f407": 1,
    "1f409": 1,
    "1f40a": 1,
    "1f40b": 1,
    "1f42a": 1,
    "1f473": 1,
    "1f61f": 1,
    "1f69c": 1,
    "1f312": 1,
    "1f610": 1,
    "1f61b": 1,
    "1f62e": 1
  };

  function DJ(a) {
    if (null != CJ) {
      var b;
      if (b = Uw) b = !(0 <= zv(sJ, xh));
      if (b) {
        b = {};
        for (var c in BJ) {
          for (var d = [], e = !1, g = 0; g < BJ[c][H]; g++) {
            var h = BJ[c][g];
            h in CJ || (d[E](h), e = !0)
          }
          e && (b[c] = d)
        }
        BJ = b
      }
      CJ = null
    }
    a = a[Wb](/\b/);
    for (b = 0; b < a[H]; b++) {
      d = null;
      if (a[b] in BJ) d = a[b];
      else {
        c = new tJ(a[b]);
        if (1 < c.a) {
          h = c;
          0 != h.a && h.b[h.a] == Ir && (Z(h, Zr) || Z(h, rs) || Z(h, Qr) || Z(h, It) ? h.a -= 2 : Z(h, ap) && 0 < h.d ? xJ(h, Jt) : Z(h, Mq) || h.b[h.a - 1] != Ir && h.a--);
          h = c;
          if (Z(h, kn)) 0 < zJ(h) && h.a--;
          else {
            e = void 0;
            if (e = Z(h, hn) || Z(h, hp)) t: {
              for (e = 0; e <= h.d; e++) if (!AJ(h,
              e)) {
                e = !0;
                break t
              }
              e = !1
            }
            if (e) {
              h.a = h.d;
              e = void 0;
              t: {
                e = h.a + 1;
                for (g = 1; 3 >= g && g <= e; g++) if (h.b[Nb](e - g, g) in uJ) {
                  e = !0;
                  break t
                }
                e = !1
              }
              if (e) xJ(h, gn);
              else if (Z(h, Wo)) xJ(h, 0 < h.d ? Jt : $o);
              else if (e = h.a, 1 > e || h.b[e] != h.b[e - 1] ? 0 : AJ(h, e)) switch (h.b[h.a]) {
                case Hp:
                case Ir:
                case Kt:
                  break;
                default:
                  h.a--
              } else e = void 0, e = h.a, 2 > e || !AJ(h, e) || AJ(h, e - 1) || !AJ(h, e - 2) ? e = !1 : (e = h.b[e], e = e == Bt || e == Ht || e == Jt ? !1 : !0), e ? Z(h, on) || Z(h, wn) || xJ(h, gn) : Z(h, Jt) && 0 == h.d && xJ(h, $o)
            }
          }
          for (; vJ(c););
          yJ(c)
        }
        c = c.b[yd](0, c.a + 1);
        c in BJ && (d = c)
      }
      null != d && (h = BJ[d],
      ku(h) == ds ? a[b] = h : ku(h) == wl && (c = ka(h[l[kb](l[lc]() * h[H])], 16), c = null != c && 0 <= c && 1114111 >= c ? 65536 <= c && 1114111 >= c ? p[Uc]((c >> 10) + 55232) + p[Uc]((c & 1023) + 56320) : p[Uc](c) : null, BJ[d] = c, a[b] = c ? c : O))
    }
    return a[N](O)
  };

  function EJ(a, b) {
    this.e = a;
    this.k = !! b;
    this.b = this.p = 0;
    this.f = this.d = -1;
    this.g = this.l = this.a = 0
  }
  var FJ = dH([Tf, nf, Gh, Eh, "\\?", "!"]),
    GJ = dH([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

  function HJ(a, b, c) {
    a.k && (b -= 9);
    for (var d = O, e = 0, g = a.p; g < a.e[H]; ++g) {
      var h = a.e[nb](g),
        n = h[vd](0);
      e++;
      a.a += a.k ? 127 >= n ? 32 >= n || GJ[n] ? 3 : 1 : 2047 >= n || 55296 <= n && 56319 >= n || 56320 <= n && 57343 >= n ? 6 : 9 : 1;
      n = a.a >= b;
      FJ[h] ? (a.f = g, a.l = a.a, n = n || e > c) : h == P && (a.d = g, a.g = a.a, n = n || e > c);
      if (n) return 0 <= a.f ? (d = a.e[yd](a.b, a.f + 1), a.a -= a.l, a.b = a.f + 1, a.f >= a.d ? (a.d = -1, a.g = 0) : a.g -= a.l, a.f = -1, a.l = 0) : 0 <= a.d ? (d = a.e[yd](a.b, a.d + 1), a.a -= a.g, a.b = a.d + 1, a.d = -1, a.g = 0) : (d = a.e[yd](a.b, g + 1), a.a = 0, a.b = g + 1, a.f = a.d = -1, a.g = a.l = 0), a.p = g + 1, d
    }
    a.b < a.e[H] && (d = a.e[yd](a.b), a.b = a.e[H]);
    return d
  };

  function IJ(a, b, c, d, e, g, h, n) {
    My[L](this);
    this.w = a;
    this.k = b;
    this.T = c || null;
    this.Rc = d ? S(this.bj, this) : iu;
    this.Ob = !! g;
    this.p = [];
    this.D = [];
    this.sa = [];
    this.cb = this.o = this.b = !1;
    this.A = n || {
      lb: {},
      write: {}
    };
    this.Gc = !n;
    this.bb = h || Au.ia();
    this.L = [];
    this.ba = this.ra = this.C = !1;
    this.Fa = this.g = .5;
    this.Ga = .01;
    this.l = new Bu(this.g);
    jz(f, Pl, this.Rg, !0, this);
    jz(f, Nn, this.Sg, !0, this)
  }
  U(IJ, My);
  uH(3046, IJ[I], {
    ci: 1,
    ij: 2,
    ki: 3,
    jj: 4
  });
  Q = IJ[I];
  Q.cd = du(Bt);
  Sa(Q, function(a, b, c, d) {
    if (d || a != this.f || b != this.e) JJ(this), this.Gc && (this.A = {
      lb: {},
      write: {}
    });
    else if (this.b) return;
    this.b = !0;
    this.f = a;
    this.e = b;
    this.ba = this.f == Bl;
    this.T && (d = this.T, a && (d.g = a), b && (d.l = b));
    a = this.k.a.l;
    b = this.k.a.e;
    d = this.k.a.g;
    var e;
    e = this.k;
    e = e.a.e ? e.a.f - e.a.ua.kc[gc]()[Pb]()[H] : e.a.f;
    this.a = {
      zd: c || iu,
      Ue: 0,
      fb: a,
      Qb: 0,
      Ve: 0,
      Ic: b,
      lg: d,
      lc: e,
      Aa: 0,
      Oc: 0,
      yd: this.k.a.yd,
      ja: null,
      ig: 0,
      jg: 0,
      Oe: [][mb](this.w),
      Hc: [],
      Lc: null,
      Le: [],
      jc: this.bb
    };
    this.I = dw[Cc](this.e) ? $s : Zs;
    c = [][mb](this.w);
    for (a = 0; a < c[H]; ++a) nA(c[a], this.I);
    this.d = new YI(this, this.bb);
    aJ(this.d, this.kg);
    this.d.e = this.ci;
    this.d.g()
  });
  Da(Q, function() {
    JJ(this);
    f[Ub](S(function() {
      for (var a = 0; a < this.L[H]; ++a) Dx(this.L[a]);
      this.L = []
    }, this), 0)
  });
  Q.B = function() {
    IJ.j.B[L](this);
    this[pc]();
    rz(f, Pl, this.Rg, !0, this);
    rz(f, Nn, this.Sg, !0, this)
  };
  Q.bj = function(a) {
    var b = hv(a[oc]);
    0 == b[Lc](xp) || 0 <= b[Lc](Ce) || (this.sa[E](a[oc]), this.D[E](a), Ca(a, b + He + this.f + Xf + this.e))
  };

  function KJ(a, b, c) {
    var d = a.a,
      e = new YI(a, d.jc);
    d.Hc[E](e);
    LJ(a);
    aJ(e, c || a.Ng);
    e.f = d.Lc;
    bJ(e, S(function(a) {
      this.o ? this.jj(a) : this.ij(a);
      d.Lc && d.Lc()
    }, a));
    e.g(b || {
      fa: [],
      ca: [],
      jc: d.jc
    })
  }
  Q.Sg = function() {
    this.C = !1;
    this.G = 0;
    Cu(this.l, this.g)
  };
  Q.Rg = function(a) {
    a[K] == f && (this.C = !0, this.G = 0, Cu(this.l, .01))
  };
  Q.kg = function(a) {
    var b = this.a,
      c = cJ(a),
      d = 0;
    b.Lc = function() {
      ++d == b.Hc[H] && c()
    };
    KJ(this);
    return this.sj
  };
  Q.sj = function(a) {
    if (!this.b) return $I;
    if (!dJ(a)) return ZI;
    a = this.a.jc;
    for (var b = 0; b < this.p[H]; ++b) a.add(S(this.fj, this, this.p[b]));
    return this.gj
  };
  Q.ug = function() {
    if (this.G && !this.C) {
      var a = (new Date)[Jb]() - this.G,
        b = this.g;
      900 > a && .01 < b ? b = l.max(.9 * b, .01) : 1100 < a && .5 > b && (b = l.min(1.5 * b, .5));
      this.g = b;
      this.ra ? this.Ga = .01 : this.Fa = this.g
    }
    this.o = this.b = !0;
    this.G = (new Date)[Jb]();
    this.Lb != (a = k[J][gd] || k[J].textContent || k[J].innerHTML) ? (this.Lb = a, this.ra = !1, this.g = this.Fa, a = this.a, a.zd = iu, a.Oe = [][mb](this.w), a.ja = null, a.ig = 0, a.jg = 0, a.Hc = [], a.Lc = null, a.jc = this.l, this.d = new YI(this, this.l), aJ(this.d, this.kg)) : (this.ra = !0, this.g = this.Ga, this.d = new YI(this,
    this.l), aJ(this.d, this.ug));
    this.C || Cu(this.l, this.g);
    this.d.e = this.ki;
    this.d.g();
    return $I
  };
  Q.gj = function() {
    if (!this.b) return $I;
    this.o = this.b = !1;
    this.ba ? this.a.zd(100, !1, !0) : this.a.zd(100, !0);
    if (this.Ob && 0 < this.a.fb) return this.ug;
    this.a = null;
    return $I
  };

  function LJ(a, b) {
    var c = a.a;
    if (0 == c.Aa && (c.Aa = sH(a.A.lb) ? 860 : c.lc, !b || b <= c.lc)) {
      c.Oc = c.Aa;
      return
    }
    do {
      var d = c.Aa;
      c.Aa < c.lc && (c.Aa *= 6, c.Aa > c.lc && (c.Aa = c.lc))
    } while (d != c.Aa && b && c.Aa < b);
    c.Oc = c.Aa
  }

  function MJ(a, b) {
    var c = a.a;
    if (!c.Pd) {
      if (0 == c.Oe[H]) return a.Rb;
      c.Pd = new eJ(c.Oe[eb](), {
        Ic: c.Ic,
        ii: a.Rc,
        vg: !0,
        ji: !! a.T
      }, function() {
        var b = fa[I][Hc][L](arguments),
          b = new MI(b[eb](), b[eb](), b[eb](), b[eb](), b[eb](), a.T);
        a.e == nn && (b.C = !0);
        return b
      }, c.jc, a.L)
    }
    c.Bg = !0;
    gJ(c.Pd, c.fb, c.lc, cJ(b));
    return a.Ng
  }
  Q.Ng = function(a, b) {
    if (!this.b) return $I;
    var c = this.a;
    if (!c.ja) {
      if (!c.Bg) return MJ(this, a);
      if (!dJ(a)) return ZI;
      c.Bg = !1;
      c.ja = c.Pd.Jc || null;
      if (!c.ja) return c.Pd = null, MJ(this, a);
      this.p[E](c.ja);
      if (UI(c.ja, this.A, !0)) return c.Qb += c.ja.Nc, c.fb -= c.ja.Nc, c.ja = null, MJ(this, a);
      this.A[rb][c.ja.ya()] = null
    }
    0 < b.ca[H] && Cu(this.l, .5);
    if (0 < c.lg && b.ca[H] >= c.lg) return this.Rb;
    var d = c.Ic ? c.ja.Sh : c.ja.ya()[H];
    if (d > c.Aa) {
      if (0 < b.ca[H]) return this.Rb;
      LJ(this, d);
      for (var d = c.ja.ya(), e = new EJ(d, c.Ic), g = O; g = HJ(e, c.Aa, c.fb);) if (b.fa[E]({
        Hd: [g],
        Uc: !0,
        Vc: !1
      }), c.Qb += g[H], c.fb -= g[H], 0 >= c.fb) {
        b.Xj = d[yd](e.b);
        break
      } else LJ(this);
      b.ca[E](c.ja);
      c.ja = null;
      return this.Rb
    }
    if (d > c.Oc) return this.Rb;
    b.ca[E](c.ja);
    c.Oc -= d + c.yd;
    c.Qb += c.ja.Nc;
    c.fb -= c.ja.Nc;
    c.ja = null;
    return MJ(this, a)
  };
  Q.Rb = function(a, b) {
    function c(a, b, c) {
      a.response = b;
      a.Uj = c;
      d.jg++;
      n++;
      n == h && q()
    }
    if (!this.b) return $I;
    var d = this.a;
    if (0 == b.ca[H]) return $I;
    KJ(this);
    if (0 == b.fa[H]) {
      for (var e = [], g = 0; g < b.ca[H]; ++g) e[E](b.ca[g].ya());
      b.fa[E]({
        Hd: e,
        Uc: !0,
        Vc: !1
      })
    }
    for (var h = 0, n = 0, q = iu, g = 0; g < b.fa[H]; ++g) b.fa[g].Uc && (h++, b.fa[g].Ei = this.k[Yc](S(c, this, b.fa[g]), b.fa[g].Hd, b.fa[g].Ag || this.f, this.e, ++d.ig, this.cb, this.o), d.Le[E](b.fa[g].Ei));
    if (0 == h) return $I;
    q = cJ(a);
    return this.Di
  };
  Q.fj = function(a) {
    if (this.b) {
      UI(a, this.A) ? TI(a, this.A) : a.G(this.A);
      a.Qe || (this.ba = !1);
      var b = this.a;
      b.Ve += a.Nc;
      a = l.min(l[kb](100 * b.Ve / b.Qb), 100);
      b.Ue != a && (b.Ue = a, b.zd(b.Ue, !1))
    }
  };
  Q.Di = function(a, b) {
    if (!this.b) return $I;
    if (!dJ(a)) return ZI;
    if (1 < b.ca[H]) {
      if (!b.fa[0].Vc) {
        for (var c = [], d = [], e = 0; e < b.fa[0][ad][H] && e < b.ca[H]; ++e) {
          var g = b.fa[0][ad][e];
          g && g[0] && 200 == g[1] || (c[E](b.ca[e]), d[E](b.fa[0].Hd[e]))
        }
        0 < c[H] && KJ(this, {
          fa: [{
            Ag: on,
            Hd: d,
            Uc: !0,
            Vc: !0
          }],
          ca: c
        }, this.Rb)
      }
    } else {
      d = !1;
      for (e = 0; e < b.fa[H]; ++e) c = b.fa[e], c.Vc || c[ad] && c[ad][0] ? c.Uc = !1 : (c.Ag = on, c.Vc = !0, d = c.Uc = !0);
      if (d) return this.Rb
    }
    if (1 < b.ca[H]) for (e = 0; e < b.fa[0][ad][H] && e < b.ca[H]; ++e) {
      if ((g = b.fa[0][ad][e]) && 200 == g[1]) {
        for (var c = g[0], h = !1, n = 0; n < b.ca[e].cd()[H]; n++) {
          var q = b.ca[e].cd()[n];
          q && q.s && q.s[sc] == Mj && (h = !0)
        }
        this.e != nn || h || (c = DJ(c));
        var d = (g = g[2]) && g == this.e,
          t = b.ca[e];
        t.w = c;
        gu(d) && (t.k = d);
        b.ca[e].Qe = this.f == Bl && !g
      }
    } else {
      d = !0;
      h = [];
      t = this.f == Bl;
      for (e = 0; e < b.fa[H]; ++e) c = b.fa[e], c[ad] && c[ad][0] && (g = c[ad][0], c = g[0], h[E](c), g = g[2], d = d && g && g == this.e, g && (t = !1));
      c = h[N](O);
      h = !1;
      for (n = 0; n < b.ca[0].cd()[H]; n++)(q = b.ca[0].cd()[n]) && q.s && q.s[sc] == Mj && (h = !0);
      this.e != nn || h || (c = DJ(c));
      e = b.ca[0];
      e.w = c;
      gu(d) && (e.k = d);
      b.ca[0].Qe = t
    }
    return $I
  };

  function JJ(a) {
    if (a.b) {
      a.d[ed]();
      for (var b = a.a, c = 0; c < b.Hc[H]; ++c) b.Hc[c][ed]();
      for (c = 0; c < b.Le[H]; ++c) a.k.a.ua[Gc](b.Le[c]);
      a.b = !1;
      a.o = !1;
      a.a = null
    }
    if (a.p[H]) {
      for (c = 0; c < a.p[H]; ++c) a.p[c].H();
      a.p = []
    }
    if (a.D[H]) {
      for (c = 0; c < a.D[H]; ++c) Ca(a.D[c], a.sa[c]);
      a.D = [];
      a.sa = []
    }
    if (a.I) {
      b = [][mb](a.w);
      for (c = 0; c < b[H]; ++c) pA(b[c], a.I);
      a.I = null
    }
  };

  function NJ(a, b, c, d, e) {
    My[L](this);
    this.A = b || null;
    this.k = !! c;
    this.p = !1;
    this.a = new VH(e || O);
    this.o = new Bu(1);
    this.g = {
      lb: {},
      write: {}
    };
    this.b = null;
    this.d = new xz(this);
    a = new eH;
    b = new gH(S(this.a.g, this.a, a[Kb]()));
    this.Cd = hH(b, a.Pa(S(this.Cd, this)));
    this.Te = hH(b, a.Pa(S(this.Te, this)));
    this.Bd = hH(b, a.Pa(S(this.Bd, this)));
    this.Jd = hH(b, a.Pa(S(this.Jd, this)));
    Da(this, hH(b, a.Pa(S(this[pc], this))));
    b[Dc]();
    a[Dc]()
  }
  U(NJ, My);
  uH(14097, NJ[I], {
    l: function() {
      nH(this.a.d ? ts : us)
    }
  });
  Q = NJ[I];
  Q.Ha = function() {
    return this.a.d
  };
  Q.Cd = function(a, b) {
    if (this.a.Ha()) {
      var c = this.a,
        d = {
          alpha: !0
        };
      b && (d.hl = b);
      c.e[tb](d, a)
    } else this.l(), a(null)
  };
  Q.Te = function(a) {
    if (this.a.Ha()) {
      var b = O;
      Ou && (b = Ou[Wb](pf)[1]);
      this.a.f[tb]({
        cid: b
      }, a)
    } else this.l(), a(null)
  };
  Q.Bd = function(a) {
    var b = k[Mb].lang;
    if (b) a(b);
    else if (this.a.Ha()) {
      var c = new BE(k[J], !1, !1, 1, 1),
        b = [];
      try {
        for (var d = 0, e = this.a.b.rg; b[H] + d < e;) {
          var g = c[Vb]();
          if (1 == c.$ && pJ(g)) c.zb();
          else if (3 == g[F]) {
            var h = hv(fv(g[zc]));
            h && (b[E](h), d += h[H])
          }
        }
      } catch (n) {
        if (n != hC) throw n;
      }
      e = this.a;
      b = b[N](P);
      a = e.b.Ed(a);
      e.b.ua[tb]({
        q: b[yd](0, e.b.rg),
        sl: Bl,
        tl: on
      }, a)
    } else this.l(), a(null, !0)
  };
  Q.Jd = function(a, b, c, d, e) {
    vH();
    if (!a || tH(a, b)) a = Bl;
    if (e || a != this.f || b != this.e) this.g = {
      lb: {},
      write: {}
    };
    this.f = a;
    this.e = b;
    this.a.Ha() ? (d = d || k[Mb], this.b && this.b.H(), S(function(a, b, d) {
      b && (this.g.lb = this.g[rb], this.g.write = {});
      c(a, b, d)
    }, this), this.b = new IJ(d, this.a, this.A, this.k, 0, !0, this.o, this.g), this.b.cb = this.p, this.b[Yc](a, b, c, e)) : (this.l(), c(0, !1, !0))
  };
  Q.Qj = function() {
    return !!this.b && this.b.b
  };
  Q.Fg = cu("p");
  Da(Q, function() {
    vH();
    this.a.Ha() && this.b && this.b[pc]()
  });
  Q.B = function() {
    wH();
    NJ.j.B[L](this);
    this.a.H();
    this.b = this.a = null;
    this.g = {
      lb: {},
      write: {}
    }
  };
  Q.Jb = cu("G");

  function OJ(a) {
    HA[L](this, a);
    this.d = new xz(this)
  }
  U(OJ, HA);
  Q = OJ[I];
  Q.t = function() {
    var a = Yx(this.a, Nr);
    $a(a, ko);
    this.W(a)
  };
  Q.M = function() {
    OJ.j.M[L](this);
    this.Eh()
  };
  Q.Eh = function() {
    jz(this.h(), nm, kH(this, nm));
    this[x](Qp)
  };
  Q.V = function() {
    OJ.j.V[L](this);
    this.d.H();
    this.d = null
  };

  function PJ(a, b) {
    a.h()[M] != b && (a.h()[M][qd](a.h()), b[r](a.h()))
  }
  Q.td = function(a) {
    this.a.Mc(this.h());
    for (var b in a) if (a[b] !== aa[I][b]) {
      var c = this.a.t(Hq, {
        value: b
      });
      this.a.Qa(c, a[b]);
      this.h()[r](c)
    }
    this.h().selectedIndex = 0
  };
  Q.oa = function() {
    return this.h()[Jc]
  };
  Q.va = function(a) {
    if (this.h()[Jc] != a) for (var b = 0, c; c = this.h().options[Kc](b); ++b) if (c[Jc] == a) {
      this.h().selectedIndex = b;
      break
    }
  };
  Q.pa = function(a) {
    if ("undefined" == ku(a)) return this.h().options[Kc](this.h().selectedIndex)[Ec];
    for (var b = 0, c; c = this.h().options[Kc](b); ++b) if (c[Jc] == a) return c[Ec]
  };
  Q.na = function(a) {
    bb(this.h(), !a)
  };

  function QJ(a) {
    OJ[L](this, a)
  }
  U(QJ, OJ);
  QJ[I].Eb = function(a) {
    this.td[L](this, a)
  };

  function RJ(a, b) {
    OJ[L](this, b);
    this.b = a && Zv(a) || {};
    this.b.hf = this.b.hf || 11;
    this.b.Sd = 0 != this.b.Sd;
    this.b.Oa || (this.b.Oa = Wu)
  }
  U(RJ, OJ);
  Q = RJ[I];
  Q.te = function() {
    throw m("Not implemented.");
  };
  Q.t = function() {
    this.te();
    this.o = this.h();
    this.f = tx(bp, {
      frameBorder: 0,
      "class": oo
    });
    Ua(this.f[B], At);
    yy(this.f, !1);
    k[J][r](this.f)
  };
  Q.Eh = function() {
    var a = dw[Cc](Iu) ? Hr : Vp,
      b = this.b.Oa,
      c = Y(this, Zp);
    this.d.m(this.f, Qp, this.mj);
    oH(this.f, S(function() {
      var d = Mx(this.f);
      d[rb](hi + b + qe + a + $d + c + Xd);
      d[ec]()
    }, this))
  };
  Q.mj = function() {
    this.e = new hx(Mx(this.f));
    this.G = this.e.h(Y(this, Zp));
    this.d.m(this.o, um, this.Ze);
    V ? this.d.m(this.f, Pl, this.Wd) : this.d.m(Nx(this.f), Pl, this.Wd);
    this[x](Qp)
  };
  Q.V = function() {
    RJ.j.V[L](this);
    Dx(this.f);
    this.o = this.L = this.k = this.G = this.e = this.f = null
  };
  Q.Hg = function(a) {
    this.g != a[Qc][Jc] && (this.va(a[Qc][Jc]), this[x](nm));
    this.Wd()
  };
  Q.Ze = function() {
    SJ(this);
    Nx(this.f)[vb]();
    this.T = !0
  };
  Q.Wd = function() {
    this.T && (this.T = !1, SJ(this, !1), sx(ix(this.o))[vb]())
  };
  Q.Qf = bu();
  Q.Rf = bu();

  function SJ(a, b) {
    if ("undefined" == typeof b || b) {
      a.Rf();
      var c = vy(a.o, f),
        d = c.y + a.o[xc],
        e = c.y - a.w[D],
        g = c.x,
        h = c.x + a.o[lb] - a.w[u];
      if (V && !X(Ch)) var n = k[J],
        d = d - n[wc],
        e = e - n[wc],
        g = g - n[pd],
        h = h - n[pd];
      else n = qx(k), d -= n.y, e -= n.y, g -= n.x, h -= n.x;
      n = px(f);
      c.y = c.y <= n[D] - a.w[D] ? d : e;
      c.y > n[D] - a.w[D] && (c.y = n[D] - a.w[D]);
      0 > c.y && (c.y = 0);
      dw[Cc](Iu) ? c.x = 0 <= h ? h : g : c.x = g <= n[u] - a.w[u] ? g : h;
      c.x > n[u] - a.w[u] && (c.x = n[u] - a.w[u]);
      0 > c.x && (c.x = 0);
      oy(a.f, c);
      yy(a.f, !0);
      TJ(a)
    } else a.Qf(), yy(a.f, !1)
  }
  Q.oa = du(Wn);
  Q.td = function(a) {
    this.e.Mc(this.G);
    yy(this.f, !0);
    this.ba = a;
    this.k = [];
    for (var b in a) if (a[b] !== aa[I][b]) if (a[b] == qf) {
      var c = {
        link: this.e.t(bn, {
          className: uo,
          value: b
        }),
        Oi: !0
      };
      this.k[E](c)
    } else {
      c = {
        link: this.e.t(yk, {
          className: to,
          href: zp,
          value: b
        })
      };
      this.k[E](c);
      var d = this.e.t(bn, {
        style: Ct
      });
      this.e[r](c[rd], d);
      this.b.Sd && this.e[r](d, this.e.t(Xr, {
        className: gp
      }, $t));
      this.e[r](d, this.e.t(Xr, {
        className: Cs
      }, a[b]));
      this.d.m(c[rd], um, this.Hg)
    }
    a = this.k[H] - 1;
    a = l[Fc]((a - a % this.b.hf) / this.b.hf) + 1;
    this.L = this.e.t(ns, {
      cellspacing: 0,
      cellpadding: 0,
      border: 0
    });
    c = this.e.t(ps);
    b = this.e.t(Qs, {
      valign: Ns
    });
    $a(this.G, qo);
    this.e[r](this.G, this.L);
    this.e[r](this.L, c);
    this.e[r](c, b);
    for (d = c = 0; c < a; ++c) {
      var e = this.e.t(ss);
      this.e[r](b, e);
      for (var g = 0; 11 > g && d < this.k[H]; ++g, ++d) this.e[r](e, this.k[d][rd]);
      c != a - 1 && (e = this.e.t(ss, {
        "class": ro
      }, Xt), this.e[r](b, e))
    }
    this.g = null;
    this.va(this.k[0][rd][Jc]);
    TJ(this);
    yy(this.f, !1)
  };
  Q.pa = function(a) {
    a = "undefined" == ku(a) ? this.g : a;
    return this.ba[a]
  };
  Q.Ef = bu();
  Q.va = function(a) {
    if (this.g != a) {
      this.pa(a) && (this.g = a, this.Ef());
      for (var b = 0; b < this.k[H]; ++b) {
        var c = this.k[b];
        c.Oi || $a(c[rd], c[rd][Jc] == a && this.b.Sd ? to : so)
      }
    }
  };

  function TJ(a) {
    Ey(a.G, Dy(a.L));
    Ey(a.f, Dy(a.G));
    a.w = Dy(a.f)
  }
  function UJ(a, b) {
    RJ[L](this, a, b)
  }
  U(UJ, RJ);
  Q = UJ[I];
  Q.te = function() {
    var a = Yx(this.a, yk);
    $a(a, po);
    Ca(a, zp);
    this.C = this.a.t(Xr);
    a[r](this.C);
    this.I = this.a.t(ep, {
      src: Uo,
      style: Dl + Tu + ff,
      width: 14,
      height: 14
    });
    a[r](this.I);
    this.W(a)
  };
  Q.Qf = function() {
    jy(this.I, Hl, tf)
  };
  Q.Rf = function() {
    jy(this.I, Hl, dg)
  };
  Q.V = function() {
    UJ.j.V[L](this);
    this.I = this.C = null
  };
  Q.Ef = function() {
    this.a.Qa(this.C, this.pa(this.g) || O)
  };
  Q.Eb = function(a) {
    this.td[L](this, a)
  };

  function VJ(a, b) {
    RJ[L](this, a, b)
  }
  U(VJ, RJ);
  Q = VJ[I];
  Q.te = function() {
    var a = Yx(this.a, yk);
    $a(a, po);
    Ca(a, zp);
    this.C = this.a.t(Xr);
    a[r](this.C);
    a[r](this.a.t(ep, {
      src: Uo,
      width: 1,
      height: 1
    }));
    a[r](this.a.t(Xr, {
      style: Ul
    }, Zt));
    a[r](this.a.t(ep, {
      src: Uo,
      width: 1,
      height: 1
    }));
    this.I = this.a.t(Xr, {
      style: Jm
    }, au);
    a[r](this.I);
    this.W(a)
  };
  Q.Qf = function() {
    jy(this.I, Im, Ee)
  };
  Q.Rf = function() {
    jy(this.I, Im, Ge)
  };
  Q.V = function() {
    VJ.j.V[L](this);
    this.I = this.C = null
  };
  Q.Ef = function() {
    this.a.Qa(this.C, this.pa(this.g) || O)
  };
  Q.Eb = function(a) {
    this.td[L](this, a)
  };

  function WJ(a, b) {
    RJ[L](this, a, b);
    this.b.Sd = !1
  }
  U(WJ, RJ);
  WJ[I].te = function() {
    var a = Yx(this.a, bn);
    $a(a, jo);
    var b = this.a.t(bn, {
      style: El + Su + df
    });
    a[r](b);
    this.C = Yx(this.a, em);
    b[r](this.C);
    this.W(a)
  };
  WJ[I].Hh = function(a) {
    La(this.C, O);
    this.C[r](Zx(this.a, a + Yt))
  };
  WJ[I].V = function() {
    WJ.j.V[L](this);
    this.C = null
  };
  WJ[I].Hg = function(a) {
    this.va(a[Qc][Jc]);
    this[x](nm);
    this.Wd()
  };

  function XJ(a, b) {
    HA[L](this, b);
    this.d = new xz(this);
    this.b = a && Zv(a) || {};
    this.b.Oa || (this.b.Oa = Wu);
    this.b.Se = !1;
    jy(this.a.a[J], ar, ur);
    aC || jy(this.a.a[J], cq, ig);
    jy(this.a.a[Mb], Ho, ig);
    jy(this.a.a[J], Ns, cg);
    V && (f._bannerquirkfixleft = -ka(ag + this.a.a[J].leftMargin, 10), f._bannerquirkfixtop = -ka(ag + this.a.a[J].topMargin, 10) - 40)
  }
  U(XJ, HA);
  Q = XJ[I];
  Q.ha = function() {
    var a = this.a.a[J][y];
    QA(this, a[M], a)
  };
  Q.t = function() {
    var a = Yx(this.a, bn);
    this.ga = !1;
    yy(a, !1);
    nA(a, Sr);
    var b = Y(this, Mm);
    La(a, ji + b + Wd);
    this.W(a)
  };
  Q.M = function() {
    XJ.j.M[L](this);
    var a = qD();
    a.a.set(Qm, To);
    var b = dw[Cc](Iu) ? Hr : Vp,
      c = this.b.Oa,
      d = Y(this, gr),
      e = Y(this, Lm),
      g = Y(this, er),
      h = Y(this, fr),
      n = Y(this, km),
      q = Y(this, In),
      t = Y(this, zr),
      w = Y(this, zn),
      z = Y(this, yn),
      A = Y(this, Gm),
      T = Y(this, oq),
      ga = this.b.mb,
      da = a[Pb](),
      Wa, Rc, cc, a = [];
    this.b.Se && a[E](ZH({
      id: Y(this, hr)
    }));
    a[E](ZH({
      id: Y(this, ir)
    }));
    Wa = Fu.pi[rc](null, a);
    a = [];
    this.b.Se && a[E](ZH({
      id: Y(this, Jn)
    }));
    a[E](ZH({
      id: Y(this, Kn)
    }));
    Rc = Fu.ni[rc](null, a);
    this.b.gg && (cc = this.b.gg);
    this.k = this.a.h(Y(this, Mm));
    this.d.m(this.k,
    Qp, this.ri);
    oH(this.k, S(function() {
      var a = Mx(this.k);
      a[rb](hi + c + oe + b + Be + Yu + Td + Fu.wg + je + (cc ? ti + cc + Sd + cc + ce + Tu + hf : O) + si + d + de + Wa + Vh + e + we + Fu.xg + Oh + T + le + g + ee + Fu.oi + Re + h + ke + Vu + ue + n + ie + Fu.yg + Ph + q + ge + Rc + Vh + t + ie + Fu.mi + Ph + w + fe + z + Vd + (ga ? ki + da + re : O) + ri + A + Ud + Fu.zg + ze + Fu.zg + ce + Tu + gf);
      a[ec]()
    }, this))
  };
  Q.ri = function() {
    this.e = new hx(Mx(this.k));
    YJ(this, Fu.og);
    if (this.b.Oa == Wu) {
      var a = pt + Su + bf;
      jy(this.e.a[J], Gl, a);
      for (var b = this.e.a[Lb](em), c = 0; c < b[H]; ++c) jy(b[c][M], Gl, a), jy(b[c][M], Il, wr), jy(b[c][M], Hl, bg)
    }
    this.b.Se && (this.g = new UJ(this.b, this.e));
    this.f = new UJ(this.b, this.e);
    this.o = new WJ(this.b, this.e);
    this.d.m(this.e.h(Y(this, Lm)), um, kH(this, zm));
    this.d.m(this.e.h(Y(this, km)), um, kH(this, xm));
    this.d.m(this.e.h(Y(this, zr)), um, kH(this, Cm));
    this.d.m(this.e.h(Y(this, Gm)), um, kH(this, ym));
    this.I = this.e.h(Y(this,
    oq));
    this.d.m(this.I, um, kH(this, Am));
    this.g && this.d.m(this.g, nm, kH(this, rm));
    this.d.m(this.f, nm, kH(this, sm));
    this.d.m(this.o, nm, this.fi);
    a = new eH(S(this.gi, this));
    this.g && this.d.m(this.g, Qp, a[Kb]());
    this.d.m(this.f, Qp, a[Kb]());
    this.d.m(this.o, Qp, a[Kb]());
    a[Dc]();
    this.g && this.g.ha(this.e.h(Y(this, hr)));
    this.f.ha(this.e.h(Y(this, ir)));
    this.o.ha(this.e.h(Iq))
  };
  Q.gi = function() {
    this.o.Hh(Fu.Ij);
    this.o.td({
      manage_site: Fu.Hj,
      s1: qf,
      turn_off_site: Fu.Jj,
      s2: qf,
      learn_more: Fu.Gj
    });
    this[x](Qp)
  };
  Q.fi = function() {
    switch (this.o.oa()) {
      case Wp:
        var a = So,
          a = Ou ? a + (js + Ou) : a + (Rk + k[Zb][oc]);
        f[Bc](a, uk);
        break;
      case Jp:
        f[Bc]($u, uk);
        break;
      case ct:
        this[x](Bm)
    }
  };
  Q.V = function() {
    this.F(!1);
    XJ.j.V[L](this);
    this.d.H();
    this.d = null;
    this.g && (this.g.H(), this.g = null);
    this.f.H();
    this.f = null;
    this.o.H();
    this.o = null;
    Dx(this.k);
    this.Kc = this.e = null
  };
  Q.Pc = function() {
    return this.g ? this.g.oa() : O
  };
  Q.xa = function() {
    return this.f.oa()
  };
  Q.Nd = function(a) {
    this.g && this.g.va(a);
    this.L && this.L[a] && this.e.Qa(this.I, Fu.uj(this.L[a]))
  };
  Q.wa = function(a) {
    this.f.va(a)
  };
  Q.Jb = cu("G");

  function ZJ(a, b, c, d) {
    if (a.Kc != b) {
      a.Kc = b;
      if (0 == b) {
        a.g && PJ(a.g, a.e.h(Y(a, hr)));
        if (a.C) {
          var e = a.xa();
          a.f.Eb(a.C);
          a.wa(e)
        }
        PJ(a.f, a.e.h(Y(a, ir)))
      } else 2 == b && (a.g && PJ(a.g, a.e.h(Y(a, Jn))), a.w && (e = a.xa(), a.f.Eb(a.w), a.wa(e)), PJ(a.f, a.e.h(Y(a, Kn))));
      e = {};
      e[-1] = a.e.h(Y(a, zn));
      e[0] = a.e.h(Y(a, gr));
      e[1] = a.e.h(Y(a, er));
      e[2] = a.e.h(Y(a, In));
      for (var g in e) e[g] !== aa[I][g] && yy(e[g], g == b)
    }
    c && a.F(!0);
    Fa(a.I[M][M][B], d ? Ol : sq)
  }
  Q.K = du("ga");
  Q.F = function(a) {
    if (this.ga != a) {
      this.ga = a;
      if (V) var b = ka(ag + this.a.a[J].leftMargin, 10),
        c = ka(ag + this.a.a[J].topMargin, 10);
      var d = this.a.a[wd] == Ji;
      a ? (jy(this.a.a[J], Ns, yh), yy(this.h(), !0), V && (X(Ch) ? (f._bannerquirkfixleft = f._bannerquirkfixtop = 0, d && (this.a.a[J].topMargin = c + 40)) : d ? (this.a.a[J].topMargin = c + 40, f._bannerquirkfixleft = f._bannerquirkfixtop = 0) : (f._bannerquirkfixleft = -b, f._bannerquirkfixtop = -c - 40))) : (jy(this.a.a[J], Ns, cg), yy(this.h(), !1), d && 40 <= c && (this.a.a[J].topMargin = c - 40))
    }
  };
  Q.af = function(a) {
    this.e.Qa(this.e.h(Y(this, fr)), a)
  };

  function YJ(a, b) {
    a.e.Qa(a.e.h(Y(a, yn)), b)
  }
  Q.Pe = function(a, b) {
    this.C = a;
    this.w = b;
    this.f.Eb(a)
  };

  function $J(a, b) {
    HA[L](this, b);
    this.b = a && Zv(a) || {};
    this.d = new xz(this)
  }
  U($J, HA);
  var dK = {
    Nk: 0,
    Gk: 1,
    Jk: 2
  };
  Q = $J[I];
  Q.t = function() {
    var a = Yx(this.a, bn);
    nA(a, Sr);
    nA(a, lo);
    a.dir = dw[Cc](Iu) ? Hr : Vp;
    yy(a, !1);
    if (2 == this.b.Nb) La(a, $H({
      id: Y(this, os),
      fh: O,
      eh: O
    }));
    else {
      var b = V && !X(Ch),
        b = Fu.dj(qi + (b ? pi : mi) + Fu.wg + Mh || O);
      La(a, $H({
        id: Y(this, os),
        fh: O,
        eh: 1 == this.b.Nb ? Qe + b : b
      }))
    }
    this.W(a)
  };
  Q.M = function() {
    $J.j.M[L](this);
    this.f = 2 == this.b.Nb ? new VJ(null, this.a) : new QJ(this.a);
    this.d.m(this.f, nm, kH(this, sm));
    this.d.m(this.f, Qp, this.li);
    var a = this.a.h(Y(this, os));
    if (2 == this.b.Nb) {
      var b = this.a.t(ep, {
        src: Uo,
        "class": mo
      });
      b[B].backgroundImage = pt + Tu + bf;
      b[B].backgroundPosition = uf;
      var c = this.a.t(Xr, {
        style: xt
      });
      a[r](b);
      a[r](c);
      this.f.ha(c);
      a[B].whiteSpace = vq;
      $a(a, no)
    } else this.f.ha(a), 1 == this.b.Nb && Fa(a[B], ip)
  };
  Q.li = function() {
    if (2 == this.b.Nb) {
      var a = this.f,
        b = this.a.h(Y(this, os));
      a.d.U(a.o, um, a.Ze);
      a.o = b;
      a.d.m(a.o, um, a.Ze)
    }
    this[x](Qp)
  };
  Q.V = function() {
    $J.j.V[L](this);
    this.d.H();
    this.d = null;
    this.f.H();
    this.f = null
  };
  Q.xa = function() {
    return this.f.oa()
  };
  Q.wa = function(a) {
    a == O ? this.C && this.f.Eb(this.C) : this.w && this.f.Eb(this.w);
    this.f.va(a)
  };
  Q.F = function(a) {
    yy(this.h(), a)
  };
  Q.na = function(a) {
    this.f.na(a)
  };
  Q.Pe = function(a, b) {
    this.C = a;
    this.w = b
  };

  function eK(a, b) {
    HA[L](this, b);
    this.b = a && Zv(a) || {};
    this.b.Oa || (this.b.Oa = Wu);
    this.d = new xz(this)
  }
  U(eK, HA);
  var fK = {
    Lk: 1,
    Mk: 2,
    xk: 3,
    wk: 4
  };
  Q = eK[I];
  Q.t = function() {
    var a = Yx(this.a, bn);
    this.ga = !1;
    yy(a, !1);
    var b = Y(this, Mm);
    La(a, ji + b + Yd);
    this.W(a)
  };
  Q.M = function() {
    eK.j.M[L](this);
    var a = dw[Cc](Iu) ? Hr : Vp,
      b = this.b.Oa,
      c = Y(this, Ys),
      d;
    this.h().id = Y(this, Mn);
    var e = this.h().id,
      g, h, n, q;
    $a(this.h(), this.h()[id] + Kd);
    switch (this.b.xd) {
      case 2:
        d = Zn;
        g = 0;
        h = 20;
        break;
      case 3:
        d = Yn;
        n = 0;
        h = 20;
        break;
      case 4:
        d = Yn;
        n = 0;
        q = 20;
        break;
      default:
        d = Zn, g = 0, q = 20
    }
    zy(Wf + (g || 0 == g ? Os + g + or + g + lf : Ps) + (q || 0 == q ? Np + q + kr + q + mf : Op) + (n || 0 == n ? cm + n + pr + n + Df + e + Ve : dm) + (h || 0 == h ? Cr + h + lr + h + Df + e + We : Dr) + Wt || O, this.h());
    this.k = this.a.h(Y(this, Mm));
    this.d.m(this.k, Qp, this.si);
    oH(this.k, S(function() {
      var e = Mx(this.k);
      e[rb](hi + b + pe + d + be + a + ve + c + Zd + Tu + jf + Fu.xg + Uh);
      e[ec]()
    }, this))
  };
  Q.si = function() {
    this.e = (new hx(Mx(this.k))).h(Y(this, Ys));
    this.d.m(this.e, um, kH(this, Dm));
    yy(this.h(), !0);
    var a = Dy(this.e);
    yy(this.h(), !1);
    Ey(this.k, a);
    Ey(this.h(), a);
    this[x](Qp)
  };
  Q.V = function() {
    eK.j.V[L](this);
    this.d.H();
    this.d = null;
    Dx(this.k);
    this.e = this.k = null
  };
  Q.K = du("ga");
  Q.F = function(a) {
    this.ga = a;
    yy(this.h(), a)
  };

  function gK(a, b) {
    My[L](this);
    ku(a) == ds && (b = a, a = {});
    ku(b) == ds && (b = jx(k, p(b)));
    this.ra = b;
    this.d = new xz(this);
    this.sa = f[Zb][mc] == Po ? !! Ou : !1;
    var c = aa(a);
    this.g = Bl;
    var d;
    !(d = f.parent != f) && (d = (!f.external || !f.external.googleToolbarVersion || 6.2 > la(f.external.googleToolbarVersion)) && (!f.gtbExternal || !f.gtbExternal.isTranslateEnabled || !f.gtbExternal.isTranslateEnabled())) && (d = ia.appVersion && ia.appVersion[sb](/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), d = !(d && d[2] && d[3] && 4001 <= 1E3 * ha(d[2]) + ha(d[3])));
    this.b = {
      Je: d,
      eg: !1,
      Ie: null,
      vd: null,
      Ke: [],
      fg: [],
      Uh: !1,
      ic: !1,
      eb: O,
      hg: !1,
      Ne: O,
      Nb: 0,
      pg: !1
    };
    this.Fa = {
      Oa: Wu,
      gg: Ru == Qo ? Fu.Th : null,
      mb: this.sa
    };
    this.L = {
      Oa: Wu,
      xd: null
    };
    c && (Cl in c && (this.b.Je = this.b.Je && ja(c.autoDisplay)), lq in c && (this.b.ic = ja(c.multilanguagePage)), Xn in c && (this.b.hg = ja(c.gaTrack)), Ip in c && (this.b.Nb = c.layout), c.pageLanguage && (this.b.wd = lH(c.pageLanguage)), c.includedLanguages && (this.b.Ke = c.includedLanguages[Wb](nf)), c.excludedLanguages && (this.b.fg = c.excludedLanguages[Wb](nf)), this.b.wd && (this.g = this.b.wd),
    c.key && (this.b.eb = c.key), c.gaId && (this.b.Ne = c.gaId), this.L.xd = ha(c.floatPosition) || this.L.xd, Zm in c && (this.b.pg = ja(c.disableAutoTranslation)));
    !this.b.pg && hK(this) && (this.b.eg = !0);
    this.k = {};
    if ((c = k.cookie[sb](/(^|; )googtransopt=(.*?)(;|$)/)) && c[2]) for (this.k = {}, c = lv(c[2])[Wb](Ut), d = 0; d < c[H]; ++d) {
      var e = c[d][Wb](ui);
      e[0] && (this.k[e[0]] = e[1])
    }
    this.T = new HI({
      eb: this.b.eb,
      Mb: 1,
      Me: !0,
      mb: this.sa,
      Tj: Zu
    });
    this.T.a.f = {
      client: Pu,
      u: f[Zb][oc],
      scid: Ou
    };
    this.p = new NJ(0, this.T, void 0, 0, this.b.eb);
    this.o = !1;
    this.d.m(f,
    lt, this.H);
    this.D = new eH(S(this.$h, this));
    this.w = new eH(S(this.ai, this));
    this.G = new gH(S(this.bi, this));
    this.a = new XJ(this.Fa);
    this.p.Cd(this.D[Kb](S(this.Yh, this)), Iu);
    f[Zb][mc] == Po && Ou && this.p.Te(this.D[Kb](S(this.Zh, this)));
    this.ra ? (this.f = new $J(this.b), this.d.m(this.f, Qp, this.D[Kb]()), this.d.m(this.f, sm, hH(this.G, this.w.Pa(S(this.Xh, this)))), this.f.ha(this.ra)) : this.L.xd && (this.l = new eK(this.L), this.d.m(this.l, Qp, this.D[Kb]()), this.d.m(this.l, Dm, hH(this.G, this.w.Pa(S(this.Wh, this)))), this.l.ha());
    !this.b.wd && this.b.Uh && this.p.Bd(this.D[Kb](S(this.Vh, this)));
    this.D[Dc]()
  }
  U(gK, My);

  function hK(a) {
    function b(a, b) {
      var c = lv(a)[sb](sk);
      if (c) {
        if (c[3]) return b.b.Ie = c[2], b.b.vd = c[3], !0;
        if (c[6]) return b.b.Ie = c[5], b.b.vd = c[6], !0
      }
      return !1
    }
    var c = {
      url: function() {
        var a = f[Zb][oc][sb](/#.*googtrans(.*)/);
        return a && a[1]
      },
      cookie: function() {
        var a = k.cookie[sb](/(^|; )googtrans=(.*?)(;|$)/);
        return a && a[2]
      }
    }, d;
    for (d in c) if (c[d] !== aa[I][d]) {
      var e = c[d]();
      if (e && b(e, a)) return d
    }
    return O
  }

  function iK(a, b) {
    for (var c = f[Zb][dc][Wb](Tf); 2 < c[H];) c[eb]();
    var c = Hh + c[N](Tf),
      d;
    null != b ? d = a + ui + b : (d = new Date, d.setTime(d[Jb]() - 1), d = a + wi + d.toGMTString());
    d += Ih;
    k.cookie = d;
    try {
      k.cookie = d + c
    } catch (e) {}
  }
  function jK(a, b) {
    var c = null;
    gu(b) && (c = gu(a) ? Xf + a + Xf + b : Xf + b);
    iK(wo, c)
  }
  Q = gK[I];
  Q.Yh = function(a) {
    this.e = lH(Iu);
    this.C = a || {};
    this.A = {};
    this.I = {};
    a = !this.b.Ke[H];
    var b = dH(this.b.Ke),
      c = dH(this.b.fg);
    this.A[Iu] = O;
    this.I[Iu] = O;
    for (var d in this.C.tl) this.C.tl[d] === aa[I][d] || !(a || d in b) || d in c || (this.I[d] = this.C.tl[d], d == this.b.wd && !this.b.ic) || (this.A[d] = this.C.tl[d]);
    this.A[Iu] || delete this.A[Iu];
    this.I[Iu] || delete this.I[Iu];
    this.ba = Zv(this.C.sl)
  };
  Q.Zh = function(a) {
    a = a || {};
    a = a.us || it;
    this.T.Jb(a);
    this.a.Jb(a);
    this.p.Jb(a)
  };
  Q.Vh = function(a) {
    a && (this.g = lH(a))
  };
  Q.$h = function() {
    delete this.D;
    if (this.C) {
      this.g = this.g || this.b.Ie;
      this.e = this.b.vd || this.e;
      var a = this.b.eg || this.b.Je && this.g != this.e && !(this.g in Ju) && this.k.os != eg && this.k[yq + this.g] != eg;
      this.g == Pt && (this.g = Ot);
      this.ba[this.g] || (a = !1, this.g = Bl);
      if (!this.A[this.e]) if (a = !1, this.A.en) this.e = on;
      else for (var b in this.A) if (this.A[b] !== aa[I][b]) {
        this.e = b;
        break
      }
      if (this.f) {
        var c = this.A,
          d = {
            "": Fu.Fi
          };
        for (b in c) c[b] !== aa[I][b] && (d[b] = c[b]);
        this.f.Pe(d, this.I);
        this.f.wa(O)
      }
      if (!Gu._cnad && a) if (this.b.vd) hH(this.G,
      this.w.Pa(S(this.Fd, this, !0, !0)))[L]();
      else this.o = !0, hH(this.G, this.w.Pa(S(this.Fd, this)))[L](), nH(ws, {
        sl: this.g
      });
      else this.l && this.l.F(!0), this.f && this.f.F(!0);
      f[hd][Yc].TranslateService && this.na(!1);
      this.G[Dc]()
    }
  };
  Q.ai = function() {
    var a = this.a,
      b = this.ba;
    a.g && a.g.Eb(b);
    a.L = b;
    this.a.Pe(this.A, this.I);
    this.a.Nd(this.g);
    this.a.wa(this.e);
    this.d.m(this.a, zm, this.ui);
    this.d.m(this.a, xm, this.ti);
    this.d.m(this.a, Cm, this.Xe);
    this.d.m(this.a, ym, this.Kd);
    this.d.m(this.a, Am, this.vi);
    this.d.m(this.a, Bm, this.wi);
    this.d.m(this.a, rm, this.Cg);
    this.d.m(this.a, sm, this.Cg);
    this.f && this.f.F(!0)
  };
  Q.bi = function() {
    this.d.m(this.a, Qp, this.w[Kb]());
    this.a.ha();
    this.w[Dc]()
  };
  Q.B = function() {
    this.p[pc]();
    gK.j.B[L](this);
    this.p.H();
    this.d.H();
    this.d = null;
    this.a && this.a.H();
    this.a = null;
    this.l && this.l.H();
    this.l = null;
    this.f && this.f.H();
    this.ra = this.f = null
  };
  Q.ui = function() {
    !this.a.K() || !this.b.ic && tH(this.g, this.a.xa()) || (this.o && nH(As, {
      sl: this.g
    }), kK(this, !1), this.f && this.f.wa(this.a.xa()))
  };
  Q.ti = function() {
    this.a.K() && (lK(this), ZJ(this.a, 0), this.f && this.f.wa(O))
  };
  Q.Xe = function() {
    this.a.K() && (lK(this), ZJ(this.a, 0));
    this.f && this.f.wa(O)
  };
  Q.Kd = function() {
    this.a.K() && (this.o && (this.o = !1, nH(xs, {
      sl: this.g
    })), lK(this), this.a.F(!1), this.f && this.f.wa(O), this.l && this.l.F(!0))
  };
  Q.vi = function() {
    this.a.K() && (this.k[yq + this.g] = eg, nH(zs, {
      sl: this.g
    }), this.o = !1, this.Kd())
  };
  Q.wi = function() {
    if (this.a.K()) {
      this.o = !1;
      this.k.os = eg;
      var a = null;
      if (this.k) {
        var a = [],
          b;
        for (b in this.k) this.k[b] !== aa[I][b] && a[E](b + ui + this.k[b]);
        a = a[N](Ut)
      }
      iK(xo, a);
      this.Kd()
    }
  };
  Q.Cg = function() {
    this.a.K() && (!this.b.ic && tH(this.g, this.a.xa()) ? this.Xe() : (this.g = this.a.Pc() || this.g, this.e = this.a.xa(), 2 == this.a.Kc && (this.f && this.f.wa(this.a.xa()), kK(this))))
  };
  Q.Fd = function(a, b) {
    this.a.K() || (this.l && this.l.F(!1), a ? kK(this, b) : ZJ(this.a, 0, !0, this.o))
  };
  Q.Sj = function(a, b) {
    hH(this.G, this.w.Pa(S(this.Fd, this, a, b)))[L]()
  };
  Q.Wh = function() {
    this.Fd(2 == this.a.Kc)
  };
  Q.Xh = function() {
    this.f.xa() ? !this.b.ic && tH(this.g, this.a.xa()) ? this.Xe() : (this.e = this.f.xa(), this.a.wa(this.e), kK(this)) : this.f.wa(this.e)
  };

  function kK(a, b) {
    if (f[hd][Yc].TranslateService) try {
      f[hd][Yc].TranslateService.getInstance()[pc]()
    } catch (c) {}
    jK(a.g, a.e);
    a.o = !1;
    !b && a.g in Ju && nH(ys, {
      sl: a.g
    });
    a.a.af(0);
    ZJ(a.a, 1, !0);
    a.p.Fg( !! b);
    f[Ub](S(a.p.Jd, a.p, a.b.ic ? Bl : a.g, a.e, S(a.Mi, a), void 0, void 0), 0);
    if (a.b.hg && f._gaq && f._gat) try {
      a.b.Ne ? f._gat._getTracker(a.b.Ne)._trackEvent(Zi, Rj, a.e) : f._gat._getTrackerByName()._trackEvent(Zi, Rj, a.e)
    } catch (d) {}
    if (a.b.hg && f.ga ) try {
        f.ga('send', 'event', Zi, Rj, a.e);
    } catch (d) {}
  }
  Q.Mi = function(a, b, c) {
    ku(this.Ga) == Vn && this.Ga();
    this.a.K() && 1 == this.a.Kc && (c ? (lK(this), ZJ(this.a, -1, !0), 2 == c ? YJ(this.a, Fu.Yi) : YJ(this.a, Fu.og)) : (this.a.af(a), b && (this.f && this.f.wa(this.e), this.a.Nd(this.g), ZJ(this.a, 2))))
  };

  function lK(a) {
    jK();
    f[Ub](S(a.p[pc], a.p, null), 0)
  }
  Q.na = function(a) {
    a || this.Kd();
    this.f && this.f.na(a);
    this.l && this.l.F(a)
  };

  function mK(a) {
    if (a && (a = p(a), a = a[Wb](Tf), a[H])) {
      for (var b = f, c = 0; c < a[H]; ++c) {
        var d = a[c];
        if (!(d && d in b)) return;
        b = b[d]
      }
      return b
    }
  };
  var nK = mK("google.translate.m");
  if (nK) for (var oK in Fu) if (Fu[oK] !== aa[I][Fu[oK]] && Fu[oK]) {
    var pK = Fu[oK]();
    Fu[oK] = nK[pK] ? nK[pK] : Eu
  }
  if (1 == Ku) {
    var qK = null,
      rK = function(a) {
        if (!qK) {
          var b;
          a && Cp in a && (b = a.key);
          a = 0;
          Rw && (a = 3);
          qK = new NJ(0, new HI({
            eb: b,
            Mb: a,
            Me: !0
          }), void 0, 0, b);
          qK.constructor = iu;
          qK.isAvailable = qK.Ha;
          qK.getSupportedLanguages = qK.Cd;
          qK.getPageLanguage = qK.Bd;
          qK.setClickThrough = qK.Fg;
          qK.translatePage = qK.Jd;
          Da(qK, qK[pc]);
          qK.isTranslating = qK.Qj
        }
        return qK
      };
    rK.getInstance = function() {
      return qK
    };
    yu("google.translate.TranslateService", rK);
    nH("te_li")
  } else {
    var sK = null,
      tK = function(a, b) {
        sK || (sK = new gK(a, b), sK.constructor = iu);
        return sK
      };
    tK.getInstance = function() {
      return sK
    };
    yu("google.translate.TranslateElement", tK);
    gK[I].dispose = gK[I].H;
    gK[I].showBanner = gK[I].Sj;
    gK[I].setEnabled = gK[I].na;
    yu("google.translate.TranslateElement.FloatPosition", fK);
    fK.TOP_LEFT = 1;
    fK.TOP_RIGHT = 2;
    fK.BOTTOM_RIGHT = 3;
    fK.BOTTOM_LEFT = 4;
    yu("google.translate.TranslateElement.InlineLayout", dK);
    dK.VERTICAL = 0;
    dK.HORIZONTAL = 1;
    dK.SIMPLE = 2
  }
  (function() {
    for (var a in aa[I]) {
      Tv = function(a, b, c) {
        for (var h in a) a[h] !== aa[I][h] && b[L](c, a[h], h, a)
      };
      break
    }
    var b = xu(),
      c = mK(Gu._cuc);
    c && ku(c) == Vn && (1 == Ku ? c() : function e() {
      var a = k[Tc];
      "undefined" == ku(a) || a == Km || a == mp || 2E4 <= xu() - b ? c() : f[Ub](e, 500)
    }())
  })();
})()
