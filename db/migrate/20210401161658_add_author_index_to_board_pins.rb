class AddAuthorIndexToBoardPins < ActiveRecord::Migration[5.2]
  def change
    add_index :board_pins, :author_id
  end
end
