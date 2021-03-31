class Api::BoardPinsController < ApplicationController
    def create
        @board_pin = BoardPin.new(board_pin_params)
        if @board_pin.save
            render 'api/board_pins/show'
            #send nothing back yet
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

    def unpin
        @board_pin = BoardPin.where('board_id=? AND pin_id=?', board_pin_params[:board_id], board_pin_params[:pin_id])
        if BoardPin.delete(@board_pin)
            render json: ['successfuly unpinned'], status: 200
        else
            render json: ['Could not unpin'], status: 422
        end
    end

    private
    def board_pin_params
        params.require(:board_pin).permit(:pin_id, :board_id)
    end
end
