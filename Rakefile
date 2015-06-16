require "rubygems"
require "bundler/setup"
require "stringex"
require 'ruby-progressbar'

## -- Rsync Deploy config -- ##
# Be sure your public key is listed in your server's ~/.ssh/authorized_keys file
ssh_user       = "user@domain.com"
ssh_port       = "22"
document_root  = "~/website.com/"
rsync_delete   = false
rsync_args     = ""  # Any extra arguments to pass to rsync
deploy_default = "push_ex"

# This will be configured for you when you run config_deploy
deploy_branch  = "master"
repo_url       = "git@github.com:user/user.github.io.git"
use_token      = false

## -- Misc Configs -- ##

tmp_dir         = File.expand_path(".") + "/"  # temporary directory for public/deploy
public_dir      = "#{tmp_dir}public"  # compiled site directory
source_dir      = "source"    # source file directory
blog_index_dir  = 'source'    # directory for your blog's index page (if you put your index in source/blog/index.html, set this to 'source/blog')
deploy_dir      = "#{tmp_dir}_deploy" # deploy directory (for Github pages deployment)
stash_dir       = "_stash"    # directory to stash posts for speedy generation
full_stash_dir  = "#{source_dir}/#{stash_dir}"    # full path for stash dir
stash_root_dir  = "_stash_root" # directory to stash pages (in /source/)
full_stash_root_dir = "#{source_dir}/#{stash_root_dir}" # full path for stash_root dir
root_stashes    = [] # directories to be stashed in /source/
posts_dir       = "_posts"    # directory for blog files
themes_dir      = ".themes"   # directory for blog files
new_post_ext    = "markdown"  # default new post file extension when using the new_post task
new_page_ext    = "markdown"  # default new page file extension when using the new_page task
server_port     = "4000"      # port for preview server eg. localhost:4000
word_avoid      = "~/.gitavoid"  # words which must be avoided to be published
ping_file       = "ping.yml"  # file of site list for ping
js_for_combine  = ['footnote.js', 'jquery.githubRepoWidget.min.js', 'monthly_archive.js', 'utils.js', 'randomposts.js']
js_output       = "all.js"
js_minify_others = false
#html_for_minify = "all"
html_for_minify = ["*.html", "blog/*/*/*/*/*.html"]
html_not_minify = []
precheck        = false
common_words    = ["COMMON_SIDEBAR", "COMMON_HEADER"]
common_dir      = "#{public_dir}/common"
n_cores         = 8

if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
  puts '## Set the codepage to 65001 for Windows machines'
  `chcp.com 65001`
end

desc "Initial setup for Octopress: copies the default theme into the path of Jekyll's generator. Rake install defaults to rake install[classic] to install a different theme run rake install[some_theme_name]"
task :install, :theme do |t, args|
  if File.directory?(source_dir) || File.directory?("sass")
    abort("rake aborted!") if ask("A theme is already installed, proceeding will overwrite existing files. Are you sure?", ['y', 'n']) == 'n'
  end
  # copy theme into working Jekyll directories
  theme = args.theme || 'classic'
  puts "## Copying "+theme+" theme into ./#{source_dir} and ./sass"
  mkdir_p source_dir
  cp_r "#{themes_dir}/#{theme}/source/.", source_dir
  mkdir_p "sass"
  cp_r "#{themes_dir}/#{theme}/sass/.", "sass"
  mkdir_p "#{source_dir}/#{posts_dir}"
  mkdir_p public_dir
end

#######################
# Working with Jekyll #
#######################

desc "Update stylesheets. Give an argument as nested, expanded, compact or compressed (default) to the output style."
task :css, :style do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  puts "## Update stylesheets"
  style = ""
  if args.style
    style = "-s #{args.style}"
  end
  system "compass compile #{style} --css-dir #{source_dir}/stylesheets"
  cp_r "#{source_dir}/stylesheets/.", "#{public_dir}/stylesheets/"
end

