class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :post_id
      t.text :body
      t.string :email
      t.string :author

      t.timestamps null: false
    end
  end
end
