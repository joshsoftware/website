namespace :contact_us do
  desc 'Create google spreadsheet to store all messages'
  task :create_google_sheet => :environment do
    session = GoogleDrive.login(JOSH_INFO_EMAIL, JOSH_INFO_PASSWORD)
    header = ['Name', 'Email', 'Skype ID', 'Phone', 'IP Address', 'Location', 'Message', '@']
    spreadsheet = session.create_spreadsheet('joshsite')
    worksheet = spreadsheet.worksheets[0]
    worksheet.update_cells(1,1, [header])
    worksheet.save
  end
end
