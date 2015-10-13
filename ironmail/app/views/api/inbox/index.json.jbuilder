json.messages @messages do |message|
  json.id message.id
  json.subject message.subject
  json.body message.body
  json.from_email message.from_email
  json.read message.read
  json.url message_path(id: message.id)
  json.read_message_url read_message_path(id: message.id)
  json.created_at_formatted distance_of_time_in_words(message.created_at, Time.now)
  json.author message.author
end
