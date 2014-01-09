class StaticController < ApplicationController
  caches_page :portfolio, :team, :testimonials, :open_source
  before_action :load_tweet

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
    @keywords = "Josh Software portfolio, works we have accompolished, #{@projects.collect{|p| p[:title]}.join(", ")}"
    @description = "We work in various industry verticals like Insurance, Manufacturing, Media, eCommerce, Social Sector and Information Technology as long as the work is in Ruby."
  end

  def team
    @team_members = TEAM_MEMBERS.sort{|x,y| x[:index] <=> y[:index]}.select { |t| t[:display] }
    team =  @team_members.collect{|t| t[:name]}.join(", ")
    @keywords = "The JOSH People, the team, #{team}"
    @description = "The JOSH People, the team behind our success. #{team}"
  end

  def home
    @testimonials = TESTIMONIES.select{|e| e[:display]}
  end

  def testimonials
    @testimonies = TESTIMONIES.select{|e| e[:display]}
    @keywords = "Client testimonials"
    @description = "Nothing certifies our skill other than testimonials, here are the few testimonials from our clients"
  end

  def open_source
    @open_sources = OPEN_SOURCE.select{|e| e[:display]}
    @keywords = "Open source Friday, open source contribution, open source involvement"
    @description = "Every Friday evening, we do different things - working on an open-source gem, doing open-source projects, learning new things and having fun."
  end

  def ping
    render :text => 'Hello'
  end

  private

  def load_tweet
    @tweet = Tweet.latest_tweet('joshsoftware')
  end
end
