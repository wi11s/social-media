class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    def create 
        user = User.create!(user_params)
        @token = encode_token(user_id: user.id)
        render json: {
            user: UserSerializer.new(user), 
            token: @token
        }, status: :created
    end

    def me 
        render json: current_user, status: :ok
    end

    def index
        users = User.all
        render json: users
    end

    def update
        User.find(params[:id]).update!(user_params)
        user = User.find(params[:id])
        render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    private

    def user_params 
        params.permit(:username, :name, :password, :password_confirmation, :email, :avatar, :bio, :birthday, :location)
    end

    def handle_invalid_record(e)
            render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
