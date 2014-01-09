class Tweet
  def self.latest_tweet(name = 'joshsoftware')
    begin
      client = Twitter::REST::Client.new do |config|
        config.consumer_key    = ENV['TWITTER_CONSUMER_KEY']
        config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
      end
      #ids = client.user_timeline('joshsoftware').collect(&:id)
      #ids[0..5].collect{|id| client.status(id).full_text}
      id = client.user_timeline('joshsoftware').first.id
      [client.status(id).full_text, client.status(id).created_at.strftime('%-d %b %H:%M %P')]
    rescue
      []
    end
  end
end
