class UserFollow < ApplicationRecord
    validates :follower_id, :following_id, presence: true

     belongs_to :follower,
        class_name: :User,
        foreign_key: :follower_id,
        primary_key: :id

    belongs_to :following,
        class_name: :User,
        foreign_key: :following_id,
        primary_key: :id
end
