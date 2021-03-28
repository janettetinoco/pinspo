class FixFollowsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_follows, :follower
    add_column :user_follows, :follower_id, :integer, null:false
    remove_column :user_follows, :following
    add_column :user_follows, :following_id, :integer, null:false
  end
end
