class Contact
  include ActiveAttr::Model

  attr_accessor :name, :email, :phone, :message

  validates :name, :email, :phone, :message, presence: true
  validates :email, format: { with: Devise.email_regexp }

  def notify
    Notifier.notify_contact(self).deliver!
  end
end
