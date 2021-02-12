class Api::PinsController < ApplicationController
    #come back and do destroy and update

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render json: 'api/pins/show'
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def show
        @pin = Pin.find(params[:id])
        if @pin
            render 'api/pins/show'
        else
            render json: ['Pin not found'], status: 422
        end

    end

    def index
        @pins = Pin.all
        render json: 'api/pins/index'
    end


    private
    def pin_params
        params.require(:pin).permit(:title, :description, :link, :author_id)
    end
end
