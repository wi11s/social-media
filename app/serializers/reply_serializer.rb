class ReplySerializer < ActiveModel::Serializer
  attributes :id, :user, :content, :like_count, :reply_count
end
