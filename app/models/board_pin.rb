class BoardPin < ApplicationRecord
    validates :board_id,:pin_id,  presence: true
    
    
end
