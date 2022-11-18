class Reply < ApplicationRecord
  belongs_to :post
  belongs_to :user
  has_many :likes, dependent: :destroy

  has_many :parent_replies, class_name: :JoinReply, foreign_key: "parent_reply_id"
  has_many :replies, through: :parent_replies, source: :child_reply

  has_many :child_replies, class_name: :JoinReply, foreign_key: "child_reply_id"

  validates :content, presence: true
  validates :content, length: { maximum: 140 }
  validates :id, uniqueness: true

  def like_count
    likes.count
  end

  def reply_count
    replies.count
  end

  def is_initial_reply
    child_replies.count == 0
  end
end
