class StaticController < ApplicationController
  caches_page :portfolio, :team, :testimonials, :open_source

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
  end

  def team
    @team_members = TEAM_MEMBERS.sort{|x,y| x[:index] <=> y[:index]}.select { |t| t[:display] } 
  end

  def home
    @testimonials = TESTIMONIES.select{|e| e[:display]}
  end

  def testimonials
    @testimonies = TESTIMONIES.select{|e| e[:display]}
  end

  def open_source
    @open_sources = OPEN_SOURCE.select{|e| e[:display]}
  end

  def ping
    render :text => 'Hello'
  end

end
