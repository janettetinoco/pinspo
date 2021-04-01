json.extract! @user, :id, :username, :email, :boards
json.pinned do 
    @board_pins.each do |board_pin|
        json.set! board_pin.board_id do
            json.extract! board_pin, :pin_id
        end
    end
end

#{id, username, email, {boards}, {pinned}
#pinned:{ boardId1: [pin_id1, pinid2], bordId2: [pinId3, pinid4]}