class DashboardController < ApplicationController
  def show
    @links = Link.all
  end
end
