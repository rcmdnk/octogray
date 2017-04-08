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
  <div class='amazon-txt'>
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

  class AppBox < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      vals = markup.gsub("'", "").split()
      @title = vals[0]
      @iphone = vals[1]
      @android = vals[2]
    end

    def render(context)
      config = context.registers[:site].config
      itune_token = config["itune_token"] || ""
      amazon_ad_tag = config["amazon_ad_tag"] || ""
    end

#  <img id="appreach-image" src="//is5.mzstatic.com/image/thumb/Purple91/v4/c1/e9/48/c1e948b2-d0ad-feaa-4cea-fec3ead8c409/source/512x512bb.jpg" alt="Chrome - Google のウェブブラウザ" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;">
#  <div class="appreach-info" style="margin: 10px;">
#    <div id="appreach-appname">Chrome - Google のウェブブラウザ</div>
#    <div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">
#      開発元:<a id="appreach-developerurl" href="https://itunes.apple.com/jp/developer/google-inc/id281956209?uo=4" target="_blank" rel="nofollow">Google, Inc.</a>
#    </div>
#    <div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div>
#    <div class="appreach-powered" style="font-size:80%; display:inline-block; _display:inline;">
#      posted with <a href="http://mama-hack.com/app-reach/" title="アプリーチ" target="_blank" rel="nofollow">アプリーチ</a>
#    </div>
#    <div class="appreach-links" style="float: left;">
#      <div id="appreach-itunes-link" style="display: inline-block; _display: inline;">
#        <a id="appreach-itunes" href="https://itunes.apple.com/jp/app/chrome-google-%E3%81%AE%E3%82%A6%E3%82%A7%E3%83%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6/id535886823?mt=8&amp;uo=4&amp;at=11lHd9" target="_blank" rel="nofollow">
#          <img src="https://nabettu.github.io/appreach/img/itune_ja.svg" style="height:40px;">
#        </a>
#      </div>
#      <div id="appreach-gplay-link" style="display:inline-block; _display:inline;">
#        <a id="appreach-gplay" href="https://play.google.com/store/apps/details?id=com.android.chrome" target="_blank" rel="nofollow">
#          <img src="https://nabettu.github.io/appreach/img/gplay_ja.png" style="height:40px;">
#        </a>
#      </div>
#    </div>
#  </div>
#  <div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div>
#</div>





<div class="group">
<a href="https://itunes.apple.com/jp/app/id560851219?mt=12&uo=4&at=10lc94" target="_blank" rel="nofollow"><img width="75" class="alignleft" align="left" src="http://a2.mzstatic.com/us/r1000/103/Purple/v4/78/dc/7b/78dc7bc7-19e0-8888-cc9f-2829fd67ba59/Should_I_Sleep.75x75-65.png" style="border-radius: 11px 11px 11px 11px;-moz-border-radius: 11px 11px 11px 11px;-webkit-border-radius: 11px 11px 11px 11px;box-shadow: 1px 4px 6px 1px #999999;-moz-box-shadow: 1px 4px 6px 1px #999999;-webkit-box-shadow: 1px 4px 6px 1px #999999;margin: -5px 15px 1px 5px;"></a>
<div style="font-size:small;line-height:1.2;"><a href="https://itunes.apple.com/jp/app/id560851219?mt=12&uo=4&at=10lc94" target="_blank" rel="nofollow"><strong> Should I Sleep 1.7.7（￥170）</strong></a><br> カテゴリ: ライフスタイル, ビデオ<br> 販売元: <a href="https://itunes.apple.com/jp/app/id560851219?mt=12&uo=4&at=10lc94" target="_blank" rel="nofollow">Marcelo Leite - Marcelo Leite</a>（サイズ: 2.8 MB）</div>
</div>

  end
end

Liquid::Template.register_tag('amazon_link', Jekyll::AmazonLink)
Liquid::Template.register_tag('amazon_img', Jekyll::AmazonImg)
Liquid::Template.register_tag('amazon_box', Jekyll::AmazonBox)

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
    else
      "" #"no amazon-img"
    end
  end
end

Liquid::Template.register_filter AmazonFilter
