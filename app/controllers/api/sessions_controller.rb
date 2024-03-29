class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
        )
        if @user
            login(@user)
            @board_pins = BoardPin.where(author_id: @user.id)
            if(!@board_pins)
                @board_pins = [];
            end
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: {message: 'logout successful'}
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
