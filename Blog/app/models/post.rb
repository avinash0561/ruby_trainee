class Post < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :images, presence: true

  belongs_to :user
  has_many :comments,dependent: :destroy
  has_many :likes,dependent: :destroy
  has_many_attached :images
end
