class CreateAuthorColumn < ActiveRecord::Migration[5.2]
  def change
      add_column :board_pins, :author_id, :integer, null: false
  end
end
