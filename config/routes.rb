Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :bios, only: [:show, :update]
    resources :friend_requests, only: [:show, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
