class Like < ApplicationRecord
  belongs_to :post
  belongs_to :user
  belongs_to :reply

  validates :user_id, uniqueness: { scope: :post_id }
  validates :post_id, presence: false
  validates :reply_id, presence: false
end
