class BoardPin < ApplicationRecord
    validates :board_id,:pin_id,  presence: true

    belongs_to :board,
        class_name: :Board,
        foreign_key: :board_id,
        primary_key: :id

    belongs_to :pin,
        class_name: :Pin,
        foreign_key: :pin_id,
        primary_key: :id
    
    
end
