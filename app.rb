require 'sinatra'
# set :public_folder, 'public'

get '/' do
  send_file 'public/index.html'
end