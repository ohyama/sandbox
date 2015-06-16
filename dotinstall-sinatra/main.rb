require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "hello world"
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
