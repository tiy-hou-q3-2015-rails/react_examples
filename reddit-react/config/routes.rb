Rails.application.routes.draw do
  root 'dashboard#show'

  namespace :api do
    get "links" => 'links#index'
    post "links" => 'links#create'
    post "links/:id/upvote" => 'links#upvote'
    post "links/:id/downvote" => 'links#downvote'
  end

end
