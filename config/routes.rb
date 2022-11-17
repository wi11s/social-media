Rails.application.routes.draw do

  get "/me", to: "users#me"
  post "/auth/login", to: "auth#login"
  get "/like/:user_id/:post_id", to: "likes#show"
  get "/like/reply/:user_id/:reply_id", to: "likes#show_for_reply"
  delete "/like/:user_id/:post_id", to: "likes#destroy"
  delete "/like/reply/:user_id/:reply_id", to: "likes#destroy_reply_like"
  get "/posts/replies/:post_id", to: "posts#replies"
  delete "/follows/:followed_id/:follower_id", to: "follows#destroy"
  get "/posts/:user_id", to: "posts#user_posts"

  resources :join_replies, only: [:create]
  resources :follows, only: [:create]
  resources :likes, only: [:create]
  resources :replies, only: [:show, :create]
  resources :posts, only: [:index, :create]
  resources :users, only: [:index, :create, :update]
end
