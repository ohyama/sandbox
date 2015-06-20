require 'sinatra'
require 'sinatra/reloader'

get '/about' do
  @content = 'about'
  @email = 'hoge@hoge.com'
  erb :about
end

get '/:name?' do |n|
  @name = n
  @content = 'main content'
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
