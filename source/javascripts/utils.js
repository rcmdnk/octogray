// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
$(function(){
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in document ? document[qsa]('meta[name=viewport]') : [];
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    document.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in document) {
    fix();
    scales = [0.25, 1.6];
    document[addEvent](type, fix, true);
  }
});

$(function(){
  $(".add_bookmark").click(function () {
  if ( ! $(this).data('page_title') || ! $(this).data('page_url') ){
    return addBookmark(document.title, location.href)
  }else{
    return addBookmark($(this).data('page_title'), $(this).data('page_url'))
  }
  });

  function addBookmark(title, url) {
    var metaKey = (navigator.appVersion.indexOf('Mac') != -1) ? 'CMD' : 'CTRL';
    if(navigator.userAgent.indexOf("MSIE") > -1){
      //Internet Explorer
      window.external.AddFavorite(title,url);
    }else if(navigator.userAgent.indexOf("Firefox") > -1){
      //Firefox
      alert("Push "+metaKey+"-D to add favorite!");
    }else if(navigator.userAgent.indexOf("Opera") > -1){
      //Opera
      window.open(url,'sidebar','title='+title);
    }else if(navigator.userAgent.indexOf("Flock") > -1){
      //Flock
      window.sidebar.addPanel(title,url,'');
    }else if(navigator.userAgent.indexOf("Chrome") > -1){
      //Chrome
      alert("Push "+metaKey+"-D to add favorite!");
    }else if(navigator.userAgent.indexOf("Safari") > -1){
      //Safari
      alert("Push "+metaKey+"-D to add favorite!");
    }else if(navigator.userAgent.indexOf("Lunascape") > -1){
      //Lunascape
      alert("Push "+metaKey+"-G to add favorite!");
    }else{
      //other
      alert("Please use the browser's bookmark function!");
    }
  }
});

var index_click_box = function() {
  var url = this.getElementsByClassName("click_box_link")[0].href
  var p = this.parentNode
  var name = p.id;
  if (typeof name == "undefined"){
    name = p.classList[0];
  }
  if (typeof name != "undefined"){
    ga('send', 'event', "click_box", name, url);
  }
  window.location = url
  return false;
};
var add_index_click_box_link = function() {
  [].forEach.call(document.getElementsByClassName('index_click_box'), function(b) {
    b.onclick = function() {
      var url = this.getElementsByClassName("click_box_link")[0].href
      var p = this.parentNode
      var name = p.id;
      if (typeof name == "undefined" || name == ""){
        name = p.classList[0];
      }
      if (typeof name == "undefined" || name == ""){
        name = "no id or class";
      }
      ga('send', 'event', "click_box", name, url);
      window.location = url
      return false;
    };
  });
};
document.addEventListener('DOMContentLoaded', add_index_click_box_link);

// Open outside links with other window
$(function(){
  $("a[href^='http']").attr('target', '_blank');
});

// Add link to images
$(function(){
  $("img").each(function(){
    if( $(this).parent()[0].nodeName.toLowerCase() != "a"){
      if($(this).hasClass("imglink") || $(this).attr('src').indexOf('/images/post/')==0){
        $(this).wrap($('<a href="'+$(this).attr('src')+'" />'));
      }
    }
  });
});

// helper function for scroll fixed
$(function(){
  if("jekyll_var" in window && jekyll_var("n_scroll_fixed")!=null &&
      jekyll_var("n_scroll_fixed") > 0){
    if(!$('body').hasClass('collapse-sidebar')) {
      if($('.scroll-fixed').length > 0){
        $('.scroll-fixed').exFlexFixed({
          watchPosition: true,
          container : '#content'
        });
      }
    }
  }
});

// Mandrill helper
$(function(){
  if((! "jekyll_var" in window || ! jekyll_var("mandrill")) && ! 'ga' in window){
    return
  }
  $(document).on('copy', function(e) {

    var selected = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            selected = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            selected = document.selection.createRange().htmlText;
        }
    }
    if (!selected) return;
    var title = document.title;
    var  url = location.href;
    if("jekyll_var" in window && jekyll_var("mandrill")){
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': jekyll_var("mandrill_key"),
          'message': {
            'from_email': jekyll_var("mandrill_from"),
            'to': [
              {
                'email': jekyll_var("mandrill_to_email"),
                'name':  jekyll_var("mandrill_to_name"),
                'type': 'to'
              }
            ],
            'subject': 'Copied at ' + title,
            'html': '<div><a href="' + url + '">' + title + '</a></div><br><br><div>' + selected + '</div>'
          }
        }
      });
    }
    // if you are using Google Analytics, you can use it, too.
    if ('ga' in window){
      ga('send', 'event', 'copy', url + ':' + title, selected);
    }
  });
});
