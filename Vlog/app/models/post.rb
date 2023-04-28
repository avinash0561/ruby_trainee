class Post < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :images, presence: true
  has_many_attached :images
  has_many :comments
  acts_as_votable
end
