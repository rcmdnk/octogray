jQuery(function($){
  if(!('entry_list' in window)){
    var url = 'posts.html';
    if('jekyll_var' in window){
      url = jekyll_var('random_url')||url;
    }
    $.ajax({
      url:url,
      type:'GET',
      dataType:'html'
    }).done(function(data){
      entry_list = $(data).find('li.post');
      randomList();
    });
  }else{
    randomList();
  }
  var random_posts = 5;
  if('jekyll_var' in window){
    random_posts = jekyll_var('random_posts')||random_posts;
  }
  var randomList = function () {
    if(!('entry_list' in window)){
      console.log('still no entry_list!');
      return;
    }
    var nentries = entry_list.length;
    var rand=[];
    $('#random-posts ul.posts').empty();
    while(rand.length < random_posts && rand.length < nentries){
      var r = Math.floor(Math.random()*nentries);
      if(rand.indexOf(r)!=-1)continue;
      var e = entry_list[r];
      $(e).find('.share-button').remove();
      $(e).find('.post-date').remove();
      $('#random-posts ul.posts').append(e);
      rand.push(r);
    }
    var random_url=$(entry_list[Math.floor(Math.random()*nentries)]).find('.click_box_link')[0].href;
    $('#random-link').wrap($('<a href="Random Fly!"/>'));
    $('#random-link').click(function(){
      window.location=random_url;
      return false;
    });
  };
  $('#random-shuffle').click(function(){
    randomList();
  });
});
