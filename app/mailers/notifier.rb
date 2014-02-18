require "google_drive"

class Notifier < ActionMailer::Base
  def notify_contact(contact)
    @contact = contact
    mail(to: 'info@joshsoftware.com', from: contact.email, subject: 'Request for information', message: contact.message)
    add_to_google_spreadsheet
  end

  def add_to_google_spreadsheet
    session = GoogleDrive.login(JOSH_INFO_EMAIL, JOSH_INFO_PASSWORD)
    spreadsheet = session.file_by_title(GOOGLE_DRIVE_SHEET)
    worksheet = spreadsheet.worksheets[0]
    row = [@contact.name, @contact.email, @contact.skype_id, @contact.phone, @contact.ip, @contact.location, @contact.message, Time.now]
    worksheet.update_cells(worksheet.num_rows + 1, 1, [row])
    worksheet.save
  end

end
