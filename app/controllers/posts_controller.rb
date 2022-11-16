class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def replies
        replies = Post.find(params[:post_id]).initial_replies
        render json: replies
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end

    private

    def post_params
        params.permit(:user_id, :content)
    end
end
