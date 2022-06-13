class BustupsController < ApplicationController
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
    @bustup = Bustup.find(params[:id])
  end

  def edit
    @bustup = Bustup.find(params[:id])
  end

  def update
    @bustup = Bustup.find(params[:id])
    if @bustup.update(bustup_params)
      redirect_to bustup_path(@bustup.id)
    else
      render :edit
    end
  end

  def destroy
    @bustup = Bustup.find(params[:id])
    @bustup.destroy
    redirect_to bustups_path
  end

  private
  def bustup_params
    params.require(:bustup).permit(:title,:image)
  end
end
