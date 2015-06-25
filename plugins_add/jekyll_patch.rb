require "parallel"
require "ruby-progressbar"

module Jekyll
  class Site

    @@space = 35

    def diff_time(name, t_pre, t_now)
      t_diff = t_now - t_pre
      sec = t_diff % 60
      min = ((t_diff - sec) % 3600) / 60
      hour = (t_diff - sec - (min * 60)) / 3600
      puts "%#{@@space}s: %02d:%02d:%02d" % [name, hour, min, sec]
    end

    def process
      exe = ['reset', 'read', 'generate', 'render', 'cleanup', 'write']
      t_now = Time.now
      exe.each { |e|
        send(e)
        t_pre = t_now
        t_now = Time.now
        diff_time(e, t_pre, t_now)
      }
    end

    def render
      relative_permalinks_deprecation_method

      collections.each do |label, collection|
        collection.docs.each do |document|
          document.output = Jekyll::Renderer.new(self, document).run
        end
      end

      payload = site_payload
      progressbar = ProgressBar.create(:title => "%#{@@space-5}s" % "render::posts-pages", :starting_at => 0,
                                       :total => [posts, pages].flatten.size,
                                       :format => '%t %a |%B| %p%')
      #Parallel.map([posts, pages].flatten, :in_threads => self.config['n_cores'] ? self.config['n_cores'] : 1) do |page_or_post|
      [posts, pages].flatten.each do |page_or_post|
        page_or_post.render(layouts, payload)
        progressbar.increment
      end
    end

    def generate
      t_now = Time.now
      generators.each do |generator|
        generator.generate(self)
        t_pre = t_now
        t_now = Time.now
        diff_time('generate::' + generator.class.name.demodulize, t_pre, t_now)
      end
    end
  end
end

# Patch for jekyll-2.1.0/lib/jekyll/post.rb
# to capitalize all categories, instead of being downcase.
module Jekyll
  class Post
    # Categories
    def populate_categories
      categories_from_data = Utils.pluralized_array_from_hash(data, 'category', 'categories')
      self.categories = (
        Array(categories) + categories_from_data
      ).map {|c| c.to_s.capitalize}.flatten.uniq # Capitalize categories
      #) # Don't change (Be careful, must use exactly same capitalization for same category name
         # e.g. if one post has "Category" and other has "category",
         # there is only one "Category" or "category"
         # and one of them is ignored.
      #).map {|c| c.to_s.downcase}.flatten.uniq # All downcase (default)
    end

    # Tags
    #def populate_tags
    #  self.tags = Utils.pluralized_array_from_hash(data, "tag", "tags").map {|t| t.to_s.capitalize}.flatten
    #end
  end
end

require 'octopress-date-format'
module Octopress
  module PageDate
    def self.hack_date(page)
      if page.data['date'] || page.respond_to?(:date)
        date = datetime(page.data['date'] || page.date)

        page.data['date_xml']  = date.xmlschema
        page.data['date_text'] = format_date(date)
        page.data['time_text'] = format_time(date)
        page.data['date_html'] = date_html(date, false)
        page.data['date_time_html'] = date_html(date)
      end

      # Legacy support
      if page.data['updated']
        page.data['date_updated'] = page.data['updated']
      end

      if page.data['date_updated']
        updated  = datetime(page.data['date_updated'])
        page.data['date_updated_xml']  = updated.xmlschema
        page.data['date_updated_text'] = format_date(updated)
        page.data['time_updated_text'] = format_time(updated)
        page.data['date_updated_html'] = date_updated_html(updated, false)
        page.data['date_time_updated_html'] = date_updated_html(updated)
      elsif page.data['date'] || page.respond_to?(:date)
        page.data['date_html'].sub!('entry-date','entry-date updated')
        page.data['date_html'].sub!('datePublished','datePublished dateModified')
        page.data['date_time_html'].sub!('entry-date','entry-date updated')
        page.data['date_time_html'].sub!('datePublished','datePublished dateModified')
      end

      page

    end

    def date_html(date, time=true)
      tag =  "<time itemprop='datePublished' class='entry-date' datetime='#{ date.xmlschema }'>"
      tag += "<span class='date'>#{format_date(date, true)}</span>"
      if time
        tag += " <span class='time'>#{format_time(date)}</span>" if time
      end
      tag += "</time>"
    end

    def date_updated_html(date, time=true)
      date_html(date, time).sub('datePublished','dateModified')
    end
  end
end
