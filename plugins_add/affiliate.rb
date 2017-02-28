module Aff
  def amazon_img_path(img, size)
    if img.start_with?("http") or img.start_with?("//")
      retrn img
    end
    size = size || 200
    "https://images-na.ssl-images-amazon.com/images/I/#{img}._SS#{size}_.jpg"
  end

  def amazon_img(link, title, img, size)
<<EOS
<div class='amazon-img'>
  <a href='#{link}' rel='nofollow' target='_blank'><img src='#{amazon_img_path(img, size)}' alt='#{title}'/></a>
</div>
EOS
  end

  def amazon_link(asin, ad_tag)
    if ad_tag
      return "//www.amazon.co.jp/gp/product/#{asin}?ie=UTF8&camp=1207&creative=8411&creativeASIN=#{asin}&linkCode=shr&tag=#{ad_tag}"
    end
    return "//www.amazon.co.jp/gp/product/#{asin}"
  end

  def rakuten_link(search, id, ut)
    return "//hb.afl.rakuten.co.jp/hgc/#{id}/?pc=http://search.rakuten.co.jp/search/mall/#{search}/&m=http://search.rakuten.co.jp/search/mall/#{search}/&scid=af_url_txt&link_type=text&ut=#{ut}"
  end

  module_function :amazon_img_path
  module_function :amazon_img
  module_function :amazon_link
  module_function :rakuten_link

end

module Jekyll

  class AmazonLink < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @asin = markup
    end

    def render(context)
      amazon_link(@asin, context.registers[:site].config["amazon_ad_tag"])
    end
  end

  class AmazonImg < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @asin = markup[0]
      @img = markup[1]
      @name = markup[2].gsub("'", "")
    end

    def render(context)
      tag = context.registers[:site].config["amazon_ad_tag"]
      size = context.registers[:site].config["amazon_img_size"]
      link = Aff.amazon_link(@asin, tag)
      Aff.amazon_img(link, @name, @img, size)
    end
  end

  class AmazonImg < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      vals = markup.split()
      @asin = vals[0]
      @img = vals[1]
      @title = vals[2..-1].join(' ').gsub("'", "")
    end

    def render(context)
      config = context.registers[:site].config
      tag = config["amazon_ad_tag"]
      size = config["amazon_img_size"]
      Aff.amazon_img(Aff.amazon_link(@asin, tag), @title, @img, size)
    end
  end

  class AmazonBox < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      require 'cgi'
      vals = markup.gsub("'", "").split()
      @asin = vals[0]
      @img = vals[1]
      rem = vals[2..-1].join(' ')

      if rem =~ /(.*)\s\/(.*)\/$/
        @title = $1
        @search = $2
      else
        @title = rem
        @search = rem
      end
      if @search.include?(" ")
        @search = CGI.escape(@search)
      end
      p @search
    end

    def render(context)
      config = context.registers[:site].config
      size = config["amazon_img_size"]
      size = config["amazon_img_size"]
      amazon_tag = config["amazon_ad_tag"]
      rakuten_id = config["rakuten_ad_id"]
      rakuten_ut = config["rakuten_ad_ut"]
      amazon_link = Aff.amazon_link(@asin, amazon_tag)
      rakuten_link = Aff.rakuten_link(@search, rakuten_id, rakuten_ut)
      amazon_ad_label = config["amazon_ad_label"] || "Check Amazon"
      rakuten_ad_label = config["rakuten_ad_label"] || "Check Rakuten"
<<EOS
<div class='amazon-box'>
  #{Aff.amazon_img(amazon_link, @title, @img, size)}
  <div class='amazon-txt'>
    <a href='#{amazon_link}' rel='nofollow' target='_blank'>#{@title}</a>
  </div>
  <div class='amazon-txt'>
    <span class='amazon-link'><a href='#{amazon_link}' rel='nofollow' target='_blank'>#{amazon_ad_label}</a></span>
    <span class='rakuten-link'><a href='#{rakuten_link}' rel='nofollow' target='_blank'>#{rakuten_ad_label}</a></span>
  </div>
</div>
EOS
    end
  end
end

Liquid::Template.register_tag('amazon_link', Jekyll::AmazonLink)
Liquid::Template.register_tag('amazon_img', Jekyll::AmazonImg)
Liquid::Template.register_tag('amazon_box', Jekyll::AmazonBox)
