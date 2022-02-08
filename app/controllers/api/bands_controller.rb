class Api::BandsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        bands = Band.all
        render json: bands, include: :reviews
    end

    def show
        band = Band.find_by(params[:id])
        render json: band, include: :reviews, status: :ok
    end


end
