require 'octopress-date-format'
module Octopress
  module DateFormat

    class << self
      def hack_date(page)
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
        date_html(date, time).sub('entry-date','updated').sub('datePublished','dateModified')
      end

    end

    if defined?(Jekyll::Hooks)
      Jekyll::Hooks.register :site, :after_reset do |site|
        DateFormat.config = site.config
      end

      Jekyll::Hooks.register [:documents, :pages, :posts], :pre_render do |item|
        DateFormat.hack_date(item)
      end
    else
      require 'octopress-hooks'

      class PageHook < Hooks::Page
        def post_init(page)
          DateFormat.hack_date(page)
        end
      end

      class PostHook < Hooks::Post
        def post_init(post)
          DateFormat.hack_date(post)
        end
      end

      class SiteHook < Hooks::Site
        def pre_read(site)
          DateFormat.config = site.config
        end
      end
    end
  end
end
