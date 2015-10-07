class Comment < ActiveRecord::Base
  belongs_to :post
  validates :body, presence: true, length: {minimum: 20}
  validates :author, presence: true
  validates :email, presence: true
end
