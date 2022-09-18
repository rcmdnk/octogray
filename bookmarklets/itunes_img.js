javascript: (function() {
  if (document.getElementById("ASIN")) {
    var f = document.getElementById("ASIN").value
  }else if (document.getElementsByName('appstore:store_id')) {
    var f = document.getElementsByName('appstore:store_id')[0].content
  } else {
    if (document.querySelector('link[rel="canonical"]')) {
      var f = document.querySelector('link[rel="canonical"]').href.split("/").pop()
    } else {
      alert("Failed to get asin!");
      return
    }
  }
  var b = "";
  if (document.getElementById("prodImage")) {
    b = document.getElementById("prodImage").getAttribute("src")
  } else {
    if (document.getElementById("main-image")) {
      b = document.getElementById("main-image").getAttribute("src")
    } else {
      if (document.getElementById("js-masrw-main-image")) {
        b = document.getElementById("js-masrw-main-image").getAttribute("src")
      } else {
        if (document.getElementById("landingImage")) {
          b = document.getElementById("landingImage").getAttribute("src")
        } else {
          if (document.getElementById("imgThumbs")) {
            b = document.getElementById("imgThumbs").getElementsByTagName("img")[0]
              .getAttribute("src")
          } else {
            if (document.getElementById("coverArt_feature_div")) {
              b = document.getElementById("coverArt_feature_div").getElementsByTagName(
                "img")[0].getAttribute("src")
            } else {
              if (document.getElementById("imgBlkFront")) {
                b = document.getElementById("imgBlkFront").getAttribute("src")
              } else {
                if (document.getElementById("ebooks-img-canvas")) {
                  var g = document.getElementById("ebooks-img-canvas").getElementsByTagName(
                    "img");
                  if (g.length > 0) {
                    b = g[0].getAttribute("src");
                    if (g.length > 1) {
                      if (b.match(/sticker/)) {
                        b = g[1].getAttribute("src")
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (b == "") {
    alert("Failed to get image!");
    return
  }
  var e = b.replace(/http.*\/I\/(.*)$/, "$1").split(".");
  e = e[0] + "." + e[e.length - 1];
  if (document.getElementById("btAsinTitle")) {
    var a = document.getElementById("btAsinTitle").innerHTML
  } else {
    if (document.getElementById("productTitle")) {
      var a = document.getElementById("productTitle").innerHTML
    } else {
      if (document.getElementsByName("title")) {
        var a = document.getElementsByName("title")[0].getAttribute("content")
      } else {
        alert("Failed to get title!");
        return
      }
    }
  }
  var d = a.replace(/<\/*span[^>]*>/g, '').replace(/^\s+|\s+$/g, '');
  window.prompt("link", "{% amazon_img " + f + " " + e + " " + d + " %}")
})();
