class Api::PostsController < ApplicationController

  before_action do
    request.format = :json
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find params[:id]
  end
end
