Rails.application.routes.draw do 

 
  resources :bands, only: [:index, :update, :show]
  resources :reviews, only: [:index, :create]
  resources :users, only: [:index, :create, :update, :destroy]

  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  patch '/patch', to:"users#update"
  delete '/destroy', to:"users#destroy"
end
