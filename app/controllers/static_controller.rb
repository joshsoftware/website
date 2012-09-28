class StaticController < ApplicationController
  #caches_page :portfolio

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
  end

  def team
    @team_members = TEAM_MEMBERS.sort{|x,y| x[:index] <=> y[:index]}.select { |t| t[:display] } 
  end

  def home
    testimonies = TESTIMONIES.select{|e| e[:display]}
    size = testimonies.size
    index = rand(size)
    @testimony = testimonies[index]
  end

  def testimonials
    @testimonies = TESTIMONIES.select{|e| e[:display]}
  end

  def open_source
    @open_sources = OPEN_SOURCE.select{|e| e[:display]}
  end

end
