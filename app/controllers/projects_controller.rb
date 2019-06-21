class ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projectss
  end

  # GET /projects
  def index
    @projects = Project.all
    render json: @projects.to_json
  end

  # GET /projects/:id
  def show
    @project = Project.find(params[:id])
    render json: @project.to_json
  end
end
