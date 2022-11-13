class CreateReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :replies do |t|
      t.text :content
      t.string :image
      t.integer :timestamp
      t.integer :like_count
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
