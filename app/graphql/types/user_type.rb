module Types
  class UserType < Types::BaseObject
    field :name, String, null: true
    field :email, String, null: true
    field :articles, [Types::ArticleType], null: true
  end
end
