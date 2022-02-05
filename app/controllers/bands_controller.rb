class BandsController < ApplicationController
    def index
        render json: Band.all
    end


    def show
        band = Band.find(params[:id])
        render json: band
    end
end
