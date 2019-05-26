Rails.application.routes.draw do
  
  devise_for :users, ActiveAdmin::Devise.config
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

    resources :article
    resources :project
  scope '/api' do

  end

end