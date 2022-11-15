class Post < ApplicationRecord
  belongs_to :user
  has_many :replies
  has_many :likes
  has_many :users, through: :likes

  def likes_count
    self.likes.count
  end

  def replies_count
    self.replies.count
  end
end
