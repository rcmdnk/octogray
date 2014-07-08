# Patch for jekyll-2.1.0/lib/jekyll/post.rb
# to capitalize all categories, instead of being downcase.
module Jekyll
  class Post
    # Categories
    def populate_categories
      puts "in plugin!"
      categories_from_data = Utils.pluralized_array_from_hash(data, 'category', 'categories')
      self.categories = (
        Array(categories) + categories_from_data
      ).map {|c| c.to_s.capitalize}.flatten.uniq
      #)
    end

    # Tags
    #def populate_tags
    #  self.tags = Utils.pluralized_array_from_hash(data, "tag", "tags").map {|t| t.to_s.capitalize}.flatten
    #end
  end
end
