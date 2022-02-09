Rails.application.routes.draw do 

 
  resources :bands, only: [:index, :update, :show]
  resources :reviews
  resources :users

  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  patch '/patch', to:"users#update"

end
