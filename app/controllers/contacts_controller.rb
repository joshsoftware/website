class ContactsController < ApplicationController
  before_action :load_tweet

  def new
    @title = 'Contact Us | Josh Software Private Limited'
    @contact = Contact.new
  end

  def create
    geokit = Geokit::Geocoders::IpGeocoder.geocode(request.remote_ip)
    ip_location = { ip: request.remote_ip, location: "#{geokit.city}, #{geokit.state}, #{geokit.country}" }
    params[:contact].merge! ip_location 
    @title = 'Contact Us | Josh Software Private Limited'
    @contact = Contact.new params[:contact]
    #@contact.message = @contact.message[0..290]
    if @contact.valid?
      @contact.notify
      redirect_to thankyou_path and return
      #send_mail and display thankyou page
    else
      render 'new'
    end
  end
end
