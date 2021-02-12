class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null:false, index: true, foreign_key: true
      t.timestamps
    end
  end
end
