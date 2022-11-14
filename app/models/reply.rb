class Reply < ApplicationRecord
  belongs_to :post
  belongs_to :user

  has_many :parent_replies, class_name: :JoinReply, foreign_key: "parent_reply_id"
  has_many :replies, through: :parent_replies, source: :child_reply
end
