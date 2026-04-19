class Employee < ApplicationRecord
  attribute :full_name, :string

  validates :full_name, presence: true
end
