(function() {
    var c = document,
        d = "length",
        e = ".",
        f = "Powered by ",
        k = "var ",
        l = "\u3053\u306e\u30da\u30fc\u30b8\u306f",
        m = "\u3053\u306e\u30da\u30fc\u30b8\u3092",
        n = "\u3053\u306e\u30da\u30fc\u30b8\u3092 Google \u7ffb\u8a33\u3067",
        p = "\u3059\u3079\u3066",
        q = "\u3067\u306f\u7121\u52b9\u306b\u3059\u308b",
        r = "\u3067\u8868\u793a",
        t = "\u306b\u7ffb\u8a33",
        u = "\u306b\u7ffb\u8a33\u3055\u308c\u307e\u3057\u305f",
        v = "\u306b\u7ffb\u8a33\u3057\u307e\u3059\u304b\uff1f",
        w = "\u306b\u81ea\u52d5\u7ffb\u8a33\u3055\u308c\u307e\u3057\u305f",
        x = "\u306e\u7ffb\u8a33\u3092\u7121\u52b9\u306b\u3059\u308b",
        z = this;

    function A(a, y) {
        var g = a.split(e),
            b = z;
        g[0] in b || !b.execScript || b.execScript(k + g[0]);
        for (var h; g[d] && (h = g.shift());) g[d] || void 0 === y ? b[h] ? b = b[h] : b = b[h] = {} : b[h] = y
    };
    var B = {
        0: "\u7ffb\u8a33",
        1: "\u30ad\u30e3\u30f3\u30bb\u30eb",
        2: "\u9589\u3058\u308b",
        3: function(a) {
            return l + (a + w)
        },
        4: function(a) {
            return a + u
        },
        5: "\u30a8\u30e9\u30fc: \u30b5\u30fc\u30d0\u30fc\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u3057\u3066\u304b\u3089\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
        6: "\u8a73\u7d30",
        7: function(a) {
            return f + a
        },
        8: "\u7ffb\u8a33",
        9: "\u7ffb\u8a33\u4e2d",
        10: function(a) {
            return n +
                (a + v)
        },
        11: function(a) {
            return m + (a + r)
        },
        12: "\u539f\u6587\u3092\u8868\u793a",
        13: "\u3053\u306e\u30ed\u30fc\u30ab\u30eb \u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30fc\u30bf\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3067\u4fdd\u8b77\u3055\u308c\u305f\u63a5\u7d9a\u3092\u4f7f\u7528\u3057\u3066 Google \u306b\u9001\u4fe1\u3055\u308c\u3001\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002",
        14: "\u3053\u306e\u4fdd\u8b77\u3055\u308c\u305f\u30da\u30fc\u30b8\u306e\u5185\u5bb9\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3067\u4fdd\u8b77\u3055\u308c\u305f\u63a5\u7d9a\u3092\u4f7f\u7528\u3057\u3066 Google \u306b\u9001\u4fe1\u3055\u308c\u3001\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002",
        15: "\u3053\u306e\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8 \u30da\u30fc\u30b8\u306e\u5185\u5bb9\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3067\u4fdd\u8b77\u3055\u308c\u305f\u63a5\u7d9a\u3092\u4f7f\u7528\u3057\u3066 Google \u306b\u9001\u4fe1\u3055\u308c\u3001\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002",
        16: "\u8a00\u8a9e\u3092\u9078\u629e",
        17: function(a) {
            return a + x
        },
        18: function(a) {
            return a + q
        },
        19: "\u5e38\u306b\u975e\u8868\u793a",
        20: "\u539f\u6587:",
        21: "\u7ffb\u8a33\u3092\u6539\u5584\u3059\u308b",
        22: "\u9001\u4fe1",
        23: "\u3059\u3079\u3066\u3092\u7ffb\u8a33",
        24: "\u3059\u3079\u3066\u3092\u5143\u306b\u623b\u3059",
        25: "\u3059\u3079\u3066\u3092\u30ad\u30e3\u30f3\u30bb\u30eb",
        26: "\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u81ea\u5206\u306e\u8a00\u8a9e\u306b\u7ffb\u8a33\u3059\u308b",
        27: function(a) {
            return p + (a + t)
        },
        28: "\u5143\u306e\u8a00\u8a9e\u3092\u8868\u793a",
        29: "\u30aa\u30d7\u30b7\u30e7\u30f3",
        30: "\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306f\u7ffb\u8a33\u6a5f\u80fd\u3092\u7121\u52b9\u306b\u3059\u308b",
        31: null,
        32: "\u305d\u306e\u4ed6\u306e\u7ffb\u8a33\u3092\u8868\u793a",
        33: "\u4e0a\u8a18\u306e\u5358\u8a9e\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u305d\u306e\u4ed6\u306e\u7ffb\u8a33\u304c\u8868\u793a\u3055\u308c\u307e\u3059",
        34: "\u4f7f\u7528",
        35: "\u4e26\u3079\u66ff\u3048\u308b\u306b\u306f Shift \u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u30c9\u30e9\u30c3\u30b0",
        36: "\u30af\u30ea\u30c3\u30af\u3057\u3066\u305d\u306e\u4ed6\u306e\u7ffb\u8a33\u3092\u8868\u793a",
        37: "Shift \u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u3001\u9806\u5e8f\u3092\u4e26\u3079\u66ff\u3048\u308b\u5358\u8a9e\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002",
        38: "Google \u7ffb\u8a33\u306e\u6539\u5584\u306b\u3054\u5354\u529b\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\u3002",
        39: "\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306e\u7ffb\u8a33\u6a5f\u80fd\u3092\u7ba1\u7406\u3059\u308b",
        40: "\u5358\u8a9e\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u305d\u306e\u4ed6\u306e\u7ffb\u8a33\u304c\u8868\u793a\u3055\u308c\u3001\u30c0\u30d6\u30eb \u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u76f4\u63a5\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002",
        41: "\u539f\u6587",
        42: "\u7ffb\u8a33",
        43: "\u7ffb\u8a33",
        44: "\u4fee\u6b63\u5185\u5bb9\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002",
        45: "\u30a8\u30e9\u30fc: \u3053\u306e\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306e\u8a00\u8a9e\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"
    };
    var C = window.google && google.translate && google.translate._const;
    if (C) {
        var D;
        r: {
            for (var E = [], F = ["25,0.01,20150123"], G = 0; G < F[d]; ++G) {
                var H = F[G].split(","),
                    I = H[0];
                if (I) {
                    var J = Number(H[1]);
                    if (!(!J || .1 < J || 0 > J)) {
                        var K = Number(H[2]),
                            L = new Date,
                            M = 1E4 * L.getFullYear() + 100 * (L.getMonth() + 1) + L.getDate();
                        !K || K < M || E.push({
                            version: I,
                            a: J,
                            b: K
                        })
                    }
                }
            }
            for (var N = 0, O = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/), P = Number(O && O[1]) || Math.random(), G = 0; G < E[d]; ++G) {
                var Q = E[G],
                    N = N + Q.a;
                if (1 <= N) break;
                if (P < N) {
                    D = Q.version;
                    break r
                }
            }
            D = "26"
        }
        var R = "/translate_static/js/element/%s/element_main.js".replace("%s",
            D);
        if ("0" == D) {
            var S = " translate_static js element %s element_main.js".split(" ");
            S[S[d] - 1] = "main_ja.js";
            R = S.join("/").replace("%s", D)
        }
        if (C._cjlc) C._cjlc(C._pas + C._pah + R);
        else {
            var T = C._pas + C._pah + R,
                U = c.createElement("script");
            U.type = "text/javascript";
            U.charset = "UTF-8";
            U.src = T;
            var V = c.getElementsByTagName("head")[0];
            V || (V = c.body.parentNode.appendChild(c.createElement("head")));
            V.appendChild(U)
        }
        A("google.translate.m", B);
        A("google.translate.v", D)
    };
})()
