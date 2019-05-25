ActiveAdmin.register Article do
  permit_params :title, :description, :body, :user_id, :timestamp

  # Added publish / unpublish functionality
  action_item :publish, only: :show do
    link_to "Publish", publish_admin_article_path(article), method: put if !article.publish?
  end

  action_item :publish, only: :show do
    link_to "Unpublish", unpublish_admin_article_path(article), method: put if article.publish?
  end

  member_action :publish, method: :put do
    article = Article.find(params[:id])
    article.update(published_at: Time.zone.now)
    redirect_to admin_article_path(article)
  end

  member_action :unpublish, method: :put do
    article = Article.find(params[:id])
    article.update(published_at: nil)
    redirect_to admin_article_path(article)
  end

end