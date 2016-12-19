
class Notifier < ActionMailer::Base
  def notify_contact(contact)
    @contact = contact
    mail(to: 'info@joshsoftware.com', from: 'marketing@joshsoftware.com', reply_to: contact.email, subject: 'Request for information', message: contact.message)
  end
end
