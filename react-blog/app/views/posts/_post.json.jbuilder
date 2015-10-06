json.id post.id
json.title post.title
json.body post.body
json.excerpt truncate(post.body, length: 250)
json.url post_url(id: post.id, only_path: true)
