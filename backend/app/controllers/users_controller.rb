class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, only: [:id, :username, :levels_completed]
    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:id, :username, :levels_completed]
    end
end
