---
layout: page
title: "Privacy Policy"
comments: false
sharing: true
footer: false
date: 2013-03-07 12:00
published: true

---

{%if site.lang == "ja"%}
{%if site.google_analytics_tracking_id%}

# アクセス解析ツールについて

当サイトではGoogle Analyticsを使用してしてアクセス状況の解析を行っています。
このGoogle Analyticsではデータ収集のためにCookieを使用しています。
この情報は匿名で収集されており個人の特定するものではありません。
また、Cookieを無効にすることでこの収集を拒否することが出来ます。

> [ユーザーが Google パートナーのサイトやアプリを使用する際の Google によ るデータ使用 – ポリシーと規約 – Google](http://www.google.com/policies/privacy/partners/)

{%endif site.google_analytics_tracking_id%}
{%if site.affiliate%}

# 広告について

当サイトでは第三者配信事業者による広告サービス({{site.affiliate_serices}})を利用しています。
これらの配信業者はユーザーに適切な広告を表示するためにCookieを利用して
当サイトや他のサイトへのアクセス情報を使用することがあります。
この情報は匿名で収集されており個人の特定するものではありません。
また、Cookieを無効にすることでこの収集を拒否することが出来ます。

> [広告 – ポリシーと規約 – Google](http://www.google.co.jp/policies/technologies/ads/)

# 免責事項

当サイトでは個人的に調べた内容について掲載していますが、
その内容の正確性や安全性に関して一切保証するものではありません。

当サイトの内容、及びリンク先の情報によって起こったトラブルに関してして、
当サイトでは一切の責任を負いかねます。

{%endif site.affiliate%}
{%else%}
{%if site.google_analytics_tracking_id%}

# Web Analysis Tool

This site uses Google Analytics to analyze user accesses.
It uses cookies to collect data.
These cookies don't personally identifying information.
You can disable cookies via your browser settings.

> [How Google uses data when you use our partners' sites or apps – Privacy & Terms – Google](http://www.google.com/intl/en/policies/privacy/partners/)

{%endif site.google_analytics_tracking_id%}
{%if site.affiliate%}

# Advertisements

This site uses advertisements provided by third parties
({{site.affiliate_serices}}).
These third parties collect cookies to optimize advertisements
based on your online behavior.
These cookies don't personally identifying information.
You can disable cookies via your browser settings.

> [Advertising – Privacy & Terms – Google](https://www.google.m/intl/en/policies/technologies/ads/)

# General disclaimer

Information in this site have been corrected personally,
however, this site cannot guarantee the validity or the safety of the information.

This site cannot be responsible for any issues related to the information
contained in this site or linked from this site.

{%endif site.affiliate%}
{%endif site.lang = "ja"%}
