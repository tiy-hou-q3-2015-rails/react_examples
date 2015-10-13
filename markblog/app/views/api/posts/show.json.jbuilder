json.post do
  json.id @post.id
  json.title @post.title
  json.body @post.body
  json.posted_at @post.posted_at
  json.comments @post.comments do |comment|
    json.id comment.id
    json.username comment.username
    json.body comment.body
    json.posted_at comment.posted_at
  end
end
