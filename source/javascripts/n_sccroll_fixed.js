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
