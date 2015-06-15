#!/usr/bin/env bash

yes=0
if [ "$1" = "-y" ] || [ "$1" = "--yes" ];then
  yes=1
fi

if [ ! -f _config.yml ];then
  echo "please call setup.sh from the top directory of octopress."
  exit 1
fi
echo

# yes/no helper function
function yesno () {
  echo -n "$1 [y/n]: "
  if [ $yes -eq 1 ];then
    echo "y"
    return 0
  fi
  read yn
  while :;do
    case $yn in
      "y"|"Y" ) return 0;;
      "n"|"N" ) return 1;;
      *)
        echo -n "Answer yes or no. [y/n]: "
        read yn
        continue
        ;;
    esac
  done
}

# sed nobackup replace function
if sed --version 2>/dev/null |grep -q GNU;then
  function sedi () {
    sed -i"" "$@"
  }
else
  function sedi () {
    sed -i "" "$@"
  }
fi

# patch Gemfile
yesno "Do you want to patch Gemfile?"
ret=$?
if [ $ret -eq 0 ];then
  patch Gemfile < .themes/octogray/patches/Gemfile.patch
else
  printf "\n\e[31mPlease check .themes/octogray/Gemfile for necessary packages.\e[m\n"
fi
echo

# patch Rakefile
yesno "Do you want to patch Rakefile?"
ret=$?
if [ $ret -eq 0 ];then
  patch Rakefile < .themes/octogray/patches/Rakefile.patch
else
  "\n\e[31mPlease update Rakefile by following .themes/octogray/Rakefile.\e[m\n"
fi
echo

# patch _config.yml
yesno "Do you want to patch _config.yml?"
ret=$?
if [ $ret -eq 0 ];then
  patch _config.yml < .themes/octogray/patches/_config.yml.patch
else
  printf "\n\e[31mPlease update _config.yml by following .themes/octogray/_config.yml\e[m\n"
fi
echo

# patch plugins (image_tag.rb, include_array.rb, octopress_filter.rb)
yesno "Do you want to patch plugins (image_tag.rb, include_array.rb, octopress_filter.rb)?"
ret=$?
if [ $ret -eq 0 ];then
  patch -p1 < .themes/octogray/patches/plugins.patch
else
  printf "\n\e[31mPlease update plugins by following .themes/octogray/plugins\e[m\n"
fi
echo

# first, install normal files by install task
bundle update
rake install['octogray']

# initialize submodules
cd .themes/octogray
git submodule update --init
cd ../../

## install submodules

## [Octopress-Slideshare-Plugin](https://github.com/petehamilton/Octopress-Slideshare-Plugin)
ln -s ../.themes/octogray/.plugins/Octopress-Slideshare-Plugin/slideshare.rb ./plugins/

## [footnote-inline](http://rcmdnk.github.io/blog/2013/10/12/blog-octopress/)
ln -s ../.themes/octogray/.plugins/footnote-inline/plugins/footnote_inline.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/footnote-inline/source/javascripts/footnote.js ./source/javascripts/
ln -s ../../.themes/octogray/.plugins/footnote-inline/sass/plugins/_footnote.scss ./sass/plugins/

## [jekyll-var-to-js](https://github.com/rcmdnk/jekyll-var-to-js)
ln -s ../.themes/octogray/.plugins/jekyll-var-to-js/plugins/jekyll-var-to-js.rb ./plugins/

## [octopress-share-numbers](https://github.com/rcmdnk/octopress-share-numbers)
ln -s ../.themes/octogray/.plugins/octopress-share-numbers/plugins/share-numbers.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/octopress-share-numbers/sass/plugins/_share-numbers.scss ./sass/plugins/
ln -s ../../.themes/octogray/.plugins/octopress-share-numbers/source/javascripts/share-custom.js ./source/javascripts/
rm -f ./source/_includes/post/sharing.html
ln -s ../../../.themes/octogray/.plugins/octopress-share-numbers/source/_includes/post/sharing.html ./source/_includes/post/
ln -s ../../../.themes/octogray/.plugins/octopress-share-numbers/source/_includes/post/sharing_custom.html ./source/_includes/post/

## [octopress-postscript](https://github.com/rcmdnk/octopress-postscript)
ln -s ../.themes/octogray/.plugins/octopress-postscript/plugins/postscript.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/octopress-postscript/sass/plugins/_postscript.scss ./sass/plugins/

