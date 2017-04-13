module Aff
  def amazon_img_path(img, size=0, size_width=0)
    if img.start_with?("http") or img.start_with?("//")
      retrn img
    end
    size = 200 if size == 0
    img = img.split(".")
    ext = img[1] || "jpg"
    if size_width != 0
    "https://images-na.ssl-images-amazon.com/images/I/#{img[0]}._SS#{size}_CR0,0,#{size_width},#{size}_.#{ext}"
    else
    "https://images-na.ssl-images-amazon.com/images/I/#{img[0]}._SS#{size}_.#{ext}"
    end
  end

  def amazon_img(link, title, img, size=0, size_width=0)
<<EOS
<div class='amazon-img'>
  <a href='#{link}' rel='nofollow' target='_blank'><img src='#{amazon_img_path(img, size, size_width)}' alt='#{title}'/></a>
</div>
EOS
  end

  def amazon_link(asin, ad_tag='', a_id='')
    asin.strip!
    if a_id != ""
      "//af.moshimo.com/af/c/click?a_id=#{a_id}&p_id=170&pc_id=185&pl_id=4062&url=https%3A%2F%2Fwww.amazon.co.jp%2Fgp%2Fproduct%2F#{asin}"
    elsif ad_tag != ""
      "//www.amazon.co.jp/gp/product/#{asin}?ie=UTF8&camp=1207&creative=8411&creativeASIN=#{asin}&linkCode=shr&tag=#{ad_tag}"
    else
      "//www.amazon.co.jp/gp/product/#{asin}"
    end
  end

  def rakuten_link(search, id='', ut='', a_id='')
    require 'cgi'
    #search.gsub!(" ", "+")
    search = CGI.escape(search)
    if a_id != ''
      # Need double escape for moshimo
      search = CGI.escape(search)
      "//af.moshimo.com/af/c/click?a_id=#{a_id}&p_id=54&pc_id=54&pl_id=616&url=http%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F#{search}%2F"
    elsif id != ''
      "//hb.afl.rakuten.co.jp/hgc/#{id}/?pc=http%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F#{search}%2F&m=http%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F#{search}%2F&scid=af_url_txt&link_type=text&ut=#{ut}"
    else
      "http://search.rakuten.co.jp/search/mall/#{search}/&m=http%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F#{search}%2F&scid=af_url_txt&link_type=text&ut=#{ut}"
    end
  end

  def itunes_link(app, lang='us', token='')
    if token != ''
      if token.start_with?("at=")
        token = "?#{token}"
      elsif not token.start_with?("?")
        token = "?at=#{token}"
      end
    end
    "//itunes.apple.com/#{lang}/app/#{app}#{token}"
  end

  def android_link(app)
    "//play.google.com/store/apps/details?id=#{app}"
  end

  def itunes_img_path(img, size=0, size_width=0)
    if img.start_with?("http") or img.start_with?("//")
      retrn img
    end
    size = 200 if size == 0
    size_width = size if size_width == 0
    "http://is3.mzstatic.com/image/thumb/#{img}/source/#{size}x#{size_width}bb.jpg"
  end

  def itunes_img(link, title, img, size=0, size_width=0)
<<EOS
<div class='app-img'>
  <a href='#{link}' rel='nofollow' target='_blank'><img src='#{itunes_img_path(img, size, size_width)}' alt='#{title}'/></a>
</div>
EOS
  end
  module_function :amazon_img_path
  module_function :amazon_img
  module_function :amazon_link
  module_function :rakuten_link
  module_function :itunes_link
  module_function :android_link
  module_function :itunes_img_path
  module_function :itunes_img

end

module Jekyll

  class AmazonLink < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @asin = markup
    end

    def render(context)
      config = context.registers[:site].config
      amazon_tag = config["amazon_ad_tag"] || ''
      amazon_a_id = config["amazon_moshimo_a_id"] || ''
      Aff.amazon_link(@asin, amazon_tag, amazon_a_id)
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
      size = config["amazon_img_size"] || 0
      amazon_tag = config["amazon_ad_tag"] || ''
      amazon_a_id = config["amazon_moshimo_a_id"] || ''
      img = Aff.amazon_img(Aff.amazon_link(@asin, amazon_tag, amazon_a_id), @title, @img, size)
      if amazon_tag == '' and amazon_a_id != ''
        img += "<img src='//i.moshimo.com/af/i/impression?a_id=#{amazon_a_id}&p_id=170&pc_id=185&pl_id=4062' width='1' height='1' style='border:none;'>"
      end
      img
    end
  end

  class AmazonBox < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
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
    end

    def render(context)
      config = context.registers[:site].config
      size = config["amazon_img_size"] || 0
      amazon_tag = config["amazon_ad_tag"] || ''
      amazon_a_id = config["amazon_moshimo_a_id"] || ''
      rakuten_id = config["rakuten_ad_id"] || ''
      rakuten_ut = config["rakuten_ad_ut"] || ''
      rakuten_a_id = config["rakuten_moshimo_a_id"] || ''
      amazon_link = Aff.amazon_link(@asin, amazon_tag, amazon_a_id)
      rakuten_link = Aff.rakuten_link(@search, rakuten_id, rakuten_ut, rakuten_a_id)
      amazon_ad_label = config["amazon_ad_label"] || "Check Amazon"
      rakuten_ad_label = config["rakuten_ad_label"] || "Check Rakuten"
      moshimo = ""
      if amazon_tag == '' and amazon_a_id != ''
        moshimo += "<img src='//i.moshimo.com/af/i/impression?a_id=#{amazon_a_id}&p_id=170&pc_id=185&pl_id=4062' width='1' height='1' style='border:none;'>"
      end
      if rakuten_id == '' and rakuten_a_id != ''
        moshimo += "<img src='//i.moshimo.com/af/i/impression?a_id=#{rakuten_a_id}&p_id=54&pc_id=54&pl_id=616' width='1' height='1' style='border:none;'>"
      end
