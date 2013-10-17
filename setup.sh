#!/bin/bash

if [ ! -f _config.yml ];then
  echo "please use in top directory of octopress."
  exit 1
fi
if [ ! -d source ];then
  echo "please do \"rake install['octogray']\" before setup."
  exit 1
fi

# Plugins
mkdir -p .plugins

## [Octopress-Slideshare-Plugin](https://github.com/petehamilton/Octopress-Slideshare-Plugin)
git submodule add git@github.com:PeterHamilton/Octopress-Slideshare-Plugin.git .plugins/Octopress-Slideshare-Plugin
cp .plugins/Octopress-Slideshare-Plugin/slideshare.rb ./plugins/
echo

## [footnote-extra](http://rcmdnk.github.io/blog/2013/10/12/blog-octopress/)
git submodule add git@github.com:rcmdnk/footnote-extra.git .plugins/footnote-extra
cp .plugins/footnote-extra/plugins/footnote_extra.rb ./plugins/
cp .plugins/footnote-extra/plugins/footnote_inline.rb ./plugins/
cp .plugins/footnote-extra/source/javascripts/footnote.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/footnote.js\"></script>" >> source/_includes/custom/head.html
cp .plugins/footnote-extra/sass/plugins/_footnote.scss ./sass/plugins/
echo

## [intro.js](http://usablica.github.io/intro.js/)
git submodule add git@github.com:usablica/intro.js.git .plugins/intro.js
cp .plugins/intro.js/introjs.css  ./sass/plugins/_introjs.scss
cp .plugins/intro.js/minified/intro.min.js ./source/javascripts
cat << EOF >> source/_includes/custom/head.html
<script src="{{root_url}}/javascripts/intro.min.js" type="text/javascript"></script>
<script>
jQuery(function($){
  $('body').on('click', '#my_introjs', function(){
    introJs().start();
  });
});
</script>
EOF
echo

## [jquery--ex-flex-fiex](http://github.com/cyokodog/jquery.ex-flex-fixed)
git submodule add git@github.com:cyokodog/jquery.ex-flex-fixed.git .plugins/jquery.ex-flex-fixed
cp .plugins/jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js ./source/javascripts/
cat << EOF >> source/_includes/custom/head.html
<script src="{{root_url}}/javascripts/jquery.exflexfixed-0.3.0.js" type="text/javascript"></script>
<script>
  jQuery(function(\$){
    \$('.scroll-fixed').exFlexFixed({
      watchPosition: true,
      container : '#content'
    });
  });
</script>
EOF
echo

## [keyboardkey](http://rcmdnk.github.io/blog/2013/06/19/blog-octopress/)
git submodule add git@github.com:rcmdnk/keyboardkey.git .plugins/keyboardkey
cp .plugins/keyboardkey/plugins/keyboardkey.rb ./plugins/
cp .plugins/keyboardkey/sass/plugins/_keyboardkey.scss ./sass/plugins/
echo

## [monthly-archive](http://rcmdnk.github.io/blog/2013/10/01/blog-octopress/)
git submodule add git@github.com:rcmdnk/monthly-archive.git .plugins/monthly-archive
cp .plugins/monthly-archive/plugins/monthly_archive.rb ./plugins/
cp .plugins/monthly-archive/plugins/monthly_generator.rb ./plugins/
cp .plugins/monthly-archive/source/_layouts/monthly_index.html ./source/_layouts/
cp .plugins/monthly-archive/source/_includes/custom/asides/monthly_archive.html ./source/_includes/custom/asides/
cp .plugins/monthly-archive/source/javascripts/monthly_archive.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/monthly_archive.js\"></script>" >> source/_includes/custom/head.html
cp .plugins/monthly-archive/sass/plugins/_monthly_archive.scss ./sass/plugins/
echo

## [octopress-gemoji](http://rcmdnk.github.io/blog/2013/09/28/blog-octopress/)
git submodule add git@github.com:rcmdnk/octopress-gemoji.git .plugins/octopress-gemoji
cp .plugins/octopress-gemoji/plugins/gemoji.rb ./plugins/
cp .plugins/octopress-gemoji/sass/plugins/_gemoji.scss ./sass/plugins/
echo

