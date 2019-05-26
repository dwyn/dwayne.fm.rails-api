class ArticleController < ApplicationController

  def index
    @articles = Article.select("id, title").all
    render json: @aticles.to_json
  end

end
