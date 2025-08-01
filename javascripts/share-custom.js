$(function(){
  socialFunc = [];
  socialFunc.hatebu = function(socialData, url){
    if('https:' == document.location.protocol){
      socialData.url = "//query.yahooapis.com/v1/public/yql";
      socialData.data.q = "SELECT content FROM data.headers WHERE url='http://api.b.st-hatena.com/entry.count?url=" + url + "'";
      socialData.data.format = "json";
      socialData.data.env = "http://datatables.org/alltables.env";
      socialData.success = function (data) {
        socialData.socialPush(data.query.results.resources.content);
      };
    }else{
      socialData.url = 'http://api.b.st-hatena.com/entry.count';
      socialData.data.url = url;
      socialData.success = function(data){
        socialData.socialPush(data);
      };
    }
  };
  socialFunc.twitter = function(socialData, url){
    //socialData.url = '//urls.api.twitter.com/1/urls/count.json';
    socialData.url = '//jsoon.digitiminimi.com/twitter/count.json';
    socialData.data.url = url;
    socialData.success = function(data){
      socialData.socialPush(data.count);
    };
  };
  socialFunc.facebook = function(socialData, url){
    socialData.url = '//graph.facebook.com/';
    socialData.data.id = url;
    socialData.success = function(data){
      var n = 0;
      if ('share' in data && 'share_count' in data.share){
        n = data.share.share_count;
      }
      socialData.socialPush(n);
    };
  };
  socialFunc.pocket = function(socialData, url){
    socialData.url = "//query.yahooapis.com/v1/public/yql";
    socialData.data.q = "SELECT content FROM data.headers WHERE url='https://widgets.getpocket.com/v1/button?label=pocket&count=vertical&v=1&url=" + url + "'";
    socialData.data.format = "json";
    socialData.data.env = "http://datatables.org/alltables.env";
    socialData.success = function (data) {
      var n = 0;
      if (data.query.results.resources.content !== null){
        n = data.query.results.resources.content.match(/<em id="cnt">(\d+)<\/em>/)[1];
      }
      socialData.socialPush(n);
    };
  };
  socialFunc.linkedin = function(socialData, url){
    socialData.url = '//www.linkedin.com/countserv/count/share';
    socialData.data.url = url;
    socialData.success = function(data){
      socialData.socialPush(data.count);
    };
  };
  socialFunc.pinterest = function(socialData, url){
    socialData.url = '//api.pinterest.com/v1/urls/count.json';
    socialData.data.url = url;
    socialData.success = function(data){
      socialData.socialPush(data.count);
    };
  };
  socialFunc.buffer = function(socialData, url){
    socialData.url = "//query.yahooapis.com/v1/public/yql";
    socialData.data.q = "SELECT content FROM data.headers WHERE url='https://api.bufferapp.com/1/links/shares.json?url=" + url + "'";
    socialData.data.format = "json";
    socialData.data.env = "http://datatables.org/alltables.env";
    socialData.success = function (data) {
      var j = data.query.results.resources.content;
      socialData.socialPush(data.query.results.resources.content.shares);
    };
  };
  socialFunc.delicious = function(socialData, url){
    socialData.url = '//feeds.del.icio.us/v2/json/urlinfo/data';
    socialData.data.url = url;
    socialData.success = function(data){
      socialData.socialPush((data.length>0)? data[0].total_posts : 0);
    };
  };
});

var socialCount = function (socials) {
  social_data_box = [];
  socials.forEach(function(s){
    var urls = [];
    var p = 0;
    $("."+s+"Count").each(function(){
      var url = $(this).attr("data-share-url");
      if($(this).text() == ""){
        if ($.inArray(url, urls) == -1){
          urls.push(url);
          socialData = {
            type: 'GET',
            dataType: 'jsonp',
            data: {noncache: new Date().getTime()},
            socialData: void(0),
            error: function(data){
              console.log('Error to get ' + s);
              socialData.barForward();
            },
            socialPush: function(n) {
              var n = Number(n);
              if(isNaN(n))n=0;
              $('.'+s+'Count[data-share-url="'+url+'"]').text(n);
              $('.'+s+'Count[data-share-url="'+url+'"]').data("count",n);
              socialData.barForward();
            }
          };
          socialFunc[s](socialData, url);
          social_data_box.push(socialData);
        }
      }
      var pos = String(p);
      if(p==0){
        pos = "above";
      }else if(p==1){
        pos = "bottom";
      }
      if((! "jekyll_var" in window) || (! jekyll_var("share_no_ga"))){
        $(this).parent().on('click', function() {
          ga('send', 'event', s, pos, url);
        });
      }
      p++;
    });
  });
  var bar = document.getElementById("bar-get-shares");
  var num = document.getElementById("num-get-shares");
  if(bar != null && num != null){
    bar.value = 0;
    bar.max = social_data_box.length;
    num.innerHTML = "0 %";
  }
  var barForward = function () {
    if(bar == null || num == null)return;
    bar.value +=1;
    num.innerHTML = Math.floor(100*bar.value/bar.max) + " %";
  };
  var social_ajax = [];
  social_data_box.forEach(function(d){
    d.barForward = barForward;
    social_ajax.push($.ajax(d));
  });
  $.when.apply($, social_ajax).always(function() {
    socials.forEach(function(s){
      var tot = 0;
      $("."+s+"Count").each(function(){
        var n = $(this).data("count");
        //console.log(n);
        tot += n;
      });
      //console.log("total of " + s + ": " + tot);
      $("#" + s + "_tot").html(tot);
    });
  });
};

$(function(){
  if(! "jekyll_var" in window)return;
  var socials=[];
  var smarks = ["hatebu", "twitter",
               "facebook", "pocket", "linkedin",
               "pinterest", "buffer", "delicious"];
  for(var i=0;i<smarks.length;i++){
    if(jekyll_var("share_check_all")||jekyll_var(smarks[i]+'_button')){
      socials.push(smarks[i]);
    }
  }
  socialCount(socials);
});
