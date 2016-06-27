---
layout: mytools
footer: false
twitter: true
---

My Tools

* [all posts](/posts.html)
{% if site.linkchecker %}* [linkchecker](/linkchecker.html) [![Build Status](https://travis-ci.org/{{ site.linkchecker_travis_user }}/{{ site.linkchecker_travis_repo }}.svg?branch=master)](https://travis-ci.org/{{ site.linkchecker_travis_user }}/{{ site.linkchecker_travis_repo }}){% endif %}
* [Octogray](https://github.com/rcmdnk/octogray) [![Build Status](https://travis-ci.org/rcmdnk/octogray.svg?branch=master)](https://travis-ci.org/rcmdnk/octogray)
{% include custom/mytools.html %}
