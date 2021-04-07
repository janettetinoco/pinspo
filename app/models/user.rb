class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    # validates :age, presence:true, numericality: { only_integer: true, greater_than: 0, message: 'is not valid'}
    validate :valid_age

    has_many :pins,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Pin

    has_many :boards,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Board

    attr_reader :password
    after_initialize :ensure_session_token

    def valid_age
        # self.age = self.age.to_i
        if self.age.blank?
            return errors.add(:age, "cant be blank")
        end
        if self.age < 1 || !self.age.is_a?(Integer)
            errors.add(:age, "is not valid")
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
