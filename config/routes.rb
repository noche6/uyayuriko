Rails.application.routes.draw do
  devise_for :users
  root to: 'yurikohomes#index'
  resources :yurikohomes, only: :index
  resources :bustups
  resources :halfbodies
  resources :fullbodies
  resources :chibis
end
