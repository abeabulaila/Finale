class BandsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Band.all
    end

end
