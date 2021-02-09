class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.integer :age, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :sesson_token, null: false, unique: true
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email
    add_index :users, :sesson_token
  end
end