## [jquery--ex-flex-fiex](http://github.com/cyokodog/jquery.ex-flex-fixed)
ln -s ../../.themes/octogray/.plugins/jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js ./source/javascripts/

## [keyboardkey](http://rcmdnk.github.io/blog/2013/06/19/blog-octopress/)
ln -s ../.themes/octogray/.plugins/keyboardkey/plugins/keyboardkey.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/keyboardkey/sass/plugins/_keyboardkey.scss ./sass/plugins/

## [monthly-archive](http://rcmdnk.github.io/blog/2013/10/01/blog-octopress/)
ln -s ../.themes/octogray/.plugins/monthly-archive/plugins/monthly_archive.rb ./plugins/
ln -s ../.themes/octogray/.plugins/monthly-archive/plugins/monthly_generator.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/monthly-archive/source/_layouts/monthly_index.html ./source/_layouts/
ln -s ../../../../.themes/octogray/.plugins/monthly-archive/source/_includes/custom/asides/monthly_archive.html ./source/_includes/custom/asides/
ln -s ../../.themes/octogray/.plugins/monthly-archive/source/javascripts/monthly_archive.js ./source/javascripts/
ln -s ../../.themes/octogray/.plugins/monthly-archive/sass/plugins/_monthly_archive.scss ./sass/plugins/

## [octopress-gemoji](http://rcmdnk.github.io/blog/2013/09/28/blog-octopress/)
ln -s ../.themes/octogray/.plugins/octopress-gemoji/plugins/gemoji.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/octopress-gemoji/sass/plugins/_gemoji.scss ./sass/plugins/

## [octopress-responsive-video-embed](https://github.com/optikfluffel/octopress-responsive-video-embed)
ln -s ../.themes/octogray/.plugins/octopress-responsive-video-embed/vimeo.rb ./plugins/
ln -s ../.themes/octogray/.plugins/octopress-responsive-video-embed/youtube.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/octopress-responsive-video-embed/_rve.scss ./sass/plugins/

## [githubrepo-octopress](https://github.com/sotsy/githubrepo-octopress)
ln -s ../.themes/octogray/.plugins/githubrepo-octopress/githubwidget.rb ./plugins/
ln -s ../../.themes/octogray/.plugins/GitHub-jQuery-Repo-Widget/jquery.githubRepoWidget.min.js ./source/javascripts/

# install downloaded plugins

# [NailThumb](http://www.garralab.com/nailthumb.php)
wget -O nailthumb.1.1.zip http://sourceforge.net/projects/nailthumb/files/nailthumb.1.1.zip/download
unzip nailthumb.1.1.zip
rm -f nailthumb.1.1.zip
mv nailthumb .themes/octogray/.plugins/
cp .themes/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.css ./sass/plugins/_nailthumb.scss
cp .themes/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.min.js ./source/javascripts/
rm -rf .themes/octogray/.plugins/nailthumb/
echo

## [jQuery SCroll to Top Control](http://www.dynamicdrive.com/dynamicindex3/scrolltop.htm)
wget -O scrolltopcontrol.js http://www.dynamicdrive.com/dynamicindex3/scrolltopcontrol.js
mkdir -p .themes/octogray/.plugins/scrolltopcontrol
mv scrolltopcontrol.js .themes/octogray/.plugins/scrolltopcontrol
cp .themes/octogray/.plugins/scrolltopcontrol/scrolltopcontrol.js ./source/javascripts/
sedi "s/<img src=\"up.png\" style=\"width:48px; height:48px\" \/>/<i class=\"fa fa-chevron-up icon-scroll-up\"><\/i>/g" ./source/javascripts/scrolltopcontrol.js
sedi "s/startline:100/startline:300/g" ./source/javascripts/scrolltopcontrol.js
sedi "s/offsety:5/offsety:20/g" ./source/javascripts/scrolltopcontrol.js
sedi "s/bottom:mainobj/top:mainobj/g" ./source/javascripts/scrolltopcontrol.js
rm -rf .themes/octogray/.plugins/scrolltopcontrol/
echo

# other plugins
cp .themes/octogray/plugins_add/*rb ./plugins


# other files
cp .themes/octogray/ping.yml .
