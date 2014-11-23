#!/usr/bin/env bash
for f in \
.themes/octogray/.plugins/Octopress-Slideshare-Plugin/slideshare.rb \
.themes/octogray/.plugins/footnote-inline/plugins/footnote_inline.rb \
.themes/octogray/.plugins/octopress-postscript/plugins/postscript.rb \
.themes/octogray/.plugins/keyboardkey/plugins/keyboardkey.rb \
.themes/octogray/.plugins/monthly-archive/plugins/monthly_archive.rb \
.themes/octogray/.plugins/monthly-archive/plugins/monthly_generator.rb \
.themes/octogray/.plugins/octopress-gemoji/plugins/gemoji.rb \
.themes/octogray/.plugins/octopress-responsive-video-embed/*.rb \
.themes/octogray/.plugins/jekyll-tweet-tag/tweet_tag.rb \
.themes/octogray/.plugins/githubrepo-octopress/githubwidget.rb \
.themes/octogray/plugins_add/*rb;do
  rm plugins/$(basename $f)
  ln -s ../$f plugins/$(basename $f)
done

for f in \
.themes/octogray/.plugins/footnote-inline/sass/plugins/_footnote.scss \
.themes/octogray/.plugins/octopress-postscript/sass/plugins/_postscript.scss \
.themes/octogray/.plugins/keyboardkey/sass/plugins/_keyboardkey.scss \
.themes/octogray/.plugins/monthly-archive/sass/plugins/_monthly_archive.scss \
.themes/octogray/.plugins/octopress-gemoji/sass/plugins/_gemoji.scss \
.themes/octogray/.plugins/octopress-responsive-video-embed/_rve.scss;do
  rm sass/plugins/$(basename $f)
  ln -s ../../$f sass/plugins/$(basename $f)
done

for f in \
.themes/octogray/.plugins/footnote-inline/source/javascripts/footnote.js \
.themes/octogray/.plugins/jquery.ex-flex-fixed/jquery.exflexfixed-0.3.0.js \
.themes/octogray/.plugins/monthly-archive/source/javascripts/monthly_archive.js \
.themes/octogray/.plugins/GitHub-jQuery-Repo-Widget/jquery.githubRepoWidget.min.js;do
  rm source/javascripts/$(basename $f)
  ln -s ../../$f source/javascripts/$(basename $f)
done

rm source/_layouts/monthly_index.html
ln -s ../../.themes/octogray/.plugins/monthly-archive/source/_layouts/monthly_index.html source/_layouts/monthly_index.html
rm source/_includes/custom/asides/monthly_archive.html
ln -s ../../../../.themes/octogray/.plugins/monthly-archive/source/_includes/custom/asides/monthly_archive.html source/_includes/custom/asides/monthly_archive.html

rm ./ping.yml
ln -s .themes/octogray/ping.yml ./ping.yml
