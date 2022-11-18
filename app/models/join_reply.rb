class JoinReply < ApplicationRecord
    belongs_to :parent_reply, class_name: "Reply"
    belongs_to :child_reply, class_name: "Reply"

    validates :parent_reply_id, uniqueness: { scope: :child_reply_id }
    validates :child_reply_id, uniqueness: { scope: :parent_reply_id }
end
