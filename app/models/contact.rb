class Contact
  include ActiveAttr::Model

  attr_accessor :name, :email, :phone, :message, :skype_id, :ip, :location

  validates :name, :email, :phone, :message, presence: true
  validates :email, format: { with: Devise.email_regexp }

  def notify
    Notifier.notify_contact(self).deliver!
    add_to_google_spreadsheet
  end

  private

  def add_to_google_spreadsheet
    client = authorize_google_client
    session = GoogleDrive.login_with_oauth(  client.authorization.access_token)
    spreadsheet = session.spreadsheet_by_title(ENV['GOOGLE_DRIVE_SHEET'])
    worksheet = spreadsheet.worksheets[0]
    row = [self.name, self.email, self.skype_id, self.phone, self.ip, self.location, self.message, Time.now]
    worksheet.update_cells(worksheet.num_rows + 1, 1, [row]) 
    worksheet.save
  end

  def authorize_google_client
    key = Google::APIClient::KeyUtils.load_from_pkcs12("#{Rails.root}/config/josh_service_account.p12", ENV['SERVICE_ACCOUNT_SECRET'])
    client = Google::APIClient.new
    client.authorization = Signet::OAuth2::Client.new(
      :token_credential_uri => 'https://accounts.google.com/o/oauth2/token',
      :audience => 'https://accounts.google.com/o/oauth2/token',
      :scope => 'https://spreadsheets.google.com/feeds/ https://docs.google.com/feeds/ https://www.googleapis.com/auth/drive https://docs.googleusercontent.com/',
      :issuer => ENV['SERVICE_ACCOUNT_EMAIL'],
      :access_type => 'offline' ,
      :approval_prompt=>'force',
      :signing_key => key)
    client.authorization.fetch_access_token!
    client
  end
end
