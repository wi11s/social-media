class JoinReplySerializer < ActiveModel::Serializer
  attributes :id, :child_reply_id, :parent_reply_id
end
