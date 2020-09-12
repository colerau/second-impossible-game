class SessionsController < ApplicationController
    def new
        binding.pry
    end

    def create
        user = User.find_by(username: params[:username])

        if user
            session[:user_id] = user.id 
            render json: user, only: [:username, :levels_completed]
        else
            render json: { message: "User not found" }
        end
    end
end
