require 'active_record'

ActiveRecord::Base.establish_connection(
	"adapter" => "sqlite3",
	"database" => "./blog.db"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

class Post < ActiveRecord::Base

	scope :top3, -> { order("create_at").limit(3) }

	validates :title, :presence => true
	validates :body, :length => { :minimum => 5 }
end

#post = Post.new(:title => "title1", :body => "hello1")

=begin
post = Post.new
post.title = "title2"
post.body = "hello2"
=end

=begin
post = Post.new do |p|
	p.title = "title3"
	p.body = "hello3"
end
=end

#Post.create(:title => "title4", :body => "hello4")

#post.save

=begin
p Post.find(3)
p Post.find_by_title_and_id("title2", 2)

p Post.where(:title => "title1", :id => 1)
p Post.where("title = ? and id = ?", "title1", 1)
p Post.where("title = :title and id = :id", {:title => "title1", :id => 1})

p Post.where("id > ?", 2)
p Post.where("body like ?", "hello%")
=end

=begin
p Post.where(:id => 1..3)
p Post.where(:id => [1, 3])

p Post.order("id desc").limit(3)

p Post.top3
=end

=begin
Post.where(:title => "title5").first_or_create do |p|
	p.body = "title5"
end
=end

#post = Post.find(1)
=begin
post.title = "new title"
post.save
=end

#post.update_attribute(:title, "new2 title")
#post.update_attributes(:title => "new3 title", :body => "hhh")

#Post.where(:id => 1..2).update_all(:title => "new4 title", :body => "iii")
#Post.where(:id => 1..2).delete_all()

post = Post.new(:body => "123")

if !post.save
	p post.errors.messages
end

p Post.all
