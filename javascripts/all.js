jQuery(document).ready(function() {
    Footnotes.setup();
});

var Footnotes = {
    footnotetimeout: false,
    setup: function() {
        var footnotelinks = jQuery("a[rel='footnote']")

        footnotelinks.off('mouseover',Footnotes.footnoteover);
        footnotelinks.off('mouseout',Footnotes.footnoteoout);

        footnotelinks.on('mouseover',Footnotes.footnoteover);
        footnotelinks.on('mouseout',Footnotes.footnoteoout);
    },
    footnoteover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        jQuery('#footnotediv').stop();
        jQuery('#footnotediv').remove();

        var id = jQuery(this).attr('href').substr(1);
        var position = jQuery(this).offset();

        var div = jQuery(document.createElement('div'));
        div.attr('id','footnotediv');
        div.on('mouseover',Footnotes.divover);
        div.on('mouseout',Footnotes.footnoteoout);

        var el = document.getElementById(id);
        div.html(jQuery(el).html());
        div.html($(el).html());
        div.find("a[rev='footnote']").remove();

        div.css({
            position:'absolute',
            opacity:0.9,
        });
        jQuery(document.body).append(div);

        var left = position.left;
        if(left + 420  > jQuery(window).width() + jQuery(window).scrollLeft())
            left = jQuery(window).width() - 420 + jQuery(window).scrollLeft();
        var top = position.top+20;
        if(top + div.height() > jQuery(window).height() + jQuery(window).scrollTop())
            top = position.top - div.height() - 15;
        div.css({
            left:left,
            top:top
        });
    },
    footnoteoout: function() {
        Footnotes.footnotetimeout = setTimeout(function() {
            jQuery('#footnotediv').animate({
                opacity: 0
            }, 600, function() {
                jQuery('#footnotediv').remove();
            });
        },100);
    },
    divover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        jQuery('#footnotediv').stop();
        jQuery('#footnotediv').css({
                opacity: 0.9
        });
    }
};
jQuery(document).ready(function(e){var t=0;var n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAMAAAAx3e/WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJERkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJFMEM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkREQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRFQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dka2KgAAAEVQTFRFxMTEyMjI0tLSvb29vr6+zc3Ny8vLxcXFz8/P6enp3t7ex8fH0dHR1NTUw8PDwMDAzs7OvLy8wcHBu7u7v7+/zMzM////budQFwAAABd0Uk5T/////////////////////////////wDmQOZeAAAAcklEQVR42tSQSQ7DMAwD6chOukWs5eX/Ty2coo0T9wOdEzEgdRBuzNmnDofgja52JDyz5TCqUp0O6kfrb4bzSXkRiTviEZZ6JKLMJ5VQ2v8iGbtbfEwXmjFMG0VwdQo10hQNxYqtLMv9O6xvpZ/QeAkwAKjwHiJLaJc3AAAAAElFTkSuQmCC";var r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqCAMAAACEJ4viAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJEQkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJEQ0M0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkQ5QzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRBQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+h1kA9gAAAK5QTFRF+fn5sbGx8fHx09PTmpqa2dnZ/f3919fX9PT00NDQ1dXVpKSk+vr6+/v7vb298vLyycnJ8/PztLS0zc3N6enp/v7+q6ur2NjY9/f3srKy/Pz8p6en7u7uoaGhnJyc4eHhtbW1pqam6Ojo9fX17e3toqKirKys1NTUzs7Ox8fHwcHBwMDA5eXlnZ2dpaWl0dHR9vb25ubm4uLi3d3dqqqqwsLCv7+/oKCgmZmZ////8yEsbwAAAMBJREFUeNrE0tcOgjAUBuDSliUoMhTEvfdef9//xUQjgaLX0Ium/ZLT/+SkRPxZpGykvuf5VMJogy5jY9yjDHcWFhqlcRuHc4o6B1QK0BDg+hcZgNDh3NWTwzItH/bRrhvT+g3zSxZkNGCZpoWGIbU0a3Y6zV5VA6keyeDxiw62P0gUqEW0FbDim4nVikFJbU2zZXybUEaxhCqOQqyh5/G0wpWICUwthyqwD4InOMuXJ7/gs7WkoPdVg1vykF8CDACEFanKO3aSYwAAAABJRU5ErkJggg==";e(".github-widget").each(function(){if(t==0)e("head").append('<style type="text/css">'+".github-box *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}"+".github-box{font-family:helvetica,arial,sans-serif;font-size:13px;line-height:18px;background:#fafafa;border:1px solid #ddd;color:#666;border-radius:3px}"+".github-box a{color:#4183c4;border:0;text-decoration:none}"+".github-box .github-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:#fcfcfc;background:-moz-linear-gradient(#fcfcfc,#ebebeb);background:-webkit-linear-gradient(#fcfcfc,#ebebeb);}"+".github-box .github-box-title h3{word-wrap:break-word;font-family:helvetica,arial,sans-serif;font-weight:normal;font-size:16px;color:gray;margin:0;padding:10px 10px 10px 30px;background:url("+n+") 7px center no-repeat; width: auto;}"+".github-box .github-box-title h3 .repo{font-weight:bold}"+".github-box .github-box-title .github-stats{float:right;position:absolute;top:8px;right:10px;font-size:11px;font-weight:bold;line-height:21px;height:auto;min-height:21px}"+".github-box .github-box-title .github-stats a{display:inline-block;height:21px;color:#666;border:1px solid #ddd;border-radius:3px;padding:0 5px 0 18px;background: white url("+r+") no-repeat}"+".github-box .github-box-title .github-stats .watchers{border-right:1px solid #ddd}"+".github-box .github-box-title .github-stats .forks{background-position:-4px -21px;padding-left:15px}"+".github-box .github-box-content{padding:10px;font-weight:300}"+".github-box .github-box-content p{margin:0}"+".github-box .github-box-content .link{font-weight:bold}"+".github-box .github-box-download{position:relative;border-top:1px solid #ddd;background:white;border-radius:0 0 3px 3px;padding:10px;height:auto;min-height:24px;}"+".github-box .github-box-download .updated{word-wrap:break-word;margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300;width:auto}"+".github-box .github-box-download .updated strong{font-weight:bold;color:#000}"+".github-box .github-box-download .download{float:right;position:absolute;top:10px;right:10px;height:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:0 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}"+".github-box .github-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);}"+"@media (max-width: 767px) {"+".github-box .github-box-title{height:auto;min-height:60px}"+".github-box .github-box-title h3 .repo{display:block}"+".github-box .github-box-title .github-stats a{display:block;clear:right;float:right;}"+".github-box .github-box-download{height:auto;min-height:46px;}"+".github-box .github-box-download .download{top:32px;}"+"}"+"</style>");t++;var s=e(this),o,u=s.data("repo"),a=u.split("/")[0],f=u.split("/")[1],l="http://github.com/"+a,c="http://github.com/"+a+"/"+f;o=e('<div class="github-box repo">'+'<div class="github-box-title">'+"<h3>"+'<a class="owner" href="'+l+'" title="'+l+'">'+a+"</a>"+"/"+'<a class="repo" href="'+c+'" title="'+c+'">'+f+"</a>"+"</h3>"+'<div class="github-stats">'+'<a class="watchers" href="'+c+'/watchers" title="See watchers">?</a>'+'<a class="forks" href="'+c+'/network/members" title="See forkers">?</a>'+"</div>"+"</div>"+'<div class="github-box-content">'+'<p class="description"><span></span> — <a href="'+c+'#readme">Read More</a></p>'+'<p class="link"></p>'+"</div>"+'<div class="github-box-download">'+'<div class="updated"></div>'+'<a class="download" href="'+c+'/zipball/master" title="Get an archive of this repository">Download as zip</a>'+"</div>"+"</div>");o.appendTo(s);e.ajax({url:"https://api.github.com/repos/"+u,dataType:"jsonp",success:function(t){var n=t.data,r,i="unknown";if(n.pushed_at){r=new Date(n.pushed_at);i=r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear()}o.find(".watchers").text(n.watchers);o.find(".forks").text(n.forks);o.find(".description span").text(n.description);o.find(".updated").html("Latest commit to the <strong>"+n.default_branch+"</strong> branch on "+i);if(n.homepage!=null)o.find(".link").append(e("<a />").attr("href",n.homepage).text(n.homepage))}})})});$(function(){
  $('.monthly_archive_year_span').on("click", function(){
    $(this).next().slideToggle('fast');
  });
});
var randomList = function () {
  if(!('entry_list' in window)){
    //console.log('still no entry_list!');
    return;
  }
  var nentries = entry_list.length;
  var rand=[];
  var rp = document.getElementById("random-posts-list");
  while (rp.firstChild) {
    rp.removeChild(rp.firstChild);
  }

  var random_posts = 5;
  if('jekyll_var' in window){
    random_posts = jekyll_var('random_posts')||random_posts;
  }
  while(rand.length < random_posts && rand.length < nentries){
    var r = Math.floor(Math.random()*nentries);
    if(rand.indexOf(r)!=-1)continue;
    var el = document.createElement("li");
    el.className = "index_click_box";
    el.innerHTML = entry_list[r];
    rp.appendChild(el);
    rand.push(r);
  }
  var random_url=entry_list[Math.floor(Math.random()*nentries)].split('"click_box_link"')[1].split('"')[1];
  document.getElementById("random-link").onclick = function(){
    window.location=random_url;
    return false;
  };
};
var setRandomList = function () {
  if (document.getElementById("random-shuffle") != null){
    randomList();
    document.getElementById("random-shuffle").onclick = function(){
      randomList();
    };
  }
};
document.addEventListener('DOMContentLoaded', setRandomList);
var relatedList = function () {
  if(!('related_list' in window)){
    //console.log('still no related_list!');
    return;
  }
  var nentries = related_list.length;
  var rand=[];
  var rp = document.getElementById("related-posts-list");
  while (rp.firstChild) {
    rp.removeChild(rp.firstChild);
  }

  var related_posts_show = nentries;
  if('jekyll_var' in window){
    related_posts_show = jekyll_var('related_posts_show')||related_posts_show;
  }
  while(rand.length < related_posts_show && rand.length < nentries){
    var r = Math.floor(Math.random()*nentries);
    if(rand.indexOf(r)!=-1)continue;
    var el = document.createElement("li");
    el.className = "index_click_box";
    el.innerHTML = related_list[r];
    rp.appendChild(el);
    rand.push(r);
  }
};
document.addEventListener('DOMContentLoaded', relatedList);
$(function(){
  $('* + table').wrap('<div class="table-wrap"></div>');
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
    //var  url = location.href;
    var  url = 'http://' + location.host + location.pathname;
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

$(function(){
  if(! "jekyll_var" in window)return;

  var socialCount = function (socials) {
    social_data_box = [];
    socials.forEach(function(s){
      var urls = [];
      var n = 0;
      $("."+s+"Big").each(function(){
        var url = $(this).attr("data-share-url");
        var pos = "big";
        if(n>0){
          pos = pos + String(n);
        }
        if(!jekyll_var("share_no_ga")){
          $(this).parent().on('click', function() {
            ga('send', 'event', s, pos, url);
          });
        }
        n++;
      });
      if(! jekyll_var("share_static"))return true;
      n = 0;
      $("."+s+"Count").each(function(){
        var url = $(this).attr("data-share-url");
        var pos = String(n);
        if(n==0){
          pos = "above";
        }else if(n==1){
          pos = "bottom";
        }
        if((! "jekyll_var" in window) || (!jekyll_var("share_no_ga"))){
          $(this).parent().on('click', function() {
            ga('send', 'event', s, pos, url);
          });
        }
        n++;
      });
    });
  };

  var socials=[];
  var smarks = ["hatebu", "twitter",
               "facebook", "pocket", "linkedin",
               "stumble", "pinterest", "buffer", "delicious",
               "tumblr", "feedly"];
  for(var i=0;i<smarks.length;i++){
    if(jekyll_var(smarks[i]+'_button')){
      socials.push(smarks[i]);
    }
  }
  socialCount(socials);
});
