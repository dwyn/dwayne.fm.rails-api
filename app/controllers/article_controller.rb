class ArticleController < ApplicationController

  def index
    @articles = Article.all
    render json: @articles.to_json
  end

end
