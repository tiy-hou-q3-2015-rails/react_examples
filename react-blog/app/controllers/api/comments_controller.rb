class Api::CommentsController < ApplicationController

  def create
    @post = Post.find params[:id]
    @comment = Comment.new params.require(:comment).permit(:body, :email, :author)
    @comment.post = @post
    # if @comment.save
    #   redirect_to post_path(id: @post.id)
    # else
    #   render :new
    # end

    if @comment.save
      render json: {comment: @comment}
    else
      render status: 422, json: @comment.errors
    end
  end
end
