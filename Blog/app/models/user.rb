class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :lockable

         has_many :posts
         has_many :comments
         has_many :likes
         has_one_attached :avatar

         validates :email ,presence: true
         validate :email_format

         validates :role ,presence: true
         validates :avatar ,presence: true
         validates :name, presence: true

         validate :password_lower_case
         validate :password_uppercase
         validate :password_special_char
         validate :password_contains_number
       
         def password_uppercase
           return if !!password.match(/\p{Upper}/)
           errors.add :password, ' must contain at least 1 uppercase '
         end
       
         def password_lower_case
           return if !!password.match(/\p{Lower}/)
           errors.add :password, ' must contain at least 1 lowercase '
         end
       
         def password_special_char
           special = "?<>',?[]}{=-)(*@&^%$#`~{}!"
           regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
           return if password =~ regex
           errors.add :password, ' must contain special character'
         end
       
         def password_contains_number
           return if password.count("0-9") > 0
           errors.add :password, ' must contain at least one number'
         end
         
         def email_format
          test_string = $1 if email =~ /\<([^\>]+)\>/
          test_string = email.split(' ').last unless test_string
          return if test_string =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
          errors.add(:email, "not a valid email")
        end        

end
