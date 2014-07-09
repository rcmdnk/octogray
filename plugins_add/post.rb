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
