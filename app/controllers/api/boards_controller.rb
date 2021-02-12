class Api::BoardsController < ApplicationController
    def create
          @board = Board.new(board_params)
        if @board.save
            render json: 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
         @board = Board.find_by(id: params[:id])
        if @pin
            render json: 'api/boards/show'
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
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render json: 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private
    def board_params
        params.require(:board).permit(:title, :description, :author_id)
    end
end
