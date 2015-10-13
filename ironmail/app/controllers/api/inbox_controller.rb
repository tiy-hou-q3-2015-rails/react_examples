class Api::InboxController < ApplicationController

  before_action do
    request.format = :json
  end

  def index
    # @messages = Message.all
    @current_user = User.find_by email: "jesse@example.com"
    @messages = @current_user.messages
  end

  def read
    @message = Message.find params[:id]
    @message.update(read: true)
  end
end
