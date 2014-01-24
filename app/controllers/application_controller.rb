class ApplicationController < ActionController::Base
  protect_from_forgery
  
  private

  def load_tweet
    @tweet = Tweet.latest_tweet('joshsoftware')
  end
end
