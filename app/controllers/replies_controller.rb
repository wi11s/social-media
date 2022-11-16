class RepliesController < ApplicationController
    def show
        replies = Reply.find(params[:id]).replies
        render json: replies
    end
end
