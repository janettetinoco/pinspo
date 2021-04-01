class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        @board_pins = BoardPin.where(author_id: params[:id])
        if(!@board_pins)
            @board_pins = [];
        end
        render "api/users/show"
    end
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            #will need to render the boards show page
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status:422
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :age, :email, :password)
    end

end
