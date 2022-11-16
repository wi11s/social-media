class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def replies
        replies = Post.find(params[:post_id]).initial_replies
        render json: replies
    end
end
