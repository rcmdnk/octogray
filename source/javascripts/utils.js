jQuery(function($){
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

jQuery(function($){
  $(".index_click_box").click(function(){
    window.location=$(this).parent().find("a").eq(-1).attr("href");
    return false;
  });
});

// Open outside links with other window
jQuery(function($){
  $("a[href^='http']").attr('target', '_blank');
});

jQuery(function($){
  $('body').on('click', '#my_introjs', function(){
    introJs().start();
  });
});

jQuery(function($){
  $('.scroll-fixed').exFlexFixed({
    watchPosition: true,
    container : '#content'
  });
});

jQuery(function($){
  $('.nailthumb-container').nailthumb({width:200,height:200,fitDirection:'left top'});
  $('.nailthumb-container-center').nailthumb({width:200,height:200,fitDirection:'center'});
});

jQuery(function($){
  $("img").each(function(){
    if( $(this).parent()[0].nodeName.toLowerCase() != "a"){
      if($(this).hasClass("imglink") || $(this).attr("src").startsWith('/images/post/')){
        $(this).wrap($('<a href="'+$(this).attr('src')+'" />'));
      }
    }
  });
});
