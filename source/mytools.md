---
layout: mytools
footer: false
twitter: true
---

## My Tools

Last update: {{site.time|date_to_rfc822}}

* [all posts](/posts.html)
{% if site.linkchecker or site.htmlchecker or site.linkchecker %}
* Site Checks {%if site.site_check_batch%}{{ site.site_check_batch }}{% endif %}

{% if site.htmlchecker %}    * [HTML Validation](/htmlchecker.html){% endif %}
{% if site.csschecker %}    * [CSS Validation](/csschecker.html){% endif %}
{% if site.linkchecker %}    * [linkchecker](/linkchecker.html){% endif %}
{% endif %}
* [FeedlyGraph](http://www.feedlygraph.info/graph?feedid=feed/{{site.url}}{{site.subscribe_rss}})
* [Octogray](//github.com/rcmdnk/octogray) [![Build Status](//travis-ci.org/rcmdnk/octogray.svg?branch=master)](//travis-ci.org/rcmdnk/octogray)
{% include custom/mytools.html %}
