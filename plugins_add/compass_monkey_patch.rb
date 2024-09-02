module FilePatch
  def self.included(base)
    base.singleton_class.alias_method :exists?, :exist?
  end
end

File.include(FilePatch)
