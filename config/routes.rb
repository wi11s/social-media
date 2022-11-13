Rails.application.routes.draw do
  resources :join_replies
  resources :follows
  resources :likes
  resources :replies
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
