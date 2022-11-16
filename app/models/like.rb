class Like < ApplicationRecord
  belongs_to :user
  belongs_to :post, optional: true
  belongs_to :reply, optional: true

  validates :user_id, uniqueness: { scope: [ :post_id, :reply_id ] }


  validates :post_id, presence: false
  validates :reply_id, presence: false
end
