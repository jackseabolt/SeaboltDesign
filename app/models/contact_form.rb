class ContactForm < ApplicationRecord
  attribute :name,  :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message, :validate => true

  def headers
    {
      :to => "jackseabolt@gmail.com",
      :subject => "New Message From JackSeabolt.com"
    }
  end
end
