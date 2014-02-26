class StaticController < ApplicationController
  before_action :load_tweet
  caches_page :portfolio, :team, :testimonials, :open_source

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
    @keywords = "Josh Software portfolio, works we have accompolished, #{@projects.collect{|p| p[:title]}.join(", ")}"
    @description = "We work in various industry verticals like Insurance, Manufacturing, Media, eCommerce, Social Sector and Information Technology as long as the work is in Ruby."
    @title = 'Portfolio | Josh Software Private Limited'
  end

  def team
    @team_members = TEAM_MEMBERS.sort{|x,y| x[:index] <=> y[:index]}.select { |t| t[:display] }
    team =  @team_members.collect{|t| t[:name]}.join(", ")
    @keywords = "The JOSH People, the team, #{team}"
    @description = "The JOSH People, the team behind our success. #{team}"
    @title = 'The JOSH People | Josh Software Private Limited'
  end

  def home
    @testimonials = TESTIMONIES.select{|e| e[:display]}
    @projects = PROJECTS.select { |p| p[:display] }
    @title = 'Ruby on Rails experts in India | Josh Software Private Limited'
  end

  def testimonials
    @testimonies = TESTIMONIES.select{|e| e[:display]}
    @keywords = "Client testimonials"
    @description = "Nothing certifies our skill other than testimonials, here are the few testimonials from our clients"
    @title = 'Testimonials | Josh Software Private Limited'
  end

  def open_source
    @open_sources = OPEN_SOURCE.select{|e| e[:display]}
    @keywords = "Open source Friday, open source contribution, open source involvement"
    @description = "Every Friday evening, we do different things - working on an open-source gem, doing open-source projects, learning new things and having fun."
    @title = 'Open source contribution and involvement | Josh Software Private Limited'
  end

  def ping
    render :text => 'Hello'
  end

  def contact_us
    @title = 'Contact Us | Josh Software Private Limited'
  end
  
  def about_us
    @title = 'About Us | Josh Software Private Limited'
  end

  def thankyou
    @title = 'Thank you | Josh Software Private Limited'
  end

  def news
    @title = 'Josh in News | Josh Software Private Limited'
    @news = NEWS.select{|n| n[:display]}
    @interviews = INTERVIEWS.select{|i| i[:display]}
    @articles = ARTICLES.select{|a| a[:display]}
  end

  def update_tweet
    # On local 
    #@@latest_tweet = Tweet.latest_tweet if request.remote_ip == request.env['REMOTE_ADDR'] 
    #
    #On production server
    @@latest_tweet = Tweet.latest_tweet if request.remote_ip == ENV['SERVER_ADDR']
    render :nothing => true
  end
end
