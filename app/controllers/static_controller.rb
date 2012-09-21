class StaticController < ApplicationController
  #caches_page :portfolio

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
  end

  def team
    @team_members = TEAM_MEMBERS.select { |t| t[:display] }
  end

  def home
    @testimonies = TESTIMONIES.select{|e| e[:display]}
  end

end
