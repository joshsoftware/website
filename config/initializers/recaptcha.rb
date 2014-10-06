Recaptcha.configure do |config|
  config.public_key  = '6LcJHvsSAAAAANmruZ9e8eYIq1TyJeZC4Zq6YhDG'
  config.private_key = ENV['RECAPTCHA_API_KEY']
end