## [octopress-responsive-video-embed](https://github.com/optikfluffel/octopress-responsive-video-embed)
git submodule add git@github.com:optikfluffel/octopress-responsive-video-embed.git .plugins/octopress-responsive-video-embed
cp .plugins/octopress-responsive-video-embed/*.rb ./plugins/
cp .plugins/octopress-responsive-video-embed/_rve.scss ./sass/plugins/
echo

## [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
git submodule add git://github.com/FortAwesome/Font-Awesome.git .plugins/Font-Awesome
mkdir -p ./sass/plugins/font-awesome
cp .plugins/Font-Awesome/scss/_*scss ./sass/plugins/font-awesome
cp .plugins/Font-Awesome/scss/font-awesome.scss ./sass/plugins/_font-awesome.scss
sed -i ".bak" 's/@import "/@import "font-awesome\//g' ./sass/plugins/_font-awesome.scss
rm -f ./sass/plugins/_font-awesome.scss.bak
mkdir -p source/font
cp .plugins/Font-Awesome/font/* source/font
echo

## [NailThumb](http://www.garralab.com/nailthumb.php)
wget -O nailthumb.1.1.zip http://sourceforge.net/projects/nailthumb/files/nailthumb.1.1.zip/download
unzip nailthumb.1.1.zip
rm -f nailthumb.1.1.zip
mv nailthumb .plugins/
cp .plugins/nailthumb/jquery.nailthumb.1.1.css ./sass/plugins/_nailthumb.scss
cp .plugins/nailthumb/jquery.nailthumb.1.1.min.js ./source/javascripts/
cat << EOF >> source/_includes/custom/head.html
<script src="{{root_url}}/javascripts/jquery.nailthumb.1.1.min.js" type="text/javascript"></script>
<script>
jQuery(function($){
  $('.nailthumb-container').nailthumb({width:200,height:200,fitDirection:'left top',maxShrink:1});
  $('.nailthumb-container-center').nailthumb({width:200,height:200,fitDirection:'center',maxShrink:1});
});
</script>
EOF
echo

## [jQuery SCroll to Top Control](http://www.dynamicdrive.com/dynamicindex3/scrolltop.htm)
wget -O scrolltopcontrol.js http://www.dynamicdrive.com/dynamicindex3/scrolltopcontrol.js
mkdir -p .plugins/scrolltopcontrol
mv scrolltopcontrol.js .plugins/scrolltopcontrol
cp .plugins/scrolltopcontrol/scrolltopcontrol.js ./source/javascripts/
sed -i ".bak" "s/<img src=\"up.png\" style=\"width:48px; height:48px\" \/>/<i class=\"icon-chevron-up icon-scroll-up\"><\/i>/g" ./source/javascripts/scrolltopcontrol.js
rm -f ./source/javascripts/scrolltopcontrol.js.bak
echo "<script src=\"{{root_url}}/javascripts/scrolltopcontrol.js\"></script>" >> source/_includes/custom/head.html
echo


## other plugins
cp .themes/octogray/plugins/*rb ./plugins/

# install Gemfile
echo
echo
echo -n "Do you want to udpate Gemfile? [y/n]: "
read yn
while [ 1 ];do
  case $yn in
    "y"|"Y" ) cp .themes/octogray/Gemfile .;bundle install;break;;
    "n"|"N" )
      printf "\n\e[31mPlease check .themes/octogray/Gemfile for necessary packages.\e[m\n"
      break
      ;;
    *)
      echo -n "[y/n]: "
      read yn
      continue
      ;;
  esac
done

# install Rakefile
echo
echo
echo -n "Do you want to overwrite Rakefile? [y/n]: "
read yn
while [ 1 ];do
  case $yn in
    "y"|"Y" ) cp .themes/octogray/Rakefile .;break;;
    "n"|"N" )
      printf "\n\e[31mPlease update Rakefile by following .themes/octogray/Rakefile.\e[m\n"
      break
      ;;
    *)
      echo -n "[y/n]: "
      read yn
      continue
      ;;
  esac
done

# install _config.yml
echo
echo
echo -n "Do you want to overwrite _config.yml? [y/n]: "
read yn
while [ 1 ];do
  case $yn in
    "y"|"Y" ) cp .themes/octogray/_config.yml .;break;;
    "n"|"N" )
      printf "\n\e[31mPlease update _config.yml by following .themes/octogray/_config.yml\e[m\n"
      break
      ;;
    *)
      echo -n "[y/n]: "
      read yn
      continue
      ;;
  esac
done
