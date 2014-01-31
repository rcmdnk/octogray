octogray
========

octgray is a theme for Octopress.

## Instlation

    $ cd octopress
    $ git submodule add git@github.com:rcmdnk/octogray.git .themes/octogray
    $ .themes/octogray/setup.sh

`setup.sh` installs plugins and patches `Gemfile`, `_config.yml` and `Rakefile`,
in addition to does `rake install[octogray]`.

You will be asked if you want to apply patches to
`Gemfile`, `_config.yml` and `Rakefile`.

If you want to keep current files, ignore and check these files in octogray later.

If you are using GitHub pages, do again:

    $ rake setup_github_pages

This task is also updated and provides you alternative method of push: push_ex,
which locates public/_deploy directories other than octopress directory.

It is very useful if you are using cloud storage, such Dropbox,
for octopress directory, because many files in public/_deploy directories are updated
during `generate`/`deploy`.
Then, the computer will use much network resources.

In addition, `push_ex` refreshes remote repository every time,
i.e. no history is remained in such GitHub page's repository.

Normally you have a history for source, and such history of page itself
is rather annoying when you put something wrong by accident.
(all history could be seen in GitHub web page.)

## Additional tasks

| task | Description |
| :--: | :---------- |
| css | Update only style sheets |
| gd | Same as gen_deploy |
| gen | Same as generate |
| gen_only | Same as generate_only |
| generate_only | Generate only specified post (much faster). If no post is given, generate only the latest (of time stamp) post in source/_post. |
| go | Same as generate_only |
| ping | Send ping to Web Search Engines |
| preview_only | Preview only specified (latest) post |
| push_ex | Deploy public directory to github pages through temporary deploy dir |
| superfeedr | Send to Superfeedr |
| watch_only | Watch only specified post |

task | Description
:--: | :----------
css | Update only style sheets
gd | Same as gen_deploy
gen | Same as generate
gen_only | Same as generate_only
generate_only | Generate only specified post (much faster). If no post is given, generate only the latest (of time stamp) post in source/_post
go | Same as generate_only
ping | Send ping to Web Search Engines
preview_only | Preview only specified (latest) post
push_ex | Deploy public directory to github pages through temporary deploy dir
superfeedr | Send to Superfeedr
watch_only | Watch only specified post

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


## Previews

* [preview (my blog)](http://rcmdnk.github.io/).

![20131006_blog.jpg](http://rcmdnk.github.io/images/post/20131006_blog.jpg)
![20130707_codeblock1.jpg](http://rcmdnk.github.io/images/post/20130707_codeblock1.jpg)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/rcmdnk/octogray/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

