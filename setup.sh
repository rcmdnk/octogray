#!/bin/bash

if [ ! -f _config.yml ];then
  echo "please use in top directory of octopress."
  exit 1
fi

# initialize submodules
cd .theme/octogray
git submodule update --init
cd ../../

# first, install normal files by install task
rake install['octogray']

## [Octopress-Slideshare-Plugin](https://github.com/petehamilton/Octopress-Slideshare-Plugin)
cp .theme/octogray/.plugins/Octopress-Slideshare-Plugin/slideshare.rb ./plugins/
echo

## [footnote-extra](http://rcmdnk.github.io/blog/2013/10/12/blog-octopress/)
cp .theme/octogray/.plugins/footnote-extra/plugins/footnote_extra.rb ./plugins/
cp .theme/octogray/.plugins/footnote-extra/plugins/footnote_inline.rb ./plugins/
cp .theme/octogray/.plugins/footnote-extra/source/javascripts/footnote.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/footnote.js\"></script>" >> source/_includes/custom/head.html
cp .theme/octogray/.plugins/footnote-extra/sass/plugins/_footnote.scss ./sass/plugins/
echo

## [octopress-postscript](https://github.com/rcmdnk/octopress-postscript)
cp .theme/octogray/.plugins/footnote-extra/plugins/footnote_extra.rb ./plugins/
cp .theme/octogray/.plugins/footnote-extra/plugins/footnote_inline.rb ./plugins/
cp .theme/octogray/.plugins/footnote-extra/source/javascripts/footnote.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/footnote.js\"></script>" >> source/_includes/custom/head.html
cp .theme/octogray/.plugins/footnote-extra/sass/plugins/_footnote.scss ./sass/plugins/
echo

## [intro.js](http://usablica.github.io/intro.js/)
cp .theme/octogray/.plugins/intro.js/introjs.css  ./sass/plugins/_introjs.scss
cp .theme/octogray/.plugins/intro.js/minified/intro.min.js ./source/javascripts
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
cp .theme/octogray/.plugins/jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js ./source/javascripts/
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
cp .theme/octogray/.plugins/keyboardkey/plugins/keyboardkey.rb ./plugins/
cp .theme/octogray/.plugins/keyboardkey/sass/plugins/_keyboardkey.scss ./sass/plugins/
echo

## [monthly-archive](http://rcmdnk.github.io/blog/2013/10/01/blog-octopress/)
cp .theme/octogray/.plugins/monthly-archive/plugins/monthly_archive.rb ./plugins/
cp .theme/octogray/.plugins/monthly-archive/plugins/monthly_generator.rb ./plugins/
cp .theme/octogray/.plugins/monthly-archive/source/_layouts/monthly_index.html ./source/_layouts/
cp .theme/octogray/.plugins/monthly-archive/source/_includes/custom/asides/monthly_archive.html ./source/_includes/custom/asides/
cp .theme/octogray/.plugins/monthly-archive/source/javascripts/monthly_archive.js ./source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/monthly_archive.js\"></script>" >> source/_includes/custom/head.html
cp .theme/octogray/.plugins/monthly-archive/sass/plugins/_monthly_archive.scss ./sass/plugins/
echo

## [octopress-gemoji](http://rcmdnk.github.io/blog/2013/09/28/blog-octopress/)
cp .theme/octogray/.plugins/octopress-gemoji/plugins/gemoji.rb ./plugins/
cp .theme/octogray/.plugins/octopress-gemoji/sass/plugins/_gemoji.scss ./sass/plugins/
echo

## [octopress-responsive-video-embed](https://github.com/optikfluffel/octopress-responsive-video-embed)
cp .theme/octogray/.plugins/octopress-responsive-video-embed/*.rb ./plugins/
cp .theme/octogray/.plugins/octopress-responsive-video-embed/_rve.scss ./sass/plugins/
echo

## [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
mkdir -p ./sass/plugins/font-awesome
cp .theme/octogray/.plugins/Font-Awesome/scss/_*scss ./sass/plugins/font-awesome
cp .theme/octogray/.plugins/Font-Awesome/scss/font-awesome.scss ./sass/plugins/_font-awesome.scss
sed -i ".bak" 's/@import "/@import "font-awesome\//g' ./sass/plugins/_font-awesome.scss
rm -f ./sass/plugins/_font-awesome.scss.bak
mkdir -p source/font
cp .theme/octogray/.plugins/Font-Awesome/font/* source/font
echo

## [githubrepo-octopress](https://github.com/sotsy/githubrepo-octopress)
cp .themes/octogray/.plugins/githubrepo-octopress/githubwidget.rb plugins/
cp .themes/octogray/.plugins/GitHub-jQuery-Repo-Widget/jquery.githubRepoWidget.min.js source/javascripts/
echo "<script src=\"{{root_url}}/javascripts/jquery.githubRepoWidget.min.js\"></script>" >> source/_includes/custom/head.html

## [NailThumb](http://www.garralab.com/nailthumb.php)
wget -O nailthumb.1.1.zip http://sourceforge.net/projects/nailthumb/files/nailthumb.1.1.zip/download
unzip nailthumb.1.1.zip
rm -f nailthumb.1.1.zip
mv nailthumb .theme/octogray/.plugins/
cp .theme/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.css ./sass/plugins/_nailthumb.scss
cp .theme/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.min.js ./source/javascripts/
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
mkdir -p .theme/octogray/.plugins/scrolltopcontrol
mv scrolltopcontrol.js .theme/octogray/.plugins/scrolltopcontrol
cp .theme/octogray/.plugins/scrolltopcontrol/scrolltopcontrol.js ./source/javascripts/
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
