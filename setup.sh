#!/bin/sh

if [ ! -f _config.yml ];then
  echo "please use in top directory of octopress."
  exit 1
fi
if [ ! -d source ];then
  echo "please do \"rake install['octogray']\" before setup."
  exit 1
fi

# Plugins

## [Octopress-Slideshare-Plugin](https://github.com/petehamilton/Octopress-Slideshare-Plugin)
git submodule add git@github.com:PeterHamilton/Octopress-Slideshare-Plugin.git .plugins/Octopress-Slideshare-Plugin
cp .plugins/Octopress-Slideshare-Plugin/slideshare.rb ./plugins/

## [footnote-extra](http://rcmdnk.github.io/blog/2013/10/12/blog-octopress/)
git submodule add git@github.com:rcmdnk/footnote-extra.git .plugins/footnote-extra
cp .plugins/footnote-extra/plugins/footnote_extra.rb ./plugins/
cp .plugins/footnote-extra/plugins/footnote_inline.rb ./plugins/
cp .plugins/footnote-extra/source/javascripts/footnote.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/footnote.js\"></script>" >> source/_includes/custom/head.html
cp .plugins/footnote-extra/sass/plugins/_footnote.scss ./sass/plugins/

## [intro.js](http://usablica.github.io/intro.js/)
git submodule add git@github.com:usablica/intro.js.git .plugins/intro.js
cp .plugins/intro.js/plugins/minified/infro.min.js  ./source/javascripts/
cp .plugins/intro.js/introjs.css  ./sass/plugins/

## [jquery--ex-flex-fiex](http://github.com/cyokodog/jquery.ex-flex-fixed)
git submodule add git@github.com:cyokodog/jquery.ex-flex-fixed.git .plugins/jquery.ex-flex-fixed
cp .plugins/jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js ./source/javascripts/
cat << EOF >> source/_includes/custom/head.html
<script src="{{root_url}}/javascripts/jquery.exflexfixed-0.3.0.js" type="text/javascript"></script>
<script>
  jQuery(function($){
    $('.scroll-fixed').exFlexFixed({
      watchPosition: true,
      container : '#content'
    });
  });
</script>
EOF

## [keyboardkey](http://rcmdnk.github.io/blog/2013/06/19/blog-octopress/)
git submodule add git@github.com:rcmdnk/keyboardkey.git .plugins/keybaordkey
cp .plugins/keyboardkey/plugins/keybaordkey.rb ./plugins/
cp .plugins/keyboardkey/sass/plugins/_keybaordkey.scss ./sass/plugins/

## [monthly-archive](http://rcmdnk.github.io/blog/2013/10/01/blog-octopress/)
git submodule add git@github.com:rcmdnk/monthly-archive.git .plugins/monthly-archive
cp .plugins/monthly-archive/plugins/monthly_archive.rb ./plugins/
cp .plugins/monthly-archive/source/_layouts/monthly_index.html ./source/_layouts/
cp .plugins/monthly-archive/source/_includes/custom/asides/monthly_archive.html ./source/_includes/custom/asides/
cp .plugins/monthly-archive/source/javascripts/monthly_archive.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/monthly_archive.js\"></script>" >> source/_includes/custom/head.html
cp .plugins/monthly-archive/sass/plugins/_monthly_archive.scss ./sass/plugins/

## [octopress-gemoji](http://rcmdnk.github.io/blog/2013/09/28/blog-octopress/)
git submodule add git@github.com:rcmdnk/octopress-gemoji.git .plugins/octopress-gemoji
cp .plugins/octopress-gemoji/plugins/gemoji.rb ./plugins/
cp .plugins/octopress-gemoji/sass/plugins/_gemoji.scss ./sass/plugins/

## [octopress-responsive-video-embed](https://github.com/optikfluffel/octopress-responsive-video-embed)
git submodule add git@github.com:optikfluffel/octopress-responsive-video-embed.git .plugins/octopress-responsive-video-embed
cp .plugins/octopress-responsive-video-embed/*.rb ./plugins/
cp .plugins/octopress-responsive-video-embed/_rve.scss ./sass/plugins/


