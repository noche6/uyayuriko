class BustupsController < ApplicationController
  before_action :set_item, only: [:edit, :show, :update, :destroy]
  def index
    @bustups = Bustup.all
  end

  def new
    @bustup = Bustup.new
  end

  def create
    @bustup = Bustup.new(bustup_params)
    if @bustup.save
      redirect_to bustups_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @bustup.update(bustup_params)
      redirect_to bustup_path(@bustup.id)
    else
      render :edit
    end
  end

  def destroy
    @bustup.destroy
    redirect_to bustups_path
  end

  private
  def bustup_params
    params.require(:bustup).permit(:title,:image)
  end

  def set_item
    @bustup = Bustup.find(params[:id])
  end
end
