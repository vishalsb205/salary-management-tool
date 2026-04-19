class Employee < ApplicationRecord
  attribute :full_name, :string

  validates :full_name, presence: true
  validates :email, presence: true
end
