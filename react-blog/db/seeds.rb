5.times do
  post = Post.create title: Faker::Book.title, body: Faker::Lorem.paragraphs(5, true).join("\n\n")
  (2..10).to_a.sample.times do
    Comment.create post: post, email: Faker::Internet.email, author: Faker::Name.name, body: Faker::Lorem.sentences(3).join(" ")
  end
end
