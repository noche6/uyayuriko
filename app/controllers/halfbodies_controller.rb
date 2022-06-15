class HalfbodiesController < ApplicationController
  before_action :set_item, only: [:edit, :show, :update, :destroy]
  before_action :move_to_index, except: [:index, :show]

  def index
    @halfbodies = Halfbody.all
  end

  def new
    @halfbody = Halfbody.new
  end

  def create
    @halfbody = Halfbody.new(halfbody_params)
    if @halfbody.save
      redirect_to halfbodies_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @halfbody.update(halfbody_params)
      redirect_to halfbody_path(@halfbody.id)
    else
      render :edit
    end
  end

  def destroy
    @halfbody.destroy
    redirect_to halfbodies_path
  end

  private
  def halfbody_params
    params.require(:halfbody).permit(:title,:image)
  end

  def set_item
    @halfbody = Halfbody.find(params[:id])
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

end


