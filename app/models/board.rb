class Board < ApplicationRecord
    validates :title, :author_id, presence: true
    validates :title,  uniqueness: {scope: :author_id}

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
