class Room < ActiveRecord::Base
  has_many :messages
  # unsure if I'll use, but it exists
  #has_many :users, through: :messages
end
