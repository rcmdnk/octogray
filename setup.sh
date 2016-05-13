#!/usr/bin/env bash

yes=false
link=false

OPTNUM=0
while getopts yl OPT;do
  ((OPTNUM++))
  case $OPT in
    "y" ) yes=true ;;
    "l" ) link=true ;;
  esac
done
shift $((OPTIND - 1))

if [ ! -f _config.yml ];then
  echo "please call setup.sh from the top directory of octopress."
  exit 1
fi
echo

# yes/no helper function
function yesno () {
  echo -n "$1 [y/n]: "
  if $yes;then
    echo "y"
    return 0
  fi
  read -r yn
  while :;do
    case $yn in
      "y"|"Y" ) return 0;;
      "n"|"N" ) return 1;;
      *)
        echo -n "Answer yes or no. [y/n]: "
        read -r yn
        continue
        ;;
    esac
  done
}

# copy
function copy_link_util () {
  orig=$1
  dir=$2
  mkdir -p "$dir"
  if [ -f "$dir/$(basename "$orig")" ];then
    rm -f "$dir/$(basename "$orig")"
  fi
  if $link;then
    for((i=0; i<$(echo "$dir"|sed "s/^.\///"|sed "s/\/$//"|awk '{print split($0, tmp, "/")}'); i++));do
      orig="../$orig"
    done
    ln -s "$orig" "$dir/"
  else
    cp -r "$orig" "$dir/"
  fi
}

