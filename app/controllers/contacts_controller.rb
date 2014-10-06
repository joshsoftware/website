class ContactsController < ApplicationController
  before_action :load_tweet

  def new
    @title = 'Contact Us | Josh Software Private Limited'
    @contact = Contact.new
  end

  def create
    @title = 'Contact Us | Josh Software Private Limited'
    @contact = Contact.new params[:contact]
    #@contact.message = @contact.message[0..290]
    contact_valid = @contact.valid? ? true : false
    if verify_recaptcha(:model => @contact, :message => "Oh! It's error with reCAPTCHA!", attribute: 'recaptcha') and contact_valid
      @contact.notify
      redirect_to thankyou_path and return
      #send_mail and display thankyou page
    else
      render 'new'
    end
  end

end
