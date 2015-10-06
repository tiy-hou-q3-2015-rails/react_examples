class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at desc").limit(50)

    view = ApplicationController.view_context_class.new("#{Rails.root}/app/views")
    @posts_json = JbuilderTemplate.new(view).encode do |json|
      json.posts do |json|
        json.partial! 'posts/post', collection: @posts, as: :post
      end
    end

  end

  def show
    @post = Post.find params[:id]

    view = ApplicationController.view_context_class.new("#{Rails.root}/app/views")
    @post_json = JbuilderTemplate.new(view).encode do |json|
      json.partial! 'posts/post', post: @post
    end
  end
end
