var randomList = function () {
  if(!('entry_list' in window)){
    console.log('still no entry_list!');
    return;
  }
  var nentries = entry_list.length;
  var rand = [];
  var f = document.createDocumentFragment();
  var random_posts = 5;
  if('jekyll_var' in window){
    random_posts = jekyll_var('random_posts')||random_posts;
  }
  while(rand.length < random_posts && rand.length < nentries){
    var r = Math.floor(Math.random()*nentries);
    if(rand.indexOf(r)!=-1)continue;
    f.appendChild(entry_list[r]);
    rand.push(r);
  }
  $('#random-posts ul li').remove();
  $('#random-posts ul').append(f);
  var random_url=$(entry_list[Math.floor(Math.random()*nentries)]).find('.click_box_link')[0].href;
  $('#random-link').wrap($('<a href="Random Fly!"/>'));
  $('#random-link').on('click', function(){
    window.location=random_url;
    return false;
  });
};
$(function(){
  post_html = '/posts_light.html';
  if('jekyll_var' in window){
    post_html = jekyll_var('random_url')||random_url;
  }
  if(!('entry_list' in window)){
    $.ajax({
      url: post_html,
      type:'GET',
      dataType:'html'
    }).done(function(data){
      entry_list = $(data).find('li');
      randomList();
    });
  }
  $('#random-shuffle').on('click', function(){
    randomList();
  });
});
