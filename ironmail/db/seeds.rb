jwo = User.create! first_name: "Jesse", last_name: "Wolgamott", email: "jesse@example.com", password: "12345678"
awo = User.create! first_name: "Amanda", last_name: "Wolgamott", email: "amanda@example.com", password: "12345678"
jackwo = User.create! first_name: "Jack", last_name: "Wolgamott", email: "jack@example.com", password: "12345678"
hankwo = User.create! first_name: "Hank", last_name: "Wolgamott", email: "hank@example.com", password: "12345678"

Message.create subject: "Great Job Today", body: "You nailed that test", from_email: jwo.email, user: jackwo
Message.create subject: "RE: Great Job Today", body: "Thanks!", from_email: jackwo.email, user: jwo
Message.create subject: "Please buy dinos", body: "ASAP THAT MEANS NOW! (thanks!)", from_email: hankwo.email, user: jwo
