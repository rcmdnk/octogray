#custom filters for Octopress
require './plugins/backtick_code_block'
require 'jekyll-sitemap'

module OctopressFilters
  def self.pre_filter(page)
    if page.extname.match('html|textile|markdown|md|haml|slim|xml')
      input = BacktickCodeBlock::render_code_block(page.content)
      page.content = input.gsub /(<figure.+?>.+?<\/figure>)/m do
        TemplateWrapper::safe_wrap($1)
      end
    end
  end
  def self.post_filter(page)
    if page.extname.match('html|textile|markdown|md|haml|slim|xml')
      page.output = TemplateWrapper::unwrap(page.output)
    end
  end

  if defined?(Jekyll::Hooks)
    Jekyll::Hooks.register [:documents, :pages, :posts], :pre_render do |page|
      OctopressFilters::pre_filter(page)
    end
    Jekyll::Hooks.register [:documents, :pages, :posts], :post_render do |page|
      OctopressFilters::post_filter(page)
    end
  else
    require 'octopress-hooks'
    class PageFilters < Octopress::Hooks::Page
      def pre_render(page)
        OctopressFilters::pre_filter(page)
      end
      def post_render(page)
        OctopressFilters::post_filter(page)
      end
    end
    class PostFilters < Octopress::Hooks::Post
      def pre_render(post)
        OctopressFilters::pre_filter(post)
      end

      def post_render(post)
        OctopressFilters::post_filter(post)
      end
    end
    class DocumentFilters < Octopress::Hooks::Document
      def pre_render(document)
        OctopressFilters::pre_filter(document)
      end

      def post_render(document)
        OctopressFilters::post_filter(document)
      end
    end
  end
end


module OctopressLiquidFilters

  # Used on the blog index to split posts on the <!--more--> marker
  def excerpt(input)
    if input.index(/<!--\s*more\s*-->/i)
      input = input.split(/<!--\s*more\s*-->/i)[0]
    end
    input.sub('<img', '<img itemprop="image"')
  end

  def excerpt_after(input)
    if input.index(/<!--\s*more\s*-->/i)
      input.split(/<!--\s*more\s*-->/i)[1]
    else
      ""
    end
  end

  # Checks for excerpts (helpful for template conditionals)
  def has_excerpt(input)
    input =~ /<!--\s*more\s*-->/i ? true : false
  end

  # Get first amazon-img
  def amazon_img(input)
    if input.match(/<div class="amazon-img">.*<\/div>/) != nil
      input.match(/<div class="amazon-img">.*<\/div>/)[0].sub("_SS200_", "_SS90_CR0,0,120,90")
      out=input.match(/(<div class="amazon-img">.*<img *)width="200" height="200"(.*)_SS200(.*<\/div>)/)
      if out == nil
        input.match(/<div class="amazon-img">.*<\/div>/)[0]
      else
        out[1] + "width=\"120\" height=\"90\"" + out[2] + "_SS90_CR0,0,120,90" + out[3]
      end
    else
      "" #"no amazon-img"
    end
  end

  # Summary is used on the Archive pages to return the first block of content from a post.
  def summary(input)
    if input.index(/\n\n/)
      input.split(/\n\n/)[0]
    else
      input
    end
  end

  # Extracts raw content DIV from template, used for page description as {{ content }}
  # contains complete sub-template code on main page level
  def raw_content(input)
    /(<div.*class="(blog-index|entry-content).*">)(?<content>[\s\S]*?)(<!--\s*more\s*-->|<\/div>\s*(<\/article|footer)|(<!-- *(|post|page|blog-index) *-->))/ =~ input
    if ! (content.nil?)
      return content
    end
    /(<article.*>)(?<content2>[\s\S]*?)(<!--\s*more\s*-->|<\/div>\s*(<\/article|footer)|(<!-- *(|post|page|blog-index) *--))>/ =~ input
    if ! (content2.nil?)
      return content2
    end
    ''
  end

  # Escapes CDATA sections in post content
  def cdata_escape(input)
    input = input.gsub(/<!\[CDATA\[/, '&lt;![CDATA[').gsub(/\]\]>/, ']]&gt;')
  end

  # Replaces relative urls with full urls
  def expand_urls(input, url='')
    url ||= '/'
    input.gsub /(\s+(href|src|poster)\s*=\s*\\?["|'])(?!#{url})(\/[^\/>][^\"'>]*)/ do
      $1+url+$3
    end
  end

  # Improved version of Liquid's truncate:
  # - Doesn't cut in the middle of a word.
  # - Uses typographically correct ellipsis (…) insted of '...'
  def truncate(input, length)
    input.strip!
    if input.length > length && input[0..(length-1)] =~ /(.+)\b.+$/im
      $1.strip + ' &hellip;'
    else
      input
    end
  end

  # Improved version of Liquid's truncatewords:
  # - Uses typographically correct ellipsis (…) insted of '...'
  def truncatewords(input, length)
    truncate = input.split(' ')
    if truncate.length > length
      truncate[0..length-1].join(' ').strip + ' &hellip;'
    else
      input
    end
  end

  # Condenses multiple spaces and tabs into a single space
  def condense_spaces(input)
    input.gsub(/\s{2,}/, ' ')
  end

  # Removes trailing forward slash from a string for easily appending url segments
  def strip_slash(input)
    if input =~ /(.+)\/$|^\/$/
      input = $1
    end
    input
  end

  # Returns a url without the protocol (http://)
  def shorthand_url(input)
    input.gsub /(https?:\/\/)(\S+)/ do
      $2
    end
  end

  # Returns a title cased string based on John Gruber's title case http://daringfireball.net/2008/08/title_case_update
  def titlecase(input)
    input.titlecase
  end

  # Remove non-proper contents for atom.xml
  def remove_for_atom(input)
    input = input.gsub(/<iframe.*<\/iframe>/, "")
    input.gsub(/itemprop\s*=\s*["|'][^"']*["|']|/, "")
  end

end
Liquid::Template.register_filter OctopressLiquidFilters

