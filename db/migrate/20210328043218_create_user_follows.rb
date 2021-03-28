class CreateUserFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :user_follows do |t|
      t.integer :follower, null:false
      t.integer :following, null: false
      t.timestamps
    end

    add_index :user_follows, :follower
    add_index :user_follows, :following
  end
end
