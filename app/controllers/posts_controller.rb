class PostsController < ApplicationController
    def index
        posts = Post.order(created_at: :desc).all
        render json: posts
    end

    def replies
        replies = Post.find(params[:post_id]).initial_replies
        render json: replies
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def user_posts
        posts = Post.where(user_id: params[:user_id])
        render json: posts, status: :ok
    end

    def destroy
        Post.find(params[:id]).destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:user_id, :content)
    end
end
