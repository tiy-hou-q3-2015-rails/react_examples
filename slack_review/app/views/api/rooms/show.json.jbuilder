json.room do
  json.id @room.id
  json.name @room.name
  json.messages @room.messages do |message|
    json.id message.id
    json.body message.body
    json.created_at message.created_at
    json.user do
      json.id message.user.id
      json.username message.user.username
    end
  end
end
