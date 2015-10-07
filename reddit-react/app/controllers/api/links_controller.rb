class Api::LinksController < ApplicationController

  def index
    @links = Link.all
    render json: @links
  end

  def create
    @link = Link.new params.require(:link).permit(:title, :url)
    if @link.save
      render json: @link
    else
      render status: 422, json: @link.errors
    end
  end

  def upvote
    @link = Link.find params[:id]
    Vote.create link: @link, value: 1
    @link.update(vote_total: @link.votes.pluck(:value).sum)
    render json: @link
  end

  def downvote
    @link = Link.find params[:id]
    Vote.create link: @link, value: -1
    @link.update(vote_total: @link.votes.pluck(:value).sum)
    render json: @link
  end
end
