---
layout: page
title: "Code test"
date: 2014-12-15 12:00
published: true
---
~~~~~~~~~~~~~~~~~~~~~

a one-line code block

~~~~~~~~~~~~~~~~~~~~~


{%codeblock%}
Jekyll Codeblocke
{%endcodeblock%}

    code with 4 spaces
    code with 4 spaces
    code with 4 spaces

One line test

    code with 4 spaces

```
echo no lang, triple backticks
```

```sh
#!/bin/sh
echo triple backticks
valu=${aaa}
```

~~~
triple waves
~~~

{%codeblock lang:cpp%}
#include <iostream>
for(int i=0;i<10;i++){
  std::cout << "codeblock" << std::endl;
}
{%endcodeblock%}

{%codeblock title lang:cpp%}
#include <iostream>
for(int i=0;i<10;i++){
  std::cout << "codeblock with lang" << std::endl;
}
{%endcodeblock%}

{%codeblock a.cpp %}
#include <iostream>
for(int i=0;i<10;i++){
  std::cout << "codeblock with file extension" << std::endl;
}
{%endcodeblock%}

{%codeblock a.vim lang:cpp%}
#include <iostream>
for(int i=0;i<10;i++){
  std::cout << "If both lang and extension are available, lang is used for the syntax" << std::endl;
}
{%endcodeblock%}

```java
import java.awt.Color;
public void test() {
  System.out.println("Java is now available.");
  return;
}
```

~~~ .ruby
puts "PHP Markdown Extra wave codeblock"
def func(flag)
  if(flag)
    puts "OK"
  else
    puts "FAILED"
  end
end
~~~


{%codeblock Rakefile lang:ruby%}
 ## -- Misc Configs -- ##
stash_dir       = "_stash"    # directory to stash posts for speedy generation
full_stash_dir  = "#{source_dir}/#{stash_dir}"    # full path for stash dir
stash_root_dir  = "_stash_root" # directory to stash pages (in /source/)
full_stash_root_dir = "#{source_dir}/#{stash_root_dir}" # full path for stash_root dir
root_stashes    = ['Your-Page'] # directories to be stashed in /source/


# usage rake isolate[my-post]
desc "Move all other posts than the one currently being worked on to a temporary stash location (stash) so regenerating the site happens much more quickly."
task :isolate, :filename do |t, args|
  if args.filename
    filename = args.filename
  else
    filename = Dir.glob("#{source_dir}/#{posts_dir}/*.#{new_post_ext}").sort_by{|f| File.mtime(f)}.last
  end
  if filename == nil
    puts ""
    puts "There is no markdown file (*.#{new_post_ext}) in #{source_dir}/#{posts_dir}."
    exit 1
  end
  puts "## Stashing other posts than #{filename}"
  FileUtils.mkdir(full_stash_dir) unless File.exist?(full_stash_dir)
  Dir.glob("#{source_dir}/#{posts_dir}/*") do |post|
    if post.include?(filename)
      p "Remaining #{post}..."
    else
      FileUtils.mv post, full_stash_dir
    end
  end
  FileUtils.mkdir(full_stash_root_dir) unless File.exist?(full_stash_root_dir)
  if defined? root_stashes == nil
    if root_stashes.class == String
      FileUtils.mv "#{source_dir}/#{root_stashes}", full_stash_root_dir
    elsif root_stashes.class == Array
      for d in root_stashes do
        FileUtils.mv "#{source_dir}/#{d}", full_stash_root_dir
      end
    end
  end
  system "touch .isolated"
end

desc "Move all stashed posts back into the posts directory, ready for site generation."
task :integrate do
  FileUtils.mv Dir.glob("#{full_stash_dir}/*"), "#{source_dir}/#{posts_dir}/"
  FileUtils.mv Dir.glob("#{full_stash_root_dir}/*"), "#{source_dir}/"
  system "rm -f .isolated"
  system "touch .integrated"
end
{%endcodeblock%}

ref: [a.rb](https://gist.github.com/rcmdnk/27238df31e8f6b2a5c84)

{%codeblock source/javascript/utils.js lang:javascript%}
jQuery(function($){
  $(document).on('copy', function(e) {
    var selected = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            selected = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            selected = document.selection.createRange().htmlText;
        }
    }
    var title = document.title;
    var  url = location.href;
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'YOUR_API_KEY',
        'message': {
          'from_email': 'your_sender@example.com',
          'to': [
            {
              'email': 'your_receiver@example.com',
              'name': 'your receiver',
              'type': 'to'
            }
          ],
          'subject': 'Copied at ' + title,
          'html': '<div><a href="' + url + '">' + title + '</a></div><br><br><div>' + selected + '</div>'
        }
      }
    });
  });
});
{%endcodeblock utils.js lang:javascript%}