function copy_link () {
  orig=".themes/octogray/$1"
  dir="$(dirname "${1}")"
  if [ $# -gt 1 ];then
    dir="$2"
  fi
  copy_link_util "$orig" "$dir"
}

function copy_link_plugin () {
  orig=".themes/octogray/.plugins/$1"
  dir="$(dirname "${1#*/}")"
  if [ $# -gt 1 ];then
    dir="$2"
  fi
  copy_link_util "$orig" "$dir"
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
  printf "\n\e[31mPlease update Rakefile by following .themes/octogray/Rakefile.\e[m\n"
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

# replace plugins (image_tag.rb, include_array.rb, octopress_filter.rb)
yesno "Do you want to replace plugins (image_tag.rb, include_array.rb, octopress_filter.rb)?"
ret=$?
if [ $ret -eq 0 ];then
  for p in .themes/octogray/plugins/*rb;do
    rm -f "./plugins/$(basename "$p")"
    orig=${p#.themes/octogray/}
    copy_link "$orig"
  done
else
  printf "\n\e[31mPlease update plugins by following .themes/octogray/plugins\e[m\n"
fi
echo

# Don't proceed after error
set -e

# first, install normal files by install task
bundle update
#rake install['octogray']
mkdir -p source/_posts
mkdir -p public
for d in sass source;do
  while IFS= read -r -d '' f;do
    target="${f#.themes/octogray/}"
    if [ -d "$f" ];then
      mkdir -p "$target"
    else
      dir=$(dirname "$target")
      mkdir -p "$dir"
      copy_link_util "$f" "$dir"
    fi
  done < <(find .themes/octogray/$d -print0)
done

# initialize submodules
cd .themes/octogray
git submodule update --init --recursive
cd ../../

# install submodules

## [Octopress-Slideshare-Plugin](https://github.com/petehamilton/Octopress-Slideshare-Plugin)
copy_link_plugin Octopress-Slideshare-Plugin/slideshare.rb plugins

## [footnote-inline](http://rcmdnk.github.io/blog/2013/10/12/blog-octopress/)
copy_link_plugin footnote-inline/plugins/footnote_inline.rb
copy_link_plugin footnote-inline/source/javascripts/footnote.js
copy_link_plugin footnote-inline/sass/plugins/_footnote.scss

## [jekyll-var-to-js](https://github.com/rcmdnk/jekyll-var-to-js)
copy_link_plugin jekyll-var-to-js/plugins/jekyll-var-to-js.rb

## [octopress-share-numbers](https://github.com/rcmdnk/octopress-share-numbers)
copy_link_plugin octopress-share-numbers/plugins/share-numbers.rb
copy_link_plugin octopress-share-numbers/sass/plugins/_share-numbers.scss
copy_link_plugin octopress-share-numbers/source/javascripts/share-custom.js
copy_link_plugin octopress-share-numbers/source/_includes/post/sharing.html
copy_link_plugin octopress-share-numbers/source/_includes/post/sharing_custom.html
copy_link_plugin octopress-share-numbers/source/_includes/post/sharing_custom_big.html

## [octopress-random-posts](https://github.com/rcmdnk/octopress-random-posts)
copy_link_plugin octopress-random-posts/plugins/random_posts.rb
copy_link_plugin octopress-random-posts/sass/plugins/_random-posts.scss
copy_link_plugin octopress-random-posts/source/javascripts/random-posts.js
copy_link_plugin octopress-random-posts/source/javascripts/random-posts-html.js
#copy_link_plugin octopress-random-posts/source/_includes/post/post_list.html
copy_link_plugin octopress-random-posts/source/posts_light.html
copy_link_plugin octopress-random-posts/source/_includes/custom/asides/random_posts.html
copy_link_plugin octopress-random-posts/source/_includes/post/post_list.html

## [octopress-hatebu-posts](https://github.com/rcmdnk/octopress-hatebu-posts)
copy_link_plugin octopress-hatebu-posts/plugins/hatebu_posts.rb
copy_link_plugin octopress-hatebu-posts/sass/plugins/_hatebu-posts.scss
copy_link_plugin octopress-hatebu-posts/source/_includes/custom/asides/hatebu_posts.html

## [related_posts-jekyll_plugin](https://github.com/rcmdnk/related_posts-jekyll_plugin)
copy_link_plugin related_posts-jekyll_plugin/plugins/related_posts.rb
copy_link_plugin related_posts-jekyll_plugin/sass/plugins/_related-posts.scss
copy_link_plugin related_posts-jekyll_plugin/source/javascripts/related-posts.js
copy_link_plugin related_posts-jekyll_plugin/source/_includes/post/related_posts.html
copy_link_plugin related_posts-jekyll_plugin/source/_includes/custom/asides/related_posts.html

## [octopress-popular-posts](https://github.com/rcmdnk/octopress-popular-posts)
copy_link_plugin octopress-popular-posts/plugins/popular_posts.rb
copy_link_plugin octopress-popular-posts/octopress-page-view/plugins/page_view.rb plugins
copy_link_plugin octopress-popular-posts/source/_includes/custom/asides/popular_posts.html
copy_link_plugin octopress-popular-posts/source/_includes/post/popular_post_list.html

## [octopress-thumbnail](https://github.com/rcmdnk/octopress-thumbnail)
copy_link_plugin octopress-thumbnail/plugins/thumbnail.rb
copy_link_plugin octopress-thumbnail/sass/plugins/_thumbnail.scss

## [octopress-postscript](https://github.com/rcmdnk/octopress-postscript)
copy_link_plugin octopress-postscript/plugins/postscript.rb
copy_link_plugin octopress-postscript/sass/plugins/_postscript.scss

## [octopress-common-part](https://github.com/rcmdnk/octopress-common-part)
copy_link_plugin octopress-common-part/plugins/common_parts.rb
mkdir -p source/_common_parts
copy_link_plugin octopress-common-part/source/_common_parts/common_header.html
copy_link_plugin octopress-common-part/source/_common_parts/common_sidebar.html

## [jquery--ex-flex-fiex](http://github.com/cyokodog/jquery.ex-flex-fixed)
copy_link_plugin jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js source/javascripts

## [keyboardkey](http://rcmdnk.github.io/blog/2013/06/19/blog-octopress/)
copy_link_plugin keyboardkey/plugins/keyboardkey.rb
copy_link_plugin keyboardkey/sass/plugins/_keyboardkey.scss

## [monthly-archive](http://rcmdnk.github.io/blog/2013/10/01/blog-octopress/)
copy_link_plugin monthly-archive/plugins/monthly_archive.rb
copy_link_plugin monthly-archive/plugins/monthly_generator.rb
copy_link_plugin monthly-archive/source/_layouts/monthly_index.html
copy_link_plugin monthly-archive/source/_includes/custom/asides/monthly_archive.html
copy_link_plugin monthly-archive/source/javascripts/monthly_archive.js
copy_link_plugin monthly-archive/sass/plugins/_monthly_archive.scss

## [octopress-gemoji](http://rcmdnk.github.io/blog/2013/09/28/blog-octopress/)
copy_link_plugin octopress-gemoji/plugins/gemoji.rb
copy_link_plugin octopress-gemoji/sass/plugins/_gemoji.scss

## [octopress-responsive-video-embed](https://github.com/optikfluffel/octopress-responsive-video-embed)
copy_link_plugin octopress-responsive-video-embed/vimeo.rb plugins
copy_link_plugin octopress-responsive-video-embed/youtube.rb plugins
copy_link_plugin octopress-responsive-video-embed/_rve.scss sass/plugins

## [githubrepo-octopress](https://github.com/sotsy/githubrepo-octopress)
copy_link_plugin githubrepo-octopress/githubwidget.rb plugins
copy_link_plugin GitHub-jQuery-Repo-Widget/jquery.githubRepoWidget.min.js source/javascripts

## [octopress-post-card](https://github.com/rcmdnk/octopress-post-card)
copy_link_plugin octopress-post-card/plugins/post_card.rb
copy_link_plugin octopress-post-card/sass/plugins/_post-card.scss

# install downloaded plugins

## [NailThumb](http://www.garralab.com/nailthumb.php)
#wget -O nailthumb.1.1.zip http://sourceforge.net/projects/nailthumb/files/nailthumb.1.1.zip/download
#unzip nailthumb.1.1.zip
#rm -f nailthumb.1.1.zip
#mv nailthumb .themes/octogray/.plugins/
#cp .themes/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.css ./sass/plugins/_nailthumb.scss
#cp .themes/octogray/.plugins/nailthumb/jquery.nailthumb.1.1.min.js ./source/javascripts/
#rm -rf .themes/octogray/.plugins/nailthumb/
#echo

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
for p in .themes/octogray/plugins_add/*rb;do
  copy_link_util "${p}" ./plugins/
done

# other files
cp .themes/octogray/ping.yml .
