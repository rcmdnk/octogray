---
layout: mytools
footer: false
twitter: true
---

# My Tools

Last update: {{site.time|date_to_rfc822}}

* [all posts](/posts.html)
{% if site.linkchecker %}* [linkchecker](/linkchecker.html) [![Build Status](//travis-ci.org/{{ site.linkchecker_travis_user }}/{{ site.linkchecker_travis_repo }}.svg?branch=master)](//travis-ci.org/{{ site.linkchecker_travis_user }}/{{ site.linkchecker_travis_repo }}){% endif %}
* [FeedlyGraph](http://www.feedlygraph.info/graph?feedid=feed/{{site.url}}{{site.subscribe_rss}})
* [Octogray](//github.com/rcmdnk/octogray) [![Build Status](//travis-ci.org/rcmdnk/octogray.svg?branch=master)](//travis-ci.org/rcmdnk/octogray)
{% include custom/mytools.html %}
