class ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projectss
  end
end
