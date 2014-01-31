class ApplicationController < ActionController::Base
  protect_from_forgery
  
  private

  def load_tweet
    @tweet = ["sample tweet", "24 Jan 21:23 pm"] #Tweet.latest_tweet('joshsoftware')
  end
end
