class FullbodiesController < ApplicationController
  before_action :set_item, only: [:edit, :show, :update, :destroy]
   def index
    @fullbodies = Fullbody.all
   end
  
  def new
    @fullbody = Fullbody.new
  end
  
  def create
    @fullbody = Fullbody.new(fullbody_params)
    if @fullbody.save
      redirect_to fullbodies_path
    else
        render :new
    end
  end
  
  def show
  end
  
  def edit
  end
  
  def update
    if @fullbody.update(fullbody_params)
      redirect_to halfbody_path(@fullbody.id)
    else
      render :edit
    end
  end
  
  def destroy
    @fullbody.destroy
    redirect_to fullbodies_path
  end
  
  private
    def halfbody_params
      params.require(:fullbody).permit(:title,:image)
    end
  
    def set_item
      @fullbody = Fullbody.find(params[:id])
    end
end
