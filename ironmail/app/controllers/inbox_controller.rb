class InboxController < ApplicationController
  def dashboard
  end

  def show
    @message = Message.find params[:id]
    @message.update(read: true)
  end
end
