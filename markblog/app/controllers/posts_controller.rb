class PostsController < ApplicationController
  def index
  end

  def show
    @post = Post.find params[:id]
    # enable jbuilder in the controller

    # # step 1: get a view context
    # view = ApplicationController.view_context_class.new("#{Rails.root}/app/views")
    # # step 2: use the jbuilder
    # @post_json = JbuilderTemplate.new(view).encode do |json|
    #   json.id @post.id
    #   json.title @post.title
    #   json.body @post.body
    #   json.posted_at @post.posted_at
    #   json.comments @post.comments do |comment|
    #     json.id comment.id
    #     json.username comment.username
    #     json.body comment.body
    #     json.posted_at comment.posted_at
    #   end
    #
    # end
  end
end
