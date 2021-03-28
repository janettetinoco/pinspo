class AddIndexToUserFollowsColumn < ActiveRecord::Migration[5.2]
  def change
    add_index :user_follows, :follower_id
    add_index :user_follows, :following_id
  end
end
