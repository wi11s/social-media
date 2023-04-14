class CreateJoinReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :join_replies do |t|
      t.integer :parent_reply_id
      t.integer :child_reply_id

      t.timestamps
    end
  end
end
