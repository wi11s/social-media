class JoinReply < ApplicationRecord
    belongs_to :parent_reply, class_name: "Reply"
    belongs_to :child_reply, class_name: "Reply"
end
