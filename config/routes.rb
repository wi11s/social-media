Rails.application.routes.draw do

  get "/me", to: "users#me"
  post "/auth/login", to: "auth#login"

  resources :join_replies
  resources :follows
  resources :likes
  resources :replies
  resources :posts
  resources :users, only: [:index, :create]
end
