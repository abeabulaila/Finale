class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :login]

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {error: "Invalid Username or Password"}, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end


  # def destroy
  #     session.delete :user_id
  # end
end
