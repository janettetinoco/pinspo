class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null:false
      t.string :description
      t.string :link
      t.timestamps
    end

    add_index :pins, :title
    add_index :pins, :description
  end
end
