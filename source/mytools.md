---
layout: mytools
footer: false
twitter: true
---

## My Tools

Last update: {{site.time|date_to_rfc822}}

* [all posts](/posts.html)
{% if site.linkchecker or site.htmlchecker or site.linkchecker %}
* Site Checks {% if site.site_check_batch %}{{ site.site_check_batch }}{% endif %}

{% if site.htmlchecker %}    * [HTML Validation](/htmlchecker.html){% endif %}
{% if site.csschecker %}    * [CSS Validation](/csschecker.html){% endif %}
{% if site.linkchecker %}    * [linkchecker](/linkchecker.html){% endif %}
{% endif %}
* [FeedlyGraph](http://www.feedlygraph.info/graph?feedid=feed/{{site.url}}{{site.subscribe_rss}})
* [Octogray](//github.com/rcmdnk/octogray) [![Octogray test](https://github.com/rcmdnk/octogray/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/rcmdnk/octogray/actions/workflows/test.yml)
{% include custom/mytools.html %}
