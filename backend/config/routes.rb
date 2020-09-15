Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'

  get '/logout', to: 'sessions#destroy'

  post '/increase-levels-completed', to: 'users#increase_level'
end
