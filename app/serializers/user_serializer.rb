class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :bio, :following, :posts
end
