desc "Auto create posts to see react load"
task :auto_post => :environment do

  puts "Ok, we will create a post every 2 seconds. Quit this to quit this."

  while true do

    Post.create title: Faker::Book.title, body: Faker::Lorem.paragraphs(5, true).join("\n\n")
    sleep 2
    print "."
  end
end
