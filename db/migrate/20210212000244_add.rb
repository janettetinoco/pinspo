class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :author_id, :integer, null: false, foreign_key: true, index:true
  end
end
