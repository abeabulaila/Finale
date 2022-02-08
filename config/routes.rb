Rails.application.routes.draw do 
  namespace :api do
    resources :reviews
    resources :bands, only: [:index, :update, :show]
  end

  resources :users

  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  patch '/patch', to:"users#update"

end
