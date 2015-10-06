5.times do
  Post.create title: Faker::Book.title, body: Faker::Lorem.paragraphs(5, true).join("\n\n")
end
