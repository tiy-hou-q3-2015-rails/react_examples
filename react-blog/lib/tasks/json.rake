task :json => :environment do

  json_string = Jbuilder.encode do |json|
      json.partial! 'app/views/post/post', {posts: Post.all.limit(50) }
  end
end
