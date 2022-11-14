class Reply < ApplicationRecord
  belongs_to :post

  has_many :replies, :class_name => "JoinReply", :foreign_key => "child_reply_id"
end

