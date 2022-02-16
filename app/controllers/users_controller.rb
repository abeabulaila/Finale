class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :show]

    def index
      users = User.all
      render json: users, include: :reviews
    end
  
    def show
      if current_user
        render json: current_user, include: :reviews, status: :ok
      else
        render json: "No one is logged in", status: :unauthorized
      end
    end

    def update
      if current_user
        current_user.update!(user_params)
        render json: current_user, status: :ok
      else
        render json: "Not authenticated", status: :unauthorized
      end
    end
  
    def create
      user = User.create!(user_params)
       if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
    def destroy
      # user = User.find(params[:id])
      if current_user
      current_user.destroy
      head :no_content
      else 
        render json: "User does not exist", status: :not_found
    # rescue ActiveRecord::RecordNotFound => error
    #   render json: { error: error.message }, status: :not_found
      end
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :bio)
    end
  end
  