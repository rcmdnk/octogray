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
