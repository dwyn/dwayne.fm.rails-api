class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table  :projects do |t|
      t.string    :title,       null: false, default: ""
      t.text      :description, null: false, default: ""
      t.string    :link,        null: false, default: ""
      t.references  :admin_user

      t.timestamps
    end
  end
end
