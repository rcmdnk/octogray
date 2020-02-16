require "parallel"
require "ruby-progressbar"

I18n.config.available_locales = :en

# Patch for jekyll-4.0.0/lib/jekyll/site.rb
module Jekyll
  class Site

    @@space = 35

    def diff_time_pre(name)
      print "%#{@@space}s:" % name
    end

    def diff_time(t_pre, t_now)
      t_diff = t_now - t_pre
      sec = t_diff % 60
      min = ((t_diff - sec) % 3600) / 60
      hour = (t_diff - sec - (min * 60)) / 3600
      puts "%#{@@space+2}s%02d:%02d:%02d" % ["", hour, min, sec]
    end

    def process
      #exe = ['reset', 'read', 'generate', 'render', 'cleanup', 'write', 'print_stats']
      exe = ['reset', 'read', 'generate', 'render', 'cleanup', 'write']
      exe.each { |e|
        start = Time.now
        send(e)
        diff_time_pre(e)
        diff_time(start, Time.now)
      }
    end

    def render
      if defined?(Octopress::Hooks) and defined?(old_render)
        site_hooks.each do |hook|
          hook.pre_render(self)
        end
      end

      relative_permalinks_are_deprecated

      n = 0
      for c in collections
        _, collection = c
        for document in collection.docs
          if regenerator.regenerate?(document)
            n = n + 1
          end
        end
      end

      for page in pages.flatten
        if regenerator.regenerate?(page)
          n = n + 1
        end
      end

      progressbar = ProgressBar.create(:title => "%#{@@space-5}s" % "posts-pages, render", :starting_at => 0,
                                       :total => n,
                                       :format => '%t %a |%B| %p%')
      payload = site_payload

      Jekyll::Hooks.trigger :site, :pre_render, self, payload

      for c in collections
        _, collection = c
        for document in collection.docs
          if regenerator.regenerate?(document)
            document.output = Jekyll::Renderer.new(self, document, payload).run
            document.trigger_hooks(:post_render)
            progressbar.increment
          end
        end
      end

      for page in pages.flatten
        if regenerator.regenerate?(page)
          page.output = Jekyll::Renderer.new(self, page, payload).run
          page.trigger_hooks(:post_render)
          progressbar.increment
        end
      end

      Jekyll::Hooks.trigger :site, :post_render, self, payload
    end

    def generate
      generators.each do |generator|
        diff_time_pre(generator.class.name)
        start = Time.now
        generator.generate(self)
        diff_time(start, Time.now)
      end
    end
  end
end

# Patch for jekyll-4.0.0/lib/jekyll/document.rb
# to capitalize all categories, instead of being downcase.
module Jekyll
  class Document
    # Categories
    def populate_categories
      merge_data!({
        "categories" => (
        Array(data["categories"]) + Utils.pluralized_array_from_hash(
          data,
          "category",
          "categories"
        )
        ).map{|c| c.to_s.capitalize}.flatten.uniq
      })
    end

    # Tags
    #def populate_tags
    #  merge_data!({
    #    "tags" => Utils.pluralized_array_from_hash(data, "tag", "tags").map {|t| t.to_s.capitalize}.flatten
    #  })
    #end
  end
end

# Patch for jekyll-4.0.0/lib/jekyll/renderer.rb
module Jekyll
  class Renderer
    # Fix for common parts
    def assign_current_document!
      if document.is_a?(Document) && document.collection.label == "posts"
        payload["site"].current_document = document
      end
    end
  end
end
