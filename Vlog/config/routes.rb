Rails.application.routes.draw do
  get 'users/show'
  resources :comments
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "posts#index"
  resources :posts do
    member do
      patch :upvote
      patch :downvote
    end
  end
  get 'post/myposts',to: 'posts#myposts'
  devise_scope :user do
  get "/users/sign_out", to:'devise/sessions#destroy'
  end
  resources :users, only: [:show]

  resources :comments do
    member do
      patch :upvote
      patch :downvote
    end
  end
  
end
