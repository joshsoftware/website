data = YAML.load_file("#{Rails.root}/config/credentials.yml")
ENV['TWITTER_CONSUMER_KEY'] = data['TWITTER_CONSUMER_KEY']
ENV['TWITTER_CONSUMER_SECRET'] = data['TWITTER_CONSUMER_SECRET']

ENV['USERNAME'] = data['USERNAME']
ENV['PASSWORD'] = data['PASSWORD']
ENV['GEO_API_KEY'] = data['GEO_API_KEY']
ENV['JOSH_INFO_EMAIL'] = data['JOSH_INFO_EMAIL']
ENV['JOSH_INFO_PASSWORD'] = data['JOSH_INFO_PASSWORD']
ENV['GOOGLE_DRIVE_SHEET'] = data['GOOGLE_DRIVE_SHEET']

Website::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false
  config.eager_load = false

  # Show full error reports and disable caching
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin

  # Raise exception on mass assignment protection for Active Record models
  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)

  # Do not compress assets
  config.assets.compress = false

  # Expands the lines which load the assets
  config.assets.debug = true

  config.action_mailer.default_url_options = { protocol: 'http', host: 'localhost:3000' }
  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true

  config.action_mailer.smtp_settings = {
    address: "smtp.gmail.com",
    port: 587,
    authentication: "plain",
    user_name: ENV['USERNAME'],
    password: ENV['PASSWORD'],
    enable_starttls_auto: true
  }
end

