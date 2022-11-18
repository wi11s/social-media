class LikesController < ApplicationController
    
    def show
        like = find_like
        render json: like
    end

    def show_for_reply
        like = find_like
        render json: like
    end

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def destroy_single
        like = find_like
        like.destroy!
    end

    def destroy_reply_like
        like = find_like
        like.destroy!
    end

    def destroy
        Like.find(params[:id]).destroy
        head :no_content
    end

    private

    def like_params
        params.permit(:user_id, :post_id, :reply_id)
    end

    def find_like
        like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id], reply_id: params[:reply_id])
    end
end
