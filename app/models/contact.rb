class Contact
  #include ActiveModel::Model
  include ActiveAttr::Model

  attr_accessor :name, :email, :phone, :message

  validates :name, :email, :phone, :message, presence: true
  validates :email, format: { with: Devise.email_regexp }
  validates :message, length: { maximum: 300 }

  def notify
    Notifier.notify_contact(self).deliver!
  end
end
