Rails.application.routes.draw do

  get "/me", to: "users#me"
  post "/auth/login", to: "auth#login"
  get "/like/:user_id/:post_id", to: "likes#show"
  delete "/like/:user_id/:post_id", to: "likes#destroy"
  get "/posts/replies/:post_id", to: "posts#replies"

  resources :join_replies
  resources :follows
  resources :likes, only: [:create]
  resources :replies, only: [:show]
  resources :posts, only: [:index]
  resources :users, only: [:index, :create]
end
