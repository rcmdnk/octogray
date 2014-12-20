var socialCount = function (social, cname, url) {
  var vname = cname.replace(/-/g, "");
  if((new Function('return (typeof ' + vname + '!= "undefined");'))())return;
  (new Function('window.' + vname + ' = "defined";'))();
  url = (url)? encodeURI(url): encodeURI(location.href);
  socialData = {
    type: 'GET',
    dataType: 'jsonp',
    data: {noncache: new Date().getTime()},
    success: function(data) {
      timing.end = (new Date()).getTime();
      var t = timing.end - timing.start;
      ga('send', 'timing', 'social', social,  t);
    }
  };
  if(social == 'hatebu'){
//    if('https:' == document.location.protocol){
//      return;
//    //  socialData.url = "//query.yahooapis.com/v1/public/yql";
//    //  socialData.data.q = "SELECT content FROM data.headers WHERE url='http://api.b.st-hatena.com/entry.count&url=" + url + "'";
//    //  socialData.data.format = "json";
//    //  socialData.data.env = "http://datatables.org/alltables.env";
//    //  socialData.success = function (data) {
//    //    $('.' + cname).text(data.query.results.resources||0);
//    //    var m = data.query.results.resources.content.match(/window\.__SSR = {c: ([\d]+)/);
//    //    $('.' + cname).text(data||0);
//    //    $('.' + cname).text((m != null)? m[1] : 0);
//    //  };
//    }else{
      socialData.url = 'http://api.b.st-hatena.com/entry.count';
      socialData.data.url = url;
      socialData.success = function(data){
        $('.' + cname).text(data||0);
      };
//    }
  }else if (social == 'twitter'){
    socialData.url = '//urls.api.twitter.com/1/urls/count.json';
    socialData.data.url = url;
    socialData.success = function(data){
      $('.' + cname).text(data.count||0);
    };
  }else if(social == 'googleplus'){
    socialData.url = "//query.yahooapis.com/v1/public/yql";
    socialData.data.q = "SELECT content FROM data.headers WHERE url='https://plusone.google.com/_/+1/fastbutton?url=" + url + "'";
    socialData.data.format = "json";
    socialData.data.env = "http://datatables.org/alltables.env";
    socialData.success = function (data) {
      var m = data.query.results.resources.content.match(/window\.__SSR = {c: ([\d]+)/);
      $('.' + cname).text((m != null)? m[1] : 0);
    };
  }else if(social == 'facebook'){
    socialData.url = '//graph.facebook.com/';
    socialData.data.id = url;
    socialData.success = function(data){
      $('.' + cname).text(data.shares||0);
    };
  }else if(social == 'pocket'){
    socialData.url = "//query.yahooapis.com/v1/public/yql";
    socialData.data.q = "SELECT content FROM data.headers WHERE url='https://widgets.getpocket.com/v1/button?label=pocket&count=vertical&v=1&url=" + url + "'";
    socialData.data.format = "json";
    socialData.data.env = "http://datatables.org/alltables.env";
    socialData.success = function (data) {
      //$('.' + cname).text(data.toSource());
      $('.' + cname).text(data.query.results.resources.content.match(/<em id="cnt">(\d+)<\/em>/)[1]||0);
    };
  }else if(social == 'linkedin'){
    socialData.url = '//www.linkedin.com/countserv/count/share';
    socialData.data.url = url;
    socialData.success = function(data){
      $('.' + cname).text(data.count||0);
    };
  }else if(social == 'stumble'){
    socialData.url = '//www.stumbleupon.com/services/1.01/badge.getinfo';
    socialData.data.url = url;
    socialData.success = function(data){
      $('.' + cname).text(data.result.views||0);
    };
    socialData.error = function(data){
      $('.' + cname).text(0);
    };
  }else if(social == 'delicious'){
    socialData.url = '//feeds.delicious.com/v2/json/urlinfo/data';
    socialData.data.url = url;
    socialData.success = function(data){
      $('.' + cname).text((data.length>0)? data[0].total_posts : 0);
    };
  }else if(social == 'pinterest'){
    socialData.url = '//api.pinterest.com/v1/urls/count.json';
    socialData.data.url = url;
    socialData.success = function(data){
      $('.' + cname).text(data.count||0);
    };
  }else {
    return;
  }
  $.ajax(socialData);

  $('.' + cname).on('click', function() {
      ga('send', 'event', 'button', 'click', cname);
  });
}
