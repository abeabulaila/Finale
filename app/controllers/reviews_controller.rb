class ReviewsController < ApplicationController
  skip_before_action :authenticate_user, only: [:index, :show]

  def index
    render json: Review.all
  end

  def create
    leaveReview = Review.create!(review_params)
    if current_user
      render json: leaveReview, status: :created
    else
      render json: { error: "Please login to leave a review" }, status: :unauthorized
    end
  end

  def show
    bandReview = Review.find_by(params[:band_id])
    render json: bandReview, status: :ok
  end

  def destroy
    review = Review.find_by(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:title, :description, :user_id, :band_id)
  end
end
