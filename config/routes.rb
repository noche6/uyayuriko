Rails.application.routes.draw do
  root to: 'yurikohomes#index'
  resources :yurikohomes, only: :index
  resources :bustups
end
