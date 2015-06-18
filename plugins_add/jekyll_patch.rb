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
      Parallel.map([site.posts, site.pages].flatten, :in_threads => site.config['n_cores'] ? site.config['n_cores'] : 1) do |page_or_post|
      #[posts, pages].flatten.each do |page_or_post|
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
