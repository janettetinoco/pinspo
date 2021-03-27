class Api::PinsController < ApplicationController
    #come back and do destroy and update

    def create
        if pin_params[:image] == "null"
            return render json: ["You need to provide an image"], status: 401
        end
        @pin = Pin.new(pin_params)


        if @pin.save
            BoardPin.create(pin_id: @pin.id, board_id: @pin.board_id)
            render 'api/pins/show'
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
        render 'api/pins/index'
    end


    private
    def pin_params
        params.require(:pin).permit(:title, :description, :link, :author_id, :board_id, :image)
    end
end
