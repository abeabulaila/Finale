Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :bands, only: [:index, :update]


end
