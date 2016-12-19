class NewsletterUser
  include ActiveAttr::Model

  attr_accessor :email

  validates :email, presence: true
  validates :email, format: { with: Devise.email_regexp }
end
