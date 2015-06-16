---
layout: div
share_all: true
---
{% assign index = true %}
<br>
<br>
<br>
<br>
<br>
<div>
<ul style="list-style-type: none">
<li>
  <div class="share-button">
    <ul>
      <li><p title="Sort by 1 day views by Analytics"
      id="views1d_shuffle" class="btn views1d_custom" >1d views {{site._pv_1-day-ago-to-now}}</p></li>
      <li><p title="Sort by 1 week views by Analytics"
      id="views1w_shuffle" class="btn views1w_custom" >1w views {{site._pv_1-week-ago-to-now}}</p></li>
      <li><p href="" title="Sort by 1 month views by Analytics"
      id="views1m_shuffle" class="btn views1m_custom" >1m views {{site._pv_1-month-ago-to-now}}</p></li>
      <li><p href="" title="Sort by 1 year views by Analytics"
      id="views1y_shuffle" class="btn views1y_custom" >1y views {{site._pv_1-year-ago-to-now}}</p></li>
      <li><p href="" title="Sort by 10 years views by Analytics"
      id="views10y_shuffle" class="btn views10y_custom" >10y views {{site._pv_10-years-ago-to-now}}</p></li>
      <li><p href="" title="Sort by Hatebu"
      id="hatebu_shuffle" class="btn hatebu_custom" >Hatebu {{site.hatebuCount}}</p></li>
      <li><p href="" title="Sort by Tweet"
      id="twitter_shuffle" class="btn twitter_custom" >Tweet {{site.twitterCount}}</p></li>
      <li><p href="" title="Sort by Google Plus One"
      id="googleplus_shuffle" class="btn googleplus_custom" >Google+ {{site.googleplusCount}}</p></li>
      <li><p href="" title="Sort by Facebook"
      id="facebook_shuffle" class="btn facebook_custom" >Facebook {{site.facebookCount}}</p></li>
      <li><p href="" title="Sort by Pocket"
      id="pocket_shuffle" class="btn pocket_custom" >Pocket {{site.pocketCount}}</p></li>
      <li><p href="" title="Sort by LinkedIn"
      id="linkedin_shuffle" class="btn linkedin_custom" >LinkedIn {{site.linkedinCount}}</p></li>
      <li><p href="" title="Sort by StumbleUpon"
      id="stumble_shuffle" class="btn stumble_custom" >StumbleUpon {{site.stumbleCount}}</p></li>
      <li><p href="" title="Sort by Pinterest"
      id="pinterest_shuffle" class="btn pinterest_custom" >Pinterest {{site.pinterestCount}}</p></li>
      <li><p href="" title="Sort by Buffer"
      id="buffer_shuffle" class="btn buffer_custom" >Buffer {{site.bufferCount}}</p></li>
      <li><p href="" title="Sort by Delicious"
      id="delicious_shuffle" class="btn delicious_custom" >Delicious {{site.deliciousCount}}</p></li>
    </ul>
  </div>
</ul>
</li>
</div>
<ul class="posts">
  {% for post in site.posts %}
  <li class="post index_click_box">
    {% include post/sharing_all.html %}
    <span class="post-date">{{post.date}}</span>
    {% include post_list.html%}
  </li>
  {% endfor %}
</ul>
<script>
  window.onload = function(){
    ["views1d","views1w","views1m","views1y","views10y",
        "hatebu","twitter","googleplus","facebook","pocket","linkedin","stumble",
        "pinterest","buffer", "delicious"].forEach(function(c){
      document.getElementById(c+"_shuffle").onclick = function(){
        var elements = [].slice.call(document.getElementsByClassName("post"));
        elements.sort(
          function(a,b){
            return parseInt(b.getElementsByClassName(c+"Count")[0].textContent)-parseInt(a.getElementsByClassName(c+"Count")[0].textContent);
          }
        );
        for (var i=0;i<elements.length;i++) {
          document.getElementById("posts").appendChild(elements[i]);
        }
      };
    });
  };
</script>