ref: [a.js](https://gist.github.com/rcmdnk/fa04da82a25c602c0505)

{%codeblock source/_includes/head.html%}
...
<head>
...
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
...
  <script src="{{root_url}}/javascripts/utils.js"></script>
</head>
...
{%endcodeblock%}

ref: [a.html](https://gist.github.com/rcmdnk/ebf92a967a6e17d37de7)

{%codeblock lang:sh%}
{%raw%}
# Execution part {{{
_s_is_exec=1
_sf_check_args_first () { # {{{
  while [ $# -gt 0 ];do
    case $1 in
      "-h"|"-N"|"-m"|"-p"|"-F"|"-v" ) _s_is_exec=2;shift;;
      "-n" ) _s_is_exec=0;shift;;
      "-c" ) _SENTAKU_CHILD=1;shift;;
    * )break;;
    esac
  done
} # }}}

_sf_check_args_first "$@"

# Execute if stdin is available, or any of help/file/push is on
if [ $_s_is_exec -ne 0 ];then
  if [ -p /dev/stdin ] || [ $_s_is_exec -eq 2 ];then
    _sf_main "$@"
  fi
fi

# Clean up
unset _s_is_exec
# }}}
{%endraw%}
{%endcodeblock lang:sh%}

ref: [a.sh](https://gist.github.com/rcmdnk/b7c17c42d108cc1860a2)

{%codeblock lang:diff%}
diff --git a/.themes/octogray b/.themes/octogray
index 69e224c..a519ddb 160000
--- a/.themes/octogray
+++ b/.themes/octogray
@@ -1 +1 @@
-Subproject commit 69e224c5def49917f7fe5527532f8cb50614e81f
+Subproject commit a519ddbdb6a3b40e48ef7713c3be5d15f853b880
{%endcodeblock%}

ref: [hoge.diff](https://gist.github.com/rcmdnk/5215d850f72e510ed4d3)

{%codeblock gtask.py lang:python%}

#!/usr/bin/env python

#Copyright (c) 2013 rcmdnk

import os
import sys
import httplib2

from oauth2client.file import Storage
from oauth2client.tools import run
from oauth2client.client import OAuth2WebServerFlow
from apiclient.discovery import build

def main(uselist='',items=''):
    # Authentaation
    storage = Storage(os.path.expanduser('~/.gtask_oauth'))
    credentials = storage.get()

    if credentials is None or credentials.invalid:
        credentials = run(
            OAuth2WebServerFlow(
                client_id='326384869607-9c57sseqij1vpes16ect83irq490pn8c.apps.googleusercontent.com',
                client_secret='h0vi7XXzU3DRJyEa2aYFPRcm',
                scope=[
                    'https://www.googleapis.com/auth/tasks',
                    'https://www.googleapis.com/auth/tasks.readonly'],
                user_agent='gtaskslist/1.0',),
            storage)

    http = httplib2.Http()
    http = credentials.authorize(http)

    service = build('tasks', 'v1', http=http)

    # Get task lists
    tasklists = service.tasklists().list().execute()
    for tl in tasklists['items']:
        # Check list name
        if uselist != '' and tl['title'] != uselist:
            continue

        # Get tasks
        tasks = service.tasks().list(tasklist=tl['id']).execute()
        for t in tasks['items']:

            ttitle = t['title']
            if ttitle == '':
                continue
            useflag = 0
            if len(items) == 0 or items[0] == '':
                useflag = 1
            else:
                for i in items:
                    if ttitle.find(i) != -1:
                        useflag = 1
                        break
            if useflag == 1:
                print ttitle.encode('utf_8')

if __name__ == '__main__':
    # Get command line options
    from optparse import OptionParser
    usage = '''usage: %prog [-opts] arg1 arg2

       If arg1 arg2... are given, only tasks which include
       these words (ORed) will be listed (combined with -i)

       If you have not installed google-api-python-client, follow:
       https://developers.google.com/api-client-library/python/start/installation
       '''
    parser = OptionParser(usage)
    parser.add_option('-l', '--list', action='store',
                      dest='uselist', default='',
                      help='If \'USELIST\' is not an empty, tasks will be searched for only from the given list. [default: %default]')
    parser.add_option('-i', '--item', action='store',
                      dest='item', default='',
                      help='If \'ITEM\' is not an empty, only tasks which contains given item are listed up. Multiple words can be given by using \',\' as a separator. [default: %default]')
    (opts, args) = parser.parse_args()

    # Set parameters
    uselist = opts.uselist
    items = opts.item.split(',')
    for i in args:
        items.append(i)

    # Run main function
    main(uselist, items)
{%endcodeblock gtask.py%}

ref: [a.py](https://gist.github.com/rcmdnk/b9d8e5ce51e0b041ae9d)


{%gist b9d8e5ce51e0b041ae9d%}

`pre test`

pre test


aaaa `pre` pre

{%codeblock small%}
small
{%endcodeblock small%}

{%gist 9bca7fcd3676f1e9b499%}

{% gist 5439030 rm_wrapper.sh %}
