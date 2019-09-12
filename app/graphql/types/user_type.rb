module Types
  class UserType < Types::BaseObject
    field :name, String, null: false
    field :age, String, null: false
    field :email, String, null: false
    field :articles, [Types::ArticleType], null: false
    # field :projects, [Types::ProjectType], null: false
  end
end
