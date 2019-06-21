Rails.application.routes.draw do
  
  # devise_for :users, ActiveAdmin::Devise.config
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  scope '/api' do
    resources :articles, only: [:index]
    resources :projects, only: [:index]
  end
  
end