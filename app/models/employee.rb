class Employee < ApplicationRecord
  validates :full_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :salary, presence: true
end
