class Pin < ApplicationRecord
    validates :title, :author_id, :board_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
        
    belongs_to :board,
        class_name: :Board,
        foreign_key: :board_id,
        primary_key: :id

    has_one_attached :image
end
