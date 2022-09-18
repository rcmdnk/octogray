javascript: (function() {
  if (document.getElementById("ASIN")) {
    var g = document.getElementById("ASIN").value
  }else if (document.getElementsByName('appstore:store_id')) {
    var g = document.getElementsByName('appstore:store_id')[0].content
  } else {
    if (document.querySelector('link[rel="canonical"]')) {
      var g = document.querySelector('link[rel="canonical"]').href.split("/").pop()
    } else {
      alert("Failed to get asin!");
      return
    }
  }
  var d = "";
  if (document.getElementById("prodImage")) {
    d = document.getElementById("prodImage").getAttribute("src")
  } else {
    if (document.getElementById("main-image")) {
      d = document.getElementById("main-image").getAttribute("src")
    } else {
      if (document.getElementById("js-masrw-main-image")) {
        d = document.getElementById("js-masrw-main-image").getAttribute("src")
      } else {
        if (document.getElementById("landingImage")) {
          d = document.getElementById("landingImage").getAttribute("src")
        } else {
          if (document.getElementById("imgThumbs")) {
            d = document.getElementById("imgThumbs").getElementsByTagName("img")[0]
              .getAttribute("src")
          } else {
            if (document.getElementById("coverArt_feature_div")) {
              d = document.getElementById("coverArt_feature_div").getElementsByTagName(
                "img")[0].getAttribute("src")
            } else {
              if (document.getElementById("imgBlkFront")) {
                d = document.getElementById("imgBlkFront").getAttribute("src")
              } else {
                if (document.getElementById("ebooks-img-canvas")) {
                  var h = document.getElementById("ebooks-img-canvas").getElementsByTagName(
                    "img");
                  if (h.length > 0) {
                    d = h[0].getAttribute("src");
                    if (h.length > 1) {
                      if (d.match(/sticker/)) {
                        d = h[1].getAttribute("src")
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
  if (d == "") {
    alert("Failed to get image!");
    return
  }
  var f = d.replace(/http.*\/I\/(.*)$/, "$1").split(".");
  f = f[0] + "." + f[f.length - 1];
  if (document.getElementById("btAsinTitle")) {
    var b = document.getElementById("btAsinTitle").innerHTML
  } else {
    if (document.getElementById("productTitle")) {
      var b = document.getElementById("productTitle").innerHTML
    } else {
      if (document.getElementsByName("title")) {
        var b = document.getElementsByName("title")[0].getAttribute("content")
      } else {
        alert("Failed to get title!");
        return
      }
    }
  }
  var e = b.replace(/<\/*span[^>]*>/g, '').replace(/^\s+|\s+$/g, '');
  var a = prompt("Item Name", e);
  window.prompt("link", "{% amazon_box " + g + " " + f + " " + e + " /" + a +
    "/ %}")
})();
