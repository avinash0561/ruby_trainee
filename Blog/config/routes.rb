Rails.application.routes.draw do
  # get 'likes/create'
  # get 'likes/destroy'
  # get 'likes/like_params'

  resources :likes, only: [:create, :destroy]
  
  resources :comments
  devise_for :users,controllers: {
    registrations: 'users/registrations'
  }
  get 'home/about'
  root 'posts#index'

  get 'posts/mypost', to: 'posts#mypost'
  devise_scope :user do
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end

  resources :users
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
