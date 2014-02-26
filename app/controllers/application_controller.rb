class ApplicationController < ActionController::Base
  protect_from_forgery
  @@latest_tweet = []

  private

  def load_tweet
    @@latest_tweet = Tweet.latest_tweet if @@latest_tweet.empty?
    @tweet = @@latest_tweet
  end
end
