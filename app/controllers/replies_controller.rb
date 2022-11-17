class RepliesController < ApplicationController
    def show
        replies = Reply.find(params[:id]).replies
        render json: replies
    end

    def create
        reply = Reply.create!(reply_params)
        render json: reply, status: :created
    end

    def destroy
        Reply.find(params[:id]).destroy
        head :no_content
    end

    private

    def reply_params
        params.permit(:content, :image, :post_id, :user_id)
    end
end
