module Types
  class ArticleType < Types::BaseObject
    field :title, String, null: true
    field :body, String, null: true
    field :description, String, null: true
    field :wordcount, Integer, null: true
  end
end
