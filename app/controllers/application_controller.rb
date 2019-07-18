class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Rails to pass any HTML requests that it doesnt catch to React
  def fallback_index_html
    render :file => 'public/index.html'
  end
end