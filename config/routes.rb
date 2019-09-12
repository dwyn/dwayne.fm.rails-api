Rails.application.routes.draw do
  
  # devise_for :admin_users, ActiveAdmin::Devise.config
  post "/graphql", to: "graphql#execute"

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  
  # scope '/api' do
  #   resources :articles, only: [:index, :show]
  #   resources :projects, only: [:index, :show]
  #   resources :users, only: :show
  # end
  
  
  if Rails.env.development?
    # authenticate :admin_user do
      mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
    # end
  end


  # Rails to pass any HTML requests that it doesnt catch to React
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end


