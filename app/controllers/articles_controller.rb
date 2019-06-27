class ArticlesController < ApplicationController

  # GET /articles
  def index
    @articles = Article.all
    render json: @articles.to_json
  end

  # GET /articles/:id
  def show
    @article = Article.find(params[:id])
    render json: @article.to_json
  end

end
