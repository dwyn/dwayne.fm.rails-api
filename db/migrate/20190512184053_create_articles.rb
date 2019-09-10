class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.references  :admin_user
      t.string      :title,        null: false, default: ""
      t.text        :body,         null: false, default: ""
      t.text        :description,  null: false, default: ""
      t.integer     :wordcount,    null: false, default: 0
      t.datetime    :published_at

      t.timestamps
    end
  end
end
