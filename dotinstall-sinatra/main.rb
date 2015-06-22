require 'sinatra'
require 'sinatra/reloader'

before do
  @author = "ohyama"
end

after do
  logger.info "page diplayed successfully."
end

get '/about' do
  @content = 'about this page is ... by ' + @author
  @email = 'hoge@hoge.com'
  erb :about
end

get '/:name?' do |n|
  @name = n
  @content = 'main content by ' + @author
  erb :index
end

get '/hello3/:fname/?:lname?/?' do |f, l|
  "hello #{f} #{l}"
end

get '/hello2/:name' do |n|
  "hello #{n}"
end

get '/hello/:name' do
  "hello #{params[:name]}"
end

get '/from/*/to/*' do |f, t|
  "from #{f} to #{t}"
end
