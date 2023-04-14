class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :likes_count, :replies_count, :initial_replies, :created_at
end
