class LikesController < ApplicationController
    
    def show
        like = find_like
        render json: like
    end

    def create
        like = Like.create(like_params)
        render json: like, status: :created
    end

    def destroy
        like = find_like
        like.destroy
    end

    private

    def like_params
        params.permit(:user_id, :post_id, :reply_id)
    end

    def find_like
        like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
    end
end
