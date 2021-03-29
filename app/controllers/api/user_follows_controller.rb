class Api::UserFollowsController < ApplicationController
     def create
        @user_follow = UserFollow.new(user_follow_params)
        if @user_follow.save
            #send nothing back yet
        else
            render json: @user_follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_follow = UserFollow.where("follower_id = ? AND following_id = ?", params[:id],  user_follow_params[:following_id])
        if UserFollow.delete(@user_follow)
        else
            render json: @user_follow.errors.full_messages, status: 422
        end
    end

    def show
        @user_following = UserFollow.where("follower_id = ?", params[:id])
        if @user_following
            render 'api/user_follows/show'
        else
        end
    end

    private
    def user_follow_params
        params.require(:user_follow).permit(:following_id)
    end
end
