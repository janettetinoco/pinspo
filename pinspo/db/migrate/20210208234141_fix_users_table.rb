class FixUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :sesson_token
  end
end
