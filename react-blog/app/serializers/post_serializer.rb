class PostSerializer < ActiveModel::Serializer
  include ActionView::Helpers::TextHelper
  include Rails.application.routes.url_helpers

  attributes :id, :title, :body, :excerpt, :url

  def excerpt
    truncate object.body, length: 250
  end

  def url
    post_path(id: object.id)
  end
end