desc "Generate jekyll site"
task :generate, :opt do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  if precheck
    Rake::Task[:check].invoke()
  end

  puts "## Generating Site with Jekyll"

  jekyll_opt = Rake.application.options.trace ? "--trace" : ""
  if args.opt and args.opt.include?("unpublished")
    jekyll_opt += " --unpublished"
  end
  ok_failed_raise system("jekyll build #{jekyll_opt}")

  Rake::Task[:css].execute
  Rake::Task[:minify_js].execute

  # Replace common words
  Rake::Task[:common].execute

  # Compress
  if not args.opt or not args.opt.include?('no_minify')
    Rake::Task[:minify_html].execute
  end
  system "rm -f .integrated"
  system "rm -f .preview-mode"
end

desc "Same as generate"
task :gen => :generate

# usage rake generate_only[my-post]
desc "Generate only specified post (much faster)"
task :generate_only, :filename do |t, args|
  trap(:INT) do
    raise "Stopped by SIGINT"
  end
  begin
    if precheck
      Rake::Task[:check].invoke()
    end

    Rake::Task[:isolate].invoke(args.filename)
    Rake::Task[:generate].invoke("unpublished no_minify")

    puts "## Restoring stashed posts/pages"
    Rake::Task[:integrate].execute
  rescue
    Rake::Task[:integrate].execute
    raise $!
  end
end

desc "Same as generate_only"
task :gen_only, :filename do |t, args|
  Rake::Task[:generate_only].invoke(args.filename)
end

desc "Same as generate_only"
task :go, :filename do |t, args|
  Rake::Task[:generate_only].invoke(args.filename)
end

