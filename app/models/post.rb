class Post < ApplicationRecord
  belongs_to :user
  has_many :replies
  has_many :likes
  has_many :users, through: :likes

  validates :content, presence: true

  def likes_count
    self.likes.count
  end

  def replies_count
    self.replies.count
  end

  def initial_replies
    self.replies.map { |reply| reply if reply.is_initial_reply }.compact
  end

end
