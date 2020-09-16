class CommentsController < ApplicationController
    def index
        comments = Comment.all 
        render json: comments, include: [:user]
    end
    
    def create 
        binding.pry
    end
end
