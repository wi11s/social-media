class User < ApplicationRecord
    has_secure_password

    has_many :followings, :class_name => "Follow", :foreign_key => "follower_id"
    has_many :followeds, :class_name => "Follow", :foreign_key => "followed_id"

    has_many :posts

    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :name, presence: true
    validates :email, presence: true
    validates :username, presence: true

    def following
        self.followings.map {|follow| follow.followed}
    end
end
