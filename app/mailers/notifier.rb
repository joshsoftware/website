class Notifier < ActionMailer::Base
  def notify_contact(contact)
    @contact = contact
    mail(to: 'info@joshsoftware.com', from: contact.email, subject: 'Contact from Josh site', message: contact.message)
  end
end
