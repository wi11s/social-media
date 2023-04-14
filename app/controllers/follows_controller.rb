class FollowsController < ApplicationController
    def create
        follow = Follow.create(follow_params)
        render json: follow, status: :created
    end

    def destroy
        Follow.find_by(followed_id: params[:followed_id], follower_id: params[:follower_id]).destroy
        head :no_content
    end

    private

    def follow_params
        params.permit(:follower_id, :followed_id)
    end
end
