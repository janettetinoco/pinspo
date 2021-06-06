json.following do
    @user_following.each do |follow|
        json.set! follow.following_id do
            json.extract! follow, :following_id
        end
    end
end

json.followers do
    @user_followers.each do |follow|
        json.set! follow.follower_id do
            json.extract! follow, :follower_id
        end
    end
end