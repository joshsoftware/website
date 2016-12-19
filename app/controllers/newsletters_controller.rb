class NewslettersController < ApplicationController

  def new
    response.headers.except!('X-Frame-Options')
    @user = NewsletterUser.new
  end

  def create
    @user = NewsletterUser.new params[:newsletter_user]
    user_valid = @user.valid? ? true : false
    if verify_recaptcha(:model => @user, :message => "Oh! It's error with reCAPTCHA!", attribute: 'recaptcha') and user_valid
      RestClient.post("http://intranet.joshsoftware.com/opt_in", {email: params[:newsletter_user][:email]}, {:accept => :json})
      redirect_to newsletter_thankyou_path and return
    else
      render 'new'
    end
  end

  def thank_you

  end
end
