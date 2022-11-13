class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.text :content
      t.string :image
      t.integer :timestamp
      t.integer :like_count
      t.integer :reply_count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
