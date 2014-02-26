class ApplicationController < ActionController::Base
  protect_from_forgery
  @@latest_tweet = []

  private

  def load_tweet
    @tweet = @@latest_tweet || Tweet.latest_tweet
  end
end
