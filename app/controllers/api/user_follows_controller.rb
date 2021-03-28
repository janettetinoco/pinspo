class Api::UserFollowsController < ApplicationController
     def create
        @user_follow = UserFollow.new(board_pin_params)
        if @user_follow.save
            render 'api/board_pins/show'
            #send nothing back yet
        else
            render json: @user_follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_follow = UserFollow.where("follower_id ? AND following_id=?", user_follow_params[:follower_id],  user_follow_params[:following_id])
        if @user_follow.destroy
        else
            render json: @user_follow.errors.full_messages, status: 422
        end
    end

    private
    def user_follow_params
        params.require(:user_follow).permit(:follower_id, :following_id)
    end
end
