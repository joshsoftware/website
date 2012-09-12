class StaticController < ApplicationController
  #caches_page :portfolio

  def portfolio
    @projects = PROJECTS.select { |p| p[:display] }
  end
end
