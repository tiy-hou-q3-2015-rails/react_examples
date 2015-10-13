class Message < ActiveRecord::Base
  belongs_to :user

  def author
    User.find_by email: from_email
  end
end