desc "Watch the site and regenerate when it changes"
task :watch do
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  puts "Starting to watch source with Jekyll and Compass."
  system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exist?("#{source_dir}/stylesheets/screen.css")
  system "touch .preview-mode"
  jekyllPid = Process.spawn("jekyll build --watch --unpublished")
  compassPid = Process.spawn("compass watch")

  trap("INT") {
    [jekyllPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
  }

  [jekyllPid, compassPid].each { |pid| Process.wait(pid) }
end

# usage rake watch_only[my-post]
desc "watch only specified post"
task :watch_only, :filename do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  Rake::Task[:isolate].invoke(args.filename)

  begin
    Rake::Task[:watch].execute
  rescue
  end

  puts ""
  puts "## Restoring stashed posts/pages"
  Rake::Task[:integrate].execute
end

desc "preview the site in a web browser"
task :preview do
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  puts "Starting to watch source with Jekyll and Compass. Starting Rack on port #{server_port}"
  system "compass compile --css-dir #{source_dir}/stylesheets" unless File.exist?("#{source_dir}/stylesheets/screen.css")
  system "touch .preview-mode"
  jekyllPid = Process.spawn("jekyll build --watch --unpublished")
  compassPid = Process.spawn("compass watch")
  rackupPid = Process.spawn("rackup --port #{server_port}")

  trap("INT") {
    [jekyllPid, compassPid, rackupPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
  }

  [jekyllPid, compassPid, rackupPid].each { |pid| Process.wait(pid) }
end

# usage rake preview_only[my-post]
desc "preview only specified post"
task :preview_only, :filename do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  Rake::Task[:isolate].invoke(args.filename)

  begin
    Rake::Task[:preview].execute
  rescue
  end

  puts ""
  puts "## Restoring stashed posts/pages"
  Rake::Task[:integrate].execute
end


# usage rake new_post[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
desc "Begin a new post in #{source_dir}/#{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  #title_words = title.split(' ')
  #tags = title_words
  #category = tags.shift
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  # Change title (make it for tags for some posting sites)
  #title_tags = "\##{tags.join(' #')}"
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    #post.puts "title: \"#{title_tags}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S %z')}"
    post.puts "comments: true"
    post.puts "categories:"
    post.puts "tags:"
    #post.puts "categories: #{category}"
    #post.puts "tags: #{tags}"
    #post.puts "keywords: #{title.gsub(' ',', ')}"
    #post.puts "description: "
    post.puts "ogimage:"
    post.puts "published: false"
    post.puts "---"
    post.puts ""
    post.puts "<!-- more -->"
    post.puts "{%include after_excerpt.html%}"
    post.puts ""
  end
end

# usage rake new_page[my-new-page] or rake new_page[my-new-page.html] or rake new_page (defaults to "new-page.markdown")
desc "Create a new page in #{source_dir}/(filename)/index.#{new_page_ext}"
task :new_page, :filename do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  args.with_defaults(:filename => 'new-page')
  page_dir = [source_dir]
  site_config = YAML.load(IO.read('_config.yml'))
  author = site_config['author']
  if args.filename.downcase =~ /(^.+\/)?(.+)/
    filename, extension = $2.rpartition('.').reject(&:empty?)         # Get filename and extension
    title = filename
    page_dir.concat($1.downcase.sub(/^\//, '').split('/')) unless $1.nil?  # Add path to page_dir Array
    if extension.nil?
      page_dir << filename
      filename = "index"
    end
    extension ||= new_page_ext
    page_dir = page_dir.map! { |d| d = d.to_url }.join('/')                # Sanitize path
    filename = filename.downcase.to_url

    mkdir_p page_dir
    file = "#{page_dir}/#{filename}.#{extension}"
    if File.exist?(file)
      abort("rake aborted!") if ask("#{file} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end
    puts "Creating new page: #{file}"
    open(file, 'w') do |page|
      page.puts "---"
      page.puts "layout: page"
      page.puts "title: \"#{title}\""
      page.puts "author: \"#{author}\""
      page.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      page.puts "comments: true"
      page.puts "sharing: true"
      page.puts "footer: true"
      page.puts "published: false"
      page.puts "---"
    end
  else
    puts "Syntax error: #{args.filename} contains unsupported characters"
  end
end

# usage rake isolate[my-post]
desc "Move all other posts than the one currently being worked on to a temporary stash location (stash) so regenerating the site happens much more quickly."
task :isolate, :filename do |t, args|
  if args.filename
    filename = args.filename
  else
    filename = Dir.glob("#{source_dir}/#{posts_dir}/*.#{new_post_ext}").sort_by{|f| File.mtime(f)}.last
  end
  if filename == nil
    puts "## Stashing all posts"
  else
    puts "## Stashing other posts than #{filename}"
  end
  FileUtils.mkdir(full_stash_dir) unless File.exist?(full_stash_dir)
  Dir.glob("#{source_dir}/#{posts_dir}/*") do |post|
    if filename != nil && post.include?(filename)
      puts "Remaining #{post}..."
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
        FileUtils.mv "#{source_dir}/#{d}", full_stash_root_dir if File.exist?("#{source_dir}/#{d}")
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

desc "Clean out caches: .pygments-cache, .gist-cache, .sass-cache, thumbnail"
task :clean do
  rm_rf [Dir.glob(".pygments-cache/**"), Dir.glob(".gist-cache/**"), Dir.glob(".sass-cache/**"), "#{source_dir}/stylesheets/screen.css"]
  rm_rf [Dir.glob("#{source_dir}/images/**/thumbnail")]
end

desc "Move sass to sass.old, install sass theme updates, replace sass/custom with sass.old/custom"
task :update_style, :theme do |t, args|
  theme = args.theme || 'classic'
  if File.directory?("sass.old")
    puts "removed existing sass.old directory"
    rm_r "sass.old", :secure=>true
  end
  mv "sass", "sass.old"
  puts "## Moved styles into sass.old/"
  cp_r "#{themes_dir}/"+theme+"/sass/", "sass", :remove_destination=>true
  cp_r "sass.old/custom/.", "sass/custom/", :remove_destination=>true
  puts "## Updated Sass ##"
end

desc "Move source to source.old, install source theme updates, replace source/_includes/navigation.html with source.old's navigation"
task :update_source, :theme do |t, args|
  theme = args.theme || 'classic'
  if File.directory?("#{source_dir}.old")
    puts "## Removed existing #{source_dir}.old directory"
    rm_r "#{source_dir}.old", :secure=>true
  end
  mkdir "#{source_dir}.old"
  cp_r "#{source_dir}/.", "#{source_dir}.old"
  puts "## Copied #{source_dir} into #{source_dir}.old/"
  cp_r "#{themes_dir}/"+theme+"/source/.", source_dir, :remove_destination=>true
  cp_r "#{source_dir}.old/_includes/custom/.", "#{source_dir}/_includes/custom/", :remove_destination=>true
  cp "#{source_dir}.old/favicon.png", source_dir
  mv "#{source_dir}/index.html", "#{blog_index_dir}", :force=>true if blog_index_dir != source_dir
  cp "#{source_dir}.old/index.html", source_dir if blog_index_dir != source_dir && File.exists?("#{source_dir}.old/index.html")
  puts "## Updated #{source_dir} ##"
end

##############
# Deploying  #
##############

desc "Default deploy task"
task :deploy, :deploy_method do |t, args|
  # Check if preview posts exists, which should not be published
  if File.exists?(".integrated") or File.exists?(".isolated")
    puts "## Found isolated history, regenerating files ..."
    system "rm -f .integrated .isolated"
    Rake::Task[:integrate].execute
    Rake::Task[:generate].execute
  end
  if File.exists?(".preview-mode")
    puts "## Found posts in preview mode, regenerating files ..."
    File.delete(".preview-mode")
    Rake::Task[:generate].execute
  end

  Rake::Task[:copydot].invoke(source_dir, public_dir)

  # Check if files are fine or not
  ok_failed_raise system("if [ -f #{word_avoid} ];then while read a;do if ret=`grep -i -r -q $a #{public_dir}`;then echo \"A word $a is included, must be avoided!!!\"; echo $ret; exit 1;fi; done < #{word_avoid};fi")

  if args.deploy_method
    deploy_method = args.deploy_method;
  else
    deploy_method = deploy_default;
  end
  puts "use #{deploy_method} to push"
  Rake::Task["#{deploy_method}"].execute

  Rake::Task[:ping].execute
  Rake::Task[:superfeedr].execute
end

desc "Generate website and deploy"
task :gen_deploy, :deploy_method do |t, args|
  Rake::Task[:integrate].execute
  Rake::Task[:generate].execute
  Rake::Task[:deploy].invoke(args.deploy_method)
end

desc "Same as gen_deploy"
task :gd, :deploy_method do |t, args|
  Rake::Task[:gen_deploy].invoke(args.deploy_method)
end

desc "copy dot files for deployment"
task :copydot, :source, :dest do |t, args|
  FileList["#{args.source}/**/.*"].exclude("**/.", "**/..", "**/.DS_Store", "**/._*").each do |file|
    cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
  end
end

desc "Deploy website via rsync"
task :rsync do
  exclude = ""
  if File.exists?('./rsync-exclude')
    exclude = "--exclude-from '#{File.expand_path('./rsync-exclude')}'"
  end
  puts "## Deploying website via Rsync"
  ok_failed system("rsync -avze 'ssh -p #{ssh_port}' #{exclude} #{rsync_args} #{"--delete" unless rsync_delete == false} #{public_dir}/ #{ssh_user}:#{document_root}")
end

desc "deploy public directory to github pages"
multitask :push do
  puts "## Deploying branch to Github Pages "
  puts "## Pulling any updates from Github Pages "
  cd "#{deploy_dir}" do 
    Bundler.with_clean_env { system "git pull" }
  end
  (Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }
  Rake::Task[:copydot].invoke(public_dir, deploy_dir)
  puts "\n## Copying #{public_dir} to #{deploy_dir}"
  cp_r "#{public_dir}/.", deploy_dir
  cd "#{deploy_dir}" do
    system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    puts "\n## Committing: #{message}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{deploy_dir} website"
    output = (use_token)? " >/dev/null 2>&1":""
    Bundler.with_clean_env { system "git push origin #{deploy_branch} #{output}" }
    puts "\n## Github Pages deploy complete"
  end
end

desc "deploy public directory to github pages through temporary deploy dir"
multitask :push_ex do
  puts "## Deploying branch to Github Pages "
  if use_token
    puts "## clone the repository..."
  else
    puts "## clone from #{repo_url}"
  end
  rm_rf deploy_dir
  mkdir_p deploy_dir
  cd "#{deploy_dir}" do
    system "git init"
    system "git remote add origin #{repo_url}"
  end

  Rake::Task[:copydot].invoke(public_dir, deploy_dir)
  puts "\n## Copying #{public_dir} to #{deploy_dir}"
  cp_r "#{public_dir}/.", deploy_dir
  cd "#{deploy_dir}" do
    system "git add -A"
    puts "\n## Commiting: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m \"#{message}\" >/dev/null"
    system "git branch -m #{deploy_branch}" unless deploy_branch == 'master'
    puts "\n## Pushing generated #{deploy_dir} website"
    output = (use_token)? " >/dev/null 2>&1":""
    Bundler.with_clean_env { system "git push -u -f origin #{deploy_branch} #{output}" }
    puts "\n## Github Pages deploy complete"
  end
end

desc "Update configurations to support publishing to root or sub directory"
task :set_root_dir, :dir do |t, args|
  puts ">>> !! Please provide a directory, eg. rake set_root_dir[publishing/subdirectory]" unless args.dir
  if args.dir
    if args.dir == "/"
      dir = "/"
    else
      dir = "/" + args.dir.sub(/(\/*)(.+)/, "\\2").sub(/\/$/, '') + "/"
    end
    rm_rf "#{public_dir}"
    rakefile = IO.read(__FILE__)
    rakefile.sub!(/public_dir(\s*)=(\s*)(["'])[^"']*public[^"']*(["'])/, "public_dir\\1=\\2\\3\#{tmp_dir}#{File.join('public', dir)}\\3")
    File.open(__FILE__, 'w') do |f|
      f.write rakefile
    end
    compass_config = IO.read('config.rb')
    compass_config.sub!(/http_path(\s*)=(\s*)(["'])[\w\-\/]*["']/, "http_path\\1=\\2\\3#{File.join(dir, '/')}\\3")
    compass_config.sub!(/http_images_path(\s*)=(\s*)(["'])[\w\-\/]*["']/, "http_images_path\\1=\\2\\3#{File.join(dir, '/images')}\\3")
    compass_config.sub!(/http_fonts_path(\s*)=(\s*)(["'])[\w\-\/]*["']/, "http_fonts_path\\1=\\2\\3#{File.join(dir, '/fonts')}\\3")
    compass_config.sub!(/css_dir(\s*)=(\s*)(["'])[\w\-\/]*["']/, "css_dir\\1=\\2\\3public#{File.join(dir, '/stylesheets')}\\3")
    File.open('config.rb', 'w') do |f|
      f.write compass_config
    end
    jekyll_config = IO.read('_config.yml')
    jekyll_config.sub!(/^destination:.+$/, "destination: #{File.join(tmp_dir, "public", dir)}")
    jekyll_config.sub!(/^root:.*$/, "root: #{dir}")
    File.open('_config.yml', 'w') do |f|
      f.write jekyll_config
    end
    puts "## Site's root directory is now '#{dir}' ##"
  end
end

desc "Set up _deploy folder and deploy branch for Github Pages deployment"
task :setup_github_pages, [:repo, :yes] do |t, args|
  if args.repo
    repo_url = args.repo
  else
    puts "Enter the read/write url for your repository"
    puts "For example, 'git@github.com:your_username/your_username.github.io.git"
    puts "             'https://github.com/your_username/repository'"
    puts "             'https://${GH_TOKEN}@github.com/your_username/repository'"
    repo_url = get_stdin("Repository url: ")
  end
  protocol = (repo_url.match(/(^git)@/).nil?) ? 'https' : 'git'
  if protocol == 'git'
    user = repo_url.match(/:([^\/]+)/)[1]
  else
    user = repo_url.match(/github\.com\/([^\/]+)/)[1]
  end
  branch = (repo_url.match(/\/[\w-]+\.github\.(?:io|com)/).nil?) ? 'gh-pages' : 'master'
  project = (branch == 'gh-pages') ? repo_url.split("/")[-1].sub(/\.git$/, "") : ''
  use_token = (repo_url.match(/https:\/\/.*@github.com/))? true : false
  use_token_val = use_token ? "true" : "false"
  unless (`git remote -v` =~ /origin.+?octopress(?:\.git)?/).nil?
    # If octopress is still the origin remote (from cloning) rename it to octopress
    system "git remote rename origin octopress"
    if branch == 'master'
      # If this is a user/organization pages repository, add the correct origin remote
      # and checkout the source branch for committing changes to the blog source.
      system "git remote add origin #{repo_url}"
      if use_token
        puts "Added given remote as origin"
      else
        puts "Added remote #{repo_url} as origin"
      end
      system "git config branch.master.remote origin"
      puts "Set origin as default remote"
      system "git branch -m master source"
      puts "Master branch renamed to 'source' for committing your blog source files"
    end
  end
  url = blog_url(user, project, source_dir)
  jekyll_config = IO.read('_config.yml')
  jekyll_config.sub!(/^url:.*$/, "url: #{url}")
  jekyll_config.sub!(/^subscribe_rss:.*$/, "subscribe_rss: #{url}/atom.xml")
  jekyll_config.sub!(/^feedly_atom:.*$/, "feedly_atom: #{url}/atom.xml")
  File.open('_config.yml', 'w') do |f|
    f.write jekyll_config
  end

  rakefile = IO.read(__FILE__)
  rakefile.sub!(/deploy_branch(\s*)=(\s*)(["'])[\w-]*["']/, "deploy_branch\\1=\\2\\3#{branch}\\3")
  rakefile.sub!(/repo_url(\s*)=(\s*)(["'])[0-9a-zA-Z\-\_\/\@\.\:]*["']/, "repo_url\\1=\\2\\3#{repo_url}\\3")
  rakefile.sub!(/use_token(\s*)=(\s*)[0-9a-zA-Z\-\_\/\@\.\:]*/, "use_token\\1=\\2#{use_token_val}")

  ext = 'markdown'
  if ask("Do you want to use 'md' extension instead of 'markdown'?", ['y', 'n'], args.yes) == "y"
    ext = 'md'
  end
  rakefile.sub!(/new_post_ext(\s*)=(\s*)(["'])[\w-]*["']/, "new_post_ext\\1=\\2\\3#{ext}\\3")
  rakefile.sub!(/new_page_ext(\s*)=(\s*)(["'])[\w-]*["']/, "new_page_ext\\1=\\2\\3#{ext}\\3")

  if ask("Do you want to push_ex (renew remote repository evrey time)?", ['y', 'n'], args.yes) == 'y'
    if yn_check(args.yes) == "y"
      dir = ""
    else
      dir = get_stdin("Enter where you want to put _deploy (current: #{tmp_dir}): ")
    end
    if dir == ""
      dir = tmp_dir
    elsif
      if dir[-1] == "/"
        dir = dir[0..-2]
      end
    end
    rakefile.sub!(/deploy_default(\s*)=(\s*)(["'])[\w-]*["']/, "deploy_default\\1=\\2\\3push_ex\\3")
    rakefile.sub!(/(tmp_dir\s*=\s*File.expand_path\()(["'])[^"']*["']/,"\\1\\2#{dir}\\2")
  else
    rm_rf deploy_dir
    mkdir deploy_dir
    cd "#{deploy_dir}" do
      system "git init"
      system "echo 'My Octopress Page is coming soon &hellip;' > index.html"
      system "git add -A"
      system "git commit -m \"Octopress init\""
      system "git branch -m #{deploy_branch}" unless branch == 'master'
      system "git remote add origin #{repo_url}"
      rakefile.sub!(/deploy_default(\s*)=(\s*)(["'])[\w-]*["']/, "deploy_default\\1=\\2\\3push\\3")
    end
    if use_token
      puts "\n---\n## Now you can deploy with `rake deploy` ##"
    else
      puts "\n---\n## Now you can deploy to #{repo_url} with `rake deploy` ##"
    end
  end
  File.open(__FILE__, 'w') do |f|
    f.write rakefile
  end
  system "rake set_root_dir[#{project}]"
end

def ok_failed(condition)
  if (condition)
    puts "OK"
  else
    puts "FAILED"
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def yn_check(yn)
  if yn == "y" or yn == "yes" or yn == "-y" or yn == "--yes"
    answer = "y"
  else
    answer = "n"
  end
  answer
end

def ask(message, valid_options, yn = "")
  if valid_options
    if valid_options.include?("y") and yn_check(yn) == "y"
      answer = "y"
    else
      answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')}: ") while !valid_options.include?(answer)
    end
  else
    answer = get_stdin(message)
  end
  answer
end

def blog_url(user, project, source_dir)
  cname = "#{source_dir}/CNAME"
  url = if File.exists?(cname)
    "http://#{IO.read(cname).strip}"
  else
    "http://#{user.downcase}.github.io"
  end
  url += "/#{project}" unless project == ''
  url
end

desc "list tasks"
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end

def grep_check(word, grep_option, opt)
  vword=word
  if word.index("^") == 0
    vword=word.sub("^", ":")
  end
  if opt == 0
    grep_option = "-A1 -B1 #{grep_option}"
    comment = "An empty line is required around \\\"#{word}\\\"!"
  elsif opt == 1
    grep_option = "-B1 #{grep_option}"
    comment = "An empty line is required before \\\"#{word}\\\"!"
  elsif opt == 2
    grep_option = "-A1 #{grep_option}"
    comment = "An empty line is required after \\\"#{word}\\\"!"
  end
  print "Checking \"#{word}\"... "
  ok_failed_raise system("\
      if grep -H -n -e \"#{word}\" #{grep_option} 2>/dev/null|\
          grep -v \"#{vword}\";then \
        printf \"\\\\n\\\\e[31m\";\
        echo #{comment};\
        printf \"\\\\e[m\\\\n\";\
        exit 1;\
      fi")
end

desc 'Check source'
task :check, :opt do |t, args|
  grep_files = "-r #{source_dir} --include \"*.#{new_post_ext}\""
  if args.opt == "new"
    grep_files = "#{source_dir}/#{posts_dir}/*.#{new_post_ext}"
  end
  puts "\n## Checking codes..."
  grep_option = "#{grep_files}|\
      grep -v \"^--$\"|\
      grep -v \"#{new_post_ext}-[0-9]\\\+-$\"|\
      grep -v \"{%\ *raw\ *%}$\""

  grep_check("^{%\ *codeblock", grep_option, 1)
  #grep_check("^>", grep_option, 0)
  #grep_check("^#", grep_option, 1)
  grep_check("^- - -$", grep_option, 1)
  #grep_check("^<hr>$", grep_option, 1)

  print "Checking words to be avoided... "
  ok_failed_raise system("\
      if [ -f #{word_avoid} ];then \
        while read a;do \
          if ret=$(grep -i -q $a #{grep_files} 2>/dev/null);then \
            echo \"A word $a is included, must be avoided!!!\";\
            echo $ret;\
            exit 1;\
          fi;\
        done < #{word_avoid};\
      fi")
  puts ""
end

desc 'Send to Superfeedr'
task :superfeedr do
  site_config = YAML.load(IO.read('_config.yml'))
  hub_url = site_config['hub_url']
  url = site_config['url']
  if hub_url != nil and hub_url != ""
    require 'net/http'
    require 'uri'
    atom_url = "#{url}/atom.xml"
    resp, data = Net::HTTP.post_form(URI.parse(hub_url),
        {'hub.mode' => 'publish',
        'hub.url' => atom_url})
    raise "!! Hub notification error: #{resp.code} #{resp.msg}, #{data}" unless resp.code == "204"
    puts "## Notified hub (" + hub_url + ") that feed #{atom_url} has been updated"
  end
end

#-- sending ping --#
desc "Send ping to Web Search Engines"
task :ping do
  if File.exist?(ping_file)
    require "yaml"
    require "xmlrpc/client"

    site_config = YAML.load(IO.read('_config.yml'))
    blog_title = site_config['title']
    blog_url = site_config['url']
    ping_url = YAML.load(IO.read('ping.yml'))
    ping_url.each do |url|
      ping = XMLRPC::Client.new2(url)
      begin
        result = ping.call('weblogUpdates.ping', blog_title, blog_url)
        puts "#{url} : #{result}"
      rescue => e
        puts "#{url} : #{e}"
      end
    end
  end
end

task :test do
  #ok_failed_raise system("if [ -f #{word_avoid} ];then while read a;do if ret=`grep -i -r -q $a #{public_dir}`;then echo \"A word $a is included, must be avoided!!!\"; echo $ret; exit 1;fi; done < #{word_avoid};fi")
  #ok_failed_raise system("cd #{public_dir};pwd;cd -")
  #print "hoge"
  #raise "eror"
  system "git ls >& log"
end

def ok_failed_raise(condition, print_ok = true)
  if (condition)
    puts "OK" if print_ok
  else
    raise "FAILD"
  end
end


require "yui/compressor"
require "htmlcompressor"
require "parallel"

desc "Minify CSS"
task :minify_css do
  puts "## Minifying CSS"
  compressor = YUI::CssCompressor.new
  Parallel.map(Dir.glob("#{source_dir}/stylesheets/**/*css"), :in_threads=> n_cores) do |name|
    puts "Minifying #{name}"
    input = File.read(name)
    output = File.open("#{name}", "w")
    output << compressor.compress(input)
    output.close
  end
  cp_r "#{source_dir}/stylesheets/.", "#{public_dir}/stylesheets/"
end

desc "Minify JS"
task :minify_js do
  puts "## Minifying JS"
  Rake::Task[:combine_js].execute
  if js_minify_others
    Rake::Task[:minify_other_js].execute
  end
end


desc "Minify JS and combine"
task :combine_js do
  puts "## Combining JS"
  compressor = YUI::JavaScriptCompressor.new
  if File.exist?("#{source_dir}/javascripts/#{js_output}")
    t_alljs = File.mtime("#{source_dir}/javascripts/#{js_output}")
    time_check = false
    js_for_combine.each do |j|
      if File.mtime("#{source_dir}/javascripts/#{j}") > t_alljs
        puts "newer file #{j} is found"
        time_check = true
        break
      end
    end
    if not time_check
      next
    end
  end
  output = File.open("#{source_dir}/javascripts/#{js_output}", "w")
  js_for_combine.each do |j|
    input = File.read("#{source_dir}/javascripts/#{j}")
    output << compressor.compress(input)
  end
  output.close
  cp_r "#{source_dir}/javascripts/#{js_output}", "#{public_dir}/javascripts/"
end

desc "Minify other JS"
task :minify_other_js do
  puts "## Minifying other JS"
  n = 0
  compressor = YUI::JavaScriptCompressor.new
  Parallel.map(Dir.glob("#{source_dir}/javascripts/**/*.js"), :in_threads => n_cores)  do |j|
    if (js_for_combine+[js_output]).include?(j.sub("#{source_dir}/javascripts/", "")) or\
       j.include?("compressed")
      next
    end
    dir = j.split('/')[0..-2].join('/')
    name = j.split('/')[-1]
    compressed = dir + "/compressed/" + name
    if File.directory?(dir+"/compressed/")
      if File.file?(compressed) and File.mtime(compressed) > File.mtime(j)
        next
      end
    else
      mkdir_p compressed.split('/')[0..-2].join('/')
    end

    puts "Minifying #{j}"
    input = File.read(j)
    output = File.open(compressed, "w")
    output << compressor.compress(input)
    output.close
    n+=1
  end
  if n > 0
    cp_r "#{source_dir}/javascripts/.", "#{public_dir}/javascripts/"
  end
end

desc "Minify HTML"
task :minify_html do
  puts "## Minifying HTML"

  option={
     :remove_comments => false,
     :compress_css => true,
     :css_compressor => :yui,
     :compress_javascript => true,
     :javascript_compressor => :yui
  }
  compressor = HtmlCompressor::Compressor.new(option)

  posts = []
  if html_for_minify == "all" or html_for_minify[0] == "all"
    posts = Dir.glob("#{public_dir}/**/*.html")
  else
    posts_tmp = html_for_minify
    if html_for_minify.is_a?(String)
      posts_tmp = [posts_tmp]
    end
    posts_tmp.each do |p|
      f = "#{public_dir}/#{p}"
      if f.scan("\*").length > 0
        posts += Dir.glob(f)
      elsif File.file?(f)
        posts.push(f)
      elsif File.directory?(f)
        posts += Dir.glob("#{f}/**/*.html")
      end
    end
  end
  if html_not_minify != nil
    if html_not_minify.is_a?(String)
      html_not_minify = [html_not_minify]
    end
    html_not_minify.each  do |p|
      posts.delete_if {|post| post.start_with?("#{public_dir}/#{p}")}
    end
  end

  progressbar = ProgressBar.create(:title => "Minify HTML", :starting_at => 0,
                                   :total => posts.size,
                                   :format => '%t, %a |%b%i| %p%')
  Parallel.map(posts, :in_threads => n_cores)  do |p|
    input = File.read(p)
    output = File.open(p, "w")
    output << compressor.compress(input)
    output.close
    progressbar.increment
  end
end
