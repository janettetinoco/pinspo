json.extract! @board, :id, :title, :description, :author_id, :author
json.pins do 
    @board_pins.each do |board_pin|
        json.set! board_pin.pin_id do
            json.extract! board_pin, :pin_id
        end
    end
end

