class ArticlesController < ApplicationController

  def index
    @articles = Article.select("id, title").all
    render json: @articles.to_json
  end

end
