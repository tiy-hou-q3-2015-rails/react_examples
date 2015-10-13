class SessionsController < ApplicationController
  def new
  end

  def create
    username = params[:username]
    password = params[:password]

    user = User.find_by username: username
    if user.present? && user.authenticate(password)
      session[:user_id] = user.id
      redirect_to root_path
    else
      render :new
    end

  end
end
