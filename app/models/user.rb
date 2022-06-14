class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  validates :password,            presence: true, format:{with:/351701/}
  validates :email,               presence: true, format:{with:/chanebu@gmail.com/}

  has_many :chibis
  has_many :bustups
  has_many :halfbodies
  has_many :fullbodies
end
