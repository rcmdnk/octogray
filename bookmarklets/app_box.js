javascript: (function() {
  let jsonld = JSON.parse(document.querySelectorAll(
    'script[type="application/ld+json"]')[0].innerText);
  let title = jsonld.name;
  let dev_url = jsonld.author.url;
  let developer = jsonld.author.name;
  let header_items = document.getElementsByClassName(
    "product-header__list__item");
  let price = header_items[header_items.length - 1].children[0].children[0].innerHTML;
  let img = jsonld.image.split("thumb/")[1].split("/").slice(0, -1).join("/");
  let links = document.getElementsByTagName("link");
  let itune_id = "";
  let link = "";
  for (let i = 0; i < links.length; i++) {
    if (links[i].rel) {
      if (links[i].rel.toLowerCase() == "canonical") {
        link = links[i].href.split("?")[0].split("/");
        itune_id = link[link.length - 1];
      }
    }
  }
  window.prompt( % 27 app % 27, % 27 { % app_box / % 27 + title + % 27 / % 27 +
      img + % 27 / % 27 + developer + % 27 / % 27 + dev_url + % 27 % 27 +
      price + % 27 % 27 + itune_id + % 27 android %
  } % 27);
})()
