module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [UserType], null: false
    
    def users
      AdminUser.all
    end




    field :user, Types::UserType, null: false do 
      argument :id, ID, required: true
    end

    def user(id:)
      AdminUser.find(id)
    end

    field :article, Types::ArticleType, null: false do 
      argument :id, ID, required: true
    end

    def article(id:)
      Article.find(id)
    end
  end
end
