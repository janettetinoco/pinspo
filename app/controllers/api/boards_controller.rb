class Api::BoardsController < ApplicationController
    def create
          @board = Board.new(board_params)
        if @board.save
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.find_by(id: params[:id])
        @board_pins = BoardPin.where(board_id: params[:id])
        if @board
            render 'api/boards/show'
        else
            render json: ['Board not found'], status: 422
        end
    end

    def destroy
        @board = Board.find(params[:id])
        if @board.destroy
            render json: {}
        else
            render json: ["Could not delete board"], status: 422
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private
    def board_params
        params.require(:board).permit(:id, :title, :description, :author_id)
    end
end
