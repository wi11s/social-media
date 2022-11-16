class JoinRepliesController < ApplicationController
    def create 
        join_replies = JoinReply.create!(join_reply_params)
        render json: join_replies, status: :created
    end

    private

    def join_reply_params
        params.permit(:parent_reply_id, :child_reply_id)
    end
end