<<EOS
<div class='amazon-box'>
  #{Aff.amazon_img(amazon_link, @title, @img, size)}
  <div class='amazon-title'>
    <a href='#{amazon_link}' rel='nofollow' target='_blank'>#{@title}</a>
  </div>
  <div class='amazon-txt'>
    <span class='amazon-link'><a href='#{amazon_link}' rel='nofollow' target='_blank'>#{amazon_ad_label}</a></span>
    <span class='rakuten-link'><a href='#{rakuten_link}' rel='nofollow' target='_blank'>#{rakuten_ad_label}</a></span>
  </div>
</div>
#{moshimo}
EOS
    end
  end

  class ItunesImg < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      if /\/(?<title>[^\/]*)\/\s+(?<img>\S*)\s+(?<itunes>\S*)/ =~ markup
        @title = title
        @img = img
        @itunes = itunes
      end
    end

    def render(context)
      config = context.registers[:site].config
      itunes_lang = config["itunes_lang"] || "us"
      itunes_token = config["itunes_token"] || ""
      size = config["itunes_img_size"] || 0
      itunes_url = Aff.itunes_link(@itunes, itunes_lang, itunes_token)
      Aff.itunes_img(itunes_url, @title, @img, size)
    end
  end

  class AppBox < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      if /\/(?<title>[^\/]*)\/\s+(?<img>\S*)\s+\/(?<developer>[^\/]*)\/\s+(?<dev_url>\S*)\s+(?<price>\S*)\s+(?<itunes>\S*)\s+(?<android>\S*)/ =~ markup
        @title = title
        @img = img
        @developer = developer
        @dev_url = dev_url
        @price = price
        @itunes = itunes
        @android = android
      end
    end

    def render(context)
      config = context.registers[:site].config

      itunes_lang = config["itunes_lang"] || "us"
      itunes_token = config["itunes_token"] || ""
      itunes_url = Aff.itunes_link(@itunes, itunes_lang, itunes_token)
      itunes_size = config["itunes_img_size"] || 0
      itunes_developer = config["itunes_developer"] || "Developer"

      if @android.start_with?("amazon")
        amazon_tag = config["amazon_ad_tag"] || ''
        amazon_a_id = config["amazon_moshimo_a_id"] || ''
        android_url = Aff.amazon_link(@android.split("_")[1], amazon_tag, amazon_a_id)
      else
        android_url = Aff.android_link(@android)
      end

      itunes_pic = config["itunes_pic"]
      android_pic = config["android_pic"]
      if config['imgpath']
        imgpath = config['imgpath']
        if itunes_pic !~ /^(http|#{imgpath})/
          itunes_pic = imgpath + '/' + itunes_pic
        end
        if android_pic !~ /^(http|#{imgpath})/
          android_pic = imgpath + '/' + android_pic
        end
      end
<<EOS
<div class="app-box">
  #{Aff.itunes_img(itunes_url, @title, @img, itunes_size)}
  <div class="app-title">
    <a href="#{itunes_url}" rel="nofollow" target="_blank">#{@title}</a>
  </div>
  <div class="app-developer">
    #{itunes_developer}: <a href="#{@dev_url}" target="_blank" rel="nofollow">#{@developer}</a>
  </div>
  <div class="app-price">#{@price}</div>
  <div class="app-links">
    <span class="itunes-link"><a href="#{itunes_url}" target="_blank" rel="nofollow"><img src="#{itunes_pic}" alt="App Store"/></a></span>
    <span class="android-link"><a href="#{android_url}" target="_blank" rel="nofollow"><img src="#{android_pic}" alt="Google Play"/></a></span>
  </div>
</div>
EOS
    end
  end
end


Liquid::Template.register_tag('amazon_link', Jekyll::AmazonLink)
Liquid::Template.register_tag('amazon_img', Jekyll::AmazonImg)
Liquid::Template.register_tag('amazon_box', Jekyll::AmazonBox)
Liquid::Template.register_tag('itunes_img', Jekyll::ItunesImg)
Liquid::Template.register_tag('app_box', Jekyll::AppBox)

module AmazonFilter
  # Get first amazon-img
  def amazon_img(input)
    if input.match(/<div class="amazon-img">.*<\/div>/m) != nil
      out=input.match(/(<div class="amazon-img">.*<img *)width="200" height="200"(.*)_SS200(.*<\/div>)/m)
      if out == nil
        input.match(/<div class="amazon-img">.*<\/div>/m)[0]
      else
        out[1] + out[2] + "_SS90_CR0,0,120,90" + out[3]
      end
    elsif input.match(/{% *amazon_img.*%}/) != nil
      out = input.match(/{% *amazon_img (\S*) (\S*) (.*) %}/)
      Aff.amazon_img(Aff.amazon_link(out[1], ''), out[3], out[2], 90, 120)
    elsif input.match(/<div class="app-img">.*<\/div>/m) != nil
      out=input.match(/(<div class="app-img">.*<img *).*(src=\".*)200x200(bb.jpg.*<\/div>)/m)
      if out == nil
        input.match(/<div class="app-img">.*<\/div>/m)[0]
      else
        out[1] + out[2] + "120x90" + out[3]
      end
    elsif input.match(/{% *itunes_img.*%}/) != nil
      out = input.match(/{% *itunes_img *(\/[^\/]*\/) *(\S*) *(\S*).*%}/)
      Aff.itunes_img(Aff.itunes_link(out[3]), out[1], out[2], 90, 120)
    else
      "" #"no amazon-img"
    end
  end
end

Liquid::Template.register_filter AmazonFilter
