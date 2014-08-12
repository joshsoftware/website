class DevelopmentMailInterceptor
  def self.delivering_email(message)
    message.subject = "#{message.to} #{message.subject}"
    message.to = "anuja@joshsoftware.com"
  end
end

ActionMailer::Base.register_interceptor(DevelopmentMailInterceptor) if Rails.env.staging? || Rails.env.development?
