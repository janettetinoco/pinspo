json.extract! @user, :id, :username, :email, :boards
json.pinned do 
    json.array! @board_pins, :board_id, :pin_id
end

#{id, username, email, {boards}, {pinned}
#pinned:{ boardId1: [pin_id1, pinid2], bordId2: [pinId3, pinid4]}