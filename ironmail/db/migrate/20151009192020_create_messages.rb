class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :subject, null: false
      t.text :body, null: false
      t.references :user, index: true, foreign_key: true
      t.string :from_email, null: false
      t.boolean :read, default: false

      t.timestamps null: false
    end
  end
end
