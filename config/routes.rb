Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :bands, only: [:index, :update]

  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
