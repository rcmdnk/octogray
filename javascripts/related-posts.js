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
