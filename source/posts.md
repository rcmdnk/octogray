---
layout: div
share_all: true
share_number: true
views_periods: true
share_check_all: true
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
          id="views1d_shuffle" class="btn views1d_custom" >1d views {{site._pv_1daysAgo-to-today}}</p></li>
          <li><p title="Sort by 1 week views by Analytics"
          id="views1w_shuffle" class="btn views1w_custom" >1w views {{site._pv_7daysAgo-to-today}}</p></li>
          <li><p title="Sort by 1 month views by Analytics"
          id="views1m_shuffle" class="btn views1m_custom" >1m views {{site._pv_30daysAgo-to-today}}</p></li>
          <li><p title="Sort by 1 year views by Analytics"
          id="views1y_shuffle" class="btn views1y_custom" >1y views {{site._pv_365daysAgo-to-today}}</p></li>
          <li><p title="Sort by 10 years views by Analytics"
          id="viewsfull_shuffle" class="btn viewsfull_custom" >Since 2015/08/14 views {{site._pv_2015-08-14-to-today}}</p></li>
          <li><p title="Sort by Hatebu"
          id="hatebu_shuffle" class="btn hatebu_custom" >Hatebu {{site.hatebuCount}}</p></li>
          <li><p title="Sort by Tweet"
          id="twitter_shuffle" class="btn twitter_custom" >Tweet {{site.twitterCount}}</p></li>
          <li><p title="Sort by Facebook"
          id="facebook_shuffle" class="btn facebook_custom" >Facebook {{site.facebookCount}}</p></li>
          <li><p title="Sort by Pocket"
          id="pocket_shuffle" class="btn pocket_custom" >Pocket {{site.pocketCount}}</p></li>
          <li><p title="Sort by LinkedIn"
          id="linkedin_shuffle" class="btn linkedin_custom" >LinkedIn {{site.linkedinCount}}</p></li>
          <li><p title="Sort by StumbleUpon"
          id="stumble_shuffle" class="btn stumble_custom" >StumbleUpon {{site.stumbleCount}}</p></li>
          <li><p title="Sort by Pinterest"
          id="pinterest_shuffle" class="btn pinterest_custom" >Pinterest {{site.pinterestCount}}</p></li>
          <li><p title="Sort by Buffer"
          id="buffer_shuffle" class="btn buffer_custom" >Buffer {{site.bufferCount}}</p></li>
          <li><p title="Sort by Delicious"
          id="delicious_shuffle" class="btn delicious_custom" >Delicious {{site.deliciousCount}}</p></li>
        </ul>
      </div>
    </li>
    <li>Last update: {{site.time|date_to_rfc822}}</li>
  </ul>
</div>
<ul id="posts-sort" class="posts">
  {% for post in site.posts %}
  <li class="post">
    {% include post/sharing_custom.html %}
    <br>
    <div class="index_click_box">
    <span class="post-date">{{post.date}}</span>
    {% include post/post_list.html %}
    </div>
  </li>
  {% endfor %}
</ul>
<script>
  window.onload = function(){
    ["views1d","views1w","views1m","views1y","viewsfull",
        "hatebu","twitter","facebook","pocket","linkedin","stumble",
        "pinterest","buffer", "delicious"].forEach(function(c){
      document.getElementById(c+"_shuffle").onclick = function(){
        var list = document.getElementById("posts-sort");
        var elements = [].slice.call(list.getElementsByClassName("post"));
        elements.sort(
          function(a,b){
            return parseInt(b.getElementsByClassName(c+"Count")[0].textContent)-parseInt(a.getElementsByClassName(c+"Count")[0].textContent);
          }
        );
        for (var i=0;i<elements.length;i++) {
          list.appendChild(elements[i]);
        }
      };
    });
  };
</script>
