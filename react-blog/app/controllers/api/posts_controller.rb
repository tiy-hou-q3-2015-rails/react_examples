class Api::PostsController < ApplicationController

  before_action do
    request.format = :json
  end

  def index
    @posts = Post.all.order("created_at desc").limit(50)
    # render json: {posts: @posts}
  end


end
