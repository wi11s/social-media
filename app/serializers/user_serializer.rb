class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :bio, :following, :followers, :posts
end
