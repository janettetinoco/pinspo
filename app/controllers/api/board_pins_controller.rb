class Api::BoardPinsController < ApplicationController
    def create
        @board_pin = BoardPin.new(board_pin_params)
        if @board_pin.save
            render 'api/board_pins/show'
        else
            render json: @board_pin.errors.full_messages, status: 422
        end
    end

    def show
        @board_pins = BoardPin.where(board_id: params[:board_id])
        if @board_pins
            render 'api/board_pins/all'
        else
            render json: ['No pins found'], status: 422
        end
    end

    private
    def board_pin_params
        params.require(:board_pin).permit(:author_id, :board_id)
    end
end
