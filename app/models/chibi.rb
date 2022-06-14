class Chibi < ApplicationRecord
  has_one_attached :image
  validates :image, presence: true
  validates :title, presence: true
  belongs_to :user
end
