require "rails_helper"

RSpec.describe Analytics::CountrySalarySummary do
  describe ".call" do
    it "returns min, max, and average salary for a country" do
      Employee.create!(
        full_name: "Asha Sharma",
        email: "asha@example.com",
        salary: 50000,
        country: "India"
      )

      Employee.create!(
        full_name: "Ravi Kumar",
        email: "ravi@example.com",
        salary: 70000,
        country: "India"
      )

      Employee.create!(
        full_name: "John Smith",
        email: "john@example.com",
        salary: 90000,
        country: "USA"
      )

      result = described_class.call(country: "India")

      expect(result).to eq(
        {
          country: "India",
          min_salary: 50000,
          max_salary: 70000,
          avg_salary: 60000.0
        }
      )
    end
  end
end
