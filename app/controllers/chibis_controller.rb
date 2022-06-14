class ChibisController < ApplicationController
  before_action :set_item, only: [:edit, :show, :update, :destroy]
  def index
   @chibis = Chibi.all
  end
 
 def new
   @chibi= Chibi.new
 end
 
 def create
   @chibi = Chibi.new(chibi_params)
   if @chibi.save
     redirect_to chibis_path
   else
       render :new
   end
 end
 
 def show
 end
 
 def edit
 end
 
 def update
   if @chibi.update(chibi_params)
     redirect_to chibi_path(@chibi.id)
   else
     render :edit
   end
 end
 
 def destroy
   @chibi.destroy
   redirect_to chibis_path
 end
 
 private
   def chibi_params
     params.require(:chibi).permit(:title,:image)
   end
 
   def set_item
     @chibi = Chibi.find(params[:id])
   end

end
